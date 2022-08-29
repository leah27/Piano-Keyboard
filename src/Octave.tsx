import React from 'react'
import {NoteType} from "./helpers"
import Note from "./Note"

type PropsTypes = {
    octaveNumber: number,
    notes: NoteType[],
    clickHandler: (e: React.MouseEvent<HTMLButtonElement>) => void
}

const Octave: React.FC<PropsTypes> = ({octaveNumber, notes, clickHandler}) => (
        <div>
            {notes.map((element: NoteType) => <Note key={element.note}
                                                    color={element.color}
                                                    note={`${element.note}${octaveNumber}`}
                                                    clickHandler={clickHandler} />)}
        </div>
)

export default Octave
