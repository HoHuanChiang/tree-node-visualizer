import React from "react";
import { Algorithm } from "../../Board/Board";
import * as Styled from "./AlgorithmCards.styles";
export interface CardItemProps {
    backgroundColor: string;
    hoverRotateDegree: number;
    algorithm: Algorithm;
    zIndex: number;
}

interface CardsProps {
    hoverDisabled: boolean;
    onAlgorithmChange: (algorithm: Algorithm) => void;
}

const AlgorithmCards = (props: CardsProps) => {
    const { hoverDisabled, onAlgorithmChange } = props;
    const [cardItems, setCardItems] = React.useState<CardItemProps[]>([
        {
            backgroundColor: "var(--dfs-card-color)",
            hoverRotateDegree: 0,
            algorithm: Algorithm.DFS_INORDER,
            zIndex: 1,
        },
        {
            backgroundColor: "var(--bfs-card-color)",
            hoverRotateDegree: 0,
            algorithm: Algorithm.BFS,
            zIndex: 0,
        },
    ]);

    const onMouseEnter = () => {
        if (hoverDisabled) {
            return;
        }
        const copyCardItems = [...cardItems];
        copyCardItems[0].hoverRotateDegree = 10;
        copyCardItems[1].hoverRotateDegree = -10;
        setCardItems(copyCardItems);
    };

    const onMouseLeave = () => {
        if (hoverDisabled) {
            return;
        }
        const copyCardItems = [...cardItems];
        copyCardItems[0].hoverRotateDegree = 0;
        copyCardItems[1].hoverRotateDegree = 0;
        setCardItems(copyCardItems);
    };

    const onCardClick = (algorithm: Algorithm) => {
        if (hoverDisabled) {
            return;
        }
        const copyCardItems = [...cardItems];
        let index = 0;
        let pickedCardIndex = copyCardItems.length;
        copyCardItems.forEach((card) => {
            if (card.algorithm == algorithm) {
                card.zIndex = pickedCardIndex;
            } else {
                card.zIndex = index;
                index++;
            }
            card.hoverRotateDegree = 0;
        });
        setCardItems(copyCardItems);
        onAlgorithmChange(algorithm);
    };

    const renderAlgorithmOptions = () => {
        return (
            <Styled.AlgorithmnOptionContains
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            >
                {cardItems.map((x, index) => {
                    return (
                        <Styled.AlgorithmCard
                            key={x.algorithm}
                            cardItemProps={x}
                            onClick={() => {
                                onCardClick(x.algorithm);
                            }}
                            className={index === 0 ? "instructionCard" : ""}
                        >
                            {x.algorithm}
                        </Styled.AlgorithmCard>
                    );
                })}
            </Styled.AlgorithmnOptionContains>
        );
    };

    return renderAlgorithmOptions();
};
export default AlgorithmCards;
