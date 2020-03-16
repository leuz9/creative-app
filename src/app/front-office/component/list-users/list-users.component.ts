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
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss']
})
export class ListUsersComponent implements OnInit, OnDestroy {
  private subs = new SubSink();

  users: any = [];

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

  onGetUserInfos() {
    this.subs.sink = this.userInfosService.getUserInfos().subscribe(data => {
      console.log(data);
      this.users = data;
    });
  }

  ngOnInit() {
    this.onGetUserInfos();
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }
}
