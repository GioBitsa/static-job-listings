import styled from "styled-components"
import palette from "../../Shared/palette";

export const Container = styled.div`
    height: 150px;
    background-color: ${palette.primary};

    img {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;
