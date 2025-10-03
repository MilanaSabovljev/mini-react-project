import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import "../styles.css";
import Card from "../components/Card";

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
            <div>
              <h2>
                <pre>Welcome to the Wireframe</pre>
              </h2>
            </div>
            <section className="cardsContainer">
              <div className="cardsRow">
                {userList.map((user) => (
                  <Card
                    id={user.id}
                    name={user.name}
                    imageUrl={user.imageUrl}
                    description={user.description}
                  ></Card>
                ))}
              </div>
            </section>
            {/* <Card
              id="3"
              name="Jovana Jovanic"
              imageUrl="https://picsum.photos/300/200"
              description="lorem ipsum isecak od 20 karaktera"
            ></Card> */}

            {/* <button className="buttonRandomId">
              <Link to={`/profile/${id}`}>Profile with random ID</Link>
            </button> */}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
