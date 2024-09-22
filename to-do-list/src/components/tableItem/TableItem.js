export default function TableItem({ item, onClickHanlder, update }) {
  return (
    <tr>
      <td>{item.id}</td>
      <td>{item.name}</td>
      <td>{item.email}</td>
      <td>{item.rollNo}</td>
      <td>
        <button onClick={() => onClickHanlder(item.id)} className="btn btn-delete">
          Delete
        </button></td>
      <td> <button onClick={() => update(item.id)} className="btn btn-edit">
        Update
      </button>
      </td>
    </tr>

  );
}
