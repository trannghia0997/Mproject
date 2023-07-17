import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import "./App.css"
import React from "react"
import "./style.css"
import Event from "./pages/Event/Event"
import Interview from "./pages/Interview/Interview"
import IRALayout from "./layout/IRALayout"
import EventEdit from "./pages/Event/children/EventEdit"
import EventAdd from "./pages/Event/children/EventAdd"
import EventDetail from "./pages/Event/children/EventDetail"

import RecruitAdd from "./pages/Recruitment/RecruitAdd"
import Recruitment from "./pages/Recruitment/Recruitment"
import RecruitEdit from "./pages/Recruitment/RecruitEdit"


const App = (props) => {
    return (
            <Router>
                <IRALayout>
                <Routes>                    
                    <Route path="/event" element={<Event />}/>
                    <Route path="/event/:id" element={<EventDetail />}/>
                    <Route path="/event/edit/:id" element={<EventEdit />}/>
                    <Route path="/event/add" element={<EventAdd />}/>


                    <Route path="/interview" element={<Interview />} />


                    <Route path="/recruitment" element={<Recruitment />} />
                    <Route path="/recruitment/add" element={<RecruitAdd />} />
                    <Route path="/recruitment/edit/:id" element={<RecruitEdit />} />

                </Routes>
                </IRALayout>
            </Router>

    )
}

export default App
