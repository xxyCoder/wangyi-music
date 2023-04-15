const app = getApp();

Page({
    data: {
        background: [],
        artists: [],
        newMusic: []
    },
    // 获取banner
    getBanner: function () {
        wx.request({
            url: 'https://www.fastmock.site/mock/88015481c4a39c09812c78e33e750be6/wymusic/banner',
            dataType: "json",
            success: (res) => { // 请求成功后回调
                //   console.log(res.data.background)
                this.setData({
                    background: res.data.background
                });
            }
        })
    },
    // 获取歌手
    getSinger: function () {
        wx.request({
            url: 'https://www.fastmock.site/mock/88015481c4a39c09812c78e33e750be6/wymusic/artists',
            dataType: "json",
            success: (res) => {
                // console.log(res.data.artists);
                this.setData({
                    artists: res.data.artists
                });
            }
        })
    },
    // 获取最新音乐
    getNewMusic: function () {
        wx.request({
            url: 'https://www.fastmock.site/mock/88015481c4a39c09812c78e33e750be6/wymusic/newMusic',
            dataType: "json",
            success: (res) => {
                // console.log(res.data);
                this.setData({
                    newMusic: res.data.newMusic
                });
            }
        })
    },
    onLoad: function (options) {
        this.getBanner();
        this.getSinger();
        this.getNewMusic();
    }
})