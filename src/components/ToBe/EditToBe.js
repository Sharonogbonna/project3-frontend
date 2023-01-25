import {useState, useEffect} from 'react'
import {useNavigate, useParams} from 'react-router-dom'
import { editToBe, getToBe } from '../../services/toBe-api'

const EditToBe = () => {
    const {id} = useParams()
    const nav = useNavigate()
    const [data, setData] = useState({})

    useEffect(() => {
        getToBe(id) // getting the todo that matches this id
        .then(res => setData(res.data))
    }, [])

    const editTheToBe = e => {
        e.preventDefault()
         const updatedToBe = {title: e.target.title.value,
            author: e.target.author.value,
            platform: e.target.platform.value,
            category: e.target.category.value,
            recommender: e.target.recommender.value,
            done: e.target.done.checked}
        editToBe(id, updatedToBe).then(() => {
          nav(`/this-tbr/${id}`)
        })
        
    }
    return (
        <div id='form'>
          <form onSubmit={editTheToBe} className="tobe-form">
          <h4 className="form-title" id="tobe-form-title">Edit TBR/TBW</h4>
            Category: <select name="category">
            <option defaultValue={data.category} selected>{`${data.category}`}</option>
            <option value="Book">Book</option>
            <option value="Series">Series</option>
            <option value="Movie">Movie</option>
            </select> <br />
            Title: <input type="text" name="title" placeholder="title" defaultValue={data.title}/> <br />
            Author: <input type="text" name="author" placeholder="author" defaultValue={data.author}/> <br />
            Platform: <input type={'text'} name="platform" placeholder="e.g. HBOMax, Netflix, etc." defaultValue={data.platform}/> <br/>
            Recommended by: <input type="text" name="recommender" placeholder="recommended by" defaultValue={data.recommender}/><br/>
            {`${data.category}`==="Book" ? "Read?" : "Watched?"}<input type="checkbox" name='done' defaultChecked={data.done}/><br/>
            <input type="submit" value={`create`} name="submit"/> 
          </form>
        </div>
      );
    };


export default EditToBe