<h1 align="center">SVG Path Squircle Generator</h1>

A simple and lightweight tool built with **HTML**, **CSS**, and **Vanilla JavaScript** for generating SVG path code for **squircles** — shapes that sit somewhere between a square and a circle.

## 🔧 Features

- Interactive squircle generation in the browser
- Adjust the `n` value to control the roundness (or "squircleness") of the shape
- Copy-ready SVG `<path>` output
- No libraries, no frameworks – just plain web tech

## 📐 What’s a Squircle?

A **squircle** is a mathematical shape that blends the smooth curves of a circle with the straight edges of a square. By adjusting a single `n` parameter (typically in a superellipse equation), the shape smoothly morphs between a square and a circle.

## 🚀 How to Use

1. Open `index.html` in a browser.
2. Use the slider or input box to adjust the `n` value.
3. View the updated squircle and its corresponding SVG path code.
4. Copy the code and use it in your own SVGs or designs.

## 🧠 How It Works

The squircle path is generated based on a parametric equation using the `n` value:
x(t) = sign(cos(t)) _ |cos(t)|^(2/n)
y(t) = sign(sin(t)) _ |sin(t)|^(2/n)

The code maps this equation into SVG path data, scaled and centered in the viewBox.

## 📁 Project Structure

svg-path-squircle-generator/
├── index.html
├── style.css
└── script.js
