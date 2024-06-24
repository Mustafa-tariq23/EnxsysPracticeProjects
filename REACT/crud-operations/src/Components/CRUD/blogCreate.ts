const createBlog = async (
  blogForm: { title: string; content: string },
  id?: number
) => {
  const method = id ? "PUT" : "POST";
  const url = id
    ? `https://usmanlive.com/wp-json/api/stories/${id}`
    : "https://usmanlive.com/wp-json/api/stories";

  const response = await fetch(url, {
    method,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(blogForm),
  });

  if (!response.ok) throw new Error("Network response was not ok");
  return await response.json();
};

export default createBlog;
