const SERVICE = (slug) => `/services/${slug}`;
const REG = (slug) => `/registrations/${slug}`;
const BOOK = (slug) => `/book-keeping-audit/${slug}`;
const COMPLIANCE = (slug) => `/compliance/${slug}`; // ✅ fixed

export const ROUTES = {
  HOME: "/",

  SERVICES: {
    COMPANY_REGISTRATION: SERVICE("company-registration"),
    GST_FILING: SERVICE("gst-filing"),
    AUDIT_SERVICES: SERVICE("audit-services"),
    ONE_PERSON_COMPANY: SERVICE("one-person-company"),
    LLP_REGISTRATION: SERVICE("llp-registration"),
    SUBSIDIARY_FOREIGN_COMPANY: SERVICE("subsidiary-of-foreign-company"),
  },

  REGISTRATION: {
    TRADEMARK: REG("gst-filing"),
    MSME: REG("msme-registration"),
    GST: REG("gst-registration"),
    SHOPS: REG("shops-establishment"),
    FOOD: REG("food-license"),
    PROFESSIONAL_TAX: REG("professional-tax-registration"),
  },

  BOOK_KEEPING: {
    OUTSOURCE_ACCOUNTING: BOOK("audit-services"), // ✅ fixed
    PAYROLL_COMPLIANCE: BOOK("payroll-compliance"),
    COMPANY_AUDIT: BOOK("company-audit-services"),
  },

   COMPLIANCE: {
    PRIVATE_LIMITED: COMPLIANCE("private-limited-compliances"),
    INCOME_TAX: COMPLIANCE("income-tax-filing"),
    GST_RETURN: COMPLIANCE("gst-return-filing"),
    TDS_RETURN: COMPLIANCE("tds-returns"),
    PF_ESI_PT: COMPLIANCE("pf-esi-pt-returns"),
  },


  // ✅ NEW (FOR "MORE" MENU)
  MORE: {
    KNOWLEDGE_CENTRE: "/knowledge-centre",
    CAREERS: "/careers",
    CONTACT: "/contact",
    PARTNER: "/associations",
  },

  ABOUT: "/about",
  CONTACT: "/contact",
  PRICING: "/pricing",
};