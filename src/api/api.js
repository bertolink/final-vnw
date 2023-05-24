import axios from "axios" 

const Api = axios.create({
  baseURL:"https://api.themoviedb.org/3",
  headers:{
    Authorization:`Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMzBkMjAwN2E3YTYyMmY4N2MwZTBmMDI0NTU4YzA1MSIsInN1YiI6IjY0NWVjYzE3ZTNmYTJmMDBlNDAyN2UxMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.J9vVYHORLmxCUsS7qHW36YAFvfz3tInqACzrmzMZ0hQ`
  }
})

export default Api