// Passthrough layout — auth and dashboard route groups own their own shells
export default function PlatformLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
