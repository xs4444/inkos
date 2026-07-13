(function() {
  var isMobile = window.innerWidth < 768;
  if (!isMobile) return;

  var style = document.createElement('style');
  style.textContent = [
    /* 全局缩放 */
    'body, #root { font-size: 14px !important; overflow-x: hidden !important; }',
    /* 让所有 flex 布局在移动端纵向排列 */
    '.flex.flex-row { flex-direction: column !important; }',
    /* 隐藏侧边栏区域（根据实际结构选择） */
    '.fixed.left-0, .inset-y-0.left-0, [class*="left-0"] { display: none !important; }',
    /* 主内容区占满宽度 */
    '.pl-\\[--sidebar-width\\], .pl-\\[.*\\], [class*="pl-"] { padding-left: 0 !important; }',
    '.ml-\\[--sidebar-width\\], .ml-\\[.*\\], [class*="ml-"] { margin-left: 0 !important; }',
    /* 主区域全宽 */
    '.max-w-\\[.*\\], [class*="max-w-"] { max-width: 100% !important; width: 100% !important; }',
    /* 输入框触摸友好 */
    'input, textarea, [contenteditable] { font-size: 16px !important; max-width: 100% !important; }',
    /* 按钮触摸区域 */
    'button, a, [role="button"] { min-height: 44px !important; }',
    /* 卡片内边距 */
    '[class*="rounded-"] { margin: 4px 0 !important; }',
    /* 图片适应 */
    'img { max-width: 100% !important; height: auto !important; }',
    /* 表格自适应 */
    'table, [class*="grid"] { width: 100% !important; overflow-x: auto !important; display: block !important; }',
    /* 文字不溢出 */
    '* { word-wrap: break-word !important; overflow-wrap: break-word !important; }'
  ].join('');
  document.head.appendChild(style);
})();
