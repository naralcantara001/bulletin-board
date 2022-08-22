import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Create from "./components/Create";
import Update from "./components/Update";
import Home from "./components/Home";
import Article from "./components/Article";

function App() {
  const [formData, setFormData] = useState({
    title: "",
    content: "",
  });

  const [article, setArticle] = useState(
    JSON.parse(localStorage.getItem("articleList")) || []
  );

  // store data to local storage
  useEffect(() => {
    localStorage.setItem("articleList", JSON.stringify(article));
  }, [article]);

  const deleteHandler = (id) => {
    setArticle((items) => items.filter((_, i) => i !== id));
  };

  return (
    <div>
      <Router>
        <Routes>
          <Route
            exact
            path="/"
            caseSensitive={false}
            element={
              <Home
                article={article}
                setArticle={setArticle}
                deleteHandler={deleteHandler}
              />
            }
          />
          <Route
            path="/create"
            caseSensitive={false}
            element={
              <Create
                formData={formData}
                setFormData={setFormData}
                article={article}
                setArticle={setArticle}
                // updateHanlder={updateHanlder}
              />
            }
          />
          <Route
            path="/update/:id"
            caseSensitive={false}
            element={
              <Update
                formData={formData}
                setFormData={setFormData}
                article={article}
                setArticle={setArticle}
              />
            }
          />
          <Route
            path="/article"
            caseSensitive={false}
            element={<Article article={article} setArticle={setArticle} />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
