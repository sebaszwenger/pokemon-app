import { useParams } from "react-router";
import { NavLink } from "react-router-dom";
import useFetch from "../hooks/useFetch.js";

const View = () => {
  let { id } = useParams();

  const { data } = useFetch(`https://pokeapi.co/api/v2/pokemon/${id}`);

  const url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;

  return (
    <>
      <div className="h-screen flex flex-col justify-center items-center">
        <button
          type="text"
          className="font-bold text-xl mb-10 bg-teal-600 py-1 px-2 rounded-md shadow-md shadow-teal-900"
        >
          <NavLink to="/">Back</NavLink>
        </button>
        <div className="w-96 border-8 border-gray-700 rounded-xl shadow-gray-700 shadow-lg">
          <div className="bg-zinc-300 rounded-t-lg">
            <img className="" src={url} alt={data?.name} />
          </div>
          <div className="bg-zinc-300 flex flex-col justify-center items-center">
            <p className="pb-1">
              <strong className="text-lg">Abilities: </strong>
              <span className="text-indigo-700 text-lg font-bold">
                {data?.abilities.map((item) => item.ability.name).join(", ")}
              </span>
            </p>
            <p className="pb-1">
              <strong className="text-lg">HP: </strong>
              <span className="text-green-700 text-lg font-bold">
                {data?.stats[0].base_stat}
              </span>
              <strong className="text-lg pl-5">Attack: </strong>
              <span className="text-red-700 text-lg font-bold">
                {data?.stats[1].base_stat}
              </span>
            </p>
            <p className="pb-5">
              <strong className="text-lg">Defense: </strong>
              <span className="text-blue-700 text-lg font-bold">
                {data?.stats[2].base_stat}
              </span>
              <strong className="text-lg pl-5">Special Attack: </strong>
              <span className="text-purple-700 text-lg font-bold">
                {data?.stats[3].base_stat}
              </span>
            </p>
          </div>
          <div className="bg-teal-600 border-t border-gray-900 ">
            <h3 className="text-center py-3 text-xl font-bold">
              {data?.name.charAt(0).toUpperCase() + data?.name.slice(1)}
            </h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default View;
