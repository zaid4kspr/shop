import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'shop';
  scripts = [
    "./../assets/js/modernizr.js",
    "./../assets/js/jquery-1.11.3.min.js",
    "./../assets/js/bootstrap.min.js",
    "./../assets/js/own-menu.js",
    "./../assets/js/jquery.lighter.js",
    "./../assets/js/owl.carousel.min.js",
    "./../assets/rs-plugin/js/jquery.tp.t.min.js",
    "./../assets/rs-plugin/js/jquery.tp.min.js",
    "./../assets/js/main.js"
  ]
  constructor() {
    // this.loadScript()
  }
  // loading external script
  public loadScript() {
    this.scripts.forEach(url => {
      console.log('preparing to load...')
      let node = document.createElement('script');
      node.src = url;
      node.type = 'text/javascript';
      node.async = true;
      node.charset = 'utf-8';
      document.getElementsByTagName('head')[0].appendChild(node);
    });
  }
}