import React, { useEffect, useState } from "react";
import { ProgressBar } from "react-bootstrap";
import axios from "axios";
import NavComponent from "./Components/NavComponent";

function App() {
  const [pokemonDataList, setPokemonDataList] = useState([]);
  const [numPokemons, setNumPokemons] = useState(10);
  const [searchTerm, setSearchTerm] = useState("");
  const [detailsVisibility, setDetailsVisibility] = useState([]);

  useEffect(() => {
    fetchAllPokemonData();
  }, []);

  const fetchAllPokemonData = async () => {
    try {
      const response = await axios.get(
        "https://pokeapi.co/api/v2/pokemon?limit=898"
      );
      if (response.data.results) {
        const pokemonNames = response.data.results.map(
          (pokemon) => pokemon.name
        );
        const promises = pokemonNames.map(async (name) => {
          const response = await axios.get(
            `https://pokeapi.co/api/v2/pokemon/${name}`
          );
          return response.data;
        });

        const data = await Promise.all(promises);
        setPokemonDataList(data);

        // Initialize the detailsVisibility state array
        setDetailsVisibility(Array(data.length).fill(false));
      }
    } catch (error) {
      console.error(error);
    }
  };

  const loadMore = () => {
    setNumPokemons(numPokemons + 20);
  };

  const filteredPokemonData = pokemonDataList.filter((pokemonData) =>
    pokemonData.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleDetails = (index) => {
    const updatedVisibility = [...detailsVisibility];
    updatedVisibility[index] = !updatedVisibility[index];
    setDetailsVisibility(updatedVisibility);
  };

  return (
    <div>
      <NavComponent />
      <div className="pokemon-container  d-flex justify-content-center">
        <div className="form-group input-container">
          <input
            className="form-control w-50 bg-dark text-light "
            type="text"
            placeholder="Search a Pokémon......"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        {filteredPokemonData.slice(0, numPokemons).map((pokemonData, index) => (
          <div
            className={`pokemon-content pokemon-type ${pokemonData.types[0].type.name}-type`}
            key={pokemonData.id}
          >
            <h4>{capitalizeFirstLetter(pokemonData.name)}</h4>
            <img
              className=" pokemon-img-display"
              src={pokemonData.sprites.front_default}
              alt={pokemonData.name}
            />

            <button
              className="btn btn-success"
              onClick={() => toggleDetails(index)}
            >
              {detailsVisibility[index] ? "Hide Details" : "Show Details"}
            </button>
            {detailsVisibility[index] && (
              <div
                className={`pokemon-details ${
                  detailsVisibility[index] ? "active" : ""
                }`}
              >
                <div
                  className={`pokemon-content pokemon-details-content pokemon-type ${pokemonData.types[0].type.name}-type`}
                  key={pokemonData.id}
                >
                  <div className="row w-100 h-100">
                    <div className="col-md-6 d-flex flex-column align-items-center justify-content-center ">
                      <h4>{capitalizeFirstLetter(pokemonData.name)}</h4>
                      <img
                        className=" pokemon-img-details "
                        src={pokemonData.sprites.front_default}
                        alt={pokemonData.name}
                      />
                    </div>
                    <div className="col-md-6  d-flex flex-column align-items-center justify-content-center ">
                      <ProgressBar
                        now={(pokemonData.base_experience / 400) * 100}
                        label={`${pokemonData.base_experience} / 400`}
                        variant="dark"
                        className="w-75"
                      />

                      <p>
                        <strong>Attack Power:</strong>{" "}
                        {pokemonData.base_experience}
                      </p>
                      <p>
                        <strong>Weight:</strong> {pokemonData.weight}
                      </p>
                      {/**              <p>
                        <strong>Abilities:</strong>{" "}
                        <ul>
                          {pokemonData.abilities.map((ability, index) => (
                            <li key={index}>{ability.ability.name}</li>
                          ))}
                        </ul>
                      </p>*/}
                      <p>
                        <strong>Height:</strong> {pokemonData.height}
                      </p>
                      <p>
                        <strong>Type:</strong>{" "}
                        {capitalizeFirstLetter(pokemonData.types[0].type.name)}
                      </p>
                    </div>
                  </div>
                  <button
                    className="btn btn-danger btn-hide"
                    onClick={() => toggleDetails(index)}
                  >
                    Hide Details
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
      <button className="btn btn-success mx-5" onClick={loadMore}>
        Load More....
      </button>
    </div>
  );
}

function capitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export default App;
