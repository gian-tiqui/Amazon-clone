import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Meow() {

    const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  useEffect(() => {
 
    if (count % 2 === 0) 
      document.body.style.backgroundColor = "lightblue";
    else if (count % 3 === 0) 
      document.body.style.backgroundColor = "lightpink";
    else 
      document.body.style.backgroundColor = "lightgreen";
    
    // Clean up the effect when the component unmounts
    return () => {
      document.body.style.backgroundColor = "";
    };
  }, [count]);

  return (
    <div>
      <header className="bg-light">
        <div className="row">
          <div className="card">meow</div>
        </div>
      </header>
      <h1 className="bg-light">{count}</h1>
      <button onClick={increment}>meow</button>
    </div>
  );
}