import { useState } from "react";

const NoteForm = () => {

    const [title, setTitle] = useState(" ");
    const [desc, setDesc] = useState(" ");
    function handleChange(e){
        setTitle(e.target.value);
        console.log(e.target.value);
    }

  return (
    <div>
        <input value={title} onChange={handleChange} type="text" placeholder="Enter Title" />
        <textarea placeholder="Enter description"></textarea>
        <button>Add Note</button>
    </div>
  )
}

export default NoteForm