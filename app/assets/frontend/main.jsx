import TweetBox from "./components/TweetBox"
import TweetList from "./components/TweetList"

class Main extends React.Component {
  render() {
    return (
      <div class="container">
        <TweetBox />
        <TweetList />
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
