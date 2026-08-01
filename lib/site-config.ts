// =========================================================================
// CONFIGURAÇÃO CENTRAL DO SITE
// Edite os valores abaixo para atualizar informações em toda a landing page.
// =========================================================================

export const siteConfig = {
  doctorName: "Dr. Diego Maia",
  specialty: "Nutrologia | Obesidade | Transtornos Alimentares",
  crm: "CRM 15522",

  // Número de WhatsApp no formato internacional, apenas dígitos.
  whatsappNumber: "5585985243974",
  whatsappDefaultMessage:
    "Olá, Dr. Diego! Gostaria de agendar uma consulta.",

  instagram: "https://instagram.com/dr.diegormaia",
  phoneDisplay: "(85) 98524-3974",

  // Locais de atendimento
  locations: [
    {
      name: "Uno Medical & Office",
      address: "Av. Pontes Vieira, 2340",
      complement: "Sala 805",
      neighborhood: "Dionísio Torres",
    },
    {
      name: "Duets Office - Torre Sul",
      address: "R. Dr. Gilberto Studart, 55",
      complement: "Sala 1710",
      neighborhood: "Cocó",
    },
  ],

  siteUrl: "https://dr-diego-maia.vercel.app",
};

export function getWhatsAppLink(message?: string) {
  const text = encodeURIComponent(message ?? siteConfig.whatsappDefaultMessage);
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${text}`;
}
