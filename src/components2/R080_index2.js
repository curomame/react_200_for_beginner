import {ADD} from './R080_index'
import { combineReducers } from 'redux'

const initState = {
  srt : 'react',
}

const data = (state = initState, action) => {
  switch (action.type){
    case ADD : 
      return state, {
        str : state.str + '200'
      };
      default :
        return state;
  }
};

const App = combineReducers({
  data
});

export default App;