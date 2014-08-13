/** @jsx React.DOM */

var React = require("react");

var MainHeader = require('./main_header');

var SurveyEditor = require('./survey_editor');
var PatternLibrary = require('./pattern_library');

var App = React.createClass({
  render: function () {
    return (
      <div className='app'>
        <MainHeader currentUri='/'/>
        <div className='main-content container'>
          {this.props.children}
        </div>
      </div>
    );
  }
});

module.exports = App;