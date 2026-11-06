const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["_astro/mermaid.core.3V5CGkEY.js","_astro/src.DaJp0K3q.js","_astro/chunk-Y2CYZVJY.DsF7k-Jl.js","_astro/preload-helper.B3nfOi5I.js","_astro/chunk-DU6HZSFF.B50t0M9P.js","_astro/chunk-75Z2AOVW.B3K7hRBA.js","_astro/dist.CwJnzJJb.js","_astro/chunk-PWAF6VOD.v4CWkpv3.js","_astro/chunk-GMAD6QVW.mjOk49UD.js","_astro/chunk-P2QGCYS3.DuV0s8JD.js","_astro/chunk-4HAMMTFA.CZUjUkD2.js","_astro/rough.esm.Dy-Kn_BL.js","_astro/chunk-GVQU2GXP.DGiyqjH8.js","_astro/chunk-OSK3NFVY.voDA0zSm.js","_astro/line.CbVG0Iv9.js","_astro/path.fybaL0A-.js","_astro/array.BifhSqXX.js","_astro/graphlib.DS17s2tU.js","_astro/chunk-L3NEJ4N5.DwO5WDf1.js"])))=>i.map(i=>d[i]);
import{t as e}from"./preload-helper.B3nfOi5I.js";var t={},n=new Set,r=new WeakSet,i=!0,a=void 0,o=!1;function s(e){o||(o=!0,i??=e?.prefetchAll??!1,a??=e?.defaultStrategy??`hover`,c(),l(),u(),f())}function c(){for(let e of[`touchstart`,`mousedown`])document.addEventListener(e,e=>{let t=e.target.closest(`a`);h(t,`tap`)&&p(t.href,{ignoreSlowConnection:!0})},{passive:!0})}function l(){let e;document.body.addEventListener(`focusin`,e=>{let n=e.target.closest(`a`);h(n,`hover`)&&t(n.href)},{passive:!0}),document.body.addEventListener(`focusout`,n,{passive:!0}),_(()=>{for(let e of document.getElementsByTagName(`a`))r.has(e)||h(e,`hover`)&&(r.add(e),e.addEventListener(`mouseenter`,e=>t(e.currentTarget.href),{passive:!0}),e.addEventListener(`mouseleave`,n,{passive:!0}))});function t(t){e&&clearTimeout(e),e=setTimeout(()=>{p(t)},80)}function n(){e&&=(clearTimeout(e),0)}}function u(){let e;_(()=>{for(let t of document.getElementsByTagName(`a`))r.has(t)||h(t,`viewport`)&&(r.add(t),e??=d(),e.observe(t))})}function d(){let e=new WeakMap;return new IntersectionObserver((t,n)=>{for(let r of t){let t=r.target,i=e.get(t);r.isIntersecting?(i&&clearTimeout(i),e.set(t,setTimeout(()=>{n.unobserve(t),e.delete(t),p(t.href)},300))):i&&(clearTimeout(i),e.delete(t))}})}function f(){_(()=>{for(let e of document.getElementsByTagName(`a`))h(e,`load`)&&p(e.href)})}function p(e,r){e=e.replace(/#.*/,``);let i=r?.ignoreSlowConnection??!1;if(m(e,i)){if(n.add(e),document.createElement(`link`).relList?.supports?.(`prefetch`)){let t=document.createElement(`link`);t.rel=`prefetch`,t.setAttribute(`href`,e),document.head.append(t)}else{let n=new Headers;for(let[e,r]of Object.entries(t))n.set(e,r);fetch(e,{priority:`low`,headers:n}).catch(()=>{})}}}function m(e,t){if(!navigator.onLine||!t&&g())return!1;try{let t=new URL(e,location.href);return location.origin===t.origin&&(location.pathname!==t.pathname||location.search!==t.search)&&!n.has(e)}catch{}return!1}function h(e,t){if(e?.tagName!==`A`)return!1;let n=e.dataset.astroPrefetch;return n===`false`?!1:t===`tap`&&(n!=null||i)&&g()?!0:n==null&&i||n===``?t===a:n===t}function g(){if(`connection`in navigator){let e=navigator.connection;return e.saveData||/2g/.test(e.effectiveType)}return!1}function _(e){e();let t=!1;document.addEventListener(`astro:page-load`,()=>{if(!t){t=!0;return}e()}),new MutationObserver(t=>{for(let n of t)for(let t of n.addedNodes)if(t instanceof Element&&(t.tagName===`A`||t.querySelector?.(`a`))){e();return}}).observe(document.body,{childList:!0,subtree:!0})}(function(){if(document.getElementById(`expressive-code-fullscreen-styles`))return;let e=document.createElement(`style`);e.id=`expressive-code-fullscreen-styles`,e.textContent=`/* Layer order */
@layer starlight, ecFullscreen;

@layer ecFullscreen {

  .cb-fullscreen__container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(76, 75, 75, 0.8);
    color: #ffffff;
    z-index: 9999;
    overflow: auto;
    padding: 1.25rem;
    box-sizing: border-box;
    visibility: hidden;
    transform: scale(0.01);
    transition: transform cubic-bezier(0.17, 0.67, 0.5, 0.71) var(--ec-fullscreen-animation-duration, 150ms);
    outline: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
  }

  .cb-fullscreen__content {
    width: 100%;
    max-width: 95%;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .cb-fullscreen__container--open {
    visibility: visible;
    transform: scale(1);
  }

  .expressive-code.cb-fullscreen__active {
    width: 100% !important;
    max-width: none !important;
    height: auto !important;
    margin: 0 !important;
    margin-bottom: 4rem !important;
    background-color: #1e1e1e;
    border-radius: 0.625rem;
    box-shadow: 0 1.25rem 3.75rem rgba(0, 0, 0, 0.5);
  }

  .expressive-code.cb-fullscreen__active pre,
  .expressive-code.cb-fullscreen__active code {
    font-size: calc(1em * var(--ec-font-scale, 1)) !important;
  }

  .expressive-code.cb-fullscreen__active .frame {
    font-size: calc(1em * var(--ec-font-scale, 1)) !important;
  }

  .cb-fullscreen__button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 1.75rem;
    height: 1.75rem;
    padding: 0.25rem;
    background: transparent;
    border: none;
    cursor: pointer;
    opacity: 0.7;
    transition:
      opacity 0.2s,
      background-color 0.2s,
      border-color 0.2s,
      transform 0.2s ease;
    border-radius: 0.25rem;
    color: inherit;
    position: relative;
  }

  .cb-fullscreen__button:hover {
    opacity: 1;
    background-color: var(--sl-color-gray-5, rgba(255, 255, 255, 0.1));
    /* border-color: var(--sl-color-gray-7, rgba(255, 255, 255, 0.5)); */
    border: 1px solid var(--sl-color-gray-7, rgba(255, 255, 255, 0.5));
    transform: scale(1.1);
  }

  .cb-fullscreen__button:focus {
    outline: 2px solid var(--sl-color-white, rgba(255, 255, 255, 0.5));
    outline-offset: 0.125rem;
  }

  .cb-fullscreen__button .fullscreen-on {
    display: inline;
  }

  .cb-fullscreen__button .fullscreen-off {
    display: none;
  }

  .expressive-code.cb-fullscreen__active .cb-fullscreen__button .fullscreen-on {
    display: none;
  }

  .expressive-code.cb-fullscreen__active .cb-fullscreen__button .fullscreen-off {
    display: inline;
  }

  /* Ensure fullscreen container has proper text color */
  .cb-fullscreen__container {
    color: var(--ec-txt-clr, var(--sl-color-white, #ffffff));
  }



  /* Custom tooltip for fullscreen button */
  .cb-fullscreen__button[data-tooltip]:hover::after {
    content: attr(data-tooltip);
    position: absolute;
    right: 100%;
    top: 50%;
    transform: translateY(-50%);
    margin-right: 0.5rem;
    background-color: var(--sl-color-gray-5, #000000);
    color: var(--sl-color-text, #ffffff);
    padding: 0.375rem 0.5rem;
    border-radius: 0.25rem;
    font-size: 1rem;
    font-family:
      -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
    white-space: nowrap;
    z-index: 1900;
    opacity: 0;
    animation: tooltipFadeIn 0.2s ease 0.5s forwards;
    pointer-events: none;
    box-shadow: 0 0.125rem 0.5rem rgba(0, 0, 0, 0.3);
    border: 1px solid var(--sl-color-gray-4, rgba(255, 255, 255, 0.1));
  }

  /* Tooltip arrow */
  .cb-fullscreen__button[data-tooltip]:hover::before {
    content: "";
    position: absolute;
    right: 100%;
    top: 50%;
    transform: translateY(-50%) translateX(1px);
    margin-right: 0.25rem;
    width: 0;
    height: 0;
    border-top: 0.25rem solid transparent;
    border-bottom: 0.25rem solid transparent;
    font-size: 1rem;
    border-left: 0.25rem solid var(--sl-color-gray-5, #000000);
    z-index: 1901;
    opacity: 0;
    animation: tooltipFadeIn 0.2s ease 0.5s forwards;
    pointer-events: none;
  }

  @keyframes tooltipFadeIn {
    to {
      opacity: 1;
    }
  }

  /* Ensure tooltip positioning works correctly for header buttons */
  .cb-fullscreen__button {
    position: relative;
  }

  /* Hint message below code block in fullscreen */
  .cb-fullscreen__hint {
    position: absolute;
    bottom: 1.25rem;
    left: 50%;
    transform: translateX(-50%);
    background-color: rgba(0, 0, 0, 0.8);
    color: #ffffff;
    padding: 0.75rem 1rem;
    border-radius: 0.5rem;
    font-size: 1rem;
    font-family:
      -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
    opacity: 0;
    animation: simpleShow 0.3s ease 1s forwards;
    pointer-events: none;
    z-index: 10110;
    backdrop-filter: blur(0.25rem);
    border: 1px solid rgba(255, 255, 255, 0.2);
    box-shadow: 0 0.25rem 0.75rem rgba(0, 0, 0, 0.3);
  }

  @keyframes simpleShow {
    to {
      opacity: 0.85;
    }
  }

  .cb-fullscreen__hint kbd {
    background-color: rgba(255, 255, 255, 0.2);
    padding: 0.125rem 0.375rem;
    border-radius: 0.25rem;
    font-size: 0.75rem;
    font-weight: bold;
    margin: 0 0.125rem;
  }


  /* Mobile-specific optimizations */
  @media (max-width: 768px) {
    .cb-fullscreen__container {
      padding: 0.75rem;
    }

    .expressive-code.cb-fullscreen__active {
      margin-bottom: 2rem !important;
      border-radius: 0.375rem;
    }

    .cb-fullscreen__button {
      width: 2rem;
      height: 2rem;
      padding: 0.375rem;
    }

    .cb-fullscreen__hint {
      bottom: 0.75rem;
      font-size: 1.125rem;
      padding: 0.5rem 1rem;
    }

    /* Disable tooltips on mobile to prevent issues with touch */
    .cb-fullscreen__button[data-tooltip]:hover::after,
    .cb-fullscreen__button[data-tooltip]:hover::before {
      display: none;
    }
  }

  /* Touch device optimizations */
  @media (hover: none) and (pointer: coarse) {
    .cb-fullscreen__button:hover {
      transform: none;
      background-color: transparent;
      border: none;
    }

    .cb-fullscreen__button[data-tooltip]:hover::after,
    .cb-fullscreen__button[data-tooltip]:hover::before {
      display: none;
    }
  }

  /* Font size controls */
  .cb-fullscreen__font-controls {
    display: flex;
    align-items: center;
    gap: 0.25rem;
    background: var(--sl-color-bg-nav , var(--sl-color-gray-6, rgba(0, 0, 0, 0.1)));
    border-radius: 8px;
    padding: 0.25rem;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
    justify-content: center;
  }

  .cb-fullscreen__font-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 3rem;
    height: 3rem;
    padding: 0.5rem;
    margin-left: 0.5rem;
    background: var(--sl-color-gray-5);
    border: none;
    border-radius: 6px;
    cursor: pointer;
    color: var(--sl-color-white, #ffffff);
    transition: all 0.2s ease;
    position: relative;
    min-width: 36px;
    min-height: 36px;
  }

  .cb-fullscreen__font-btn:hover {
    background: var(--sl-color-gray-4, rgba(255, 255, 255, 0.15));
    transform: scale(1.05);
  }


  .cb-fullscreen__font-btn:focus {
    outline: 2px solid var(--sl-color-white, rgba(255, 255, 255, 0.5));
    outline-offset: 0.125rem;
  }

  .cb-fullscreen__font-btn:active {
    transform: scale(0.95);
  }

  .cb-fullscreen__font-btn svg {
    width: 1rem;
    height: 1rem;
    stroke-width: 2.5;
  }

  /* Mobile optimizations for font controls */
  @media (max-width: 768px) {
    .cb-fullscreen__content {
      max-width: 95%;
      gap: 0.75rem;
    }

    .cb-fullscreen__font-btn {
      width: 2.5rem;
      height: 2.5rem;
      padding: 0.5rem;
    }

    .cb-fullscreen__font-btn svg {
      width: 1.25rem;
      height: 1.25rem;
    }
  }

  /* Tooltip styles for font buttons */
  .cb-fullscreen__font-btn--decrease::after {
    content: attr(title);
    position: absolute;
    right: 100%;
    top: 50%;
    transform: translateY(-50%);
    /* background-color: var(--sl-color-gray-2); */
    background-color: var(--sl-color-gray-5, #000000);
    /* color: var(--sl-text-reverse, #ffffff); */
    padding: 0.375rem 0.5rem;
    border-radius: 0.25rem;
    font-size: 0.75rem;
    white-space: nowrap;
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.2s, visibility 0.2s;
    pointer-events: none;
    z-index: 10001;
    margin-right: 0.5rem;
    border: 1px solid var(--sl-color-gray-4, rgba(255, 255, 255, 0.3));
    box-shadow: 0 0.125rem 0.5rem rgba(0, 0, 0, 0.3);
  }

  .cb-fullscreen__font-btn--decrease:hover::after {
    opacity: 1;
    visibility: visible;
  }

  .cb-fullscreen__font-btn--increase::after {
    content: attr(title);
    position: absolute;
    left: 100%;
    top: 50%;
    transform: translateY(-50%);
    background-color: var(--sl-color-gray-5, #000000);
    /* color: var(--sl-text-, #ffffff); */
    padding: 0.375rem 0.5rem;
    border-radius: 0.25rem;
    font-weight: 400;
    font-size: 0.75rem;
    white-space: nowrap;
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.2s, visibility 0.2s;
    pointer-events: none;
    z-index: 10001;
    margin-left: 0.5rem;
    border: 1px solid var(--sl-color-gray-4, rgba(255, 255, 255, 0.3));
    box-shadow: 0 0.125rem 0.5rem rgba(0, 0, 0, 0.3);
  }

  .cb-fullscreen__font-btn--increase:hover::after {
    opacity: 1;
    visibility: visible;
  }

  /* Respect user preference for reduced motion */
  @media (prefers-reduced-motion: reduce) {
    .cb-fullscreen__container {
      transition: none;
      transform: none;
    }

    .cb-fullscreen__container--open {
      transform: none;
    }

    .cb-fullscreen__font-btn {
      transition: none;
    }

    .cb-fullscreen__font-btn:hover {
      transform: none;
    }

    .cb-fullscreen__font-btn--decrease::after,
    .cb-fullscreen__font-btn--increase::after {
      transition: none;
    }
  }
}
`,document.head.appendChild(e)})();function v(e){let{fullscreenButtonTooltip:t=`Toggle fullscreen view`,enableEscapeKey:n=!0,exitOnBrowserBack:r=!0,addToUntitledBlocks:i=!1,animationDuration:a=200,svgPathFullscreenOn:o=`M16 3h6v6h-2V5h-4V3zM2 3h6v2H4v4H2V3zm18 16v-4h2v6h-6v-2h4zM4 19h4v2H2v-6h2v4z`,svgPathFullscreenOff:s=`M18 7h4v2h-6V3h2v4zM8 9H2V7h4V3h2v6zm10 8v4h-2v-6h6v2h-4zM8 15v6H6v-4H2v-2h6z`}=e,c={MIN_FONT_SIZE:60,MAX_FONT_SIZE:500,DEFAULT_FONT_SIZE:100,FONT_ADJUSTMENT:10,DOUBLE_CLICK_THRESHOLD:600,HINT_DISPLAY_TIME:4e3,FADE_TRANSITION_TIME:500,MIN_BLOCK_HEIGHT:95,MIN_ANIMATION_DURATION:150,MAX_ANIMATION_DURATION:700,DEFAULT_ANIMATION_DURATION:200};document.addEventListener(`DOMContentLoaded`,()=>{if(window.expressiveCodeFullscreenInitialized)return;window.expressiveCodeFullscreenInitialized=!0;let t={isFullscreenActive:!1,scrollPosition:0,originalCodeBlock:null,fontSize:c.DEFAULT_FONT_SIZE,focusTrapHandler:null},n={fullscreenContainer:null,get container(){return this.fullscreenContainer||=document.querySelector(`.cb-fullscreen__container`),this.fullscreenContainer},clearCache(){this.fullscreenContainer=null}};(!Number.isInteger(e.animationDuration)||e.animationDuration<c.MIN_ANIMATION_DURATION||e.animationDuration>c.MAX_ANIMATION_DURATION)&&(e.animationDuration=c.DEFAULT_ANIMATION_DURATION);let r={storageKey:`expressiveCodeFullscreenFontSize`,loadFontSize(){try{let e=localStorage.getItem(this.storageKey);if(e){let t=parseInt(e,10);if(t>=c.MIN_FONT_SIZE&&t<=c.MAX_FONT_SIZE)return t}}catch{console.warn(`Could not load font size from localStorage`)}return c.DEFAULT_FONT_SIZE},saveFontSize(e){try{localStorage.setItem(this.storageKey,e.toString())}catch{console.warn(`Could not save font size to localStorage`)}},adjustFontSize(e,n){let r=Math.max(c.MIN_FONT_SIZE,Math.min(c.MAX_FONT_SIZE,t.fontSize+e));t.fontSize=r,this.saveFontSize(r),this.applyFontSize(n)},resetFontSize(e){t.fontSize=c.DEFAULT_FONT_SIZE,this.saveFontSize(c.DEFAULT_FONT_SIZE),this.applyFontSize(e)},applyFontSize(e){if(e){let n=t.fontSize/100;e.style.setProperty(`--ec-font-scale`,n)}}};function i(){if(document.querySelector(`.cb-fullscreen__container`))return;let t=document.createElement(`div`);t.className=`cb-fullscreen__container`,t.setAttribute(`role`,`dialog`),t.setAttribute(`aria-modal`,`true`),t.setAttribute(`aria-label`,`Code block in fullscreen view`),t.setAttribute(`tabindex`,`-1`),t.style.setProperty(`--ec-fullscreen-animation-duration`,`${e.animationDuration}ms`),document.body.appendChild(t)}function a(){let e=document.createElement(`div`);return e.className=`cb-fullscreen__font-controls`,e.innerHTML=`
			<button class="cb-fullscreen__font-btn cb-fullscreen__font-btn--decrease" aria-label="Decrease font size" title="Decrease font size (Double-click to reset)">
				<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
					<path d="M5 12h14"/>
				</svg>
			</button>
			<button class="cb-fullscreen__font-btn cb-fullscreen__font-btn--increase" aria-label="Increase font size" title="Increase font size">
				<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
					<path d="M12 5v14m-7-7h14"/>
				</svg>
			</button>
		`,e}function o(){let e=document.createElement(`div`);return e.className=`cb-fullscreen__hint`,e.innerHTML=`Press <kbd>Esc</kbd> to exit full screen`,e}function s(){let e=window.getComputedStyle(document.body).backgroundColor;if(e&&e!==`rgba(0, 0, 0, 0)`&&e!==`transparent`)return e;let t=window.getComputedStyle(document.documentElement).backgroundColor;return t&&t!==`rgba(0, 0, 0, 0)`&&t!==`transparent`?t:`#ffffff`}function l(e){let t=e.match(/\d+/g);return t&&t.length>=3?(parseInt(t[0])*299+parseInt(t[1])*587+parseInt(t[2])*114)/1e3>128?`#000000`:`#ffffff`:`#000000`}function u(){let t=document.createElement(`button`);return t.className=`cb-fullscreen__button`,t.type=`button`,t.setAttribute(`aria-label`,e.fullscreenButtonTooltip),t.setAttribute(`aria-expanded`,`false`),t.setAttribute(`data-tooltip`,e.fullscreenButtonTooltip),t.innerHTML=`
      <svg class="fullscreen-on" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
        <path fill="currentColor" d="${e.svgPathFullscreenOn}" stroke="currentColor"  stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      <svg class="fullscreen-off" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
        <path fill="currentColor" d="${e.svgPathFullscreenOff}" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    `,t}function d(t){if(t.querySelector(`.cb-fullscreen__button`))return;let n=t.querySelector(`.frame`);if(!n)return;let r=n.classList.contains(`has-title`)||n.classList.contains(`is-terminal`);if(!e.addToUntitledBlocks&&!r)return;let i=t.querySelector(`figcaption.header`);if(r){if(i){let e=u();getComputedStyle(i).position===`static`&&(i.style.position=`relative`),e.style.cssText=`
        position: absolute;
        right: 0.5rem;
        top: 50%;
        transform: translateY(-50%);
        z-index: 100;
      `,i.appendChild(e)}}else{let e=t.querySelector(`.copy`);if(e){let t=document.createElement(`div`);t.style.cssText=`
			  position: absolute;
			  top: 50px;
			  right: 12px;
			  z-index: 15;
			  pointer-events: auto;
			`;let r=u();t.appendChild(r),n.offsetHeight>c.MIN_BLOCK_HEIGHT&&e.parentNode.appendChild(t)}}}function f(){document.querySelectorAll(`.expressive-code`).forEach(e=>{d(e)}),document.querySelectorAll(`.cb-fullscreen__button`).forEach(e=>{let t=e.cloneNode(!0);e.parentNode.replaceChild(t,e),t.addEventListener(`click`,p),t.addEventListener(`keydown`,function(e){(e.key===`Enter`||e.key===` `)&&(e.preventDefault(),p.call(this,e))})})}function p(e){e.preventDefault(),e.stopPropagation();let t=this.closest(`.expressive-code`);t&&m(t)}function m(e){let r=n.container;t.isFullscreenActive?g(r):h(e,r)}function h(n,i){t.originalCodeBlock=n,t.fontSize=r.loadFontSize();let u=n.querySelector(`.cb-fullscreen__button`);u&&u.setAttribute(`aria-expanded`,`true`);let d=n.cloneNode(!0);d.classList.add(`cb-fullscreen__active`);let f=d.querySelector(`.cb-fullscreen__button`);f&&(f.addEventListener(`click`,function(e){e.preventDefault(),e.stopPropagation(),m(d)}),f.addEventListener(`keydown`,function(e){(e.key===`Enter`||e.key===` `)&&(e.preventDefault(),m(d))})),_(),y(!0),e.enableEscapeKey&&x(),e.exitOnBrowserBack&&(history.pushState({fullscreenActive:!0},``,window.location.href),w());let p=s(),h=l(p);i.style.backgroundColor=p,i.style.color=h;let g=document.createElement(`div`);g.className=`cb-fullscreen__content`;let v=a();if(g.appendChild(v),g.appendChild(d),i.appendChild(g),O(v,d),r.applyFontSize(d),e.enableEscapeKey){let e=o();i.appendChild(e),setTimeout(()=>{e&&e.parentNode&&(e.style.setProperty(`transition`,`opacity 0.9s ease`,`important`),e.style.setProperty(`opacity`,`0`,`important`),setTimeout(()=>{e&&e.parentNode&&e.remove()},c.FADE_TRANSITION_TIME))},c.HINT_DISPLAY_TIME)}i.classList.add(`cb-fullscreen__container--open`),t.isFullscreenActive=!0,i.focus(),E(i)}function g(n){if(y(!1),v(),e.enableEscapeKey&&S(),e.exitOnBrowserBack&&(T(),history.state&&history.state.fullscreenActive&&history.back()),D(),n.classList.remove(`cb-fullscreen__container--open`),n.style.backgroundColor=``,n.style.color=``,n.innerHTML=``,t.isFullscreenActive=!1,t.originalCodeBlock){let e=t.originalCodeBlock.querySelector(`.cb-fullscreen__button`);e&&(e.setAttribute(`aria-expanded`,`false`),e.blur())}t.originalCodeBlock=null}function _(){t.scrollPosition=window.scrollY||document.documentElement.scrollTop}function v(){typeof t.scrollPosition==`number`&&!isNaN(t.scrollPosition)&&setTimeout(()=>{window.scrollTo({top:t.scrollPosition,behavior:`smooth`})},0)}function y(e){e?(document.body.style.overflow=`hidden`,document.documentElement.style.overflow=`hidden`):(document.body.style.overflow=``,document.documentElement.style.overflow=``)}function b(e){if(e.key===`Escape`&&t.isFullscreenActive){let e=n.container;e&&g(e)}}function x(){document.removeEventListener(`keyup`,b),document.addEventListener(`keyup`,b)}function S(){document.removeEventListener(`keyup`,b)}function C(e){if(t.isFullscreenActive&&(!e.state||!e.state.fullscreenActive)){let e=n.container;e&&(T(),g(e))}}function w(){window.removeEventListener(`popstate`,C),window.addEventListener(`popstate`,C)}function T(){window.removeEventListener(`popstate`,C)}function E(e){let n=e.querySelectorAll(`button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"]), [contenteditable="true"], summary, audio[controls], video[controls]`);if(n.length===0)return;let r=n[0],i=n[n.length-1];function a(e){e.key===`Tab`&&(e.shiftKey?document.activeElement===r&&(e.preventDefault(),i.focus()):document.activeElement===i&&(e.preventDefault(),r.focus()))}e.addEventListener(`keydown`,a),t.focusTrapHandler=a}function D(){let e=n.container;e&&t.focusTrapHandler&&(e.removeEventListener(`keydown`,t.focusTrapHandler),t.focusTrapHandler=null)}function O(e,t){let n=e.querySelector(`.cb-fullscreen__font-btn--decrease`),i=e.querySelector(`.cb-fullscreen__font-btn--increase`),a={lastClickTime:0,clickCount:0};n.addEventListener(`click`,e=>{let n=Date.now();n-a.lastClickTime<c.DOUBLE_CLICK_THRESHOLD?(a.clickCount++,a.clickCount===2&&(r.resetFontSize(t),a.clickCount=0)):(a.clickCount=1,r.adjustFontSize(-c.FONT_ADJUSTMENT,t)),a.lastClickTime=n,e.target.blur()}),i.addEventListener(`click`,e=>{r.adjustFontSize(c.FONT_ADJUSTMENT,t),e.target.blur()})}function k(){i(),f()}k()})}v({fullscreenButtonTooltip:`Toggle fullscreen view`,enableEscapeKey:!0,exitOnBrowserBack:!0,addToUntitledBlocks:!1,animationDuration:200,svgPathFullscreenOn:`M16 3h6v6h-2V5h-4V3zM2 3h6v2H4v4H2V3zm18 16v-4h2v6h-6v-2h4zM4 19h4v2H2v-6h2v4z`,svgPathFullscreenOff:`M18 7h4v2h-6V3h2v4zM8 9H2V7h4V3h2v6zm10 8v4h-2v-6h6v2h-4zM8 15v6H6v-4H2v-2h6z`});var y=(...e)=>console.log(`[astro-mermaid]`,...e),b=(...e)=>console.error(`[astro-mermaid]`,...e),x=()=>document.querySelectorAll(`pre.mermaid`).length>0,S=null;async function C(){return S||(y(`Loading mermaid.js...`),S=e(async()=>{let{default:e}=await import(`./mermaid.core.3V5CGkEY.js`);return{default:e}},__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18])).then(async({default:e})=>{let t=[];if(t&&t.length>0){y(`Registering`,t.length,`icon packs`);let n=t.map(e=>e.icons?{name:e.name,icons:e.icons}:{name:e.name,loader:()=>fetch(e.url).then(e=>e.json())});await e.registerIconPacks(n)}return e}).catch(e=>{throw b(`Failed to load mermaid:`,e),S=null,e}),S)}var w={startOnLoad:!1,theme:`default`},T={light:`default`,dark:`dark`};async function E(){y(`Initializing mermaid diagrams...`);let e=document.querySelectorAll(`pre.mermaid`);if(y(`Found`,e.length,`mermaid diagrams`),e.length===0)return;let t=await C(),n=w.theme;{let e=document.documentElement.getAttribute(`data-theme`),t=document.body.getAttribute(`data-theme`);n=T[e||t]||w.theme,y(`Using theme:`,n,`from`,e?`html`:`body`)}t.initialize({...w,theme:n,gitGraph:{mainBranchName:`main`,showCommitLabel:!0,showBranches:!0,rotateCommitLabel:!0}});for(let n of e){if(n.hasAttribute(`data-processed`))continue;n.hasAttribute(`data-diagram`)||n.setAttribute(`data-diagram`,n.textContent||``);let e=n.getAttribute(`data-diagram`)||``,r=`mermaid-`+Math.random().toString(36).slice(2,11);y(`Rendering diagram:`,r);try{let i=document.getElementById(r);i&&i.remove();let{svg:a}=await t.render(r,e);n.innerHTML=a,n.setAttribute(`data-processed`,`true`),y(`Successfully rendered diagram:`,r)}catch(e){b(`Mermaid rendering error for diagram:`,r,e);let t=document.createElement(`div`);t.style.cssText=`color: red; padding: 1rem; border: 1px solid red; border-radius: 0.5rem;`;let i=document.createElement(`strong`);i.textContent=`Error rendering diagram:`;let a=document.createElement(`span`);a.textContent=` `+(e.message||`Unknown error`),t.appendChild(i),t.appendChild(a),n.textContent=``,n.appendChild(t),n.setAttribute(`data-processed`,`true`)}}}x()?(y(`Mermaid diagrams detected on initial load`),E()):y(`No mermaid diagrams found on initial load`);{let e=new MutationObserver(e=>{for(let t of e)t.type===`attributes`&&t.attributeName===`data-theme`&&(document.querySelectorAll(`pre.mermaid[data-processed]`).forEach(e=>{e.removeAttribute(`data-processed`)}),E())});e.observe(document.documentElement,{attributes:!0,attributeFilter:[`data-theme`]}),e.observe(document.body,{attributes:!0,attributeFilter:[`data-theme`]})}document.addEventListener(`astro:after-swap`,()=>{y(`View transition detected`),x()&&E()});var D=document.createElement(`style`);D.textContent=`
            /* Prevent layout shifts by setting minimum height */
            pre.mermaid {
              display: flex;
              justify-content: center;
              align-items: center;
              margin: 2rem 0;
              padding: 1rem;
              background-color: transparent;
              border: none;
              overflow: auto;
              min-height: 200px; /* Prevent layout shift */
              position: relative;
            }
            
            /* Loading state with skeleton loader */
            pre.mermaid:not([data-processed]) {
              background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
              background-size: 200% 100%;
              animation: shimmer 1.5s infinite;
            }
            
            /* Dark mode skeleton loader */
            [data-theme="dark"] pre.mermaid:not([data-processed]) {
              background: linear-gradient(90deg, #2a2a2a 25%, #3a3a3a 50%, #2a2a2a 75%);
              background-size: 200% 100%;
            }
            
            @keyframes shimmer {
              0% {
                background-position: -200% 0;
              }
              100% {
                background-position: 200% 0;
              }
            }
            
            /* Show processed diagrams with smooth transition */
            pre.mermaid[data-processed] {
              animation: none;
              background: transparent;
              min-height: auto; /* Allow natural height after render */
            }
            
            /* Ensure responsive sizing for mermaid SVGs */
            pre.mermaid svg {
              max-width: 100%;
              height: auto;
            }
            
            /* Optional: Add subtle background for better visibility */
            @media (prefers-color-scheme: dark) {
              pre.mermaid[data-processed] {
                background-color: rgba(255, 255, 255, 0.02);
                border-radius: 0.5rem;
              }
            }
            
            @media (prefers-color-scheme: light) {
              pre.mermaid[data-processed] {
                background-color: rgba(0, 0, 0, 0.02);
                border-radius: 0.5rem;
              }
            }
            
            /* Respect user's color scheme preference */
            [data-theme="dark"] pre.mermaid[data-processed] {
              background-color: rgba(255, 255, 255, 0.02);
              border-radius: 0.5rem;
            }
            
            [data-theme="light"] pre.mermaid[data-processed] {
              background-color: rgba(0, 0, 0, 0.02);
              border-radius: 0.5rem;
            }
          `,document.head.appendChild(D),s();