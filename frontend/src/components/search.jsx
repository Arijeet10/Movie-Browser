import { Card, CardContent, CardMedia, Typography } from "@material-ui/core";
import React from "react";
import { makeStyles } from '@material-ui/core/styles';

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

function Search(props) {

    const classes = useStyles();

    const imgUrl = "http://image.tmdb.org/t/p/original"

    return (
        <div>
            {/* <p>
                <img src={imgUrl + props.image} alt="Movie" /><br />
                {props.title}<br />
                {props.rating}<br />
                {props.desc}<br />
            </p> */}


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
    )
}

export default Search;