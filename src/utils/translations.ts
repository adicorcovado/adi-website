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
        "We work to strengthen our communities, contribute to the conservation of our territory, and promote sustainable development that creates opportunities for our people.",
      linksTitle: "Explore",
      contactTitle: "Get in touch",
      socialTitle: "Follow us",
      address: "Puerto Jiménez, Puntarenas, Costa Rica",
      email: "info@adicorcovado.org",
      phone: "+506 8597-8686",
      rights: "All rights reserved.",
      facebookLabel: "Follow us on Facebook",
      instagramLabel: "Follow us on Instagram",
      whatsappLabel: "Message us on WhatsApp",
    },
    home: {
      hero: {
        eyebrow: "ADI Corcovado Carate",
        title: "Conserving with people",
        subtitle:
          "ADI Corcovado-Carate is a non-profit community organization, founded in 2012 on the initiative of residents from the communities of Piro, Agua Buena, Río Oro, and Carate. We work for the economic, social, cultural, and educational wellbeing and development of our communities.",
        primaryCta: "Learn About Our Work",
        secondaryCta: "Our Projects",
        imageAlt: "Aerial view of the Corcovado rainforest canopy",
      },
      intro: {
        eyebrow: "What we do",
        title: "We work to create opportunities in our community",
        body: "We drive initiatives, projects, and partnerships aimed at responding to the needs of our communities and creating development opportunities for the people who live in them.",
        ourWork: [
          {
            title: "We drive community projects",
            description:
              "We support initiatives that respond to the needs of our communities.",
          },
          {
            title: "We strengthen local production",
            description:
              "We support producers and entrepreneurs to create opportunities and strengthen the local economy.",
          },
          {
            title: "We build partnerships",
            description:
              "We join forces with institutions, organizations, and businesses to develop projects that benefit the community.",
          },
        ],
        imageAlt: "Volunteers and rangers outside the Sirena Station",
      },
      ourWork: {
        eyebrow: "Our work",
        title: "Supporting community development",
        subtitle:
          "Projects that strengthen our communities, drive local production, and contribute to the conservation of the Osa Peninsula.",
        cta: "View all our work",
        items: [
          {
            title: "Lodging & Food Service",
            description:
              "We manage the lodging and food services that allow us to host visitors, researchers, and staff staying at the Sirena Station.",
            imageAlt: "Sirena Station lodging cabins",

            image: "/images/ourWork/sirena-station.webp",
            cta: { label: "Book Now", slug: "booking" },
          },
          {
            title: "PROLOS",
            description:
              "(Local Producer-Made Products) We strengthen the production and marketing of products from our communities, connecting local producers with new markets.",
            imageAlt: "Dining hall at the Sirena Station",

            image: "/images/ourWork/prolos.webp",
            cta: undefined as { label: string; slug: string } | undefined,
          },
          {
            title: "Tourism Promotion",
            description:
              "We promote responsible visits to the Osa Peninsula, strengthening tourism as an engine of development for our communities through partnerships, fairs, and digital communication.",
            imageAlt: "Trail in Corcovado National Park",

            image: "/images/ourWork/trail.webp",
            cta: undefined as { label: string; slug: string } | undefined,
          },
        ],
      },
      corcovado: {
        eyebrow: "The park",
        title: "Inside Corcovado National Park",
        body: "Called 'the most biologically intense place on Earth' by National Geographic, Corcovado protects one of the last great expanses of Pacific lowland rainforest in Central America, home to tapirs, scarlet macaws, all four Costa Rican monkey species, and hundreds of species found nowhere else.",
        points: [
          {
            title: "Sirena Station",
            description:
              "The park's central station, surrounded by forest, rivers, and coastline. It has an extensive trail network and excellent opportunities for wildlife watching.",
          },
          {
            title: "La Leona Station",
            description:
              "Land access to the park from Carate, with routes through beach and forest, wildlife watching, and seasonal turtle sightings. It's also the starting point of the route to Sirena.",
          },
          {
            title: "Los Patos Station",
            description:
              "A sector of tropical forest and mountains, with trails along the Rincón River, waterfalls, and great diversity of flora and fauna. It also connects to Sirena.",
          },
        ],
        cta: "Learn about the park",
        imageAlt: "Wildlife in Corcovado National Park",
      },
      cta: {
        title: "Be part of our projects",
        subtitle:
          "If one of our projects inspires you and you'd like to contribute, you can do so through a donation.",
        primaryCta: "Donate Now",
        secondaryCta: "Contact Us",
      },
    },
    contact: {
      hero: {
        eyebrow: "Get in touch",
        title: "Contact us",
        subtitle:
          "Want to learn more about our work, our projects, or how you can collaborate? Write to us. We would love to hear from you.",
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
          captchaRequired: "Please complete the verification challenge.",
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
        "Trabajamos para fortalecer nuestras comunidades, contribuir a la conservación de nuestro territorio e impulsar un desarrollo sostenible que genere oportunidades para nuestra gente.",
      linksTitle: "Explorar",
      contactTitle: "Contáctanos",
      socialTitle: "Síguenos",
      address: "Puerto Jiménez, Puntarenas, Costa Rica",
      email: "info@adicorcovado.org",
      phone: "+506 8597-8686",
      rights: "Todos los derechos reservados.",
      facebookLabel: "Síguenos en Facebook",
      instagramLabel: "Síguenos en Instagram",
      whatsappLabel: "Escríbenos por WhatsApp",
    },
    home: {
      hero: {
        eyebrow: "ADI Corcovado Carate",
        title: "Conservando con gente",
        subtitle:
          "La ADI Corcovado-Carate es una organización comunitaria sin fines de lucro, constituida en 2012 por iniciativa de los vecinos de las comunidades de Piro, Agua Buena, Río Oro y Carate. Trabajamos por el bienestar y desarrollo económico, social, cultural y educativo de nuestras comunidades.",
        primaryCta: "Conoce Nuestro Trabajo",
        secondaryCta: "Nuestros Proyectos",
        imageAlt: "Vista aérea del dosel de la selva de Corcovado",
      },
      intro: {
        eyebrow: "Qué hacemos",
        title: "Trabajamos para generar oportunidades en nuestra comunidad",
        body: "Impulsamos iniciativas, proyectos y alianzas orientados a responder a las necesidades de nuestras comunidades y a generar oportunidades de desarrollo para las personas que las habitan.",
        ourWork: [
          {
            title: "Impulsamos proyectos comunitarios",
            description:
              "Apoyamos iniciativas que responden a las necesidades de nuestras comunidades.",
          },
          {
            title: "Fortalecemos la producción local",
            description:
              "Apoyamos a productores y emprendimientos para generar oportunidades y fortalecer la economía local.",
          },
          {
            title: "Creamos alianzas",
            description:
              "Sumamos esfuerzos con instituciones, organizaciones y empresas para desarrollar proyectos de beneficio comunitario.",
          },
        ],
        imageAlt: "Voluntarios y guardaparques frente a la Estación Sirena",
      },
      ourWork: {
        eyebrow: "Nuestro trabajo",
        title: "Apoyando el desarrollo de la comunidad",
        subtitle:
          "Proyectos que fortalecen nuestras comunidades, impulsan la producción local y contribuyen a la conservación de la península de Osa.",
        cta: "Ver todos los trabajos",
        items: [
          {
            title: "Hospedaje y alimentación",
            description:
              "Gestionamos los servicios de hospedaje y alimentación que permiten atender a visitantes, investigadores y al personal que permanece en la Estación Sirena.",
            imageAlt: "Cabañas de hospedaje en la Estación Sirena",
            image: "/images/ourWork/sirena-station.webp",
            cta: { label: "Reserva ahora", slug: "booking" },
          },
          {
            title: "PROLOS",
            description:
              "(Productos Producidos por Productores Locales) Fortalecemos la producción y comercialización de productos de nuestras comunidades, conectando a productores locales con nuevos mercados.",
            imageAlt: "Comedor en la Estación Sirena",
            image: "/images/ourWork/prolos.webp",
            cta: undefined as { label: string; slug: string } | undefined,
          },
          {
            title: "Promoción turística",
            description:
              "Promovemos la visita responsable a la Península de Osa, fortaleciendo el turismo como motor de desarrollo para nuestras comunidades mediante alianzas, ferias y comunicación digital.",
            imageAlt: "Sendero en el Parque Nacional Corcovado",
            image: "/images/ourWork/trail.webp",
            cta: undefined as { label: string; slug: string } | undefined,
          },
        ],
      },
      corcovado: {
        eyebrow: "El parque",
        title: "Dentro del Parque Nacional Corcovado",
        body: "Descrito por National Geographic como 'el lugar biológicamente más intenso de la Tierra', Corcovado protege una de las últimas grandes extensiones de selva tropical del Pacífico en Centroamérica, hogar de dantas, lapas rojas, los cuatro monos de Costa Rica y cientos de especies que no existen en ningún otro lugar.",
        points: [
          {
            title: "Estación Sirena",
            description:
              "La estación central del parque, rodeada de bosque, ríos y costa. Cuenta con una amplia red de senderos y excelentes oportunidades para observar fauna.",
          },
          {
            title: "Estación La Leona",
            description:
              "Acceso terrestre al parque desde Carate, con recorridos por playa y bosque, observación de fauna y tortugas en temporada. También es el inicio de la ruta hacia Sirena.",
          },
          {
            title: "Estación Los Patos",
            description:
              "Un sector de bosque tropical y montaña, con senderos junto al río Rincón, cataratas y gran diversidad de flora y fauna. También conecta con Sirena.",
          },
        ],
        cta: "Conoce el parque",
        imageAlt: "Vida silvestre en el Parque Nacional Corcovado",
      },
      cta: {
        title: "Sé parte de nuestros proyectos",
        subtitle:
          "Si alguno de nuestros proyectos te inspira y quieres aportar, puedes hacerlo a través de una donación.",
        primaryCta: "Donar Ahora",
        secondaryCta: "Contáctanos",
      },
    },
    contact: {
      hero: {
        eyebrow: "Ponte en contacto",
        title: "Contáctanos",
        subtitle:
          "¿Quieres conocer más sobre nuestro trabajo, nuestros proyectos o cómo puedes colaborar? Escríbenos. Nos encantará escucharte.",
      },
      form: {
        fields: {
          name: { label: "Nombre completo", placeholder: "Juan Pérez" },
          email: {
            label: "Correo electrónico",
            placeholder: "juan@example.com",
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
          captchaRequired: "Por favor completa la verificación.",
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
              placeholder: "juan@ejemplo.com",
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
