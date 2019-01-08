Vue.component("rightside", {
  props: {
    items: {
      type: Number,

      required: true
    }
  },

  template: `

    <div>

    <button v-on:click="inreaseCounter">Add</button>

    <span>Total number: {{totalItems}} </span>

    </div>

    `,

  data() {
    return {};
  },

  methods: {
    inreaseCounter() {
      this.$emit("add-item");
    }
  },

  computed: {
    totalItems() {
      return this.items;
    }
  }
});

/* ---------------------------------------------------------- */

Vue.component("centerside", {
  template: `<br>`
});

/* ---------------------------------------------------------- */

Vue.component("leftside", {
  props: {
    items: {
      type: Number,
      required: true
    }
  },

  template: `

    <div>

    <button v-on:click="decreaseCounter">Remove</button>

    <span>Total number: {{totalItems}} </span>

    </div>

    `,

  data() {
    return {};
  },

  methods: {
    decreaseCounter() {
      this.$emit("remove-item");
    }
  },

  computed: {
    totalItems() {
      return this.items;
    }
  }
});

var app = new Vue({
  el: "#app",

  data: {
    message: "# of items in the cart",
    items: 10
  },

  methods: {
    addItem() {
      this.items += 1;
    },
    removeItem() {
      this.items -= 1;
    }
  }
});
