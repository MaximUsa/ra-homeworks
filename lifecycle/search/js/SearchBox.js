class SearchBox extends React.Component {

  constructor(props) {
    super(props);
    this.state = { fixed: false };
  }
  componentWillUnmount() {
    window.removeeventListener('scroll', this.setPosition);
  }

  componentDidMount() {
    this.setPosition = this.setPosition.bind(this);
    window.addEventListener('scroll', this.setPosition);
  }


  render() {
    return <SearchBoxView fixed={this.state.fixed} />
  }

  static isFixed() {
    return document.querySelector('.search-box').getBoundingClientRect().top <= 0 && window.pageYOffset >= 164
  }


  setPosition() {
    this.setState({fixed: SearchBox.isFixed()})
  }
}
