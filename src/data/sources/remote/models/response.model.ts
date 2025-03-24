export interface ResponseApi<T> {
  success:    boolean;
  path:       string;
  data:       T | null;
  timestamp:  Date;
  statusCode: number;
  message:    string;
}