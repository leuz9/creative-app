import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { ActivatedRoute } from '@angular/router';
import { UserInfosService } from 'src/app/user-infos.service';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss'],
})
export class ListUsersComponent {
  

  
  user: any = {};

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
    this.route.params.subscribe(params => {
      this.userInfosService
        .getUserInfos()
        .subscribe((data) => {
          console.log(data);
          this.user = data;
      });
    });
  }
}
