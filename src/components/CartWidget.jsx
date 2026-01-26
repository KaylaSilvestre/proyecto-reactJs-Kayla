import Badge from 'react-bootstrap/Badge';
import { FaCartShopping } from "react-icons/fa6";

const CartWidget = ()=> {
    return (
        <div>
            <FaCartShopping fontSize={'1.5rem'} color="white" />
            <Badge bg='success' className="py-1 rounded-pill">2</Badge>
        </div>
    )
}

export default CartWidget