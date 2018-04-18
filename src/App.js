import React, {Component} from 'react';
import './App.css';
import Header from "./component/Header";
import Content from "./component/Content";
import Greet from "./component/Greet";

class App extends Component {
    render() {
        let content = "";
        if(true){
            content = "hello";
        }

        const  user ={
            name:"Anna",
            hobbies:["Sports","Reading","Codeing","Travel"]
        }

        return (
            <div className="container">
                <div>
                    <div className="col-xs-1 col-xs-offset-11">
                        <h1>Hello World!!I'm legend Zhougang</h1>
                    </div>
                    <Header/>
                    <Content/>
                    {3+2}
                    {content}
                    <Greet name="World!" age={12} sex="男" user={user}>
                        <p>I'm child one</p>
                        <p>I'm child two</p>

                    </Greet>
                </div>
            </div>
        );
    }
}

export default App;
