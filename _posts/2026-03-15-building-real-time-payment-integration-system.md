---
layout: post
title: "Building a Real-Time Payment Integration System: Lessons from Production"
date: "2026-03-15 00:00:00 +0300"
categories: [til]
blog: til
tags: fastapi mpesa webhooks gcp integrations odoo xmlrpc
render_with_liquid: false
---

I recently shipped a production integration connecting CleanCloud (POS), Safaricom M-Pesa, and Odoo ERP for a laundry business in Kenya. Real payments, real edge cases, real consequences.

The biggest mental shift was webhooks. Instead of polling for data, the payment gateway tells you when something happens. Pair that with Cloud Run's serverless model and your service only exists when it's needed. Elegant in theory, humbling in production.

What no tutorial covers: webhooks fail. Services redeploy mid-request. Callbacks time out. M-Pesa sandbox and production behave differently. I ended up spending more time on reconciliation logic, idempotency, and manual retry endpoints than on the happy path itself. That ratio (20% happy path, 80% edge case handling) is probably the most honest thing I can say about integration work.

Odoo's external API uses XML-RPC, which felt like stepping back in time when everything else in the stack was REST and JSON. Python's built-in `xmlrpc.client` handles it fine, but you have to be deliberate about how you structure calls, handle faults, and map Odoo's data model to your own. It works, it's stable, and once you stop fighting it the mental overhead drops significantly.

The other lesson: log everything from day one. When you're debugging across three APIs and two databases at 2 AM, your PostgreSQL audit trail is the only thing keeping you sane.
