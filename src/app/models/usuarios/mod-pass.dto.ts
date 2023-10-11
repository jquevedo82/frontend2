export class ModPassDto {
  username: string;

  password: string;

  currentPassword: string;

  constructor(
    username: string,
    currentPassword: string,
    password: string

  ) {
    this.username = username;
    this.password = password;
    this.currentPassword = currentPassword;
  }
}
