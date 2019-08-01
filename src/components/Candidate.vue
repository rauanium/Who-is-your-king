<template>
  <div class="hello">
    <div class="candidate" v-for="(candidate, index) in candidates" :key="candidate.id" @click="choosenOne(index)">
        <img :src="candidate.image" alt="">
        <h1>{{candidate.name}}</h1>
        <h2>{{candidate.total}}</h2>
        
    </div>
  </div>
</template>

<script>
export default {
  name: 'Candidate',
  
  data(){
      return{
          


      }
  },
  created(){
      
  },
  
  computed:{
      candidates(){
          return this.$store.state.candidates
      }
  },
  methods:{
      choosenOne(index){
          this.candidates[index].total += 1
      }
  }
 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello{
    display: flex;
    justify-content: space-between;
}
.candidate{
    width: 200px; 
    border: 1px solid blanchedalmond;
    margin-right: 100px; 
}
.candidate img{
    width: 200px;
}
.candidate:hover{
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
h2{
    color: darksalmon;
}

</style>