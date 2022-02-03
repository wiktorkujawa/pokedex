import { ChangeDetectionStrategy, Component, DoCheck, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'm-pagination',
  templateUrl: './m-pagination.component.html',
  styleUrls: ['./m-pagination.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MPaginationComponent implements OnInit {
  @Output() pageChanged = new EventEmitter();

  @Input('page') page: number = 1;
  @Input('offset') offset: number = 0;
  @Input('limit') limit: number = 10;
  @Input('selectLimit')  selectLimit: number[] = [5, 10, 20, 50]
  
 

  changeLimit(limit: any) {
    this.limit = limit.value
    this.pageChanged.emit({offset: this.offset, limit:this.limit});
  }

  nextPage(iterator: number): void {
    this.page+=iterator;
    this.offset+=this.limit*iterator
    this.pageChanged.emit({offset: this.offset, limit:this.limit});
  }

  prevPage(iterator: number): void {
    this.page-=iterator;
    this.offset-=this.limit*iterator
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
