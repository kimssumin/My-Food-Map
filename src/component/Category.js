import {useParams} from 'react-router-dom';
import Food from './Food'
import useFetch from '../hooks/useFetch';

export default function Category(){

  const category = useParams().category;
  const foods = useFetch(`http://localhost:3001/foods?category=${category}`)

  return (
    <>
    <h2>{category}</h2>
    <p>{foods.length} 개의 검색결과가 있습니다</p>
    <div className='about_all'>
        {foods.map((food,i) =>(
          <Food food={food} key = {food.id}/>
        ))}
    </div>
    
  </>)
}