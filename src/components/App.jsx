import React, { useState } from "react";
import Header from "./Header"
import Footer from "./Footer"
import Note from "./Note"
import notes from "../notes"
import CreateArea from "./CreateArea";



function App() {
    const [n, setNotes] = useState(notes)
    function deleteNote(id) {
        setNotes((prev) =>  prev.filter((note, index) => index !== id))
    }
    return <div>
        <Header />
        <CreateArea />
        {n.map((item, index) => <Note 
            key={item.id}
            id={index}
            title={item.title}
            content={item.content}
            onDelete={deleteNote}
            />
        )}
        <Footer />
    </div>
}

export default App