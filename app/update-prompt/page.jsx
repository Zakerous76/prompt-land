"use client";
import { useEffect, useState, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Form from "@components/Form";

// remove edit and delete button from home page promptCard
// gotta do my daily commits
const EditPrompt = () => {
  // These state must be defined before starting to work on the Form componment
  const [post, setPost] = useState({
    prompt: "",
    tag: "",
  });
  const [submitting, setSubmitting] = useState(false);

  const router = useRouter();
  const searchParams = useSearchParams();
  const promptId = searchParams.get("id");

  useEffect(() => {
    const getPromptDetails = async () => {
      const response = await fetch(`/api/prompt/${promptId}`);
      const data = await response.json();
      setPost({
        prompt: data.prompt,
        tag: data.tag,
      });
    };
    if (promptId) {
      getPromptDetails();
    }
  }, [promptId]);

  const updatePrompt = async (e) => {
    // prevent reloadıng
    e.preventDefault();
    // to be used as a loader later on
    setSubmitting(true);

    if (!promptId) {
      return alert("Missing prompt ID (Prompt ID not found)");
    }

    try {
      const response = await fetch(`/api/prompt/${promptId}`, {
        method: "PATCH",
        body: JSON.stringify({
          prompt: post.prompt,
          tag: post.tag,
        }),
      });

      if (response.ok) {
        router.replace("/"); // Refresh the feed
      } else {
        // Show alert if the response status is not ok
        const errorData = await response.json();
        alert(`Error: ${errorData.message || "Something went wrong!"}`);
      }
    } catch (error) {
      console.log(error);
      alert(`Error: ${error.message || "Something went wrong!"}`);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Form
        type="Edit"
        post={post}
        setPost={setPost}
        submitting={submitting}
        handleSubmitting={updatePrompt}
      />
    </Suspense>
  );
};

export default EditPrompt;
