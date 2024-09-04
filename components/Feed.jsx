"use client";
import { useEffect, useState } from "react";
import PromptCard from "./PromptCard";

// search bar
// get prompts
// display prompts

// A component that is only used here
const PromptCardList = ({ data, handleTagClick }) => {
  return (
    <div className="mt-16 prompt_layout">
      {console.log("data: ", data)}
      {data.map((prompt) => (
        <PromptCard
          key={prompt._id}
          prompt={prompt}
          handleTagClick={handleTagClick}
        ></PromptCard>
      ))}
    </div>
  );
};

const Feed = () => {
  const [searchText, setSearchText] = useState("");
  const handleSearchChange = (e) => {};

  const [prompts, setPrompts] = useState([]);
  useEffect(() => {
    const fetchPrompts = async () => {
      try {
        const response = await fetch("/api/prompt");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setPrompts(data);
        console.log("Fetched Prompts: ", data); // Log the fetched data
      } catch (error) {
        console.error("Failed to fetch prompts:", error);
      }
    };
    fetchPrompts();
  }, []);

  // To log updated prompts
  useEffect(() => {
    console.log("Updated Prompts: ", prompts); // Log the updated prompts
  }, [prompts]);

  return (
    <section className="feed">
      <form className="relative w-full flex-center">
        <input
          type="text"
          placeholder="Search for a tag or a prompt..."
          value={searchText}
          onChange={handleSearchChange}
          required
          className="search_input peer"
        />
      </form>

      <PromptCardList data={prompts} handleTagClick={() => {}} />
    </section>
  );
};

export default Feed;
