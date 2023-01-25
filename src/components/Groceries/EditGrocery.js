import {useState, useEffect} from 'react'
import {useNavigate, useParams} from 'react-router-dom'
import { editGrocery, getGrocery } from '../../services/groceries.api'

export default function EditGrocery(){
    const {id} = useParams()
    const nav = useNavigate()
    const [data, setData] = useState({})

    useEffect(() => {
        getGrocery(id) // getting the todo that matches this id
        .then(res => setData(res.data))
    }, [])

    const editTheGrocery = e => {
        e.preventDefault()
         const updatedGrocery = {item: e.target.item.value, brand: e.target.brand.value, store: e.target.store.value, unit: e.target.unit.value, quantity: e.target.quantity.value, isPurchased: e.target.isPurchased.checked}
        editGrocery(id, updatedGrocery)
        nav(`/this-grocery/${id}`)
    }
  return (
    <div id='form'>
        <form onSubmit={editTheGrocery} className="grocery-form">
        <h3 id='grocery-form-title' className='form-title'>Edit Item</h3>
        <p>Item:</p> <input type="text" name="item" defaultValue={data.item}/> <br />
        <p>Brand:</p> <input type="text" name="brand" defaultValue={data.brand}/>
        <br />
        <p>Store:</p> <input type="text" name="store" defaultValue={data.store}/>
        <br />
        <p>Units:</p> <input type="text" name="unit" defaultValue={data.unit}/>
        <br />
        <p>Quantity:</p> <input type="number" name="quantity" defaultValue={data.quantity}/>
        <br />
        <p>Purchased?</p><input type='checkbox' name='isPurchased' defaultChecked={data.isPurchased}/>
        <input type="submit" value="submit" name='submit'></input>
      </form>
    </div>
  )
}