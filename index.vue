<template>
  <div class="container">
    <el-row >
      <el-col :span="14" class="video-left">
        <div class="title">{{ info.title }}</div>
        <div class="sub-title">100次 播放 {{ info.updated_at }}</div>
        <div class="video-player">
           <video-player id="playVideos" :options="videoOptions"/>
        </div>
      </el-col>
      <el-col :span="10" class="video-right">
        <div class="album">{{ info.album_title }}</div>
        <div class="title">视频列表</div>
        <div class="list-box">
          <ul>
            <li class="list-item on" v-for="(item, key) in commonlist" :key="key">
              <!-- <router-link active-class="red" :to="'/video/' + item.common_id" > -->
                <div active-class="red" :to="'/video/' + item.common_id" @click="videoInfo(item)">
                  <div class="list-link">
                    <div class="link-content"><i class="van-icon-videodetails_play"></i>
                      <span class="page-num">P{{key+1}}</span>
                      <span class="part">{{item.title}}</span>
                    </div>
                    <div class="duration">2:00:00</div>
                  </div>
                </div>
              <!-- </router-link> -->
             </li>
          </ul>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import VideoPlayer from '@/components/VideoPlayer.vue'
export default {
  components: {
    VideoPlayer
  },
  data () {
    return {
      commonId: this.$route.params.commonId,
      info: {},
      commonlist: [],
      videoOptions: {
        autoplay: 'muted', // 自动播放
        controls: true, // 用户可以与之交互的控件
        loop: true, // 视频一结束就重新开始
        muted: false, // 默认情况下将使所有音频静音
        aspectRatio: '16:9', // 显示比率
        fullscreen: {
          options: { navigationUI: 'hide' }
        },
        sources: [
          {
            // src: require('@/assets/video/video_02.mp4'),
            // 动态修改 src
            src: '',
            type: 'video/mp4'
          }
        ]
      }
    }
  },
  created () {
    this.getInfo()
    console.log('- 1 -')
    console.log(this.info) // 此时不能获取到info
    // 此处赋值后，在播放器里能生效，但因为需要this.info里的url，此时 this.info 还没有获得，需要一个初始值
    this.videoOptions.sources[0].src = 'https://video.pearvideo.com/mp4/adshort/20201106/cont-1705649-15470799_adpkg-ad_hd.mp4'
  },
  methods: {
    async getInfo () {
      const { data: res, status } = await this.$http.get(`commons/${this.commonId}`)
      if (status !== 200) {
        return this.$message.error('数据获取失败')
      }
      this.info = res
      console.log('- 2 -')
      // 此处赋值后，打印有值，在播放器里并不生效  /成德法師/15-011-0001.mp3
      this.videoOptions.sources[0].src = 'http://cdn-media.jingzong.org/mp4/JL02/JL02-041/JL02-041-0082_01.mp4'
      // 获取专辑的信息
      this.getCommonList()
    },
    async getCommonList () {
      const { data: res, status } = await this.$http.get(`commons?filter[album_id]=${this.albumId}`)
      if (status !== 200) {
        return this.$message.error('数据获取失败')
      }
      console.log('commonlist 数据获取成功')
      this.commonlist = res.data
    },
    videoInfo (item) {
      this.info = item
    }
  },
  computed: {
    albumId () {
      return this.info.album_id
    }
  },
  mounted () {
    // 此处赋值后，打印有值，在播放器里并不生效，需要一个初始值，这里才能生效
    // this.videoOptions.sources[0].src = 'https://video.pearvideo.com/mp4/adshort/20201106/cont-1705649-15470799_adpkg-ad_hd.mp4'
    console.log('- 3 -')
    console.log(this.info)
    console.log(this.videoOptions.sources[0].src)
  },
  watch: {
    info: { // 这里的msg指的就是data里面的msg
      handler (n, o) { // n：当前msg的值，o：msg变化之前的值
        console.log(' - 4 - ') // 根据数据变化，写业务逻辑
        if (n.audio_info) {
          console.log(n.audio_info.audio_url) // 根据数据变化，写业务逻辑
          // 可以打印值，但无法改变视频。
          this.videoOptions.sources[0].src = n.audio_info.audio_url
          console.log(this.videoOptions.sources[0].src)
        }
      },
      immediate: true, // 设置是否一开始就对数据进行监听   也就是是否立即执行handler函数，false为不执行
      deep: true // 普通的watch方法无法监听到对象内部属性的改变，只有data中的数据才能够监听到变化，此时就需要deep属性对对象进行深度监听。
    }
  }
}
</script>
<style lang="less" scoped>
.video-left {
  color: #333;
  line-height: 30px;
}
.video-player {
  width: 600px;
  height: 400px;
  border: 1px solid blue;
}
.list-box {
  width: 400px;
  height: 380px;
  border: 1px solid red;
  color: #333;
}
.ad {
  width: 400px;
  height: 50px;
  border: 1px solid green;
}
.title {
  font-size: 18px;
  margin: 5px 0;
}
.sub-title {
  font-size: 16px;
}
.list-item {
  list-style-type:none;
}
.list-link{
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-around;
}
.link-content {
  flex: 70%;
}
.duration {
  flex: 20%
}
.page-num{
  margin-right:5px;
}

</style>
