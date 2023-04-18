// pages/singerDetail/singeDetail.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        singer: {},
        detail: {},
        hotMusicList: {},
        fold: false
    },
    // 页面详情数据获取
    getDetail: function () {
        const id = this.data.singer.data.id;
        wx.request({
            url: `https://www.fastmock.site/mock/88015481c4a39c09812c78e33e750be6/wymusic/singer/${id}`,
            success: (res) => {
                this.setData({
                    detail: res.data.data
                });
            },
            fail: (err) => {
                console.log(err);
            }
        })
    },
    // 热门歌曲
    getHotMusic: function () {
        const id = this.data.singer.data.id;
        wx.request({
            url: `https://www.fastmock.site/mock/88015481c4a39c09812c78e33e750be6/wymusic/hotMusic/${id}`,
            success: (res) => {
                console.log(res);
                this.setData({
                    hotMusicList: res.data.list
                });
            }
        })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    // 修改收缩状态
    changeStt: function() {
        this.setData({
            fold: !this.data.fold
        });
    },
    // 播放跳转
    playLink: function() {
        
    },
    onLoad(options) {
        const eventChannel = this.getOpenerEventChannel();
        // 获取其他页面传入的数据并存储
        eventChannel.on('acceptDataFromOpenerPage', (data) => {
            this.setData({
                singer: data
            });
        });
        this.getDetail();
        this.getHotMusic();
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {

    }
})