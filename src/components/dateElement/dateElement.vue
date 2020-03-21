<template>
    <div class="date-element-container">
        <div class="row">
            <div class="dates space">
                <p>{{intialDate}} </p>
                <p>{{endDate}}</p>
            </div>
            <div class="space"></div>
        </div>
        <div class="row">
            <div class="space"></div>
            <div class="msg">
                <p>{{msg}}</p>
            </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'dateElement',
  props: {
    intialDate:{
        type:String,
        required:true
    },
    endDate: {
        type:String,
        required:true
    },
    msg:{
        type:String,
        required:true
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  @import './dateElement.scss';
</style>
