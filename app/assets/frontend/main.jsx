import TweetBox from "./components/TweetBox"
import TweetList from "./components/TweetList"

let mockTweets = [
  { id: 1, name: 'Eshaam Rabaney', body: 'My #FirstTweet'},
  { id: 2, name: 'Eshaam Rabaney', body: 'My #SecondTweet'},
  { id: 3, name: 'Eshaam Rabaney', body: 'My #ThirdTweet'}
]


class Main extends React.Component {
  render() {
    return (
      <div class="container">
        <TweetBox />
        <TweetList tweets={mockTweets}/>
      </div>
    );
  }
}

let documentReady = () => {
  ReactDOM.render(
    <Main />,
    document.getElementById('react')
  );
};

$(documentReady);
