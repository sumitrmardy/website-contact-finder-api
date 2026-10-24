# MCP Configuration for Website Contact Finder

Connect [Website Contact Finder](https://apify.com/sumitr_mardy/website-contact-finder) to Claude Desktop, Cursor, and any MCP-compliant client.

## Claude Desktop

```json
{
  "mcpServers": {
    "website-contact-finder": {
      "command": "npx",
      "args": [
        "-y",
        "mcp-remote",
        "https://mcp.apify.com?tools=sumitr_mardy/website-contact-finder",
        "--header",
        "Authorization: Bearer YOUR_APIFY_TOKEN"
      ]
    }
  }
}
```
