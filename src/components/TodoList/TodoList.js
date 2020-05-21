import React from 'react';
import TodoListItem from '../TodoListItem';
import './TodoList.scss';


const TodoList = ({items, onDeleteItem, onDone, onImportant}) => {

  const mappedarr = items.map((el) => {
    const {id, ...otherinfo} = el;

    return(
        <li key={id}>
          <TodoListItem {...otherinfo}
            ondelItem = {() => onDeleteItem(id)}
            onDoneItem={() => onDone(id)}
            onImportantItem = {() => onImportant(id)}
          />
        </li>
    )


  })


  return (
      <ul>
          {mappedarr}
      </ul>
    
  );

}

export default TodoList;
