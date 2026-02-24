'use client';

import PasswordInput from './PasswordInput';

type Variant = 'student' | 'admin';

interface LoginFormProps {
  variant: Variant;
}

export default function LoginForm({ variant }: LoginFormProps) {
  const isAdmin = variant === 'admin';

  const accentBtn = isAdmin
    ? 'bg-brand-red hover:bg-brand-red-dark'
    : 'bg-brand-green hover:bg-brand-green-dark';

  const accentBar = isAdmin ? 'bg-brand-red' : 'bg-brand-green';

  const accentRing = isAdmin
    ? 'focus:ring-brand-red/30'
    : 'focus:ring-brand-green/30';

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    console.log('Login intent:', variant, Object.fromEntries(formData));
  }

  return (
    <div className="bg-surface border border-border rounded-xl overflow-hidden shadow-xl">
      {/* Top accent bar */}
      <div className={`h-[3px] w-full ${accentBar}`} />

      <div className="p-6 flex flex-col gap-5">
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {/* Email field */}
          <div className="flex flex-col gap-1.5">
            <label htmlFor="email" className="text-sm font-medium text-ink-soft">
              Correo electrónico
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              placeholder="tu@correo.com"
              className={`w-full px-3 py-2.5 bg-surface-2 border border-border rounded-lg text-ink placeholder:text-ink-faint text-sm outline-none focus:ring-2 focus:border-transparent transition-all ${accentRing}`}
            />
          </div>

          {/* Password field */}
          <div className="flex flex-col gap-1.5">
            <label htmlFor="password" className="text-sm font-medium text-ink-soft">
              Contraseña
            </label>
            <PasswordInput id="password" accentRing={accentRing} />
          </div>

          {/* Forgot password */}
          <div className="flex justify-end -mt-1">
            <a
              href="#"
              className="text-xs text-ink-faint hover:text-ink-soft transition-colors"
            >
              ¿Olvidaste tu contraseña?
            </a>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className={`w-full py-2.5 rounded-lg text-sm font-semibold text-white transition-colors ${accentBtn}`}
          >
            Iniciar sesión
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center gap-3">
          <div className="flex-1 h-px bg-border" />
          <span className="text-xs text-ink-faint">o continúa con</span>
          <div className="flex-1 h-px bg-border" />
        </div>

        {/* Google OAuth */}
        <button
          type="button"
          onClick={() => console.log('TODO: Google OAuth')}
          className="w-full flex items-center justify-center gap-2.5 py-2.5 bg-surface-2 hover:bg-surface-3 border border-border rounded-lg text-sm font-medium text-ink transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 48 48">
            <path
              fill="#EA4335"
              d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
            />
            <path
              fill="#4285F4"
              d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
            />
            <path
              fill="#FBBC05"
              d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
            />
            <path
              fill="#34A853"
              d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
            />
          </svg>
          Continuar con Google
        </button>
      </div>
    </div>
  );
}
