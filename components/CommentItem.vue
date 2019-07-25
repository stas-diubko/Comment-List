<template>
    <div class="comment-wrap">
      <div class="comment-head">
        <div class="comment-name">Stanislav Diubko</div>
        <div class="comment-date">{{getDate}}</div>
      </div>
      <div class="comment-text">{{comment.text}}</div>
    </div>
</template>

<script>

  export default {
      name: "CommentItem",
      props: {
        comment: {
          type: Object,
          required: true
        }
      },
      computed: {
        getDate(){
          var now = new Date();
          var date = now.toLocaleString('ru');
          return date;
        }
      }
    }
</script>

<style scoped>

  .comment-wrap {
    display: block;
    margin: 0 auto 20px;
  }

  .comment-head {
    display: flex;
    margin-bottom: 10px;
  }

  .comment-name {
    font-size: 16px;
    font-family: "Arial";
    color: rgb(51, 51, 51);
    font-weight: bold;
    margin-right: 9px;
  }

  .comment-date {
    font-family: "Arial";
    font-size: 14px;
    color: #808080;
    margin-top: 2px;
  }

  .comment-text {
    width: 449px;
    min-height: 46px;
    background-color: #f2fbff;
    border: 1px solid #cfcfcf;
    padding: 18px;
    position: relative;
  }

  /*.comment-text::before {*/
    /*content: '';*/
    /*position: absolute;*/
    /*left: 20px;*/
    /*bottom: 60px; !* Положение треугольника *!*/
    /*!*border-top: 1px solid #cfcfcf;*!*/
    /*border-left: 1px solid #cfcfcf;*/
    /*border-right: 10px solid transparent; !* Прозрачные границы *!*/
    /*border-bottom: 12px solid #f2fbff;*/
  /*}*/

  .comment-text::before, .comment-text::after {
    content: '';
    position: absolute;
    left: 20px;
    bottom: 60px;
    border: 6px solid transparent;
    border-left: 6px solid #cfcfcf;
    border-bottom: 6px solid #cfcfcf;
  }
  .comment-text::after {
    border: 5px solid transparent;
    border-bottom: 5px solid #f2fbff;
    border-left: 5px solid #f2fbff;
    bottom: 60px;
    left: 21px;
  }
</style>
