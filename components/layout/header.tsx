"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { mainNav, moreNav, siteConfig } from "@/lib/constants";
import { Container } from "./container";

export function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="font-mono text-sm font-semibold tracking-tight">
            <span className="text-accent">$</span> hinanbilal
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {mainNav.slice(1).map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-md px-3 py-2 text-sm transition-colors hover:text-accent",
                  isActive(item.href)
                    ? "text-accent"
                    : "text-muted-foreground"
                )}
              >
                {item.label}
              </Link>
            ))}
            <div className="relative">
              <button
                onClick={() => setMoreOpen(!moreOpen)}
                className="rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-accent"
              >
                More
              </button>
              {moreOpen && (
                <>
                  <div
                    className="fixed inset-0 z-40"
                    onClick={() => setMoreOpen(false)}
                  />
                  <div className="absolute right-0 top-full z-50 mt-1 w-48 rounded-md border border-border bg-card py-1 shadow-lg">
                    {moreNav.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setMoreOpen(false)}
                        className={cn(
                          "block px-4 py-2 text-sm transition-colors hover:bg-muted hover:text-accent",
                          isActive(item.href) && "text-accent"
                        )}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </>
              )}
            </div>
          </nav>

          <button
            className="rounded-md p-2 text-muted-foreground hover:text-foreground lg:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {mobileOpen && (
          <nav className="border-t border-border py-4 lg:hidden">
            <div className="flex flex-col gap-1">
              {[...mainNav.slice(1), ...moreNav].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className={cn(
                    "rounded-md px-3 py-2 text-sm transition-colors",
                    isActive(item.href)
                      ? "bg-muted text-accent"
                      : "text-muted-foreground hover:bg-muted"
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </Container>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border py-12">
      <Container>
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} {siteConfig.name}. Built with Next.js.
          </p>
          <div className="flex gap-4 text-sm text-muted-foreground">
            <a
              href={siteConfig.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent"
            >
              GitHub
            </a>
            <a
              href={siteConfig.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent"
            >
              LinkedIn
            </a>
            <a
              href={siteConfig.links.medium}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent"
            >
              Medium
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
