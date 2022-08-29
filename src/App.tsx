import React from 'react';
import {notes} from "./helpers";
import styled, {createGlobalStyle} from 'styled-components'
import Octave from './Octave'

// $(window).resize(function(){
//   var ratio = $(window).width()/1340;
//   $('body').css('transform','scale('+(ratio)+')');
//   $('body').css('-ms-transform','scale('+(ratio)+')');
//   $('body').css('-moz-transform','scale('+(ratio)+')');
//   $('body').css('-webkit-transform','scale('+(ratio)+')');
// });
const n: number = 7

function App() {
  // const [ratio, setRation] = useState(1)
  // useEffect(() => {
  //   setRation( window.innerWidth/2000)
  //   console.log(ratio)
  // }, [useWindowSize()])
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log(e.currentTarget.value)
    const audio = new Audio(`sounds/piano_${e.currentTarget.value}.mp3`)
    audio.play()
  }

  return <Container>
    <GlobalStyle />
    <Wrapper>
      {[...Array(n)].map((octave, index) => <Octave key={index} octaveNumber={index + 1}
      notes={notes} clickHandler={handleClick} />)}
    </Wrapper>

  </Container>
}

export default App;

// interface IRatio {
//   ratio: number
// }

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    overflow: hidden;
  }
`

const Container = styled.div`
  background: -moz-linear-gradient(top,  #a1dbff 0%, #cbebff 53%, #f0f9ff 100%); /* FF3.6-15 */
  background: -webkit-linear-gradient(top,  #a1dbff 0%,#cbebff 53%,#f0f9ff 100%); /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(to bottom,  #a1dbff 0%,#cbebff 53%,#f0f9ff 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#a1dbff', endColorstr='#f0f9ff',GradientType=0 ); /* IE6-9 */

`

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-image: url("/images/background.gif");
    background-repeat: no-repeat;
    background-size: contain;
`