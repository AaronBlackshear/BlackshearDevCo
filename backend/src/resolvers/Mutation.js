const Mutation = {
  post: (parent, args, ctx, info) => {
    return ctx.prisma.createLink({
      url: args.url,
      description: args.description,
    })
  },
};

module.exports = {
  Mutation,
};
