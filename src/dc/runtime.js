// Motor das telas do protótipo (formato .dc.html do artefato "Meu Carajás – Interface do App").
//
// Lê cada arquivo de design/prototipo/ do jeito que ele foi publicado e o desenha com React,
// seguindo as mesmas regras do editor do artefato:
//   - {{ caminho }} só faz consulta por caminho (a.b, a[0], literais, ==, !=, !);
//   - <sc-for list as>, <sc-if value>, <helmet>;
//   - atributos camelCase (onClick, onInput…) preservados; class → className, for → htmlFor;
//   - style em texto aplicado como objeto e via cssText;
//   - a classe `Component extends DCLogic` guarda o estado e devolve os valores em renderVals().
// Nenhuma tela é reescrita à mão: mudar o arquivo do protótipo muda o app.

import React from 'react';

const h = React.createElement;

// ---------------------------------------------------------------------------
// Pré-processamento do texto do template (antes de o navegador interpretar o HTML)

const CAMEL = 'sc-camel-';
const RAW_TAGS = {
  select: 'sc-raw-select',
  table: 'sc-raw-table',
  tbody: 'sc-raw-tbody',
  thead: 'sc-raw-thead',
  tfoot: 'sc-raw-tfoot',
  tr: 'sc-raw-tr',
  td: 'sc-raw-td',
  th: 'sc-raw-th',
  caption: 'sc-raw-caption',
};
const RAW_BACK = Object.fromEntries(Object.entries(RAW_TAGS).map(([a, b]) => [b, a]));

const ATTR_VAL = `(?:=\\s*"[^"]*"|=\\s*'[^']*'|=(?!\\s*["'])|[^>=])*`;
const TAG_RE = new RegExp(
  '(<!---?>|<!--[\\s\\S]*?--!?>)|(<(script|style|textarea|title)(?=[\\s/>])' +
    ATTR_VAL +
    '>)([\\s\\S]*?<\\/\\3(?=[\\s/>])[^>]*>)|<[a-zA-Z][^\\s/>]*(?=[\\s/>])' +
    ATTR_VAL +
    '>',
  'gi',
);
const CAMEL_ATTR_RE = /=\s*"[^"]*"|=\s*'[^']*'|(\s)([a-z]+[A-Z][A-Za-z0-9]*)(?=\s*=)/g;
const SELF_CLOSING_IMPORT = /<(x-import|dc-import)((?:[^>"']|"[^"]*"|'[^']*')*)\/>/gi;

function preserveCamelAttrs(text) {
  const fix = (tag) =>
    tag.replace(CAMEL_ATTR_RE, (m, space, name) =>
      name === undefined ? m : space + CAMEL + name.replace(/[A-Z]/g, (c) => '-' + c.toLowerCase()),
    );
  return text.replace(TAG_RE, (m, comment, openTag, _name, rest) =>
    comment !== undefined ? m : openTag ? fix(openTag) + rest : fix(m),
  );
}

function preprocess(text) {
  let t = text.replace(SELF_CLOSING_IMPORT, (m, tag, attrs) => '<' + tag + attrs + '></' + tag + '>');
  t = t.replace(/<helmet(\s|>)/gi, '<sc-helmet$1').replace(/<\/helmet\s*>/gi, '</sc-helmet>');
  t = preserveCamelAttrs(t);
  for (const [from, to] of Object.entries(RAW_TAGS)) {
    t = t.replace(new RegExp('(</?)' + from + '(?=[\\s>])', 'gi'), '$1' + to);
  }
  return t;
}

// ---------------------------------------------------------------------------
// Consulta {{ caminho }}

const IDENT = /^[A-Za-z_$][A-Za-z0-9_$]*/;
const NUMBER = /^-?\d+(\.\d+)?$/;

function wrappedInParens(t) {
  let depth = 0;
  for (let i = 0; i < t.length - 1; i++) {
    if (t[i] === '(') depth++;
    else if (t[i] === ')' && (depth--, depth === 0)) return false;
  }
  return true;
}

function findComparison(t) {
  let depth = 0;
  for (let i = 0; i < t.length; i++) {
    const c = t[i];
    if (c === '[' || c === '(') depth++;
    else if (c === ']' || c === ')') depth--;
    else if (depth === 0 && (c === '=' || c === '!') && t[i + 1] === '=') {
      if ((i > 0 && (t[i - 1] === '=' || t[i - 1] === '!')) || !t.slice(0, i).trim()) continue;
      return { index: i, op: t[i + 2] === '=' ? c + '==' : c + '=' };
    }
  }
  return null;
}

function lookupPath(scope, path) {
  const first = path.match(IDENT);
  if (!first) return undefined;
  let value = scope?.[first[0]];
  let i = first[0].length;
  while (i < path.length) {
    if (path[i] === '.') {
      const seg = path.slice(i + 1).match(IDENT) || path.slice(i + 1).match(/^\d+/);
      if (!seg) return undefined;
      value = value?.[seg[0]];
      i += 1 + seg[0].length;
    } else if (path[i] === '[') {
      let depth = 1;
      let j = i + 1;
      for (; j < path.length && depth > 0; j++) {
        if (path[j] === '[') depth++;
        else if (path[j] === ']' && (depth--, depth === 0)) break;
      }
      if (depth !== 0) return undefined;
      value = value?.[evaluate(scope, path.slice(i + 1, j))];
      i = j + 1;
    } else {
      return undefined;
    }
  }
  return value;
}

export function evaluate(scope, expr) {
  const e = String(expr).trim();
  if (!e) return undefined;
  if (e[0] === '(' && e[e.length - 1] === ')' && wrappedInParens(e)) return evaluate(scope, e.slice(1, -1));
  const cmp = findComparison(e);
  if (cmp) {
    const a = evaluate(scope, e.slice(0, cmp.index));
    const b = evaluate(scope, e.slice(cmp.index + cmp.op.length));
    switch (cmp.op) {
      case '===':
        return a === b;
      case '!==':
        return a !== b;
      case '==':
        return a == b; // eslint-disable-line eqeqeq
      default:
        return a != b; // eslint-disable-line eqeqeq
    }
  }
  if (e[0] === '!') return !evaluate(scope, e.slice(1));
  if (e === 'true') return true;
  if (e === 'false') return false;
  if (e === 'null') return null;
  if (e === 'undefined') return undefined;
  if (NUMBER.test(e)) return Number(e);
  if (e.length >= 2 && (e[0] === '"' || e[0] === "'") && e[e.length - 1] === e[0]) return e.slice(1, -1);
  return lookupPath(scope, e);
}

// Valor de atributo: "{{ x }}" devolve o valor cru; "a {{x}} b" devolve texto; o resto é literal.
function attrGetter(text) {
  const whole = text.match(/^\s*\{\{([\s\S]+?)\}\}\s*$/);
  if (whole) return (scope) => evaluate(scope, whole[1]);
  if (text.includes('{{')) {
    const parts = text.split(/\{\{([\s\S]+?)\}\}/g);
    return (scope) => parts.map((p, i) => (i & 1 ? evaluate(scope, p) ?? '' : p)).join('');
  }
  return () => text;
}

// ---------------------------------------------------------------------------
// Atributos

const camelize = (t) => t.replace(/-([a-z])/g, (_m, c) => c.toUpperCase());

const BOOLEAN_ATTRS = new Set(
  'allowFullScreen async autoFocus autoPlay checked controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden itemScope loop multiple muted noModule noValidate open playsInline readOnly required reversed scoped seamless selected'.split(
    ' ',
  ),
);

const EVENT_NAMES = {
  onclick: 'onClick',
  onchange: 'onChange',
  oninput: 'onInput',
  onsubmit: 'onSubmit',
  onkeydown: 'onKeyDown',
  onkeyup: 'onKeyUp',
  onkeypress: 'onKeyPress',
  onmousedown: 'onMouseDown',
  onmouseup: 'onMouseUp',
  onmouseenter: 'onMouseEnter',
  onmouseleave: 'onMouseLeave',
  onfocus: 'onFocus',
  onblur: 'onBlur',
  ondoubleclick: 'onDoubleClick',
  oncontextmenu: 'onContextMenu',
  onpointerdown: 'onPointerDown',
  onpointerup: 'onPointerUp',
  onpointermove: 'onPointerMove',
  ontouchstart: 'onTouchStart',
  ontouchend: 'onTouchEnd',
  ontouchmove: 'onTouchMove',
  onscroll: 'onScroll',
};

function styleToObject(text) {
  const out = {};
  for (const decl of text.split(';')) {
    const i = decl.indexOf(':');
    if (i < 0) continue;
    const prop = decl.slice(0, i).trim();
    out[prop.startsWith('--') ? prop : camelize(prop)] = decl.slice(i + 1).trim();
  }
  return out;
}

// Mesmo efeito do editor: o texto de style também vai inteiro para el.style.cssText.
const cssTextRefs = new Map();
function cssTextRef(text) {
  let ref = cssTextRefs.get(text);
  if (!ref) {
    ref = (el) => {
      if (!el || el.__dcCss === text) return;
      el.__dcCss = text;
      el.style.cssText = text;
    };
    if (cssTextRefs.size > 2048) cssTextRefs.clear();
    cssTextRefs.set(text, ref);
  }
  return ref;
}

function readAttributes(el) {
  const getters = [];
  for (const { name, value } of [...el.attributes]) {
    if (name === 'sc-name' || name === 'data-dc-tpl') continue;
    let prop = name;
    if (prop.startsWith(CAMEL)) prop = camelize(prop.slice(CAMEL.length));
    if (prop === 'hint-size') continue;
    if (prop === 'class') prop = 'className';
    else if (prop === 'for') prop = 'htmlFor';
    else if (prop.startsWith('on')) prop = EVENT_NAMES[prop] || 'on' + prop[2].toUpperCase() + prop.slice(3);
    else if (prop === 'checked' && el.localName === 'input' && !value.includes('{{')) {
      getters.push(['defaultChecked', () => true]);
      continue;
    } else if (value === '' && BOOLEAN_ATTRS.has(prop)) {
      getters.push([prop, () => true]);
      continue;
    }
    getters.push([prop, attrGetter(value)]);
  }
  return getters;
}

// ---------------------------------------------------------------------------
// Compilação do template em funções de desenho

function compileChildren(node, ctx) {
  return [...node.childNodes].map((c) => compileNode(c, ctx)).filter((f) => f != null);
}

function compileNode(node, ctx) {
  if (node.nodeType === Node.TEXT_NODE) return compileText(node);
  if (node.nodeType !== Node.ELEMENT_NODE) return null;
  const tag = node.tagName.toLowerCase();
  if (tag === 'sc-for') return compileFor(node, ctx);
  if (tag === 'sc-if') return compileIf(node, ctx);
  if (tag === 'sc-helmet') {
    ctx.helmet.push(...[...node.children].map((c) => c.cloneNode(true)));
    return null;
  }
  return compileElement(node, ctx);
}

function compileText(node) {
  const text = node.nodeValue ?? '';
  if (!text.includes('{{')) return !text.trim() && !text.includes(' ') ? null : () => text;
  const parts = text.split(/\{\{([\s\S]+?)\}\}/g);
  return (scope, _host, key) =>
    h(
      React.Fragment,
      { key },
      ...parts.map((p, i) => {
        if (!(i & 1)) return p;
        const v = evaluate(scope, p);
        if (v === undefined || v === null || typeof v === 'boolean') return null;
        if (React.isValidElement(v) || Array.isArray(v)) return h(React.Fragment, { key: i }, v);
        return h('span', { key: i, className: 'sc-interp' }, String(v));
      }),
    );
}

function compileFor(node, ctx) {
  const list = attrGetter(node.getAttribute('list') || '');
  const as = node.getAttribute('as') || 'item';
  const children = compileChildren(node, ctx);
  return (scope, host, key) => {
    let items = list(scope);
    if (!Array.isArray(items)) items = [];
    return h(
      React.Fragment,
      { key },
      items.map((item, index) => {
        const inner = { ...scope, [as]: item, $index: index };
        return h(React.Fragment, { key: index }, children.map((c, i) => c(inner, host, i)));
      }),
    );
  };
}

function compileIf(node, ctx) {
  const value = attrGetter(node.getAttribute('value') || '');
  const children = compileChildren(node, ctx);
  return (scope, host, key) =>
    value(scope) ? h(React.Fragment, { key }, children.map((c, i) => c(scope, host, i))) : null;
}

const DC_LINK = /^(?:\.\/|\/)?([A-Za-z0-9_-]+)\.dc\.html(#.*)?$/;

function compileElement(node, ctx) {
  const tag = RAW_BACK[node.localName] || node.localName;
  const getters = readAttributes(node);
  const children = compileChildren(node, ctx);
  return (scope, host, key) => {
    const props = { key };
    let styleText = null;
    for (const [name, get] of getters) {
      let v = get(scope);
      if (name === 'style' && typeof v === 'string') {
        styleText = v;
        v = styleToObject(v);
      }
      if ((name === 'value' || name === 'checked') && v === undefined) v = name === 'checked' ? false : '';
      props[name] = v;
    }
    if (tag === 'a' && typeof props.href === 'string') ctx.linkProps(props);
    if (styleText != null) props.ref = cssTextRef(styleText);
    return h(tag, props, ...children.map((c, i) => c(scope, host, i)));
  };
}

// ---------------------------------------------------------------------------
// Lógica (class Component extends DCLogic)

export class DCLogic {
  constructor(props) {
    this.props = props || {};
    this.state = {};
    this.__host = undefined;
  }
  setState(update, callback) {
    if (this.__host) this.__host.__setLogicState(update, callback);
  }
  forceUpdate() {
    if (this.__host) this.__host.forceUpdate();
  }
  componentDidMount() {}
  componentDidUpdate() {}
  componentWillUnmount() {}
  renderVals() {
    return {};
  }
}

function loadLogic(source, globals) {
  if (!source) return DCLogic;
  const names = Object.keys(globals);
  // eslint-disable-next-line no-new-func
  const make = new Function(
    'DCLogic',
    'StreamableLogic',
    'React',
    ...names,
    source + '\n;return (typeof Component!=="undefined"&&Component)||undefined;',
  );
  return make(DCLogic, DCLogic, React, ...names.map((n) => globals[n])) || DCLogic;
}

// Trocas explícitas no texto de uma tela (ligação com os dados reais). Cada trecho procurado
// precisa existir exatamente uma vez; se o artefato mudar e o trecho sumir, a tela acusa o erro.
export function applyReplacements(name, part, text, pairs = []) {
  let out = text;
  for (const item of pairs) {
    const [find, endOrReplace, rangeReplace] = item;
    const first = out.indexOf(find);
    if (first < 0 || out.indexOf(find, first + find.length) >= 0) {
      throw new Error(
        name + '.dc.html: o trecho do ' + part + ' a trocar ' + (first < 0 ? 'não existe' : 'aparece mais de uma vez') + ': ' + find.slice(0, 80),
      );
    }
    if (item.length === 3) {
      const end = out.indexOf(endOrReplace, first + find.length);
      if (end < 0) throw new Error(name + '.dc.html: fim do trecho não encontrado depois de: ' + find.slice(0, 80));
      out = out.slice(0, first) + rangeReplace + out.slice(end + endOrReplace.length);
    } else {
      out = out.slice(0, first) + endOrReplace + out.slice(first + find.length);
    }
  }
  return out;
}

// ---------------------------------------------------------------------------
// Arquivo .dc.html → tela

function decodeAttr(text) {
  const ta = document.createElement('textarea');
  ta.innerHTML = text;
  return ta.value;
}

export function parseDcFile(text) {
  const tpl = text.match(/<x-dc[^>]*>([\s\S]*)<\/x-dc>/i);
  const script = text.match(/<script\b([^>]*\bdata-dc-script\b[^>]*)>([\s\S]*?)<\/script>/i);
  const title = text.match(/<title>([\s\S]*?)<\/title>/i);
  let props = {};
  if (script) {
    const attr = script[1].match(/data-props='([^']*)'/) || script[1].match(/data-props="([^"]*)"/);
    if (attr) props = JSON.parse(decodeAttr(attr[1]));
  }
  return {
    template: tpl ? tpl[1] : '',
    js: script ? script[2] : '',
    props,
    title: title ? decodeAttr(title[1].trim()) : '',
  };
}

/**
 * Cria o componente React de uma tela.
 * @param {string} name   nome do arquivo sem ".dc.html"
 * @param {string} source texto completo do arquivo
 * @param {{
 *   linkProps: (props: object) => void,
 *   patchTemplate?: (root: DocumentFragment) => void,
 *   replacements?: { script?: [string, string][], template?: [string, string][] },
 *   globals?: Record<string, unknown>,
 *   valores?: (logic: object) => object,
 * }} options
 * `valores` dá valores extras a todos os buracos da tela (os de renderVals() têm a preferência).
 */
export function createScreen(name, source, options) {
  const file = parseDcFile(source);
  const trocas = options.replacements || {};
  const ctx = { helmet: [], linkProps: options.linkProps };
  const template = document.createElement('template');
  template.innerHTML = preprocess(applyReplacements(name, 'template', file.template, trocas.template));
  if (options.patchTemplate) options.patchTemplate(template.content);
  const parts = compileChildren(template.content, ctx);
  const Logic = loadLogic(applyReplacements(name, 'script', file.js, trocas.script), options.globals || {});
  const defaults = {};
  for (const [k, meta] of Object.entries(file.props)) {
    if (meta && meta.default !== undefined) defaults[k] = meta.default;
  }

  class Screen extends React.Component {
    constructor(props) {
      super(props);
      this.state = { v: 0, error: null };
      this.logic = new Logic({ ...defaults, ...props });
      this.logic.__host = this;
      this.helmetNodes = [];
    }
    static getDerivedStateFromError(error) {
      return { error: error && error.message ? error.message : String(error) };
    }
    componentDidCatch(error) {
      console.error('[conecta-cidade] erro na tela ' + name + ':', error);
    }
    __setLogicState(update, callback) {
      const prev = this.logic.state;
      const next = typeof update === 'function' ? update(prev) : update;
      this.logic.state = { ...prev, ...next };
      this.setState((s) => ({ v: s.v + 1 }), callback);
    }
    componentDidMount() {
      this.helmetNodes = ctx.helmet.map((n) => {
        const el = n.cloneNode(true);
        el.setAttribute('data-dc-helmet', name);
        document.head.appendChild(el);
        return el;
      });
      this.logic.componentDidMount();
    }
    componentDidUpdate(prevProps) {
      this.logic.props = { ...defaults, ...this.props };
      this.logic.componentDidUpdate(prevProps);
    }
    componentWillUnmount() {
      this.logic.componentWillUnmount();
      this.logic.__host = undefined;
      for (const el of this.helmetNodes) el.remove();
    }
    render() {
      if (this.state.error) {
        return h('div', { className: 'sc-host sc-has-error', role: 'alert' }, name + ': ' + this.state.error);
      }
      const vals = { ...(options.valores ? options.valores(this.logic) : {}), ...(this.logic.renderVals() || {}) };
      return h(
        'div',
        { className: 'sc-host', 'data-sc-name': name },
        parts.map((p, i) => p(vals, this, i)),
      );
    }
  }
  Screen.displayName = name;
  return { Screen, title: file.title, props: file.props };
}

export const dcLinkTarget = (href) => {
  const m = typeof href === 'string' ? href.match(DC_LINK) : null;
  return m ? { name: m[1], hash: m[2] || '' } : null;
};
