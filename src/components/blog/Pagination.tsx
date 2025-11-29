import { useEffect, useState } from "preact/hooks";
import { ChevronLeft } from "./icons/ChevronLeft";
import { ChevronRight } from "./icons/ChevronRight";

interface PaginationProps {
  setCurrentPage: (pageNumber: { start: number; end: number }) => void;
  lengthPosts: number;
  postsToShow: number;
}

export const Pagination = ({
  setCurrentPage,
  lengthPosts,
  postsToShow,
}: PaginationProps) => {
  const totalTab = Math.ceil(lengthPosts / postsToShow);
  const [tabActive, setTabActive] = useState(0);

  useEffect(() => setTabActive(0), [lengthPosts]);

  const updatePage = (newIndex: number) => {
    if (newIndex + 1 > totalTab || newIndex < 0) return;

    const showElementFrom = newIndex * postsToShow;
    const showElementUntil =
      (newIndex + 1) * postsToShow > lengthPosts
        ? lengthPosts
        : (newIndex + 1) * postsToShow;
    setCurrentPage({ start: showElementFrom, end: showElementUntil });
    setTabActive(newIndex);
  };

  return (
    <div className="flex justify-center items-center gap-5 font-bold mt-16">
      <ChevronLeft handleClickButtonNav={() => updatePage(tabActive - 1)} />
      {`${tabActive + 1}/${totalTab}`}
      <ChevronRight handleClickButtonNav={() => updatePage(tabActive + 1)} />
    </div>
  );
};
