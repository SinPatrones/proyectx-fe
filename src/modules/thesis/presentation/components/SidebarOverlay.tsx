'use client';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export default function SidebarOverlay({ isOpen, onClose }: Props) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-20 bg-black/50 md:hidden"
      onClick={onClose}
      aria-hidden="true"
    />
  );
}
