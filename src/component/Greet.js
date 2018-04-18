import React, {Component} from 'react';

class Greet extends Component {
    constructor(props) {
        super(props);
        this.state = {
            age: props.age,
            status: "waiting"
        }

        setTimeout(() => {
            this.setState({
                status: "ok"
            })
        }, 3000)
    }

    onMakeOlder() {

        this.setState({
            age: this.state.age + 1
        })
        console.log(this.state.age);
    }


    render() {
        return (
            <div>
                <h2>your name is {this.props.name},your age is {this.state.age}</h2>
                <h3>Status:{this.state.status}</h3>
                <h4>hobbies</h4>
                <ul>
                    {this.props.user.hobbies.map((hobby) => <li key={hobby}>{hobby}</li>)}
                </ul>
                <div>{this.props.children}</div>
                <button className="btn btn-primary" onClick={this.onMakeOlder.bind(this)}>Make me Oldder</button>

            </div>
        );
    }
}

export default Greet;