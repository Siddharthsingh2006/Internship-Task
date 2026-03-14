import { Link } from "react-router-dom"
import { useContext } from "react"
import { AuthContext } from "../context/AuthContext"

function Navbar(){

const {user,logout} = useContext(AuthContext)

return(

<nav className="navbar navbar-expand-lg navbar-dark bg-dark">

<div className="container">

<Link className="navbar-brand" to="/">MyShop</Link>

<ul className="navbar-nav ms-auto">

<li className="nav-item">
<Link className="nav-link" to="/">Home</Link>
</li>

<li className="nav-item">
<Link className="nav-link" to="/wishlist">Wishlist</Link>
</li>

<li className="nav-item">
<Link className="nav-link" to="/cart">Cart</Link>
</li>

{user ? (

<>

<li className="nav-item">

<span className="nav-link text-info">

Welcome {user.email}

</span>

</li>

<li className="nav-item">

<button
className="btn btn-danger btn-sm"
onClick={logout}
>

Logout

</button>

</li>

</>

):(

<>

<li className="nav-item">
<Link className="nav-link" to="/login">Login</Link>
</li>

<li className="nav-item">
<Link className="nav-link" to="/register">Register</Link>
</li>

</>

)}

</ul>

</div>

</nav>

)

}

export default Navbar