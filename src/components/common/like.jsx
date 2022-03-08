import React from "react";

function Like({liked, onClick}) {
    let classes = "fa fa-heart";
    if (!liked) classes += "-o";

    return(
        <React.Fragment>
            <i onClick={onClick} className={classes} aria-hidden="true" style={{cursor: 'pointer'}}></i>
        </React.Fragment>
    )
}

export default Like;