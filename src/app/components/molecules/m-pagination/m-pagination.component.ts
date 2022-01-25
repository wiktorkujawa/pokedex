import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'm-pagination',
  templateUrl: './m-pagination.component.html',
  styleUrls: ['./m-pagination.component.scss']
})
export class MPaginationComponent implements OnInit {
  @Output() pageChanged = new EventEmitter();

  @Input('page') page: number = 1;
  @Input('offset') offset: number = 0;
  @Input('limit') limit: number = 10;
  // offset: number = 0;
  // limit: number = 10;

  nextPage(): void {
    this.page++;
    this.offset+=this.limit
    this.pageChanged.emit({offset: this.offset, limit:this.limit});
  }

  prevPage(): void {
    this.page--;
    this.offset-=this.limit
    this.pageChanged.emit({offset: this.offset, limit:this.limit});
  }

  changePage(page: any): void {
    this.page = page
    this.offset = this.limit*(this.page-1)
    this.pageChanged.emit({offset: this.offset, limit:this.limit});
  }

  constructor() { }

  ngOnInit(): void {
    this.pageChanged.emit({offset: this.offset, limit:this.limit});
  }

}
