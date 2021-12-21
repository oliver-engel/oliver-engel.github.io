---
title: Data-driven design
date: 2021-11-8 12:00:00
permalink: "/words/data-driven-design"
categories:
published: true
layout: post
description: Learning how data can validate, misguide, and clarify parts of the design process.
thumb: "/assets/img/blog/datadrivendesign/hero.jpg"
hero: "/assets/img/blog/datadrivendesign/hero.jpg"
published: false
---

Over the last six months at [Samsara](https://samsara.com/), I've come to appreciate the value of data-driven design as an effective method of making decisions, telling stories, and ultimately shaping product and design decisions. I've still got plenty to learn here, but I wanted to share some tactical ways that data has influenced some of my design work.

#### Assessing magnitude

Most design projects I work on have some amount of research involved, whether it's talking to customers, pulling feedback submissions, or looking through old research documentation. It's also quite rare that I feel like I've gathered *enough* research to confidently proclaim a true accounting of people's pain points, needs, and desires. Invariably there is only time for so much research and our customer base happens to have highly diverse use cases.

Data can help here. After identifying a pain point, it can help to *assess its magnitude* to understand whether it is the isolated request of a noisy few or a general pain point worth investing design and engineering time into.

Let's say we've heard multiple times in customer calls that data in some parts of the platform feels untrustworthy, so they turn it off in settings.

Is this the rumblings of a few opinionated customers, or does it reflect broader usage trends? In our case, this feedback is tied to a specific feature: and it turns out that 80% of customers in our platform have also turned this feature off.

Well-scoped data requests like this can be a powerful storytelling tool. In this case, it's an argument to invest time researching *why* customers don't trust the feature–something not so accessible by looking at data itself.

A value like 80% gives us a quick understanding of the magnitude of the problem. What it doesn't do is give us causation, nor any direction on how to solve it.

#### Influencing strategy

to do


#### Data without context will mislead you

Data can often *feel* objective, but that's where the potential for mistake lies: data without context will mislead you.

Let's say we pulled that 80% value querying our data warehouse:
- Of all customers, how many have the feature turned off?

Is this really the right request to make? What if we then realized that 1) this feature is only rolled out to 40% of customers, and 2) the setting is opt-in?

Suddenly, the 80% doesn't feel true. So we re-write our query:
- Of customers who have this feature enabled, how many have opted in and then opted out?
