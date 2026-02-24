// Centered shell for auth pages (login, register, etc.)
export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-base flex items-center justify-center px-4 py-12 relative overflow-hidden">
      {/* Decorative glow top — red */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-brand-red/8 rounded-full blur-3xl pointer-events-none" />

      {/* Decorative glow bottom — green */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[400px] h-[200px] bg-brand-green/8 rounded-full blur-3xl pointer-events-none" />

      {/* Inner content wrapper */}
      <div className="relative z-10 w-full max-w-sm">
        {children}
      </div>
    </div>
  );
}
