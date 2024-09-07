"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import Profile from "@components/Profile";

const MyProfile = () => {
  const router = useRouter();
  const handleEdit = (prompt) => {
    router.push(`/update-prompt?id=${prompt._id}`);
  };
  const handleDelete = (prompt) => {
    router.push(`/delete-prompt?id=${prompt._id}`);
  };
  const [prompts, setPrompts] = useState([]);
  const { data: session } = useSession();

  useEffect(() => {
    const fetchPrompts = async () => {
      const response = await fetch(`/api/users/${session?.user.id}/posts`);
      const data = await response.json();
      setPrompts(data);
    };
    // fetch only if a user is logged in
    if (session?.user.id) {
      fetchPrompts();
    }
  }, []);

  return (
    <Profile
      name="My"
      desc="Welcome to you personalized profile page"
      data={prompts}
      handleEdit={handleEdit}
      handleDelete={handleDelete}
    />
  );
};

export default MyProfile;
