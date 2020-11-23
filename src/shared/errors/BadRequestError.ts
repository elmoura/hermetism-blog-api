export class BadRequestError {
  public readonly message: { message: string };

  public readonly statusCode: number;

  constructor(message: string) {
    this.message = { message };
    this.statusCode = 400
  }
}