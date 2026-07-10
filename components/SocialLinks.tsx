import Link from "next/link";

import { Icon } from "@/components/Icon";
import { socialLinks } from "@/src/content/siteContent";

export function SocialLinks() {
  return (
    <div className="flex flex-wrap gap-3">
      {socialLinks.map((item) => (
        <Link
          key={item.name}
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-4 py-2 text-sm font-medium text-slate-600 hover:border-brand-blue hover:text-brand-blue"
        >
          <Icon name={item.name} className="h-4 w-4" />
          <span>{item.name}</span>
        </Link>
      ))}
    </div>
  );
}
