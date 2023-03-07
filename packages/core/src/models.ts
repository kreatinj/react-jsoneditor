// import { Overwrite } from 'utility-types';
import {
  // CaretType as CaretTypeEnum,
  Mode as ModeEnum,
  JSONValue,
  // SearchField as SearchFieldEnum,
  // SelectionType as SelectionTypeEnum,
  // SortDirection as SortDirectionEnum,
  // ValidationError,
  // ValidationSeverity as ValidationSeverityEnum,
} from 'vanilla-jsoneditor';

export type Mode = keyof typeof ModeEnum;

// export type SelectionType = keyof typeof SelectionTypeEnum;

// export type CaretType = keyof typeof CaretTypeEnum;

// export type ValidationSeverity = keyof typeof ValidationSeverityEnum;

// export type SearchField = keyof typeof SearchFieldEnum;

// export type SortDirection = keyof typeof SortDirectionEnum;

// export type Validator =
//   (json: JSONValue) => Array<Overwrite<ValidationError, { severity: ValidationSeverity}>>;

// export type OnChangeMode = (mode: Mode) => void;

export type { JSONValue };
