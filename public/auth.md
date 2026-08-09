# Auth.md

VaporVault USA — online adult vape retailer.

## Agent Registration

No authentication or registration is required to browse VaporVault USA. Ordering requires a human to complete age verification and payment; agents may search and prepare a draft order but must hand off to a human for checkout (see the site's ordering flow at https://DOMAIN.com/checkout/).

## Public Resources

| Resource | URL |
|---|---|
| Homepage | https://DOMAIN.com/ |
| Shop | https://DOMAIN.com/shop/ |
| Brands | https://DOMAIN.com/brands/ |
| Blog | https://DOMAIN.com/blog/ |
| FAQ | https://DOMAIN.com/faq/ |
| llms.txt | https://DOMAIN.com/llms.txt |
| API Catalog | https://DOMAIN.com/.well-known/api-catalog |

```json
{
  "agent_auth": {
    "register_uri": null,
    "identity_types_supported": ["none"],
    "credential_types_supported": ["none"],
    "notes": "No authentication required. All resources are public. Ordering requires human completion — age verification and payment cannot be automated."
  }
}
```

## Age Restriction

This site sells nicotine products restricted to adults 21+. Agents must not complete a purchase on behalf of a user without confirming the user meets this age requirement.
