import {Link} from 'react-router-dom'
import useFetch from '../hooks/useFetch';


export default function CategoryList(){

  const categories = useFetch('http://localhost:3001/categories');

  return (
    <>
    <div className = "list_category">
    {categories.map(category =>(
      <div className = "lists" key = {category.id}>
        <Link to={`/category/${category.category}`}><span>{category.icon}</span><br></br>{category.category}</Link>
      </div>
    ))}
    </div>
    </>
  )
}
