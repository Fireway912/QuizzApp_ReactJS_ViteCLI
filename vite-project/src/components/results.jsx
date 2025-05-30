function Results({questionBank, userAnswers, restartQuiz}) {
    function getScore(){
        
        let finalScore = 0;
        userAnswers.forEach((answer, index) => {
            if(answer === questionBank[index].answer){
                finalScore++;
            }
        });
        return finalScore;
    }
    const score = getScore();
    
    return (
    <div>
        <img className="imgCenter" src="https://media.licdn.com/dms/image/v2/C4E03AQHnThspO5RrTA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1568036368456?e=1753920000&v=beta&t=apuzPQzFhK95rEjaS8SCkGSReXwMyE2HkhyvNhXWYo8" alt="Adriano :)" />
        <h2>
            Quiz Concluido!
        </h2>
        <p>
            Sua Pontuação: {score}/{questionBank.length}
        </p>
        <button className="restart-button" onClick={restartQuiz}>
            Recomeçar o Quiz
        </button>
    </div>
    );
}

export default Results;