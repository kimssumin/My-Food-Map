import { Link } from "react-router-dom";

export default function EmptyPage() {
  return (
    <>
      <h4>잘못된 접근입니다</h4>
      <Link to="/">Back To Home</Link>
    </>
  );
}