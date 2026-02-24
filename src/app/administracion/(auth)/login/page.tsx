import type { Metadata } from 'next';
import LoginForm from '@/modules/authentication/presentation/components/LoginForm';

export const metadata: Metadata = {
  title: 'Acceso administrativo | PROYECT-X',
};

export default function AdminLoginPage() {
  return (
    <div className="flex flex-col items-center gap-8">
      {/* Logo + subtitle */}
      <div className="flex flex-col items-center gap-1.5">
        <h1 className="text-4xl font-black tracking-tighter leading-none select-none">
          <span className="text-brand-red">PROYECT-</span>
          <span className="text-brand-green">X</span>
        </h1>
        <p className="text-xs text-ink-faint uppercase tracking-widest">
          Panel administrativo
        </p>
      </div>

      <div className="w-full">
        <LoginForm variant="admin" />
      </div>
    </div>
  );
}
