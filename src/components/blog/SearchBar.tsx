interface searchBarProps {
  dataPosts: { title: string; description: string; date: string }[];
  setPosts: (
    value: { title: string; description: string; date: string }[]
  ) => void;
  setCurrentPage: (value: { start: number; end: number }) => void;
}

import { useState } from "preact/hooks";
import { Search } from "./icons/Search";

export const SearchBar = ({
  dataPosts,
  setPosts,
  setCurrentPage,
}: searchBarProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const [search, setSearch] = useState("");

  const widthStyle = isFocused ? "80%" : "50%";

  const handleInput = (event: any) => {
    const newSearch = event.target.value;
    setSearch(newSearch);
    setCurrentPage({ start: 0, end: 3 });
    const newPosts =
      newSearch != ""
        ? dataPosts.filter((post) =>
            post.title.toLowerCase().includes(newSearch.toLowerCase())
          )
        : dataPosts;
    setPosts(newPosts);
  };

  return (
    <>
      <div
        className="flex justify-between mx-auto items-center gap-5 transition-all duration-200 bg-zinc-900 rounded-full py-4 px-6"
        style={{ width: widthStyle }}
      >
        <input
          id={"search"}
          class="w-[100%]"
          placeholder={isFocused ? "" : "Como crear un..."}
          autoComplete={"off"}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          value={search}
          onInput={handleInput}
        />
        <label htmlFor="search" className={"cursor-pointer"}>
          <Search />
        </label>
      </div>
    </>
  );
};
