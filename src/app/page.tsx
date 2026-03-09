"use client"

import { useState } from "react"
import Image from "next/image"
import { Copy, Check, Github, ExternalLink, Terminal, Brain, Zap, MessageCircle, Clock, Puzzle } from "lucide-react"

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false)
  const copy = () => {
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }
  return (
    <button className="copy-pill" onClick={copy} title="Copy to clipboard">
      <span style={{ color: "#aaa" }}>$</span>
      <span style={{ color: "#e8e8e0" }}>{text}</span>
      <span style={{ marginLeft: 8, color: copied ? "#4ade80" : "#555" }}>
        {copied ? <Check size={14} /> : <Copy size={14} />}
      </span>
    </button>
  )
}

const FEATURES = [
  {
    icon: "🧠",
    title: "Persistent Memory",
    desc: "OpenKrab remembers everything you tell it — across sessions, across days. It builds a mental model of you that deepens over time.",
  },
  {
    icon: "💓",
    title: "Heartbeat Proactivity",
    desc: "Doesn't just wait to be asked. OpenKrab checks in, handles background tasks, monitors inboxes, and reaches out when something matters.",
  },
  {
    icon: "🧩",
    title: "Extensible Skills",
    desc: "Drop a SKILL.md into the skills folder and OpenKrab learns a new capability immediately. Community-built. Open source. Yours to modify.",
  },
  {
    icon: "💬",
    title: "Any Chat App",
    desc: "Live in WhatsApp, Telegram, Discord, Signal, iMessage — wherever you already are. No new app to install.",
  },
  {
    icon: "🖥️",
    title: "Runs on Your Windows PC",
    desc: "OpenKrab lives on your Windows x64 machine. Your data never leaves your box. No cloud dependency, no subscription lock-in.",
  },
  {
    icon: "🤖",
    title: "Sub-Agent Orchestration",
    desc: "Spawn Claude Code, Codex, or Cursor sessions from your phone. Monitor them. Steer them. All through chat.",
  },
]

const CHAT_DEMO = [
  { from: "user", text: "Check my inbox and flag anything urgent." },
  { from: "agent", text: "On it. Found 3 unread — one from your accountant (deadline tomorrow), one Stripe payout confirmation, one newsletter. Flagging the accountant email. Want me to draft a reply?" },
  { from: "user", text: "Yeah, draft something. Also remind me 30 min before my 3pm meeting." },
  { from: "agent", text: "Draft sent to drafts folder. Reminder set for 2:30 PM. Anything else before I go dark?" },
]

export default function Home() {
  return (
    <div style={{ minHeight: "100vh" }}>

      {/* ── NAV ─────────────────────────────────────────────────────────── */}
      <nav>
        <div style={{ maxWidth: 1120, margin: "0 auto", padding: "0 24px", height: 60, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <Image src="/logo.png" alt="OpenKrab" width={32} height={32} style={{ borderRadius: 6 }} />
            <span style={{ fontWeight: 700, fontSize: 17, letterSpacing: "-0.02em" }}>
              Open<span className="red">Crab</span>
            </span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <a href="https://github.com/OpenKrab" target="_blank" rel="noopener noreferrer" className="btn-ghost" style={{ padding: "8px 16px", fontSize: 13 }}>
              <Github size={15} /> GitHub
            </a>
            <a href="#install" className="btn-primary" style={{ padding: "8px 18px", fontSize: 13 }}>
              Get Started
            </a>
          </div>
        </div>
      </nav>

      {/* ── HERO ────────────────────────────────────────────────────────── */}
      <section style={{ maxWidth: 1120, margin: "0 auto", padding: "100px 24px 80px" }}>
        <div style={{ textAlign: "center", marginBottom: 60 }}>
          <div className="badge" style={{ background: "#1a1a1a", border: "1px solid #2a2a2a", color: "#aaa", marginBottom: 24 }}>
            <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#4ade80", display: "inline-block" }} />
            Open Source · Windows x64 · Your Machine
          </div>

          <h1 style={{ fontSize: "clamp(40px, 6vw, 72px)", fontWeight: 800, lineHeight: 1.08, letterSpacing: "-0.035em", margin: "0 auto 24px", maxWidth: 800 }}>
            The AI that actually{" "}
            <span className="red-under red" style={{ position: "relative" }}>
              does things.
            </span>
          </h1>

          <p style={{ fontSize: "clamp(16px, 2vw, 20px)", color: "#888", maxWidth: 580, margin: "0 auto 40px", lineHeight: 1.6 }}>
            Clears your inbox, sends emails, manages your calendar, runs terminal commands.
            All from WhatsApp, Telegram, or any chat app you already use.
            Runs entirely on your Windows PC — you own everything.
          </p>

          <div style={{ display: "flex", justifyContent: "center", gap: 12, flexWrap: "wrap" }}>
            <a href="#install" className="btn-primary">
              Install OpenKrab
            </a>
            <a href="https://github.com/OpenKrab" target="_blank" rel="noopener noreferrer" className="btn-ghost">
              <Github size={16} /> View on GitHub
            </a>
          </div>
        </div>

        {/* terminal hero */}
        <div className="terminal" style={{ maxWidth: 700, margin: "0 auto", boxShadow: "0 0 80px rgba(232,55,42,0.08)" }}>
          <div className="terminal-bar">
            <div className="terminal-dot" style={{ background: "#ff5f57" }} />
            <div className="terminal-dot" style={{ background: "#febc2e" }} />
            <div className="terminal-dot" style={{ background: "#28c840" }} />
            <span style={{ marginLeft: 8, fontSize: 12, color: "#555" }}>Windows PowerShell</span>
          </div>
          <div className="terminal-body">
            <div><span style={{ color: "#555" }}>PS C:\Users\You&gt;</span> <span className="cmd-ps">npm</span> <span className="cmd-str">install</span> <span className="cmd-kw">-g OpenKrab</span></div>
            <div style={{ color: "#6a9955", marginTop: 4 }}>
              added 312 packages in 8s
            </div>
            <div style={{ marginTop: 8 }}><span style={{ color: "#555" }}>PS C:\Users\You&gt;</span> <span className="cmd-ps">OpenKrab</span> <span className="cmd-str">start</span></div>
            <div style={{ color: "#888", marginTop: 4 }}>
              🦀  OpenKrab v1.0.0 starting...
            </div>
            <div style={{ color: "#6a9955" }}>
              ✓  Gateway listening on :3000
            </div>
            <div style={{ color: "#6a9955" }}>
              ✓  Telegram connected
            </div>
            <div style={{ color: "#6a9955" }}>
              ✓  WhatsApp connected
            </div>
            <div style={{ color: "#888", marginTop: 4 }}>
              <span style={{ color: "#e8e8e0" }}>Crab</span> is ready. Say hello from your phone.
            </div>
            <div style={{ marginTop: 8 }}><span style={{ color: "#555" }}>PS C:\Users\You&gt;</span> <span className="cursor" /></div>
          </div>
        </div>
      </section>

      <hr className="divider" />

      {/* ── CHAT DEMO ───────────────────────────────────────────────────── */}
      <section style={{ maxWidth: 1120, margin: "0 auto", padding: "80px 24px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "center" }}>
          <div>
            <p className="red" style={{ fontSize: 13, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 16 }}>
              How it works
            </p>
            <h2 style={{ fontSize: "clamp(28px,4vw,44px)", fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1.1, marginBottom: 20 }}>
              A smart agent with eyes and hands on your Windows PC.
            </h2>
            <p style={{ color: "#888", fontSize: 16, lineHeight: 1.7, marginBottom: 24 }}>
              You message OpenKrab like a coworker. It can do anything a person could do sitting at your Windows machine —
              run CMD or PowerShell commands, manage files, browse the web, send emails, check your calendar, talk to APIs.
            </p>
            <p style={{ color: "#888", fontSize: 16, lineHeight: 1.7 }}>
              OpenKrab lives on <strong style={{ color: "#e8e8e0" }}>your machine</strong>. No cloud. No SaaS fees. No data leaving your box. 
              Your context, your skills, your rules.
            </p>
          </div>

          {/* phone chat mockup */}
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div style={{
              width: 300,
              background: "#0e0e0e",
              borderRadius: 24,
              border: "1px solid #222",
              overflow: "hidden",
              boxShadow: "0 20px 60px rgba(0,0,0,0.5)",
            }}>
              {/* phone status bar */}
              <div style={{ background: "#111", padding: "10px 16px 6px", borderBottom: "1px solid #1a1a1a", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ fontSize: 11, color: "#555" }}>9:41 AM</span>
                <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                  <Image src="/logo.png" alt="" width={16} height={16} style={{ borderRadius: 3, opacity: 0.9 }} />
                  <span style={{ fontSize: 12, fontWeight: 600, color: "#e8e8e0" }}>OpenKrab</span>
                </div>
                <span style={{ fontSize: 11, color: "#555" }}>100%</span>
              </div>
              {/* messages */}
              <div style={{ padding: 14, display: "flex", flexDirection: "column", gap: 10 }}>
                {CHAT_DEMO.map((m, i) => (
                  <div key={i} className={m.from === "user" ? "bubble-user" : "bubble-agent"}>
                    {m.text}
                  </div>
                ))}
              </div>
              {/* input bar */}
              <div style={{ padding: "10px 14px 14px", borderTop: "1px solid #1a1a1a", display: "flex", gap: 8, alignItems: "center" }}>
                <div style={{ flex: 1, background: "#1a1a1a", borderRadius: 20, padding: "8px 14px", fontSize: 13, color: "#555", border: "1px solid #252525" }}>
                  Message OpenKrab...
                </div>
                <div style={{ width: 32, height: 32, background: "var(--red)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <span style={{ color: "#fff", fontSize: 14 }}>↑</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <hr className="divider" />

      {/* ── FEATURES ────────────────────────────────────────────────────── */}
      <section style={{ maxWidth: 1120, margin: "0 auto", padding: "80px 24px" }}>
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <p className="red" style={{ fontSize: 13, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 14 }}>
            Features
          </p>
          <h2 style={{ fontSize: "clamp(28px,4vw,44px)", fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1.1 }}>
            Everything Siri was supposed to be.
            <br />
            <span style={{ color: "#555" }}>And way, way more.</span>
          </h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: 16 }}>
          {FEATURES.map(f => (
            <div key={f.title} className="card">
              <div className="feat-icon">{f.icon}</div>
              <h3 style={{ fontSize: 17, fontWeight: 700, marginBottom: 10, letterSpacing: "-0.01em" }}>{f.title}</h3>
              <p style={{ color: "#777", fontSize: 15, lineHeight: 1.65 }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <hr className="divider" />

      {/* ── WINDOWS TERMINAL DEMO ───────────────────────────────────────── */}
      <section style={{ maxWidth: 1120, margin: "0 auto", padding: "80px 24px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "center" }}>

          {/* CMD + PowerShell demo */}
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <div className="terminal">
              <div className="terminal-bar">
                <div className="terminal-dot" style={{ background: "#ff5f57" }} />
                <div className="terminal-dot" style={{ background: "#febc2e" }} />
                <div className="terminal-dot" style={{ background: "#28c840" }} />
                <span style={{ marginLeft: 8, fontSize: 12, color: "#555" }}>Command Prompt</span>
              </div>
              <div className="terminal-body" style={{ fontSize: 12 }}>
                <div><span style={{ color: "#555" }}>C:\Users\You&gt;</span> <span className="cmd-cmd">OpenKrab</span> <span className="cmd-str">skill install</span> <span className="cmd-kw">gmail</span></div>
                <div className="cmd-out">✓  Skill installed: gmail</div>
                <div className="cmd-out">✓  Scopes: read, send, labels</div>
                <div style={{ marginTop: 6 }}><span style={{ color: "#555" }}>C:\Users\You&gt;</span> <span className="cmd-cmd">OpenKrab</span> <span className="cmd-str">status</span></div>
                <div className="cmd-out">OpenKrab v1.0.0 · Windows x64</div>
                <div className="cmd-out">Skills loaded: 8 · Memory entries: 247</div>
                <div className="cmd-out">Channels: telegram, whatsapp, discord</div>
              </div>
            </div>

            <div className="terminal">
              <div className="terminal-bar">
                <div className="terminal-dot" style={{ background: "#ff5f57" }} />
                <div className="terminal-dot" style={{ background: "#febc2e" }} />
                <div className="terminal-dot" style={{ background: "#28c840" }} />
                <span style={{ marginLeft: 8, fontSize: 12, color: "#555" }}>Windows PowerShell</span>
              </div>
              <div className="terminal-body" style={{ fontSize: 12 }}>
                <div><span style={{ color: "#555" }}>PS&gt;</span> <span className="cmd-ps">OpenKrab</span> <span className="cmd-str">gateway status</span></div>
                <div className="cmd-out">● Gateway running (pid 18432)</div>
                <div className="cmd-out">  Uptime: 3d 14h 22m</div>
                <div className="cmd-out">  Sessions: 1 active</div>
                <div style={{ marginTop: 6 }}><span style={{ color: "#555" }}>PS&gt;</span> <span className="cmd-ps">OpenKrab</span> <span className="cmd-str">memory search</span> <span className="cmd-kw">"dentist"</span></div>
                <div className="cmd-out">Found 2 entries:</div>
                <div className="cmd-out">  · Dentist appt: March 14th, 2pm</div>
                <div className="cmd-out">  · Prefers Dr. Chen (downtown)</div>
              </div>
            </div>
          </div>

          <div>
            <p className="red" style={{ fontSize: 13, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 16 }}>
              Windows-Native
            </p>
            <h2 style={{ fontSize: "clamp(26px,3.5vw,40px)", fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1.15, marginBottom: 20 }}>
              CMD. PowerShell. Your machine. Full control.
            </h2>
            <p style={{ color: "#888", fontSize: 15, lineHeight: 1.7, marginBottom: 20 }}>
              OpenKrab runs natively on Windows x64. No WSL required. No Mac required. 
              Manage it with the tools you already know — <code style={{ background: "#1a1a1a", padding: "2px 6px", borderRadius: 4, color: "#9cdcfe" }}>cmd.exe</code> or <code style={{ background: "#1a1a1a", padding: "2px 6px", borderRadius: 4, color: "#5dbeff" }}>PowerShell</code>.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {[
                "Run shell commands, scripts, and automation from chat",
                "Manage files, processes, and system tasks",
                "Launch and monitor sub-agent coding sessions",
                "All data stays on your machine — zero cloud dependency",
              ].map(t => (
                <div key={t} style={{ display: "flex", alignItems: "flex-start", gap: 10, fontSize: 15, color: "#999" }}>
                  <span className="red" style={{ flexShrink: 0, marginTop: 2 }}>→</span>
                  {t}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <hr className="divider" />

      {/* ── INSTALL ─────────────────────────────────────────────────────── */}
      <section id="install" style={{ maxWidth: 760, margin: "0 auto", padding: "80px 24px", textAlign: "center" }}>
        <p className="red" style={{ fontSize: 13, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 16 }}>
          Get Started
        </p>
        <h2 style={{ fontSize: "clamp(28px,4vw,48px)", fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1.1, marginBottom: 16 }}>
          Up and running in{" "}
          <span className="red">5 minutes.</span>
        </h2>
        <p style={{ color: "#888", fontSize: 16, marginBottom: 48, lineHeight: 1.6 }}>
          Requires Node.js 18+ on Windows x64. That&apos;s it.
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: 16, alignItems: "center" }}>
          {[
            { step: "1", label: "Install OpenKrab globally", cmd: "npm install -g OpenKrab" },
            { step: "2", label: "Run setup wizard",          cmd: "OpenKrab setup" },
            { step: "3", label: "Start the gateway",         cmd: "OpenKrab start" },
          ].map(s => (
            <div key={s.step} style={{ width: "100%", maxWidth: 480, display: "flex", alignItems: "center", gap: 16 }}>
              <div style={{
                width: 32, height: 32, borderRadius: "50%",
                background: "#1a1a1a", border: "1px solid #2a2a2a",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 13, fontWeight: 700, color: "var(--red)", flexShrink: 0,
              }}>{s.step}</div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 12, color: "#555", marginBottom: 4 }}>{s.label}</div>
                <CopyButton text={s.cmd} />
              </div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 48 }}>
          <a href="https://github.com/OpenKrab" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ fontSize: 16, padding: "14px 32px" }}>
            <Github size={18} /> Read the Docs on GitHub
          </a>
        </div>
      </section>

      <hr className="divider" />

      {/* ── FOOTER ──────────────────────────────────────────────────────── */}
      <footer style={{ maxWidth: 1120, margin: "0 auto", padding: "40px 24px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <Image src="/logo.png" alt="OpenKrab" width={28} height={28} style={{ borderRadius: 5, opacity: 0.8 }} />
          <span style={{ fontWeight: 700, fontSize: 15, letterSpacing: "-0.01em" }}>
            Open<span className="red">Crab</span>
          </span>
        </div>
        <div style={{ display: "flex", gap: 24, fontSize: 13, color: "#555" }}>
          <a href="https://github.com/OpenKrab" target="_blank" rel="noopener noreferrer" style={{ color: "#555", textDecoration: "none" }}
            onMouseEnter={e => (e.currentTarget.style.color = "#aaa")}
            onMouseLeave={e => (e.currentTarget.style.color = "#555")}>GitHub</a>
          <a href="https://discord.gg/OpenKrab" target="_blank" rel="noopener noreferrer" style={{ color: "#555", textDecoration: "none" }}
            onMouseEnter={e => (e.currentTarget.style.color = "#aaa")}
            onMouseLeave={e => (e.currentTarget.style.color = "#555")}>Discord</a>
          <a href="https://github.com/OpenKrab/OpenKrab/issues" target="_blank" rel="noopener noreferrer" style={{ color: "#555", textDecoration: "none" }}
            onMouseEnter={e => (e.currentTarget.style.color = "#aaa")}
            onMouseLeave={e => (e.currentTarget.style.color = "#555")}>Issues</a>
        </div>
        <span style={{ fontSize: 12, color: "#333" }}>Open source. Windows x64. Your machine.</span>
      </footer>

    </div>
  )
}
