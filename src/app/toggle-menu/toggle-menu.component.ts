import { Component, OnInit } from '@angular/core';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

@Component({
  selector: 'app-toggle-menu',
  templateUrl: './toggle-menu.component.html',
  styleUrls: ['./toggle-menu.component.css']
})
export class ToggleMenuComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('.toggle-menu').click(function () {
        $('.menu-overlay').fadeIn();
        $('.menu').addClass('active');
        $('body').addClass('inactive');
    });

    $('.menu-overlay').click(function () {
        $(this).fadeOut();
        $('.menu').removeClass('active');
        $('body').removeClass('inactive');
    });
  }

}
