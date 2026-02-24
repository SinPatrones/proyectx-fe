import type { User } from '../entities/User';
import type { UserRole } from '../value-objects/UserRole';

export interface LoginCredentials {
  email: string;
  password: string;
  role: UserRole;
}

export interface IAuthRepository {
  login(credentials: LoginCredentials): Promise<User>;
}
