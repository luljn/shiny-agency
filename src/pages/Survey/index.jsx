import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"

function Survey() {

    const { questionNumber } = useParams()

    return (
        <div>
            <h1>Questionnaire 🧮</h1>
            <h2>Question {questionNumber}</h2>
            <br/>
            <Link to={`/survey/${questionNumber - 1}`}>précédent</Link>
            <Link to={`/survey/${+questionNumber + 1}`}>suivant</Link>
        </div>
    )
}

export default Survey