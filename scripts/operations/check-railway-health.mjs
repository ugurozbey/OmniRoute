#!/usr/bin/env node
// Read-only OmniRoute public health check. No credentials and no mutations.
const base = (process.env.OMNIROUTE_BASE_URL || "https://omniroute-production-8045.up.railway.app").replace(/\/$/, "");
const timeout = Number(process.env.HEALTH_TIMEOUT_MS || 15000);
const controller = new AbortController();
const timer = setTimeout(() => controller.abort(), timeout);
try {
  const response = await fetch(base + "/api/health/ping", { signal: controller.signal, redirect: "error", headers: { "accept": "application/json" } });
  console.log(JSON.stringify({ endpoint: "/api/health/ping", httpStatus: response.status, ok: response.ok, checkedAt: new Date().toISOString() }));
  if (!response.ok) process.exitCode = 1;
} catch (error) {
  console.error(JSON.stringify({ endpoint: "/api/health/ping", ok: false, error: error?.name || "RequestError", checkedAt: new Date().toISOString() }));
  process.exitCode = 1;
} finally { clearTimeout(timer); }
