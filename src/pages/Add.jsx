import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from "react-toastify"
import "./AddEdit.css"
import { useDispatch } from 'react-redux';
import { addInfo } from '../actions/infoAction';


const initialState = {
    name: "",
    email: "",
    contact: "",
};

const Add = () => {
    const dispatch = useDispatch()

    const [info, setInfo] = useState(initialState)
    const { name, email, contact, } = info;
    const navigate = useNavigate();


    const handeSubmit = (e) => {
        e.preventDefault();
        if (!name || !email || !contact) {
            toast.error("Please provide value into each field");
        }
        else {

            // console.log(info)
            dispatch(addInfo(info))
            navigate("/");

        }

    }
    const handleInputChange = (e) => {
        let { name, value } = e.target
        setInfo({ ...info, [name]: value })
    };
    return (
        <div style={{ marginTop: "100px" }}>
            <form style={{
                margin: "auto",
                padding: "15px",
                maxWidth: "400px",
                alignContent: "center"
            }}
                onSubmit={handeSubmit}
            >

                <label htmlFor='name'>Name</label>
                <input
                    type="text"
                    id='name'
                    name='name'
                    placeholder='Enter name....'
                    onChange={handleInputChange}
                    value={name}
                />
                <label htmlFor='email'>Email</label>
                <input
                    type="email"
                    id='email'
                    name='email'
                    placeholder='Enter Email....'
                    onChange={handleInputChange}
                    value={email}
                />
                <label htmlFor='contact'>Contact</label>
                <input
                    type="number"
                    id='contact'
                    name='contact'
                    placeholder='Enter contact....'
                    onChange={handleInputChange}
                    value={contact}
                // maxVa={10}
                />
                <input type="submit" value={"Add"} />
            </form>
        </div>
    )
}

export default Add
