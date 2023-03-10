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
    transition: 0.2s ease-in transform;
    animation: var(--action-bar-total-time) action-bar-slide-in ease;
    transform: translateX(${(props) => (props.isLocked ? "40" : "0")}px);

    @keyframes action-bar-slide-in {
        0% {
            transform: translateX(280px);
        }
        60% {
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
    background-color: var(--action-container-background-color);
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    // box-shadow: 10px 5px 5px var(--action-container-background-color);
    border: 3px solid var(--settings-border-color);
`;

export const ActionButton = styled.button`
    height: 30px;
    cursor: pointer;
    margin-left: 12px;
    margin-right: 45px;
    margin-top: 12px;
    margin-bottom: 12px;
    background-color: var(--action-buttons-background-color);
    border-radius: 20px;
    border-width: 3px;
`;

export const AnimationSection = styled.div`
    width: 100%;
    background: var(--animation-settings-background-color);
    padding: 10px;
    box-sizing: border-box;
    border-top-left-radius: 7px;
    border-bottom-left-radius: 7px;
    border: 3px solid var(--settings-border-color);
    border-right-width: 0px;
    margin-bottom: 40px;
    //box-shadow: 10px 5px 5px var(--animation-settings-background-color);
`;
