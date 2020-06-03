---
layout: layouts/post.njk
tags: ['meta']
title: Welcome to the blog
date: 2019-05-31 18:00:00.00 -7
---
The internet has made it more accessible than ever for folks to ask questions, share knowledge, and collaborate. And I've got to admit, without it, I wouldn't be where I am today doing the things I do. I figured it was due time I created a space to give back, even if it ends up with me just blabbering into the void 🤷🏼‍♂️.
---

## A bit of history
I designed and created this site about six years ago in 2014 (!), back when I was still a student and learning the ropes of software engineering. At the time, web development was really booming with some awesome tooling available built on [Node.js](https://nodejs.org/) like [NPM](https://www.npmjs.com/) and [Gulp](https://gulpjs.com/) being all hip.. and I wanted in on that. 

Instead of using a theme or a pre-built site, I stuck to a fairly simple design that primarily uses static HTML and CSS with [Bootstrap's grid system](https://getbootstrap.com/docs/4.5/layout/grid/) and [Sass](https://sass-lang.com/) for CSS preprocessing. I used Gulp as the task runner to watch files as I developed, trigger preprocessing, and compile the payload for hosting. Having a domain all ready to go, I published the site and hosted it through [GitHub pages](https://pages.github.com/).

Now it's 2020. The world of web development has become even more diverse, and honestly, a bit overwhelming with all the options we have to getting yourself hosted on the net. I didn't want to complicate things just to have a space to write up a few words every now and then. So here we are; practically the same site with a blog ~~hacked together~~ nealty integrated on the side.


## Why not just use *insert hosted blogging solution here*?

There's no doubt that I could be up and running in a couple of minutes to write on [Medium](https://medium.com/), or just spin up a new Wordpress site (that's still a thing, right?), but I wanted something that could be integrated to my existing website and where I would own all my content and its publishing. I wasn't in the market for anything fancy— just need something that can be statically generated and hosted, and plays well with the existing technology stack being used, i.e., Node.js/JavaScript. Plus, I'd say the design and styling still looks fairly modern for today, so why change that?

That's where 11ty comes in.


## 11ty

While on my search for a blogging solution I stumbled upon [staticgen.com](https://www.staticgen.com/), a website that tracks popular static site generators on GitHub and highlights the respective languages and templating technologies used. Several options lined the top of that list: [NextJS](https://nextjs.org/), [GatsbyJS](https://www.gatsbyjs.org/), and [Hugo](https://gohugo.io/), however, these relied on technologies that I was not yet familiar with like React or Go. A couple of entries down on that list is where I found [11ty](https://www.11ty.dev/) (pronounced *Eleventy*).

11ty is a static site generator built with JavaScript and supports a wide variety of templating languages including Markdown. It is able to simply generate HTML into a folder of your liking, which was just what I was looking for. Here are some of the resources I used in addition to the generator's documentation: 

* [https://github.com/11ty/eleventy-base-blog](https://github.com/11ty/eleventy-base-blog)
* [https://github.com/ianrose/deventy](https://github.com/ianrose/deventy)
* [ https://keepinguptodate.com/pages/2019/06/creating-blog-with-eleventy/](https://keepinguptodate.com/pages/2019/06/creating-blog-with-eleventy/)

After a couple of weeks of relearning *how to web*, I was able to bring life back to the site, do a bit of refactoring, and set the blog up to publish my first post! 


## This makes me a professional blogger now, right? 

Yeah, nah. 

There's still a lot to improve under-the-hood, which I'll continue to work on over the next little while. For example, I'd like to modernize the development tooling being used (I really shouldn't need a Ruby dependency in 2020 to compile my CSS) and set up a blogging workflow that automates generation and publishing of posts. I think it'd be neat to have a [GitHub Codespace](https://github.com/features/codespaces/) set up where I can spin up my repo from any device, author a new post using a hosted VSCode instance, and have a [GitHub Action](https://github.com/features/actions) take over to generate and publish on commit. 

Even once I've got that all sorted out, I'm not setting any specific expectations or post cadence for this blog. I hope to share my ideas, perspectives, and learnings as they come, when I think they can be of value to others or simply as a means to document them for future reference.

Thanks for reading. <br>✌🏼