import React from 'react'
import {useParams} from 'react-router-dom'
import FetchMovie from "./FetchMovie";
function Category(props) {
    const params = useParams();
    const { query,id } = params;
    const title=`${query} MOVIES`.toUpperCase()
    return (
        <div>
            <h1 id={query} className='mt-5 text-light'>{title}</h1>
            <FetchMovie category={query} id={id} />
        </div>
    )
}

export default Category
