import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Spinner, Alert, Pagination, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ProductListing = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 12;

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://gebeya-link-v2.onrender.com/api/v1/products/all');
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        const data = await response.json();
        setProducts(data.products || []);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Pagination logic
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(products.length / productsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  if (loading) {
    return (
      <Container className="py-5 text-center">
        <Spinner animation="border" role="status" variant="success">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
        <p className="mt-3">Loading agricultural products...</p>
      </Container>
    );
  }

  if (error) {
    return (
      <Container className="py-5">
        <Alert variant="danger">
          Error loading products: {error}
        </Alert>
      </Container>
    );
  }

  return (
    <Container className="py-4">
      <h2 className="mb-4 text-center text-success">Fresh Agricultural Products</h2>
      <p className="text-center text-muted mb-5">Direct from farmers to your doorstep</p>
      
      <Row xs={1} sm={2} md={3} lg={4} className="g-4">
        {currentProducts.map((product) => (
          <Col key={product.id || product._id}>
            <Card className="h-100 shadow-sm border-0">
              <div className="product-image-container" style={{ height: '200px', overflow: 'hidden' }}>
                {product.image ? (
                  <Card.Img 
                    variant="top" 
                    src={product.image} 
                    alt={product.name}
                    className="img-fluid h-100 w-100 object-fit-cover"
                  />
                ) : (
                  <div className="d-flex align-items-center justify-content-center bg-light h-100">
                    <div className="text-center p-3">
                      <i className="bi bi-image text-muted" style={{ fontSize: '3rem' }}></i>
                      <p className="text-muted mt-2">Image coming soon</p>
                    </div>
                  </div>
                )}
              </div>
              
              <Card.Body className="d-flex flex-column">
                <div className="mb-2">
                  {product.category && (
                    <Badge bg="light" text="success" className="mb-2">
                      {product.category}
                    </Badge>
                  )}
                </div>
                
                <Card.Title className="mb-1">
                  <Link to={`/products/${product.id || product._id}`} className="text-decoration-none text-dark">
                    {product.name || 'Agricultural Product'}
                  </Link>
                </Card.Title>
                
                <Card.Text className="text-muted small mb-2">
                  {product.description?.substring(0, 60)}...
                </Card.Text>
                
                <div className="mt-auto">
                  <div className="d-flex justify-content-between align-items-center">
                    <span className="fw-bold text-success">
                      {product.price ? `ETB ${product.price.toFixed(2)}` : 'Price not set'}
                    </span>
                    {product.quantity > 0 ? (
                      <Badge bg="success" className="px-2">
                        In Stock
                      </Badge>
                    ) : (
                      <Badge bg="secondary" className="px-2">
                        Out of Stock
                      </Badge>
                    )}
                  </div>
                </div>
              </Card.Body>
              
              <Card.Footer className="bg-white border-0">
                <Link 
                  to={`/products/${product.id || product._id}`} 
                  className="btn btn-outline-success w-100"
                >
                  View Details
                </Link>
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>
      
      {products.length > productsPerPage && (
        <div className="d-flex justify-content-center mt-5">
          <Pagination>
            <Pagination.Prev 
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))} 
              disabled={currentPage === 1}
            />
            
            {[...Array(totalPages).keys()].map(number => (
              <Pagination.Item
                key={number + 1}
                active={number + 1 === currentPage}
                onClick={() => paginate(number + 1)}
              >
                {number + 1}
              </Pagination.Item>
            ))}
            
            <Pagination.Next 
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))} 
              disabled={currentPage === totalPages}
            />
          </Pagination>
        </div>
      )}
    </Container>
  );
};

export default ProductListing;