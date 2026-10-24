English | [简体中文](README.zh-CN.md)

# Website Contact Finder API — for n8n, AI Agents & MCP

Find business emails, phone numbers (in E.164 format), and social media profiles across company websites in bulk. Only pay when contacts are found: dead links, blocked domains, and sites with no contact info are completely free.

[![n8n templates](https://img.shields.io/badge/n8n-4%20templates-EA4B71)](workflows/en)
[![MCP ready](https://img.shields.io/badge/MCP-ready-7C3AED)](agents/mcp)
[![OpenAPI](https://img.shields.io/badge/OpenAPI-3.0-6BA539)](openapi/openapi.yaml)
[![Pricing](https://img.shields.io/badge/pricing-pay%20per%20contact%20found-0A66C2)](https://apify.com/sumitr_mardy/website-contact-finder/pricing)
[![License](https://img.shields.io/badge/license-MIT-black)](LICENSE)

### ➜ [Try it on Apify](https://apify.com/sumitr_mardy/website-contact-finder)

```json
{
  "domain": "sevenoakssoundandvision.co.uk",
  "status": "contacts_found",
  "sub_status": "email_and_phone",
  "emails": [
    { "email": "support@ssav.com", "type": "generic", "on_site_domain": false }
  ],
  "phones": [
    { "e164": "+443330164775", "raw": "0333 016 4775", "country": "GB" }
  ],
  "socials": [
    { "network": "facebook", "url": "https://www.facebook.com/pages" },
    { "network": "instagram", "url": "https://www.instagram.com/sevenoakssoundandvision" }
  ],
  "pages_crawled": 1
}
```

---

## Why pipelines like it

1. **Pay-per-result, not pay-per-page.** Traditional scrapers bill ~3.36 pages per domain regardless of whether anything was found. You pay for 336 pages to get 72 contacts. Here you pay only for the 72 contacts found.
2. **Phone numbers included.** On a sample of 100 small-business domains, 72 published a phone number. Extracted numbers are normalized to E.164 format with country detection.
3. **Smart Crawl Budget.** Crawling terminates immediately once an email and phone number are found, minimizing latency and bandwidth.
4. **Native Verifier Handoff.** Easily chains directly into the Email Verifier Actor to drop defunct mailboxes before cold outreach.

---

## n8n Templates

Workflows in [workflows/en](workflows/en):

- **T1 Google Sheets Enrichment**: Read domains from Google Sheets, extract contacts, and write back.
- **T2 CRM Company Enrichment**: Enrich newly created HubSpot/Pipedrive companies in real time.
- **T3 Contact Finder to Verifier Chain**: Crawl contacts, verify email deliverability, and keep only mailable leads.
- **T4 AI Agent Tool**: Equip an AI Agent with a "Find Contacts" tool.

---

## Agents & MCP

- **Claude Desktop & Cursor**: MCP setup in [agents/mcp](agents/mcp).
- **Dify & Coze**: Guides in [agents/dify](agents/dify) and [agents/coze](agents/coze).
- **Schemas**: Pre-built Anthropic and OpenAI function definitions in [agents/tool-definitions](agents/tool-definitions).

---

## Pricing

Pay-per-event pricing on Apify:
- `contact_found`: $0.006 per domain with contacts (down to $0.003 on Gold tier, from $3.00 per 1,000).
- Dead, blocked, and zero-contact domains: $0.00.

Check rates on the [Pricing page](https://apify.com/sumitr_mardy/website-contact-finder/pricing).

## License

MIT © Sumitr Mardy
