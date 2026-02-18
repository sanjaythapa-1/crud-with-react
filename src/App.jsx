import { useState, useEffect } from "react";
import GroceryForm from "./components/GroceryForm";
import GroceryTable from "./components/GroceryTable";
import { getData, setData } from "./utils/storage";

export default function App() {
  const [name, setName] = useState("");
  const [list, setList] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [msg, setMsg] = useState("");

  useEffect(() => {
    setList(getData());
  }, []);

  useEffect(() => {
    setData(list);
  }, [list]);

  function handleSubmit() {
    if (name.trim() === "") {
      setMsg("Please insert the data");
      return;
    }

    if (editIndex === null) {
      setList([...list, name]);
      setMsg("Data inserted");
    } else {
      const updated = [...list];
      updated[editIndex] = name;
      setList(updated);
      setEditIndex(null);
      setMsg("Data updated");
    }

    setName("");
  }

  function handleDelete(index) {
    const updated = list.filter((_, i) => i !== index);
    setList(updated);
  }

  function handleEdit(index) {
    setName(list[index]);
    setEditIndex(index);
  }

  return (
    <div>
      <GroceryForm name={name} setName={setName} handleSubmit={handleSubmit} />

      <div id="msg">{msg}</div>

      <h2>List</h2>

      <GroceryTable data={list} onEdit={handleEdit} onDelete={handleDelete} />
    </div>
  );
}
