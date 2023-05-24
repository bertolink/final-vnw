import styled from "styled-components";

export const Container = styled.div`
width: 190px;
height: 343px;
margin: 10px 37px 30px 0px;
overflow-y: scroll;
::-webkit-scrollbar {width:1px;}

img{
  width: 100%;
  height: 270px;
  display: block;
  padding-bottom: 5px;
}

span {
  display: block;
  font-size: 17px;
  font-weight: bold;
}

small {
  font-weight: lighter;
  font-size: 13px;
}
`