"use client";

import { motion } from "framer-motion";
import {
  Activity,
  BarChart3,
  Box,
  ChevronRight,
  Globe,
  LayoutDashboard,
  PackageCheck,
  Settings,
  ShieldCheck,
  Truck,
  Users
} from "lucide-react";
import React from "react";

export function DashboardMockup() {
  return (
    <section className="py-24 relative overflow-hidden" id="dashboard-mockup">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container px-4 mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Illustrative Client Workflow</h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Sample interface and fictional data shown for workflow discussion only. Available reporting, connections, and update frequency are confirmed during onboarding.
          </p>
        </div>

        {/* Dashboard Container */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-6xl mx-auto glass-panel rounded-3xl overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(6,182,212,0.15)] flex flex-col md:flex-row h-[600px]"
        >
          {/* Sidebar */}
          <div className="w-full md:w-64 bg-slate-950/80 border-r border-white/5 p-6 flex flex-col hidden md:flex">
            <div className="flex items-center gap-3 mb-10">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-emerald-500 flex items-center justify-center shadow-lg shadow-cyan-500/20">
                <Box className="w-4 h-4 text-white" />
              </div>
              <span className="text-white font-bold tracking-wide">Workflow Example</span>
            </div>

            <nav className="flex-1 space-y-2">
              <SidebarItem icon={LayoutDashboard} label="Overview" active />
              <SidebarItem icon={PackageCheck} label="Fulfillment" />
              <SidebarItem icon={Box} label="Inventory" />
              <SidebarItem icon={Truck} label="Shipments" />
              <SidebarItem icon={Globe} label="Locations" />
              <SidebarItem icon={Users} label="Customers" />
              <SidebarItem icon={BarChart3} label="Analytics" />
            </nav>

            <div className="mt-auto pt-6 border-t border-white/5 space-y-2">
              <SidebarItem icon={ShieldCheck} label="Security" />
              <SidebarItem icon={Settings} label="Settings" />
            </div>
          </div>

          {/* Main Content Area */}
          <div className="flex-1 bg-slate-900/40 p-6 md:p-8 flex flex-col gap-6 overflow-y-auto">
            {/* Header */}
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-2xl font-bold text-white">Sample Operations</h3>
                <p className="text-sm text-slate-400">Fictional data—not a live client account or performance report.</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                  <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></div>
                  <span className="text-xs font-medium text-emerald-400">Illustrative Only</span>
                </div>
              </div>
            </div>

            {/* KPI Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <KpiCard title="Active Shipments" value="1,248" trend="+12.5%" icon={Truck} color="cyan" />
              <KpiCard title="Sample Workflow" value="Demo" trend="Fictional" icon={Activity} color="emerald" />
              <KpiCard title="Pending Orders" value="342" trend="-5.4%" icon={PackageCheck} color="indigo" />
            </div>

            {/* Main Graph & Activity */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 flex-1 min-h-0">
              {/* Main Chart Area */}
              <div className="lg:col-span-2 rounded-2xl bg-slate-950/60 border border-white/5 p-6 flex flex-col relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 rounded-full blur-[80px]"></div>
                <h4 className="text-sm font-semibold text-slate-300 mb-6 relative z-10">Throughput Volume (30 Days)</h4>
                <div className="flex-1 border-b border-l border-white/10 relative z-10 flex items-end pt-4 pl-4 gap-2">
                  {/* Mock Chart Bars */}
                  {[40, 60, 45, 80, 55, 75, 90, 65, 85, 100, 70, 85].map((height, i) => (
                    <motion.div
                      key={i}
                      initial={{ height: 0 }}
                      whileInView={{ height: `${height}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: i * 0.05, ease: "easeOut" }}
                      className="flex-1 bg-gradient-to-t from-cyan-500/20 to-cyan-400/80 rounded-t-sm"
                    ></motion.div>
                  ))}
                </div>
                <div className="flex justify-between text-xs text-slate-500 mt-2">
                  <span>Day 1</span>
                  <span>Day 15</span>
                  <span>Day 30</span>
                </div>
              </div>

              {/* Activity Feed */}
              <div className="rounded-2xl bg-slate-950/60 border border-white/5 p-6 flex flex-col overflow-hidden">
                <h4 className="text-sm font-semibold text-slate-300 mb-6">Live Activity</h4>
                <div className="flex-1 overflow-y-auto pr-2 space-y-4">
                  <ActivityItem action="Order Fulfuilled" detail="#ORD-8921 • Amazon FBA" time="Just now" type="success" />
                  <ActivityItem action="Inventory Sync" detail="Shopify US Storefront" time="2m ago" type="info" />
                  <ActivityItem action="Route Optimized" detail="Fleet 4 • Zone B" time="5m ago" type="success" />
                  <ActivityItem action="Stock Alert" detail="SKU-492 low in WH-1" time="12m ago" type="warning" />
                  <ActivityItem action="Order Fulfuilled" detail="#ORD-8920 • TikTok Shop" time="15m ago" type="success" />
                  <ActivityItem action="New Shipment" detail="Inbound Freight • Container 8" time="22m ago" type="info" />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function SidebarItem({ icon: Icon, label, active = false }: { icon: React.ElementType, label: string, active?: boolean }) {
  return (
    <button className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-200 ${active ? "bg-cyan-500/10 text-cyan-400 border border-cyan-500/20" : "text-slate-400 hover:text-white hover:bg-white/5 border border-transparent"}`}>
      <Icon className="w-5 h-5" />
      <span className="text-sm font-medium">{label}</span>
      {active && <ChevronRight className="w-4 h-4 ml-auto" />}
    </button>
  );
}

function KpiCard({ title, value, trend, icon: Icon, color }: { title: string, value: string, trend: string, icon: React.ElementType, color: 'cyan' | 'emerald' | 'indigo' }) {
  const colors = {
    cyan: "text-cyan-400 bg-cyan-400/10 border-cyan-400/20",
    emerald: "text-emerald-400 bg-emerald-400/10 border-emerald-400/20",
    indigo: "text-indigo-400 bg-indigo-400/10 border-indigo-400/20",
  };

  const isPositive = trend.startsWith('+');

  return (
    <div className="rounded-2xl bg-slate-950/60 border border-white/5 p-5 flex flex-col relative overflow-hidden group">
      <div className="flex justify-between items-start mb-4">
        <div className={`w-10 h-10 rounded-xl flex items-center justify-center border ${colors[color]}`}>
          <Icon className="w-5 h-5" />
        </div>
        <div className={`text-xs font-semibold px-2 py-1 rounded-md ${isPositive ? 'bg-emerald-500/10 text-emerald-400' : 'bg-rose-500/10 text-rose-400'}`}>
          {trend}
        </div>
      </div>
      <h4 className="text-slate-400 text-sm mb-1">{title}</h4>
      <span className="text-2xl font-bold text-white">{value}</span>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/[0.02] opacity-0 group-hover:opacity-100 transition-opacity"></div>
    </div>
  );
}

function ActivityItem({ action, detail, time, type }: { action: string, detail: string, time: string, type: 'success' | 'info' | 'warning' }) {
  const dotColors = {
    success: "bg-emerald-400 shadow-[0_0_8px_#10B981]",
    info: "bg-cyan-400 shadow-[0_0_8px_#06B6D4]",
    warning: "bg-amber-400 shadow-[0_0_8px_#F59E0B]",
  };

  return (
    <div className="flex gap-3 items-start relative before:absolute before:left-[5px] before:top-4 before:bottom-[-16px] before:w-[2px] before:bg-white/5 last:before:hidden">
      <div className="w-3 h-3 rounded-full mt-1 shrink-0 relative z-10 border-2 border-slate-950">
        <div className={`w-full h-full rounded-full ${dotColors[type]}`}></div>
      </div>
      <div>
        <p className="text-sm font-medium text-slate-200">{action}</p>
        <p className="text-xs text-slate-500 mt-0.5">{detail}</p>
        <p className="text-[10px] text-slate-600 mt-1 uppercase tracking-wider">{time}</p>
      </div>
    </div>
  );
}
