import { useEffect, useState } from "react";
import React from "react";

function App() {
  const [nutri, setNutri] = useState([]);

  useEffect(() => {

    function carregaApi() {
      let url = 'https://sujeitoprogramador.com/rn-api?api=posts';
      fetch(url)
        .then((resultado)=> resultado.json())
        .then((json)=> {
          console.log(json);
          setNutri(json);
        })
    }

    carregaApi();

  }, []);


  return (
    <div>
      <h1>teste</h1>
    </div>
  );
}

export default App;
