<template>
  <div id="app">
    <!--<link rel="stylesheet" href="css/bootstrap.css" type="text/css">-->
    <!--<img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>-->
    <div class="container-fluid bg-success">
      <div class="row">
        <div class="col-md">
          <h1>jhdbvsjv</h1>
        </div>
        <div class="col-md bg-light">
          <h1>jhdbvsjv</h1>
        </div>
        <div class="col-md">
          <h1>jhdbvsjv</h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    //HelloWorld
  }
}
</script>

<style>
.bg-success {
  background-color: #28a745 !important;
}
.container,
.container-fluid,
.container-sm,
.container-md,
.container-lg,
.container-xl {
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}
.text-left {
  text-align: left !important;
}
.text-right {
  text-align: right !important;
}
.text-center {
  text-align: center !important;
}
.p-5 {
  padding: 3rem !important;
}
.row {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
}
.col-md {
  position: relative;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
}
.bg-light {
  background-color: #f8f9fa !important;
}
</style>
