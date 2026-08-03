



export type RegistrationUser = {
  gender: "Male" | "Female";
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  confirmpassword: string;
};

export type RegistrationTestCase = {
    title: string;
    tags: string[];
    emailMode?: "unique";
    data: RegistrationUser;
    expected: {
        type: "success" | "error";
        contains: string | string[];
    };
};

export type RegistrationDataFile = {
    registrationTests: RegistrationTestCase[];
};