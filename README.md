# HMS AnalyticsKit Demo for Javascript

[![hms](https://img.shields.io/badge/hms-analytics-brightgreen)](https://developer.huawei.com/consumer/en/doc/development/HMS-References/3021004) 

## Table of Contents

* [Introduction](#introduction)
* [Getting Started](#getting-started)
* [Installation](#installation)
* [Configuration ](#configuration )
* [Environment requirements](#Environment-requirements)
* [Result](#result)
* [License](#license)


## Introduction
HmsAnalyticsKitDemo is a web client that applying HUAWEI Hianalytics SDK used for showing how to collect user engagement and user preference.
[Read more about Hianalytics](https://developer.huawei.com/consumer/en/doc/development/HMSCore-Guides-V5/introduction-0000001050745149).
## Getting Started

For more development guidance, please refer to the links below:

[Development Guide](https://developer.huawei.com/consumer/en/doc/development/HMSCore-Guides/javascript-config-agc-0000001050964518).

[API References](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-Guides/javascript-api-huawei-analytics-overview-0000001051065713).

We also provide an example to demonstrate the use of analytics SDK for Web.

This sample uses the npm package manager.

First download the demo by cloning this repository or downloading an archived snapshot.

In VS Code, use the "File -> Open Folder", and select the directory of "analytics-sample".

We provide two demos:

1.  hmsanalyticskitdemo: this is a completed code for the sample app
2.  hmsanalyticskitdemo-start: this is a starting code that you'll build upon during this codelab.


You can switch to the hmsanalyticskitdemo directory, use the command `npm install` to install the dependencies, then run command `npm run dev` to run the project directly.

You should create an app in AppGallery Connect, and obtain the project configuration then copy to your web project.[Development Process](https://developer.huawei.com/consumer/en/doc/development/HMSCore-Guides/javascript-config-agc-0000001050964518).



## Installation
1.  Use VS Code to open the decompressed project
2.  Switch to the right demo directory, use the command `npm install` to install the dependencies.
    

## Configuration
Create a web app in AppGallery Connect and obtain the project configuration, then copy it to your web project.

## Environment requirements
Hardware requirements:
1. A computer
2. A browser, such as Chrome
    
Software requirements:
1. The IDE/text editor such as [VS Code](https://code.visualstudio.com) or [WebStorm](https://www.jetbrains.com/webstorm/)
2. The package manager [npm](https://www.npmjs.com) , which typically comes with [Node.js](https://nodejs.org/en)
3. The codelab's sample code
4. A terminal/console

## Result
After running the app you should see a screen like this:

<img src="https://github.com/HMS-Core/hms-analytics-demo-Javascript/blob/master/screenshot/screen_0.PNG" width=250 title="ID Photo DIY" div align=center border=5>

Click the button TRUE or FALSE to answer the question; Click the NEXT, show the next question; Click POST SCORE, log the score user got. All the infomations will be upload to Hianalytics, and you can see these infomations in real time using Real-time.

Click button SETTINGS:

<img src="https://github.com/HMS-Core/hms-analytics-demo-Javascript/blob/master/screenshot/screen_1.PNG" width=800 title="ID Photo DIY" div align=center border=20>

You will be asked what your favorite sport is. This choice will be logged to Hianalytics as a User Property.


##  License
HmsAnalyticsKitDemo is licensed under the [Apache License, version 2.0](http://www.apache.org/licenses/LICENSE-2.0).

