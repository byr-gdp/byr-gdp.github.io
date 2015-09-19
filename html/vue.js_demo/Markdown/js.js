new Vue({
  el: '#editor',
  data: {
    input: '# hello vue.js'
  },
  filters: {
    marked: marked
  }
})