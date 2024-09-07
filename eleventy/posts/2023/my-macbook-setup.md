---
layout: layouts/post.njk
tags: ['macbook', 'macos']
title: My MacBook Setup 
description: A brief breakdown of the apps and MacOS tweaks on my new MacBook after switching from years of using Windows.
previewImageName: new-macos-setup.png
date: 2023-09-25 09:00:00.00 -7
---
New mac, hu dis? 😉 ---
---

I left Microsoft and started at the new gig a little under two months ago where they handed me a MacBook to work on. Now, while I've used MacOS in the past, my 2014 MacBook Pro has been running Windows for the past eight years so I had to get my bearings and relearn a few things. Going back and forth between the OSes wasn't fun either. 

So, to me, the decision here was a no-brainer: aging desktop and laptop machines that are long overdue for a refresh, M-series chips being as good as they are, and being tired of having to maintain an at-home and on-the-go setup.. it was time to switch my personal computing life to MacOS by picking up a MacBook Pro.

This page has some of the apps I've got running and settings tweaks I've made on my machine to help make that transition a bit easier. If you have any tips or tricks of your own, or suggestions for things I should check out, then hit me up on Threads: <a href="//threads.net/@shaykalyan">@shaykalyan</a>!


## The hardware
14" MacBook Pro with the baseline M2 Pro, 32GB of RAM, and a 512GB SSD for storage. 

I also grabbed a [Caldigit TS3 Plus](https://www.caldigit.com/ts3-plus/) dock to plug in my monitors and peripherals, which makes it a super easy swap of a USB-C connection between my work machine and my personal.

## The Apps
Outside of the typical programs we'd all be installing, like your favourite web browser, these are some apps that I'm finding to be essential on MacOS.

* [Rectangle app](https://rectangleapp.com/): window snapping/tiling. A pro tip is here to set up shortcuts similar to Windows, e.g., `CTRL + ⌘ + <arrow key>` for left, right, and maximizing of windows. 
* ~~[TextPal](https://www.textpal.app/): emojis at your fingertips! This has autocomplete prompting with a shortcut of your choosing to activate, e.g., `\<start typing>`.~~ Discontinued 😞— give [Rocket](https://matthewpalmer.net/rocket/) a go instead! 
* [Shottr](https://shottr.cc/): powered-up screenshots and annotating. The built-in screen capture support is *fine*, but this lets you perform markup and other edits pretty easily, and have it all go straight to your clipboard— zero faff.
  * [CleanShot X](https://cleanshot.com/) is what I've been using and it's excellent. Requires a paid license, though! 
* [Kap](https://getkap.co/): easy video capture and processing of them out to gifs.
* [Maccy](https://maccy.app/): clipboard manager. There are quite a few options out there, but I find this to have the least intrusive UX. It also has support for pinned (permanent) items and non-text content like images. 
* [Flow](https://flowapp.info/): a simple and effective menu bar based pomodoro timer.
* [Hidden Bar](https://github.com/dwarvesf/hidden#-install): simple app to hide the overflow of icons along the menu bar. If you need more control/flexibility, there's also the paid [Bartender](https://www.macbartender.com/) app.
* [Menu Bar Spacing](https://sindresorhus.com/menu-bar-spacing): Adjust the spacing and padding of the menu bar icons to be able to see more before that pesky notch gets in the way.
* [Itsycal](https://www.mowglii.com/itsycal/): cute little monthly calender in your menu bar and shows upcoming events. I've synced my Google calendar with the built-in calender app for it to all show up effortlessly on this! 
* [Meeting Bar](https://meetingbar.app/): integrates with calendar and meeting services like Zoom to be able to see your upcoming meetings and launch right into them with one click.
* [Aerial](https://aerialscreensaver.github.io/): beautiful screensavers like what you'd get on Apple TV. Though the latest MacOS Sonoma is meant to bring some of that natively! 
* [AlDente](https://apphousekitchen.com/): a battery charge limiter app that lets you set a charge limit, e.g., 70%, after which the laptop will use the power supply. I find it especially important for my case where I'll primarily be using my laptop docked at home and want to maintain its battery capacity and health for as long as possible. MacOS does have an option to limit the charge at 80%, but it only goes into effect after it "learns" from your usage, and for some people that never ends up working! There's enough discourse online around whether apps like this one is necessary, and from what I've read, it seems to work as advertised for keeping battery cycles low and overall health high, e.g., [Reddit discussion one](https://www.reddit.com/r/macbookpro/comments/rv1fv1/aldente_what_are_your_experiences_with_it/) and [Reddit discussion two](https://www.reddit.com/r/mac/comments/14509gk/thoughts_on_aldente_pro/).


## System Settings 
Lots of out of the box defaults that don't jive with me. 

**General**

* Sharing > Make sure all sharing is disabled and update the computer name

**Appearance**

* Show scroll bars: `Always`

**Control Center**

* Battery > Show Percentage: `Enable`

**Display and Dock**

* Automatically hide and show Dock: `Enable`
* Default web browser: `<pick one>` 
* Show recent applications in dock: `Disable`

**Keyboard**

* Keyboard navigation: `Enable`
* Keyboard Shortcuts > App Shortcuts > All Applications > type in `Emoji & Symbols` in the input box and pick your shortcut, e.g., `⌘ + .` to pop up the emoji panel!
* Input Sources > Edit > Capitalize words automatically: `Disable`
* Input Sources > Edit > Add period with double-space: `Disable`
* Input Sources > Edit > Use smart quotes and dashes: `Disable`
* Input Sources > Edit > Use `"` for double quotes
* Input Sources > Edit > Use `'` for single quotes

**Trackpad**

* Point & Click > Secondary click: `Click or Tap with two fingers`
* Point & Click > Tap to click: `Enable`
* Scroll & Zoom > Smart zoom: `Disable` <sup>(removes the lag on the two finger secondary click!)</sup>
* More Gestures > App Exposé: `Swipe down with Three Fingers`
* More Gestures > Launchpad: `Disable`

## Finder Settings
Some minor tweaks here: 
* General > set home directory as default
* Tags > disable these to remove clutter

As for moving around the directories, these shortcuts are handy to know: 
* `⌘ + Shift + G`: Navigate to a path
* `⌘ + Option + C`: Copy an item's path to clipboard
* You can also hold the `Option` key while looking at the context menu ("right click") of an item in Finder to reveal alternative selections, including having the `Copy` option become `Copy <item> as Pathname`

## Miscellaneous
* Enable the app switcher on all displays instead of only showing it on the screen where the dock was last used ([source link](https://superuser.com/questions/670252/cmdtab-app-switcher-is-on-the-wrong-monitor/1625752#1625752))
  
    ```sh
    defaults write com.apple.dock appswitcher-all-displays -bool true  
    killall Dock
    ```

* Enable repeated keys on press and hold, instead of accessing symbol/accented characters ([source link](https://apple.stackexchange.com/questions/452748/on-macos-how-can-you-enable-repeated-keys-but-only-for-specific-apps/452755#452755))

    ```sh
    # global setting or a specific app, then restart the machine/app
    defaults write -g ApplePressAndHoldEnabled -bool false
    # defaults write <com.company.app> ApplePressAndHoldEnabled -bool false
    ```

## Development
There's already a lot of good info out there for developer tooling and apps, but I'll quickly jot a couple of things down here for future me.

**iTerm2**

[iTerm2](https://iterm2.com/), a terminal alternative. I set this up Quake-like with a hotkey to bring up the terminal as an overlay at the top of the screen:

* Appearance > General > Exclude from Dock and ⌘ + Tab Application Switcher: `Enable`
* Appearance > Tabs > Show tab bar even when there is only one tab: `Enable`
* Profiles > \[Your profile\] > Window > Style: `Full-width Top of Screen`
* Profiles > \[Your profile\] > Keys > Key Mappings > Presets: `Natural Text Editing`
* Keys > Hotkey > Show/hide all windows with a system-wide hotkey: `Enable`
* Keys > Hotkey > Hotkey: ``SHIFT ⌘ ` ``


**Brew**

[Brew](https://brew.sh/), a package manager for various command line software as well as graphical apps via [casks](https://formulae.brew.sh/cask/).

* `brew install git`
* `brew install --cask git-credential-manager` 
* `brew install --cask sublime-text`
* `brew install --cask visual-studio-code` 

---

I'm sure my setup with evolve over time so I'll try and keep this page updated over the next little while! 

✌🏽

> 2023/10/15: Added note on disabling _Smart zoom_  
> 2024/09/7: Added *Menu Bar Spacing*, called out *TextPal* is no more, linked to *CleanShot X* as a paid alternative