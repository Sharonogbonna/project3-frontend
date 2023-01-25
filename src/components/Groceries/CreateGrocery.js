import { useNavigate } from "react-router-dom"
import { createGrocery } from "../../services/groceries.api"
import { useState } from "react"

export default function CreateGrocery() {
    const nav = useNavigate()
    const [createButton, setCreateButton] = useState(false)
    const closeMenu = () => {
      setCreateButton(false);
    };
    const createTheGrocery = (e) => {
      e.preventDefault()
        const grocery = {item: e.target.item.value, brand: e.target.brand.value, isPurchased: false, store: e.target.store.value, unit: e.target.unit.value, quantity: e.target.quantity.value}
        createGrocery(grocery)
        nav('/grocerylist')
    }

return(
    <div id="form">
        <form onSubmit={createTheGrocery} className="grocery-form">
        <h3 className="form-title" id="grocery-form-title">Add a Grocery</h3>
        <p>Item:</p> <input type="text" name="item"></input> <br />
        <p>Brand:</p> <input type="text" name="brand"></input>
        <br />
        <p>Store:</p> <input type="text" name="store"></input>
        <br />
        <p>Units:</p> <input type="text" name="unit"></input>
        <br />
        <p>Quantity:</p> <input type="number" name="quantity"></input>
        <br />
        <input type="submit" name="submit" onClick={closeMenu}></input>
      </form>
    </div>
)
}