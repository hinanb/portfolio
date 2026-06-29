"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/constants";

const terminalLines = [
  "$ whoami",
  "> Hinan Bilal",
  "$ cat role.txt",
  "> Senior Java Full Stack Engineer",
  "$ echo $STACK",
  "> Spring Boot · Microservices · Kafka · AWS",
];

export function Hero() {
  return (
    <section className="py-20 sm:py-28">
      <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <p className="font-mono text-sm text-accent">Hello, world.</p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            I build{" "}
            <span className="text-gradient">scalable systems</span> that handle
            real-world scale.
          </h1>
          <p className="max-w-xl text-lg text-muted-foreground">
            {siteConfig.description}
          </p>
          <div className="flex flex-wrap gap-3">
            <Button asChild size="lg">
              <Link href="/resume">
                <Download className="h-4 w-4" />
                View Resume
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/contact">
                Contact Me
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="rounded-lg border border-border bg-card p-6 font-mono text-sm"
        >
          <div className="mb-4 flex gap-2">
            <div className="h-3 w-3 rounded-full bg-red-500/80" />
            <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
            <div className="h-3 w-3 rounded-full bg-green-500/80" />
          </div>
          <div className="space-y-2">
            {terminalLines.map((line, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 + i * 0.15 }}
                className={
                  line.startsWith("$")
                    ? "text-accent"
                    : "pl-4 text-muted-foreground"
                }
              >
                {line}
              </motion.p>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export function Stats() {
  const stats = [
    { label: "Years Experience", value: "5+" },
    { label: "Logs Processed", value: "1TB+" },
    { label: "Monthly Users", value: "150M+" },
    { label: "Startup Acquired", value: "1" },
  ];

  return (
    <section className="border-y border-border py-12">
      <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="text-center"
          >
            <p className="text-3xl font-bold text-accent sm:text-4xl">
              {stat.value}
            </p>
            <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
