import useFetch from '../hooks/useFetch';
import Food from './Food';
export default function Visit(){

  const foods = useFetch("http://localhost:3001/foods?visited=true")

  return(
    <>
    <h2>Visited</h2>
    <p>{foods.length} 개의 검색결과가 있습니다</p>
    <div className='visited'>
      {foods.map(food =>(
          <Food food={food} key = {food.id}/>
        ))}
    </div>
    </>
  )
}