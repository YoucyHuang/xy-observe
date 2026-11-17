window.YY = (function () {
  var EMO = { wild:'#E8434F', joy:'#FFC61A', calm:'#4FA3FF', sad:'#8A9BC4', think:'#A98BEA', cold:'#9FE3FF', hot:'#FF7A1A', proud:'#FF5FA2', nervous:'#4FD69C' };
  var STAR = 'M0 -1 Q0 0 1 0 Q0 0 0 1 Q0 0 -1 0 Q0 0 0 -1Z';
  function hx(c) { c = c.replace('#', ''); return [0, 2, 4].map(function (i) { return parseInt(c.substr(i, 2), 16); }); }
  function mix(a, b, p) { var A = hx(a), B = hx(b); return 'rgb(' + A.map(function (v, i) { return Math.round(v + (B[i] - v) * p); }).join(',') + ')'; }
  function waves(cx) { var d = ''; [-520, -497, -474].forEach(function (y) { d += 'M' + (cx - 23) + ' ' + y + ' q5.75 -7 11.5 0 t11.5 0 t11.5 0 t11.5 0 '; }); return d; }
  function eye(cx) {
    return '<g class="yy-eye"><rect class="yy-iris" x="' + (cx - 33) + '" y="-548" width="66" height="102" rx="28"/>' +
      '<path class="yy-wave" d="' + waves(cx) + '"/>' +
      '<rect class="yy-rim" x="' + (cx - 33) + '" y="-548" width="66" height="102" rx="28"/>' +
      '<circle class="yy-hi" cx="' + (cx + 13) + '" cy="-528" r="8"/><circle class="yy-hi" cx="' + (cx + 19) + '" cy="-512" r="3.5"/></g>';
  }
  function leg(sx) {
    var d = 'M' + (62 * sx) + ' -190 Q' + (148 * sx) + ' -120 ' + (108 * sx) + ' -28';
    var f = sx < 0 ? 'M-90 -30 Q-88 -2 -120 -2 L-152 -2 Q-172 -2 -168 -18 Q-162 -36 -128 -38 Z' : 'M90 -30 Q88 -2 120 -2 L152 -2 Q172 -2 168 -18 Q162 -36 128 -38 Z';
    return '<g class="' + (sx < 0 ? 'yy-legL' : 'yy-legR') + '"><path class="ink" stroke-width="44" d="' + d + '"/><path class="yy-leg" d="' + d + '"/><path class="yy-skin" d="' + f + '"/></g>';
  }
  function svg(extra) {
    var legs = '<g class="yy-legs">' + leg(-1) + leg(1) + '</g>';
    var armL = '<g class="yy-armL"><path class="ink" stroke-width="16" d="M-130 -360 Q-188 -320 -240 -364"/>' +
      '<path class="ink" stroke-width="12" d="M-244 -368 L-288 -380 M-244 -368 L-282 -410 M-244 -368 L-256 -422 M-244 -368 L-220 -410"/>' +
      '<circle class="yy-skin" cx="-244" cy="-368" r="20"/><circle class="yy-dot" cx="-244" cy="-368" r="7"/></g>';
    var armR = '<g class="yy-armR"><path class="ink" stroke-width="16" d="M130 -360 Q188 -320 240 -364"/>' +
      '<path class="ink" stroke-width="12" d="M244 -368 L288 -380 M244 -368 L282 -410 M244 -368 L256 -422 M244 -368 L220 -410"/>' +
      '<circle class="yy-skin" cx="244" cy="-368" r="20"/><circle class="yy-dot" cx="244" cy="-368" r="7"/></g>';
    var top = '<g class="yy-top"><path class="yy-gold" d="M-132 -610 L-126 -684 L-96 -634 L-76 -700 L-54 -636 L-28 -686 L-16 -618 Z"/>' +
      '<g class="yy-ant"><path class="ink" stroke-width="14" d="M72 -624 C70 -666 86 -688 110 -696"/><circle class="yy-gold" cx="124" cy="-704" r="24" style="stroke-width:12"/></g></g>';
    var body = '<path class="yy-body" d="M-100 -630 L100 -630 Q152 -630 150 -578 L130 -230 Q126 -172 72 -172 L-72 -172 Q-126 -172 -130 -230 L-150 -578 Q-152 -630 -100 -630 Z"/>' +
      '<path class="ink" stroke-width="7" d="M157 -550 q16 -4 20 -18 q2 -12 -10 -9 M154 -488 q18 0 24 -14 M150 -426 q16 6 22 -8 q4 -10 -6 -11 M-138 -290 q-18 4 -20 -12"/>' +
      '<circle class="yy-blush" cx="-100" cy="-388" r="30"/><circle class="yy-blush" cx="100" cy="-388" r="30"/>';
    var face = '<g class="yy-eyes">' + eye(-57) + eye(57) + '</g><circle class="yy-nose" cx="0" cy="-414" r="11"/>' +
      '<g class="yy-mouths">' +
      '<g data-m="o"><ellipse class="yy-mouth" cx="0" cy="-354" rx="17" ry="23"/><ellipse class="yy-throat" cx="0" cy="-348" rx="7" ry="9"/></g>' +
      '<g data-m="open"><ellipse class="yy-mouth" cx="0" cy="-346" rx="32" ry="40"/><ellipse class="yy-throat" cx="0" cy="-336" rx="16" ry="20"/></g>' +
      '<g data-m="smile"><path class="yy-mouth" d="M-48 -372 H48 Q30 -318 0 -318 Q-30 -318 -48 -372 Z"/></g>' +
      '<g data-m="tongue"><path class="yy-mouth" d="M-44 -372 H44 Q28 -326 0 -326 Q-28 -326 -44 -372 Z"/><path class="yy-tongue" d="M-16 -338 Q-18 -296 0 -294 Q18 -296 16 -338 Z"/></g>' +
      '<g data-m="flat"><path class="ink" stroke-width="10" d="M-26 -354 H26"/></g>' +
      '<g data-m="wobble"><path class="ink" stroke-width="9" d="M-36 -354 q9 -10 18 0 t18 0 t18 0 t18 0"/></g></g>';
    return '<g class="yy ' + (extra || '') + '">' + legs + armL + armR + top + body + face + '</g>';
  }
  function bind(root) {
    var all = function (s) { return Array.prototype.slice.call(root.querySelectorAll(s)); };
    return { root: root, armL: root.querySelector('.yy-armL'), armR: root.querySelector('.yy-armR'), eyes: root.querySelector('.yy-eyes'),
      legL: root.querySelector('.yy-legL'), legR: root.querySelector('.yy-legR'),
      eye: all('.yy-eye'), iris: all('.yy-iris'), ant: root.querySelector('.yy-ant'), mouths: all('.yy-mouths > g') };
  }
  function set(r, s) {
    var k = s.scale == null ? 1 : s.scale, sx = (s.sx == null ? 1 : s.sx) * k, sy = (s.sy == null ? 1 : s.sy) * k;
    r.root.setAttribute('transform', 'translate(' + (s.x || 0) + ' ' + (s.y || 0) + ') rotate(' + (s.rot || 0) + ') scale(' + sx + ' ' + sy + ')');
    r.armL.setAttribute('transform', 'rotate(' + (s.armL || 0) + ' -130 -360)');
    r.armR.setAttribute('transform', 'rotate(' + (-(s.armR || 0)) + ' 130 -360)');
    r.legL.setAttribute('transform', 'rotate(' + (s.legL || 0) + ' -62 -190)');
    r.legR.setAttribute('transform', 'rotate(' + (s.legR || 0) + ' 62 -190)');
    r.eyes.setAttribute('transform', 'translate(' + (s.lookX || 0) + ' ' + (s.lookY || 0) + ')');
    var es = s.eyeScale == null ? 1 : s.eyeScale, b = s.blink || 0;
    [-57, 57].forEach(function (cx, i) { r.eye[i].setAttribute('transform', 'translate(' + cx + ' -497) scale(' + es + ' ' + (es * (1 - 0.92 * b)) + ') translate(' + (-cx) + ' 497)'); });
    var c = s.eye || EMO.wild; r.iris.forEach(function (e) { e.style.fill = c; });
    r.ant.setAttribute('transform', 'rotate(' + (s.ant || 0) + ' 72 -624)');
    var m = s.mouth || 'o'; r.mouths.forEach(function (g) { g.style.display = g.getAttribute('data-m') === m ? '' : 'none'; });
  }
  function star(x, y, s, cls) { return '<path class="' + cls + '" transform="translate(' + x + ' ' + y + ') scale(' + s + ')" d="' + STAR + '"/>'; }
  // cut-out animation: limbs and props step at 12 drawings a second
  function step(t) { return Math.floor(t * 12) / 12; }
  // pen hatching, as a pattern; id must be unique per scene
  function hatch(id, angle, gap) { return '<pattern id="' + id + '" width="' + (gap || 12) + '" height="' + (gap || 12) + '" patternUnits="userSpaceOnUse" patternTransform="rotate(' + (angle || 35) + ')"><line class="fp-hatch" x1="0" y1="0" x2="0" y2="' + (gap || 12) + '"/></pattern>'; }
  return { EMO: EMO, STAR: STAR, mix: mix, svg: svg, bind: bind, set: set, star: star, step: step, hatch: hatch };
})();