import {useState} from 'react'

export default function Food({food : f}){

  const [food, setfood] = useState(f);
  const [visited, setvisited] = useState(food.visited);

  function toggleDone(){
    fetch(`http://localhost:3001/foods/${food.id}`, {
      method : 'PUT',
      headers:{
        'Content-Type' : 'application/json',
      },
      body: JSON.stringify({
        ...food,
        visited : !visited
      }),
    })
    .then( res =>{
      if (res.ok){
        setvisited(!visited);
      }
    }
    )
  }

  function del(){
    if (window.confirm('정말 삭제하시겠습니까?')){
      fetch(`http://localhost:3001/foods/${food.id}`,{
        method : "DELETE",

      }).then(res =>{
        if (res.ok){
          setfood({id : 0});
        }
      })
    }
  }

  if(food.id === 0){
    return null;
  }


  return (
    <div className = "about">
      <input type = "checkbox" checked = {visited} onChange = {toggleDone}/>
      <div className="index">
        <div className='food_name'>
          😋 <span className="bold">Name</span> {food.name}
        </div>
        <div className="food_addr">
          😋 <span className="bold">Address</span> {food.addr}
        </div>
        <div className="main_dish">
          😋 <span className="bold">Recommend</span>{food.main}
        </div>
      </div>
      
      <div className="buttons">
        <button onClick = {del} className = "btn_del">삭제</button>
      </div>
    </div> 
  )
}