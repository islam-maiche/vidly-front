import React from "react";

const TableHeader = (props) => {
    const { columns, sortColumn, onSort } = props;

    const raiseSort = (path) => {
        if (sortColumn.path == path) {
            sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
        } else {
            sortColumn.path = path;
            sortColumn.order = "asc";
        }

        onSort(sortColumn);
    };

    return (
        <thead>
            <tr>
                {columns.map((column) => (
                    <th
                        style={{ cursor: "pointer" }}
                        key={column.path || column.key}
                        onClick={() => raiseSort(column.path)}
                    >
                        {column.label}
                    </th>
                ))}
            </tr>
        </thead>
    );
};

export default TableHeader;
