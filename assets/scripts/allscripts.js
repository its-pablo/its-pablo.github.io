"use strict";
//THEMES

function themeChange(name) {
  let link = document.getElementById("stylelink");
  link.setAttribute("href", `/styles/themes/${name}.css`)
  localStorage.setItem("theme", name);
}

//MENUS
document.addEventListener("load", function () {
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

  window.addEventListener("load", addSidebar());
  operational = document.getElementById("system-operational");
  //Get text from URL
  fetch("//its-pablo.github.io/status.txt")
    .then(response => response.text())
    .then(response => operational.innerHTML = response)
    .catch(error => operational.innerText = "Error. Failed to fetch website status " + error)

  //start menu
  let menu98content = `
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
})

$window({
  title: "test title window",
  body: "<img> That was an image element",
  draggable: true
})