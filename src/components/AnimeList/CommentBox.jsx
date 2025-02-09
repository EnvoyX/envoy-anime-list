import prisma from "@/libs/prisma";

const CommentBox = async ({ mal_id }) => {
  const comments = await prisma.comment.findMany({ where: { mal_id } });
  //   console.log(comments);
  return (
    <div className="grid grid-cols-4 gap-4">
      {comments.map((item) => {
        return (
          <div
            key={item.id}
            className="text-color-primary bg-color-dark rounded-lg flex flex-col p-2"
          >
            <p className="font-bold mb-2">{item.username}</p>
            <p className="italic">{item.comment}</p>
          </div>
        );
      })}
    </div>
  );
};

export default CommentBox;
