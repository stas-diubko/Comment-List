import { ADD_COMMENT, ADD_LIKE} from "./mutation-types";

function generateId() {
  return new Date().getTime();
}

export default {
  addComment({ commit }, text) {
    commit(ADD_COMMENT, {
      text: text,
      isDone: false,
      id: generateId()
    });
  },
  addLike({commit}){
    commit(ADD_LIKE, {

    })
  }
}
