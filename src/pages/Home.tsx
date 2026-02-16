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
    const headerOffset = 100;
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
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">

      {/* HERO */}
      <section
        id="hero"
        className="relative min-h-[92vh] flex items-center pt-24 overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"
      >
        <div className="absolute inset-0 z-0">
          <img
            src={IMAGES.HERO_BG_2}
            alt="Enterprise Intelligence"
            className="w-full h-full object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/95 via-slate-900/80 to-slate-800/95" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.15),rgba(255,255,255,0))]" />
        </div>

        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-5xl"
          >
            <motion.div variants={fadeInUp} transition={{ ...springPresets.gentle, delay: 0.1 }}>
              <Badge variant="outline" className="mb-8 border-slate-400/30 text-slate-300 backdrop-blur-sm bg-slate-800/50 px-5 py-2 text-sm font-medium tracking-wide">
                Procurement. Compliance. Autonomy.
              </Badge>

              <h1 className="text-4xl md:text-6xl lg:text-7xl font-light text-white mb-8 leading-[1.1] tracking-tight">
                Smarter Procurement & Supplier Control on Your ERP
              </h1>

              <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-3xl leading-relaxed font-light">
                E-invoicing may be the trigger but correctness begins long before invoice submission.
                Dice validates vendors, transactions, approvals, and documents in real time so only
                compliant, audit-ready data reaches your ERP.
              </p>

              <div className="flex flex-col sm:flex-row gap-5">
                <Button
                  size="lg"
                  className="bg-white hover:bg-slate-100 text-slate-900 font-semibold px-10 h-16 text-lg group shadow-xl hover:shadow-2xl transition-all"
                  onClick={() => scrollToSection("#compliance-gap")}
                >
                  Assess Your Procurement Compliance
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>

                <Button
                  size="lg"
                  variant="outline"
                  className="text-white border-slate-400/30 hover:bg-slate-800/50 backdrop-blur-sm h-16 text-lg font-medium"
                  onClick={() => scrollToSection("#cta")}
                >
                  Deploy Dice Platform
                </Button>
              </div>
            </motion.div>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* SECTION 2 */}
      <section id="compliance-gap" className="py-28 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={springPresets.gentle}
            >
              <h2 className="text-3xl md:text-5xl font-light mb-8 text-slate-900 tracking-tight">
                The Compliance Gap in Modern ERP Environments
              </h2>

              <div className="space-y-8 text-slate-600 text-lg">
                <p className="font-normal text-slate-900 text-xl">
                  Traditional ERPs manage transactions. They do not inherently enforce intelligent validation across every stage of procurement and payables.
                </p>

                <ul className="space-y-5 border-l-2 border-slate-200 pl-8">
                  {[
                    "Vendor onboarding without KYC, bank, and legal-entity validation",
                    "Invoice posting without multi-level correctness checks",
                    "Manual n-way matching across PO, GRN, invoice, etc.",
                    "No real-time visibility into approval and spend controls",
                    "Reactive compliance instead of policy-driven transactions"
                  ].map((item, idx) => (
                    <li key={idx} className="text-base leading-relaxed font-light">{item}</li>
                  ))}
                </ul>

                <div className="pt-6 bg-slate-50 border-l-4 border-primary pl-8 py-6 pr-6 rounded-r-lg">
                  <p className="text-lg font-medium text-slate-900 italic">
                    "If the source transaction is wrong, e-invoicing only makes the error permanent."
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -inset-6 bg-gradient-to-br from-primary/5 to-slate-100 rounded-3xl" />
              <img
                src={ImageCompliance}
                alt="Compliance Gap Visualization"
                className="relative rounded-2xl shadow-2xl border border-slate-200"
              />
            </motion.div>

          </div>
        </div>
      </section>

      {/* SECTION 3 */}
      <section id="dice-platform" className="py-28 bg-slate-50">
        <div className="container mx-auto px-6 lg:px-8">

          <div className="max-w-3xl mb-20">
            <Badge className="mb-6 bg-primary text-primary-foreground px-4 py-2 text-sm font-medium tracking-wide">
              OEM Enterprise Platform
            </Badge>
            <h2 className="text-3xl md:text-5xl font-light mb-8 text-slate-900 tracking-tight">
              Dice: The Compliance Intelligence Layer
            </h2>
            <p className="text-xl text-slate-600 font-light leading-relaxed">
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
                desc: "From purchase request to e-invoice submission — every action is recorded and audit-ready.",
                icon: FileSearch
              },
              {
                title: "Vendor KYC & Bank Validation",
                desc: "Automated supplier onboarding with legal entity checks, bank verification, risk scoring, and ESG alignment.",
                icon: Activity
              }
            ].map((feature, idx) => (
              <Card key={idx} className="border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 bg-white group hover:border-primary/20">
                <CardHeader>
                  <div className="w-14 h-14 rounded-xl bg-primary/5 flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors">
                    <feature.icon className="w-7 h-7 text-primary" />
                  </div>
                  <CardTitle className="text-xl font-medium text-slate-900">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 leading-relaxed font-light">{feature.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <p className="mt-16 text-center text-slate-600 font-light text-lg">
            E-invoicing is the output. <span className="text-primary font-semibold">Transaction correctness is the foundation.</span>
          </p>
        </div>
      </section>

      {/* SECTION 4 */}
      <section id="e-invoicing" className="py-28 bg-white overflow-hidden">
        <div className="container mx-auto px-6 lg:px-8">

          <div className="grid lg:grid-cols-2 gap-20 items-center">

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <div className="relative">
                <div className="absolute -inset-6 bg-gradient-to-br from-primary/5 to-slate-100 rounded-3xl" />
                <img
                  src={ImageInvoice}
                  alt="E-Invoicing Process"
                  className="relative rounded-2xl shadow-2xl border border-slate-200"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <Badge className="mb-6 bg-primary/10 text-primary border border-primary/20 px-4 py-2 text-sm font-medium tracking-wide">
                E-Invoicing Readiness by Design
              </Badge>

              <h2 className="text-3xl md:text-5xl font-light mb-8 text-slate-900 tracking-tight">
                Beyond E-Invoicing: The Complete Invoice Journey
              </h2>

              <p className="text-xl text-slate-600 mb-8 font-light leading-relaxed">
                While e-invoicing platforms handle submission, along with e-invoicing Dice ensures the data being submitted is correct,
                approved, and fully traceable. From procurement to posting, every invoice is policy-validated,
                matched, and visible in real time.
              </p>

              <p className="text-sm font-semibold text-primary mb-10 tracking-wide uppercase">
                UAE | KSA compliance frameworks supported
              </p>

              <div className="space-y-8">
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
                  <div key={idx} className="flex items-start gap-5 group">
                    <div className="w-12 h-12 rounded-full bg-primary/5 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-all mt-1 border border-slate-200 group-hover:border-primary">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-xl font-medium text-slate-900 mb-2">{item.title}</h4>
                      <p className="text-slate-600 font-light leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 5 */}
      <section id="sqit-partnership" className="py-28 relative bg-slate-900">
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <img src={IMAGES.MENA_BUSINESS_5} className="w-full h-full object-cover" alt="Background" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-slate-800/95 to-slate-900/95" />
        
        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <div className="flex items-center gap-3 text-primary mb-6">
                <Globe className="w-6 h-6" />
                <span className="font-semibold uppercase tracking-widest text-sm">Strategic Technology Partner</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-light mb-8 text-white tracking-tight">
                {BRAND_CONFIG.implementationPartner}: Authorized Expertise
              </h2>
              <p className="text-xl text-slate-300 mb-12 font-light leading-relaxed">
                SQIT is the authorized regional strategic Technology Partner for Dice. With deep ERP deployment expertise and enterprise architecture alignment capabilities, SQIT leads the journey from strategy to execution.
              </p>
              <div className="space-y-4">
                {[
                    "Leads ERP implementations and integrations",
                    "Ensures seamless Dice platform deployment",
                    "Aligns compliance workflows with enterprise systems",
                    "Provides structured rollout and change management support"
                ].map((li, idx) => (
                  <div key={idx} className="flex items-center gap-5 bg-slate-800/50 p-5 rounded-xl border border-slate-700/50 hover:border-primary/30 transition-all backdrop-blur-sm">
                    <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center border border-primary/20">
                      <ChevronRight className="w-5 h-5 text-primary" />
                    </div>
                    <span className="font-light text-slate-200">{li}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-12 text-white shadow-2xl relative overflow-hidden border border-slate-700/50">
              <div className="absolute top-0 right-0 p-10 opacity-10">
                <TrendingUp className="w-40 h-40" />
              </div>
              <h3 className="text-3xl font-light mb-8 relative z-10">Completing the Journey</h3>
              <p className="text-slate-300 mb-10 relative z-10 text-lg font-light leading-relaxed">
                Dice delivers the compliance intelligence layer. SQIT ensures successful enterprise-grade implementation.
              </p>
              <p className="text-base font-light text-slate-400 relative z-10 border-l-2 border-primary pl-6 italic">
                ERP systems provide the structural backbone. Dice and SQIT extend that backbone with intelligence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6 */}
      <section id="outcomes" className="py-28 bg-white">
        <div className="container mx-auto px-6 lg:px-8">

          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl md:text-5xl font-light mb-8 text-slate-900 tracking-tight">
              Key Outcomes for Enterprises
            </h2>
            <p className="text-slate-600 text-xl font-light">
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
              <Card key={idx} className="border border-slate-200 hover:border-primary/20 hover:shadow-xl transition-all duration-300 group">
                <CardHeader>
                  <div className="w-14 h-14 rounded-xl bg-slate-50 flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors border border-slate-200">
                    <outcome.icon className="w-7 h-7 text-primary" />
                  </div>
                  <CardTitle className="text-xl font-medium text-slate-900">{outcome.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 leading-relaxed font-light">{outcome.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>

        </div>
      </section>

      {/* CTA */}
      <section id="cta" className="py-28 relative bg-slate-50">
        <div className="container mx-auto px-6 lg:px-8">

          <div className="relative rounded-3xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden shadow-2xl border border-slate-700">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(120,119,198,0.1),rgba(255,255,255,0))]" />
            
            <div className="relative z-10 py-24 px-8 md:px-16 text-center max-w-5xl mx-auto text-white">

              <p className="text-lg font-light text-slate-300 mb-10 tracking-wide">
                E-invoicing will be mandatory. Transaction correctness is optional - until it becomes your risk.
              </p>

              <h2 className="text-3xl md:text-5xl font-light mb-6 leading-tight tracking-tight">
                Transform ERP Operations with Compliance-Intelligent Execution
              </h2>
              <p className="text-2xl md:text-3xl font-medium text-primary mb-12">
                Continuous Compliance for every ERP Transaction
              </p>

              <div className="flex flex-col sm:flex-row gap-5 justify-center">
                <Button size="lg" className="bg-white text-slate-900 hover:bg-slate-100 px-12 h-16 text-xl font-semibold shadow-xl hover:shadow-2xl transition-all">
                  Schedule Readiness Assessment
                </Button>
                <Button size="lg" variant="outline" className="text-white border-slate-400/30 hover:bg-slate-800/50 backdrop-blur-sm px-12 h-16 text-xl font-medium">
                  Request Dice Demo
                </Button>
              </div>

              <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-10 text-slate-400 text-sm font-light">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center border border-slate-700">
                    <Timer className="w-5 h-5 text-primary" />
                  </div>
                  <span>20-Minute Strategy Briefing</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center border border-slate-700">
                    <ShieldCheck className="w-5 h-5 text-primary" />
                  </div>
                  <span>Full Regulatory Assessment</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

    </div>
  );
}