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
      <span class="head-title">SETTING</span>
      <div>
        <button class="button-class" @click="save()">CONFIRM</button>
      </div>
    </div>
    <div class="main-content">
      <div class="input-item">
        <label>Favorite Sport:</label>
        <input v-model.trim="sport" type="text" placeholder="Please Enter Your Favorite Sport" />
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "Settings",
  data () {
    return {
      sport: ""
    }
  },
  computed: {
  },
  methods: {
    save() {
      this.sport && this.$hiAnalytics.setUserProfile('favor_sport', this.sport);
      this.$router.push({ name: 'answerDemo'});
    }
  }
};
</script>

<style scoped>
.input-item {
  margin-bottom: 30px;
}

label {
  width: 160px;
  text-align: right;
  display: inline-block;
  margin-right: 20px;
}

input[type="text"] {
  height: 36px;
  line-height: 36px;
  border-radius: 4px;
  width: 550px;
  padding: 0 12px;
  border: 1px solid #aaa;
}

input[type="text"]:hover,
input[type="text"]:focus {
  border-color: rgba(0, 125, 255, 1);
  outline: none;
}
</style>
