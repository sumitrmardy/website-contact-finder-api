# Website Contact Finder MCP 服务配置

将 [Website Contact Finder](https://apify.com/sumitr_mardy/website-contact-finder) 接入 Claude Desktop、Cursor 及任意 MCP 客户端。

## Claude Desktop 配置

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
