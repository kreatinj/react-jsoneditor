import { JSONValue, Mode } from '@jsoneditor/react';
import dynamic from 'next/dynamic';
import { useState } from 'react';

const JsonEditor = dynamic(
  () => import('@jsoneditor/react').then((mod) => mod.JsonEditor),
  { ssr: false },
);

type Content = {
  json: JSONValue,
  text?: undefined,
} | {
  json?: undefined,
  text: string,
};

export default function Web() {
  const [mode, setMode] = useState<Mode>('tree');
  const [value, setValue] = useState<Content>({ json: undefined, text: '' });

  return (
    <div>
      <JsonEditor
        mode={mode}
        content={value}
        onChange={(newContent) => {
          console.log(newContent);
          setValue(newContent);
        }}
        onChangeMode={(newMode) => { setMode(newMode); }}
      />
    </div>
  );
}
