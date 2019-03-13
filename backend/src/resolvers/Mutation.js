const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const getUserId = require('../utils/getUserId');

const post = (parent, args, ctx, info) => {
  const userId = getUserId(ctx)
  return ctx.prisma.createLink({
    url: args.url,
    description: args.description,
    postedBy: { connect: { id: userId } },
  })
};

const signup = async (parent, args, ctx, info) => {
  // Hash the user's password
  const password = await bcrypt.hash(args.password, 10);
  // Create the user in the db
  const user = await ctx.prisma.createUser({ ...args, password });
  // Create a JWT
  const token = jwt.sign({ userId: user.id, }, process.env.APP_SECRET);
  // Return token and user
  return {
    token,
    user
  }
}

const login = async (parent, args, ctx, info) => {
  // Query the db for the user
  const user = await ctx.prisma.user({ email: args.email });
  if (!user) {
    throw new Error('No user found with that email');
  }
  // Validate the users password
  const valid = await bcrypt.compare(args.password, user.password);
  if (!valid) {
    throw new Error('Invalid password!');
  }
  // Create a JWT
  const token = jwt.sign({ userId: user.id }, process.env.APP_SECRET);
  // Return the token and user
  return {
    token,
    user
  }
}

module.exports = {
  post,
  signup,
  login,
};
