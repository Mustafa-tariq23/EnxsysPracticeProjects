const deleteBlog = async (id: number) => {
  const response = await fetch(`https://usmanlive.com/wp-json/api/stories/${id}`, {
    method: "DELETE",
  });

  if (!response.ok) throw new Error("Network response was not ok");
  return await response.json();
};

export default deleteBlog;
