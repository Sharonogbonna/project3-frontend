import React from 'react'
import {useState, useEffect} from 'react'
import {useNavigate, useParams} from 'react-router-dom'
import { editLog, getLog } from '../../services/bookLog-api'

const EditLog = () => {
    const {id} = useParams()
    const nav = useNavigate()
    const [data, setData] = useState({})

    useEffect(() => {
        getLog(id) // getting the todo that matches this id
        .then(res => setData(res.data))
    }, [])

    const editTheLog = e => {
        e.preventDefault()
         const updatedLog = {title: e.target.title.value, author: e.target.author.value,
            startDate: e.target.startDate.value, 
            endDate: e.target.endDate.value, 
            rating: e.target.rating.value, 
            summary: e.target.summary.value, 
            opinion: e.target.opinion.value, 
            // quotes: e.target.quotes.value.push(e.target.quote.value.split('#'))
        }
        editLog(id, updatedLog)
        nav(`/this-book/${id}`)
    }
  return (
    <div>
        <form onSubmit={editTheLog} className="log-form">
        <h4>Edit a Log</h4>
            Title: <input type='text' name="title" placeholder="title" defaultValue={data.title}/> <br/>
            Author: <input type='text' name="author" placeholder="author"  defaultValue={data.author}/> <br/>
            Start Date: <span>(your start date was {new Date(data.startDate).toDateString()})</span> <input type='date' name="startDate"/> <br/>
            End Date: <span>(your end date was {new Date(data.endDate).toDateString()})</span><input type='date' name="endDate"/> <br/>
            Rating: <input type='number' name="rating" placeholder='# out of 5' defaultValue={data.rating}/> <br/>
           Summary: <textarea type='text' name='summary' placeholder="summary" id='summary'defaultValue={data.summary}/><br/>
             Opinion: <textarea type='text' name='opinion' placeholder="opinion" id='opinion'defaultValue={data.opinion}/><br/>
            Favorite Quotes: <span>(use # to separate quotes)</span><textarea type='text' name='quotes' placeholder="quotes" id='quotes'defaultValue={data.quotes}/><br/>
            <input type='submit'value={`Edit Log`}/>
      </form>
    </div>
  )
}


 

export default EditLog