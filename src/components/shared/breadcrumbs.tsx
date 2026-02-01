'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface BreadcrumbsProps {
  customLabels?: { [key: string]: string };
}

export default function Breadcrumbs({ customLabels }: BreadcrumbsProps) {
  const pathname = usePathname();
  const pathSegments = pathname.split('/').filter((segment) => segment !== '');

  return (
    <nav aria-label="Breadcrumb" className="flex py-4 mb-4">
      <ol className="flex items-center space-x-2 text-sm text-gray-400">
        <li>
          <Link href="/" className="hover:text-black transition-colors">Home</Link>
        </li>

        {pathSegments.map((segment, index) => {
          const href = `/${pathSegments.slice(0, index + 1).join('/')}`;
          const isLast = index === pathSegments.length - 1;
          const label = customLabels?.[segment] || segment.replace(/-/g, ' ');

          return (
            <li key={href} className="flex items-center space-x-2">
              <span>/</span>
              {isLast ? (
                <span className="font-medium text-black line-clamp-1">{label}</span>
              ) : (
                <Link href={href} className="hover:text-black transition-colors capitalize">
                  {label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}