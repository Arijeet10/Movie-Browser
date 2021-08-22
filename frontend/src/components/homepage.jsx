import React from 'react'
import {connect} from "react-redux";
// import { UPCOM_MOVIES } from '../actions/types';
import Loading from "./loading";
import MovieContainer from './movieContainer';
import NavBar from "./searchbar";

// const getData = nextPageNo => dispatch => {
//     axios.get(`http://localhost:5000/list/${nextPageNo}`)
//         .then(res => {
//             dispatch({
//                 type: UPCOM_MOVIES,
//                 payload: res.data,
//             })
//         })
//         .catch(err => { console.log(err) })
// }

function HomePage(props) {

    const {loading}=props;

    // const [totalPage, setTotalPage] = useState();
    // const [nextPageNo,setNextPageNo]=useState(1);
    // const [state,setState]=useState();

    // function getTotalPage() {
    //     axios.get(`http://localhost:5000/list/`)
    //         .then(res => { setTotalPage(res.data) })
    //         .catch(err => { console.log(err) })
    // }



    // function fetchData(){
    //     getTotalPage();
    //     setNextPageNo(nextPageNo+1)
    //     getData(nextPageNo);
    // }

    // useEffect(() => {
    //     fetchData()
    //     // eslint-disable-next-line
    // }, [state])




    return (
        <div>
            <NavBar />
            {loading?<Loading />:<MovieContainer />}
        </div>
    )
}


const mapStateToProps=state=>({
    loading:state.movies.loading
})


export default connect(mapStateToProps)(HomePage);
