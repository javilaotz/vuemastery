var app = new Vue({
  el: "#app",
  data: {
    product: 'Horde Socks',
    description: 'Socks world of warcraft horde theme',
    image: 'https://www.impericon.com/media/catalog/product/w/o/worldofwarcraft_horde_accessorie_socks_abysoc005_art20-007512_3665361021285_428969-311_lg.jpg',
    link: 'http://google.com',
    inventory: 100,
    onSale: true,
    details: ["80% cotton", "20% polyester", "Gender-neutral"],
    variants: [
      {
        variantId: 2234,
        variantColor: "green",
      },
      {
        variantId: 2235,
        variantColor: "blue",
      }
    ],
    sizes: ["xs", "s", "m", "l", "xl", "xxl", "xxxl"],
    cart: 0
  },
  methods: {
    addToCart() {
      this.cart += 1;
    }
  }
})