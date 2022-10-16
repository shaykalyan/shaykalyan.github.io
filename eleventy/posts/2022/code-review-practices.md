---
layout: layouts/post.njk
tags: ['productivity', 'work']
title: My code review habits
description: Some practices I like to follow to make code reviews painless and judgement free
previewImageName: lily58-build.png
date: 2022-10-08 18:00:00.00 -7
---
Code Reviews (CR), also referred to as Pull Requests (PR), need no introduction if you're familiar with writing and collaborating on code. In this post, I don't plan to spend time on describing the benefits of this practice, but I will describe some of the habits I've picked up over my time working in environment that I feel help aid in pushing through PRs swiftly, reducing friction for reviewers, and ending up with better code at the end! 
---

## Title and description
The title and description are probably one of the most important bits of creating a PR outside of the code itself. Not only is it meant to brief the reviewers as to what the changes are that are being proposed, but also give the why and the context behind it. Having worked in a couple of large codebases now, spanning at least a couple of years in each, I've lost count the number of times I've relied on past PR descriptions to remind me of the motivation behind changes and understand the context better. For example, a colleague recently messaged me about a section of the code and questioning why the business logic does X instead of Y? A quick `git blame` lead us to find a PR from myself, where past Shay wrote exactly why it was tweaked. 

#### Title
For the title, I'd advocate to follow some of the practices Chris outlines in their post on [How to Write a Git Commit Message](https://cbea.ms/git-commit/), specifically using imperative mood: 
> If applied, this commit will ***your subject line here***

Another practice I follow, more so important in a monorepo or one with multiple projects, is to prefix the title with the services or modules being touched. This helps everyone looking at the page of reviews identify areas that they might be best to contribute to, or during reviewing of commit history to understand the scope of the changes when you're trying to narrow down what's causing the outage in service XYZ. For example, 
* `[Billing] Add refund v2 endpoint`
* `[Cart, Cart.Shared] Update refund UX and shared components`
* `[Terraform] Increase Redis shard count in WUS2`

This isn't always perfect, and if there are too many touch points to list then it's fine to simply list it as `[Many] ...`. It's so much better than just having `Fix unhandled exception bug`, which doesn't tell anyone really anything about the area of the codebase that's being changed! 

#### Description
As Chris also states to use the description to share the *why*. This is also a great spot to give as much information to your reviewers and make their job easy-- we're all looking for that green ✅, so any opportunity to reduce that friction is going to only benefit you! 

A typical template I follow looks like: 

```md
### Context
* ...
* ...

### Changes
* ...
* ...

// ... other sections like "Validation", "Todo", "Out of Scope" etc.
```

The *Context* section is where I write the purpose of the the PR. If things are being changed that reviewers potentially not be familiar with, I describe it here, and link to past PRs to provide even more insights, e.g., if the changes proposed are building on top of a previous PR or if I'm making a change that is in response to another. It sounds pretty obvious, but the more context you can give to your reviewer, the less time you'll spend going back and forth answering questions for reviewers trying to understand why the changes are being made. 

The *Changes* section is where I list the high level changes being made. If there are several touch points, I typically describe them in an order that makes sense, for example, if changes in X depends on changes in Y, I'd describe them in that order. 

I'll also add other sections depending on what's going on. For example, I'll call out a Todo section to inform the reviewer that there are other pieces that are still to be done, state what they are, and whether they are to be done before the PR completes or as follow ups. A similar *Out of Scope* section would describe changes that the reviewer might think to ask for but can be called out that it's not in scope of the deliverable or the PR. 

## Reviewing your own code
Once I've the PR created and published, the first thing I do is go through and review the code myself. Of course I've done the diff myself and reviewed it prior, but this extra pass through serves another purpose: asking specific questions to reviewers or to give even more context in the code patches itself! I often leave behind comments prefixed with `**FYI**: ...` to give more detail to clarify any potential sources of confusion, or just simply say, *hey, this massive red patch was just moved to another file*-- do my best to reduce the cognitive overhead for the reviewer 'cos I really want that green tick-- selfish.. or smart?! 🤔


## Reviewing others code

