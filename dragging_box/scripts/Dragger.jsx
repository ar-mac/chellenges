import React, {PropTypes} from 'react';

export default class Dragger extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      onHold: false,
      begin: false,
      offsetX: 0,
      offsetY: 0,
      leftMargin: 0,
      topMargin: 0
    };
  }

  setOnHold = (e) => {
    this.setState({onHold: true, begin: true});
    document.addEventListener("mousemove", this.drag)
  };

  clearOnHold = () => {
    this.setState({onHold: false});
    document.removeEventListener("mousemove", this.drag)
  };

  drag = (e) => {
    if (this.state.begin) {
      this.setState({offsetX: e.offsetX, offsetY: e.offsetY, begin: false})
    } else {
      this.setState({
        leftMargin: (e.pageX - this.state.offsetX),
        topMargin: (e.pageY - this.state.offsetY)
      })
    }
  };

  classNames = () => {
    let classNames = 'dragger';
    if (this.state.onHold) classNames += ' dragger__hold';
    return classNames
  };

  render() {
    return (
      <div
        ref="dragger"
        className={this.classNames()}
        onMouseDown={this.setOnHold}
        onMouseUp={this.clearOnHold}
        style={{left: `${this.state.leftMargin}px`, top: `${this.state.topMargin}px`}}
      >
        Here be dragger
      </div>
    )
  }
}
