import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-paginate-component',
  templateUrl: './paginate-component.component.html',
  styleUrls: ['./paginate-component.component.css']
})
export class PaginateComponentComponent implements OnInit {
  @Input() totalItems: number = 0; 
  @Input() currentPage: number = 1; 
  @Input() itemsPerPage: number = 6;
  @Output() pageChange: EventEmitter<number> = new EventEmitter();
  
  totalPages!: number;
  pages: number[] = [];

  constructor() { }

  ngOnInit(): void {
    this.calculateTotalPages();
    this.generatePageNumbers();
  }

  private calculateTotalPages(): void {
    this.totalPages = Math.ceil(this.totalItems / this.itemsPerPage);
  }

  private generatePageNumbers(): void {
    this.pages = Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }

  onPageChange(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.pageChange.emit(page);
    }
  }
}
