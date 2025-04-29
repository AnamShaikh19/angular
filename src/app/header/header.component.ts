import { Component, AfterViewInit } from '@angular/core';

declare var bootstrap: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements AfterViewInit {

  ngAfterViewInit(): void {
    const navbarCollapse = document.getElementById('navbarResponsive');

    // Jab koi nav-link pe click hoga toh menu band ho jayega
    document.querySelectorAll('.nav-link').forEach(element => {
      element.addEventListener('click', () => {
        if (navbarCollapse?.classList.contains('show')) {
          const collapse = new bootstrap.Collapse(navbarCollapse!, { toggle: false });
          collapse.hide();
        }
      });
    });
  }
}
