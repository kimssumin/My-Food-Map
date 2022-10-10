import useFetch from '../hooks/useFetch';
import Food from './Food';
import {Link} from "react-router-dom"


export default function Visit(){

  const foods = useFetch("http://localhost:3001/foods?visited=true")

  return(
    <>
    <h2>Visited</h2>
    <p>{foods.length} 개의 검색결과가 있습니다</p>
    <Link to ="/create_review" className="btn_append">리뷰 추가</Link>
    <div className='visited'>
      {foods.map(food =>(
          <Food food={food} key = {food.id}/>
        ))}
    </div>
    </>
  )
}