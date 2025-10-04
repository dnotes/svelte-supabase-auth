var Hl = Object.defineProperty;
var ki = (e) => {
  throw TypeError(e);
};
var Bl = (e, t, r) => t in e ? Hl(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var qe = (e, t, r) => Bl(e, typeof t != "symbol" ? t + "" : t, r), ba = (e, t, r) => t.has(e) || ki("Cannot " + r);
var Z = (e, t, r) => (ba(e, t, "read from private field"), r ? r.call(e) : t.get(e)), Fe = (e, t, r) => t.has(e) ? ki("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), Be = (e, t, r, n) => (ba(e, t, "write to private field"), n ? n.call(e, r) : t.set(e, r), r), ur = (e, t, r) => (ba(e, t, "access private method"), r);
import { createClient as Gl } from "@supabase/supabase-js";
import { createClient as a1 } from "@supabase/supabase-js";
const Kl = "5";
var ss;
typeof window < "u" && ((ss = window.__svelte ?? (window.__svelte = {})).v ?? (ss.v = /* @__PURE__ */ new Set())).add(Kl);
const ra = 1, na = 2, ls = 4, Yl = 8, Zl = 16, Jl = 1, Xl = 4, Ql = 8, eo = 16, to = 1, ro = 2, os = "[", aa = "[!", Ha = "]", hr = {}, xe = Symbol(), no = "http://www.w3.org/1999/xhtml", ao = "@attach", us = !1;
var ia = Array.isArray, io = Array.prototype.indexOf, Ba = Array.from, Bn = Object.keys, mr = Object.defineProperty, Ot = Object.getOwnPropertyDescriptor, so = Object.getOwnPropertyDescriptors, lo = Object.prototype, oo = Array.prototype, cs = Object.getPrototypeOf, Ti = Object.isExtensible;
function nn(e) {
  return typeof e == "function";
}
const dt = () => {
};
function Ci(e) {
  return typeof (e == null ? void 0 : e.then) == "function";
}
function fs(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
function uo() {
  var e, t, r = new Promise((n, a) => {
    e = n, t = a;
  });
  return { promise: r, resolve: e, reject: t };
}
const tt = 2, Ga = 4, Ka = 8, Yr = 16, zt = 32, rr = 64, ds = 128, it = 256, Gn = 512, De = 1024, lt = 2048, nr = 4096, vt = 8192, kr = 16384, Ya = 32768, xn = 65536, Ai = 1 << 17, co = 1 << 18, Zr = 1 << 19, fo = 1 << 20, Oa = 1 << 21, Za = 1 << 22, pr = 1 << 23, Jt = Symbol("$state"), Ja = Symbol("legacy props"), vo = Symbol(""), Xa = new class extends Error {
  constructor() {
    super(...arguments);
    qe(this, "name", "StaleReactionError");
    qe(this, "message", "The reaction that called `getAbortSignal()` was re-run or destroyed");
  }
}(), Qa = 3, Wr = 8;
function ho() {
  throw new Error("https://svelte.dev/e/await_outside_boundary");
}
function vs(e) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
function po() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function go(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function _o() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function mo(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function bo() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function wo() {
  throw new Error("https://svelte.dev/e/hydration_failed");
}
function yo(e) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function $o() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function xo() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function ko() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function kn(e) {
  console.warn("https://svelte.dev/e/hydration_mismatch");
}
function To() {
  console.warn("https://svelte.dev/e/select_multiple_invalid_value");
}
let X = !1;
function Xe(e) {
  X = e;
}
let se;
function Ge(e) {
  if (e === null)
    throw kn(), hr;
  return se = e;
}
function tr() {
  return Ge(
    /** @type {TemplateNode} */
    /* @__PURE__ */ kt(se)
  );
}
function O(e) {
  if (X) {
    if (/* @__PURE__ */ kt(se) !== null)
      throw kn(), hr;
    se = e;
  }
}
function ue(e = 1) {
  if (X) {
    for (var t = e, r = se; t--; )
      r = /** @type {TemplateNode} */
      /* @__PURE__ */ kt(r);
    se = r;
  }
}
function Kn() {
  for (var e = 0, t = se; ; ) {
    if (t.nodeType === Wr) {
      var r = (
        /** @type {Comment} */
        t.data
      );
      if (r === Ha) {
        if (e === 0) return t;
        e -= 1;
      } else (r === os || r === aa) && (e += 1);
    }
    var n = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ kt(t)
    );
    t.remove(), t = n;
  }
}
function hs(e) {
  if (!e || e.nodeType !== Wr)
    throw kn(), hr;
  return (
    /** @type {Comment} */
    e.data
  );
}
function ps(e) {
  return e === this.v;
}
function gs(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function _s(e) {
  return !gs(e, this.v);
}
let Co = !1, Ye = null;
function Vr(e) {
  Ye = e;
}
function Ae(e, t = !1, r) {
  Ye = {
    p: Ye,
    c: null,
    e: null,
    s: e,
    x: null,
    l: null
  };
}
function Ee(e) {
  var t = (
    /** @type {ComponentContext} */
    Ye
  ), r = t.e;
  if (r !== null) {
    t.e = null;
    for (var n of r)
      Ns(n);
  }
  return e !== void 0 && (t.x = e), Ye = t.p, e ?? /** @type {T} */
  {};
}
function ms() {
  return !0;
}
const Ao = /* @__PURE__ */ new WeakMap();
function Eo(e) {
  var t = ne;
  if (t === null)
    return ie.f |= pr, e;
  if ((t.f & Ya) === 0) {
    if ((t.f & ds) === 0)
      throw !t.parent && e instanceof Error && bs(e), e;
    t.b.error(e);
  } else
    ei(e, t);
}
function ei(e, t) {
  for (; t !== null; ) {
    if ((t.f & ds) !== 0)
      try {
        t.b.error(e);
        return;
      } catch (r) {
        e = r;
      }
    t = t.parent;
  }
  throw e instanceof Error && bs(e), e;
}
function bs(e) {
  const t = Ao.get(e);
  t && (mr(e, "message", {
    value: t.message
  }), mr(e, "stack", {
    value: t.stack
  }));
}
const So = typeof requestIdleCallback > "u" ? (e) => setTimeout(e, 1) : requestIdleCallback;
let fn = [], dn = [];
function ws() {
  var e = fn;
  fn = [], fs(e);
}
function ys() {
  var e = dn;
  dn = [], fs(e);
}
function Tn(e) {
  fn.length === 0 && queueMicrotask(ws), fn.push(e);
}
function Io(e) {
  dn.length === 0 && So(ys), dn.push(e);
}
function Po() {
  fn.length > 0 && ws(), dn.length > 0 && ys();
}
function Lo() {
  for (var e = (
    /** @type {Effect} */
    ne.b
  ); e !== null && !e.has_pending_snippet(); )
    e = e.parent;
  return e === null && ho(), e;
}
// @__NO_SIDE_EFFECTS__
function sa(e) {
  var t = tt | lt, r = ie !== null && (ie.f & tt) !== 0 ? (
    /** @type {Derived} */
    ie
  ) : null;
  return ne === null || r !== null && (r.f & it) !== 0 ? t |= it : ne.f |= Zr, {
    ctx: Ye,
    deps: null,
    effects: null,
    equals: ps,
    f: t,
    fn: e,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      xe
    ),
    wv: 0,
    parent: r ?? ne,
    ac: null
  };
}
// @__NO_SIDE_EFFECTS__
function Oo(e, t) {
  let r = (
    /** @type {Effect | null} */
    ne
  );
  r === null && po();
  var n = (
    /** @type {Boundary} */
    r.b
  ), a = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), i = wr(
    /** @type {V} */
    xe
  ), s = null, o = !ie;
  return Uo(() => {
    try {
      var l = e();
      s && Promise.resolve(l).catch(() => {
      });
    } catch (g) {
      l = Promise.reject(g);
    }
    var u = () => l;
    a = (s == null ? void 0 : s.then(u, u)) ?? Promise.resolve(l), s = a;
    var v = (
      /** @type {Batch} */
      he
    ), h = n.pending;
    o && (n.update_pending_count(1), h || v.increment());
    const d = (g, _ = void 0) => {
      s = null, h || v.activate(), _ ? _ !== Xa && (i.f |= pr, Qt(i, _)) : ((i.f & pr) !== 0 && (i.f ^= pr), Qt(i, g)), o && (n.update_pending_count(-1), h || v.decrement()), Cs();
    };
    if (a.then(d, (g) => d(null, g || "unknown")), v)
      return () => {
        queueMicrotask(() => v.neuter());
      };
  }), new Promise((l) => {
    function u(v) {
      function h() {
        v === a ? l(i) : u(a);
      }
      v.then(h, h);
    }
    u(a);
  });
}
// @__NO_SIDE_EFFECTS__
function Y(e) {
  const t = /* @__PURE__ */ sa(e);
  return Vs(t), t;
}
// @__NO_SIDE_EFFECTS__
function $s(e) {
  const t = /* @__PURE__ */ sa(e);
  return t.equals = _s, t;
}
function xs(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var r = 0; r < t.length; r += 1)
      Ze(
        /** @type {Effect} */
        t[r]
      );
  }
}
function Mo(e) {
  for (var t = e.parent; t !== null; ) {
    if ((t.f & tt) === 0)
      return (
        /** @type {Effect} */
        t
      );
    t = t.parent;
  }
  return null;
}
function ti(e) {
  var t, r = ne;
  $t(Mo(e));
  try {
    xs(e), t = Gs(e);
  } finally {
    $t(r);
  }
  return t;
}
function ks(e) {
  var t = ti(e);
  if (e.equals(t) || (e.v = t, e.wv = Hs()), !Cr) {
    var r = (Yt || (e.f & it) !== 0) && e.deps !== null ? nr : De;
    Ke(e, r);
  }
}
function Ts(e, t, r) {
  const n = sa;
  if (t.length === 0) {
    r(e.map(n));
    return;
  }
  var a = he, i = (
    /** @type {Effect} */
    ne
  ), s = zo(), o = Lo();
  Promise.all(t.map((l) => /* @__PURE__ */ Oo(l))).then((l) => {
    a == null || a.activate(), s();
    try {
      r([...e.map(n), ...l]);
    } catch (u) {
      (i.f & kr) === 0 && ei(u, i);
    }
    a == null || a.deactivate(), Cs();
  }).catch((l) => {
    o.error(l);
  });
}
function zo() {
  var e = ne, t = ie, r = Ye, n = he;
  return function() {
    $t(e), ot(t), Vr(r), n == null || n.activate();
  };
}
function Cs() {
  $t(null), ot(null), Vr(null);
}
const wa = /* @__PURE__ */ new Set();
let he = null, Rn = null, Ei = /* @__PURE__ */ new Set(), Yn = [];
function As() {
  const e = (
    /** @type {() => void} */
    Yn.shift()
  );
  Yn.length > 0 && queueMicrotask(As), e();
}
let br = [], la = null, Ma = !1, qn = !1;
var mn, jr, Gt, bn, wn, dr, Rr, vr, Kt, qr, yn, $n, ht, Es, Wn, za;
const ta = class ta {
  constructor() {
    Fe(this, ht);
    /**
     * The current values of any sources that are updated in this batch
     * They keys of this map are identical to `this.#previous`
     * @type {Map<Source, any>}
     */
    qe(this, "current", /* @__PURE__ */ new Map());
    /**
     * The values of any sources that are updated in this batch _before_ those updates took place.
     * They keys of this map are identical to `this.#current`
     * @type {Map<Source, any>}
     */
    Fe(this, mn, /* @__PURE__ */ new Map());
    /**
     * When the batch is committed (and the DOM is updated), we need to remove old branches
     * and append new ones by calling the functions added inside (if/each/key/etc) blocks
     * @type {Set<() => void>}
     */
    Fe(this, jr, /* @__PURE__ */ new Set());
    /**
     * The number of async effects that are currently in flight
     */
    Fe(this, Gt, 0);
    /**
     * A deferred that resolves when the batch is committed, used with `settled()`
     * TODO replace with Promise.withResolvers once supported widely enough
     * @type {{ promise: Promise<void>, resolve: (value?: any) => void, reject: (reason: unknown) => void } | null}
     */
    Fe(this, bn, null);
    /**
     * True if an async effect inside this batch resolved and
     * its parent branch was already deleted
     */
    Fe(this, wn, !1);
    /**
     * Async effects (created inside `async_derived`) encountered during processing.
     * These run after the rest of the batch has updated, since they should
     * always have the latest values
     * @type {Effect[]}
     */
    Fe(this, dr, []);
    /**
     * The same as `#async_effects`, but for effects inside a newly-created
     * `<svelte:boundary>` — these do not prevent the batch from committing
     * @type {Effect[]}
     */
    Fe(this, Rr, []);
    /**
     * Template effects and `$effect.pre` effects, which run when
     * a batch is committed
     * @type {Effect[]}
     */
    Fe(this, vr, []);
    /**
     * The same as `#render_effects`, but for `$effect` (which runs after)
     * @type {Effect[]}
     */
    Fe(this, Kt, []);
    /**
     * Block effects, which may need to re-run on subsequent flushes
     * in order to update internal sources (e.g. each block items)
     * @type {Effect[]}
     */
    Fe(this, qr, []);
    /**
     * Deferred effects (which run after async work has completed) that are DIRTY
     * @type {Effect[]}
     */
    Fe(this, yn, []);
    /**
     * Deferred effects that are MAYBE_DIRTY
     * @type {Effect[]}
     */
    Fe(this, $n, []);
    /**
     * A set of branches that still exist, but will be destroyed when this batch
     * is committed — we skip over these during `process`
     * @type {Set<Effect>}
     */
    qe(this, "skipped_effects", /* @__PURE__ */ new Set());
  }
  /**
   *
   * @param {Effect[]} root_effects
   */
  process(t) {
    var a;
    br = [], Rn = null;
    for (const i of t)
      ur(this, ht, Es).call(this, i);
    if (Z(this, dr).length === 0 && Z(this, Gt) === 0) {
      ur(this, ht, za).call(this);
      var r = Z(this, vr), n = Z(this, Kt);
      Be(this, vr, []), Be(this, Kt, []), Be(this, qr, []), Rn = he, he = null, Si(r), Si(n), he === null ? he = this : wa.delete(this), (a = Z(this, bn)) == null || a.resolve();
    } else
      ur(this, ht, Wn).call(this, Z(this, vr)), ur(this, ht, Wn).call(this, Z(this, Kt)), ur(this, ht, Wn).call(this, Z(this, qr));
    for (const i of Z(this, dr))
      Dr(i);
    for (const i of Z(this, Rr))
      Dr(i);
    Be(this, dr, []), Be(this, Rr, []);
  }
  /**
   * Associate a change to a given source with the current
   * batch, noting its previous and current values
   * @param {Source} source
   * @param {any} value
   */
  capture(t, r) {
    Z(this, mn).has(t) || Z(this, mn).set(t, r), this.current.set(t, t.v);
  }
  activate() {
    he = this;
  }
  deactivate() {
    he = null, Rn = null;
    for (const t of Ei)
      if (Ei.delete(t), t(), he !== null)
        break;
  }
  neuter() {
    Be(this, wn, !0);
  }
  flush() {
    br.length > 0 ? Ss() : ur(this, ht, za).call(this), he === this && (Z(this, Gt) === 0 && wa.delete(this), this.deactivate());
  }
  increment() {
    Be(this, Gt, Z(this, Gt) + 1);
  }
  decrement() {
    if (Be(this, Gt, Z(this, Gt) - 1), Z(this, Gt) === 0) {
      for (const t of Z(this, yn))
        Ke(t, lt), Hr(t);
      for (const t of Z(this, $n))
        Ke(t, nr), Hr(t);
      Be(this, vr, []), Be(this, Kt, []), this.flush();
    } else
      this.deactivate();
  }
  /** @param {() => void} fn */
  add_callback(t) {
    Z(this, jr).add(t);
  }
  settled() {
    return (Z(this, bn) ?? Be(this, bn, uo())).promise;
  }
  static ensure() {
    if (he === null) {
      const t = he = new ta();
      wa.add(he), qn || ta.enqueue(() => {
        he === t && t.flush();
      });
    }
    return he;
  }
  /** @param {() => void} task */
  static enqueue(t) {
    Yn.length === 0 && queueMicrotask(As), Yn.unshift(t);
  }
};
mn = new WeakMap(), jr = new WeakMap(), Gt = new WeakMap(), bn = new WeakMap(), wn = new WeakMap(), dr = new WeakMap(), Rr = new WeakMap(), vr = new WeakMap(), Kt = new WeakMap(), qr = new WeakMap(), yn = new WeakMap(), $n = new WeakMap(), ht = new WeakSet(), /**
 * Traverse the effect tree, executing effects or stashing
 * them for later execution as appropriate
 * @param {Effect} root
 */
Es = function(t) {
  var v;
  t.f ^= De;
  for (var r = t.first; r !== null; ) {
    var n = r.f, a = (n & (zt | rr)) !== 0, i = a && (n & De) !== 0, s = i || (n & vt) !== 0 || this.skipped_effects.has(r);
    if (!s && r.fn !== null) {
      if (a)
        r.f ^= De;
      else if ((n & Ga) !== 0)
        Z(this, Kt).push(r);
      else if ((n & De) === 0)
        if ((n & Za) !== 0) {
          var o = (v = r.b) != null && v.pending ? Z(this, Rr) : Z(this, dr);
          o.push(r);
        } else ua(r) && ((r.f & Yr) !== 0 && Z(this, qr).push(r), Dr(r));
      var l = r.first;
      if (l !== null) {
        r = l;
        continue;
      }
    }
    var u = r.parent;
    for (r = r.next; r === null && u !== null; )
      r = u.next, u = u.parent;
  }
}, /**
 * @param {Effect[]} effects
 */
Wn = function(t) {
  for (const r of t)
    ((r.f & lt) !== 0 ? Z(this, yn) : Z(this, $n)).push(r), Ke(r, De);
  t.length = 0;
}, /**
 * Append and remove branches to/from the DOM
 */
za = function() {
  if (!Z(this, wn))
    for (const t of Z(this, jr))
      t();
  Z(this, jr).clear();
};
let Ur = ta;
function C(e) {
  var t = qn;
  qn = !0;
  try {
    for (var r; ; ) {
      if (Po(), br.length === 0 && (he == null || he.flush(), br.length === 0))
        return la = null, /** @type {T} */
        r;
      Ss();
    }
  } finally {
    qn = t;
  }
}
function Ss() {
  var e = Fr;
  Ma = !0;
  try {
    var t = 0;
    for (Oi(!0); br.length > 0; ) {
      var r = Ur.ensure();
      if (t++ > 1e3) {
        var n, a;
        No();
      }
      r.process(br), Xt.clear();
    }
  } finally {
    Ma = !1, Oi(e), la = null;
  }
}
function No() {
  try {
    bo();
  } catch (e) {
    ei(e, la);
  }
}
let Pt = null;
function Si(e) {
  var t = e.length;
  if (t !== 0) {
    for (var r = 0; r < t; ) {
      var n = e[r++];
      if ((n.f & (kr | vt)) === 0 && ua(n) && (Pt = [], Dr(n), n.deps === null && n.first === null && n.nodes_start === null && (n.teardown === null && n.ac === null ? Rs(n) : n.fn = null), (Pt == null ? void 0 : Pt.length) > 0)) {
        Xt.clear();
        for (const a of Pt)
          Dr(a);
        Pt = [];
      }
    }
    Pt = null;
  }
}
function Hr(e) {
  for (var t = la = e; t.parent !== null; ) {
    t = t.parent;
    var r = t.f;
    if (Ma && t === ne && (r & Yr) !== 0)
      return;
    if ((r & (rr | zt)) !== 0) {
      if ((r & De) === 0) return;
      t.f ^= De;
    }
  }
  br.push(t);
}
const Xt = /* @__PURE__ */ new Map();
function wr(e, t) {
  var r = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: ps,
    rv: 0,
    wv: 0
  };
  return r;
}
// @__NO_SIDE_EFFECTS__
function B(e, t) {
  const r = wr(e);
  return Vs(r), r;
}
// @__NO_SIDE_EFFECTS__
function ri(e, t = !1, r = !0) {
  const n = wr(e);
  return t || (n.equals = _s), n;
}
function A(e, t, r = !1) {
  ie !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!yt || (ie.f & Ai) !== 0) && ms() && (ie.f & (tt | Yr | Za | Ai)) !== 0 && !(Ve != null && Ve.includes(e)) && ko();
  let n = r ? ft(t) : t;
  return Qt(e, n);
}
function Qt(e, t) {
  if (!e.equals(t)) {
    var r = e.v;
    Cr ? Xt.set(e, t) : Xt.set(e, r), e.v = t;
    var n = Ur.ensure();
    n.capture(e, r), (e.f & tt) !== 0 && ((e.f & lt) !== 0 && ti(
      /** @type {Derived} */
      e
    ), Ke(e, (e.f & it) === 0 ? De : nr)), e.wv = Hs(), Is(e, lt), ne !== null && (ne.f & De) !== 0 && (ne.f & (zt | rr)) === 0 && (nt === null ? Bo([e]) : nt.push(e));
  }
  return t;
}
function ya(e) {
  A(e, e.v + 1);
}
function Is(e, t) {
  var r = e.reactions;
  if (r !== null)
    for (var n = r.length, a = 0; a < n; a++) {
      var i = r[a], s = i.f, o = (s & lt) === 0;
      o && Ke(i, t), (s & tt) !== 0 ? Is(
        /** @type {Derived} */
        i,
        nr
      ) : o && ((s & Yr) !== 0 && Pt !== null && Pt.push(
        /** @type {Effect} */
        i
      ), Hr(
        /** @type {Effect} */
        i
      ));
    }
}
function ft(e) {
  if (typeof e != "object" || e === null || Jt in e)
    return e;
  const t = cs(e);
  if (t !== lo && t !== oo)
    return e;
  var r = /* @__PURE__ */ new Map(), n = ia(e), a = /* @__PURE__ */ B(0), i = _r, s = (o) => {
    if (_r === i)
      return o();
    var l = ie, u = _r;
    ot(null), zi(i);
    var v = o();
    return ot(l), zi(u), v;
  };
  return n && r.set("length", /* @__PURE__ */ B(
    /** @type {any[]} */
    e.length
  )), new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(o, l, u) {
        (!("value" in u) || u.configurable === !1 || u.enumerable === !1 || u.writable === !1) && $o();
        var v = r.get(l);
        return v === void 0 ? v = s(() => {
          var h = /* @__PURE__ */ B(u.value);
          return r.set(l, h), h;
        }) : A(v, u.value, !0), !0;
      },
      deleteProperty(o, l) {
        var u = r.get(l);
        if (u === void 0) {
          if (l in o) {
            const v = s(() => /* @__PURE__ */ B(xe));
            r.set(l, v), ya(a);
          }
        } else
          A(u, xe), ya(a);
        return !0;
      },
      get(o, l, u) {
        var g;
        if (l === Jt)
          return e;
        var v = r.get(l), h = l in o;
        if (v === void 0 && (!h || (g = Ot(o, l)) != null && g.writable) && (v = s(() => {
          var _ = ft(h ? o[l] : xe), b = /* @__PURE__ */ B(_);
          return b;
        }), r.set(l, v)), v !== void 0) {
          var d = c(v);
          return d === xe ? void 0 : d;
        }
        return Reflect.get(o, l, u);
      },
      getOwnPropertyDescriptor(o, l) {
        var u = Reflect.getOwnPropertyDescriptor(o, l);
        if (u && "value" in u) {
          var v = r.get(l);
          v && (u.value = c(v));
        } else if (u === void 0) {
          var h = r.get(l), d = h == null ? void 0 : h.v;
          if (h !== void 0 && d !== xe)
            return {
              enumerable: !0,
              configurable: !0,
              value: d,
              writable: !0
            };
        }
        return u;
      },
      has(o, l) {
        var d;
        if (l === Jt)
          return !0;
        var u = r.get(l), v = u !== void 0 && u.v !== xe || Reflect.has(o, l);
        if (u !== void 0 || ne !== null && (!v || (d = Ot(o, l)) != null && d.writable)) {
          u === void 0 && (u = s(() => {
            var g = v ? ft(o[l]) : xe, _ = /* @__PURE__ */ B(g);
            return _;
          }), r.set(l, u));
          var h = c(u);
          if (h === xe)
            return !1;
        }
        return v;
      },
      set(o, l, u, v) {
        var p;
        var h = r.get(l), d = l in o;
        if (n && l === "length")
          for (var g = u; g < /** @type {Source<number>} */
          h.v; g += 1) {
            var _ = r.get(g + "");
            _ !== void 0 ? A(_, xe) : g in o && (_ = s(() => /* @__PURE__ */ B(xe)), r.set(g + "", _));
          }
        if (h === void 0)
          (!d || (p = Ot(o, l)) != null && p.writable) && (h = s(() => /* @__PURE__ */ B(void 0)), A(h, ft(u)), r.set(l, h));
        else {
          d = h.v !== xe;
          var b = s(() => ft(u));
          A(h, b);
        }
        var $ = Reflect.getOwnPropertyDescriptor(o, l);
        if ($ != null && $.set && $.set.call(v, u), !d) {
          if (n && typeof l == "string") {
            var T = (
              /** @type {Source<number>} */
              r.get("length")
            ), k = Number(l);
            Number.isInteger(k) && k >= T.v && A(T, k + 1);
          }
          ya(a);
        }
        return !0;
      },
      ownKeys(o) {
        c(a);
        var l = Reflect.ownKeys(o).filter((h) => {
          var d = r.get(h);
          return d === void 0 || d.v !== xe;
        });
        for (var [u, v] of r)
          v.v !== xe && !(u in o) && l.push(u);
        return l;
      },
      setPrototypeOf() {
        xo();
      }
    }
  );
}
function Ii(e) {
  try {
    if (e !== null && typeof e == "object" && Jt in e)
      return e[Jt];
  } catch {
  }
  return e;
}
function Fo(e, t) {
  return Object.is(Ii(e), Ii(t));
}
var Pi, Ps, Ls, Os;
function Na() {
  if (Pi === void 0) {
    Pi = window, Ps = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, r = Text.prototype;
    Ls = Ot(t, "firstChild").get, Os = Ot(t, "nextSibling").get, Ti(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), Ti(r) && (r.__t = void 0);
  }
}
function pt(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function Qe(e) {
  return Ls.call(e);
}
// @__NO_SIDE_EFFECTS__
function kt(e) {
  return Os.call(e);
}
function D(e, t) {
  if (!X)
    return /* @__PURE__ */ Qe(e);
  var r = (
    /** @type {TemplateNode} */
    /* @__PURE__ */ Qe(se)
  );
  if (r === null)
    r = se.appendChild(pt());
  else if (t && r.nodeType !== Qa) {
    var n = pt();
    return r == null || r.before(n), Ge(n), n;
  }
  return Ge(r), r;
}
function re(e, t) {
  if (!X) {
    var r = (
      /** @type {DocumentFragment} */
      /* @__PURE__ */ Qe(
        /** @type {Node} */
        e
      )
    );
    return r instanceof Comment && r.data === "" ? /* @__PURE__ */ kt(r) : r;
  }
  return se;
}
function L(e, t = 1, r = !1) {
  let n = X ? se : e;
  for (var a; t--; )
    a = n, n = /** @type {TemplateNode} */
    /* @__PURE__ */ kt(n);
  if (!X)
    return n;
  if (r && (n == null ? void 0 : n.nodeType) !== Qa) {
    var i = pt();
    return n === null ? a == null || a.after(i) : n.before(i), Ge(i), i;
  }
  return Ge(n), /** @type {TemplateNode} */
  n;
}
function Ms(e) {
  e.textContent = "";
}
function ni() {
  return !1;
}
function Do(e, t) {
  if (t) {
    const r = document.body;
    e.autofocus = !0, Tn(() => {
      document.activeElement === r && e.focus();
    });
  }
}
let Li = !1;
function zs() {
  Li || (Li = !0, document.addEventListener(
    "reset",
    (e) => {
      Promise.resolve().then(() => {
        var t;
        if (!e.defaultPrevented)
          for (
            const r of
            /**@type {HTMLFormElement} */
            e.target.elements
          )
            (t = r.__on_r) == null || t.call(r);
      });
    },
    // In the capture phase to guarantee we get noticed of it (no possiblity of stopPropagation)
    { capture: !0 }
  ));
}
function oa(e) {
  var t = ie, r = ne;
  ot(null), $t(null);
  try {
    return e();
  } finally {
    ot(t), $t(r);
  }
}
function jo(e, t, r, n = r) {
  e.addEventListener(t, () => oa(r));
  const a = e.__on_r;
  a ? e.__on_r = () => {
    a(), n(!0);
  } : e.__on_r = () => n(!0), zs();
}
function Ro(e) {
  ne === null && ie === null && mo(), ie !== null && (ie.f & it) !== 0 && ne === null && _o(), Cr && go();
}
function qo(e, t) {
  var r = t.last;
  r === null ? t.last = t.first = e : (r.next = e, e.prev = r, t.last = e);
}
function Tt(e, t, r, n = !0) {
  var a = ne;
  a !== null && (a.f & vt) !== 0 && (e |= vt);
  var i = {
    ctx: Ye,
    deps: null,
    nodes_start: null,
    nodes_end: null,
    f: e | lt,
    first: null,
    fn: t,
    last: null,
    next: null,
    parent: a,
    b: a && a.b,
    prev: null,
    teardown: null,
    transitions: null,
    wv: 0,
    ac: null
  };
  if (r)
    try {
      Dr(i), i.f |= Ya;
    } catch (l) {
      throw Ze(i), l;
    }
  else t !== null && Hr(i);
  if (n) {
    var s = i;
    if (r && s.deps === null && s.teardown === null && s.nodes_start === null && s.first === s.last && // either `null`, or a singular child
    (s.f & Zr) === 0 && (s = s.first), s !== null && (s.parent = a, a !== null && qo(s, a), ie !== null && (ie.f & tt) !== 0 && (e & rr) === 0)) {
      var o = (
        /** @type {Derived} */
        ie
      );
      (o.effects ?? (o.effects = [])).push(s);
    }
  }
  return i;
}
function ai(e) {
  const t = Tt(Ka, null, !1);
  return Ke(t, De), t.teardown = e, t;
}
function Jr(e) {
  Ro();
  var t = (
    /** @type {Effect} */
    ne.f
  ), r = !ie && (t & zt) !== 0 && (t & Ya) === 0;
  if (r) {
    var n = (
      /** @type {ComponentContext} */
      Ye
    );
    (n.e ?? (n.e = [])).push(e);
  } else
    return Ns(e);
}
function Ns(e) {
  return Tt(Ga | fo, e, !1);
}
function Wo(e) {
  Ur.ensure();
  const t = Tt(rr | Zr, e, !0);
  return () => {
    Ze(t);
  };
}
function Vo(e) {
  Ur.ensure();
  const t = Tt(rr | Zr, e, !0);
  return (r = {}) => new Promise((n) => {
    r.outro ? gr(t, () => {
      Ze(t), n(void 0);
    }) : (Ze(t), n(void 0));
  });
}
function ar(e) {
  return Tt(Ga, e, !1);
}
function Uo(e) {
  return Tt(Za | Zr, e, !0);
}
function ii(e, t = 0) {
  return Tt(Ka | t, e, !0);
}
function z(e, t = [], r = []) {
  Ts(t, r, (n) => {
    Tt(Ka, () => e(...n.map(c)), !0);
  });
}
function Tr(e, t = 0) {
  var r = Tt(Yr | t, e, !0);
  return r;
}
function et(e, t = !0) {
  return Tt(zt | Zr, e, !0, t);
}
function Fs(e) {
  var t = e.teardown;
  if (t !== null) {
    const r = Cr, n = ie;
    Mi(!0), ot(null);
    try {
      t.call(null);
    } finally {
      Mi(r), ot(n);
    }
  }
}
function Ds(e, t = !1) {
  var r = e.first;
  for (e.first = e.last = null; r !== null; ) {
    const a = r.ac;
    a !== null && oa(() => {
      a.abort(Xa);
    });
    var n = r.next;
    (r.f & rr) !== 0 ? r.parent = null : Ze(r, t), r = n;
  }
}
function Ho(e) {
  for (var t = e.first; t !== null; ) {
    var r = t.next;
    (t.f & zt) === 0 && Ze(t), t = r;
  }
}
function Ze(e, t = !0) {
  var r = !1;
  (t || (e.f & co) !== 0) && e.nodes_start !== null && e.nodes_end !== null && (js(
    e.nodes_start,
    /** @type {TemplateNode} */
    e.nodes_end
  ), r = !0), Ds(e, t && !r), Zn(e, 0), Ke(e, kr);
  var n = e.transitions;
  if (n !== null)
    for (const i of n)
      i.stop();
  Fs(e);
  var a = e.parent;
  a !== null && a.first !== null && Rs(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes_start = e.nodes_end = e.ac = null;
}
function js(e, t) {
  for (; e !== null; ) {
    var r = e === t ? null : (
      /** @type {TemplateNode} */
      /* @__PURE__ */ kt(e)
    );
    e.remove(), e = r;
  }
}
function Rs(e) {
  var t = e.parent, r = e.prev, n = e.next;
  r !== null && (r.next = n), n !== null && (n.prev = r), t !== null && (t.first === e && (t.first = n), t.last === e && (t.last = r));
}
function gr(e, t) {
  var r = [];
  si(e, r, !0), qs(r, () => {
    Ze(e), t && t();
  });
}
function qs(e, t) {
  var r = e.length;
  if (r > 0) {
    var n = () => --r || t();
    for (var a of e)
      a.out(n);
  } else
    t();
}
function si(e, t, r) {
  if ((e.f & vt) === 0) {
    if (e.f ^= vt, e.transitions !== null)
      for (const s of e.transitions)
        (s.is_global || r) && t.push(s);
    for (var n = e.first; n !== null; ) {
      var a = n.next, i = (n.f & xn) !== 0 || (n.f & zt) !== 0;
      si(n, t, i ? r : !1), n = a;
    }
  }
}
function vn(e) {
  Ws(e, !0);
}
function Ws(e, t) {
  if ((e.f & vt) !== 0) {
    e.f ^= vt, (e.f & De) === 0 && (Ke(e, lt), Hr(e));
    for (var r = e.first; r !== null; ) {
      var n = r.next, a = (r.f & xn) !== 0 || (r.f & zt) !== 0;
      Ws(r, a ? t : !1), r = n;
    }
    if (e.transitions !== null)
      for (const i of e.transitions)
        (i.is_global || t) && i.in();
  }
}
let Fr = !1;
function Oi(e) {
  Fr = e;
}
let Cr = !1;
function Mi(e) {
  Cr = e;
}
let ie = null, yt = !1;
function ot(e) {
  ie = e;
}
let ne = null;
function $t(e) {
  ne = e;
}
let Ve = null;
function Vs(e) {
  ie !== null && (Ve === null ? Ve = [e] : Ve.push(e));
}
let We = null, Je = 0, nt = null;
function Bo(e) {
  nt = e;
}
let Us = 1, hn = 0, _r = hn;
function zi(e) {
  _r = e;
}
let Yt = !1;
function Hs() {
  return ++Us;
}
function ua(e) {
  var h;
  var t = e.f;
  if ((t & lt) !== 0)
    return !0;
  if ((t & nr) !== 0) {
    var r = e.deps, n = (t & it) !== 0;
    if (r !== null) {
      var a, i, s = (t & Gn) !== 0, o = n && ne !== null && !Yt, l = r.length;
      if ((s || o) && (ne === null || (ne.f & kr) === 0)) {
        var u = (
          /** @type {Derived} */
          e
        ), v = u.parent;
        for (a = 0; a < l; a++)
          i = r[a], (s || !((h = i == null ? void 0 : i.reactions) != null && h.includes(u))) && (i.reactions ?? (i.reactions = [])).push(u);
        s && (u.f ^= Gn), o && v !== null && (v.f & it) === 0 && (u.f ^= it);
      }
      for (a = 0; a < l; a++)
        if (i = r[a], ua(
          /** @type {Derived} */
          i
        ) && ks(
          /** @type {Derived} */
          i
        ), i.wv > e.wv)
          return !0;
    }
    (!n || ne !== null && !Yt) && Ke(e, De);
  }
  return !1;
}
function Bs(e, t, r = !0) {
  var n = e.reactions;
  if (n !== null && !(Ve != null && Ve.includes(e)))
    for (var a = 0; a < n.length; a++) {
      var i = n[a];
      (i.f & tt) !== 0 ? Bs(
        /** @type {Derived} */
        i,
        t,
        !1
      ) : t === i && (r ? Ke(i, lt) : (i.f & De) !== 0 && Ke(i, nr), Hr(
        /** @type {Effect} */
        i
      ));
    }
}
function Gs(e) {
  var b;
  var t = We, r = Je, n = nt, a = ie, i = Yt, s = Ve, o = Ye, l = yt, u = _r, v = e.f;
  We = /** @type {null | Value[]} */
  null, Je = 0, nt = null, Yt = (v & it) !== 0 && (yt || !Fr || ie === null), ie = (v & (zt | rr)) === 0 ? e : null, Ve = null, Vr(e.ctx), yt = !1, _r = ++hn, e.ac !== null && (oa(() => {
    e.ac.abort(Xa);
  }), e.ac = null);
  try {
    e.f |= Oa;
    var h = (
      /** @type {Function} */
      e.fn
    ), d = h(), g = e.deps;
    if (We !== null) {
      var _;
      if (Zn(e, Je), g !== null && Je > 0)
        for (g.length = Je + We.length, _ = 0; _ < We.length; _++)
          g[Je + _] = We[_];
      else
        e.deps = g = We;
      if (!Yt || // Deriveds that already have reactions can cleanup, so we still add them as reactions
      (v & tt) !== 0 && /** @type {import('#client').Derived} */
      e.reactions !== null)
        for (_ = Je; _ < g.length; _++)
          ((b = g[_]).reactions ?? (b.reactions = [])).push(e);
    } else g !== null && Je < g.length && (Zn(e, Je), g.length = Je);
    if (ms() && nt !== null && !yt && g !== null && (e.f & (tt | nr | lt)) === 0)
      for (_ = 0; _ < /** @type {Source[]} */
      nt.length; _++)
        Bs(
          nt[_],
          /** @type {Effect} */
          e
        );
    return a !== null && a !== e && (hn++, nt !== null && (n === null ? n = nt : n.push(.../** @type {Source[]} */
    nt))), (e.f & pr) !== 0 && (e.f ^= pr), d;
  } catch ($) {
    return Eo($);
  } finally {
    e.f ^= Oa, We = t, Je = r, nt = n, ie = a, Yt = i, Ve = s, Vr(o), yt = l, _r = u;
  }
}
function Go(e, t) {
  let r = t.reactions;
  if (r !== null) {
    var n = io.call(r, e);
    if (n !== -1) {
      var a = r.length - 1;
      a === 0 ? r = t.reactions = null : (r[n] = r[a], r.pop());
    }
  }
  r === null && (t.f & tt) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (We === null || !We.includes(t)) && (Ke(t, nr), (t.f & (it | Gn)) === 0 && (t.f ^= Gn), xs(
    /** @type {Derived} **/
    t
  ), Zn(
    /** @type {Derived} **/
    t,
    0
  ));
}
function Zn(e, t) {
  var r = e.deps;
  if (r !== null)
    for (var n = t; n < r.length; n++)
      Go(e, r[n]);
}
function Dr(e) {
  var t = e.f;
  if ((t & kr) === 0) {
    Ke(e, De);
    var r = ne, n = Fr;
    ne = e, Fr = !0;
    try {
      (t & Yr) !== 0 ? Ho(e) : Ds(e), Fs(e);
      var a = Gs(e);
      e.teardown = typeof a == "function" ? a : null, e.wv = Us;
      var i;
      us && Co && (e.f & lt) !== 0 && e.deps;
    } finally {
      Fr = n, ne = r;
    }
  }
}
async function li() {
  await Promise.resolve(), C();
}
function c(e) {
  var t = e.f, r = (t & tt) !== 0;
  if (ie !== null && !yt) {
    var n = ne !== null && (ne.f & kr) !== 0;
    if (!n && !(Ve != null && Ve.includes(e))) {
      var a = ie.deps;
      if ((ie.f & Oa) !== 0)
        e.rv < hn && (e.rv = hn, We === null && a !== null && a[Je] === e ? Je++ : We === null ? We = [e] : (!Yt || !We.includes(e)) && We.push(e));
      else {
        (ie.deps ?? (ie.deps = [])).push(e);
        var i = e.reactions;
        i === null ? e.reactions = [ie] : i.includes(ie) || i.push(ie);
      }
    }
  } else if (r && /** @type {Derived} */
  e.deps === null && /** @type {Derived} */
  e.effects === null) {
    var s = (
      /** @type {Derived} */
      e
    ), o = s.parent;
    o !== null && (o.f & it) === 0 && (s.f ^= it);
  }
  if (Cr) {
    if (Xt.has(e))
      return Xt.get(e);
    if (r) {
      s = /** @type {Derived} */
      e;
      var l = s.v;
      return ((s.f & De) === 0 && s.reactions !== null || Ks(s)) && (l = ti(s)), Xt.set(s, l), l;
    }
  } else r && (s = /** @type {Derived} */
  e, ua(s) && ks(s));
  if ((e.f & pr) !== 0)
    throw e.v;
  return e.v;
}
function Ks(e) {
  if (e.v === xe) return !0;
  if (e.deps === null) return !1;
  for (const t of e.deps)
    if (Xt.has(t) || (t.f & tt) !== 0 && Ks(
      /** @type {Derived} */
      t
    ))
      return !0;
  return !1;
}
function Ar(e) {
  var t = yt;
  try {
    return yt = !0, e();
  } finally {
    yt = t;
  }
}
const Ko = -7169;
function Ke(e, t) {
  e.f = e.f & Ko | t;
}
const Ys = /* @__PURE__ */ new Set(), Fa = /* @__PURE__ */ new Set();
function Zs(e, t, r, n = {}) {
  function a(i) {
    if (n.capture || ln.call(t, i), !i.cancelBubble)
      return oa(() => r == null ? void 0 : r.call(this, i));
  }
  return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? Tn(() => {
    t.addEventListener(e, a, n);
  }) : t.addEventListener(e, a, n), a;
}
function Er(e, t, r, n, a) {
  var i = { capture: n, passive: a }, s = Zs(e, t, r, i);
  (t === document.body || // @ts-ignore
  t === window || // @ts-ignore
  t === document || // Firefox has quirky behavior, it can happen that we still get "canplay" events when the element is already removed
  t instanceof HTMLMediaElement) && ai(() => {
    t.removeEventListener(e, s, i);
  });
}
function oi(e) {
  for (var t = 0; t < e.length; t++)
    Ys.add(e[t]);
  for (var r of Fa)
    r(e);
}
let Ni = null;
function ln(e) {
  var k;
  var t = this, r = (
    /** @type {Node} */
    t.ownerDocument
  ), n = e.type, a = ((k = e.composedPath) == null ? void 0 : k.call(e)) || [], i = (
    /** @type {null | Element} */
    a[0] || e.target
  );
  Ni = e;
  var s = 0, o = Ni === e && e.__root;
  if (o) {
    var l = a.indexOf(o);
    if (l !== -1 && (t === document || t === /** @type {any} */
    window)) {
      e.__root = t;
      return;
    }
    var u = a.indexOf(t);
    if (u === -1)
      return;
    l <= u && (s = l);
  }
  if (i = /** @type {Element} */
  a[s] || e.target, i !== t) {
    mr(e, "currentTarget", {
      configurable: !0,
      get() {
        return i || r;
      }
    });
    var v = ie, h = ne;
    ot(null), $t(null);
    try {
      for (var d, g = []; i !== null; ) {
        var _ = i.assignedSlot || i.parentNode || /** @type {any} */
        i.host || null;
        try {
          var b = i["__" + n];
          if (b != null && (!/** @type {any} */
          i.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === i))
            if (ia(b)) {
              var [$, ...T] = b;
              $.apply(i, [e, ...T]);
            } else
              b.call(i, e);
        } catch (p) {
          d ? g.push(p) : d = p;
        }
        if (e.cancelBubble || _ === t || _ === null)
          break;
        i = _;
      }
      if (d) {
        for (let p of g)
          queueMicrotask(() => {
            throw p;
          });
        throw d;
      }
    } finally {
      e.__root = t, delete e.currentTarget, ot(v), $t(h);
    }
  }
}
function ui(e) {
  var t = document.createElement("template");
  return t.innerHTML = e.replaceAll("<!>", "<!---->"), t.content;
}
function st(e, t) {
  var r = (
    /** @type {Effect} */
    ne
  );
  r.nodes_start === null && (r.nodes_start = e, r.nodes_end = t);
}
// @__NO_SIDE_EFFECTS__
function N(e, t) {
  var r = (t & to) !== 0, n = (t & ro) !== 0, a, i = !e.startsWith("<!>");
  return () => {
    if (X)
      return st(se, null), se;
    a === void 0 && (a = ui(i ? e : "<!>" + e), r || (a = /** @type {Node} */
    /* @__PURE__ */ Qe(a)));
    var s = (
      /** @type {TemplateNode} */
      n || Ps ? document.importNode(a, !0) : a.cloneNode(!0)
    );
    if (r) {
      var o = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Qe(s)
      ), l = (
        /** @type {TemplateNode} */
        s.lastChild
      );
      st(o, l);
    } else
      st(s, s);
    return s;
  };
}
// @__NO_SIDE_EFFECTS__
function Yo(e, t, r = "svg") {
  var n = !e.startsWith("<!>"), a = `<${r}>${n ? e : "<!>" + e}</${r}>`, i;
  return () => {
    if (X)
      return st(se, null), se;
    if (!i) {
      var s = (
        /** @type {DocumentFragment} */
        ui(a)
      ), o = (
        /** @type {Element} */
        /* @__PURE__ */ Qe(s)
      );
      i = /** @type {Element} */
      /* @__PURE__ */ Qe(o);
    }
    var l = (
      /** @type {TemplateNode} */
      i.cloneNode(!0)
    );
    return st(l, l), l;
  };
}
// @__NO_SIDE_EFFECTS__
function Zo(e, t) {
  return /* @__PURE__ */ Yo(e, t, "svg");
}
function oe(e = "") {
  if (!X) {
    var t = pt(e + "");
    return st(t, t), t;
  }
  var r = se;
  return r.nodeType !== Qa && (r.before(r = pt()), Ge(r)), st(r, r), r;
}
function Se() {
  if (X)
    return st(se, null), se;
  var e = document.createDocumentFragment(), t = document.createComment(""), r = pt();
  return e.append(t, r), st(t, r), e;
}
function x(e, t) {
  if (X) {
    ne.nodes_end = se, tr();
    return;
  }
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
function Jo(e) {
  return e.endsWith("capture") && e !== "gotpointercapture" && e !== "lostpointercapture";
}
const Xo = [
  "beforeinput",
  "click",
  "change",
  "dblclick",
  "contextmenu",
  "focusin",
  "focusout",
  "input",
  "keydown",
  "keyup",
  "mousedown",
  "mousemove",
  "mouseout",
  "mouseover",
  "mouseup",
  "pointerdown",
  "pointermove",
  "pointerout",
  "pointerover",
  "pointerup",
  "touchend",
  "touchmove",
  "touchstart"
];
function Qo(e) {
  return Xo.includes(e);
}
const eu = {
  // no `class: 'className'` because we handle that separately
  formnovalidate: "formNoValidate",
  ismap: "isMap",
  nomodule: "noModule",
  playsinline: "playsInline",
  readonly: "readOnly",
  defaultvalue: "defaultValue",
  defaultchecked: "defaultChecked",
  srcobject: "srcObject",
  novalidate: "noValidate",
  allowfullscreen: "allowFullscreen",
  disablepictureinpicture: "disablePictureInPicture",
  disableremoteplayback: "disableRemotePlayback"
};
function tu(e) {
  return e = e.toLowerCase(), eu[e] ?? e;
}
const ru = ["touchstart", "touchmove"];
function nu(e) {
  return ru.includes(e);
}
function j(e, t) {
  var r = t == null ? "" : typeof t == "object" ? t + "" : t;
  r !== (e.__t ?? (e.__t = e.nodeValue)) && (e.__t = r, e.nodeValue = r + "");
}
function Js(e, t) {
  return Xs(e, t);
}
function au(e, t) {
  Na(), t.intro = t.intro ?? !1;
  const r = t.target, n = X, a = se;
  try {
    for (var i = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Qe(r)
    ); i && (i.nodeType !== Wr || /** @type {Comment} */
    i.data !== os); )
      i = /** @type {TemplateNode} */
      /* @__PURE__ */ kt(i);
    if (!i)
      throw hr;
    Xe(!0), Ge(
      /** @type {Comment} */
      i
    ), tr();
    const s = Xs(e, { ...t, anchor: i });
    if (se === null || se.nodeType !== Wr || /** @type {Comment} */
    se.data !== Ha)
      throw kn(), hr;
    return Xe(!1), /**  @type {Exports} */
    s;
  } catch (s) {
    if (s instanceof Error && s.message.split(`
`).some((o) => o.startsWith("https://svelte.dev/e/")))
      throw s;
    return s !== hr && console.warn("Failed to hydrate: ", s), t.recover === !1 && wo(), Na(), Ms(r), Xe(!1), Js(e, t);
  } finally {
    Xe(n), Ge(a);
  }
}
const zr = /* @__PURE__ */ new Map();
function Xs(e, { target: t, anchor: r, props: n = {}, events: a, context: i, intro: s = !0 }) {
  Na();
  var o = /* @__PURE__ */ new Set(), l = (h) => {
    for (var d = 0; d < h.length; d++) {
      var g = h[d];
      if (!o.has(g)) {
        o.add(g);
        var _ = nu(g);
        t.addEventListener(g, ln, { passive: _ });
        var b = zr.get(g);
        b === void 0 ? (document.addEventListener(g, ln, { passive: _ }), zr.set(g, 1)) : zr.set(g, b + 1);
      }
    }
  };
  l(Ba(Ys)), Fa.add(l);
  var u = void 0, v = Vo(() => {
    var h = r ?? t.appendChild(pt());
    return et(() => {
      if (i) {
        Ae({});
        var d = (
          /** @type {ComponentContext} */
          Ye
        );
        d.c = i;
      }
      a && (n.$$events = a), X && st(
        /** @type {TemplateNode} */
        h,
        null
      ), u = e(h, n) || {}, X && (ne.nodes_end = se), i && Ee();
    }), () => {
      var _;
      for (var d of o) {
        t.removeEventListener(d, ln);
        var g = (
          /** @type {number} */
          zr.get(d)
        );
        --g === 0 ? (document.removeEventListener(d, ln), zr.delete(d)) : zr.set(d, g);
      }
      Fa.delete(l), h !== r && ((_ = h.parentNode) == null || _.removeChild(h));
    };
  });
  return Da.set(u, v), u;
}
let Da = /* @__PURE__ */ new WeakMap();
function iu(e, t) {
  const r = Da.get(e);
  return r ? (Da.delete(e), r(t)) : Promise.resolve();
}
function yr(e, t, ...r) {
  var n = e, a = dt, i;
  Tr(() => {
    a !== (a = t()) && (i && (Ze(i), i = null), i = et(() => (
      /** @type {SnippetFn} */
      a(n, ...r)
    )));
  }, xn), X && (n = se);
}
function Qs(e) {
  Ye === null && vs(), Jr(() => {
    const t = Ar(e);
    if (typeof t == "function") return (
      /** @type {() => void} */
      t
    );
  });
}
function ci(e) {
  Ye === null && vs(), Qs(() => () => Ar(e));
}
const $a = 0, Nn = 1, xa = 2;
function su(e, t, r, n, a) {
  X && tr();
  var i = e, s = Ye, o = xe, l, u, v, h = wr(
    /** @type {V} */
    void 0
  ), d = wr(void 0), g = !1;
  function _($, T) {
    g = !0, T && ($t(b), ot(b), Vr(s));
    try {
      $ === $a && r && (l ? vn(l) : l = et(() => r(i))), $ === Nn && n && (u ? vn(u) : u = et(() => n(i, h))), $ !== $a && l && gr(l, () => l = null), $ !== Nn && u && gr(u, () => u = null), $ !== xa && v && gr(v, () => v = null);
    } finally {
      T && (Vr(null), ot(null), $t(null), C());
    }
  }
  var b = Tr(() => {
    if (o === (o = t())) return;
    let $ = X && Ci(o) === (i.data === aa);
    if ($ && (i = Kn(), Ge(i), Xe(!1), $ = !0), Ci(o)) {
      var T = o;
      g = !1, T.then(
        (k) => {
          T === o && (Qt(h, k), _(Nn, !0));
        },
        (k) => {
          if (T === o)
            throw Qt(d, k), _(xa, !0), d.v;
        }
      ), X ? r && (l = et(() => r(i))) : Tn(() => {
        g || _($a, !0);
      });
    } else
      Qt(h, o), _(Nn, !1);
    return $ && Xe(!0), () => o = xe;
  });
  X && (i = se);
}
function G(e, t, r = !1) {
  X && tr();
  var n = e, a = null, i = null, s = xe, o = r ? xn : 0, l = !1;
  const u = (g, _ = !0) => {
    l = !0, d(_, g);
  };
  var v = null;
  function h() {
    v !== null && (v.lastChild.remove(), n.before(v), v = null);
    var g = s ? a : i, _ = s ? i : a;
    g && vn(g), _ && gr(_, () => {
      s ? i = null : a = null;
    });
  }
  const d = (g, _) => {
    if (s === (s = g)) return;
    let b = !1;
    if (X) {
      const m = hs(n) === aa;
      !!s === m && (n = Kn(), Ge(n), Xe(!1), b = !0);
    }
    var $ = ni(), T = n;
    if ($ && (v = document.createDocumentFragment(), v.append(T = pt())), s ? a ?? (a = _ && et(() => _(T))) : i ?? (i = _ && et(() => _(T))), $) {
      var k = (
        /** @type {Batch} */
        he
      ), p = s ? a : i, y = s ? i : a;
      p && k.skipped_effects.delete(p), y && k.skipped_effects.add(y), k.add_callback(h);
    } else
      h();
    b && Xe(!0);
  };
  Tr(() => {
    l = !1, t(u), l || d(null, null);
  }, o), X && (n = se);
}
function pn(e, t) {
  return t;
}
function lu(e, t, r) {
  for (var n = e.items, a = [], i = t.length, s = 0; s < i; s++)
    si(t[s].e, a, !0);
  var o = i > 0 && a.length === 0 && r !== null;
  if (o) {
    var l = (
      /** @type {Element} */
      /** @type {Element} */
      r.parentNode
    );
    Ms(l), l.append(
      /** @type {Element} */
      r
    ), n.clear(), bt(e, t[0].prev, t[i - 1].next);
  }
  qs(a, () => {
    for (var u = 0; u < i; u++) {
      var v = t[u];
      o || (n.delete(v.k), bt(e, v.prev, v.next)), Ze(v.e, !o);
    }
  });
}
function gn(e, t, r, n, a, i = null) {
  var s = e, o = { flags: t, items: /* @__PURE__ */ new Map(), first: null }, l = (t & ls) !== 0;
  if (l) {
    var u = (
      /** @type {Element} */
      e
    );
    s = X ? Ge(
      /** @type {Comment | Text} */
      /* @__PURE__ */ Qe(u)
    ) : u.appendChild(pt());
  }
  X && tr();
  var v = null, h = !1, d = /* @__PURE__ */ new Map(), g = /* @__PURE__ */ $s(() => {
    var T = r();
    return ia(T) ? T : T == null ? [] : Ba(T);
  }), _, b;
  function $() {
    ou(
      b,
      _,
      o,
      d,
      s,
      a,
      t,
      n,
      r
    ), i !== null && (_.length === 0 ? v ? vn(v) : v = et(() => i(s)) : v !== null && gr(v, () => {
      v = null;
    }));
  }
  Tr(() => {
    b ?? (b = /** @type {Effect} */
    ne), _ = /** @type {V[]} */
    c(g);
    var T = _.length;
    if (h && T === 0)
      return;
    h = T === 0;
    let k = !1;
    if (X) {
      var p = hs(s) === aa;
      p !== (T === 0) && (s = Kn(), Ge(s), Xe(!1), k = !0);
    }
    if (X) {
      for (var y = null, m, f = 0; f < T; f++) {
        if (se.nodeType === Wr && /** @type {Comment} */
        se.data === Ha) {
          s = /** @type {Comment} */
          se, k = !0, Xe(!1);
          break;
        }
        var w = _[f], I = n(w, f);
        m = ja(
          se,
          o,
          y,
          null,
          w,
          I,
          f,
          a,
          t,
          r
        ), o.items.set(I, m), y = m;
      }
      T > 0 && Ge(Kn());
    }
    if (X)
      T === 0 && i && (v = et(() => i(s)));
    else if (ni()) {
      var U = /* @__PURE__ */ new Set(), F = (
        /** @type {Batch} */
        he
      );
      for (f = 0; f < T; f += 1) {
        w = _[f], I = n(w, f);
        var Q = o.items.get(I) ?? d.get(I);
        Q ? (t & (ra | na)) !== 0 && el(Q, w, f, t) : (m = ja(
          null,
          o,
          null,
          null,
          w,
          I,
          f,
          a,
          t,
          r,
          !0
        ), d.set(I, m)), U.add(I);
      }
      for (const [ee, _e] of o.items)
        U.has(ee) || F.skipped_effects.add(_e.e);
      F.add_callback($);
    } else
      $();
    k && Xe(!0), c(g);
  }), X && (s = se);
}
function ou(e, t, r, n, a, i, s, o, l) {
  var M, K, J, S;
  var u = (s & Yl) !== 0, v = (s & (ra | na)) !== 0, h = t.length, d = r.items, g = r.first, _ = g, b, $ = null, T, k = [], p = [], y, m, f, w;
  if (u)
    for (w = 0; w < h; w += 1)
      y = t[w], m = o(y, w), f = d.get(m), f !== void 0 && ((M = f.a) == null || M.measure(), (T ?? (T = /* @__PURE__ */ new Set())).add(f));
  for (w = 0; w < h; w += 1) {
    if (y = t[w], m = o(y, w), f = d.get(m), f === void 0) {
      var I = n.get(m);
      if (I !== void 0) {
        n.delete(m), d.set(m, I);
        var U = $ ? $.next : _;
        bt(r, $, I), bt(r, I, U), ka(I, U, a), $ = I;
      } else {
        var F = _ ? (
          /** @type {TemplateNode} */
          _.e.nodes_start
        ) : a;
        $ = ja(
          F,
          r,
          $,
          $ === null ? r.first : $.next,
          y,
          m,
          w,
          i,
          s,
          l
        );
      }
      d.set(m, $), k = [], p = [], _ = $.next;
      continue;
    }
    if (v && el(f, y, w, s), (f.e.f & vt) !== 0 && (vn(f.e), u && ((K = f.a) == null || K.unfix(), (T ?? (T = /* @__PURE__ */ new Set())).delete(f))), f !== _) {
      if (b !== void 0 && b.has(f)) {
        if (k.length < p.length) {
          var Q = p[0], ee;
          $ = Q.prev;
          var _e = k[0], $e = k[k.length - 1];
          for (ee = 0; ee < k.length; ee += 1)
            ka(k[ee], Q, a);
          for (ee = 0; ee < p.length; ee += 1)
            b.delete(p[ee]);
          bt(r, _e.prev, $e.next), bt(r, $, _e), bt(r, $e, Q), _ = Q, $ = $e, w -= 1, k = [], p = [];
        } else
          b.delete(f), ka(f, _, a), bt(r, f.prev, f.next), bt(r, f, $ === null ? r.first : $.next), bt(r, $, f), $ = f;
        continue;
      }
      for (k = [], p = []; _ !== null && _.k !== m; )
        (_.e.f & vt) === 0 && (b ?? (b = /* @__PURE__ */ new Set())).add(_), p.push(_), _ = _.next;
      if (_ === null)
        continue;
      f = _;
    }
    k.push(f), $ = f, _ = f.next;
  }
  if (_ !== null || b !== void 0) {
    for (var pe = b === void 0 ? [] : Ba(b); _ !== null; )
      (_.e.f & vt) === 0 && pe.push(_), _ = _.next;
    var Oe = pe.length;
    if (Oe > 0) {
      var P = (s & ls) !== 0 && h === 0 ? a : null;
      if (u) {
        for (w = 0; w < Oe; w += 1)
          (J = pe[w].a) == null || J.measure();
        for (w = 0; w < Oe; w += 1)
          (S = pe[w].a) == null || S.fix();
      }
      lu(r, pe, P);
    }
  }
  u && Tn(() => {
    var R;
    if (T !== void 0)
      for (f of T)
        (R = f.a) == null || R.apply();
  }), e.first = r.first && r.first.e, e.last = $ && $.e;
  for (var W of n.values())
    Ze(W.e);
  n.clear();
}
function el(e, t, r, n) {
  (n & ra) !== 0 && Qt(e.v, t), (n & na) !== 0 ? Qt(
    /** @type {Value<number>} */
    e.i,
    r
  ) : e.i = r;
}
function ja(e, t, r, n, a, i, s, o, l, u, v) {
  var h = (l & ra) !== 0, d = (l & Zl) === 0, g = h ? d ? /* @__PURE__ */ ri(a, !1, !1) : wr(a) : a, _ = (l & na) === 0 ? s : wr(s), b = {
    i: _,
    v: g,
    k: i,
    a: null,
    // @ts-expect-error
    e: null,
    prev: r,
    next: n
  };
  try {
    if (e === null) {
      var $ = document.createDocumentFragment();
      $.append(e = pt());
    }
    return b.e = et(() => o(
      /** @type {Node} */
      e,
      g,
      _,
      u
    ), X), b.e.prev = r && r.e, b.e.next = n && n.e, r === null ? v || (t.first = b) : (r.next = b, r.e.next = b.e), n !== null && (n.prev = b, n.e.prev = b.e), b;
  } finally {
  }
}
function ka(e, t, r) {
  for (var n = e.next ? (
    /** @type {TemplateNode} */
    e.next.e.nodes_start
  ) : r, a = t ? (
    /** @type {TemplateNode} */
    t.e.nodes_start
  ) : r, i = (
    /** @type {TemplateNode} */
    e.e.nodes_start
  ); i !== null && i !== n; ) {
    var s = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ kt(i)
    );
    a.before(i), i = s;
  }
}
function bt(e, t, r) {
  t === null ? e.first = r : (t.next = r, t.e.next = r && r.e), r !== null && (r.prev = t, r.e.prev = t && t.e);
}
function uu(e, t, r = !1, n = !1, a = !1) {
  var i = e, s = "";
  z(() => {
    var o = (
      /** @type {Effect} */
      ne
    );
    if (s === (s = t() ?? "")) {
      X && tr();
      return;
    }
    if (o.nodes_start !== null && (js(
      o.nodes_start,
      /** @type {TemplateNode} */
      o.nodes_end
    ), o.nodes_start = o.nodes_end = null), s !== "") {
      if (X) {
        se.data;
        for (var l = tr(), u = l; l !== null && (l.nodeType !== Wr || /** @type {Comment} */
        l.data !== ""); )
          u = l, l = /** @type {TemplateNode} */
          /* @__PURE__ */ kt(l);
        if (l === null)
          throw kn(), hr;
        st(se, u), i = Ge(l);
        return;
      }
      var v = s + "";
      r ? v = `<svg>${v}</svg>` : n && (v = `<math>${v}</math>`);
      var h = ui(v);
      if ((r || n) && (h = /** @type {Element} */
      /* @__PURE__ */ Qe(h)), st(
        /** @type {TemplateNode} */
        /* @__PURE__ */ Qe(h),
        /** @type {TemplateNode} */
        h.lastChild
      ), r || n)
        for (; /* @__PURE__ */ Qe(h); )
          i.before(
            /** @type {Node} */
            /* @__PURE__ */ Qe(h)
          );
      else
        i.before(h);
    }
  });
}
function xt(e, t, r) {
  X && tr();
  var n = e, a, i, s = null, o = null;
  function l() {
    i && (gr(i), i = null), s && (s.lastChild.remove(), n.before(s), s = null), i = o, o = null;
  }
  Tr(() => {
    if (a !== (a = t())) {
      var u = ni();
      if (a) {
        var v = n;
        u && (s = document.createDocumentFragment(), s.append(v = pt()), i && he.skipped_effects.add(i)), o = et(() => r(v, a));
      }
      u ? he.add_callback(l) : l();
    }
  }, xn), X && (n = se);
}
function Nt(e, t) {
  ar(() => {
    var r = e.getRootNode(), n = (
      /** @type {ShadowRoot} */
      r.host ? (
        /** @type {ShadowRoot} */
        r
      ) : (
        /** @type {Document} */
        r.head ?? /** @type {Document} */
        r.ownerDocument.head
      )
    );
    if (!n.querySelector("#" + t.hash)) {
      const a = document.createElement("style");
      a.id = t.hash, a.textContent = t.code, n.appendChild(a);
    }
  });
}
function fi(e, t, r) {
  ar(() => {
    var n = Ar(() => t(e, r == null ? void 0 : r()) || {});
    if (n != null && n.destroy)
      return () => (
        /** @type {Function} */
        n.destroy()
      );
  });
}
function cu(e, t) {
  var r = void 0, n;
  Tr(() => {
    r !== (r = t()) && (n && (Ze(n), n = null), r && (n = et(() => {
      ar(() => (
        /** @type {(node: Element) => void} */
        r(e)
      ));
    })));
  });
}
function tl(e) {
  var t, r, n = "";
  if (typeof e == "string" || typeof e == "number") n += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var a = e.length;
    for (t = 0; t < a; t++) e[t] && (r = tl(e[t])) && (n && (n += " "), n += r);
  } else for (r in e) e[r] && (n && (n += " "), n += r);
  return n;
}
function fu() {
  for (var e, t, r = 0, n = "", a = arguments.length; r < a; r++) (e = arguments[r]) && (t = tl(e)) && (n && (n += " "), n += t);
  return n;
}
function du(e) {
  return typeof e == "object" ? fu(e) : e ?? "";
}
const Fi = [...` 	
\r\f \v\uFEFF`];
function vu(e, t, r) {
  var n = e == null ? "" : "" + e;
  if (t && (n = n ? n + " " + t : t), r) {
    for (var a in r)
      if (r[a])
        n = n ? n + " " + a : a;
      else if (n.length)
        for (var i = a.length, s = 0; (s = n.indexOf(a, s)) >= 0; ) {
          var o = s + i;
          (s === 0 || Fi.includes(n[s - 1])) && (o === n.length || Fi.includes(n[o])) ? n = (s === 0 ? "" : n.substring(0, s)) + n.substring(o + 1) : s = o;
        }
  }
  return n === "" ? null : n;
}
function Di(e, t = !1) {
  var r = t ? " !important;" : ";", n = "";
  for (var a in e) {
    var i = e[a];
    i != null && i !== "" && (n += " " + a + ": " + i + r);
  }
  return n;
}
function Ta(e) {
  return e[0] !== "-" || e[1] !== "-" ? e.toLowerCase() : e;
}
function hu(e, t) {
  if (t) {
    var r = "", n, a;
    if (Array.isArray(t) ? (n = t[0], a = t[1]) : n = t, e) {
      e = String(e).replaceAll(/\s*\/\*.*?\*\/\s*/g, "").trim();
      var i = !1, s = 0, o = !1, l = [];
      n && l.push(...Object.keys(n).map(Ta)), a && l.push(...Object.keys(a).map(Ta));
      var u = 0, v = -1;
      const b = e.length;
      for (var h = 0; h < b; h++) {
        var d = e[h];
        if (o ? d === "/" && e[h - 1] === "*" && (o = !1) : i ? i === d && (i = !1) : d === "/" && e[h + 1] === "*" ? o = !0 : d === '"' || d === "'" ? i = d : d === "(" ? s++ : d === ")" && s--, !o && i === !1 && s === 0) {
          if (d === ":" && v === -1)
            v = h;
          else if (d === ";" || h === b - 1) {
            if (v !== -1) {
              var g = Ta(e.substring(u, v).trim());
              if (!l.includes(g)) {
                d !== ";" && h++;
                var _ = e.substring(u, h).trim();
                r += " " + _ + ";";
              }
            }
            u = h + 1, v = -1;
          }
        }
      }
    }
    return n && (r += Di(n)), a && (r += Di(a, !0)), r = r.trim(), r === "" ? null : r;
  }
  return e == null ? null : String(e);
}
function Br(e, t, r, n, a, i) {
  var s = e.__className;
  if (X || s !== r || s === void 0) {
    var o = vu(r, n, i);
    (!X || o !== e.getAttribute("class")) && (o == null ? e.removeAttribute("class") : t ? e.className = o : e.setAttribute("class", o)), e.__className = r;
  } else if (i && a !== i)
    for (var l in i) {
      var u = !!i[l];
      (a == null || u !== !!a[l]) && e.classList.toggle(l, u);
    }
  return i;
}
function Ca(e, t = {}, r, n) {
  for (var a in r) {
    var i = r[a];
    t[a] !== i && (r[a] == null ? e.style.removeProperty(a) : e.style.setProperty(a, i, n));
  }
}
function rl(e, t, r, n) {
  var a = e.__style;
  if (X || a !== t) {
    var i = hu(t, n);
    (!X || i !== e.getAttribute("style")) && (i == null ? e.removeAttribute("style") : e.style.cssText = i), e.__style = t;
  } else n && (Array.isArray(n) ? (Ca(e, r == null ? void 0 : r[0], n[0]), Ca(e, r == null ? void 0 : r[1], n[1], "important")) : Ca(e, r, n));
  return n;
}
function Jn(e, t, r = !1) {
  if (e.multiple) {
    if (t == null)
      return;
    if (!ia(t))
      return To();
    for (var n of e.options)
      n.selected = t.includes(ji(n));
    return;
  }
  for (n of e.options) {
    var a = ji(n);
    if (Fo(a, t)) {
      n.selected = !0;
      return;
    }
  }
  (!r || t !== void 0) && (e.selectedIndex = -1);
}
function nl(e) {
  var t = new MutationObserver(() => {
    Jn(e, e.__value);
  });
  t.observe(e, {
    // Listen to option element changes
    childList: !0,
    subtree: !0,
    // because of <optgroup>
    // Listen to option element value attribute changes
    // (doesn't get notified of select value changes,
    // because that property is not reflected as an attribute)
    attributes: !0,
    attributeFilter: ["value"]
  }), ai(() => {
    t.disconnect();
  });
}
function ji(e) {
  return "__value" in e ? e.__value : e.value;
}
const cr = Symbol("class"), an = Symbol("style"), al = Symbol("is custom element"), il = Symbol("is html");
function Cn(e) {
  if (X) {
    var t = !1, r = () => {
      if (!t) {
        if (t = !0, e.hasAttribute("value")) {
          var n = e.value;
          je(e, "value", null), e.value = n;
        }
        if (e.hasAttribute("checked")) {
          var a = e.checked;
          je(e, "checked", null), e.checked = a;
        }
      }
    };
    e.__on_r = r, Io(r), zs();
  }
}
function pu(e, t) {
  t ? e.hasAttribute("selected") || e.setAttribute("selected", "") : e.removeAttribute("selected");
}
function je(e, t, r, n) {
  var a = sl(e);
  X && (a[t] = e.getAttribute(t), t === "src" || t === "srcset" || t === "href" && e.nodeName === "LINK") || a[t] !== (a[t] = r) && (t === "loading" && (e[vo] = r), r == null ? e.removeAttribute(t) : typeof r != "string" && ll(e).includes(t) ? e[t] = r : e.setAttribute(t, r));
}
function gu(e, t, r, n, a = !1) {
  var i = sl(e), s = i[al], o = !i[il];
  let l = X && s;
  l && Xe(!1);
  var u = t || {}, v = e.tagName === "OPTION";
  for (var h in t)
    h in r || (r[h] = null);
  r.class ? r.class = du(r.class) : (n || r[cr]) && (r.class = null), r[an] && (r.style ?? (r.style = null));
  var d = ll(e);
  for (const p in r) {
    let y = r[p];
    if (v && p === "value" && y == null) {
      e.value = e.__value = "", u[p] = y;
      continue;
    }
    if (p === "class") {
      var g = e.namespaceURI === "http://www.w3.org/1999/xhtml";
      Br(e, g, y, n, t == null ? void 0 : t[cr], r[cr]), u[p] = y, u[cr] = r[cr];
      continue;
    }
    if (p === "style") {
      rl(e, y, t == null ? void 0 : t[an], r[an]), u[p] = y, u[an] = r[an];
      continue;
    }
    var _ = u[p];
    if (!(y === _ && !(y === void 0 && e.hasAttribute(p)))) {
      u[p] = y;
      var b = p[0] + p[1];
      if (b !== "$$")
        if (b === "on") {
          const m = {}, f = "$$" + p;
          let w = p.slice(2);
          var $ = Qo(w);
          if (Jo(w) && (w = w.slice(0, -7), m.capture = !0), !$ && _) {
            if (y != null) continue;
            e.removeEventListener(w, u[f], m), u[f] = null;
          }
          if (y != null)
            if ($)
              e[`__${w}`] = y, oi([w]);
            else {
              let I = function(U) {
                u[p].call(this, U);
              };
              u[f] = Zs(w, e, I, m);
            }
          else $ && (e[`__${w}`] = void 0);
        } else if (p === "style")
          je(e, p, y);
        else if (p === "autofocus")
          Do(
            /** @type {HTMLElement} */
            e,
            !!y
          );
        else if (!s && (p === "__value" || p === "value" && y != null))
          e.value = e.__value = y;
        else if (p === "selected" && v)
          pu(
            /** @type {HTMLOptionElement} */
            e,
            y
          );
        else {
          var T = p;
          o || (T = tu(T));
          var k = T === "defaultValue" || T === "defaultChecked";
          if (y == null && !s && !k)
            if (i[p] = null, T === "value" || T === "checked") {
              let m = (
                /** @type {HTMLInputElement} */
                e
              );
              const f = t === void 0;
              if (T === "value") {
                let w = m.defaultValue;
                m.removeAttribute(T), m.defaultValue = w, m.value = m.__value = f ? w : null;
              } else {
                let w = m.defaultChecked;
                m.removeAttribute(T), m.defaultChecked = w, m.checked = f ? w : !1;
              }
            } else
              e.removeAttribute(p);
          else k || d.includes(T) && (s || typeof y != "string") ? (e[T] = y, T in i && (i[T] = xe)) : typeof y != "function" && je(e, T, y);
        }
    }
  }
  return l && Xe(!0), u;
}
function di(e, t, r = [], n = [], a, i = !1) {
  Ts(r, n, (s) => {
    var o = void 0, l = {}, u = e.nodeName === "SELECT", v = !1;
    if (Tr(() => {
      var d = t(...s.map(c)), g = gu(e, o, d, a, i);
      v && u && "value" in d && Jn(
        /** @type {HTMLSelectElement} */
        e,
        d.value
      );
      for (let b of Object.getOwnPropertySymbols(l))
        d[b] || Ze(l[b]);
      for (let b of Object.getOwnPropertySymbols(d)) {
        var _ = d[b];
        b.description === ao && (!o || _ !== o[b]) && (l[b] && Ze(l[b]), l[b] = et(() => cu(e, () => _))), g[b] = _;
      }
      o = g;
    }), u) {
      var h = (
        /** @type {HTMLSelectElement} */
        e
      );
      ar(() => {
        Jn(
          h,
          /** @type {Record<string | symbol, any>} */
          o.value,
          !0
        ), nl(h);
      });
    }
    v = !0;
  });
}
function sl(e) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    e.__attributes ?? (e.__attributes = {
      [al]: e.nodeName.includes("-"),
      [il]: e.namespaceURI === no
    })
  );
}
var Ri = /* @__PURE__ */ new Map();
function ll(e) {
  var t = e.getAttribute("is") || e.nodeName, r = Ri.get(t);
  if (r) return r;
  Ri.set(t, r = []);
  for (var n, a = e, i = Element.prototype; i !== a; ) {
    n = so(a);
    for (var s in n)
      n[s].set && r.push(s);
    a = cs(a);
  }
  return r;
}
function An(e, t, r = t) {
  var n = /* @__PURE__ */ new WeakSet();
  jo(e, "input", async (a) => {
    var i = a ? e.defaultValue : e.value;
    if (i = Aa(e) ? Ea(i) : i, r(i), he !== null && n.add(he), await li(), i !== (i = t())) {
      var s = e.selectionStart, o = e.selectionEnd;
      e.value = i ?? "", o !== null && (e.selectionStart = s, e.selectionEnd = Math.min(o, e.value.length));
    }
  }), // If we are hydrating and the value has since changed,
  // then use the updated value from the input instead.
  (X && e.defaultValue !== e.value || // If defaultValue is set, then value == defaultValue
  // TODO Svelte 6: remove input.value check and set to empty string?
  Ar(t) == null && e.value) && (r(Aa(e) ? Ea(e.value) : e.value), he !== null && n.add(he)), ii(() => {
    var a = t();
    if (e === document.activeElement) {
      var i = (
        /** @type {Batch} */
        Rn ?? he
      );
      if (n.has(i))
        return;
    }
    Aa(e) && a === Ea(e.value) || e.type === "date" && !a && !e.value || a !== e.value && (e.value = a ?? "");
  });
}
function Aa(e) {
  var t = e.type;
  return t === "number" || t === "range";
}
function Ea(e) {
  return e === "" ? null : +e;
}
function qi(e, t) {
  return e === t || (e == null ? void 0 : e[Jt]) === t;
}
function _u(e = {}, t, r, n) {
  return ar(() => {
    var a, i;
    return ii(() => {
      a = i, i = [], Ar(() => {
        e !== r(...i) && (t(e, ...i), a && qi(r(...a), e) && t(null, ...a));
      });
    }), () => {
      Tn(() => {
        i && qi(r(...i), e) && t(null, ...i);
      });
    };
  }), e;
}
function ol(e, t, r) {
  if (e == null)
    return t(void 0), dt;
  const n = Ar(
    () => e.subscribe(
      t,
      // @ts-expect-error
      r
    )
  );
  return n.unsubscribe ? () => n.unsubscribe() : n;
}
const Nr = [];
function ir(e, t = dt) {
  let r = null;
  const n = /* @__PURE__ */ new Set();
  function a(o) {
    if (gs(e, o) && (e = o, r)) {
      const l = !Nr.length;
      for (const u of n)
        u[1](), Nr.push(u, e);
      if (l) {
        for (let u = 0; u < Nr.length; u += 2)
          Nr[u][0](Nr[u + 1]);
        Nr.length = 0;
      }
    }
  }
  function i(o) {
    a(o(
      /** @type {T} */
      e
    ));
  }
  function s(o, l = dt) {
    const u = [o, l];
    return n.add(u), n.size === 1 && (r = t(a, i) || dt), o(
      /** @type {T} */
      e
    ), () => {
      n.delete(u), n.size === 0 && r && (r(), r = null);
    };
  }
  return { set: a, update: i, subscribe: s };
}
function mu(e) {
  let t;
  return ol(e, (r) => t = r)(), t;
}
let on = !1, Ra = Symbol();
function ke(e, t, r) {
  const n = r[t] ?? (r[t] = {
    store: null,
    source: /* @__PURE__ */ ri(void 0),
    unsubscribe: dt
  });
  if (n.store !== e && !(Ra in r))
    if (n.unsubscribe(), n.store = e ?? null, e == null)
      n.source.v = void 0, n.unsubscribe = dt;
    else {
      var a = !0;
      n.unsubscribe = ol(e, (i) => {
        a ? n.source.v = i : A(n.source, i);
      }), a = !1;
    }
  return e && Ra in r ? mu(e) : c(n.source);
}
function ge(e, t) {
  return e.set(t), t;
}
function Ft() {
  const e = {};
  function t() {
    ai(() => {
      for (var r in e)
        e[r].unsubscribe();
      mr(e, Ra, {
        enumerable: !1,
        value: !0
      });
    });
  }
  return [e, t];
}
function bu() {
  on = !0;
}
function wu(e) {
  var t = on;
  try {
    return on = !1, [e(), on];
  } finally {
    on = t;
  }
}
const yu = {
  get(e, t) {
    if (!e.exclude.includes(t))
      return e.props[t];
  },
  set(e, t) {
    return !1;
  },
  getOwnPropertyDescriptor(e, t) {
    if (!e.exclude.includes(t) && t in e.props)
      return {
        enumerable: !0,
        configurable: !0,
        value: e.props[t]
      };
  },
  has(e, t) {
    return e.exclude.includes(t) ? !1 : t in e.props;
  },
  ownKeys(e) {
    return Reflect.ownKeys(e.props).filter((t) => !e.exclude.includes(t));
  }
};
// @__NO_SIDE_EFFECTS__
function vi(e, t, r) {
  return new Proxy(
    { props: e, exclude: t },
    yu
  );
}
const $u = {
  get(e, t) {
    let r = e.props.length;
    for (; r--; ) {
      let n = e.props[r];
      if (nn(n) && (n = n()), typeof n == "object" && n !== null && t in n) return n[t];
    }
  },
  set(e, t, r) {
    let n = e.props.length;
    for (; n--; ) {
      let a = e.props[n];
      nn(a) && (a = a());
      const i = Ot(a, t);
      if (i && i.set)
        return i.set(r), !0;
    }
    return !1;
  },
  getOwnPropertyDescriptor(e, t) {
    let r = e.props.length;
    for (; r--; ) {
      let n = e.props[r];
      if (nn(n) && (n = n()), typeof n == "object" && n !== null && t in n) {
        const a = Ot(n, t);
        return a && !a.configurable && (a.configurable = !0), a;
      }
    }
  },
  has(e, t) {
    if (t === Jt || t === Ja) return !1;
    for (let r of e.props)
      if (nn(r) && (r = r()), r != null && t in r) return !0;
    return !1;
  },
  ownKeys(e) {
    const t = [];
    for (let r of e.props)
      if (nn(r) && (r = r()), !!r) {
        for (const n in r)
          t.includes(n) || t.push(n);
        for (const n of Object.getOwnPropertySymbols(r))
          t.includes(n) || t.push(n);
      }
    return t;
  }
};
function ul(...e) {
  return new Proxy({ props: e }, $u);
}
function E(e, t, r, n) {
  var k;
  var a = (r & Ql) !== 0, i = (r & eo) !== 0, s = (
    /** @type {V} */
    n
  ), o = !0, l = () => (o && (o = !1, s = i ? Ar(
    /** @type {() => V} */
    n
  ) : (
    /** @type {V} */
    n
  )), s), u;
  if (a) {
    var v = Jt in e || Ja in e;
    u = ((k = Ot(e, t)) == null ? void 0 : k.set) ?? (v && t in e ? (p) => e[t] = p : void 0);
  }
  var h, d = !1;
  a ? [h, d] = wu(() => (
    /** @type {V} */
    e[t]
  )) : h = /** @type {V} */
  e[t], h === void 0 && n !== void 0 && (h = l(), u && (yo(), u(h)));
  var g;
  if (g = () => {
    var p = (
      /** @type {V} */
      e[t]
    );
    return p === void 0 ? l() : (o = !0, p);
  }, (r & Xl) === 0)
    return g;
  if (u) {
    var _ = e.$$legacy;
    return (
      /** @type {() => V} */
      (function(p, y) {
        return arguments.length > 0 ? ((!y || _ || d) && u(y ? g() : p), p) : g();
      })
    );
  }
  var b = !1, $ = ((r & Jl) !== 0 ? sa : $s)(() => (b = !1, g()));
  a && c($);
  var T = (
    /** @type {Effect} */
    ne
  );
  return (
    /** @type {() => V} */
    (function(p, y) {
      if (arguments.length > 0) {
        const m = y ? c($) : a ? ft(p) : p;
        return A($, m), b = !0, s !== void 0 && (s = m), p;
      }
      return Cr && b || (T.f & kr) !== 0 ? $.v : c($);
    })
  );
}
function xu(e) {
  return new ku(e);
}
var Lt, at;
class ku {
  /**
   * @param {ComponentConstructorOptions & {
   *  component: any;
   * }} options
   */
  constructor(t) {
    /** @type {any} */
    Fe(this, Lt);
    /** @type {Record<string, any>} */
    Fe(this, at);
    var i;
    var r = /* @__PURE__ */ new Map(), n = (s, o) => {
      var l = /* @__PURE__ */ ri(o, !1, !1);
      return r.set(s, l), l;
    };
    const a = new Proxy(
      { ...t.props || {}, $$events: {} },
      {
        get(s, o) {
          return c(r.get(o) ?? n(o, Reflect.get(s, o)));
        },
        has(s, o) {
          return o === Ja ? !0 : (c(r.get(o) ?? n(o, Reflect.get(s, o))), Reflect.has(s, o));
        },
        set(s, o, l) {
          return A(r.get(o) ?? n(o, l), l), Reflect.set(s, o, l);
        }
      }
    );
    Be(this, at, (t.hydrate ? au : Js)(t.component, {
      target: t.target,
      anchor: t.anchor,
      props: a,
      context: t.context,
      intro: t.intro ?? !1,
      recover: t.recover
    })), (!((i = t == null ? void 0 : t.props) != null && i.$$host) || t.sync === !1) && C(), Be(this, Lt, a.$$events);
    for (const s of Object.keys(Z(this, at)))
      s === "$set" || s === "$destroy" || s === "$on" || mr(this, s, {
        get() {
          return Z(this, at)[s];
        },
        /** @param {any} value */
        set(o) {
          Z(this, at)[s] = o;
        },
        enumerable: !0
      });
    Z(this, at).$set = /** @param {Record<string, any>} next */
    (s) => {
      Object.assign(a, s);
    }, Z(this, at).$destroy = () => {
      iu(Z(this, at));
    };
  }
  /** @param {Record<string, any>} props */
  $set(t) {
    Z(this, at).$set(t);
  }
  /**
   * @param {string} event
   * @param {(...args: any[]) => any} callback
   * @returns {any}
   */
  $on(t, r) {
    Z(this, Lt)[t] = Z(this, Lt)[t] || [];
    const n = (...a) => r.call(this, ...a);
    return Z(this, Lt)[t].push(n), () => {
      Z(this, Lt)[t] = Z(this, Lt)[t].filter(
        /** @param {any} fn */
        (a) => a !== n
      );
    };
  }
  $destroy() {
    Z(this, at).$destroy();
  }
}
Lt = new WeakMap(), at = new WeakMap();
let cl;
typeof HTMLElement == "function" && (cl = class extends HTMLElement {
  /**
   * @param {*} $$componentCtor
   * @param {*} $$slots
   * @param {*} use_shadow_dom
   */
  constructor(t, r, n) {
    super();
    /** The Svelte component constructor */
    qe(this, "$$ctor");
    /** Slots */
    qe(this, "$$s");
    /** @type {any} The Svelte component instance */
    qe(this, "$$c");
    /** Whether or not the custom element is connected */
    qe(this, "$$cn", !1);
    /** @type {Record<string, any>} Component props data */
    qe(this, "$$d", {});
    /** `true` if currently in the process of reflecting component props back to attributes */
    qe(this, "$$r", !1);
    /** @type {Record<string, CustomElementPropDefinition>} Props definition (name, reflected, type etc) */
    qe(this, "$$p_d", {});
    /** @type {Record<string, EventListenerOrEventListenerObject[]>} Event listeners */
    qe(this, "$$l", {});
    /** @type {Map<EventListenerOrEventListenerObject, Function>} Event listener unsubscribe functions */
    qe(this, "$$l_u", /* @__PURE__ */ new Map());
    /** @type {any} The managed render effect for reflecting attributes */
    qe(this, "$$me");
    this.$$ctor = t, this.$$s = r, n && this.attachShadow({ mode: "open" });
  }
  /**
   * @param {string} type
   * @param {EventListenerOrEventListenerObject} listener
   * @param {boolean | AddEventListenerOptions} [options]
   */
  addEventListener(t, r, n) {
    if (this.$$l[t] = this.$$l[t] || [], this.$$l[t].push(r), this.$$c) {
      const a = this.$$c.$on(t, r);
      this.$$l_u.set(r, a);
    }
    super.addEventListener(t, r, n);
  }
  /**
   * @param {string} type
   * @param {EventListenerOrEventListenerObject} listener
   * @param {boolean | AddEventListenerOptions} [options]
   */
  removeEventListener(t, r, n) {
    if (super.removeEventListener(t, r, n), this.$$c) {
      const a = this.$$l_u.get(r);
      a && (a(), this.$$l_u.delete(r));
    }
  }
  async connectedCallback() {
    if (this.$$cn = !0, !this.$$c) {
      let t = function(a) {
        return (i) => {
          const s = document.createElement("slot");
          a !== "default" && (s.name = a), x(i, s);
        };
      };
      if (await Promise.resolve(), !this.$$cn || this.$$c)
        return;
      const r = {}, n = Tu(this);
      for (const a of this.$$s)
        a in n && (a === "default" && !this.$$d.children ? (this.$$d.children = t(a), r.default = !0) : r[a] = t(a));
      for (const a of this.attributes) {
        const i = this.$$g_p(a.name);
        i in this.$$d || (this.$$d[i] = Vn(i, a.value, this.$$p_d, "toProp"));
      }
      for (const a in this.$$p_d)
        !(a in this.$$d) && this[a] !== void 0 && (this.$$d[a] = this[a], delete this[a]);
      this.$$c = xu({
        component: this.$$ctor,
        target: this.shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: r,
          $$host: this
        }
      }), this.$$me = Wo(() => {
        ii(() => {
          var a;
          this.$$r = !0;
          for (const i of Bn(this.$$c)) {
            if (!((a = this.$$p_d[i]) != null && a.reflect)) continue;
            this.$$d[i] = this.$$c[i];
            const s = Vn(
              i,
              this.$$d[i],
              this.$$p_d,
              "toAttribute"
            );
            s == null ? this.removeAttribute(this.$$p_d[i].attribute || i) : this.setAttribute(this.$$p_d[i].attribute || i, s);
          }
          this.$$r = !1;
        });
      });
      for (const a in this.$$l)
        for (const i of this.$$l[a]) {
          const s = this.$$c.$on(a, i);
          this.$$l_u.set(i, s);
        }
      this.$$l = {};
    }
  }
  // We don't need this when working within Svelte code, but for compatibility of people using this outside of Svelte
  // and setting attributes through setAttribute etc, this is helpful
  /**
   * @param {string} attr
   * @param {string} _oldValue
   * @param {string} newValue
   */
  attributeChangedCallback(t, r, n) {
    var a;
    this.$$r || (t = this.$$g_p(t), this.$$d[t] = Vn(t, n, this.$$p_d, "toProp"), (a = this.$$c) == null || a.$set({ [t]: this.$$d[t] }));
  }
  disconnectedCallback() {
    this.$$cn = !1, Promise.resolve().then(() => {
      !this.$$cn && this.$$c && (this.$$c.$destroy(), this.$$me(), this.$$c = void 0);
    });
  }
  /**
   * @param {string} attribute_name
   */
  $$g_p(t) {
    return Bn(this.$$p_d).find(
      (r) => this.$$p_d[r].attribute === t || !this.$$p_d[r].attribute && r.toLowerCase() === t
    ) || t;
  }
});
function Vn(e, t, r, n) {
  var i;
  const a = (i = r[e]) == null ? void 0 : i.type;
  if (t = a === "Boolean" && typeof t != "boolean" ? t != null : t, !n || !r[e])
    return t;
  if (n === "toAttribute")
    switch (a) {
      case "Object":
      case "Array":
        return t == null ? null : JSON.stringify(t);
      case "Boolean":
        return t ? "" : null;
      case "Number":
        return t ?? null;
      default:
        return t;
    }
  else
    switch (a) {
      case "Object":
      case "Array":
        return t && JSON.parse(t);
      case "Boolean":
        return t;
      // conversion already handled above
      case "Number":
        return t != null ? +t : t;
      default:
        return t;
    }
}
function Tu(e) {
  const t = {};
  return e.childNodes.forEach((r) => {
    t[
      /** @type {Element} node */
      r.slot || "default"
    ] = !0;
  }), t;
}
function Le(e, t, r, n, a, i) {
  let s = class extends cl {
    constructor() {
      super(e, r, a), this.$$p_d = t;
    }
    static get observedAttributes() {
      return Bn(t).map(
        (o) => (t[o].attribute || o).toLowerCase()
      );
    }
  };
  return Bn(t).forEach((o) => {
    mr(s.prototype, o, {
      get() {
        return this.$$c && o in this.$$c ? this.$$c[o] : this.$$d[o];
      },
      set(l) {
        var h;
        l = Vn(o, l, t), this.$$d[o] = l;
        var u = this.$$c;
        if (u) {
          var v = (h = Ot(u, o)) == null ? void 0 : h.get;
          v ? u[o] = l : u.$set({ [o]: l });
        }
      }
    });
  }), n.forEach((o) => {
    mr(s.prototype, o, {
      get() {
        var l;
        return (l = this.$$c) == null ? void 0 : l[o];
      }
    });
  }), e.element = /** @type {any} */
  s, s;
}
const Wi = '<path fill="currentColor" fill-rule="evenodd" d="M3.5 6a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5M6 23V8H1v15zM8 8h4.5v1.946C13.216 9.005 14.746 8 17.5 8c4.33 0 5.5 4.32 5.5 7v8h-5v-8c0-1-.5-3-2.5-3c-1.42 0-2.42 1.008-3 1.951V23H8z" clip-rule="evenodd"/>', Vi = '<path fill="currentColor" fill-rule="evenodd" d="M11.5 5.5V3.25A2.25 2.25 0 1 0 9.25 5.5zm-8 1a2.5 2.5 0 0 0 0 5H9a2.5 2.5 0 0 0 0-5zm11.5 6a2.5 2.5 0 0 0 0 5h5.5a2.5 2.5 0 0 0 0-5zm-2.5 6h2.25a2.25 2.25 0 1 1-2.25 2.25zm6-7h2.25a2.25 2.25 0 1 0-2.25-2.25zm-15.25 1H5.5v2.25a2.25 2.25 0 1 1-2.25-2.25M17.5 9V3.5a2.5 2.5 0 0 0-5 0V9a2.5 2.5 0 0 0 5 0m-6 6v5.5a2.5 2.5 0 0 1-5 0V15a2.5 2.5 0 0 1 5 0" clip-rule="evenodd"/>', Fn = {
  // Lucide icons
  key: '<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="m15.5 7.5l2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4m2-2l-9.6 9.6"/><circle cx="7.5" cy="15.5" r="5.5"/></g>',
  mail: '<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="m22 7l-8.991 5.727a2 2 0 0 1-2.009 0L2 7"/><rect width="20" height="16" x="2" y="4" rx="2"/></g>',
  inbox: '<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M22 12h-6l-2 3h-4l-2-3H2"/><path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11"/></g>',
  check: '<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 6L9 17l-5-5"/>',
  user: '<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M18 20a6 6 0 0 0-12 0"/><circle cx="12" cy="10" r="4"/><circle cx="12" cy="12" r="10"/></g>',
  // Tabler icons
  // tabler/circle-dashed-check
  circledashed: '<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.56 3.69a9 9 0 0 0-2.92 1.95M3.69 8.56A9 9 0 0 0 3 12m.69 3.44a9 9 0 0 0 1.95 2.92m2.92 1.95A9 9 0 0 0 12 21m3.44-.69a9 9 0 0 0 2.92-1.95m1.95-2.92A9 9 0 0 0 21 12m-.69-3.44a9 9 0 0 0-1.95-2.92m-2.92-1.95A9 9 0 0 0 12 3m-3 9l2 2l4-4"/>',
  // tabler/circle-check-filled
  circlecheck: '<path fill="currentColor" d="M17 3.34a10 10 0 1 1-14.995 8.984L2 12l.005-.324A10 10 0 0 1 17 3.34m-1.293 5.953a1 1 0 0 0-1.32-.083l-.094.083L11 12.585l-1.293-1.292l-.094-.083a1 1 0 0 0-1.403 1.403l.083.094l2 2l.094.083a1 1 0 0 0 1.226 0l.094-.083l4-4l.083-.094a1 1 0 0 0-.083-1.32"/>',
  // tabler/alert-circle-filled
  circlealert: '<path fill="currentColor" d="M12 2c5.523 0 10 4.477 10 10a10 10 0 0 1-19.995.324L2 12l.004-.28C2.152 6.327 6.57 2 12 2m.01 13l-.127.007a1 1 0 0 0 0 1.986L12 17l.127-.007a1 1 0 0 0 0-1.986zM12 7a1 1 0 0 0-.993.883L11 8v4l.007.117a1 1 0 0 0 1.986 0L13 12V8l-.007-.117A1 1 0 0 0 12 7"/>',
  // tabler/eye
  eye: '<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0-4 0"/><path d="M21 12q-3.6 6-9 6t-9-6q3.6-6 9-6t9 6"/></g>',
  // tabler/eye-off
  eyeoff: '<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M10.585 10.587a2 2 0 0 0 2.829 2.828"/><path d="M16.681 16.673A8.7 8.7 0 0 1 12 18q-5.4 0-9-6q1.908-3.18 4.32-4.674m2.86-1.146A9 9 0 0 1 12 6q5.4 0 9 6q-1 1.665-2.138 2.87M3 3l18 18"/></g>',
  // Brands
  // simple-icons/apple
  apple: '<path fill="currentColor" d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04c-2.04.027-3.91 1.183-4.961 3.014c-2.117 3.675-.546 9.103 1.519 12.09c1.013 1.454 2.208 3.09 3.792 3.039c1.52-.065 2.09-.987 3.935-.987c1.831 0 2.35.987 3.96.948c1.637-.026 2.676-1.48 3.676-2.948c1.156-1.688 1.636-3.325 1.662-3.415c-.039-.013-3.182-1.221-3.22-4.857c-.026-3.04 2.48-4.494 2.597-4.559c-1.429-2.09-3.623-2.324-4.39-2.376c-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83c-1.207.052-2.662.805-3.532 1.818c-.78.896-1.454 2.338-1.273 3.714c1.338.104 2.715-.688 3.559-1.701"/>',
  // streamline-logos/microsoft-azure-logo-solid
  azure: '<path fill="currentColor" fill-rule="evenodd" d="M13 3L6.5 8.5L1 18h5zm1 1.5L11 12l5 6l-9 2h16z" clip-rule="evenodd"/>',
  // streamline-logos/bitbucket-logo-solid
  bitbucket: '<path fill="currentColor" fill-rule="evenodd" d="M1.58 2h20.84a.5.5 0 0 1 .494.574L22.025 8.5H8.5l1 6.5h5l.77-5h6.53l-1.736 11.574a.5.5 0 0 1-.495.426H4.431a.5.5 0 0 1-.495-.426l-2.85-19A.5.5 0 0 1 1.581 2Z" clip-rule="evenodd"/>',
  // streamline-logos/discord-logo-1-solid
  discord: '<path fill="currentColor" fill-rule="evenodd" d="M2 2.5A1.5 1.5 0 0 1 3.5 1h16A1.5 1.5 0 0 1 21 2.5v20.707l-4-4V20.5H3.5A1.5 1.5 0 0 1 2 19zm4.905 5.451c-1.008 1.8-1.381 3.515-1.404 5.82a.48.48 0 0 0 .174.377c.946.786 1.675 1.109 3.018 1.31a.49.49 0 0 0 .48-.216l.625-.938a.52.52 0 0 1 .555-.213c.405.096 1.084.234 1.647.234s1.242-.138 1.647-.234a.52.52 0 0 1 .555.213l.626.938a.49.49 0 0 0 .48.215c1.342-.2 2.071-.523 3.017-1.309a.48.48 0 0 0 .174-.377c-.023-2.305-.396-4.02-1.404-5.82a.4.4 0 0 0-.098-.12a6.4 6.4 0 0 0-2.646-1.285a.46.46 0 0 0-.506.258a.5.5 0 0 1-.5.275A15 15 0 0 0 12 7c-.396 0-.912.035-1.346.079a.5.5 0 0 1-.498-.275a.46.46 0 0 0-.507-.258a6.4 6.4 0 0 0-2.646 1.285a.4.4 0 0 0-.098.12M9 11a1 1 0 1 0 2 0a1 1 0 0 0-2 0m5 1a1 1 0 1 1 0-2a1 1 0 0 1 0 2" clip-rule="evenodd"/>',
  // simple-icons/facebook
  facebook: '<path fill="currentColor" d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978c.401 0 .955.042 1.468.103a9 9 0 0 1 1.141.195v3.325a9 9 0 0 0-.653-.036a27 27 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.7 1.7 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103l-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647"/>',
  // simple-icons/figma
  figma: '<path fill="currentColor" d="M15.852 8.981h-4.588V0h4.588c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.491-4.49 4.491M12.735 7.51h3.117c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-3.117zm0 1.471H8.148c-2.476 0-4.49-2.014-4.49-4.49S5.672 0 8.148 0h4.588v8.981zm-4.587-7.51c-1.665 0-3.019 1.355-3.019 3.019s1.354 3.02 3.019 3.02h3.117V1.471zm4.587 15.019H8.148c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h4.588v8.98zM8.148 8.981c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h3.117V8.981zM8.172 24c-2.489 0-4.515-2.014-4.515-4.49s2.014-4.49 4.49-4.49h4.588v4.441c0 2.503-2.047 4.539-4.563 4.539m-.024-7.51a3.023 3.023 0 0 0-3.019 3.019c0 1.665 1.365 3.019 3.044 3.019c1.705 0 3.093-1.376 3.093-3.068v-2.97zm7.704 0h-.098c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h.098c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.49-4.49 4.49m-.097-7.509c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h.098c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019z"/>',
  // simple-icons/flydotio
  fly: '<path fill="currentColor" d="M11.987 0c-2.45-.01-5.002.925-6.541 2.897c-1.17 1.502-1.664 3.474-1.49 5.356c.29 2.112 1.476 3.96 2.676 5.672a41.5 41.5 0 0 0 4.216 4.831c-1.063.832-1.943 2.286-1.357 3.644c.821 2.32 4.665 2.05 5.122-.372c.39-1.288-.694-2.533-1.428-3.309c2.388-2.431 4.706-5.036 6.17-8.145c.595-1.32.902-2.802.614-4.24c-.28-2.341-1.823-4.473-3.967-5.46C14.76.266 13.364.016 11.987 0m-.236 1.577v15.534C9.881 13.483 7.724 9.266 8.73 5.069c.35-1.539 1.253-3.309 3.02-3.492m1.996.04c1.534.357 3.031 1.096 3.906 2.48c1.3 1.93 1.318 4.55.1 6.521c-1.268 2.395-3.06 4.463-4.916 6.415c1.472-2.974 3.074-6.106 3.182-9.5c-.043-2.08-.438-4.612-2.272-5.916M11.97 20.103c.848.342 1.597 1.983.153 2.173c-.664.15-1.367-.599-.995-1.222c.213-.355.488-.73.842-.95"/>',
  // simple-icons/github
  github: '<path fill="currentColor" d="M12 .297c-6.63 0-12 5.373-12 12c0 5.303 3.438 9.8 8.205 11.385c.6.113.82-.258.82-.577c0-.285-.01-1.04-.015-2.04c-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729c1.205.084 1.838 1.236 1.838 1.236c1.07 1.835 2.809 1.305 3.495.998c.108-.776.417-1.305.76-1.605c-2.665-.3-5.466-1.332-5.466-5.93c0-1.31.465-2.38 1.235-3.22c-.135-.303-.54-1.523.105-3.176c0 0 1.005-.322 3.3 1.23c.96-.267 1.98-.399 3-.405c1.02.006 2.04.138 3 .405c2.28-1.552 3.285-1.23 3.285-1.23c.645 1.653.24 2.873.12 3.176c.765.84 1.23 1.91 1.23 3.22c0 4.61-2.805 5.625-5.475 5.92c.42.36.81 1.096.81 2.22c0 1.606-.015 2.896-.015 3.286c0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>',
  // simple-icons/gitlab
  gitlab: '<path fill="currentColor" d="m23.6 9.593l-.033-.086L20.3.98a.85.85 0 0 0-.336-.405a.875.875 0 0 0-1 .054a.9.9 0 0 0-.29.44L16.47 7.818H7.537L5.333 1.07a.86.86 0 0 0-.29-.441a.875.875 0 0 0-1-.054a.86.86 0 0 0-.336.405L.433 9.502l-.032.086a6.066 6.066 0 0 0 2.012 7.01l.01.009l.03.021l4.977 3.727l2.462 1.863l1.5 1.132a1.01 1.01 0 0 0 1.22 0l1.499-1.132l2.461-1.863l5.006-3.75l.013-.01a6.07 6.07 0 0 0 2.01-7.002"/>',
  // simple-icons/google
  google: '<path fill="currentColor" d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133c-1.147 1.147-2.933 2.4-6.053 2.4c-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0C5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36c2.16-2.16 2.84-5.213 2.84-7.667c0-.76-.053-1.467-.173-2.053z"/>',
  // simple-icons/kakaotalk
  kakao: '<path fill="currentColor" d="M22.125 0H1.875C.839 0 0 .84 0 1.875v20.25C0 23.161.84 24 1.875 24h20.25C23.161 24 24 23.16 24 22.125V1.875C24 .839 23.16 0 22.125 0M12 18.75q-.888 0-1.732-.12c-.562.396-3.813 2.679-4.12 2.722c0 0-.125.049-.232-.014s-.088-.229-.088-.229c.032-.22.843-3.018.992-3.533c-2.745-1.36-4.57-3.769-4.57-6.513c0-4.246 4.365-7.688 9.75-7.688s9.75 3.442 9.75 7.688S17.385 18.75 12 18.75M8.05 9.867h-.878v3.342c0 .296-.252.537-.563.537s-.562-.24-.562-.537V9.867h-.878a.552.552 0 0 1 0-1.101h2.88a.552.552 0 0 1 0 1.101m10.987 2.957a.56.56 0 0 1 .109.417a.56.56 0 0 1-.219.37a.56.56 0 0 1-.338.114a.56.56 0 0 1-.45-.224l-1.319-1.747l-.195.195v1.227a.564.564 0 0 1-.562.563a.563.563 0 0 1-.563-.563V9.328a.563.563 0 0 1 1.125 0v1.21l1.57-1.57a.44.44 0 0 1 .311-.126c.14 0 .282.061.388.167a.56.56 0 0 1 .165.356a.44.44 0 0 1-.124.343l-1.282 1.281zm-8.35-3.502c-.095-.27-.383-.548-.75-.556c-.366.008-.654.286-.749.555l-1.345 3.541c-.171.53-.022.728.133.8a.9.9 0 0 0 .357.077c.235 0 .414-.095.468-.248l.279-.73h1.715l.279.73c.054.153.233.248.468.248a.9.9 0 0 0 .357-.078c.155-.071.304-.268.133-.8zm-1.311 2.443l.562-1.596l.561 1.596zm5.905 1.383a.53.53 0 0 1-.539.516h-1.804a.53.53 0 0 1-.54-.516v-3.82c0-.31.258-.562.575-.562s.574.252.574.562v3.305h1.195c.297 0 .54.231.54.515"/>',
  // simple-icons/keycloak
  keycloak: '<path fill="currentColor" d="m18.742 1.182l-12.493.002C4.155 4.784 2.079 8.393 0 12.002c2.071 3.612 4.162 7.214 6.252 10.816l12.49-.004l3.089-5.404h2.158v-.002H24L23.996 6.59h-2.168zM8.327 4.792h2.081l1.04 1.8l-3.12 5.413l3.117 5.403l-1.035 1.81H8.327a2048 2048 0 0 0-4.168-7.204zm6.241 0l2.086.003q2.088 3.608 4.166 7.222l-4.167 7.2h-2.08c-.382-.562-1.038-1.808-1.038-1.808l3.123-5.405l-3.124-5.413z"/>',
  // logos/linkedin-icon
  linkedin: Wi,
  linkedin_oidc: Wi,
  // simple-icons/notion
  notion: '<path fill="currentColor" d="M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L17.86 1.968c-.42-.326-.981-.7-2.055-.607L3.01 2.295c-.466.046-.56.28-.374.466zm.793 3.08v13.904c0 .747.373 1.027 1.214.98l14.523-.84c.841-.046.935-.56.935-1.167V6.354c0-.606-.233-.933-.748-.887l-15.177.887c-.56.047-.747.327-.747.933zm14.337.745c.093.42 0 .84-.42.888l-.7.14v10.264c-.608.327-1.168.514-1.635.514c-.748 0-.935-.234-1.495-.933l-4.577-7.186v6.952L12.21 19s0 .84-1.168.84l-3.222.186c-.093-.186 0-.653.327-.746l.84-.233V9.854L7.822 9.76c-.094-.42.14-1.026.793-1.073l3.456-.233l4.764 7.279v-6.44l-1.215-.139c-.093-.514.28-.887.747-.933zM1.936 1.035l13.31-.98c1.634-.14 2.055-.047 3.082.7l4.249 2.986c.7.513.934.653.934 1.213v16.378c0 1.026-.373 1.634-1.68 1.726l-15.458.934c-.98.047-1.448-.093-1.962-.747l-3.129-4.06c-.56-.747-.793-1.306-.793-1.96V2.667c0-.839.374-1.54 1.447-1.632"/>',
  // streamline-logos/slack-logo-solid
  slack: Vi,
  slack_oidc: Vi,
  // simple-icons/spotify-icon
  spotify: '<path fill="currentColor" d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12s12-5.4 12-12S18.66 0 12 0m5.521 17.34c-.24.359-.66.48-1.021.24c-2.82-1.74-6.36-2.101-10.561-1.141c-.418.122-.779-.179-.899-.539c-.12-.421.18-.78.54-.9c4.56-1.021 8.52-.6 11.64 1.32c.42.18.479.659.301 1.02m1.44-3.3c-.301.42-.841.6-1.262.3c-3.239-1.98-8.159-2.58-11.939-1.38c-.479.12-1.02-.12-1.14-.6s.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2m.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721c-.18-.601.18-1.2.72-1.381c4.26-1.26 11.28-1.02 15.721 1.621c.539.3.719 1.02.419 1.56c-.299.421-1.02.599-1.559.3"/>',
  // streamline-logos/x-twitter-logo
  twitter: '<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M17.27 22.464L1.5 1.536h5.23L22.5 22.464zm4.488-20.928l-8.313 8.915M2.242 22.464l8.307-8.908"/>',
  // simple-icons/twitch
  twitch: '<path fill="currentColor" d="M11.571 4.714h1.715v5.143H11.57zm4.715 0H18v5.143h-1.714zM6 0L1.714 4.286v15.428h5.143V24l4.286-4.286h3.428L22.286 12V0zm14.571 11.143l-3.428 3.428h-3.429l-3 3v-3H6.857V1.714h13.714Z"/>',
  // from https://streamlinehq.com
  workos: {
    body: '<path fill="currentColor" d="M55.7394 7.26562c-1.7929 1.26822 -3.3086 2.88638 -4.4565 4.75538l-0.2109 0.3533 -3.9817 6.8908 -16.5752 28.7343 15.6994 27.1355 -3.9783 6.8941c-3.1916 5.5467 -9.8651 8.0553 -15.9201 5.9845 -3.0877 -1.0303 -5.5918 -3.2914 -7.2823 -6.0718l-0.172 -0.2894L2.37821 53.1081c-0.90972 -1.5377 -1.37819 -3.3232 -1.37819 -5.1087 -0.003141 -1.682 0.41482 -3.3362 1.21341 -4.8125l0.16478 -0.2928L19.3302 13.5318c2.1751 -3.79883 6.1823 -6.16186 10.5503 -6.26281l0.2917 -0.00337h25.5672Zm5.2615 0.71963c5.9614 -2.00844 12.5039 0.38556 15.7694 5.73175l0.1507 0.2527 16.7008 28.921C94.5316 44.425 95 46.2139 95 47.9994c0 1.6739 -0.4117 3.3478 -1.2128 4.8147l-0.1654 0.2906 -16.952 29.3622c-2.175 3.7989 -6.1822 6.1619 -10.5502 6.2629l-0.2918 0.0033H40.2606c1.763 -1.2633 3.2784 -2.8579 4.4399 -4.7304l0.2275 -0.3782 3.9817 -6.8942L65.485 47.9994 49.7855 20.83l3.7611 -6.4835c1.6905 -2.9158 4.2635 -5.29538 7.4543 -6.36125Z" stroke-width="1"></path>',
    viewbox: "0 0 96 96"
  },
  // streamline-logos/zoom-icon
  zoom: '<path fill="currentColor" fill-rule="evenodd" d="M2.5 5.5A1.5 1.5 0 0 0 1 7v7.5A3.5 3.5 0 0 0 4.5 18h11a1.5 1.5 0 0 0 1.5-1.5V9a3.5 3.5 0 0 0-3.5-3.5zm20.5 1a.75.75 0 0 0-1.2-.6l-3.2 2.4a1.5 1.5 0 0 0-.6 1.2V14c0 .472.222.917.6 1.2l3.2 2.4A.75.75 0 0 0 23 17z" clip-rule="evenodd"/>'
};
var Cu = /* @__PURE__ */ Zo('<svg xmlns="http://www.w3.org/2000/svg"><!></svg>');
function er(e, t) {
  Ae(t, !0);
  let r = E(t, "name", 7), n = E(t, "size", 7, "10");
  var a = {
    get name() {
      return r();
    },
    set name(l) {
      r(l), C();
    },
    get size() {
      return n();
    },
    set size(l = "10") {
      n(l), C();
    }
  }, i = Se(), s = re(i);
  {
    var o = (l) => {
      var u = Cu(), v = D(u);
      uu(v, () => {
        var h;
        return ((h = Fn[r()]) == null ? void 0 : h.body) ?? Fn[r()];
      }, !0), O(u), z(() => {
        var h;
        je(u, "width", n()), je(u, "height", n()), je(u, "viewBox", ((h = Fn[r()]) == null ? void 0 : h.viewbox) ?? "0 0 24 24");
      }), x(l, u);
    };
    G(s, (l) => {
      Fn[r()] && l(o);
    });
  }
  return x(e, i), Ee(a);
}
Le(er, { name: {}, size: {} }, [], [], !0);
var Au = /* @__PURE__ */ N('<span class="icon svelte-1usr8g0"><!></span>'), Eu = /* @__PURE__ */ N('<div class="links flex"><!></div>'), Su = /* @__PURE__ */ N('<div class="sA-field"><label class="svelte-1usr8g0"><span class="svelte-1usr8g0"> </span> <span class="input svelte-1usr8g0"><!> <!></span></label> <!></div>');
const Iu = {
  hash: "svelte-1usr8g0",
  code: "label.svelte-1usr8g0 {display:block;}label.svelte-1usr8g0>span:where(.svelte-1usr8g0) {display:block;padding:2px;}.icon.svelte-1usr8g0 {position:absolute;left:0;margin:6px;}.input.svelte-1usr8g0 {position:relative;display:block;}"
};
function un(e, t) {
  Ae(t, !0), Nt(e, Iu);
  let r = E(t, "name", 7), n = E(t, "label", 7), a = E(t, "icon", 7), i = E(t, "children", 7), s = E(t, "links", 7);
  var o = {
    get name() {
      return r();
    },
    set name(k) {
      r(k), C();
    },
    get label() {
      return n();
    },
    set label(k) {
      n(k), C();
    },
    get icon() {
      return a();
    },
    set icon(k) {
      a(k), C();
    },
    get children() {
      return i();
    },
    set children(k) {
      i(k), C();
    },
    get links() {
      return s();
    },
    set links(k) {
      s(k), C();
    }
  }, l = Su(), u = D(l), v = D(u), h = D(v, !0);
  O(v);
  var d = L(v, 2), g = D(d);
  {
    var _ = (k) => {
      var p = Au(), y = D(p);
      er(y, {
        get name() {
          return a();
        },
        size: "21"
      }), O(p), x(k, p);
    };
    G(g, (k) => {
      a() && k(_);
    });
  }
  var b = L(g, 2);
  yr(b, i), O(d), O(u);
  var $ = L(u, 2);
  {
    var T = (k) => {
      var p = Eu(), y = D(p);
      yr(y, () => s() ?? dt), O(p), x(k, p);
    };
    G($, (k) => {
      s() && k(T);
    });
  }
  return O(l), z(() => j(h, n())), x(e, l), Ee(o);
}
Le(un, { name: {}, label: {}, icon: {}, children: {}, links: {} }, [], [], !0);
const Pu = {
  auth: {
    // --- Sign-up controls ---
    enable_signup: !0,
    enable_anonymous_sign_ins: !1,
    enable_manual_linking: !1,
    email: {
      // --- Sign-up controls (email) ---
      enable_signup: !0,
      enable_confirmations: !1,
      // require verified email before sign-in
      // --- Email & password updates ---
      double_confirm_changes: !0,
      // confirm email change on old+new addresses
      secure_password_change: !1,
      // require current password to change password
      max_frequency: "1m",
      // throttle outbound auth emails
      otp_length: 6,
      otp_expiry: 3600
      // seconds
    },
    // (Optional) Sign-up controls (SMS)
    // sms: {
    //   enable_signup: true,
    //   enable_confirmations: false,
    // },
    // --- MFA (TOTP) ---
    mfa: {
      required: !1,
      totp: {
        enroll_enabled: !0,
        verify_enabled: !0
      }
    }
  },
  passwordPolicy: {
    minLength: 8,
    requiredCharacters: "",
    // empty => no specific sets required
    ignoreLengthRecommendations: !1
  },
  deleteAccountFunction: null
};
var Lu = /* @__PURE__ */ N("<button><!></button>");
const Ou = {
  hash: "svelte-1fqsu09",
  code: "button.svelte-1fqsu09 {text-align:match-parent;border:none;background:none;color:var(--link-color);font-size:80%;}button.block.svelte-1fqsu09 {width:100%;text-align:center;}button.large.svelte-1fqsu09 {font-size:160%;line-height:1.1em;}"
};
function Ie(e, t) {
  Ae(t, !0), Nt(e, Ou);
  let r = E(t, "block", 7), n = E(t, "large", 7), a = E(t, "class", 7), i = E(t, "onclick", 7), s = E(t, "children", 7), o = /* @__PURE__ */ vi(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "block",
    "large",
    "class",
    "onclick",
    "children"
  ]);
  var l = {
    get block() {
      return r();
    },
    set block(d) {
      r(d), C();
    },
    get large() {
      return n();
    },
    set large(d) {
      n(d), C();
    },
    get class() {
      return a();
    },
    set class(d) {
      a(d), C();
    },
    get onclick() {
      return i();
    },
    set onclick(d) {
      i(d), C();
    },
    get children() {
      return s();
    },
    set children(d) {
      s(d), C();
    }
  }, u = Lu(), v = (d) => {
    var g;
    d.preventDefault(), (g = i()) == null || g();
  };
  di(
    u,
    (d) => ({
      role: "link",
      class: a(),
      type: "button",
      onclick: v,
      ...o,
      [cr]: d
    }),
    [() => ({ block: r(), large: n() })],
    void 0,
    "svelte-1fqsu09"
  );
  var h = D(u);
  return yr(h, s), O(u), x(e, u), Ee(l);
}
Le(Ie, { block: {}, large: {}, class: {}, onclick: {}, children: {} }, [], [], !0);
var Mu = /* @__PURE__ */ N('<span class="icon flex"><!></span>'), zu = /* @__PURE__ */ N("<span><!></span>"), Nu = /* @__PURE__ */ N("<button><!> <!></button>");
const Fu = {
  hash: "svelte-nhiahi",
  code: "button.svelte-nhiahi {display:inline-flex;gap:0.5rem;align-items:center;position:relative;padding:0.2rem 0.5rem;}button.large.svelte-nhiahi {padding-top:0.5rem;padding-bottom:0.5rem;padding-left:1rem;padding-right:1rem;}button.medium.svelte-nhiahi {padding-top:0.5rem;padding-bottom:0.5rem;padding-left:1rem;padding-right:1rem;}button.block.svelte-nhiahi {display:flex;align-items:center;justify-content:center;width:100%;}"
};
function Pe(e, t) {
  Ae(t, !0), Nt(e, Fu);
  let r = E(t, "submit", 7, !1), n = E(t, "block", 7, !1), a = E(t, "primary", 7, !1), i = E(t, "danger", 7, !1), s = E(t, "disabled", 7, !1), o = E(t, "size", 7, "tiny"), l = E(t, "loading", 7, !1), u = E(t, "icon", 7, null), v = E(t, "style", 23, () => ({})), h = E(t, "onclick", 7), d = E(t, "children", 7), g = E(t, "class", 7), _ = /* @__PURE__ */ vi(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "submit",
    "block",
    "primary",
    "danger",
    "disabled",
    "size",
    "loading",
    "icon",
    "style",
    "onclick",
    "children",
    "class"
  ]);
  const b = /* @__PURE__ */ Y(() => Object.entries(v()).map(([f, w]) => `${f}: ${w}`).join(";"));
  var $ = {
    get submit() {
      return r();
    },
    set submit(f = !1) {
      r(f), C();
    },
    get block() {
      return n();
    },
    set block(f = !1) {
      n(f), C();
    },
    get primary() {
      return a();
    },
    set primary(f = !1) {
      a(f), C();
    },
    get danger() {
      return i();
    },
    set danger(f = !1) {
      i(f), C();
    },
    get disabled() {
      return s();
    },
    set disabled(f = !1) {
      s(f), C();
    },
    get size() {
      return o();
    },
    set size(f = "tiny") {
      o(f), C();
    },
    get loading() {
      return l();
    },
    set loading(f = !1) {
      l(f), C();
    },
    get icon() {
      return u();
    },
    set icon(f = null) {
      u(f), C();
    },
    get style() {
      return v();
    },
    set style(f = {}) {
      v(f), C();
    },
    get onclick() {
      return h();
    },
    set onclick(f) {
      h(f), C();
    },
    get children() {
      return d();
    },
    set children(f) {
      d(f), C();
    },
    get class() {
      return g();
    },
    set class(f) {
      g(f), C();
    }
  }, T = Nu();
  di(
    T,
    (f) => ({
      type: r() ? "submit" : "button",
      class: `${g() ?? ""} ${o() ?? ""}`,
      style: c(b),
      onclick: h(),
      disabled: s() || l(),
      ..._,
      [cr]: f
    }),
    [
      () => ({ block: n(), primary: a(), danger: i() })
    ],
    void 0,
    "svelte-nhiahi"
  );
  var k = D(T);
  {
    var p = (f) => {
      var w = Mu(), I = D(w);
      {
        let U = /* @__PURE__ */ Y(() => o() === "tiny" ? "16" : o() === "small" ? "18" : o() === "medium" ? "21" : "24");
        er(I, {
          get name() {
            return u();
          },
          get size() {
            return c(U);
          }
        });
      }
      O(w), x(f, w);
    };
    G(k, (f) => {
      u() && f(p);
    });
  }
  var y = L(k, 2);
  {
    var m = (f) => {
      var w = zu(), I = D(w);
      yr(I, () => d() ?? dt), O(w), z(() => Br(w, 1, o() === "tiny" ? "text-xs" : o() === "small" ? "text-sm" : o() === "medium" ? "text-base" : "text-lg")), x(f, w);
    };
    G(y, (f) => {
      d() && f(m);
    });
  }
  return O(T), x(e, T), Ee($);
}
Le(
  Pe,
  {
    submit: {},
    block: {},
    primary: {},
    danger: {},
    disabled: {},
    size: {},
    loading: {},
    icon: {},
    style: {},
    onclick: {},
    children: {},
    class: {}
  },
  [],
  [],
  !0
);
const Dn = ir([]), H = {
  subscribe: Dn.subscribe,
  add: (e, t) => {
    Dn.update((r) => [{ type: e, message: t }, ...r]);
  },
  drop: (e) => {
    Dn.update((t) => t.filter((r, n) => n !== e));
  },
  clear: () => {
    Dn.set([]);
  }
}, Un = ir(null), wt = ir(!1), Zt = ir(null), $r = ir(), fr = ir("sign_in_with_password"), Gr = ir(""), qa = ir({ socialLayout: "vertical", socialButtonSize: "medium" });
function Mt(e) {
  Jr(() => e.focus());
}
var Du = { status: 400 };
async function ju(e, t = {}) {
  let { baseUrl: r = "https://api.pwnedpasswords.com", timeoutMs: n, userAgent: a, addPadding: i = !1, mode: s = "sha1" } = t, o = { headers: { ...a ? { "User-Agent": a } : {}, ...i ? { "Add-Padding": "true" } : {} }, ...n ? { signal: AbortSignal.timeout(n) } : {} }, l = `${r.replace(/\/$/g, "")}${e}?mode=${s}`, u = await fetch(l, o);
  if (u.ok) return u.text();
  if (u.status === Du.status) {
    let v = await u.text();
    throw new Error(v);
  }
  throw new Error(u.statusText);
}
async function Ru(e, t = {}) {
  let { baseUrl: r, timeoutMs: n, userAgent: a, addPadding: i = !1, mode: s = "sha1" } = t;
  return (await ju(`/range/${encodeURIComponent(e)}`, { baseUrl: r, timeoutMs: n, userAgent: a, addPadding: i, mode: s })).split(`
`).filter(Boolean).reduce((o, l) => {
    let [u, v] = l.split(":");
    return o[u] = Number.parseInt(v, 10), o;
  }, {});
}
async function qu(e, t = {}) {
  let [r, n] = await Wu(e);
  return (await Ru(r, t))[n] || 0;
}
async function Wu(e) {
  if (typeof crypto == "object" && crypto.subtle) {
    let t = new TextEncoder().encode(e), r = await crypto.subtle.digest("SHA-1", t), n = Array.from(new Uint8Array(r)).map((a) => a.toString(16).padStart(2, "0")).join("").toUpperCase();
    return [n.slice(0, 5), n.slice(5)];
  }
  throw new Error("The Web Crypto API is not available in this environment.");
}
var fl = typeof global == "object" && global && global.Object === Object && global, Vu = typeof self == "object" && self && self.Object === Object && self, Sr = fl || Vu || Function("return this")(), Kr = Sr.Symbol, dl = Object.prototype, Uu = dl.hasOwnProperty, Hu = dl.toString, sn = Kr ? Kr.toStringTag : void 0;
function Bu(e) {
  var t = Uu.call(e, sn), r = e[sn];
  try {
    e[sn] = void 0;
    var n = !0;
  } catch {
  }
  var a = Hu.call(e);
  return n && (t ? e[sn] = r : delete e[sn]), a;
}
var Gu = Object.prototype, Ku = Gu.toString;
function Yu(e) {
  return Ku.call(e);
}
var Zu = "[object Null]", Ju = "[object Undefined]", Ui = Kr ? Kr.toStringTag : void 0;
function En(e) {
  return e == null ? e === void 0 ? Ju : Zu : Ui && Ui in Object(e) ? Bu(e) : Yu(e);
}
function Xr(e) {
  return e != null && typeof e == "object";
}
var Xu = "[object Symbol]";
function vl(e) {
  return typeof e == "symbol" || Xr(e) && En(e) == Xu;
}
function Qu(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length, a = Array(n); ++r < n; )
    a[r] = t(e[r], r, e);
  return a;
}
var Xn = Array.isArray, Hi = Kr ? Kr.prototype : void 0, Bi = Hi ? Hi.toString : void 0;
function hl(e) {
  if (typeof e == "string")
    return e;
  if (Xn(e))
    return Qu(e, hl) + "";
  if (vl(e))
    return Bi ? Bi.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
var ec = /\s/;
function tc(e) {
  for (var t = e.length; t-- && ec.test(e.charAt(t)); )
    ;
  return t;
}
var rc = /^\s+/;
function nc(e) {
  return e && e.slice(0, tc(e) + 1).replace(rc, "");
}
function ut(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var Gi = NaN, ac = /^[-+]0x[0-9a-f]+$/i, ic = /^0b[01]+$/i, sc = /^0o[0-7]+$/i, lc = parseInt;
function Ki(e) {
  if (typeof e == "number")
    return e;
  if (vl(e))
    return Gi;
  if (ut(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = ut(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = nc(e);
  var r = ic.test(e);
  return r || sc.test(e) ? lc(e.slice(2), r ? 2 : 8) : ac.test(e) ? Gi : +e;
}
function pl(e) {
  return e;
}
var oc = "[object AsyncFunction]", uc = "[object Function]", cc = "[object GeneratorFunction]", fc = "[object Proxy]";
function hi(e) {
  if (!ut(e))
    return !1;
  var t = En(e);
  return t == uc || t == cc || t == oc || t == fc;
}
var Sa = Sr["__core-js_shared__"], Yi = (function() {
  var e = /[^.]+$/.exec(Sa && Sa.keys && Sa.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
})();
function dc(e) {
  return !!Yi && Yi in e;
}
var vc = Function.prototype, hc = vc.toString;
function pc(e) {
  if (e != null) {
    try {
      return hc.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var gc = /[\\^$.*+?()[\]{}|]/g, _c = /^\[object .+?Constructor\]$/, mc = Function.prototype, bc = Object.prototype, wc = mc.toString, yc = bc.hasOwnProperty, $c = RegExp(
  "^" + wc.call(yc).replace(gc, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function xc(e) {
  if (!ut(e) || dc(e))
    return !1;
  var t = hi(e) ? $c : _c;
  return t.test(pc(e));
}
function kc(e, t) {
  return e == null ? void 0 : e[t];
}
function pi(e, t) {
  var r = kc(e, t);
  return xc(r) ? r : void 0;
}
var Zi = Object.create, Tc = /* @__PURE__ */ (function() {
  function e() {
  }
  return function(t) {
    if (!ut(t))
      return {};
    if (Zi)
      return Zi(t);
    e.prototype = t;
    var r = new e();
    return e.prototype = void 0, r;
  };
})();
function gl(e, t, r) {
  switch (r.length) {
    case 0:
      return e.call(t);
    case 1:
      return e.call(t, r[0]);
    case 2:
      return e.call(t, r[0], r[1]);
    case 3:
      return e.call(t, r[0], r[1], r[2]);
  }
  return e.apply(t, r);
}
function Cc(e, t) {
  var r = -1, n = e.length;
  for (t || (t = Array(n)); ++r < n; )
    t[r] = e[r];
  return t;
}
var Ac = 800, Ec = 16, Sc = Date.now;
function Ic(e) {
  var t = 0, r = 0;
  return function() {
    var n = Sc(), a = Ec - (n - r);
    if (r = n, a > 0) {
      if (++t >= Ac)
        return arguments[0];
    } else
      t = 0;
    return e.apply(void 0, arguments);
  };
}
function Pc(e) {
  return function() {
    return e;
  };
}
var Qn = (function() {
  try {
    var e = pi(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
})(), Lc = Qn ? function(e, t) {
  return Qn(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: Pc(t),
    writable: !0
  });
} : pl, Oc = Ic(Lc), Mc = 9007199254740991, zc = /^(?:0|[1-9]\d*)$/;
function _l(e, t) {
  var r = typeof e;
  return t = t ?? Mc, !!t && (r == "number" || r != "symbol" && zc.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
function gi(e, t, r) {
  t == "__proto__" && Qn ? Qn(e, t, {
    configurable: !0,
    enumerable: !0,
    value: r,
    writable: !0
  }) : e[t] = r;
}
function ca(e, t) {
  return e === t || e !== e && t !== t;
}
var Nc = Object.prototype, Fc = Nc.hasOwnProperty;
function Dc(e, t, r) {
  var n = e[t];
  (!(Fc.call(e, t) && ca(n, r)) || r === void 0 && !(t in e)) && gi(e, t, r);
}
function jc(e, t, r, n) {
  var a = !r;
  r || (r = {});
  for (var i = -1, s = t.length; ++i < s; ) {
    var o = t[i], l = void 0;
    l === void 0 && (l = e[o]), a ? gi(r, o, l) : Dc(r, o, l);
  }
  return r;
}
var Ji = Math.max;
function Rc(e, t, r) {
  return t = Ji(t === void 0 ? e.length - 1 : t, 0), function() {
    for (var n = arguments, a = -1, i = Ji(n.length - t, 0), s = Array(i); ++a < i; )
      s[a] = n[t + a];
    a = -1;
    for (var o = Array(t + 1); ++a < t; )
      o[a] = n[a];
    return o[t] = r(s), gl(e, this, o);
  };
}
function ml(e, t) {
  return Oc(Rc(e, t, pl), e + "");
}
var qc = 9007199254740991;
function bl(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= qc;
}
function _i(e) {
  return e != null && bl(e.length) && !hi(e);
}
function Wc(e, t, r) {
  if (!ut(r))
    return !1;
  var n = typeof t;
  return (n == "number" ? _i(r) && _l(t, r.length) : n == "string" && t in r) ? ca(r[t], e) : !1;
}
function Vc(e) {
  return ml(function(t, r) {
    var n = -1, a = r.length, i = a > 1 ? r[a - 1] : void 0, s = a > 2 ? r[2] : void 0;
    for (i = e.length > 3 && typeof i == "function" ? (a--, i) : void 0, s && Wc(r[0], r[1], s) && (i = a < 3 ? void 0 : i, a = 1), t = Object(t); ++n < a; ) {
      var o = r[n];
      o && e(t, o, n, i);
    }
    return t;
  });
}
var Uc = Object.prototype;
function wl(e) {
  var t = e && e.constructor, r = typeof t == "function" && t.prototype || Uc;
  return e === r;
}
function Hc(e, t) {
  for (var r = -1, n = Array(e); ++r < e; )
    n[r] = t(r);
  return n;
}
var Bc = "[object Arguments]";
function Xi(e) {
  return Xr(e) && En(e) == Bc;
}
var yl = Object.prototype, Gc = yl.hasOwnProperty, Kc = yl.propertyIsEnumerable, Wa = Xi(/* @__PURE__ */ (function() {
  return arguments;
})()) ? Xi : function(e) {
  return Xr(e) && Gc.call(e, "callee") && !Kc.call(e, "callee");
};
function Yc() {
  return !1;
}
var $l = typeof exports == "object" && exports && !exports.nodeType && exports, Qi = $l && typeof module == "object" && module && !module.nodeType && module, Zc = Qi && Qi.exports === $l, es = Zc ? Sr.Buffer : void 0, Jc = es ? es.isBuffer : void 0, xl = Jc || Yc, Xc = "[object Arguments]", Qc = "[object Array]", ef = "[object Boolean]", tf = "[object Date]", rf = "[object Error]", nf = "[object Function]", af = "[object Map]", sf = "[object Number]", lf = "[object Object]", of = "[object RegExp]", uf = "[object Set]", cf = "[object String]", ff = "[object WeakMap]", df = "[object ArrayBuffer]", vf = "[object DataView]", hf = "[object Float32Array]", pf = "[object Float64Array]", gf = "[object Int8Array]", _f = "[object Int16Array]", mf = "[object Int32Array]", bf = "[object Uint8Array]", wf = "[object Uint8ClampedArray]", yf = "[object Uint16Array]", $f = "[object Uint32Array]", me = {};
me[hf] = me[pf] = me[gf] = me[_f] = me[mf] = me[bf] = me[wf] = me[yf] = me[$f] = !0;
me[Xc] = me[Qc] = me[df] = me[ef] = me[vf] = me[tf] = me[rf] = me[nf] = me[af] = me[sf] = me[lf] = me[of] = me[uf] = me[cf] = me[ff] = !1;
function xf(e) {
  return Xr(e) && bl(e.length) && !!me[En(e)];
}
function kf(e) {
  return function(t) {
    return e(t);
  };
}
var kl = typeof exports == "object" && exports && !exports.nodeType && exports, cn = kl && typeof module == "object" && module && !module.nodeType && module, Tf = cn && cn.exports === kl, Ia = Tf && fl.process, ts = (function() {
  try {
    var e = cn && cn.require && cn.require("util").types;
    return e || Ia && Ia.binding && Ia.binding("util");
  } catch {
  }
})(), rs = ts && ts.isTypedArray, Tl = rs ? kf(rs) : xf;
function Cf(e, t) {
  var r = Xn(e), n = !r && Wa(e), a = !r && !n && xl(e), i = !r && !n && !a && Tl(e), s = r || n || a || i, o = s ? Hc(e.length, String) : [], l = o.length;
  for (var u in e)
    s && // Safari 9 has enumerable `arguments.length` in strict mode.
    (u == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    a && (u == "offset" || u == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    i && (u == "buffer" || u == "byteLength" || u == "byteOffset") || // Skip index properties.
    _l(u, l)) || o.push(u);
  return o;
}
function Af(e, t) {
  return function(r) {
    return e(t(r));
  };
}
function Ef(e) {
  var t = [];
  if (e != null)
    for (var r in Object(e))
      t.push(r);
  return t;
}
var Sf = Object.prototype, If = Sf.hasOwnProperty;
function Pf(e) {
  if (!ut(e))
    return Ef(e);
  var t = wl(e), r = [];
  for (var n in e)
    n == "constructor" && (t || !If.call(e, n)) || r.push(n);
  return r;
}
function Cl(e) {
  return _i(e) ? Cf(e) : Pf(e);
}
var _n = pi(Object, "create");
function Lf() {
  this.__data__ = _n ? _n(null) : {}, this.size = 0;
}
function Of(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var Mf = "__lodash_hash_undefined__", zf = Object.prototype, Nf = zf.hasOwnProperty;
function Ff(e) {
  var t = this.__data__;
  if (_n) {
    var r = t[e];
    return r === Mf ? void 0 : r;
  }
  return Nf.call(t, e) ? t[e] : void 0;
}
var Df = Object.prototype, jf = Df.hasOwnProperty;
function Rf(e) {
  var t = this.__data__;
  return _n ? t[e] !== void 0 : jf.call(t, e);
}
var qf = "__lodash_hash_undefined__";
function Wf(e, t) {
  var r = this.__data__;
  return this.size += this.has(e) ? 0 : 1, r[e] = _n && t === void 0 ? qf : t, this;
}
function xr(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
xr.prototype.clear = Lf;
xr.prototype.delete = Of;
xr.prototype.get = Ff;
xr.prototype.has = Rf;
xr.prototype.set = Wf;
function Vf() {
  this.__data__ = [], this.size = 0;
}
function fa(e, t) {
  for (var r = e.length; r--; )
    if (ca(e[r][0], t))
      return r;
  return -1;
}
var Uf = Array.prototype, Hf = Uf.splice;
function Bf(e) {
  var t = this.__data__, r = fa(t, e);
  if (r < 0)
    return !1;
  var n = t.length - 1;
  return r == n ? t.pop() : Hf.call(t, r, 1), --this.size, !0;
}
function Gf(e) {
  var t = this.__data__, r = fa(t, e);
  return r < 0 ? void 0 : t[r][1];
}
function Kf(e) {
  return fa(this.__data__, e) > -1;
}
function Yf(e, t) {
  var r = this.__data__, n = fa(r, e);
  return n < 0 ? (++this.size, r.push([e, t])) : r[n][1] = t, this;
}
function Dt(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
Dt.prototype.clear = Vf;
Dt.prototype.delete = Bf;
Dt.prototype.get = Gf;
Dt.prototype.has = Kf;
Dt.prototype.set = Yf;
var Al = pi(Sr, "Map");
function Zf() {
  this.size = 0, this.__data__ = {
    hash: new xr(),
    map: new (Al || Dt)(),
    string: new xr()
  };
}
function Jf(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function da(e, t) {
  var r = e.__data__;
  return Jf(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
}
function Xf(e) {
  var t = da(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function Qf(e) {
  return da(this, e).get(e);
}
function ed(e) {
  return da(this, e).has(e);
}
function td(e, t) {
  var r = da(this, e), n = r.size;
  return r.set(e, t), this.size += r.size == n ? 0 : 1, this;
}
function Qr(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
Qr.prototype.clear = Zf;
Qr.prototype.delete = Xf;
Qr.prototype.get = Qf;
Qr.prototype.has = ed;
Qr.prototype.set = td;
function rd(e) {
  return e == null ? "" : hl(e);
}
var El = Af(Object.getPrototypeOf, Object), nd = "[object Object]", ad = Function.prototype, id = Object.prototype, Sl = ad.toString, sd = id.hasOwnProperty, ld = Sl.call(Object);
function od(e) {
  if (!Xr(e) || En(e) != nd)
    return !1;
  var t = El(e);
  if (t === null)
    return !0;
  var r = sd.call(t, "constructor") && t.constructor;
  return typeof r == "function" && r instanceof r && Sl.call(r) == ld;
}
function ud() {
  this.__data__ = new Dt(), this.size = 0;
}
function cd(e) {
  var t = this.__data__, r = t.delete(e);
  return this.size = t.size, r;
}
function fd(e) {
  return this.__data__.get(e);
}
function dd(e) {
  return this.__data__.has(e);
}
var vd = 200;
function hd(e, t) {
  var r = this.__data__;
  if (r instanceof Dt) {
    var n = r.__data__;
    if (!Al || n.length < vd - 1)
      return n.push([e, t]), this.size = ++r.size, this;
    r = this.__data__ = new Qr(n);
  }
  return r.set(e, t), this.size = r.size, this;
}
function en(e) {
  var t = this.__data__ = new Dt(e);
  this.size = t.size;
}
en.prototype.clear = ud;
en.prototype.delete = cd;
en.prototype.get = fd;
en.prototype.has = dd;
en.prototype.set = hd;
var Il = typeof exports == "object" && exports && !exports.nodeType && exports, ns = Il && typeof module == "object" && module && !module.nodeType && module, pd = ns && ns.exports === Il, as = pd ? Sr.Buffer : void 0;
as && as.allocUnsafe;
function gd(e, t) {
  return e.slice();
}
var is = Sr.Uint8Array;
function _d(e) {
  var t = new e.constructor(e.byteLength);
  return new is(t).set(new is(e)), t;
}
function md(e, t) {
  var r = _d(e.buffer);
  return new e.constructor(r, e.byteOffset, e.length);
}
function bd(e) {
  return typeof e.constructor == "function" && !wl(e) ? Tc(El(e)) : {};
}
function wd(e) {
  return function(t, r, n) {
    for (var a = -1, i = Object(t), s = n(t), o = s.length; o--; ) {
      var l = s[++a];
      if (r(i[l], l, i) === !1)
        break;
    }
    return t;
  };
}
var yd = wd(), Pa = function() {
  return Sr.Date.now();
}, $d = "Expected a function", xd = Math.max, kd = Math.min;
function Td(e, t, r) {
  var n, a, i, s, o, l, u = 0, v = !1, h = !1, d = !0;
  if (typeof e != "function")
    throw new TypeError($d);
  t = Ki(t) || 0, ut(r) && (v = !!r.leading, h = "maxWait" in r, i = h ? xd(Ki(r.maxWait) || 0, t) : i, d = "trailing" in r ? !!r.trailing : d);
  function g(f) {
    var w = n, I = a;
    return n = a = void 0, u = f, s = e.apply(I, w), s;
  }
  function _(f) {
    return u = f, o = setTimeout(T, t), v ? g(f) : s;
  }
  function b(f) {
    var w = f - l, I = f - u, U = t - w;
    return h ? kd(U, i - I) : U;
  }
  function $(f) {
    var w = f - l, I = f - u;
    return l === void 0 || w >= t || w < 0 || h && I >= i;
  }
  function T() {
    var f = Pa();
    if ($(f))
      return k(f);
    o = setTimeout(T, b(f));
  }
  function k(f) {
    return o = void 0, d && n ? g(f) : (n = a = void 0, s);
  }
  function p() {
    o !== void 0 && clearTimeout(o), u = 0, n = l = a = o = void 0;
  }
  function y() {
    return o === void 0 ? s : k(Pa());
  }
  function m() {
    var f = Pa(), w = $(f);
    if (n = arguments, a = this, l = f, w) {
      if (o === void 0)
        return _(l);
      if (h)
        return clearTimeout(o), o = setTimeout(T, t), g(l);
    }
    return o === void 0 && (o = setTimeout(T, t)), s;
  }
  return m.cancel = p, m.flush = y, m;
}
function Va(e, t, r) {
  (r !== void 0 && !ca(e[t], r) || r === void 0 && !(t in e)) && gi(e, t, r);
}
function Cd(e) {
  return Xr(e) && _i(e);
}
function Ua(e, t) {
  if (!(t === "constructor" && typeof e[t] == "function") && t != "__proto__")
    return e[t];
}
function Ad(e) {
  return jc(e, Cl(e));
}
function Ed(e, t, r, n, a, i, s) {
  var o = Ua(e, r), l = Ua(t, r), u = s.get(l);
  if (u) {
    Va(e, r, u);
    return;
  }
  var v = i ? i(o, l, r + "", e, t, s) : void 0, h = v === void 0;
  if (h) {
    var d = Xn(l), g = !d && xl(l), _ = !d && !g && Tl(l);
    v = l, d || g || _ ? Xn(o) ? v = o : Cd(o) ? v = Cc(o) : g ? (h = !1, v = gd(l)) : _ ? (h = !1, v = md(l)) : v = [] : od(l) || Wa(l) ? (v = o, Wa(o) ? v = Ad(o) : (!ut(o) || hi(o)) && (v = bd(l))) : h = !1;
  }
  h && (s.set(l, v), a(v, l, n, i, s), s.delete(l)), Va(e, r, v);
}
function mi(e, t, r, n, a) {
  e !== t && yd(t, function(i, s) {
    if (a || (a = new en()), ut(i))
      Ed(e, t, s, r, mi, n, a);
    else {
      var o = n ? n(Ua(e, s), i, s + "", e, t, a) : void 0;
      o === void 0 && (o = i), Va(e, s, o);
    }
  }, Cl);
}
function Pl(e, t, r, n, a, i) {
  return ut(e) && ut(t) && (i.set(t, e), mi(e, t, void 0, Pl, i), i.delete(t)), e;
}
var Sd = Vc(function(e, t, r, n) {
  mi(e, t, r, n);
}), Id = ml(function(e) {
  return e.push(void 0, Pl), gl(Sd, void 0, e);
}), Ll = /[\\^$.*+?()[\]{}|]/g, Pd = RegExp(Ll.source);
function Ld(e) {
  return e = rd(e), e && Pd.test(e) ? e.replace(Ll, "\\$&") : e;
}
function Od(e) {
  return e === null;
}
const La = (e, t = dt, r = dt) => {
  var n = Fd(), a = D(n);
  {
    var i = (o) => {
      er(o, { name: "circledashed" });
    }, s = (o) => {
      var l = Se(), u = re(l);
      {
        var v = (d) => {
          var g = zd(), _ = D(g);
          er(_, { name: "circlecheck" }), O(g), x(d, g);
        }, h = (d) => {
          var g = Nd(), _ = D(g);
          er(_, { name: "circlealert" }), O(g), x(d, g);
        };
        G(
          u,
          (d) => {
            t() ? d(h, !1) : d(v);
          },
          !0
        );
      }
      x(o, l);
    };
    G(a, (o) => {
      Od(t()) ? o(i) : o(s, !1);
    });
  }
  O(n), z(() => {
    je(n, "aria-label", r()), je(n, "title", r()), je(n, "aria-checked", !t());
  }), x(e, n);
};
function Md(e, t, r, n) {
  A(t, null), r(!1), n();
}
var zd = /* @__PURE__ */ N('<span style="color: var(--success-color);"><!></span>'), Nd = /* @__PURE__ */ N('<span style="color: var(--danger-color);"><!></span>'), Fd = /* @__PURE__ */ N('<div class="pw-check svelte-14m5q5z" role="checkbox"><!></div>'), Dd = (
  // Cleanup function to cancel debounced function when component is destroyed
  (e, t) => A(t, !c(t))
), jd = /* @__PURE__ */ N('<p class="danger svelte-14m5q5z"> </p>'), Rd = /* @__PURE__ */ N('<p class="danger svelte-14m5q5z"> </p>'), qd = /* @__PURE__ */ N('<p class="danger svelte-14m5q5z"> </p>'), Wd = /* @__PURE__ */ N('<div class="pw-checks flex svelte-14m5q5z"><!> <!> <!></div> <!> <!> <!>', 1), Vd = /* @__PURE__ */ N('<div class="input flex svelte-14m5q5z"><input name="pw" class="svelte-14m5q5z"/> <button type="button" class="svelte-14m5q5z"><!></button></div> <div class="pw-strength svelte-14m5q5z"><!></div>', 1);
const Ud = {
  hash: "svelte-14m5q5z",
  code: "div.svelte-14m5q5z {position:relative;}div.input.svelte-14m5q5z {flex-direction:row-reverse;}input.svelte-14m5q5z {display:inline-block;}button.svelte-14m5q5z {display:inline-block;position:absolute;border:none;bottom:100%;color:var(--link-color);padding:3px;}.pw-strength.svelte-14m5q5z {font-size:80%;line-height:1em;font-weight:200;}.pw-checks.svelte-14m5q5z {align-items:center;margin-top:5px;}p.svelte-14m5q5z {margin:2px 0;}p.svelte-14m5q5z:first-child {margin-top:5px;}"
};
function bi(e, t) {
  Ae(t, !0), Nt(e, Ud);
  const r = () => ke($r, "$saOptions", a), n = () => ke(Gr, "$email", a), [a, i] = Ft();
  let s = E(t, "value", 15, ""), o = E(t, "validate", 15), l = E(t, "isGood", 15, !1), u = E(t, "feedback", 15, !1), v = E(t, "getText", 7), h = /* @__PURE__ */ B(!1), d = /* @__PURE__ */ B(null), g = /* @__PURE__ */ B(!1), _ = /* @__PURE__ */ Y(() => r().auth.mfa.required || r().passwordPolicy.ignoreLengthRecommendations ? Math.max(r().passwordPolicy.minLength, 8) : (
    // If we're enforcing MFA or ignoring best practices, use any minimum length
    Math.max(r().passwordPolicy.minLength, 15)
  )), b = /* @__PURE__ */ Y(() => [...s()].length < c(_)), $ = /* @__PURE__ */ Y(() => [
    window.location.hostname.replace(/\.\w+$/g, ""),
    document.title,
    n().split("@")[0]
  ].map((P) => [
    P,
    ...P.split(new RegExp("[\\P{L}&&\\P{N}]", "v")).map((W) => W.trim())
  ]).flat().map(Ld).filter(Boolean)), T = /* @__PURE__ */ Y(() => s().replace(new RegExp(`(?:${c($).join("|")})`, "gi"), "")), k = /* @__PURE__ */ Y(() => [
    ...c(
      T
      // remove words related to site or user
    )
  ].sort().filter((P, W, M) => M.indexOf(P) === W).length < c(
    _
    // ensure that at least 2/3 of the passphrase is unique non-domain text
  ) * 0.67);
  async function p() {
    if (l(!1), A(g, !1), A(d, null), [...s()].length >= 6 && u()) {
      try {
        A(d, await qu(s()), !0);
      } catch (P) {
        H.add("error", P.message);
        return;
      }
      !c(d) && !c(k) && !c(b) && l(!0);
    }
  }
  let y = Td(p, 500);
  o(async () => {
    u(!0), await li(), await p();
  }), Jr(() => () => {
    y.cancel();
  });
  var m = {
    get value() {
      return s();
    },
    set value(P = "") {
      s(P), C();
    },
    get validate() {
      return o();
    },
    set validate(P) {
      o(P), C();
    },
    get isGood() {
      return l();
    },
    set isGood(P = !1) {
      l(P), C();
    },
    get feedback() {
      return u();
    },
    set feedback(P = !1) {
      u(P), C();
    },
    get getText() {
      return v();
    },
    set getText(P) {
      v(P), C();
    }
  }, f = Vd(), w = re(f), I = D(w);
  Cn(I), I.__input = [Md, d, l, y];
  var U = L(I, 2);
  U.__click = [Dd, h];
  var F = D(U);
  {
    var Q = (P) => {
      er(P, { name: "eye" });
    }, ee = (P) => {
      er(P, { name: "eyeoff" });
    };
    G(F, (P) => {
      c(h) ? P(Q) : P(ee, !1);
    });
  }
  O(U), O(w);
  var _e = L(w, 2), $e = D(_e);
  {
    var pe = (P) => {
      var W = Wd(), M = re(W), K = D(M);
      {
        let te = /* @__PURE__ */ Y(() => [...s()].length < c(_)), ce = /* @__PURE__ */ Y(() => v()("pwLengthLabel"));
        La(K, () => c(te), () => c(ce));
      }
      var J = L(K, 2);
      {
        let te = /* @__PURE__ */ Y(() => v()("pwBreachedLabel", { count: c(d) }));
        La(J, () => c(d), () => c(te));
      }
      var S = L(J, 2);
      {
        let te = /* @__PURE__ */ Y(() => v()("pwUniquenessLabel"));
        La(S, () => c(k), () => c(te));
      }
      O(M);
      var R = L(M, 2);
      {
        var q = (te) => {
          var ce = jd(), Ue = D(ce, !0);
          O(ce), z((Ne) => j(Ue, Ne), [() => v()("pwLength", { min: c(_) })]), x(te, ce);
        };
        G(R, (te) => {
          c(b) && te(q);
        });
      }
      var V = L(R, 2);
      {
        var le = (te) => {
          var ce = Rd(), Ue = D(ce, !0);
          O(ce), z((Ne) => j(Ue, Ne), [() => v()("pwBreached", { count: c(d) })]), x(te, ce);
        };
        G(V, (te) => {
          c(d) && te(le);
        });
      }
      var de = L(V, 2);
      {
        var ze = (te) => {
          var ce = qd(), Ue = D(ce, !0);
          O(ce), z((Ne) => j(Ue, Ne), [() => v()("pwUniqueness")]), x(te, ce);
        };
        G(de, (te) => {
          c(k) && !c(b) && te(ze);
        });
      }
      x(P, W);
    };
    G($e, (P) => {
      u() && P(pe);
    });
  }
  O(_e), z(() => je(I, "type", c(h) ? "text" : "password")), An(I, s), x(e, f);
  var Oe = Ee(m);
  return i(), Oe;
}
oi(["input", "click"]);
Le(
  bi,
  {
    value: {},
    validate: {},
    isGood: {},
    feedback: {},
    getText: {}
  },
  [],
  [],
  !0
);
var Hd = /* @__PURE__ */ N('<input type="email" name="email"/>'), Bd = /* @__PURE__ */ N("<!> <!>", 1), Gd = /* @__PURE__ */ N("<form><!> <!> <!></form>");
function Ol(e, t) {
  Ae(t, !0);
  const r = () => ke(Gr, "$email", i), n = () => ke($r, "$saOptions", i), a = () => ke(fr, "$signInView", i), [i, s] = Ft(), o = (P) => {
    var W = Se(), M = re(W);
    {
      var K = (S) => {
        Ie(S, {
          onclick: () => {
            ge(fr, "sign_in_with_password"), k("password");
          },
          children: (R, q) => {
            ue();
            var V = oe();
            z((le) => j(V, le), [() => h()("switchToPassword")]), x(R, V);
          },
          $$slots: { default: !0 }
        });
      }, J = (S) => {
        Ie(S, {
          onclick: () => {
            ge(fr, "sign_in"), k("email");
          },
          children: (R, q) => {
            ue();
            var V = oe();
            z((le) => j(V, le), [() => h()("switchToMagicLink")]), x(R, V);
          },
          $$slots: { default: !0 }
        });
      };
      G(M, (S) => {
        c(m) ? S(J, !1) : S(K);
      });
    }
    x(P, W);
  }, l = (P) => {
    Ie(P, {
      onclick: () => ge(fr, "forgotten_password"),
      children: (W, M) => {
        ue();
        var K = oe();
        z((J) => j(K, J), [() => h()("resetPassword")]), x(W, K);
      },
      $$slots: { default: !0 }
    });
  };
  let u = E(t, "InputWrapper", 7), v = E(t, "supabaseClient", 7), h = E(t, "getText", 7), d = /* @__PURE__ */ B(!1), g = /* @__PURE__ */ B(""), _ = /* @__PURE__ */ B(() => {
  }), b = /* @__PURE__ */ B(!1), $ = /* @__PURE__ */ B(void 0), T = /* @__PURE__ */ B(void 0);
  async function k(P) {
    var W, M;
    await li(), P === "email" || !r() ? (W = c($)) == null || W.focus() : (M = c(T)) == null || M.focus();
  }
  ft(new Promise(() => {
  }));
  let p = /* @__PURE__ */ B(!1);
  const y = /* @__PURE__ */ Y(() => n().auth.enable_signup && n().auth.email && n().auth.email.enable_signup), m = /* @__PURE__ */ Y(() => a() === "sign_in_with_password");
  async function f() {
    if (!n().auth.email) return;
    H.clear(), A(d, !0);
    const { error: P } = await v().auth.signInWithOtp({
      email: r(),
      options: {
        emailRedirectTo: `${window.location.origin}${window.location.pathname}${window.location.search}`
      }
    });
    P ? H.add("error", P.message) : ge(Zt, {
      email: r(),
      sentAt: /* @__PURE__ */ new Date(),
      expiresAt: new Date(Date.now() + n().auth.email.otp_expiry * 1e3)
    }), A(d, !1);
  }
  async function w(P = !1) {
    if (n().auth.email) {
      if (H.clear(), A(d, !0), P) {
        if (await c(_)(), !c(b)) {
          A(d, !1), A(p, !0);
          return;
        }
        const { error: W } = await v().auth.signUp({ email: r(), password: c(g) });
        W ? H.add("error", W.message) : ge(Zt, {
          email: r(),
          sentAt: /* @__PURE__ */ new Date(),
          expiresAt: new Date(Date.now() + n().auth.email.otp_expiry * 1e3)
        });
      } else {
        const { error: W } = await v().auth.signInWithPassword({ email: r(), password: c(g) });
        W && H.add("error", W.message);
      }
      A(d, !1);
    }
  }
  var I = {
    get InputWrapper() {
      return u();
    },
    set InputWrapper(P) {
      u(P), C();
    },
    get supabaseClient() {
      return v();
    },
    set supabaseClient(P) {
      v(P), C();
    },
    get getText() {
      return h();
    },
    set getText(P) {
      h(P), C();
    }
  }, U = Gd(), F = D(U);
  {
    let P = /* @__PURE__ */ Y(() => h()("emailLabel"));
    xt(F, u, (W, M) => {
      M(W, {
        name: "email",
        get label() {
          return c(P);
        },
        icon: "mail",
        get links() {
          return o;
        },
        children: (K, J) => {
          var S = Hd();
          Cn(S), ar(() => An(S, r, (R) => ge(Gr, R))), fi(S, (R) => Mt == null ? void 0 : Mt(R)), _u(S, (R) => A($, R), () => c($)), x(K, S);
        },
        $$slots: { default: !0 }
      });
    });
  }
  var Q = L(F, 2);
  {
    var ee = (P) => {
      var W = Se(), M = re(W);
      {
        let K = /* @__PURE__ */ Y(() => h()("pwLabel"));
        xt(M, u, (J, S) => {
          S(J, {
            name: "password",
            get label() {
              return c(K);
            },
            icon: "key",
            get links() {
              return l;
            },
            children: (R, q) => {
              bi(R, {
                get feedback() {
                  return c(p);
                },
                get getText() {
                  return h();
                },
                get isGood() {
                  return c(b);
                },
                set isGood(V) {
                  A(b, V, !0);
                },
                get value() {
                  return c(g);
                },
                set value(V) {
                  A(g, V, !0);
                },
                get validate() {
                  return c(_);
                },
                set validate(V) {
                  A(_, V, !0);
                }
              });
            },
            $$slots: { default: !0 }
          });
        });
      }
      x(P, W);
    };
    G(Q, (P) => {
      c(m) && P(ee);
    });
  }
  var _e = L(Q, 2);
  {
    var $e = (P) => {
      Pe(P, {
        submit: !0,
        block: !0,
        primary: !0,
        size: "large",
        get loading() {
          return c(d);
        },
        icon: "inbox",
        onclick: f,
        children: (W, M) => {
          ue();
          var K = oe();
          z((J) => j(K, J), [() => h()("sendLink")]), x(W, K);
        },
        $$slots: { default: !0 }
      });
    }, pe = (P) => {
      var W = Bd(), M = re(W);
      Pe(M, {
        submit: !0,
        block: !0,
        primary: !0,
        size: "large",
        get loading() {
          return c(d);
        },
        icon: "inbox",
        onclick: () => w(!1),
        children: (S, R) => {
          ue();
          var q = oe();
          z((V) => j(q, V), [() => h()("signIn")]), x(S, q);
        },
        $$slots: { default: !0 }
      });
      var K = L(M, 2);
      {
        var J = (S) => {
          Pe(S, {
            block: !0,
            size: "large",
            get loading() {
              return c(d);
            },
            icon: "inbox",
            onclick: () => w(!0),
            children: (R, q) => {
              ue();
              var V = oe();
              z((le) => j(V, le), [() => h()("signUp")]), x(R, V);
            },
            $$slots: { default: !0 }
          });
        };
        G(K, (S) => {
          c(y) && c(g).trim().length && S(J);
        });
      }
      x(P, W);
    };
    G(_e, (P) => {
      !c(m) || !c(g).trim().length ? P($e) : P(pe, !1);
    });
  }
  O(U), Er("submit", U, (P) => {
    P.preventDefault(), c(m) ? w(!1) : f();
  }), x(e, U);
  var Oe = Ee(I);
  return s(), Oe;
}
Le(Ol, { InputWrapper: {}, supabaseClient: {}, getText: {} }, [], [], !0);
const Kd = {
  apple: "Apple",
  bitbucket: "Bitbucket",
  discord: "Discord",
  facebook: "Facebook",
  figma: "Figma",
  fly: "Fly.io",
  github: "GitHub",
  gitlab: "Gitlab",
  google: "Google",
  kakao: "KakaoTalk",
  keycloak: "Keycloak",
  linkedin: "LinkedIn",
  azure: "Microsoft",
  notion: "Notion",
  slack: "Slack",
  spotify: "Spotify",
  twitch: "Twitch",
  workos: "WorkOS",
  twitter: "X",
  zoom: "Zoom"
};
var Yd = /* @__PURE__ */ N('<span class="heading svelte-ksl3vw"> </span>'), Zd = /* @__PURE__ */ N("<!> <div></div>", 1);
const Jd = {
  hash: "svelte-ksl3vw",
  code: ".providers.svelte-ksl3vw {flex-direction:column;}.providers.horizontal.svelte-ksl3vw {flex-direction:row;max-width:100%;flex-wrap:wrap;}.heading.svelte-ksl3vw {margin:0 0 0.5rem 0;}"
};
function wi(e, t) {
  Ae(t, !0), Nt(e, Jd);
  let r = E(t, "supabaseClient", 7), n = E(t, "providers", 7), a = E(t, "socialLayout", 7), i = E(t, "socialButtonSize", 7), s = E(t, "isLinking", 7), o = E(t, "getText", 7), l = /* @__PURE__ */ B(!1);
  const u = /* @__PURE__ */ Y(() => n() && n().length > 0);
  async function v(b) {
    if (A(l, !0), s()) {
      const { error: $ } = await r().auth.linkIdentity({ provider: b });
      $ && H.add("error", $.message);
    } else {
      const { error: $ } = await r().auth.signInWithOAuth({ provider: b });
      $ && H.add("error", $.message);
    }
    A(l, !1);
  }
  var h = {
    get supabaseClient() {
      return r();
    },
    set supabaseClient(b) {
      r(b), C();
    },
    get providers() {
      return n();
    },
    set providers(b) {
      n(b), C();
    },
    get socialLayout() {
      return a();
    },
    set socialLayout(b) {
      a(b), C();
    },
    get socialButtonSize() {
      return i();
    },
    set socialButtonSize(b) {
      i(b), C();
    },
    get isLinking() {
      return s();
    },
    set isLinking(b) {
      s(b), C();
    },
    get getText() {
      return o();
    },
    set getText(b) {
      o(b), C();
    }
  }, d = Se(), g = re(d);
  {
    var _ = (b) => {
      var $ = Zd(), T = re($);
      {
        var k = (m) => {
          var f = Yd(), w = D(f, !0);
          O(f), z((I) => j(w, I), [() => o()("socialHeading")]), x(m, f);
        };
        G(T, (m) => {
          a() === "horizontal" && m(k);
        });
      }
      var p = L(T, 2);
      let y;
      gn(p, 21, n, pn, (m, f) => {
        var w = Se(), I = re(w);
        {
          var U = (Q) => {
            Pe(Q, {
              get class() {
                return `provider-${c(f) ?? ""}`;
              },
              block: !0,
              get icon() {
                return c(f);
              },
              get size() {
                return i();
              },
              onclick: () => v(c(f)),
              children: (ee, _e) => {
                ue();
                var $e = oe();
                z((pe) => j($e, pe), [
                  () => o()(s() ? "socialLinking" : "socialSignIn", { provider: Kd[c(f)] })
                ]), x(ee, $e);
              },
              $$slots: { default: !0 }
            });
          }, F = (Q) => {
            Pe(Q, {
              get class() {
                return `provider-${c(f) ?? ""}`;
              },
              get icon() {
                return c(f);
              },
              get size() {
                return i();
              },
              onclick: () => v(c(f))
            });
          };
          G(I, (Q) => {
            a() === "vertical" ? Q(U) : Q(F, !1);
          });
        }
        x(m, w);
      }), O(p), z((m) => y = Br(p, 1, "providers flex svelte-ksl3vw", null, y, m), [() => ({ horizontal: a() === "horizontal" })]), x(b, $);
    };
    G(g, (b) => {
      c(u) && b(_);
    });
  }
  return x(e, d), Ee(h);
}
Le(
  wi,
  {
    supabaseClient: {},
    providers: {},
    socialLayout: {},
    socialButtonSize: {},
    isLinking: {},
    getText: {}
  },
  [],
  [],
  !0
);
var Xd = /* @__PURE__ */ N('<input type="email" name="email"/>'), Qd = /* @__PURE__ */ N("<form><!> <!> <!></form>");
function Ml(e, t) {
  Ae(t, !0);
  const r = () => ke(Gr, "$email", n), [n, a] = Ft();
  let i = E(t, "InputWrapper", 7), s = E(t, "supabaseClient", 7), o = E(t, "getText", 7), l = /* @__PURE__ */ B(!1);
  async function u() {
    H.clear(), A(l, !0);
    const { error: $ } = await s().auth.resetPasswordForEmail(r());
    $ ? H.add("error", $.message) : H.add("success", o()("resetPasswordSent")), A(l, !1);
  }
  var v = {
    get InputWrapper() {
      return i();
    },
    set InputWrapper($) {
      i($), C();
    },
    get supabaseClient() {
      return s();
    },
    set supabaseClient($) {
      s($), C();
    },
    get getText() {
      return o();
    },
    set getText($) {
      o($), C();
    }
  }, h = Qd(), d = D(h);
  {
    let $ = /* @__PURE__ */ Y(() => o()("emailLabel"));
    xt(d, i, (T, k) => {
      k(T, {
        name: "email",
        get label() {
          return c($);
        },
        icon: "mail",
        children: (p, y) => {
          var m = Xd();
          Cn(m), ar(() => An(m, r, (f) => ge(Gr, f))), fi(m, (f) => Mt == null ? void 0 : Mt(f)), x(p, m);
        },
        $$slots: { default: !0 }
      });
    });
  }
  var g = L(d, 2);
  Pe(g, {
    block: !0,
    primary: !0,
    size: "large",
    get loading() {
      return c(l);
    },
    icon: "inbox",
    children: ($, T) => {
      ue();
      var k = oe();
      z((p) => j(k, p), [() => o()("resetPassword")]), x($, k);
    },
    $$slots: { default: !0 }
  });
  var _ = L(g, 2);
  Ie(_, {
    onclick: () => ge(fr, "sign_in_with_password"),
    children: ($, T) => {
      ue();
      var k = oe();
      z((p) => j(k, p), [() => o()("goBackToSignIn")]), x($, k);
    },
    $$slots: { default: !0 }
  }), O(h), Er("submit", h, ($) => {
    $.preventDefault(), u();
  }), x(e, h);
  var b = Ee(v);
  return a(), b;
}
Le(Ml, { InputWrapper: {}, supabaseClient: {}, getText: {} }, [], [], !0);
var ev = /* @__PURE__ */ N("<input/>");
function Sn(e, t) {
  Ae(t, !0);
  let r = E(t, "value", 15, ""), n = E(t, "getText", 7), a = E(t, "class", 7, ""), i = E(t, "name", 7, "verification-code"), s = /* @__PURE__ */ vi(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "value",
    "getText",
    "class",
    "name"
  ]);
  var o = {
    get value() {
      return r();
    },
    set value(u = "") {
      r(u), C();
    },
    get getText() {
      return n();
    },
    set getText(u) {
      n(u), C();
    },
    get class() {
      return a();
    },
    set class(u = "") {
      a(u), C();
    },
    get name() {
      return i();
    },
    set name(u = "verification-code") {
      i(u), C();
    }
  }, l = ev();
  return Cn(l), di(
    l,
    (u, v) => ({
      type: "text",
      class: a(),
      name: i(),
      "aria-label": u,
      placeholder: "000000",
      inputmode: "numeric",
      title: v,
      required: !0,
      ...s
    }),
    [
      () => n()("enterCode"),
      () => n()("enterCodeTitle")
    ]
  ), ar(() => An(l, r)), fi(l, (u) => Mt == null ? void 0 : Mt(u)), x(e, l), Ee(o);
}
Le(Sn, { value: {}, getText: {}, class: {}, name: {} }, [], [], !0);
var tv = /* @__PURE__ */ N("<form><!> <!> <!></form>");
function yi(e, t) {
  Ae(t, !0);
  let r = E(t, "cancellable", 7, !1), n = E(t, "InputWrapper", 7), a = E(t, "supabaseClient", 7), i = E(t, "factor", 7), s = E(t, "getText", 7), o = E(t, "factorId", 7), l = E(t, "processing", 15, !1), u = /* @__PURE__ */ B(!1), v = /* @__PURE__ */ B(""), h = /* @__PURE__ */ B(null);
  Jr(() => {
    d();
  });
  async function d() {
    var y;
    const p = o() || ((y = i()) == null ? void 0 : y.id);
    if (p)
      try {
        const { data: m, error: f } = await a().auth.mfa.challenge({ factorId: p });
        if (f) throw f;
        A(h, m, !0), H.clear();
      } catch {
        H.add("error", s()("mfaChallengeNotInitialized"));
      }
  }
  async function g(p = !1) {
    var y;
    if (!c(h)) {
      H.add("error", s()("mfaChallengeNotInitialized"));
      return;
    }
    A(u, !0), H.clear();
    try {
      const m = o() || ((y = i()) == null ? void 0 : y.id) || "", { data: f, error: w } = await a().auth.mfa.verify({
        factorId: m,
        challengeId: c(h).id,
        code: c(v).trim()
      });
      if (w) throw w;
      l(!1);
    } catch (m) {
      if (m instanceof Error)
        if (m.message.includes("mfa_challenge_expired") && !p)
          try {
            if (await d(), c(h)) {
              await g(!0);
              return;
            }
          } catch (f) {
            H.add("error", s()("authenticationError", { error: f instanceof Error ? f.message : "?" }));
          }
        else m.message.includes("mfa_verification_failed") ? H.add("error", s()("invalidCodeError")) : H.add("error", s()("authenticationError", { error: m.message }));
      else
        H.add("error", s()("authenticationError", { error: "?" }));
    } finally {
      A(u, !1);
    }
  }
  ci(() => {
    A(h, null), A(v, ""), H.clear();
  });
  var _ = {
    get cancellable() {
      return r();
    },
    set cancellable(p = !1) {
      r(p), C();
    },
    get InputWrapper() {
      return n();
    },
    set InputWrapper(p) {
      n(p), C();
    },
    get supabaseClient() {
      return a();
    },
    set supabaseClient(p) {
      a(p), C();
    },
    get factor() {
      return i();
    },
    set factor(p) {
      i(p), C();
    },
    get getText() {
      return s();
    },
    set getText(p) {
      s(p), C();
    },
    get factorId() {
      return o();
    },
    set factorId(p) {
      o(p), C();
    },
    get processing() {
      return l();
    },
    set processing(p = !1) {
      l(p), C();
    }
  }, b = tv(), $ = D(b);
  {
    let p = /* @__PURE__ */ Y(() => s()("mfaEnterCodeLabel"));
    xt($, n, (y, m) => {
      m(y, {
        name: "verification-code",
        get label() {
          return c(p);
        },
        icon: "key",
        children: (f, w) => {
          Sn(f, {
            get getText() {
              return s();
            },
            get value() {
              return c(v);
            },
            set value(I) {
              A(v, I, !0);
            }
          });
        },
        $$slots: { default: !0 }
      });
    });
  }
  var T = L($, 2);
  Pe(T, {
    submit: !0,
    block: !0,
    primary: !0,
    size: "large",
    get loading() {
      return c(u);
    },
    onclick: g,
    children: (p, y) => {
      ue();
      var m = oe();
      z((f) => j(m, f), [() => s()("verifyCode")]), x(p, m);
    },
    $$slots: { default: !0 }
  });
  var k = L(T, 2);
  return Pe(k, {
    block: !0,
    size: "large",
    onclick: () => {
      r() ? l(!1) : a().auth.signOut();
    },
    children: (p, y) => {
      ue();
      var m = oe();
      z((f) => j(m, f), [() => s()("cancelButton")]), x(p, m);
    },
    $$slots: { default: !0 }
  }), O(b), Er("submit", b, (p) => {
    p.preventDefault(), g();
  }), x(e, b), Ee(_);
}
Le(
  yi,
  {
    cancellable: {},
    InputWrapper: {},
    supabaseClient: {},
    factor: {},
    getText: {},
    factorId: {},
    processing: {}
  },
  [],
  [],
  !0
);
var rv = (e, t, r) => t(e.target.value, c(r)), nv = /* @__PURE__ */ N("<option> </option>"), av = /* @__PURE__ */ N('<select name="factor-select" id="factor-select"></select>'), iv = /* @__PURE__ */ N("<!> <!>", 1), sv = /* @__PURE__ */ N("<p> </p>"), lv = /* @__PURE__ */ N("<div><h2> </h2> <!></div>");
function zl(e, t) {
  Ae(t, !0);
  const r = () => ke(wt, "$needsMFAChallenge", n), [n, a] = Ft();
  let i = E(t, "processing", 15, !1), s = E(t, "InputWrapper", 7), o = E(t, "supabaseClient", 7), l = E(t, "getText", 7), u = /* @__PURE__ */ B(null), v = /* @__PURE__ */ B(ft(h().catch((p) => (H.add("error", l()("networkError", { error: p.message })), []))));
  async function h() {
    const { data: p, error: y } = await o().auth.mfa.listFactors();
    if (y) throw y;
    if (!p) throw new Error("No factors data returned");
    const m = p.all.filter((f) => f.status === "verified");
    return m.length > 0 && A(u, m[0], !0), m;
  }
  function d(p, y) {
    const m = y.find((f) => f.id === p);
    m && A(u, m, !0);
  }
  var g = {
    get processing() {
      return i();
    },
    set processing(p = !1) {
      i(p), C();
    },
    get InputWrapper() {
      return s();
    },
    set InputWrapper(p) {
      s(p), C();
    },
    get supabaseClient() {
      return o();
    },
    set supabaseClient(p) {
      o(p), C();
    },
    get getText() {
      return l();
    },
    set getText(p) {
      l(p), C();
    }
  }, _ = lv(), b = D(_), $ = D(b, !0);
  O(b);
  var T = L(b, 2);
  su(
    T,
    () => c(v),
    (p) => {
      var y = sv(), m = D(y, !0);
      O(y), z((f) => j(m, f), [() => l()("loadingAuthMethods")]), x(p, y);
    },
    (p, y) => {
      var m = iv(), f = re(m);
      {
        var w = (F) => {
          var Q = Se(), ee = re(Q);
          {
            let _e = /* @__PURE__ */ Y(() => l()("mfaSelectLabel"));
            xt(ee, s, ($e, pe) => {
              pe($e, {
                name: "factor-select",
                get label() {
                  return c(_e);
                },
                children: (Oe, P) => {
                  var W = av();
                  W.__change = [rv, d, y], gn(W, 21, () => c(y), pn, (K, J, S) => {
                    var R = nv(), q = D(R, !0);
                    O(R);
                    var V = {};
                    z(
                      (le) => {
                        j(q, le), V !== (V = c(J).id) && (R.value = (R.__value = c(J).id) ?? "");
                      },
                      [
                        () => c(J).friendly_name || `${c(J).factor_type.toUpperCase()} ${S + 1}`
                      ]
                    ), x(K, R);
                  }), O(W);
                  var M;
                  nl(W), z(() => {
                    var K, J, S;
                    M !== (M = (K = c(u)) == null ? void 0 : K.id) && (W.value = (W.__value = (J = c(u)) == null ? void 0 : J.id) ?? "", Jn(W, (S = c(u)) == null ? void 0 : S.id));
                  }), x(Oe, W);
                },
                $$slots: { default: !0 }
              });
            });
          }
          x(F, Q);
        };
        G(f, (F) => {
          c(y).length > 1 && F(w);
        });
      }
      var I = L(f, 2);
      {
        var U = (F) => {
          {
            let Q = /* @__PURE__ */ Y(() => r() === "toElevate");
            yi(F, {
              get cancellable() {
                return c(Q);
              },
              get InputWrapper() {
                return s();
              },
              get supabaseClient() {
                return o();
              },
              get factor() {
                return c(u);
              },
              get getText() {
                return l();
              },
              get processing() {
                return i();
              },
              set processing(ee) {
                i(ee);
              }
            });
          }
        };
        G(I, (F) => {
          c(u) && F(U);
        });
      }
      x(p, m);
    }
  ), O(_), z((p) => j($, p), [() => l()("mfaEnterCodeHeading")]), x(e, _);
  var k = Ee(g);
  return a(), k;
}
oi(["change"]);
Le(
  zl,
  {
    processing: {},
    InputWrapper: {},
    supabaseClient: {},
    getText: {}
  },
  [],
  [],
  !0
);
function ea(e) {
  var t, r, n, a;
  return ((t = e == null ? void 0 : e.message) == null ? void 0 : t.includes("AAL2")) || ((r = e == null ? void 0 : e.message) == null ? void 0 : r.includes("Authenticator Assurance Level")) || ((n = e == null ? void 0 : e.message) == null ? void 0 : n.includes("aal2_required")) || ((a = e == null ? void 0 : e.message) == null ? void 0 : a.includes("requires_aal2"));
}
var ov = /* @__PURE__ */ N('<input type="text" name="friendly-name"/>'), uv = /* @__PURE__ */ N("<form><p> </p> <!> <!></form> <!>", 1), cv = /* @__PURE__ */ N('<img class="svelte-8lst5e"/>'), fv = /* @__PURE__ */ N('<div class="mfa-secret svelte-8lst5e" role="textbox"> </div> <!>', 1), dv = /* @__PURE__ */ N('<div class="mfa-secret-hidden svelte-8lst5e">••••••••••••••••••••••••••••••••</div> <!>', 1), vv = /* @__PURE__ */ N('<div><p> </p> <!> <p> </p> <div class="mfa-secret-container svelte-8lst5e"><!></div></div> <!>', 1), hv = /* @__PURE__ */ N("<div><!></div>");
const pv = {
  hash: "svelte-8lst5e",
  code: ".mfa-secret-container.svelte-8lst5e {margin:.5em 0;text-align:center;}.mfa-secret.svelte-8lst5e, .mfa-secret-hidden.svelte-8lst5e {font-family:monospace;text-align:center;margin:.5em 0;line-height:1;padding:.5em;border-radius:4px;word-break:break-all;}.mfa-secret-hidden.svelte-8lst5e {color:var(--layout-color);}img.svelte-8lst5e {display:block;margin:.5em auto;}"
};
function Nl(e, t) {
  Ae(t, !0), Nt(e, pv);
  const [r, n] = Ft();
  let a = E(t, "processing", 15, !1), i = E(t, "defaultFriendlyName", 7), s = E(t, "InputWrapper", 7), o = E(t, "supabaseClient", 7), l = E(t, "getText", 7), u = /* @__PURE__ */ B(!1), v = /* @__PURE__ */ B(!1), h = /* @__PURE__ */ B(""), d = /* @__PURE__ */ B(""), g = /* @__PURE__ */ B(""), _ = /* @__PURE__ */ B(ft(i() ?? "TOTP")), b = /* @__PURE__ */ B(!1);
  function $(F) {
    return F.trim().length > 0 && F.trim().length <= 50;
  }
  function T(F) {
    return F.replace(/[^A-Z2-7]/g, "");
  }
  async function k() {
    if (!$(c(_))) {
      H.add("error", l()("enterValidName"));
      return;
    }
    A(u, !0), H.clear();
    try {
      const { data: F, error: Q } = await o().auth.mfa.enroll({ friendlyName: c(_).trim(), factorType: "totp" });
      if (Q) {
        if (ea(Q)) {
          ge(wt, "toElevate");
          return;
        }
        throw Q;
      }
      A(g, F.id, !0), A(h, F.totp.qr_code, !0), A(d, F.totp.secret, !0), A(v, !0);
    } catch (F) {
      if (ea(F)) {
        ge(wt, "toElevate");
        return;
      }
      H.add("error", l()("error", { error: (F == null ? void 0 : F.message) ?? "?" }));
    } finally {
      A(u, !1);
    }
  }
  function p() {
    a(!1), H.clear(), A(d, ""), A(h, ""), A(g, "");
  }
  ci(() => {
    A(d, ""), A(h, ""), A(g, ""), H.clear();
  });
  var y = {
    get processing() {
      return a();
    },
    set processing(F = !1) {
      a(F), C();
    },
    get defaultFriendlyName() {
      return i();
    },
    set defaultFriendlyName(F) {
      i(F), C();
    },
    get InputWrapper() {
      return s();
    },
    set InputWrapper(F) {
      s(F), C();
    },
    get supabaseClient() {
      return o();
    },
    set supabaseClient(F) {
      o(F), C();
    },
    get getText() {
      return l();
    },
    set getText(F) {
      l(F), C();
    }
  }, m = hv(), f = D(m);
  {
    var w = (F) => {
      var Q = uv(), ee = re(Q), _e = D(ee), $e = D(_e, !0);
      O(_e);
      var pe = L(_e, 2);
      {
        let W = /* @__PURE__ */ Y(() => l()("mfaFriendlyNameLabel"));
        xt(pe, s, (M, K) => {
          K(M, {
            name: "friendly-name",
            get label() {
              return c(W);
            },
            icon: "user",
            children: (J, S) => {
              var R = ov();
              Cn(R), An(R, () => c(_), (q) => A(_, q)), x(J, R);
            },
            $$slots: { default: !0 }
          });
        });
      }
      var Oe = L(pe, 2);
      Pe(Oe, {
        submit: !0,
        block: !0,
        primary: !0,
        size: "large",
        get loading() {
          return c(u);
        },
        children: (W, M) => {
          ue();
          var K = oe();
          z((J) => j(K, J), [() => l()("mfaAddFactorButton")]), x(W, K);
        },
        $$slots: { default: !0 }
      }), O(ee);
      var P = L(ee, 2);
      Ie(P, {
        onclick: p,
        children: (W, M) => {
          ue();
          var K = oe();
          z((J) => j(K, J), [() => l()("cancelButton")]), x(W, K);
        },
        $$slots: { default: !0 }
      }), z((W) => j($e, W), [() => l()("mfaAddFactorParagraph")]), Er("submit", ee, (W) => {
        W.preventDefault(), k();
      }), x(F, Q);
    }, I = (F) => {
      var Q = vv(), ee = re(Q), _e = D(ee), $e = D(_e, !0);
      O(_e);
      var pe = L(_e, 2);
      {
        var Oe = (q) => {
          var V = cv();
          z(
            (le) => {
              je(V, "src", c(h)), je(V, "alt", le);
            },
            [() => l()("qrCodeAlt")]
          ), x(q, V);
        };
        G(pe, (q) => {
          c(h) && q(Oe);
        });
      }
      var P = L(pe, 2), W = D(P, !0);
      O(P);
      var M = L(P, 2), K = D(M);
      {
        var J = (q) => {
          var V = fv(), le = re(V), de = D(le, !0);
          O(le);
          var ze = L(le, 2);
          Ie(ze, {
            onclick: () => A(b, !1),
            children: (te, ce) => {
              ue();
              var Ue = oe();
              z((Ne) => j(Ue, Ne), [() => l()("hideSecret")]), x(te, Ue);
            },
            $$slots: { default: !0 }
          }), z(
            (te, ce) => {
              je(le, "aria-label", te), j(de, ce);
            },
            [
              () => l()("totpSecretLabel"),
              () => T(c(d))
            ]
          ), x(q, V);
        }, S = (q) => {
          var V = dv(), le = L(re(V), 2);
          Ie(le, {
            onclick: () => A(b, !0),
            children: (de, ze) => {
              ue();
              var te = oe();
              z((ce) => j(te, ce), [() => l()("showSecret")]), x(de, te);
            },
            $$slots: { default: !0 }
          }), x(q, V);
        };
        G(K, (q) => {
          c(b) ? q(J) : q(S, !1);
        });
      }
      O(M), O(ee);
      var R = L(ee, 2);
      {
        let q = /* @__PURE__ */ Y(() => ({
          id: c(g),
          status: "unverified",
          factor_type: "totp",
          friendly_name: c(_),
          created_at: (/* @__PURE__ */ new Date()).toISOString(),
          updated_at: (/* @__PURE__ */ new Date()).toISOString()
        }));
        yi(R, {
          cancellable: !0,
          get InputWrapper() {
            return s();
          },
          get supabaseClient() {
            return o();
          },
          get factor() {
            return c(q);
          },
          get getText() {
            return l();
          },
          get factorId() {
            return c(g);
          },
          get processing() {
            return a();
          },
          set processing(V) {
            a(V);
          }
        });
      }
      z(
        (q, V) => {
          j($e, q), j(W, V);
        },
        [
          () => l()("mfaScanQRCode"),
          () => l()("mfaEnterSecret")
        ]
      ), x(F, Q);
    };
    G(f, (F) => {
      c(v) ? F(I, !1) : F(w);
    });
  }
  O(m), x(e, m);
  var U = Ee(y);
  return n(), U;
}
Le(
  Nl,
  {
    processing: {},
    defaultFriendlyName: {},
    InputWrapper: {},
    supabaseClient: {},
    getText: {}
  },
  [],
  [],
  !0
);
var gv = /* @__PURE__ */ N("<!> ", 1), _v = /* @__PURE__ */ N('<div><h3><!></h3> <div><div class="spacer svelte-1x2iaml"></div> <div class="flex svelte-1x2iaml"><!></div></div></div>');
const mv = {
  hash: "svelte-1x2iaml",
  code: "div.accordion.svelte-1x2iaml {display:flex;border-left:2px solid var(--border-color);}div.spacer.svelte-1x2iaml {width:var(--flex-gap);}div.flex.svelte-1x2iaml {flex:1;flex-direction:column;transition:height 0.3s ease-in-out;margin:var(--flex-gap) 0;}div.hidden.svelte-1x2iaml {height:0 !important;overflow:hidden;}"
};
function Hn(e, t) {
  Ae(t, !0), Nt(e, mv);
  let r = E(t, "title", 7), n = E(t, "children", 7), a = /* @__PURE__ */ B(!1);
  var i = {
    get title() {
      return r();
    },
    set title(g) {
      r(g), C();
    },
    get children() {
      return n();
    },
    set children(g) {
      n(g), C();
    }
  }, s = _v(), o = D(s), l = D(o);
  Ie(l, {
    onclick: () => {
      A(a, !c(a));
    },
    children: (g, _) => {
      var b = gv(), $ = re(b);
      {
        var T = (y) => {
          var m = oe("−");
          x(y, m);
        }, k = (y) => {
          var m = oe("+");
          x(y, m);
        };
        G($, (y) => {
          c(a) ? y(T) : y(k, !1);
        });
      }
      var p = L($);
      z(() => j(p, ` ${r() ?? ""}`)), x(g, b);
    },
    $$slots: { default: !0 }
  }), O(o);
  var u = L(o, 2);
  let v;
  var h = L(D(u), 2), d = D(h);
  return yr(d, n), O(h), O(u), O(s), z((g) => v = Br(u, 1, "accordion svelte-1x2iaml", null, v, g), [() => ({ hidden: !c(a) })]), x(e, s), Ee(i);
}
Le(Hn, { title: {}, children: {} }, [], [], !0);
var bv = /* @__PURE__ */ N("<form><p> </p> <!> <!> <!> <!></form>");
function Fl(e, t) {
  Ae(t, !0);
  let r = E(t, "processing", 15, !1), n = E(t, "InputWrapper", 7), a = E(t, "supabaseClient", 7), i = E(t, "getText", 7), s = /* @__PURE__ */ B(() => {
  }), o = /* @__PURE__ */ B(!1), l = /* @__PURE__ */ B(""), u = /* @__PURE__ */ B(""), v = /* @__PURE__ */ B(!1);
  async function h() {
    H.clear(), A(o, !0);
    try {
      if (await c(s)(), !c(v)) {
        A(o, !1);
        return;
      }
      const { data: y, error: m } = await a().auth.updateUser({ nonce: c(l), password: c(u) });
      if (m) throw m;
      H.add("success", i()("pwChanged")), r(!1);
    } catch (y) {
      H.add("error", i()("error", { error: (y == null ? void 0 : y.message) ?? "?" }));
    }
    A(o, !1);
  }
  var d = {
    get processing() {
      return r();
    },
    set processing(y = !1) {
      r(y), C();
    },
    get InputWrapper() {
      return n();
    },
    set InputWrapper(y) {
      n(y), C();
    },
    get supabaseClient() {
      return a();
    },
    set supabaseClient(y) {
      a(y), C();
    },
    get getText() {
      return i();
    },
    set getText(y) {
      i(y), C();
    }
  }, g = bv(), _ = D(g), b = D(_, !0);
  O(_);
  var $ = L(_, 2);
  {
    let y = /* @__PURE__ */ Y(() => i()("enterCode"));
    xt($, n, (m, f) => {
      f(m, {
        name: "verification-code",
        get label() {
          return c(y);
        },
        icon: "key",
        children: (w, I) => {
          Sn(w, {
            get getText() {
              return i();
            },
            get value() {
              return c(l);
            },
            set value(U) {
              A(l, U, !0);
            }
          });
        },
        $$slots: { default: !0 }
      });
    });
  }
  var T = L($, 2);
  {
    let y = /* @__PURE__ */ Y(() => i()("pwLabel"));
    xt(T, n, (m, f) => {
      f(m, {
        name: "password",
        get label() {
          return c(y);
        },
        icon: "key",
        children: (w, I) => {
          bi(w, {
            feedback: !0,
            get getText() {
              return i();
            },
            get isGood() {
              return c(v);
            },
            set isGood(U) {
              A(v, U, !0);
            },
            get value() {
              return c(u);
            },
            set value(U) {
              A(u, U, !0);
            },
            get validate() {
              return c(s);
            },
            set validate(U) {
              A(s, U, !0);
            }
          });
        },
        $$slots: { default: !0 }
      });
    });
  }
  var k = L(T, 2);
  Pe(k, {
    submit: !0,
    block: !0,
    primary: !0,
    size: "large",
    icon: "inbox",
    get loading() {
      return c(o);
    },
    children: (y, m) => {
      ue();
      var f = oe();
      z((w) => j(f, w), [() => i()("pwChange")]), x(y, f);
    },
    $$slots: { default: !0 }
  });
  var p = L(k, 2);
  return Ie(p, {
    onclick: () => r(!1),
    children: (y, m) => {
      ue();
      var f = oe();
      z((w) => j(f, w), [() => i()("cancelButton")]), x(y, f);
    },
    $$slots: { default: !0 }
  }), O(g), z((y) => j(b, y), [() => i()("enterVerificationCode")]), Er("submit", g, (y) => {
    y.preventDefault(), h();
  }), x(e, g), Ee(d);
}
Le(
  Fl,
  {
    processing: {},
    InputWrapper: {},
    supabaseClient: {},
    getText: {}
  },
  [],
  [],
  !0
);
var wv = /* @__PURE__ */ N("<form><p> </p> <!> <!> <!> <!></form>");
function Dl(e, t) {
  Ae(t, !0);
  const r = () => ke($r, "$saOptions", n), [n, a] = Ft();
  let i = E(t, "processing", 15, !1), s = E(t, "InputWrapper", 7), o = E(t, "supabaseClient", 7), l = E(t, "getText", 7), u = /* @__PURE__ */ B(!1), v = /* @__PURE__ */ B("");
  async function h() {
    var f;
    H.clear(), A(u, !0);
    const m = r().deleteAccountFunction;
    if (!m) throw new Error("deleteAccountFunction is not set");
    try {
      if (typeof m == "string") {
        const w = await o().rpc(m, { nonce: c(v) });
        if (console.log(w), w.error) throw w.error;
      } else
        await m();
      alert(l()("accountDeleted")), await o().auth.signOut(), i(!1);
    } catch (w) {
      (f = w == null ? void 0 : w.message) != null && f.includes("verification code") ? (H.add("error", l()("invalidCodeError")), await o().auth.reauthenticate()) : H.add("error", (w == null ? void 0 : w.message) ?? l()("error", { error: (w == null ? void 0 : w.message) ?? "?" }));
    }
    A(u, !1);
  }
  var d = {
    get processing() {
      return i();
    },
    set processing(m = !1) {
      i(m), C();
    },
    get InputWrapper() {
      return s();
    },
    set InputWrapper(m) {
      s(m), C();
    },
    get supabaseClient() {
      return o();
    },
    set supabaseClient(m) {
      o(m), C();
    },
    get getText() {
      return l();
    },
    set getText(m) {
      l(m), C();
    }
  }, g = wv(), _ = D(g), b = D(_, !0);
  O(_);
  var $ = L(_, 2);
  {
    let m = /* @__PURE__ */ Y(() => l()("enterCode"));
    xt($, s, (f, w) => {
      w(f, {
        name: "verification-code",
        get label() {
          return c(m);
        },
        icon: "key",
        children: (I, U) => {
          Sn(I, {
            get getText() {
              return l();
            },
            get value() {
              return c(v);
            },
            set value(F) {
              A(v, F, !0);
            }
          });
        },
        $$slots: { default: !0 }
      });
    });
  }
  var T = L($, 2);
  Pe(T, {
    submit: !0,
    block: !0,
    danger: !0,
    size: "large",
    get loading() {
      return c(u);
    },
    children: (m, f) => {
      ue();
      var w = oe();
      z((I) => j(w, I), [() => l()("deleteAccount")]), x(m, w);
    },
    $$slots: { default: !0 }
  });
  var k = L(T, 2);
  Ie(k, {
    onclick: () => {
      o().auth.reauthenticate();
    },
    children: (m, f) => {
      ue();
      var w = oe();
      z((I) => j(w, I), [() => l()("resendEmail")]), x(m, w);
    },
    $$slots: { default: !0 }
  });
  var p = L(k, 2);
  Ie(p, {
    onclick: () => i(!1),
    children: (m, f) => {
      ue();
      var w = oe();
      z((I) => j(w, I), [() => l()("cancelButton")]), x(m, w);
    },
    $$slots: { default: !0 }
  }), O(g), z((m) => j(b, m), [() => l()("enterVerificationCode")]), Er("submit", g, (m) => {
    m.preventDefault(), h();
  }), x(e, g);
  var y = Ee(d);
  return a(), y;
}
Le(
  Dl,
  {
    processing: {},
    InputWrapper: {},
    supabaseClient: {},
    getText: {}
  },
  [],
  [],
  !0
);
var yv = /* @__PURE__ */ N('<p class="danger"> </p> <!>', 1), $v = /* @__PURE__ */ N("<div><p> </p> <!></div>"), xv = /* @__PURE__ */ N("<br/> ", 1), kv = /* @__PURE__ */ N("<br/> ", 1), Tv = /* @__PURE__ */ N("<br/> ", 1), Cv = /* @__PURE__ */ N('<p dir="auto"> <!> <!> <!></p>'), Av = /* @__PURE__ */ N("<!> <!>", 1), Ev = /* @__PURE__ */ N("<p> </p>"), Sv = /* @__PURE__ */ N('<li class="flex"><span> <br/> <br/> </span> <!></li>'), Iv = /* @__PURE__ */ N("<ul></ul>"), Pv = /* @__PURE__ */ N("<!> <!>", 1), Lv = /* @__PURE__ */ N("<p> </p>"), Ov = /* @__PURE__ */ N('<li class="flex"><span> <br/> </span> <!></li>'), Mv = /* @__PURE__ */ N("<ul></ul>"), zv = /* @__PURE__ */ N('<p class="warning message"> </p>'), Nv = /* @__PURE__ */ N("<!> <!> <!>", 1), Fv = /* @__PURE__ */ N('<div class="sA-user-info"><!></div> <!> <!> <!> <!> <hr class="svelte-1bkewgi"/> <!>', 1), Dv = /* @__PURE__ */ N('<div class="sA-authenticated-view svelte-1bkewgi"><!></div>');
const jv = {
  hash: "svelte-1bkewgi",
  code: ".sA-authenticated-view.svelte-1bkewgi {display:flex;flex-direction:column;gap:.5em;padding:1em;}hr.svelte-1bkewgi {margin:1em 0;color:var(--layout-color);border-width:1px;border-style:dashed;opacity:0.5;}"
};
function jl(e, t) {
  Ae(t, !0), Nt(e, jv);
  const r = () => ke(Un, "$user", s), n = () => ke(wt, "$needsMFAChallenge", s), a = () => ke($r, "$saOptions", s), i = () => ke(qa, "$socialSettings", s), [s, o] = Ft();
  let l = E(t, "InputWrapper", 7), u = E(t, "supabaseClient", 7), v = E(t, "signedInAs", 7), h = E(t, "providers", 7), d = E(t, "getText", 7), g = E(t, "locale", 7), _ = E(t, "userInfo", 7), b = /* @__PURE__ */ B(!1), $ = /* @__PURE__ */ B(!1), T = /* @__PURE__ */ B(ft([])), k = /* @__PURE__ */ Y(() => c(T).filter((S) => S.status === "verified")), p = /* @__PURE__ */ B(!1), y = /* @__PURE__ */ B(!1), m = /* @__PURE__ */ B(!1), f = /* @__PURE__ */ B(!1), w = /* @__PURE__ */ B(ft([]));
  Jr(() => {
    U(), I();
  });
  async function I() {
    const { data: S, error: R } = await u().auth.getUserIdentities();
    if (R) throw R;
    A(w, S.identities, !0);
  }
  async function U() {
    if (!r() || r().is_anonymous) {
      A($, !1), ge(wt, !1), A(f, !1);
      return;
    }
    try {
      const { data: S, error: R } = await u().auth.mfa.listFactors();
      if (R)
        throw new Error(`Failed to load MFA factors: ${R.message}`);
      A(T, (S == null ? void 0 : S.all.sort((ce, Ue) => Ue.created_at < ce.created_at ? 1 : -1)) ?? [], !0);
      const { data: q, error: V } = await u().auth.mfa.getAuthenticatorAssuranceLevel();
      if (V)
        throw new Error(`Failed to check authentication level: ${V.message}`);
      if (!q)
        throw new Error("Authentication level data not available");
      const le = c(k).length > 0, de = q.currentLevel === "aal1", ze = q.nextLevel === "aal2";
      ge(wt, le && de && ze ? "toLogin" : !1), A($, !le && a().auth.mfa.required || !1, !0), A(f, !1);
    } catch (S) {
      console.warn("MFA status check failed:", S), c(k).length > 0 ? (ge(wt, "toLogin"), A($, !1), A(f, !1)) : A(f, !0);
    }
  }
  async function F() {
    A(b, !0), H.clear();
    const { error: S } = await u().auth.signOut();
    S && H.add("error", S.message), ge(Gr, ""), ge(Zt, null), A(b, !1);
  }
  async function Q(S) {
    var q, V, le;
    if (!(!((le = (V = (q = a()) == null ? void 0 : q.auth) == null ? void 0 : V.mfa) != null && le.required) || c(k).length > 1 || S.status === "unverified")) {
      H.add("error", d()("mfaNoDeleteError"));
      return;
    }
    if (confirm(d()("mfaDeleteFactorConfirmation", {
      name: S.friendly_name ?? S.factor_type.toUpperCase()
    }))) {
      A(b, !0), H.clear();
      try {
        const { error: de } = await u().auth.mfa.unenroll({ factorId: S.id });
        if (de && ea(de)) {
          ge(wt, "toElevate");
          return;
        }
        await U();
      } catch (de) {
        if (ea(de)) {
          ge(wt, "toElevate");
          return;
        }
        H.add("error", d()("error", { error: (de == null ? void 0 : de.message) ?? "?" }));
      } finally {
        A(b, !1);
      }
    }
  }
  async function ee(S) {
    var R;
    if (confirm(d()("socialUnlinkIdentityConfirmation", {
      provider: S.provider,
      email: ((R = S.identity_data) == null ? void 0 : R.email) ?? S.email ?? ""
    }))) {
      A(b, !0), H.clear();
      try {
        const { error: q } = await u().auth.unlinkIdentity(S);
        if (q) throw q;
      } catch (q) {
        H.add("error", d()("error", { error: (q == null ? void 0 : q.message) ?? "?" }));
      } finally {
        await I(), A(b, !1);
      }
    }
  }
  async function _e() {
    const { data: S, error: R } = await u().auth.reauthenticate();
    H.clear(), A(y, !0);
  }
  async function $e() {
    const { data: S, error: R } = await u().auth.reauthenticate();
    H.clear(), A(m, !0);
  }
  function pe(S, R = !1) {
    return S ? new Date(S).toLocaleString(g(), {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: R ? "numeric" : void 0,
      minute: R ? "2-digit" : void 0,
      second: R ? "2-digit" : void 0
    }) : "";
  }
  ci(() => {
    H.clear();
  });
  var Oe = {
    get InputWrapper() {
      return l();
    },
    set InputWrapper(S) {
      l(S), C();
    },
    get supabaseClient() {
      return u();
    },
    set supabaseClient(S) {
      u(S), C();
    },
    get signedInAs() {
      return v();
    },
    set signedInAs(S) {
      v(S), C();
    },
    get providers() {
      return h();
    },
    set providers(S) {
      h(S), C();
    },
    get getText() {
      return d();
    },
    set getText(S) {
      d(S), C();
    },
    get locale() {
      return g();
    },
    set locale(S) {
      g(S), C();
    },
    get userInfo() {
      return _();
    },
    set userInfo(S) {
      _(S), C();
    }
  }, P = Dv(), W = D(P);
  {
    var M = (S) => {
      var R = yv(), q = re(R), V = D(q, !0);
      O(q);
      var le = L(q, 2);
      Pe(le, {
        block: !0,
        size: "medium",
        get loading() {
          return c(b);
        },
        onclick: F,
        children: (de, ze) => {
          ue();
          var te = oe();
          z((ce) => j(te, ce), [() => d()("signOutButton")]), x(de, te);
        },
        $$slots: { default: !0 }
      }), z((de) => j(V, de), [() => d()("networkError")]), x(S, R);
    }, K = (S) => {
      var R = Se(), q = re(R);
      {
        var V = (de) => {
          zl(de, {
            get InputWrapper() {
              return l();
            },
            get supabaseClient() {
              return u();
            },
            get getText() {
              return d();
            },
            get processing() {
              return bu(), n();
            },
            set processing(ze) {
              ge(wt, ze);
            }
          });
        }, le = (de) => {
          var ze = Se(), te = re(ze);
          {
            var ce = (Ne) => {
              Fl(Ne, {
                get InputWrapper() {
                  return l();
                },
                get supabaseClient() {
                  return u();
                },
                get getText() {
                  return d();
                },
                get processing() {
                  return c(y);
                },
                set processing(Ir) {
                  A(y, Ir, !0);
                }
              });
            }, Ue = (Ne) => {
              var Ir = Se(), jt = re(Ir);
              {
                var Pr = (Rt) => {
                  Dl(Rt, {
                    get InputWrapper() {
                      return l();
                    },
                    get supabaseClient() {
                      return u();
                    },
                    get getText() {
                      return d();
                    },
                    get processing() {
                      return c(m);
                    },
                    set processing(Lr) {
                      A(m, Lr, !0);
                    }
                  });
                }, In = (Rt) => {
                  var Lr = Se(), va = re(Lr);
                  {
                    var ha = (He) => {
                      {
                        let Ct = /* @__PURE__ */ Y(() => c(k).length ? `${d()("backupText", { count: c(T).length })}` : "TOTP");
                        Nl(He, {
                          get defaultFriendlyName() {
                            return c(Ct);
                          },
                          get InputWrapper() {
                            return l();
                          },
                          get supabaseClient() {
                            return u();
                          },
                          get getText() {
                            return d();
                          },
                          get processing() {
                            return c(p);
                          },
                          set processing(qt) {
                            A(p, qt, !0);
                          }
                        });
                      }
                    }, rt = (He) => {
                      var Ct = Se(), qt = re(Ct);
                      {
                        var Wt = (gt) => {
                          var Vt = $v(), sr = D(Vt), pa = D(sr, !0);
                          O(sr);
                          var ga = L(sr, 2);
                          Pe(ga, {
                            block: !0,
                            primary: !0,
                            size: "large",
                            onclick: () => A(p, !0),
                            children: (rn, _a) => {
                              ue();
                              var Pn = oe();
                              z((Ln) => j(Pn, Ln), [() => d()("mfaAddFactorLink")]), x(rn, Pn);
                            },
                            $$slots: { default: !0 }
                          }), O(Vt), z((rn) => j(pa, rn), [() => d()("mfaRequired")]), x(gt, Vt);
                        }, tn = (gt) => {
                          var Vt = Fv(), sr = re(Vt), pa = D(sr);
                          {
                            var ga = (be) => {
                              var we = Se(), Me = re(we);
                              yr(Me, v, r), x(be, we);
                            }, rn = (be) => {
                              var we = Cv(), Me = D(we), At = L(Me);
                              {
                                var _t = (ye) => {
                                  var ae = xv(), ve = L(re(ae), 1, !0);
                                  z((fe) => j(ve, fe), [
                                    () => {
                                      var fe;
                                      return d()("signedInEmail", { email: ((fe = r()) == null ? void 0 : fe.email) ?? "" });
                                    }
                                  ]), x(ye, ae);
                                };
                                G(At, (ye) => {
                                  var ae;
                                  (ae = r()) != null && ae.email && ye(_t);
                                });
                              }
                              var mt = L(At, 2);
                              {
                                var lr = (ye) => {
                                  var ae = kv(), ve = L(re(ae), 1, !0);
                                  z((fe) => j(ve, fe), [
                                    () => {
                                      var fe;
                                      return d()("createdTime", { time: pe((fe = r()) == null ? void 0 : fe.created_at, !0) });
                                    }
                                  ]), x(ye, ae);
                                };
                                G(mt, (ye) => {
                                  var ae;
                                  (ae = r()) != null && ae.created_at && ye(lr);
                                });
                              }
                              var ct = L(mt, 2);
                              {
                                var Et = (ye) => {
                                  var ae = Tv(), ve = L(re(ae), 1, !0);
                                  z((fe) => j(ve, fe), [
                                    () => {
                                      var fe;
                                      return d()("signedInTime", { time: pe((fe = r()) == null ? void 0 : fe.last_sign_in_at, !0) });
                                    }
                                  ]), x(ye, ae);
                                };
                                G(ct, (ye) => {
                                  var ae;
                                  (ae = r()) != null && ae.last_sign_in_at && ye(Et);
                                });
                              }
                              O(we), z(
                                (ye) => {
                                  j(Me, `${ye ?? ""} `), we.dir = we.dir;
                                },
                                [() => d()("signedIn")]
                              ), x(be, we);
                            };
                            G(pa, (be) => {
                              v() ? be(ga) : be(rn, !1);
                            });
                          }
                          O(sr);
                          var _a = L(sr, 2);
                          {
                            var Pn = (be) => {
                              var we = Se(), Me = re(we);
                              yr(Me, _, r), x(be, we);
                            };
                            G(_a, (be) => {
                              _() && be(Pn);
                            });
                          }
                          var Ln = L(_a, 2);
                          {
                            let be = /* @__PURE__ */ Y(() => d()("accountSecurityHeading"));
                            Hn(Ln, {
                              get title() {
                                return c(be);
                              },
                              children: (we, Me) => {
                                var At = Av(), _t = re(At);
                                Pe(_t, {
                                  block: !0,
                                  size: "medium",
                                  onclick: _e,
                                  children: (ct, Et) => {
                                    ue();
                                    var ye = oe();
                                    z((ae) => j(ye, ae), [() => d()("pwChange")]), x(ct, ye);
                                  },
                                  $$slots: { default: !0 }
                                });
                                var mt = L(_t, 2);
                                {
                                  var lr = (ct) => {
                                    Ie(ct, {
                                      block: !0,
                                      class: "danger",
                                      size: "medium",
                                      onclick: $e,
                                      children: (Et, ye) => {
                                        ue();
                                        var ae = oe();
                                        z((ve) => j(ae, ve), [() => d()("deleteAccount")]), x(Et, ae);
                                      },
                                      $$slots: { default: !0 }
                                    });
                                  };
                                  G(mt, (ct) => {
                                    a().deleteAccountFunction && ct(lr);
                                  });
                                }
                                x(we, At);
                              },
                              $$slots: { default: !0 }
                            });
                          }
                          var $i = L(Ln, 2);
                          {
                            var ql = (be) => {
                              {
                                let we = /* @__PURE__ */ Y(() => {
                                  var Me;
                                  return d()("providersListHeading") + ` (${((Me = c(w)) == null ? void 0 : Me.length) ?? "0"})`;
                                });
                                Hn(be, {
                                  get title() {
                                    return c(we);
                                  },
                                  children: (Me, At) => {
                                    var _t = Pv(), mt = re(_t);
                                    {
                                      var lr = (ae) => {
                                        var ve = Ev(), fe = D(ve, !0);
                                        O(ve), z((Te) => j(fe, Te), [() => d()("noProviders")]), x(ae, ve);
                                      }, ct = (ae) => {
                                        var ve = Iv();
                                        gn(ve, 21, () => c(w), pn, (fe, Te, Re, ma) => {
                                          const or = /* @__PURE__ */ Y(() => {
                                            var Ce, St, Mr;
                                            return ((St = (Ce = c(Te)) == null ? void 0 : Ce.identity_data) == null ? void 0 : St.email) ?? ((Mr = c(Te)) == null ? void 0 : Mr.email) ?? "";
                                          });
                                          var Ut = Sv(), Or = D(Ut), On = D(Or), Mn = L(On, 2), Ht = L(Mn, 2);
                                          O(Or);
                                          var Bt = L(Or, 2);
                                          {
                                            var zn = (Ce) => {
                                              {
                                                let St = /* @__PURE__ */ Y(() => d()("deleteLinkedAccountLabel", { provider: c(Te).provider, email: c(or) }));
                                                Ie(Ce, {
                                                  large: !0,
                                                  get "aria-label"() {
                                                    return c(St);
                                                  },
                                                  class: "danger",
                                                  onclick: () => ee(c(Te)),
                                                  children: (Mr, Xv) => {
                                                    ue();
                                                    var Ul = oe("✗");
                                                    x(Mr, Ul);
                                                  },
                                                  $$slots: { default: !0 }
                                                });
                                              }
                                            };
                                            G(Bt, (Ce) => {
                                              a().auth.enable_manual_linking && c(w).length > 1 && Ce(zn);
                                            });
                                          }
                                          O(Ut), z(
                                            (Ce, St, Mr) => {
                                              je(Ut, "aria-label", Ce), j(On, `${c(Te).provider ?? ""} (${c(or) ?? ""}) `), j(Mn, ` ${St ?? ""} `), j(Ht, ` ${Mr ?? ""}`);
                                            },
                                            [
                                              () => d()("linkedAccountLabel", { provider: c(Te).provider }),
                                              () => {
                                                var Ce;
                                                return d()("createdTime", { time: pe((Ce = c(Te)) == null ? void 0 : Ce.created_at, !0) });
                                              },
                                              () => {
                                                var Ce;
                                                return d()("signedInTime", { time: pe((Ce = c(Te)) == null ? void 0 : Ce.last_sign_in_at, !0) });
                                              }
                                            ]
                                          ), x(fe, Ut);
                                        }), O(ve), x(ae, ve);
                                      };
                                      G(mt, (ae) => {
                                        c(w).length === 0 ? ae(lr) : ae(ct, !1);
                                      });
                                    }
                                    var Et = L(mt, 2);
                                    {
                                      var ye = (ae) => {
                                        wi(ae, ul(
                                          {
                                            get supabaseClient() {
                                              return u();
                                            },
                                            get providers() {
                                              return h();
                                            }
                                          },
                                          i,
                                          {
                                            isLinking: !0,
                                            get getText() {
                                              return d();
                                            }
                                          }
                                        ));
                                      };
                                      G(Et, (ae) => {
                                        a().auth.enable_manual_linking && ae(ye);
                                      });
                                    }
                                    x(Me, _t);
                                  },
                                  $$slots: { default: !0 }
                                });
                              }
                            };
                            G($i, (be) => {
                              var we;
                              (we = h()) != null && we.length && be(ql);
                            });
                          }
                          var xi = L($i, 2);
                          {
                            var Wl = (be) => {
                              {
                                let we = /* @__PURE__ */ Y(() => d()("mfaFactorListHeading") + ` (${c(k).length})${c(k).length === 1 ? " ⚠️" : ""}`);
                                Hn(be, {
                                  get title() {
                                    return c(we);
                                  },
                                  children: (Me, At) => {
                                    var _t = Nv(), mt = re(_t);
                                    {
                                      var lr = (ve) => {
                                        var fe = Lv(), Te = D(fe, !0);
                                        O(fe), z((Re) => j(Te, Re), [() => d()("mfaNoFactorsText")]), x(ve, fe);
                                      }, ct = (ve) => {
                                        var fe = Mv();
                                        gn(fe, 21, () => c(T), pn, (Te, Re) => {
                                          const ma = /* @__PURE__ */ Y(() => {
                                            var Ht, Bt;
                                            return (((Ht = c(Re)) == null ? void 0 : Ht.friendly_name) ?? ((Bt = c(Re)) == null ? void 0 : Bt.factor_type)) + (c(Re).status === "unverified" ? " (unverified)" : "");
                                          });
                                          var or = Ov(), Ut = D(or), Or = D(Ut), On = L(Or, 2);
                                          O(Ut);
                                          var Mn = L(Ut, 2);
                                          {
                                            let Ht = /* @__PURE__ */ Y(() => d()("deleteMfaTokenLabel", { name: c(ma) }));
                                            Ie(Mn, {
                                              large: !0,
                                              get "aria-label"() {
                                                return c(Ht);
                                              },
                                              class: "danger",
                                              onclick: () => Q(c(Re)),
                                              children: (Bt, zn) => {
                                                ue();
                                                var Ce = oe("✗");
                                                x(Bt, Ce);
                                              },
                                              $$slots: { default: !0 }
                                            });
                                          }
                                          O(or), z(
                                            (Ht, Bt, zn) => {
                                              var Ce, St;
                                              je(or, "aria-label", Ht), j(Or, `${((Ce = c(Re)) == null ? void 0 : Ce.friendly_name) ?? ((St = c(Re)) == null ? void 0 : St.factor_type) ?? ""} (${Bt ?? ""}) `), j(On, ` ${zn ?? ""}`);
                                            },
                                            [
                                              () => d()("mfaTokenLabel", { name: c(ma) }),
                                              () => d()(c(Re).status === "verified" ? "verified" : "unverified"),
                                              () => d()("createdTime", { time: pe(c(Re).created_at, !0) })
                                            ]
                                          ), x(Te, or);
                                        }), O(fe), x(ve, fe);
                                      };
                                      G(mt, (ve) => {
                                        c(T).length === 0 ? ve(lr) : ve(ct, !1);
                                      });
                                    }
                                    var Et = L(mt, 2);
                                    {
                                      var ye = (ve) => {
                                        var fe = zv(), Te = D(fe, !0);
                                        O(fe), z((Re) => j(Te, Re), [() => d()("mfaWarningText")]), x(ve, fe);
                                      };
                                      G(Et, (ve) => {
                                        c(k).length === 1 && ve(ye);
                                      });
                                    }
                                    var ae = L(Et, 2);
                                    Ie(ae, {
                                      block: !0,
                                      onclick: () => A(p, !0),
                                      children: (ve, fe) => {
                                        ue();
                                        var Te = oe();
                                        z((Re) => j(Te, Re), [() => d()("mfaAddFactorLink")]), x(ve, Te);
                                      },
                                      $$slots: { default: !0 }
                                    }), x(Me, _t);
                                  },
                                  $$slots: { default: !0 }
                                });
                              }
                            };
                            G(xi, (be) => {
                              a().auth.mfa.totp.enroll_enabled && be(Wl);
                            });
                          }
                          var Vl = L(xi, 4);
                          Pe(Vl, {
                            block: !0,
                            size: "medium",
                            get loading() {
                              return c(b);
                            },
                            onclick: F,
                            children: (be, we) => {
                              ue();
                              var Me = oe();
                              z((At) => j(Me, At), [() => d()("signOutButton")]), x(be, Me);
                            },
                            $$slots: { default: !0 }
                          }), x(gt, Vt);
                        };
                        G(
                          qt,
                          (gt) => {
                            c($) ? gt(Wt) : gt(tn, !1);
                          },
                          !0
                        );
                      }
                      x(He, Ct);
                    };
                    G(
                      va,
                      (He) => {
                        c(p) ? He(ha) : He(rt, !1);
                      },
                      !0
                    );
                  }
                  x(Rt, Lr);
                };
                G(
                  jt,
                  (Rt) => {
                    c(m) ? Rt(Pr) : Rt(In, !1);
                  },
                  !0
                );
              }
              x(Ne, Ir);
            };
            G(
              te,
              (Ne) => {
                c(y) ? Ne(ce) : Ne(Ue, !1);
              },
              !0
            );
          }
          x(de, ze);
        };
        G(
          q,
          (de) => {
            n() ? de(V) : de(le, !1);
          },
          !0
        );
      }
      x(S, R);
    };
    G(W, (S) => {
      c(f) ? S(M) : S(K, !1);
    });
  }
  O(P), x(e, P);
  var J = Ee(Oe);
  return o(), J;
}
Le(
  jl,
  {
    InputWrapper: {},
    supabaseClient: {},
    signedInAs: {},
    providers: {},
    getText: {},
    locale: {},
    userInfo: {}
  },
  [],
  [],
  !0
);
var Rv = /* @__PURE__ */ N("<div><form><!> <!> <!> <!></form></div>");
function Rl(e, t) {
  Ae(t, !0);
  const r = () => ke(Zt, "$emailLinkSent", a), n = () => ke($r, "$saOptions", a), [a, i] = Ft();
  let s = E(t, "InputWrapper", 7), o = E(t, "supabaseClient", 7), l = E(t, "getText", 7), u = /* @__PURE__ */ B(!1), v = /* @__PURE__ */ B(!1), h = /* @__PURE__ */ B("");
  async function d() {
    if (r()) {
      if (!c(h).trim()) {
        H.add("error", l()("enterVerificationCode"));
        return;
      }
      H.clear(), A(u, !0);
      try {
        const { error: f } = await o().auth.verifyOtp({
          email: r().email,
          token: c(h),
          type: "email"
        });
        f ? H.add("error", f.message) : H.add("success", l()("emailVerifiedSuccess"));
      } catch (f) {
        H.add("error", l()("authenticationError", { error: f instanceof Error ? f.message : "Unknown error" }));
      }
      ge(Zt, null), A(u, !1);
    }
  }
  async function g() {
    if (!(!r() || !n().auth.email)) {
      H.clear(), A(v, !0);
      try {
        const { error: f } = await o().auth.signInWithOtp({ email: r().email });
        f ? H.add("error", f.message) : (ge(Zt, {
          ...r(),
          sentAt: /* @__PURE__ */ new Date(),
          expiresAt: new Date(Date.now() + n().auth.email.otp_expiry * 1e3)
        }), H.add("success", l()("emailLinkSent", { email: r().email })));
      } catch (f) {
        H.add("error", l()("networkError", { error: f instanceof Error ? f.message : "Unknown error" }));
      }
      A(v, !1);
    }
  }
  var _ = {
    get InputWrapper() {
      return s();
    },
    set InputWrapper(f) {
      s(f), C();
    },
    get supabaseClient() {
      return o();
    },
    set supabaseClient(f) {
      o(f), C();
    },
    get getText() {
      return l();
    },
    set getText(f) {
      l(f), C();
    }
  }, b = Rv(), $ = D(b), T = D($);
  {
    let f = /* @__PURE__ */ Y(() => {
      var w;
      return l()("linkEnterCodeLabel", { email: (w = r()) == null ? void 0 : w.email });
    });
    xt(T, s, (w, I) => {
      I(w, {
        name: "verification-code",
        get label() {
          return c(f);
        },
        icon: "key",
        children: (U, F) => {
          Sn(U, {
            get getText() {
              return l();
            },
            get value() {
              return c(h);
            },
            set value(Q) {
              A(h, Q, !0);
            }
          });
        },
        $$slots: { default: !0 }
      });
    });
  }
  var k = L(T, 2);
  Pe(k, {
    submit: !0,
    block: !0,
    primary: !0,
    size: "large",
    get loading() {
      return c(u);
    },
    icon: "check",
    children: (f, w) => {
      ue();
      var I = oe();
      z((U) => j(I, U), [() => l()("verifyCode")]), x(f, I);
    },
    $$slots: { default: !0 }
  });
  var p = L(k, 2);
  {
    let f = /* @__PURE__ */ Y(() => c(v) || c(u));
    Pe(p, {
      block: !0,
      size: "large",
      get loading() {
        return c(f);
      },
      icon: "mail",
      onclick: g,
      children: (w, I) => {
        ue();
        var U = oe();
        z((F) => j(U, F), [() => l()("resendEmail")]), x(w, U);
      },
      $$slots: { default: !0 }
    });
  }
  var y = L(p, 2);
  Ie(y, {
    onclick: () => ge(Zt, null),
    children: (f, w) => {
      ue();
      var I = oe();
      z((U) => j(I, U), [() => l()("cancelButton")]), x(f, I);
    },
    $$slots: { default: !0 }
  }), O($), O(b), Er("submit", $, (f) => {
    f.preventDefault(), d();
  }), x(e, b);
  var m = Ee(_);
  return i(), m;
}
Le(Rl, { InputWrapper: {}, supabaseClient: {}, getText: {} }, [], [], !0);
const qv = {
  cancelButton: "Cancel",
  deleteButton: "Delete",
  verifiedText: "verified",
  unverifiedText: "unverified",
  backupText: "backup {count}",
  signIn: "Sign in",
  signUp: "Sign up",
  emailLabel: "Email address",
  sendLink: "Send link",
  resetPassword: "Reset your passphrase",
  verifyCode: "Verify code",
  enterCode: "Enter code",
  enterCodeTitle: "Enter exactly 6 digits",
  resendEmail: "Resend email",
  // Password confirmation
  pwLabel: "Passphrase",
  pwConfirmLabel: "Confirm passphrase",
  pwLength: "Your passphrase must be at least {min} characters.",
  pwBreached: "Your passphrase was found in at least 1 data breach. ({count})",
  pwUniqueness: "Your passphrase should include more unique characters that are not repetitive or related to the site or your personal information.",
  pwLengthLabel: "length check",
  pwBreachedLabel: "breach check",
  pwUniquenessLabel: "uniqueness check",
  pwChange: "Change your passphrase",
  pwChanged: "Passphrase changed successfully.",
  // Link texts
  switchToMagicLink: "Sign in with an email link",
  switchToPassword: "Sign in with a passphrase",
  goBackToSignIn: "Go back to sign in",
  // Messages
  emailLinkSent: "Login link sent to {email}.",
  resetPasswordSent: "Check your email for the passphrase reset link",
  error: "An error occurred. ({error})",
  networkError: "Due to a network or server error, your login could not be completed. Please try again or reload this page. ({error})",
  invalidCodeError: "Invalid code. Please check and try again.",
  authenticationError: "Authentication failed. Please try again. ({error})",
  // Email verification
  linkEnterCodeHeading: "Magic Link Verification",
  linkEnterCodeLabel: "Click the link in the email sent to {email}, or enter the verification code below.",
  // Account security
  accountSecurityHeading: "Account security",
  changeEmail: "Change email",
  deleteAccount: "Delete account",
  accountDeleted: "Account deleted successfully.",
  // Social auth
  socialHeading: "Sign in with",
  socialDivider: "or continue with",
  socialSignIn: "Sign in with {provider}",
  socialLinking: "Link {provider} account",
  socialUnlinkIdentityConfirmation: "Are you sure you want to unlink the {provider} account for the email {email}?",
  // Authenticated view
  signedIn: "You are signed in.",
  signedInTime: "Last signed in: {time}",
  signedInEmail: "Email: {email}",
  createdTime: "Created: {time}",
  signOutButton: "Sign out",
  // MFA
  mfaFactorListHeading: "Multi-factor authentication (MFA) tokens",
  verified: "verified",
  unverified: "unverified",
  mfaNoFactorsText: "No MFA tokens",
  mfaAddFactorLink: "add a new MFA token",
  mfaNoDeleteError: "You cannot delete the last authentication method when MFA is required.",
  mfaDeleteFactorConfirmation: "Are you sure you want to delete the {name} multi-factor authentication token?",
  // MFA required
  mfaRequired: "Multi-factor authentication is required for your account. Please set up a token to continue.",
  // Add MFA
  mfaAddFactorParagraph: "Add a multi-factor authentication token to your account.",
  mfaFriendlyNameLabel: "Name (for you to identify this token)",
  mfaAddFactorButton: "Generate new token",
  mfaScanQRCode: "Scan the QR code below in your authentication app:",
  mfaEnterSecret: "Or enter the following secret manually:",
  // MFA Challenge
  mfaEnterCodeHeading: "Multi-Factor Authentication",
  mfaEnterCodeLabel: "Enter the code from your authentication app:",
  mfaSelectLabel: "MFA Code:",
  mfaChallengeNotInitialized: "Challenge not initialized. Please try again.",
  // MFA Warning
  mfaWarningText: "Warning! You have only ONE multi-factor authentication token saved. If you lose that token, it may be impossible to recover access to your account. It is recommended to add at least one backup token to your account, and save the provided codes in a secure location as recovery keys. To do this, take a screenshot of the QR code or copy the secret key into a secure location.",
  // Providers
  providersListHeading: "Linked accounts",
  noProviders: "No linked accounts",
  // Additional UI strings
  loadingAuthMethods: "Loading authentication methods...",
  enterValidName: "Please enter a valid name (1-50 characters)",
  enterVerificationCode: "Please enter the verification code sent to your email.",
  emailVerifiedSuccess: "Email verified successfully!",
  hideSecret: "Hide",
  showSecret: "Show Secret",
  // Aria labels for accessibility
  linkedAccountLabel: "Linked account on {provider}",
  deleteLinkedAccountLabel: "Delete linked account for {provider} ({email})",
  mfaTokenLabel: "Multi-factor authenticator {name}",
  deleteMfaTokenLabel: "Delete multi-factor authenticator {name}",
  qrCodeAlt: "QR Code for TOTP setup",
  totpSecretLabel: "TOTP Secret"
}, It = {
  en: qv
};
function jn(e, t) {
  return t ? e.replace(/\{(\w+)\}/g, (r, n) => t[n] !== void 0 ? String(t[n]) : r) : e;
}
function Wv(e = "en", t = It, r) {
  return function(a, i) {
    const s = String(a);
    let o;
    if (t && t[s])
      return o = t[s], jn(o, i ?? {});
    if (It[e] && It[e][s])
      return o = It[e][s], jn(o, i ?? {});
    const l = e.substring(0, 2);
    return l !== e && It[l] && It[l][s] ? (o = It[l][s], jn(o, i ?? {})) : It.en[s] ? (o = It.en[s], jn(o, i ?? {})) : s;
  };
}
var Vv = /* @__PURE__ */ N('<div class="sA-error svelte-8ewn3c">Error: supabaseUrl and supabaseAnonKey are required</div>'), Uv = /* @__PURE__ */ N('<div class="sA-loading svelte-8ewn3c"></div>'), Hv = /* @__PURE__ */ N('<!> <div role="separator" class="divider flex svelte-8ewn3c"><span class="svelte-8ewn3c"> </span></div>', 1), Bv = /* @__PURE__ */ N("<!> <!>", 1), Gv = /* @__PURE__ */ N("<li><span> </span> <!></li>"), Kv = /* @__PURE__ */ N("<ul></ul>"), Yv = /* @__PURE__ */ N('<div dir="auto"><!> <!></div>');
const Zv = {
  hash: "svelte-8ewn3c",
  code: ".sA.svelte-8ewn3c {width:100%;display:flex;flex-direction:column;}.sA {--flex-gap: .5em;--input-padding: 5px 3px 5px 35px;--link-color: blue;--layout-color: #ccc;--primary-color: hsl(141, 71%, 48%);--primary-text-color: white;--danger-color: hsl(358, 86%, 58%);--warning-color: hsl(36, 100%, 44%);--success-color: hsl(141, 71%, 48%);}.sA .message {font-size:78%;line-height:1.1em;margin:.5em;}.sA input {display:block;width:100%;padding:var(--input-padding);}.sA form {display:flex;flex-direction:column;gap:1.2rem;}.sA .flex {display:flex;gap:var(--flex-gap);}.sA ul li {padding:.5em;margin:.5em 0;display:flex;align-items:center;gap:var(--flex-gap);}.sA ul li span {flex:1;}.sA .danger, .sA .error {color:var(--danger-color);}.sA .warning {color:var(--warning-color);}.divider.svelte-8ewn3c {color:var(--layout-color);width:100%;align-items:center;white-space:nowrap;font-size:80%;}.divider.svelte-8ewn3c span:where(.svelte-8ewn3c) {margin:1rem;}.divider.svelte-8ewn3c::before, .divider.svelte-8ewn3c::after {border-bottom-style:solid;border-bottom-width:1px;top:50%;content:'';position:relative;display:inline-block;width:50%;}.sA-error.svelte-8ewn3c {color:var(--danger-color);padding:1rem;text-align:center;}.sA-loading.svelte-8ewn3c {padding:2rem;text-align:center;}"
};
function Jv(e, t) {
  Ae(t, !0), Nt(e, Zv);
  const r = () => ke($r, "$saOptions", l), n = () => ke(qa, "$socialSettings", l), a = () => ke(fr, "$signInView", l), i = () => ke(Un, "$user", l), s = () => ke(Zt, "$emailLinkSent", l), o = () => ke(H, "$messages", l), [l, u] = Ft();
  let v = E(t, "supabaseUrl", 7), h = E(t, "supabaseAnonKey", 7), d = E(t, "class", 7, ""), g = E(t, "style", 7, ""), _ = E(t, "socialLayout", 7, "vertical"), b = E(t, "socialButtonSize", 7, "medium"), $ = E(t, "providers", 7, "[]"), T = E(t, "initialView", 7, "sign_in_with_password"), k = E(t, "locale", 7, "en"), p = E(t, "authOptions", 7, "{}"), y = E(t, "texts", 7, "{}");
  const m = /* @__PURE__ */ Y(() => () => {
    try {
      return JSON.parse($());
    } catch {
      return [];
    }
  }), f = /* @__PURE__ */ Y(() => () => {
    try {
      return JSON.parse(p());
    } catch {
      return {};
    }
  }), w = /* @__PURE__ */ Y(() => () => {
    try {
      return JSON.parse(y());
    } catch {
      return {};
    }
  }), I = /* @__PURE__ */ Y(() => () => !v() || !h() ? (console.error("supabase-auth: supabaseUrl and supabaseAnonKey are required"), null) : Gl(v(), h()));
  ge($r, Id(c(f)(), Pu)), ge(qa, {
    ...n(),
    socialLayout: _(),
    socialButtonSize: b()
  });
  let U = /* @__PURE__ */ B(!0);
  const F = /* @__PURE__ */ Y(() => Wv(k(), c(w)()));
  ge(fr, T()), Qs(() => {
    if (!c(I)()) {
      A(U, !1);
      return;
    }
    c(I)().auth.getSession().then(({ data: { session: K } }) => {
      ge(Un, (K == null ? void 0 : K.user) ?? null), A(U, !1);
    });
    const { data: { subscription: M } } = c(I)().auth.onAuthStateChange((K, J) => {
      ge(Un, (J == null ? void 0 : J.user) ?? null), A(U, !1);
    });
    return () => M.unsubscribe();
  }), Jr(() => {
    t.$$host && (t.$$host.user = i());
  });
  var Q = {
    get supabaseUrl() {
      return v();
    },
    set supabaseUrl(M) {
      v(M), C();
    },
    get supabaseAnonKey() {
      return h();
    },
    set supabaseAnonKey(M) {
      h(M), C();
    },
    get class() {
      return d();
    },
    set class(M = "") {
      d(M), C();
    },
    get style() {
      return g();
    },
    set style(M = "") {
      g(M), C();
    },
    get socialLayout() {
      return _();
    },
    set socialLayout(M = "vertical") {
      _(M), C();
    },
    get socialButtonSize() {
      return b();
    },
    set socialButtonSize(M = "medium") {
      b(M), C();
    },
    get providers() {
      return $();
    },
    set providers(M = "[]") {
      $(M), C();
    },
    get initialView() {
      return T();
    },
    set initialView(M = "sign_in_with_password") {
      T(M), C();
    },
    get locale() {
      return k();
    },
    set locale(M = "en") {
      k(M), C();
    },
    get authOptions() {
      return p();
    },
    set authOptions(M = "{}") {
      p(M), C();
    },
    get texts() {
      return y();
    },
    set texts(M = "{}") {
      y(M), C();
    }
  }, ee = Yv(), _e = D(ee);
  {
    var $e = (M) => {
      var K = Vv();
      x(M, K);
    }, pe = (M) => {
      var K = Se(), J = re(K);
      {
        var S = (q) => {
          {
            let V = /* @__PURE__ */ Y(() => c(I)()), le = /* @__PURE__ */ Y(() => c(m)());
            jl(q, {
              get InputWrapper() {
                return un;
              },
              get supabaseClient() {
                return c(V);
              },
              get providers() {
                return c(le);
              },
              get getText() {
                return c(F);
              },
              get locale() {
                return k();
              }
            });
          }
        }, R = (q) => {
          var V = Se(), le = re(V);
          {
            var de = (te) => {
              {
                let ce = /* @__PURE__ */ Y(() => c(I)());
                Rl(te, {
                  get InputWrapper() {
                    return un;
                  },
                  get supabaseClient() {
                    return c(ce);
                  },
                  get getText() {
                    return c(F);
                  }
                });
              }
            }, ze = (te) => {
              var ce = Se(), Ue = re(ce);
              {
                var Ne = (jt) => {
                  var Pr = Uv();
                  x(jt, Pr);
                }, Ir = (jt) => {
                  var Pr = Bv(), In = re(Pr);
                  {
                    var Rt = (rt) => {
                      var He = Hv(), Ct = re(He);
                      {
                        let gt = /* @__PURE__ */ Y(() => c(I)()), Vt = /* @__PURE__ */ Y(() => c(m)());
                        wi(Ct, ul(
                          {
                            get supabaseClient() {
                              return c(gt);
                            },
                            get providers() {
                              return c(Vt);
                            }
                          },
                          n,
                          {
                            get getText() {
                              return c(F);
                            }
                          }
                        ));
                      }
                      var qt = L(Ct, 2), Wt = D(qt), tn = D(Wt, !0);
                      O(Wt), O(qt), z((gt) => j(tn, gt), [() => c(F)("socialDivider")]), x(rt, He);
                    };
                    G(In, (rt) => {
                      c(m)().length && rt(Rt);
                    });
                  }
                  var Lr = L(In, 2);
                  {
                    var va = (rt) => {
                      {
                        let He = /* @__PURE__ */ Y(() => c(I)());
                        Ol(rt, {
                          get InputWrapper() {
                            return un;
                          },
                          get supabaseClient() {
                            return c(He);
                          },
                          get getText() {
                            return c(F);
                          }
                        });
                      }
                    }, ha = (rt) => {
                      var He = Se(), Ct = re(He);
                      {
                        var qt = (Wt) => {
                          {
                            let tn = /* @__PURE__ */ Y(() => c(I)());
                            Ml(Wt, {
                              get InputWrapper() {
                                return un;
                              },
                              get supabaseClient() {
                                return c(tn);
                              },
                              get getText() {
                                return c(F);
                              }
                            });
                          }
                        };
                        G(
                          Ct,
                          (Wt) => {
                            a() == "forgotten_password" && Wt(qt);
                          },
                          !0
                        );
                      }
                      x(rt, He);
                    };
                    G(Lr, (rt) => {
                      r().auth.email && (a() == "sign_in" || a() == "sign_in_with_password") ? rt(va) : rt(ha, !1);
                    });
                  }
                  x(jt, Pr);
                };
                G(
                  Ue,
                  (jt) => {
                    c(U) ? jt(Ne) : jt(Ir, !1);
                  },
                  !0
                );
              }
              x(te, ce);
            };
            G(
              le,
              (te) => {
                s() ? te(de) : te(ze, !1);
              },
              !0
            );
          }
          x(q, V);
        };
        G(
          J,
          (q) => {
            i() && !i().is_anonymous ? q(S) : q(R, !1);
          },
          !0
        );
      }
      x(M, K);
    };
    G(_e, (M) => {
      c(I)() ? M(pe, !1) : M($e);
    });
  }
  var Oe = L(_e, 2);
  {
    var P = (M) => {
      var K = Kv();
      gn(K, 5, o, pn, (J, S, R) => {
        var q = Gv(), V = D(q), le = D(V, !0);
        O(V);
        var de = L(V, 2);
        Ie(de, {
          class: "danger",
          onclick: () => H.drop(R),
          children: (ze, te) => {
            ue();
            var ce = oe("✗");
            x(ze, ce);
          },
          $$slots: { default: !0 }
        }), O(q), z(() => {
          Br(V, 1, `message ${c(S).type ?? ""}`, "svelte-8ewn3c"), j(le, c(S).message);
        }), x(J, q);
      }), O(K), x(M, K);
    };
    G(Oe, (M) => {
      o().length && M(P);
    });
  }
  O(ee), z(() => {
    Br(ee, 1, `sA ${d() ?? ""}`, "svelte-8ewn3c"), rl(ee, g()), ee.dir = ee.dir;
  }), x(e, ee);
  var W = Ee(Q);
  return u(), W;
}
customElements.define("supabase-auth", Le(
  Jv,
  {
    supabaseUrl: { attribute: "supabase-url", reflect: !0, type: "String" },
    supabaseAnonKey: {
      attribute: "supabase-anon-key",
      reflect: !0,
      type: "String"
    },
    socialLayout: { attribute: "social-layout", reflect: !0, type: "String" },
    socialButtonSize: {
      attribute: "social-button-size",
      reflect: !0,
      type: "String"
    },
    providers: { reflect: !0, type: "String" },
    initialView: { attribute: "initial-view", reflect: !0, type: "String" },
    locale: { reflect: !0, type: "String" },
    authOptions: { attribute: "auth-options", reflect: !0, type: "String" },
    texts: { reflect: !0, type: "String" },
    class: {},
    style: {}
  },
  [],
  [],
  !1
));
export {
  Jv as AuthCustomElement,
  a1 as createClient
};
