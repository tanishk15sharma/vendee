import { v4 as uuid } from "uuid";
import bcyrpt from "bcryptjs";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * Every user will have cart (Quantity of all Products in Cart is set to 1 by default), wishList by default
 * */

export const users = [
  {
    _id: uuid(),
    firstName: "John",
    lastName: "Doe",
    email: "johndoe@gmail.com",
    password: bcyrpt.hashSync("johnDoe123", 5),
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Tanishk",
    lastName: "Sharma",
    address: {
      name: "Tanishk Sharma",
      address: "589/5 Vijay Nagar near BD tower",
      pincode: "950021",
      city: "Indore",
      state: "MP",
      number: "7222995222",
      option: "Home",
      id: "537qsd88a80-cdba-44b19-b287-6dnbad",
      edit: false,
    },
    email: "Tanishk@gmail.com",
    password: bcyrpt.hashSync("Tanishk123", 5),
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
