import React from 'react'
import { useSelector } from "react-redux";
import { getUpComingMovie } from '../slice/getmovies';
import styled from 'styled-components';
import Moviecard from '../component/Moviecard';
import Loader from '../component/Loader';
import withEnhancement from '../component/Hoc';
const Upcoming = (props) => {
    const { currentPage, isLoad, incrementCurrentPage, decrementCurrentPage } = props;
    const upComingMovieData = useSelector((state) => state?.moviesData?.upComingMovie)
    return (
        <Wrapper>
            {
                isLoad
                    ?
                    <>
                        <div className='movie-heading'><h2>UPCOMING MOVIES</h2></div>
                        <div className='cards'>
                            {
                                upComingMovieData?.results.map((val) => {
                                    return <Moviecard movieDetail={val} />
                                })
                            }
                        </div>
                        <div className='pagination'>
                            {currentPage > 1
                                ?
                                <button className='prev' onClick={() => decrementCurrentPage()}>PREV</button>
                                :
                                null
                            }
                            {currentPage < upComingMovieData?.total_pages
                                ?
                                <button className='next' onClick={() => incrementCurrentPage()}>NEXT</button>
                                :
                                null
                            }
                        </div>
                    </>
                    :
                    <Loader />
            }
        </Wrapper>
    )
}

export default withEnhancement(Upcoming, 1, "upcoming", getUpComingMovie)

const Wrapper = styled.div`
max-width: 1800px;
background-color: #060619;
color: white;
padding: 13px;
margin: auto;
.movie-heading{
text-align: center;
font-size: 25px;
color: black;
font-weight: bold;
color: white;
}
.cards{
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
}
.pagination{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 13px;
    button{
        padding: 10px;
        border-radius:3px;
        background-color: #190f4f;
        color: white;
        cursor: pointer;
        border: 2px solid #190f4f;
        &:hover{
            transform: scale(1.1);
        }
    }
}

@media (max-width:450px) {
    .movie-heading{
        font-size: 20px;
    }

}
`;