import { useState } from "preact/hooks";
import EyeIcon from "../icons/EyeIcon";
import GithubIcon from "../icons/GithubIcon";
import CheronDownIcon from "../icons/CheronDownIcon";

const Content = () => {
  const data = [
    {
      linkPreview: "https://www.premezcladosdehormigonfjp.com",
      linkCode: undefined,
      srcImg: "project-fjp.jpg",
      title: "Premezclados de hormigon FJP",
      description: `Construction company Landing Page. Through the site, their 
        clients were able to learn about their services and get in touch with the company`,
    },
  ];

  let [max, setMax] = useState<number>(1);

  const showMoreItems = (e: any) => {
    if (max == data.length) return;
    setMax(max + 2);
  };

  return (
    <>
      {data
        .slice(0, max)
        .map(({ srcImg, title, description, linkPreview, linkCode }) => (
          <div className={"flex gap-5 mb-5"}>
            <img
              src={srcImg}
              alt={"Image not found"}
              class="rounded-lg max-w-sm"
            />
            <div class="pt-5">
              <h3 class="text-lg mb-1">{title}</h3>
              <p class="text-zinc-400 mb-4">{description}</p>
              <div class="flex gap-3">
                <a
                  href={linkCode}
                  target={"_blank"}
                  role="link"
                  class={`${linkCode == undefined ? "hidden" : "inline-flex"}  items-center justify-center gap-2 px-2 py-2 space-x-2 text-xs text-white transition bg-zinc-900 border border-zinc-700  text-md hover:bg-zinc-100 hover:border-gray-900 group max-w-fit rounded-md hover:text-black focus:outline-none focus-visible:outline-none focus-visible:ring focus-visible:ring-white focus-visible:ring-offset-2 active:bg-black`}
                >
                  <GithubIcon classes="size-5" />
                  Code
                </a>

                <a
                  href={linkPreview}
                  target={"_blank"}
                  role="link"
                  class="inline-flex items-center justify-center gap-2 px-2 py-2 space-x-2 text-xs text-white transition bg-zinc-900 border border-zinc-700 text-md hover:bg-zinc-100 hover:border-gray-900 group max-w-fit rounded-md hover:text-black focus:outline-none focus-visible:outline-none focus-visible:ring focus-visible:ring-white focus-visible:ring-offset-2 active:bg-black"
                >
                  <EyeIcon classes="size-5" />
                  Preview
                </a>
              </div>
            </div>
          </div>
        ))}
      <button
        className={`flex gap-1 items-center text-sm text-blue-200 hover:text-blue-50 ${max == data.length ? "hidden" : ""}`}
        onClick={showMoreItems}
      >
        View more
        <span>
          <CheronDownIcon classes="size-5" />
        </span>
      </button>
    </>
  );
};

export default Content;
