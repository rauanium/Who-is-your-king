<template>
  <div class="home">
    <h1>Выбери своего короля</h1>
    <div class="content">
      
      <Candidate/>
      
    </div>
    
  </div>
</template>

<script>
// @ is an alias to /src
import Candidate from '@/components/Candidate.vue'
export default {
  name: 'home',
  components: {
    Candidate
  },
  data(){
    return{
      voter: "",
      
    }
  },
  methods:{
    golos(){
      // if(this.voter !== ''){
      //         this.number += 1
      //         console.log(this.candidates[index].total)
      //         console.log(this.voter)
      //     }else{
      //         this.candidates[index].total += 0
      //     }
      console.log("clicked")
      }
    
  },
  computed:{
    candidates(){
      return this.$store.state.candidates
    }
  }
}
</script>
<style>
.content{
  width: 60%;
  margin: 0px auto;
  background-color: aliceblue;
  display: flex;
  justify-content: space-between;
}
.form{
  width: 60%;
  margin: 0px auto;
  background-color: darkcyan;
  
}
input{
  width: 60%;
  padding: 10px 0px;
  font-size: 20px;
}
</style>

