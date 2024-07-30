import { AskQuestions } from "../components/Questions/AskQuestions"
import { QuestionsCards } from "../components/Questions/QuestionsCards"
import { useState, useEffect, useContext } from "react"
import { redirect } from "react-router-dom"
import { AuthContext } from "../context/AuthContext"
export function Questions(params) {


    const {auth} = useContext(AuthContext)
    const [comments, setComments] = useState([])
    useEffect(() => {
  
      const fetchData = async () => {
        try {
          const response = await fetch(import.meta.env.VITE_API_COMMENT)
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const result = await response.json();
          setComments(result)
          console.log(result)
        } catch (error) {
  
        }
      }
  
      fetchData()
  
    }, [])

    if (auth.token === null) return(
      <a > fafacho no tas login</a>
    )
    else return(
        <div className="w-full  h-fill flex flex-col items-center ">
<AskQuestions></AskQuestions>
<QuestionsCards comments={comments}></QuestionsCards>
        </div>
    )
}