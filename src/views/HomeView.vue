<template>
    <div>
     <!-- services section start -->
     <div class="services_section layout_padding">
       <div class="container">
         <h1 class="services_taital"><span>Our</span> <img src="../assets/images/icon-1.png"> <span style="color: #1f1f1f">Services</span></h1>
         <p class="services_text">Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
         <div id="main_slider" class="carousel slide" data-ride="carousel">
           <div class="carousel-inner">
             <div class="carousel-item active">
               <div class="services_section_2 layout_padding">
                 <div class="row">
                   <div class="col-md-6">
                     <div class="box_section active">
                       <div class="tiles_img"></div>
                       <h3 class="tile_text active">Tile & Grout</h3>
                       <p class="lorem_text active">Exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor </p>
                     </div>
                   </div>
                   <div class="col-md-6">
                     <div class="box_section">
                       <div class="tiles_img_1"></div>
                       <h3 class="tile_text">Carpet Cleaning</h3>
                       <p class="lorem_text">Exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor</p>
                     </div>
                   </div>
                 </div>
               </div>
             </div>
             <div class="carousel-item">
               <div class="services_section_2 layout_padding">
                 <div class="row">
                   <div class="col-md-6">
                     <div class="box_section active">
                       <div class="tiles_img"></div>
                       <h3 class="tile_text active">Tile & Grout</h3>
                       <p class="lorem_text active">Exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor </p>
                     </div>
                   </div>
                   <div class="col-md-6">
                     <div class="box_section">
                       <div class="tiles_img_1"></div>
                       <h3 class="tile_text">Carpet Cleaning</h3>
                       <p class="lorem_text">Exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor</p>
                     </div>
                   </div>
                 </div>
               </div>
             </div>
             <div class="carousel-item">
               <div class="services_section_2 layout_padding">
                 <div class="row">
                   <div class="col-md-6">
                     <div class="box_section active">
                       <div class="tiles_img"></div>
                       <h3 class="tile_text active">Tile & Grout</h3>
                       <p class="lorem_text active">Exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor </p>
                     </div>
                   </div>
                   <div class="col-md-6">
                     <div class="box_section">
                       <div class="tiles_img_1"></div>
                       <h3 class="tile_text">Carpet Cleaning</h3>
                       <p class="lorem_text">Exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor</p>
                     </div>
                   </div>
                 </div>
               </div>
             </div>
           </div>
           <a class="carousel-control-prev" href="#main_slider" role="button" data-slide="prev">
             <i class="fa fa-angle-left"></i>
           </a>
           <a class="carousel-control-next" href="#main_slider" role="button" data-slide="next">
             <i class="fa fa-angle-right"></i>
           </a>
         </div>
       </div>
     </div>
     <!-- services section start -->
     <!-- about section start -->
     <div class="about_section layout_padding">
       <div class="container">
         <div class="row">
           <div class="col-md-6">
             <div><img src="../assets/images/img-2.png" class="image_2"></div>
           </div>
           <div class="col-md-6">
             <h1 class="services_taital"><span>About </span> <img src="../assets/images/icon-1.png"> <span style="color: #1f1f1f">Cleaning</span></h1>
             <p class="ipsum_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,</p>
             <div class="contact_bt_1"><a href="#">READ MORE<span class="contact_padding"><img src="../assets/images/contact-icon1.png"></span></a></div>
           </div>
         </div>
       </div>
     </div>
     <!-- about section end -->
     <!-- choose section start -->
     <div class="choose_section layout_padding">
       <div class="container">
         <h1 class="choose_taital"><span>Why </span> <img src="../assets/images/icon-1.png"> <span style="color: #1f1f1f">Choose Us</span></h1>
         <p class="choose_text">Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
         <div class="choose_section_2 layout_padding">
           <div class="row">
             <div v-for="data in choose_data" v-bind:key="data.id" class="col-lg-3 col-sm-6">
               <div class="choose_box">
                 <h1 class="client_taital">{{data.count}}+</h1>
                 <h4 class="client_text">{{data.title}}</h4>
               </div>
             </div>
           </div>
           <div class="image_3"><img src="../assets/images/img-3.png"></div>
           <div class="get_bt"><a href="#">Get A quote</a></div>
         </div>
       </div>
     </div>
     <!-- choose section end -->
     <!-- team section start -->
     <div class="team_section layout_padding">
       <div class="container">
         <h1 class="choose_taital"><span>Our </span> <img src="../assets/images/icon-1.png"> <span style="color: #1f1f1f">Team</span></h1>
         <p class="choose_text">Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
         <div class="team_section_2 layout_padding">
           <div class="container">
             <div class="images_main_1">
               <div class="row">
                 <div class="col-sm-5">
                   <div class="image_4"><img src="../assets/images/img-4.png"></div>
                   <h6 class="follow_text">Follow Us</h6>
                   <div class="follow_social_icon">
                     <ul>
                       <li><a href="#"><img src="../assets/images/fb-icon.png"></a></li>
                       <li><a href="#"><img src="../assets/images/twitter-icon.png"></a></li>
                       <li><a href="#"><img src="../assets/images/linkden-icon.png"></a></li>
                       <li><a href="#"><img src="../assets/images/instagram-icon.png"></a></li>
                     </ul>
                   </div>
                 </div>
                 <div class="col-sm-7">
                   <h2 class="consectetur_text">Consectetur</h2>
                   <p class="dummy_text">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem</p>
                 </div>
               </div>
             </div>
             <div class="images_main">
               <div class="row">
                 <div class="col-sm-7">
                   <h2 class="consectetur_text_1">magna aliqua</h2>
                   <p class="dummy_text_1">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem</p>
                 </div>
                 <div class="col-sm-5">
                   <div class="image_4"><img src="../assets/images/img-5.png"></div>
                   <h6 class="follow_text">Follow Us</h6>
                   <div class="follow_social_icon">
                     <ul>
                       <li><a href="#"><img src="../assets/images/fb-icon.png"></a></li>
                       <li><a href="#"><img src="../assets/images/twitter-icon.png"></a></li>
                       <li><a href="#"><img src="../assets/images/linkden-icon.png"></a></li>
                       <li><a href="#"><img src="../assets/images/instagram-icon.png"></a></li>
                     </ul>
                   </div>
                 </div>
               </div>
             </div>
             <div class="images_main_1">
               <div class="row">
                 <div class="col-sm-5">
                   <div class="image_4"><img src="../assets/images/img-6.png"></div>
                   <h6 class="follow_text">Follow Us</h6>
                   <div class="follow_social_icon">
                     <ul>
                       <li><a href="#"><img src="../assets/images/fb-icon.png"></a></li>
                       <li><a href="#"><img src="../assets/images/twitter-icon.png"></a></li>
                       <li><a href="#"><img src="../assets/images/linkden-icon.png"></a></li>
                       <li><a href="#"><img src="../assets/images/instagram-icon.png"></a></li>
                     </ul>
                   </div>
                 </div>
                 <div class="col-sm-7">
                   <h2 class="consectetur_text">Aonsectetur</h2>
                   <p class="dummy_text">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem</p>
                 </div>
               </div>
             </div>
             <div class="images_main">
               <div class="row">
                 <div class="col-sm-7">
                   <h2 class="consectetur_text_1">Nonsectetur</h2>
                   <p class="dummy_text_1">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem</p>
                 </div>
                 <div class="col-sm-5">
                   <div class="image_4"><img src="../assets/images/img-7.png"></div>
                   <h6 class="follow_text">Follow Us</h6>
                   <div class="follow_social_icon">
                     <ul>
                       <li><a href="#"><img src="../assets/images/fb-icon.png"></a></li>
                       <li><a href="#"><img src="../assets/images/twitter-icon.png"></a></li>
                       <li><a href="#"><img src="../assets/images/linkden-icon.png"></a></li>
                       <li><a href="#"><img src="../assets/images/instagram-icon.png"></a></li>
                     </ul>
                   </div>
                 </div>
               </div>
             </div>
           </div>
         </div>
       </div>
     </div>
     <!-- team section start -->
     <!-- newsletter section start -->
     <div class="newsletter_section">
       <div class="container">
         <div class="row">
           <div class="col-md-6">
             <h1 class="newsletter_text">Newsletter</h1>
             <p class="tempor_text">Tempor incididunt ut labore et dolore magna aliqua</p>
           </div>
           <div class="col-md-6">
             <div class="mail_bt_main">
               <input type="text" class="mail_text" placeholder="ENTER YOUR MAIL" name="Enter Tour Mail">
               <div class="subscribe_bt"><a href="#">SUBSCRIBE</a></div>
             </div>
           </div>
         </div>
       </div>
     </div>
     <!-- newsletter section end -->
   
     <contact-view/>
   </div>
</template>

<script>
import ContactView from './ContactView.vue'

export default {
  name: 'HomeView',
  components: {
    ContactView
  },
  data() {
    return{
      choose_data: [
        { id: 1, count: '12004' , title: 'Our clients'},
        { id: 2, count: '10004' ,title: 'Happy clients' },
        { id: 3, count: '804' ,title: 'Supports' },
        { id: 4, count: '905' , title: 'Our clients'}
      ]
    }
  }
};
</script>