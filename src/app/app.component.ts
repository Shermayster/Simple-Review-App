import { Component } from '@angular/core';
import { CommentData } from './editor/shared/comment.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  commentsList: CommentData[] = [];
  editableComment: CommentData;
  editIndex: number;

  updateCommentsList(newComment: CommentData) {
    if (!this.editableComment) {
      this.commentsList = [... this.commentsList, newComment];
    }
  }

  deleteComment(commentIndex: number) {
    this.commentsList = this.commentsList.filter((comment, index) => index !== commentIndex);
  }

  editComment(commentIndex: number) {
    this.editableComment = this.commentsList[commentIndex];
    this.editIndex = commentIndex;
  }

  editCommentInList(comment: CommentData) {
    this.commentsList[this.editIndex] = comment;
  }
}
