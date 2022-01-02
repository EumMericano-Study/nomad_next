import { useEffect } from "react";
import { useState } from "react";
import Seo from "../components/Seo";

export default function Home() {
    const [movies, setMovies] = useState<MovieIState[]>();
    useEffect(() => {
        (async () => {
            const { results }: { results: MovieIState[] } = await (
                await fetch(
                    `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
                )
            ).json();
            setMovies(results);
        })();
    }, []);
    return (
        <div>
            <Seo title="Home" />
            {!movies && <h4>Loading...</h4>}
            {movies?.map((movie: MovieIState) => {
                return <div key={movie.id}>{movie.original_title}</div>;
            })}
        </div>
    );
}
