# 华为分析服务JavaScript SDK示例代码

[![hms](https://img.shields.io/badge/hms-analytics-brightgreen)](https://developer.huawei.com/consumer/en/doc/development/HMS-References/3021004) 

[English](https://github.com/HMS-Core/hms-analytics-demo-javascript) | 中文

## 目录

* [简介](#简介)
* [快速入门](#快速入门)
* [安装](#安装)
* [配置](#配置)
* [环境要求](#环境要求)
* [操作结果](#操作结果)
* [授权许可](#授权许可)


## 简介
HmsAnalyticsKitDemo提供了web应用集成华为Hianalytics SDK的示例代码。其演示了如何通过收集预定义事件和自定义事件以提高用户参与度和用户偏好。
[了解更多有关Hianalytics的信息](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-Guides-V5/introduction-0000001050745149-V5)

## 快速入门

更多开发指导，请参考以下链接文档：

[开发指南](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-Guides-V5/introduction-0000001050745149-V5)

[API参考](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-References-V5/javascript-api-huawei-analytics-overview-0000001051065713-V5)

此外，为帮助您更好理解如何使用分析服务，我们提供了一个集成面向web应用的分析服务SDK的示例。

该示例使用npm包管理器。

具体方法如下：
首先，通过克隆此仓库或下载压缩包的方式来下载demo。

在VS Code中，选择“File > Open Folder”菜单，然后选择analytics-demo所在目录。

该示例共包含两个demo：
1. hmsanalyticskitdemo：示例应用的完整代码
2. hmsanalyticskitdemo-start：本codelab中编译所依赖的启动代码

其次，您可以切换到hmsanalyticskitdemo所在目录，运行npm install命令安装依赖；然后运行npm run dev命令直接运行项目。

您需要在AppGallery Connect中创建应用，获取项目配置，并将项目配置添加到您的web项目。
[进一步了解开发流程](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-Guides-V5/javascript-dev-process-0000001051145662-V5) 


## 安装
1. 使用VS Code打开压缩项目。
2. 切换到demo所在路径，运行npm install命令安装依赖。
3. 配置完成后，运行npm run dev命令启动demo工程。


## 配置
在AppGallery Connect中创建应用，获取项目配置，并将项目配置添加到您的web项目。

## 环境要求
硬件要求：
1. 电脑（台式机或笔记本）
2. 浏览器，例如Google Chrome
   
软件要求：
1. IDE/文本编辑器，如 [VS Code](https://code.visualstudio.com) 或 [WebStorm](https://www.jetbrains.com/webstorm/) 
2. [npm](https://www.npmjs.com) 包管理器，一般随 [Node.js](https://nodejs.org/en) 发布
3. Codelab的示例代码
4. 终端/控制台


## 操作结果
运行该app后，您将会看到如下页面：

<img src="https://github.com/HMS-Core/hms-analytics-demo-Javascript/blob/master/screenshot/screen_0.PNG" width=800 title="ID Photo DIY" div align=center border=20>

点击“TRUE”或“FALSE”按钮进行答题；点击“POST SCORE”按钮记录用户获得的分数。所有信息将被上传到Hianalytics控制台，您可以通过实时监控来实时查看这些信息。

点击“SETTINGS”按钮：

<img src="https://github.com/HMS-Core/hms-analytics-demo-Javascript/blob/master/screenshot/screen_1.PNG" width=800 title="ID Photo DIY" div align=center border=20>

您将被要求提供最喜欢的运动。您的选择将作为用户属性记录到Hianalytics中。

## 技术支持
如果您对HMS Core还处于评估阶段，可在[Reddit社区](https://www.reddit.com/r/HuaweiDevelopers/)获取关于HMS Core的最新讯息，并与其他开发者交流见解。

如果您对使用HMS示例代码有疑问，请尝试：
- 开发过程遇到问题上[Stack Overflow](https://stackoverflow.com/questions/tagged/huawei-mobile-services)，在`huawei-mobile-services`标签下提问，有华为研发专家在线一对一解决您的问题。
- 到[华为开发者论坛](https://developer.huawei.com/consumer/cn/forum/blockdisplay?fid=18) HMS Core板块与其他开发者进行交流。

如果您在尝试示例代码中遇到问题，请向仓库提交[issue](https://github.com/HMS-Core/hms-analytics-demo-javascript/issues)，也欢迎您提交[Pull Request](https://github.com/HMS-Core/hms-analytics-demo-javascript/pulls)。

## 授权许可
HmsAnalyticsKitDemo经过 [Apache License, version 2.0](http://www.apache.org/licenses/LICENSE-2.0) 许可。
