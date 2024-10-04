import Link from "next/link";
import React from "react";

const Form = ({ type, post, setPost, submitting, handleSubmitting }) => {
  return (
    <section className="w-full max-w-full md:max-w-screen-md flex-start flex-col">
      <h1 className="head_text text-left blue_gradient">{type} Post</h1>
      <p className="desc text-left max-w-md">
        {type} and Share your amazing prompts with the wide wide world
      </p>

      <form
        onSubmit={handleSubmitting}
        className="mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism"
      >
        <label>
          <span className="font-satoshi font-semibold text-base text-gray-700">
            Your AI Prompt
          </span>

          <textarea
            value={post.prompt}
            onChange={(e) => setPost({ ...post, prompt: e.target.value })}
            placeholder="Write your prompt here"
            required
            className="form_textarea"
          />
        </label>
        <label>
          <span className="font-satoshi font-semibold text-base text-gray-700">
            Tag <span className="font-normal"></span>
          </span>

          <textarea
            value={post.tag}
            onChange={(e) => setPost({ ...post, tag: e.target.value })}
            placeholder="tag"
            required
            className="form_input"
          />
        </label>
        <div className="flex-end mx-3 mb-5 gap-5">
          <Link
            href="/"
            className="text-gray-500 px-5 py-1.5 rounded-full border-0 hover:font-bold transition-all"
          >
            Cancel
          </Link>
          <button
            type="submit"
            disabled={submitting} // :bool
            className="hover:font-bold transition-all ease-in-out px-5 py-1.5 rounded-full bg-primary-orange text-white "
          >
            {submitting ? `${type}...` : type}
          </button>
        </div>
      </form>
    </section>
  );
};

export default Form;
