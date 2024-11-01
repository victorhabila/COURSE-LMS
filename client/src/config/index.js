export const signUpFormControls = [
  {
    name: "userName",
    lable: " User Name",
    placeholder: "Enter your user name",
    type: "text",
    componentType: "input",
  },

  {
    name: "userEmail",
    lable: " User Email",
    placeholder: "Enter your user email",
    type: "email",
    componentType: "input",
  },

  {
    name: "password",
    lable: " password",
    placeholder: "Enter your password",
    type: "text",
    componentType: "input",
  },
];

export const signInFormControls = [
  {
    name: "userEmail",
    lable: " User Email",
    placeholder: "Enter your user email",
    type: "email",
    componentType: "input",
  },

  {
    name: "password",
    lable: " password",
    placeholder: "Enter your password",
    type: "text",
    componentType: "input",
  },
];

export const initialSignInFormData = {
  userEmail: "",
  password: "",
};

export const initialSignUpFormData = {
  userName: "",
  userEmail: "",
  password: "",
};
