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
        eyebrow: "About Us",
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
    stations: {
      sirena: {
        eyebrow: "Corcovado National Park",
        title: "Sirena Station",
        subtitle:
          "The heart of Corcovado National Park, where rainforest, rivers, and Pacific coastline meet at one of the best wildlife-watching sites in Costa Rica.",
        heroImage: "/images/ourWork/sirena-station.webp",
        heroImageAlt:
          "Sirena Station lodging platforms in Corcovado National Park",
        history: {
          eyebrow: "History",
          title: "About the station",
          body: [
            "Sirena Station is the central ranger and research station of Corcovado National Park, set on the lowlands where the Sirena and Pavo rivers meet the Pacific Ocean. For decades it has served as a base for park rangers, biologists, and researchers studying one of the last great expanses of Pacific lowland rainforest in Central America.",
            "Today Sirena remains the park's main hub, connected by trail to the La Leona and Los Patos entrance stations. ADI Corcovado manages the station's lodging and food service, supporting the visitors, volunteers, and researchers who pass through.",
          ],
          image: "/images/home/wildlife.webp",
          imageAlt: "Trail through the rainforest near Sirena Station",
        },
        attractions: {
          eyebrow: "What to see",
          title: "Top attractions",
          subtitle:
            "Sirena is widely considered the best wildlife-watching station in Corcovado, with habitats ranging from primary rainforest to river mouth and coastline.",
          items: [
            {
              title: "Sirena River mouth",
              description:
                "Watch for American crocodiles, herons, and other waterbirds where the Sirena River meets the ocean.",
              image: "/images/home/home-3.webp",
              imageAlt: "Sirena River mouth",
            },
            {
              title: "Extensive trail network",
              description:
                "Marked trails loop through primary and secondary forest, connecting the station to La Leona and Los Patos.",
              image: "/images/ourWork/trail.webp",
              imageAlt: "Trail near Sirena Station",
            },
            {
              title: "Exceptional wildlife watching",
              description:
                "Home to tapirs, all four Costa Rican monkey species, scarlet macaws, and, in season, sightings of jaguars and their prey.",
              image: "/images/home/home-4.webp",
              imageAlt: "Wildlife in Corcovado National Park",
            },
            {
              title: "Pacific coastline",
              description:
                "Miles of undeveloped beach right at the station's doorstep, with occasional sightings of dolphins and migrating whales offshore.",
              image: "/images/home/home-5.webp",
              imageAlt: "Pacific coastline near Sirena Station",
            },
          ],
        },
        booking: {
          eyebrow: "Plan your stay",
          title: "How to book",
          subtitle:
            "Booking a stay at Sirena Station is a two-step process split between the park administration and ADI Corcovado.",
          lodgingNote:
            "Sirena offers shared-bed lodging under two roofed platforms with shared bathrooms. We do not offer private rooms.",
          steps: [
            {
              title: "Request your park entrance",
              description:
                "Request your entrance tickets first with the Corcovado National Park administration (SINAC-ACOSA).",
              emailLabel: "Email",
              email: "acosa.reservaciones@sinac.go.cr",
              phoneLabel: "Phone",
              phone: "2775-2110 / 2775-1210 / 2775-1538 ext. 101",
              cta: undefined as { label: string; slug: string } | undefined,
            },
            {
              title: "Request lodging & meals",
              description:
                "Once you have your park entrance reservation, request lodging and food service with ADI Corcovado.",
              emailLabel: "Email",
              email: undefined as string | undefined,
              phoneLabel: undefined as string | undefined,
              phone: undefined as string | undefined,
              cta: { label: "Request your booking", slug: "booking" },
            },
          ],
          guideNotice: {
            title: "Guide required for hiking access",
            body: "If you hike in to Sirena Station from the main entrances — La Leona Station or Los Patos Station — you must enter with an authorized guide, as required by SINAC-ACOSA park regulations. Guiding service is entirely private and must be arranged on your own. You can request the list of authorized guides from SINAC-ACOSA at acosa.reservaciones@sinac.go.cr.",
          },
        },
        pricing: {
          eyebrow: "Rates",
          title: "Lodging & meal prices",
          subtitle:
            "Official ADI Corcovado tariffs for lodging and meals at Sirena Station.",
          categoryColumn: "Category",
          lodgingColumn: "Lodging / night",
          notOffered: "—",
          currencyNote:
            "Rates for researchers and public officials are listed in Costa Rican colones (₡); all other categories are priced in US dollars.",
          categoryLabels: {
            adults: "Adults",
            children: "Children",
            guides: "Guides",
            volunteers: "Students / volunteers",
            researchers: "Researchers / officials",
          },
          mealLabels: {
            breakfast: "Breakfast",
            snack: "Snack",
            lunch: "Lunch",
            dinner: "Dinner",
          },
        },
        cta: {
          title: "Ready to visit Sirena Station?",
          subtitle:
            "Start your booking request and our team will help you coordinate lodging and meals once you have your park entrance reservation.",
          button: "Book now",
        },
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
        title: "Request your booking",
        subtitle:
          "Complete the form with the details of your visit to the Sirena Ranger Station. Our team will review availability and get in touch with you to confirm your booking, lodging, and meals.",
      },
      form: {
        steps: [
          { title: "Requester Details" },
          { title: "Trip Details" },
          { title: "Meals" },
          { title: "Documents" },
        ],
        step1: {
          title: "Requester details",
          description:
            "Enter your personal details and select a payment method; this information will be used to manage your booking and billing.",
          fields: {
            name: { label: "Full name", placeholder: "Jane Doe" },
            email: { label: "Email", placeholder: "jane@example.com" },
            companyName: {
              label: "Company name",
              placeholder: "Organization or company (optional)",
            },
            idType: {
              label: "ID type",
              placeholder: "Select an ID type",
              options: {
                cedulaFisica: "Cédula física",
                cedulaJuridica: "Cédula jurídica",
                pasaporte: "Passport",
              },
            },
            idNumber: {
              label: "ID number",
              placeholder: "e.g. 1-2345-6789",
            },
            paymentMethod: {
              label: "Payment method",
              placeholder: "Select a payment method",
              helpText:
                "We'll use this information to provide you with the payment instructions for your booking.",
              options: {
                bankDeposit: "Bank deposit",
                electronicTransfer: "Electronic transfer",
                creditDebitCard: "Credit or debit card",
              },
            },
          },
        },
        step2: {
          title: "Trip details",
          description:
            "Let us know the dates of your visit and who will be in your group.",
          fields: {
            checkInDate: {
              label: "Check-in date",
              helpText:
                "Must match the check-in date on your SINAC booking confirmation.",
            },
            checkOutDate: {
              label: "Check-out date",
              helpText:
                "Must match the check-out date on your SINAC booking confirmation.",
            },
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
        step3: {
          title: "Meals",
          description:
            "Let us know how many people will need each meal, day by day, during the stay.",
          dayLabel: "Day {number}",
          missingDatesNotice:
            "Please select your check-in and check-out dates in the previous step to plan meals.",
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
        step4: {
          title: "Documents",
          description:
            "Attach your park entrance fee confirmation to complete your booking request. You can attach up to 4 documents. These documents are required to process your stay at the Sirena Ranger Station.",
          fields: {
            file: {
              label: "Park entrance fee confirmation documents",
              helpText:
                "PDF or image, up to 10 MB each. Attach up to 4 documents.",
              dropText: "Drag and drop your files here, or",
              browseText: "browse",
              noFileText: "No files attached yet",
              progressLabel: "{count} of {min} minimum documents attached",
              maxReachedText: "Maximum of {max} files reached.",
              removeLabel: "Remove file",
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
          title: "At least one meal is required",
          description:
            "You haven't added any meals to your reservation request. Please add at least one meal to continue.",
          confirm: "Got it",
        },
        errors: {
          nameRequired: "Please enter your full name.",
          emailRequired: "Please enter your email address.",
          emailInvalid: "Please enter a valid email address.",
          idTypeRequired: "Please select an ID type.",
          idNumberRequired: "Please enter your ID number.",
          paymentMethodRequired: "Please select a payment method.",
          checkInRequired: "Please select a check-in date.",
          checkOutRequired: "Please select a check-out date.",
          dateOrder: "Check-out date must be on or after the check-in date.",
          countMin: "Must be 0 or greater.",
          fileRequired: "Please attach the entrance fee confirmation document.",
          captchaRequired: "Please complete the verification challenge.",
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
            "We've received your service request for your visit to the Sirena Station.",
          introDetail:
            "Our team will review the information provided and verify that it matches the attached SINAC reservation ticket(s). If everything is correct, ADI Corcovado Carate will proceed with billing and email you the confirmation along with the instructions needed to make your payment.",
          estimateWarningTitle: "Important",
          estimateWarningText:
            "The costs shown below are only an informational estimate based on the details of your request. They do not represent a booking confirmation or an invoice. Please do not make any payment until you receive the confirmation, invoice, and payment instructions by email from ADI Corcovado Carate.",
          footerNote:
            "Have a question in the meantime? Just reply to this email.",
        },
        shared: {
          greeting: "Hi {name},",
          tripDetailsTitle: "Trip details",
          guestLabel: "Requester",
          emailLabel: "Email",
          companyLabel: "Organization",
          idTypeLabel: "ID type",
          idNumberLabel: "ID number",
          paymentMethodLabel: "Payment method",
          checkInLabel: "Check-in",
          checkOutLabel: "Check-out",
          nightsLabel: "Nights",
          lodgingTitle: "Guests & lodging",
          mealsTitle: "Meals",
          dateColumn: "Date",
          categoryColumn: "Category",
          guestsColumn: "Guests",
          rateColumn: "Rate / night",
          mealRateColumn: "Rate",
          subtotalColumn: "Subtotal",
          mealColumn: "Meal",
          totalLabel: "Estimated total",
          exchangeNote:
            "Amounts in colones (₡) follow the exchange rate defined by the Banco Central de Costa Rica and are shown separately from the total in dollars.",
          attachmentNote: "Park entrance fee confirmation documents attached.",
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
        eyebrow: "Quiénes Somos",
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
    stations: {
      sirena: {
        eyebrow: "Parque Nacional Corcovado",
        title: "Estación Sirena",
        subtitle:
          "El corazón del Parque Nacional Corcovado, donde el bosque tropical, los ríos y la costa del Pacífico se encuentran en uno de los mejores sitios de observación de fauna de Costa Rica.",
        heroImage: "/images/ourWork/sirena-station.webp",
        heroImageAlt:
          "Plataformas de hospedaje de la Estación Sirena en el Parque Nacional Corcovado",
        history: {
          eyebrow: "Historia",
          title: "Sobre la estación",
          body: [
            "La Estación Sirena es la estación central de guardaparques e investigación del Parque Nacional Corcovado, ubicada en las tierras bajas donde los ríos Sirena y Pavo desembocan en el océano Pacífico. Durante décadas ha servido como base para guardaparques, biólogos e investigadores que estudian una de las últimas grandes extensiones de selva tropical del Pacífico en Centroamérica.",
            "Hoy Sirena continúa siendo el punto central del parque, conectada por senderos con las estaciones de entrada La Leona y Los Patos. La ADI Corcovado administra los servicios de hospedaje y alimentación de la estación, apoyando a los visitantes, voluntarios e investigadores que pasan por ella.",
          ],
          image: "/images/home/wildlife.webp",
          imageAlt: "Sendero en la selva cerca de la Estación Sirena",
        },
        attractions: {
          eyebrow: "Qué ver",
          title: "Atractivos principales",
          subtitle:
            "Sirena es considerada ampliamente como la mejor estación para la observación de fauna en Corcovado, con hábitats que van desde selva primaria hasta desembocadura de río y costa.",
          items: [
            {
              title: "Boca del Río Sirena",
              description:
                "Observa cocodrilos americanos, garzas y otras aves acuáticas donde el Río Sirena desemboca en el mar.",
              image: "/images/home/home-3.webp",
              imageAlt: "Desembocadura del Río Sirena",
            },
            {
              title: "Amplia red de senderos",
              description:
                "Senderos señalizados recorren bosque primario y secundario, conectando la estación con La Leona y Los Patos.",
              image: "/images/ourWork/trail.webp",
              imageAlt: "Sendero cerca de la Estación Sirena",
            },
            {
              title: "Excelente observación de fauna",
              description:
                "Hogar de dantas, los cuatro monos de Costa Rica, lapas rojas y, en temporada, avistamientos de jaguares y sus presas.",
              image: "/images/home/home-4.webp",
              imageAlt: "Fauna silvestre en el Parque Nacional Corcovado",
            },
            {
              title: "Costa del Pacífico",
              description:
                "Kilómetros de playa virgen frente a la estación, con avistamientos ocasionales de delfines y ballenas migratorias.",
              image: "/images/home/home-5.webp",
              imageAlt: "Costa del Pacífico cerca de la Estación Sirena",
            },
          ],
        },
        booking: {
          eyebrow: "Planifica tu estadía",
          title: "Cómo reservar",
          subtitle:
            "Reservar una estadía en la Estación Sirena es un proceso de dos pasos, dividido entre la administración del parque y la ADI Corcovado.",
          lodgingNote:
            "La Estación Sirena ofrece hospedaje en camas compartidas, localizadas bajo dos plataformas techadas con baños compartidos. No ofrecemos habitaciones privadas.",
          steps: [
            {
              title: "Solicita tu ingreso al parque",
              description:
                "Primero deberás solicitar las entradas con la administración del Parque Nacional Corcovado (SINAC-ACOSA).",
              emailLabel: "Correo",
              email: "acosa.reservaciones@sinac.go.cr",
              phoneLabel: "Teléfono",
              phone: "2775-2110 / 2775-1210 / 2775-1538 ext. 101",
              cta: undefined as { label: string; slug: string } | undefined,
            },
            {
              title: "Solicita hospedaje y alimentación",
              description:
                "Una vez que tengas la reserva de entradas, deberás solicitar el servicio de hospedaje y alimentación con la ADI Corcovado.",
              emailLabel: "Correo",
              email: undefined as string | undefined,
              phoneLabel: undefined as string | undefined,
              phone: undefined as string | undefined,
              cta: { label: "Solicita tu reserva", slug: "booking" },
            },
          ],
          guideNotice: {
            title: "Guía obligatorio para ingreso caminando",
            body: "Si ingresas caminando hasta la Estación Sirena desde las principales entradas —La Leona o Los Patos—, deberás ingresar con un guía autorizado de forma obligatoria, según la normativa de la administración del parque SINAC-ACOSA. El servicio de guiado es totalmente privado y debes contratarlo por tu cuenta. Puedes solicitar la lista de guías autorizados a SINAC-ACOSA al correo acosa.reservaciones@sinac.go.cr.",
          },
        },
        pricing: {
          eyebrow: "Tarifas",
          title: "Precios de hospedaje y alimentación",
          subtitle:
            "Tarifas oficiales de la ADI Corcovado para hospedaje y alimentación en la Estación Sirena.",
          categoryColumn: "Categoría",
          lodgingColumn: "Hospedaje / noche",
          notOffered: "—",
          currencyNote:
            "Las tarifas para investigadores y funcionarios públicos se muestran en colones costarricenses (₡); las demás categorías se cobran en dólares estadounidenses.",
          categoryLabels: {
            adults: "Adultos",
            children: "Niños",
            guides: "Guías",
            volunteers: "Estudiantes / voluntarios",
            researchers: "Investigadores / funcionarios",
          },
          mealLabels: {
            breakfast: "Desayuno",
            snack: "Merienda",
            lunch: "Almuerzo",
            dinner: "Cena",
          },
        },
        cta: {
          title: "¿Listo para visitar la Estación Sirena?",
          subtitle:
            "Inicia tu solicitud de reserva y nuestro equipo te ayudará a coordinar el hospedaje y la alimentación una vez tengas tu reserva de ingreso al parque.",
          button: "Reserva ahora",
        },
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
        title: "Solicita tu reserva",
        subtitle:
          "Completa el formulario con los detalles de tu visita a la Estación Sirena. Nuestro equipo revisará la disponibilidad y se pondrá en contacto contigo para confirmar tu reserva, hospedaje y alimentación.",
      },
      form: {
        steps: [
          { title: "Datos del solicitante" },
          { title: "Detalles del viaje" },
          { title: "Alimentación" },
          { title: "Documentos" },
        ],
        step1: {
          title: "Datos del solicitante",
          description:
            "Ingresa tus datos personales y selecciona el método de pago; esta información será utilizada para gestionar tu reserva y facturación.",
          fields: {
            name: { label: "Nombre completo", placeholder: "Juan Pérez" },
            email: {
              label: "Correo electrónico",
              placeholder: "juan@ejemplo.com",
            },
            companyName: {
              label: "Nombre de la empresa",
              placeholder: "Organización o empresa (opcional)",
            },
            idType: {
              label: "Tipo de identificación",
              placeholder: "Selecciona un tipo de identificación",
              options: {
                cedulaFisica: "Cédula física",
                cedulaJuridica: "Cédula jurídica",
                pasaporte: "Pasaporte",
              },
            },
            idNumber: {
              label: "Número de identificación",
              placeholder: "Ej. 1-2345-6789",
            },
            paymentMethod: {
              label: "Método de pago",
              placeholder: "Selecciona un método de pago",
              helpText:
                "Utilizaremos esta información para brindarte las instrucciones de pago de tu reserva.",
              options: {
                bankDeposit: "Depósito bancario",
                electronicTransfer: "Transferencia electrónica",
                creditDebitCard: "Tarjeta de crédito o débito",
              },
            },
          },
        },
        step2: {
          title: "Detalles del viaje",
          description:
            "Indícanos las fechas de tu visita y quiénes forman parte del grupo.",
          fields: {
            checkInDate: {
              label: "Fecha de ingreso",
              helpText:
                "Debe coincidir con la fecha de ingreso indicada en la boleta de reserva del SINAC.",
            },
            checkOutDate: {
              label: "Fecha de salida",
              helpText:
                "Debe coincidir con la fecha de salida indicada en la boleta de reserva del SINAC.",
            },
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
        step3: {
          title: "Alimentación",
          description:
            "Indícanos cuántas personas necesitarán cada tiempo de comida, día por día, durante su estadía.",
          dayLabel: "Día {number}",
          missingDatesNotice:
            "Selecciona las fechas de ingreso y salida en el paso anterior para planificar la alimentación.",
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
        step4: {
          title: "Documentos",
          description:
            "Adjunta la confirmación de tu ingreso al Parque Nacional Corcovado. Puedes adjuntar hasta 4 documentos. Estos documentos son necesarios para gestionar tu estadía en la Estación Sirena.",
          fields: {
            file: {
              label: "Documentos de confirmación de ingreso al parque",
              helpText:
                "PDF o imagen, hasta 10 MB cada uno. Adjunta hasta 4 documentos.",
              dropText: "Arrastra y suelta tus archivos aquí, o",
              browseText: "selecciónalos",
              noFileText: "Ningún archivo adjunto todavía",
              progressLabel: "{count} de {min} documentos mínimos adjuntos",
              maxReachedText: "Se alcanzó el máximo de {max} archivos.",
              removeLabel: "Eliminar archivo",
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
          title: "Se requiere al menos un tiempo de comida",
          description:
            "No has agregado ningún tiempo de comida a tu solicitud de reserva. Por favor agrega al menos uno para continuar.",
          confirm: "Entendido",
        },
        errors: {
          nameRequired: "Por favor ingresa tu nombre completo.",
          emailRequired: "Por favor ingresa tu correo electrónico.",
          emailInvalid: "Por favor ingresa un correo electrónico válido.",
          idTypeRequired: "Por favor selecciona un tipo de identificación.",
          idNumberRequired: "Por favor ingresa tu número de identificación.",
          paymentMethodRequired: "Por favor selecciona un método de pago.",
          checkInRequired: "Por favor selecciona una fecha de ingreso.",
          checkOutRequired: "Por favor selecciona una fecha de salida.",
          dateOrder:
            "La fecha de salida debe ser igual o posterior a la fecha de ingreso.",
          countMin: "Debe ser 0 o mayor.",
          fileRequired:
            "Por favor adjunta el documento de confirmación de ingreso.",
          captchaRequired: "Por favor completa la verificación.",
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
            "Hemos recibido tu solicitud de servicios para tu visita a la Estación Sirena.",
          introDetail:
            "Nuestro equipo revisará la información proporcionada y verificará que coincida con la(s) boleta(s) de reserva del SINAC adjuntas. Si toda la información es correcta, la ADI Corcovado Carate procederá con la facturación y te enviará por correo electrónico la confirmación junto con las instrucciones necesarias para realizar el pago.",
          estimateWarningTitle: "Importante",
          estimateWarningText:
            "Los costos que se muestran a continuación son únicamente un estimado informativo basado en los datos de tu solicitud. No representan una confirmación de la reserva ni una factura. No realices ningún pago hasta recibir por correo electrónico la confirmación, la factura y las instrucciones de pago por parte de la ADI Corcovado Carate.",
          footerNote:
            "¿Tienes alguna pregunta mientras tanto? Solo responde este correo.",
        },
        shared: {
          greeting: "Hola {name},",
          tripDetailsTitle: "Detalles del viaje",
          guestLabel: "Solicitante",
          emailLabel: "Correo electrónico",
          companyLabel: "Organización",
          idTypeLabel: "Tipo de identificación",
          idNumberLabel: "Número de identificación",
          paymentMethodLabel: "Método de pago",
          checkInLabel: "Ingreso",
          checkOutLabel: "Salida",
          nightsLabel: "Noches",
          lodgingTitle: "Huéspedes y hospedaje",
          mealsTitle: "Alimentación",
          dateColumn: "Fecha",
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
            "Se adjuntan los documentos de confirmación de la tarifa de ingreso al parque.",
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
  const language = (lang || "es") as Language;
  return translations[language] || translations.es;
}
