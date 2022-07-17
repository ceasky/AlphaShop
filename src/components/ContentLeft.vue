<template>
  <div class="content-left">
    <div class="order-step">
      <div class="checkout mt-4 ml-4">結帳</div>
      <div id="step-control" class="step-container">
        <div class="step" :class="{ active: step === 1, checked: step === 2 || 3 }">
          <div class="circle-container"></div>
          <span class="connect-line"></span>
          <div class="label-container">寄送地址</div>
        </div>
        <div class="step" :class="{ active: step === 2, checked: step === 3 }">
          <div class="circle-container"></div>
          <span class="connect-line"></span>
          <div class="label-container">運送方式</div>
        </div>
        <div class="step" :class="{ active: step === 3 }">
          <div class="circle-container"></div>
          <div class="label-container">付費資訊</div>
        </div>
      </div>
    </div>
    <form id="order-part" class="order-part">
      <div v-show="this.step === 1" class="part">
        <div class="part-title">寄送地址</div>
        <div class="part-content">
          <div class="form-row">
            <label>稱謂</label>
            <div class="select-gender">
              <select v-model="order.gender" name="gender" id="gender">
                <option value="先生">先生</option>
                <option value="女士">女士</option>
              </select>
            </div>
          </div>
          <div class="form-row">
            <label for="">姓名</label>
            <input v-model="order.name" id="name" type="text" placeholder="請輸入姓名" />
          </div>
          <div class="form-row">
            <label for="">電話</label>
            <input v-model="order.phone" id="phone" type="text" placeholder="請輸入行動電話" />
          </div>
          <div class="form-row">
            <label for="">email</label>
            <input v-model="order.email" id="email" type="text" placeholder="請輸入電子郵件" />
          </div>
          <div class="form-row">
            <label for="">縣市</label>
            <div class="select-adress">
              <select v-model="order.county" name="adress" id="adress">
                <option value="台北市">台北市</option>
                <option value="新北市">新北市</option>
                <option value="桃園市">桃園市</option>
                <option value="新竹市">新竹市</option>
                <option value="苗栗縣">苗栗縣</option>
                <option value="台中市">台中市</option>
                <option value="彰化縣">彰化縣</option>
                <option value="雲林縣">雲林縣</option>
                <option value="嘉義縣">嘉義縣</option>
                <option value="台南市">台南市</option>
                <option value="高雄市">高雄市</option>
                <option value="屏東縣">屏東縣</option>
                <option value="台東縣">台東縣</option>
                <option value="花蓮縣">花蓮縣</option>
                <option value="宜蘭縣">宜蘭縣</option>
                <option value="澎湖縣">澎湖縣</option>
                <option value="金門縣">金門縣</option>
                <option value="連江縣">連江縣</option>
              </select>
            </div>
          </div>
          <div class="form-row">
            <label for="">地址</label>
            <input v-model="order.address" id="address" type="text" placeholder="請輸入地址" />
          </div>
        </div>
      </div>
      <div v-show="this.step === 2" class="part">
        <div class="part-title">運送方式</div>
        <div class="part-content">
          <div @click.stop.prevent="standar()"  class="part-wrapper wayS"
            :class="{ checked: order.transport==='standar' }">
            <input @click.stop.prevent="standar()" class="transport-icon" type="checkbox" />
            <div class="transport-content">
              <p class="transport-font">標準運送</p>
              <p>約3~7個工作天</p>
            </div>
            <div class="transport-cost">免費</div>
          </div>
          <div @click.stop.prevent="DHL()" class="part-wrapper wayDHL" :class="{ checked: order.transport === 'DHL' }">
            <input @click.stop.prevent="DHL()" class="transport-icon" type="checkbox" />
            <div class="transport-content">
              <p class="transport-font">DHL貨運</p>
              <p>48小時內送達</p>
            </div>
            <div class="transport-cost">$500</div>
          </div>
        </div>
      </div>
      <div v-show="this.step === 3" class="part">
        <div class="part-title">付款資訊</div>
        <div class="part-content">
          <div class="form-row">
            <label for="">持卡人姓名</label>
            <input v-model="order.cardname" id="item1" type="text" placeholder="John Doe" />
          </div>
          <div class="form-row">
            <label for="">卡號</label>
            <input v-model="order.cardnum" id="item1" type="text" placeholder="1111 2222 3333 44444" />
          </div>
          <div class="form-row">
            <label for="">有效期限</label>
            <input v-model="order.date" id="item" type="text" placeholder="MM/YY" />
          </div>
          <div class="form-row">
            <label for="">CVC/CCV</label>
            <input v-model="order.cvc" id="item" type="text" placeholder="123" />
          </div>
        </div>
      </div>
    </form>
    <div class="btn-web">
      <div id="btn-controlw" class="btn step2" :class="{ active: step === 2, checked: step === 3 }">
        <button @click.stop.prevent="previous()" :class="{ none: step === 1 }" class="btn btn-outline">
          <span class="left-icon">&#8592;</span>上一步
        </button>
        <button @click.stop.prevent="next()" :class="{ none: step === 3 }" class="btn btn-primary">
          下一步<span class="right-icon">&#8594;</span>
        </button>
        <button @click.stop.prevent="handleSubmit()" v-show="this.step === 3" class="btn btn-primary">
          確認下單
        </button>
      </div>
    </div>
  </div>
</template>

<script>
const STORAGE_Order = "alphashop-order";
const STORAGE_Step = "alphashop-step";
export default {
  data() {
    return {
      step: 1,
      order:{
        gender:'先生',
        name:'',
        phone:'',
        email:'',
        county:'台北市',
        address:'',
        transport:'standar',
        cardname:'',
        cardnum:'',
        date:'',
        cvc:''
      }
    };
  },
  watch:{
    order: {
      handler: function () {
        this.saveorder()
      },
      deep: true
    }
  },
  methods: {
    next() {
      this.step = this.step + 1;
      this.savestep()
    },
    previous() {
      this.step = this.step - 1;
      this.savestep()
    },
    standar(){
      this.order.transport="standar"
      this.$emit('transport', this.order)
    },
    DHL(){
      this.order.transport ="DHL"
      this.$emit('transport', this.order)
    },
    handleSubmit() {
      this.$emit('transport', this.order)
    },
    saveorder() {
      localStorage.setItem(STORAGE_Order, JSON.stringify(this.order));
    },
    savestep() {
      localStorage.setItem(STORAGE_Step, JSON.stringify(this.step));
    }
  },
  created() {
    if (JSON.parse(localStorage.getItem(STORAGE_Order))) {
      this.order = JSON.parse(localStorage.getItem(STORAGE_Order))
    }
    if (JSON.parse(localStorage.getItem(STORAGE_Step))) {
      this.step = JSON.parse(localStorage.getItem(STORAGE_Step))
    }
  }
};
</script>
