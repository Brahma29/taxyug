import Image from "next/image";
import React from "react";
import Link from "next/link";
import Icons from "@/components/Icons";

//Assets
import servicesBg from "@/assets/images/services_hero_bg.png";
import accountingSolutionsService from "@/assets/images/accounting_solutions.png";
import taxationService from "@/assets/images/taxation_service.png";
import auditService from "@/assets/images/audit_service.png";
import secretarialService from "@/assets/images/secretarial_service.png";
import listingMattersService from "@/assets/images/listing_matters.png";
import otherMattersService from "@/assets/images/other_matters.png";
import otherExpertiseService from "@/assets/images/other_expertise.png";

const Services = () => {
  return (
    <div>
      <div className="relative">
        <Image
          src={servicesBg}
          alt="services"
          className="absolute -z-10 h-full object-cover"
        />
        <div className="bg-black bg-opacity-40 pt-72 pb-10 md:px-0  px-6 text-white">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-6xl tracking-wider font-bold">Services</h1>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto md:px-0 px-6 my-20">
        <ServiceRow
          name="Accounting Solutions"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum sapiente dolor amet dolorum maiores odio laboriosam totam inventore aliquam, sequi, asperiores repellendus! Officiis quos enim nisi corrupti id laboriosam ab mollitia explicabo. Corrupti porro quasi reprehenderit ullam possimus, veniam quisquam?"
          image={accountingSolutionsService}
          features={[
            "Complete Accounts preparation, Filing and Vouching on retainership basis.",
            "Drafting of Projected/Estimated and Current Balance Sheet, Profit & Loss Account.",
            "Data entry and Data Bank management.",
          ]}
          buttonLink="/"
        />

        <ServiceRow
          name="Direct & Indirect Taxation"
          description="Expert solutions for direct and indirect taxation. Optimize compliance and efficiency with our tailored services."
          image={taxationService}
          features={[
            "Filing of Income-tax returns of residents and non-residents individuals, domestic and foreign companies and other entities.",
            "Tax Planning, Compliance with notices, assessment and department representation.",
            "CA, CS Certifications – Net Worth, Gross Total Income, Other compliance, etc",
            "GST Registration, Compliance, Return Filling Etc",
            "TDS/TCS Registration, Online payment, Return filing, etc",
            "VAT and Sales Tax (CST) Registration, Online payment, Return filing, etc.",
            "Registration, filing and compliance of Professional Tax, Trade License, ESI, Provident Fund, Trade mark etc",
          ]}
          buttonLink="/"
        />

        <ServiceRow
          name="Audit and Consultancy Service"
          description="Enhance your business with our audit and consultancy services. Trust our expertise for comprehensive solutions tailored to your needs."
          image={auditService}
          features={[
            "Experienced Chartered accountant for Internal Audit, Statutory Audit, Stock Audit, Cash-Credit Audit, Stores Audit, Concurrent audit.",
            "Taxation, Legal and financial consultancy.",
            "Tax Planning and Financial management consultancy.",
            "GST Consultancy and Audit Compliances.",
          ]}
          buttonLink="/"
        />

        <ServiceRow
          name="Secretarial Services"
          description="Enhance your business with our audit and consultancy services. Trust our expertise for comprehensive solutions tailored to your needs."
          image={secretarialService}
          features={[
            "Maintenance and Review of statutory records and registers.",
            "Audit and Due Diligence of secretarial compliance",
            "Maintenance of minutes book, Legal Drafting and Corporate Governance.",
            "Search Report Preparation and Charge Creation with ROC.",
            "Preparation and filing of various forms with the ROC.",
            "Incorporation of Private and Public Company,",
            "Annual filing, XBRL filing and LLP filing.",
            "Advising on various matters under the Companies Act, 2013 including appearance before the Company Law Board.",
            "Assisting in Winding-up of companies/striking off the name from the Registrar of Companies under the Act.",
            "Restoration of Companies through High Court and Registrar of Companies.",
          ]}
          buttonLink="/"
        />

        <ServiceRow
          name="Listing Matters"
          description="Navigate listing matters confidently with our expert guidance. Benefit from tailored solutions to optimize your listing process seamlessly."
          image={listingMattersService}
          features={["Work related to Merger, Demerger and Amalgamation."]}
          buttonLink="/"
        />

        <ServiceRow
          name="Other Matters"
          description="Navigate listing matters confidently with our expert guidance. Benefit from tailored solutions to optimize your listing process seamlessly."
          image={otherMattersService}
          features={[
            "Formation of Trust under Societies Registration Act, formation of Partnership Firm, Registration under Section 12A and 80G of the Income Tax Act, 1961.",
            "PAN application, TAN application, Digital Signature Certificate (DSC) creation.",
            "Drafting and vetting of Agreements, Drafting of Memorandum of understanding, Gift Deed registration, Property Registration.",
            "Trademark, Copyright and Patents registration.",
            "Associated with many reputed with CA, CS, CWA, Lawyers, Bank Managers, etc.",
            "Registration of Trade License (West Bengal Only)",
            "Registration of Professional Tax (West Bengal Only)",
            "Registration of Professional Tax (West Bengal Only)",
            "Application and registration of Trade Mark/Copyright",
          ]}
          buttonLink="/"
        />

        <ServiceRow
          name="Other Expertise"
          description="Feel free to contact us for any tailored solution."
          image={otherExpertiseService}
          features={["Forensic Audit and Fraud Detection"]}
          buttonLink="/"
        />
      </div>
    </div>
  );
};

const ServiceRow = ({ name, description, image, features, buttonLink }) => {
  return (
    <div className="service flex md:gap-28 gap-4 md:even:flex-row-reverse mb-20 md:flex-row flex-col">
      <div className="md:w-2/3 flex flex-col gap-4 md:order-1 order-2">
        <h2 className="text-3xl font-bold text-primary">{name}</h2>
        <p className="text-lg">{description}</p>
        <ul className="list-outside list-disc text-lg flex flex-col gap-1">
          {features.map((f, i) => (
            <li key={i}>{f}</li>
          ))}
        </ul>

        <Link href={buttonLink}>
          <div className="flex items-center gap-2">
            <p className="text-sm font-medium text-primary">Contact Us</p>
            <Icons.RightArrow />
          </div>
        </Link>
      </div>

      <div className="md:w-1/3 md:rounded-tl-[10rem] md:rounded-br-[10rem] overflow-hidden">
        <Image src={image} alt={name} className="object-cover md:h-auto h-72" />
      </div>
    </div>
  );
};

export default Services;
