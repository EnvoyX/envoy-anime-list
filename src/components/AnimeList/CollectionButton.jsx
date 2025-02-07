"use client";

export default function CollectionButton({ mal_id, user_email }) {
  const handleCollection = async (e) => {
    e.preventDefault();
  };

  return (
    <button
      className="px-2 py-1 bg-color-accent rounded-lg mb-3 mt-2 hover:scale-105 hover:border hover:border-color-primary transition-all"
      onClick={handleCollection}
    >
      Add to Collection
    </button>
  );
}
