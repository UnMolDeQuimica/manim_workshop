try{(()=>{function a(e){if(!e)return;let t=e.getAttribute("tabindex")!==null,r=e.scrollWidth>e.clientWidth;r&&!t?(e.setAttribute("tabindex","0"),e.setAttribute("role","region")):!r&&t&&(e.removeAttribute("tabindex"),e.removeAttribute("role"))}var u=window.requestIdleCallback||(e=>setTimeout(e,1)),s=window.cancelIdleCallback||clearTimeout;function l(e){let t=new Set,r,n;return new ResizeObserver(c=>{c.forEach(o=>t.add(o.target)),r&&clearTimeout(r),n&&s(n),r=setTimeout(()=>{n&&s(n),n=u(()=>{t.forEach(o=>e(o)),t.clear()})},250)})}function i(e,t){e.querySelectorAll?.(".expressive-code pre > code").forEach(r=>{let n=r.parentElement;n&&t.observe(n)})}var d=l(a);i(document,d);var b=new MutationObserver(e=>e.forEach(t=>t.addedNodes.forEach(r=>{i(r,d)})));b.observe(document.body,{childList:!0,subtree:!0});document.addEventListener("astro:page-load",()=>{i(document,d)});})();}catch(e){console.error("[EC] tabindex-js-module failed:",e)}
try{(()=>{function l(o){let e=document.createElement("pre");Object.assign(e.style,{opacity:"0",pointerEvents:"none",position:"absolute",overflow:"hidden",left:"0",top:"0",width:"20px",height:"20px",webkitUserSelect:"auto",userSelect:"all"}),e.ariaHidden="true",e.textContent=o,document.body.appendChild(e);let a=document.createRange();a.selectNode(e);let n=getSelection();if(!n)return!1;n.removeAllRanges(),n.addRange(a);let r=!1;try{r=document.execCommand("copy")}finally{n.removeAllRanges(),document.body.removeChild(e)}return r}async function u(o){let e=o.currentTarget,a=e.dataset,n=!1,r=a.code.replace(/\u007f/g,`
`);try{await navigator.clipboard.writeText(r),n=!0}catch{n=l(r)}if(!n||e.parentNode?.querySelector(".feedback"))return;let c=e.parentNode?.querySelector("[aria-live]"),t=document.createElement("div");t.classList.add("feedback"),t.append(a.copied),c.append(t),t.offsetWidth,requestAnimationFrame(()=>t?.classList.add("show"));let s=()=>!t||t.classList.remove("show"),d=()=>{!t||parseFloat(getComputedStyle(t).opacity)>0||(t.remove(),t=void 0)};setTimeout(s,1500),setTimeout(d,2500),e.addEventListener("blur",s),t.addEventListener("transitioncancel",d),t.addEventListener("transitionend",d)}function i(o){o.querySelectorAll?.(".expressive-code .copy button").forEach(e=>e.addEventListener("click",u))}i(document);var m=new MutationObserver(o=>o.forEach(e=>e.addedNodes.forEach(a=>{i(a)})));m.observe(document.body,{childList:!0,subtree:!0});document.addEventListener("astro:page-load",()=>{i(document)});})();}catch(e){console.error("[EC] copy-js-module failed:",e)}
(function() {
  'use strict';

  if (window.ecTypedInit) return;
  window.ecTypedInit = true;

  // Check reduced motion preference
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

  function shouldAnimate() {
    return !prefersReducedMotion.matches;
  }

  class TypedBlock {
    constructor(container) {
      this.container = container;
      this.id = container.id;
      this.trigger = container.dataset.trigger || 'visible';
      this.speed = parseInt(container.dataset.speed, 10) || 50;
      this.lineDelay = parseInt(container.dataset.lineDelay, 10) || 300;
      this.startDelay = parseInt(container.dataset.startDelay, 10) || 500;
      this.cursorChar = container.dataset.cursorChar || '\u2588';

      // New feature options
      this.outputDelay = parseInt(container.dataset.outputDelay, 10) || 0;
      this.loop = container.dataset.loop === 'true';
      this.loopDelay = parseInt(container.dataset.loopDelay, 10) || 1000;
      this.typingVariance = parseFloat(container.dataset.typingVariance) || 0;
      this.stepMode = container.dataset.stepMode === 'true';

      try {
        this.linesData = JSON.parse(container.dataset.lines || '[]');
      } catch (e) {
        this.linesData = [];
      }

      this.lineElements = container.querySelectorAll('.ec-line');
      this.cursor = container.querySelector('.ec-typed-cursor');
      this.overlay = container.querySelector('.ec-typed-overlay');
      this.replayBtn = container.querySelector('.ec-typed-replay');
      this.skipBtn = container.querySelector('.ec-typed-skip');
      this.statusEl = container.querySelector('.ec-typed-status');

      this.isAnimating = false;
      this.isComplete = false;
      this.animationFrame = null;
      this.startTime = null;
      this.timings = [];
      this.loopTimeout = null;
      this.startTimeout = null;

      // Step mode state
      this.isPaused = false;
      this.currentStepLine = 0;
      this.pauseTime = 0;

      // Performance: cache element references and rects
      this._lineCache = [];
      this._containerRect = null;
      this._fontApplied = false;

      this.init();
    }

    init() {
      // If reduced motion, show everything immediately
      if (!shouldAnimate()) {
        this.showAll();
        return;
      }

      // If no lines data or no line elements, show everything
      if (this.linesData.length === 0 || this.lineElements.length === 0) {
        this.showAll();
        return;
      }

      // Hide all content initially
      this.resetAnimation();

      // Set up trigger
      switch (this.trigger) {
        case 'load':
          this.start();
          break;
        case 'click':
          this.setupClickTrigger();
          break;
        case 'visible':
        default:
          this.setupVisibilityTrigger();
          break;
      }

      // Set up replay button
      if (this.replayBtn) {
        this.replayBtn.addEventListener('click', () => this.replay());
      }

      // Set up skip button
      if (this.skipBtn) {
        this.skipBtn.addEventListener('click', (e) => {
          e.preventDefault();
          e.stopPropagation();
          this.skip();
        });
      }

      // Set up step mode
      if (this.stepMode) {
        this.setupStepMode();
      }

      // Set up Escape key to skip animation
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && (this.isAnimating || this.isPaused)) {
          e.preventDefault();
          this.skip();
        }
      });
    }

    setupClickTrigger() {
      if (!this.overlay) return;

      const startHandler = (e) => {
        e.preventDefault();
        this.overlay.classList.add('ec-typed-overlay--hidden');
        this.start();
      };

      this.overlay.addEventListener('click', startHandler);
      this.overlay.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          startHandler(e);
        }
      });
    }

    setupVisibilityTrigger() {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting && !this.isAnimating && !this.isComplete) {
            observer.disconnect();
            this.start();
          }
        });
      }, { threshold: 0.1 });

      observer.observe(this.container);
    }

    start() {
      if (this.isAnimating) return;

      this.isAnimating = true;
      this.isComplete = false;
      this.container.classList.remove('ec-typed--complete');
      this.container.classList.add('ec-typed--animating');

      // Calculate timings for each line
      this.timings = this.calculateTimings();

      // Performance: cache element references and bounding rects
      this.cacheLineData();

      // Show cursor as typing
      if (this.cursor) {
        this.cursor.classList.add('ec-typed-cursor--typing');
        this.cursor.classList.remove('ec-typed-cursor--hidden');

        // Position cursor at start of first input line
        const firstInputTiming = this.timings.find(t => t.isInput);
        if (firstInputTiming) {
          this.positionCursor(firstInputTiming.index, 0);
        }
      }

      // Announce to screen readers and set busy state during delay
      if (this.statusEl) {
        this.statusEl.textContent = 'Animation started';
      }
      this.container.setAttribute('aria-busy', 'true');

      // Start animation after initial delay
      this.startTimeout = setTimeout(() => {
        this.startTimeout = null;
        this.container.removeAttribute('aria-busy');
        this.startTime = performance.now();
        this.animate();
      }, this.startDelay);
    }

    cacheLineData() {
      // Cache container rect
      this._containerRect = this.container.getBoundingClientRect();

      // Cache per-line data
      this._lineCache = [];
      this.lineElements.forEach((lineEl, index) => {
        const codeEl = lineEl.querySelector('.code') || lineEl;
        const firstSpan = codeEl.querySelector('span');
        const textEl = firstSpan || codeEl;
        const textRect = textEl.getBoundingClientRect();
        const textStyle = window.getComputedStyle(textEl);

        // Calculate character width using a test element
        const charWidth = this.getCharWidth(textEl, textStyle);
        const lineHeight = parseFloat(textStyle.lineHeight) || parseFloat(textStyle.fontSize) * 1.2;

        // Calculate the left position where text starts (relative to container)
        const leftPos = textRect.left - this._containerRect.left;

        this._lineCache[index] = {
          codeEl,
          firstSpan,
          textEl,
          textRect,
          fontFamily: textStyle.fontFamily,
          fontSize: textStyle.fontSize,
          lineHeight: textStyle.lineHeight,
          lineHeightPx: lineHeight,
          charWidth: charWidth,
          left: leftPos,
          top: textRect.top - this._containerRect.top
        };
      });
    }

    getCharWidth(textEl, textStyle) {
      // Create a temporary element to measure character width
      // Use multiple characters for more accurate measurement
      const measureEl = document.createElement('span');
      measureEl.style.fontFamily = textStyle.fontFamily;
      measureEl.style.fontSize = textStyle.fontSize;
      measureEl.style.visibility = 'hidden';
      measureEl.style.position = 'absolute';
      measureEl.style.whiteSpace = 'pre';
      measureEl.textContent = 'XXXXXXXXXX'; // Measure 10 characters for accuracy
      document.body.appendChild(measureEl);
      const charWidth = measureEl.getBoundingClientRect().width / 10;
      document.body.removeChild(measureEl);
      return charWidth || 8; // Fallback to 8px if measurement fails
    }

    calculateTimings() {
      const timings = [];
      let currentTime = 0;

      this.linesData.forEach((line, index) => {
        if (line.isInput) {
          // Input lines: type character by character
          let duration = line.charCount * this.speed;
          const timing = {
            index,
            startTime: currentTime,
            duration,
            charCount: line.charCount,
            isInput: true,
            charTimings: null,
          };

          // Pre-compute per-character timings when variance > 0
          if (this.typingVariance > 0 && line.charCount > 0) {
            timing.charTimings = [];
            let charTime = 0;
            for (let i = 0; i < line.charCount; i++) {
              // Use squared random for more dramatic variation
              // This creates more noticeable speed differences
              const random = Math.random() * 2 - 1;
              const weightedRandom = random * Math.abs(random);

              // Amplify the variance range (2x effect for more noticeable variation)
              let variance = 1 + weightedRandom * this.typingVariance * 2;

              // Occasionally add a "thinking pause" for realism (~5% chance)
              // These pauses are 2-4x the normal duration
              if (Math.random() < 0.05) {
                variance *= 2 + Math.random() * 2;
              }

              const charDuration = this.speed * Math.max(0.1, variance);
              timing.charTimings.push({ start: charTime, duration: charDuration });
              charTime += charDuration;
            }
            timing.duration = charTime;
            duration = charTime;
          }

          timings.push(timing);
          currentTime += duration + this.lineDelay;
        } else {
          // Output lines: add outputDelay before appearing
          currentTime += this.outputDelay;
          timings.push({
            index,
            startTime: currentTime,
            duration: 0,
            charCount: line.charCount,
            isInput: false,
            charTimings: null,
          });
          currentTime += this.lineDelay;
        }
      });

      this.totalDuration = currentTime;
      return timings;
    }

    animate() {
      // Don't run if animation was skipped or completed
      if (!this.isAnimating) return;

      // Handle step mode pause
      if (this.isPaused) return;

      const elapsed = performance.now() - this.startTime;

      let allComplete = true;
      let currentTypingLine = -1;
      let currentVisibleChars = 0;
      let lineJustCompleted = -1;

      for (const timing of this.timings) {
        // Performance: skip already completed lines
        if (timing.completed) continue;

        const lineEl = this.lineElements[timing.index];
        if (!lineEl) continue;

        if (elapsed < timing.startTime) {
          // Line hasn't started yet
          allComplete = false;
        } else if (elapsed >= timing.startTime + timing.duration) {
          // Line is complete - mark it so we skip it next frame
          timing.completed = true;
          lineEl.classList.add('ec-typed-line--complete');

          // Position cursor at end of completed line (if it's an input line)
          if (timing.isInput) {
            lineEl.style.setProperty('--ec-typed-chars', timing.charCount.toString());
            currentTypingLine = timing.index;
            currentVisibleChars = timing.charCount;
          }

          // Track if this line just completed (for step mode)
          if (this.stepMode) {
            lineJustCompleted = timing.index;
          }
        } else {
          // Line is currently animating
          allComplete = false;
          if (timing.isInput) {
            const lineElapsed = elapsed - timing.startTime;

            // Use per-character timings if available (typing variance)
            let visibleChars;
            if (timing.charTimings) {
              visibleChars = 0;
              for (const ct of timing.charTimings) {
                if (lineElapsed >= ct.start + ct.duration) {
                  visibleChars++;
                } else {
                  break;
                }
              }
            } else {
              visibleChars = Math.floor(lineElapsed / this.speed);
            }

            // Clamp to prevent cursor from moving past the end
            visibleChars = Math.min(visibleChars, timing.charCount);

            // Use character-based clip position instead of percentage
            lineEl.style.setProperty('--ec-typed-chars', visibleChars.toString());
            currentTypingLine = timing.index;
            currentVisibleChars = visibleChars;
          } else {
            // Output lines appear instantly once started
            timing.completed = true;
            lineEl.classList.add('ec-typed-line--complete');
          }
        }
      }

      // Position cursor on current typing line
      if (currentTypingLine >= 0 && this.cursor) {
        // Refresh container rect to handle scroll changes
        this._containerRect = this.container.getBoundingClientRect();
        this.positionCursor(currentTypingLine, currentVisibleChars);
      }

      // Handle step mode: pause after line completes (except last line)
      if (this.stepMode && lineJustCompleted >= 0 && lineJustCompleted < this.timings.length - 1) {
        this.pauseForStep(elapsed);
        return;
      }

      if (allComplete) {
        this.complete();
      } else {
        this.animationFrame = requestAnimationFrame(() => this.animate());
      }
    }

    positionCursor(lineIndex, visibleChars) {
      if (!this.cursor) return;

      // Use cached data for performance
      const cache = this._lineCache[lineIndex];
      if (!cache) return;

      // Apply font styles once
      if (!this._fontApplied) {
        this.cursor.style.fontFamily = cache.fontFamily;
        this.cursor.style.fontSize = cache.fontSize;
        this.cursor.style.lineHeight = cache.lineHeight;
        this._fontApplied = true;
      }

      // Use Range API to get the actual rendered position of the character
      // This correctly handles wrapped text
      const position = this.getCharacterPosition(cache.codeEl, visibleChars);

      // Only add offset when line is complete (cursor at rest after last character)
      const lineData = this.linesData[lineIndex];
      const isLineComplete = lineData && visibleChars >= lineData.charCount;
      const cursorOffset = isLineComplete ? (cache.charWidth || 8) : 0;

      if (position) {
        this.cursor.style.top = (position.top - this._containerRect.top) + 'px';
        this.cursor.style.left = (position.left - this._containerRect.left + cursorOffset) + 'px';
        this.cursor.style.transform = 'none';
      } else {
        // Fallback to simple calculation if Range API fails
        this.cursor.style.top = cache.top + 'px';
        this.cursor.style.left = cache.left + 'px';
        const fallbackOffset = isLineComplete ? 1 : 0;
        this.cursor.style.transform = 'translateX(' + (visibleChars + fallbackOffset) + 'ch)';
      }
    }

    getCharacterPosition(codeEl, charIndex) {
      try {
        // Walk through text nodes to find the character at charIndex
        const walker = document.createTreeWalker(
          codeEl,
          NodeFilter.SHOW_TEXT,
          null
        );

        let currentIndex = 0;
        let node;

        while ((node = walker.nextNode())) {
          const nodeLength = node.textContent.length;

          if (currentIndex + nodeLength >= charIndex) {
            // The character is in this text node
            const offsetInNode = charIndex - currentIndex;
            const range = document.createRange();

            // Set range to the position after the character
            range.setStart(node, Math.min(offsetInNode, nodeLength));
            range.setEnd(node, Math.min(offsetInNode, nodeLength));

            const rect = range.getBoundingClientRect();
            range.detach();

            return { top: rect.top, left: rect.left };
          }

          currentIndex += nodeLength;
        }

        // If we've exhausted all nodes, position at the end of the last node
        if (currentIndex > 0) {
          const lastNode = walker.currentNode || codeEl.lastChild;
          if (lastNode && lastNode.nodeType === Node.TEXT_NODE) {
            const range = document.createRange();
            range.setStart(lastNode, lastNode.textContent.length);
            range.setEnd(lastNode, lastNode.textContent.length);
            const rect = range.getBoundingClientRect();
            range.detach();
            return { top: rect.top, left: rect.left };
          }
        }

        return null;
      } catch (e) {
        return null;
      }
    }

    complete() {
      this.isAnimating = false;
      this.isComplete = true;
      this.container.classList.remove('ec-typed--animating');
      this.container.classList.add('ec-typed--complete');

      // Stop cursor blinking and hide
      if (this.cursor) {
        this.cursor.classList.remove('ec-typed-cursor--typing');
        this.cursor.classList.add('ec-typed-cursor--hidden');
      }

      // Announce to screen readers
      if (this.statusEl) {
        this.statusEl.textContent = 'Animation complete';
      }

      if (this.animationFrame) {
        cancelAnimationFrame(this.animationFrame);
        this.animationFrame = null;
      }

      // Handle loop mode
      if (this.loop && shouldAnimate()) {
        this.loopTimeout = setTimeout(() => {
          this.replay();
        }, this.loopDelay);
      }
    }

    resetAnimation() {
      // Hide all lines
      this.lineElements.forEach((el) => {
        el.style.setProperty('--ec-typed-chars', '0');
        el.classList.remove('ec-typed-line--complete');
      });

      // Reset timing completion flags
      this.timings.forEach(timing => {
        timing.completed = false;
      });

      this.container.classList.remove('ec-typed--complete');
      this.isComplete = false;
      this.isAnimating = false;
      this._fontApplied = false;

      if (this.cursor) {
        this.cursor.classList.remove('ec-typed-cursor--hidden');
        this.cursor.classList.remove('ec-typed-cursor--typing');
      }

      // Clear screen reader announcement
      if (this.statusEl) {
        this.statusEl.textContent = '';
      }
    }

    replay() {
      if (this.isAnimating) return;

      // Cancel any pending loop
      if (this.loopTimeout) {
        clearTimeout(this.loopTimeout);
        this.loopTimeout = null;
      }

      // Cancel any pending start timeout
      if (this.startTimeout) {
        clearTimeout(this.startTimeout);
        this.startTimeout = null;
      }

      // Cancel any pending animation
      if (this.animationFrame) {
        cancelAnimationFrame(this.animationFrame);
        this.animationFrame = null;
      }

      // Reset step mode state
      this.isPaused = false;
      this.currentStepLine = 0;
      this.container.classList.remove('ec-typed--paused');

      this.resetAnimation();
      this.start();
    }

    skip() {
      // Only skip if animation is running or paused (step mode)
      if (!this.isAnimating && !this.isPaused) return;

      // Cancel any pending start timeout
      if (this.startTimeout) {
        clearTimeout(this.startTimeout);
        this.startTimeout = null;
      }

      // Cancel any pending animation frame
      if (this.animationFrame) {
        cancelAnimationFrame(this.animationFrame);
        this.animationFrame = null;
      }

      // Reset step mode state if paused
      if (this.isPaused) {
        this.isPaused = false;
        this.container.classList.remove('ec-typed--paused');
      }

      // Show all lines as complete
      this.lineElements.forEach((el, index) => {
        el.classList.add('ec-typed-line--complete');
        const charCount = this.linesData[index]?.charCount ?? 0;
        el.style.setProperty('--ec-typed-chars', charCount.toString());
      });

      // Mark all timings as completed
      if (this.timings) {
        this.timings.forEach(timing => {
          timing.completed = true;
        });
      }

      // Remove aria-busy if set
      this.container.removeAttribute('aria-busy');

      // Announce skip to screen readers
      if (this.statusEl) {
        this.statusEl.textContent = 'Animation skipped';
      }

      // Complete the animation
      this.complete();
    }

    setupStepMode() {
      const handleStep = (e) => {
        if (!this.isPaused) return;

        // Check if it's a valid trigger
        const isClick = e.type === 'click';
        const isValidKey = e.type === 'keydown' &&
          ['Enter', ' ', 'ArrowRight', 'ArrowDown'].includes(e.key);

        if (isClick || isValidKey) {
          if (e.type === 'keydown') e.preventDefault();
          this.continueStep();
        }
      };

      this.container.addEventListener('click', handleStep);
      this.container.addEventListener('keydown', handleStep);
      this.container.setAttribute('tabindex', '0');
    }

    pauseForStep(elapsed) {
      this.isPaused = true;
      this.pauseTime = elapsed;
      this.container.classList.add('ec-typed--paused');

      // Show cursor blinking to indicate waiting
      if (this.cursor) {
        this.cursor.classList.remove('ec-typed-cursor--typing');
      }

      // Announce pause to screen readers
      if (this.statusEl) {
        this.statusEl.textContent = 'Animation paused. Press Enter, Space, or Arrow keys to continue.';
      }
    }

    continueStep() {
      if (!this.isPaused) return;

      this.isPaused = false;
      this.container.classList.remove('ec-typed--paused');

      // Show cursor as typing again
      if (this.cursor) {
        this.cursor.classList.add('ec-typed-cursor--typing');
      }

      // Announce continuation to screen readers
      if (this.statusEl) {
        this.statusEl.textContent = 'Animation resumed';
      }

      // Adjust start time to account for pause
      const pauseDuration = performance.now() - this.startTime - this.pauseTime;
      this.startTime += pauseDuration;

      // Continue animation
      this.animationFrame = requestAnimationFrame(() => this.animate());
    }

    showAll() {
      // For reduced motion: show everything immediately
      this.lineElements.forEach((el) => {
        el.classList.add('ec-typed-line--complete');
      });

      if (this.cursor) {
        this.cursor.classList.add('ec-typed-cursor--hidden');
      }

      if (this.overlay) {
        this.overlay.classList.add('ec-typed-overlay--hidden');
      }

      this.container.classList.add('ec-typed--complete');
      this.isComplete = true;
    }
  }

  function initTypedBlocks() {
    document.querySelectorAll('.ec-typed').forEach(container => {
      if (container.dataset.initialized) return;
      container.dataset.initialized = 'true';
      new TypedBlock(container);
    });
  }

  // Initialize on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initTypedBlocks);
  } else {
    initTypedBlocks();
  }

  // Handle dynamically added content
  const debounce = (fn, delay) => {
    let timeout;
    return (...args) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => fn(...args), delay);
    };
  };

  const debouncedInit = debounce(initTypedBlocks, 100);
  new MutationObserver(debouncedInit).observe(document.body, {
    childList: true,
    subtree: true
  });

  // Handle reduced motion preference changes
  prefersReducedMotion.addEventListener('change', () => {
    document.querySelectorAll('.ec-typed').forEach(container => {
      if (prefersReducedMotion.matches && !container.classList.contains('ec-typed--complete')) {
        // Show all content when reduced motion is enabled
        const lineElements = container.querySelectorAll('.ec-line');
        lineElements.forEach(el => {
          el.classList.add('ec-typed-line--complete');
        });
        container.classList.add('ec-typed--complete');
      }
    });
  });
})();