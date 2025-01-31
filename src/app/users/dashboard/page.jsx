import { authUserSession } from "@/libs/auth-libs";
import Image from "next/image";

const Page = async () => {
  const user = await authUserSession();
  return (
    <>
      <div className="flex justify-center">
        <div className="text-center text-color-primary mt-2 bg-color-secondary p-6 rounded-lg">
          <h3 className="text-2xl">Dashboard</h3>
          <h3 className="mt-2">Hello, {user.name}</h3>
        </div>
      </div>
      <div className="flex justify-center mt-5">
        <div className="bg-color-secondary rounded-lg flex flex-col gap-6 items-center p-6">
          <Image
            src={user.image}
            alt="user image"
            width={250}
            height={250}
            className="rounded-full"
          ></Image>
          <div className="bg-color-dark rounded-lg py-5 px-2 text-color-primary">
            <h3>Email: {user.email}</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
