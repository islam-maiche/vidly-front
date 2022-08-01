import React from "react";
import Like from "./common/like";
import Table from "./common/table";

const MoviesTable = (props) => {
    const { movies, onLike, onDelete, onSort, sortColumn } = props;

    let columns = [
        { path: "title", label: "Title" },
        { path: "genre.name", label: "Genre" },
        { path: "numberInStock", label: "Stock" },
        { path: "dailyRentalRate", label: "Rate" },
        {
            key: "like",
            content: movie => <Like liked={movie.liked} onClick={() => onLike(movie)} />,
        },
        {
            key: "Delete",
            content: movie => (
                <button
                    className="btn btn-danger btn-sm"
                    onClick={() => onDelete(movie._id)}
                >
                    Delete
                </button>
            ),
        },
    ];

    return (
        <Table columns={columns} data={movies} sortColumn={sortColumn} onSort={onSort} />
    );
};

export default MoviesTable;
