import './App.scss'
import { Routes, Route } from 'react-router-dom'
import Body from "./pages/Body/Body";
import DetailJob from "./pages/Body/DetailJob/DetailJob"
import Company from "./pages/Company/Company";
import CandidateHome from "./pages/CandidateHome/CandidateHome";
import CandidateEvent from "./pages/CandidateEvent/CandidateEvent";
import DetailEvent from "./pages/CandidateEvent/DetailEvent/DetailEvent";
import PersonalInfo from "./pages/PersonalInfo/PersonalInfo";
import Interview from "./pages/Interview/Interview";
import SubmitJob from "./pages/SubmitJob/SubmitJob";
import CVHandler from "./pages/CVHandler/CVHandler";
import CVBuilder from "./pages/CVBuilder/CVBuilder";
import Login from "./pages/Login/Login";


function App() {

  return (
      <Routes>
        <Route path = "/login" element = {<Login/>}/>
        <Route path = "/" element = {<CandidateHome/>} />
        <Route path="/company" element={<Company/>} />
        <Route path="/body" element = {<Body/>} />
        <Route path="/body/detailjob/:id" element = {<DetailJob/>} />
        <Route path="/candidateevent" element = {<CandidateEvent/>} />
        <Route path = "/candidateevent/detailevent/:id" element = {<DetailEvent/>}/>
        <Route path = "/personal-info" element = {<PersonalInfo/>}/>
        <Route path = "/interview" element = {<Interview/>}/>
        <Route path = "/submitjob" element = {<SubmitJob/>}/>
        <Route path = "/cvhandler" element = {<CVHandler/>}/>
        <Route path = "/cvbuilder" element = {<CVBuilder/>}/>
      </Routes>
  )
}
export default App