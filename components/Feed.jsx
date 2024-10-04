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
  const [allPrompts, setAllPrompts] = useState([]);

  // Search states
  const [searchText, setSearchText] = useState("");
  const [searchTimeout, setSearchTimeout] = useState(null);
  const [searchedResults, setSearchedResults] = useState([]);

  // Fetching all prompts
  const fetchAllPrompts = async () => {
    const response = await fetch("/api/prompt");
    const data = await response.json();
    setAllPrompts(data);
  };
  // call it at startup
  useEffect(() => {
    fetchAllPrompts();
  }, []);

  // filter the prompts based on the search text
  const filterPrompts = (query) => {
    const searchQuery = query || searchText; // use the passed query or fallback to searchText
    const regex = new RegExp(searchQuery, "i"); // "i" to search case-insensitive
    return allPrompts.filter(
      (item) =>
        regex.test(item.creator.username) ||
        regex.test(item.tag) ||
        regex.test(item.prompt)
    );
  };

  // handle search
  const handleSearchChange = (e) => {
    clearTimeout(searchTimeout);
    setSearchText(e.target.value);
    // debounce method
    setSearchTimeout(
      setTimeout(() => {
        const searchResult = filterPrompts();
        setSearchedResults(searchResult);
      }, 100)
    );
  };

  const handleTagClick = (tagName) => {
    setSearchText(tagName);

    const searchResult = filterPrompts(tagName);
    setSearchedResults(searchResult);
  };

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

      {/* All Prompts */}
      {searchText ? (
        <PromptCardList
          data={searchedResults}
          handleTagClick={handleTagClick}
        />
      ) : (
        <PromptCardList data={allPrompts} handleTagClick={handleTagClick} />
      )}
    </section>
  );
};

export default Feed;
