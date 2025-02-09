"use client";
import { ArrowSquareLeft } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";

export default function HeaderCollection({ title }) {
  const route = useRouter();

  const handleBack = (e) => {
    e.preventDefault();
    route.back();
  };

  return (
    <div className="flex justify-between items-center">
      <button className="text-color-primary" onClick={handleBack}>
        <ArrowSquareLeft size={32} />
      </button>
      <h1 className="text-2xl text-color-primary font-bold text-center">
        {title}
      </h1>
    </div>
  );
}
