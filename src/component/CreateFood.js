
import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import useFetch from "../hooks/useFetch";
//import { IDay } from "./DayList";

export default function CreateFood(){
  const categories = useFetch("http://localhost:3001/categories");
  const history = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  function onSubmit(e) {

    e.preventDefault();

    if (!isLoading && categoryRef.current && nameRef.current && addrRef.current  && mainRef.current) {
      setIsLoading(true);

      const category = categoryRef.current.value;
      const name = nameRef.current.value;
      const addr = addrRef.current.value;
      const main = mainRef.current.value;

      fetch(`http://localhost:3001/foods/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          category,
          main,
          addr,
          isDone: false,
        }),
      }).then(res => {
        if (res.ok) {
          alert("추가가 완료 되었습니다");
          history(`/category/${category}`);
          setIsLoading(false);
        }
      });
    }
  }

  const nameRef = useRef(null);
  const addrRef = useRef(null);
  const mainRef = useRef(null);
  const categoryRef = useRef(null);
  
  return (
    <>
    <p>추가하고자 하는 가게정보를 입력해주세요!</p>
    <form  onSubmit={onSubmit}> 
      <div className="input_area">
        <label>Store Name</label>
        <input type="text" placeholder="가게이름" ref={nameRef} />
      </div>
      <div className="input_area">
        <label>Address</label>
        <input type="text" placeholder="가게주소" ref={addrRef} />
      </div>
      <div className="input_area">
        <label>Category</label>
        <select ref={categoryRef}>
          {categories.map(cat => (
            <option key={cat.id} value={cat.category}>
              {cat.category}
            </option>
          ))}
        </select>
      </div>
      <div className="input_area">
        <label>Main Dish</label>
        <input type="text" placeholder="음식이름" ref={mainRef} />
      </div>

      <button
        style={{
          opacity: isLoading ? 0.3 : 1,
        }}
      >
        {isLoading ? "Saving..." : "저장"}
      </button>
    </form>
    </>
  ) 
}