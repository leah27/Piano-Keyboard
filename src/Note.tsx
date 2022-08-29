import React from 'react'
import styled from 'styled-components'

type PropsTypes = {
    color: string,
    note: string,
    clickHandler: (e: React.MouseEvent<HTMLButtonElement>) => void
}

const Note:React.FC<PropsTypes> = ({color, note, clickHandler}) =>
    color === 'white' ? <White value={note} color={color} onClick={clickHandler} />
        : <Black value={note} color={color} onClick={clickHandler} />

export default Note

const Black = styled.button`
    background: ${(props) => props.color};
    height: 160px;
    width: 22px;
    position: absolute;
    margin: 1px 1px 1px -11px;
    border: none;
    //box-shadow: 0 0 1.25rem rgb(0 0 0 / 55%);;
    :active {
      background: #333;
    }
  /* Chrome only: */
   //@supports (-webkit-appearance: none)  {
   //   & {
   //     width: 22px;
   //     }
   // }
`

const White = styled.button`
    background: ${(props) => props.color};
    height: 230px;
    width: 1.9vw;
    border: 1px solid black;
    box-shadow: 2px 5px;
    margin: 1px;
    :active {
      background: #eee;
    }
  /* Chrome only: */
  //@supports (-webkit-appearance: none)  {
  //  & {
  //    width: 38px;
  //  }
  }
`