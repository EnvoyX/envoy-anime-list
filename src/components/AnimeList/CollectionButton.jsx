"use client";

import { useState } from "react";

export default function CollectionButton({
  mal_id,
  user_email,
  item_image,
  item_title,
}) {
  const [isCreated, setIsCreated] = useState(false);
  const handleCollection = async (e) => {
    e.preventDefault();
    const data = { mal_id, user_email, item_image, item_title };
    const response = await fetch("/api/v1/collection", {
      method: "POST",
      body: JSON.stringify(data),
    });
    const collection = await response.json();
    if (collection.status === 200) {
      setIsCreated(collection.isCreated);
    }
  };
  return (
    <section className="mb-3 mt-2">
      {isCreated ? (
        <p className="text-lg text-color-dark rounded-lg px-2 py-1 bg-color-primary max-w-64 text-center">
          Added to your collection
        </p>
      ) : (
        <button
          className="px-2 py-1 bg-color-accent rounded-lg hover:scale-105 hover:border hover:border-color-primary transition-all"
          onClick={handleCollection}
        >
          Add to Collection
        </button>
      )}
    </section>
  );
}
