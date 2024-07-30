
export function QuestionsCards({comments}) {


  if(comments.length === 0) return(
    <div>
      <h1>loading...</h1>
    </div>
  )
  else return (
    <div className="lg:px-24 px-4  w-full">
      {
        comments.map((comment) =>{
          return(
          <div className="mockup-window border-base-300 border ">

          <div className="border-base-300 flex flex-col justify-center border-t px-4 py-16">
            <a className=" text-3xl font-bold text-gray-500">Anon User</a>
            <a href="" className="text-2xl">{comment.date_message}</a>
            <a href="" className="text-xl">{comment.message}</a>  </div>
        </div>
       )})

      }
    

    </div>
  )
}