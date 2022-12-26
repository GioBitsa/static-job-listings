import styled from "styled-components";
import palette from "../../Shared/palette";

export const Container = styled.div`
    padding: 5px 10px;
    margin: 0 5px;
    background-color: ${palette.veryDarkGrayishCyan};
    color: ${palette.white};
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 20px;
    text-transform: uppercase;

    &.new {
        background-color: ${palette.primary};
    }
`