---
layout: layouts/post.njk
tags: ['productivity']
title: Have a new Outlook on productivity
description: A quick post about some of the Outlook features I use to stay on top of my inbox
date: 2020-10-19 18:00:00.00 -7
---
A quick post about some of the Outlook features I use including rules, categories, and search folders to stay on top of the thousands of emails that hit my work inbox on the daily!
---

Outlook, like many of the applications in the [Office 365](https://en.wikipedia.org/wiki/Office_365) suite, is quite powerful. If I had to have a guess, I'm probably using up to 10% of its full potential in my day-to-day, but even with just that I feel I like have a pretty good handle over my inbox. I'll be touching on a few of features that I have been using while working over the past four-ish years that lets me have a sidebar that looks something like this: 

![Favorites Sidebar](../../../images/2020/email-productivity-favoritesbar.png)

## Inbox Rules 📑
The first thing that someone who joins the enterprise workforce and gets assigned an inbox is going to realize is that there are a lot of emails sent around. And I mean... **a lot**. Speaking the [Exchange](https://en.wikipedia.org/wiki/Microsoft_Exchange_Server) and identity vernacular, you'll need to act quickly to stay afloat the flood of hundreds of emails coming at you as your account gets assigned to various security groups that propagate across multiple distribution groups (DG). You may be tempted to hap-hazardly create quick rules to route incoming mail into folders, but taking a systematic and well thoughtout approach to triaging and sorting will help with ensuring that you are able to discover mail when you need to, especially the ones sent from your boss! 

Referring back to the image above, you'll see folders I've favorited with labels that are all managed through inbox rules. There are plenty of resources online for guidance around creating rules, so here I'll lay out my approach on the cascading rule evaluation that work for me. At a high level, the rules allow me to: 
* Place mail that is sent to a particular DG in their respective folder
* Place mail that is sent from a particular identity to their respective folder.
  * This scenario helps to deal with automated mail that is sent to a DG that I'm already sorting into a first-classed folder, but I need to special case them for some reason, e.g., to store away Pull Request notifications to a team DG, I configure the rule to key off the subject line when an email from Azure DevOps has one starting with "PR". 
* Place mail that have me in the _To_ or _CC_ go to the _Important_ folder
* Keep any other mail in the regular _Inbox_ folder

> Note that the above list is not in the order that they would need to be evaluated from a rule processing perspective.

This setup allows me to achieve what I call a contextualized inbox. Threads that are within the scope of a particular DG, e.g., discussion within my immediate team, all stay in the one folder, regardless of whether I'm on the To/CC lines. This does mean that I need to be more diligent around tracking threads that I need to act on, which is where Categories come into play.


## Categories 🏷️
Categories in Outlook are similar to what Labels are in Gmail-- essentially a tag that you can set on an email conversation that you can then use to visually distinguish threads, target during search, or act on items accordingly when exercising other forms of automation. I use Categories in two specific ways to boost my productivity and stay on top of my inbox.

The first use case is for long-term tracking of various threads that are relevant to my immediate areas of ownership, e.g., a project or service area I'm working on. When threads involving project X come in I can tag it with the relevant Catagory and Outlook will track it with that tag for the rest of the conversation. Not only can I see at a glance when a new thread comes in as to its context, but I can also leverage that tagging when searching for answers or insights that I know are within that scope. Folder based targeting helps, but categories can easily go across.

The other is to track threads that I need to act on. I have a couple of categories with name _Requires Response_ and _Ongoing Threads_ that, as naming suggests, indicate whether a thread is requiring a response from me or is something that I need to track and potentially follow up on. And since individual catagory entries can have keyboard shortcuts, I have them assigned to `CTRL+F2` and `CTRL+F3`, respectively so that I can quickly and efficiently triage mail. This not only ensures that I don't lose track of threads, but it removes that mental burden ([Zeiganik effect](https://en.wikipedia.org/wiki/Zeigarnik_effect)) to allow me to focus on the tasks at hand. 

## Search Folders 🔎
Having defined Categories and using them is pretty on their own, but pair them with Search folders and you have an instant lookup available to you a single click away. In my favorites bar, you'll see Search folders I've created prefixed with the magnifying glass emoji for Categories including one calleded _Requires Response_. After triaging incoming mail across the various folders that they've landed themselves in, I come to this folder to figure out what I need to act on others that I need to follow up on. While I do have a separate one for _Ongoing Threads_ I've since included both Category labels in the first search folder, so just from seeing its  


## Quick Actions ⚡
One of more simple features is the ability to create Quick Actions. If there are certain actions you perform fairly regularly as part of your inbox grooming, you can automate them to a single click of a button. For me, that includes archiving threads, moving PRs 