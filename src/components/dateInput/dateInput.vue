<template>
  <div class="date-input-container">
    <span>{{text}}</span>
    <div id="input-container">
      <input
        type="date"
        :name="inputName"
        :id="inputName"
        :value="value"
        required
        @input="updateValue($event.target.value)"
      />
      <img :src="require('@/assets/' + img)" />
    </div>
  </div>
</template>
<script>
export default {
  name: 'dateInput',
  props: {
    img: String,
    text: {
      type: String,
      default: ''
    },
    value: {
      type: String
    },
    inputName: {
      type: String,
      required: true
    },
    model: {
      type: String
    }
  },
  methods: {
    updateValue (value) {
      this.$emit('input', value)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss"  >
@import "./dateInput.scss";
</style>
