<template>
  <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="../assets/pexels-aissa-bouabellou-2406271.jpg" style="height: 750px" class="image-item d-block w-100" alt="...">
        <div class="carousel-caption d-none d-md-block">
          <h1 class="title">Be A Superhero</h1>
          <router-link to="/volunteer"> <button type="button" class="btn btn-outline-light" onclick="">Volunteer Now</button></router-link>
        </div>
      </div>
      <div class="carousel-item">
        <img src="../assets/pexels-julia-m-cameron-4144036.jpg" style="height: 750px" class=" d-block w-100" alt="...">
        <div class="carousel-caption d-none d-md-block">
          <h1 class="title">Be A Superhero</h1>
         
          <router-link to="/volunteer"> <button type="button" class="btn btn-outline-light" onclick="">Volunteer Now</button></router-link>
        </div>
      </div>
      <div class="carousel-item">
        <img src="../assets/pexels-rebecca-zaal-764681.jpg" style="height: 750px" class="d-block w-100" alt="...">
        <div class="carousel-caption d-none d-md-block">
         <h1 class="title">Be A Superhero</h1>
         <router-link to="/volunteer"> <button type="button" class="btn btn-outline-light" onclick="">Volunteer Now</button></router-link>
        </div>
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" ></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
      <span class="carousel-control-next-icon" ></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>

<script>
export default {
  name: "ImageCarousel"
}


</script>
<style scoped>
.title{
  font-family: 'Work Sans';
font-style: normal;
font-weight: 700;
font-size: 80px;
line-height: 94px;

}

.btn{
width: 215px;
height: 60px;
left: 99px;
top: 428px;
}
.image-item{
 -webkit-filter: drop-shadow(5px 5px 5px #222222);
  filter: drop-shadow(5px 5px 5px #222222);
}
</style>