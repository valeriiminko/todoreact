import React, {Component} from 'react';
import './AddItem.scss';


export default class AddItem extends Component {

    state = {
        value: ''
    }
    
    onChanged = (e) => {
        let value = e.target.value;
        console.log(value)
        this.setState({
            value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        console.log(this.props.addnewItem(this.state.value));
        this.setState({
            value: ''
        })
    }

    render(){

        return(
            <form onSubmit={this.onSubmit}>
                <input onChange={this.onChanged} type="text" value={this.state.value}/>
                <button>Add new Item</button>
            </form>
        )
    }
}