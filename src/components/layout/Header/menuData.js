import { ROUTES } from "@/constants/routes";
import { BookOpen, Briefcase, Phone, Handshake } from "lucide-react";
export const menuData = [
  {
    title: "Start A Business",
    children: [
      {
        title: "Private Limited Company",
        href: ROUTES.SERVICES.COMPANY_REGISTRATION,
      },
      {
        title: "One Person Company",
        href: ROUTES.SERVICES.ONE_PERSON_COMPANY, // ✅ fixed
      },
      {
        title: "LLP Registration",
        href: ROUTES.SERVICES.LLP_REGISTRATION, // ✅ fixed
      },
      {
        title: "Subsidiary of Foreign Company",
        href: ROUTES.SERVICES.SUBSIDIARY_FOREIGN_COMPANY,
      },
    ],
  },

  {
    title: "Registrations",
    children: [
      {
        title: "Trademark Registration",
        href: ROUTES.REGISTRATION.TRADEMARK,
      },
      {
        title: "MSME Registration",
        href: ROUTES.REGISTRATION.MSME,
      },
      {
        title: "GST Registration",
        href: ROUTES.REGISTRATION.GST,
      },
      {
        title: "Shops & Establishment",
        href: ROUTES.REGISTRATION.SHOPS,
      },
      {
        title: "Food License",
        href: ROUTES.REGISTRATION.FOOD,
      },
      {
        title: "Professional Tax Registration",
        href: ROUTES.REGISTRATION.PROFESSIONAL_TAX,
      },
    ],
  },

  {
    title: "Book Keeping & Audit",
    children: [
      {
        title: "Outsource Accounting",
        href: ROUTES.BOOK_KEEPING.OUTSOURCE_ACCOUNTING,
      },
      {
        title: "Payroll Compliance",
        href: ROUTES.BOOK_KEEPING.PAYROLL_COMPLIANCE,
      },
      {
        title: "Company Audit Services",
        href: ROUTES.BOOK_KEEPING.COMPANY_AUDIT,
      },
    ],
  },

  {
    title: "Compliance",
    children: [
      {
        title: "Private Limited Compliances",
        href: ROUTES.COMPLIANCE.PRIVATE_LIMITED,
      },
      {
        title: "Income Tax Returns",
        href: ROUTES.COMPLIANCE.INCOME_TAX,
      },
      {
        title: "GST Return Filing",
        href: ROUTES.COMPLIANCE.GST_RETURN,
      },
      {
        title: "TDS Returns",
        href: ROUTES.COMPLIANCE.TDS_RETURN,
      },
      {
        title: "PF, ESI & PT Returns",
        href: ROUTES.COMPLIANCE.PF_ESI_PT,
      },
    ],
  },

  {
    title: "Packages",
    href: ROUTES.PRICING
  },
  {
    title: "More",
    children: [
      // {
      //   title: "Knowledge Centre",
      //   href: "/knowledge-centre",
      //   icon: BookOpen,
      // },
      {
        title: "Careers",
        href: "/careers",
        icon: Briefcase,
      },
      {
        title: "Contact Us",
        href: ROUTES.MORE.CONTACT,
        icon: Phone,
      },
      {
        title: "Partner With Us",
        href: ROUTES.MORE.PARTNER,
        icon: Handshake,
      },
    ],
  },
];