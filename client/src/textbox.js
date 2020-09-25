// import { ContentHook } from "@fullcalendar/react";
import React, { useState } from "react";
import axios from "axios";
import marked from "marked";
import parse from "html-react-parser";
import "./style.css";

const Box = () => {
  const [data, setData] = useState("");
  const [primary, setPrimary] = useState("#fff");
  const [secondary, setSecondary] = useState("#000");
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("/test/mailer", {
        data: marked(data),
        primary,
        secondary,
      })
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
    setData("");
  };
  const mailer = {
    background: primary,
    marginLeft: "10%",
    width: "80%",
    height: "500px",
    color: secondary,
  };

class box extends Component{

    constructor()
    {
        super();
        this.state={
            data: '',
        }
    }

    apple(event){
        this.setState({
            data: event.target.value,
        })
    }

    render() {
    return (
      <React.Fragment>

        <div className="textBox"><br/>
            <h1>Your Mail content goes here...</h1><br/>
            <form>
                <center>
                <textarea name="area" id="area" cols="80" rows="5" onChange={this.apple.bind(this)}></textarea>
                </center>
            </form><br/>
            <h2>Choose Your mail colours : </h2><br/>
            <center>
            <input type="color" id="body" name="body"/>
            <span className="tab1"></span>
            <label for="body">Primary Colour</label>
            <span className="tab"></span>
            <input type="color" id="body" name="body"/>
            <span className="tab1"></span>
            <label for="body">Secondary Colour</label>
            <div className="mt">
            <h2 className="Q2">Want something like, Hey, NAME?</h2><br/>
            <label class="switch">
            <input type="checkbox"/>
            <span class="slider round"></span>
            </label>
            </div>
            </center>
            <h1>{this.state.data}</h1>
        </div>

      </React.Fragment>
    );
  }
}

export default box;

export default Box;
