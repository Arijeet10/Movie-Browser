import React, { useEffect, useState } from 'react'
import { connect } from "react-redux";
import { fetchDetails, setLoading } from "../actions/searchActions";
import Loading from "./loading";
import NavBar from "./searchbar";
import { makeStyles } from '@material-ui/core/styles';
import { ButtonBase, Grid, Paper, Typography } from "@material-ui/core";
import MovieContainer from "./movieContainer";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        margin: 'auto',
        maxWidth: "100%",
    },
    image: {
        width: 200,
        height: 200,
    },
    img: {
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
    },
}))


function Movie(props) {
    const classes = useStyles();

    const imgUrl = "http://image.tmdb.org/t/p/original"

    const { loading, detail, search } = props;

    function componentMounting() {
        props.fetchDetails(props.match.params.id);
        props.setLoading();
    }

    useEffect(() => {
        componentMounting();
        // eslint-disable-next-line
    },[])

    return (
        <React.Fragment>
            <NavBar />
            {loading ? <Loading />
                :
                (search ?
                    <MovieContainer />
                    :
                <div className={classes.root}>
                    <Paper className={classes.paper}>
                        <Grid container spacing={2}>
                            <Grid item>
                                <ButtonBase className={classes.image}>
                                    <img className={classes.img} alt="Movie" src={imgUrl + detail.moviePoster} />
                                </ButtonBase>
                            </Grid>
                            <Grid item xs={12} sm container>
                                <Grid item xs container direction="column" spacing={2}>
                                    <Grid item xs>
                                        <Typography gutterBottom variant="h6">
                                            {detail.movieName}
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary">
                                            Length:{detail.movieLength} minutes
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary">
                                            Release Date:{detail.releaseDate}
                                        </Typography>
                                        <Typography variant="body2" gutterBottom>
                                            Lead Actor:{detail.movieCast}
                                        </Typography>
                                        <Typography variant="body2" gutterBottom>
                                            Director:{detail.movieDirector}
                                        </Typography>
                                    </Grid>
                                    <Grid item>
                                        <Typography variant="caption" style={{ cursor: 'pointer' }}>
                                            {detail.movieDesc}
                                        </Typography>
                                    </Grid>
                                </Grid>
                                <Grid item>
                                    <Typography variant="subtitle1" color="textSecondary">Rating:{detail.movieRating}</Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Paper>
                </div>
                )

            }
        </React.Fragment>


    )
}

const mapStateToProps = state => ({
    loading: state.movies.loading,
    detail: state.movies.detail,
    search: state.movies.search,
})

export default connect(mapStateToProps, { fetchDetails, setLoading })(Movie)
