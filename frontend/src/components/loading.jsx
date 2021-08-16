import React from 'react'
import loading from "../extras/loading.gif";

function Loading() {
    return (
        <div>
            <img
                src={loading}
                alt="movie poster"
                style={
                    {
                        width:'200px',
                        margin:'auto',
                        display:'block'
                    }
                }
            />
        </div>
    )
}

export default Loading;
