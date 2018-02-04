import { Component, OnInit } from '@angular/core';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
declare var $:any;

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css']
})
export class AsideComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    function skill() {
            var win = $(window).innerHeight();
            var scroll = $(window).scrollTop();
            $('.skill').each(function () {
                var position = $(this).offset().top;
                var value = $(this).attr('data-skill');
                if (position < win + scroll - 10) {
                    $(this).find('.achieviment').css('width', value + '%');
                }
            });
        }
        skill();
        $(window).scroll(function () {
            skill();
        });

  }

}
