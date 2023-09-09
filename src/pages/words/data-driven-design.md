---
layout: '../../layouts/Post.astro'
title: 'Data-driven design: Using data to help inform design decisions'
blurb: 'Learning how to use data to help inform design decision-making'
date: '2022'
img: '/assets/img/words/datadrivendesign/hero.jpg'
---

#### Some thoughts on data & design

Over the last year at [Samsara](https://samsara.com/), I've come to appreciate the value of data-driven design as an effective method of making decisions, telling stories, and ultimately shaping product and design decisions. I've still got plenty to learn here, but I wanted to share some tactical ways that data has influenced some of my design work.

---



#### Assessing magnitude

Most design projects I work on have some amount of research involved, whether it's talking to customers, pulling feedback submissions, or looking through old research documentation. It's also quite rare that I feel like I've gathered *enough* research to confidently proclaim a true accounting of people's pain points, needs, and desires. There is only time for so much research and our customer base happens to have highly diverse use cases.

Data can help here. After identifying a pain point, it can help to *assess its magnitude* to understand whether it is the isolated request of a noisy few or a general pain point worth investing design and engineering time into.

Let's say we've heard multiple times in customer calls that data in some parts of the platform seems inaccurate, so they turn the relevant feature off in settings.

Is this the rumblings of a few opinionated customers, or does it reflect broader usage trends? In our case, this feedback is tied to a specific feature: and it turns out that 80% of customers in our platform have also turned this feature off.

Well-scoped data requests like this can be a powerful storytelling tool. In this case, it's an argument to invest time researching *why* customers don't trust the feature – something not so accessible by looking at data itself.

A value like 80% gives us a quick understanding of the magnitude of the problem. What it doesn't do is give us causation, nor a direction on how to solve it.

![Data visualization](/src/assets/img/words/datadrivendesign/graph.jpg)



#### Data without context will mislead you

Data can often *feel* objective, but that's where the potential for mistake lies: data without context will mislead you.

Let's say we pulled that 80% value by querying our data warehouse:
- Of all customers, how many have the feature turned off?

Is this really the right request to make? What if we then realized that 1) this feature is only rolled out to 40% of customers, and 2) the setting is opt-in?

The 80% no longer feels accurate, and is likely exaggerating the issue. So we re-write our query:
- Of customers who have historically opted in to this feature, how many then opted out?

I find that gut-checking the data before moving on usually reveals some nuance or weird messiness that helps us better shape the data query to answer whatever questions we have.


#### Influencing strategy

Establishing the magnitude of a problem is a great way to get it into the minds of leaders on the team, and therefore onto the product roadmap. Data can influence strategy by doing the hard work of making the case for a project, or even keep you from spending too much on inconsequential problems.

The earlier you pull data, the better. You can weave it into a product review, into your design prototypes, even your early sketches. It's a great tool for creating confidence in the problem you're solving and helping narrow in in the pieces of product that will actually impact the people using it. Data on magnitude can also double nicely as a success metric you're aiming for by shipping the feature or product.

---

#### It's worth it!

While it may seem technical at first, partnering with someone on data science or engineering can often simplify data pulls quite a bit. It of course doesn't hurt to become literate in how to pull data yourself, which is something I'm working on.

Hopefully I've explained a few of the reasons why setting aside time to pull and validate data is now an inseparable part of my design process.