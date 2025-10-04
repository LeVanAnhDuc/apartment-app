export interface ResponsePattern<T> {
  data: T;
  message: string;
  status: number;
  reasonStatusCode: string;
}
