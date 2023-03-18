export const getBlogPosts = () => {
  return fetch("http://localhost:8080/")
    .then((res) => res.json())
    .then((data) => data);
};
