import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin User",
    email: "admin@dhakatopi.com",
    password: bcrypt.hashSync("kathmandu", 10),
    isAdmin: true,
  },
  {
    name: "John Doe",
    email: "john@dhakatopi.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Sarsoti Subedi",
    email: "sarsoti@dhakatopi.com",
    password: bcrypt.hashSync("123456", 10),
  },
];

export default users;