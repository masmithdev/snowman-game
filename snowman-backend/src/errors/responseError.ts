type ResponseErrorStatus = 400 /* Bad Request */ | 404 /* Not Found */;

export class ResponseError extends Error {
  public status: ResponseErrorStatus;
  constructor(status: ResponseErrorStatus, message: string) {
    super(message);
    this.status = status;
  }
}
