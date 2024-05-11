import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from './user.model';
import { UserRepository } from './user.repository';

@Injectable({
  providedIn: 'root',
})
export class GetUserUseCase {
  constructor(private userRepository: UserRepository) {}

  execute(userId: string): Observable<User | null> {
    return this.userRepository.getUserById(userId);
  }
}
