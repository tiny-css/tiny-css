# Tiny CSS

A simple, tiny, long-typed CSS3 framework.

It uses CSS classes to style elements similar to Bootstrap & Tailwind CSS but also uses **data-** attributes to determine the Shade of the Document. The main attraction of it, is it's **Dark-Mode** prioritized approach. **data-shade="dark"** is used to check if the Element is in dark mode or not. With the help of Javascript anyone can Easily toggle the **dark mode** of the targeted Element. But for enabling <span style="color: orangered">Dark-Mode Convertable DOM or <b style="color:cornflowerblue">DMC-DOM</b></span> feature it is important to specify it's class with `.container`. Then the JavaScript module can easily understand which is _DMC-DOM_.

Another great approach of it is that it is built on top of the modern CSS3 that means instead of using 

* Flexbox
* no-Variable base

It uses the modern & developers favorite

* CSS3 Variables
* CSS Grid
* HTML5 __"data-"__ attributes


_But all of this with all similar classnames of Bootstrap. It uses CSS3 variables for Theming the Document. It has a separated Theme.css file that is imported by all other piece of files. Developers can change the colors, dimensions, transition-duration etc._ Then they can save the file & give it a new flavor without writing all the code form scratch. Only con of this Library is that it has a poor positioning system but don't worry it's only the __start__.  I'm trying to find other developers who can help me  in this situation. I promise the positioning will be strong enough in the next major update. 


## Example:
```html

<div data-shade="light" id="semi-div" class="semi-div container-div vertical-center text-align-justify">
    <h1>Semi Div</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio qui facere eveniet, eligendi explicabo similique
      molestiae laudantium voluptate repudiandae quam velit architecto, nulla eos quae expedita totam aspernatur quia
      officia nemo fugit. Doloremque delectus eum ipsum officiis, repudiandae
      possimus?</p>
  </div>
```

Here `class="semi-div"` is a Simple div container with the width of 90% & `.container-div` is used for applying a minimal `background-color` to any div element.Attribute `data-shade="light"` is not important but for better readability you can use it but if you use javascript and set the attribute to dark it won't create a issue because it creates a new __data-shade__ attribute for that particular element `text-align-justify` & `vertical-center` are some utility classes for Justifying the text & center the corresponding element  vertically. Id is important because you have to select the element & then change the mode, right?

Look at the javascript code & you will get an idea of how to create the _dark-mode_ toggle btn. But  let's add a toggle button first

```html
<button id="toggle" class="btn" style="position: 
fixed; left: 0; top: 50%;">Dark</button>
```
Now, __Javascript__

```javascript
function $(el) {
  return document.getElementById(el);
}
let toggleBtn = $("toggle");
let semiDiv = $("semi-div");

function toggleDarkMode(e){
  if (!semiDiv.getAttribute("data-shade")){
    semiDiv.setAttribute("data-shade", "dark");
  }
  else{
    semiDiv.removeAttribute("data-shade");
  }
}

toggleBtn.addEventListener("click", toggleDarkMode)
```


Don't worry if you are terrified seeing that you have to write `setAttribute()`, `getAttribute()` & `removeAttribute()` so many times. You can use a `for` loop or a high-order array function (like `array.prototype.forEach()`) to fix this issue... Let me give an example for it  -->

```javascript
let container = document.querySelectorAll(".container");

const toggleDarkMode=(e)=>{
  container.forEach(DMC=>{
    if(!d.getAttribute("data-shade")){   /* Checking if data-shade is present or not*/
      DMC.setAttribute("data-shade", "dark")  /* applying & creating data-shade="dark" */
    }
    else if(d.getAttribute("data-shade")==="light"){ /* Checking  if it's default to "light" or not*/
      DMC.setAttribute("data-shade", "dark") /* applying data-shade="dark" */
    }
    else{
      DMC.removeAttribute("data-shade") //If neither of those returns true we Remove the attribute
    }
  })
  
}

toggleBtn.addEventListener("click", toggleDarkMode);
```



For more information stay with me & follow me on <a href="https://twitter.com/@krtirtho" target="_blank">Twitter</a> & <a href="https://facebook.com/krtirtho" target="_blank">Facebook</a>