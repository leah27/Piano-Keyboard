import React, {useState, useEffect} from "react";

export type NoteType = {
  [key: string]: string;
};

export const notes: NoteType[] = [
  {
    note: 'C',
    color: 'white'
  },
  {
    note: 'Cs',
    color: 'black'
  },
  {
    note: 'D',
    color: 'white'
  },
  {
    note: 'Ds',
    color: 'black'
  },
  {
    note: 'E',
    color: 'white'
  },
  {
    note: 'F',
    color: 'white'
  },
  {
    note: 'Fs',
    color: 'black'
  },
  {
    note: 'G',
    color: 'white'
  },
  {
    note: 'Gs',
    color: 'black'
  },
  {
    note: 'A',
    color: 'white'
  },
  {
    note: 'As',
    color: 'black'
  },
  {
    note: 'B',
    color: 'white'
  }
];

//
// export function useWindowSize() {
//   interface ISize {
//     width: number | undefined;
//     height: number | undefined
//   }
//   const [windowSize, setWindowSize] = useState<ISize>({
//     width: undefined,
//     height: undefined,
//   });
//   useEffect(() => {
//     function handleResize() {
//       // Set window width/height to state
//       setWindowSize({
//         width: window.innerWidth,
//         height: window.innerHeight,
//       });
//     }
//     window.addEventListener("resize", handleResize);
//     handleResize();
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);
//   return windowSize;
// }