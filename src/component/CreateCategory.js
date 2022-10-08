import { useNavigate } from "react-router-dom";
import React, { useRef, useState } from "react";

export default function CreateCategory() {
  const history = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  function onSubmit(e) {

    e.preventDefault();

    if (!isLoading && categoryRef.current && iconRef.current ) {
      setIsLoading(true);

      const category = categoryRef.current.value;
      const icon = iconRef.current.value;

      fetch(`http://localhost:3001/categories/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          category,
          icon
        }),
      }).then(res => {
        if (res.ok) {
          alert("새로운 카테고리 생성이 완료 되었습니다");
          history(`/`);
          setIsLoading(false);
        }
      });
    }
  }

  
  const categoryRef = useRef(null);
  const iconRef = useRef(null);


  return (
    <>
    <p>추가하고자 하는 카테고리를 입력해주세요!</p>
    <form  onSubmit={onSubmit}> 
      <div className="input_area">
        <label>Category Name</label>
        <input type="text" placeholder="카테고리 이름" ref={categoryRef} />
      </div>
      <div className="input_area">
        <label>Category Icon</label>
        <input type="text" placeholder="아이콘을 입력해주세요" ref={iconRef} />
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
  );
}