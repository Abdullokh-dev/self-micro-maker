<script setup>

</script>

<template>
  <div class="row">
    <div class="col-12 text-center main-title mb-4 mb-lg-0" data-aos="fade-up">
      self.subsidy capabilities
      <!-- Bg INDEX -->
      <div class="d-none d-lg-block">
        <img alt="#" class="bg-index-drop" src="../assets/subsidy/bg-drop.png" height="72" draggable="false">
      </div>
    </div>
  </div>
  <div class="row d-flex justify-content-center">
    <div class="col-12 col-md-11">
      <!-- Bg INDEX -->
      <div class="d-none d-lg-block">
        <img alt="#" class="bg-index" src="../assets/subsidy/bg.png" width="70" draggable="false">
      </div>
      <div class="row">
        <div class="col-12 my-card m-0 mt-md-4" data-aos="fade-up">
          <div class="box">
            <h1 class="title"> is it mandatory to connect the subsidy system? </h1>
            <div class="info">To improve the reputation in the eyes of employees and improve working conditions!</div>
          </div>
        </div>
        <div class="col-12 my-card m-0 mt-md-4" data-aos="fade-up">
          <div class="box">
            <h1 class="title"> what if employees do not spend their allocated subsidy?  </h1>
            <div class="info">The subsidy can accumulate or expire, depending on the parameters you have chosen.</div>
          </div>
        </div>
        <div class="col-12 my-card m-0 mt-md-4" data-aos="fade-up">
          <div class="box">
            <h1 class="title"> a what are subsidies for? </h1>
            <div class="info">To improve the reputation in the eyes of employees and improve working conditions!</div>
          </div>
        </div>
        <div class="col-12 my-card m-0 mt-md-4" data-aos="fade-up">
          <div class="box">
            <h1 class="title"> is it time-consuming to connect the subsidy? </h1>
            <div class="info">No, all we need from you is access cards and budget determination. We will set up and connect everything ourselves.</div>
          </div>
        </div>
        <div class="col-12 my-card m-0 mt-md-4" data-aos="fade-up">
          <div class="box">
            <h1 class="title"> how is the budget for subsidies determined? </h1>
            <div class="info">
              You decide what parameters to set for subsidies: <br/> <br/>

              - daily, weekly, monthly subsidies <br/>
              - subsidies on certain days and times <br/>
              - subsidies for certain product assortment <br/>
              - purchases fully with subsidies or with "live" money <br/>
              - Accumulation or "burning" of funds on employee cards upon expiration. <br/>
              - Possibility to determine the amount of the subsidy depending on the positions of the employees, the nature of their work, etc.
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.main-title {
  margin-top: 96px;
  font-size: 32px;
  font-weight: 800;
  line-height: 32px;
  z-index: 1;
}

.bg-index-drop {
  position: relative;
  left: 188px;
  z-index: -1;
  margin-top: -60px;
}

.bg-index {
  position: absolute;
  left: 0;
  margin-top: 100px;
  z-index: 1;
}

.my-card {
  background-color: white;
  padding: 32px;
  z-index: 1;
}

h1 {
  line-height: 28px;
  font-size: 20px;
  font-weight: 700;
  text-align: left;
}

.info {
  line-height: 25px;
  font-weight: 400;
  text-align: left;
}

.box {
  max-width: 966px;
}

@media only screen and (min-width: 768px) {
  .my-card {
    border-radius: 20px;
  }

  h1 {
    font-size: 24px;
    line-height: 34px;
  }

  .info {
    font-size: 20px;
  }
}
</style>
