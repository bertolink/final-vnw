import {Container} from "./styled"

export default function Cards({img,title,year}){
  return(
    <Container>
      <img src={img} alt="imagem-do-card" />
      <span>{title}</span>
      <small>{year}</small>
    </Container>
  )
}