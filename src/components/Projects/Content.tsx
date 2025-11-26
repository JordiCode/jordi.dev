import { useState } from "preact/hooks";
import EyeIcon from "../icons/EyeIcon";
import GithubIcon from "../icons/GithubIcon";
import CheronDownIcon from "../icons/CheronDownIcon";
import data from "../../data/projectsData";

type projectType = {
  status: string;
  srcImg: string;
  title: string;
  description: string;
  linkPreview: string | undefined;
  linkCode: string | undefined;
  tools: any;
};

const Content = () => {
  let [max, setMax] = useState<number>(2);

  const showMoreItems = (e: any) => {
    if (max + 2 >= data.length) {
      setMax(data.length);
      return;
    }

    setMax(max + 2);
  };

  const statusColor: any = {
    production: "bg-green-700",
    building: "bg-yellow-700",
  };

  return (
    <div>
      {data
        .slice(0, max)
        .map(
          ({
            status,
            srcImg,
            title,
            description,
            linkPreview,
            linkCode,
            tools,
          }: projectType) => (
            <div className={"flex max-md:grid gap-5 mb-10"}>
              <img
                src={srcImg}
                alt={"Image not found"}
                class="rounded-lg max-w-sm max-md:max-w-full"
              />
              <div class="pt-5">
                <div class={"flex flex-col items-start gap-2 mb-5"}>
                  <h3 class="text-xl">{title}</h3>
                  <span
                    class={`text-[0.6rem] ${statusColor[status]} text-white py-1 px-4 rounded-md capitalize`}
                    title={"Status"}
                  >
                    {status}
                  </span>
                </div>
                <p class="text-xs text-zinc-600 dark:text-zinc-300 mb-4">
                  {description}
                </p>
                <div class={"mb-3"}>
                  <h3 className={"mb-1 text-base"}>Tools: </h3>
                  <div class={"inline-flex gap-2 mb-4"}>
                    {tools.map((Icon: any) => (
                      <Icon />
                    ))}
                  </div>
                </div>

                <div class="flex gap-3">
                  <a
                    href={linkCode}
                    target={"_blank"}
                    role="link"
                    class={`${linkCode == undefined ? "hidden" : "inline-flex"} items-center justify-center gap-2 px-3 py-2 space-x-2 text-xs text-black hover:text-white dark:text-white dark:hover:text-black  transition bg-white hover:bg-zinc-900 dark:bg-zinc-900 dark:hover:bg-zinc-100 border border-zinc-700 text-md  hover:border-gray-900 group max-w-fit rounded-md focus:outline-none focus-visible:outline-none focus-visible:ring focus-visible:ring-white focus-visible:ring-offset-2 active:bg-black`}
                  >
                    <GithubIcon />
                    Code
                  </a>

                  <a
                    href={linkPreview}
                    target={"_blank"}
                    role="link"
                    class={`${linkPreview == undefined ? "hidden" : "inline-flex"} items-center justify-center gap-2 px-3 py-2 space-x-2 text-xs text-black hover:text-white dark:text-white dark:hover:text-black  transition bg-white hover:bg-zinc-900 dark:bg-zinc-900 dark:hover:bg-zinc-100 border border-zinc-700 text-md  hover:border-gray-900 group max-w-fit rounded-md focus:outline-none focus-visible:outline-none focus-visible:ring focus-visible:ring-white focus-visible:ring-offset-2 active:bg-black`}
                  >
                    <EyeIcon />
                    Preview
                  </a>
                </div>
              </div>
            </div>
          )
        )}
      <button
        className={`flex gap-1 items-center ${max >= data.length ? "hidden" : ""} text-sm text-zinc-700 hover:text-zinc-900  dark:text-zinc-300 dark:hover:text-zinc-50 `}
        onClick={showMoreItems}
      >
        View more
        <span>
          <CheronDownIcon classes="size-5" />
        </span>
      </button>
    </div>
  );
};

export default Content;
