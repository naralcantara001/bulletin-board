import React from "react";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";

export default function Create({ formData, setFormData, article, setArticle }) {
  const navigate = useNavigate();

  // handle change
  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: value,
      };
    });
  }

  // handle submit
  const handleSubmit = (e) => {
    e.preventDefault();

    setArticle([
      ...article,
      { title: formData.title, content: formData.content, id: uuidv4() },
    ]);

    navigate("/");
    setFormData("");
  };

  //
  return (
    <div className="create">
      <nav>
        <p>CREATE NEW ARTICLE</p>
        <Link to="/">
          <button>
            Home <i className="fa-solid fa-house"></i>
          </button>
        </Link>
      </nav>

      <div className="article-create">
        {/* form */}
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="add title..."
            onChange={handleChange}
            name="title"
            value={formData.title}
            required="required"
          />
          <textarea
            value={formData.content}
            placeholder="add content..."
            onChange={handleChange}
            name="content"
            required="required"
          />
          <button>
            Post article <img src="images/pin.png" alt="images" />
          </button>
        </form>
        {/* end form */}
        <div></div>
      </div>
    </div>
  );
}
