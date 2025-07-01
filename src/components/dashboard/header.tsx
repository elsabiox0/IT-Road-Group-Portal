"use client";

import Link from "next/link";
import { UserNav } from "@/components/dashboard/user-nav";
import { Logo } from "@/components/icons/logo";

export function DashboardHeader() {
  return (
    <header className="sticky top-0 z-40 flex h-16 items-center gap-4 border-b bg-card px-4 md:px-6">
      <nav className="flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
        <Link
          href="/dashboard"
          className="flex items-center gap-2 text-lg font-semibold md:text-base"
        >
          <Logo className="h-7 w-7" />
          <span className="sr-only">IT Road Group</span>
        </Link>
        <h1 className="text-lg font-semibold">IT Road Group Portal</h1>
      </nav>
      <div className="ml-auto flex items-center gap-4">
        <UserNav />
      </div>
    </header>
  );
}
