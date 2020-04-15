<template>
  <div class="screen-container">
    <Header />
    <!-- <form action='https://localhost:44307/api/DataCritica/' method='post' target=''> -->
    <form @submit.prevent="enviar">
      <div class="container">
        <div class="data-container">
          <DateInput
            v-model="initialDate"
            text="Data Inicial"
            img="date-icon.png"
            inputName="initialDate"
          />
          <DateInput v-model="endDate" text="Data Final" img="date-icon.png" inputName="endDate" />
        </div>
        <textarea v-model="desc" id="description" rows="8" cols="50" name="description" required />
        <select name="nome" id v-model="nome" required>
          <option
            v-for="area in areas"
            :key="area.nome"
            :value="area.nome"
            name="nome"
          >{{area.nome}}</option>
        </select>
      </div>
    <input type="submit" value="enviar">
      {{resp}}
    </form>
  </div>
</template>
<script>
import Header from "@/components/header/header";
import DateInput from "@/components/dateInput/dateInput";
import DateElement from "@/components/dateElement/dateElement";
import axios from "axios";

export default {
  name: "HomeScreen",
  components: {
    Header,
    DateInput,
    DateElement
  },
  data() {
    return {
      areas: null,
      resp: "",
      initialDate: "",
      endDate: "",
      desc: "",
      nome: ""
    };
  },
  methods: {
    enviar: function(event) {
     axios
        .post("https://localhost:5001/api/DataCritica/", {
          initialDate: this.initialDate,
          endDate: this.endDate,
          description: this.desc,
          nome: this.nome
        })
        .then(function(response) {
          console.log(response);
          alert(response.data);
        })
        .catch(function(error) {
          console.log(error);
          alert(error);
        });
    },
    pegar: function() {
      // let axiosConfig = {
      //   headers: {
      //     "Access-Control-Allow-Origin": "*",
      //     Accept: "application/json"
      //   }
      // };
      axios
        .get("https://localhost:5001/api/Departamento/")
        .then(response => (this.areas = response.data));
    },
    updateValue: function(value) {
      this.$emit("input", value);
    }
  },
  mounted() {
    this.pegar();
  }

};
</script>
<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style lang='scss' scoped>
@import "./homescreen.scss";
</style>
