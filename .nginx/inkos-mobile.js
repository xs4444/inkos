(function() {
  if (window.innerWidth >= 768) return;

  var s = document.createElement('style');
  s.textContent = [
    /* 隐藏左侧导航栏 */
    '#root > div > aside:first-child { display: none !important; }',

    /* 内容区自动占满 */
    '#root > div { width: 100% !important; }',
    '#root > div > div.flex-1 { width: 100% !important; max-width: 100vw !important; }',

    /* 顶栏压缩 */
    'header.h-14 { height: auto !important; min-height: 40px !important; padding: 2px 8px !important; }',

    /* 主内容区全宽 */
    'main { width: 100% !important; max-width: 100vw !important; }',
    'main > div { max-width: 100% !important; }',

    /* 聊天气泡 */
    '.chat-message-scroll { padding: 4px !important; }',
    '.chat-message-scroll > div:first-child { max-width: 100% !important; }',

    /* 输入框 */
    'textarea { font-size: 16px !important; }',
    '.max-w-3xl { max-width: 100% !important; }',

    /* 按钮触摸友好 */
    'button, a, [role="button"] { min-height: 44px !important; }',

    /* 防止横向滚动（fixed/absolute 元素不受影响） */
    'body { overflow-x: hidden !important; }',

    /* 图片自适应 */
    'img { max-width: 100% !important; height: auto !important; }',

    /* 创建页网格 */
    '.grid.grid-cols-2 { grid-template-columns: 1fr !important; }',

    /* Dashboard */
    '.max-w-4xl { max-width: 100% !important; padding-left: 8px !important; padding-right: 8px !important; }',
  ].join('');
  document.head.appendChild(s);
})();
