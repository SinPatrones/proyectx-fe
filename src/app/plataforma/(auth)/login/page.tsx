import type { Metadata } from 'next';
import LoginForm from '@/modules/authentication/presentation/components/LoginForm';

export const metadata: Metadata = {
  title: 'Iniciar sesión | PROYECT-X',
};

export default function StudentLoginPage() {
  return (
    <div className="flex flex-col items-center gap-8">
      {/* Logo */}
      <h1 className="text-4xl font-black tracking-tighter leading-none select-none">
        <span className="text-brand-red">PROYECT-</span>
        <span className="text-brand-green">X</span>
      </h1>

      <div className="w-full">
        <LoginForm variant="student" />
      </div>
    </div>
  );
}
