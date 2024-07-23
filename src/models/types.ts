export type Maybe<T> = T | null | undefined;

export type User = {
  id: string;
  name?: string | null;
  email: string;
  books?: string[];
};
