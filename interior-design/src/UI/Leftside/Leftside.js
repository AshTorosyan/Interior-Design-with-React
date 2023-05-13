import { Component, Fragment } from "react";
import Card from "../../Components/Card/Card";
import Title2 from "../../Components/Title2/Title2";
import List from "../../Components/List/List";
import Listitem from "../../Components/Listitem/Listitem";
import './Leftside.css';



class Leftside extends Component {
    render() {
        return (
            <Fragment>
                <Card className="left-side-container">
                    <Title2 className="company-name">Company <br/> Name</Title2>
                    <List className="list">
                        <Listitem className="list-item">Home</Listitem>
                        <Listitem className="list-item">Showcase</Listitem>
                        <Listitem className="list-item">Services</Listitem>
                        <Listitem className="list-item">Designers</Listitem>
                        <Listitem className="list-item">Packages</Listitem>
                        <Listitem className="list-item">Contact</Listitem>
                    </List>
                </Card>
            </Fragment>
        )
    }
}

export default Leftside;