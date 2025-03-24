import Cards from "../components/Cards";
import infos from "../../public/infos.json";
import { useEffect, useState } from "react";

function Home() {
  const [infosC, setInfos] = useState("");
  const [loading, setLoading] = useState(true);

  const [loc, setLoc] = useState(localStorage);

  useEffect(() => {
    try {
      setInfos(infos);
    } catch (error) {
      console.log(error);
      return <p>Erro</p>;
    } finally {
      setLoading(false);
    }
  }, [infos]);

  if (loading) {
    return (
      <div className="spinner-border text-secondary" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    );
  } else {
    return infosC.map((cards) => <Cards card={cards} key={cards.id} />);
  }
}

export default Home;
