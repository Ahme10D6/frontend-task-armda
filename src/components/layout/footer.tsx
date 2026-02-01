import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  const footerSections = [
    {
      title: "Services",
      navigation: [
        {
          label: "Bonus program",
          href: "/bonus-program"
        },
        {
          label: "Gift cards",
          href: "/gift-cards"
        },
        {
          label: "Credit and payment",
          href: "/credit-and-payment"
        },
        {
          label: "Service contracts",
          href: "/service-contracts"
        }
      ]
    },
    {
      title: "Assistance to the buyer",
      navigation: [
        {
          label: "Find an order",
          href: "/find-an-order"
        },
        {
          label: "Terms of delivery",
          href: "/terms-of-delivery"
        },
        {
          label: "Exchange and return of goods",
          href: "/exchange-and-return-of-goods"
        },
        {
          label: "Guarantee",
          href: "/guarantee"
        }
      ]
    },
  ];

  return (
    <footer className="bg-black text-white py-16 mt-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          
          <div className="col-span-1 md:col-span-1">
            <h2 className="text-2xl font-bold mb-4">cyber</h2>
            <p className="text-gray-400 text-sm leading-relaxed">
              We are a residential interior design firm located in Portland. Our boutique-studio offers more than.
            </p>
          </div>

          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="font-bold mb-6">{section.title}</h3>
              <ul className="space-y-4">
                {section.navigation?.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-gray-400 hover:text-white transition-colors text-sm">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="flex gap-4 items-center">
          <Image src="/icons/twitter.svg" alt="Twitter" width={16} height={16} unoptimized />
          <Image src="/icons/facebook.svg" alt="Facebook" width={12} height={12} unoptimized />
          <Image src="/icons/tiktok.svg" alt="Tiktok" width={16} height={16} unoptimized />
          <Image src="/icons/Instagram.svg" alt="Instagram" width={16} height={16} unoptimized />
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500 text-xs">
          © 2026 Cyber. All rights reserved.
        </div>
      </div>
    </footer>
  );
}