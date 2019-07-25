export default {
  commentsList(store) {
    return store.items;
  },
  commentsCount(store) {
    return store.items.length;
  },
  countLikes(store){
    return store.countLikes;
  }
}
