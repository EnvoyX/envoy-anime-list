import HeaderCollection from "@/components/Dashboard/HeaderCollection";
import { authUserSession } from "@/libs/auth-libs";
import prisma from "@/libs/prisma";
import Link from "next/link";

const Page = async () => {
  const user = await authUserSession();
  const comments = await prisma.comment.findMany({
    where: { user_email: user?.email },
  });
  return (
    <section className="mt-2 p-6 w-full">
      <HeaderCollection title={"My Comments"}></HeaderCollection>
      <div className="grid grid-cols-1 md:grid-cols-4 py-2 gap-4">
        {comments &&
          comments.map((item) => {
            return (
              <Link
                key={item.id}
                href={`/anime/${item.mal_id}`}
                className="bg-color-secondary text-color-primary p-4 rounded-lg hover:border hover:scale-105 hover:bg-color-accent transition-all hover:text-color-secondary"
              >
                <p className="italic">{item.item_title}</p>
                <p className="text-sm">{item.comment}</p>
              </Link>
            );
          })}
      </div>
    </section>
  );
};

export default Page;
