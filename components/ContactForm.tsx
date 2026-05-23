'use client';
import { useState } from 'react';

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mjgzooqa';

export default function ContactForm({ locale }: { locale: string }) {
  const t = (ja: string, en: string) => locale === 'ja' ? ja : en;
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('sending');
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });
      if (res.ok) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  }

  const inputStyle: React.CSSProperties = {
    width: '100%',
    background: 'rgba(10,20,35,0.6)',
    border: '1px solid rgba(232,213,163,0.2)',
    borderRadius: '4px',
    padding: '12px 14px',
    color: '#f0ebe0',
    fontSize: '14px',
    fontFamily: 'inherit',
    outline: 'none',
    boxSizing: 'border-box',
  };

  const labelStyle: React.CSSProperties = {
    fontFamily: 'DM Mono, monospace',
    fontSize: '9px',
    letterSpacing: '2px',
    color: '#e8d5a3',
    textTransform: 'uppercase',
    display: 'block',
    marginBottom: '8px',
  };

  if (status === 'success') {
    return (
      <div style={{ textAlign: 'center', padding: '48px 24px' }}>
        <p style={{ fontSize: '32px', marginBottom: '16px' }}>✓</p>
        <p style={{ fontFamily: 'DM Mono, monospace', fontSize: '11px', letterSpacing: '3px', color: '#e8d5a3', textTransform: 'uppercase', marginBottom: '12px' }}>
          {t('送信完了', 'Message Sent')}
        </p>
        <p style={{ fontSize: '14px', color: 'rgba(184,204,228,0.8)', fontWeight: 300, lineHeight: 1.8 }}>
          {t('お問い合わせいただきありがとうございます。通常2〜5営業日以内にご返信いたします。', 'Thank you for your message. We typically respond within 2–5 business days.')}
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <div>
        <label htmlFor="name" style={labelStyle}>{t('お名前', 'Name')}</label>
        <input
          id="name"
          name="name"
          type="text"
          required
          placeholder={t('山田 太郎', 'John Doe')}
          style={inputStyle}
        />
      </div>

      <div>
        <label htmlFor="email" style={labelStyle}>{t('メールアドレス', 'Email')}</label>
        <input
          id="email"
          name="email"
          type="email"
          required
          placeholder="you@example.com"
          style={inputStyle}
        />
      </div>

      <div>
        <label htmlFor="subject" style={labelStyle}>{t('件名', 'Subject')}</label>
        <input
          id="subject"
          name="subject"
          type="text"
          required
          placeholder={t('鑑定結果についての質問', 'Question about identification result')}
          style={inputStyle}
        />
      </div>

      <div>
        <label htmlFor="message" style={labelStyle}>{t('お問い合わせ内容', 'Message')}</label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          placeholder={t('ご質問・ご意見をご記入ください。', 'Please describe your question or feedback.')}
          style={{ ...inputStyle, resize: 'vertical', lineHeight: 1.7 }}
        />
      </div>

      {status === 'error' && (
        <p style={{ fontSize: '13px', color: '#e74c3c', fontWeight: 300 }}>
          {t('送信に失敗しました。時間をおいて再度お試しください。', 'Sending failed. Please try again later.')}
        </p>
      )}

      <button
        type="submit"
        disabled={status === 'sending'}
        style={{
          fontFamily: 'DM Mono, monospace',
          fontSize: '12px',
          letterSpacing: '3px',
          textTransform: 'uppercase',
          background: status === 'sending' ? 'rgba(192,57,43,0.5)' : '#c0392b',
          color: 'white',
          border: 'none',
          padding: '16px 32px',
          borderRadius: '4px',
          cursor: status === 'sending' ? 'not-allowed' : 'pointer',
          alignSelf: 'flex-start',
          transition: 'background 0.2s',
        }}
      >
        {status === 'sending' ? t('送信中...', 'Sending...') : t('送信する', 'Send Message')}
      </button>
    </form>
  );
}
