import { Link } from "react-router-dom"

export default function Home({article, deleteHandler, updateHandler}) {

    // map data
    const articleList = article.map((item, id) => (
        <ul key={item.id}>
            <li>{item.title}
                <span>
                    <Link to="/">
                         <i className="fa-solid fa-eye"></i>
                    </Link>
                   
                    <Link to={`update/${item.id}`}>
                        <i className="fa-solid fa-pencil"></i>
                    </Link>
                        <i onClick={() => deleteHandler(id)} className="fa-solid fa-trash-can"></i>
                </span>
            </li>
        </ul>
    ))

  return (

    <div className='home'>
        <nav>
            <p>BULLLETIN BOARD</p>
            <Link to="/create">
                <button>Create new article <i className="fa-solid fa-circle-plus"></i></button>
            </Link>
        </nav>
        
        <div className='article-list'>
                <div className='article-box'>
                    <p className='secondary-title'>ARTICLE</p>
                    <Link to="/article">
                    <button>view board</button>
                    </Link>
                    
                </div>
                {articleList}
            </div>
    </div>

  )
}
