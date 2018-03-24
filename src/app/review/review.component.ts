import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CommentData } from '../editor/shared/comment.model';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {
  @Input() reviewList: CommentData[] = [];
  @Output() deleteComment = new EventEmitter();
  @Output() editComment = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  onDelete(reviewIndex: number) {
    this.deleteComment.emit(reviewIndex);
  }

  onEdit(reviewIndex: number) {
    this.editComment.emit(reviewIndex);
  }

}
