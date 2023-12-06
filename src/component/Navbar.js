import React from 'react'
import {styled} from "styled-components"
import {NavLink} from "react-router-dom"
import { CiSearch } from "react-icons/ci";
import { FiMenu } from "react-icons/fi";
import {useState} from "react"
import { useDispatch,useSelector } from 'react-redux';
import  { keyframes, css } from 'styled-components';
import { getSearchedValue } from '../slice/getmovies';
import { useNavigate } from 'react-router-dom';
export const Navbar = () => {
    const [toggleValue,setToggleValue]=useState(false);
    const [searchedData,setSearchedData]=useState("");
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const handleSearchBar=()=>{
        dispatch(getSearchedValue(searchedData));
        navigate("/searched-movies")
    }
  return (
    <Wrapper animate={toggleValue}>
        <div className='brandname'>
            <h2>MovieDb</h2>
        </div>
        <nav className='navbar'>
            <ul>
                <li><NavLink to="/">Popular</NavLink></li>
                <li><NavLink to="/top-rated">Top Rated</NavLink></li>
                <li><NavLink to="/upcoming">Upcoming</NavLink></li>
            </ul>
            <div className='searchbar'>
                <div className='searchbox'>
                <input type='text' onChange={(e)=>setSearchedData(e.target.value)}/>
                </div>
                <div className='searchicon' onClick={()=>handleSearchBar()}><CiSearch/></div>
            </div>
        </nav>
        <nav className='responsive_navbar'>
            <ul>
                <li><NavLink to="/">Popular</NavLink></li>
                <li><NavLink to="/top-rated">Top Rated</NavLink></li>
                <li><NavLink to="/upcoming">Upcoming</NavLink></li>
            </ul>
        </nav>
       <div className='menuicon' onClick={()=>setToggleValue(!toggleValue)}><FiMenu/></div>
    </Wrapper>
  )
}
const fadeIn = keyframes`
  from {
    top:-120px;
  }
  to {
    top:38px;
  }
`;
const bottomTop = keyframes`
  from {
    top:38px;
  }
  to {
    top:-120px;
  }
`;

const Wrapper=styled.div`

color: white;
background-color: #190f4f;
max-width: 1600px;
/* border: 2px solid red; */
margin: auto;
padding: 0 50px;
display: flex;
justify-content: space-between;
align-items: center;
.responsive_navbar{
    display: none;
}
.navbar{
    display: flex;
    
    ul{
        display:flex;
        margin: 0 10px;
        li{
            list-style: none;
            padding: 3px 7px;
            .active{
                color: yellow;
            }
            a{
                text-decoration: none;
                color: white;
            }
        }
    }
}
.searchbar{
    display: flex;
    justify-content: center;
    align-items: center;
    div{
        /* border: 2px solid black; */
        display: flex;
        justify-content: center;
        align-items: center;
        height: 25px;
        input{
            border: none;
            width: 95%;
            height: 95%;
            outline: none;
            padding: 0 3px;
        }
    }
    .searchbox{
        /* border: 2px solid black; */
        border-radius: 3px;
    }
    .searchicon{
        font-size: 22px;
    }
}
.menuicon{
    display: none;
}

@media (max-width:750px) {
 .navbar{
    display: none;
 }
 position: relative;
 .responsive_navbar{
    display: block;
   /* border: 2px solid pink; */
   position: absolute;
    width: 99%;
    top: -35px;
    left: 0;
    z-index: 1;
    ${(props) => props.animate? css`animation: ${fadeIn} 1s ease-in-out forwards;`:css`animation: ${bottomTop} 1s ease-in-out forwards;`}
    background-color:black;
    opacity:0.8;

    ul{
        display:flex;
        justify-content:center;
        align-items:center;
        flex-direction:column;
        li{
            list-style: none;
            margin:5px 0px;
            a{
                text-decoration:none;
                color:white;

            }
            .active{
                color:yellow;
                font-weight:bold;
            }
        }
    }
 }
 .menuicon{
        display: block;
    }
}
`;
