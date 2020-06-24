import React, { Component } from 'react';
import TodoItem from './TodoItem';
import '../../styles/TodoList.css'
interface Props {
    items: TodoItemState[];
    title : string;
    onStateChange() : void;
  }

interface TodoItemState {
    id: number;
    text: string;
    status : number;
    select : boolean;
    date : Date;
}

interface State {
}

class TodoList extends Component<Props,State>{
    onToggle = (id: number): void => {
        for (var i in this.props.items){
            if (this.props.items[i].id === id){
                var item = this.props.items[i]
                item.select = !item.select
                break
            }
        }
        this.props.onStateChange()
    }
    render() {
        const { onToggle } = this;
        const { items,title } = this.props;
        const todoItemList: React.ReactElement[] = items.map(
            todo => (
              <TodoItem
                id={todo.id}
                onToggle={() => onToggle(todo.id)}
                text={todo.text}
                select={todo.select}
                date = {todo.date}
              />
            )
          );

        return (
            <div className={"col3"}>
                <div className='title'>{title}</div>
                {todoItemList}
            </div>
        );
    }
}


export default TodoList;