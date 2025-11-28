import SunIcon from "../icons/SunIcon";
import MoonIcon from "../icons/MoonIcon";
import { useEffect, useState } from "preact/hooks";

const SunMoon = () => {
  const [darkMode, setDarkMode] = useState<string | null>(null);

  useEffect(() => {
    const initialStatus = localStorage.getItem("darkModeStatus");

    if (!initialStatus) {
      const initialMode = "light";
      localStorage.setItem("darkModeStatus", "light");
      setDarkMode(initialMode);
    } else {
      if (initialStatus === "dark")
        document.documentElement.classList.add("dark");

      setDarkMode(initialStatus);
    }
  }, []);

  useEffect(() => {
    if (darkMode === null) return;

    if (darkMode === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const toggleMode = () => {
    const newMode = darkMode === "dark" ? "light" : "dark";
    localStorage.setItem("darkModeStatus", newMode);
    setDarkMode(newMode);
  };

  return (
    <div class="cursor-pointer" id="dark-light-icon" onClick={toggleMode}>
      {darkMode == "dark" ? (
        <SunIcon classes="hover:stroke-yellow-300 size-6" />
      ) : (
        <MoonIcon classes="size-7" pathClasses="group-hover:fill-blue-400" />
      )}
    </div>
  );
};

export default SunMoon;
