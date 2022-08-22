import React from "react";
import { Link } from "react-router-dom";

export default function Article({ article }) {
  // const time = new Date().toLocaleString()

  // this is board component
  const articleBoardList = article.map((item) => (
    <div key={item.id} className="article-item">
      <p className="article-title">{item.title}</p>
      <p></p>
      <p className="article-content">{item.content}</p>
      <div className="article-vote">
        <button className="vote upvote-btn">
          <img src="images/upvote.png" alt="images" /> upvote (1)
        </button>
        <button className="vote downvote-btn">
          <img src="images/downvote.png" alt="images" /> downvote (1)
        </button>
      </div>
    </div>
  ));
  return (
    <div className="article">
      <nav>
        <p>ARTICLE</p>
        <Link to="/">
          <button>
            Home <i className="fa-solid fa-house"></i>
          </button>
        </Link>
      </nav>

      <div className="article-container">{articleBoardList}</div>
    </div>
  );
}
