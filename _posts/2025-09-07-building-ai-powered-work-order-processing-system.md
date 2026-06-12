---
layout: post
title: "Building an AI-Powered Work Order Processing System: Lessons from Backend to Browser Extension"
date: "2025-09-07 00:00:00 +0300"
categories: [til]
blog: til
tags: fastapi openai chrome-extension ocr background-jobs
render_with_liquid: false
---

I recently built a system that extracts appointment and work order information from uploaded documents and makes the results available through a Chrome extension.

One of the biggest challenges was document quality. Users uploaded everything from clean PDFs to blurry photos taken on their phones. The AI performed well when the input was clear, but inconsistent documents quickly exposed edge cases.

To improve reliability, I used structured JSON outputs with defined schemas rather than relying on free-form AI responses. This reduced validation issues and made it much easier to integrate the extracted data with other parts of the system.

I also learned that small implementation details matter. For example, date handling became unreliable when relative dates depended on static prompt text. Moving date calculations into application code made the results much more predictable.

The overall lesson was that AI works best when it's given clear boundaries and when the surrounding system handles validation, error checking, and user expectations properly.
