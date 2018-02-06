import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  lat: number = 44.431918;
  lng: number = 20.877753;



  constructor() {



}

  ngOnInit() {
  /*  $(function () {
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
