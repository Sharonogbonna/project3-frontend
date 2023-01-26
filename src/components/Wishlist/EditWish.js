import {useState, useEffect} from 'react'
import {useNavigate, useParams} from 'react-router-dom'
import { editWish, getWish } from '../../services/wishlist-api';

const EditWish = () => {
    const {id} = useParams()
    const nav = useNavigate()
    const [data, setData] = useState({})

    useEffect(() => {
        getWish(id) // getting the todo that matches this id
        .then(res => setData(res.data))
    }, [])

    const editTheWish = e => {
        e.preventDefault()
         const updatedWish = {
          name: e.target.name.value,
          store: e.target.store.value,
          price: e.target.price.value,
          reason: e.target.reason.value,
          link: e.target.link.value,
          received: e.target.received.checked}
        editWish(id, updatedWish)
        nav(`/this-wish/${id}`)
    }

  return (
    <div id='form'>
      <form onSubmit={editTheWish} className="wish-form">
        <h4 className='form-title'>Edit Wish</h4>
        Item: <input type="text" name="name" defaultValue={data.name}/> <br />
        Store: <input type="text" name="store" placeholder="store" defaultValue={data.store} /> <br />
        Price: <input type='number' name="price" defaultValue={data.price}/> <br/>
        Reason: <textarea name="reason" placeholder="Be honest with yourself" defaultValue={data.reason}/><br/>
        Link: <input type="text" name="link" defaultValue={data.link}/>
        Received: <input type='checkbox' name="received" defaultChecked={data.received}/>
        <input type="submit" name='submit' value={`Edit`} />
      </form>
    </div>
  );
};

export default EditWish