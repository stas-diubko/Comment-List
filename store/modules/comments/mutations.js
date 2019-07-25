import { ADD_COMMENT, ADD_LIKE} from "./mutation-types";


export default {
  [ADD_COMMENT](state, comment) {
    state.items.push(comment);
  },
  [ADD_LIKE](state) {
    state.countLikes += 1;
  },
}
