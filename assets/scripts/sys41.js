"use strict";

function $window({title: winTitle, body: winBody, icon: winIcon} = {}){
    let win = `
    <div class="window">
        <div class="title-bar">
            <div class="title-bar-text">${winTitle}</div>
            <div class="title-bar-controls">
                <button aria-label="Minimize">
                <button aria-label="Maximize">
                <button aria-label="Close">
            </div>
        </div>
        <div class="window-body">${winBody}</div>
    </div>
    `
    document.body.append(win)
}