import styled from "styled-components";
import palette from "../../Shared/palette";

export const Container = styled.div`
    background-color: ${palette.white};
    padding: 20px 30px;
    display: flex;
    align-items: center;
    transform: translateY(-50%);
    border-radius: 10px;
    opacity: 0;
    transition: ${palette.transition};
    display: flex;
    align-items: center;
    justify-content: space-between;

    &.active {
        opacity: 1;
    }

    > div {
        display: flex;
        align-items: center;
        justify-content: flex-start;
    }
`

export const SingleProjectTag = styled.div`
    padding: 5px 40px 5px 10px;
    margin: 0 5px;
    background-color: ${palette.background};
    color: ${palette.primary};
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    transition: ${palette.transition};
    position: relative;

    button {
        border: none;
        position: absolute;
        top: 0;
        right: 0;
        width: 30px;
        height: 100%;
        cursor: pointer;
        transition: ${palette.transition};
        color: ${palette.veryDarkGrayishCyan};
        font-weight: bold;
        border-radius: 0 5px 5px 0;
        
        :hover {
           background-color: ${palette.veryDarkGrayishCyan};
           color: ${palette.white}
        }
    }
`

export const ClearButton = styled.div`
    color: ${palette.primary};
    font-weight: bold;
    transition: ${palette.transition};
    border-top: 2px solid ${palette.white};
    border-bottom: 2px solid ${palette.white};
    cursor: pointer;

    :hover {
        border-bottom: 2px solid ${palette.primary};
        letter-spacing: 1px;
    }
`