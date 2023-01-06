import styled from "styled-components";
import palette from "../../Shared/palette";

export const Container = styled.div`
    padding: 20px;
    margin-bottom: 20px;
    border-radius: 10px;
    border-left: 5px solid ${palette.white};
    background-color: ${palette.white};
    transition: ${palette.transition};
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;

    &:hover {
        border-color: ${palette.primary};
    }

    img {
        width: 80px;
        height: 80px;
        object-fit: contain;
        margin-right: 30px;
        cursor: pointer;
    }

    @media screen and (max-width: 900px) {
        padding-top: 40px;
        flex-direction: column;
        align-items: flex-start;
        margin-bottom: 45px;

        img {
            width: 50px;
            height: 50px;
            margin: 0;
            position: absolute;
            top: -25px;
            left: 20px;
        }
    }
`

export const Details = styled.div`
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;

    > div {
        display: flex;
        align-items: center;
        justify-content: flex-start;
    }

    h2 {
        color: ${palette.veryDarkGrayishCyan};
        margin: 10px 0;
        cursor: pointer;
    }

    h3 {
        color: ${palette.primary};
        margin-right: 10px;
    }

    span {
        color: ${palette.darkGrayishCyan};
        margin-right: 10px;
        padding-right: 10px;
        position: relative;

        ::after {
            content: "";
            position: absolute;
            top: 50%;
            left: 100%;
            transform: translate(-50%, -50%);
            width: 3px;
            height: 3px;
            background-color: ${palette.darkGrayishCyan};
            border-radius: 100%;
        }

        :last-child::after {
            display: none
        }
    }

    @media screen and (max-width: 900px) {
        width: 100%;
        padding-bottom: 20px;
        margin-bottom: 20px;
        border-bottom: 1px solid ${palette.background}
    }
`

export const ProjectTagsContainer = styled.div`
    display: flex;
    align-items: center;
`