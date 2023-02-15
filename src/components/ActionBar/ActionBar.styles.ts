import styled from "styled-components";

export const ActionBarContainer = styled.div.attrs(
    (props: { isLocked: boolean }) => props
)`
    width: 250px;
    height: 100%;
    box-sizing: border-box;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: center;
    transition: 0.2s ease-in transform;
    animation: 4s slide-in ease;
    transform: translateX(${(props) => (props.isLocked ? "40" : "0")}px);

    @keyframes slide-in {
        0% {
            transform: translateX(280px);
        }
        75% {
            transform: translateX(280px);
        }
        100% {
            transform: translateX(0);
        }
    }
`;

export const ActionButtonsContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    background-color: #adb9e3;
    border-top-left-radius: 7px;
    border-bottom-left-radius: 7px;
    box-shadow: 10px 5px 5px #adb9e3;
    border: 1px solid black;
`;

export const ActionButton = styled.button`
    height: 30px;
    cursor: pointer;
    margin-left: 12px;
    margin-right: 45px;
    margin-top: 12px;
    margin-bottom: 12px;
    background-color: #9ad5ca;
    border-radius: 5px;
    font-family: monospace;
`;

export const AnimationSection = styled.div`
    width: 100%;
    background: #84bcda;
    padding: 10px;
    box-sizing: border-box;
    border-top-left-radius: 7px;
    border-bottom-left-radius: 7px;
    border: 1px solid black;
    box-shadow: 10px 5px 5px #84bcda;
`;
