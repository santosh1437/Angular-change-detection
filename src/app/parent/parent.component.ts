import { Component } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  parentData: string = 'Initial Parent Data';

  constructor(private appService: AppService) {}

  updateParentData() {
    this.parentData = 'Updated Parent Data';
  }

  updateServiceData() {
    this.appService.setData('Service Data from Parent');
  }
}
