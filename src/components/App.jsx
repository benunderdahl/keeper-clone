import React from "react";
import Header from "./Header"
import Footer from "./Footer"
import Note from "./Note"
import notes from "../notes"
import "../../public/styles.css"

function createNote(item) {
    return <Note 
        key={item.id}
        title={item.title}
        content={item.content}
    />
}

function App() {
    return <div>
        <Header />
        {notes.map(createNote)}
        <Footer />
    </div>
}

export default App