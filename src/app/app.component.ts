import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ecopower';

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    this.checkScroll();
  }

  ngOnInit() {
    this.checkScroll();
  }

  checkScroll() {
    const elements = document.querySelectorAll('.scroll-animate');
    elements.forEach(element => {
      const rect = element.getBoundingClientRect();
      if(rect.top < window.innerHeight && rect.bottom > 0) {
        element.classList.add('visible');
      } else {
        element.classList.remove('visible');
      }
    });
  }
}
