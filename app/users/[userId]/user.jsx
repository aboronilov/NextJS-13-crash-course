import Image from "next/image";
import React from "react";

const User = ({ user }) => {
  const { name, imageURL, email } = user;
  return (
    <section className="m-4 py-4">
      <div className="center">
        <div className="relative h-40 w-40 rounded-full">
          <Image
            src={imageURL}
            alt={name ?? "profile image"}
            className="inline-block rounded-full"
            fill
            style={{objectFit:"cover"}}
          />
        </div>
        <h1 className="text-xl font-bold">{name}</h1>
        <p className="text-sm text-stone-400">{email}</p>
      </div>
    </section>
  );
};

export default User;
