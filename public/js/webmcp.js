(function () {
  if (typeof navigator === 'undefined' || !navigator.modelContext) return;
  navigator.modelContext.provideContext({
    tools: [
      {
        name: 'browse_products',
        description: 'Browse the disposable vape and pod system catalog, optionally by category',
        inputSchema: { type: 'object', properties: { category: { type: 'string', description: 'Category slug, e.g. disposable-vapes' } } },
        execute: async ({ category }) => {
          const url = category ? 'https://DOMAIN.com/shop/' + category + '/' : 'https://DOMAIN.com/shop/';
          window.location.href = url;
          return { url };
        },
      },
      {
        name: 'get_wholesale_info',
        description: 'Get wholesale pricing tiers and ordering info for licensed retailers',
        inputSchema: { type: 'object', properties: {} },
        execute: async () => { window.location.href = 'https://DOMAIN.com/wholesale/'; return { url: 'https://DOMAIN.com/wholesale/' }; },
      },
      {
        name: 'contact',
        description: 'Contact for product questions or support',
        inputSchema: { type: 'object', properties: {} },
        execute: async () => { window.location.href = 'https://DOMAIN.com/contact/'; return { url: 'https://DOMAIN.com/contact/' }; },
      },
    ],
  });
})();
