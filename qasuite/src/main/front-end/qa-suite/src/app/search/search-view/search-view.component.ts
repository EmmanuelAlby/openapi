import { Component, OnInit } from '@angular/core';
import { QaSuiteService } from '../../service/suite.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-search-view',
  templateUrl: './search-view.component.html',
  styleUrls: ['./search-view.component.scss'],
  // providers:[QaSuiteService],
})
export class SearchViewComponent implements OnInit {
  response: any;
  profileForm: FormGroup;
  name: FormControl;

  constructor(private qaService: QaSuiteService) { }

  ngOnInit() {
    this.profileForm = new FormGroup({
      project: new FormControl('SELECT PROJECT'),
      browser: new FormControl('SELECT BROWSER'),
    }); 
   
  }

  triggerJob() {
    console.log(this.profileForm.get('project').value);
    console.log(this.profileForm.get('browser').value);
    const req = {
      'project' : this.profileForm.get('project').value,
      'browser' : this.profileForm.get('browser').value
    };
    this.qaService.searchSuite(req).subscribe(res => {
      this.response = res;
    })
  }

}
