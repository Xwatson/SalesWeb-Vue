<template>
<el-container>
    <el-header>
        <app-header></app-header>
        </el-header>
        <el-main>
            <router-view></router-view>
        </el-main>
        <el-footer>
        <app-footer></app-footer>
    </el-footer>
</el-container>
</template>

<script>
import AppHeader from '../components/AppHeader'
import AppFooter from '../components/AppFooter'
export default {
    name: 'CoreLayout',
    components: {
        'app-header': AppHeader,
        'app-footer': AppFooter
    }
}
</script>
<style>
@import '../assets/fonts/iconfont.css';
</style>


