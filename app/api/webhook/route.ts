import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const authToken = request.headers.get('asaas-access-token');
    if (!authToken || authToken !== process.env.ASAAS_SECRET_TOKEN) {
      return NextResponse.json({ error: 'Não autorizado' }, { status: 401 });
    }

    const body = await request.json();
    const { event, payment } = body;

    if (event === 'PAYMENT_RECEIVED' || event === 'PAYMENT_CONFIRMED') {
      const customerEmail = payment.customerStatus?.email || payment.email;
      const customerName = payment.customerStatus?.name || 'Cliente';
      const appLink = process.env.NEXT_PUBLIC_APP_LINK || '#';

      if (!customerEmail) {
        return NextResponse.json({ error: 'E-mail não encontrado' }, { status: 400 });
      }

      await resend.emails.send({
        from: 'Suporte Raren <onboarding@resend.dev>',
        to: customerEmail,
        subject: '🎉 Seu acesso ao Raren Proposta chegou!',
        html: `
          <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e5e7eb; border-radius: 8px;">
            <h2>Olá, ${customerName}!</h2>
            <p>Seu pagamento foi confirmado com sucesso.</p>
            <p>Clique no botão abaixo para acessar a ferramenta:</p>
            <div style="margin: 30px 0; text-align: center;">
              <a href="${appLink}" style="background-color: #2563eb; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: bold; display: inline-block;">
                Acessar o Raren Proposta
              </a>
            </div>
          </div>
        `
      });

      return NextResponse.json({ message: 'E-mail enviado!' }, { status: 200 });
    }

    return NextResponse.json({ message: 'Evento ignorado com sucesso.' }, { status: 200 });

  } catch (error: any) {
    return NextResponse.json({ error: 'Erro interno' }, { status: 500 });
  }
}
