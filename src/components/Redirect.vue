<template>
    <h1>Parcial Ramiro Murua - Tema 4</h1>
</template>

<script>
export default {
    name: 'Bienvenida',

    mounted(){
       var parametroBuscado = this.$route.params.param
        this.$router.push('/home/'+ parametroBuscado)
    }
}
</script>