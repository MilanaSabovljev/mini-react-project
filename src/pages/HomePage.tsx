import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import "../styles.css";

export default function HomePage() {
  const id = Math.floor(Math.random() * 10);

  const userList = [
    {
      id: 1,
      name: "Marko Markovic",
      imageUrl: "https://picsum.photos/300/200",
      description: "lorem ipsum isecak od 20 karaktera",
    },
    {
      id: 2,
      name: "Nina Nikolic",
      imageUrl: "https://picsum.photos/300/200",
      description: "lorem ipsum isecak od 20 karaktera",
    },
    {
      id: 3,
      name: "Jovana Jovanic",
      imageUrl: "https://picsum.photos/300/200",
      description: "lorem ipsum isecak od 20 karaktera",
    },
  ];

  return (
    <>
      <Header />

      <div className="container">
        <div className="row">
          <div className="side">Side</div>
          <div className="main">
            <div>Main</div>
            <button className="buttonRandomId">
              <Link to={`/profile/${id}`}>Profile with random ID</Link>
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
