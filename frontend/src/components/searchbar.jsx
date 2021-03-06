import React, { useState } from "react";
import { searchMovie, fetchMovies, setLoading, fetchUpcomming } from "../actions/searchActions";
import { connect } from "react-redux";
import { AppBar, IconButton, InputAdornment, TextField } from "@material-ui/core";
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import { MuiThemeProvider, createTheme } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

const theme = createTheme({
    palette: {
        primary: {
            main: "#03a9f4"
        }
    }
});

function NavBar(props) {

    const [searchData,setSearchData]=useState()

    function handleReduxChange(event) {
        event.preventDefault();
        props.searchMovie(event.target.value)
        setSearchData(event.target.value)
    }

    function handleSubmit(event) {
        if(searchData===undefined){
            alert("search empty")
        }else{
            event.preventDefault();
            props.fetchMovies(props.text)
            props.setLoading();
        }
    }


    return (
        <div>
            <AppBar
                style={
                    {
                        border: "2px solid #9e9e9e",
                        borderTopStyle: "none",
                        borderLeftStyle: "none",
                        borderRightStyle: "none"
                    }
                }
                color="inherit"
                position="relative"
            >
                <div style={
                    {
                        display: "block",
                    }
                }
                >
                    <div style={
                        {
                            width: "50%",
                            display: "flex",
                            float: "left",
                            border: "2px solid #fafafa"
                        }
                    }
                    >
                        <form onSubmit={handleSubmit}
                            style={
                                {
                                    width: "100%"
                                }
                            }
                        >
                            <MuiThemeProvider theme={theme}>
                                <TextField
                                    style={
                                        {
                                            width: "100%"
                                        }
                                    }
                                    InputProps={{
                                        startAdornment:
                                            <InputAdornment position="start">
                                                <IconButton onClick={handleSubmit}>
                                                    <SearchIcon style={{ color: "#03a9f4" }}  />
                                                </IconButton>
                                            </InputAdornment>
                                    }}
                                    placeholder="search"
                                    onChange={handleReduxChange}
                                    variant="outlined"

                                />
                            </MuiThemeProvider>
                        </form>
                    </div>
                    <Link to={'/'} style={{ textDecoration: 'none' }}>
                        <IconButton style={{ float: "right", color: "#03a9f4" }}>
                            <HomeIcon />
                        </IconButton>
                    </Link>
                </div>
            </AppBar>
        </div>
    )
}


const mapStateToProps = state => ({
    text: state.movies.text
})

export default connect(
    mapStateToProps,
    { searchMovie, fetchMovies, setLoading, fetchUpcomming }
)(NavBar)
























