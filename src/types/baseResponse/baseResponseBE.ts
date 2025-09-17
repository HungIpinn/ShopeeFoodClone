// Định nghĩa base
export interface BaseResponseBE<T> {
  code: number;
  errormessage?: string;
  data: T;
}
