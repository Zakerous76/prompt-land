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
  const [searchPrompts, setSearchPrompts] = useState([]);
  const [displayPrompts, setDisplayPrompts] = useState([]);
  const [prompts, setPrompts] = useState([]);

  // Implement here
  const handleSearchChange = async (e) => {
    const value = e.target.value;
    setSearchText(value);
    console.log("search: ", searchText);

    if (value === "") {
      setSearchPrompts([]);
      setDisplayPrompts(prompts);
    } else {
      const filteredPrompts = prompts.filter(
        (element) =>
          element.prompt.toLowerCase().includes(value.toLowerCase()) ||
          element.tag.toLowerCase().includes(value.toLowerCase()) ||
          element.creator.username.toLowerCase().includes(value.toLowerCase())
      );
      setSearchPrompts(filteredPrompts);
    }
  };

  useEffect(() => {
    setDisplayPrompts(searchText.length > 0 ? searchPrompts : prompts);
  }, [searchPrompts, prompts]);

  useEffect(() => {
    const fetchPrompts = async () => {
      try {
        const response = await fetch("/api/prompt");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setPrompts(data);
        setDisplayPrompts(data);
        console;
      } catch (error) {
        console.error("Failed to fetch prompts:", error);
      }
    };
    fetchPrompts();
  }, []);

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

      <PromptCardList data={displayPrompts} handleTagClick={() => {}} />
    </section>
  );
};

export default Feed;
