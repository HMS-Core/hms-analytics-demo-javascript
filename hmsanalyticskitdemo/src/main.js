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
import '@hmscore/analytics-web';
import router from './router.js';
import './assets/css/global.css';
import 'babel-polyfill';

Vue.config.productionTip = false;
var agConnectConfig = 
{
	"agcgw":{
      "backurl": "https://lfagcgwtest01.hwcloudtest.cn:15602",
      "url": "https://lfagcgwtest01cn.hwcloudtest.cn:18062"
	},
	"client":{
		"cp_id":"4130086000000637176",
		"product_id":"258913027873047688",
		"client_id":"401147640282098944",
		"client_secret":"ABA91A52EF1FAB651F57AF091CEC149EECAFB01757DF1224FC384D2173828480",
		"app_id":"98751101985125555",
		"api_key":"CgB6e3x9zs8IL+Frjllsf9DoteK4Taz7jAseM9P+ikVZBJhHu87FpdEpqq0CimpayCrJgUrkUnV2RM86fyFiD4FE"
	},
	"service":{
		"analytics":{
			"collector_url":"habackup.hwcloudtest.cn:31405,datacollector-drcn.dt.dbankcloud.cn",
			"resource_id":"p1",
			"channel_id":""
		},
		"cloudstorage":{
			"storage_url":"https://agc-storage-drcn.platform.dbankcloud.cn"
		},
		"ml":{
			"mlservice_url":"ml-api-drcn.ai.dbankcloud.com,ml-api-drcn.ai.dbankcloud.cn"
		}
	},
	"region":"CN",
	"configuration_version":"1.0"
};
agconnect.instance().configInstance(agConnectConfig);

Vue.prototype.$hiAnalytics = agconnect.analytics();

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
