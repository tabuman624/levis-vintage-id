'use client';
import IdentifyClient from '../identify/IdentifyClient';

export default function JacketIdentifyClient({ locale }: { locale: string }) {
  return <IdentifyClient locale={locale} fixedType="jacket" />;
}
