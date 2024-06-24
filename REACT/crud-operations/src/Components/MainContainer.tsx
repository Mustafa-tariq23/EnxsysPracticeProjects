import React, { useEffect, useState } from "react";
import fetchBlogs from "./CRUD/blogRead";
import Modal from "./Modal";
import BlogForm from "./BlogForm";
import BlogList from "./BlogList";
import saveBlog from "./CRUD/blogCreate";
import deleteBlog from "./CRUD/blogDelete";
import "../CSS/main/MainContainer.css";

interface Blog {
  id: number;
  title: string;
  content: string;
}

const MainContainer: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [buttonLoading, setButtonLoading] = useState<{
    [key: number]: boolean;
  }>({});
  const [blogForm, setBlogForm] = useState<{ title: string; content: string }>({
    title: "",
    content: "",
  });
  const [currentBlogId, setCurrentBlogId] = useState<number | null>(null);

  const handleOpenModal = () => setShowModal(true);

  const handleCloseModal = () => {
    setShowModal(false);
    setBlogForm({ title: "", content: "" });
    setCurrentBlogId(null);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setBlogForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await saveBlog(blogForm, currentBlogId || undefined);
      handleCloseModal();
      window.location.reload();
    } catch (error) {
      console.error(
        `Error ${currentBlogId ? "updating" : "creating"} blog:`,
        error
      );
    }
  };

  const handleDelete = async (id: number) => {
    try {
      setButtonLoading((prev) => ({ ...prev, [id]: true }));
      await deleteBlog(id);
      setBlogs((prevBlogs) => prevBlogs.filter((blog) => blog.id !== id));
    } catch (error) {
      console.error("Error deleting blog:", error);
    } finally {
      setButtonLoading((prev) => ({ ...prev, [id]: false }));
    }
  };

  const handleEdit = (blog: Blog) => {
    setBlogForm({ title: blog.title, content: blog.content });
    setCurrentBlogId(blog.id);
    handleOpenModal();
  };

  useEffect(() => {
    const loadBlogs = async () => {
      try {
        const data = await fetchBlogs();
        setBlogs(data);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setLoading(false);
      }
    };
    loadBlogs();
  }, []);

  return (
    <div className="main-container">
      <button onClick={handleOpenModal} className="openModal">
        Create Blog
      </button>
      <Modal show={showModal} onClose={handleCloseModal}>
        <BlogForm
          blogForm={blogForm}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          currentBlogId={currentBlogId}
        />
      </Modal>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <BlogList
          blogs={blogs}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
          buttonLoading={buttonLoading} // Pass the buttonLoading state to BlogList
        />
      )}
    </div>
  );
};

export default MainContainer;
