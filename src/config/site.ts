// Datos del negocio. Es una plantilla: todo lo marcado como PLACEHOLDER se reemplaza con los datos del cliente.

export const site = {
  // PLACEHOLDER
  name: "Tu Dietética",
  // PLACEHOLDER
  legalName: "Tu Dietética",
  // PLACEHOLDER
  tagline: "Lo natural, cerca tuyo.",
  description:
    "Almacén natural y dietética. Frutos secos, semillas, cereales, yerba y más, a granel y envasados. Armá tu pedido y envialo por WhatsApp.",
  // Muestra el aviso de catálogo de demostración.
  demoMode: true,

  // PLACEHOLDER
  email: "contacto@ejemplo.com",

  social: {
    // PLACEHOLDER
    instagram: "https://www.instagram.com/",
    // PLACEHOLDER
    facebook: "https://www.facebook.com/",
  },

  // Una o más sucursales: cada una aparece en la portada, en contacto, en el carrito y en el botón de WhatsApp.
  branches: [
    {
      id: "sucursal-centro",
      // PLACEHOLDER
      name: "Sucursal Centro",
      // PLACEHOLDER: WhatsApp en formato internacional sin "+", espacios ni guiones.
      whatsapp: "5490000000001",
      // PLACEHOLDER
      address: "Dirección a confirmar",
      city: "Ciudad, Provincia",
      hours: "Lunes a sábado, horario a confirmar",
      // PLACEHOLDER: link de Google Maps ("Compartir" > "Enviar un vínculo").
      mapsUrl: "",
      // PLACEHOLDER: src del iframe ("Compartir" > "Insertar un mapa"). Vacío muestra un recuadro en su lugar.
      mapEmbed: "",
    },
    {
      id: "sucursal-norte",
      // PLACEHOLDER
      name: "Sucursal Norte",
      // PLACEHOLDER: WhatsApp en formato internacional sin "+", espacios ni guiones.
      whatsapp: "5490000000002",
      // PLACEHOLDER
      address: "Dirección a confirmar",
      city: "Ciudad, Provincia",
      hours: "Lunes a sábado, horario a confirmar",
      mapsUrl: "",
      mapEmbed: "",
    },
  ],

  // PLACEHOLDER
  deliveryZones: ["Zona de envío a confirmar"],
  // PLACEHOLDER: en pesos. 0 desactiva el mínimo.
  minimumOrder: 0,
  // PLACEHOLDER
  paymentMethods: ["Efectivo", "Transferencia"],
} as const;

export type Branch = (typeof site.branches)[number];
