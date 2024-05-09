import React, { useState } from 'react';
import { Form, ListGroup, ListGroupItem, Button, Container, Row, Col } from 'react-bootstrap';
import jsonData from './data.json';

const TablaRegistros = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);
  const [json_data, agregarItem] = useState([jsonData]);
  
  console.log(json_data)


  const handleSearch = (e) => {
    console.log(e)
    const term = e.target.value;
    setSearchTerm(term);
    const filteredResults = json_data.filter(item =>
      item.name.toLowerCase().includes(term.toLowerCase())
    );
    setResults(filteredResults);
  };

  const ItemsSelecionados = (item) => {
    setSelectedItems([...selectedItems, item]);
    console.log(item)
  };

  const deleteItem = (id) => {
    const updatedItems = selectedItems.filter(item => item.id !== id);
    console.log(id)
    setSelectedItems(updatedItems);
    console.log(updatedItems)
  };
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <Form>
              <Form.Group controlId="searchInput">
                <Form.Control
                  type="search"
                  value={searchTerm}
                  onChange={handleSearch}
                  placeholder="Buscar..."
                />
              </Form.Group>
            </Form>
            <ListGroup>
              {results.map(result => (
                <ListGroupItem
                  key={result.id}
                  onClick={() => ItemsSelecionados(result)}
                  active={selectedItems.includes(result)}
                >
                  <Row>
                    <Col>
                      <p>{result.name} Precio : {result.Precio}</p>
                    </Col>
                    <Col>
                      <Button onClick={() => ItemsSelecionados(result)}>Agregar a la lista</Button>
                    </Col>
                  </Row>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>
          <Col>
            <h3>Lista de compras:</h3>
            <ListGroup>
              {selectedItems.map(item => (
                <ListGroupItem key={item.id}>
                  <Row>
                  <Col>
                    {item.name} = {item.Precio}
                  </Col>
                  <Col>

                  {/* eliminar  */}
                    <Button variant="danger" onClick={() => deleteItem(item) }>Delete</Button>
                  </Col>
                  </Row>
                  
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default TablaRegistros;