# react-native-demo-
react-native demo 集合

* 使用

		git clone https://github.com/QYJHULINHUA/react-native-demo-.git
		npm install

* demo集合
	* demo1--banaer轮播图

		轻量级轮播图，仅需一个文件（/app/banner/banner.js），支持ios、android

		使用简单

			<Banner
	           imgArr={dataList}
	           figureHeight={240}
	           dotPlace='center'
	           dotDefaultColor="white"
	           dotSelectedColor="red"
	           dotRadius={5}
	           dotMargin={5}
	           dotParentStyle={{paddingLeft:10}}
	           isHasDotBackground={true}
	           dotBackgroundHeight={30}
	           dotBackgroundColor="#55555599"
	           autoTime={2000}
	           isAutoPlay={true}
	           onPageClick={this.onPageClick}
	           isHasTitle={true}
	           titleStyle={{color:'orange',fontSize:12,fontWeight:'400',paddingRight:10}}
	     />

	* demo2--pop Modal 模态视图

		react-native-modalbox 的使用，[使用介绍请点击这里](https://my.oschina.net/KJhulinhua/blog/1536740)

	* demo3--百度地图（待添加文档）
	* demo4--ios原生的日期选择器demo（速度还行，但是没有什么出彩的地方，只是使用了一下）
