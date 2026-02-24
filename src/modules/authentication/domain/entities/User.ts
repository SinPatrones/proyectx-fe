import type { UserRole } from '../value-objects/UserRole';

export interface User {
  id: string;
  email: string;
  name: string;
  role: UserRole;
}
