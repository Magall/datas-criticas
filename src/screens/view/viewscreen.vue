<template>
  <div class="view-screen-container">
    <Header />
    <div class="dates-container">
      <DateElement v-for="data in datas" :key="data.id" :initialDate="moment(data.initialDate).format('DD/MM/YYYY')"  :endDate ="moment(data.endDate).format('DD/MM/YYYY')"  :msg = "data.description" :departamento = "data.nome" />
    </div>
  </div>
</template>
<script>
import Header from '@/components/header/header'
import DateElement from '@/components/dateElement/dateElement'
import axios from 'axios'
// var moment = require('moment');
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
      .get('https://localhost:5001/api/DataCritica/GetMonthAhead/', axiosConfig)
      .then(response => (this.datas = response.data))
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "./viewscreen.scss";
</style>
