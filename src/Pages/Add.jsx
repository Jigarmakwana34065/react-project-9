import React, { useState } from 'react'
import './add.css'
import { useDispatch, useSelector } from 'react-redux'
import { addData, deleteData } from '../Action/action'

const Add = () => {

    const [title, setTitle] = useState('')
    const [note, setNote] = useState('')
    let id = Math.floor(Math.random() * 101010)
    const dispatch = useDispatch()
    const allRecord = useSelector(state => state.crude.users)

    const handleSubmit = (e) => {
        e.preventDefault()

        let obj = {
            id, title, note
        }

        dispatch(addData(obj))

        setTitle('')
        setNote('')
    }

    const deleteRecord = (deleteId) => {
        dispatch(deleteData(deleteId))
    }

    return (
        <>
            <header>
                <div className="main">
                    <div className="logo">
                        <div className="image">
                            <img src="../google.png" alt="" />
                            <span>Google Keep</span>
                        </div>
                    </div>
                </div>
            </header>

            <div className="note-section">
                <div className="container">
                    <div className="row">
                        <form onSubmit={(e) => handleSubmit(e)} className="main">
                            <div className="title">
                                <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
                            </div>
                            <div className="write-note">
                                <textarea name="" id="" cols="35" rows="2" placeholder="Write a note..." onChange={(e) => setNote(e.target.value)} value={note}></textarea>
                            </div>
                            <div className="btn">
                                <button type='submit'>
                                    <i class="fa-solid fa-plus"></i>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <div className="card-section">
                <div className="container">
                    <div className="row">
                        <div className="all-cards">
                            {
                                allRecord.map((val) => {
                                    return (
                                        <div className="card">
                                            <div className="content">
                                                <h2>{val.title}</h2>
                                                <p>{val.note}</p>
                                                <div className="delete">
                                                    <button onClick={() => deleteRecord(val.id)}>
                                                        <i class="fa-solid fa-trash-can"></i>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>

            <footer>
                <div className="main">
                    <div className="copyright">
                        <span>Copyrights 2024</span>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Add