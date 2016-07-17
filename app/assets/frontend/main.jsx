import TweetBox from "./components/TweetBox"

class Main extends React.Component {
  render() {
    return (
      <div class="container">
        <TweetBox />
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
