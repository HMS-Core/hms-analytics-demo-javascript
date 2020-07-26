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
import Vue from 'vue'
import Router from 'vue-router'

import AnswerDemo from './components/AnswerDemo.vue';
import Settings from './components/Settings.vue';
import Result from './components/Result.vue';

Vue.use(Router);


let routes = [
  {
    path: '/',  // 重定向到home页面
    redirect: '/answerDemo'
  }, {
    path: '/answerDemo',
    name: 'answerDemo',
    component: AnswerDemo,
  }, {
      path: '/settings',
      name: 'settings',
      component: Settings
    },  {
      path: '/result',
      name: 'result',
      component: Result
    }
]
let router = new Router({
  mode: 'hash',
  routes
});

router.beforeEach((to, from, next) => {
  next();
})


export default router;