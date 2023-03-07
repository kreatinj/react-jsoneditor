import {
  JSONEditor,
  JSONEditorPropsOptional,
  Mode as ModeEnum,
} from 'vanilla-jsoneditor';
import {
  FC, useEffect, useMemo, useRef, useState, 
} from 'react';
import { Overwrite } from 'utility-types';

import { Mode } from './models';

type Props =
  Overwrite<
  JSONEditorPropsOptional,
  { mode?: Mode }
  >;

const JsonEditor: FC<Props> = ({ ..._props }) => {
  const { mode: _mode, ...restProps } = _props;

  const mode = useMemo(
    () => _mode === undefined ? undefined :
      {
        text: ModeEnum.text,
        tree: ModeEnum.tree,
        table: ModeEnum.table,
      }[_mode],
    [_mode],
  );

  const props = useMemo(() => ({ mode, ...restProps }), [mode, restProps]);

  const [container, setContainer] = useState<HTMLElement | null>(null);
  const refEditor = useRef<JSONEditor | null>(null);

  useEffect(() => {
    if (container !== null) {
      refEditor.current = new JSONEditor({
        target: container,
        props: {},
      });
    }

    return () => {
      if (refEditor.current !== null) {
        refEditor.current.destroy();
        refEditor.current = null;
      }
    };
  }, [container]);

  useEffect(() => {
    if (refEditor.current !== null) {
      refEditor.current.updateProps(props);
    }
  }, [props]);

  return <div ref={(node) => setContainer(node)}></div>;
};

export default JsonEditor;
