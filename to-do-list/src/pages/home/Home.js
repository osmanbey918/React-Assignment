import { useState } from 'react';
import TableItem from '../../components/tableItem/TableItem';
import { data as constantdata } from '../../constant/data';
import AddStudent from '../../components/addstudents/Addstudents';



export default function Home() {
    const [data, setData] = useState([
        {
            id: 1,
            name: "Umer",
            email: "umer@gmail.com",
            rollNo: "1234",
            class: "BSCS",
        },
        {
            id: 2,
            name: "Ali",
            email: "ali@gmail.com",
            rollNo: "1235",
            class: "BSCS",
        },
        {
            id: 3,
            name: "Ahmed",
            email: "ahmed@gmail.com",
            rollNo: "1236",
            class: "BSCS",
        },
    ])
    const [editMode, setEditMode] = useState(null); // To track the student being edited
    const [form, setForm] = useState({
        name: "",
        email: "",
        rollNo: ""
    });


    const onClickHanlder = (id) => {
        let newdata = data.filter(item => item.id !== id)
        setData(newdata)

    }

    const update = (id) => {
        const studentToEdit = data.find((student) => student.id === id);
        setForm({
            name: studentToEdit.name,
            email: studentToEdit.email,
            rollNo: studentToEdit.rollNo,
        });
        setEditMode(id);
    };
    const handleUpdateSubmit = () => {
        setData(data.map((item) =>
            item.id === editMode
                ? { ...item, name: form.name, email: form.email, rollNo: form.rollNo }
                : item
        ));
        setEditMode(null);
        setForm({ name: "", email: "", rollNo: "" });
    };


    const onAddHandler = (student) => {
        console.log("student in home", student);
        setData([...data, {
            id: data.length + 1,
            name: student.name,
            email: student.email,
            rollNo: student.rollNo
        }])
        setForm({ name: "", email: "", rollNo: "" });
    }
    return (
        <div className="container">
            <AddStudent onAddHandler={onAddHandler} />
            <table className="student-table">
                <thead>
                    <tr>
                        <th className="table-header">Id</th>
                        <th className="table-header">Name</th>
                        <th className="table-header">Email</th>
                        <th className="table-header">Roll No</th>
                        <th className="table-header">Delete</th>
                        <th className="table-header">Update</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item) => (
                        <TableItem
                            key={item.id}
                            item={item}
                            onClickHanlder={onClickHanlder}
                            update={update}
                            className="table-row"
                        />
                    ))}
                </tbody>
            </table>

            {editMode && (
                <div className="edit-form">
                    <h3 className="edit-title">Edit Student</h3>
                    <input
                        type="text"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="Enter Name"
                        className="input-field"
                    />
                    <input
                        type="email"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="Enter Email"
                        className="input-field"
                    />
                    <input
                        type="text"
                        value={form.rollNo}
                        onChange={(e) => setForm({ ...form, rollNo: e.target.value })}
                        placeholder="Enter Roll No"
                        className="input-field"
                    />
                    <button onClick={handleUpdateSubmit} className="btn btn-update">
                        Update Student
                    </button>
                </div>
            )}
        </div>

    );


}