"use client";

import { useEffect } from "react";
import posthog from "posthog-js";

let initialized = false;

/**
 * Product analytics. A no-op unless NEXT_PUBLIC_POSTHOG_KEY is set —
 * see README.md "Going live" to connect a real PostHog project.
 */
export function PostHogProvider() {
  useEffect(() => {
    const key = process.env.NEXT_PUBLIC_POSTHOG_KEY;
    if (!key || initialized) return;
    initialized = true;
    posthog.init(key, {
      api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST ?? "https://us.i.posthog.com",
      capture_pageview: true,
      capture_pageleave: true,
    });
  }, []);

  return null;
}
