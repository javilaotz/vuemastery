var app = new Vue({
  el: "#app",
  data: {
    brand: 'vueMastery',
    product: 'Vue Socks',
    description: 'Socks world of warcraft horde theme',
    link: 'http://google.com',
    details: ["80% cotton", "20% polyester", "Gender-neutral"],
    selectedVariant: 0,
    variants: [
      {
        variantId: 2234,
        variantColor: "green",
        variantImage: "./images/green_socks.png",
        variantInventory: 20,
        variantOnSale: true
      },
      {
        variantId: 2235,
        variantColor: "blue",
        variantImage: "./images/blue_socks.png",
        variantInventory: 0,
        variantOnSale: false
      }
    ],
    sizes: ["xs", "s", "m", "l", "xl", "xxl", "xxxl"],
    cart: 0,
    styles: {
      stockStatus: 'stockStatus',
      success: 'success',
      warning: 'warning',
      danger: 'danger',
      lineThrough: 'lineThrough'
    }
  },
  methods: {
    addToCart: function () {
      if(this.inventory > 0) {
        this.cart += 1;
        this.inventory -= 1;
      }
    },
    removeFromCart: function () {
      this.cart -= 1;
      this.inventory += 1;
    },
    updateProduct: function (index) {
      this.selectedVariant = index;
    }
  },
  computed: {
    title(){
      return `${this.brand} | ${this.product} ${this.onSale && 'On SALE!'}`;
    },
    image() {
      return this.variants[this.selectedVariant].variantImage
    },
    inStock() {
      return this.variants[this.selectedVariant].variantInventory > 0
    },
    inventory() {
      return this.variants[this.selectedVariant].variantInventory
    },
    onSale() {
      return this.variants[this.selectedVariant].variantOnSale
    }
  }
})