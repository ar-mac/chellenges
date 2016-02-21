var React = require('react');

var HelloReact = React.createClass({
  componentDidMount: function() {
    console.log('HelloReact mounted successfully');
  },

  render: function() {
    return(
      <div className="hello-react">
        welcome in hello react
      </div>
    )
  }
});

React.render(<HelloReact />, document.getElementById('content'));
