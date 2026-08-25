"use client";

import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  AlertTriangle,
  Box,
  Calculator,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  HelpCircle,
  Info,
  Package,
  ShoppingCart,
  Truck,
  Warehouse,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const paths = [
  {
    id: "fba",
    label: "Retail Sourcing FBA Prep",
    plain: "I am routing online purchases to Amazon.",
    icon: Package,
    colorClass: "bg-blue-600 border-blue-600 shadow-blue-600/20",
    textClass: "text-blue-600",
    bgMuted: "bg-blue-50",
    dotClass: "bg-blue-400",
    activeText: "text-blue-50",
    included: ["Receiving", "Inspection", "Wrapping", "Poly bag", "FNSKU labels", "Reused boxes", "Dunnage", "Software management", "First 14 days free storage"],
  },
  {
    id: "wholesale",
    label: "Bulk Wholesale FBA Prep",
    plain: "I have same-SKU inventory to prep in volume (300+ units).",
    icon: Warehouse,
    colorClass: "bg-indigo-600 border-indigo-600 shadow-indigo-600/20",
    textClass: "text-indigo-600",
    bgMuted: "bg-indigo-50",
    dotClass: "bg-indigo-400",
    activeText: "text-indigo-50",
    included: ["Receiving", "Inspection", "Wrapping", "Poly bag", "FNSKU labels", "Reused boxes", "Dunnage", "Volume rates from $1.15 to $0.90"],
  },
  {
    id: "carton",
    label: "Wholesale Storage & Cross-Docking",
    plain: "I need pallets staged or forwarded.",
    icon: Truck,
    colorClass: "bg-amber-500 border-amber-500 shadow-amber-500/20",
    textClass: "text-amber-600",
    bgMuted: "bg-amber-50",
    dotClass: "bg-amber-400",
    activeText: "text-amber-50",
    included: ["Receiving", "Label printing", "Carton forwarding", "Pallet handling", "Storage tracking"],
  },
  {
    id: "ecommerce",
    label: "DTC E-Commerce Fulfillment",
    plain: "I need individual Shopify or TikTok Shop orders shipped.",
    icon: ShoppingCart,
    colorClass: "bg-emerald-600 border-emerald-600 shadow-emerald-600/20",
    textClass: "text-emerald-600",
    bgMuted: "bg-emerald-50",
    dotClass: "bg-emerald-400",
    activeText: "text-emerald-50",
    included: ["Order handling", "Item handling", "Storage estimate", "Monthly volume pricing"],
  },
  {
    id: "storage",
    label: "Estimate storage only",
    plain: "I just need to know storage cost.",
    icon: Box,
    colorClass: "bg-violet-600 border-violet-600 shadow-violet-600/20",
    textClass: "text-violet-600",
    bgMuted: "bg-violet-50",
    dotClass: "bg-violet-400",
    activeText: "text-violet-50",
    included: ["First 14 days free", "Monthly cubic-foot estimate", "Q4 rate option"],
  },
  {
    id: "notSure",
    label: "Not sure yet",
    plain: "Help me figure out the right path.",
    icon: HelpCircle,
    colorClass: "bg-rose-500 border-rose-500 shadow-rose-500/20",
    textClass: "text-rose-500",
    bgMuted: "bg-rose-50",
    dotClass: "bg-rose-400",
    activeText: "text-rose-50",
    included: ["A quick conversation is better than guessing", "We’ll point you toward the right service"],
  },
];

function money(value: number) {
  if (Number.isNaN(value) || value === null || value === undefined) return "$0.00";
  return value.toLocaleString("en-US", { style: "currency", currency: "USD" });
}

function getFbaRate(items: number) {
  if (items > 10000) return null;
  if (items >= 5001) return 1;
  if (items >= 2001) return 1.15;
  if (items >= 1001) return 1.25;
  if (items >= 501) return 1.35;
  if (items >= 1) return 1.45;
  return 0;
}

function getWholesaleRate(units: number) {
  if (units > 10000) return null;
  if (units >= 5001) return 0.9;
  if (units >= 2501) return 1;
  if (units >= 300) return 1.15;
  return null;
}

function getEcommerceRates(orders: number) {
  if (orders > 2500) return null;
  if (orders >= 1001) return { order: 2, item: 0.3 };
  if (orders >= 501) return { order: 2.25, item: 0.4 };
  if (orders >= 1) return { order: 2.5, item: 0.5 };
  return { order: 0, item: 0 };
}

function getStorageRate(days: number, q4: boolean) {
  if (days <= 14) return 0;
  if (q4) return 4.8;
  if (days >= 181) return 3.6;
  return 2.4;
}

function cubicFeetFromBox(length: number, width: number, height: number, quantity: number) {
  return (length * width * height * quantity) / 1728;
}

interface NumberInputProps {
  label: string;
  value: number | "";
  onChange: (value: number | "") => void;
  placeholder?: string;
  suffix?: string;
  helper?: string;
  disabled?: boolean;
  min?: number;
}

function NumberInput({ label, value, onChange, placeholder, suffix, helper, disabled, min = 0 }: NumberInputProps) {
  return (
    <label className="block">
      <div className="mb-2 flex items-center justify-between gap-3">
        <span className="text-sm font-medium text-zinc-800">{label}</span>
        {suffix && <span className="text-xs text-zinc-500">{suffix}</span>}
      </div>
      <input
        type="number"
        min={min}
        value={value}
        placeholder={placeholder}
        disabled={disabled}
        onChange={(e) => {
          const val = e.target.value;
          if (val === "") {
            onChange("");
          } else {
            onChange(Number(val));
          }
        }}
        className="w-full rounded-2xl border border-zinc-200 bg-white px-4 py-3 text-base shadow-sm outline-none transition focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 disabled:bg-zinc-100 disabled:text-zinc-400"
      />
      {helper && <p className="mt-2 text-xs leading-5 text-zinc-500">{helper}</p>}
    </label>
  );
}

interface ToggleRowProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label: string;
  helper?: string;
}

function ToggleRow({ checked, onChange, label, helper }: ToggleRowProps) {
  return (
    <label className="flex cursor-pointer items-start gap-3 rounded-2xl border border-zinc-200 bg-white p-4 transition hover:border-zinc-300">
      <input type="checkbox" checked={checked} onChange={(e) => onChange(e.target.checked)} className="mt-1 h-4 w-4 accent-emerald-600" />
      <span>
        <span className="block text-sm font-medium text-zinc-800">{label}</span>
        {helper && <span className="mt-1 block text-xs leading-5 text-zinc-500">{helper}</span>}
      </span>
    </label>
  );
}

interface SectionProps {
  title: string;
  eyebrow?: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

function Section({ title, eyebrow, children, defaultOpen = true }: SectionProps) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="rounded-3xl border border-zinc-200 bg-white p-5 shadow-sm">
      <button onClick={() => setOpen(!open)} className="flex w-full items-center justify-between gap-4 text-left">
        <span>
          {eyebrow && <span className="mb-1 block text-xs font-semibold uppercase tracking-wide text-emerald-600">{eyebrow}</span>}
          <span className="text-lg font-semibold tracking-tight text-zinc-950">{title}</span>
        </span>
        {open ? <ChevronDown className="h-5 w-5 text-zinc-500" /> : <ChevronRight className="h-5 w-5 text-zinc-500" />}
      </button>
      {open && <div className="mt-5">{children}</div>}
    </div>
  );
}

interface SummaryRow {
  label: string;
  detail?: string | null;
  amount: number;
}

interface SummaryGroupProps {
  title: string;
  rows: SummaryRow[];
}

function SummaryGroup({ title, rows }: SummaryGroupProps) {
  if (!rows.length) return null;
  return (
    <div className="rounded-2xl bg-zinc-50 p-4">
      <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-zinc-400">{title}</p>
      {rows.map((row) => (
        <div key={row.label + row.detail} className="flex items-start justify-between gap-4 border-b border-zinc-100 py-3 last:border-0">
          <div>
            <p className="text-sm font-medium text-zinc-700">{row.label}</p>
            {row.detail && <p className="mt-1 text-xs leading-5 text-zinc-500">{row.detail}</p>}
          </div>
          <p className="shrink-0 text-sm font-semibold text-zinc-950">{money(row.amount)}</p>
        </div>
      ))}
    </div>
  );
}

export default function MontanaLogisticsCalculatorPage() {
  const [service, setService] = useState("fba");

  const [items, setItems] = useState<number | "">("");
  const [books, setBooks] = useState<number | "">("");
  const [wholesaleUnits, setWholesaleUnits] = useState<number | "">("");
  const [orders, setOrders] = useState<number | "">("");
  const [avgItems, setAvgItems] = useState<number | "">("");

  const [needsStorage, setNeedsStorage] = useState(false);
  const [useBoxMath, setUseBoxMath] = useState(true);
  const [boxCount, setBoxCount] = useState<number | "">("");
  const [boxLength, setBoxLength] = useState<number | "">("");
  const [boxWidth, setBoxWidth] = useState<number | "">("");
  const [boxHeight, setBoxHeight] = useState<number | "">("");
  const [manualCubicFeet, setManualCubicFeet] = useState<number | "">("");
  const [storageDays, setStorageDays] = useState<number | "">("");

  const [q4, setQ4] = useState(false);

  const [hasReturns, setHasReturns] = useState(false);
  const [returnsCount, setReturnsCount] = useState<number | "">("");
  const [hasBundles, setHasBundles] = useState(false);
  const [bundles, setBundles] = useState<number | "">("");
  const [itemsPerBundle, setItemsPerBundle] = useState<number | "">("");
  const [hasSoldAsSet, setHasSoldAsSet] = useState(false);
  const [soldAsSetLabels, setSoldAsSetLabels] = useState<number | "">("");
  const [hasDoNotOpen, setHasDoNotOpen] = useState(false);
  const [doNotOpenLabels, setDoNotOpenLabels] = useState<number | "">("");
  const [hasBubbleWrap, setHasBubbleWrap] = useState(false);
  const [bubbleWrapItems, setBubbleWrapItems] = useState<number | "">("");
  const [bubbleSheets, setBubbleSheets] = useState<number | "">("");
  const [hasManualCount, setHasManualCount] = useState(false);
  const [manualCountHours, setManualCountHours] = useState<number | "">("");

  const [palletsReceived, setPalletsReceived] = useState<number | "">("");
  const [boxesReceived, setBoxesReceived] = useState<number | "">("");
  const [container20, setContainer20] = useState<number | "">("");
  const [container40, setContainer40] = useState<number | "">("");
  const [shortPallets, setShortPallets] = useState<number | "">("");
  const [tallPallets, setTallPallets] = useState<number | "">("");
  const [cartonsForwarded, setCartonsForwarded] = useState<number | "">("");
  const [palletsForwarded, setPalletsForwarded] = useState<number | "">("");

  const toNum = (val: number | ""): number => (val === "" ? 0 : val);

  const selectedPath = paths.find((path) => path.id === service) || paths[0];
  const SelectedIcon = selectedPath.icon || Calculator;

  // ── Quote modal state ──────────────────────────────────────────────────────
  const [showModal, setShowModal] = useState(false);
  const [quoteName, setQuoteName] = useState("");
  const [quoteEmail, setQuoteEmail] = useState("");
  const [quoteSubmitting, setQuoteSubmitting] = useState(false);
  const [quoteSubmitted, setQuoteSubmitted] = useState(false);
  const [quoteError, setQuoteError] = useState("");
  const [quoteBusiness, setQuoteBusiness] = useState("");
  const [quoteLastName, setQuoteLastName] = useState("");
  const [quotePhone, setQuotePhone] = useState("");
  const [quoteHoneypotWebsite, setQuoteHoneypotWebsite] = useState("");
  const [quoteHoneypotPhone, setQuoteHoneypotPhone] = useState("");
  const quoteLoadedAt = React.useRef(0);
  React.useEffect(() => { quoteLoadedAt.current = Date.now(); }, []);

  const handleQuoteSubmit = async () => {
    setQuoteSubmitting(true);
    setQuoteError("");

    // Build a structured snapshot of all estimator state
    const fields: Record<string, string> = {
      "Service Path": selectedPath.label,
    };

    if (service === "fba") {
      if (items !== "") fields["FBA Items"] = String(items);
      if (books !== "") fields["Books"] = String(books);
    }
    if (service === "wholesale" && wholesaleUnits !== "") fields["Wholesale Units"] = String(wholesaleUnits);
    if (service === "ecommerce") {
      if (orders !== "") fields["Monthly Orders"] = String(orders);
      if (avgItems !== "") fields["Avg Items / Order"] = String(avgItems);
    }
    if (service === "carton") {
      if (palletsReceived !== "") fields["Pallets Received"] = String(palletsReceived);
      if (boxesReceived !== "") fields["Boxes Received"] = String(boxesReceived);
      if (container20 !== "") fields["20ft Containers"] = String(container20);
      if (container40 !== "") fields["40ft Containers"] = String(container40);
      if (shortPallets !== "") fields["Short Pallets (≤70in)"] = String(shortPallets);
      if (tallPallets !== "") fields["Tall Pallets (71in+)"] = String(tallPallets);
      if (cartonsForwarded !== "") fields["Cartons Forwarded"] = String(cartonsForwarded);
      if (palletsForwarded !== "") fields["Pallets Forwarded"] = String(palletsForwarded);
    }
    if (service === "storage" || needsStorage) {
      fields["Storage Days"] = storageDays !== "" ? String(storageDays) : "Not specified";
      fields["Cubic Feet"] = cubicFeet > 0 ? String(cubicFeet) : "Not specified";
      fields["Q4 Storage Rate"] = q4 ? "Yes" : "No";
    }
    if (hasReturns && returnsCount !== "") fields["Returns"] = String(returnsCount);
    if (hasBundles) {
      fields["Bundles"] = bundles !== "" ? String(bundles) : "Yes";
      if (itemsPerBundle !== "") fields["Items per Bundle"] = String(itemsPerBundle);
    }
    if (hasSoldAsSet && soldAsSetLabels !== "") fields["Sold as Set Labels"] = String(soldAsSetLabels);
    if (hasDoNotOpen && doNotOpenLabels !== "") fields["Do Not Open Labels"] = String(doNotOpenLabels);
    if (hasBubbleWrap) {
      if (bubbleWrapItems !== "") fields["Bubble Wrap Items"] = String(bubbleWrapItems);
      if (bubbleSheets !== "") fields["Bubble Sheets / Item"] = String(bubbleSheets);
    }
    if (hasManualCount && manualCountHours !== "") fields["Manual Count Hours"] = String(manualCountHours);
    fields["Estimated Total"] = estimate.requiresQuote ? "Custom quote needed" : money(estimate.total);
    if (estimate.quoteReasons.length > 0) fields["Quote Notes"] = estimate.quoteReasons.join("; ");
    if (quoteBusiness.trim()) fields["Business Name"] = quoteBusiness.trim();
    if (quotePhone.trim()) fields["Phone Number"] = quotePhone.trim();

    try {
      const res = await fetch("/api/submit-plan", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: `${quoteName.trim()} ${quoteLastName.trim()}`.trim() || quoteName.trim(),
          email: quoteEmail.trim(),
          volume: service,
          friction: "Estimator quote request",
          website: quoteHoneypotWebsite,
          phone_confirm: quoteHoneypotPhone,
          additionalFields: fields,
          sendToCustomer: true,
          loadedAt: quoteLoadedAt.current,
          // eslint-disable-next-line react-hooks/purity
          submittedAt: quoteLoadedAt.current ? Date.now() : 0,
        }),
      });
      const json = await res.json();
      if (!res.ok || !json.success) {
        setQuoteError(json.error ?? "Something went wrong. Please try again.");
        setQuoteSubmitting(false);
        return;
      }
      setQuoteSubmitted(true);
    } catch {
      setQuoteError("Network error. Please check your connection and try again.");
      setQuoteSubmitting(false);
    }
  };

  const isUnfilled = useMemo(() => {
    if (service === "fba") return items === "";
    if (service === "wholesale") return wholesaleUnits === "";
    if (service === "ecommerce") return orders === "";
    if (service === "carton") {
      return (
        palletsReceived === "" &&
        boxesReceived === "" &&
        container20 === "" &&
        container40 === "" &&
        shortPallets === "" &&
        tallPallets === "" &&
        cartonsForwarded === "" &&
        palletsForwarded === ""
      );
    }
    if (service === "storage") {
      if (useBoxMath) {
        return boxCount === "" && boxLength === "" && boxWidth === "" && boxHeight === "";
      }
      return manualCubicFeet === "";
    }
    return false;
  }, [service, items, wholesaleUnits, orders, palletsReceived, boxesReceived, container20, container40, shortPallets, tallPallets, cartonsForwarded, palletsForwarded, useBoxMath, boxCount, boxLength, boxWidth, boxHeight, manualCubicFeet]);

  const cubicFeet = useMemo(() => {
    if (!needsStorage && service !== "storage" && service !== "carton") return 0;
    if (!useBoxMath) return toNum(manualCubicFeet);
    return Math.round(cubicFeetFromBox(toNum(boxLength), toNum(boxWidth), toNum(boxHeight), toNum(boxCount)) * 10) / 10;
  }, [needsStorage, service, useBoxMath, manualCubicFeet, boxLength, boxWidth, boxHeight, boxCount]);

  const estimate = useMemo(() => {
    const quoteReasons: string[] = [];
    const groups: { service: SummaryRow[]; addons: SummaryRow[]; storage: SummaryRow[]; receiving: SummaryRow[] } = { service: [], addons: [], storage: [], receiving: [] };
    let total = 0;

    if (service === "notSure") {
      quoteReasons.push("A quick quote request is the best next step when the service path is unclear.");
      return { groups, total: 0, quoteReasons, requiresQuote: true, isUnfilled };
    }

    if (isUnfilled) {
      return { groups, total: 0, quoteReasons, requiresQuote: false, isUnfilled };
    }

    const storageRate = getStorageRate(toNum(storageDays), q4);
    const storageCost = cubicFeet * storageRate;
    const shouldApplyStorage = cubicFeet > 0 && (needsStorage || service === "storage" || service === "carton");

    const bundleFeeEach = toNum(itemsPerBundle) <= 3 ? 0.5 : 0.5 + (toNum(itemsPerBundle) - 3) * 0.15;
    const bundlingCost = hasBundles ? toNum(bundles) * bundleFeeEach : 0;
    const bubbleFeeEach = toNum(bubbleSheets) <= 3 ? 0.5 : 0.5 + (toNum(bubbleSheets) - 3) * 0.15;
    const bubbleCost = hasBubbleWrap ? toNum(bubbleWrapItems) * bubbleFeeEach : 0;
    const returnCost = hasReturns ? toNum(returnsCount) * 1 : 0;
    const soldAsSetCost = hasSoldAsSet ? toNum(soldAsSetLabels) * 0.15 : 0;
    const doNotOpenCost = hasDoNotOpen ? toNum(doNotOpenLabels) * 0.15 : 0;
    const manualCountCost = hasManualCount ? toNum(manualCountHours) * 40 : 0;
    const bookCost = toNum(books) * 2.5;

    if (service === "fba") {
      const itemsNum = toNum(items);
      const rate = getFbaRate(itemsNum);
      if (itemsNum > 10000) quoteReasons.push("FBA prep over 10,000 items requires a custom quote.");
      const base = rate ? itemsNum * rate : 0;
      total += base + bookCost;
      groups.service.push({ label: "FBA prep", detail: rate ? `${itemsNum.toLocaleString()} items × ${money(rate)}` : "Quote required", amount: base });
      if (toNum(books) > 0) groups.service.push({ label: "Books", detail: `${toNum(books).toLocaleString()} books × $2.50`, amount: bookCost });
    }

    if (service === "wholesale") {
      const wholesaleNum = toNum(wholesaleUnits);
      const rate = getWholesaleRate(wholesaleNum);
      if (wholesaleNum < 300) quoteReasons.push("Wholesale pricing starts at 300 units.");
      if (wholesaleNum > 10000) quoteReasons.push("Wholesale prep over 10,000 units requires a custom quote.");
      const base = rate ? wholesaleNum * rate : 0;
      total += base;
      groups.service.push({ label: "Wholesale prep", detail: rate ? `${wholesaleNum.toLocaleString()} units × ${money(rate)}` : "Quote required", amount: base });
    }

    if (service === "ecommerce") {
      const ordersNum = toNum(orders);
      const rates = getEcommerceRates(ordersNum);
      if (!rates) quoteReasons.push("eCommerce fulfillment over 2,500 orders requires a custom quote.");
      const totalItems = ordersNum * toNum(avgItems);
      const orderCost = rates ? ordersNum * rates.order : 0;
      const itemCost = rates ? totalItems * rates.item : 0;
      total += orderCost + itemCost;
      groups.service.push({ label: "Order handling", detail: rates ? `${ordersNum.toLocaleString()} orders × ${money(rates.order)}` : "Quote required", amount: orderCost });
      groups.service.push({ label: "Item handling", detail: rates ? `${totalItems.toLocaleString()} items × ${money(rates?.item || 0)}` : "Quote required", amount: itemCost });
    }

    if (service === "carton") {
      const receiving = toNum(palletsReceived) * 18 + toNum(boxesReceived) + toNum(container20) * 275 + toNum(container40) * 550;
      const palletization = toNum(shortPallets) * 20 + toNum(tallPallets) * 50;
      const forwarding = toNum(cartonsForwarded) * 4 + toNum(palletsForwarded) * 20;
      total += receiving + palletization + forwarding;
      groups.receiving.push({ label: "Receiving", detail: "Pallets, boxes, and containers", amount: receiving });
      groups.receiving.push({ label: "Palletization", detail: "Up to 70 in. and 71+ in. pallets", amount: palletization });
      groups.receiving.push({ label: "Forwarding", detail: "Cartons and pallets forwarded", amount: forwarding });
    }

    const addonTotal = returnCost + bundlingCost + soldAsSetCost + doNotOpenCost + bubbleCost + manualCountCost;
    total += addonTotal;

    if (returnCost > 0) groups.addons.push({ label: "Returns", detail: `${toNum(returnsCount).toLocaleString()} returns × $1.00`, amount: returnCost });
    if (bundlingCost > 0) groups.addons.push({ label: "Bundles", detail: `${toNum(bundles).toLocaleString()} bundles × ${money(bundleFeeEach)}`, amount: bundlingCost });
    if (soldAsSetCost > 0) groups.addons.push({ label: "Sold as set labels", detail: `${toNum(soldAsSetLabels).toLocaleString()} labels × $0.15`, amount: soldAsSetCost });
    if (doNotOpenCost > 0) groups.addons.push({ label: "Do not open labels", detail: `${toNum(doNotOpenLabels).toLocaleString()} labels × $0.15`, amount: doNotOpenCost });
    if (bubbleCost > 0) groups.addons.push({ label: "Bubble wrap", detail: `${toNum(bubbleWrapItems).toLocaleString()} items × ${money(bubbleFeeEach)}`, amount: bubbleCost });
    if (manualCountCost > 0) groups.addons.push({ label: "Manual count", detail: `${toNum(manualCountHours)} hours × $40.00`, amount: manualCountCost });

    if (shouldApplyStorage) {
      total += storageCost;
      groups.storage.push({ label: storageCost > 0 ? "Monthly storage estimate" : "Storage estimate", detail: storageCost > 0 ? `${cubicFeet.toLocaleString()} cu. ft. × ${money(storageRate)}/mo` : "First 14 days are free", amount: storageCost });
    }

    return { groups, total, quoteReasons, requiresQuote: quoteReasons.length > 0, isUnfilled };
  }, [service, storageDays, q4, cubicFeet, needsStorage, itemsPerBundle, hasBundles, bundles, bubbleSheets, hasBubbleWrap, bubbleWrapItems, hasReturns, returnsCount, hasSoldAsSet, soldAsSetLabels, hasDoNotOpen, doNotOpenLabels, hasManualCount, manualCountHours, books, items, wholesaleUnits, orders, avgItems, palletsReceived, boxesReceived, container20, container40, shortPallets, tallPallets, cartonsForwarded, palletsForwarded, isUnfilled]);

  const showAddons = service === "fba" || service === "wholesale";
  const showStorage = service !== "notSure";

  return (
    <div className="min-h-[100dvh] bg-[#f9fafb] text-zinc-900 font-sans selection:bg-emerald-100 selection:text-emerald-900 flex flex-col overflow-x-hidden">
      <Navbar />

      {/* Main Content */}
      <main className="flex-grow p-4 sm:p-8 pt-12 md:pt-16 pb-24">
        <div className="mx-auto max-w-7xl">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }} className="mb-12 grid gap-8 lg:grid-cols-[1.2fr_.8fr] lg:items-end">
            <div>
              <div className={`mb-4 inline-flex items-center gap-2 px-3 py-1 rounded-full ${selectedPath.bgMuted} border border-white/20 ${selectedPath.textClass} text-xs font-semibold uppercase tracking-widest shadow-sm backdrop-blur-md transition-colors`}>
                <Calculator className="h-4 w-4" />
                Cost Estimator
              </div>
              <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-zinc-950 sm:text-5xl leading-tight transition-colors">
                Tax-Free Fulfillment Pricing Calculator
              </h1>
              <h2 className="mt-2 max-w-3xl text-2xl font-bold tracking-tight text-zinc-800 sm:text-3xl leading-snug">
                Get your exact numbers before you ship.
              </h2>
              <p className="mt-4 max-w-2xl text-lg leading-relaxed text-zinc-600">
                Answer a few questions to map your prep, storage, or forwarding costs. If your project requires custom logistics, we tell you upfront instead of generating fake math.
              </p>
            </div>

            <Card className="rounded-[2rem] border-emerald-100 bg-white shadow-xl">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className={`rounded-2xl ${selectedPath.bgMuted} p-4 ${selectedPath.textClass} border border-white/50 shadow-sm transition-colors`}>
                    <SelectedIcon className="h-8 w-8" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold tracking-wider uppercase text-zinc-500">Selected path</p>
                    <p className="mt-1 text-2xl font-bold tracking-tight text-zinc-950">{selectedPath.label}</p>
                    <p className="mt-2 text-sm leading-relaxed text-zinc-600">{selectedPath.plain}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <div className="grid gap-8 lg:grid-cols-[1fr_390px]">
            <div className="space-y-8">
              <Section title="What are you trying to do?" eyebrow="Step 1">
                <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                  {paths.map((path) => {
                    const Icon = path.icon;
                    const active = service === path.id;
                    return (
                      <motion.button
                        whileHover={{ scale: 1.02, y: -4 }}
                        whileTap={{ scale: 0.98 }}
                        key={path.id}
                        onClick={() => setService(path.id)}
                        className={`rounded-3xl border p-6 text-left transition-all duration-300 ${active ? `${path.colorClass} text-white shadow-lg` : "border-zinc-200 bg-white text-zinc-800 hover:border-zinc-300 hover:shadow-md"}`}
                      >
                        <div className={`mb-4 inline-flex rounded-2xl p-3 transition-colors ${active ? "bg-white/20" : `${path.bgMuted} ${path.textClass}`}`}>
                          <Icon className="h-6 w-6" />
                        </div>
                        <p className="text-base font-bold">{path.label}</p>
                        <p className={`mt-2 text-sm leading-relaxed ${active ? path.activeText : "text-zinc-500"}`}>{path.plain}</p>
                      </motion.button>
                    );
                  })}
                </div>
              </Section>

              {service !== "notSure" && (
                <Section title="Basic shipment details" eyebrow="Step 2">
                  {service === "fba" && (
                    <div className="grid gap-6 sm:grid-cols-2">
                      <NumberInput label="How many standard FBA items?" value={items} onChange={setItems} placeholder="e.g. 500" helper="Monthly tiers: 1–500 ($1.45), 501–1k ($1.35), 1,001–2k ($1.25), 2,001–5k ($1.15), 5,001–10k ($1.00). Over 10,000 units requires a custom quote." min={1} />
                      <NumberInput label="Any books?" value={books} onChange={setBooks} placeholder="e.g. 150" helper="$2.50 flat rate per unit. Includes grading and FNSKU application." />
                    </div>
                  )}

                  {service === "wholesale" && (
                    <div className="grid gap-6 sm:grid-cols-2">
                      <NumberInput label="How many wholesale units?" value={wholesaleUnits} onChange={setWholesaleUnits} placeholder="e.g. 1200" helper="Wholesale tiers: 300–2,500 ($1.15), 2,501–5,000 ($1.00), 5,001–10,000 ($0.90). Over 10,000 units requires a custom quote. Price includes receiving, inspection, wrapping, poly bag, FNSKU, reused boxes & dunnage." min={300} />
                    </div>
                  )}

                  {service === "ecommerce" && (
                    <div className="grid gap-6 sm:grid-cols-2">
                      <NumberInput label="Monthly orders" value={orders} onChange={setOrders} placeholder="e.g. 400" helper="Monthly order tiers: 1–500 ($2.50/order + $0.50/item), 501–1,000 ($2.25/order + $0.40/item), 1,001–2,500 ($2.00/order + $0.30/item). Over 2,500 orders requires a custom quote." min={1} />
                      <NumberInput label="Average items per order" value={avgItems} onChange={setAvgItems} placeholder="e.g. 2" />
                    </div>
                  )}

                  {service === "carton" && (
                    <div className="space-y-8">
                      <div className="grid gap-6 sm:grid-cols-2">
                        <NumberInput label="Pallets received" value={palletsReceived} onChange={setPalletsReceived} placeholder="e.g. 2" suffix="$18 each" />
                        <NumberInput label="Boxes received" value={boxesReceived} onChange={setBoxesReceived} placeholder="e.g. 30" suffix="$1 each" />
                        <NumberInput label="20’ containers unloaded" value={container20} onChange={setContainer20} placeholder="e.g. 1" suffix="$275 each" />
                        <NumberInput label="40’ containers unloaded" value={container40} onChange={setContainer40} placeholder="e.g. 1" suffix="$550 each" />
                      </div>
                      <div className="grid gap-6 sm:grid-cols-2">
                        <NumberInput label="Pallets up to 70 inches" value={shortPallets} onChange={setShortPallets} placeholder="e.g. 2" suffix="$20 each" />
                        <NumberInput label="Pallets 71 inches or taller" value={tallPallets} onChange={setTallPallets} placeholder="e.g. 1" suffix="$50 each" />
                        <NumberInput label="Cartons forwarded" value={cartonsForwarded} onChange={setCartonsForwarded} placeholder="e.g. 25" suffix="$4 each" />
                        <NumberInput label="Pallets forwarded" value={palletsForwarded} onChange={setPalletsForwarded} placeholder="e.g. 1" suffix="$20 each" />
                      </div>
                    </div>
                  )}

                  {service === "storage" && (
                    <div className="rounded-3xl border border-dashed border-zinc-300 bg-zinc-50 p-8">
                      <h3 className="text-xl font-bold">Storage only</h3>
                      <p className="mt-2 text-base leading-relaxed text-zinc-600">Skip the prep fields and estimate monthly storage after the free two-week period.</p>
                    </div>
                  )}
                </Section>
              )}

              {showAddons && (
                <Section title="Any special prep needs?" eyebrow="Step 3" defaultOpen={false}>
                  <div className="grid gap-4 md:grid-cols-2">
                    <ToggleRow checked={hasReturns} onChange={setHasReturns} label="Returns" helper="$1.00 each in addition to the original prep fee." />
                    <ToggleRow checked={hasBundles} onChange={setHasBundles} label="Bundles" helper="$0.50 up to 3 items, then $0.15 per additional item." />
                    <ToggleRow checked={hasSoldAsSet} onChange={setHasSoldAsSet} label="Sold as set labels" helper="$0.15 per label." />
                    <ToggleRow checked={hasDoNotOpen} onChange={setHasDoNotOpen} label="“Do not open” labels" helper="$0.15 per label." />
                    <ToggleRow checked={hasBubbleWrap} onChange={setHasBubbleWrap} label="Bubble wrap" helper="$0.50 up to 3 sheets, then $0.15 per additional sheet." />
                    <ToggleRow checked={hasManualCount} onChange={setHasManualCount} label="Manual inventory count" helper="$40 per hour." />
                  </div>

                  <div className="mt-8 grid gap-6 sm:grid-cols-2">
                    {hasReturns && <NumberInput label="Return items" value={returnsCount} onChange={setReturnsCount} placeholder="e.g. 50" />}
                    {hasBundles && <NumberInput label="Number of bundles" value={bundles} onChange={setBundles} placeholder="e.g. 200" />}
                    {hasBundles && <NumberInput label="Items per bundle" value={itemsPerBundle} onChange={setItemsPerBundle} placeholder="e.g. 3" />}
                    {hasSoldAsSet && <NumberInput label="Sold as set labels" value={soldAsSetLabels} onChange={setSoldAsSetLabels} placeholder="e.g. 100" />}
                    {hasDoNotOpen && <NumberInput label="Do not open labels" value={doNotOpenLabels} onChange={setDoNotOpenLabels} placeholder="e.g. 100" />}
                    {hasBubbleWrap && <NumberInput label="Bubble wrap items" value={bubbleWrapItems} onChange={setBubbleWrapItems} placeholder="e.g. 150" />}
                    {hasBubbleWrap && <NumberInput label="Sheets per item" value={bubbleSheets} onChange={setBubbleSheets} placeholder="e.g. 3" />}
                    {hasManualCount && <NumberInput label="Manual count hours" value={manualCountHours} onChange={setManualCountHours} placeholder="e.g. 2" />}
                  </div>
                </Section>
              )}

              {showStorage && (
                <Section title="Storage" eyebrow="Optional">
                  {service !== "storage" && service !== "carton" && (
                    <div className="mb-6">
                      <ToggleRow checked={needsStorage} onChange={setNeedsStorage} label="Staging longer than 14 days?" helper="Your first two weeks are completely free. Standard monthly storage rates apply on day 15." />
                    </div>
                  )}

                  {(needsStorage || service === "storage" || service === "carton") && (
                    <div className="mt-2 space-y-6">
                      <div className="grid gap-4 sm:grid-cols-2">
                        <button onClick={() => setUseBoxMath(true)} className={`rounded-2xl border p-4 text-left font-medium transition-colors ${useBoxMath ? "border-zinc-900 bg-zinc-900 text-white" : "border-zinc-200 bg-white text-zinc-700 hover:border-zinc-300"}`}>
                          I know box sizes
                        </button>
                        <button onClick={() => setUseBoxMath(false)} className={`rounded-2xl border p-4 text-left font-medium transition-colors ${!useBoxMath ? "border-zinc-900 bg-zinc-900 text-white" : "border-zinc-200 bg-white text-zinc-700 hover:border-zinc-300"}`}>
                          I know cubic feet
                        </button>
                      </div>

                      {useBoxMath ? (
                        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
                          <NumberInput label="Box count" value={boxCount} onChange={setBoxCount} placeholder="e.g. 20" />
                          <NumberInput label="Length" suffix="inches" value={boxLength} onChange={setBoxLength} placeholder="e.g. 18" />
                          <NumberInput label="Width" suffix="inches" value={boxWidth} onChange={setBoxWidth} placeholder="e.g. 14" />
                          <NumberInput label="Height" suffix="inches" value={boxHeight} onChange={setBoxHeight} placeholder="e.g. 12" />
                        </div>
                      ) : (
                        <NumberInput label="Cubic feet" value={manualCubicFeet} onChange={setManualCubicFeet} placeholder="e.g. 40" helper="Use this if you already know the storage volume." />
                      )}

                      <div className="grid gap-6 sm:grid-cols-2">
                        <NumberInput label="Storage days" value={storageDays} onChange={setStorageDays} placeholder="e.g. 45" helper="First 14 days are free." />
                        <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-5">
                          <p className="text-xs font-semibold uppercase tracking-wide text-zinc-500">Calculated storage space</p>
                          <p className="mt-2 text-3xl font-bold tracking-tight">{cubicFeet > 0 ? `${cubicFeet.toLocaleString()} cu. ft.` : "—"}</p>
                          <p className="mt-2 text-sm leading-relaxed text-zinc-600">Used for the monthly storage estimate.</p>
                        </div>
                      </div>

                      <ToggleRow checked={q4} onChange={setQ4} label="Storage falls between October 1 and December 31" helper="Q4 storage rate is $4.80 per cubic foot per month." />
                    </div>
                  )}
                </Section>
              )}
            </div>

            <div className="space-y-6 lg:sticky lg:top-28 lg:self-start">
              <Card className="rounded-[2.5rem] border-zinc-200 bg-white shadow-2xl">
                <CardContent className="p-8">
                  <p className="text-sm font-semibold tracking-widest uppercase text-zinc-500">Estimate</p>
                  {estimate.isUnfilled ? (
                    <div className="mt-3">
                      <p className="text-4xl font-bold tracking-tight text-zinc-400">Enter details</p>
                      <p className="mt-4 text-base leading-relaxed text-zinc-500">Fill in the fields above to see a calculated estimate.</p>
                    </div>
                  ) : estimate.requiresQuote ? (
                    <div className="mt-3">
                      <p className="text-4xl font-bold tracking-tight text-zinc-950">Custom quote needed</p>
                      <p className="mt-4 text-base leading-relaxed text-zinc-600">This request has details that should be reviewed before giving a hard price.</p>
                    </div>
                  ) : (
                    <p className={`mt-3 text-5xl font-bold tracking-tighter transition-colors ${selectedPath.textClass}`}>{money(estimate.total)}</p>
                  )}

                  <div className="mt-8 space-y-4">
                    <SummaryGroup title="Service" rows={estimate.groups.service} />
                    <SummaryGroup title="Receiving & forwarding" rows={estimate.groups.receiving} />
                    <SummaryGroup title="Special prep" rows={estimate.groups.addons} />
                    <SummaryGroup title="Storage" rows={estimate.groups.storage} />
                  </div>

                  {estimate.quoteReasons.length > 0 && (
                    <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-5">
                      <div className="flex items-start gap-4">
                        <AlertTriangle className="mt-0.5 h-5 w-5 text-amber-700 shrink-0" />
                        <div>
                           <p className="font-bold text-amber-900">Needs review</p>
                           <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-amber-800">
                             {estimate.quoteReasons.map((reason) => <li key={reason}>{reason}</li>)}
                           </ul>
                        </div>
                      </div>
                    </div>
                  )}

                  {!estimate.isUnfilled && !estimate.requiresQuote && estimate.total === 0 && (
                    <div className="mt-6 rounded-2xl bg-zinc-50 p-5 text-sm leading-relaxed text-zinc-600 border border-zinc-100">
                      Choose a service and add shipment details to build an estimate.
                    </div>
                  )}

                  <div className="mt-8 grid gap-4">
                    <Button
                      onClick={() => { 
                        setShowModal(true); 
                        setQuoteSubmitted(false); 
                        setQuoteError(""); 
                        quoteLoadedAt.current = Date.now();
                      }}
                      className={`rounded-full ${selectedPath.colorClass} hover:opacity-90 text-white py-6 text-base font-semibold transition-opacity`}
                    >
                      Request final quote
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="rounded-[2rem] border-zinc-200 bg-white/90 shadow-lg backdrop-blur-md">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <CheckCircle2 className={`mt-1 h-6 w-6 shrink-0 transition-colors ${selectedPath.textClass}`} />
                    <div>
                      <h3 className="font-bold text-lg text-zinc-950">What’s included</h3>
                      <ul className="mt-3 space-y-2 text-sm leading-relaxed text-zinc-600">
                        {selectedPath.included.map((item) => (
                          <li key={item} className="flex gap-3">
                            <span className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full ${selectedPath.dotClass} transition-colors`} />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="rounded-[2rem] border-amber-200 bg-amber-50 shadow-inner">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <Info className="mt-1 h-6 w-6 text-amber-500 shrink-0" />
                    <div>
                      <h3 className="font-bold text-lg text-amber-950">Estimate notes</h3>
                      <p className="mt-3 text-sm font-semibold leading-relaxed text-amber-900">
                        This is your baseline estimate. It excludes outbound carrier freight, oversized box surcharges, specialized prep requirements, and custom FBM workflows. Final pricing locks in after physical inspection on our dock.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Static FAQ Section */}
          <section className="mt-16 border-t border-zinc-200 pt-12">
            <h2 className="text-2xl font-bold mb-6 text-zinc-900">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-lg text-zinc-900">How much does FBA prep cost?</h3>
                <p className="text-zinc-600 mt-2">
                  We charge volume-tiered rates for monthly standard FBA prep: 1–500 units at $1.45, 501–1,000 units at $1.35, 1,001–2,000 units at $1.25, 2,001–5,000 units at $1.15, and 5,001–10,000 units at $1.00 per unit. Over 10,000 units receives custom pricing. Price includes receiving, inspection, wrapping, 1.5 mil poly bag, FNSKU label, reused boxes, and dunnage.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-lg text-zinc-900">What are your wholesale and ecommerce fulfillment rates?</h3>
                <p className="text-zinc-600 mt-2">
                  Wholesale prep (same-SKU) is $1.15/unit (300–2,500 units), $1.00/unit (2,501–5,000 units), and $0.90/unit (5,001–10,000 units). DTC E-Commerce is $2.50/order + $0.50/item (1–500 orders), $2.25/order + $0.40/item (501–1,000 orders), and $2.00/order + $0.30/item (1,001–2,500 orders).
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-lg text-zinc-900">Are there hidden 3PL storage fees?</h3>
                <p className="text-zinc-600 mt-2">No. Your first 14 days of staging are completely free. Standard monthly rates apply on day 15.</p>
              </div>
              <div>
                <h3 className="font-semibold text-lg text-zinc-900">Do I pay sales tax on Montana 3PL services?</h3>
                <p className="text-zinc-600 mt-2">Montana has zero state sales tax. You pay no checkout tax when routing online retail sourcing through our Great Falls facility.</p>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* Structured Data (JSON-LD) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "WebApplication",
                "name": "Tax-Free Fulfillment Pricing Calculator",
                "applicationCategory": "BusinessApplication",
                "operatingSystem": "All",
                "description": "Calculate exact prep, storage, and forwarding costs for your eCommerce or Amazon FBA business using our Montana tax-free facility."
              },
              {
                "@type": "FAQPage",
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": "How much does FBA prep cost?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "We charge volume-tiered rates for monthly standard FBA prep: 1–500 units at $1.45, 501–1,000 units at $1.35, 1,001–2,000 units at $1.25, 2,001–5,000 units at $1.15, and 5,001–10,000 units at $1.00 per unit. Over 10,000 units receives custom pricing."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "What are your wholesale and ecommerce fulfillment rates?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Wholesale prep is $1.15 (300–2,500 units), $1.00 (2,501–5,000 units), and $0.90 (5,001–10,000 units). DTC E-Commerce is $2.50/order + $0.50/item (1–500), $2.25/order + $0.40/item (501–1,000), and $2.00/order + $0.30/item (1,001–2,500)."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Are there hidden 3PL storage fees?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "No. Your first 14 days of staging are completely free. Standard monthly rates apply on day 15."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Do I pay sales tax on Montana 3PL services?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Montana has zero state sales tax. You pay no checkout tax when routing online retail sourcing through our Great Falls facility."
                    }
                  }
                ]
              }
            ]
          }),
        }}
      />

      {/* Footer from Layout */}
      <Footer />

      {/* ── Quote Request Modal ───────────────────────────────────────────── */}
      {showModal && (
        <div
          className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center"
          onClick={(e) => { if (e.target === e.currentTarget) setShowModal(false); }}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-zinc-950/60 backdrop-blur-sm" />

          {/* Sheet */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 w-full sm:max-w-md bg-white rounded-t-[2.5rem] sm:rounded-[2.5rem] p-8 shadow-2xl"
          >
            {/* Close */}
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-5 right-5 w-9 h-9 flex items-center justify-center rounded-full bg-zinc-100 text-zinc-500 hover:bg-zinc-200 transition-colors text-lg"
            >
              ✕
            </button>

            {quoteSubmitted ? (
              <div className="flex flex-col items-center text-center gap-4 py-6">
                <div className="w-16 h-16 rounded-full bg-emerald-100 border border-emerald-200 flex items-center justify-center text-emerald-600 text-3xl">✓</div>
                <h2 className="text-2xl font-bold text-zinc-950">You&apos;re all set, {quoteName.split(" ")[0]}.</h2>
                <p className="text-sm text-zinc-500 max-w-xs leading-relaxed">A copy of your estimate is headed to your inbox now. We&apos;ll follow up with a full, itemized quote within one business day.</p>
                <button onClick={() => setShowModal(false)} className="mt-2 text-sm font-semibold text-emerald-600 hover:underline">Close</button>
              </div>
            ) : (
              <>
                <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full ${selectedPath.bgMuted} ${selectedPath.textClass} text-xs font-semibold uppercase tracking-widest mb-4`}>
                  {selectedPath.label}
                </div>
                <h2 className="text-2xl font-bold text-zinc-950 mb-1">Request your quote</h2>
                <p className="text-sm text-zinc-500 mb-6">We&apos;ll send a detailed, itemized quote based on the estimate you just built.</p>

                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-zinc-500 mb-1.5 uppercase tracking-wide">First Name</label>
                      <input
                        type="text"
                        value={quoteName}
                        onChange={e => setQuoteName(e.target.value)}
                        placeholder="John"
                        className="h-14 w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 text-sm text-zinc-900 placeholder:text-zinc-400 hover:border-emerald-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 focus:bg-white outline-none transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-zinc-500 mb-1.5 uppercase tracking-wide">Last Name</label>
                      <input
                        type="text"
                        value={quoteLastName}
                        onChange={e => setQuoteLastName(e.target.value)}
                        placeholder="Smith"
                        className="h-14 w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 text-sm text-zinc-900 placeholder:text-zinc-400 hover:border-emerald-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 focus:bg-white outline-none transition-all"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-zinc-500 mb-1.5 uppercase tracking-wide">Business Name</label>
                    <input
                      type="text"
                      value={quoteBusiness}
                      onChange={e => setQuoteBusiness(e.target.value)}
                      placeholder="Acme Inc."
                      className="h-14 w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 text-sm text-zinc-900 placeholder:text-zinc-400 hover:border-emerald-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 focus:bg-white outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-zinc-500 mb-1.5 uppercase tracking-wide">Work Email</label>
                    <input
                      type="email"
                      value={quoteEmail}
                      onChange={e => setQuoteEmail(e.target.value)}
                      placeholder="john@company.com"
                      className="h-14 w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 text-sm text-zinc-900 placeholder:text-zinc-400 hover:border-emerald-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 focus:bg-white outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-zinc-500 mb-1.5 uppercase tracking-wide">Phone Number</label>
                    <input
                      type="tel"
                      value={quotePhone}
                      onChange={e => setQuotePhone(e.target.value)}
                      placeholder="(406) 555-0100"
                      className="h-14 w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 text-sm text-zinc-900 placeholder:text-zinc-400 hover:border-emerald-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 focus:bg-white outline-none transition-all"
                    />
                  </div>
                  {/* Honeypot fields for bot traps */}
                  <div className="opacity-0 absolute -left-[9999px] -top-[9999px] h-0 w-0 z-[-1] pointer-events-none" aria-hidden="true">
                    <label htmlFor="quote_website">Website</label>
                    <input
                      id="quote_website"
                      type="text"
                      name="website"
                      tabIndex={-1}
                      autoComplete="off"
                      value={quoteHoneypotWebsite}
                      onChange={e => setQuoteHoneypotWebsite(e.target.value)}
                    />
                    <label htmlFor="quote_phone_confirm">Confirm Phone</label>
                    <input
                      id="quote_phone_confirm"
                      type="text"
                      name="phone_confirm"
                      tabIndex={-1}
                      autoComplete="off"
                      value={quoteHoneypotPhone}
                      onChange={e => setQuoteHoneypotPhone(e.target.value)}
                    />
                  </div>
                  {quoteError && <p className="text-red-500 text-xs">{quoteError}</p>}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handleQuoteSubmit}
                    disabled={quoteSubmitting || !quoteName.trim() || !quoteEmail.trim()}
                    className={`w-full h-14 rounded-xl text-white font-semibold transition-all flex items-center justify-center gap-2 ${selectedPath.colorClass} disabled:opacity-50 disabled:cursor-not-allowed shadow-lg`}
                  >
                    {quoteSubmitting ? "Sending…" : "Send My Quote Request →"}
                  </motion.button>
                  <p className="text-center text-xs text-zinc-400">No spam. Just a real conversation about your shipment.</p>
                </div>
              </>
            )}
          </motion.div>
        </div>
      )}
    </div>
  );
}
