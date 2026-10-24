#!/usr/bin/env bash
set -euo pipefail

curl -s -X POST "https://api.apify.com/v2/acts/sumitr_mardy~website-contact-finder/run-sync-get-dataset-items" \
  -H "Authorization: Bearer ${APIFY_TOKEN}" \
  -H "Content-Type: application/json" \
  -d '{
    "domains": ["stripe.com", "mud-dock.co.uk"]
  }' | jq '.[0] | {domain, status, emails: [.emails[].email], phones: [.phones[].e164]}'
