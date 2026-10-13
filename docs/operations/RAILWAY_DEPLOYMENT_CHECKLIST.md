# OmniRoute deployment verification

This fork is not currently connected as the Railway service source. Railway runs a pinned upstream Docker image. Changes in this repository do **not** automatically deploy to the existing Railway service.

## Safe verification (no credentials required)

- Confirm Railway deployment is SUCCESS and the service has one healthy replica.
- Confirm the Railway-managed domain points to port 20128.
- Check /api/health/ping responds HTTP 200.
- Check memory and persistent volume usage.
- Review deployment logs for provider credential counts and startup errors; never print secrets.
- Confirm the deployed app version against the fork's package.json before considering updates.

## Provider onboarding (requires legitimate provider credentials)

1. Connect eligible Gemini Flash, Groq, or OpenRouter free-model accounts through OmniRoute's authenticated provider UI.
2. Verify the active model, quota, privacy policy, and provider terms.
3. Test each provider independently with a minimal request.
4. Only after successful tests, use model=auto to test fallback among eligible providers.
5. Preserve API-key requirement and excludeTosAvoid; never enable anonymous fallback just to obtain a response.

## Cost and safety

- Railway hosting may incur charges after its trial; free AI provider quotas do not imply free hosting.
- Do not enable paid inference, add a payment method, or upgrade Railway without explicit authorization.
- Keep credentials in provider settings or secret stores, not in GitHub commits or chat messages.
