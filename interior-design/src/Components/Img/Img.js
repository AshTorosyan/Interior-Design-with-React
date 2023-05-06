import { Component } from "react";

class Img extends Component {
    render() {
        return (
            <img className={this.props.className} src={this.props.src} alt={this.props.alt}/>
        );
    }
}


export default Img;