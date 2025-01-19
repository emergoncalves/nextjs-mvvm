import type { PluginAPI } from "tailwindcss/types/config";

declare module "tailwindcss-animate" {
  const plugin: { handler: PluginAPI };
  export default plugin;
}

type RecursiveKeyValuePair<K extends PropertyKey = string, V = string> = {
  [key in K]: V | RecursiveKeyValuePair<K, V>;
};

type ValueType =
  | "any"
  | "color"
  | "url"
  | "image"
  | "length"
  | "percentage"
  | "position"
  | "lookup"
  | "generic-name"
  | "family-name"
  | "number"
  | "line-width"
  | "absolute-size"
  | "relative-size"
  | "shadow";

interface TailwindPluginUtils extends PluginAPI {
  addBase: (base: Record<string, unknown>) => void;
  theme: (path: string) => unknown;
  matchUtilities: (
    utilities: Record<string, (value: string) => Record<string, string>>,
    options: {
      values: Record<string, string>;
      type: ValueType | ValueType[];
      respectPrefix?: boolean;
      respectImportant?: boolean;
      supportsNegativeValues?: boolean;
    }
  ) => void;
}
