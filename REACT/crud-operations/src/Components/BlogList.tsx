// src/components/BlogList.tsx
import React from "react";

interface Blog {
  id: number;
  title: string;
  content: string;
}

interface BlogListProps {
  blogs: Blog[];
  handleEdit: (blog: Blog) => void;
  handleDelete: (id: number) => void;
  buttonLoading: { [key: number]: boolean };
}

const BlogList: React.FC<BlogListProps> = ({
  blogs,
  handleEdit,
  handleDelete,
  buttonLoading,
}) => {
  return (
    <ul className="List">
      {blogs.map((blog) => (
        <li className="ListItems" key={blog.id}>
          <div className="blog-body">
            <h2>{blog.title}</h2>
            <p>{blog.content}</p>
          </div>
          <div className="crudOptions">
            <button className="Edit" onClick={() => handleEdit(blog)}>
              Edit
            </button>
            <button
              onClick={() => handleDelete(blog.id)}
              disabled={buttonLoading[blog.id]}
            >
              {buttonLoading[blog.id] ? (
                <div className="loader"></div>
              ) : (
                "Delete"
              )}
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default BlogList;
