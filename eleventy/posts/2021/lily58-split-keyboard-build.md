---
layout: layouts/post.njk
tags: ['hardware', 'project']
title: Split ergonomic keyboard build log
description: A quick build log on building the Lily58 split ergonomic keyboard running QMK firmware
previewImageName: welcome-to-the-blog.png
date: 2021-05-10 18:00:00.00 -7
---
A build log / reference post covering my first stab at a hardware project: building a split ergonomic keyboard running QMK firmware. Afer being baited by several beautiful builds online, I had no choice but to dive into this world of mechanical keyboards with zero electronics experience under my belt. I relied on several online resources to learn about what goes into building a keyboard, the basic equipment needed, and the firmware pieces necessary for it all to work. I aggregate that information here to serve as a reference for others planning to give it a shot!
---

## But why?
Before I dig into the how, I figured I should briefly share a bit about the _why_ I went ahead and put together my own keyboard.

I've owned and used a Ducky (2012 model) mechanical keyboard with Cherry MX Brown switches for several years, but have rarely used it for prolonged typing sessions. Moving into full time work five years ago, I quickly realized the discomfort of using traditional keyboards and found the work-provided Microsoft Sculpt Ergonomic Keyboard did lots to relieve me of that.

Even after many years of use, the Scuplt keyboard still functions really well and I wouldn't say it has any faults for my day-to-day needs, but I wanted to go back to the mechanical typing experience and give other layouts a shot. There are several ready-made consumer options out there like the [ZSA Moonlander](https://www.zsa.io/moonlander/) and [Dygma Raise](https://dygma.com/) but both are relatively pricey for a keyboard, selling for over $350. I didn't want to spend *that much* money only to then find myself not being able to adjust to the keyboard.

I quickly discovered [/r/ergomechkeyboards](https://www.reddit.com/r/ErgoMechKeyboards/), saw [some](https://www.reddit.com/r/ErgoMechKeyboards/comments/itxr4j/mbk_came_in/) [beautiful](https://www.reddit.com/r/ErgoMechKeyboards/comments/n1xsvf/update_on_opensourced_lily58_pro_with_rotary/) [builds](https://www.reddit.com/r/ErgoMechKeyboards/comments/n4muq1/do_you_guys_like_this_color/), and with not a whole lot else to do during a global pandemic, the lower cost option of building a keyboard myself while meddling with some electronics was the way to go!

## My Lily58
There are lots of different keyboard PCB designs out there but I went with one called [Lily58](https://github.com/kata0510/Lily58). As the name suggests, this design has only 58 keys compared to ~88 in a regular keyboard! There are plenty of designs out there that have far fewer than 58, but for this one I still have a full number row which I read was a better way to be introduced to the layout and the need to leverage keymaps and layers. And, as I type this post out with the new keyboard, that was solid advice 😅

![The final build](../../../images/2021/lily58build_small.jpg)

## Learning about the build process
As I mentioned, this was going to be my first real foray into a hardware project, and that too making a keyboard where I need to solder! I watched several YouTube videos on soldering and some build videos, and read a handful of build logs and build guides for various builds before ordering parts. 

**Mechanical Keyboards**

📺 [The Worst Hobby on the Internet - Mechanical Keyboards (Beginners Guide)](https://www.youtube.com/watch?v=xzWm40Tq4F4) by KristoferYee. Get to know the jargon used in the community, and some hidden gotchas like how deep the mechanical keyboard rabbit hole goes!

📺 [Cherry MX Switch Comparison](https://www.youtube.com/watch?v=zlSPH3HvxhQ) by KeyMouse. Quick intro into the various switches out there and how they differ. 

**Soldering and Equipment**

📺 [Collin's Lab: Soldering](https://www.youtube.com/watch?v=QKbJxytERvg) by Adafruit Industries. Great intro into soldering in general.

📺 [Soldering Crash Course: Basic Techniques, Tips and Advice!
](https://www.youtube.com/watch?v=6rmErwU5E-k) by wermy. More soldering basics and tips!

📺 [Keyboard Soldering and Desoldering for Beginners](https://www.youtube.com/watch?v=FIHI5sxuSuw) by Blacksimon. A simple but comprehensive guide around the basic equipment and procedure to use for soldering keyboards. A couple of good tips showcased here around the temperatures to use and the technique for soldering diodes where you first place solder on one of the pads before pushing the diode into space with a bit of heat.

📝 [Recommended Soldering Tools](https://docs.keeb.io/soldering-tools) on Keeb.io. Gave me a good idea of some tools and equipment I should have handy when putting together the keyboard.

**Build Guides**

📺 [Lily58 Pro Custom Mechanical Keyboard with nice!nanos Build Stream](https://www.youtube.com/watch?v=kRrzfWv39G4) by Nicell. A full build stream that was handy to skim through to see how specific components come together when I was unsure while following the written guide.

📺 [How to Make a Corne Split Keyboard](https://www.youtube.com/watch?v=kRrzfWv39G4) by
Nate the Maker. While this is not a Lily58 build video, the steps are more or less the same and a great short video to follow to grasp the overall build procedure.

📝 [Lily58 Pro Build Guide](https://github.com/keyhive/build_guides/blob/master/docs/keyboards/lily58pro.md) by Keyhive. This was the primary guide I followed for putting together the keyboard. The only point I deviated was to first flash the controller with QMK before I got started with the build as I read that it's a good idea to make sure the controller I was shipped boots up and connects! Oh and my build doesn't have an OLED screen, so I skipped that bit. 

📝 [How do I socket a microcontroller?](https://docs.splitkb.com/hc/en-us/articles/360011263059-How-do-I-socket-a-microcontroller-) by SplitKb. 

## Sourcing the bits and pieces
Here's what I bought in order to completely put together the Lily58.

**The tools and equipment**

* [Soldering iron with basic kit](https://www.amazon.com/gp/product/B08DXZ28J7/). I opted for this over other cheaper options given the ability to control the temperature, and didn't go for anything bigger given that I didn't need something that would heat up instant or has replaceable tips available for purchase.
* [Heat resistant worksurface mat](https://www.amazon.com/gp/product/B08RXMDKWX)
* soldering gear

**The keyboard parts**

## Putting it together
###  the hardware

### the software
* installing wsl2
  * blog ref
* using toolbox
* flashing both individually first time around
* dont plug in TRRS cable while it's plugged in
* building the default km

## my keymap
link to github for the .json


### Additional Resources:

https://www.reddit.com/r/ErgoMechKeyboards/comments/f5h3d6/split_keyboard_layout_comparison_site/

Other tips:
Flash both individually for the initial firmware setup, then only need to flash the primary side

Initially, you MUST flash both sides. After that, you can just flash the master.

This is because the slave side requires the QMK Firmware code to work correctly. After that, it's just updating the layout and features.

The exception is if there is an update to the split code. These may break the communication and would require reflashing both halves.

https://www.reddit.com/r/olkb/comments/auf0lq/flashing_split_keyboards/eh82fud/