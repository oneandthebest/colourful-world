import React, { Component } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import './ColorBox.css';
// import './Palette.css';
// import { Link } from "react-router-dom";
// import classNames from "classnames";
// import { withStyles } from "@material-ui/styles";
// import styles from "./styles/ColorBoxStyles";

class ColorBox extends Component {
  constructor(props) {
    super(props);
    this.state = { copied: false };
    this.changeCopyState = this.changeCopyState.bind(this);
  }
  changeCopyState() {
    this.setState({ copied: true }, () => {
      setTimeout(() => this.setState({ copied: false }), 1500);
    });
  }
  render() {
    const { name, background, } = this.props;
    const { copied } = this.state;
    return (
      <CopyToClipboard text={background} onCopy={this.changeCopyState}>
        <div style={{ background }} className='colorBox'>
          <div style={{ background }} className={`copyOverlay ${copied && 'show'}`} />
          <div className={`copyMsg  ${copied && 'show'}`}>
            <h1>copied!</h1>
            <p>{this.props.background}</p>
          </div>
          <div className='copyContainer'>
            <div className='boxContent'>
              <span>{name}</span>
            </div>
            <button className='copyButton'>Copy</button>
          </div>
          <span className='seeMore'>More</span>
        </div>
      </CopyToClipboard>
    );
  }
}

export default ColorBox;
