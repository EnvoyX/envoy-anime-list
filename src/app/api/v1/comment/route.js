import prisma from "@/libs/prisma";
export async function POST(request) {
  const { mal_id, user_email, comment, username, item_title } =
    await request.json();
  const data = { mal_id, user_email, comment, username, item_title };

  const createComment = await prisma.comment.create({ data });

  if (!createComment) return Response.json({ status: 500, isCreated: false });
  return Response.json({ status: 200, isCreated: true });
}
