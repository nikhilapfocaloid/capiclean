<template>
    <div class="header_section background_bg">
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-3">
                    <router-link to="/"><img src="../assets/images/logo.png" /></router-link>
                </div>
                <div class="col-md-9">
                    <div class="menu_text">
                        <ul>
                            <div class="togle_3">
                                <div class="menu_main">
                                    <div class="padding_left0"><a href="#">Register</a>
                                        <span class="padding_left0"><a href="#">Login</a></span>
                                    </div>
                                </div>
                                <div class="shoping_bag"><img src="../assets/images/search-icon.png"></div>
                            </div> 
                            <div id="myNav" class="overlay">
                                <a href="javascript:void(0)" class="closebtn" @click="closeNav()">&times;</a>
                                <div class="overlay-content">
                                    <router-link to="/">Home</router-link>
                                    <router-link to="/services">Services</router-link>
                                    <router-link to="/about">About</router-link>
                                    <router-link to="/choose">Choose</router-link>
                                    <router-link to="/team">Team</router-link>
                                    <router-link to="/contact">Contact Us</router-link>
                                </div>
                            </div>
                            <span class="navbar-toggler-icon"></span>
                            <span @click="openNav()"><img src="../assets/images/toggle-icon.png" class="toggle_menu"></span>
                        </ul>
                    </div>      
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'HeaderComponent',
    methods: {
        openNav() {
            document.getElementById("myNav").style.width = "100%";
        },
        closeNav() {
            document.getElementById("myNav").style.width = "0%";
        },
    },
}
</script>