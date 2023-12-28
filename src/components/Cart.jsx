import React from 'react'
import Header from './Navbar'

const Cart = ({ cartItems }) => {
    return (
        <div>
            <Header />
            <h1> Shopping Cart </h1>
            {cartItems.length === 0 ?
                (<div> The Cart is Empty ....</div>) :
                <table style={{ textAlign:'center' ,  width: '90%', marginLeft: '50px' }}>
                    <thead style={{ border: '2px solid #dddddd'}}>
                        <tr>
                            <th>Image</th>
                            <th>Title</th>
                            <th>Quantity</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cartItems.map((item) => (
                            <tr key={item._id} style={{ border: '2px solid #dddddd', margin:3 ,  }}>
                                <td>
                                    <img src={item.image} alt="" height={70} />
                                </td>
                                <td width={400}>{item.title}</td>
                                <td>{item.quantity}</td>
                                <td>{"$" + item.quantity * item.price}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>

            }
            <div style={{ margin: '30px',}}>
                <strong style={{marginLeft:'57.5%'}}>Total Quantity: {cartItems.reduce((total, item) => total + item.quantity, 0)}</strong>
                <strong style={{marginLeft:'130px'}}>Total Price:   $ {cartItems.reduce((total, item) => total + item.price * item.quantity, 0)};</strong>
            </div>

        </div>
    )
}

export default Cart