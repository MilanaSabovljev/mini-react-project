import { Link } from "react-router-dom";
import Footer from "../components/footer";
import Header from "../components/header";
import "../styless.css";

export default function HomePage() {
  const id = Math.floor(Math.random() * 10);

  return (
    <>
      <Header />

      <div className="container">
        <div className="row">
          <div className="side">Side</div>
          <div className="main">
            <div className="button">
              <Link to={`/profile/${id}`}>
                <button>Profile with random ID</button>
              </Link>
            </div>
            Main
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
