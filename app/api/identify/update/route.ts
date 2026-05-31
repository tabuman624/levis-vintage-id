import { NextRequest, NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase-server';

export async function POST(req: NextRequest) {
  try {
    const { id, feedback, affiliate_click } = await req.json();
    if (!id) return NextResponse.json({ error: 'Missing id' }, { status: 400 });

    const updates: Record<string, string> = {};
    if (feedback) updates.feedback = feedback;
    if (affiliate_click) updates.affiliate_click = affiliate_click;

    if (Object.keys(updates).length === 0) {
      return NextResponse.json({ error: 'Nothing to update' }, { status: 400 });
    }

    await supabaseAdmin.from('identifications').update(updates).eq('id', id);
    return NextResponse.json({ ok: true });
  } catch (error: any) {
    console.error('Update error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
