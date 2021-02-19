import React, { useEffect } from "react";
import "../assets/styles/components/CharacterList.scss";
import Character from "./Character";
import Error from "./Error";
import Loader from "./Loader";
import useGetCharacters from '../custom-hooks/useGetCharacters';

const CharacterList = () => {
  const  {characters, loading, error, getCharacters } = useGetCharacters();
 
  useEffect(() => {
    getCharacters();
  }, []);

  return (
    <div className="characterList">
      {loading ? (
        <Loader />
      ) : error ? (
        <Error />
      ) : (
        characters.map((character) => (
          <Character key={character.id} data={character} />
        ))
      )}
    </div>
  );
};

export default CharacterList;
