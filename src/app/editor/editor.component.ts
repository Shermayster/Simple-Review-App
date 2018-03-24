import { Component, Output, EventEmitter, Input, OnChanges } from '@angular/core';

import * as igmGen from '@dudadev/random-img';
import { CommentData } from './shared/comment.model';
@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnChanges {
  @Input() editComment: CommentData;
  nameValue = '';
  commentValue = '';
  edit = false;
  @Output() addComment = new EventEmitter();
  @Output() updateComment = new EventEmitter();
  constructor() { }

  ngOnChanges(changes) {
    console.log(changes);
    if (changes.editComment.currentValue) {
      this.nameValue = this.editComment.name;
      this.commentValue = this.editComment.comment;
      this.edit = true;
    }
  }

  onSubmit(form) {
    if (this.nameValue && this.commentValue && !this.edit) {
      this.createComment(form);
    } else if (this.edit) {
     this.createUpdateComment(form);
    }
  }

  private createComment(form) {
    igmGen().then(imgUrl => {
      const newComment: CommentData = {
        name: this.nameValue,
        comment: this.commentValue,
        imgUrl: imgUrl
      };
      this.addComment.emit(newComment);
      form.resetForm();
    });
  }

  private createUpdateComment(form) {
    this.edit = false;
    const newComment: CommentData = {
      name: this.nameValue,
      comment: this.commentValue,
      imgUrl: this.editComment.imgUrl
    };
    this.updateComment.emit(newComment);
    form.resetForm();
  }

}
