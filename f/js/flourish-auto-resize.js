
<script>
/*!
 * flourish-auto-resize v1.0.0
 * Minimal auto-resizer for Flourish iframes using postMessage.
 * Docs references: https://developers.flourish.studio/embedding/dynamic-resizing/
 */

(function (root, factory) {
  // UMD wrapper
  if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else if (typeof define === 'function' && define.amd) {
    define([], factory);
  } else {
    root.FlourishAutoResize = factory();
  }
}(this, function () {
  function init(userOpts) {
    var opts = Object.assign({
      selector: '.flourish-embed-iframe',        // 选择器：要自适应的 iframe
      origins: [                                  // 来源白名单（前缀匹配）
        'https://flo.uri.sh',
        'https://public.flourish.studio',
        'https://app.flourish.studio',
        'https://mississippi.river.to'
      ],
      ensureAutoParam: true,                      // 是否自动补 ?auto=1
      initialHeight: 600,                         // 初始兜底高度（避免首屏闪烁）
      minHeight: 300,                             // 最小高度保护
      debug: false                                // 开启调试日志
    }, userOpts || {});

    var iframes = Array.prototype.slice.call(
      document.querySelectorAll(opts.selector)
    );
    var map = new Map();

    // 初始化每个 iframe
    iframes.forEach(function (iframe) {
      // 宽度自适应父容器
      if (!iframe.style.width) iframe.style.width = '100%';
      iframe.style.display = 'block';

      // 初始兜底高度
      if (!iframe.style.height) iframe.style.height = opts.initialHeight + 'px';

      // 记录映射（后续通过 e.source 匹配）
      map.set(iframe.contentWindow, { iframe: iframe, last: 0 });

      // 可选：自动补上 ?auto=1（若未带）
      if (opts.ensureAutoParam) {
        try {
          var u = new URL(iframe.src, document.baseURI);
          if (!u.searchParams.has('auto')) {
            u.searchParams.set('auto', '1');
            if (opts.debug) console.log('[flourish-auto-resize] add ?auto=1 ->', u.toString());
            iframe.src = u.toString(); // 会触发重新加载
          }
        } catch (e) {
          if (opts.debug) console.warn('[flourish-auto-resize] URL parse failed:', e);
        }
      }
    });

    function allowedOrigin(origin) {
      if (!opts.origins || !opts.origins.length) return true;
      return opts.origins.some(function (o) { return origin.indexOf(o) === 0; });
    }

    function handleMessage(e) {
      var msg = e.data;
      try { if (typeof msg === 'string') msg = JSON.parse(msg); } catch (_) {}

      // 只处理 Flourish 的自适应消息
      if (!msg || msg.source !== 'Flourish' || msg.context !== 'iframe.resize') return; // [1](https://developers.flourish.studio/embedding/dynamic-resizing/)
      if (!allowedOrigin(e.origin)) {
        if (opts.debug) console.warn('[flourish-auto-resize] blocked origin:', e.origin, msg);
        return;
      }

      // 定位目标 iframe（通过 e.source）
      var entry = map.get(e.source) || null;
      if (!entry) {
        // 兼容某些浏览器，做一次线性匹配
        for (var v of map.values()) {
          if (v.iframe.contentWindow === e.source) { entry = v; break; }
        }
        if (!entry) return;
      }

      // 应用高度（含最小高度保护与去抖）
      var h = Math.max(opts.minHeight, Math.ceil(Number(msg.height) || 0));
      if (h > 0 && h !== entry.last) {
        entry.last = h;
        entry.iframe.style.height = h + 'px';
        if (opts.debug) console.log('[flourish-auto-resize] set height:', h, entry.iframe);
      }
    }

    window.addEventListener('message', handleMessage);

    // 返回控制句柄
    return {
      iframes: iframes,
      destroy: function () { window.removeEventListener('message', handleMessage); }
    };
  }

  return { init: init };
}));
</script>
