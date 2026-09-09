export const translations = {
  en: {
    nav: {
      home: "Home",
      about: "About Us",
      projects: "Projects",
      corcovado: "Corcovado",
      contact: "Contact",
      bookNow: "Book now",
    },
    footer: {
      tagline:
        "A non-profit sustaining life inside Corcovado National Park, lodging, meals, and ranger support at the Sirena Station.",
      linksTitle: "Explore",
      contactTitle: "Get in touch",
      address: "Sirena Ranger Station, Corcovado National Park, Costa Rica",
      email: "info@adi-corcovado.org",
      phone: "+506 0000 0000",
      rights: "All rights reserved.",
    },
    home: {
      hero: {
        eyebrow: "ADI Corcovado",
        title: "Guardians of Costa Rica's last great wilderness",
        subtitle:
          "We run the lodging, food service, and daily life of the Sirena Ranger Station deep inside Corcovado National Park, so rangers, researchers, and visitors can keep protecting one of the most biodiverse places on Earth.",
        primaryCta: "Support Our Work",
        secondaryCta: "See Our Projects",
        imageAlt: "Aerial view of the Corcovado rainforest canopy",
      },
      intro: {
        eyebrow: "Who we are",
        title: "A non-profit built around one remote outpost",
        body: "ADI Corcovado is the association behind the Sirena Ranger Station, the beating heart of Corcovado National Park. Every meal served, bed made, and repair completed keeps rangers in the field and the park's rainforest, beaches, and wildlife protected for the generations to come.",
        imageAlt: "Volunteers and rangers outside the Sirena Station",
      },
      projects: {
        eyebrow: "Our projects",
        title: "Where your support goes",
        subtitle:
          "From facility upkeep to conservation initiatives, every project keeps the park running for the people who protect it.",
        cta: "View all projects",
        items: [
          {
            title: "Sirena Station Lodging",
            description:
              "Maintaining safe, comfortable housing for park rangers, researchers, and visiting scientists stationed deep in the rainforest.",
            imageAlt: "Sirena Station lodging cabins",

            image: "/images/projects/sirena-station.webp",
          },
          {
            title: "Ranger Food Service",
            description:
              "Running the kitchen and dining hall that feeds the rangers and staff who patrol and protect Corcovado every day.",
            imageAlt: "Dining hall at the Sirena Station",

            image: "/images/projects/food.webp",
          },
          {
            title: "Trail & Facility Upkeep",
            description:
              "Funding the ongoing maintenance of trails, docks, and station infrastructure across one of the park's most visited zones.",
            imageAlt: "Forest trail inside Corcovado National Park",

            image: "/images/projects/trail.webp",
          },
        ],
      },
      corcovado: {
        eyebrow: "The park",
        title: "Inside Corcovado National Park",
        body: "Called 'the most biologically intense place on Earth' by National Geographic, Corcovado protects one of the last great expanses of Pacific lowland rainforest in Central America, home to tapirs, scarlet macaws, all four Costa Rican monkey species, and hundreds of species found nowhere else.",
        points: [
          {
            title: "Sirena Ranger Station",
            description:
              "The remote station at the heart of the park, only reachable by boat, plane, or a multi-hour hike.",
          },
          {
            title: "Unmatched biodiversity",
            description:
              "Rainforest, mangrove, and coastline ecosystems packed into a single protected area.",
          },
          {
            title: "Active conservation",
            description:
              "Rangers based at Sirena patrol year-round to protect the park from poaching and illegal logging.",
          },
        ],
        cta: "Learn about the park",
        imageAlt: "Wildlife in Corcovado National Park",
      },
      cta: {
        title: "Help us keep Corcovado protected",
        subtitle:
          "Every donation funds the station that keeps rangers in the field and the rainforest standing.",
        primaryCta: "Donate Now",
        secondaryCta: "Contact Us",
      },
    },
    contact: {
      hero: {
        eyebrow: "Get in touch",
        title: "Contact us",
        subtitle:
          "Have a question about ADI Corcovado, the Sirena Ranger Station, or how to get involved? Send us a message and we'll get back to you.",
      },
      form: {
        fields: {
          name: { label: "Full name", placeholder: "Jane Doe" },
          email: { label: "Email", placeholder: "jane@example.com" },
          comment: {
            label: "Message",
            placeholder: "Tell us how we can help…",
          },
        },
        buttons: {
          submit: "Send message",
          submitting: "Sending…",
        },
        errors: {
          nameRequired: "Please enter your full name.",
          emailRequired: "Please enter your email address.",
          emailInvalid: "Please enter a valid email address.",
          submitError:
            "We couldn't send your message. Please try again in a moment.",
        },
        success: {
          title: "Message sent",
          description:
            "Thanks for reaching out! We've received your message and will reply as soon as we can.",
        },
      },
    },
    booking: {
      hero: {
        eyebrow: "Plan your visit",
        title: "Book your stay",
        subtitle:
          "Tell us about your stay at the Sirena Ranger Station and we'll take care of the rest — lodging, meals, and park logistics.",
      },
      form: {
        steps: [
          { title: "Trip Details" },
          { title: "Meals" },
          { title: "Documents" },
        ],
        step1: {
          title: "Trip details",
          description:
            "Tell us who's coming and when so we can prepare the station for your stay.",
          fields: {
            name: { label: "Full name", placeholder: "Jane Doe" },
            email: { label: "Email", placeholder: "jane@example.com" },
            companyName: {
              label: "Company name",
              placeholder: "Organization or company (optional)",
            },
            checkInDate: { label: "Check-in date" },
            checkOutDate: { label: "Check-out date" },
            adults: { label: "Number of adults" },
            children: { label: "Number of children" },
            guides: { label: "Number of guides" },
            volunteers: {
              label: "Number of Costa Rican students or volunteers",
            },
            researchers: {
              label: "Number of researchers or public officials",
            },
          },
        },
        step2: {
          title: "Meals",
          description:
            "Let us know how many people need each meal during the stay.",
          mealTypes: {
            breakfast: { title: "Breakfasts" },
            snack: { title: "Snacks" },
            lunch: { title: "Lunches" },
            dinner: { title: "Dinners" },
          },
          fields: {
            adults: { label: "Adults" },
            children: { label: "Children" },
            guides: { label: "Guides" },
            volunteers: { label: "Students / volunteers" },
            researchers: { label: "Researchers / officials" },
          },
        },
        step3: {
          title: "Documents",
          description:
            "Upload your Corcovado National Park entrance fee confirmation to complete your request.",
          fields: {
            file: {
              label: "Park entrance fee confirmation",
              helpText: "PDF or image, up to 10 MB.",
              dropText: "Drag and drop your file here, or",
              browseText: "browse",
              noFileText: "No file selected",
            },
          },
        },
        buttons: {
          back: "Back",
          next: "Continue",
          submit: "Submit request",
          submitting: "Submitting…",
        },
        noMealsWarning: {
          title: "Continue without meals?",
          description:
            "You haven't added any meals to your reservation request. Are you sure you want to continue without adding any meals?",
          confirm: "Continue",
          cancel: "Cancel",
        },
        errors: {
          nameRequired: "Please enter your full name.",
          emailRequired: "Please enter your email address.",
          emailInvalid: "Please enter a valid email address.",
          checkInRequired: "Please select a check-in date.",
          checkOutRequired: "Please select a check-out date.",
          dateOrder: "Check-out date must be on or after the check-in date.",
          countMin: "Must be 0 or greater.",
          fileRequired: "Please upload the entrance fee confirmation.",
          submitError:
            "We couldn't submit your request. Please try again in a moment.",
        },
        success: {
          title: "Request received",
          description:
            "Thanks! We've logged your request and will be in touch shortly to confirm the details.",
        },
      },
    },
    emails: {
      contact: {
        admin: {
          subjectPrefix: "New contact message",
          heading: "New contact message",
          intro:
            "A new message was submitted through the website contact form.",
        },
        guest: {
          subject: "We've received your message",
          heading: "Thanks for reaching out!",
          intro:
            "We've received your message and will get back to you as soon as we can.",
          footerNote:
            "Have more to add in the meantime? Just reply to this email.",
        },
        shared: {
          greeting: "Hi {name},",
          detailsTitle: "Contact details",
          nameLabel: "Name",
          emailLabel: "Email",
          messageTitle: "Message",
        },
      },
      booking: {
        admin: {
          subjectPrefix: "New booking request",
          heading: "New booking request",
          intro:
            "A new stay request was submitted through the website. Details and the park entrance fee confirmation are below.",
        },
        guest: {
          subject: "We've received your booking request",
          heading: "Thanks for your request!",
          intro:
            "We've received your booking request for the Sirena Ranger Station. Our team will review availability and be in touch shortly to confirm the details.",
          footerNote:
            "Have a question in the meantime? Just reply to this email.",
        },
        shared: {
          greeting: "Hi {name},",
          tripDetailsTitle: "Trip details",
          guestLabel: "Requester",
          emailLabel: "Email",
          companyLabel: "Organization",
          checkInLabel: "Check-in",
          checkOutLabel: "Check-out",
          nightsLabel: "Nights",
          lodgingTitle: "Guests & lodging",
          mealsTitle: "Meals",
          categoryColumn: "Category",
          guestsColumn: "Guests",
          rateColumn: "Rate / night",
          mealRateColumn: "Rate",
          subtotalColumn: "Subtotal",
          mealColumn: "Meal",
          totalLabel: "Estimated total",
          exchangeNote:
            "Amounts in colones (₡) follow the exchange rate defined by the Banco Central de Costa Rica and are shown separately from the total in dollars.",
          attachmentNote: "Park entrance fee confirmation attached.",
        },
      },
    },
  },
  es: {
    nav: {
      home: "Inicio",
      about: "Quiénes Somos",
      projects: "Proyectos",
      corcovado: "Corcovado",
      contact: "Contacto",
      bookNow: "Reserva ahora",
    },
    footer: {
      tagline:
        "Una asociación sin fines de lucro que sostiene la vida dentro del Parque Nacional Corcovado, hospedaje, alimentación y apoyo a los guardaparques en la Estación Sirena.",
      linksTitle: "Explorar",
      contactTitle: "Contáctanos",
      address:
        "Estación de Guardaparques Sirena, Parque Nacional Corcovado, Costa Rica",
      email: "info@adi-corcovado.org",
      phone: "+506 0000 0000",
      rights: "Todos los derechos reservados.",
    },
    home: {
      hero: {
        eyebrow: "ADI Corcovado",
        title: "Guardianes de la última gran selva de Costa Rica",
        subtitle:
          "Administramos el hospedaje, la alimentación y la vida diaria de la Estación Sirena en el corazón del Parque Nacional Corcovado, para que guardaparques, investigadores y visitantes puedan seguir protegiendo uno de los lugares más biodiversos del planeta.",
        primaryCta: "Apoya Nuestro Trabajo",
        secondaryCta: "Ver Nuestros Proyectos",
        imageAlt: "Vista aérea del dosel de la selva de Corcovado",
      },
      intro: {
        eyebrow: "Quiénes somos",
        title: "Una asociación construida alrededor de un puesto remoto",
        body: "ADI Corcovado es la asociación detrás de la Estación Sirena, el corazón del Parque Nacional Corcovado. Cada comida servida, cama tendida y reparación realizada mantiene a los guardaparques en el campo y protege la selva, las playas y la vida silvestre del parque para las futuras generaciones.",
        imageAlt: "Voluntarios y guardaparques frente a la Estación Sirena",
      },
      projects: {
        eyebrow: "Nuestros proyectos",
        title: "A dónde va tu apoyo",
        subtitle:
          "Desde el mantenimiento de instalaciones hasta iniciativas de conservación, cada proyecto mantiene el parque en marcha para quienes lo protegen.",
        cta: "Ver todos los proyectos",
        items: [
          {
            title: "Hospedaje de la Estación Sirena",
            description:
              "Mantenimiento de alojamiento seguro y cómodo para guardaparques, investigadores y científicos visitantes en medio de la selva.",
            imageAlt: "Cabañas de hospedaje en la Estación Sirena",
            image: "/images/projects/sirena-station.webp",
          },
          {
            title: "Alimentación de Guardaparques",
            description:
              "Operación de la cocina y el comedor que alimenta a los guardaparques y al personal que patrulla y protege Corcovado cada día.",
            imageAlt: "Comedor en la Estación Sirena",
            image: "/images/projects/food.webp",
          },
          {
            title: "Mantenimiento de Senderos e Instalaciones",
            description:
              "Financiamiento del mantenimiento continuo de senderos, muelles e infraestructura en una de las zonas más visitadas del parque.",
            imageAlt: "Sendero en el Parque Nacional Corcovado",
            image: "/images/projects/trail.webp",
          },
        ],
      },
      corcovado: {
        eyebrow: "El parque",
        title: "Dentro del Parque Nacional Corcovado",
        body: "Descrito por National Geographic como 'el lugar biológicamente más intenso de la Tierra', Corcovado protege una de las últimas grandes extensiones de selva tropical del Pacífico en Centroamérica, hogar de dantas, lapas rojas, los cuatro monos de Costa Rica y cientos de especies que no existen en ningún otro lugar.",
        points: [
          {
            title: "Estación de Guardaparques Sirena",
            description:
              "La estación remota en el corazón del parque, accesible solo en bote, avioneta o una caminata de varias horas.",
          },
          {
            title: "Biodiversidad incomparable",
            description:
              "Ecosistemas de selva, manglar y costa reunidos en una sola área protegida.",
          },
          {
            title: "Conservación activa",
            description:
              "Los guardaparques de Sirena patrullan todo el año para proteger el parque de la caza furtiva y la tala ilegal.",
          },
        ],
        cta: "Conoce el parque",
        imageAlt: "Vida silvestre en el Parque Nacional Corcovado",
      },
      cta: {
        title: "Ayúdanos a mantener Corcovado protegido",
        subtitle:
          "Cada donación financia la estación que mantiene a los guardaparques en el campo y la selva en pie.",
        primaryCta: "Donar Ahora",
        secondaryCta: "Contáctanos",
      },
    },
    contact: {
      hero: {
        eyebrow: "Ponte en contacto",
        title: "Contáctanos",
        subtitle:
          "¿Tienes una pregunta sobre ADI Corcovado, la Estación de Guardaparques Sirena o cómo colaborar? Envíanos un mensaje y te responderemos pronto.",
      },
      form: {
        fields: {
          name: { label: "Nombre completo", placeholder: "Jane Doe" },
          email: {
            label: "Correo electrónico",
            placeholder: "jane@example.com",
          },
          comment: {
            label: "Mensaje",
            placeholder: "Cuéntanos cómo podemos ayudarte…",
          },
        },
        buttons: {
          submit: "Enviar mensaje",
          submitting: "Enviando…",
        },
        errors: {
          nameRequired: "Por favor ingresa tu nombre completo.",
          emailRequired: "Por favor ingresa tu correo electrónico.",
          emailInvalid: "Por favor ingresa un correo electrónico válido.",
          submitError:
            "No pudimos enviar tu mensaje. Por favor, inténtalo de nuevo en un momento.",
        },
        success: {
          title: "Mensaje enviado",
          description:
            "¡Gracias por escribirnos! Recibimos tu mensaje y te responderemos lo antes posible.",
        },
      },
    },
    booking: {
      hero: {
        eyebrow: "Planifica tu visita",
        title: "Reserva tu estadía",
        subtitle:
          "Cuéntanos sobre tu estadía en la Estación Sirena y nosotros nos encargamos del resto: hospedaje, alimentación y logística del parque.",
      },
      form: {
        steps: [
          { title: "Detalles del viaje" },
          { title: "Alimentación" },
          { title: "Documentos" },
        ],
        step1: {
          title: "Detalles del viaje",
          description:
            "Cuéntanos quién viene y cuándo para preparar la estación para tu estadía.",
          fields: {
            name: { label: "Nombre completo", placeholder: "Juana Pérez" },
            email: {
              label: "Correo electrónico",
              placeholder: "juana@ejemplo.com",
            },
            companyName: {
              label: "Nombre de la empresa",
              placeholder: "Organización o empresa (opcional)",
            },
            checkInDate: { label: "Fecha de ingreso" },
            checkOutDate: { label: "Fecha de salida" },
            adults: { label: "Cantidad de adultos" },
            children: { label: "Cantidad de niños" },
            guides: { label: "Cantidad de guías" },
            volunteers: {
              label: "Cantidad de estudiantes costarricenses o voluntarios",
            },
            researchers: {
              label: "Cantidad de investigadores o funcionarios públicos",
            },
          },
        },
        step2: {
          title: "Alimentación",
          description:
            "Indícanos cuántas personas necesitan cada tiempo de comida durante la estadía.",
          mealTypes: {
            breakfast: { title: "Desayunos" },
            snack: { title: "Meriendas" },
            lunch: { title: "Almuerzos" },
            dinner: { title: "Cenas" },
          },
          fields: {
            adults: { label: "Adultos" },
            children: { label: "Niños" },
            guides: { label: "Guías" },
            volunteers: { label: "Estudiantes / voluntarios" },
            researchers: { label: "Investigadores / funcionarios" },
          },
        },
        step3: {
          title: "Documentos",
          description:
            "Adjunta la confirmación de pago de la tarifa de ingreso al Parque Nacional Corcovado para completar tu solicitud.",
          fields: {
            file: {
              label: "Confirmación de tarifa de ingreso al parque",
              helpText: "PDF o imagen, hasta 10 MB.",
              dropText: "Arrastra y suelta tu archivo aquí, o",
              browseText: "selecciónalo",
              noFileText: "Ningún archivo seleccionado",
            },
          },
        },
        buttons: {
          back: "Atrás",
          next: "Continuar",
          submit: "Enviar solicitud",
          submitting: "Enviando…",
        },
        noMealsWarning: {
          title: "¿Continuar sin alimentación?",
          description:
            "No has agregado ningún tiempo de comida a tu solicitud de reserva. ¿Estás seguro de que deseas continuar sin agregar alimentación?",
          confirm: "Continuar",
          cancel: "Cancelar",
        },
        errors: {
          nameRequired: "Por favor ingresa tu nombre completo.",
          emailRequired: "Por favor ingresa tu correo electrónico.",
          emailInvalid: "Por favor ingresa un correo electrónico válido.",
          checkInRequired: "Por favor selecciona una fecha de ingreso.",
          checkOutRequired: "Por favor selecciona una fecha de salida.",
          dateOrder:
            "La fecha de salida debe ser igual o posterior a la fecha de ingreso.",
          countMin: "Debe ser 0 o mayor.",
          fileRequired:
            "Por favor adjunta la confirmación de la tarifa de ingreso.",
          submitError:
            "No pudimos enviar tu solicitud. Por favor intenta de nuevo en un momento.",
        },
        success: {
          title: "Solicitud recibida",
          description:
            "¡Gracias! Registramos tu solicitud y te contactaremos pronto para confirmar los detalles.",
        },
      },
    },
    emails: {
      contact: {
        admin: {
          subjectPrefix: "Nuevo mensaje de contacto",
          heading: "Nuevo mensaje de contacto",
          intro:
            "Se envió un nuevo mensaje a través del formulario de contacto del sitio web.",
        },
        guest: {
          subject: "Recibimos tu mensaje",
          heading: "¡Gracias por escribirnos!",
          intro: "Recibimos tu mensaje y te responderemos lo antes posible.",
          footerNote:
            "¿Tienes algo más que agregar mientras tanto? Solo responde este correo.",
        },
        shared: {
          greeting: "Hola {name},",
          detailsTitle: "Detalles de contacto",
          nameLabel: "Nombre",
          emailLabel: "Correo electrónico",
          messageTitle: "Mensaje",
        },
      },
      booking: {
        admin: {
          subjectPrefix: "Nueva solicitud de reserva",
          heading: "Nueva solicitud de reserva",
          intro:
            "Se envió una nueva solicitud de reserva a través del sitio web. Los detalles y la confirmación de la tarifa de ingreso al parque están a continuación.",
        },
        guest: {
          subject: "Recibimos tu solicitud de reserva",
          heading: "¡Gracias por tu solicitud!",
          intro:
            "Recibimos tu solicitud de reserva en la Estación Sirena. Nuestro equipo revisará la disponibilidad y te contactará pronto para confirmar los detalles.",
          footerNote:
            "¿Tienes alguna pregunta mientras tanto? Solo responde este correo.",
        },
        shared: {
          greeting: "Hola {name},",
          tripDetailsTitle: "Detalles del viaje",
          guestLabel: "Solicitante",
          emailLabel: "Correo electrónico",
          companyLabel: "Organización",
          checkInLabel: "Ingreso",
          checkOutLabel: "Salida",
          nightsLabel: "Noches",
          lodgingTitle: "Huéspedes y hospedaje",
          mealsTitle: "Alimentación",
          categoryColumn: "Categoría",
          guestsColumn: "Personas",
          rateColumn: "Tarifa / noche",
          mealRateColumn: "Tarifa",
          subtotalColumn: "Subtotal",
          mealColumn: "Tiempo de comida",
          totalLabel: "Total estimado",
          exchangeNote:
            "Los montos en colones (₡) siguen el tipo de cambio definido por el Banco Central de Costa Rica y se muestran por separado del total en dólares.",
          attachmentNote:
            "Se adjunta la confirmación de la tarifa de ingreso al parque.",
        },
      },
    },
  },
} as const;

export type Language = keyof typeof translations;
export type Translations = (typeof translations)[Language];
export type BookingTranslations = Translations["booking"];
export type ContactTranslations = Translations["contact"];
export type EmailTranslations = Translations["emails"];

export function getTranslations(lang: string | undefined): Translations {
  const language = (lang || "en") as Language;
  return translations[language] || translations.en;
}
