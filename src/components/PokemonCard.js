import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch.js";

const PokemonCard = ({ pokemon }) => {
  const { data } = useFetch(pokemon.url);

  const url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data?.id}.png`;

  return (
    <>
      <li className="border-4 border-gray-700 rounded-xl shadow-gray-700 shadow-lg">
        <div className="bg-zinc-300  max-w-sm pb-3 rounded-t-lg">
          <Link to={"/pokemon/" + data?.id}>
            <img className="sm:w-52" src={url} alt={pokemon.name} />
          </Link>
        </div>
        <div className="bg-teal-600 w-full rounded-b-lg border-t border-gray-900">
          <h3 className="text-center py-3 text-xl font-medium">
            {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
          </h3>
        </div>
      </li>
    </>
  );
};

export default PokemonCard;
