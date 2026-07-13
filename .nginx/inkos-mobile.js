(function() {
  if (window.innerWidth >= 768) return;

  var style = document.createElement('style');
  style.textContent = [
    /* 最外层 flex 容器改为纵向 */
    'body > #root > div:first-child { flex-direction: column !important; }',

    /* 隐藏侧边栏 (Sidebar) */
    'aside { display: none !important; }',

    /* 中间内容区占满 */
    '#root > div > div.flex-1 { width: 100% !important; max-width: 100vw !important; }',

    /* 顶栏紧凑 */
    'header { height: auto !important; min-height: 44px !important; padding: 4px 8px !important; }',
    'header button { min-height: 36px !important; padding: 4px 10px !important; }',

    /* 主内容区全宽 */
    'main { max-width: 100vw !important; width: 100% !important; padding: 0 !important; }',
    'main > div { max-width: 100% !important; width: 100% !important; padding: 8px !important; margin: 0 !important; }',

    /* ChatPage — 聊天消息区域自适应 */
    '.chat-message-scroll { padding: 8px !important; }',
    '.chat-message-scroll > div { max-width: 100% !important; width: 100% !important; }',

    /* 输入框 */
    'textarea { font-size: 16px !important; }',

    /* 按钮触摸 */
    'button, a, [role="button"] { min-height: 44px !important; }',

    /* 禁止水平滚动 */
    'body { overflow-x: hidden !important; }',
    '* { max-width: 100vw !important; box-sizing: border-box !important; word-wrap: break-word !important; }',

    /* 卡片间距 */
    '[class*="rounded-"] { margin: 4px 0 !important; }',

    /* 创建入口网格从两列改为一列 */
    '.grid.grid-cols-2 { grid-template-columns: 1fr !important; }',

    /* 图片适应 */
    'img { max-width: 100% !important; height: auto !important; }'
  ].join('');
  document.head.appendChild(style);

  /* 监听 DOM 变化，等 React 渲染完成后再调整一次 */
  var observer = new MutationObserver(function() {
    document.querySelectorAll('aside').forEach(function(el) { el.style.display = 'none'; });
    observer.disconnect();
  });
  observer.observe(document.body, { childList: true, subtree: true });
})();
