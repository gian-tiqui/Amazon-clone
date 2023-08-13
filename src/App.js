import "bootstrap/dist/css/bootstrap.min.css";
import Meow from "./components/meh";
import Header from "./components/Header";
import Footer from "./components/Footer";

var i = 1;

while (i < 10) i++;

export default function App() {
  
  return <div className="container">
    <h1>{ i }</h1>
  </div>;

  // return (
  // <div>
  //   <Header />
  //   <Meow />
  //   <Footer />
  // </div>
  // );
}
