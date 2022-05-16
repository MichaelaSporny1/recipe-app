import styled from 'styled-components';

const StyledHeader = styled.header`
    background-image: url(${require(`../assets/cocktail-banner-3.jpg`)});
    background-size: cover;
    background-color: #282c34;
    width: 100%;
    height: 100vh;
`;

const MyStyledHeader = () => (
    <StyledHeader>
        <h1>Recipe-App</h1>
    </StyledHeader>
)

export default MyStyledHeader;