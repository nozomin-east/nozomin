export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

export type FirstArgument<T> = T extends (arg: infer A, ...rest: any[]) => any ? A : never;
