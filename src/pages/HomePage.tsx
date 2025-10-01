import Footer from "../components/footer";
import Header from "../components/header";
import "../styless.css";

export default function HomePage() {
  return (
    <>
      <Header />

      <div className="container">
        <div className="row">
          <div className="side">Side</div>
          <div className="main">Main</div>
        </div>
      </div>

      <Footer />
    </>
  );
}
