import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import styled from 'styled-components';
import { getCategories } from "../api/requests";

const StyledNav = styled.div`
    display: flex;
    justify-content: space-evenly;
    width: 80%;
    margin: auto;
    p {
        font-size: 18px;
        padding-left: 5px;
    };
    a {
        text-decoration: none;
        color: black;
    };
    span {
        display: flex;
        flex-direction: row;
        align-items: center;
    }
`

const Navbar = () => {
    const [categories, setCategories] = useState<any>([]);
    useEffect(() => {
        getCategories().then(category => {setCategories(category)})
    }, [])

    return (
        <StyledNav>
            {categories.map((category: any) => 
            <NavLink to={`/category/${category._id}`} 
            style={({ isActive }) => ({
                color: isActive ? '#4b925d' : '#000000'})} 
            key={category._id}> 
            <span><h2>{category._id}</h2><p>({category.count})</p></span> 
            </NavLink>)}
        </StyledNav>
    )
}
export default Navbar;