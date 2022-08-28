let userScore = 0;
let threeHoles = 9;
let sixHoles = 18;
let coursePar = 0;

let userName = prompt ("Welcome to GC mini golf! What is your name?");

var holeNumber = prompt (`Hi, ${userName}! Would you like to play 3 or 6 holes?`);

let prompts = [
    "How many putts for hole 1? (par: 3)",
    "How many putts for hole 2? (par: 3)",
    "How many putts for hole 3? (par: 3)",
    "How many putts for hole 4? (par: 3)",
    "How many putts for hole 5? (par: 3)",
    "How many putts for hole 6? (par: 3)"
];

for (let i = 0; i < holeNumber; i++) {
    let putts = Number(prompt(prompts[i]) );
    userScore += putts;
}

if (holeNumber == 3){
    coursePar = (userScore - threeHoles);

    if (userScore > threeHoles) {
        console.log(`Nice try, ${userName}... Your total par was: +${coursePar}.`);

    } else if (userScore < threeHoles) {
        console.log(`Great job, ${userName}! Your total par was: ${coursePar}.`);

    } else {
        console.log(`Good game, ${userName}. Your total par was: 0.`);
    }

} else {
    coursePar = (userScore - sixHoles);

    if (userScore > sixHoles) {
        console.log(`Nice try, ${userName}... Your total par was: +${coursePar}.`);

    } else if (userScore < sixHoles) {
        console.log(`Great job, ${userName}! Your total par was: ${coursePar}.`);

    } else {
        console.log(`Good game, ${userName}. Your total par was: 0.`);
    }
}