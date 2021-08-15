import React from "react";
import { Link } from "react-router-dom";
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, Typography } from "@material-ui/core";


const useStyles = makeStyles({
    root: {
        maxHeight: 400
    },
    media: {
        height: 300,
        width: "auto",
        objectFit: "cover"
    }
})


function List(props) {
    const classes = useStyles();

    const imgUrl = "http://image.tmdb.org/t/p/original" //default image url(base url+image size)

    function handleClick() {
        props.showDetails(props.uniqueId)
    }

    return (
        // <div>
        //     <Link to="/detail">
        //         <div onClick={handleClick}>
        //             <ul>
        //                 <li>
        //                     <img src={imgUrl + props.image} alt="Movie" />
        //                 </li>
        //                 <li>{props.title}</li>
        //                 <li>{props.rating}</li>
        //                 <li>{props.desc}</li>
        //             </ul>
        //         </div>
        //     </Link>
        // </div>

        <div>
            <Link to="/detail" style={{ textDecoration: 'none' }}>
                <div className="list" onClick={handleClick}>
                    <Card className={classes.root}>
                        <CardMedia
                            className={classes.media}
                            image={imgUrl + props.image}
                            title="Movie"
                        />
                        <CardContent>
                            <div style={{ display: "flex" }}>
                                <Typography variant="body2">
                                    {props.title}
                                </Typography>
                                <Typography style={{ marginLeft: 100 }} variant="caption" color="textSecondary">
                                    {props.rating}
                                </Typography>
                            </div>
                            <Typography variant="caption">
                                {props.desc}
                            </Typography>
                        </CardContent>
                    </Card>
                </div>
            </Link>
        </div>
    )
}

export default List;