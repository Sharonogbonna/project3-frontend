import React from 'react'
import { useNavigate } from "react-router-dom"
import { createLog } from '../../services/bookLog-api'

const CreateLog = () => {
    const nav = useNavigate()

    const createTheLog = (e) => {
        const log = {title: e.target.title.value, author: e.target.author.value,
            startDate: e.target.startDate.value, 
            endDate: e.target.endDate.value, 
            rating: e.target.rating.value, 
            summary: e.target.summary.value, 
            opinion: e.target.opinion.value, 
            quotes: e.target.quotes.value.split('#')}
        createLog(log)
        nav('/booklog')
    }

return(
    <div>
        
        <form onSubmit={createTheLog} className="log-form">
        <h4>Create a Log</h4>
            Title: <input type='text' name="title" placeholder="title"/> <br/>
            Author: <input type='text' name="author" placeholder="author"/> <br/>
            Start Date: <input type='date' name="startDate"/> <br/>
            End Date: <input type='date' name="endDate"/> <br/>
            Rating: <input type='number' name="rating" placeholder='# out of 5'/> <br/>
           Summary: <textarea type='text' name='summary' placeholder="summary" id='summary'/><br/>
             Opinion: <textarea type='text' name='opinion' placeholder="opinion" id='opinion'/><br/>
            Favorite Quotes<p>(use # to separate quotes)</p><textarea type='text' name='quotes' placeholder="quotes" id='quotes'/><br/>
            <input type='submit'value={`create`}/>
        </form>
    </div>
)
}

export default CreateLog