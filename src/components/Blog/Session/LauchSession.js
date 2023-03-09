import { useState } from "react";
import ErrorModel from "../../ErrorAndSuccess/ErrorModel";
import TagsInput from "../CreateBlog/TagsInput";
import "../css/blogs.css"
const LauchSession = ({

    errorMsg, setShowPortal, handlePotalClose, showPortal,

    tmpSessionDate, addSession, removeSessionDate, chnageSessionData, onSubmitSession, sessionData, setSessionData }) => {
    // lcal stoarge obj ->  for available session 
    const sessionDummyData = [
        {
            sessionTitle: "title 2",
            mentorid: 0,
            sessionId: 0,
            sessionAvaileDate: [
                {
                    id: 0,
                    deterioration: '',
                    date: new Date(2022, 9, 3),
                    reserved: false

                },
                {
                    id: 1,
                    deterioration: '',
                    date: new Date(2022, 9, 3),
                    reserved: false

                },
                {
                    id: 1,
                    deterioration: '',
                    date: new Date(2022, 9, 3),
                    reserved: false

                }

            ]

        },
        {
            sessionTitle: "title 2",
            mentorid: 0,
            sessionId: 0,
            sessionAvaileDate: [
                {
                    id: 0,
                    deterioration: '',
                    date: new Date(2022, 9, 3),
                    reserved: false
                },
                {
                    id: 1,
                    deterioration: '',
                    date: new Date(2022, 9, 3),
                    reserved: false

                },
                {
                    id: 1,
                    deterioration: '',
                    date: new Date(2022, 9, 3),
                    reserved: false

                }

            ]

        }
    ]

    console.log(sessionData.tags)
    console.log(sessionData)

    return (
        <div>

            {showPortal &&
                <ErrorModel msg={errorMsg} handlePotalClose={handlePotalClose} />
            }
            <div className="container row mt-5 p-0 mb-2 m-auto" style={{ backgroundColor: "#172e59" }}>

                <div className="row p-5 m-auto">
                    <div className="p-5 bg-light m-0">
                        <div className="d-flex justify-content-center mb-5">
                            <h2 className="display-4">Launch Session</h2>
                        </div>
                        <form onSubmit={onSubmitSession} className="">
                            <div className="form-floating mb-3">
                                <input name="title" type="text" className="form-control"
                                    value={sessionData.sessionTitle}
                                    onChange={(e) => chnageSessionData(e)} />
                                <label htmlFor="title" className="form-label" >Session Title</label>
                            </div>

                            {/* 1- iput date 2-deterioration 3-add btn */}
                            <div className="form-floating mb-3">

                                <input name="date" type="date" className="form-control"
                                    value={tmpSessionDate.date}
                                    onChange={(e) => chnageSessionData(e)} />
                                <label htmlFor="title" className="form-label" >Session Date</label>
                            </div>


                            {/* change input type here */}
                            <div className="form-floating mb-3">
                                <input name="deterioration"
                                    value={tmpSessionDate.deterioration}
                                    className="form-control"
                                    type="number" onChange={e => chnageSessionData(e)} />
                                <label htmlFor="title" className="form-label" >Session Duration</label>
                            </div>

                            <button className="btn btn-outline-success " onClick={e => addSession(e)}>+</button>

                            <TagsInput
                                key='Tags'
                                label={"Session tags"}
                                tags={sessionData.tags}
                                onChange={(e) => chnageSessionData(e)}
                            />

                            {/* session section */}
                            <div className="col-12 text-center ">
                                <button className="btn btn-outline-success mt-4"
                                    onClick={(e) => onSubmitSession(e)}
                                    style={{ marginLeft: "16px" }}>Launch a Session  <i class="fa-solid fa-headset"></i></button>

                            </div>
                        </form>

                        { /* { show session date */
                            sessionData.sessionAvaileDate &&
                            sessionData.sessionAvaileDate.map((datObj) => {
                                console.log(datObj)
                                console.log(datObj.deterioration)
                                return (
                                    <div className="m-5 text-center" >
                                        {/* display session data here */}
                                        <p className="m-5 d-inline">{datObj.date}</p>
                                        <i className='input__remove' onClick={() => removeSessionDate(datObj.id)} >
                                            <i className="fa fa-remove"></i>

                                        </i>

                                    </div>
                                )
                            })
                        }

                    </div>
                </div>
            </div >
        </div>)
}

export default LauchSession;