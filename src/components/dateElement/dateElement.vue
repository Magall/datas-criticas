/* eslint-disable */
<template>
  <div class="date-element-container">
    <div class="row">
      <p>{{initialDate}}</p>
      <p>{{endDate}}</p>
    </div>
    <div class="row">
      <div>
        <p>{{msg}}</p>
      </div>
      <p>{{departamento}}</p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'dateElement',
  props: {
    initialDate: {
      type: String,
      required: true
    },
    endDate: {
      type: String,
      required: true
    },
    msg: {
      type: String,
      required: true
    },
    departamento: {
      type: String,
      required: true
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  @import './dateElement.scss';
</style>
