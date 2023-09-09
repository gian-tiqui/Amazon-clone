import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import axios from "axios";

const URL = "http://localhost:8080/question/allQuestions";

export default function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(URL)
      .then((results) => {
        setData(results.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      {data.map((question) => (
        <div className="container p-5 m-5 bg-black text-white">
          <p>{question.qid}</p>
          <p>{question.question}</p>
          <p>{question.opt1}</p>
          <p>{question.opt2}</p>
          <p>{question.correctAns}</p>
          <p>{question.category}</p>
          <p>{question.difficulty}</p>
        </div>
      ))}
    </div>
  );
}
