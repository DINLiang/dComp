import { defineComponent as r, openBlock as c, createElementBlock as l, renderSlot as i } from "vue";
const f = /* @__PURE__ */ r({
  __name: "index",
  emits: ["click"],
  setup(t) {
    return (e, n) => (c(), l("button", {
      class: "d-button",
      onClick: n[0] || (n[0] = (o) => e.$emit("click", o))
    }, [
      i(e.$slots, "default", {}, void 0, !0)
    ]));
  }
});
const d = (t, e) => {
  const n = t.__vccOpts || t;
  for (const [o, a] of e)
    n[o] = a;
  return n;
}, p = /* @__PURE__ */ d(f, [["__scopeId", "data-v-fc6f9d22"]]), s = {
  install(t) {
    t.component("d-button", p);
  }
};
const u = {}, m = { class: "d-foo" };
function v(t, e) {
  return c(), l("div", m, " 我是测试组件 ");
}
const x = /* @__PURE__ */ d(u, [["render", v], ["__scopeId", "data-v-7885a5b2"]]), _ = {
  install(t) {
    t.component("my-foo", x);
  }
}, k = {
  install(t) {
    var e, n;
    (e = s.install) == null || e.call(s, t), (n = _.install) == null || n.call(_, t);
  }
};
export {
  p as Button,
  s as ButtonPlugin,
  x as Foo,
  _ as FooPlugin,
  k as default
};
