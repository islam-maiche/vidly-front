import React from "react";
import Like from './common/like'

const MoviesTable = (props) => {
    const { movies, onLike, onDelete, onSort, sortColumn } = props;

    const raiseSort = path => {
        if (sortColumn.path == path) {
            sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
        } else {
            sortColumn.path = path;
            sortColumn.order = "asc";
        }

        onSort(sortColumn);
    }

    return (
        <table className="table table-responsive table-striped">
            <thead>
                <tr>
                    <th style={{cursor: "pointer"}} onClick={() => raiseSort("title")}>Title</th>
                    <th style={{cursor: "pointer"}} onClick={() => raiseSort("genre.name")}>Genre</th>
                    <th style={{cursor: "pointer"}} onClick={() => raiseSort("numberInStock")}>Stock</th>
                    <th style={{cursor: "pointer"}} onClick={() => raiseSort("dailyRentalRate")}>Rate</th>
                    <th></th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {movies.map((movie) => (
                    <tr key={movie._id}>
                        <td>{movie.title}</td>
                        <td>{movie.genre.name}</td>
                        <td>{movie.numberInStock}</td>
                        <td>{movie.dailyRentalRate}</td>
                        <td>
                            <Like
                                liked={movie.liked}
                                onClick={() => onLike(movie)}
                            />
                        </td>
                        <td>
                            <button
                                className="btn btn-danger btn-sm"
                                onClick={() => onDelete(movie._id)}
                            >
                                Delete
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default MoviesTable;
