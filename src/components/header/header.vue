<template>
  <div class="header-container">
    <img src="../../assets/anima.png" class="asd" />
    <p>SISTEMA GERENCIADOR DE DATAS CRÍTICAS</p>
    <ul>
      <li><router-link to="/">Cadastrar</router-link></li>
      <li><router-link to="/view">Visualizar</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  @import './header.scss';
</style>
