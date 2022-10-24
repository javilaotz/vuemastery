var app = new Vue({
  el: "#app",
  data: {
    product: 'Vue Socks',
    description: 'Socks world of warcraft horde theme',
    image: './images/green_socks.png',
    link: 'http://google.com',
    inventory: 20,
    inStock: false,
    onSale: true,
    details: ["80% cotton", "20% polyester", "Gender-neutral"],
    variants: [
      {
        variantId: 2234,
        variantColor: "green",
        variantImage: "./images/green_socks.png"
      },
      {
        variantId: 2235,
        variantColor: "blue",
        variantImage: "./images/blue_socks.png"
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
    updateProduct: function (image) {
      this.image = image;
    }
  }
})