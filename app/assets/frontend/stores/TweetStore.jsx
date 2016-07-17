import AppDispatcher from "../dispatcher";
import ActionTypes from "../constants";
import { EventEmitter } from "events";

let _tweets = [];
const CHANGE_EVENT = "CHANGE";

class TweetEventEmitter extends EventEmitter {
  getAll() {
    return _tweets;
  }
  emitChange() {
    this.emit(CHANGE_EVENT);
  }
  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  }
  removeChangeListner(callback) {
    this.removeListner(CHANGE_EVENT, callback);
  }
}

let TweetStore = new TweetEventEmitter();

AppDispatcher.register( action => {
  switch (action.actionType) {
    case ActionTypes.RECEIVED_TWEETS:
      console.log(4, "TweetStore");
      _tweets = action.rawTweets;
      TweetStore.emitChange();
      break;

  }
});

export default TweetStore;
