var React = require('react');
var RouteHandler = require('./components/RouteHandler');
var State = require('./State');

exports.Nested = React.createClass({
  render: function () {
    return (
      <div>
        <h1 className="Nested">Nested</h1>
        <RouteHandler />
      </div>
    );
  }
});

exports.Foo = React.createClass({
  render: function () {
    return <div className="Foo">Foo</div>;
  }
});

exports.Bar = React.createClass({
  render: function () {
    return <div className="Bar">Bar</div>;
  }
});

exports.Baz = React.createClass({
  render: function () {
    return <div className="Baz">Baz</div>;
  }
});

exports.Async = React.createClass({
  statics: {
    delay: 10,

    willTransitionTo: function (transition, params, query, callback) {
      setTimeout(callback, this.delay);
    }
  },

  render: function () {
    return <div className="Async">Async</div>;
  }
});

exports.RedirectToFoo = React.createClass({
  statics: {
    willTransitionTo: function (transition) {
      transition.redirect('/foo');
    }
  },

  render: function () {
    return null;
  }
});

exports.RedirectToFooAsync = React.createClass({
  statics: {
    delay: 10,

    willTransitionTo: function (transition, params, query, callback) {
      setTimeout(function () {
        transition.redirect('/foo');
        callback();
      }, this.delay);
    }
  },

  render: function () {
    return null;
  }
});


exports.Abort = React.createClass({
  statics: {
    willTransitionTo: function (transition) {
      transition.abort();
    }
  },

  render: function () {
    return null;
  }
});

exports.AbortAsync = React.createClass({
  statics: {
    delay: 10,

    willTransitionTo: function (transition, params, query, callback) {
      setTimeout(function () {
        transition.abort();
        callback();
      }, this.delay);
    }
  },

  render: function () {
    return null;
  }
});

exports.EchoFooProp = React.createClass({
  render: function () {
    return <div>{this.props.foo}</div>;
  }
});

exports.EchoBarParam = React.createClass({
  mixins: [ State ],
  render: function () {
    return <div className="EchoBarParam">{this.getParams().bar}</div>;
  }
});
