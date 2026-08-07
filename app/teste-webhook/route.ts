import { NextResponse } from 'next/server';

export async function GET() {
  try {
    // Simula o Asaas ligando para o seu próprio webhook oficial localmente
    const resposta = await fetch('https://vercel.app', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'asaas-access-token': process.env.ASAAS_SECRET_TOKEN || '',
      },
      body: JSON.stringify({
        event: 'PAYMENT_RECEIVED',
        payment: {
          email: process.env.TEST_CUSTOMER_EMAIL || 'raren.adm@gmail.com', // Envia para o seu e-mail
          customerStatus: {
            name: 'Cliente Teste Raren',
            email: process.env.TEST_CUSTOMER_EMAIL || 'raren.adm@gmail.com'
          }
        }
      })
    });

    const dados = await resposta.json();
    return NextResponse.json({ 
      mensagem: 'Simulação enviada para o Webhook com sucesso!', 
      resposta_do_webhook: dados 
    });

  } catch (error: any) {
    return NextResponse.json({ erro: 'Falha ao simular', detalhes: error.message }, { status: 500 });
  }
}
