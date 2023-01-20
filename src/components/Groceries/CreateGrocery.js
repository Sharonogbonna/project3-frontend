import { useNavigate } from "react-router-dom"
import { createGrocery } from "../../services/groceries.api"

export default function CreateGrocery() {
    const nav = useNavigate()

    const createTheGrocery = (e) => {
        const grocery = {item: e.target.item.value, brand: e.target.brand.value, isPurchased: false, store: e.target.store.value, unit: e.target.unit.value, quantity: e.target.quantity.value}
        createGrocery(grocery)
        nav('/grocerylist')
    }

return(
    <div>
        <form onSubmit={createTheGrocery} className="grocery-form">
        <h3>Add an Item to Your List</h3>
        <p>Item:</p> <input type="text" name="item"></input> <br />
        <p>Brand:</p> <input type="text" name="brand"></input>
        <br />
        <p>Store:</p> <input type="text" name="store"></input>
        <br />
        <p>Units:</p> <input type="text" name="unit"></input>
        <br />
        <p>Quantity:</p> <input type="number" name="quantity"></input>
        <br />
        <input type="submit" value="submit"></input>
      </form>
    </div>
)
}