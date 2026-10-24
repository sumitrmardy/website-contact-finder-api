[English](README.md) | 简体中文

# Website Contact Finder API — 适用于 n8n、AI Agent 与 MCP

批量从企业官网中挖掘商业邮箱、国际标准电话（E.164 格式）与社交媒体主页。按有效结果付费：死链接、防爬拦截或未公开联系方式的网站完全免费。

[![n8n 模板](https://img.shields.io/badge/n8n-4%20templates-EA4B71)](workflows/zh-CN)
[![支持 MCP](https://img.shields.io/badge/MCP-ready-7C3AED)](agents/mcp)
[![OpenAPI](https://img.shields.io/badge/OpenAPI-3.0-6BA539)](openapi/openapi.yaml)
[![定价详情](https://img.shields.io/badge/pricing-pay%20per%20contact%20found-0A66C2)](https://apify.com/sumitr_mardy/website-contact-finder/pricing)
[![开源协议](https://img.shields.io/badge/license-MIT-black)](LICENSE)

### ➜ [在 Apify 上体验](https://apify.com/sumitr_mardy/website-contact-finder)

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

## 核心特性

1. **按结果计费，拒绝按爬取页数付费。** 传统爬虫无论是否找到数据均按页面收费（平均每域名 3.36 页）。为了 72 个联系人你需要支付 336 次页面费用。而在本工具中，你只需为找到联系人的 72 个域名买单。
2. **电话号码深度提取。** 在我们抽样的 100 个中小企业域名中，有 72 个公开了电话号码。提取出的号码自动标准化为 E.164 国际格式并标注国家归属。
3. **智能提前终止。** 一旦同时找到邮箱与电话，爬虫立即终止该域名后续抓取，降低等待延迟并节省资源。
4. **原生无缝衔接邮箱校验。** 可直接串联 Email Verifier Actor 执行 SMTP 存活性校验，剔除死信箱后再进行邮件营销。

---

## n8n 开源模板

可在 [workflows/zh-CN](workflows/zh-CN) 导入使用：

- **T1 Google 表格联系人信息补全**: 从表格读取域名，提取联系方式并写回。
- **T2 CRM 企业资料实时补充**: 在 HubSpot/Pipedrive 创建企业时自动补充官网联系人。
- **T3 挖掘 + 存活性校验流水线**: 爬取官网邮箱后自动验证 SMTP，确保邮箱 100% 可投递。
- **T4 AI Agent 工具**: 为大模型 Agent 赋予官网联系人调研能力。

---

## Agent 与 MCP 集成

- **Claude Desktop 与 Cursor**: 配置文件位于 [agents/mcp](agents/mcp)。
- **Dify 与 Coze (扣子)**: 配置指南位于 [agents/dify](agents/dify) 与 [agents/coze](agents/coze)。
- **函数调用规范**: Anthropic 与 OpenAI 定义位于 [agents/tool-definitions](agents/tool-definitions)。

---

## 计费方式

基于 Apify Pay-Per-Event (按事件收费) 模式：
- `contact_found`: 找到联系人的域名每个 $0.006（Gold 阶梯低至 $0.003，千个起价 $3.00）。
- 无法访问、被拦截或无联系人的域名：$0.00。

在 [定价页面](https://apify.com/sumitr_mardy/website-contact-finder/pricing) 查看详情。

## 开源协议

MIT © Sumitr Mardy
