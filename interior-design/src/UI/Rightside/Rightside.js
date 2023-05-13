import {Component, Fragment} from "react";
import Card from "../../Components/Card/Card";
import Title1 from "../../Components/Title1/Title1";
import './Rightside.css';

class Rightside extends Component {
    render() {
        return(
            <Fragment>
                <Card className="right-side-container">
                    <Title1 className="title_1">Interior Design</Title1>
                    
                </Card>
            </Fragment>
        );
    }
}


export default Rightside;