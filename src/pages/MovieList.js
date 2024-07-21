
import { Card } from "../components/Card"
import { useFetch } from "../hooks/useFetch";
export const MovieList = ({apiPath}) => {

  const{data:movies}=useFetch(apiPath)
  return (
    <main>
    <section className="min-h-5 max-w-7xl  mx-auto y-10">
      <div className="flex justify-start flex-wrap other:justify-evenly">
        {movies.map((movie)=>(
             <Card key={movie.id} movie={movie}/>
        ))}
         

     </div>
    </section>
    </main>
  )
}
