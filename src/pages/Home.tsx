import React from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Globe,
  TrendingUp,
  ShieldAlert,
  Timer,
  Clock,
  Cpu,
  FileSearch,
  Search,
  Activity,
  ChevronRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { IMAGES } from '@/assets/images';
import ImageInvoice from "../assets/image (6).png"
import ImageCompliance from "../assets/standard-quality-control-collage.jpg"

const springPresets = {
  gentle: { stiffness: 300, damping: 35 },
  snappy: { stiffness: 400, damping: 30 },
};

const scrollToSection = (id: string) => {
  const element = document.getElementById(id.replace("#", ""));
  if (element) {
    const headerOffset = 80;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  }
};

const BRAND_CONFIG = {
  name: "Dice",
  tagline: "Intelligent ERP Extension for a Compliance-Driven Era",
  implementationPartner: "SQIT",
  copyright: "© 2026 Dice. All rights reserved.",
  currentYear: 2026,
}

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">

      {/* HERO */}
      <section
        id="hero"
        className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-primary"
      >
        <div className="absolute inset-0 z-0">
          <img
            src={IMAGES.HERO_BG_2}
            alt="Enterprise Intelligence"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/60 to-background" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-4xl"
          >
            <motion.div variants={fadeInUp} transition={springPresets.gentle}>
              <Badge variant="outline" className="mb-6 border-accent text-accent-foreground backdrop-blur-sm">
                Procurement. Compliance. Autonomy.
              </Badge>

              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-[1.1]">
              Smarter Procurement & Supplier Control on Your ERP
              </h1>

              <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl leading-relaxed">
                E-invoicing may be the trigger but correctness begins long before invoice submission.
                Dice validates vendors, transactions, approvals, and documents in real time so only
                compliant, audit-ready data reaches your ERP.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 h-14 text-lg group"
                  onClick={() => scrollToSection("#compliance-gap")}
                >
                  Assess Your Procurement Compliance
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>

                <Button
                  size="lg"
                  variant="outline"
                  className="text-white border-white/20 hover:bg-white/10 h-14 text-lg"
                  onClick={() => scrollToSection("#cta")}
                >
                  Deploy Dice Platform
                </Button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2 */}
      <section id="compliance-gap" className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={springPresets.gentle}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                The Compliance Gap in Modern ERP Environments
              </h2>

              <div className="space-y-6 text-muted-foreground text-lg">
                <p className="font-medium text-foreground">
                  Traditional ERPs manage transactions. They do not inherently enforce intelligent validation across every stage of procurement and payables.
                </p>

                <ul className="space-y-4 list-disc pl-6">
                  {[
                    "Vendor onboarding without KYC, bank, and legal-entity validation",
                    "Invoice posting without multi-level correctness checks",
                    "Manual n-way matching across PO, GRN, invoice, etc.",
                    "No real-time visibility into approval and spend controls",
                    "Reactive compliance instead of policy-driven transactions"
                  ].map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>

                <p className="pt-4 font-semibold text-primary border-l-4 border-accent pl-4">
                  "If the source transaction is wrong, e-invoicing only makes the error permanent."
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-accent/10 rounded-3xl blur-2xl" />
              <img
                src={ImageCompliance}
                alt="Compliance Gap Visualization"
                className="relative rounded-2xl shadow-2xl border border-border"
              />
            </motion.div>

          </div>
        </div>
      </section>

      {/* SECTION 3 */}
      <section id="dice-platform" className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">

          <div className="max-w-3xl mb-16">
            <Badge className="mb-4 bg-primary text-primary-foreground">OEM Enterprise Platform</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Dice: The Compliance Intelligence Layer
            </h2>
            <p className="text-lg text-muted-foreground">
              Dice is an OEM enterprise platform built to extend ERP ecosystems with intelligent process orchestration and compliance-ready architecture.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Pre-Posting Transaction Correctness",
                desc: "Every invoice, item, vendor, and approval is validated before it reaches the ERP or statutory system.",
                icon: Search
              },
              {
                title: "Agentic AI Orchestration",
                desc: "AI agents that manage complex workflow transitions and exception handling automatically.",
                icon: Cpu
              },
              {
                title: "Geography-Aware Compliance Controls",
                desc: "Validation frameworks aligned to local invoicing mandates, data residency, and governance structures.",
                icon: ShieldCheck
              },
              {
                title: "End-to-End Document Traceability",
                desc: "From purchase request to e-invoice submission  every action is recorded and audit-ready.",
                icon: FileSearch
              },
              {
                title: "Vendor KYC & Bank Validation",
                desc: "Automated supplier onboarding with legal entity checks, bank verification, risk scoring, and ESG alignment.",
                icon: Activity
              }
            ].map((feature, idx) => (
              <Card key={idx} className="border-none shadow-sm hover:shadow-md transition-shadow bg-card">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <p className="mt-12 text-center text-muted-foreground font-medium">
            E-invoicing is the output. <span className="text-primary font-bold">Transaction correctness is the foundation.</span>
          </p>
        </div>
      </section>

      {/* SECTION 4 */}
      <section id="e-invoicing" className="py-24 bg-background overflow-hidden">
        <div className="container mx-auto px-4">

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <img
                src={ImageInvoice}
                alt="E-Invoicing Process"
                className="rounded-2xl shadow-2xl border border-border"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <Badge className="mb-4 bg-accent text-accent-foreground">
                E-Invoicing Readiness by Design
              </Badge>

              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Beyond E-Invoicing: The Complete Invoice Journey
              </h2>

              <p className="text-lg text-muted-foreground mb-6">
                While e-invoicing platforms handle submission, along with e-invoicing Dice ensures the data being submitted is correct,
                approved, and fully traceable. From procurement to posting, every invoice is policy-validated,
                matched, and visible in real time.
              </p>

              <p className="text-sm font-medium text-accent mb-6">
                UAE | KSA compliance frameworks supported
              </p>

              <div className="space-y-6">
                {[
                  {
                    title: "Pre-Validated Transactions",
                    desc: "Only approved, matched, and compliant invoices move to statutory reporting."
                  },
                  {
                    title: "Government-Ready Digital Evidence",
                    desc: "Audit-proof trails aligned to UAE and KSA digital compliance frameworks."
                  },
                  {
                    title: "ERP-Native Execution",
                    desc: "No disruption. No heavy customization. Full control before and after submission."
                  }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-4 group">
                    <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center shrink-0 group-hover:bg-accent group-hover:text-white transition-colors mt-1">
                      <CheckCircle2 className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold">{item.title}</h4>
                      <p className="text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

            </motion.div>
          </div>
        </div>
      </section>

      {/* 5. SQIT Partnership Section (Ref "MENA Context" Style | Target Content) */}
      <section id="sqit-partnership" className="py-24 relative bg-muted/50">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <img src={IMAGES.MENA_BUSINESS_5} className="w-full h-full object-cover grayscale" alt="Background" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-2 text-accent mb-4">
                <Globe className="w-5 h-5" />
                <span className="font-semibold uppercase tracking-widest text-sm">Strategic Technology Partner</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">{BRAND_CONFIG.implementationPartner}: Authorized Expertise</h2>
              <p className="text-lg text-muted-foreground mb-8">
                SQIT is the authorized regional strategic Technology Partner for Dice. With deep ERP deployment expertise and enterprise architecture alignment capabilities, SQIT leads the journey from strategy to execution.
              </p>
              <div className="space-y-4">
                {[
                    "Leads ERP implementations and integrations",
                    "Ensures seamless Dice platform deployment",
                    "Aligns compliance workflows with enterprise systems",
                    "Provides structured rollout and change management support"
                ].map((li, idx) => (
                  <div key={idx} className="flex items-center gap-4 bg-background p-4 rounded-xl border border-border">
                    <div className="w-10 h-10 rounded-lg bg-primary/5 flex items-center justify-center">
                      <ChevronRight className="w-5 h-5 text-primary" />
                    </div>
                    <span className="font-medium">{li}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Dark Card Overlay */}
            <div className="bg-primary rounded-3xl p-10 text-white shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-20">
                <TrendingUp className="w-32 h-32" />
              </div>
              <h3 className="text-2xl font-bold mb-6 relative z-10">Completing the Journey</h3>
              <p className="text-primary-foreground/80 mb-8 relative z-10">
                Dice delivers the compliance intelligence layer. SQIT ensures successful enterprise-grade implementation.
              </p>
              <p className="text-sm italic opacity-70 relative z-10 border-l-2 border-accent pl-4">
                ERP systems provide the structural backbone. Dice and SQIT extend that backbone with intelligence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Outcomes Section (Ref "Outcomes" Style | Target Content) */}
      <section id="outcomes" className="py-24 bg-background">
        <div className="container mx-auto px-4">

          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Key Outcomes for Enterprises
            </h2>
            <p className="text-muted-foreground text-lg">
              Why enterprises are moving to compliance-driven procurement.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Always-Compliant Transactions",
                desc: "Policy-validated data before it reaches ERP or statutory platforms.",
                icon: ShieldCheck
              },
              {
                title: "Government-Grade Audit Traceability",
                desc: "Instant visibility across documents, approvals, vendors, and postings.",
                icon: FileSearch
              },
              {
                title: "Faster Approvals. Zero Follow-Ups.",
                desc: "Autonomous workflows eliminate coordination delays.",
                icon: Cpu
              },
              {
                title: "Real-Time Procurement Visibility",
                desc: "Track every request, order, receipt, and invoice live.",
                icon: Timer
              },
              {
                title: "Lower Fraud & Vendor Risk",
                desc: "KYC-verified suppliers and bank-validated payments.",
                icon: ShieldAlert
              }
            ].map((outcome, idx) => (
              <Card key={idx}>
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center mb-4">
                    <outcome.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{outcome.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{outcome.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>

        </div>
      </section>

      {/* CTA */}
      <section id="cta" className="py-24 relative">
        <div className="container mx-auto px-4">

          <div className="relative rounded-[2rem] bg-primary overflow-hidden shadow-2xl">
            <div className="relative z-10 py-20 px-8 md:px-16 text-center max-w-4xl mx-auto text-white">

              <p className="text-lg font-semibold text-accent mb-8">
                E-invoicing will be mandatory. Transaction correctness is optional - until it becomes your risk.
              </p>

              <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
              Transform ERP Operations with Compliance-Intelligent Execution <br />
                <span className="text-accent">Continuous Compliance for every ERP Transaction</span>
              </h2>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 px-10 h-16 text-xl font-bold">
                  Schedule Readiness Assessment
                </Button>
                <Button size="lg" variant="outline" className="text-white border-white/30 hover:bg-white/10 px-10 h-16 text-xl">
                  Request Dice Demo
                </Button>
              </div>

              <div className="mt-12 flex items-center justify-center gap-8 opacity-60">
                <div className="flex items-center gap-2">
                  <Clock className="w-6 h-6" />
                  <span className="font-medium">20-Minute Strategy Briefing</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-6 h-6" />
                  <span className="font-medium">Full Regulatory Assessment</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
