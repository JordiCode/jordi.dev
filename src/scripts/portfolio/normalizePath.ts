
// This function transform paths like /blog/ to /blog
const normalizePath = (path: string) => {
  if (path === "/") {
    return path;
  }
  if (path.endsWith("/")) {
    return path.slice(0, -1);
  }
  return path;
};

export default normalizePath
