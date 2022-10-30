Vue.component('product', {
  props: {
    premium: {
      type: Boolean,
      required: true
    },
    cart: {
      type: Array,
      reqired: true
    }
  },
  template: `
  <div class="product">
    <div class="product-image">
      <img class="w200" v-bind:src="image" alt="product image">
      <div class="inventory">{{ inventory }} left</div>
      <button v-on:click="updateCart">Add to Cart</button>
    </div>
    <div class="product-info">
      <h1>{{ title }}</h1>
      <p>{{ description }}</p>

      <p :class="styles.stockStatus " v-if="inventory > 10">In Stock</p>
      <p v-else-if="inventory <=10 && inventory > 0" >Almost sold out!</p>
      <p :class="[!inStock && styles.lineThrough]"> Out of Stock</p>

      <product-details :details="details"></product-details>

      <p>Shipping: {{ shipping }}</p>

      <p>Available Colors</p>
      <div class="boxContainer">
        <div 
          class="box variant" 
          v-for="(variant, index) in variants" :key="variant.variantId"
          @mouseover="updateProduct(index)"
          :style="{ backgroundColor: variant.variantColor }"
        >
        </div>
      </div>

      <p>Available Sizes</p>
      <div class="boxContainer" >
        <div class="box" v-for="size in sizes">{{ size }}</div>
      </div>

      <div class="cartContainer">
        <div class="boxContainer">
          <div class="box cart">cart: {{ cart.length }}</div>
          <div class="box amountButtons">
            <button @click="updateCart" :disabled="inventory === 0">+</button>
            <button v-on:click="removeFromCart" :disabled="cart.length <= 0">-</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  `,
  data() {
    return {
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
      styles: {
        stockStatus: 'stockStatus',
        success: 'success',
        warning: 'warning',
        danger: 'danger',
        lineThrough: 'lineThrough'
      },
    }
  },
  methods: {
    removeFromCart: function () {
      this.$emit(
        "add-to-cart", 
        "remove", 
        this.variants[this.selectedVariant].variantInventory, 
        this.variants[this.selectedVariant].variantId
      );
    },
    updateProduct: function (index) {
      this.selectedVariant = index;
    },
    updateCart() {
      this.$emit(
        "add-to-cart", 
        "add", 
        this.variants[this.selectedVariant].variantInventory, 
        this.variants[this.selectedVariant].variantId
      );
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
    },
    shipping() {
      return this.premium ? "free" : "$2,99";
    }
  }

});

Vue.component('product-details', {
  props:{
    details: {
      type: Array,
      required: true
    }
  }, 
  template: `
    <div>
      <p>Product details</p>
      <ul>
        <li v-for="detail in details">{{ detail }}</li>
      </ul>
    </div>
  `,

})

var app = new Vue({
  el: "#app",
  data: {
    premium: true,
    cart: []
  },
  methods: {
    updateCart(option, inventory, id) {
      switch(option) {
        case "add":
          this.cart.push(id)
          inventory -= 1;
          break;
        case "remove":
          const index = this.cart.indexOf(id);
          if(index > -1) {
            this.cart.splice(index, 1)
            inventory += 1;
          }
          break;
      }
    }
  }
})