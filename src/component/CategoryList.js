import {Link} from 'react-router-dom'
import useFetch from '../hooks/useFetch';


export default function CategoryList(){

  const categories = useFetch('http://localhost:3001/categories');

  return (
    <>
    <ul className = "list_category">
    {categories.map(category =>(
      <li key = {category.id}>
        <Link to={`/category/${category.category}`}> {category.category}</Link>
      </li>
    ))}
    <li></li>
    </ul>
    </>
  )
}
