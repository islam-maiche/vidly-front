import React from "react";
import TableBody from "./tableBody";
import TableHeader from "./tableHeader";

const Table = (props) => {
    const { columns, sortColumn, onSort, data } = props;

    return (
        <table className="table table-responsive table-striped">
            <TableHeader
                columns={columns}
                sortColumn={sortColumn}
                onSort={(sortColumn) => onSort(sortColumn)}
            />
            <TableBody columns={columns} data={data} />
        </table>
    );
};

export default Table;
