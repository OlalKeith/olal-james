---
layout: post
title: "Building a Real-Time Payment Integration System: Lessons from Production"
date: "2026-03-15 00:00:00 +0300"
categories: [til]
blog: til
tags: fastapi mpesa webhooks gcp integrations odoo xmlrpc
render_with_liquid: false
---

I recently worked on an integration connecting CleanCloud, Safaricom M-Pesa, and Odoo ERP for a laundry business in Kenya.

The biggest lesson was that the actual payment flow is usually the easy part. Most of the work goes into handling failures and keeping systems in sync when things don't go as planned.

Webhooks can fail, requests can timeout, services can restart, and external systems don't always behave the same way in testing and production. I spent a lot of time building reconciliation processes, duplicate payment protection, retry mechanisms, and audit logs to make sure transactions could be traced and recovered when needed.

Another interesting part of the project was working with Odoo's XML-RPC API. Most modern integrations use REST and JSON, so it took some time to understand Odoo's approach and map data between systems correctly.

The most useful lesson was simple: log everything from the beginning. When you're trying to track a payment across multiple systems, good logs and audit trails save a lot of time and frustration.
