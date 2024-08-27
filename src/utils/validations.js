const formInfo = [
  {
    htmlFor: "login",
    labelTitle: "Login",
    id: "login",
    type: "text",
    name: "login",
    validation: {
      required: "The login field must not be empty",
    },
  },
  {
    htmlFor: "email",
    labelTitle: "Email",
    id: "email",
    type: "email",
    name: "email",
    validation: {
      required: "The email field must not be empty.",
      pattern: {
        value: /^\S+@\S+\.\S+$/,
        message: "Please enter a valid email",
      },
    },
  },
  {
    htmlFor: "password",
    labelTitle: "Password",
    id: "password",
    type: "password",
    name: "password",
    validation: {
      required: "The password field must not be empty.",
      minLength: {
        value: 6,
        message: "The password must be longer than 6 characters",
      },
    },
  },
];

export default formInfo;
