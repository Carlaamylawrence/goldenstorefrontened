import { createStore } from 'vuex'

export default createStore({
  state: {
    User: null,
    Product: null,
  },
  mutations: {
    setUser: (state, user) => {
      state.User = user  ;
    },
    setProduct(state, product) {
      state.activeProduct = product
    }
  },
  actions: {
    login: async (context, payload) => {
      fetch("https://goldenxc.herokuapp.com/users/login", {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
        },
        body: 
        JSON.stringify({
          email: payload.email,
          password: payload.password,
        }),
      })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
    },
    register: async (context, payload) => {
      fetch("https://goldenxc.herokuapp.com/users/register", {
        method: 'POST',
        body: JSON.stringify({
            fullname: payload.fullname,
            email: payload.email,
            password: payload.password,
            phone: payload.phone,
            userRole: "user",
        }),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
        }
  },
  modules: {
  }
})
