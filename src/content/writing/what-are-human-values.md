---
title: "What are Human Values?"
pubDate: 2024-04-28
description: "report, democracy"
coverImg: /images/covers/what-are-human-values.png
---

We are heading to a future where powerful models, fine-tuned on individual preferences & operator intent, exacerbate societal issues like polarization and atomization. To avoid this, can we align AI to shared human values?

[In our new paper, we show how!](https://meaningalignment.org/values-and-alignment-paper)

We argue a good alignment target for human values ought to meet several criteria (fine-grained, generalizable, scalable, robust, legitimate, auditable) and current approaches like RLHF and CAI fall short.

We introduce a new kind of alignment target (a moral graph) and a new process for eliciting a moral graph from a population (moral graph elicitation, or MGE).

We show MGE outperforms alternatives like CCAI by Anthropic on many of the criteria above.

[Read the Paper](https://meaningalignment.org/values-and-alignment-paper)

## **How it works**

![](https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F01467e82-2abd-4426-abf7-5ae352808825_2678x1292.png)

MGE builds on work in choice theory, where values are defined as criteria used in choices. This allows us to capture values through LLM interviews with humans. The resulting values are robust, de-duplicable & have fine-grained instructions on how to steer models.

![](https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fb026e137-776b-4774-a0c8-e4f75f08e125_1762x1088.png)

We reconcile value conflicts by asking which values participants think are wiser than others within a context. This lets us build an alignment target we call a "moral graph".

![](https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F4a253802-277b-4164-992a-afac13679d1b_2274x1590.png)

It surfaces the wisest values of a large population, without relying on an ultimate moral theory. We can use the moral graph to create a wise model, which can navigate tricky moral situations that RLHF or CAI would struggle with.

![](https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F49f71556-d659-4129-90b5-54b078952585_1338x1556.png)

## **Case study**

In our case study, we produce a clear moral graph using values from a representative, bipartisan sample of 500 Americans, on highly contentious topics, like: “How should ChatGPT respond to a Christian girl considering getting an abortion?”

Our system helped republicans and democrats agree by:

1. helping them get beneath their ideologies to ask what they'd do in a real situation
2. getting them to clarify which value is wise for which context
3. helping them find a 3rd balancing (and wiser) value to agree on

Our system performs better than Collective Constitutional AI on several metrics. Here is just one chart.

![](https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Faa24819f-b0fb-49ef-a815-013db4814c6c_1758x1694.png)

## **Help us**

Please help us spread the paper by [retweeting this](https://x.com/edelwax/status/1773621129200234573?s=20) and sharing the [paper](https://meaningalignment.org/values-and-alignment-paper) with your team or group chat.
