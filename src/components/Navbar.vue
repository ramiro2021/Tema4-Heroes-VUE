<template>
   <div>
  <b-navbar toggleable="lg" type="dark" variant="info">
    <b-navbar-brand to="/">Parcial LAB 4</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item :to="'/redirect/' + 'All'">Home</b-nav-item>
        <b-nav-item :to="'/redirect/' + 'Marvel'">Heroes Marvel</b-nav-item>
        <b-nav-item :to="'/redirect/' + 'DC'">Heroes DC</b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-form>
          <b-form-input size="sm" class="mr-sm-2" placeholder="Search"  v-model="parametroBuscado"></b-form-input>
          <b-button size="sm" class="my-2 my-sm-0" type="submit" :to="'/redirect/'+ parametroBuscado">Buscar</b-button>
        </b-nav-form>    
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
</template>

<script>
export default {
    name: 'Navbar',
    data() {
    return {
      parametroBuscado: ''
    };
  }
}
</script>