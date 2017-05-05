const gapi = window.gapi = window.gapi || {}; gapi._bs = new Date().getTime(); (function () {
  var aa = function (a, b, c) { return a.call.apply(a.bind, arguments); },
    ba = function (a, b, c) { if (!a) throw Error(); if (arguments.length > 2) { const d = Array.prototype.slice.call(arguments, 2); return function () { const c = Array.prototype.slice.call(arguments); Array.prototype.unshift.apply(c, d); return a.apply(b, c); }; } return function () { return a.apply(b, arguments); }; },
    ca = function (a, b, c) { ca = Function.prototype.bind && Function.prototype.bind.toString().indexOf('native code') != -1 ? aa : ba; return ca(...arguments); };/*
 gapi.loader.OBJECT_CREATE_TEST_OVERRIDE &&*/
  let m = window,
    p = document,
    r = m.location,
    da = function () {},
    ea = /\[native code\]/,
    u = function (a, b, c) { return a[b] = a[b] || c; },
    fa = function (a) { for (let b = 0; b < this.length; b++) if (this[b] === a) return b; return -1; },
    ga = function (a) { a = a.sort(); for (var b = [], c = void 0, d = 0; d < a.length; d++) { const e = a[d]; e != c && b.push(e); c = e; } return b; },
    ha = /&/g,
    ia = /</g,
    ja = />/g,
    ka = /"/g,
    la = /'/g,
    ma = function (a) { return String(a).replace(ha, '&amp;').replace(ia, '&lt;').replace(ja, '&gt;').replace(ka, '&quot;').replace(la, '&#39;'); },
    v = function () {
      let a; if ((a = Object.create) &&
ea.test(a))a = a(null); else { a = {}; for (const b in a)a[b] = void 0; } return a;
    },
    x = function (a, b) { return Object.prototype.hasOwnProperty.call(a, b); },
    z = function (a) {
      if (ea.test(Object.keys)) return Object.keys(a); let b = [],
        c; for (c in a)x(a, c) && b.push(c); return b;
    },
    A = function (a, b) { a = a || {}; for (const c in a)x(a, c) && (b[c] = a[c]); },
    na = function (a) { return function () { m.setTimeout(a, 0); }; },
    B = function (a, b) { if (!a) throw Error(b || ''); },
    C = u(m, 'gapi', {}); let D = function (a, b, c) { const d = new RegExp(`([#].*&|[#])${b}=([^&#]*)`, 'g'); b = new RegExp(`([?#].*&|[?#])${b}=([^&#]*)`, 'g'); if (a = a && (d.exec(a) || b.exec(a))) try { c = decodeURIComponent(a[2]); } catch (e) {} return c; },
      oa = new RegExp(/^/.source + /([a-zA-Z][-+.a-zA-Z0-9]*:)?/.source + /(\/\/[^\/?#]*)?/.source + /([^?#]*)?/.source + /(\?([^#]*))?/.source + /(#((#|[^#])*))?/.source + /$/.source),
      pa = /[\ud800-\udbff][\udc00-\udfff]|[^!-~]/g,
      ra = new RegExp(/(%([^0-9a-fA-F%]|[0-9a-fA-F]([^0-9a-fA-F%])?)?)*/.source + /%($|[^0-9a-fA-F]|[0-9a-fA-F]($|[^0-9a-fA-F]))/.source,
'g'),
      sa = /%([a-f]|[0-9a-fA-F][a-f])/g,
      ta = /^(https?|ftp|file|chrome-extension):$/i,
      E = function (a) {
        a = String(a); a = a.replace(pa, (a) => { try { return encodeURIComponent(a); } catch (f) { return encodeURIComponent(a.replace(/^[^%]+$/g, '\ufffd')); } }).replace(ra, a => a.replace(/%/g, '%25')).replace(sa, a => a.toUpperCase()); a = a.match(oa) || []; let b = v(),
          c = function (a) {
            return a.replace(/\\/g, '%5C').replace(/\^/g, '%5E').replace(/`/g, '%60').replace(/\{/g, '%7B').replace(/\|/g, '%7C').replace(/\}/g,
'%7D');
          },
          d = !!(a[1] || '').match(ta); b.v = c((a[1] || '') + (a[2] || '') + (a[3] || (a[2] && d ? '/' : ''))); d = function (a) { return c(a.replace(/\?/g, '%3F').replace(/\#/g, '%23')); }; b.query = a[5] ? [d(a[5])] : []; b.c = a[7] ? [d(a[7])] : []; return b;
      },
      ua = function (a) { return a.v + (a.query.length > 0 ? `?${a.query.join('&')}` : '') + (a.c.length > 0 ? `#${a.c.join('&')}` : ''); },
      va = function (a, b) { const c = []; if (a) for (const d in a) if (x(a, d) && a[d] != null) { const e = b ? b(a[d]) : a[d]; c.push(`${encodeURIComponent(d)}=${encodeURIComponent(e)}`); } return c; },
      wa = function (a, b, c, d) {
        a = E(a);
        a.query.push.apply(a.query, va(b, d)); a.c.push.apply(a.c, va(c, d)); return ua(a);
      },
      xa = new RegExp(`${/\/?\??#?/.source}(${/[\/?#]/i.source}|${/[\uD800-\uDBFF]/i.source}|${/%[c-f][0-9a-f](%[89ab][0-9a-f]){0,2}(%[89ab]?)?/i.source}|${/%[0-9a-f]?/i.source})$`, 'i'),
      ya = function (a, b) {
        let c = E(b); b = c.v; c.query.length && (b += `?${c.query.join('')}`); c.c.length && (b += `#${c.c.join('')}`); let d = ''; b.length > 2E3 && (c = b, b = b.substr(0, 2E3), b = b.replace(xa, ''), d = c.substr(b.length)); const e = a.createElement('div'); a = a.createElement('a');
        c = E(b); b = c.v; c.query.length && (b += `?${c.query.join('')}`); c.c.length && (b += `#${c.c.join('')}`); a.href = b; e.appendChild(a); e.innerHTML = e.innerHTML; b = String(e.firstChild.href); e.parentNode && e.parentNode.removeChild(e); c = E(b + d); b = c.v; c.query.length && (b += `?${c.query.join('')}`); c.c.length && (b += `#${c.c.join('')}`); return b;
      },
      za = /^https?:\/\/[^\/%\\?#\s]+\/[^\s]*$/i; var H = function (a, b, c, d) { if (m[`${c}EventListener`])m[`${c}EventListener`](a, b, !1); else if (m[`${d}tachEvent`])m[`${d}tachEvent`](`on${a}`, b); },
        Aa = function () { const a = p.readyState; return a === 'complete' || a === 'interactive' && navigator.userAgent.indexOf('MSIE') == -1; },
        Da = function (a) { const b = Ba; if (!Aa()) try { b(); } catch (c) {}Ca(a); },
        Ca = function (a) {
          if (Aa())a(); else {
            let b = !1,
              c = function () { if (!b) return b = !0, a.apply(this, arguments); }; m.addEventListener ? (m.addEventListener('load', c, !1), m.addEventListener('DOMContentLoaded', c, !1)) : m.attachEvent &&
(m.attachEvent('onreadystatechange', function () { Aa() && c.apply(this, arguments); }), m.attachEvent('onload', c));
          }
        },
        Ea = function (a) { for (;a.firstChild;)a.removeChild(a.firstChild); },
        Fa = { button: !0, div: !0, span: !0 }; let I; I = u(m, '___jsl', v()); u(I, 'I', 0); u(I, 'hel', 10); let J = function (a) { return I.dpo ? I.h : D(a, 'jsh', I.h); },
          Ga = function (a) { const b = u(I, 'sws', []); b.push(...a); },
          Ha = function (a) { return u(I, 'watt', v())[a]; },
          Ia = function (a) { const b = u(I, 'PQ', []); I.PQ = []; const c = b.length; if (c === 0)a(); else for (var d = 0, e = function () { ++d === c && a(); }, f = 0; f < c; f++)b[f](e); },
          Ja = function (a) { return u(u(I, 'H', v()), a, v()); }; let K = u(I, 'perf', v()),
            Ka = u(K, 'g', v()),
            La = u(K, 'i', v()); u(K, 'r', []); v(); v(); var Ma = function (a, b, c) { const d = K.r; typeof d === 'function' ? d(a, b, c) : d.push([a, b, c]); },
              L = function (a, b, c) { Ka[a] = !b && Ka[a] || c || (new Date()).getTime(); Ma(a); },
              Oa = function (a, b, c) { b && b.length > 0 && (b = Na(b), c && c.length > 0 && (b += `___${Na(c)}`), b.length > 28 && (b = b.substr(0, 28) + (b.length - 28)), c = b, b = u(La, '_p', v()), u(b, c, v())[a] = (new Date()).getTime(), Ma(a, '_p', c)); },
              Na = function (a) { return a.join('__').replace(/\./g, '_').replace(/\-/g, '_').replace(/\,/g, '_'); }; let Pa = v(),
                M = [],
                N = function (a) { throw Error(`Bad hint${a ? `: ${a}` : ''}`); }; M.push(['jsl', function (a) { for (var b in a) if (x(a, b)) { const c = a[b]; typeof c === 'object' ? I[b] = u(I, b, []).concat(c) : u(I, b, c); } if (b = a.u)a = u(I, 'us', []), a.push(b), (b = /^https:(.*)$/.exec(b)) && a.push(`http:${b[1]}`); }]); var Qa = /^(\/[a-zA-Z0-9_\-]+)+$/,
                  Ra = [/\/amp\//, /\/amp$/, /^\/amp$/],
                  Sa = /^[a-zA-Z0-9\-_\.,!]+$/,
                  Ta = /^gapi\.loaded_[0-9]+$/,
                  Ua = /^[a-zA-Z0-9,._-]+$/,
                  Ya = function (a, b, c, d) {
                    let e = a.split(';'),
                      f = e.shift(),
                      g = Pa[f],
                      h = null; g ? h = g(e, b, c, d) : N(`no hint processor for: ${f}`); h || N('failed to generate load url'); b = h; c = b.match(Va); (d = b.match(Wa)) && d.length === 1 && Xa.test(b) && c && c.length === 1 || N(`failed sanity: ${a}`); return h;
                  },
                  ab = function (a, b, c, d) {
                    a = Za(a); Ta.test(c) || N('invalid_callback'); b = $a(b); d = d && d.length ? $a(d) : null; const e =
function (a) { return encodeURIComponent(a).replace(/%2C/g, ','); }; return [encodeURIComponent(a.Z).replace(/%2C/g, ',').replace(/%2F/g, '/'), '/k=', e(a.version), '/m=', e(b), d ? `/exm=${e(d)}` : '', '/rt=j/sv=1/d=1/ed=1', a.J ? `/am=${e(a.J)}` : '', a.S ? `/rs=${e(a.S)}` : '', a.U ? `/t=${e(a.U)}` : '', '/cb=', e(c)].join('');
                  },
                  Za = function (a) {
                    a.charAt(0) !== '/' && N('relative path'); for (var b = a.substring(1).split('/'), c = []; b.length;) {
                      a = b.shift(); if (!a.length || a.indexOf('.') == 0)N('empty/relative directory'); else if (a.indexOf('=') > 0) {
                        b.unshift(a);
                        break;
                      }c.push(a);
                    }a = {}; for (var d = 0, e = b.length; d < e; ++d) {
                      let f = b[d].split('='),
                        g = decodeURIComponent(f[0]),
                        h = decodeURIComponent(f[1]); f.length == 2 && g && h && (a[g] = a[g] || h);
                    }b = `/${c.join('/')}`; Qa.test(b) || N('invalid_prefix'); c = 0; for (d = Ra.length; c < d; ++c)Ra[c].test(b) && N('invalid_prefix'); c = bb(a, 'k', !0); d = bb(a, 'am'); e = bb(a, 'rs'); a = bb(a, 't'); return { Z: b, version: c, J: d, S: e, U: a };
                  },
                  $a = function (a) { for (var b = [], c = 0, d = a.length; c < d; ++c) { const e = a[c].replace(/\./g, '_').replace(/-/g, '_'); Ua.test(e) && b.push(e); } return b.join(','); },
                  bb = function (a, b, c) { a = a[b]; !a && c && N(`missing: ${b}`); if (a) { if (Sa.test(a)) return a; N(`invalid: ${b}`); } return null; },
                  Xa = /^https?:\/\/[a-z0-9_.-]+\.google\.com(:\d+)?\/[a-zA-Z0-9_.,!=\-\/]+$/,
                  Wa = /\/cb=/g,
                  Va = /\/\//g,
                  cb = function () { const a = J(r.href); if (!a) throw Error('Bad hint'); return a; }; Pa.m = function (a, b, c, d) { (a = a[0]) || N('missing_hint'); return `https://apis.google.com${ab(a, b, c, d)}`; }; var O = decodeURI('%73cript'),
                    db = /^[-+_0-9\/A-Za-z]+={0,2}$/,
                    eb = function (a, b) { for (var c = [], d = 0; d < a.length; ++d) { const e = a[d]; e && fa.call(b, e) < 0 && c.push(e); } return c; },
                    fb = function () {
                      let a = I.nonce; if (void 0 !== a) return a && a === String(a) && a.match(db) ? a : I.nonce = null; const b = u(I, 'us', []); if (!b || !b.length) return I.nonce = null; for (let c = p.getElementsByTagName(O), d = 0, e = c.length; d < e; ++d) {
                        const f = c[d]; if (f.src && (a = String(f.nonce || f.getAttribute('nonce') || '') || null)) {
                          for (var g = 0, h = b.length; g < h && b[g] !== f.src; ++g);if (g !== h &&
a && a === String(a) && a.match(db)) return I.nonce = a;
                        }
                      } return null;
                    },
                    hb = function (a) {
                      if (p.readyState != 'loading')gb(a); else {
                        let b = fb(),
                          c = ''; b !== null && (c = ` nonce="${b}"`); p.write(`<${O} src="${encodeURI(a)}"${c}></${O}>`);
                      }
                    },
                    gb = function (a) { const b = p.createElement(O); b.setAttribute('src', a); a = fb(); a !== null && b.setAttribute('nonce', a); b.async = 'true'; (a = p.getElementsByTagName(O)[0]) ? a.parentNode.insertBefore(b, a) : (p.head || p.body || p.documentElement).appendChild(b); },
                    ib = function (a, b) {
                      const c = b && b._c; if (c) {
                        for (let d =
0; d < M.length; d++) {
                          let e = M[d][0],
                            f = M[d][1]; f && x(c, e) && f(c[e], a, b);
                        }
                      }
                    },
                    kb = function (a, b, c) { jb(() => { let c = b === J(r.href) ? u(C, '_', v()) : v(); c = u(Ja(b), '_', c); a(c); }, c); },
                    P = function (a, b) {
                      let c = b || {}; typeof b === 'function' && (c = {}, c.callback = b); ib(a, c); b = a ? a.split(':') : []; let d = c.h || cb(),
                        e = u(I, 'ah', v()); if (e['::'] && b.length) {
                          a = []; for (let f = null; f = b.shift();) {
                            var g = f.split('.'),
                              g = e[f] || e[g[1] && `ns:${g[0]}` || ''] || d,
                              h = a.length && a[a.length - 1] || null,
                              k = h; h && h.hint == g || (k = { hint: g, M: [] }, a.push(k)); k.M.push(f);
                          } let l = a.length;
                          if (l > 1) { const n = c.callback; n && (c.callback = function () { --l == 0 && n(); }); } for (;b = a.shift();)lb(b.M, c, b.hint);
                        } else lb(b || [], c, d);
                    },
                    lb = function (a, b, c) {
                      a = ga(a) || []; var d = b.callback,
                        e = b.config,
                        f = b.timeout,
                        g = b.ontimeout,
                        h = b.onerror,
                        k = void 0; typeof h === 'function' && (k = h); let l = null,
                          n = !1; if (f && !g || !f && g) throw 'Timeout requires both the timeout parameter and ontimeout parameter to be set'; var h = u(Ja(c), 'r', []).sort(),
                            w = u(Ja(c), 'L', []).sort(),
                            q = [].concat(h),
                            y = function (a, b) { if (n) return 0; m.clearTimeout(l); w.push(...t); const d = ((C || {}).config || {}).update; d ? d(e) : e && u(I, 'cu', []).push(e); if (b) { Oa('me0', a, q); try { kb(b, c, k); } finally { Oa('me1', a, q); } } return 1; }; f > 0 && (l = m.setTimeout(() => { n = !0; g(); }, f)); var t = eb(a, w); if (t.length) {
                              var t = eb(a, h),
                                F = u(I, 'CP', []),
                                G = F.length; F[G] = function (a) {
                                  if (!a) return 0; Oa('ml1', t, q); let b = function (b) { F[G] = null; y(t, a) && Ia(() => { d && d(); b(); }); },
                                    c = function () { const a = F[G + 1]; a && a(); }; G > 0 && F[G - 1] ? F[G] = function () { b(c); } : b(c);
                                }; if (t.length) {
                                  const qa = `loaded_${I.I++}`; C[qa] = function (a) { F[G](a); C[qa] = null; };
                                  a = Ya(c, t, `gapi.${qa}`, h); h.push(...t); Oa('ml0', t, q); b.sync || m.___gapisync ? hb(a) : gb(a);
                                } else F[G](da);
                            } else y(t) && d && d();
                    }; var jb = function (a, b) { if (I.hee && I.hel > 0) try { return a(); } catch (c) { b && b(c), I.hel--, P('debug_error', () => { try { window.___jsl.hefn(c); } catch (d) { throw c; } }); } else try { return a(); } catch (c) { throw b && b(c), c; } }; C.load = function (a, b) { return jb(() => P(a, b)); }; var Q = function (a) { const b = window.___jsl = window.___jsl || {}; b[a] = b[a] || []; return b[a]; },
                      R = function (a) { const b = window.___jsl = window.___jsl || {}; b.cfg = !a && b.cfg || {}; return b.cfg; },
                      mb = function (a) { return typeof a === 'object' && /\[native code\]/.test(a.push); },
                      S = function (a, b) { if (b) for (const c in b)b.hasOwnProperty(c) && (a[c] && b[c] && typeof a[c] === 'object' && typeof b[c] === 'object' && !mb(a[c]) && !mb(b[c]) ? S(a[c], b[c]) : b[c] && typeof b[c] === 'object' ? (a[c] = mb(b[c]) ? [] : {}, S(a[c], b[c])) : a[c] = b[c]); },
                      nb = function (a) {
                        if (a && !/^\s+$/.test(a)) {
                          for (;a.charCodeAt(a.length - 1) ==
0;)a = a.substring(0, a.length - 1); try { var b = window.JSON.parse(a); } catch (c) {} if (typeof b === 'object') return b; try { b = (new Function(`return (${a}\n)`))(); } catch (c) {} if (typeof b === 'object') return b; try { b = (new Function(`return ({${a}\n})`))(); } catch (c) {} return typeof b === 'object' ? b : {};
                        }
                      },
                      ob = function (a) {
                        R(!0); var b = window.___gcfg,
                          c = Q('cu'); if (b && b !== window.___gu) { var d = {}; S(d, b); c.push(d); window.___gu = b; }d = Q('cu'); var e = document.scripts || document.getElementsByTagName('script') || [],
                            b = [],
                            f =
[]; f.push(...Q('us')); for (var g = 0; g < e.length; ++g) for (let h = e[g], k = 0; k < f.length; ++k)h.src && h.src.indexOf(f[k]) == 0 && b.push(h); b.length == 0 && e.length > 0 && e[e.length - 1].src && b.push(e[e.length - 1]); for (e = 0; e < b.length; ++e)b[e].getAttribute('gapi_processed') || (b[e].setAttribute('gapi_processed', !0), (f = b[e]) ? (g = f.nodeType, f = g == 3 || g == 4 ? f.nodeValue : f.textContent || f.innerText || f.innerHTML || '') : f = void 0, (f = nb(f)) && d.push(f)); a && (d = {}, S(d, a), c.push(d)); b = Q('cd'); a = 0; for (d = b.length; a < d; ++a)S(R(), b[a]); b = Q('ci');
                        a = 0; for (d = b.length; a < d; ++a)S(R(), b[a]); a = 0; for (d = c.length; a < d; ++a)S(R(), c[a]);
                      },
                      T = function (a) { if (!a) return R(); a = a.split('/'); for (var b = R(), c = 0, d = a.length; b && typeof b === 'object' && c < d; ++c)b = b[a[c]]; return c === a.length && void 0 !== b ? b : void 0; },
                      pb = function (a, b) { let c = a; if (typeof a === 'string') { var d = c = {}; a = a.split('/'); for (var e = 0, f = a.length; e < f - 1; ++e) var g = {}, d = d[a[e]] = g; d[a[e]] = b; }ob(c); }; const qb = function () { const a = window.__GOOGLEAPIS; a && (a.googleapis && !a['googleapis.config'] && (a['googleapis.config'] = a.googleapis), u(I, 'ci', []).push(a), window.__GOOGLEAPIS = void 0); }; let rb = { apppackagename: 1, callback: 1, clientid: 1, cookiepolicy: 1, openidrealm: -1, includegrantedscopes: -1, requestvisibleactions: 1, scope: 1 },
                        sb = !1,
                        tb = v(),
                        ub = function () {
                          if (!sb) {
                            for (var a = document.getElementsByTagName('meta'), b = 0; b < a.length; ++b) {
                              var c = a[b].name.toLowerCase(); if (c.lastIndexOf('google-signin-', 0) == 0) {
                                var c = c.substring(14),
                                  d = a[b].content; rb[c] && d && (tb[c] = d);
                              }
                            } if (window.self !== window.top) { var a = document.location.toString(); for (e in rb)rb[e] > 0 && (b = D(a, e, '')) && (tb[e] = b); }sb = !0;
                          } var e = v(); A(tb, e); return e;
                        },
                        vb = function (a) { return !!(a.clientid && a.scope && a.callback); }; let wb = window.console,
                          xb = function (a) { wb && wb.log && wb.log(a); }; var yb = function () { return !!I.oa; },
                            zb = function () {}; let U = u(I, 'rw', v()),
                              Ab = function (a) { for (const b in U)a(U[b]); },
                              Bb = function (a, b) { (a = U[a]) && a.state < b && (a.state = b); }; let Cb; let Db = /^https?:\/\/(?:\w|[\-\.])+\.google\.(?:\w|[\-:\.])+(?:\/[^\?\#]*)?\/u\/(\d)\//,
                                Eb = /^https?:\/\/(?:\w|[\-\.])+\.google\.(?:\w|[\-:\.])+(?:\/[^\?\#]*)?\/b\/(\d{10,21})\//,
                                Fb = function (a) {
                                  let b = T('googleapis.config/sessionIndex'); typeof b === 'string' && b.length > 254 && (b = null); b == null && (b = window.__X_GOOG_AUTHUSER); typeof b === 'string' && b.length > 254 && (b = null); if (b == null) { const c = window.google; c && (b = c.authuser); } typeof b === 'string' && b.length > 254 && (b = null); b == null && (a = a || window.location.href, b = D(a, 'authuser') ||
null, b == null && (b = (b = a.match(Db)) ? b[1] : null)); if (b == null) return null; b = String(b); b.length > 254 && (b = null); return b;
                                },
                                Gb = function (a) { let b = T('googleapis.config/sessionDelegate'); typeof b === 'string' && b.length > 21 && (b = null); b == null && (b = (a = (a || window.location.href).match(Eb)) ? a[1] : null); if (b == null) return null; b = String(b); b.length > 21 && (b = null); return b; }; const Hb = function () { this.i = -1; }; const V = function () { this.i = 64; this.b = []; this.C = []; this.V = []; this.w = []; this.w[0] = 128; for (let a = 1; a < this.i; ++a) this.w[a] = 0; this.A = this.l = 0; this.reset(); }; (function () { function a() {}a.prototype = Hb.prototype; V.fa = Hb.prototype; V.prototype = new a(); V.v = function (a, c, d) { for (var b = Array(arguments.length - 2), f = 2; f < arguments.length; f++)b[f - 2] = arguments[f]; return Hb.prototype[c].apply(a, b); }; }());
  V.prototype.reset = function () { this.b[0] = 1732584193; this.b[1] = 4023233417; this.b[2] = 2562383102; this.b[3] = 271733878; this.b[4] = 3285377520; this.A = this.l = 0; };
  const Ib = function (a, b, c) {
    c || (c = 0); const d = a.V; if (typeof b === 'string') for (var e = 0; e < 16; e++)d[e] = b.charCodeAt(c) << 24 | b.charCodeAt(c + 1) << 16 | b.charCodeAt(c + 2) << 8 | b.charCodeAt(c + 3), c += 4; else for (e = 0; e < 16; e++)d[e] = b[c] << 24 | b[c + 1] << 16 | b[c + 2] << 8 | b[c + 3], c += 4; for (e = 16; e < 80; e++) { var f = d[e - 3] ^ d[e - 8] ^ d[e - 14] ^ d[e - 16]; d[e] = (f << 1 | f >>> 31) & 4294967295; }b = a.b[0]; c = a.b[1]; for (var g = a.b[2], h = a.b[3], k = a.b[4], l, e = 0; e < 80; e++) {
      e < 40 ? e < 20 ? (f = h ^ c & (g ^ h), l = 1518500249) : (f = c ^ g ^ h, l = 1859775393) : e < 60 ? (f = c & g | h & (c | g), l = 2400959708) : (f = c ^ g ^ h,
l = 3395469782), f = (b << 5 | b >>> 27) + f + k + l + d[e] & 4294967295, k = h, h = g, g = (c << 30 | c >>> 2) & 4294967295, c = b, b = f;
    } a.b[0] = a.b[0] + b & 4294967295; a.b[1] = a.b[1] + c & 4294967295; a.b[2] = a.b[2] + g & 4294967295; a.b[3] = a.b[3] + h & 4294967295; a.b[4] = a.b[4] + k & 4294967295;
  };
  V.prototype.update = function (a, b) { if (a != null) { void 0 === b && (b = a.length); for (var c = b - this.i, d = 0, e = this.C, f = this.l; d < b;) { if (f == 0) for (;d <= c;)Ib(this, a, d), d += this.i; if (typeof a === 'string') for (;d < b;) { if (e[f] = a.charCodeAt(d), ++f, ++d, f == this.i) { Ib(this, e); f = 0; break; } } else for (;d < b;) if (e[f] = a[d], ++f, ++d, f == this.i) { Ib(this, e); f = 0; break; } } this.l = f; this.A += b; } };
  V.prototype.digest = function () {
    let a = [],
      b = 8 * this.A; this.l < 56 ? this.update(this.w, 56 - this.l) : this.update(this.w, this.i - (this.l - 56)); for (var c = this.i - 1; c >= 56; c--) this.C[c] = b & 255, b /= 256; Ib(this, this.C); for (c = b = 0; c < 5; c++) for (let d = 24; d >= 0; d -= 8)a[b] = this.b[c] >> d & 255, ++b; return a;
  }; const Jb = function () { this.G = new V(); }; Jb.prototype.reset = function () { this.G.reset(); }; var Kb = m.crypto,
    Lb = !1,
    Mb = 0,
    Nb = 0,
    Ob = 1,
    Pb = 0,
    Qb = '',
    Rb = function (a) {
      a = a || m.event; var b = a.screenX + a.clientX << 16,
        b = b + (a.screenY + a.clientY),
        b = (new Date()).getTime() % 1E6 * b; Ob = Ob * b % Pb; Mb > 0 && ++Nb == Mb && H('mousemove', Rb, 'remove', 'de');
    },
    Sb = function (a) { let b = new Jb(); a = unescape(encodeURIComponent(a)); for (var c = [], d = 0, e = a.length; d < e; ++d)c.push(a.charCodeAt(d)); b.G.update(c); b = b.G.digest(); a = ''; for (c = 0; c < b.length; c++)a += '0123456789ABCDEF'.charAt(Math.floor(b[c] / 16)) + '0123456789ABCDEF'.charAt(b[c] % 16); return a; },
    Lb = !!Kb &&
typeof Kb.getRandomValues === 'function'; Lb || (Pb = 1E6 * (screen.width * screen.width + screen.height), Qb = Sb(`${p.cookie}|${p.location}|${(new Date()).getTime()}|${Math.random()}`), Mb = T('random/maxObserveMousemove') || 0, Mb != 0 && H('mousemove', Rb, 'add', 'at')); let Tb = function () {
    var a = Ob,
      a = a + parseInt(Qb.substr(0, 20), 16); Qb = Sb(Qb); return a / (Pb + Math.pow(16, 20));
  },
  Ub = function () { const a = new m.Uint32Array(1); Kb.getRandomValues(a); return Number(`0.${a[0]}`); }; let Vb = function () { let a = I.onl; if (!a) { a = v(); I.onl = a; const b = v(); a.e = function (a) { const c = b[a]; c && (delete b[a], c()); }; a.a = function (a, d) { b[a] = d; }; a.r = function (a) { delete b[a]; }; } return a; },
    Wb = function (a, b) { b = b.onload; return typeof b === 'function' ? (Vb().a(a, b), b) : null; },
    Xb = function (a) { B(/^\w+$/.test(a), `Unsupported id - ${a}`); Vb(); return `onload="window.___jsl.onl.e(&#34;${a}&#34;)"`; },
    Yb = function (a) { Vb().r(a); }; let Zb = { allowtransparency: 'true', frameborder: '0', hspace: '0', marginheight: '0', marginwidth: '0', scrolling: 'no', style: '', tabindex: '0', vspace: '0', width: '100%' },
      $b = { allowtransparency: !0, onload: !0 },
      ac = 0,
      bc = function (a) { B(!a || za.test(a), `Illegal url for new iframe - ${a}`); },
      cc = function (a, b, c, d, e) {
        bc(c.src); let f,
          g = Wb(d, c),
          h = g ? Xb(d) : ''; try { document.all && (f = a.createElement(`<iframe frameborder="${ma(String(c.frameborder))}" scrolling="${ma(String(c.scrolling))}" ${h} name="${ma(String(c.name))}"/>`)); } catch (l) {} finally {
            f ||
(f = a.createElement('iframe'), g && (f.onload = function () { f.onload = null; g.call(this); }, Yb(d)));
          }f.setAttribute('ng-non-bindable', ''); for (var k in c)a = c[k], k === 'style' && typeof a === 'object' ? A(a, f.style) : $b[k] || f.setAttribute(k, String(a)); (k = e && e.beforeNode || null) || e && e.dontclear || Ea(b); b.insertBefore(f, k); f = k ? k.previousSibling : b.lastChild; c.allowtransparency && (f.allowTransparency = !0); return f;
      }; let dc = /^:[\w]+$/,
        ec = /:([a-zA-Z_]+):/g,
        fc = function () {
          let a = Fb() || '0',
            b = Gb(); let c = Fb(void 0) || a; let d = Gb(void 0),
              e = ''; c && (e += `u/${encodeURIComponent(String(c))}/`); d && (e += `b/${encodeURIComponent(String(d))}/`); c = e || null; (e = (d = !1 === T('isLoggedIn')) ? '_/im/' : '') && (c = ''); let f = T('iframes/:socialhost:'),
                g = T('iframes/:im_socialhost:'); return Cb = { socialhost: f, ctx_socialhost: d ? g : f, session_index: a, session_delegate: b, session_prefix: c, im_prefix: e };
        },
        gc = function (a, b) { return fc()[b] || ''; },
        hc = function (a) {
          return function (b,
            c) { return a ? fc()[c] || a[c] || '' : fc()[c] || ''; };
        }; var ic = { '\b': '\\b', '\t': '\\t', '\n': '\\n', '\f': '\\f', '\r': '\\r', '"': '\\"', '\\': '\\\\' },
          jc = function (a) {
            let b; let c = /[\"\\\x00-\x1f\x7f-\x9f]/g; if (void 0 !== a) {
              switch (typeof a) {
                case 'string':return c.test(a) ? `"${a.replace(c, (a) => { let b = ic[a]; if (b) return b; b = a.charCodeAt(); return `\\u00${Math.floor(b / 16).toString(16)}${(b % 16).toString(16)}`; })}"` : `"${a}"`; case 'number':return isFinite(a) ? String(a) : 'null'; case 'boolean':case 'null':return String(a); case 'object':if (!a) return 'null'; c = []; if (typeof a.length ===
'number' && !a.propertyIsEnumerable('length')) { var d = a.length; for (b = 0; b < d; b += 1)c.push(jc(a[b]) || 'null'); return `[${c.join(',')}]`; } for (b in a)!/___$/.test(b) && x(a, b) && typeof b === 'string' && (d = jc(a[b])) && c.push(`${jc(b)}:${d}`); return `{${c.join(',')}}`;
              } return '';
            }
          },
          kc = function (a) { if (!a) return !1; if (/^[\],:{}\s]*$/.test(a.replace(/\\["\\\/b-u]/g, '@').replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']').replace(/(?:^|:|,)(?:\s*\[)+/g, ''))) try { return eval(`(${a})`); } catch (b) {} return !1; },
          lc = !1; try { lc = !!window.JSON && window.JSON.stringify(['a']) === '["a"]' && window.JSON.parse('["a"]')[0] === 'a'; } catch (a) {} let mc = function (a) { try { return window.JSON.parse(a); } catch (b) { return !1; } },
            nc = lc ? window.JSON.stringify : jc,
            oc = lc ? mc : kc; let pc = function (a) { let b; a.match(/^https?%3A/i) && (b = decodeURIComponent(a)); return ya(document, b || a); },
              qc = function (a) {
                a = a || 'canonical'; for (let b = document.getElementsByTagName('link'), c = 0, d = b.length; c < d; c++) {
                  let e = b[c],
                    f = e.getAttribute('rel'); if (f && f.toLowerCase() == a && (e = e.getAttribute('href')) && (e = pc(e)) && e.match(/^https?:\/\/[\w\-\_\.]+/i) != null) return e;
                } return window.location.href;
              }; var rc = { se: '0' },
                sc = { post: !0 },
                tc = { style: 'position:absolute;top:-10000px;width:450px;margin:0px;border-style:none' },
                uc = 'onPlusOne _ready _close _open _resizeMe _renderstart oncircled drefresh erefresh'.split(' '),
                vc = u(I, 'WI', v()),
                wc = function (a, b, c) {
                  let d; let e = {}; let f = d = a; a == 'plus' && b.action && (d = `${a}_${b.action}`, f = `${a}/${b.action}`); (d = T(`iframes/${d}/url`)) || (d = `:im_socialhost:/:session_prefix::im_prefix:_/widget/render/${f}?usegapi=1`); for (var g in rc)e[g] = `${g}/${b[g] || rc[g]}/`; e = ya(p, d.replace(ec,
hc(e))); g = `iframes/${a}/params/`; f = {}; A(b, f); (d = T('lang') || T('gwidget/lang')) && (f.hl = d); sc[a] || (f.origin = window.location.origin || `${window.location.protocol}//${window.location.host}`); f.exp = T(`${g}exp`); if (g = T(`${g}location`)) for (d = 0; d < g.length; d++) { const h = g[d]; f[h] = m.location[h]; } switch (a) {
  case 'plus':case 'follow':g = f.href; d = b.action ? void 0 : 'publisher'; g = (g = typeof g === 'string' ? g : void 0) ? pc(g) : qc(d); f.url = g; delete f.href; break; case 'plusone':g = (g = b.href) ? pc(g) : qc(); f.url = g; g = b.db; d = T(); g == null && d && (g = d.db,
g == null && (g = d.gwidget && d.gwidget.db)); f.db = g || void 0; g = b.ecp; d = T(); g == null && d && (g = d.ecp, g == null && (g = d.gwidget && d.gwidget.ecp)); f.ecp = g || void 0; delete f.href; break; case 'signin':f.url = qc();
}I.ILI && (f.iloader = '1'); delete f['data-onload']; delete f.rd; for (var k in rc)f[k] && delete f[k]; f.gsrc = T('iframes/:source:'); k = T('inline/css'); typeof k !== 'undefined' && c > 0 && k >= c && (f.ic = '1'); k = /^#|^fr-/; c = {}; for (var l in f)x(f, l) && k.test(l) && (c[l.replace(k, '')] = f[l], delete f[l]); l = T(`iframes/${a}/params/si`) == 'q' ? f :
c; k = ub(); for (var n in k)!x(k, n) || x(f, n) || x(c, n) || (l[n] = k[n]); n = [].concat(uc); (l = T(`iframes/${a}/methods`)) && typeof l === 'object' && ea.test(l.push) && (n = n.concat(l)); for (const w in b)x(b, w) && /^on/.test(w) && (a != 'plus' || w != 'onconnect') && (n.push(w), delete f[w]); delete f.callback; c._methods = n.join(','); return wa(e, f, c);
                },
                xc = ['style', 'data-gapiscan'],
                zc = function (a) {
                  for (var b = v(), c = a.nodeName.toLowerCase().indexOf('g:') != 0, d = 0, e = a.attributes.length; d < e; d++) {
                    let f = a.attributes[d],
                      g = f.name,
                      h = f.value; fa.call(xc,
g) >= 0 || c && g.indexOf('data-') != 0 || h === 'null' || 'specified' in f && !f.specified || (c && (g = g.substr(5)), b[g.toLowerCase()] = h);
                  }a = a.style; (c = yc(a && a.height)) && (b.height = String(c)); (a = yc(a && a.width)) && (b.width = String(a)); return b;
                },
                yc = function (a) { let b = void 0; typeof a === 'number' ? b = a : typeof a === 'string' && (b = parseInt(a, 10)); return b; },
                Bc = function () {
                  const a = I.drw; Ab((b) => {
                    if (a !== b.id && b.state != 4 && b.type != 'share') {
                      let c = b.id,
                        d = b.type,
                        e = b.url; b = b.userParams; let f = p.getElementById(c); if (f) {
                          const g = wc(d, b, 0); g ? (f = f.parentNode,
e.replace(/\#.*/, '').replace(/(\?|&)ic=1/, '') !== g.replace(/\#.*/, '').replace(/(\?|&)ic=1/, '') && (b.dontclear = !0, b.rd = !0, b.ri = !0, b.type = d, Ac(f, b), (d = U[f.lastChild.id]) && (d.oid = c), Bb(c, 4))) : delete U[c];
                        } else delete U[c];
                    }
                  });
                }; let W,
                  X,
                  Y,
                  Cc,
                  Dc,
                  Ec = /(?:^|\s)g-((\S)*)(?:$|\s)/,
                  Fc = { plusone: !0, autocomplete: !0, profile: !0, signin: !0, signin2: !0 }; W = u(I, 'SW', v()); X = u(I, 'SA', v()); Y = u(I, 'SM', v()); Cc = u(I, 'FW', []); Dc = null;
  var Hc = function (a, b) { Gc(void 0, !1, a, b); },
    Gc = function (a, b, c, d) {
      L('ps0', !0); c = (typeof c === 'string' ? document.getElementById(c) : c) || p; let e = p.documentMode; if (c.querySelectorAll && (!e || e > 8)) { e = d ? [d] : z(W).concat(z(X)).concat(z(Y)); for (var f = [], g = 0; g < e.length; g++) { var h = e[g]; f.push(`.g-${h}`, `g\\:${h}`); }e = c.querySelectorAll(f.join(',')); } else e = c.getElementsByTagName('*'); c = v(); for (f = 0; f < e.length; f++) {
        g = e[f]; var k = g,
          h = d,
          l = k.nodeName.toLowerCase(),
          n = void 0; k.getAttribute('data-gapiscan') ? h = null : (l.indexOf('g:') == 0 ?
n = l.substr(2) : (k = (k = String(k.className || k.getAttribute('class'))) && Ec.exec(k)) && (n = k[1]), h = !n || !(W[n] || X[n] || Y[n]) || h && n !== h ? null : n); h && (Fc[h] || g.nodeName.toLowerCase().indexOf('g:') == 0 || z(zc(g)).length != 0) && (g.setAttribute('data-gapiscan', !0), u(c, h, []).push(g));
      } if (b) for (var w in c) for (b = c[w], d = 0; d < b.length; d++)b[d].setAttribute('data-onload', !0); for (var q in c)Cc.push(q); L('ps1', !0); if ((w = Cc.join(':')) || a) try { C.load(w, a); } catch (t) { xb(t); return; } if (Ic(Dc || {})) {
        for (var y in c) {
          a = c[y]; q = 0; for (b = a.length; q <
b; q++)a[q].removeAttribute('data-gapiscan'); Jc(y);
        }
      } else { d = []; for (y in c) for (a = c[y], q = 0, b = a.length; q < b; q++)e = a[q], Kc(y, e, zc(e), d, b); Lc(w, d); }
    },
    Mc = function (a) { const b = u(C, a, {}); b.go || (b.go = function (b) { return Hc(b, a); }, b.render = function (b, d) { d = d || {}; d.type = a; return Ac(b, d); }); },
    Nc = function (a) { W[a] = !0; },
    Oc = function (a) { X[a] = !0; },
    Pc = function (a) { Y[a] = !0; }; var Jc = function (a, b) {
        let c = Ha(a); b && c ? (c(b), (c = b.iframeNode) && c.setAttribute('data-gapiattached', !0)) : C.load(a, () => {
          let c = Ha(a),
            e = b && b.iframeNode,
            f = b && b.userParams; e && c ? (c(b), e.setAttribute('data-gapiattached', !0)) : (c = C[a].go, a == 'signin2' ? c(e, f) : c(e && e.parentNode, f));
        });
      },
      Ic = function () { return !1; },
      Lc = function () {},
      Kc = function (a, b, c, d, e, f, g) {
        switch (Qc(b, a, f)) {
          case 0:a = Y[a] ? `${a}_annotation` : a; d = {}; d.iframeNode = b; d.userParams = c; Jc(a, d); break; case 1:if (b.parentNode) {
            for (var h in c) {
              if (f = x(c, h)) {
                f = c[h],
f = !!f && typeof f === 'object' && (!f.toString || f.toString === Object.prototype.toString || f.toString === Array.prototype.toString);
              } if (f) try { c[h] = nc(c[h]); } catch (F) { delete c[h]; }
            }f = !0; c.dontclear && (f = !1); delete c.dontclear; zb(); h = wc(a, c, e); e = g || {}; e.allowPost = 1; e.attributes = tc; e.dontclear = !f; g = {}; g.userParams = c; g.url = h; g.type = a; if (c.rd) var k = b; else k = document.createElement('div'), b.setAttribute('data-gapistub', !0), k.style.cssText = 'position:absolute;width:450px;left:-10000px;', b.parentNode.insertBefore(k, b); g.siteElement =
k; k.id || (b = k, u(vc, a, 0), f = `___${a}_${vc[a]++}`, b.id = f); b = v(); b['>type'] = a; A(c, b); f = h; c = k; h = e || {}; b = h.attributes || {}; B(!h.allowPost || !b.onload, 'onload is not supported by post iframe'); e = b = f; dc.test(b) && (e = T(`iframes/${e.substring(1)}/url`), B(!!e, `Unknown iframe url config for - ${b}`)); f = ya(p, e.replace(ec, gc)); b = c.ownerDocument || p; k = 0; do e = h.id || ['I', ac++, '_', (new Date()).getTime()].join(''); while (b.getElementById(e) && ++k < 5);B(k < 5, 'Error creating iframe id'); k = {}; let l = {}; b.documentMode && b.documentMode < 9 &&
(k.hostiemode = b.documentMode); A(h.queryParams || {}, k); A(h.fragmentParams || {}, l); var n = h.connectWithQueryParams ? k : l,
  w = h.pfname,
  q = v(); q.id = e; q.parent = `${b.location.protocol}//${b.location.host}`; var y = D(b.location.href, 'parent'),
    w = w || ''; !w && y && (y = D(b.location.href, 'id', ''), w = D(b.location.href, 'pfname', ''), w = y ? `${w}/${y}` : ''); q.pfname = w; A(q, n); (q = D(f, 'rpctoken') || k.rpctoken || l.rpctoken) || (q = n.rpctoken = h.rpctoken || String(Math.round(1E8 * (Lb ? Ub() : Tb())))); h.rpctoken = q; q = b.location.href; n = v(); (y = D(q, '_bsh', I.bsh)) &&
(n._bsh = y); (q = J(q)) && (n.jsh = q); h.hintInFragment ? A(n, l) : A(n, k); f = wa(f, k, l, h.paramsSerializer); l = v(); A(Zb, l); A(h.attributes, l); l.name = l.id = e; l.src = f; h.eurl = f; if ((h || {}).allowPost && f.length > 2E3) {
  k = E(f); l.src = ''; l['data-postorigin'] = f; f = cc(b, c, l, e); if (navigator.userAgent.indexOf('WebKit') != -1) { var t = f.contentWindow.document; t.open(); l = t.createElement('div'); n = {}; q = `${e}_inner`; n.name = q; n.src = ''; n.style = 'display:none'; cc(b, l, n, q, h); }l = (h = k.query[0]) ? h.split('&') : []; h = []; for (n = 0; n < l.length; n++) {
    q = l[n].split('=',
2), h.push([decodeURIComponent(q[0]), decodeURIComponent(q[1])]);
  }k.query = []; l = ua(k); B(za.test(l), `Invalid URL: ${l}`); k = b.createElement('form'); k.action = l; k.method = 'POST'; k.target = e; k.style.display = 'none'; for (e = 0; e < h.length; e++)l = b.createElement('input'), l.type = 'hidden', l.name = h[e][0], l.value = h[e][1], k.appendChild(l); c.appendChild(k); k.submit(); k.parentNode.removeChild(k); t && t.close(); t = f;
} else t = cc(b, c, l, e, h); g.iframeNode = t; g.id = t.getAttribute('id'); t = g.id; c = v(); c.id = t; c.userParams = g.userParams; c.url =
g.url; c.type = g.type; c.state = 1; U[t] = c; t = g;
          } else t = null; t && ((g = t.id) && d.push(g), Jc(a, t));
        }
      },
      Qc = function (a, b, c) { if (a && a.nodeType === 1 && b) { if (c) return 1; if (Y[b]) { if (Fa[a.nodeName.toLowerCase()]) return (a = a.innerHTML) && a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, '') ? 0 : 1; } else { if (X[b]) return 0; if (W[b]) return 1; } } return null; },
      Ac = function (a, b) {
        const c = b.type; delete b.type; const d = (typeof a === 'string' ? document.getElementById(a) : a) || void 0; if (d) {
          a = {}; for (var e in b)x(b, e) && (a[e.toLowerCase()] = b[e]); a.rd = 1; (b = !!a.ri) && delete a.ri;
          e = []; Kc(c, d, a, e, 0, b, void 0); Lc(c, e);
        } else xb(`gapi.${c}.render: missing element ${typeof a}` === 'string' ? a : '');
      }; u(C, 'platform', {}).go = Hc; var Ic = function (a) { for (var b = ['_c', 'jsl', 'h'], c = 0; c < b.length && a; c++)a = a[b[c]]; b = J(r.href); return !a || a.indexOf('n;') != 0 && b.indexOf('n;') != 0 && a !== b; },
        Lc = function (a, b) { Rc(a, b); },
        Ba = function (a) { Gc(a, !0); },
        Sc = function (a, b) { b = b || []; for (let c = 0; c < b.length; ++c)a(b[c]); for (a = 0; a < b.length; a++)Mc(b[a]); };
  M.push(['platform', function (a, b, c) { Dc = c; b && Cc.push(b); Sc(Nc, a); Sc(Oc, c._c.annotation); Sc(Pc, c._c.bimodal); qb(); ob(); if (T('parsetags') != 'explicit') { Ga(a); vb(ub()) && !T('disableRealtimeCallback') && zb(); if (c && (a = c.callback)) { var d = na(a); delete c.callback; }Da(() => { Ba(d); }); } }]); C._pl = !0; var Tc = function (a) { a = (a = U[a]) ? a.oid : void 0; if (a) { const b = p.getElementById(a); b && b.parentNode.removeChild(b); delete U[a]; Tc(a); } }; var Uc = /^\{h\:'/,
    Vc = /^!_/,
    Wc = '',
    Rc = function (a, b) {
      function c() { H('message', d, 'remove', 'de'); } function d(d) {
        let f = d.data,
          h = d.origin; if (Xc(f, b)) { const k = e; e = !1; k && L('rqe'); Yc(a, () => { k && L('rqd'); c(); for (let a = u(I, 'RPMQ', []), b = 0; b < a.length; b++)a[b]({ data: f, origin: h }); }); }
      } if (b.length !== 0) { Wc = D(r.href, 'pfname', ''); var e = !0; H('message', d, 'add', 'at'); P(a, c); }
    },
    Xc = function (a, b) {
      a = String(a); if (Uc.test(a)) return !0; var c = !1; Vc.test(a) && (c = !0, a = a.substr(2)); if (!/^\{/.test(a)) return !1; var d = oc(a); if (!d) return !1;
      a = d.f; if (d.s && a && fa.call(b, a) != -1) {
        if (d.s === '_renderstart' || d.s === `${Wc}/${a}::_renderstart`) {
          if (d = d.a && d.a[c ? 0 : 1], b = p.getElementById(a), Bb(a, 2), d && b && d.width && d.height) {
            a: {
              var c = b.parentNode,
                e; a = d || {}; if (yb() && (e = b.id)) { d = (d = U[e]) ? d.state : void 0; if (d === 1 || d === 4) break a; Tc(e); }(d = c.nextSibling) && d.getAttribute && d.getAttribute('data-gapistub') && (c.parentNode.removeChild(d), c.style.cssText = ''); var d = a.width,
                  f = a.height,
                  g = c.style; g.textIndent = '0'; g.margin = '0'; g.padding = '0'; g.background = 'transparent'; g.borderStyle =
'none'; g.cssFloat = 'none'; g.styleFloat = 'none'; g.lineHeight = 'normal'; g.fontSize = '1px'; g.verticalAlign = 'baseline'; c = c.style; c.display = 'inline-block'; g = b.style; g.position = 'static'; g.left = '0'; g.top = '0'; g.visibility = 'visible'; d && (c.width = g.width = `${d}px`); f && (c.height = g.height = `${f}px`); a.verticalAlign && (c.verticalAlign = a.verticalAlign); e && Bb(e, 3);
            }b['data-csi-wdt'] = (new Date()).getTime();
          }
        } return !0;
      } return !1;
    },
    Yc = function (a, b) { P(a, b); }; let Zc = function (a, b) { this.O = a; a = b || {}; this.Y = Number(a.maxAge) || 0; this.L = a.domain; this.P = a.path; this.$ = !!a.secure; },
      $c = /^[-+/_=.:|%&a-zA-Z0-9@]*$/,
      ad = /^[A-Z_][A-Z0-9_]{0,63}$/;
  Zc.prototype.write = function (a, b) { if (!ad.test(this.O)) throw 'Invalid cookie name'; if (!$c.test(a)) throw 'Invalid cookie value'; a = `${this.O}=${a}`; this.L && (a += `;domain=${this.L}`); this.P && (a += `;path=${this.P}`); b = typeof b === 'number' ? b : this.Y; if (b >= 0) { const c = new Date(); c.setSeconds(c.getSeconds() + b); a += `;expires=${c.toUTCString()}`; } this.$ && (a += ';secure'); document.cookie = a; return !0; }; Zc.iterate = function (a) {
    for (let b = document.cookie.split(/;\s*/), c = 0; c < b.length; ++c) {
      let d = b[c].split('='),
        e = d.shift(); a(e, d.join('='));
    }
  }; let bd = function (a) { this.X = a; },
    cd = {}; bd.prototype.write = function (a) { cd[this.X] = a; return !0; }; bd.iterate = function (a) { for (const b in cd)cd.hasOwnProperty(b) && a(b, cd[b]); }; let dd = window.location.protocol === 'https:',
      ed = dd || window.location.protocol === 'http:' ? Zc : bd,
      fd = function (a) {
        let b = a.substr(1),
          c = '',
          d = window.location.hostname; if (b !== '') { c = parseInt(b, 10); if (isNaN(c)) return null; b = d.split('.'); if (b.length < c - 1) return null; b.length == c - 1 && (d = `.${d}`); } else d = ''; return { g: a.charAt(0) == 'S', domain: d, j: c };
      },
      gd = function () {
        let a,
          b = null; ed.iterate((c, d) => { c.indexOf('G_AUTHUSER_') === 0 && (c = fd(c.substring(11)), !a || c.g && !a.g || c.g == a.g && c.j > a.j) && (a = c, b = d); }); return { W: a, B: b };
      }; let hd = function (a) { if (a.indexOf('GCSC') !== 0) return null; const b = { N: !1 }; a = a.substr(4); if (!a) return b; const c = a.charAt(0); a = a.substr(1); let d = a.lastIndexOf('_'); if (d == -1) return b; const e = fd(a.substr(d + 1)); if (e == null) return b; a = a.substring(0, d); if (a.charAt(0) !== '_') return b; d = c === 'E' && e.g; return !d && (c !== 'U' || e.g) || d && !dd ? b : { N: !0, g: d, ca: a.substr(1), domain: e.domain, j: e.j }; },
        id = function (a) { if (!a) return []; a = a.split('='); return a[1] ? a[1].split('|') : []; },
        jd = function (a) {
          a = a.split(':'); return { D: a[0].split('=')[1],
            ba: id(a[1]),
            ea: id(a[2]),
            da: id(a[3]) };
        },
        kd = function () {
          var a = gd(),
            b = a.W,
            a = a.B; if (a !== null) {
              let c; ed.iterate((a, d) => { (a = hd(a)) && a.N && a.g == b.g && a.j == b.j && (c = d); }); if (c) {
                var d = jd(c),
                  e = d && d.ba[Number(a)],
                  d = d && d.D; if (e) return { B: a, aa: e, D: d };
              }
            } return null;
        }; const Z = function (a) { this.K = a; }; Z.prototype.o = 0; Z.prototype.H = 2; Z.prototype.K = null; Z.prototype.F = !1; Z.prototype.T = function () { this.F || (this.o = 0, this.F = !0, this.R()); }; Z.prototype.R = function () { this.F && (this.K() ? this.o = this.H : this.o = Math.min(2 * (this.o || this.H), 120), window.setTimeout(ca(this.R, this), 1E3 * this.o)); }; for (let ld = 0; ld < 64; ++ld);var md = null,
          yb = function () { return I.oa = !0; },
          zb = function () { I.oa = !0; let a = kd(); (a = a && a.B) && pb('googleapis.config/sessionIndex', a); md || (md = u(I, 'ss', new Z(nd))); a = md; a.T && a.T(); },
          nd = function () {
            let a = kd(),
              b = a && a.aa || null,
              c = a && a.D; P('auth', { callback() {
                let a = m.gapi.auth,
                  e = { client_id: c, session_state: b }; a.checkSessionState(e, (b) => {
                    var c = e.session_state,
                      d = T('isLoggedIn'); b = T('debug/forceIm') ? !1 : c && b || !c && !b; if (d = d != b)pb('isLoggedIn', b), zb(), Bc(), b || ((b = a.signOut) ? b() : (b = a.setToken) && b(null)); b =
ub(); var f = T('savedUserState'),
  c = a._guss(b.cookiepolicy),
  f = f != c && typeof f !== 'undefined'; pb('savedUserState', c); (d || f) && vb(b) && !T('disableRealtimeCallback') && a._pimf(b, !0);
                  });
              } }); return !0;
          }; L('bs0', !0, window.gapi._bs); L('bs1', !0); delete window.gapi._bs;
}).call(this);
gapi.load('', { callback: window.triggerGoogleLoaded, _c: { jsl: { ci: { deviceType: 'desktop', 'oauth-flow': { authUrl: 'https://accounts.google.com/o/oauth2/auth', proxyUrl: 'https://accounts.google.com/o/oauth2/postmessageRelay', disableOpt: true, idpIframeUrl: 'https://accounts.google.com/o/oauth2/iframe', usegapi: false }, debug: { reportExceptionRate: 0.05, forceIm: false, rethrowException: false, host: 'https://apis.google.com' }, enableMultilogin: true, 'googleapis.config': { auth: { useFirstPartyAuthV2: true } }, isPlusUser: false, inline: { css: 1 }, disableRealtimeCallback: false, drive_share: { skipInitCommand: true }, csi: { rate: 0.01 }, client: { cors: false, batchPath: { translate: 'batch/translate' }, perApiBatch: false }, isLoggedIn: true, signInDeprecation: { rate: 0.0 }, include_granted_scopes: true, llang: 'en', iframes: { ytsubscribe: { url: 'https://www.youtube.com/subscribe_embed?usegapi\u003d1' }, plus_share: { params: { url: '' }, url: ':socialhost:/:session_prefix::se:_/+1/sharebutton?plusShare\u003dtrue\u0026usegapi\u003d1' }, ':source:': '3p', playemm: { url: 'https://play.google.com/work/embedded/search?usegapi\u003d1\u0026usegapi\u003d1' }, partnersbadge: { url: 'https://www.gstatic.com/partners/badge/templates/badge.html?usegapi\u003d1' }, dataconnector: { url: 'https://dataconnector.corp.google.com/:session_prefix:ui/widgetview?usegapi\u003d1' }, shortlists: { url: '' }, plus_followers: { params: { url: '' }, url: ':socialhost:/_/im/_/widget/render/plus/followers?usegapi\u003d1' }, post: { params: { url: '' }, url: ':socialhost:/:session_prefix::im_prefix:_/widget/render/post?usegapi\u003d1' }, signin: { params: { url: '' }, url: ':socialhost:/:session_prefix:_/widget/render/signin?usegapi\u003d1', methods: ['onauth'] }, donation: { url: 'https://onetoday.google.com/home/donationWidget?usegapi\u003d1' }, plusone: { params: { count: '', size: '', url: '' }, url: ':socialhost:/:session_prefix::se:_/+1/fastbutton?usegapi\u003d1' }, ':im_socialhost:': 'https://plus.googleapis.com', backdrop: { url: 'https://clients3.google.com/cast/chromecast/home/widget/backdrop?usegapi\u003d1' }, visibility: { params: { url: '' }, url: ':socialhost:/:session_prefix:_/widget/render/visibility?usegapi\u003d1' }, additnow: { url: 'https://apis.google.com/additnow/additnow.html?usegapi\u003d1', methods: ['launchurl'] }, ':signuphost:': 'https://plus.google.com', community: { url: ':ctx_socialhost:/:session_prefix::im_prefix:_/widget/render/community?usegapi\u003d1' }, plus: { url: ':socialhost:/:session_prefix:_/widget/render/badge?usegapi\u003d1' }, commentcount: { url: ':socialhost:/:session_prefix:_/widget/render/commentcount?usegapi\u003d1' }, zoomableimage: { url: 'https://ssl.gstatic.com/microscope/embed/' }, appfinder: { url: 'https://gsuite.google.com/:session_prefix:marketplace/appfinder?usegapi\u003d1' }, person: { url: ':socialhost:/:session_prefix:_/widget/render/person?usegapi\u003d1' }, savetodrive: { url: 'https://drive.google.com/savetodrivebutton?usegapi\u003d1', methods: ['save'] }, page: { url: ':socialhost:/:session_prefix:_/widget/render/page?usegapi\u003d1' }, card: { url: ':socialhost:/:session_prefix:_/hovercard/card' }, youtube: { params: { location: ['search', 'hash'] }, url: ':socialhost:/:session_prefix:_/widget/render/youtube?usegapi\u003d1', methods: ['scroll', 'openwindow'] }, plus_circle: { params: { url: '' }, url: ':socialhost:/:session_prefix::se:_/widget/plus/circle?usegapi\u003d1' }, rbr_s: { params: { url: '' }, url: ':socialhost:/:session_prefix::se:_/widget/render/recobarsimplescroller' }, udc_webconsentflow: { params: { url: '' }, url: 'https://myaccount.google.com/webconsent?usegapi\u003d1' }, savetoandroidpay: { url: 'https://androidpay.google.com/a/widget/save' }, blogger: { params: { location: ['search', 'hash'] }, url: ':socialhost:/:session_prefix:_/widget/render/blogger?usegapi\u003d1', methods: ['scroll', 'openwindow'] }, evwidget: { params: { url: '' }, url: ':socialhost:/:session_prefix:_/events/widget?usegapi\u003d1' }, surveyoptin: { url: 'https://www.google.com/shopping/customerreviews/optin?usegapi\u003d1' }, ':socialhost:': 'https://apis.google.com', hangout: { url: 'https://talkgadget.google.com/:session_prefix:talkgadget/_/widget' }, ':gplus_url:': 'https://plus.google.com', rbr_i: { params: { url: '' }, url: ':socialhost:/:session_prefix::se:_/widget/render/recobarinvitation' }, share: { url: ':socialhost:/:session_prefix::im_prefix:_/widget/render/share?usegapi\u003d1' }, comments: { params: { location: ['search', 'hash'] }, url: ':socialhost:/:session_prefix:_/widget/render/comments?usegapi\u003d1', methods: ['scroll', 'openwindow'] }, autocomplete: { params: { url: '' }, url: ':socialhost:/:session_prefix:_/widget/render/autocomplete' }, ratingbadge: { url: 'https://www.google.com/shopping/customerreviews/badge?usegapi\u003d1' }, appcirclepicker: { url: ':socialhost:/:session_prefix:_/widget/render/appcirclepicker' }, follow: { url: ':socialhost:/:session_prefix:_/widget/render/follow?usegapi\u003d1' }, sharetoclassroom: { url: 'https://www.gstatic.com/classroom/sharewidget/widget_stable.html?usegapi\u003d1' }, ytshare: { params: { url: '' }, url: ':socialhost:/:session_prefix:_/widget/render/ytshare?usegapi\u003d1' }, family_creation: { params: { url: '' }, url: 'https://families.google.com/webcreation?usegapi\u003d1\u0026usegapi\u003d1' }, configurator: { url: ':socialhost:/:session_prefix:_/plusbuttonconfigurator?usegapi\u003d1' }, savetowallet: { url: 'https://androidpay.google.com/a/widget/save' } } }, h: 'm;/_/scs/apps-static/_/js/k\u003doz.gapi.en.i0mYDa5BFbI.O/m\u003d__features__/am\u003dEQ/rt\u003dj/d\u003d1/rs\u003dAGLTcCOpVPIyPt0f25OP7b-uLKpPbLDE8A', u: 'https://apis.google.com/js/platform.js?onload\u003dtriggerGoogleLoaded', hee: true, fp: '2ce902396f51f6ddf9be675c3566cc83fe0e288c', dpo: false }, platform: ['additnow', 'backdrop', 'blogger', 'comments', 'commentcount', 'community', 'family_creation', 'follow', 'hangout', 'page', 'partnersbadge', 'person', 'playemm', 'playreview', 'plus', 'plusone', 'post', 'savetoandroidpay', 'savetodrive', 'savetowallet', 'shortlists', 'signin2', 'udc_webconsentflow', 'visibility', 'youtube', 'ytsubscribe', 'zoomableimage', 'sharetoclassroom', 'donation', 'ratingbadge', 'surveyoptin'], fp: '2ce902396f51f6ddf9be675c3566cc83fe0e288c', annotation: ['interactivepost', 'recobar', 'signin2', 'autocomplete', 'profile'], bimodal: ['signin', 'share'] } });
