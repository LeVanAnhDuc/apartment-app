interface ResponsePattern<T> {
  data: T;
  message: string;
  status: number;
  reasonStatusCode: string;
}

type SetState<T> = React.Dispatch<React.SetStateAction<T>>;
type Nullable<T> = T | null;
type UnionEnum<T> = `${T}`;
