'use client';
import { useState } from 'react';
import { FORMSPREE_ENDPOINT } from '@/lib/constants';

export default function ContactForm({ locale }: { locale: string }) {
  const t = (ja: string, en: string) => locale === 'ja' ? ja : en;
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('sending');
    const form = e.currentTarget;
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' },
      });
      if (res.ok) { setStatus('success'); form.reset(); }
      else setStatus('error');
    } catch {
      setStatus('error');
    }
  }

  if (status === 'success') {
    return (
      <div className="text-center py-12 px-6">
        <p className="text-3xl mb-4">✓</p>
        <p className="font-mono text-[11px] tracking-[3px] text-stitch uppercase mb-3">
          {t('送信完了', 'Message Sent')}
        </p>
        <p className="text-sm text-fade/80 font-light leading-relaxed">
          {t(
            'お問い合わせいただきありがとうございます。通常2〜5営業日以内にご返信いたします。',
            'Thank you for your message. We typically respond within 2–5 business days.'
          )}
        </p>
      </div>
    );
  }

  const fieldClass = 'w-full bg-[#0a1423]/60 border border-stitch/20 rounded px-3.5 py-3 text-[#f0ebe0] text-sm font-light outline-none focus:border-stitch/50 transition-colors';
  const labelClass = 'font-mono text-[9px] tracking-[2px] text-stitch uppercase block mb-2';

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div>
        <label htmlFor="name" className={labelClass}>{t('お名前', 'Name')}</label>
        <input id="name" name="name" type="text" required
          placeholder={t('山田 太郎', 'John Doe')}
          className={fieldClass} />
      </div>

      <div>
        <label htmlFor="email" className={labelClass}>{t('メールアドレス', 'Email')}</label>
        <input id="email" name="email" type="email" required
          placeholder="you@example.com"
          className={fieldClass} />
      </div>

      <div>
        <label htmlFor="subject" className={labelClass}>{t('件名', 'Subject')}</label>
        <input id="subject" name="subject" type="text" required
          placeholder={t('鑑定結果についての質問', 'Question about identification result')}
          className={fieldClass} />
      </div>

      <div>
        <label htmlFor="message" className={labelClass}>{t('お問い合わせ内容', 'Message')}</label>
        <textarea id="message" name="message" required rows={6}
          placeholder={t('ご質問・ご意見をご記入ください。', 'Please describe your question or feedback.')}
          className={`${fieldClass} resize-y leading-relaxed`} />
      </div>

      {status === 'error' && (
        <p className="text-sm text-rust font-light">
          {t('送信に失敗しました。時間をおいて再度お試しください。', 'Sending failed. Please try again later.')}
        </p>
      )}

      <button type="submit" disabled={status === 'sending'}
        className="self-start font-mono text-xs tracking-[3px] uppercase bg-rust text-white px-8 py-4 rounded hover:bg-red-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors">
        {status === 'sending' ? t('送信中...', 'Sending...') : t('送信する', 'Send Message')}
      </button>
    </form>
  );
}
