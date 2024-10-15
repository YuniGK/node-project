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
  const [todoValue, setTodoValue] = useState('');

  const getTasks = async () => {
    const response = await api.get('/tasks');

    console.log('res ', response);

    setTodoList(response.data.data);
  }

  const addTask = async () => {
    try {
      const response = await api.post('/tasks', {task : todoValue, isComplete : false});

      if(response.status === 200){
        console.log('성공');
      }else{
        throw new Error('not be added');
      }

      setTodoValue('');
    } catch (error) {
      console.log('post error >>> ', error);
    }
  }

  useEffect(()=>{
    getTasks();
  }, [todoList]);

  return (
    <Container>
      <Row className="add-item-row">
        <Col xs={12} sm={10}>
          <input
            type="text"
            placeholder="할일을 입력하세요"
            className="input-box"
            value={todoValue}
            onChange={(event)=>setTodoValue(event.target.value)}
          />
        </Col>
        <Col xs={12} sm={2}>
          <button className="button-add" onClick={addTask}>추가</button>
        </Col>
      </Row>

      <TodoBoard todoList={todoList}/>
    </Container>
  );
}

export default App;
