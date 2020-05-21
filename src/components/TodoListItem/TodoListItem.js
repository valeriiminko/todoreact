import React, {Component} from 'react';
import './TodoListItem.scss';


const TodoListItem = ({name, done, important, ondelItem, onDoneItem, onImportantItem}) => {

    let className = 'todo-list-item';

    if(done){
      className += ' done';
    }    

    if(important){
      className += ' important';
    }

    return (
      <span>
        <span className={className} onClick={onDoneItem}>
          {name}  
        </span>

        <React.Fragment>
            <button onClick={ondelItem}><i className="fa fa-trash" aria-hidden="true"></i></button>
            <button onClick={onImportantItem}><i className="fa fa-exclamation" aria-hidden="true"></i></button>
        </React.Fragment>
    </span>
    )

}

export default TodoListItem;

