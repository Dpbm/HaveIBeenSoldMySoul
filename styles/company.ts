import styled from 'styled-components';

export const HeaderContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    width: 60%;
    font-size: 30px;

    img{
        width: 128px;
        height: 128px;
        image-rendering: optimizeQuality;
    }

    h1{ opacity: 0.6; }
`;

export const TermsContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    #summary{ 
        max-width: 100%;
        overflow-x: auto;
        font-size: 20px; 
        display: flex;
        justify-content: center;
        flex-direction: column;
    }
    #termsTitle{
        font-size: 60px;
        text-decoration: underline;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;