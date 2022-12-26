import styled from "styled-components";
import palette from "../../Shared/palette";

export const Container = styled.div`
    padding: 5px 10px;
    margin: 0 5px;
    background-color: ${palette.background};
    color: ${palette.primary};
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    transition: ${palette.transition};
    cursor: pointer;

    &.active {
        background-color: ${palette.primary};
        color: ${palette.white};
    }
`