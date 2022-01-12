'use strict'

const nav = document.querySelector('.primary-navigation')
const navToggle = document.querySelector('.mobile-nav-toggle')

navToggle.addEventListener('click', () => {
  const visibility = nav.getAttribute('data-visible')

  if (visibility === 'false') {
    nav.setAttribute('data-visible', true)
    navToggle.setAttribute('aria-expanded', true)
  } else {
    nav.setAttribute('data-visible', false)
    navToggle.setAttribute('aria-expanded', false)
  }
})

/* Tab navigation */

const tabList = document.querySelector('.tab-nav')
const tabs = tabList.querySelectorAll('button')
const main = document.querySelector('#main')

tabs.forEach((tab) => {
  tab.addEventListener('click', changeTabPanel)
})

function changeTabPanel(e) {
  const targetTab = e.target
  const targetPanel = targetTab.getAttribute('aria-controls')
  const targetImage = targetTab.getAttribute('data-image')

  // remove aria-selected from tab
  targetTab.parentNode
    .querySelector('[aria-selected="true"]')
    .setAttribute('aria-selected', false)
  // add aria-selected to tab
  targetTab.setAttribute('aria-selected', true)
  // set every tab & tabInfo & picture hidden and
  // show the clicked tab & tabInfo & picture

  hideContent(main, '.show-article')
  showContent(main, [`#${targetPanel}`])
  hideContent(main, '.article-image')
  showContent(main, [`#${targetImage}`])
}

function hideContent(parent, content) {
  parent
    .querySelectorAll(content)
    .forEach((item) => item.classList.add('hidden'))
}

function showContent(parent, content) {
  parent.querySelector(content).classList.remove('hidden')
}
