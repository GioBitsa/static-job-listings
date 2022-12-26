import styled from "styled-components";
import palette from "../../Shared/palette";

export const Container = styled.div`
    background-color: ${palette.background};
    min-height: calc(100vh - 150px);
`

export const Wrapper = styled.div`
    max-width: 1440px;
    margin: 0 auto;
    padding: 0 70px;

    @media screen and (max-width: 900px) {
        padding: 0 35px;
    }

    @media screen and (max-width: 600px) {
        padding: 0 15px;
    }
`