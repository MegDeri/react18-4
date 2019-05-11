var movies = [
    {
      id: 1,
      title: 'Harry Potter',
      desc: 'film o czarodzieju',
      image: 'http://via.placeholder.com/400x200'
    },
    {
      id: 2,
      title: 'Król Lew',
      desc: 'Film o królu sawanny',
      image: 'http://via.placeholder.com/400x200'
    },
    {
      id: 3,
      title: 'W pogoni za szczesciem',
      desc: 'Co jest wazne w zyciu..pieniadze?',
      image: 'http://via.placeholder.com/400x200'
    },
    {
      id: 4,
      title: 'Me before you',
      desc: 'Eutanazja..., czy kalectwo to dobry powod by sie decydowac na ten krok?',
      image: 'http://via.placeholder.com/400x200'
    }
  ];

var Movie = React.createClass({
  propTypes: {
    movie: React.PropTypes.object.isRequired,
    },
  render: function() {
    return (
        React.createElement('li', {src: this.props.movie.id},
          React.createElement(MovieTitle, {title: this.props.movie.title}),
          React.createElement(MovieDescription, {desc: this.props.movie.desc}),
          React.createElement(MovieImg, {image: this.props.movie.image, alt: this.props.movie.title})
      )
    )
  },
});

var MovieTitle = React.createClass({
    propTypes: {
      title: React.PropTypes.string.isRequired,
    },
    render: function() {
      return (
        React.createElement('h2', {}, this.props.title)
      )
    },
});

  var MovieDescription = React.createClass({
    propTypes: {
      desc: React.PropTypes.string.isRequired,
      },
    render: function() {
      return (
        React.createElement('p', {}, this.props.desc)
      )
    },
  });

  var MovieImg = React.createClass({
    propTypes: {
      image: React.PropTypes.string.isRequired,
      alt: React.PropTypes.string.isRequired
      },
    render: function() {
      return (
        React.createElement('img', {src: this.props.image, alt: this.props.alt})
      )
    },
  });

var moviesList = movies.map(function(movie) {
    return React.createElement(Movie, {key: movie.id, movie: movie}); 
});

var element = React.createElement('div', {},
    React.createElement('h1', {}, 'Lista filmów'),
    React.createElement('ul', {}, moviesList)
);

ReactDOM.render(element, document.getElementById('comp'));
