declare module '*.scss' {
  const styleObject: Record<string, string>;

  export default styleObject;
}

declare module '*.jpg' {
  const source: string;

  export default source;
}

declare module '*.png' {
  const source: string;

  export default source;
}

declare module '*.svg' {
  const source: string;

  export default source;
}

declare module '*.json' {
  const value: any;
}
