import TweetBox from "./components/TweetBox";
import TweetList from "./components/TweetList";
import TweetActions from "./actions/TweetActions";
import TweetStore from "./stores/TweetStore";


TweetActions.getAllTweets();

let getAppState = () => {
  return { tweetsList: TweetStore.getAll()};
}

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = getAppState();
    this._onChange = this._onChange.bind(this);
  }
  addTweet(tweetToAdd) {
    let newTweetsList = this.state.tweetsList;
    newTweetsList.unshift({ id: Date.now(), name: 'Guest', body: tweetToAdd });
    this.setState({ tweetsList: newTweetsList });
  }
  componentDidMount() {
    TweetStore.addChangeListener(this._onChange);
  }
  componentWillUnmount() {
    TweetStore.removeChangeListener(this._onChange);
  }
  _onChange() {
    console.log(5, "Main.onChange");
    this.setState(getAppState());
  }
  render() {
    return (
      <div class="container">
        <TweetBox sendTweet={this.addTweet.bind(this)}/>
        <TweetList tweets={this.state.tweetsList}/>
      </div>
    );
  }
}

let documentReady = () => {
  let reactNode = document.getElementById('react');
  if (reactNode) {
    ReactDOM.render(  <Main />, reactNode);
  }
};

$(documentReady);
