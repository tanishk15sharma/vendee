import {
  EMAIL_REGEX,
  PASSWORD_LOWERCASE_REGEX,
  PASSWORD_UPPERCASE_REGEX,
  PASSWORD_NUMBER_REGEX,
  MOBILE_NUMBER_REGEX,
} from "./regexp";

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

const validSignUp = (
  { firstName, lastName, mobile, email, password, confirmPassword, terms },
  initialErrors
) => {
  if (!firstName)
    return {
      isValid: false,
      errors: { ...initialErrors, firstName: "First Name is Required" },
    };
  if (!lastName)
    return {
      isValid: false,
      errors: { ...initialErrors, lastName: "Last Name is Required" },
    };
  if (!mobile)
    return {
      isValid: false,
      errors: { ...initialErrors, mobile: "Mobile Number is Required" },
    };
  if (!email)
    return {
      isValid: false,
      errors: {
        ...initialErrors,
        email: "Email is Required",
      },
    };
  if (!EMAIL_REGEX.test(email))
    return {
      isValid: false,
      errors: { ...initialErrors, email: "Enter a valid Email Address" },
    };
  if (!MOBILE_NUMBER_REGEX.test(mobile))
    return {
      isValid: false,
      errors: {
        ...initialErrors,
        mobile: "Mobile Number should only contain Numbers",
      },
    };
  if (!PASSWORD_UPPERCASE_REGEX.test(password))
    return {
      isValid: false,
      errors: {
        ...initialErrors,
        password: "Password must contain atleast 1 Uppercase Letter",
      },
    };
  if (!PASSWORD_LOWERCASE_REGEX.test(password))
    return {
      isValid: false,
      errors: {
        ...initialErrors,
        password: "Password must contain atleast 1 Lowercase Letter",
      },
    };
  if (!PASSWORD_NUMBER_REGEX.test(password))
    return {
      isValid: false,
      errors: {
        ...initialErrors,
        password: "Password must contain atleast 1 number ",
      },
    };
  if (password !== confirmPassword)
    return {
      isValid: false,
      errors: {
        ...initialErrors,
        confirmPassword: "Password does not match",
      },
    };
  if (!terms)
    return {
      isValid: false,
      errors: {
        ...initialErrors,
        terms: "Accept Terms & Conditions",
      },
    };
  return {
    isValid: true,
    errors: {
      firstName: "",
      lastName: "",
      mobile: "",
      password: "",
      confirmPassword: "",
      email: "",
    },
  };
};

export { validLogin, validSignUp };
