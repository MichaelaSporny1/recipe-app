import styled from 'styled-components';
// import logo from './logo.svg';
import banner from './assets/banner.jpg';

const StyledHeader = styled.header`
    background-image: url(${require(`../assets/cocktail-banner-2.jpg`)});
    background-size: cover;
    background-color: #282c34;
    /* min-width: 100vw; */
    width: 100%;
    height: 350px;
`;

const MyStyledHeader = () => (
    <StyledHeader>
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <h1>Recipe-App</h1>
    </StyledHeader>
)



// const MyStyledButton = styled.button`
//     background-color: red;
// `;

// const MyButtonTest = () => (
//     <MyStyledButton>Klicka</MyStyledButton>
// )



export default MyStyledHeader;