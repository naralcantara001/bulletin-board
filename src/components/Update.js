import React, {useState} from "react";
import { Link, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Update({ formData, setFormData, article, setArticle }) {
  const navigate = useNavigate();
  const { id } = useParams();

  
  function updateChange(e) {
    const { name, value } = e.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: value,
      };
    });
  }


  // update
  function updateHandler() {
    setArticle((article) =>
      article.map((item) => {
        return item.id === id
          ? {
              ...item,
              title: formData.title,
              content: formData.content,
              id: id,
            }
          : item;
      })
    );
    navigate("/");
    setFormData("");
  }

  return (
    <div className="create">
      <nav>
        <p>UPDATE ARTICLE</p>
        <Link to="/">
          <button>
            Home <i className="fa-solid fa-house"></i>
          </button>
        </Link>
      </nav>

      <div className="article-create">
        {/* form */}
        <form onSubmit={updateHandler}>
          <input
            type="text"
            placeholder="update title..."
            name="title"
            value={formData.title}
            onChange={updateChange}
            required="required"
          />
          <textarea
            type="text"
            placeholder="update content..."
            name="content"
            value={formData.content}
            onChange={updateChange}
            required="required"
          />
          <button>
            Update article
          </button>
        </form>
        {/* end form */}
        <div></div>
      </div>
    </div>
  );
}
