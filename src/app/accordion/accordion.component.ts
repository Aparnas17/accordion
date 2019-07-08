import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss']
})
export class AccordionComponent implements OnInit {

  panleExpanded = true;
  items: string [];
  constructor(private httpService: HttpClient) { }

  ngOnInit() {
    this.httpService.get('./assets/json/faqs.json').subscribe(
      data => {
        this.items = data as string [];	 // FILL THE ARRAY WITH DATA.
      },
      (err: HttpErrorResponse) => {
        console.log (err.message);
      }
    );
  }
  
}
