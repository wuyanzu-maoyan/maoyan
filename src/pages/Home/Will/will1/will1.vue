<template>
    <div>
      <div>
        <div class="lyh" v-for="(coming,index) in comingList" :key="index">
          <!-- <span class="lyhDate">{{coming.comingTitle}}</span> -->
        <span class="lyhDate" v-if="comingList.arr1[0]">{{comingList.arr1[0].comingTitle}}</span>
        <div class="lyh" v-for="(coming1,index1) in comingList.arr1" :key="coming1.id">
          <div class="lyhContent">
            <img :src="coming1.img" alt />
            <div class="content">
              <h2>{{coming1.nm}}</h2>
              <h3>{{coming1.wish}}</h3>
              <h4>人想看</h4>
              <span>{{coming1.star}}</span>
              <p>{{coming1.rt}}</p>
            </div>
            <div class="lyhButton">
              <div class="btn normal">
                <span class="fix" @click="$router.push(`/movie/${coming1.id}`)">预售</span>
              </div>
            </div>
          </div>
        </div>
         <span class="lyhDate" v-if="comingList.arr2[0]">{{comingList.arr2[0].comingTitle}}</span>
        <div class="lyh" v-for="(coming2,index2) in comingList.arr2" :key="coming2.id">
          <div class="lyhContent">
            <img :src="coming2.img" alt />
            <div class="content">
              <h2>{{coming2.nm}}</h2>
              <h3>{{coming2.wish}}</h3>
              <h4>人想看</h4>
              <span>{{coming2.star}}</span>
              <p>{{coming2.rt}}</p>
            </div>
            <div class="lyhButton">
              <div class="btn normal">
                <span class="fix" @click="$router.push(`/movie/${coming2.id}`)">预售</span>
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
    import { reqWillMovies } from "../../../../api/index";
    export default {
     data() {
    return {
      comingList: {
        arr1:[],
        arr2:[]
      }
    };
  },
  async mounted() {
    const result = await reqWillMovies();
    console.log(result);
    if (result.code === 0) {
     // this.comingList = result.data.coming;
   this.comingList.arr1 = result.data.coming.filter((item,index)=>{
       return item.comingTitle.slice(3,5) == '28' 
     })
    this.comingList.arr2 = result.data.coming.filter((item,index)=>{
      return item.comingTitle.slice(3,5) == '31' 
     })
    }
     
  }
};
</script>

<style scoped>
.lyhDate {
  padding: 12px 15px 12px;
  font-size: 14px;
  color: #333
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
