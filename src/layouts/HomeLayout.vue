<template>
    <div>
      <headerhome-component/> />
      <router-view />
      <footer-component />
    </div>
  </template>

  <script>
  import HeaderhomeComponent from "../components/HeaderhomeComponent.vue";
  import FooterComponent from "../components/FooterComponent.vue";
  export default {
    name: "HomeLayout",
    components: {
        HeaderhomeComponent,
        FooterComponent,
    },
  };
  </script>