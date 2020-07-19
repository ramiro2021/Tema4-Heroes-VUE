<template>
   <b-row>
       
           <b-col lg="12" >
           <h1> <strong>Detalle de el heroe {{HeroeDetalle.nombre}}</strong></h1>
           <img id="imagen" :src="'/img/'+ HeroeDetalle.img " />
            </b-col>
    
       
           <b-col lg="6" id="cuerpo">
            <h4><strong>Biografia</strong></h4>
            <p>{{HeroeDetalle.bio}}</p>
            </b-col>
             <b-col lg="6" id="cuerpo">
            <h4><strong>Poderes</strong></h4>
            <div v-for="poder of HeroeDetalle.poderes" :key="poder.id" >
                        <li>{{poder}}</li>
            </div>
            </b-col>
       
       
        
        <b-col lg="3" id="cuerpo">
           <p><strong> Nombre: </strong> {{HeroeDetalle.nombre}}</p>
        </b-col>
        <b-col lg="3" id="cuerpo">
            <p><strong> Aparicion: </strong> {{HeroeDetalle.aparicion}}</p>
        </b-col>
        <b-col lg="3" id="cuerpo">
            <p> <strong> Casa: </strong> {{HeroeDetalle.casa}}</p>
        </b-col>
        <b-col lg="3" id="cuerpo">
            <b-button :to="'/home/' + 'All'"> Volver</b-button>
        </b-col>
        

       



   </b-row>
</template>

<script>
export default {
    name: 'DetalleHeroe',

     data() {
    return {
      HeroeDetalle: []
    };
  },
   mounted() {
    this.findOne();
  },

  methods: {
    async findOne() {
      let heroes = await fetch("/heroes.json");

      const insJson = await heroes.json();
      console.log(insJson);
      this.HeroeDetalle = insJson.find(
        hero => hero.id === this.$route.params.id
      );

    },

  }
}
</script>


<style  scoped>
 #cuerpo{
     color:grey;
     
 }
</style>