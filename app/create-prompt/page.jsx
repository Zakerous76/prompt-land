"use client";
import { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Form from "@components/Form";

const CreatePrompt = () => {
  const [post, setPost] = useState({
    prompt: "",
    tag: "",
  });

  const [submitting, setSubmitting] = useState(false);

  const CreatePrompt = async (e) => {
    // fill later
  };

  return (
    <Form
      type="Create"
      post={post}
      setPost={setPost}
      submitting={submitting}
      handleSubmitting={CreatePrompt}
      s
    />
  );
};

export default CreatePrompt;
