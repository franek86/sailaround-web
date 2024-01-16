import React from "react";
import Link from "next/link";

const Breadcrumbs = ({ breadcrumbs }) => {
  return (
    <nav className="block">
      <ol className="flex text-sm">
        {breadcrumbs.map((breadcrumb, index) => (
          <li key={breadcrumb.href} aria-current={breadcrumb.active} className={breadcrumb.active ? "text-blue-400" : "text-gray-500"}>
            <Link href={breadcrumb.href}>{breadcrumb.label}</Link>
            {index < breadcrumbs.length - 1 ? <span className="mx-3 inline-block">/</span> : null}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
