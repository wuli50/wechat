//index.js
//获取应用实例
// 在这里做个注释看看
const app = getApp()

Page({
  data: {
    navTitle: '购买月卡',
    header:{
      title: "多多看书月卡",
      text: "借书全免费 还书不限时",
      foot:"让孩子爱上阅读"
    },
    cardType:[
      {
        price:"￥39",
        time:"1个月"
      }, {
        price: "￥99",
        oldprice:"￥117",
        sale:"8.4折",
        time: "3个月",

      }, {
        price: "￥189",
        oldprice: "￥234",
        sale: "8折",
        time: "6个月 免押金",
      }, {
        price: "￥299",
        oldprice: "￥468",
        sale: "6.3折",
        time: "12个月 免押金",
      }
    ],
    ordercss:{
      back:"#fff",
      textcolor:"#555",
    },
    _index:5
    
  },
  order:function(e){
    // console.log(this)
    console.log(e);
    this.setData({
      ordercss: {
        back: "#FE5A5A",
        textcolor:"#fff"
      },
      _index: e.target.dataset.index
      
    })
  },
  goshopping:function(){
    wx.navigateTo({
      url: '../logs/logs',
      complete:function(){
        wx.setNavigationBarTitle({
          title: '图书商城',
        })
      }
    })
    
  }


  // //事件处理函数
  // bindViewTap: function() {
  //   wx.navigateTo({
  //     url: '../logs/logs'
  //   })
  // },
  // onLoad: function () {
  //   if (app.globalData.userInfo) {
  //     this.setData({
  //       userInfo: app.globalData.userInfo,
  //       hasUserInfo: true
  //     })
  //   } else if (this.data.canIUse){
  //     // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
  //     // 所以此处加入 callback 以防止这种情况
  //     app.userInfoReadyCallback = res => {
  //       this.setData({
  //         userInfo: res.userInfo,
  //         hasUserInfo: true
  //       })
  //     }
  //   } else {
  //     // 在没有 open-type=getUserInfo 版本的兼容处理
  //     wx.getUserInfo({
  //       success: res => {
  //         app.globalData.userInfo = res.userInfo
  //         this.setData({
  //           userInfo: res.userInfo,
  //           hasUserInfo: true
  //         })
  //       }
  //     })
  //   }
  // },
  // getUserInfo: function(e) {
  //   console.log(e)
  //   app.globalData.userInfo = e.detail.userInfo
  //   this.setData({
  //     userInfo: e.detail.userInfo,
  //     hasUserInfo: true
  //   })
  // }
})
