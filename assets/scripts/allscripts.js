"use strict";
//THEMES
var link = document.getElementById("stylelink");

var style = localStorage.getItem("style");

/*if ("style" in localStorage) {
  link.setAttribute("href", localStorage.getItem("style"));
} else {
  link.setAttribute("href", "/styles/themes/98.css");
  localStorage.setItem("style", "/styles/themes/98.css");
}*/
function changeTo7() {
  link.setAttribute("href", "/styles/themes/7.css");
  localStorage.setItem("style", "/styles/themes/7.css");
}

function changeTo98() {
  link.setAttribute("href", "/styles/themes/98.css");
  localStorage.setItem("style", "/styles/themes/98.css");
}

function changeToXp() {
  link.setAttribute("href", "/styles/themes/xp.css");
  localStorage.setItem("style", "/styles/themes/xp.css");
}

//MENUS
function addSidebar() {
  class Sidebar extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
    <aside>
      <ul class="tree-view">
        <li>
          <i><b>Table of Contents</b></i>
        </li>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/projects">Projects</a>
          <ul>
            <li>
              <a href="/projects/win93">Windows 93</a>
              <ul>
                <a href="/projects/win93/ie">ie</a>
              </ul>
            </li>
            <li><a href="/projects/website">Personal website</a></li>
            <li><a href="/projects/terminx">Terminx</a></li>
          </ul>
        </li>
        <li><a href="/about.html">About</a></li>
        <li><a href="/bugs">Feedback/bugs</a></li>
        <hr />
        <li style="cursor:auto"><a id="system-operational"><i>Loading...</i></a></li>
      </ul>
    </aside>`;
    }
  }

  customElements.define("main-sidebar", Sidebar);
}

class debug extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <p>DEBUG ONLY</p>
    <button
      style="
  margin-left: 240px;"
      class="main"
      onclick="changeTo7()"
    >
      Change Theme to WINDOWS 7
    </button>
    <button
      style="
  margin-left: 240px;"
      class="main"
      onclick="changeTo98()"
    >
      Change Theme to WINDOWS 98
    </button>
    <button
      style="
  margin-left: 240px;"
      class="main"
      onclick="changeToXp()"
    >
      Change Theme to WINDOWS XP
    </button>`;
  }
}

customElements.define("debug-menu", debug);
/*document.head.innerHTML = */`
    <meta charset="utf-8" />
    <title>itspablo</title>
    <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"/>
    <link rel="stylesheet" href="/styles/jquery/jqueryui.css"/>
    <link id="stylelink" rel="stylesheet" href="/styles/themes/98.css" />
    <link rel="stylesheet" href="/styles/menu98.css" />
    <link rel="stylesheet" href="/styles/sys41.css" />
    <link rel="stylesheet" href="/styles/somestyles.css" />
    <script src="/scripts/allscripts.js"><\/script>
    <script src="/scripts/sys41.js"><\/script>
    <script src="//cdn.jsdelivr.net/npm/sweetalert2@11"><\/script>
    <script src="/scripts/3party/jquery/jquery.js"><\/script>
    <script src="/scripts/3party/jquery/jqueryui.js"><\/script>
    <script src="/scripts/3party/darkmode.js"><\/script>
      `;
//////DARKMODE
/*function addDarkmodeWidget() {
  new Darkmode().showWidget();
}
window.addEventListener("load", addDarkmodeWidget);*/
window.addEventListener("load", addSidebar());

//Get text from URL
getText("//itspablo.glitch.me/status");

async function getText(file) {
  let x = await fetch(file);
  let operational = await x.text();
  document.getElementById("system-operational").innerHTML = operational;
}

//start menu
var menu98content = `
<div
      id="menu98"
      style="display:none"
      class="block-centered win98"
      style="width: 400px"
    >
      <div class="menu">
        <div class="menu-sidebar">
          <div class="headline"><strong>Windows</strong> 99</div>
        </div>
        <ul class="menu-content">
          <li class="item folder">
            <img
              class="icon"
              src="/icons/computer-0.png"
            />
            <em>P</em>rograms
            <ul class="menu-content">
              <li class="item">
                <img
                  class="icon"
                  src="/icons/desktop-0.png"
                  srcset="/icons/desktop-0.png"
                />
                Internet Explorer
              </li>
              <li class="item">
                <img
                  class="icon"
                  src="/icons/desktop-0.png"
                  srcset="/icons/desktop-0.png"
                />
                Microsoft Word
              </li>
              <li class="item">
                <img
                  class="icon"
                  src="/icons/desktop-0.png"
                  srcset="/icons/desktop-0.png"
                />
                Microsoft Excel
              </li>
              <li class="item">
                <img
                  class="icon"
                  src="/icons/desktop-0.png"
                  srcset="/icons/desktop-0.png"
                />
                Microsoft Powerpoint
              </li>
              <li class="item">
                <img
                  class="icon"
                  src="/icons/desktop-0.png"
                  srcset="/icons/desktop-0.png"
                />
                Microsoft Access
              </li>
            </ul>
          </li>
          <li class="item folder">
            <img
              class="icon"
              src="/icons/computer-0.png"
            />
            F<em>a</em>vorites
            <ul class="menu-content">
              <li class="item">
                <img
                  class="icon"
                  src="/icons/desktop-0.png"
                  srcset="
                    /icons/desktop-0.png  50w,
                    /icons/desktop-0.png 100w
                  "
                />
                Channels
              </li>
              <li class="item">
                <img
                  class="icon"
                  src="icons/documents.gif"
                  srcset="
                    icons/documents@2x.gif  50w,
                    icons/documents@4x.gif 100w
                  "
                />
                Links
              </li>
              <li class="item">
                <img
                  class="icon"
                  src="icons/documents.gif"
                  srcset="
                    icons/documents@2x.gif  50w,
                    icons/documents@4x.gif 100w
                  "
                />
                Software Updates
              </li>
            </ul>
          </li>
          <li class="item folder">
            <img
              class="icon"
              src="icons/documents.gif"
              srcset="icons/documents@2x.gif 50w, icons/documents@4x.gif 100w"
            />
            <em>D</em>ocuments
            <ul class="menu-content">
              <li class="item">
                <img
                  class="icon"
                  src="icons/txt.gif"
                  srcset="icons/txt@2x.gif 32w, icons/txt@4x.gif 64w"
                />
                Hot grills.txt
              </li>
              <li class="item">
                <img
                  class="icon"
                  src="icons/txt.gif"
                  srcset="icons/txt@2x.gif 32w, icons/txt@4x.gif 64w"
                />
                Passwords.txt
              </li>
            </ul>
          </li>
          <li class="item folder">
            <img
              class="icon"
              src="icons/settings.gif"
              srcset="icons/settings@2x.gif 50w, icons/settings@4x.gif 100w"
            />
            <em>S</em>ettings
          </li>
          <li class="item folder">
            <img
              class="icon"
              src="icons/find.gif"
              srcset="icons/find@2x.gif 50w, icons/find@4x.gif 100w"
            />
            <em>F</em>ind
          </li>
          <li class="item">
            <img
              class="icon"
              src="icons/help.gif"
              srcset="icons/help@2x.gif 50w, icons/help@4x.gif 100w"
            />
            <em>H</em>elp
          </li>
          <li class="item">
            <img
              class="icon"
              src="icons/run.gif"
              srcset="icons/icon@2x.gif 50w, icons/icon@4x.gif 100w"
            />
            <em>R</em>un...
          </li>
          <li class="divider"></li>
          <li class="item">
            <img
              class="icon"
              src="icons/logoff.gif"
              srcset="icons/logoff@2x.gif 50w, icons/logoff@4x.gif 100w"
            />
            <em>L</em>og Off Win98...
          </li>
          <li class="item">
            <img
              class="icon"
              src="icons/shutdown.gif"
              srcset="icons/shutdown@2x.gif 50w, icons/shutdown@4x.gif 100w"
            />
            Sh<em>u</em>t Down...
          </li>
        </ul>
      </div>
    </div>`;

class start extends HTMLElement {
  connectedCallback() {
    this.innerHTML = menu98content;
  }
}

customElements.define("start-menu", start);

/*document.querySelector('button[aria-label="close"]').onclick = function(){document.querySelector('button[aria-label="close"]').parentNode.removeChild(this)}*/