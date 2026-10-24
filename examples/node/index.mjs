import { ApifyClient } from 'apify-client';

const client = new ApifyClient({
  token: process.env.APIFY_TOKEN,
});

const input = {
  domains: ['stripe.com', 'mud-dock.co.uk'],
  maxPagesPerDomain: 5,
};

const run = await client.actor('sumitr_mardy/website-contact-finder').call(input);
const { items } = await client.dataset(run.defaultDatasetId).listItems();

for (const result of items) {
  console.log(`[${result.status}] ${result.domain}:`);
  console.log(`  Emails: ${result.emails?.map(e => e.email).join(', ') || 'none'}`);
  console.log(`  Phones: ${result.phones?.map(p => p.e164 || p.raw).join(', ') || 'none'}`);
}
