import React from 'react'

const EditApp = () => {
  return(
    <div>
        
        {/* <form onSubmit={createTheApp} className="app-form"> */}
        <form className="app-form">
        <h4>Create an App</h4>
            Company: <input type='text' name="company" placeholder="company"/> <br/>
            Position Title: <input type="text" name="position" placeholder="position title"/><br/>
            Link to Apply: <input type="text" name="appLink" placeholder="link"/><br/>
            Job Description: <textarea name="description" placeholder="description"/><br/>
            Location: <input type="text" name="location" placeholder="remote, hybrid, in-person"/>
            Pay Range: <input type="text" name="compensation"/><br/>
            Benefits? <input type="checkbox" name="benefits"/><br/>
            Date Applied <input type="date" name='dateApplied'/><br/>
            Have they responded? <input type="checkbox" name="response"/>
            Date They Responded: <input type="date" name="responseDate"/><br/>
            Did ask to interview? <input type="checkbox" name="interview"/>
            Interview Date: <input type="date" name="interviewDate"/><br/>
            Offer: <input type="number" name="offer"/><br/>
            Am I still Interested: <input type="checkbox" name="stillInterested"/>
            <input type='submit'/>
        </form>
    </div>
)
}
export default EditApp