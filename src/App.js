import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const URL = "http://localhost:8080/question/allQuestions";

const styles = {
  cardStyle: "container p-5 m-5 bg-black text-white",
};

export default function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(URL)
      .then((results) => {
        setData(results.data);
      })
      .catch((err) => console.log(err));

    document.body.style.backgroundColor = "#011112";
  }, []);

  return (
    <div>
      <button>
        <Link to="/meh">meh</Link>
      </button>
      {data.map((question) => (
        <div className={styles.cardStyle}>
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
