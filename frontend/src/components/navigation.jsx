import React, { useState } from "react";

function Nav(){

    const [state,setState]=useState()

    function handleChange(event){
        setState(event.target.value)
    }

    function handleClick(event){
        event.preventDefault()
        console.log(state)
    }

    return(
        <div>
            <form>
            <input type="text" name="movie" value={state} placeholder="Search" onChange={handleChange} />
            <button type="submit" onClick={handleClick}>Go</button>
            </form>
            <button type="submit">Home</button>
        </div>
    )
}

export default Nav;