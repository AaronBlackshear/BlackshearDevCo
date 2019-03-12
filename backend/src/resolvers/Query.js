const Query = {
  info: () => `This is the info endpoint`,
  feed: () => (parent, args, ctx, info) => {
    return ctx.prisma.links();
  },
};

const Link = {
  id: (parent) => parent.id,
  description: (parent) => parent.description,
  url: (parent) => parent.url,
}

module.exports = {
  Query,
  Link,
};
