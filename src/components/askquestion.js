import React, { useState } from 'react'
import useMessage from '../hooks/useMessage';
import axiosInt from '../utils/axios';
import './styles/askquestion.css'

export default function Askquestion({ setShowQuestionForm, handleAddingQuestion }) {
    const { setMessage } = useMessage()
    const [inputFields, setInputFields] = useState([{ title: "", content: "" }]);
    const [subject, setSubject] = useState("");
    const handleFormChange = (index, event) => {
        let data = [...inputFields];
        data[index][event.target.name] = event.target.value;
        setInputFields(data);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const { title, content } = inputFields[0];
        axiosInt.post('/questions', {
            title,
            content,
            subjects: [{ title: subject }]
        })
            .then(function (response) {
                handleAddingQuestion(response.data);
            })
            .catch(function (error) {
                const message = error.response.data.meesage ? error.response.data.meesage : error.response.data[0].msg;
                setMessage(message, "error");
            });
    }


    return (
        <>
            <div className='layout' onClick={() => setShowQuestionForm(false)}></div>
            <form id="contactForm" name="contactForm" className="ask-question-container">
                <div className="form-group">
                    {subject && <div className='subjects'>
                        <span>{subject}</span>
                        <span onClick={() => setSubject("")}
                        > x </span>
                    </div>}
                    <select name="subjects" className="form-control" onChange={(e) =>
                        setSubject(e.target.value)
                    } >
                        <option>Select</option>
                        <option>Math</option>
                        <option>Physics</option>
                        <option>Biology</option>
                        <option>History</option>
                        <option>Programming</option>
                    </select>
                </div>
                {inputFields.map((input, index) => {
                    return (
                        <div key={index}>
                            <div className="form-group">
                                <input type="text" className="form-control" value={inputFields.title} onChange={event => handleFormChange(index, event)} name="title" id="title" placeholder="Title" />
                            </div>
                            <div className="form-group">
                                <textarea name="content" className="form-control" value={inputFields.content} onChange={event => handleFormChange(index, event)} id="content" cols="30" rows="4" placeholder="Content"></textarea>
                            </div>
                        </div>
                    )
                })}
                <div className="form-group">
                    <button className="btnPrimary mx-auto" onClick={(e) => handleSubmit(e)}>Submit</button>
                </div>
            </form >
        </>
    )
}
