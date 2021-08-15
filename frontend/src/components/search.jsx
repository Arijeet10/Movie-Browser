import React from "react";

function Search(props) {

    const imgUrl = "http://image.tmdb.org/t/p/original"

    return (
        <div>
            <p>
                <img src={imgUrl + props.image} alt="Movie" /><br />
                {props.title}<br />
                {props.rating}<br />
                {props.desc}<br />
            </p>
        </div>
    )
}

export default Search;