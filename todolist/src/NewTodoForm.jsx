import { useState } from "react";

export function NewTodoForm({onSubmit})
{
    const [newItem,setNewItem] = useState("");
    function handleSubmit(e){
        if(newItem === "") return

        e.preventDefault();
        onSubmit(newItem)
        setNewItem("");
        console.log("item added")
    }

    return(
    <form className="new-item-form" onSubmit={handleSubmit}>
      <div className="form-row">
            <label htmlFor="item">New Item</label>
            <input 
            type="text" id="item"
            value={newItem}
            onChange={e => setNewItem(e.target.value)}
            />
      </div>
      <button className="btn">Add</button>
    </form>
    )
}