import {Link} from "react-router-dom"

export default function Header(){
  return(
    <div className="header">
      <h1>
        <a href = "/">🥂 My Food Map 🥂 </a>
      </h1>
      <div className="menu">
        <Link to ="/create_food" className="link">음식 추가</Link>
        <Link to ="/create_category" className="link">카테고리 추가</Link>
      </div>
    </div>
  )
}