import React, { useState } from "react";
import "../CSS/main/MainContainer.css"; // Import the CSS for the loader

interface BlogFormProps {
  blogForm: { title: string; content: string };
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  handleSubmit: (e: React.FormEvent) => void;
  currentBlogId: number | null;
}

const BlogForm: React.FC<BlogFormProps> = ({
  blogForm,
  handleChange,
  handleSubmit,
  currentBlogId,
}) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmitWithLoader = async (e: React.FormEvent) => {
    setIsLoading(true);
    await handleSubmit(e);
    setIsLoading(false);
  };

  return (
    <form onSubmit={handleSubmitWithLoader} className="form">
      <div className="title">
        <label htmlFor="title">Blog Title</label>
        <input
          type="text"
          id="title"
          name="title"
          value={blogForm.title}
          onChange={handleChange}
          required
        />
      </div>
      <div className="content">
        <label htmlFor="content">Blog Content</label>
        <textarea
          id="content"
          name="content"
          value={blogForm.content}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit" disabled={isLoading} className="submit">
        {isLoading ? (
          <div className="loader"></div>
        ) : currentBlogId ? (
          "Update"
        ) : (
          "Submit"
        )}
      </button>
    </form>
  );
};

export default BlogForm;
