export default function TableItem({ item, onClickHanlder, update }) {
    return (
      <tr>
        <td>{item.id}</td>
        <td>{item.name}</td>
        <td>{item.email}</td>
        <td>{item.rollNo}</td>
        <button onClick={() => onClickHanlder(item.id)} style={{backgroundColor:'gray'}}>Delete</button>
        <button onClick={() => update(item.id)} style={{backgroundColor:'gray'}}>Update</button>
      </tr>
    );
  }
  