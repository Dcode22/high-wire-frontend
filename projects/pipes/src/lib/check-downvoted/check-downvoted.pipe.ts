import { Pipe, PipeTransform } from '@angular/core';
import { Article, User } from 'projects/data-models/src/public-api';

@Pipe({
  name: 'checkDownvoted',
  standalone: true
})
export class CheckDownvotedPipe implements PipeTransform {

  transform(article: Article | null | undefined, user: User | null | undefined): unknown {
    if(!article || !user){
      return false
    } else return user.articleDownvotes?.includes(article._id);
  }

}
