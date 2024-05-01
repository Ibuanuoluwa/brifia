import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    lng: "en",
    resources: {
      en: {
        translation: {
          header: {
            button: "Get Started",
          },
          hero: {
            header: {
              wordOne: "Your",
              wordTwo: "Financial",
              wordThree: "Forecasting System",
            },
            subHeader: {
              textOne: "Integrate CRM Data",
              textTwo: "Add Financial Performance Metrics",
              textThree: "Perform Advanced Forecasting",
            },
            banner: {
              textOne: "Trusted by...",
              textTwo: "10,000+ ",
              textThree: "Users",
            },
          },
          plans: {
            buttonText: "Subscribe",
            header: "Plans",
            subHeader: "Make your business flow",
            pricing: [
              {
                title: "Small",
                date: "Per Month",
                price: "€999",
                features: [
                  "Analyze company reports",
                  "Understand financial health",
                  "Understand Customer behaviors",
                  "Understand Market trends",
                ],
              },
              {
                title: "Medium",
                date: "Per Month",
                price: "€1999",
                features: [
                  "Analyze company reports",
                  "Understand financial health",
                  "Understand Customer behaviours",
                  "Understand Market trends",
                  "AI Advisor and Analyst",
                  "Prediction financial health",
                  "Prediction Customer behaviours",
                  "Prediction Market trends",
                ],
              },
              {
                title: "Large",
                date: "Per Month",
                price: "€2999",
                features: [
                  "Analyze company reports",
                  "Understand financial health",
                  "Understand Customer behaviours",
                  "Understand Market trends",
                  "AI Advisor and Analyst",
                  "Prediction financial health",
                  "Prediction Customer behaviours",
                  "Prediction Market trends",
                  "Tailored models",
                  "Personal advisor",
                ],
              },
            ],
          },
          features: {
            header: "Features",
            subHeaderOne: "Brifia's Cutting-Edge Capabilities",
            subHeaderTwo:
              "Integrating and Analyzing Data for Predictive Financial Insight",
            featuresData: [
              {
                title: "Data integration",
                description:
                  "Brifia seamlessly pulls data from your company’s CRM system, including sales forecasts, customer interactions, and transaction history, along with financial data such as expenses, revenues, and cash flows.",
                points: [
                  "Consolidates CRM and financial data",
                  "Captures sales, customer interactions, and financial transactions",
                  "Provides a unified data ecosystem for analysis",
                ],
                img: "data",
              },
              {
                title: "AI-powered analytics",
                description:
                  "Brifia leverages AI algorithms to analyze this integrated data to identify patterns, and trends that human analysts might miss. This includes predicting future sales trends based on past CRM data and correlating these with financial outcomes.",
                points: [
                  "Utilizes AI to uncover patterns and trends",
                  "Predicts future sales and financial outcomes",
                  "Offers insights beyond human analysis capabilities",
                ],
                img: "ai",
              },
              {
                title: "Customized forecasting models",
                description:
                  "With Brifia, you can tailor the AI models to your company’s specific needs, adjusting for industry-specific factors, seasonal variations, or unique business cycles",
                points: [
                  "Tailors AI models to specific business needs",
                  "Adjusts for industry, seasonality, and business cycles",
                  "Enhances forecasting accuracy and relevance",
                ],
                img: "forecasting",
              },
              {
                title: "Scenario planning",
                description:
                  "Brifia enables businesses to simulate various scenarios (e.g., changes in market conditions, new product launches) and see how these could impact their financial future",
                points: [
                  "Simulates potential business scenarios",
                  "Assesses impacts of market changes or new products",
                  "Supports strategic decision-making processes",
                ],
                img: "planning",
              },
              {
                title: "Real-time insights",
                description:
                  "Brifia provides real-time forecasting, enabling you to see immediate financial implications of changes in your company’s CRM data, such as a spikes in customer inquiries or drops in sales.",
                points: [
                  "Provides immediate financial forecasting updates",
                  "Reacts quickly to CRM data changes",
                  "Enables proactive business management",
                ],
                img: "insights",
              },
              {
                title: "Risk assessment",
                description:
                  "By analyzing historical data, Brifia offers early detection on financial risks, and provide early warnings, allowing you and your company to take proactive measures",
                points: [
                  "Analyses historical data for risk identification",
                  "Provides early warnings for financial threats",
                  "Facilitates proactive risk management strategies",
                ],
                img: "assessments",
              },
              {
                title: "Compliance and reporting",
                description:
                  "Brifia also assists in ensuring financial compliance,  stream lines the reporting process, and makes it easier to share insights with stakeholders.",
                points: [
                  "Ensures adherence to financial regulations",
                  "Streamlines the financial reporting process",
                  "Simplifies sharing insights with stakeholders",
                ],
                img: "reporting",
              },
            ],
          },
          product: {
            header: "Product",
            text: "Streamline business inquiries and workflows with Brifia",
          },
          benefits: {
            header: "Benefits",
            subHeader: "Maximising Value with Brifia: Key Benefits Unlocked",
            benefitsData: [
              {
                title: "Informed decision-making",
                description:
                  "Better forecasting leads to more informed business decisions",
                icon: "benefit",
              },
              {
                title: "Efficiency",
                description:
                  "Saves time and resources compared to manual analysis",
                icon: "benefit",
              },
              {
                title: "Competitive advantage",
                description:
                  "Advanced insights can provide a competitive edge in strategic planning",
                icon: "benefit",
              },
              {
                title: "Risk mitigation",
                description:
                  "Early identification of financial risks can save businesses from potential crises",
                icon: "benefit",
              },
            ],
          },
          transform: {
            header:
              "Transforming Economy Analysis with AI: How Brifia Empowers accounting Firms and Professional Consultants",
          },
          contact: {
            header: "Make your business flow",
            buttonText: "Contact us ",
          },
          footer: {
            firstLink: "Privacy Policy",
            secondLink: "Terms of use",
          },
          privacyPolicy: {
            pageTitle: "Privacy Policy",
            header: "Privacy Policy for Brifia",
            date: "Last updated: 2024-02-01",
            description:
              "At Brifia, we are committed to maintaining the trust and confidence of our users. In this Privacy Policy, we’ve provided detailed information on when and why we collect personal information, how we use it, and how we keep it secure",
            policies: [
              {
                title: "Information We Collect",
                description:
                  "Brifia is designed to empower you with advanced financial analytics without compromising your privacy. Our application does not require access to personal data for its functionality. Users retain full ownership and control of their data at all times.",
              },
              {
                title: "How We Use Your Information",
                description:
                  "Since Brifia does not access, collect, or store your personal or financial data, there are no direct uses of such information. However, we may collect and aggregate anonymized user behavior to improve our application and services. This aggregated data cannot be traced back to any individual user.",
              },
              {
                title: "Data Security",
                description:
                  "We take your digital privacy seriously and implement a variety of security measures to maintain the safety of your personal information. However, it’s important to note that no method of transmission over the Internet, or method of electronic storage, is 100% secure. While we strive to use commercially acceptable means to protect your personal information, we cannot guarantee its absolute security.",
              },
              {
                title: "Sharing Your Personal Information",
                description:
                  "We do not sell, trade, or rent users' identifiable personal information to others. We may share generic aggregated demographic information not linked to any personal identification information regarding visitors and users with our business partners, trusted affiliates, and advertisers for the purposes outlined above.",
              },
              {
                title: "Changes to This Privacy Policy",
                description:
                  "Brifia reserves the right to update or change our Privacy Policy at any time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes.",
              },
              {
                title: "Your Acceptance of These Terms",
                description:
                  "By using this app, you signify your acceptance of this policy. If you do not agree to this policy, please do not use our app. Your continued use of the app following the posting of changes to this policy will be deemed your acceptance of those changes.",
              },
              {
                title: " Contact Us",
                description:
                  "If you have any questions about this Privacy Policy, the practices of this app, or your dealings with this app, please contact us at.",
              },
            ],
          },

          terms: {
            pageTitle: "Terms of Use",
            header: "Terms of Use for Brifia",
            date: "Last updated: 2024-02-01",
            description:
              "Welcome to Brifia, your AI-powered financial advisory platform. By subscribing to our services, you agree to comply with and be bound by the following terms and conditions of use. Please review these terms carefully.",
            termsData: [
              {
                title: "Acceptance of Terms",
                description:
                  "By accessing and using the Brifia app, you accept and agree to be bound by these terms. If you do not agree to these terms, you should not use the Brifia app.",
              },
              {
                title: "Subscription",
                description:
                  "Access to the Brifia platform is contingent upon your active subscription. Your rights to use the platform and its services are non-transferable and are only available to you while your subscription is active and in good standing.",
              },
              {
                title: "Use Restrictions",
                subHeader: "You are expressly prohibited from:",
                description: `Attempting to hack, destabilize, or adapt the Brifia platform and its underlying code for your personal or commercial use. Copying, distributing, or disclosing any part of the platform in any medium, including without limitation by any automated or non-automated “scraping.”`,
                bottomText:
                  "Using the platform in any way that breaches any applicable local, national, or international law or regulation",
              },
              {
                title: "Legal Compliance and Responsibility",
                description:
                  "Brifia provides advice based on current tax regulations and does not advocate, encourage, or support breaking the law. The platform must not be used for activities aimed at circumventing local laws and regulations. Any attempt to use Brifia for such purposes is strictly prohibited and is done at your own risk and responsibility.",
              },
              {
                title: " Disclaimer of Liability",
                description:
                  "While Brifia strives to provide accurate and up-to-date financial advice, the application of this advice to your specific situation depends on a variety of factors. Consequently, if you encounter issues as a result of following the advice provided by Brifia, you assume full responsibility for these actions and their outcomes. Brifia, its creators, and affiliates will not be held liable for any direct, indirect, incidental, consequential, or punitive damages resulting from your access to or use of the platform.",
              },
              {
                title: "Intellectual Property",
                description:
                  "The content, arrangement, and layout of the Brifia app, including but not limited to, the text, graphics, photographs, logos, and video, are the proprietary property of Brifia or its licensors with all rights reserved.",
              },
              {
                title: "Termination",
                description:
                  "Brifia reserves the right to terminate your access to the platform without notice or liability, for any reason, including but not limited to a breach of these Terms of Use.",
              },
              {
                title: "Amendments",
                description:
                  "Brifia reserves the right to amend or replace these Terms of Use at any time. You are responsible for regularly reviewing these Terms of Use to obtain timely notice of such amendments.",
              },
              {
                title: " Governing Law",
                description:
                  "These Terms of Use shall be governed by and construed in accordance with the laws of the jurisdiction in which Brifia operates, without giving effect to any principles of conflicts of law.",
              },
              {
                title: "Contact Information",
                description:
                  "If you have any questions or concerns about these Terms of Use, please contact us at info@brifia.com",
              },
            ],
            footerText:
              "Your access to and use of the Brifia platform is conditioned on your acceptance of and compliance with these Terms of Use. These Terms apply to all visitors, users, and others who access or use the platform. By accessing or using the platform, you agree to be bound by these Terms.",
          },
        },
      },
      sw: {
        translation: {
          header: {
            button: "Kom igång",
          },
          hero: {
            header: {
              wordOne: "Ditt",
              wordTwo: "finansiella",
              wordThree: "prognossystem",
            },
            subHeader: {
              textOne: "Integrera CRM-data",
              textTwo: "Lägg till finansiell resultatstatistik",
              textThree: "Utför avancerade prognoser",
            },
            banner: {
              textOne: "Betrodd av....",
              textTwo: "10 000+ ",
              textThree: "användare",
            },
          },
          plans: {
            buttonText: "Prenumerera",
            header: "Planer",
            subHeader: "Få ditt företag att flyta",
            pricing: [
              {
                title: "Liten ",
                date: "månad",
                price: "€999",
                features: [
                  "Analysera företagsrapporter",
                  "Förstå ekonomisk hälsa",
                  "Förstå kundernas beteenden",
                  "Förstå marknadstrender",
                ],
              },
              {
                title: "Medium",
                date: "månad",
                price: "€1999",
                features: [
                  "Analysera företagsrapporter",
                  "Förstå ekonomisk hälsa",
                  "Förstå kundernas beteenden",
                  "Förstå marknadstrender",
                  "AI-rådgivare och analytiker",
                  "Förutsägelse ekonomisk hälsa",
                  "Förutsägelse Kundbeteenden",
                  "Förutsägelse Marknadstrender",
                ],
              },
              {
                title: "Stor",
                date: "månad",
                price: "€2999",
                features: [
                  "Analysera företagsrapporter",
                  "Förstå ekonomisk hälsa",
                  "Förstå kundernas beteenden",
                  "Förstå marknadstrender",
                  "AI-rådgivare och analytiker",
                  "Förutsägelse ekonomisk hälsa",
                  "Förutsägelse Kundbeteenden",
                  "Förutsägelse Marknadstrender",
                  "Skräddarsydda modeller",
                  "Personlig rådgivare",
                ],
              },
            ],
          },
          features: {
            header: "Nyckelfunktioner",
            subHeaderOne: "Brifias banbrytande kapacitet",
            subHeaderTwo:
              "Integrering och analys av data för prediktiv finansiell insikt",
            featuresData: [
              {
                title: "Dataintegration",
                description:
                  "Brifia hämtar sömlöst data från ditt företags CRM-system, inklusive försäljningsprognoser, kundinteraktioner och transaktionshistorik, tillsammans med finansiella data som utgifter, intäkter och kassaflöden.",
                points: [
                  "Konsoliderar CRM- och finansdata",
                  "Fångar försäljning, kundinteraktioner och finansiella transaktioner",
                  "Ger ett enhetligt dataekosystem för analys",
                ],
                img: "data",
              },
              {
                title: "AI-driven analys",
                description:
                  "Brifia använder AI-algoritmer för att analysera denna integrerade data för att identifiera mönster och trender som mänskliga analytiker kan missa. Detta inkluderar att förutsäga framtida försäljningstrender baserat på tidigare CRM-data och korrelera dessa med ekonomiska utfall.",
                points: [
                  "Använder AI för att avslöja mönster och trender",
                  "Förutsäger framtida försäljning och ekonomiska utfall",
                  "Erbjuder insikter utöver mänskliga analysmöjligheter",
                ],
                img: "ai",
              },
              {
                title: "Anpassade prognosmodeller",
                description:
                  "Med Brifia kan du skräddarsy AI-modellerna efter ditt företags specifika behov, justera för branschspecifika faktorer, säsongsvariationer eller unika ",
                points: [
                  "Skräddarsy AI-modeller efter specifika affärsbehov",
                  "Justerar för industri, säsongsvariationer och konjunkturcykler",
                  "Förbättrar prognostiseringsnoggrannhet och relevans",
                ],
                img: "forecasting",
              },
              {
                title: "Scenarioplanering",
                description:
                  "Brifia gör det möjligt för företag att simulera olika scenarier (t.ex. förändringar i marknadsförhållanden, nya produktlanseringar) och se hur dessa kan påverka deras ekonomiska",
                points: [
                  "Simulerar potentiellt affärsscenario",
                  "Bedömer effekterna av marknadsförändringar eller nya produkter",
                  "Stödjer strategiska beslutsprocesser",
                ],
                img: "planning",
              },
              {
                title: "Insikter i realtid",
                description:
                  "Brifia tillhandahåller prognoser i realtid, vilket gör att du kan se omedelbara ekonomiska konsekvenser av förändringar i ditt företags CRM-data, såsom toppar i kundförfrågningar eller minskad försäljning..",
                points: [
                  "Ger omedelbara uppdateringar av ekonomiska prognoser",
                  "Reagerar snabbt på förändringar i CRM-data",
                  "Möjliggör proaktiv företagsledning",
                ],
                img: "insights",
              },
              {
                title: "Riskbedömning",
                description:
                  "Genom att analysera historiska data erbjuder Brifia tidig upptäckt av finansiella risker och ger tidiga varningar, vilket gör att du och ditt företag kan vidta proaktiva åtgärder.",
                points: [
                  "Analyserar historisk data för riskidentifiering",
                  "Ger tidiga varningar för ekonomiska hot",
                  "Underlättar proaktiva riskhanteringsstrategier",
                ],
                img: "assessments",
              },
              {
                title: "Efterlevnad och rapportering",
                description:
                  "Brifia hjälper också till med att säkerställa ekonomisk efterlevnad, effektiviserar rapporteringsprocessen och gör det lättare att dela insikter med intressenter.",
                points: [
                  "Säkerställer att ekonomiska regler följs",
                  "Effektiviserar den finansiella rapporteringsprocessen",
                  "Förenklar att dela insikter med intressenter",
                ],
                img: "reporting",
              },
            ],
          },
          product: {
            header: "Produkt",
            text: "Effektivisera företagsförfrågningar och arbetsflöden med Brifia.",
          },
          benefits: {
            header: "Fördelar",
            subHeader: "Maximera värde med Brifia: Nyckelfördelar Låsta upp",
            benefitsData: [
              {
                title: "Informerat beslutsfattande",
                description:
                  "Bättre prognoser leder till mer välgrundade affärsbeslut",
                icon: "benefit",
              },
              {
                title: "Effektivitet",
                description:
                  "Sparar tid och resurser jämfört med manuell analys.",
                icon: "benefit",
              },
              {
                title: "Konkurrensfördel",
                description:
                  "Avancerade insikter kan ge en konkurrensfördel i strategisk planering",
                icon: "benefit",
              },
              {
                title: "Riskreducering",
                description:
                  "Tidig identifiering av finansiella risker kan rädda företag från potentiella kriser",
                icon: "benefit",
              },
            ],
          },
          transform: {
            header:
              "Förvandla ekonomianalys med AI: Hur Brifia stärker redovisningsbyråer och professionella konsulter",
          },
          contact: {
            header: "Få ditt företag att flyta",
            buttonText: "Kontakta oss",
          },
          footer: {
            firstLink: "Integritetspolicy",
            secondLink: "Villkor",
          },
          privacyPolicy: {
            pageTitle: "Sekretesspolicy",
            header: "Sekretesspolicy för Brifia",
            date: "Senast uppdaterad: 2024-02-01",
            description:
              "På Brifia är vi fast beslutna att upprätthålla förtroendet och förtroendet hos våra användare. I denna integritetspolicy har vi tillhandahållit detaljerad information om när och varför vi samlar in personlig information, hur vi använder den och hur vi håller den säker.",
            policies: [
              {
                title: "Information vi samlar in",
                description:
                  "Brifia är utformad för att ge dig avancerad finansiell analys utan att kompromissa med din integritet. Vår applikation kräver inte tillgång till personuppgifter för dess funktionalitet. Användare behåller hela tiden full äganderätt och kontroll över sina data.",
              },
              {
                title: "Hur vi använder din information",
                description:
                  "Eftersom Brifia inte har tillgång till, samlar in eller lagrar dina personliga eller ekonomiska uppgifter, finns det ingen direkt användning av sådan information. Däremot kan vi samla in och sammanställa anonymiserat användarbeteende för att förbättra vår applikation och våra tjänster. Denna aggregerade data kan inte spåras tillbaka till någon enskild användare.",
              },
              {
                title: "Datasäkerhet",
                description:
                  "Vi tar din digitala integritet på allvar och implementerar en mängd olika säkerhetsåtgärder för att upprätthålla säkerheten för din personliga information. Det är dock viktigt att notera att ingen metod för överföring över Internet, eller metod för elektronisk lagring, är 100 % säker. Även om vi strävar efter att använda kommersiellt acceptabla metoder för att skydda din personliga information, kan vi inte garantera dess absoluta säkerhet.",
              },
              {
                title: "Dela din personliga information",
                description:
                  "Vi säljer, byter eller hyr inte ut användares identifierbara personuppgifter till andra. Vi kan komma att dela generisk aggregerad demografisk information som inte är kopplad till någon personlig identifieringsinformation om besökare och användare med våra affärspartners, betrodda affiliates och annonsörer för de syften som beskrivs ovan.",
              },
              {
                title: "Ändringar av denna sekretesspolicy",
                description:
                  "Brifia förbehåller sig rätten att uppdatera eller ändra vår integritetspolicy när som helst. Vi kommer att meddela dig om eventuella ändringar genom att publicera den nya integritetspolicyn på denna sida. Du rekommenderas att granska denna integritetspolicy med jämna mellanrum för eventuella ändringar.",
              },
              {
                title: "Ditt godkännande av dessa villkor",
                description:
                  "Genom att använda den här appen bekräftar du att du accepterar denna policy. Om du inte godkänner denna policy, använd inte vår app. Din fortsatta användning av appen efter att ändringar i denna policy har publicerats kommer att betraktas som ditt godkännande av dessa ändringar.",
              },
              {
                title: "Kontakta oss",
                description:
                  "Om du har några frågor om denna integritetspolicy, den här appens praxis eller din hantering av den här appen, vänligen kontakta oss på:",
              },
            ],
          },

          terms: {
            pageTitle: "Användarvillkor",
            header: "Användarvillkor för Brifia",
            date: "Senast uppdaterad: 2024-02-01",
            description:
              "Välkommen till Brifia, din AI-drivna plattform för finansiell rådgivning. Genom att prenumerera på våra tjänster samtycker du till att följa och vara bunden av följande användarvillkor. Läs igenom dessa villkor noggrant.",
            termsData: [
              {
                title: "Godkännande av villkor",
                description:
                  "Genom att komma åt och använda Brifia-appen accepterar och accepterar du att vara bunden av dessa villkor. Om du inte godkänner dessa villkor bör du inte använda Brifia-appen.",
              },
              {
                title: "Prenumeration",
                description:
                  "Tillgång till Brifia-plattformen är beroende av ditt aktiva abonnemang. Dina rättigheter att använda plattformen och dess tjänster är inte överlåtbara och är endast tillgängliga för dig när din prenumeration är aktiv och har god status.",
              },
              {
                title: "Användningsbegränsningar",
                subHeader: "Du är uttryckligen förbjuden att:",
                description: `Försök att hacka, destabilisera eller anpassa Brifia-plattformen och dess underliggande kod för ditt personliga eller kommersiella bruk.Kopiera, distribuera eller avslöja någon del av plattformen i vilket medium som helst, inklusive utan begränsning genom någon automatisk eller icke-automatiserad "skrapning".`,
                bottomText:
                  "Använda plattformen på något sätt som bryter mot tillämplig lokal, nationell eller internationell lag eller förordning.",
              },
              {
                title: "Laglig efterlevnad och ansvar",
                description:
                  "Brifia ger råd baserat på gällande skatteregler och förespråkar, uppmuntrar eller stödjer inte lagbrott. Plattformen får inte användas för aktiviteter som syftar till att kringgå lokala lagar och förordningar. Varje försök att använda Brifia för sådana ändamål är strängt förbjudet och görs på egen risk och ansvar.",
              },
              {
                title: "Ansvarsfriskrivning",
                description:
                  "Även om Brifia strävar efter att ge korrekt och uppdaterad finansiell rådgivning, beror tillämpningen av dessa råd på din specifika situation på en mängd olika faktorer. Följaktligen, om du stöter på problem som ett resultat av att följa råden från Brifia, tar du fullt ansvar för dessa åtgärder och deras resultat. Brifia, dess skapare och samarbetspartners kommer inte att hållas ansvariga för några direkta, indirekta, tillfälliga, följdskador eller straffskador som uppstår från din åtkomst till eller användning av plattformen.",
              },
              {
                title: "Immateriella rättigheter",
                description:
                  "Innehållet, arrangemanget och layouten av Brifia-appen, inklusive men inte begränsat till, text, grafik, fotografier, logotyper och video, tillhör Brifia eller dess licensgivare med alla rättigheter förbehållna.",
              },
              {
                title: "Uppsägning",
                description:
                  "Brifia förbehåller sig rätten att avsluta din åtkomst till plattformen utan förvarning eller ansvar, oavsett anledning, inklusive men inte begränsat till ett brott mot dessa användarvillkor..",
              },
              {
                title: "Ändringar",
                description:
                  "Brifia förbehåller sig rätten att när som helst ändra eller ersätta dessa användarvillkor. Du är ansvarig för att regelbundet granska dessa användarvillkor för att få ett meddelande om sådana ändringar i god tid.",
              },
              {
                title: "Tillämplig lag",
                description:
                  "Dessa användarvillkor ska styras av och tolkas i enlighet med lagarna i den jurisdiktion där Brifia är verksamt, utan att ge effekt till några principer om lagkonflikter.",
              },
              {
                title: "Kontaktinformation",
                description:
                  "Om du har några frågor eller funderingar om dessa användarvillkor, vänligen kontakta oss på info@brifia.com",
              },
            ],
            footerText:
              "Din tillgång till och användning av Brifia-plattformen är villkorad av att du accepterar och följer dessa användarvillkor. Dessa villkor gäller för alla besökare, användare och andra som har tillgång till eller använder plattformen. Genom att komma åt eller använda plattformen samtycker du till att vara bunden av dessa villkor.",
          },
        },
      },
      tr: {
        translation: {
          header: {
            button: "Başla",
          },
          hero: {
            header: {
              wordOne: "Finansal",
              wordTwo: "Tahmin",
              wordThree: "Sisteminiz",
            },
            subHeader: {
              textOne: "CRM Verilerini Entegre Edin",
              textTwo: "Finansal Performans Metriklerini Ekle",
              textThree: "Gelişmiş Tahmin Gerçekleştirin",
            },
            banner: {
              textOne: "Güvenenler...",
              textTwo: "10.000+ ",
              textThree: "Kullanıcı",
            },
          },
          plans: {
            buttonText: "Abone",
            header: "Planlar",
            subHeader: "İş akışınızı sağlayın",
            pricing: [
              {
                title: "Küçük",
                date: "ay",
                price: "€999",
                features: [
                  "Şirket raporlarını analiz edin",
                  "Finansal sağlığı anlayın",
                  "Müşteri davranışlarını anlayın",
                  "Pazar trendlerini anlayın",
                ],
              },
              {
                title: "Orta",
                date: "ay",
                price: "€1999",
                features: [
                  "Şirket raporlarını analiz edin",
                  "Finansal sağlığı anlayın",
                  "Müşteri davranışlarını anlayın",
                  "Pazar trendlerini anlayın",
                  "Yapay Zeka Danışmanı ve Analisti",
                  "Tahmin finansal sağlık",
                  "Tahmin Müşteri davranışları",
                  "Tahmin Piyasa eğilimleri",
                ],
              },
              {
                title: "Büyük",
                date: "ay",
                price: "€2999",
                features: [
                  "Şirket raporlarını analiz edin",
                  "Finansal sağlığı anlayın",
                  "Müşteri davranışlarını anlayın",
                  "Pazar trendlerini anlayın",
                  "Yapay Zeka Danışmanı ve Analisti",
                  "Tahmin finansal sağlık",
                  "Tahmin Müşteri davranışları",
                  "Tahmin Piyasa eğilimleri",
                  "Özel modeller",
                  "Kişisel danışman",
                ],
              },
            ],
          },
          features: {
            header: "Ana Özellikler",
            subHeaderOne: "Brifia'nın Son Teknoloji Yetenekleri",
            subHeaderTwo:
              "Tahmine Dayalı Finansal İçgörü için Verileri Entegre Etme ve Analiz Etme",
            featuresData: [
              {
                title: "Veri entegrasyonu",
                description:
                  "Brifia, giderler, gelirler ve nakit akışları gibi finansal verilerin yanı sıra satış tahminleri, müşteri etkileşimleri ve işlem geçmişi dahil olmak üzere şirketinizin CRM sisteminden verileri sorunsuz bir şekilde çeker.",
                points: [
                  "CRM ve Finansal verileri birleştirir",
                  "Satışları, müşteri etkileşimlerini ve finansal işlemleri kaydeder",
                  "Analiz için birleşik bir veri ekosistemi sağlar",
                ],
                img: "data",
              },
              {
                title: "Yapay zeka destekli analitik",
                description:
                  "Brifia, insan analistlerin gözden kaçırabileceği kalıpları ve eğilimleri belirlemek amacıyla bu entegre verileri analiz etmek için yapay zeka algoritmalarından yararlanıyor. Bu, geçmiş CRM verilerine dayanarak gelecekteki satış eğilimlerini tahmin etmeyi ve bunları finansal sonuçlarla ilişkilendirmeyi içerir",
                points: [
                  "Modelleri ve trendleri ortaya çıkarmak için yapay zekayı kullanır",
                  "Gelecekteki satışları ve finansal sonuçları tahmin eder",
                  "İnsan analizi yeteneklerinin ötesinde bilgiler sunar",
                ],
                img: "ai",
              },
              {
                title: "Özelleştirilmiş tahmin modelleri",
                description:
                  "Brifia ile AI modellerini, sektöre özgü faktörlere, mevsimsel değişikliklere veya benzersiz iş döngülerine göre ayarlayarak şirketinizin özel ihtiyaçlarına göre uyarlayabilirsiniz.",
                points: [
                  "Yapay zeka modellerini belirli iş ihtiyaçlarına göre uyarlar",
                  "Sektöre, mevsimselliğe ve iş döngülerine göre ayarlamalar yapılır",
                  "Tahmin doğruluğunu ve alaka düzeyini artırır",
                ],
                img: "forecasting",
              },
              {
                title: "Senaryo planlama",
                description:
                  "Brifia, işletmelerin çeşitli senaryoları (örneğin piyasa koşullarındaki değişiklikler, yeni ürün lansmanları) simüle etmelerine ve bunların finansal geleceklerini nasıl etkileyebileceğini görmelerine olanak tanır.",
                points: [
                  "Potansiyel iş senaryosunu simüle eder",
                  "Pazar değişikliklerinin veya yeni ürünlerin etkilerini değerlendirir",
                  "Stratejik karar alma süreçlerini destekler",
                ],
                img: "planning",
              },
              {
                title: "Gerçek zamanlı içgörüler",
                description:
                  "Brifia, müşteri sorgularındaki ani artışlar veya satışlardaki düşüşler gibi şirketinizin CRM verilerindeki değişikliklerin anında finansal sonuçlarını görmenize olanak tanıyan gerçek zamanlı tahminler sağlar",
                points: [
                  " Anında finansal tahmin güncellemeleri sağlar",
                  "CRM veri değişikliklerine hızla tepki verir",
                  "Proaktif iş yönetimine olanak tanır",
                ],
                img: "insights",
              },
              {
                title: "Risk değerlendirmesi",
                description:
                  " Brifia, geçmiş verileri analiz ederek finansal risklerin erken tespitini ve erken uyarılar sunarak sizin ve şirketinizin proaktif önlemler almasına olanak tanır.",
                points: [
                  "Risk tanımlaması için geçmiş verileri analiz eder",
                  "Finansal tehditlere karşı erken uyarı sağlar",
                  "Proaktif risk yönetimi stratejilerini kolaylaştırır",
                ],
                img: "assessments",
              },
              {
                title: "Uyumluluk ve raporlama",
                description:
                  "Brifia ayrıca finansal uyumluluğun sağlanmasına yardımcı olur, raporlama sürecini düzene sokar ve paydaşlarla içgörülerin paylaşılmasını kolaylaştırır.",
                points: [
                  "Mali düzenlemelere uyumu sağlar",
                  "Finansal raporlama sürecini kolaylaştırır",
                  "Paydaşlarla içgörü paylaşımını basitleştirir",
                ],
                img: "reporting",
              },
            ],
          },
          product: {
            header: "Ürün",
            text: "Brifia ile iş sorgularını ve iş akışlarını kolaylaştırın.",
          },
          benefits: {
            header: "Faydalar",
            subHeader:
              "Brifia ile Değerinizi En Fazla Arttırma: Ana Faydalar Açıldı",
            benefitsData: [
              {
                title: "Bilgilendirilmiş karar verme",
                description:
                  "Daha iyi tahmin, daha bilinçli iş kararlarına yol açar.",
                icon: "benefit",
              },
              {
                title: "Yeterlik",
                description:
                  "Manuel analize kıyasla zamandan ve kaynaklardan tasarruf sağlar.",
                icon: "benefit",
              },
              {
                title: "Rekabet avantajı",
                description:
                  "Gelişmiş içgörüler stratejik planlamada rekabet avantajı sağlayabilir",
                icon: "benefit",
              },
              {
                title: "Risk azaltma",
                description:
                  "Finansal risklerin erken tespiti, işletmeleri olası krizlerden kurtarabilir.",
                icon: "benefit",
              },
            ],
          },
          transform: {
            header:
              "Yapay Zeka ile Ekonomi Analizini Dönüştürmek: Brifia Muhasebe Firmalarını ve Profesyonel Danışmanları Nasıl Güçlendiriyor?",
          },
          contact: {
            header: "İş akışınızı sağlayın",
            buttonText: "Bize Ulaşın",
          },
          footer: {
            firstLink: "Gizlilik Politikası",
            secondLink: "Kullanım Şartları",
          },

          privacyPolicy: {
            pageTitle: "Gizlilik Politikası",
            header: "Brifia için Gizlilik Politikası",
            date: "Son güncelleme: 2024-02-01",
            description:
              "Brifia olarak kullanıcılarımızın güvenini ve güvenini korumaya kararlıyız. Bu Gizlilik Politikasında kişisel bilgileri ne zaman ve neden topladığımız, nasıl kullandığımız ve nasıl güvende tuttuğumuz hakkında ayrıntılı bilgi verdik.",
            policies: [
              {
                title: "Topladığımız Bilgiler",
                description:
                  "Brifia, gizliliğinizden ödün vermeden gelişmiş finansal analizlerle sizi güçlendirmek için tasarlanmıştır. Uygulamamız işlevselliği açısından kişisel verilere erişim gerektirmemektedir. Kullanıcılar her zaman verilerinin tam sahipliğini ve kontrolünü elinde tutar.",
              },
              {
                title: "Bilgilerinizi Nasıl Kullanıyoruz",
                description:
                  "Brifia kişisel veya finansal verilerinize erişmediğinden, bunları toplamadığından veya saklamadığından bu tür bilgilerin doğrudan kullanımı yoktur. Ancak uygulamamızı ve hizmetlerimizi geliştirmek için anonimleştirilmiş kullanıcı davranışlarını toplayabilir ve bir araya getirebiliriz. Bu toplu veriler herhangi bir bireysel kullanıcıya kadar izlenemez.",
              },
              {
                title: "Veri Güvenliği",
                description:
                  "Dijital gizliliğinizi ciddiye alıyoruz ve kişisel bilgilerinizin güvenliğini korumak için çeşitli güvenlik önlemleri uyguluyoruz. Ancak, İnternet üzerinden hiçbir iletim yönteminin veya elektronik depolama yönteminin %100 güvenli olmadığını unutmamak önemlidir. Kişisel bilgilerinizi korumak için ticari olarak kabul edilebilir araçları kullanmaya çalışsak da, mutlak güvenliğini garanti edemeyiz.",
              },
              {
                title: "Kişisel Bilgilerinizin Paylaşılması",
                description:
                  "Kullanıcıların tanımlanabilir kişisel bilgilerini başkalarına satmıyoruz, takas etmiyoruz veya kiralamıyoruz. Ziyaretçilere ve kullanıcılara ilişkin herhangi bir kişisel kimlik bilgisiyle bağlantılı olmayan genel toplu demografik bilgileri, yukarıda belirtilen amaçlar doğrultusunda iş ortaklarımız, güvenilir bağlı kuruluşlarımız ve reklamverenlerimiz ile paylaşabiliriz.",
              },
              {
                title: "Bu Gizlilik Politikasındaki Değişiklikler",
                description:
                  "Brifia, Gizlilik Politikamızı istediği zaman güncelleme veya değiştirme hakkını saklı tutar. Yeni Gizlilik Politikasını bu sayfada yayınlayarak sizi herhangi bir değişiklik konusunda bilgilendireceğiz. Herhangi bir değişiklik olması durumunda bu Gizlilik Politikasını periyodik olarak incelemeniz tavsiye edilir.",
              },
              {
                title: "Bu Şartları Kabul Etmeniz",
                description:
                  "Bu uygulamayı kullanarak bu politikayı kabul ettiğinizi belirtirsiniz. Bu politikayı kabul etmiyorsanız lütfen uygulamamızı kullanmayın. Bu politikada yapılan değişikliklerin yayınlanmasının ardından uygulamayı kullanmaya devam etmeniz, bu değişiklikleri kabul ettiğiniz anlamına gelecektir.",
              },
              {
                title: "Bize Ulaşın",
                description:
                  "Bu Gizlilik Politikası, bu uygulamanın uygulamaları veya bu uygulamayla olan ilişkileriniz hakkında herhangi bir sorunuz varsa lütfen bizimle şu adresten iletişime geçin:",
              },
            ],
          },

          terms: {
            pageTitle: "Kullanım Koşulları",
            header: "Brifia Kullanım Koşulları",
            date: "Son Güncelleme: 2024-02-01",
            description:
              "Yapay zeka destekli finansal danışmanlık platformunuz Brifia'ya hoş geldiniz. Hizmetlerimize abone olarak aşağıdaki kullanım şart ve koşullarına uymayı ve bunlara bağlı kalmayı kabul edersiniz. Lütfen bu şartları dikkatlice inceleyin.",
            termsData: [
              {
                title: "Şartların Kabulü",
                description:
                  "BBrifia uygulamasına erişerek ve onu kullanarak bu şartlara bağlı kalmayı kabul etmiş olursunuz. Bu koşulları kabul etmiyorsanız Brifia uygulamasını kullanmamalısınız.",
              },
              {
                title: "Abonelik",
                description:
                  "Brifia platformuna erişim aktif aboneliğinize bağlıdır. Platformu ve hizmetlerini kullanma haklarınız devredilemez ve yalnızca aboneliğiniz aktif ve iyi durumda olduğu sürece tarafınıza sunulur.",
              },
              {
                title: "Kısıtlamaları Kullanın",
                subHeader: "Şunları yapmanız açıkça yasaktır:",
                description: `kullanımınız için hacklemeye, istikrarsızlaştırmaya veya uyarlamaya çalışmak.Otomatik veya otomatik olmayan "kazıma" da dahil ancak bunlarla sınırlı olmamak üzere, platformun herhangi bir bölümünün herhangi bir ortamda kopyalanması, dağıtılması veya ifşa edilmesi.`,
                bottomText:
                  "Platformun geçerli herhangi bir yerel, ulusal veya uluslararası yasa veya düzenlemeyi ihlal edecek şekilde kullanılması.",
              },
              {
                title: "Yasal Uygunluk ve Sorumluluk",
                description:
                  "Brifia, mevcut vergi düzenlemelerine dayalı olarak tavsiyelerde bulunur ve yasaların çiğnenmesini savunmaz, teşvik etmez veya desteklemez. Platform, yerel yasa ve düzenlemeleri aşmayı amaçlayan faaliyetler için kullanılmamalıdır. Brifia'yı bu tür amaçlarla kullanmaya yönelik herhangi bir girişim kesinlikle yasaktır ve bunun riski ve sorumluluğu size aittir.",
              },
              {
                title: "Sorumluluk Reddi",
                description:
                  "Brifia doğru ve güncel mali tavsiyeler sağlamaya çalışsa da, bu tavsiyelerin özel durumunuza uygulanması çeşitli faktörlere bağlıdır. Sonuç olarak, Brifia tarafından sağlanan tavsiyelere uymanız sonucunda sorunlarla karşılaşırsanız, bu eylemlerin ve sonuçlarının tüm sorumluluğunu üstlenirsiniz. Brifia, yaratıcıları ve bağlı kuruluşları, platforma erişiminiz veya platformu kullanmanızdan kaynaklanan doğrudan, dolaylı, arızi, sonuç olarak ortaya çıkan veya cezai zararlardan sorumlu tutulamaz.",
              },
              {
                title: "Fikri Mülkiyet",
                description:
                  "Metin, grafikler, fotoğraflar, logolar ve video dahil ancak bunlarla sınırlı olmamak üzere Brifia uygulamasının içeriği, düzeni ve düzeni, tüm hakları saklı olmak üzere Brifia'nın veya lisans verenlerinin mülkiyetindedir.",
              },
              {
                title: "Fesih",
                description:
                  "Brifia, bu Kullanım Koşullarının ihlali de dahil ancak bununla sınırlı olmamak üzere herhangi bir nedenle, bildirimde bulunmaksızın veya herhangi bir sorumluluk üstlenmeksizin platforma erişiminizi sonlandırma hakkını saklı tutar.",
              },
              {
                title: "Değişiklikler",
                description:
                  "Brifia, bu Kullanım Koşullarını herhangi bir zamanda değiştirme veya değiştirme hakkını saklı tutar. Bu tür değişikliklere ilişkin zamanında bildirim almak için bu Kullanım Koşullarını düzenli olarak gözden geçirmek sizin sorumluluğunuzdadır.",
              },
              {
                title: "Geçerli Kanun",
                description:
                  "Bu Kullanım Koşulları, Brifia'nın faaliyet gösterdiği yargı bölgesinin kanunlarına göre yönetilecek ve yorumlanacak ve herhangi bir kanun ihtilafı ilkesi geçerli olmayacaktır.",
              },
              {
                title: "letişim Bilgileri",
                description:
                  "Bu Kullanım Koşulları hakkında herhangi bir sorunuz veya endişeniz varsa lütfen info@brifia.com adresinden bizimle iletişime geçin.",
              },
            ],
            footerText:
              "Brifia platformuna erişiminiz ve onu kullanımınız, bu Kullanım Koşullarını kabul etmeniz ve bunlara uymanız koşuluna bağlıdır. Bu Koşullar, tüm ziyaretçiler, kullanıcılar ve platforma erişen veya platformu kullanan diğer kişiler için geçerlidir. Platforma erişerek veya platformu kullanarak bu Koşullara bağlı kalmayı kabul edersiniz.",
          },
        },
      },
      sp: {
        translation: {
          header: {
            button: "Empezar",
          },
          hero: {
            header: {
              wordOne: "Tu",
              wordTwo: "Sistema de",
              wordThree: "Previsión Financiera",
            },
            subHeader: {
              textOne: "Integrar datos de CRM",
              textTwo: "Agregar métricas de desempeño financiero",
              textThree: "Realizar pronósticos avanzados",
            },
            banner: {
              textOne: "Confiado por...",
              textTwo: "Más de 10.000",
              textThree: "usuarios",
            },
          },
          plans: {
            buttonText: "Suscribir",
            header: "Planes",
            subHeader: "Haz fluir tu negocio",
            pricing: [
              {
                title: "Pequeño ",
                date: "mes",
                price: "€999",
                features: [
                  "Analizar informes de la empresa",
                  "Comprender la salud financiera",
                  "Comprender los comportamientos de los clientes",
                  "Comprender las tendencias del mercado",
                ],
              },
              {
                title: "Mediano",
                date: "mes",
                price: "€1999",
                features: [
                  "Analizar informes de la empresa",
                  "Comprender la salud financiera",
                  "Comprender los comportamientos de los clientes",
                  "Comprender las tendencias del mercado",
                  "Asesor y analista de IA",
                  "Predicción de salud financiera",
                  "Predicción del comportamiento del cliente",
                  "Predicción de tendencias del mercado",
                ],
              },
              {
                title: "Grande",
                date: "mes",
                price: "€2999",
                features: [
                  "Analizar informes de la empresa",
                  "Comprender la salud financiera",
                  "Comprender los comportamientos de los clientes",
                  "Comprender las tendencias del mercado",
                  "Asesor y analista de IA",
                  "Predicción de salud financiera",
                  "Predicción del comportamiento del cliente",
                  "Predicción de tendencias del mercado",
                  "Modelos a medida",
                  "asesor personal",
                ],
              },
            ],
          },
          features: {
            header: "Características clave",
            subHeaderOne: "Las capacidades de vanguardia de Brifia",
            subHeaderTwo:
              "Integración y análisis de datos para obtener información financiera predictiva",
            featuresData: [
              {
                title: "Integración de datos",
                description:
                  "Brifia extrae sin problemas datos del sistema CRM de su empresa, incluidos pronósticos de ventas, interacciones con clientes e historial de transacciones, junto con datos financieros como gastos, ingresos y flujos de efectivo.",
                points: [
                  "Consolida CRM y datos financieros",
                  "Captura ventas, interacciones con clientes y transacciones financieras",
                  "Proporciona un ecosistema de datos unificado para el análisis",
                ],
                img: "data",
              },
              {
                title: "Análisis impulsado por IA",
                description:
                  "Brifia aprovecha los algoritmos de IA para analizar estos datos integrados e identificar patrones y tendencias que los analistas humanos podrían pasar por alto. Esto incluye predecir tendencias de ventas futuras basadas en datos de CRM anteriores y correlacionarlas con los resultados financieros.",
                points: [
                  "Utiliza IA para descubrir patrones y tendencias",
                  "Predice ventas futuras y resultados financieros",
                  "Ofrece conocimientos más allá de las capacidades de análisis humano",
                ],
                img: "ai",
              },
              {
                title: "Modelos de pronóstico personalizados",
                description:
                  "con Brifia, puede adaptar los modelos de IA a las necesidades específicas de su empresa, ajustándolos a factores específicos de la industria, variaciones estacionales o ciclos comerciales únicos.",
                points: [
                  "Adapta los modelos de IA a necesidades empresariales específicas",
                  "Se ajusta a la industria, la estacionalidad y los ciclos económicos",
                  "Mejora la precisión y relevancia de las previsiones",
                ],
                img: "forecasting",
              },
              {
                title: "Planificación de escenarios",
                description:
                  "Brifia permite a las empresas simular varios escenarios (por ejemplo, cambios en las condiciones del mercado, lanzamientos de nuevos productos) y ver cómo estos podrían afectar su futuro financiero",
                points: [
                  "Simula un escenario empresarial potencial",
                  "Evalúa los impactos de los cambios del mercado o de nuevos productos",
                  "Apoya los procesos de toma de decisiones estratégicas",
                ],
                img: "planning",
              },
              {
                title: "Información en tiempo real",
                description:
                  "Brifia proporciona pronósticos en tiempo real, lo que le permite ver las implicaciones financieras inmediatas de los cambios en los datos de CRM de su empresa, como picos en las consultas de los clientes o caídas en las ventas.",
                points: [
                  "Proporciona actualizaciones inmediatas de previsiones financieras",
                  "Reacciona rápidamente a los cambios de datos de CRM",
                  "Permite una gestión empresarial proactiva",
                ],
                img: "insights",
              },
              {
                title: "Evaluación de riesgos",
                description:
                  "Al analizar datos históricos, Brifia ofrece detección temprana de riesgos financieros y proporciona alertas tempranas, permitiéndole a usted y a su empresa tomar medidas proactivas.",
                points: [
                  "Analiza datos históricos para la identificación de riesgos",
                  "Proporciona alertas tempranas sobre amenazas financieras",
                  "Facilita estrategias proactivas de gestión de riesgos",
                ],
                img: "assessments",
              },
              {
                title: "Cumplimiento e informes",
                description:
                  "Brifia también ayuda a garantizar el cumplimiento financiero, agiliza el proceso de presentación de informes y facilita el intercambio de conocimientos con las partes interesadas.",
                points: [
                  "Garantiza el cumplimiento de las normas financieras",
                  "Agiliza el proceso de presentación de informes financieros",
                  "Simplifica el intercambio de conocimientos con las partes interesadas",
                ],
                img: "reporting",
              },
            ],
          },
          product: {
            header: "producto",
            text: "Agilice las consultas comerciales y los flujos de trabajo con Brifia.",
          },
          benefits: {
            header: "Beneficios",
            subHeader:
              "Maximizando el Valor con Brifia: Beneficios Clave Desbloqueados",
            benefitsData: [
              {
                title: "Toma de decisiones informada",
                description:
                  "Una mejor previsión conduce a decisiones empresariales más informadas",
                icon: "benefit",
              },
              {
                title: "Eficiencia",
                description:
                  "Ahorra tiempo y recursos en comparación con el análisis manual.",
                icon: "benefit",
              },
              {
                title: "Ventaja competitiva",
                description:
                  "Los conocimientos avanzados pueden proporcionar una ventaja competitiva en la planificación estratégica",
                icon: "benefit",
              },
              {
                title: "Mitigación de riesgos",
                description:
                  "La identificación temprana de los riesgos financieros puede salvar a las empresas de posibles crisis.",
                icon: "benefit",
              },
            ],
          },
          contact: {
            header: "Haz fluir tu negocio",
            buttonText: "Contáctenos",
          },
          transform: {
            header:
              "Transformando el análisis de la economía con IA: Cómo Brifia empodera a las empresas contables y a los consultores profesionales",
          },
          footer: {
            firstLink: "política de privacidad",
            secondLink: "Condiciones de uso",
          },

          privacyPolicy: {
            pageTitle: "Política de privacidad",
            header: "Política de privacidad de Brifia",
            date: "Última actualización: 2024-02-01",
            description:
              "En Brifia estamos comprometidos a mantener la confianza de nuestros usuarios. En esta Política de Privacidad, proporcionamos información detallada sobre cuándo y por qué recopilamos información personal, cómo la usamos y cómo la mantenemos segura.",
            policies: [
              {
                title: "Información que recopilamos",
                description:
                  "Brifia está diseñada para brindarle análisis financieros avanzados sin comprometer su privacidad. Nuestra aplicación no requiere acceso a datos personales para su funcionalidad. Los usuarios conservan la plena propiedad y control de sus datos en todo momento.",
              },
              {
                title: "Cómo utilizamos su información",
                description:
                  "Dado que Brifia no accede, recopila ni almacena sus datos personales o financieros, no existen usos directos de dicha información. Sin embargo, podemos recopilar y agregar el comportamiento anónimo del usuario para mejorar nuestra aplicación y nuestros servicios. Estos datos agregados no se pueden rastrear hasta ningún usuario individual.",
              },
              {
                title: "Seguridad de los datos",
                description:
                  "Nos tomamos en serio su privacidad digital e implementamos una variedad de medidas de seguridad para mantener la seguridad de su información personal. Sin embargo, es importante tener en cuenta que ningún método de transmisión a través de Internet o método de almacenamiento electrónico es 100% seguro. Si bien nos esforzamos por utilizar medios comercialmente aceptables para proteger su información personal, no podemos garantizar su seguridad absoluta.",
              },
              {
                title: "Compartir su información personal",
                description:
                  "No vendemos, intercambiamos ni alquilamos la información personal identificable de los usuarios a otros. Podemos compartir información demográfica agregada genérica no vinculada a ninguna información de identificación personal sobre visitantes y usuarios con nuestros socios comerciales, afiliados confiables y anunciantes para los fines descritos anteriormente.",
              },
              {
                title: "Cambios a esta Política de Privacidad",
                description:
                  "Brifia se reserva el derecho de actualizar o cambiar nuestra Política de Privacidad en cualquier momento. Le notificaremos cualquier cambio publicando la nueva Política de Privacidad en esta página. Se le recomienda revisar esta Política de Privacidad periódicamente para detectar cualquier cambio.",
              },
              {
                title: "Su aceptación de estos términos",
                description:
                  "Al utilizar esta aplicación, usted indica que acepta esta política. Si no está de acuerdo con esta política, no utilice nuestra aplicación. Su uso continuado de la aplicación después de la publicación de cambios a esta política se considerará su aceptación de dichos cambios.",
              },
              {
                title: "Contáctenos",
                description:
                  "Si tiene alguna pregunta sobre esta Política de Privacidad, las prácticas de esta aplicación o sus relaciones con esta aplicación, contáctenos en:",
              },
            ],
          },

          terms: {
            pageTitle: "Condiciones de uso",
            header: "Condiciones de uso de Brifia",
            date: "Última actualización: 2024-02-01",
            description:
              "Bienvenido a Brifia, tu plataforma de asesoramiento financiero impulsada por IA. Al suscribirse a nuestros servicios, usted acepta cumplir y estar sujeto a los siguientes términos y condiciones de uso. Revise estos términos detenidamente.",
            termsData: [
              {
                title: "Aceptación de Términos",
                description:
                  "BAl acceder y utilizar la aplicación Brifia, usted acepta y acepta estar sujeto a estos términos. Si no está de acuerdo con estos términos, no debe utilizar la aplicación Brifia.",
              },
              {
                title: "Suscripción",
                description:
                  "El acceso a la plataforma Brifia depende de su suscripción activa. Sus derechos para utilizar la plataforma y sus servicios no son transferibles y solo están disponibles para usted mientras su suscripción esté activa y al día.",
              },
              {
                title: "Restricciones de uso",
                subHeader: "Tiene expresamente prohibido:",
                description: `Intentar piratear, desestabilizar o adaptar la plataforma Brifia y su código subyacente para su uso personal o comercial.Copiar, distribuir o divulgar cualquier parte de la plataforma en cualquier medio, incluido, entre otros, cualquier "scraping" automatizado o no automatizado.`,
                bottomText:
                  "Usar la plataforma de cualquier forma que viole cualquier ley o regulación local, nacional o internacional aplicable.",
              },
              {
                title: "Cumplimiento Legal y Responsabilidad",
                description:
                  "Brifia brinda asesoramiento basado en las normas tributarias vigentes y no aboga, fomenta ni apoya el incumplimiento de la ley. La plataforma no debe utilizarse para actividades destinadas a eludir las leyes y regulaciones locales. Cualquier intento de utilizar Brifia para dichos fines está estrictamente prohibido y se realiza bajo su propio riesgo y responsabilidad.",
              },
              {
                title: "Exención de responsabilidad",
                description:
                  "Si bien Brifia se esfuerza por brindar asesoramiento financiero preciso y actualizado, la aplicación de este asesoramiento a su situación específica depende de una variedad de factores. En consecuencia, si encuentra problemas como resultado de seguir los consejos brindados por Brifia, asume toda la responsabilidad por estas acciones y sus resultados. Brifia, sus creadores y afiliados no serán responsables de ningún daño directo, indirecto, incidental, consecuente o punitivo que resulte de su acceso o uso de la plataforma.",
              },
              {
                title: "Propiedad intelectual",
                description:
                  "El contenido, la disposición y el diseño de la aplicación Brifia, incluidos, entre otros, el texto, los gráficos, las fotografías, los logotipos y el video, son propiedad exclusiva de Brifia o sus licenciantes con todos los derechos reservados.",
              },
              {
                title: "Terminación",
                description:
                  "Brifia se reserva el derecho de cancelar su acceso a la plataforma sin previo aviso ni responsabilidad, por cualquier motivo, incluido, entre otros, el incumplimiento de estos Términos de uso.",
              },
              {
                title: "Enmiendas",
                description:
                  "Brifia se reserva el derecho de modificar o reemplazar estos Términos de uso en cualquier momento. Usted es responsable de revisar periódicamente estos Términos de uso para obtener un aviso oportuno de dichas modificaciones.",
              },
              {
                title: "Ley aplicable",
                description:
                  "Estos Términos de uso se regirán e interpretarán de acuerdo con las leyes de la jurisdicción en la que opera Brifia, sin dar efecto a ningún principio de conflicto de leyes.",
              },
              {
                title: "Información de contacto",
                description:
                  "Si tiene alguna pregunta o inquietud sobre estos Términos de uso, contáctenos a info@brifia.com",
              },
            ],
            footerText:
              "Su acceso y uso de la plataforma Brifia está condicionado a su aceptación y cumplimiento de estos Términos de uso. Estos Términos se aplican a todos los visitantes, usuarios y otras personas que acceden o utilizan la plataforma. Al acceder o utilizar la plataforma, usted acepta estar sujeto a estos Términos.",
          },
        },
      },
      de: {
        translation: {
          header: {
            button: "Anfangen",
          },
          hero: {
            header: {
              wordOne: "Ihr",
              wordTwo: "Finanz",
              wordThree: "prognosesystem",
            },
            subHeader: {
              textOne: "Integrieren Sie CRM-Daten",
              textTwo: "Fügen Sie finanzielle Leistungskennzahlen hinzu",
              textThree: "Führen Sie erweiterte Prognosen durch",
            },
            banner: {
              textOne: "Vertrauen von...",
              textTwo: "Über 10.000",
              textThree: "Benutzer",
            },
          },
          plans: {
            buttonText: "Abone",
            header: "Pläne",
            subHeader: "Bringen Sie Ihr Geschäft zum Fließen",
            pricing: [
              {
                title: "Klein",
                date: "Monat",
                price: "€999",
                features: [
                  "Analysieren Sie Unternehmensberichte",
                  "Finanzielle Gesundheit verstehen",
                  "Verstehen Sie das Kundenverhalten",
                  "Verstehen Sie Markttrends",
                ],
              },
              {
                title: "Mittel",
                date: "Monat",
                price: "€1999",
                features: [
                  "Analysieren Sie Unternehmensberichte",
                  "Finanzielle Gesundheit verstehen",
                  "Verstehen Sie das Kundenverhalten",
                  "Verstehen Sie Markttrends",
                  "KI-Berater und Analyst",
                  "Vorhersage der finanziellen Gesundheit",
                  "Vorhersage des Kundenverhaltens",
                  "Vorhersage von Markttrends",
                ],
              },
              {
                title: "Groß",
                date: "Monat",
                price: "€2999",
                features: [
                  "Analysieren Sie Unternehmensberichte",
                  "Finanzielle Gesundheit verstehen",
                  "Verstehen Sie das Kundenverhalten",
                  "Verstehen Sie Markttrends",
                  "KI-Berater und Analyst",
                  "Vorhersage der finanziellen Gesundheit",
                  "Vorhersage des Kundenverhaltens",
                  "Vorhersage von Markttrends",
                  "Maßgeschneiderte Modelle",
                  "Persönlicher Berater",
                ],
              },
            ],
          },
          features: {
            header: "Hauptmerkmale",
            subHeaderOne: "Brifias hochmoderne Fähigkeiten",
            subHeaderTwo:
              "Integration und Analyse von Daten für prädiktive Finanzeinblicke",
            featuresData: [
              {
                title: "Datenintegration",
                description:
                  "Brifia ruft nahtlos Daten aus dem CRM-System Ihres Unternehmens ab, darunter Verkaufsprognosen, Kundeninteraktionen und Transaktionshistorie, zusammen mit Finanzdaten wie Ausgaben, Einnahmen und Cashflows.",
                points: [
                  "Konsolidiert CRM- und Finanzdaten",
                  "Erfasst Verkäufe, Kundeninteraktionen und Finanztransaktionen",
                  "Bietet ein einheitliches Datenökosystem für die Analyse",
                ],
                img: "data",
              },
              {
                title: "KI-gestützte Analysen",
                description:
                  "Brifia nutzt KI-Algorithmen, um diese integrierten Daten zu analysieren und Muster und Trends zu erkennen, die menschliche Analysten möglicherweise übersehen. Dazu gehört die Vorhersage zukünftiger Umsatztrends auf der Grundlage vergangener CRM-Daten und deren Korrelation mit den finanziellen Ergebnissen.",
                points: [
                  "Nutzt KI, um Muster und Trends aufzudecken",
                  "Prognostiziert zukünftige Umsatz- und Finanzergebnisse",
                  "Bietet Einblicke, die über die Möglichkeiten menschlicher Analyse hinausgehen",
                ],
                img: "ai",
              },
              {
                title: "Maßgeschneiderte Prognosemodelle",
                description:
                  "Mit Brifia können Sie die KI-Modelle an die spezifischen Anforderungen Ihres Unternehmens anpassen und sie an branchenspezifische Faktoren, saisonale Schwankungen oder einzigartige Geschäftszyklen anpassen.",
                points: [
                  "Passt KI-Modelle an spezifische Geschäftsanforderungen an",
                  "Passt sich an Branche, Saisonalität und Konjunkturzyklen an",
                  "Verbessert die Prognosegenauigkeit und -relevanz",
                ],
                img: "forecasting",
              },
              {
                title: "Szenarioplanung",
                description:
                  "Mit Brifia können Unternehmen verschiedene Szenarien simulieren (z. B. Änderungen der Marktbedingungen, Einführung neuer Produkte) und sehen, wie sich diese auf ihre finanzielle Zukunft auswirken könnten.",
                points: [
                  "Simuliert ein potenzielles Geschäftsszenario",
                  "Bewertet die Auswirkungen von Marktveränderungen oder neuen Produkten",
                  "Unterstützt strategische Entscheidungsprozesse",
                ],
                img: "planning",
              },
              {
                title: "Echtzeit-Einblicke",
                description:
                  "Brifia bietet Echtzeitprognosen, sodass Sie unmittelbare finanzielle Auswirkungen von Änderungen in den CRM-Daten Ihres Unternehmens erkennen können, wie z. B. einen Anstieg der Kundenanfragen oder einen Umsatzrückgang.",
                points: [
                  "Bietet sofortige Aktualisierungen der Finanzprognosen",
                  "Reagiert schnell auf CRM-Datenänderungen",
                  "Ermöglicht eine proaktive Unternehmensführung",
                ],
                img: "insights",
              },
              {
                title: "Risikobewertung",
                description:
                  "Durch die Analyse historischer Daten ermöglicht Brifia eine frühzeitige Erkennung finanzieller Risiken und bietet Frühwarnungen, sodass Sie und Ihr Unternehmen proaktive Maßnahmen",
                points: [
                  "Analysiert historische Daten zur Risikoidentifizierung",
                  "Bietet Frühwarnungen vor finanziellen Bedrohungen",
                  "Ermöglicht proaktive Risikomanagementstrategien",
                ],
                img: "assessments",
              },
              {
                title: "Compliance und Berichterstattung",
                description:
                  "Brifia hilft auch bei der Sicherstellung der finanziellen Compliance, rationalisiert den Berichterstattungsprozess und erleichtert den Austausch von Erkenntnissen mit Stakeholdern.",
                points: [
                  "Stellt die Einhaltung der Finanzvorschriften sicher",
                  "Optimiert den Finanzberichtsprozess",
                  "Vereinfacht den Austausch von Erkenntnissen mit Stakeholdern",
                ],
                img: "reporting",
              },
            ],
          },
          product: {
            header: "Produkt",
            text: "Optimieren Sie Geschäftsanfragen und Arbeitsabläufe mit Brifia.",
          },
          benefits: {
            header: "Vorteile",
            subHeader:
              "Maximierung des Werts mit Brifia: Schlüsselvorteile freigeschaltet",
            benefitsData: [
              {
                title: "Informierte Entscheidungsfindung",
                description:
                  "Bessere Prognosen führen zu fundierteren Geschäftsentscheidungen.",
                icon: "benefit",
              },
              {
                title: "Effizienz",
                description:
                  "Spart Zeit und Ressourcen im Vergleich zur manuellen Analyse",
                icon: "benefit",
              },
              {
                title: "Wettbewerbsvorteil",
                description:
                  "Erweiterte Erkenntnisse können einen Wettbewerbsvorteil bei der strategischen Planung verschaffen.",
                icon: "benefit",
              },
              {
                title: "Risikominderung",
                description:
                  "Die frühzeitige Erkennung finanzieller Risiken kann Unternehmen vor potenziellen Krisen bewahren",
                icon: "benefit",
              },
            ],
          },
          transform: {
            header:
              "Transformation der Wirtschaftsanalyse mit KI: Wie Brifia Wirtschaftsprüfungsgesellschaften und professionelle Berater unterstützt",
          },
          contact: {
            header: "Bringen Sie Ihr Geschäft zum Fließen",
            buttonText: "Kontaktiere uns",
          },
          footer: {
            firstLink: "Datenschutzrichtlinie",
            secondLink: "Nutzungsbedingungen",
          },

          privacyPolicy: {
            pageTitle: "Datenschutzrichtlinie",
            header: "Datenschutzrichtlinie für Brifia",
            date: "Letzte Aktualisierung: 01.02.2024",
            description:
              "Bei Brifia ist es uns ein Anliegen, das Vertrauen unserer Nutzer aufrechtzuerhalten. In dieser Datenschutzrichtlinie geben wir detaillierte Informationen darüber, wann und warum wir personenbezogene Daten sammeln, wie wir sie verwenden und wie wir sie schützen.",
            policies: [
              {
                title: "Informationen, die wir sammeln",
                description:
                  "Brifia wurde entwickelt, um Ihnen erweiterte Finanzanalysen zu ermöglichen, ohne Ihre Privatsphäre zu gefährden. Für die Funktionalität unserer Anwendung ist kein Zugriff auf personenbezogene Daten erforderlich. Benutzer behalten jederzeit das volle Eigentum und die Kontrolle über ihre Daten.",
              },
              {
                title: "Wie wir Ihre Daten verwenden",
                description:
                  "Da Brifia nicht auf Ihre persönlichen oder finanziellen Daten zugreift, diese erhebt oder speichert, gibt es keine direkte Verwendung dieser Informationen. Wir können jedoch anonymisiertes Nutzerverhalten erfassen und aggregieren, um unsere Anwendung und Dienste zu verbessern. Diese aggregierten Daten lassen keinen Rückschluss auf einen einzelnen Nutzer zu.",
              },
              {
                title: "Datensicherheit",
                description:
                  "Wir nehmen Ihre digitale Privatsphäre ernst und ergreifen verschiedene Sicherheitsmaßnahmen, um die Sicherheit Ihrer persönlichen Daten zu gewährleisten. Es ist jedoch wichtig zu beachten, dass keine Methode der Übertragung über das Internet und keine Methode der elektronischen Speicherung zu 100 % sicher ist. Obwohl wir uns bemühen, Ihre personenbezogenen Daten mit kommerziell akzeptablen Mitteln zu schützen, können wir deren absolute Sicherheit nicht garantieren.",
              },
              {
                title: "Weitergabe Ihrer persönlichen Daten",
                description:
                  "Wir verkaufen, handeln oder vermieten die identifizierbaren persönlichen Daten der Benutzer nicht an andere. Für die oben genannten Zwecke können wir generische aggregierte demografische Informationen, die nicht mit personenbezogenen Identifikationsdaten von Besuchern und Nutzern verknüpft sind, an unsere Geschäftspartner, vertrauenswürdigen verbundenen Unternehmen und Werbetreibenden weitergeben.",
              },
              {
                title: "Änderungen dieser Datenschutzrichtlinie",
                description:
                  "Brifia behält sich das Recht vor, unsere Datenschutzrichtlinie jederzeit zu aktualisieren oder zu ändern. Wir werden Sie über alle Änderungen informieren, indem wir die neue Datenschutzrichtlinie auf dieser Seite veröffentlichen. Wir empfehlen Ihnen, diese Datenschutzrichtlinie regelmäßig auf etwaige Änderungen zu überprüfen.",
              },
              {
                title: "Ihre Zustimmung zu diesen Bedingungen",
                description:
                  "Durch die Nutzung dieser App erklären Sie Ihr Einverständnis mit dieser Richtlinie. Wenn Sie dieser Richtlinie nicht zustimmen, nutzen Sie unsere App bitte nicht. Ihre fortgesetzte Nutzung der App nach der Veröffentlichung von Änderungen an dieser Richtlinie gilt als Ihre Zustimmung zu diesen Änderungen.",
              },
              {
                title: "Kontaktieren Sie uns",
                description:
                  "Wenn Sie Fragen zu dieser Datenschutzrichtlinie, den Praktiken dieser App oder Ihrem Umgang mit dieser App haben, kontaktieren Sie uns bitte unter:",
              },
            ],
          },

          terms: {
            pageTitle: "Nutzungsbedingungen",
            header: "Nutzungsbedingungen für Brifia",
            date: "Letzte Aktualisierung: 01.02.2024",
            description:
              "Willkommen bei Brifia, Ihrer KI-gestützten Finanzberatungsplattform. Indem Sie unsere Dienste abonnieren, erklären Sie sich damit einverstanden, die folgenden Nutzungsbedingungen einzuhalten und an diese gebunden zu sein. Bitte lesen Sie diese Bedingungen sorgfältig durch.",
            termsData: [
              {
                title: "Annahme der Bedingungen",
                description:
                  "Indem Sie auf die Brifia-App zugreifen und diese nutzen, akzeptieren Sie diese Bedingungen und stimmen ihnen zu, an sie gebunden zu sein. Wenn Sie diesen Bedingungen nicht zustimmen, sollten Sie die Brifia-App nicht verwenden.",
              },
              {
                title: "Abonnement",
                description:
                  "Der Zugriff auf die Brifia-Plattform ist von Ihrem aktiven Abonnement abhängig. Ihre Rechte zur Nutzung der Plattform und ihrer Dienste sind nicht übertragbar und stehen Ihnen nur zur Verfügung, solange Ihr Abonnement aktiv und in gutem Zustand ist.",
              },
              {
                title: "Nutzungsbeschränkungen",
                subHeader: "Es ist Ihnen ausdrücklich untersagt:",
                description: `Der Versuch, die Brifia-Plattform und den zugrunde liegenden Code für Ihren persönlichen oder kommerziellen Gebrauch zu hacken, zu destabilisieren oder anzupassen.Das Kopieren, Verteilen oder Offenlegen von Teilen der Plattform in einem beliebigen Medium, insbesondere durch automatisiertes oder nichtautomatisiertes „Scraping“.`,
                bottomText:
                  "Nutzung der Plattform in einer Weise, die gegen geltende lokale, nationale oder internationale Gesetze oder Vorschriften verstößt.",
              },
              {
                title: "Rechtskonformität und Verantwortung",
                description:
                  "Brifia berät auf der Grundlage der geltenden Steuervorschriften und befürwortet, ermutigt oder unterstützt keine Gesetzesverstöße. Die Plattform darf nicht für Aktivitäten genutzt werden, die darauf abzielen, lokale Gesetze und Vorschriften zu umgehen. Jeder Versuch, Brifia für solche Zwecke zu nutzen, ist strengstens untersagt und erfolgt auf Ihr eigenes Risiko und Ihre eigene Verantwortung.",
              },
              {
                title: "Haftungsausschluss",
                description:
                  "Während Brifia bestrebt ist, genaue und aktuelle Finanzberatung bereitzustellen, hängt die Anwendung dieser Beratung auf Ihre spezifische Situation von einer Vielzahl von Faktoren ab. Wenn Sie aufgrund der Befolgung der Ratschläge von Brifia auf Probleme stoßen, übernehmen Sie daher die volle Verantwortung für diese Maßnahmen und deren Ergebnisse. Brifia, seine Urheber und verbundenen Unternehmen haften nicht für direkte, indirekte, zufällige, Folge- oder Strafschäden, die sich aus Ihrem Zugriff auf oder Ihrer Nutzung der Plattform ergeben.",
              },
              {
                title: "Geistiges Eigentum",
                description:
                  "TDer Inhalt, die Anordnung und das Layout der Brifia-App, einschließlich, aber nicht beschränkt auf Texte, Grafiken, Fotos, Logos und Videos, sind Eigentum von Brifia oder seinen Lizenzgebern, alle Rechte vorbehalten",
              },
              {
                title: " Kündigung",
                description:
                  "Brifia behält sich das Recht vor, Ihren Zugriff auf die Plattform ohne Vorankündigung oder Haftung aus beliebigem Grund, einschließlich, aber nicht beschränkt auf einen Verstoß gegen diese Nutzungsbedingungen, zu sperren.",
              },
              {
                title: "Änderungen",
                description:
                  "Brifia behält sich das Recht vor, diese Nutzungsbedingungen jederzeit zu ändern oder zu ersetzen. Sie sind dafür verantwortlich, diese Nutzungsbedingungen regelmäßig zu überprüfen, um rechtzeitig über solche Änderungen informiert zu werden.",
              },
              {
                title: "Anwendbares Recht",
                description:
                  "Diese Nutzungsbedingungen unterliegen den Gesetzen der Gerichtsbarkeit, in der Brifia tätig ist, und werden in Übereinstimmung mit diesen ausgelegt, ohne dass etwaige Grundsätze des Kollisionsrechts in Kraft treten.",
              },
              {
                title: "Kontaktinformationen",
                description:
                  "Wenn Sie Fragen oder Bedenken zu diesen Nutzungsbedingungen haben, kontaktieren Sie uns bitte unter info@brifia.com",
              },
            ],
            footerText:
              "Ihr Zugriff auf die Brifia-Plattform und deren Nutzung setzen voraus, dass Sie diese Nutzungsbedingungen akzeptieren und einhalten. Diese Bedingungen gelten für alle Besucher, Benutzer und andere, die auf die Plattform zugreifen oder diese nutzen. Durch den Zugriff auf oder die Nutzung der Plattform erklären Sie sich mit diesen Bedingungen einverstanden.",
          },
        },
      },
    },
  });
