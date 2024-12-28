export const calculateScores = ({correctansList,ansList}) => {
    let score = 0;
    correctansList.forEach((correctAnswer, index) => {
        if (correctAnswer === ansList[index]) {
            score+=10;
        }
        
    });
    return score;
}