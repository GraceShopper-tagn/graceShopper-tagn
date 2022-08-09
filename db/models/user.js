// grab our db client connection to use with our adapters
const prisma = require("../prisma");
const client = require("../client");

async function getAllUsers() {
  /* this adapter should fetch a list of users from your db */
}

const createUser = async (userObj) => {
  const user = await prisma.users.create({ data: userObj });
  return user;
};

module.exports = {
  // add your database adapter fns here
  getAllUsers,
  createUser,
};
