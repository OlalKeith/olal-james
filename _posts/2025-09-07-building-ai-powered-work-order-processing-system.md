---
layout: post
title: "Building an AI-Powered Work Order Processing System: Lessons from Backend to Browser Extension"
date: "2025-09-07 00:00:00 +0300"
categories: [til]
blog: til
tags: fastapi openai chrome-extension ocr background-jobs
render_with_liquid: false
---

I recently shipped a production system that extracts appointment data from unstructured documents using AI and delivers results through a Chrome extension. Real users, real edge cases.

The core parsing challenge: users upload everything from clean PDFs to phone photos of crumpled invoices. OpenAI's structured output with JSON schemas was the fix. Defining strict contracts for AI responses (explicit nullability, regex-validated dates, typed fields) eliminated an entire class of downstream integration bugs. Flexible AI output and rigid downstream systems don't mix.

Date parsing was a specific trap. I'd hardcoded "today's date" in the prompt for relative date resolution. Then timezones happened. The fix was obvious in hindsight: inject `datetime.now()` from code, not from a static prompt string.

OCR works well on clean documents and poorly on everything else. Image preprocessing helps, but the real lesson was setting accurate expectations upfront so users submit documents that are actually parseable.

For the Chrome extension backend, no cookie-based auth means JWT on every request.
