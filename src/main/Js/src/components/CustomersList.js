import React, {Component} from 'react';

class CustomersList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }

    componentDidMount() {
        fetch('http://localhost:3000/customers')
            .then(response => response.json())
            .then(data => this.setState({ data }));
    }

    render() {
        return (
            <div>
                <ul>
                    <li>
                        {/* {this.state.data.name} */}
                    </li>
                </ul>
                <p>customer's list</p>
            </div>
            
        )
    }

}

export default CustomersList;