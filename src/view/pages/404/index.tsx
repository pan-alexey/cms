import * as React from "react";
import { useNavigate } from "react-router-dom";


function PageNotFound() {
  const navigate = useNavigate();
  return (
    <div>
      <h2>404 page not found</h2>
      <div onClick={()=>{navigate('/', { replace: true })}}>back</div>
    </div>
  );
}

export default PageNotFound;