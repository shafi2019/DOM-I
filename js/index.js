const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);


const navigations = document.querySelectorAll("a");
navigations [0].textContent = siteContent.nav["nav-item-1"];
navigations [1].textContent = siteContent.nav["nav-item-2"];
navigations [2].textContent = siteContent.nav["nav-item-3"];
navigations [3].textContent = siteContent.nav["nav-item-4"];
navigations [4].textContent = siteContent.nav["nav-item-5"];
navigations [5].textContent = siteContent.nav["nav-item-6"];

const h1Text = document.querySelector("h1");
h1Text.textContent = siteContent.cta["h1"];

const buttonText = document.querySelector("button");
buttonText.textContent = siteContent.cta["button"];

const CyrcleImg = document.getElementById("cta-img");
CyrcleImg.setAttribute('src', siteContent.cta["img-src"])

 headersH4 = document.querySelectorAll(".text-content h4");
headersH4[0].textContent = siteContent["main-content"]["features-h4"];
headersH4[1].textContent = siteContent["main-content"]["about-h4"];

const Paraghraphs =  document.querySelectorAll(".text-content p");
Paraghraphs[0].textContent = siteContent["main-content"]["features-content"];
Paraghraphs[1].textContent = siteContent["main-content"]["about-content"];

const imgQuery = document.getElementById("middle-img");
imgQuery.setAttribute('src', siteContent["main-content"]["middle-img-src"]);


