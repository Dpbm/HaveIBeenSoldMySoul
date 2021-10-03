import styled from 'styled-components';


export const MainContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;

    
`;

export const HeaderContainer = styled.div`
    text-align: center;
    
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    margin-top: 20px;

    h3{ 
        margin-top: -10px;
        opacity: 0.6;
    }
`;

export const SearchContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 60px;
    margin-bottom: 60px;
    width: 40%;
    padding: 4px;
    border-radius: 10px;
    border: 1px solid rgba(0, 0, 0, 0.7);

    svg:hover{
        cursor: pointer;
        opacity: 0.6;
    }
    input{ 
        text-align: center;
        width: 90%;
        height: 60px;
        font-size: 30px;
        border: 0;
        outline: 0;
    }


    @media(max-width:900px){ width: 70%; }

`;

export const CardsContainer = styled.div`
    display: flex;
    place-items: center;
    width: 80%;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    flex-wrap: wrap;
`;

export const All = styled.h1`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 40px;
    svg:hover{
        opacity: 0.6;
        cursor: pointer;
    }
`;