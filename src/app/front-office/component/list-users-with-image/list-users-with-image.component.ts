import { Component, OnInit, OnDestroy } from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem
} from '@angular/cdk/drag-drop';
import { ActivatedRoute } from '@angular/router';
import { UserInfosService } from 'src/app/user-infos.service';
import { SubSink } from 'subsink';

@Component({
  selector: 'app-list-users-with-image',
  templateUrl: './list-users-with-image.component.html',
  styleUrls: ['./list-users-with-image.component.scss']
})
export class ListUsersWithImageComponent implements OnInit, OnDestroy {
  users: any = [];
  userImages: any = [];

  private subs = new SubSink();

  constructor(
    private route: ActivatedRoute,
    private userInfosService: UserInfosService
  ) {}

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }

  onGetUserImage() {
    this.subs.sink = this.userInfosService.getUserImage().subscribe(data => {
      for (let i = 0; i < 10; i++) {
        this.userImages.push(data[i]);
      }
      console.log(this.userImages);
    });
  }

  onGetUserInfos() {
    this.subs.sink = this.userInfosService.getUserInfos().subscribe(data => {
      console.log(data);
      this.users = data;
    });
  }

  ngOnInit() {
    this.onGetUserImage();

    this.onGetUserInfos();
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }
}
