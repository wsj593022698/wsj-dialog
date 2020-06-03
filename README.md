## 对话框组件说明 ##
==============
+ 1 组件介绍
	* 对话框组件简单方便，依赖jQuery开发的，所有参数均可自己修改
	* 使用频率高，所占空间小
+ 2 使用说明
	* 首先引入jQuery
		* `<script src="https://libs.baidu.com/jquery/1.11.3/jquery.min.js"></script>`
	* 将css和js下载到本地
	* 引入如下html代码
		```
		<div class="modal" style="display: block;">
		    <div class="modal-dialog">
		        <div class="modal-content">
		            <div class="modal-header">
		                <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">×</span><span class="sr-only">关闭</span></button>
		                <h4 class="modal-title">标题</h4>
		            </div>
		            <div class="modal-body">
		                <p>主题内容...</p>
		            </div>
		            <div class="modal-footer">
		                <button type="button" class="btn btn-default" data-dismiss="modal">关闭</button>
		                <button type="button" class="btn btn-primary">保存</button>
		            </div>
		        </div>
		    </div>
		</div>
		```
	* 引入css和js
		```
			<link rel="stylesheet" href="demo.css">
			<script type="text/javascript" src="js/dialogbox-wsj-1.3.0.min.js"></script>
		```
	*在自己的页面填写如下js代码块
		```
			var obj = {
				w:"500",//对话框的宽度
				radius:"10",//对话框的圆角半径
				location:"center",//对话框的位置，top或center
				animate:"fadeIn",//对话框出现的动画 fadeIn、bounceInDown、fadeInDown、fadeInDownBig
				title:"老师的快捷方式来得及发了",//对话框的标题
				titleLocation:"left",//left或center,标题的位置
				content:"螺丝扣搭街坊洛杉矶的分类数据浪费时间到了九十六建立撒娇六十件六十件六十件临时搭建六十件lj",//对话框的内容
				bgc:"",//背景颜色
				btn1:"关闭",//第一个按钮的内容
				btn2:"确定",//第二个按钮的内容
			}
		```
		* 以上js代码中的参数都可以自己定义
+ 3 联系方式
	* 邮箱593022687@qq.com