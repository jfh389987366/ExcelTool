// pages/wordpage/wordpage.js
Page({

  /**
    * 页面的初始数据
    */
  data: {
    selecterType:true,
    dataType: true //添加/删除功能键类型；true=小题；false=单/多选项框
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      rowArr: [0],//小题数
      labelArr: [0,1,2] //小题中单/多选数
    });
  },

  /**
   * 新增
   */
  addRow: function (e) {
    console.log("addRow:", e.currentTarget.dataset.type)
    if (e.currentTarget.dataset.type) {
      let ra = this.data.rowArr;
      console.log("rowArr:", ra)
      ra.push(this.data.rowArr.length);
      this.setData({
        rowArr: ra
      });
    } else {
      let la = this.data.labelArr;
      console.log("labelArr:", la)
      la.push(this.data.labelArr.length);
      this.setData({
        labelArr: la
      });
    }
  },

  /**
   * 删除
   */
  delRow: function (e) {
    console.log("delRow:", e.currentTarget.dataset.type)
    if (e.currentTarget.dataset.type) {
      let ra = this.data.rowArr;
      console.log("rowArr:",ra)
      ra.pop(this.data.rowArr.length);
      this.setData({
        rowArr: ra
      });
    } else {
      let la = this.data.labelArr;
      console.log("labelArr:", la)
      la.pop(this.data.labelArr.length);
      this.setData({
        labelArr: la
      });
    }
  },

  /**
   * 长按删除功能
   */
  delIt: function (e) {
    wx:wx.showModal({
      title: '操作',
      content: '是否删除',
      showCancel: true,
      cancelText: '取消',
      cancelColor: '',
      confirmText: '删除',
      confirmColor: '',
      success: function(res) {
        let la = this.data.labelArr;
        console.log("labelArr:", la)
        la.pop(this.data.labelArr.length);
        this.setData({
          labelArr: la
        });
      },
      fail: function(res) {},
      complete: function(res) {},
    })
  },

  /**
   * 单选，多选开关
   */
  switchChange: function (e) {
    this.setData({
      selecterType: e.detail.value
    });
  },

  /**
   * 当‘单/多选框’获取到聚焦后，设置添加/删除键为‘单/多选框’功能键；
   * 否则为‘小题’功能键
   */
  focusFun: function () {
    console.log("选项框获得焦点")
    this.setData({
      dataType: false
    });
  },

  /**
   * 当‘单/多选框’获取到聚焦后，设置添加/删除键为‘单/多选框’功能键；
   * 否则为‘小题’功能键
   */
  blurFun: function () {
    console.log("选项框失去焦点")
    this.setData({
      dataType: true
    });
  },

  formSubmit: function (e) {
    console.log('form发生了submit事件，携带数据为：', e.detail.value)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})