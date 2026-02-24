import type { Metadata } from 'next';
import { getTemplates } from '@/modules/thesis/application/use-cases/get-templates.use-case';
import CreateSection from '@/modules/thesis/presentation/components/CreateSection';

export const metadata: Metadata = {
  title: 'Plataforma | PROYECT-X',
};

export default async function DashboardPage() {
  const templates = await getTemplates();

  return <CreateSection templates={templates} studentName="Juan" />;
}
