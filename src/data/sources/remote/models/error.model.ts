export interface ErrorResponse {
  success:    boolean;
  path:       string;
  data:       ErrorMessageResponse;
  timestamp:  Date;
  statusCode: number;
  message:    string;
}



export interface ErrorMessageResponse {
  response: {
    message: string
    error: string
    statusCode: number
  }
}