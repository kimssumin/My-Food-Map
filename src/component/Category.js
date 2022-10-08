import {useParams} from 'react-router-dom';
import Food from './Food'
import useFetch from '../hooks/useFetch';

export default function Category(){

  const category = useParams().category;
  const foods = useFetch(`http://localhost:3001/foods?category=${category}`)


  return (
    <>
    <h2>{category}</h2>
    <div className='about_all'>
        {foods.map(food =>(
          <Food food={food} key = {food.id}/>
        ))}
        
    </div>
  </>)
}