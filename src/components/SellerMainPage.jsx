import React, { useState, useEffect } from 'react'
import '../App.css'
import axios from 'axios';
import SellerNavbar from './SellerNavbar'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

const SellerMainPage = () => {

  const [products, setProducts] = useState([]);
  const [show, setShow] = useState(false);
  const [editingProductId, setEditingProductId] = useState(null);
  const handleShow = () => setShow(true);
  const handleClose = () =>{
    setShow(false)
    setEditingProductId(null);
  };

  useEffect(() => {
    axios
      .get('https://star-shopper-server.onrender.com/getProducts')
      .then((response) => setProducts(response.data))
      .catch((error) => console.error('Error fetching products:', error));
  }, []);

  const [item, setItem] = useState({
    title: '',
    description: '',
    price: Number(0),
    category: '',
    image: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setItem((prev) => ({ ...prev, [name]: value }));
    console.log(item)
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingProductId !== null) {
        // Handle update logic here
        const response = await axios.put(`https://star-shopper-server.onrender.com/updateItem/${editingProductId}`, item);
        console.log('Item updated:', response.data);
      } else {
        // Handle add logic here
        const response = await axios.post('https://star-shopper-server.onrender.com/createItem', item);
        console.log('Item added:', response.data);
      }

      // Clear the form
      setItem({
        title: '',
        description: '',
        price: 0,
        category: '',
        image: ''
      });
      handleClose();
      window.location.reload()
    } catch (error) {
      console.error('Error adding item:', error.message);
    }
  };
  
  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(`https://star-shopper-server.onrender.com/deleteItem/${id}`, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log('Item deleted successfully:', response.data);
      window.location.reload()
    } catch (error) {
      console.error('Error deleting item:', error.message);
    }
  };
  
  const handleEdit = (productId) => {
    const productToEdit = products.find((product) => product._id === productId);
    setItem({
      title: productToEdit.title,
      description: productToEdit.description,
      price: productToEdit.price,
      category: productToEdit.category,
      image: productToEdit.image,
    });
    setEditingProductId(productId);
    handleShow();
  };

  return (
    <div>
      <SellerNavbar />
      <div className='sellerDivision'>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h1 className='ml-5'>Products List </h1>
          <Button variant='primary' style={{ height: '40px' }} onClick={handleShow}>ADD NEW PRODUCT </Button>
          <Modal show={show}>
            <Modal.Header  >
              <Modal.Title>ADD NEW PRODUCT</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form onSubmit={handleFormSubmit}>
                <Form.Control
                  type="text"
                  name="title"
                  value={item.title}
                  onChange={handleChange}
                  placeholder="Name"
                />
                <br />
                <Form.Control
                  type="text"
                  name="description"
                  value={item.description}
                  onChange={handleChange}
                  placeholder="Description"
                />
                <br />
                <Form.Control
                  type="number"
                  name="price"
                  value={item.price}
                  onChange={handleChange}
                  placeholder="Price"
                />
                <br />
                <Form.Control
                  type="text"
                  name="category"
                  value={item.category}
                  onChange={handleChange}
                  placeholder="Category"
                />
                <br />
                <Form.Control
                  type="text"
                  name="image"
                  value={item.image}
                  onChange={handleChange}
                  placeholder="Add Image Link"
                />
                <br />
                <Button variant="danger" onClick={handleClose} style={{ marginLeft: '20px' }}>
                  Close
                </Button>
                <Button variant="primary" type='submit' style={{ marginLeft: '10px' }}>
                  ADD PRODUCT
                </Button>
              </Form>
            </Modal.Body>
          </Modal>
        </div>
        <ul className='sellerScrolling'>
          {products.map((product) => (
            <li
              key={product._id}
              className='mb-4 p-3 ml-2'
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                height: '200px',
                width: '18%',
                boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
              }}
            >
              <img src={product.image} alt={product.title} className='img-fluid rounded' style={{ width: '40%', height: '37%' }} />
              <h5 className='mt-1'>
                <strong>
                  <em>{product.title.slice(0, 12)}</em>
                </strong>
              </h5>
              <p>Price: ${product.price}</p>
              <div style={{ display: 'flex', gap: '10px' }}>
                <Button variant='primary'  onClick={() => handleEdit(product._id)}>Edit </Button>
                <Button variant='danger' onClick={() => handleDelete(product._id)}>Delete </Button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default SellerMainPage