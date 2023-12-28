import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import '../App.css';

const ProductsPage = ({ addToCart }) => {

  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [sortBy, setSortBy] = useState('');
  const [category, setCategory] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const navigate = useNavigate();

  const handleAddToCart = (product) => {
    addToCart(product);
    alert("product added successfully to Cart")
  };

  useEffect(() => {
    axios
      .get('https://star-shopper-server.onrender.com/getProducts')
      .then((response) => setProducts(response.data))
      .catch((error) => console.error('Error fetching products:', error));
  }, []);

  useEffect(() => {
    // Apply filters
    let filtered = products;

    if (minPrice !== '') {
      filtered = filtered.filter((product) => product.price <= parseInt(minPrice, 10));
    }

    if (maxPrice !== '') {
      filtered = filtered.filter((product) => product.price >= parseInt(maxPrice, 10));
    }

    if (category !== '') {
      filtered = filtered.filter((product) => product.category === category);
    }

    if (searchTerm !== '') {
      filtered = filtered.filter((product) => product.title.toLowerCase().includes(searchTerm.toLowerCase()));
    }
    // Apply sorting

    if (sortBy === 'priceLowToHigh') {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'priceHighToLow') {
      filtered.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'aToZ') {
      filtered.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sortBy === 'zToA') {
      filtered.sort((a, b) => b.title.localeCompare(a.title));
    }

    setFilteredProducts([...filtered]);

  }, [products, minPrice, maxPrice, sortBy, category, searchTerm]);

  const handleSortChange = (event) => {
    setSortBy(event.target.value);
  };

  const handleCategoryChange = (selectedCategory) => {
    setCategory((prevCategory) => (prevCategory === selectedCategory ? '' : selectedCategory));
    setSelectedCategory((prevCategory) => (prevCategory === selectedCategory ? '' : selectedCategory));
  };


  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };


  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <div className='firstDivision'>
        <div className='search'>
          <input type="text" placeholder='Search for Items' className='search-input' value={searchTerm}
            onChange={handleSearchChange} />
        </div>
        <div className='mt-3'>
          <strong>Price Less than : <input type="number" placeholder='Enter Your Price ' className='ml-1 rounded p-1 w-55' onChange={(e) => setMinPrice(e.target.value)} /></strong><br />
          <strong>Price Greater than : <input type="number" placeholder='Enter Your Price ' className='ml-1 rounded p-1 w-55' onChange={(e) => setMaxPrice(e.target.value)} /></strong>
        </div>
        <div className='mt-3'>
          <h5><strong> Sort By : </strong></h5>
          <select
            name='sort'
            id='sort'
            value={sortBy}
            onChange={handleSortChange}
            style={{ height: '35px', borderRadius: '10px', background: '#C8EFEE', marginLeft: '15px' }}
          >
            <option value=''>Select Item</option>
            <option value='priceLowToHigh'>Price Low to High</option>
            <option value='priceHighToLow'>Price High to Low</option>
            <option value='aToZ'>A - Z</option>
            <option value='zToA'>Z - A</option>
          </select>
        </div>
        <div className='mt-3'>
          <h5><strong> Category : </strong></h5>
          <Button
            variant={selectedCategory === "men's clothing" ? 'warning' : 'secondary'}
            className={`mt-1 ml-1 ${selectedCategory === "men's clothing" ? 'active' : ''}`}
            onClick={() => handleCategoryChange("men's clothing")}
          >
            Mens shirts
          </Button>
          <Button style={{marginLeft:'10px'}}
            variant={selectedCategory === "women's clothing" ? 'warning' : 'secondary'}
            className={`mt-1 ml-2 ${selectedCategory === "women's clothing" ? 'active' : ''}`}
            onClick={() => handleCategoryChange("women's clothing")}
          >
            womens shirts
          </Button>
          <Button 
            variant={selectedCategory === 'electronics' ? 'warning' : 'secondary'}
            className={`mt-1 ml-1 ${selectedCategory === 'electronics' ? 'active' : ''}`}
            onClick={() => handleCategoryChange('electronics')}
          >
            Electronics
          </Button>
          <Button style={{marginLeft:'10px'}}
            variant={selectedCategory === 'jewelery' ? 'warning' : 'secondary'}
            className={`ml-1 mt-2 ${selectedCategory === 'jewelery' ? 'active' : ''}`}
            onClick={() => handleCategoryChange('jewelery')}
          >
            Jewellery
          </Button>

        </div>
        <div className='mt-3 '>
          <Button variant="primary" size="lg" onClick={() => navigate('/cart')} >Go TO Cart</Button>
        </div>
      </div>
      <div className='secondDivision'>
        <h1 className='ml-5'>Products List </h1>
        <ul className='Scrolling'>
          {filteredProducts.map((product) => (
            <li
              key={product._id}
              className='mb-4 p-3 ml-2'
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                height: '300px',
                width: '30%',
                boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
              }}
            >
              <img src={product.image} alt={product.title} className='img-fluid rounded' style={{ width: '60%', height: '60%' }} />
              <h5 className='mt-1'>
                <strong>
                  <em>{product.title.slice(0, 12)}</em>
                </strong>
              </h5>
              <p>Price: ${product.price}</p>
              <Button variant='primary' onClick={() => handleAddToCart(product)}>Add to Cart</Button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProductsPage;
