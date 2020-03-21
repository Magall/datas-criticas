<template>
  <div class="screen-container">
    <Header />
    <div class="container">
      <div class="data-container">
        <DateInput text="Data Inicial" img="date-icon.png" inputName="datainicial" />
        <DateInput text="Data Final" img="date-icon.png" inputName="datafinal" />
      </div>
      <textarea id="desc" rows="8" cols="50" />
    </div>
    <input type="submit" value="Enviar">
    <form action="" method="post"></form>  </div>
</template>
<script>
import Header from '@/components/header/header'
import DateInput from '@/components/dateInput/dateInput'
import DateElement from '@/components/dateElement/dateElement'
export default {
  name: 'HomeScreen',
  components: {
    Header,
    DateInput,
    DateElement
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "./homescreen.scss";
</style>
