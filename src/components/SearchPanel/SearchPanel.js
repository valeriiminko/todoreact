import React,{Component} from 'react';
import './SearchPanel.scss';


export default class SearchPanel extends Component{
  
  state = {
    value: ''
  }

  onChanged = (e) => {
    const {onSearch = () => {}} = this.props;
    const value = e.target.value;
    this.setState({
      value
    })
    
    onSearch(value);
  } 
  
  render(){
  
    return (
      <input onChange={this.onChanged} type="search" placeholder="seach your task" value={this.state.value}/>
    );
  
  }
}



