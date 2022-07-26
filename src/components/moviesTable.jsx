import React from "react";
import Like from './common/like'
import TableHeader from "./common/tableHeader";

const MoviesTable = (props) => {
    const { movies, onLike, onDelete, onSort, sortColumn } = props;

    let columns = [
        { path: "title", label: "Title" },
        { path: "genre.name", label: "Genre" },
        { path: "numberInStock", label: "Stock" },
        { path: "dailyRentalRate", label: "Rate" },
        { key: "like"},
        { key: "Delete"},
    ];

    return (
        <table className="table table-responsive table-striped">
            <TableHeader 
                columns={columns} 
                sortColumn={sortColumn} 
                onSort={(sortColumn) => onSort(sortColumn)} 
            />
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
