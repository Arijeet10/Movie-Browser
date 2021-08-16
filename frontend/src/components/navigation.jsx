import React, { useState } from "react";
import axios from "axios";
import Search from "./search"
import { AppBar, FormControl, Grid, Input, InputAdornment, Paper } from "@material-ui/core";
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import { MuiThemeProvider, createTheme } from "@material-ui/core/styles";

const theme = createTheme({
    palette: {
        primary: {
            main: "#03a9f4"
        }
    }
});


// import { alpha, makeStyles } from '@material-ui/core/styles';

// const useStyles = makeStyles((theme) => ({
//     search:{
//         position:'relative',
//         borderRadius:theme.shape.borderrRadius,
//         backgroundColor
//     }
// }));


// const useStyles = makeStyles((theme) => ({
//     search: {
//         position: 'relative',
//         borderRadius: theme.shape.borderRadius,
//         backgroundColor: alpha(theme.palette.common.white, 0.15),
//         '&:hover': {
//             backgroundColor: alpha(theme.palette.common.white, 0.25),
//         },
//         marginRight: theme.spacing(2),
//         marginLeft: 0,
//         width: '100%',
//         [theme.breakpoints.up('sm')]: {
//             marginLeft: theme.spacing(3),
//             width: 'auto',
//         },
//     },
//     searchIcon: {
//         padding: theme.spacing(0, 2),
//         height: '100%',
//         position: 'absolute',
//         pointerEvents: 'none',
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent: 'center',
//     },
//     inputRoot: {
//         color: 'inherit',
//     },
//     inputInput: {
//         padding: theme.spacing(1, 1, 1, 0),
//         // vertical padding + font size from searchIcon
//         paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
//         transition: theme.transitions.create('width'),
//         width: '100%',
//         [theme.breakpoints.up('md')]: {
//             width: '20ch',
//         },
//     },
// }));


function Nav() {
    // const classes = useStyles();

    const [state, setState] = useState("")
    const [searchData, setSearchData] = useState()

    function handleChange(event) {
        const inputVal = event.target.value
        setState(inputVal)
    }

    // function searchMovie(){
    //     axios.post(`http://localhost:5000/search/${state}`)
    //      .then(res=>{setSearchData(res.data)})
    //      .catch(err=>{console.log(err)})
    // }

    function handleClick(event) {
        event.preventDefault()
        axios.post(`http://localhost:5000/search/${state}`)
            .then(res => { setSearchData(res.data) })
            .catch(err => { console.log(err) })
    }

    return (
        <div>
            {/* <form>
                <input type="text" name="movie" value={state} placeholder="Search" onChange={handleChange} />
                <button type="submit" onClick={handleClick}>Go</button>
            </form>
            <button type="submit">Home</button> */}

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
                        {/* <SearchIcon style={{ color: "#03a9f4" }} onClick={handleClick} />
                        <InputBase
                            style={
                                {
                                    width: "100%",
                                }
                            }
                            placeholder="search"
                            value={state}
                            onChange={handleChange}
                        /> */}
                        <FormControl
                            style={
                                {
                                    width: "100%"
                                }
                            }
                        >
                            <MuiThemeProvider theme={theme}>
                                <Input
                                    style={
                                        {
                                            width: "100%"
                                        }
                                    }
                                    startAdornment={
                                        <InputAdornment position="start">
                                            <SearchIcon style={{ color: "#03a9f4" }} onClick={handleClick} />
                                        </InputAdornment>
                                    }
                                    value={state}
                                    onChange={handleChange}
                                />
                            </MuiThemeProvider>
                        </FormControl>
                    </div>
                    <HomeIcon style={{ float: "right", color: "#03a9f4" }} />
                </div>
            </AppBar>


            <Grid container spacing={2}>
                {searchData && searchData.map(
                    (search, index) =>
                        <Grid item key={index} xs={9} md={3} lg={2}>
                            <Paper>
                                <Search key={index} title={search.original_title} desc={search.overview} rating={search.vote_average} image={search.poster_path} />
                            </Paper>
                        </Grid>
                )}
            </Grid>

        </div>
    )
}

export default Nav;