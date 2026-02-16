import React from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  Zap, 
  Layers, 
  Globe, 
  TrendingUp, 
  BarChart3, 
  ShoppingCart, 
  ShieldAlert, 
  Timer, 
  Clock,
  Cpu,
  FileSearch,
  Database,
  Building2,
  FileCheck,     // Added from Target
  Search,        // Added from Target
  Activity,      // Added from Target
  ChevronRight   // Added from Target
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { IMAGES } from '@/assets/images';
// import { scrollToSection, BRAND_CONFIG } from '@/lib/index'; 
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
      
      {/* 1. Hero Section (Ref Style | Target Content) */}
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
                The Compliance-Intelligence Era
              </Badge>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-[1.1]">
                Intelligent ERP Extension for a <span className="text-accent">Compliance-Driven</span> Era
              </h1>
              <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl leading-relaxed">
                As digital invoicing mandates and regulatory frameworks tighten, traditional ERP systems alone are no longer sufficient. Dice embeds structured validation directly into your ecosystem.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                    size="lg" 
                    className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 h-14 text-lg group"
                    onClick={() => scrollToSection("#compliance-gap")}
                >
                  Assess Your ERP Gaps
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

      {/* 2. Compliance Gap Section (Ref "Why Partnership" Style | Target Content) */}
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
                    "Fragmented flow between purchase request, order, receipt, and invoice",
                    "Manual reconciliation between PO, GRN, and invoice",
                    "Limited automated three-way matching",
                    "Absence of structured e-invoicing validation layers",
                    "Reactive compliance instead of embedded regulatory intelligence"
                  ].map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
                <p className="pt-4 font-semibold text-primary border-l-4 border-accent pl-4">
                  "In digitally regulated markets, manual reconciliation is not just inefficient — it is a compliance exposure."
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

      {/* 3. Dice Platform Section (Ref "What SQIT Brings" Style | Target Content) */}
      <section id="dice-platform" className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mb-16">
            <Badge className="mb-4 bg-primary text-primary-foreground">OEM Enterprise Platform</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Dice: The Compliance Intelligence Layer</h2>
            <p className="text-lg text-muted-foreground">
              Dice is an OEM enterprise platform built to extend ERP ecosystems with intelligent process orchestration and compliance-ready architecture.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
                // { 
                //   title: "Automated 3-Way Matching", 
                //   desc: "Precision document matching between PO, GRN, and Invoices with zero manual intervention.",
                //   icon: Layers 
                // },
                { 
                  title: "Intelligent Validation", 
                  desc: "Rigorous pre-posting checks ensuring every invoice meets compliance before ERP entry.",
                  icon: FileCheck 
                },
                { 
                  title: "Agentic AI Orchestration", 
                  desc: "AI agents that manage complex workflow transitions and exception handling automatically.",
                  icon: Cpu 
                },
                { 
                  title: "Regulatory Control Layers", 
                  desc: "Embedded frameworks that adapt to evolving digital reporting mandates in real-time.",
                  icon: ShieldCheck 
                },
                { 
                  title: "Digital Audit Trails", 
                  desc: "End-to-end transparency across procurement and payables for inspection-ready compliance.",
                  icon: Search 
                },
                { 
                  title: "Reduced Manual Dependency", 
                  desc: "Automation as the mechanism to achieve total compliance assurance with minimal human touch.",
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
                    <p className="text-muted-foreground">
                        {feature.desc}
                    </p>
                </CardContent>
              </Card>
            ))}
          </div>
          <p className="mt-12 text-center text-muted-foreground font-medium">
            Automation is not the goal. <span className="text-primary font-bold">Compliance assurance is.</span>
          </p>
        </div>
      </section>

      {/* 4. E-Invoicing Section (Ref "What Dice Adds" Style | Target Content) */}
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
              <Badge className="mb-4 bg-accent text-accent-foreground">Regulatory Alignment</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">E-Invoicing & Regulatory Alignment</h2>
              <p className="text-lg text-muted-foreground mb-8">
                E-invoicing mandates are redefining enterprise finance. Organizations must transition from document-based workflows to structured, validated, digitally traceable transactions.
              </p>
              <div className="space-y-6">
                {[
                   { title: "Structured Workflows", desc: "Mandatory validation steps before posting to the general ledger." },
                   { title: "Government-Ready Trails", desc: "Audit-proof digital evidence for every transaction step." },
                   { title: "Seamless ERP Integration", desc: "Extend your core system without disruptive or expensive customization." }
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
                <span className="font-semibold uppercase tracking-widest text-sm">Implementation Partner</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">{BRAND_CONFIG.implementationPartner}: Authorized Expertise</h2>
              <p className="text-lg text-muted-foreground mb-8">
                SQIT is the authorized regional implementation partner for Dice. With deep ERP deployment expertise and enterprise architecture alignment capabilities, SQIT leads the journey from strategy to execution.
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Key Outcomes for Enterprises</h2>
            <p className="text-muted-foreground text-lg">
              Measurable impact on compliance, efficiency, and ROI.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                title: "Compliance & E-Invoicing Alignment", 
                desc: "Structured validation and embedded regulatory controls designed to support evolving digital mandate requirements.",
                icon: ShieldCheck
              },
              { 
                title: "Government-Grade Audit Traceability", 
                desc: "End-to-end digital trails across procurement and payables for inspection-ready compliance.",
                icon: FileSearch
              },
              { 
                title: "Reduced Manual Dependency", 
                desc: "Agentic AI-driven orchestration minimizes human intervention in rule-based processes.",
                icon: Cpu
              },
              { 
                title: "Shorter Process Turnaround", 
                desc: "Accelerated procurement-to-payment cycles through intelligent validation layers.",
                icon: Timer
              },
              { 
                title: "Stronger ERP ROI", 
                desc: "Extend ERP value without disruptive customization or replacement.",
                icon: TrendingUp
              },
              { 
                title: "Regulatory Protection", 
                desc: "Mitigate risks associated with non-compliant electronic invoicing and digital reporting errors.",
                icon: ShieldAlert
              }
            ].map((outcome, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <Card className="h-full border border-border/50 hover:border-primary/30 transition-all group">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors">
                      <outcome.icon className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{outcome.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{outcome.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. CTA Section (Ref Style | Target Content) */}
      <section id="cta" className="py-24 relative">
        <div className="container mx-auto px-4">
          <div className="relative rounded-[2rem] bg-primary overflow-hidden shadow-2xl">
            <div className="absolute inset-0 z-0">
              <img 
                src={IMAGES.DASHBOARD_VIEW_2} 
                alt="CTA Background" 
                className="w-full h-full object-cover opacity-20"
              />
              <div className="absolute inset-0 bg-primary/60 backdrop-blur-sm" />
            </div>
            <div className="relative z-10 py-20 px-8 md:px-16 text-center max-w-4xl mx-auto text-white">
              <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
                Deploy Agentic AI. Transform ERP Operations.<br />
                <span className="text-accent">Achieve Compliance-Intelligent Execution.</span>
              </h2>
              <p className="text-xl text-primary-foreground/80 mb-12">
                Ready to align your procurement and finance operations with global digital mandates?
              </p>
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

      {/* Footer (Ref Style | Target Content) */}
      <footer className="py-12 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex flex-col gap-2">
              <span className="text-2xl font-bold tracking-tighter">DICE.</span>
              <p className="text-sm text-muted-foreground">
                Intelligent process orchestration for the modern enterprise ecosystem.
              </p>
            </div>
            <div className="flex gap-8 text-sm font-medium text-muted-foreground">
              <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-primary transition-colors">Security Standards</a>
            </div>
            <div className="text-sm text-muted-foreground">
              {BRAND_CONFIG.copyright}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}