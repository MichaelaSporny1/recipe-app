import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledHeader = styled.header`
    background-image: url(${require(`../assets/cocktail-banner-3.jpg`)});
    background-size: cover;
    background-color: #282c34;
    width: 100%;
    height: 100vh;
    h1 {
        margin-top: 7rem;
    }
`;

const Header = () => (
    <StyledHeader>
        <h1>Tequila Mockingbird</h1>
    </StyledHeader>
)

export default Header;