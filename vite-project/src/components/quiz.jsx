import { useState} from 'react';
import Results from './results';
function Quiz(){
    const questionBank = [
        {
            question: "Qual a universidade em que Adriano Claysson se formou?",
            options: ["UnB","UCB","UDF","ITA"],
            answer: "UnB",
        },
        {
            question: "Qual o curso que Adriano Claysson fez primeiro?",
            options: ["Matemática","Física","Mecatrônica","Letras"],
            answer: "Matemática",
        },
        {
            question: "Qual a área do TCC de Adriano Claysson?",
            options: ["Visão Computacional","Large Language Models","Smart Grid","Controle Inteligente"],
            answer: "Visão Computacional",
        },
        {
            question: "Qual a melhor escolha para contratar?",
            options: ["Adriano Claysson"],
            answer: "Adriano Claysson",
        },
    ];

    const initialAnswers = [null, null, null, null];
    const [userAnswers, setUserAnswers] = useState(initialAnswers);   
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [isQuizFinished, setIsQuizFinished] = useState(false);

    const selectedAnswer = userAnswers[currentQuestion];
    

    function handleSelectOption(option){
        const newUserAnswers = [...userAnswers];
        newUserAnswers[currentQuestion] = option
        setUserAnswers(newUserAnswers);
    }

    function goToNext(){
        if(currentQuestion === questionBank.length - 1){
            setIsQuizFinished(true);
        }
        else{
            setCurrentQuestion(currentQuestion+1);
        }
    }

    function goToPrevious(){
        if(currentQuestion>0)
            setCurrentQuestion(currentQuestion-1);
    }

    function restartQuiz(){
        setUserAnswers(initialAnswers);
        setCurrentQuestion(0);
        setIsQuizFinished(false);
    }

    if(isQuizFinished){
        return <Results userAnswers={userAnswers} questionBank={questionBank} restartQuiz={restartQuiz} />;
    }
    else{
        return (
            <div> 
            <h2>Questão {currentQuestion + 1}</h2>
            <p className="question">{questionBank[currentQuestion].question}</p>
            {questionBank[currentQuestion].options.map((option) => (
                <button className={"option" + (selectedAnswer === option ? " selected" : "")} onClick={() => handleSelectOption(option)}>{option}</button>
            )
            )
            }

            

            <div className="nav-buttons">
                <button onClick={goToPrevious} disabled={currentQuestion <= 0   }>
                    Anterior
                </button>
                <button onClick={goToNext}     disabled={selectedAnswer === null}>
                    {currentQuestion === questionBank.length - 1 ? "Terminar Quiz" : "Próxima"}
                </button>

            </div>
        </div>
        );
    }
}

export default Quiz;