<template>
  <div id="app">
    <app-header></app-header>
    <router-view/>
    <app-footer></app-footer>
  </div>
</template>

<script>
import AppHeader from '../components/AppHeader'
import AppFooter from '../components/AppFooter'
export default {
    name: 'app',
    components: {
        'app-header': AppHeader,
        'app-footer': AppFooter
    }
}
</script>

<style>
    @import '../assets/css/base.css';
</style>
