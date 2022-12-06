<template>
    <!-- footer section start -->
    <div class="footer_section layout_padding">
        <div class="container">
        <div class="footer_main">
            <div class="footer_left">
            <h1 class="contact_taital"><span>Contact </span> <img src="../assets/images/icon-2.png"> <span>Us</span></h1>
            </div>
            <div class="footer_left">
            <div class="location_text"><a href="#"><img src="../assets/images/map-icon.png"><span class="padding_left_15">Locations</span></a></div>
            </div>
            <div class="footer_left">
            <div class="location_text"><a href="#"><img src="../assets/images/call-icon.png"><span class="padding_left_15">+71 9876543210</span></a></div>
            </div>
            <div class="footer_left">
            <div class="location_text"><a href="#"><img src="../assets/images/map-icon.png"><span class="padding_left_15">demo@gmail.com</span></a></div>
            </div>
        </div>
        <div class="contact_section">
            <div class="row">
            <div class="col-md-6">
                <div class="mail_section">
                    <form class="form" @submit="onSubmit">
                        <input type="text" class="email_text" v-model="contact.name" placeholder="Name" name="Name" required>
                        <input type="email" class="email_text" v-model="contact.email" placeholder="Email" name="Email" required>
                        <input type="text" class="email_text" v-model="contact.phone" placeholder="Phone Number" name="Phone_no" required pattern="[789][0-9]{9}">
                        <textarea class="massage_text" v-model="contact.message" placeholder="Message" rows="5" id="comment" name="Message"></textarea>
                        <!-- <div class="send_bt"><a href="#">send</a></div> -->
                        <button class="send_bt">Send</button>
                    </form>
                </div>
            </div>
            <div class="col-md-6">
                <div class="map_main">
                <div class="map-responsive">
                    <iframe src="https://www.google.com/maps/embed/v1/place?key=AIzaSyA0s1a7phLN0iaD6-UE7m4qP-z21pH0eSc&q=Eiffel+Tower+Paris+France" width="600" height="280" frameborder="0" style="border:0; width: 100%;" allowfullscreen></iframe>
                </div>
                </div>
                <div class="social_icon">
                <ul>
                    <li><a href="#"><img src="../assets/images/fb-icon1.png"></a></li>
                    <li><a href="#"><img src="../assets/images/twitter-icon1.png"></a></li>
                    <li><a href="#"><img src="../assets/images/linkden-icon1.png"></a></li>
                    <li><a href="#"><img src="../assets/images/instagram-icon1.png"></a></li>
                </ul>
                </div>
            </div>
            </div>
        </div>
        </div>
    </div>
    <!-- footer section end -->
</template>

<script>
export default {
    name: 'ContactComponent',
    props: {
        msg: String,
        newprop: String
    },
    data() {
        return {
            contact: {
                name: '',
                email: '',
                phone: '',
                message: '',
            },
        }
    },

    methods: {
        clearForm() {
            for (let field in this.contact) {
                this.contact[field] = ''
            }
        },
        onSubmit(evt) {
            evt.preventDefault();
            console.log('Name: '+this.contact.name+'\nEmail: '+this.contact.email+'\nPhone: '+this.contact.phone+'\nMessage: '+this.contact.message);
            this.clearForm();
        }
    }
}
</script>
