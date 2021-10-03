import styled from 'styled-components';
import Tooltip from '@mui/material/Tooltip';

export const CardContainer = styled.div`
    width: 200px;
    padding: 20px;

    text-align: center;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    border-radius: 5px;
    border: 1px solid white;

    margin: 20px 20px 20px 20px;

    img{
        width: 128px;
        height: 128px;
    }

    box-shadow:
        0px 0px 11.6px rgba(0, 0, 0, 0.025),
        0px 0px 26.9px rgba(0, 0, 0, 0.038),
        0px 0px 48.4px rgba(0, 0, 0, 0.048),
        0px 0px 80.3px rgba(0, 0, 0, 0.056),
        0px 0px 132.3px rgba(0, 0, 0, 0.065),
        0px 0px 231.2px rgba(0, 0, 0, 0.074),
        0px 0px 500px rgba(0, 0, 0, 0.09);

    :hover{
        border: 1px solid rgba(0, 0, 0, 0.3);
        cursor: pointer;
    }

`;

export const CardHeader = styled.span`
    display: flex;
    font-size: 15px;
    text-align: center;
    justify-content: center;
    align-items: center;
`;

export const RateIconContainer = styled(Tooltip)`
    :hover{
        opacity: 0.6;
        cursor: pointer;
    }
`;