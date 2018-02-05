import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-single',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.css']
})
export class SingleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
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
                            date: {
                                required: true,
                                rangelength: [7, 255]
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
                            date: {
                                required: "The *Date field is required!",
                                rangelength: "The *Date must be between 7 and 255 characters!"
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
                });
  }

}
