import os
from apify_client import ApifyClient

client = ApifyClient(os.getenv("APIFY_TOKEN"))

run_input = {
    "domains": ["stripe.com", "mud-dock.co.uk"],
}

run = client.actor("sumitr_mardy/website-contact-finder").call(run_input=run_input)
for item in client.dataset(run["defaultDatasetId"]).iterate_items():
    print(f"Domain: {item['domain']} | Status: {item['status']}")
    print(f"  Emails: {[e['email'] for e in item.get('emails', [])]}")
    print(f"  Phones: {[p.get('e164') or p.get('raw') for p in item.get('phones', [])]}")
