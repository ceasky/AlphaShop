<template>
  <div class="content-right">
    <div class="right-wrapper">
      <div class="basket">購物籃</div>
      <div v-for="product in productcards" :key="product.id" id='card-list' class="cards">
        <div class="card">
          <div class="product-img">
            <img :src="product.imgurl" alt="">
          </div>
          <div class="product-content">
            <div class="product-wrapper">
              <div class="product-title">{{product.name}}</div>
              <div class="product-quantity">
                <i @click.stop.prevent="down(product.id)" class='down'></i>
                <div class='num'>{{ product.num }}</div>
                <i @click.stop.prevent="up(product.id)" class='up'></i>
              </div>
            </div>
            <div class="product-price">$ {{product.cost}}</div>
          </div>
        </div>
      </div>
      <div class="freight d-flex justify-content-between">
        <div>運費</div>
        <div v-show="transport ==='standar'" id='freight'>免費</div>
        <div v-show="transport ==='DHL'" id='freight'>$ 500</div>
      </div>
      <div class="amount d-flex justify-content-between">
        <div class="amount-title">小計</div>
        <div class="amount-money">$ {{ spend }}</div>
      </div>
    </div>
  </div>
</template>

<script>
const dummyData = {
  "productcards":[
  {
    'id': 1,
    'name': "破壞補丁修身牛仔褲",
    'cost': 3999,
    'imgurl': "https://upload.cc/i1/2022/03/25/n5MSYs.png",
    'num': 1
  },
  {
    'id': 2,
    'name': "刷色直筒牛仔褲",
    'cost': 1299,
    'imgurl': "https://upload.cc/i1/2022/03/25/tV6EMq.png",
    'num': 1
  }
  ]
}
export default{
  props:{
    initialtransport:{
      type: String,
      required: true
    }
  },

  data(){
    return {
      productcards: [],
      transport:'standar',
      amounts: ''
    }
  },
  created() {
    this.fetchproductcards()
    this.transport = this.initialtransport
  },
  methods:{
    fetchproductcards(){
      this.productcards = dummyData.productcards
    },
    up(data){
      this.productcards[data - 1].num = this.productcards[data - 1].num+1
    },
    down(data){
      this.productcards[data - 1].num = this.productcards[data - 1].num - 1
      if (this.productcards[data - 1].num < 0) { this.productcards[data - 1].num = 0 }
    }
  },
  watch:{
    spend() {
      this.amounts = this.spend
    },
    initialtransport(){
      this.transport = this.initialtransport
    },
    amounts: {
      handler: function () {
        this.$emit('shopcar', { spend: this.amounts, productcards:this.productcards})
      },
      deep: true
    }
  },
  computed:{
    spend(){
      let all = 0
      for (let i = 0; i < this.productcards.length;i++){
        all += this.productcards[i].cost * this.productcards[i].num
      }
      if (this.transport === 'DHL'){
        all = all+500
      }
      return all
    }
  }
}
</script>