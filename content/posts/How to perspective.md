---
title: How to perspective
author_name: Yonatan Ben Knnan
urlname: how-to-perspective
date: 2020-12-16
updated: 2020-12-16
published: true
tags: ['Creative']
cover_image: ./perspective/Тетрис-Cover.png
cover_caption: Le Corbusier's Modulor in different scales over the over 
description: How to create, edit or remove shortcuts for a macOS
canonical_url: false
series: false
---
import LShape from '~/components/forPosts/LShape.vue'

<LShape/>

## Why do perspective

My big brother studied some kind of engineering thingies when he was at Secondary school, and as a kid I've used to observe while he did this isometric tricks — drawing 3d objects from plans and using simple tools like a sheet of paper, pencils and some rules. Him creating these shapes looked like magic — and me, as a good monkey, immediately started to imamate — the amazing thing was that I was able the recreate the magic — and it felt awesome!

In this tutorial we'll draw a simple shape using the laws of perspective. The **Law** in the of laws of perspective means that you'll be able to precisely reproduce the same view by using the same parameters — set your own view by demand, to accurately compose a perspective and to create plans for other to read and use. BTW, ever wondered what's the difference between *accuracy* and *precision*? Then check out [this video by Matt Anticole](https://youtu.be/hRAFPdDppzs)


![Old school drawing tools](./perspective/Screen_Shot_2020-08-03_at_7.24.57_PM.png)
*My old school drawing tools*

## Overview

You should know that these perspective can be done manually with physical tools or digitally, like I do, in this case, with *Affinity Designer*. You can also do it freehand - and though the precision levels will drop it will still be accurate.

Before we get started let's see how a finalized layout looks like, so you get a better idea of the project's scope - check it out here [^fig-layout-and-terms]. I'll also be referring to some terms we'll be working with so I've listed them and added an image to show them in context.

### **List of Terms**

#### The 2D world

- Plan view
- Elevation view
  
    - Height Helpers

- Ground plane
- Horizon plane

#### The 3D world

- Picture plane
- Station Point
- Vanishing Points
  
    - VP Helper
    - VP Crossing

- Projection Lines
  
    - PL crossing

- True Height
  
    - TH origin
### **The example**

For this example let's choose a simple shape we probably all know from the game of Tetris - which I've spent too much time playing as a kind - one of the seven tetriminos will do.

![./perspective/The_seven_tetriminos.jpg](./perspective/The_seven_tetriminos.jpg)
*The Seven Tetriminos*

# The 2D world

When modeling 3D objects like house or a chair — designers and engineers use 2d drawings for simplicity sake, to visually communicate how things function or constructed — these drawings are called a blueprints or floor plans, and they can have many views.For this article we'll use the **top** & **bottom** view *(Plans)* and the **side/rear/front** and **other side** views *(Elevations)*. 

The object I'll use will be the `L` tetrimino — In the image below we can see all of the shape's views *(blueprint)* + an isometric view to explain the views with ease.  

![The block view](./perspective/L_block_views.png)
*The L Block Tetrimino Views*

## A basic layout

Let's review a basic layout to get a perspective drawing going -  To make a perspective we'll need 2 views - a ***Plan*** and an ***Elevation***. The elevation view will help us find the true heights of an object, the plan view will help us with everything else.

Rotating the plan view will result with a rotated 3d view 😉

![The Basic layout](./perspective/Basic_layout.jpg)
*The Basic layout*

Use the views the holds most of the information in the clearer way - For the simple shape it doesn't really matter - As long as we use a ***Plan*** and an ***Elevation***

## The viewing planes - Height planes

These plans are using the elevation views

- **Ground plane** - As the name suggest, this is the ground and the base of the drawing
- **Horizon plane** - This is the viewer's eye level - In a counter intuitive kinda way, if you'de like to draw a **smaller** object then place the Horizon plane **higher** then the elevation view, and the other way around to draw a bigger object. The following fig *(Viewing planes, by object)* shows it nicely

![Viewing planes by viewer](./perspective/Viewing_planes_by_viewer.jpg)
*Viewing planes by viewer*

# The 3D world

This is where the flat views, the *plan* and the *elevation*, meet each other to create the 3d view. 

What is we'd like to draw the object large or small, see it through a wide or narrow lens This planes with 

### Picture plane

Line crossing the picture plane will be used to measure the true height

### Viewing height

Will start wh

### Station point - Distance, width and position

Is up to you where to place the Station point 

The station point is the distance of the viewer from the object. The closer the Station point to the object is the wider the image will be, and the other way around - the further away - the narrower it will turn out.

### Positioning

# Links

[3 point perspective tutorial.](http://www.automotiveillustrations.com/tutorials/drawing-3-point-perspective.html)


[^fig-layout-and-terms]: ![A basic layout for creating a perspective drawing](./perspective/The_terms.jpg) *A basic layout for creating a perspective drawing with all of the terms in use*
