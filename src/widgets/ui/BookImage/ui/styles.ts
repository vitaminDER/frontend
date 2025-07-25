import styled from "styled-components";


export const BoxBook = styled.div`
    width: 300px;
    height: 400px;
    display: flex;
    flex-direction: row;
    background-color: #747bff;
    border-radius: 8px;
    box-shadow: 10px 9px 15px 2px rgba(0, 0, 0, 0.31);
    -webkit-box-shadow: 10px 9px 15px 2px rgba(0, 0, 0, 0.31);
    -moz-box-shadow: 10px 9px 15px 2px rgba(0, 0, 0, 0.31);
`;
export const BoxLeft = styled.div`
    width: 4px;
    height: 400px;
    background-color: #646bf3;
    border-radius: 8px;
`;
export const BoxLeftOne = styled.div`
    width: 10px;
    height: 400px;
    background-color: #747bff;
    border-radius: 8px;
`;
export const BoxRight = styled.div`
    width: 100%;
    height: 400px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 20px;
    align-items: center;
    background-color: #747bff;
    border-radius: 8px;
`;

export const ContainerLine = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 5px;
`;
export const LineHorizontal = styled.div`
    width: 150px;
    height: 2px;
    background-color: #d2f5f0;
`;

export const RombBox = styled.div`
    width: 8px;
    height: 8px;
    rotate: 45deg;
    background-color: #fff;
`;
export const RombBoxSmall = styled.div`
    width: 4px;
    height: 4px;
    rotate: 45deg;
    background-color: #fff;
`;

