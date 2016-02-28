import React from 'react';
import ReactDOM from 'react-dom';

export class HelloReact extends React.Component {
  componentDidMount() {
    console.log('HelloReact mounted successfully');
  }

  render() {
    return(
      <div className="hello-react">
        welcome in hello react
      </div>
    )
  }
}

ReactDOM.render(
  <HelloReact />,
  document.getElementById('hello-content')
);
