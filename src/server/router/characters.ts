import { Context, createRouter } from "./context";
import { z } from "zod";

export const charactersRouter = createRouter()
  .query("getCharacters", {
    async resolve({ ctx }: { ctx: Context }) {
      return await ctx.prisma.character.findMany();
    },
  })
  .mutation("create", {
    input: z.object({
      characterName: z.string(),
      serverName: z.string(),
    }),
    async resolve({ ctx, input }) {
      let server = await ctx.prisma.server.findFirst({
        where: { name: input.serverName },
      });
      if (!server) {
        server = await ctx.prisma.server.create({
          data: { name: input.serverName },
        });
      }
      const character = await ctx.prisma.character.create({
        data: { name: input.characterName, serverId: server.id },
      });
      return character;
    },
  });
