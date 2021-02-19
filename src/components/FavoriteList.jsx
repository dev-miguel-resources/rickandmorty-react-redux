import React from "react";
import { connect } from "react-redux";
import "../assets/styles/components/FavoriteList.scss";
import Character from "./Character";
import Empty from "./Empty";

const FavoriteList = (props) => {
  const { favoriteCharacters } = props;

  return (
    <div className="characterList">
      {!favoriteCharacters.length ? (
        <Empty />
      ) : (
        favoriteCharacters.map((character) => (
          <Character key={character.data.id} data={character.data} />
        ))
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    favoriteCharacters: state.favoriteCharacters,
  };
};

export default connect(mapStateToProps, null)(FavoriteList);
