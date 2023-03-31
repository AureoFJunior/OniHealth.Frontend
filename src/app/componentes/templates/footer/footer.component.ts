import { Component, OnInit } from '@angular/core';
import { ThemeService } from 'src/app/services/theme/theme.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  themeClass: string = '';

  constructor(private themeService: ThemeService) {}

  ngOnInit(): void {
    this.themeService.footerTheme$.subscribe(theme => {
      this.themeClass = theme;
    });
  }
}
