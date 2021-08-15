import React from "react";
import { Link } from "react-router-dom";


function List(props) {

    const imgUrl = "http://image.tmdb.org/t/p/original" //default image url(base url+image size)

    function handleClick() {
        props.showDetails(props.uniqueId)
    }

    return (
        <div>
            <Link to="/detail">
                <div onClick={handleClick}>
                    <ul>
                        <li>
                            <img src={imgUrl + props.image} alt="Movie" />
                        </li>
                        <li>{props.title}</li>
                        <li>{props.rating}</li>
                        <li>{props.desc}</li>
                    </ul>
                </div>
            </Link>
        </div>

        // <div onClick={handleClick}>
        //     <ul>
        //         <li>
        //             <img src={imgUrl+props.image} alt="Movie" />
        //         </li>
        //         <li>{props.title}</li>
        //         <li>{props.rating}</li>
        //         <li>{props.desc}</li>
        //     </ul>
        // </div>
    )
}

export default List;