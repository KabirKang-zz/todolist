import React from 'react';
import ReactDOM from 'react-dom';

import Todo from './Todo';

ReactDOM.render(TodoList, document.getElementById('root'));

class TodoList extends React.Component {
  constructor(props) {
    this.state = {
      todos: [{name: 'Go to the store', done: false, dueDate: Date.now(), url: 'https://www.google.com'}]
    }
  }
    render() {
      const {todos} = this.state;
        return (
          <div>
            {todos.map(todo => {
              <Todo todo={todo} />
            })}
          </div>
        );
    }
}
