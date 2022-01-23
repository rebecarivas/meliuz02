export interface IUser {
    name?: string;
    email: string;
    password: string;
  }
export interface IConfirmationText {
  result: boolean; //true is 200 | false is =/= 200
  confirmationText: string;
}
  export interface IAuth {
  auth: {
    token: string;
    user: {
      name: string;
      email: string;
      id: number;
    };
  };
}