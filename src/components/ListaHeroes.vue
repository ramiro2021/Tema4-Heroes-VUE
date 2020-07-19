<template>
<div>
    <h1>{{this.$route.params.param}}</h1>
    <div v-if="this.$route.params.param === 'All'">
        <div v-for="hero of HeroesRecibidos" :key="hero.id">
      <Heroe :heroe="hero" />
        </div>
    </div>
 
    <div v-if="this.$route.params.param === 'Marvel'">
        <div v-for="hero of HeroesMarvel" :key="hero.id">
      <Heroe :heroe="hero" />
        </div>
    </div>

    <div v-if="this.$route.params.param === 'DC'">
        <div v-for="hero of HeroesDC" :key="hero.id">
      <Heroe :heroe="hero" />
        </div>
    </div>
    <div v-else>
        <div v-for="hero of HeroesBySearch" :key="hero.id">
      <Heroe :heroe="hero" />
        </div>
    </div>

     
</div>  
</template>

<script>
 import Heroe from "./Heroe";
export default {
    name: 'ListaHeroes',

    components: {
     Heroe
  },
  data() {
    return {
      HeroesRecibidos: [],
      HeroesMarvel: [],
      HeroesDC: [],
      HeroesBySearch: [],
    };
  },

   mounted() {
    if(this.$route.params.param === 'All'){
         this.getAll();
    } else if( this.$route.params.param === 'Marvel' || this.$route.params.param === 'DC'){
        this.getCasa();
    } else {
        this.getBySearch();
    }
   

      
    
  },
   methods: {
    //    traer todos
    async getAll() {
      let heroes = await fetch("/heroes.json");
      const insJson = await heroes.json();
      console.log(insJson);
      this.HeroesRecibidos = insJson;
      console.log(this.HeroesRecibidos);
    },

    // filtrar segun casa
    async getCasa(){
    let heroes = await fetch("/heroes.json");
      const insJson = await heroes.json();
      this.HeroesRecibidos = insJson 
      .filter(heroe => {
        if (
          heroe.casa === 'Marvel'
        ) {
          
          this.HeroesMarvel.push(heroe);
          console.log(this.HeroesMarvel);
        }
        else if (
            heroe.casa === 'DC'
        ){
            this.HeroesDC.push(heroe);
        }
      });
      
  },

      async getBySearch(){
    let heroes = await fetch("/heroes.json");
      const insJson = await heroes.json();
      this.HeroesRecibidos = insJson 
      .filter(heroe => {
        if (
          heroe.nombre.toLowerCase().includes(this.$route.params.param) ||
          heroe.bio.toLowerCase().includes(this.$route.params.param) ||
          heroe.poderes.includes(this.$route.params.param) //sirve solo si se respeta mayusculas y minusculas
        ) {
          
          this.HeroesBySearch.push(heroe);
          
        }
        
      });
      
  }

    
  }

}
</script>