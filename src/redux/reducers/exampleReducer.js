import EVENTS from "../events";

const stateReducer = {};
function ExampleReducer(state = stateReducer, action) {
  switch (action.type){
    case EVENTS.ExampleEvent:
      return { ...state }
    default :
      return state;
  }
}
export default ExampleReducer;