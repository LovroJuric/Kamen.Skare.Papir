const options = ["kamen", "skare", "papir"];
const rezultatParagraf = document.getElementById("rezultat");
let userScore = 0;
let computerScore = 0;
const playerScoreCount = document.getElementById("korisnik-score");
const kompjuterScoreCount = document.getElementById("kompjuter-score");

const updateScore = () => {
    playerScoreCount.textContent = userScore;
    kompjuterScoreCount.textContent = computerScore;
};


const checkResult = (event) => {
    const userInput = event.target.textContent.toLowerCase();
    const rand = options[Math.floor(Math.random() * options.length)];

    console.log(rand);

    if (userInput === rand) {
        rezultatParagraf.textContent = "Izjednaceno je";
    } else if(
        (userInput === "kamen" && rand === "skare") ||
        (userInput === "skare" && rand === "papir") ||
        (userInput === "papir" && rand === "kamen") 
    ) {
        rezultatParagraf.textContent = `Cestitamo, ${userInput} pobjeduje ${rand}`; 
        userScore++;
        updateScore();
    } else {
        rezultatParagraf.textContent = "Izgubili ste.";
        computerScore++;
        updateScore();
    }
}

const buttonArray = document.querySelectorAll("button");
buttonArray.forEach((button) => {
    button.addEventListener("click", checkResult);
});

