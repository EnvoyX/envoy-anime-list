import Link from "next/link";

export default function Header({ title, linkHref, linkTitle }) {
  return (
    <div className="flex justify-between items-center p-4 mb-4 ">
      <h1 className="md:text-2xl text-md font-bold text-color-dark px-6 py-2 rounded-lg bg-color-accent ">
        {title}
      </h1>
      {linkHref && linkTitle ? (
        <Link
          href={linkHref}
          className="md:text-xl text-xs no-underline px-6 py-2 rounded-lg text-color-dark bg-color-accent hover:text-color-accent hover:bg-color-secondary transition-all"
        >
          {linkTitle}
        </Link>
      ) : null}
    </div>
  );
}
