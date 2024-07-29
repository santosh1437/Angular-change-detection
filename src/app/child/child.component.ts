import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChildComponent {
  @Input() childData: string | undefined;
  childLocalData: string = 'Initial Child Data';

  constructor(private appService: AppService) {}

  updateChildLocalData() {
    this.childLocalData = 'Updated Child Local Data';
  }

  updateServiceData() {
    this.appService.setData('Service Data from Child');
  }
}
