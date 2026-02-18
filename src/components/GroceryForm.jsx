export default function GroceryForm({ name, setName, handleSubmit }) {
  return (
    <form>
      <input
        type="text"
        placeholder="Insert the data"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input type="button" value="Submit" onClick={handleSubmit} />
    </form>
  );
}
