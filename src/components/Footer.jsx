import React,{Component} from "react";

const date=new Date();
const year=date.getFullYear();

class Footer extends Component{
    constructor(props){
        super(props)
        this.state={

        }
    }
    render(){
        return(<div>
            <footer className="footer">
            <span className="text-muted">All Rights Reserved{year}</span>
        </footer>
        </div>)
    }
}
export default Footer;