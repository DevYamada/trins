import infos from "../../public/infos.json";

import { useState, useEffect } from "react";

function NavBar() {
  console.log(1);
  const [infosC, setInfos] = useState("");
  const [loading, setLoading] = useState(true);

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

  return (
    <>
      <div className="card">
        <div className="inputfield">
          <img className="card-img-top aut" src="imgs/pfp.jpg" alt="a" />
          <p></p>
          <input
            className="type"
            placeholder="Type something..."
            type="text"
            name=""
            id=""
          />

        </div>
        <div className="attach">
          <p className="like"></p>
          <p className="like"></p>
          <button className="btn btn-primary right">Post</button>
        </div>
      </div>
    </>
  );
}

export default NavBar;
