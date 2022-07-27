import { useState, useEffect } from "react";
import { NextPage } from "next";
import { Layout } from "../../components/layouts/";
import { NoFavorites } from "../../components/ui";
import { SmallPokemon } from "../../interfaces";
import { localFavorites } from "../../utils";
import FavoritePokemons from "../../components/pokemon/FavoritePokemons";

interface Props {
  pokemons: SmallPokemon[];
}

const FavoritesPage: NextPage<Props> = () => {
  const [favoritePokemons, setFavoritePokemons] = useState<number[]>([]);

  useEffect(() => {
    setFavoritePokemons(localFavorites.pokemons());
  }, []);

  return (
    <Layout title="Pokemons favoritos">
      {favoritePokemons.length === 0 ? (
        <NoFavorites />
      ) : (
        <FavoritePokemons pokemons={favoritePokemons} />
      )}
    </Layout>
  );
};

export default FavoritesPage;
