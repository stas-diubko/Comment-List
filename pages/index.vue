<template>
  <div class="container">
    <header>
      <div class="face"><img src="../img/face.jpg" alt="Veronika Rostova"></div>
      <h1>вероника ростова</h1>
      <div class="position"><span>менеджер</span> по продажам</div>
      <div class="description">Подберу для вас самые лучшие предложения.<br/>
        Мои услуги абсолютно бесплатны</div>
    </header>
    <div class="services">
      <div class="serv-top">
        <h4>услуг</h4>
      </div>
      <div class="serv-wrap">
        <div class="booking">
          <div class="booking-progress"></div>
          <div class="booking-descript">Ручное бронирование</div>
          <div class="amount">11</div>
        </div>
        <div class="tours">
          <div class="tours-progress"></div>
          <div class="tours-descript">Пакетные туры</div>
          <div class="amount">3</div>
        </div>
        <div class="hotels">
          <div class="hotels-progress"></div>
          <div class="hotels-descript">Отели</div>
          <div class="amount">1</div>
        </div>
      </div>
      <div class="total">
        <h4>всего</h4>
        <div class="total-amount">15</div>
      </div>
    </div>
    <div class="reviews">
      <h3>Последние отзывы</h3>
      <div><a href="">Все отзывы</a></div>
      <div class="likes" @click.prevent="countLikes">
        <img src="../img/heart.png"/>
        <div class="count-likes" >{{likes}}</div>
      </div>
      <div class="comments">
        <img src="../img/comments.png"/>
        <div class="count-comments">{{countComments}}</div>
      </div>
    </div>
    <div class="comment-list">
      <CommentList/>
    </div>
    <footer>
      <input type="text"  v-model="text" text="text">
      <button @click.prevent="onAddComment">написать консультанту</button>
    </footer>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import { mapActions } from 'vuex';
  import CommentList from "../components/CommentList";

  // var count = 0;


  export default {
    components: {
      CommentList

    },
    data() {
      return {
        text: ''
      }
    },
    computed: mapGetters({
      countComments: 'Comments/commentsCount',
      likes: 'Comments/countLikes'

    }),
    methods: {
      ...mapActions({
        add: 'Comments/addComment',
        countLikes: 'Comments/addLike'
      }),
      async onAddComment() {
          this.add(this.text);
          this.text = '';
        },

    },
  }
</script>

<style>
  body {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    /*background-color: aliceblue;*/
  }
  .container {

  }

  header {
    height: 137px;
    width: 489px;
    position: relative;
    font-family: Arial;
    margin: 0 auto;
    background-color: #fff;
    padding-top: 25px;

  }

  .face {
    position: absolute;
    width: 120px;
    height: 120px;
    border-radius: 50%;
    overflow: hidden;
    margin-top: -9px;
    margin-left: 20px;
  }

  .face img {
    margin-left: -15px;
    margin-top: -14px;
  }

  h1 {
    text-transform: capitalize;
    font-size: 16px;
    color: rgb(51, 51, 51);
    font-weight: bold;
    margin-left: 150px;
    margin-bottom: 0;
  }

  .position {
    margin-left: 150px;
    font-size: 16px;
    color: #808080;
  }

  .position span{
      text-transform: capitalize;
  }

  .description {
    width: 360px;
    height: 56px;
    background-color: #fffbc8;
    border: 1px solid #cecabf;
    border-radius: 5px;
    font-size: 14px;
    color: rgb(51, 51, 51);
    padding-left: 40px;
    padding-top: 7px;
    margin-left: 110px;
  }
  .services {
    width: 489px;
    background-color: #fff;
    margin: 0 auto;
    padding-bottom: 20px;
  }

  .serv-top {
    width: 320px;
    margin-left: 150px;
    border-bottom: 1px solid #cccccc;
    margin-bottom: 15px;
  }

  .serv-top h4 {
    font-size: 13px;
    font-family: "Arial";
    color: rgb(51, 51, 51);
    text-transform: capitalize;
    margin-left: 253px;
  }
  .serv-wrap {
    font-size: 13px;
    font-family: "Arial";
    color: rgb(51, 51, 51);
    margin-left: 150px;
    border-left: 1px solid #b2b2b2;
    overflow: hidden;
  }

  .booking, .hotels, .tours {
    display: flex;
    justify-content: space-between;
    position: relative;
    height: 24px;
    line-height: 24px;
  }

  .booking, .tours{
    margin-bottom: 2px;
  }

  .booking-descript {
    position: absolute;
    margin-left: 5px;
  }

  .tours-descript {
    position: absolute;
    margin-left: 5px;
  }

  .hotels-descript {
    position: absolute;
    margin-left: 5px;
  }

  .booking-progress {
    width: 219px;
    background-color: #b1e19b;
    border-radius: 4px;
    margin-left: -3px;
  }

  .tours-progress {
    width: 54px;
    background-color: #ace2f8;
    border-radius: 4px;
    margin-left: -3px;
  }

  .hotels-progress {
    width: 36px;
    background-color: #ace2f8;
    border-radius: 4px;
    margin-left: -3px;
  }

  .amount {
    margin-right: 65px;
    font-weight: bold;
  }

  .total {
    font-size: 16px;
    font-family: "Arial";
    color: rgb(51, 51, 51);
    font-weight: bold;
    display: flex;
    justify-content: space-between;
    width: 320px;
    margin-left: 150px;
    border-top: 1px solid #cccccc;
    margin-top: 15px;
    padding-top: 15px;
  }

  .total h4 {
    text-transform: capitalize;
    font-size: 16px;
    color: rgb(51, 51, 51);
    font-weight: bold;
  }

  .total-amount {
    margin-right: 52px;
  }

  .reviews {
    display: flex;
    justify-content: space-between;
    width: 489px;
    background-color: #fff;
    margin: 0 auto;
  }

  .likes div, .comments div {
    display: inline;
  }
  .reviews h3 {
    font-size: 16px;
    font-family: "Arial";
    color: rgb(51, 51, 51);
    font-weight: bold;
    margin-left: 21px;
    margin-right: 10px;
    margin-top: 5px;

  }
  .reviews a {
    text-decoration: underline;
    margin-right: 85px;
  }

  .comments {
    margin-right: 21px;
  }

  .likes {
    margin-right: 20px;
  }

  footer {
    width: 489px;
    height: 193px;
    background-color: #f2f2f2;
    margin: 0 auto;
    padding-top: 30px;
  }

  footer input {
    width: 449px;
    height: 65px;
    border-radius: 3px;
    display: block;
    margin: 0 auto 24px;
    border: 1px solid #a9a9a9;
  }

  footer button {
    background-color: #fdd639;
    border-radius: 16px;
    font-size: 19.577px;
    color: rgb(51, 51, 51);
    font-weight: bold;
    width: 281px;
    height: 42px;
    display: block;
    margin: 0 auto;
    border: transparent;
  }

  .comment-list {
    display: flex;
  }

  .likes:hover {
    cursor: pointer;
  }

</style>
