import react, { useState, useEffect } from 'react';
import Footer from './Footer';
import Note from './Note';
import CreateArea from './CreateArea';
import axios from 'axios';
const { getIdFromNotes } = require('../helpers/getIdFromNotes');
export default function Notes() {
  const [notes, setNotes] = useState([]);
  useEffect(() => {
    axios
      .get('http://localhost:8000/api/notes')
      .then(res => {
        setNotes(res.data.notes);
      });

  }, [])
  function addNote(note) {
    axios
      .post('http://localhost:8000/api/notes', note)
      .then(res => {
        setNotes([...notes, note]);
      })

  }
  function DeleteNote(id) {
    getIdFromNotes(notes, id)
      .then(index => {
        axios
          .post(`http://localhost:8000/api/notes/${index}`)
          .then(res => {
            setNotes(prevNotes => {
              return prevNotes.filter((note, index) => {
                return index !== id;
              })

            })
          })
      })



  }
  return (
    <div>
      
      <CreateArea onAdd={addNote} notes={notes} setNotes={setNotes} />
      {
        notes.map((note, i) => {
          return (<Note onDelete={DeleteNote} key={i} id={i} dbId={note.id} title={note.title} content={note.content} />)
        })
      }
      <Footer />
    </div>
  )

}