"use client";

import { useState } from "react";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";

const PromptCard = ({ prompt, handleTagClick, handleEdit, handleDelete }) => {
  const [copied, setCopied] = useState("");
  const router = useRouter();
  const { data: session } = useSession();

  const handleProfileClick = () => {
    if (prompt.creator._id === session?.user.id) return router.push("/profile");

    router.push(
      `/profile/${prompt.creator._id}?name=${prompt.creator.username}`
    );
  };

  const handleCopy = () => {
    setCopied(prompt.prompt);
    navigator.clipboard.writeText(prompt.prompt);
    // after 3 secs, the copied state is reset, which will reset the copy icon
    setTimeout(() => setCopied(""), 3000);
  };
  return (
    <div className="prompt_card">
      <div className="flex-1 flex justify-between items-start gap-5">
        <div
          className="flex-1 flex justify-start items-center gap-3 cursor-pointer"
          onClick={handleProfileClick}
        >
          <Image
            src={prompt.creator.image}
            alt="user_image"
            width={40}
            height={40}
            className=""
          />

          <div className="flex flex-col">
            <h3 className="font-satoshi font-semibold text-gray-900">
              {prompt.creator.username}
            </h3>
            <p className="font-inter text-sm text-gray-500">
              {prompt.creator.email}
            </p>
          </div>
        </div>
        <div className="copy_btn transition-all" onClick={handleCopy}>
          <Image
            src={
              copied === prompt.prompt
                ? "/assets/icons/tick.svg"
                : "/assets/icons/copy.svg"
            }
            width={12}
            height={12}
            alt="copy button"
          />
        </div>
      </div>
      <div>
        <p className="font-satoshi text-sm text-gray-700 my-7 text-justify">
          {prompt.prompt}
        </p>

        {prompt.tag.split(" ").map((tag, index) => (
          <p
            key={index}
            className="font-inter text-sm blue_gradient cursor-pointer"
            onClick={() => handleTagClick && handleTagClick(tag)}
          >
            {tag}
          </p>
        ))}
        {session?.user.id === prompt.creator._id && (
          <div className="mt-5 flex-center gap-4 border-t border-gray-100 pt-3">
            <p
              className="font-inter text-sm green_gradient cursor-pointer hover:font-black"
              onClick={handleEdit}
            >
              Edit
            </p>
            <p
              className="font-inter text-sm orange_gradient cursor-pointer hover:font-black"
              onClick={handleDelete}
            >
              delete
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PromptCard;
