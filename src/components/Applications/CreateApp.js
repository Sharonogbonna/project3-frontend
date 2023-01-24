import { useNavigate } from "react-router-dom"
import { createApp } from "../../services/application-api"
import { useState } from "react";


const CreateApp = () => {
    const nav = useNavigate()

    const [createButton, setCreateButton] = useState(false);

  const closeMenu = () => {
    setCreateButton(false);
  };
    const createTheApp = (e) => {
        const app = {company: e.target.company.value, position: e.target.position.value,
        appLink: e.target.appLink.value, description: e.target.description.value, benefits: e.target.benefits.checked, dateApplied: e.target.dateApplied.value, response: e.target.response.checked, responseDate: e.target.responseDate.value, interview: e.target.interview.checked, interviewDate: e.target.interviewDate.value, offer: e.target.offer.value, stillInterested: true, location: e.target.location.value, compensation: e.target.compensation.value}
        createApp(app)
        nav('/apptracker')
    }

return(
    <div id="form">
        
        <form onSubmit={createTheApp} className="app-form">
        <h4 className="form-title" id="app-form-title" >Track an Application</h4>
            Company:* <input type='text' name="company" placeholder="company"/> <br/>
            Position Title:* <input type="text" name="position" placeholder="position title"/><br/>
            Link to Application:* <input type="text" name="appLink" placeholder="link"/><br/>
            Job Description: <textarea name="description" placeholder="Add link to description or full description"/><br/>
            Location: <input type="text" name="location" placeholder="remote, hybrid, in-person"/><br/>
            Pay Range: <input type="text" name="compensation"/><br/>
            <div>
            Benefits? <input type="checkbox" name="benefits"/>
            </div><br/>
            Date Applied <input type="date" name='dateApplied'/><br/>
            <div>
            Heard Back? <input type="checkbox" name="response"/>
            </div>
             <span>Response Date:</span> <input type="date" name="responseDate"/><br/>
            <br/>
            <div>
            Invited to interview? <input type="checkbox" name="interview"/>
            </div>
            <span>Interview Date: </span> <input type="date" name="interviewDate"/>
            <br/>
            Offer: <input type="number" name="offer"/><br/>
            <div>
            Am I still Interested: <input type="checkbox" name="stillInterested"/>
            </div>
            <input type='submit' name="submit" onClick={closeMenu}/>
        </form>
    </div>
)
}

export default CreateApp