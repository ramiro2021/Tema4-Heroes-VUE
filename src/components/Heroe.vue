<template>
    <b-row>
        <b-col lg="6">
            <div id="tituloHeroe">
                <h2>{{heroe.nombre}}</h2>
            </div>
            <div id="imagen">
                <img  :src="'/img/'+ heroe.img ">
            </div>
            <div id="boton">
                <b-button :to="'/detalle/' + heroe.id" > Ver mas...</b-button>
            </div>
            
        </b-col>
        <b-col lg="6">
            <div id="tituloPoder">
                <h2 id="poder">Poderes</h2>
            </div>
            <div id="listaPoder">
                <div  v-for="poder of heroe.poderes" :key="poder.id">
                    <li >{{poder}}</li>
                </div>
                
            </div>
            <div id= "Vacio">
                <h3>Presione ver mas para ver toda la informacion de este heroe</h3>
            </div>
        </b-col>
        
    </b-row>
</template>


<script>
export default {
    name: 'Heroe',
    props: ['heroe']
    
}
</script>


<style  scoped>
#tituloHeroe{
       border-style: solid;
       color: green;
    }

 #imagen{
       border-style: solid;
    }
    #boton{
       border-style: solid;
       margin-bottom: 10px;
    }

  #tituloPoder,#listaPoder, #Vacio{
      border-style: solid;
      width: 100%;
      height: 32%;
  }  
  #poder{
      color: red;
  }
</style>