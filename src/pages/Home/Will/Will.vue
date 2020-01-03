<template>
  <div>
    <div class="lyhBanner">
      <span class="lyhLabel">近期最受期待</span>
      <div class="nowContainer1" ref="nowContainer1">
        <div class="lyhHopeful"  >
            <div class="lyhBox" v-for="(coming,index) in comingList" :key="index">
              <img :src="coming.img">
              <h3 class="lyhTitle">{{coming.nm}}</h3>
              <p class="lyhTime">{{coming.rt}}</p>
            </div>
        </div>
      </div>
    </div>
    <div class="nowContainer" ref="nowContainer">
      <div>
        <div class="lyh" v-for="(coming,index) in comingList" :key="index">
          <span class="lyhDate">{{coming.comingTitle}}</span>
          <div class="lyhContent">
            <img :src="coming.img" alt />
            <div class="content">
              <h2>{{coming.nm}}</h2>
              <h3>{{coming.wish}}</h3>
              <h4>人想看</h4>
              <span>{{coming.star}}</span>
              <p>{{coming.rt}}</p>
            </div>
            <div class="lyhButton">
              <div class="btn normal">
                <span class="fix">预售</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import BScroll from "better-scroll";
import { reqWillMovies } from "../../../api/index";
export default {
  data() {
    return {
      comingList: []
    };
  },
  async mounted() {
    const result = await reqWillMovies();
    console.log(result);
    if (result.code === 0) {
      this.comingList = result.data.coming;
    }
    const wrap = this.$refs.nowContainer1;
     new BScroll(wrap, {
       click: true,
       scrollX:true
    });

    this.scroll = new BScroll(this.$refs.nowContainer1)
  }
};
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
.lyhBanner {
  padding: 12px 0 12px 15px;
  position: relative;

  .lyhLabel {
    font-size: 14px;
    color: #333;
    position: absolute;
    top: 10px;
  }

  .nowContainer1 {
    margin-top: 15px;
    display: flex;
    width 100%
    height 160px
    .lyhHopeful {
      width: 96%;
      display: inline-block;
      overflow: hidden;
      display: flex;

      .lyhBox {
        width: 80px;
        height: 157px;
        margin-right: 15px;

        img {
          width: 85px;
          height: 115px;
        }

        .lyhTitle {
          width: 85px;
          font-size: 13px;
          color: #222;
          margin-top: 4px;
          overflow: hidden;
        }

        .lyhTime {
          font-size: 12px;
          color: #999;
          margin-top: 8px;
        }
      }
    }
  }

  .nowContainer {
    width: 100vw;
    height: 100vh;
  }

  .nowContainer {
    width: 100vw;
    height: 100vh;
  }
}

.lyhDate {
  padding: 12px 15px 12px;
  font-size: 14px;
  color: #333;
}

.lyhContent {
  width: 95%;
  position: relative;
  display: flex;
  height: 110px;
  border-bottom: 1px solid #e6e6e6;
}

.lyhContent img {
  position: absolute;
  top: 13px;
  left: 20px;
  width: 64px;
  height: 90px;
}

.lyhContent .content {
  position: relative;
  top: 15px;
  left: 100px;
}

.lyhContent .content h2 {
  font-size: 17px;
  color: #333;
  font-weight: 700;
  flex-shrink: 1;
  margin-bottom: 6px;
}

.lyhContent .content h3 {
  font-size: 15px;
  color: #faaf00;
  margin-bottom: 6px;
  font-weight: 700;
}

.lyhContent .content h4 {
  position: absolute;
  color: #666;
  width: 60px;
  overflow: hidden;
  font-size: 15px;
  left: 53px;
  top: 21px;
}

.lyhContent .content span {
  font-size: 13px;
  color: #666;
}

.lyhContent .content p {
  font-size: 13px;
  color: #666;
  margin-top: 8px;
}

/* 购票按钮 */
.lyhContent .lyhButton {
  position: absolute;
  right: 50px;
  height: 100%;
  line-height: 90px;
}

/* 购票按钮 */
.lyhContent .lyhButton .btn {
  width: 47px;
  height: 27px;
  line-height: 28px;
  text-align: center;
  box-sizing: border-box;
  background-color: #faaf00;
  color: #fff;
  border-radius: 4px;
  white-space: nowrap;
  font-size: 12px;
  cursor: pointer;
  position: absolute;
  top: 40px;
}

.lyhContent .lyhButton2 {
  position: absolute;
  right: 50px;
  height: 100%;
  line-height: 90px;
}

.lyhContent .lyhButton2 .btn {
  width: 47px;
  height: 27px;
  line-height: 28px;
  text-align: center;
  box-sizing: border-box;
  background-color: #3c9fe6;
  color: #fff;
  border-radius: 4px;
  white-space: nowrap;
  font-size: 12px;
  cursor: pointer;
  position: absolute;
  top: 40px;
}
</style>
