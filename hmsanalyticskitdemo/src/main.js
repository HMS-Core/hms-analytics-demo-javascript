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
import Vue from "vue";
import App from "./App.vue";

import agconnect from '@agconnect/api';
import '@agconnect/instance';
import '@hw-hmscore/analytics-web';
import router from './router.js';
import './assets/css/global.css';
import 'babel-polyfill';

Vue.config.productionTip = false;
var agConnectConfig = {};
agconnect.instance().configInstance(agConnectConfig);

Vue.prototype.$hiAnalytics = agconnect.analytics();

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
