var Contact = React.createClass({
  propTypes: {
    item: React.PropTypes.object.isRequired,
  },

  render: function() {
    return (
      React.createElement('div', {className: 'contactItem'},
        React.createElement('img', {
          className: 'contactImage',
          src: './images/contact-icon-1.png'
        }),
        React.createElement('div', {className: 'textBox'},
          React.createElement('p', {className: 'contactLabel'},
            React.createElement('span', {}, 'Imię: '), this.props.item.firstName),
          React.createElement('p', {className: 'contactLabel'},
            React.createElement('span', {}, 'Nazwisko: '), this.props.item.lastName),
          React.createElement('p', {className: 'contactEmail'},
            React.createElement('span', {}, 'Email: '),
            React.createElement('a', {href: 'mailto:' + this.props.item.email}, this.props.item.email)
          )
        )
      )
    )
  },
});