export function whatsappHref() {
  const digits = (process.env.WHATSAPP_E164 ?? "").replace(/\D/g, "");
  if (digits.length < 10 || digits.length > 15) return null;
  const text = encodeURIComponent(
    "Olá, Marcelo. Quero conhecer o Nexus Coupé.",
  );
  return `https://wa.me/${digits}?text=${text}`;
}
