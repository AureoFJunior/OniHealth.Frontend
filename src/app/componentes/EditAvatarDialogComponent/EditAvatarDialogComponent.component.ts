import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { User } from '../user/user.model';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-EditAvatarDialogComponent',
  templateUrl: './EditAvatarDialogComponent.component.html',
  styleUrls: ['./EditAvatarDialogComponent.component.css']
})
export class EditAvatarDialogComponentComponent implements OnInit {

  selectedImage!: File;

  constructor(public dialogRef: MatDialogRef<EditAvatarDialogComponentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { user: User }, private userService: UserService) { }

  ngOnInit(): void {
  }

  onFileSelected(event: any):void {
    this.selectedImage = event.target.files[0];
  }

  onSaveClick() {
    this.dialogRef.close({ image: this.selectedImage });

  }
}
