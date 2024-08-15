import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHelloTrello() {
    return 'My Trello started';
  }
}
