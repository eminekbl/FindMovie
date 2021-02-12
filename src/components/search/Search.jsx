import React from 'react'
import {useParams} from 'react-router-dom'
import FetchMovie from '../FetchMovie'
export default function Search(props) {
    const params = useParams();
    const { query } = params;
    console.log(`&query=${query}`)
    return (
        <div>
            <FetchMovie category='search' q={`&query=${query}`}/>
        </div>
    )
}
