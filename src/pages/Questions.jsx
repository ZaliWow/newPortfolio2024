import { AskQuestions } from "../components/Questions/AskQuestions"
import { QuestionsCards } from "../components/Questions/QuestionsCards"

export function Questions(params) {
    return(
        <div className="w-full  h-fill flex flex-col items-center ">
<AskQuestions></AskQuestions>
<QuestionsCards></QuestionsCards>
        </div>
    )
}