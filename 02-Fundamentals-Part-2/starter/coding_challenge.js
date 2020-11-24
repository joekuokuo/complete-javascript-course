const calAvg = (score1, score2, score3) => {
    return (score1 + score2 + score3) / 3;
}

function checkWinner(team1, avgScore1, team2, avgScore2) {
    if (avgScore1 >= avgScore2 * 2) {
        return `${team1} win ( ${avgScore1} vs ${avgScore2})`;
    } else if (avgScore2 >= avgScore1 * 2) {
        return `${team2} win (${avgScore2} vs ${avgScore1})`;
    }
}
avgDol = calAvg(4, 23, 7)
avgKoa = calAvg(65, 54, 49)
const res = checkWinner("Dol", avgDol, "Koa", avgKoa)
console.log(res);