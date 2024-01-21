import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"

function Survey() {

    const { questionNumber } = useParams()

    return (
        <div>
            <h1>Questionnaire 🧮</h1>
            <h2>Question {questionNumber}</h2>
            <br/>
            {questionNumber > 1 && (<Link to={`/survey/${questionNumber - 1}`}>précédent</Link>)}
            <br/>
            {questionNumber < 10 ? (<Link to={`/survey/${+questionNumber + 1}`}>suivant</Link>) : 
            (<Link to="/results">Résultats</Link>)}
            
        </div>
    )
}

export default Survey