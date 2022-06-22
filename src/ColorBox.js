import React, { Component } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import './ColorBox.css';
import './Palette.css';

class ColorBox extends Component {
  render() {
    const { name, background } = this.props;
    return (
      <CopyToClipboard text={background}>
        <div style={{ background }} className='colorBox'>
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
