import { useEffect, useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import TodoBoard from "./components/TodoBoard";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

import api from "./utils/api"

function App() {
  const [todoList, setTodoList] = useState([]);

  const getTasks = async () => {
    const response = await api.get('/tasks');

    console.log('res ', response);
  }

  useEffect(()=>{
    getTasks();
  }, []);

  return (
    <Container>
      <Row className="add-item-row">
        <Col xs={12} sm={10}>
          <input
            type="text"
            placeholder="할일을 입력하세요"
            className="input-box"
          />
        </Col>
        <Col xs={12} sm={2}>
          <button className="button-add">추가</button>
        </Col>
      </Row>

      <TodoBoard />
    </Container>
  );
}

export default App;
