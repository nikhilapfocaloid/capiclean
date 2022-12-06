<template>
    <div>
        <header-component/>
        <router-view />
        <copyright-component/>
    </div>
</template>

<script>
import HeaderComponent from '../components/HeaderComponent.vue'
import CopyrightComponent from '../components/CopyrightComponent.vue'

export default {
    components: {
        HeaderComponent,
        CopyrightComponent
    }
}
</script>
