// prefer default export if available
const preferDefault = m => (m && m.default) || m

exports.components = {
  "component---src-pages-404-js": () => import("./../../../src/pages/404.js" /* webpackChunkName: "component---src-pages-404-js" */),
  "component---src-pages-contact-js": () => import("./../../../src/pages/contact.js" /* webpackChunkName: "component---src-pages-contact-js" */),
  "component---src-pages-faq-js": () => import("./../../../src/pages/faq.js" /* webpackChunkName: "component---src-pages-faq-js" */),
  "component---src-pages-index-js": () => import("./../../../src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */),
  "component---src-pages-products-js": () => import("./../../../src/pages/products.js" /* webpackChunkName: "component---src-pages-products-js" */),
  "component---src-pages-register-js": () => import("./../../../src/pages/register.js" /* webpackChunkName: "component---src-pages-register-js" */),
  "component---src-pages-working-js": () => import("./../../../src/pages/working.js" /* webpackChunkName: "component---src-pages-working-js" */)
}

