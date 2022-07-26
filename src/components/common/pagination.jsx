import React from "react";
import propTypes from "prop-types"
import _ from 'lodash';
import { paginate } from "../../utils/paginate";

const Pagination = props => {
    const {itemsCount, pageSize, currentPage, onPageChange} = props;

    const pageCount = Math.ceil(itemsCount/pageSize);
    if (pageCount === 1) return null;

    const pages = _.range(1, pageCount + 1);

    // const [count]
    return(
        <nav aria-label="Page navigation example">
            <ul className="pagination">
                {pages.map(page => (
                    <li key={page} className={"page-item" + ((page === currentPage) ? ' active' : '')}>
                        <a className="page-link" onClick={() => onPageChange(page)} style={{cursor: 'pointer'}}>{page}</a>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

Pagination.propTypes = {
    itemsCount: propTypes.number.isRequired, 
    pageSize: propTypes.number.isRequired, 
    currentPage: propTypes.number.isRequired, 
    onPageChange:  propTypes.func.isRequired
}

export default Pagination;