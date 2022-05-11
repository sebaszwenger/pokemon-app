import { useEffect, useState } from "react";
import PokemonCard from "../components/PokemonCard";
import useFetch from "../hooks/useFetch.js";

const List = () => {
  const [page, setPage] = useState(0);
  const { data, loading, error, changePage } = useFetch();

  useEffect(() => {
    const url = `https://pokeapi.co/api/v2/ability/?limit=20}&offset=${
      20 * page
    }`;
    changePage(url);
  }, [page]);

  function nextPage() {
    setPage(page + 1);
  }
  function prevPage() {
    setPage(page - 1);
  }

  if (loading) return <h1>LOADING...</h1>;

  if (error) console.log(error);
  return (
    <>
      <ul className="flex flex-wrap flex-1 gap-x-5 gap-y-9 mt-10 justify-center">
        {data?.results.map((pokemon, i) => (
          <PokemonCard key={i} pokemon={pokemon} />
        ))}
      </ul>
      <div className="mt-10 mb-10 flex justify-around">
        {page <= 0 ? null : (
          <button
            type="text"
            onClick={prevPage}
            className="bg-teal-600 py-1 px-2 rounded-md shadow-md shadow-teal-900 font-bold text-lg"
          >
            PREVIOUS
          </button>
        )}
        {page >= 58 ? null : (
          <button
            type="text"
            onClick={nextPage}
            className="bg-teal-600 py-1 px-2 rounded-md shadow-md shadow-teal-900 font-bold text-lg"
          >
            NEXT
          </button>
        )}
      </div>
    </>
  );
};

export default List;
