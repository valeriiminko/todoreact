import React, { Component } from 'react';
import Header from '../../components/Header';
import ButtonStatus from '../../components/ButtonStatus';
import SearchPanel from '../../components/SearchPanel';
import TodoList from '../../components/TodoList';
import AddItem from '../../components/AddItem';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';


export default class App extends Component{

  maxId = 0;

  state = {
    items : [
      this.createNewItem('task1'),
      this.createNewItem('task2'),
      this.createNewItem('task3')
      // {name: 'task1', id: 0, done: false, important: false}, 
      // {name: 'task2', id: 1, done: false, important: false},
      // {name: 'task3', id: 2, done: false, important: false}
    ],
    search : '',
    filter: 'all'
  }

  createNewItem(name){
    return{
      name,
      id: this.maxId++,
      done: false,
      important: false
    }
  }

  onAddItem = (name) => {
   
    this.setState(({items}) => {
      
      const newEl = this.createNewItem(name);
      const newArr = [...items, newEl];
      return{
        items: newArr
      }

    })

  }

  onDeleteItem = (id) => {
    
    this.setState(({items}) => {
      const inx = items.findIndex( el => el.id === id);
      
      const arr = [...items.slice(0, inx), ...items.slice(inx + 1)];

      return{
        items: arr
      }
    })
  }

  onDone = (id) => {
    this.setState(({items}) => {
      const inx = items.findIndex( el => el.id === id);
      const elem = items[inx];
      const { done, ...othervalues} = elem;
      const newElem = {...othervalues, done: !done};
      
      const arr = [...items.slice(0, inx), newElem, ...items.slice(inx + 1)];

      return{
        items: arr
      }

    })
  }

  onImportant = (id) => {
    this.setState(({items}) => {
      const inx = items.findIndex( el => el.id === id);
      const Elem = items[inx];
      const {important, ...values} = Elem;

      const newElem = {...values, important: !important };

      const Arr = [...items.slice(0, inx), newElem, ...items.slice(inx + 1)];

      return{
        items: Arr
      }
    })
  }

  SearchItems(items,search){
    if(search.length === 0){
      return items;
    }

    return items.filter(el => el.name.indexOf(search.toLowerCase()) > -1); // or name.includes(search) 
  }

  FilterItems(items, filter){
    switch(filter){
      case 'all': return items;
      case 'done': return items.filter(el => el.done);
      case 'active': return items.filter(el => !el.done);
    }
  }

  onFilter = (filter) => {
    this.setState({filter})
  }

  onSearch = (search) => {
    this.setState({
      search
    })
    console.log(search);
  }

  render(){

    const {items, search, filter} = this.state;
    // const displayitems = items.filter(el => el.name.includes(search));
    const displayitems = this.SearchItems(this.FilterItems(items, filter), search);
    console.log(displayitems);

    return (

      <div id="App" className="App container">
        <div className="wrapper">
          <Header />
          <SearchPanel onSearch={this.onSearch}/>
          <ButtonStatus filter={filter} onFilter={this.onFilter}/>
          <TodoList items={displayitems} 
            onDeleteItem={this.onDeleteItem}
            onDone={this.onDone}
            onImportant={this.onImportant}
          />
          <AddItem addnewItem={this.onAddItem}/>
        </div>
      </div>
    );

  }
  
}

