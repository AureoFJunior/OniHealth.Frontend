import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ThemeService } from 'src/app/services/theme/theme.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  backgroundImage: string = '';

  constructor(private router: Router, private route: ActivatedRoute, private themeService: ThemeService) { }

  ngOnInit(): void {
    this.themeService.backgroundImage.subscribe(image => this.backgroundImage = image);
  }

}
