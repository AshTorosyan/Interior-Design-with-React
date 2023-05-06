import { Component } from "react";

class Textitem extends Component {
    render() {
        return (
            <p className={this.props.className}>
                {this.props.children}
            </p>
        );
    }
}

export default Textitem;