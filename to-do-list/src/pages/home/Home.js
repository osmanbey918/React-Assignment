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
        console.log("id in parent home", id);

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
        setEditMode(id); // Set editMode to the current student's ID
    };
    const handleUpdateSubmit = () => {
        setData(data.map((item) =>
            item.id === editMode
                ? { ...item, name: form.name, email: form.email, rollNo: form.rollNo }
                : item
        ));
        setEditMode(null); // Clear edit mode
        setForm({ name: "", email: "", rollNo: "" }); // Reset form
    };


    const onAddHandler = (student) => {
        console.log("student in home", student);
        setData([...data, {
            id: data.length + 1,
            name: student.name,
            email: student.email,
            rollNo: student.rollNo
        }])
    }
    return (
        <div>
            <AddStudent onAddHandler={onAddHandler} />
            <table>
                <thead>
                    <tr>
                        <th>Id:</th>
                        <th>Name:</th>
                        <th>Email:</th>
                        <th>Roll No:</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item) => (
                        <TableItem
                            key={item.id}
                            item={item}
                            onClickHanlder={onClickHanlder}
                            update={update}
                        />
                    ))}
                </tbody>
            </table>

            {editMode && (
                <div>
                    <h3>Edit Student</h3>
                    <input
                        type="text"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="Enter Name"
                    />
                    <input
                        type="email"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="Enter Email"
                    />
                    <input
                        type="text"
                        value={form.rollNo}
                        onChange={(e) => setForm({ ...form, rollNo: e.target.value })}
                        placeholder="Enter Roll No"
                    />
                    <button onClick={handleUpdateSubmit}>Update Student</button>
                </div>
            )}
        </div>
    );


}