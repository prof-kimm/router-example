import { mapGetters } from 'vuex';

export default {
  name: 'ListPage',
  mounted(){
    this.$store.dispatch('GET_TODO')
  },
  computed : {
    // todoList(){
    //   return this.$store.getters.TODOS
    // }
    ...mapGetters(['TODOS']),
  }
};
