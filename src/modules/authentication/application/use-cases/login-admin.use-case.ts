import type { IAuthRepository } from '../../domain/ports/IAuthRepository';
import type { User } from '../../domain/entities/User';

export async function loginAdminUseCase(
  repository: IAuthRepository,
  credentials: { email: string; password: string },
): Promise<User> {
  return repository.login({ ...credentials, role: 'admin' });
}
