"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight, Check } from "lucide-react";

export function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">("idle");

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("failed");
      setStatus("done");
      setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  }

  if (status === "done") {
    return (
      <div className="flex flex-col items-center gap-3 rounded-2xl border border-border py-16 text-center">
        <Check className="h-8 w-8 text-accent" strokeWidth={1.5} />
        <p className="font-display text-2xl italic text-foreground">Message sent.</p>
        <p className="text-sm text-muted-foreground">I read every one of these myself — I&apos;ll get back to you.</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <label className="flex flex-col gap-2">
          <span className="text-xs uppercase tracking-wider text-muted-foreground">Name</span>
          <input
            required
            value={form.name}
            onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
            className="border-b border-border bg-transparent py-2 text-sm outline-none focus:border-foreground"
          />
        </label>
        <label className="flex flex-col gap-2">
          <span className="text-xs uppercase tracking-wider text-muted-foreground">Email</span>
          <input
            required
            type="email"
            value={form.email}
            onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
            className="border-b border-border bg-transparent py-2 text-sm outline-none focus:border-foreground"
          />
        </label>
      </div>
      <label className="flex flex-col gap-2">
        <span className="text-xs uppercase tracking-wider text-muted-foreground">Message</span>
        <textarea
          required
          rows={5}
          value={form.message}
          onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
          className="resize-none border-b border-border bg-transparent py-2 text-sm outline-none focus:border-foreground"
        />
      </label>

      <button
        type="submit"
        disabled={status === "loading"}
        className="flex w-fit items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm text-background transition-opacity hover:opacity-85 disabled:opacity-50"
      >
        {status === "loading" ? "Sending…" : "Send message"}
        <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
      </button>
      {status === "error" && (
        <p className="text-xs text-muted-foreground">Something went wrong — try again shortly.</p>
      )}
    </form>
  );
}
