import React from "react";

const ListGroup = (props) => {
    const { items, valueProperty, textProperty, selectecItem, onItemSelect } =
        props;
    return (
        <ul className="list-group" style={{cursor: "pointer"}}>
            <li
                onClick={() => onItemSelect(null)}
                key={0}
                className={"list-group-item" + (!selectecItem ? " active" : "")}
            >
                All genre
            </li>
            {items.map((item) => (
                <li
                    onClick={() => onItemSelect(item)}
                    key={item[valueProperty]}
                    className={
                        item == selectecItem
                            ? "list-group-item active"
                            : "list-group-item"
                    }
                >
                    {item[textProperty]}
                </li>
            ))}
        </ul>
    );
};

ListGroup.defaultProps = {
    valueProperty: "_id",
    textProperty: "name",
};

export default ListGroup;
