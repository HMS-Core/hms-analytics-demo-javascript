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
      <span class="head-title">POST SCORE</span>
      <button class="button-class" @click="goBack()">BACK</button>
    </div>
    <div class="main-content">
      <div class="title">YOUR POST SCORE: <span class="score-num">{{score}}</span> POINTS</div>
      <div class="score-lists">
        <div class="score-item" v-for="(question, index) in questions" :key="index">
          <div class="question">{{index + 1}}.{{question}}</div>
          <div class="input-wrap">
            <input type="radio" :name="question" value="1" v-model="userAnswers[index]" disabled="true" />true
            <input type="radio" class="ml20" :name="question" value="0" v-model="userAnswers[index]"
              disabled="true" />false
          </div>
          <div class="answer">ANSWER: <span
              :class="[answers[index] ? 'answer-true' : 'answer-false']">{{answers[index]}}</span> </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import eventBus from '../eventBus.js';
export default {
  name: "Result",
  data () {
    return {
      answers: [],
      questions: [],
      score: 0,
      userAnswers: []
    }
  },
  created() {
    eventBus.$on('show-result', this.getResult);
  },
  computed: {
  },
  methods: {
    getResult(result) {
      this.answers = result.answers;
      this.questions = result.questions;
      this.score = result.score;
      this.userAnswers = result.userAnswers;
    },
    goBack() {
      this.$router.push({ name: 'answerDemo'});
    }
  },
  destroyed(){
    eventBus.$off('show-result', this.getResult);
  }
};
</script>

<style scoped>
.score-num {
  font-size: 40px;
  color: #fa2a2d;
  margin: 0 5px;
}

.score-item {
  margin-bottom: 40px;
}

.input-wrap {
  margin: 20px 0;
}

.answer {
  height: 40px;
  line-height: 40px;
  width: 500px;
  background-color: rgba(247, 247, 247, 1);
  padding: 0 12px;
}

.answer-true {
  color: #00cc6c;
  margin-left: 10px;
}

.answer-false {
  color: #fa2a2d;
  margin-left: 10px;
}
</style>
