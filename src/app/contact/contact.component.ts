import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    /*
    // Map .
                                             // When the user clicks the marker, an info window opens.
                                             function initMap() {
                                                 var uluru1 = {lat: 44.431937, lng: 20.877588};

                                                 var map = new google.maps.Map(document.getElementById('map'), {
                                                     zoom: 16,
                                                     center: uluru1
                                                 });
                                                 var contentString1 = '<div id="content" class="text-center">' +
                                                         '<img  class="img-fluid" style="max-width:260px" src="img/rayhan.png"></img>' +
                                                         '<div id="bodyContent">' +
                                                         '<h2 style="margin-top:10px">Luka Cosic</h2>' +
                                                         '<p>Zike Cosica 3</p>' +
                                                         '<p>Tel:061-14-34-117</p>' +
                                                         '</div>' +
                                                         '</div>';
                                                 var infowindow1 = new google.maps.InfoWindow({
                                                     content: contentString1
                                                 });
                                                 var marker1 = new google.maps.Marker({
                                                     position: uluru1,
                                                     map: map,
                                                     title: 'Luka Cosic',
                                                     animation: google.maps.Animation.DROP
                                                 });
                                                 marker1.addListener('click', function () {
                                                     infowindow1.open(map, marker1);
                                                 });
                                                 marker1.addListener('click', toggleBounce);
                                             }
                                             function toggleBounce() {
                                                 if (marker1.getAnimation() !== null) {
                                                     marker1.setAnimation(null);
                                                 } else {
                                                     marker1.setAnimation(google.maps.Animation.BOUNCE);
                                                 }
                                             }













     $(function () {
      $(".form-contact").validate({
      highlight: function (element) {
          $(element).closest('.form-group').addClass("has-danger");
          $(element).addClass("form-control-danger");
      },
      unhighlight: function (element) {
        $(element).closest('.form-group').removeClass('has-danger').addClass('has-success');
        $(element).removeClass('form-control-danger').addClass('form-control-success');
      },
      rules: {
          name: {
              required: true,
              rangelength: [3, 255]
          },
          email: {
              required: true,
              rangelength: [5, 255],
              email: true
              },
         message: {
              required: true,
              rangelength: [10, 255]
         }

      },
      messages: {
          name: {
             required: "The *Name field is required!",
             rangelength: "The *Name must be between 3 and 255 characters!"
          },
          email: {
             required: "The *Email field is required!",
             rangelength: "The *Email must be between 5 and 255 characters!",
            email: "Please enter a valid email addres!"
          },
          message: {
            required: "The *Message field is required!",
            rangelength: "The *Message must be between 10 and 255 characters!",
            email: "Please enter a valid message!"
          }
      },
      errorElement: 'p',
      errorPlacement: function (error, element) {
          error.appendTo($(element).closest('.form-group').find('.error'));
      }
      });
}); */
}

}
