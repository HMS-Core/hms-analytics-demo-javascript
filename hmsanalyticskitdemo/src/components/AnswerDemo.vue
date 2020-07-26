/*
 * Copyright 2020. Huawei Technologies Co., Ltd. All rights reserved.

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
<template>
  <div class="main">
    <div class="main-head">
      <span class="head-title">ANSWER THE QUESTIONS</span>
      <div class="btns-wrap">
        <button class="button-class btn-gray btn-set mr20" @click="showSettingMenu()"><i
            class="btn-icon icon-set"></i>SETTINGS</button>
      </div>
    </div>
    <div class="main-content" v-if="!answerFinished">
      <div class="title">Question {{currentNumber + 1}} / 5:</div>
      <div class="txt">{{questions[currentNumber]}}</div>
      <div class="operation">
        <button class="button-class mr20" @click="checkAnswer(true)">TRUE</button>
        <button class="button-class mr20" @click="checkAnswer(false)">FALSE</button>
      </div>
    </div>
    <div class="main-content post-content" v-else>
      <div class="operation">
        <button class="button-class btn-post" @click="postScore()"><i class="icon icon-post"></i>POST SCORE</button>
      </div>
    </div>
  </div>
</template>

<script>
import eventBus from '../eventBus.js';
import agconnect from '@agconnect/api';
const ALL_QUESTIONS = 5;

export default {
  name: "AnswerDemo",
  data () {
    return {
      currentNumber: 0,
      score: 0,
      answers: [true, true, false, false, true],
      questions: [
        'The largest planet in the solar system is Jupiter',
        'The first Olympic Games were held in Athens, Greece',
        'The violin has 6 strings',
        'Flying bats belong to birds',
        'Sound spreads faster in the water than in the air'
      ],
      userAnswers: []
    }
  },
  mounted(){
    this.userAnswers = new Array(ALL_QUESTIONS);
  },
  computed: {
    answerFinished() {
      return this.currentNumber >= ALL_QUESTIONS;
    }
  },
  methods: {
    goNext() {
      this.currentNumber++;
    },
    checkAnswer(answer) {
      if (answer === this.answers[this.currentNumber]) {
        this.score += 100 / ALL_QUESTIONS;
      }
      this.userAnswers[this.currentNumber] = answer ? '1' : '0';
      this.reportAnswer(answer);
      this.goNext();
    },

    formatDate() {
      let date = new Date();
      let m = date.getMonth() + 1;
      m = m < 10 ? ('0' + m) : m;
      let d = date.getDate();
      d = d < 10 ? ('0' + d) : d;
      let h = date.getHours();
      h = h < 10 ? ('0' + h) : h;
      let minute = date.getMinutes();
      minute = minute < 10 ? ('0' + minute) : minute;
      let second = date.getSeconds();
      second = second < 10 ? ('0' + second) : second;
      return `${date.getFullYear()}-${m}-${d} ${h}:${minute}:${second}`;
    },

    reportAnswer(answer) {
      let answerTime = this.formatDate();
      let reportMessage = {
        question: this.questions[this.currentNumber],
        answer: answer,
        answerTime: answerTime
      }
      this.$hiAnalytics.onEvent("Answer", reportMessage);
    },
    showSettingMenu() {
      this.$router.push({ name: 'settings'});
    },
    postScore() {
      let scoreMessage = {}
      scoreMessage[agconnect.analytics.ParamName.SCORE] = this.score;
      this.$hiAnalytics.onEvent(agconnect.analytics.EventName.SUBMITSCORE, scoreMessage);
  
      
      
      this.$router.push({ name: 'result'});
      
      let scoreResult = {
        answers: this.answers,
        questions: this.questions,
        score: this.score,
        userAnswers: this.userAnswers
      }

      setTimeout(() => {
        eventBus.$emit('show-result', scoreResult);
      }, 300);
    }
  }
};
</script>

<style scoped>
.txt {
  font-size: 14px;
  height: 300px;
  margin-bottom: 40px;
}

.operation,
.post-content {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
