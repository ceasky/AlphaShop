<template>
  <div class="app-container">
    <div class="main-content d-flex">
      <ContentLeft @transport="transport" />
      <ContentRight :initialtransport="order.transport" @shopcar="shopcar" />
    </div>
  </div>
</template>

<script>
  import ContentLeft from "@/components/ContentLeft.vue";
  import ContentRight from "@/components/ContentRight.vue";

export default {
  data() {
    return {
      order: {
        gender: '先生',
        name: '',
        phone: '',
        email: '',
        county: '台北市',
        address: '',
        transport: 'standar',
        cardname: '',
        cardnum: '',
        date: '',
        cvc: '',
        products:{},
        amounts:''
      }
    };
  },
  components: {
    ContentLeft,
    ContentRight
  },
  methods: {
    shopcar(data){
      this.order.amounts=data.spend
      this.order.products = data.productcards
    },
    transport(formData) {
      this.order = formData
      if (this.order.gender && this.order.name && this.order.phone && this.order.email && this.order.county && this.order.address && this.order.transport && this.order.cardname && this.order.cardnum && this.order.date && this.order.cvc && this.order.products && this.order.amounts
      ){
        console.log(
          "gender:" ,this.order.gender,
          "name:", this.order.name,
          "phone:", this.order.phone,
          "email:", this.order.email,
          "county:", this.order.county,
          "address:", this.order.address,
          "transportway:", this.order.transport,
          "cardname:", this.order.cardname,
          "cardnum:", this.order.cardnum,
          "carddate:", this.order.date,
          "cardcvc:", this.order.cvc,
          "products:", this.order.products,
          "amounts:", this.order.amounts
        )
      }
    }
  }
}
</script>