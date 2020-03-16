import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { ActivatedRoute } from '@angular/router';
import { UserInfosService } from 'src/app/user-infos.service';

@Component({
  selector: 'app-list-users-with-image',
  templateUrl: './list-users-with-image.component.html',
  styleUrls: ['./list-users-with-image.component.scss']
})
export class ListUsersWithImageComponent implements OnInit {

  user: any = {};
  userImage: any = {};

  constructor(private route: ActivatedRoute, private userInfosService: UserInfosService) { }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
          event.container.data,
          event.previousIndex,
          event.currentIndex);
    }
  }

  

  ngOnInit() {
    this.route.params.subscribe(() => {
      this.userInfosService
        .getUserImage()
        .subscribe((data) => {
          console.log(data);
          this.userImage = data;
      });
    });

    this.route.params.subscribe(() => {
      this.userInfosService
        .getUserInfos()
        .subscribe((data) => {
          console.log(data);
          this.user = data;
      });
    });
  }
}