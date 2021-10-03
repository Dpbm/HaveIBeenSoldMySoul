import styled from 'styled-components';

export const TopBarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 0;
    box-sizing: border-box;
    margin-top: 0;
    h1{
        border: 1px solid blue;
        font-size: 20px;
        width: 100%;
        text-align: center;
        height: 20px;
    }

    svg:hover{
        cursor: pointer;
        opacity: 0.6;
    }
`;