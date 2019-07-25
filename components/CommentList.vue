<template>
    <ul v-if="totalComments > 0">
      <CommentItem v-for="comment of comments" :key="comment.id" :comment="comment"/>
    </ul>
    <ul v-else>
      <h3>no comments</h3>
    </ul>
</template>

<script>
  import { mapGetters } from 'vuex';

  import CommentItem from "./CommentItem";
    export default {
        name: "CommentList",
      components: {CommentItem},
      computed: mapGetters({
        comments: 'Comments/commentsList',
        totalComments: 'Comments/commentsCount'
      })
    }
</script>

<style scoped>
  ul {
    margin: 0 auto;
    padding: 0;

  }
</style>
