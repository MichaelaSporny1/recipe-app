import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import styled from 'styled-components';

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
        const fetchRecipes = async () => {
            console.log("hallå")
            // const category = await fetch('http://localhost:4000/categories')
            const category = await fetch(`${process.env.REACT_APP_API_BASE_URL}/categories`)
            .then(res => res.json())
            setCategories(category);
            console.log(category)
        }
        fetchRecipes();
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