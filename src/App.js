import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import axios from "axios";

export default function App() {

  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/question/allQuestions")
      .then(results => {
        setData(results.data);
      })
      .catch(err => console.log(err));
  }, []);
  
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Question</th>
            <th>Option 1</th>
            <th>Option 2</th>
            <th>Correct Answer</th>
            <th>Category</th>
            <th>Difficulty</th>
          </tr>
        </thead>
        <tbody>
          {data.map(question => (
            <tr key={question.qid}>
              <td>{question.qid}</td>
              <td>{question.question}</td>
              <td>{question.opt1}</td>
              <td>{question.opt2}</td>
              <td>{question.correctAns}</td>
              <td>{question.category}</td>
              <td>{question.difficulty}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
