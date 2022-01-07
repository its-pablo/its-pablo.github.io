# itspablo

---

This website is licensed under the GNU general public license. Remixed projects must be shared too.  
Requests to join this project will be denied. Feel free to remix and share. Found a bug? Got feedback? Send on the feedback page. (`/bugs`) The Windows99 repository is located here - remember, this is my personal website.

---

## system41

This website is built on system41. system41 is what powers Windows99. It is made of JavaScript and CSS files.

---

## Known issues

- Textarea (and other elements with a scrollbar) will not have a `pointer` cursor. Instead, they will have the element's cursor. In the case of `textarea`, the cursor when using the scrollbar is always `text`, no matter its CSS. This is because `::-webkit-scrollbar` does not yet support the `cursor` style. Windows93 & 96 also have the same problems - _there is no workaround for this_.
