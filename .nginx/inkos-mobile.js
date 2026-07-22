(function() {
  if (window.innerWidth >= 768) return;

  var style = document.createElement('style');
  style.textContent = '\
@media (max-width: 767px) {\
  /* 侧栏转换为固定覆盖层 */\
  #root > div > aside:first-child {\
    position: fixed !important;\
    top: 0 !important;\
    left: 0 !important;\
    height: 100vh !important;\
    height: 100dvh !important;\
    z-index: 999 !important;\
    transform: translateX(-100%);\
    transition: transform 0.25s ease !important;\
    width: 280px !important;\
    box-shadow: 4px 0 24px rgba(0,0,0,0.25) !important;\
  }\
  body.inkos-mobile-open #root > div > aside:first-child {\
    transform: translateX(0) !important;\
  }\
  /* 遮罩层 */\
  body.inkos-mobile-open::after {\
    content: "" !important;\
    position: fixed !important;\
    inset: 0 !important;\
    background: rgba(0,0,0,0.35) !important;\
    z-index: 998 !important;\
  }\
  /* 顶栏左侧汉堡按钮容器 */\
  .inkos-hamburger {\
    display: inline-flex !important;\
    align-items: center !important;\
    justify-content: center !important;\
    width: 36px !important;\
    height: 36px !important;\
    margin-right: 4px !important;\
    border-radius: 8px !important;\
    border: 1px solid var(--border, rgba(0,0,0,0.1)) !important;\
    background: var(--card, rgba(255,255,255,0.05)) !important;\
    cursor: pointer !important;\
    color: var(--foreground, inherit) !important;\
    flex-shrink: 0 !important;\
  }\
  /* 顶栏压缩 + 隐藏面包屑导航 */\
  header.h-14 { height: auto !important; min-height: 44px !important; padding: 2px 8px !important; font-size: 13px !important; }\
  /* 隐藏面包屑，只保留汉堡按钮 */\
  header > div:first-child > *:not(.inkos-hamburger) { display: none !important; }\
  header > div:first-child { gap: 0 !important; }\
  html { font-size: calc(100vw / 28) !important; }\
  /* 覆盖 InkOS 中 px 单位的文字大小，统一用 rem */\
  [class*="text-\\["] { font-size: 1rem !important; }\
  /* 主区全宽 */\\
  #root > div > div.flex-1 { width: 100% !important; max-width: 100vw !important; }\
  main, main > div { max-width: 100% !important; padding: 0 !important; }\
  .fade-in { padding: 4px !important; }\
  .chat-message-scroll { padding: 2px !important; }\
  .chat-message-scroll > div:first-child { max-width: 100% !important; }\
  textarea { font-size: 1rem !important; white-space: pre-wrap !important; }\
  .max-w-3xl, .max-w-4xl { max-width: 100% !important; padding-left: 4px !important; padding-right: 4px !important; }\
  /* 输入区 flex 子元素允许收缩 */\
  .flex.items-start.gap-2 > * { min-width: 0 !important; }\
  /* 模型选择器栏允许收缩且不换行 */\
  .flex.items-center.gap-2.border-t > * { min-width: 0 !important; white-space: nowrap !important; }\
  button, a, [role="button"] { min-height: 36px !important; }\
  body { overflow-x: hidden !important; }\
  img { max-width: 100% !important; height: auto !important; }\
  .grid.grid-cols-2 { grid-template-columns: 1fr !important; }\
}\
';
  document.head.appendChild(style);

  function init() {
    var header = document.querySelector('header');
    if (!header) { setTimeout(init, 200); return; }

    /* 检查是否已有汉堡按钮 */
    if (document.querySelector('.inkos-hamburger')) return;

    var btn = document.createElement('button');
    btn.className = 'inkos-hamburger';
    btn.setAttribute('aria-label', 'Toggle sidebar');
    btn.innerHTML = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>';

    var closeLabel = document.createElement('span');
    closeLabel.style.cssText = 'display:none';
    closeLabel.textContent = 'Close';
    btn.appendChild(closeLabel);

    btn.onclick = function(e) {
      e.stopPropagation();
      document.body.classList.toggle('inkos-mobile-open');
      var isOpen = document.body.classList.contains('inkos-mobile-open');
      btn.innerHTML = isOpen
        ? '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>'
        : '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>';
      btn.appendChild(closeLabel);
    };

    /* 插入到 header 左侧第一个位置 */
    var leftGroup = header.firstElementChild;
    if (leftGroup && leftGroup.tagName === 'DIV') {
      leftGroup.insertBefore(btn, leftGroup.firstChild);
    } else {
      header.insertBefore(btn, header.firstChild);
    }

    /* 点击遮罩关闭 */
    document.addEventListener('click', function(e) {
      if (!document.body.classList.contains('inkos-mobile-open')) return;
      var aside = document.querySelector('#root > div > aside:first-child');
      if (aside && !aside.contains(e.target) && !btn.contains(e.target)) {
        document.body.classList.remove('inkos-mobile-open');
        btn.innerHTML = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>';
        btn.appendChild(closeLabel);
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
