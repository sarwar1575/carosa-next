// app/emi/page.jsx
"use client";

import { useMemo, useState } from "react";

const INR = new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "INR",
  maximumFractionDigits: 0,
});

function emi(p, annualRatePct, months) {
  const r = annualRatePct / 12 / 100;
  if (r === 0) return p / months;
  const k = Math.pow(1 + r, months);
  return (p * r * k) / (k - 1);
}

export default function EMICalculator() {
  // Defaults to match your screenshot
  const [loan, setLoan] = useState(714400);   // ₹7,14,400
  const [down, setDown] = useState(178600);   // ₹1,78,600 (visual only)
  const [months, setMonths] = useState(66);   // 66 months

  const offerRate = 11.75;  // matches figures
  const baseRate = 13.0;    // for "Savings" comparison

  const { monthly, interest, total, savings } = useMemo(() => {
    const m = emi(loan, offerRate, months);
    const base = emi(loan, baseRate, months);
    const totalPaid = m * months;
    return {
      monthly: Math.round(m),
      interest: Math.round(totalPaid - loan),
      total: Math.round(totalPaid),
      savings: Math.max(0, Math.round(base - m)),
    };
  }, [loan, months]);

  const gaugePct = total > 0 ? Math.min(100, Math.max(0, Math.round((interest / total) * 100))) : 0;

  return (
    <div className="min-h-screen bg-[#F5F7FB] p-4 md:p-8">
      <div className="mx-auto max-w-6xl rounded-xl bg-white shadow-sm ring-1 ring-black/5">
        <div className="grid gap-6 p-6 md:grid-cols-2 md:p-8">
          {/* LEFT: Summary */}
          <div>
            <div className="space-y-3">
              <div className="text-slate-500 text-sm">EMI starting from</div>
              <div className="flex items-end gap-2">
                <div className="text-[40px] leading-none font-extrabold text-[#24318F]">
                  {INR.format(monthly)}
                </div>
                <div className="pb-2 text-slate-600 font-medium">per month</div>
              </div>

              <div className="mt-2">
                <div className="text-slate-500 text-sm">Savings</div>
                <div className="flex items-end gap-2">
                  <div className="text-xl font-bold text-slate-700">{INR.format(savings)}</div>
                  <div className="pb-[2px] text-slate-600 text-sm">per month</div>
                </div>
                <p className="text-slate-500 text-sm mt-1">
                  Enjoy the limited period offer for this car on financing
                </p>
              </div>
            </div>

            {/* Gauge + breakdown */}
            <div className="mt-6 border-t border-slate-200 pt-6">
              <div className="mx-auto w-[260px] h-[130px] relative">
                {/* semicircle track */}
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "conic-gradient(#E9F0D7 0deg, #E9F0D7 180deg, transparent 180deg 360deg)",
                    borderTopLeftRadius: 260,
                    borderTopRightRadius: 260,
                    borderBottomLeftRadius: 0,
                    borderBottomRightRadius: 0,
                    WebkitMask:
                      "radial-gradient(130px 130px at 50% 100%, transparent 65px, #000 66px)",
                    mask:
                      "radial-gradient(130px 130px at 50% 100%, transparent 65px, #000 66px)",
                  }}
                />
                {/* value arc */}
                <div
                  className="absolute inset-0"
                  style={{
                    background: `conic-gradient(#75B94A ${Math.max(
                      0,
                      Math.min(180, (gaugePct / 100) * 180)
                    )}deg, transparent 0)`,
                    transform: "rotate(180deg)",
                    borderTopLeftRadius: 260,
                    borderTopRightRadius: 260,
                    WebkitMask:
                      "radial-gradient(130px 130px at 50% 100%, transparent 65px, #000 66px)",
                    mask:
                      "radial-gradient(130px 130px at 50% 100%, transparent 65px, #000 66px)",
                  }}
                />
              </div>

              <div className="mt-6 space-y-3 text-sm">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="inline-block h-3 w-3 rounded bg-[#E6F3C8] ring-1 ring-black/5" />
                    <span className="text-slate-600">Principal Loan Amount</span>
                  </div>
                  <div className="font-medium text-slate-700">{INR.format(loan)}</div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="inline-block h-3 w-3 rounded bg-[#75B94A] ring-1 ring-black/5" />
                    <span className="text-slate-600">Total Interest Payable</span>
                  </div>
                  <div className="font-medium text-slate-700">{INR.format(interest)}</div>
                </div>
              </div>

              <div className="mt-5 border-t border-slate-200 pt-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-[#24318F] font-semibold">
                    <svg width="18" height="18" viewBox="0 0 24 24" className="opacity-70">
                      <path
                        fill="currentColor"
                        d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zM5 10.64V6.3l7-3.11 7 3.11v4.34C19 15.39 15.92 20.02 12 21.2 8.08 20.02 5 15.39 5 10.64z"
                      />
                    </svg>
                    Total Amount Payable
                  </div>
                  <div className="text-[#24318F] font-extrabold">{INR.format(total)}</div>
                </div>
              </div>

              <div className="mt-6">
                <button
                  className="text-sm text-[#24318F] underline underline-offset-2 hover:opacity-80"
                  onClick={() => alert("T&C link clicked")}
                >
                  T&C apply.
                </button>
              </div>
            </div>
          </div>

          {/* RIGHT: Inputs */}
          <div>
            <Field
              label="Loan Amount"
              value={loan}
              display={INR.format(loan)}
              min={100000}
              max={893000}
              step={1000}
              onChange={setLoan}
            />

            <Field
              className="mt-8"
              label="Down Payment"
              value={down}
              display={INR.format(down)}
              min={0}
              max={793000}
              step={1000}
              onChange={setDown}
            />

            <Field
              className="mt-8"
              label="Duration of Loan"
              value={months}
              display={`${months} Months`}
              min={12}
              max={84}
              step={1}
              onChange={setMonths}
            />

            <button
              className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#24318F] px-5 py-4 font-semibold text-white shadow-sm hover:opacity-95 active:scale-[0.99]"
              onClick={() => alert(`Applied for ${INR.format(loan)} over ${months} months`)}
            >
              <span className="inline-grid place-items-center rounded-full bg-white/15 w-6 h-6">
                ₹
              </span>
              APPLY LOAN AMOUNT
            </button>

            <div className="mt-8 space-y-3 rounded-lg bg-[#F7F8FC] p-4 text-slate-600 text-sm leading-relaxed">
              <p>Processing fee and other loan charges are not included.</p>
              <p>
                Disclaimer: Applicable rate of interest can vary subject to credit profile. Loan
                approval is at the sole discretion of the finance partner.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Slider styling */}
      <style jsx global>{`
        input[type='range'] {
          -webkit-appearance: none;
          appearance: none;
          width: 100%;
          height: 4px;
          border-radius: 9999px;
          background: #e6e9f2;
          outline: none;
        }
        input[type='range']::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 18px;
          height: 18px;
          border-radius: 9999px;
          background: white;
          border: 4px solid #2a3a92;
          box-shadow: 0 1px 2px rgba(0,0,0,0.08);
          cursor: pointer;
          margin-top: -7px;
        }
        input[type='range']::-moz-range-thumb {
          width: 18px;
          height: 18px;
          border-radius: 9999px;
          background: white;
          border: 4px solid #2a3a92;
          box-shadow: 0 1px 2px rgba(0,0,0,0.08);
          cursor: pointer;
        }
        input[type='range']::-webkit-slider-runnable-track {
          height: 4px;
          border-radius: 9999px;
          background: linear-gradient(90deg, #2a3a92 var(--v, 50%), #e6e9f2 0);
        }
      `}</style>
    </div>
  );
}

function Field({ label, value, display, min, max, step, onChange, className }) {
  return (
    <div className={className}>
      <div className="flex items-center justify-between">
        <div className="text-slate-600 font-semibold">{label}</div>
        <div className="text-[#24318F] font-bold">{display}</div>
      </div>
      <div className="mt-3">
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(e) => {
            const v = Number(e.target.value);
            onChange(v);
            const percent = ((v - min) / (max - min)) * 100;
            e.target.style.setProperty("--v", `${percent}%`);
          }}
          style={{
            "--v": `${((value - min) / (max - min)) * 100}%`,
          }}
        />
        <div className="mt-2 flex items-center justify-between text-xs text-slate-500">
          <span>{label === "Duration of Loan" ? "12 Months" : INR.format(min)}</span>
          <span>{label === "Duration of Loan" ? "84 Months" : INR.format(max)}</span>
        </div>
      </div>
    </div>
  );
}
