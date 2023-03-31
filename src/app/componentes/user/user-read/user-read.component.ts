import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../user.model';
import { UserService } from '../user.service';
import { MatDialog } from '@angular/material/dialog';
import { EditAvatarDialogComponentComponent } from '../../EditAvatarDialogComponent/EditAvatarDialogComponent.component';

@Component({
  selector: 'app-user-read',
  templateUrl: './user-read.component.html',
  styleUrls: ['./user-read.component.css']
})
export class UserReadComponent implements OnInit {

  user!: User;
  dataSource = new MatTableDataSource<User>()
  selectedFile!: File;
  constructor(private userService:UserService, private router: Router, private route: ActivatedRoute, private dialog: MatDialog) { }

  ngOnInit() {
    this.userService.isLogged().subscribe((user: User) => {
      this.user = user;
      //variavel = user.profilePicture
      console.log(user)
    })
  }

  openEditAvatarDialog() {
    const dialogRef = this.dialog.open(EditAvatarDialogComponentComponent, {
      width: '400px',
      data: { user: this.user }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (this.selectedFile) {
        this.userService.updateProfilePicture(this.user.id!.toString(), this.selectedFile).subscribe((user: User) => {
          this.user = user;
          console.log('Imagem salva com sucesso:', user.profilePicture);
        }, error => {
          console.log('Ocorreu um erro:', error);
        });
      }
    });
  }

}
