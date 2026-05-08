import IdentifyClient from './IdentifyClient';

export default async function IdentifyPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return <IdentifyClient locale={locale} />;
}
