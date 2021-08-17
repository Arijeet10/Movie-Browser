import React from 'react';
import {Link} from "react-router-dom";
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

function MovieCard(props) {

    const classes = useStyles();

    const imgUrl = "http://image.tmdb.org/t/p/original"

    return (
        <div>
            <Link to={'/movie/'+props.movie.id} style={{ textDecoration: 'none'}}>
            <div>
                    <Card className={classes.root}>
                        <CardMedia
                            className={classes.media}
                            image={imgUrl + props.movie.poster_path}
                            title="Movie"
                        />
                        <CardContent>
                            <div style={{ display: "flex" }}>
                                <Typography variant="body2">
                                    {props.movie.original_title}
                                </Typography>
                                <Typography style={{ marginLeft: 130 }} variant="caption" color="textSecondary">
                                    {props.movie.vote_average}
                                </Typography>
                            </div>
                            <Typography variant="caption">
                                {props.movie.overview}
                            </Typography>
                        </CardContent>
                    </Card>
                </div>
            </Link>
        </div>
    )
}

export default MovieCard;
