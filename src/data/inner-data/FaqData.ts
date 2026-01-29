interface DataType {
   id: number;
   id_name: string;
   title: string;
   md_pt?:boolean;
   faq: {
      id: number;
      question: string;
      answer: string;
   }[];
}

const inner_faq_data:DataType[] = [
   {
      id: 1,
      id_name: "Selling",
      title: "SELLING",
      md_pt:true,
      faq: [
         {
            id: 1,
            question: "Do you help with selling existing properties?",
            answer: "Yes. We help sellers understand the right market price, identify genuine buyers, and avoid unnecessary brokerage pressure. Our focus is on fair pricing, clean documentation, and smooth closure.",
         },
         {
            id: 2,
            question: "How do you decide the right price for my property?",
            answer: "We evaluate recent transaction data, locality trends, project quality, demand-supply dynamics, and comparable listings to arrive at a realistic selling price instead of inflated expectations.",
         },
         {
            id: 3,
            question: "What is the process of selling a property?",
            answer: "The process includes property assessment, pricing analysis, documentation checks, buyer shortlisting, negotiation support, and coordination until registration and handover.",
         },
         {
            id: 4,
            question: "How do you prevent frauds during resale transactions?",
            answer: "We ensure proper due diligence, verified buyer profiles, transparent communication, and legally sound agreements to reduce the risk of fraud or last-minute surprises.",
         },
      ]
   },
   {
      id: 2,
      id_name: "Renting",
      title: "RENTING",
      faq: [
         {
            id: 5,
            question: "Can a home depreciate in rental value?",
            answer: "Yes. Rental value can reduce due to oversupply, poor maintenance, location issues, or better alternatives nearby. Regular upkeep and correct pricing help retain rental demand.",
         },
         {
            id: 6,
            question: "Is renting an older home a bad decision?",
            answer: "Not necessarily. Older homes can offer better space and mature localities. What matters is construction quality, maintenance, and compliance with current safety norms.",
         },
         {
            id: 7,
            question: "What role does a broker play in renting?",
            answer: "A broker connects tenants and owners but often prioritizes speed over fit. Our approach focuses on tenant suitability, fair rent, and clear terms for both parties.",
         },
         {
            id: 8,
            question: "Who pays property tax and maintenance in a rental home?",
            answer: "Typically, property tax is paid by the owner, while maintenance may be shared or paid by the tenant depending on the agreement. These terms should always be clearly defined upfront.",
         },
      ]
   },
   {
      id: 3,
      id_name: "Buying",
      title: "BUYING",
      faq: [
         {
            id: 9,
            question: "How does PropSoch help homebuyers?",
            answer: "We guide buyers through shortlisting, site visits, risk analysis, pricing validation, legal checks, and negotiations so they can buy confidently without sales pressure.",
         },
         {
            id: 10,
            question: "How do you weigh different criteria while recommending properties?",
            answer: "We balance livability, legal safety, builder credibility, future growth, and price fairness instead of focusing only on marketing claims or discounts.",
         },
         {
            id: 11,
            question: "Do you help with refunds or booking cancellations?",
            answer: "We assist buyers in understanding cancellation clauses and work with developers to minimize losses, but final refunds depend on the builder’s policy and agreement terms.",
         },
      ]
   },
   {
      id: 4,
      id_name: "Payments",
      title: "PAYMENTS",
      faq: [
         {
            id: 12,
            question: "Which payment methods are supported?",
            answer: "Payments can be made through online transfers, bank payments, or other legally accepted methods as shared during onboarding. We do not accept cash payments.",
         },
         {
            id: 13,
            question: "Is my payment information secure?",
            answer: "Yes. All payments are processed through secure channels, and we do not store sensitive card or banking information on our systems.",
         },
         {
            id: 14,
            question: "Can I pay developers directly?",
            answer: "Yes. All property payments are made directly to the developer or owner. PropSoch does not hold or route booking or purchase amounts.",
         },
      ]
   },
   {
      id: 5,
      id_name: "Terms",
      title: "TERMS & CONDITIONS",
      faq: [
         {
            id: 15,
            question: "What services are included in the engagement?",
            answer: "Our services include research, shortlisting, site visit guidance, risk analysis, negotiation support, and coordination until booking, as defined in your engagement plan.",
         },
         {
            id: 16,
            question: "Can I exit the service midway?",
            answer: "Yes. You can choose to discontinue the service. Any applicable terms depend on the stage of engagement and services already delivered.",
         },
      ]
   },
   {
      id: 6,
      id_name: "Account",
      title: "ACCOUNT",
      faq: [
         {
            id: 17,
            question: "Do I need an account to use your services?",
            answer: "Yes. Creating an account helps us track your preferences, shortlisted properties, reports, and communication history securely.",
         },
         {
            id: 18,
            question: "Can I update my preferences after onboarding?",
            answer: "Absolutely. Buying a home is an evolving process, and we regularly refine recommendations based on updated budgets, timelines, or priorities.",
         },
      ]
   },
]

export default inner_faq_data;
