"use client";
import { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Form from "@components/Form";

const CreatePrompt = () => {
  // These state must be defined before starting to work on the Form componment
  const [post, setPost] = useState({
    prompt: "",
    tag: "",
  });
  const [submitting, setSubmitting] = useState(false);

  const router = useRouter();
  const { data: session } = useSession();

  const createPrompt = async (e) => {
    // fill later
    // prevent reloadıng
    e.preventDefault();
    // to be used as a loader later on
    setSubmitting(true);

    try {
      const response = await fetch("/api/prompt/new", {
        method: "POST",
        body: JSON.stringify({
          prompt: post.prompt,
          userId: session?.user.id,
          tag: post.tag,
        }),
      });

      if (response.ok) {
        router.push("/");
      }
    } catch (error) {
      console.log(error);
      console.log(response);
    } finally {
      // either way do this:
      setSubmitting(false);
    }
  };

  return (
    <Form
      type="Create"
      post={post}
      setPost={setPost}
      submitting={submitting}
      handleSubmitting={createPrompt}
      s
    />
  );
};

export default CreatePrompt;
