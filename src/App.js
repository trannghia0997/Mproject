import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import "./App.css"
import React from "react"
import "./style.css"
import Event from "./pages/Event/Event"
import IRALayout from "./layout/IRALayout"
import EventEdit from "./pages/Event/children/EventEdit"
import EventAdd from "./pages/Event/children/EventAdd"
import EventDetail from "./pages/Event/children/EventDetail"

import RecruitAdd from "./pages/Recruitment/RecruitAdd"
import Recruitment from "./pages/Recruitment/Recruitment"

import InterviewMain from "./pages/Interview/InterviewMain/InterviewMain"
import InterviewDetail from "./pages/Interview/InterviewDetail/InterviewDetail"
import InterviewMark from "./pages/Interview/InterviewMark/InterviewMark"
import Questions from "./pages/Interview/Questions/Questions"
import AddQuestion from "./pages/Interview/AddQuestion/AddQuestion"
import EditQuestion from "./pages/Interview/EditQuestion/EditQuestion"

const App = (props) => {
    return (
        <Router>
            <IRALayout>
                <Routes>
                    <Route path="/event" element={<Event />} />
                    <Route path="/event/:id" element={<EventDetail />} />
                    <Route path="/event/edit/:id" element={<EventEdit />} />
                    <Route path="/event/add" element={<EventAdd />} />

                    <Route path="/interview" element={<InterviewMain />} />
                    <Route path="/interview/detail/:id" element={<InterviewDetail />} />
                    <Route path="/interview/detail/:id/:mark_id" element={<InterviewMark />} />
                    <Route path="/questions" element={<Questions />} />
                    <Route path="/questions/addquestion" element={<AddQuestion />} />
                    <Route path="/questions/editquestion/:question_id" element={<EditQuestion />} />

                    <Route path="/recruitment" element={<Recruitment />} />
                    <Route path="/recruitment/add" element={<RecruitAdd />} />


                </Routes>
            </IRALayout>
        </Router>

    )
}

export default App
