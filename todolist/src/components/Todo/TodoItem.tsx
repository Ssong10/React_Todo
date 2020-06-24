import React, { Component } from 'react';
import '../../styles/Todoitem.css'
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import { throws } from 'assert';

interface Props {
    id : number;
    text: string;
    onToggle() : void;
    select : boolean;
    date : Date;
}

class TodoItem extends Component<Props> {
    render() {  
        return (
            <div className={"todoitem" + (this.props.select ? ' select' : '')}
                onClick= {this.props.onToggle}
            >
            <b>
                {this.props.text}
            </b>
            <p className="topright">
                <Link to={"todo/" + String(this.props.id)}>
                자세히
                </Link>
            </p>
        </div>
        );
    }
}

export default TodoItem;