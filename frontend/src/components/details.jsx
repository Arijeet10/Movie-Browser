import React from "react";

function Detail(props){

    return(
        <div>
            {props.title}<br />
            {props.rating}<br />
            {props.date}<br />
            {props.length}<br />
            {props.desc}<br />
            {props.cast}<br />
            {props.director}<br />
        </div>
    )
}

export default Detail;