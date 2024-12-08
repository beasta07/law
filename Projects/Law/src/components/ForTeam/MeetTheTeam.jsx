import { motion } from "framer-motion";
import { TeamMember } from "./TeamMember";

const teamMembers = [
  {
    name: "Ad. Biraj Dhoj Thapa",
    role: "Managing Partner",
    imageUrl: "/placeholder.svg?height=300&width=300",
    attributes: [
      "Drafting of court cases and legal opinion on commercial matters and Writ petitions.",
      "Contract drafting, Contract reviews, Corporate and Company Act compliance, legal audit and legal due diligence.",
      "Department of Industries compliances & approvals, foreign direct investments compliances, Labour law compliances, Trademark registration and Intellectual property law compliances, Venture capital investments compliances.",
      "Appearing at Courts and Arbitration Tribunals for pleading.",
      "Law review and legal research, Drafting of Rules, guidelines",
      "Legal Translations",
      "Insolvency Proceedings"
    ],
    experience: [
      "Arbitration, Dispute resolution and Litigation in commercial matters and disputes arising out of National and International Construction Contracts (FIDIC).",
      "Providing Corporate Compliance and Secretarial services to international and national Companies.",
      "Law Review Projects for World Bank such as Customs Law Review and Environmental Law Review, Land acquisition law review.",
      "Drafting of rules and guidelines for the local bodies."
    ],
    education: [
      "Bachelor of Laws (LL.B.), Tribhuvan University",
      "Master of Laws (LL.M.), Kathmandu School of Law",
      "Diploma in International Commercial Arbitration, Chartered Institute of Arbitrators (CIArb)"
    ],
    awards: [
      "Best Corporate Lawyer of the Year 2022, Nepal Law Society",
      "Outstanding Contribution to Legal Education, Bar Association of Nepal, 2021"
    ]
  },
  {
    name: "CA Sanjay Karmacharya",
    role: "Senior Partner",
    imageUrl: "/placeholder.svg?height=300&width=300",
    attributes: [
      "Internal Audit, statutory audit, due diligence & management audits of various entities.",
      "Feasibility studies & project reports.",
      "Setting up of financial accounting.",
      "Design & implementation of internal control system, management control systems information & reporting systems.",
      "Review of financials & strategies for Business valuations revival / improvement.",
      "Guidance on commercial laws & taxations.",
      "Consultancy relating to human resources management."
    ],
    experience: [
      "Nepal Finance Limited (Statutory Audit)",
      "Aviyan Laghubitta Bittiya Sanstha Ltd (Internal Audit)",
      "Group For Technical Assistance (Statutory Audit)",
      "Lalitpur Finance Limited (NFRS Implementation)",
      "Civil Capital Market Ltd (NFRS Implementation)",
      "Raj Brewery Pvt Ltd (Statutory Audit)",
      "Financial projection assignments of various projects",
      "Consultancy and Advisory services to various organizations"
    ],
    education: [
      "Bachelor of Commerce (B.Com), Tribhuvan University",
      "Chartered Accountant (CA), Institute of Chartered Accountants of Nepal (ICAN)",
      "Certified Information Systems Auditor (CISA), ISACA"
    ],
    awards: [
      "Best Chartered Accountant of the Year 2023, ICAN",
      "Excellence in Financial Reporting, Nepal Chamber of Commerce, 2022"
    ]
  }
];

export function MeetTheTeam() {
  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold text-center mb-12 text-gray-800"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Meet Our Expert Team
        </motion.h2>
        <div className="space-y-16">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 50 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <TeamMember {...member} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
