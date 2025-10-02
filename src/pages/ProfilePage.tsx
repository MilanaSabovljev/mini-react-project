import Footer from "../components/Footer";
import Header from "../components/Header";
import { useParams } from "react-router";

export default function ProfilePage() {
  const params = useParams();
  return (
    <>
      <Header />
      <div>
        <h1>Profile Page with ID: {params.id}</h1>
      </div>
      <Footer />
    </>
  );
}
