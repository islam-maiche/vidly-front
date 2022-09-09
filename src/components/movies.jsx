import React, { useEffect, useState } from "react";
import { getGenres } from "../services/fakeGenreService";
import { getMovies } from "../services/fakeMovieService";
import ListGroup from "./common/listGroup";
import Pagination from "./common/pagination";
import MoviesTable from "./moviesTable";
import { paginate } from "../utils/paginate";
import _ from "lodash"

function Movies(props) {
    const [allMovies, setAllMovies] = useState([]);
    const [genres, setGenres] = useState([]);
    const [selectecGenre, setSelectecGenre] = useState(null);
    const [sortColumn, setSortColumn] = useState({path: "title", order: "asc"});
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize, setPageSize] = useState(4);

    useEffect(() => {
        setAllMovies(getMovies);
        setGenres(getGenres);
    }, []);

    function getPagedData() {
        const filtered = selectecGenre
            ? allMovies.filter((m) => m.genre._id == selectecGenre._id)
            : allMovies;
        const sorted = _.orderBy(
            filtered,
            [sortColumn.path],
            [sortColumn.order]
        );

        const movies = paginate(sorted, currentPage, pageSize);

        return { totalCount: filtered.length, data: movies };
    }

    const handleDelete = (movieId) => {
        setAllMovies(allMovies.filter((movie) => movie._id !== movieId));
    };

    const handleLike = (movie) => {
        const movies = [...allMovies];
        const index = movies.indexOf(movie);
        movies[index] = { ...movies[index] };
        movies[index].liked = !movies[index].liked;
        setAllMovies(movies);
    };

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const handleGenreSelect = (genre) => {
        setSelectecGenre(genre);
    };

    const handleSort = (path) => {
        const _sortColumn = { ...sortColumn };
        setSortColumn(_sortColumn);
    };

    const {totalCount, data: movies} = getPagedData();

    if (totalCount === 0) return <p>There are no movies in the database.</p>;
    return (
        <div className="row">
            <div className="col-3"> 
                <ListGroup
                    items={genres}
                    selectecItem={selectecGenre}
                    onItemSelect={(genre) => handleGenreSelect(genre)}
                />
            </div>

            <div className="col">
                <p>Showing {totalCount} movies in the database.</p>
                <MoviesTable
                    movies={movies}
                    sortColumn={sortColumn}
                    onLike={(movie) => handleLike(movie)}
                    onDelete={(id) => handleDelete(id)}
                    onSort={(column) => handleSort(column)}
                />
                <Pagination
                    itemsCount={totalCount}
                    pageSize={pageSize}
                    currentPage={currentPage}
                    onPageChange={(page) => handlePageChange(page)}
                />
            </div>
        </div>
    );
}

export default Movies;
