<template>
  <div class="screen-container">
    <Header />
    <form action="https://localhost:44307/api/DataCritica/" method="post">
      <div class="container">
      <div class="data-container">
        <DateInput text="Data Inicial" img="date-icon.png" inputName="initialDate" />
        <DateInput text="Data Final" img="date-icon.png" inputName="endDate" />
      </div>
      <textarea id="description" rows="8" cols="50" name="description"/>
      <select name="nome" id="" >
        <option v-for="area in areas" :key="area.nome" :value="area.nome" name="nome">{{area.nome}}</option>
      </select>
    </div>
    <input type="submit" value="Enviar">
      </form>  </div>
</template>
<script>
import Header from '@/components/header/header'
import DateInput from '@/components/dateInput/dateInput'
import DateElement from '@/components/dateElement/dateElement'
import axios from 'axios'
export default {
  name: 'HomeScreen',
  components: {
    Header,
    DateInput,
    DateElement
  },
  data () {
    return {
      areas: null
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
      .get('https://localhost:44307/api/Departamento/', axiosConfig)
      .then(response => (this.areas = response.data))
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "./homescreen.scss";
</style>
