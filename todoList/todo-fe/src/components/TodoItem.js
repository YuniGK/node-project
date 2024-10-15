import React from "react";
import { Col, Row } from "react-bootstrap";

const TodoItem = () => {
  return (
    <Row>
      <Col xs={12}>
        <div className={`todo-item`}>
          <div className="todo-content">밥먹기</div>

          <div>
            <button className="button-delete">삭제</button>
            <button className="button-delete">끝남</button>
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default TodoItem;
