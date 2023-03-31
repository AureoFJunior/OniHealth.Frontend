import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ThemeService } from 'src/app/services/theme/theme.service';
import { User } from '../../user/user.model';
import { UserService } from '../../user/user.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  user!: User; //propriedade para armazenar os dados do usuário logado
  actualTheme: number = 0;
  backgroundImg: string = "../assets/cppBack.png";
  themeClass: string = '';

  constructor(private router: Router, private route: ActivatedRoute, private userService: UserService, private themeService: ThemeService) {}

  ngOnInit(): void {
    this.userService.isLogged().subscribe((user: User) => {
      this.user = user;
      console.log(user)
    });

    const storedTheme = localStorage.getItem('actualTheme');
    if (storedTheme) {
      this.actualTheme = JSON.parse(storedTheme);
    }

    this.updateTheme();
  }

  updateUser(): void {
    this.userService.update(this.user).subscribe(() => {
      console.log(this.user);
    });
  }

  toggleTheme(): void {
    this.actualTheme = this.actualTheme === 0 ? 1 : 0;

    localStorage.setItem('actualTheme', JSON.stringify(this.actualTheme));

    this.updateTheme();
    this.themeService.setFooterTheme(this.themeClass);
  }

  updateTheme(): void {
    if (this.actualTheme == 0) {
      this.themeClass = 'theme-dark';
      this.backgroundImg = "../assets/cppBack.png";
      this.themeService.setBackgroundImage(this.backgroundImg);
    }
    else if(this.actualTheme == 1){
      this.themeClass = 'theme-light';
      this.backgroundImg = "../assets/cppBackDay.png";
      this.themeService.setBackgroundImage(this.backgroundImg);
    }

    this.themeService.setBackgroundImage(this.backgroundImg);

    const updatedUser: User = {
      ...this.user,
      actualTheme: this.actualTheme
    };
    this.userService.update(updatedUser).subscribe(() => {
      console.log('Tema atualizado');
    });

    const body = document.getElementsByTagName('body')[0];
    body.classList.remove('theme-light', 'theme-dark');
    body.classList.add(this.themeClass);
  }
}
