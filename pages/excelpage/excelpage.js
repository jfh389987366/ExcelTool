// pages/excelpage/excelpage.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    optip: '上拉新增列名/长按列名删除'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      rowArr: [0,1,2]
    });
  },

  /**
   * 上拉新增
   */
  lower: function (e) {
    console.log("上拉新增！")
    let ra = this.data.rowArr;
    ra.push(ra.length);
    this.setData({
      rowArr: ra
    });
    wx.showToast({
      title: '新增列名成功！',
      icon: 'success'
    })
  },

  /**
   * 长按表格名初始化列名
   */
  inti: function (e) {
    let that = this;
    let ra = this.data.rowArr;
    if (ra.length != 3) {
      wx.showModal({
        title: '操作',
        content: '是否初始化列名列表！',
        showCancel: true,
        cancelText: '取消',
        confirmText: '确定',
        success: function (res) {
          that.setData({
            rowArr: [0, 1, 2]
          });
        },
      })
    }
  },

  /**
   * 长按列名删除
   */
  del: function (e) {
    let that = this;
    wx.showModal({
      title: '操作',
      content: '是否删除最后一列！',
      showCancel: true,
      cancelText: '取消',
      confirmText: '确定',
      success: function (res) {
        let ra = that.data.rowArr;
        ra.pop(that.data.rowArr.length);
        that.setData({
          rowArr: ra
        });
      },
    })
  },

  /**
   * 快速设置列数
   */
  setRowNumber: function () {
    let that = this;
    wx.showActionSheet({
      itemList: ['5', '10', '15'],
      success(res) {
        console.log(res.tapIndex)
      },
      fail(res) {
        console.log(res.errMsg)
      }
    })
    /*
    wx.showModal({
      title: '操作',
      content: '是否删除最后一列！',
      showCancel: true,
      cancelText: '取消',
      confirmText: '确定',
      success: function (res) {
        let ra = that.data.rowArr;
        ra.pop(that.data.rowArr.length);
        that.setData({
          rowArr: ra
        });
      },
    })*/
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