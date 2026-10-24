# Status and Sub-Status Reference

Every result record from Website Contact Finder carries `status` and `sub_status`.

## Statuses

- `contacts_found`: At least one email address or telephone number was discovered.
- `no_contacts_found`: The website was successfully crawled, but no public email or phone number was found.
- `blocked`: Crawler encountered bot challenges (Cloudflare, 403, captcha) and could not read pages.
- `unreachable`: DNS lookup failed or the host connection timed out.

## Sub-statuses

- `email_and_phone`: Both email addresses and telephone numbers were discovered.
- `email_only`: Email found, no telephone number.
- `phone_only`: Telephone number found, no email.
- `none`: Clean crawl, but no contact tokens.
- `bot_challenge`: Anti-bot firewall prevented page reading.
- `dns_failed`: Domain does not resolve.

See [Website Contact Finder](https://apify.com/sumitr_mardy/website-contact-finder) on Apify.
