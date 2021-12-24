<template>
<div>

<div class="row main ">

<div class="sidenav col-2">
  <a href="#">
  <i class="material-icons"  >Lobby</i>
  Inicio
  </a>
  <a href="#">
    <i class="material-icons"  ></i>
    Expedientes
  </a>
  <hr>
  <a href="#">
    <i class="material-icons">
    descripcion
    </i>
 
  </a>
  <hr>
  <a href="">
 <span style="font-weight:bold">Configuracion</span> 
  <i class="material-icons" style="font-size:30px">
  
    </i>
</a>
  <a href="#">
  <i class="material-icons">
   
</i>
Lideres
  </a>
  <a href="#">
  <i class="material-icons">
 
</i>

  </a>
  <a href="#">
  <i class="material-icons">
  
</i>
Misiones
  </a>
</div>

    <div class="col-9">
    <div class="row">
    <div class="col-9">
    <h1>Agenda del dia</h1>
    <h3>Dic 24 de 2021</h3>
    <br>

<table class="table">
  <thead>
    <tr>
      <th scope="col">Lista</th>
      <th scope="col">Nombre</th>
      <th scope="col">Rango</th>
      
    </tr>
  </thead>
  <tbody>
    <tr v-for="item in lista" :key="item.id" >
      
      <td>{{item.ase1}}</td>
      <td>{{item.ase2}}</td>
      <td>{{item.jusgado}}</td>
    </tr>
    
  </tbody>
</table>

    </div>

    <div class="col-3">
    <vc-calendar class="mt-5"  />
      
    </div>


</div>
<div class="row mt-5">
    <div class="col-3"  v-for="item in opc" :key="item.id">
       
        <a href="" style="text-decoration: none;">

         
            <div class="opbutton " v-bind:style="{ backgroundColor: item.color, }">
            <div class="row">
            <div class="col"> 
                <i class="material-icons" style="font-size:60px" >
                {{item.icon}}
            </i>
            </div>
            <div class="col">
            <h5>{{item.title}}</h5>
            <h1 style="text-align:right;">{{item.num}}</h1>
            </div>
            </div>
            </div>
            
            </a>
    </div>

    
    </div>
   
     
 
  
   
  </div> 
     
</div>

</div>   
</template>


<script>

</script>


<style  scoped>
.sidenav {
  height: 700px;
  
  border: 1px solid gray;  
  z-index: 1;
  top: 0;
  left: 0;
  overflow-x: hidden;
  text-align: initial;
}
.sidenav a {
  
  text-decoration: none;
  font-size: 20px;
  color: #818181;
  display: block;
  padding: 10px 0 10px 22px;
}
.sidenav a:hover {
  color: black;
}
.main {
 
  text-align: initial;
}
@media screen and (max-height: 450px) {
  .sidenav {padding-top: 15px;}
  .sidenav a {font-size: 18px;}
}
.opbutton{
    width: 200px;
    color:white;
    text-decoration: none;
    padding: 0px 5px 0px 2px;
}
.opbutton h4 {
    font-size: 25px;
}
.opbutton a hover {
    text-decoration: none;
}
.circulebut{
    border-radius:50%; 
    height:65px;
    width: 60px;
    background-color: #9d8000;
    color:white;
    float: right;
    margin-right: 40px;
    
    padding-bottom: 40px;
    
    
}
.float{
	position:fixed;
	width:60px;
	height:60px;
	bottom:40px;
	right:40px;
	background-color: #9d8000;
	color:#FFF;
	border-radius:50px;
	text-align:center;
	box-shadow: 2px 2px 3px #999;
}
.my-float{
	margin-top:22px;
}
</style>