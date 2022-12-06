<template>
    <div>
      <HeaderhomeComponent />
      <router-view />
      <CopyrightComponent />
    </div>
  </template>

  <script>
  import HeaderhomeComponent from "../components/HeaderhomeComponent.vue";
  import CopyrightComponent from "../components/CopyrightComponent.vue";
  export default {
    name: "HomeLayout",
    components: {
        HeaderhomeComponent,
        CopyrightComponent,
    },
  };
  </script>