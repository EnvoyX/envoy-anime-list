import Link from "next/link";
import { authUserSession } from "@/libs/auth-libs";

const UserActionButton = async () => {
  const user = await authUserSession();
  const actionLabel = user ? "Sign Out" : "Sign in";
  const actionURL = user ? "/api/auth/signout" : "/api/auth/signin";
  console.log(user);
  return (
    <div className="flex flex-col">
      <p className="mb-2 self-center text-color-primary">
        {user && `Welcome, ${user.name}`}
      </p>
      <div className="flex justify-between items-center">
        {user ? (
          <Link
            href={`/users/dashboard`}
            className="bg-color-dark text-color-accent rounded-lg py-1 px-6 hover:border hover:scale-105 transition-all text-center"
          >
            Dashboard
          </Link>
        ) : null}
        <div className="bg-color-dark text-color-accent rounded-lg py-1 px-6 hover:border hover:scale-105 transition-all text-center">
          <Link href={actionURL} className="">
            {actionLabel}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UserActionButton;
