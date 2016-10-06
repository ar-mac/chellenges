import React, {PropTypes} from 'react';

export default class Dragger extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      onHold: false
    };
  }

  setOnHold = () => {
    this.setState({onHold: true});
  };

  clearOnHold = () => {
    this.setState({onHold: false});
  };

  classNames = () => {
    let classNames = 'dragger';
    if (this.state.onHold) classNames += ' dragger__hold';
    return classNames
  };

  render() {
    return (
      <div
        className={this.classNames()}
        onMouseDown={this.setOnHold}
        onMouseUp={this.clearOnHold}
      >
        Here be dragger
      </div>
    )
  }
}
