---
layout: layouts/post.njk
tags: ['productivity', 'work']
title: Review the code, not the coder
description: Some practices I like to follow to make code reviews more efficient and collaborative
previewImageName: review-the-code-preview.png
date: 2023-02-12 18:00:00.00 -7
---
Code Reviews (CRs), or Pull Requests (PRs), need no introduction if you're familiar with writing and collaborating on code. The benefits of this practice have been well articulated across various mediums, and in this post I will describe some of the habits I've picked up that help in pushing through PRs swiftly and reducing friction for both authors and reviewers.
---

## The basics: a title and description
The title and description together is the most important piece of creating a PR outside of the code itself. Not only is it meant to brief the reviewers as to what the changes are that are being proposed, but also give the *why* and the context behind it all. Having worked in a couple of large codebases now, spanning at least a couple of years in each, there have been numerous occasions where past PR descriptions have reminded me of the motivation and context behind changes. For example, a colleague recently messaged me about a section of the code and questioning why the business logic does X instead of Y? Without knowing the immediate answer, a quick `git blame` lead us to find a PR from myself, where past Shay wrote exactly why it was tweaked! 

#### Title
For the title, I'd advocate to follow some of the practices Chris outlines in their post on [How to Write a Git Commit Message](https://cbea.ms/git-commit/), specifically using the imperative mood: 
> If applied, this commit will <*your subject line here*>

Another practice I follow, more so important in a [monorepo](https://en.wikipedia.org/wiki/Monorepo) or one with multiple projects, is to prefix the title with the service(s) or module(s) being touched. This helps everyone looking at the page of open PRs identify areas that they might be best to check out if not already assigned to them, or during the review of commit history of a build when narrowing down what's causing the outage in service _XYZ_. Some examples: 
* `[Billing] Add refund v2 endpoint`
* `[Cart, Cart.Shared] Update refund UX and shared components`
* `[Terraform] Increase Redis shard count in WUS2`

This isn't always perfect, and if there are too many touch points to list then it's fine to simply list it as `[Many] ...`. But it's so much better than just having `Fix unhandled exception bug`, which may as well have been an empty message! 

#### Description
Chris also states to use the description to share the _why_. This is also a great spot to give as much information to your reviewers and make their job easy-- we're all looking for that green ✅, so any opportunity to reduce that friction is going to only benefit you!

A typical template I follow looks like: 

```md
### Context
* ...
* ...

### Changes
* ...
* ...

// ... other sections like "Validation", "Todo", "Out of Scope" etc. as needed.
```

The *Context* section is where I write the purpose of the the PR. If things are being changed that reviewers unlikely to be familiar with, I describe it here and link to past PRs to provide even more insights, e.g., if the changes proposed are building on top of or is in response to a previous change. It sounds pretty obvious, but the more context you can give to your reviewer, the less time you'll spend going back and forth answering questions for reviewers trying to understand why the changes are being made. 

The *Changes* section is where I list the high level changes being made. If there are several touch points, I typically describe them in an order that makes sense, e.g., if changes in X depends on changes in Y, I'd describe them in that order. 

I'll also add other sections as needed. For example, I'll call out a *Todo* section to inform the reviewer that there are other pieces that are still to be done, state what they are, and whether they are to be done before the PR completes or as follow ups. A similar *Out of Scope* section would describe changes that the reviewer might think to ask for but can be called out that it's not in scope of the work item or the PR and why that is. 

## Reviewing your own code
Once the PR is created and published, the first thing I do is go through it myself. This additional pass through serves a specific purpose: to ask questions to reviewers and to give even more context among the code patches themselves. I often leave behind comments prefixed with `**FYI**: ...` to give more detail to clarify any potential sources of confusion, or just simply say, *hey, this massive red patch was just moved to another file, don't worry about it*. Do your best to reduce the cognitive overhead for the reviewer because the reality is that we just want that green tick and move on -- selfish.. or smart?! 🤔

## Reviewing others' code
Being able to review a PR is as equally as important of a skill as authoring your own. As a recipient of feedback, it can be difficult to not feel as if comments are a personal attack, so *how* comments and feedback is written is crucial to having a healthy team environment and maintain the overall sense of collaboration towards better code. Another issue with leaving comments is that they are often all read as of equal importance, whereas that's rarely ever the case.

A way to tackle both of those concerns is to prefix the comments left behind so that the author of the code can understand when something is just a nit-pick and when there's a fundamental design issue or bug that needs addressing. Here's a few that I use:

* `nit: ...`: a nit-pick; the author should feel free to ignore/close the comment thread as "won't fix".
* `bug: ...`: a bug that needs addressing.
* `perf: ...`: a performance related callout.
* `design: ...`: a comment about the code design proposed or an alternative that could be used instead.
* `style: ...`: a style issue, which ideally should be all automated anyways!
* `q: ...`: a question.

Work with your team of collaborators to land on a shared understanding and usage of these prefixes, and others that may fit your processes. Note that sometimes you might even use a combo of prefixes, e.g., `q/bug: can this variable be null and cause <unexpected outcome>?`. 

---

And that's a wrap on my go-to tips for a better review experience, for both the author and reviewer!
