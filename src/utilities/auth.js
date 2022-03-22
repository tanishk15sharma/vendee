const validLogin = ({ email, password }, initialErrors) => {
  if (!email)
    return {
      inValid: false,
      errors: {
        ...initialErrors,
        email: "Email is Required!",
      },
    };
  if (!password)
    return {
      isValid: false,
      errors: {
        ...initialErrors,
        password: "Password is Required",
      },
    };
  return {
    isValid: true,
    errors: {
      email: "",
      password: "",
    },
  };
};

export { validLogin };
