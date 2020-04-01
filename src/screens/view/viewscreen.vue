<template>
  <div class="view-screen-container">
    <Header />
    <div class="dates-container">
      <DateElement v-for="data in datas" :key="data.id" :initialDate="data.initialDate"  :endDate ="data.endDate"  :msg = "data.description" :departamento = "data.nome" />
    </div>
  </div>
</template>
<script>
import Header from '@/components/header/header'
import DateElement from '@/components/dateElement/dateElement'
import axios from 'axios'
export default {
  name: 'HomeScreen',
  components: {
    Header,
    DateElement
  },
  data () {
    return {
      datas: null
    }
  },
  mounted () {
    let axiosConfig = {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Accept': 'application/json'
      }
    }
    axios
      .get('https://localhost:44307/api/DataCritica/', axiosConfig)
      .then(response => (this.datas = response.data))
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "./viewscreen.scss";
</style>
