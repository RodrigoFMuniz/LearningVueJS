<template>
  <nav class="menu">
    <ul>
        <!-- <li><router-link to="/">Main</router-link></li>
        <li><router-link to="/usuario">Usuario</router-link></li> -->
        <router-link to="/" tag="li" active-class="active" exact><a>Main</a></router-link>
        <router-link to="/usuario" tag="li" active-class="active"><a>Usuario</a></router-link>
        
    </ul>
  </nav>
</template>

<script>
export default {

}
</script>

<style>

</style>