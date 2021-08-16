import { ButtonBase, Grid, Paper, Typography } from "@material-ui/core";
import React from "react";
import { makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
      },
      paper: {
        padding: theme.spacing(2),
        margin: 'auto',
        maxWidth:"100%",
      },
      image: {
        width: 128,
        height: 128,
      },
      img: {
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
      },
}))

function Detail(props) {

    const classes = useStyles();

    const imgUrl = "http://image.tmdb.org/t/p/original"

    return (
        <div>
            {/* <img src={imgUrl + props.poster} alt="Movie" /><br />
            {props.title}<br />
            {props.rating}<br />
            {props.date}<br />
            {props.length}<br />
            {props.desc}<br />
            {props.cast}<br />
            {props.director}<br /> */}

<div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="Movie" src={imgUrl+props.poster} />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                  {props.title}
                </Typography>
                <Typography variant="body2" gutterBottom>
                  {props.cast}
                </Typography>
                <Typography variant="body2" gutterBottom>
                  {props.director}
                </Typography>
                <Typography variant="body2" gutterBottom>
                  {props.length} minutes
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {props.date}
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body2" style={{ cursor: 'pointer' }}>
                  {props.desc}
                </Typography>
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1">{props.rating}</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
        </div>
    )
}

export default Detail;