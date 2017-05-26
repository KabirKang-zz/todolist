import React, {Component, PropTypes} from 'react';

export default class Todo extends Component {

  static propTypes = {
    todo: PropTypes.object.isRequired,
  }

  static defaultProps = {

  }

  constructor(props) {
    super(props);
    this.state = {done: todo.done};
  }

  render() {
    const {todo = {}} = this.props;
    const {done} = this.state;
    return (
      <div>
        <span>{todo.name}</span>
        <input type='checkbox' checked={todo.done} onChange={() => this.setState({done: !!done})} />
      </div>
    );
  }

}
