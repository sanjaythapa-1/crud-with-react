export default function GroceryTable({ data, onEdit, onDelete }) {
  return (
    <div className="table-container">
      <table border="1">
        <thead>
          <tr>
            <td>S.No</td>
            <td>Name</td>
            <td>Actions</td>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{item}</td>
              <td>
                <button onClick={() => onEdit(index)}>Edit</button>{" "}
                <button onClick={() => onDelete(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
