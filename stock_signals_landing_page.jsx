import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, BarChart3, Bell, Brain, CandlestickChart, CircleDollarSign, Discord, Newspaper, ShieldCheck, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function StockSignalsLandingPage() {
  const watchlist = [
    { ticker: "QQQ", label: "Tech ETF", note: "NASDAQ-100 exposure" },
    { ticker: "MU", label: "Micron", note: "Memory + AI infrastructure" },
    { ticker: "MRVL", label: "Marvell", note: "Semiconductors + data centers" },
    { ticker: "WDC", label: "Western Digital", note: "Storage + cloud demand" },
    { ticker: "NVDA", label: "NVIDIA", note: "AI hardware leader" },
    { ticker: "AMD", label: "Advanced Micro Devices", note: "AI chips + compute" },
  ];

  const sections = [
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Market Signals",
      text: "Track trending sectors, AI momentum, tech rotation, earnings moves, and major market shifts.",
    },
    {
      icon: <CircleDollarSign className="h-6 w-6" />,
      title: "Dividend Watch",
      text: "Compare dividend yield, payout stability, growth history, and long-term income potential.",
    },
    {
      icon: <Brain className="h-6 w-6" />,
      title: "AI + Future Tech",
      text: "Follow semiconductors, cloud, data centers, cybersecurity, energy demand, and automation trends.",
    },
    {
      icon: <Bell className="h-6 w-6" />,
      title: "Watchlist Alerts",
      text: "Create simple signals for what to watch, what needs research, and what may be getting overheated.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#080A12] text-white">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-violet-500/30 blur-3xl" />
        <div className="absolute top-80 right-10 h-80 w-80 rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="absolute bottom-20 left-10 h-72 w-72 rounded-full bg-emerald-400/10 blur-3xl" />
      </div>

      <header className="relative mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
        <div className="flex items-center gap-3">
          <div className="grid h-10 w-10 place-items-center rounded-2xl bg-white/10 shadow-lg ring-1 ring-white/10">
            <CandlestickChart className="h-5 w-5 text-cyan-300" />
          </div>
          <div>
            <p className="text-lg font-semibold tracking-tight">Stock Signals</p>
            <p className="text-xs text-white/50">Signals over noise.</p>
          </div>
        </div>
        <Button className="rounded-2xl bg-white text-black hover:bg-white/90">
          Join the Waitlist
        </Button>
      </header>

      <main className="relative mx-auto max-w-7xl px-6 pb-16 pt-10">
        <section className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70">
              <BarChart3 className="h-4 w-4 text-cyan-300" />
              Private market intelligence dashboard
            </div>
            <h1 className="max-w-4xl text-5xl font-semibold tracking-tight md:text-7xl">
              Track trends. Read the signals. Invest with intention.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/65">
              A clean, beginner-friendly investment intelligence hub for AI stocks, dividend ideas, tech trends, market watchlists, and long-term investor education.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button className="h-12 rounded-2xl bg-cyan-300 px-6 text-black hover:bg-cyan-200">
                Get Weekly Signals <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" className="h-12 rounded-2xl border-white/15 bg-white/5 px-6 text-white hover:bg-white/10">
                Enter Dashboard
              </Button>
            </div>
            <p className="mt-4 text-xs text-white/40">
              Educational resource only. Not financial advice. Always do your own research.
            </p>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.1 }}>
            <Card className="rounded-[2rem] border-white/10 bg-white/[0.06] shadow-2xl backdrop-blur-xl">
              <CardContent className="p-6">
                <div className="mb-5 flex items-center justify-between">
                  <div>
                    <p className="text-sm text-white/50">Dashboard Preview</p>
                    <h2 className="text-2xl font-semibold text-white">Today’s Watchlist</h2>
                  </div>
                  <div className="rounded-full bg-emerald-400/15 px-3 py-1 text-xs text-emerald-200 ring-1 ring-emerald-300/20">
                    Live MVP
                  </div>
                </div>

                <div className="grid gap-3">
                  {watchlist.map((item) => (
                    <div key={item.ticker} className="flex items-center justify-between rounded-2xl bg-black/25 p-4 ring-1 ring-white/8">
                      <div className="flex items-center gap-3">
                        <div className="grid h-11 w-11 place-items-center rounded-2xl bg-white/10 text-sm font-bold text-cyan-200">
                          {item.ticker}
                        </div>
                        <div>
                          <p className="font-medium text-white">{item.label}</p>
                          <p className="text-sm text-white/45">{item.note}</p>
                        </div>
                      </div>
                      <span className="rounded-full bg-white/5 px-3 py-1 text-xs text-white/55">Research</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </section>

        <section className="mt-16 grid gap-4 md:grid-cols-4">
          {sections.map((section) => (
            <Card key={section.title} className="rounded-3xl border-white/10 bg-white/[0.05] backdrop-blur-xl">
              <CardContent className="p-6">
                <div className="mb-4 grid h-12 w-12 place-items-center rounded-2xl bg-cyan-300/10 text-cyan-200 ring-1 ring-cyan-200/15">
                  {section.icon}
                </div>
                <h3 className="text-lg font-semibold text-white">{section.title}</h3>
                <p className="mt-2 text-sm leading-6 text-white/55">{section.text}</p>
              </CardContent>
            </Card>
          ))}
        </section>

        <section className="mt-16 grid gap-5 lg:grid-cols-3">
          <Card className="rounded-[2rem] border-white/10 bg-white/[0.05] lg:col-span-2">
            <CardContent className="p-7">
              <div className="mb-4 flex items-center gap-3">
                <Newspaper className="h-6 w-6 text-cyan-300" />
                <h2 className="text-2xl font-semibold text-white">Stock Signals Weekly</h2>
              </div>
              <p className="max-w-2xl text-white/60">
                A weekly newsletter covering AI trends, dividend watchlists, major sector moves, credible investor lessons, and the signals worth paying attention to.
              </p>
              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                <div className="rounded-2xl bg-black/25 p-4 text-sm text-white/65">AI + semiconductor trends</div>
                <div className="rounded-2xl bg-black/25 p-4 text-sm text-white/65">Dividend spotlight</div>
                <div className="rounded-2xl bg-black/25 p-4 text-sm text-white/65">Long-term investor notes</div>
              </div>
            </CardContent>
          </Card>

          <Card className="rounded-[2rem] border-white/10 bg-white/[0.05]">
            <CardContent className="p-7">
              <div className="mb-4 flex items-center gap-3">
                <Discord className="h-6 w-6 text-violet-300" />
                <h2 className="text-2xl font-semibold text-white">Discord Room</h2>
              </div>
              <p className="text-white/60">
                A private community for market discussion, watchlist notes, alerts, and beginner-friendly investing education.
              </p>
              <Button className="mt-6 w-full rounded-2xl bg-violet-300 text-black hover:bg-violet-200">
                Join Community
              </Button>
            </CardContent>
          </Card>
        </section>

        <section className="mt-16 rounded-[2rem] border border-white/10 bg-white/[0.04] p-7 backdrop-blur-xl">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="flex items-start gap-3">
              <ShieldCheck className="mt-1 h-6 w-6 text-emerald-300" />
              <div>
                <h2 className="text-xl font-semibold">Responsible Investing Note</h2>
                <p className="mt-2 max-w-3xl text-sm leading-6 text-white/55">
                  Stock Signals is for education, research organization, and market awareness only. It does not provide personalized financial advice, buy/sell instructions, or guaranteed returns. Always verify data and speak with a licensed financial professional before making investment decisions.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
