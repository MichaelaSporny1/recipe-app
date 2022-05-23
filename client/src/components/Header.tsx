import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledHeader = styled.header`
    background-image: url(${require(`../assets/cocktail-banner.jpg`)});
    background-size: cover, contain;
    background-color: #282c34;
    width: 100%;
    height: 75vh;
    h1 {
        margin-top: 6rem;
    }
    a {
        text-decoration: none;
        color: white;
    }
`;

const Header = () => (
        <StyledHeader>
            <Link to="/">
                <h1>Happy Hour Every Hour</h1>
            </Link>
        </StyledHeader>
)

export default Header;