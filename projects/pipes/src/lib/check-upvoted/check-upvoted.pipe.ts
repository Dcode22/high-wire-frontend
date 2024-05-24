import { Pipe, PipeTransform } from '@angular/core';
import { Article, User } from 'projects/data-models/src/public-api';

@Pipe({
  name: 'checkUpvoted',
  standalone: true
})
export class CheckUpvotedPipe implements PipeTransform {

  transform(article: Article | null | undefined, user: User | null | undefined): unknown {
    if(!article || !user){
      return false
    } else return user.articleUpvotes?.includes(article._id);
  }

}
