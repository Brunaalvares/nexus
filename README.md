# Nexus Coupé

Landing page do Nexus Coupé, empreendimento de uso misto da Ergus Engenharia no Renascença, em São Luís. A página apresenta, numa única narrativa, o Open Design, o On Residence, o Lead Office e o Nexus Mall, com plantas, galeria e contato de Marcelo Alvares Imóveis.

Valores e disponibilidade não são publicados. Eles entram na conversa comercial.

## Como rodar

```bash
npm install
npm run dev
```

O servidor local sobe em [http://127.0.0.1:4317](http://127.0.0.1:4317).

## Leads

O formulário envia `POST /api/leads`. O registro acontece, nesta ordem de disponibilidade:

- Banco Postgres, quando `DATABASE_URL` existe.
- Arquivo local `data/leads.jsonl`, ignorado pelo git.
- Webhook JSON, quando `LEAD_WEBHOOK_URL` existe. Use essa URL para ligar o formulário ao CRM (RD Station, CV, Make ou o sistema da imobiliária).

O WhatsApp de Marcelo Alvares lê `WHATSAPP_E164` (somente dígitos, com DDI, por exemplo `5598988880000`). Sem essa variável, a página mantém o formulário e omite o link direto.

## O que a página usa

- Perspectivas e plantas humanizadas do material oficial do empreendimento.
- Metragens da tabela comercial de setembro de 2026 para residencial e escritórios.
- Áreas de loja da prancha do Nexus Mall (térreo + mezanino).
- Endereço confirmado na implantação e na cobertura da obra: Avenida Coronel Colares Moreira, Renascença. O mapa mostra a avenida. O número do lote fica para o atendimento.

As pranchas da fase de reserva grafam algumas áreas anteriores. Quando isso acontece, a ficha da planta explica a diferença e mostra a metragem de setembro de 2026.
