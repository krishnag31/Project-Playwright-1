export type Loginuser = {
    UserEmail: string;
    UserPassword: string;  
};

export type LoginTestCase = {
  title: string;
  tags?:string[];
  uservalidatamode?: boolean;
  data: Loginuser;
  expected: {
     type: "success" | "error"; 
     contains: string | string[] };
};

export type LoginDataFile = {
    LoginTest: LoginTestCase[];
};