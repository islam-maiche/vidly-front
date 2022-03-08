import React, {useState} from "react";
import {getMovies} from "../services/fakeMovieService";
import Like from "./common/like";


function renderMovies(movies){
    return(
        movies.map(movie =>
            <tr>
                <td>{movie.title} <input type="hidden" value={movie._id}/></td>
                <td>{movie.genre.name}</td>
                <td>{movie.numberInStock}</td>
                <td>{movie.dailyRentalRate}</td>
                <td>
                    <button className='btn btn-danger' onClick={() => {
                        // handleDelete(movie._id, this)
                    }}>
                        Delete
                    </button>
                </td>
            </tr>
        )
    );
}

let handleDelete = (movie, movies) => {
    return  movies.filter(mov => mov._id !== movie._id);
}

function Movies(props) {
    const [movies, setMovies] = useState(getMovies);
    const { length: count } = movies;

    if (count === 0) return <p>There are no movies in the database.</p>
    return (
        <React.Fragment>
            <p>Showing {count} movies in the database.</p>
            <table className="table table-responsive table-striped">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Genre</th>
                        <th>Stock</th>
                        <th>Rate</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {movies.map(movie =>
                        <tr key={movie._id}>
                            <td>{movie.title} <input type="hidden" value={movie._id}/></td>
                            <td>{movie.genre.name}</td>
                            <td>{movie.numberInStock}</td>
                            <td>{movie.dailyRentalRate}</td>
                            <td><Like/></td>
                            <td>
                                <button className='btn btn-danger btn-sm' onClick={() => setMovies(handleDelete(movie, movies))}>Delete</button>
                            </td>
                        </tr>)}
                </tbody>
            </table>
        </React.Fragment>
    );
}

export default Movies;