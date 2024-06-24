const fetchBlogs = async () => {
  const response = await fetch("https://usmanlive.com/wp-json/api/stories");
  if (!response.ok) throw new Error("Network response was not ok");
  return await response.json();
};

export default fetchBlogs;
