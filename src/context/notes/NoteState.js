import NoteContext from "./noteContext";
import {useState} from "react";

const NoteState = (props) => {

    const notesInitial = 
    [
        {
          "_id": "6634c8359acb636eb66775c1",
          "user": "663260f54f0d4de2944de55e",
          "title": "My Title",
          "description": "Please wake up early",
          "tag": "personal",
          "date": "2024-05-03T11:19:17.612Z",
          "__v": 0
        },
        {
          "_id": "6634d587965cc6949be01d8c",
          "user": "663260f54f0d4de2944de55e",
          "title": "New note",
          "description": "Please access the playlist",
          "tag": "Youtube",
          "date": "2024-05-03T12:16:07.201Z",
          "__v": 0
        },
        {
            "_id": "6634c8359acb636eb667735c1",
            "user": "663260f54f0d4de2944de55e",
            "title": "My Title",
            "description": "Please wake up early",
            "tag": "personal",
            "date": "2024-05-03T11:19:17.612Z",
            "__v": 0
          },
          {
            "_id": "6634d5879615cc6949be01d8c",
            "user": "663260f54f0d4de2944de55e",
            "title": "New note",
            "description": "Please access the playlist",
            "tag": "Youtube",
            "date": "2024-05-03T12:16:07.201Z",
            "__v": 0
          },
      ]

      const [notes,setNotes] = useState(notesInitial)

      //Add a Note
      const addNote = (title,description,tag) =>{
        //TODO :  API CALL
        console.log("Adding a new note");
       const note = {
            "_id": "6634d5872961cc694s9be01d8c",
            "user": "663260f54f0d4de2944de55e",
            "title": title,
            "description": description,
            "tag": tag,
            "date": "2024-05-03T12:16:07.201Z",
            "__v": 0
          };
        setNotes(notes.concat(note))
      }

      //Delete a Note
      const deleteNote = (id) =>{
        console.log("Deletin the note with id "+ id);
        const newNotes = notes.filter((note)=>{return note._id!==id})
        setNotes(newNotes)
      }

      //Edit a Note
      const editNote = (id,title,description,tag) =>{
        
      }
        return (
        <NoteContext.Provider value = {{notes,addNote,deleteNote,editNote}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;