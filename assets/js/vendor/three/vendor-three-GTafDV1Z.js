/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
const t = "172",
  e = 2,
  n = 0,
  i = 1,
  r = 2,
  a = 1,
  s = 2,
  o = 100,
  l = 101,
  c = 102,
  h = 200,
  u = 201,
  d = 202,
  p = 203,
  f = 204,
  m = 205,
  g = 206,
  _ = 207,
  v = 208,
  x = 209,
  M = 210,
  S = 211,
  y = 212,
  E = 213,
  T = 214,
  b = 0,
  A = 1,
  w = 2,
  R = 3,
  C = 4,
  P = 5,
  L = 6,
  U = 7,
  D = 1,
  I = 4,
  N = 301,
  O = 302,
  F = 306,
  B = 1e3,
  z = 1001,
  H = 1002,
  V = 1003,
  G = 1004,
  k = 1005,
  W = 1006,
  X = 1007,
  j = 1008,
  q = 1009,
  Y = 1012,
  K = 1013,
  Z = 1014,
  J = 1015,
  $ = 1016,
  Q = 1017,
  tt = 1018,
  et = 1020,
  nt = 1023,
  it = 1026,
  rt = 1027,
  at = 1029,
  st = 1031,
  ot = 1033,
  lt = 33776,
  ct = 33777,
  ht = 33778,
  ut = 33779,
  dt = 35840,
  pt = 35841,
  ft = 35842,
  mt = 35843,
  gt = 36196,
  _t = 37492,
  vt = 37496,
  xt = 37808,
  Mt = 37809,
  St = 37810,
  yt = 37811,
  Et = 37812,
  Tt = 37813,
  bt = 37814,
  At = 37815,
  wt = 37816,
  Rt = 37817,
  Ct = 37818,
  Pt = 37819,
  Lt = 37820,
  Ut = 37821,
  Dt = 36492,
  It = 36494,
  Nt = 36495,
  Ot = 36284,
  Ft = 36285,
  Bt = 36286,
  zt = "",
  Ht = "srgb",
  Vt = "srgb-linear",
  Gt = "linear",
  kt = "srgb",
  Wt = 7680,
  Xt = 512,
  jt = 513,
  qt = 514,
  Yt = 515,
  Kt = 516,
  Zt = 517,
  Jt = 518,
  $t = 519,
  Qt = "300 es",
  te = 2e3,
  ee = 2001;
class ne {
  addEventListener(t, e) {
    void 0 === this._listeners && (this._listeners = {});
    const n = this._listeners;
    void 0 === n[t] && (n[t] = []), -1 === n[t].indexOf(e) && n[t].push(e);
  }
  hasEventListener(t, e) {
    if (void 0 === this._listeners) return !1;
    const n = this._listeners;
    return void 0 !== n[t] && -1 !== n[t].indexOf(e);
  }
  removeEventListener(t, e) {
    if (void 0 === this._listeners) return;
    const n = this._listeners[t];
    if (void 0 !== n) {
      const t = n.indexOf(e);
      -1 !== t && n.splice(t, 1);
    }
  }
  dispatchEvent(t) {
    if (void 0 === this._listeners) return;
    const e = this._listeners[t.type];
    if (void 0 !== e) {
      t.target = this;
      const n = e.slice(0);
      for (let e = 0, i = n.length; i > e; e++) n[e].call(this, t);
      t.target = null;
    }
  }
}
const ie = [
    "00",
    "01",
    "02",
    "03",
    "04",
    "05",
    "06",
    "07",
    "08",
    "09",
    "0a",
    "0b",
    "0c",
    "0d",
    "0e",
    "0f",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "1a",
    "1b",
    "1c",
    "1d",
    "1e",
    "1f",
    "20",
    "21",
    "22",
    "23",
    "24",
    "25",
    "26",
    "27",
    "28",
    "29",
    "2a",
    "2b",
    "2c",
    "2d",
    "2e",
    "2f",
    "30",
    "31",
    "32",
    "33",
    "34",
    "35",
    "36",
    "37",
    "38",
    "39",
    "3a",
    "3b",
    "3c",
    "3d",
    "3e",
    "3f",
    "40",
    "41",
    "42",
    "43",
    "44",
    "45",
    "46",
    "47",
    "48",
    "49",
    "4a",
    "4b",
    "4c",
    "4d",
    "4e",
    "4f",
    "50",
    "51",
    "52",
    "53",
    "54",
    "55",
    "56",
    "57",
    "58",
    "59",
    "5a",
    "5b",
    "5c",
    "5d",
    "5e",
    "5f",
    "60",
    "61",
    "62",
    "63",
    "64",
    "65",
    "66",
    "67",
    "68",
    "69",
    "6a",
    "6b",
    "6c",
    "6d",
    "6e",
    "6f",
    "70",
    "71",
    "72",
    "73",
    "74",
    "75",
    "76",
    "77",
    "78",
    "79",
    "7a",
    "7b",
    "7c",
    "7d",
    "7e",
    "7f",
    "80",
    "81",
    "82",
    "83",
    "84",
    "85",
    "86",
    "87",
    "88",
    "89",
    "8a",
    "8b",
    "8c",
    "8d",
    "8e",
    "8f",
    "90",
    "91",
    "92",
    "93",
    "94",
    "95",
    "96",
    "97",
    "98",
    "99",
    "9a",
    "9b",
    "9c",
    "9d",
    "9e",
    "9f",
    "a0",
    "a1",
    "a2",
    "a3",
    "a4",
    "a5",
    "a6",
    "a7",
    "a8",
    "a9",
    "aa",
    "ab",
    "ac",
    "ad",
    "ae",
    "af",
    "b0",
    "b1",
    "b2",
    "b3",
    "b4",
    "b5",
    "b6",
    "b7",
    "b8",
    "b9",
    "ba",
    "bb",
    "bc",
    "bd",
    "be",
    "bf",
    "c0",
    "c1",
    "c2",
    "c3",
    "c4",
    "c5",
    "c6",
    "c7",
    "c8",
    "c9",
    "ca",
    "cb",
    "cc",
    "cd",
    "ce",
    "cf",
    "d0",
    "d1",
    "d2",
    "d3",
    "d4",
    "d5",
    "d6",
    "d7",
    "d8",
    "d9",
    "da",
    "db",
    "dc",
    "dd",
    "de",
    "df",
    "e0",
    "e1",
    "e2",
    "e3",
    "e4",
    "e5",
    "e6",
    "e7",
    "e8",
    "e9",
    "ea",
    "eb",
    "ec",
    "ed",
    "ee",
    "ef",
    "f0",
    "f1",
    "f2",
    "f3",
    "f4",
    "f5",
    "f6",
    "f7",
    "f8",
    "f9",
    "fa",
    "fb",
    "fc",
    "fd",
    "fe",
    "ff",
  ],
  re = Math.PI / 180,
  ae = 180 / Math.PI;
function se() {
  const t = (4294967295 * Math.random()) | 0,
    e = (4294967295 * Math.random()) | 0,
    n = (4294967295 * Math.random()) | 0,
    i = (4294967295 * Math.random()) | 0;
  return (
    ie[255 & t] +
    ie[(t >> 8) & 255] +
    ie[(t >> 16) & 255] +
    ie[(t >> 24) & 255] +
    "-" +
    ie[255 & e] +
    ie[(e >> 8) & 255] +
    "-" +
    ie[((e >> 16) & 15) | 64] +
    ie[(e >> 24) & 255] +
    "-" +
    ie[(63 & n) | 128] +
    ie[(n >> 8) & 255] +
    "-" +
    ie[(n >> 16) & 255] +
    ie[(n >> 24) & 255] +
    ie[255 & i] +
    ie[(i >> 8) & 255] +
    ie[(i >> 16) & 255] +
    ie[(i >> 24) & 255]
  ).toLowerCase();
}
function oe(t, e, n) {
  return Math.max(e, Math.min(n, t));
}
function le(t, e, n) {
  return (1 - n) * t + n * e;
}
function ce(t, e) {
  switch (e.constructor) {
    case Float32Array:
      return t;
    case Uint32Array:
      return t / 4294967295;
    case Uint16Array:
      return t / 65535;
    case Uint8Array:
      return t / 255;
    case Int32Array:
      return Math.max(t / 2147483647, -1);
    case Int16Array:
      return Math.max(t / 32767, -1);
    case Int8Array:
      return Math.max(t / 127, -1);
    default:
      throw Error("Invalid component type.");
  }
}
function he(t, e) {
  switch (e.constructor) {
    case Float32Array:
      return t;
    case Uint32Array:
      return Math.round(4294967295 * t);
    case Uint16Array:
      return Math.round(65535 * t);
    case Uint8Array:
      return Math.round(255 * t);
    case Int32Array:
      return Math.round(2147483647 * t);
    case Int16Array:
      return Math.round(32767 * t);
    case Int8Array:
      return Math.round(127 * t);
    default:
      throw Error("Invalid component type.");
  }
}
class ue {
  constructor(t = 0, e = 0) {
    (ue.prototype.isVector2 = !0), (this.x = t), (this.y = e);
  }
  get width() {
    return this.x;
  }
  set width(t) {
    this.x = t;
  }
  get height() {
    return this.y;
  }
  set height(t) {
    this.y = t;
  }
  set(t, e) {
    return (this.x = t), (this.y = e), this;
  }
  setScalar(t) {
    return (this.x = t), (this.y = t), this;
  }
  setX(t) {
    return (this.x = t), this;
  }
  setY(t) {
    return (this.y = t), this;
  }
  setComponent(t, e) {
    switch (t) {
      case 0:
        this.x = e;
        break;
      case 1:
        this.y = e;
        break;
      default:
        throw Error("index is out of range: " + t);
    }
    return this;
  }
  getComponent(t) {
    switch (t) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      default:
        throw Error("index is out of range: " + t);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y);
  }
  copy(t) {
    return (this.x = t.x), (this.y = t.y), this;
  }
  add(t) {
    return (this.x += t.x), (this.y += t.y), this;
  }
  addScalar(t) {
    return (this.x += t), (this.y += t), this;
  }
  addVectors(t, e) {
    return (this.x = t.x + e.x), (this.y = t.y + e.y), this;
  }
  addScaledVector(t, e) {
    return (this.x += t.x * e), (this.y += t.y * e), this;
  }
  sub(t) {
    return (this.x -= t.x), (this.y -= t.y), this;
  }
  subScalar(t) {
    return (this.x -= t), (this.y -= t), this;
  }
  subVectors(t, e) {
    return (this.x = t.x - e.x), (this.y = t.y - e.y), this;
  }
  multiply(t) {
    return (this.x *= t.x), (this.y *= t.y), this;
  }
  multiplyScalar(t) {
    return (this.x *= t), (this.y *= t), this;
  }
  divide(t) {
    return (this.x /= t.x), (this.y /= t.y), this;
  }
  divideScalar(t) {
    return this.multiplyScalar(1 / t);
  }
  applyMatrix3(t) {
    const e = this.x,
      n = this.y,
      i = t.elements;
    return (
      (this.x = i[0] * e + i[3] * n + i[6]),
      (this.y = i[1] * e + i[4] * n + i[7]),
      this
    );
  }
  min(t) {
    return (
      (this.x = Math.min(this.x, t.x)), (this.y = Math.min(this.y, t.y)), this
    );
  }
  max(t) {
    return (
      (this.x = Math.max(this.x, t.x)), (this.y = Math.max(this.y, t.y)), this
    );
  }
  clamp(t, e) {
    return (
      (this.x = oe(this.x, t.x, e.x)), (this.y = oe(this.y, t.y, e.y)), this
    );
  }
  clampScalar(t, e) {
    return (this.x = oe(this.x, t, e)), (this.y = oe(this.y, t, e)), this;
  }
  clampLength(t, e) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(oe(n, t, e));
  }
  floor() {
    return (this.x = Math.floor(this.x)), (this.y = Math.floor(this.y)), this;
  }
  ceil() {
    return (this.x = Math.ceil(this.x)), (this.y = Math.ceil(this.y)), this;
  }
  round() {
    return (this.x = Math.round(this.x)), (this.y = Math.round(this.y)), this;
  }
  roundToZero() {
    return (this.x = Math.trunc(this.x)), (this.y = Math.trunc(this.y)), this;
  }
  negate() {
    return (this.x = -this.x), (this.y = -this.y), this;
  }
  dot(t) {
    return this.x * t.x + this.y * t.y;
  }
  cross(t) {
    return this.x * t.y - this.y * t.x;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  angle() {
    return Math.atan2(-this.y, -this.x) + Math.PI;
  }
  angleTo(t) {
    const e = Math.sqrt(this.lengthSq() * t.lengthSq());
    if (0 === e) return Math.PI / 2;
    const n = this.dot(t) / e;
    return Math.acos(oe(n, -1, 1));
  }
  distanceTo(t) {
    return Math.sqrt(this.distanceToSquared(t));
  }
  distanceToSquared(t) {
    const e = this.x - t.x,
      n = this.y - t.y;
    return e * e + n * n;
  }
  manhattanDistanceTo(t) {
    return Math.abs(this.x - t.x) + Math.abs(this.y - t.y);
  }
  setLength(t) {
    return this.normalize().multiplyScalar(t);
  }
  lerp(t, e) {
    return (this.x += (t.x - this.x) * e), (this.y += (t.y - this.y) * e), this;
  }
  lerpVectors(t, e, n) {
    return (
      (this.x = t.x + (e.x - t.x) * n), (this.y = t.y + (e.y - t.y) * n), this
    );
  }
  equals(t) {
    return t.x === this.x && t.y === this.y;
  }
  fromArray(t, e = 0) {
    return (this.x = t[e]), (this.y = t[e + 1]), this;
  }
  toArray(t = [], e = 0) {
    return (t[e] = this.x), (t[e + 1] = this.y), t;
  }
  fromBufferAttribute(t, e) {
    return (this.x = t.getX(e)), (this.y = t.getY(e)), this;
  }
  rotateAround(t, e) {
    const n = Math.cos(e),
      i = Math.sin(e),
      r = this.x - t.x,
      a = this.y - t.y;
    return (this.x = r * n - a * i + t.x), (this.y = r * i + a * n + t.y), this;
  }
  random() {
    return (this.x = Math.random()), (this.y = Math.random()), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y;
  }
}
class de {
  constructor(t, e, n, i, r, a, s, o, l) {
    (de.prototype.isMatrix3 = !0),
      (this.elements = [1, 0, 0, 0, 1, 0, 0, 0, 1]),
      void 0 !== t && this.set(t, e, n, i, r, a, s, o, l);
  }
  set(t, e, n, i, r, a, s, o, l) {
    const c = this.elements;
    return (
      (c[0] = t),
      (c[1] = i),
      (c[2] = s),
      (c[3] = e),
      (c[4] = r),
      (c[5] = o),
      (c[6] = n),
      (c[7] = a),
      (c[8] = l),
      this
    );
  }
  identity() {
    return this.set(1, 0, 0, 0, 1, 0, 0, 0, 1), this;
  }
  copy(t) {
    const e = this.elements,
      n = t.elements;
    return (
      (e[0] = n[0]),
      (e[1] = n[1]),
      (e[2] = n[2]),
      (e[3] = n[3]),
      (e[4] = n[4]),
      (e[5] = n[5]),
      (e[6] = n[6]),
      (e[7] = n[7]),
      (e[8] = n[8]),
      this
    );
  }
  extractBasis(t, e, n) {
    return (
      t.setFromMatrix3Column(this, 0),
      e.setFromMatrix3Column(this, 1),
      n.setFromMatrix3Column(this, 2),
      this
    );
  }
  setFromMatrix4(t) {
    const e = t.elements;
    return (
      this.set(e[0], e[4], e[8], e[1], e[5], e[9], e[2], e[6], e[10]), this
    );
  }
  multiply(t) {
    return this.multiplyMatrices(this, t);
  }
  premultiply(t) {
    return this.multiplyMatrices(t, this);
  }
  multiplyMatrices(t, e) {
    const n = t.elements,
      i = e.elements,
      r = this.elements,
      a = n[0],
      s = n[3],
      o = n[6],
      l = n[1],
      c = n[4],
      h = n[7],
      u = n[2],
      d = n[5],
      p = n[8],
      f = i[0],
      m = i[3],
      g = i[6],
      _ = i[1],
      v = i[4],
      x = i[7],
      M = i[2],
      S = i[5],
      y = i[8];
    return (
      (r[0] = a * f + s * _ + o * M),
      (r[3] = a * m + s * v + o * S),
      (r[6] = a * g + s * x + o * y),
      (r[1] = l * f + c * _ + h * M),
      (r[4] = l * m + c * v + h * S),
      (r[7] = l * g + c * x + h * y),
      (r[2] = u * f + d * _ + p * M),
      (r[5] = u * m + d * v + p * S),
      (r[8] = u * g + d * x + p * y),
      this
    );
  }
  multiplyScalar(t) {
    const e = this.elements;
    return (
      (e[0] *= t),
      (e[3] *= t),
      (e[6] *= t),
      (e[1] *= t),
      (e[4] *= t),
      (e[7] *= t),
      (e[2] *= t),
      (e[5] *= t),
      (e[8] *= t),
      this
    );
  }
  determinant() {
    const t = this.elements,
      e = t[0],
      n = t[1],
      i = t[2],
      r = t[3],
      a = t[4],
      s = t[5],
      o = t[6],
      l = t[7],
      c = t[8];
    return (
      e * a * c - e * s * l - n * r * c + n * s * o + i * r * l - i * a * o
    );
  }
  invert() {
    const t = this.elements,
      e = t[0],
      n = t[1],
      i = t[2],
      r = t[3],
      a = t[4],
      s = t[5],
      o = t[6],
      l = t[7],
      c = t[8],
      h = c * a - s * l,
      u = s * o - c * r,
      d = l * r - a * o,
      p = e * h + n * u + i * d;
    if (0 === p) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
    const f = 1 / p;
    return (
      (t[0] = h * f),
      (t[1] = (i * l - c * n) * f),
      (t[2] = (s * n - i * a) * f),
      (t[3] = u * f),
      (t[4] = (c * e - i * o) * f),
      (t[5] = (i * r - s * e) * f),
      (t[6] = d * f),
      (t[7] = (n * o - l * e) * f),
      (t[8] = (a * e - n * r) * f),
      this
    );
  }
  transpose() {
    let t;
    const e = this.elements;
    return (
      (t = e[1]),
      (e[1] = e[3]),
      (e[3] = t),
      (t = e[2]),
      (e[2] = e[6]),
      (e[6] = t),
      (t = e[5]),
      (e[5] = e[7]),
      (e[7] = t),
      this
    );
  }
  getNormalMatrix(t) {
    return this.setFromMatrix4(t).invert().transpose();
  }
  transposeIntoArray(t) {
    const e = this.elements;
    return (
      (t[0] = e[0]),
      (t[1] = e[3]),
      (t[2] = e[6]),
      (t[3] = e[1]),
      (t[4] = e[4]),
      (t[5] = e[7]),
      (t[6] = e[2]),
      (t[7] = e[5]),
      (t[8] = e[8]),
      this
    );
  }
  setUvTransform(t, e, n, i, r, a, s) {
    const o = Math.cos(r),
      l = Math.sin(r);
    return (
      this.set(
        n * o,
        n * l,
        -n * (o * a + l * s) + a + t,
        -i * l,
        i * o,
        -i * (-l * a + o * s) + s + e,
        0,
        0,
        1
      ),
      this
    );
  }
  scale(t, e) {
    return this.premultiply(pe.makeScale(t, e)), this;
  }
  rotate(t) {
    return this.premultiply(pe.makeRotation(-t)), this;
  }
  translate(t, e) {
    return this.premultiply(pe.makeTranslation(t, e)), this;
  }
  makeTranslation(t, e) {
    return (
      t.isVector2
        ? this.set(1, 0, t.x, 0, 1, t.y, 0, 0, 1)
        : this.set(1, 0, t, 0, 1, e, 0, 0, 1),
      this
    );
  }
  makeRotation(t) {
    const e = Math.cos(t),
      n = Math.sin(t);
    return this.set(e, -n, 0, n, e, 0, 0, 0, 1), this;
  }
  makeScale(t, e) {
    return this.set(t, 0, 0, 0, e, 0, 0, 0, 1), this;
  }
  equals(t) {
    const e = this.elements,
      n = t.elements;
    for (let i = 0; 9 > i; i++) if (e[i] !== n[i]) return !1;
    return !0;
  }
  fromArray(t, e = 0) {
    for (let n = 0; 9 > n; n++) this.elements[n] = t[n + e];
    return this;
  }
  toArray(t = [], e = 0) {
    const n = this.elements;
    return (
      (t[e] = n[0]),
      (t[e + 1] = n[1]),
      (t[e + 2] = n[2]),
      (t[e + 3] = n[3]),
      (t[e + 4] = n[4]),
      (t[e + 5] = n[5]),
      (t[e + 6] = n[6]),
      (t[e + 7] = n[7]),
      (t[e + 8] = n[8]),
      t
    );
  }
  clone() {
    return new this.constructor().fromArray(this.elements);
  }
}
const pe = new de();
function fe(t) {
  for (let e = t.length - 1; e >= 0; --e) if (t[e] >= 65535) return !0;
  return !1;
}
function me(t) {
  return document.createElementNS("http://www.w3.org/1999/xhtml", t);
}
function ge() {
  const t = me("canvas");
  return (t.style.display = "block"), t;
}
const _e = {};
function ve(t) {
  t in _e || (_e[t] = !0);
}
const xe = new de().set(
    0.4123908,
    0.3575843,
    0.1804808,
    0.212639,
    0.7151687,
    0.0721923,
    0.0193308,
    0.1191948,
    0.9505322
  ),
  Me = new de().set(
    3.2409699,
    -1.5373832,
    -0.4986108,
    -0.9692436,
    1.8759675,
    0.0415551,
    0.0556301,
    -0.203977,
    1.0569715
  );
function Se() {
  const t = {
      enabled: !0,
      workingColorSpace: Vt,
      spaces: {},
      convert: function (t, e, n) {
        return !1 !== this.enabled && e !== n && e && n
          ? (this.spaces[e].transfer === kt &&
              ((t.r = Ee(t.r)), (t.g = Ee(t.g)), (t.b = Ee(t.b))),
            this.spaces[e].primaries !== this.spaces[n].primaries &&
              (t.applyMatrix3(this.spaces[e].toXYZ),
              t.applyMatrix3(this.spaces[n].fromXYZ)),
            this.spaces[n].transfer === kt &&
              ((t.r = Te(t.r)), (t.g = Te(t.g)), (t.b = Te(t.b))),
            t)
          : t;
      },
      fromWorkingColorSpace: function (t, e) {
        return this.convert(t, this.workingColorSpace, e);
      },
      toWorkingColorSpace: function (t, e) {
        return this.convert(t, e, this.workingColorSpace);
      },
      getPrimaries: function (t) {
        return this.spaces[t].primaries;
      },
      getTransfer: function (t) {
        return t === zt ? Gt : this.spaces[t].transfer;
      },
      getLuminanceCoefficients: function (t, e = this.workingColorSpace) {
        return t.fromArray(this.spaces[e].luminanceCoefficients);
      },
      define: function (t) {
        Object.assign(this.spaces, t);
      },
      _getMatrix: function (t, e, n) {
        return t.copy(this.spaces[e].toXYZ).multiply(this.spaces[n].fromXYZ);
      },
      _getDrawingBufferColorSpace: function (t) {
        return this.spaces[t].outputColorSpaceConfig.drawingBufferColorSpace;
      },
      _getUnpackColorSpace: function (t = this.workingColorSpace) {
        return this.spaces[t].workingColorSpaceConfig.unpackColorSpace;
      },
    },
    e = [0.64, 0.33, 0.3, 0.6, 0.15, 0.06],
    n = [0.2126, 0.7152, 0.0722],
    i = [0.3127, 0.329];
  return (
    t.define({
      [Vt]: {
        primaries: e,
        whitePoint: i,
        transfer: Gt,
        toXYZ: xe,
        fromXYZ: Me,
        luminanceCoefficients: n,
        workingColorSpaceConfig: {
          unpackColorSpace: Ht,
        },
        outputColorSpaceConfig: {
          drawingBufferColorSpace: Ht,
        },
      },
      [Ht]: {
        primaries: e,
        whitePoint: i,
        transfer: kt,
        toXYZ: xe,
        fromXYZ: Me,
        luminanceCoefficients: n,
        outputColorSpaceConfig: {
          drawingBufferColorSpace: Ht,
        },
      },
    }),
    t
  );
}
const ye = Se();
function Ee(t) {
  return 0.04045 > t
    ? 0.0773993808 * t
    : Math.pow(0.9478672986 * t + 0.0521327014, 2.4);
}
function Te(t) {
  return 0.0031308 > t ? 12.92 * t : 1.055 * Math.pow(t, 0.41666) - 0.055;
}
let be;
class Ae {
  static getDataURL(t) {
    if (/^data:/i.test(t.src)) return t.src;
    if ("undefined" == typeof HTMLCanvasElement) return t.src;
    let e;
    if (t instanceof HTMLCanvasElement) e = t;
    else {
      void 0 === be && (be = me("canvas")),
        (be.width = t.width),
        (be.height = t.height);
      const n = be.getContext("2d");
      t instanceof ImageData
        ? n.putImageData(t, 0, 0)
        : n.drawImage(t, 0, 0, t.width, t.height),
        (e = be);
    }
    return e.width > 2048 || e.height > 2048
      ? e.toDataURL("image/jpeg", 0.6)
      : e.toDataURL("image/png");
  }
  static sRGBToLinear(t) {
    if (
      ("undefined" != typeof HTMLImageElement &&
        t instanceof HTMLImageElement) ||
      ("undefined" != typeof HTMLCanvasElement &&
        t instanceof HTMLCanvasElement) ||
      ("undefined" != typeof ImageBitmap && t instanceof ImageBitmap)
    ) {
      const e = me("canvas");
      (e.width = t.width), (e.height = t.height);
      const n = e.getContext("2d");
      n.drawImage(t, 0, 0, t.width, t.height);
      const i = n.getImageData(0, 0, t.width, t.height),
        r = i.data;
      for (let t = 0; t < r.length; t++) r[t] = 255 * Ee(r[t] / 255);
      return n.putImageData(i, 0, 0), e;
    }
    if (t.data) {
      const e = t.data.slice(0);
      for (let t = 0; t < e.length; t++)
        e instanceof Uint8Array || e instanceof Uint8ClampedArray
          ? (e[t] = Math.floor(255 * Ee(e[t] / 255)))
          : (e[t] = Ee(e[t]));
      return {
        data: e,
        width: t.width,
        height: t.height,
      };
    }
    return t;
  }
}
let we = 0;
class Re {
  constructor(t = null) {
    (this.isSource = !0),
      Object.defineProperty(this, "id", {
        value: we++,
      }),
      (this.uuid = se()),
      (this.data = t),
      (this.dataReady = !0),
      (this.version = 0);
  }
  set needsUpdate(t) {
    !0 === t && this.version++;
  }
  toJSON(t) {
    const e = void 0 === t || "string" == typeof t;
    if (!e && void 0 !== t.images[this.uuid]) return t.images[this.uuid];
    const n = {
        uuid: this.uuid,
        url: "",
      },
      i = this.data;
    if (null !== i) {
      let t;
      if (Array.isArray(i)) {
        t = [];
        for (let e = 0, n = i.length; n > e; e++)
          i[e].isDataTexture ? t.push(Ce(i[e].image)) : t.push(Ce(i[e]));
      } else t = Ce(i);
      n.url = t;
    }
    return e || (t.images[this.uuid] = n), n;
  }
}
function Ce(t) {
  return ("undefined" != typeof HTMLImageElement &&
    t instanceof HTMLImageElement) ||
    ("undefined" != typeof HTMLCanvasElement &&
      t instanceof HTMLCanvasElement) ||
    ("undefined" != typeof ImageBitmap && t instanceof ImageBitmap)
    ? Ae.getDataURL(t)
    : t.data
    ? {
        data: Array.from(t.data),
        width: t.width,
        height: t.height,
        type: t.data.constructor.name,
      }
    : {};
}
let Pe = 0;
class Le extends ne {
  constructor(
    t = Le.DEFAULT_IMAGE,
    e = Le.DEFAULT_MAPPING,
    n = 1001,
    i = 1001,
    r = 1006,
    a = 1008,
    s = 1023,
    o = 1009,
    l = Le.DEFAULT_ANISOTROPY,
    c = ""
  ) {
    super(),
      (this.isTexture = !0),
      Object.defineProperty(this, "id", {
        value: Pe++,
      }),
      (this.uuid = se()),
      (this.name = ""),
      (this.source = new Re(t)),
      (this.mipmaps = []),
      (this.mapping = e),
      (this.channel = 0),
      (this.wrapS = n),
      (this.wrapT = i),
      (this.magFilter = r),
      (this.minFilter = a),
      (this.anisotropy = l),
      (this.format = s),
      (this.internalFormat = null),
      (this.type = o),
      (this.offset = new ue(0, 0)),
      (this.repeat = new ue(1, 1)),
      (this.center = new ue(0, 0)),
      (this.rotation = 0),
      (this.matrixAutoUpdate = !0),
      (this.matrix = new de()),
      (this.generateMipmaps = !0),
      (this.premultiplyAlpha = !1),
      (this.flipY = !0),
      (this.unpackAlignment = 4),
      (this.colorSpace = c),
      (this.userData = {}),
      (this.version = 0),
      (this.onUpdate = null),
      (this.renderTarget = null),
      (this.isRenderTargetTexture = !1),
      (this.pmremVersion = 0);
  }
  get image() {
    return this.source.data;
  }
  set image(t = null) {
    this.source.data = t;
  }
  updateMatrix() {
    this.matrix.setUvTransform(
      this.offset.x,
      this.offset.y,
      this.repeat.x,
      this.repeat.y,
      this.rotation,
      this.center.x,
      this.center.y
    );
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(t) {
    return (
      (this.name = t.name),
      (this.source = t.source),
      (this.mipmaps = t.mipmaps.slice(0)),
      (this.mapping = t.mapping),
      (this.channel = t.channel),
      (this.wrapS = t.wrapS),
      (this.wrapT = t.wrapT),
      (this.magFilter = t.magFilter),
      (this.minFilter = t.minFilter),
      (this.anisotropy = t.anisotropy),
      (this.format = t.format),
      (this.internalFormat = t.internalFormat),
      (this.type = t.type),
      this.offset.copy(t.offset),
      this.repeat.copy(t.repeat),
      this.center.copy(t.center),
      (this.rotation = t.rotation),
      (this.matrixAutoUpdate = t.matrixAutoUpdate),
      this.matrix.copy(t.matrix),
      (this.generateMipmaps = t.generateMipmaps),
      (this.premultiplyAlpha = t.premultiplyAlpha),
      (this.flipY = t.flipY),
      (this.unpackAlignment = t.unpackAlignment),
      (this.colorSpace = t.colorSpace),
      (this.renderTarget = t.renderTarget),
      (this.isRenderTargetTexture = t.isRenderTargetTexture),
      (this.userData = JSON.parse(JSON.stringify(t.userData))),
      (this.needsUpdate = !0),
      this
    );
  }
  toJSON(t) {
    const e = void 0 === t || "string" == typeof t;
    if (!e && void 0 !== t.textures[this.uuid]) return t.textures[this.uuid];
    const n = {
      metadata: {
        version: 4.6,
        type: "Texture",
        generator: "Texture.toJSON",
      },
      uuid: this.uuid,
      name: this.name,
      image: this.source.toJSON(t).uuid,
      mapping: this.mapping,
      channel: this.channel,
      repeat: [this.repeat.x, this.repeat.y],
      offset: [this.offset.x, this.offset.y],
      center: [this.center.x, this.center.y],
      rotation: this.rotation,
      wrap: [this.wrapS, this.wrapT],
      format: this.format,
      internalFormat: this.internalFormat,
      type: this.type,
      colorSpace: this.colorSpace,
      minFilter: this.minFilter,
      magFilter: this.magFilter,
      anisotropy: this.anisotropy,
      flipY: this.flipY,
      generateMipmaps: this.generateMipmaps,
      premultiplyAlpha: this.premultiplyAlpha,
      unpackAlignment: this.unpackAlignment,
    };
    return (
      Object.keys(this.userData).length > 0 && (n.userData = this.userData),
      e || (t.textures[this.uuid] = n),
      n
    );
  }
  dispose() {
    this.dispatchEvent({
      type: "dispose",
    });
  }
  transformUv(t) {
    if (300 !== this.mapping) return t;
    if ((t.applyMatrix3(this.matrix), 0 > t.x || t.x > 1))
      switch (this.wrapS) {
        case B:
          t.x = t.x - Math.floor(t.x);
          break;
        case z:
          t.x = 0 > t.x ? 0 : 1;
          break;
        case H:
          1 === Math.abs(Math.floor(t.x) % 2)
            ? (t.x = Math.ceil(t.x) - t.x)
            : (t.x = t.x - Math.floor(t.x));
      }
    if (0 > t.y || t.y > 1)
      switch (this.wrapT) {
        case B:
          t.y = t.y - Math.floor(t.y);
          break;
        case z:
          t.y = 0 > t.y ? 0 : 1;
          break;
        case H:
          1 === Math.abs(Math.floor(t.y) % 2)
            ? (t.y = Math.ceil(t.y) - t.y)
            : (t.y = t.y - Math.floor(t.y));
      }
    return this.flipY && (t.y = 1 - t.y), t;
  }
  set needsUpdate(t) {
    !0 === t && (this.version++, (this.source.needsUpdate = !0));
  }
  set needsPMREMUpdate(t) {
    !0 === t && this.pmremVersion++;
  }
}
(Le.DEFAULT_IMAGE = null),
  (Le.DEFAULT_MAPPING = 300),
  (Le.DEFAULT_ANISOTROPY = 1);
class Ue {
  constructor(t = 0, e = 0, n = 0, i = 1) {
    (Ue.prototype.isVector4 = !0),
      (this.x = t),
      (this.y = e),
      (this.z = n),
      (this.w = i);
  }
  get width() {
    return this.z;
  }
  set width(t) {
    this.z = t;
  }
  get height() {
    return this.w;
  }
  set height(t) {
    this.w = t;
  }
  set(t, e, n, i) {
    return (this.x = t), (this.y = e), (this.z = n), (this.w = i), this;
  }
  setScalar(t) {
    return (this.x = t), (this.y = t), (this.z = t), (this.w = t), this;
  }
  setX(t) {
    return (this.x = t), this;
  }
  setY(t) {
    return (this.y = t), this;
  }
  setZ(t) {
    return (this.z = t), this;
  }
  setW(t) {
    return (this.w = t), this;
  }
  setComponent(t, e) {
    switch (t) {
      case 0:
        this.x = e;
        break;
      case 1:
        this.y = e;
        break;
      case 2:
        this.z = e;
        break;
      case 3:
        this.w = e;
        break;
      default:
        throw Error("index is out of range: " + t);
    }
    return this;
  }
  getComponent(t) {
    switch (t) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      case 3:
        return this.w;
      default:
        throw Error("index is out of range: " + t);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y, this.z, this.w);
  }
  copy(t) {
    return (
      (this.x = t.x),
      (this.y = t.y),
      (this.z = t.z),
      (this.w = void 0 !== t.w ? t.w : 1),
      this
    );
  }
  add(t) {
    return (
      (this.x += t.x), (this.y += t.y), (this.z += t.z), (this.w += t.w), this
    );
  }
  addScalar(t) {
    return (this.x += t), (this.y += t), (this.z += t), (this.w += t), this;
  }
  addVectors(t, e) {
    return (
      (this.x = t.x + e.x),
      (this.y = t.y + e.y),
      (this.z = t.z + e.z),
      (this.w = t.w + e.w),
      this
    );
  }
  addScaledVector(t, e) {
    return (
      (this.x += t.x * e),
      (this.y += t.y * e),
      (this.z += t.z * e),
      (this.w += t.w * e),
      this
    );
  }
  sub(t) {
    return (
      (this.x -= t.x), (this.y -= t.y), (this.z -= t.z), (this.w -= t.w), this
    );
  }
  subScalar(t) {
    return (this.x -= t), (this.y -= t), (this.z -= t), (this.w -= t), this;
  }
  subVectors(t, e) {
    return (
      (this.x = t.x - e.x),
      (this.y = t.y - e.y),
      (this.z = t.z - e.z),
      (this.w = t.w - e.w),
      this
    );
  }
  multiply(t) {
    return (
      (this.x *= t.x), (this.y *= t.y), (this.z *= t.z), (this.w *= t.w), this
    );
  }
  multiplyScalar(t) {
    return (this.x *= t), (this.y *= t), (this.z *= t), (this.w *= t), this;
  }
  applyMatrix4(t) {
    const e = this.x,
      n = this.y,
      i = this.z,
      r = this.w,
      a = t.elements;
    return (
      (this.x = a[0] * e + a[4] * n + a[8] * i + a[12] * r),
      (this.y = a[1] * e + a[5] * n + a[9] * i + a[13] * r),
      (this.z = a[2] * e + a[6] * n + a[10] * i + a[14] * r),
      (this.w = a[3] * e + a[7] * n + a[11] * i + a[15] * r),
      this
    );
  }
  divide(t) {
    return (
      (this.x /= t.x), (this.y /= t.y), (this.z /= t.z), (this.w /= t.w), this
    );
  }
  divideScalar(t) {
    return this.multiplyScalar(1 / t);
  }
  setAxisAngleFromQuaternion(t) {
    this.w = 2 * Math.acos(t.w);
    const e = Math.sqrt(1 - t.w * t.w);
    return (
      1e-4 > e
        ? ((this.x = 1), (this.y = 0), (this.z = 0))
        : ((this.x = t.x / e), (this.y = t.y / e), (this.z = t.z / e)),
      this
    );
  }
  setAxisAngleFromRotationMatrix(t) {
    let e, n, i, r;
    const a = 0.01,
      s = 0.1,
      o = t.elements,
      l = o[0],
      c = o[4],
      h = o[8],
      u = o[1],
      d = o[5],
      p = o[9],
      f = o[2],
      m = o[6],
      g = o[10];
    if (a > Math.abs(c - u) && a > Math.abs(h - f) && a > Math.abs(p - m)) {
      if (
        s > Math.abs(c + u) &&
        s > Math.abs(h + f) &&
        s > Math.abs(p + m) &&
        s > Math.abs(l + d + g - 3)
      )
        return this.set(1, 0, 0, 0), this;
      e = Math.PI;
      const t = (l + 1) / 2,
        o = (d + 1) / 2,
        _ = (g + 1) / 2,
        v = (c + u) / 4,
        x = (h + f) / 4,
        M = (p + m) / 4;
      return (
        t > o && t > _
          ? a > t
            ? ((n = 0), (i = 0.707106781), (r = 0.707106781))
            : ((n = Math.sqrt(t)), (i = v / n), (r = x / n))
          : o > _
          ? a > o
            ? ((n = 0.707106781), (i = 0), (r = 0.707106781))
            : ((i = Math.sqrt(o)), (n = v / i), (r = M / i))
          : a > _
          ? ((n = 0.707106781), (i = 0.707106781), (r = 0))
          : ((r = Math.sqrt(_)), (n = x / r), (i = M / r)),
        this.set(n, i, r, e),
        this
      );
    }
    let _ = Math.sqrt(
      (m - p) * (m - p) + (h - f) * (h - f) + (u - c) * (u - c)
    );
    return (
      0.001 > Math.abs(_) && (_ = 1),
      (this.x = (m - p) / _),
      (this.y = (h - f) / _),
      (this.z = (u - c) / _),
      (this.w = Math.acos((l + d + g - 1) / 2)),
      this
    );
  }
  setFromMatrixPosition(t) {
    const e = t.elements;
    return (
      (this.x = e[12]),
      (this.y = e[13]),
      (this.z = e[14]),
      (this.w = e[15]),
      this
    );
  }
  min(t) {
    return (
      (this.x = Math.min(this.x, t.x)),
      (this.y = Math.min(this.y, t.y)),
      (this.z = Math.min(this.z, t.z)),
      (this.w = Math.min(this.w, t.w)),
      this
    );
  }
  max(t) {
    return (
      (this.x = Math.max(this.x, t.x)),
      (this.y = Math.max(this.y, t.y)),
      (this.z = Math.max(this.z, t.z)),
      (this.w = Math.max(this.w, t.w)),
      this
    );
  }
  clamp(t, e) {
    return (
      (this.x = oe(this.x, t.x, e.x)),
      (this.y = oe(this.y, t.y, e.y)),
      (this.z = oe(this.z, t.z, e.z)),
      (this.w = oe(this.w, t.w, e.w)),
      this
    );
  }
  clampScalar(t, e) {
    return (
      (this.x = oe(this.x, t, e)),
      (this.y = oe(this.y, t, e)),
      (this.z = oe(this.z, t, e)),
      (this.w = oe(this.w, t, e)),
      this
    );
  }
  clampLength(t, e) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(oe(n, t, e));
  }
  floor() {
    return (
      (this.x = Math.floor(this.x)),
      (this.y = Math.floor(this.y)),
      (this.z = Math.floor(this.z)),
      (this.w = Math.floor(this.w)),
      this
    );
  }
  ceil() {
    return (
      (this.x = Math.ceil(this.x)),
      (this.y = Math.ceil(this.y)),
      (this.z = Math.ceil(this.z)),
      (this.w = Math.ceil(this.w)),
      this
    );
  }
  round() {
    return (
      (this.x = Math.round(this.x)),
      (this.y = Math.round(this.y)),
      (this.z = Math.round(this.z)),
      (this.w = Math.round(this.w)),
      this
    );
  }
  roundToZero() {
    return (
      (this.x = Math.trunc(this.x)),
      (this.y = Math.trunc(this.y)),
      (this.z = Math.trunc(this.z)),
      (this.w = Math.trunc(this.w)),
      this
    );
  }
  negate() {
    return (
      (this.x = -this.x),
      (this.y = -this.y),
      (this.z = -this.z),
      (this.w = -this.w),
      this
    );
  }
  dot(t) {
    return this.x * t.x + this.y * t.y + this.z * t.z + this.w * t.w;
  }
  lengthSq() {
    return (
      this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w
    );
  }
  length() {
    return Math.sqrt(
      this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w
    );
  }
  manhattanLength() {
    return (
      Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w)
    );
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  setLength(t) {
    return this.normalize().multiplyScalar(t);
  }
  lerp(t, e) {
    return (
      (this.x += (t.x - this.x) * e),
      (this.y += (t.y - this.y) * e),
      (this.z += (t.z - this.z) * e),
      (this.w += (t.w - this.w) * e),
      this
    );
  }
  lerpVectors(t, e, n) {
    return (
      (this.x = t.x + (e.x - t.x) * n),
      (this.y = t.y + (e.y - t.y) * n),
      (this.z = t.z + (e.z - t.z) * n),
      (this.w = t.w + (e.w - t.w) * n),
      this
    );
  }
  equals(t) {
    return t.x === this.x && t.y === this.y && t.z === this.z && t.w === this.w;
  }
  fromArray(t, e = 0) {
    return (
      (this.x = t[e]),
      (this.y = t[e + 1]),
      (this.z = t[e + 2]),
      (this.w = t[e + 3]),
      this
    );
  }
  toArray(t = [], e = 0) {
    return (
      (t[e] = this.x),
      (t[e + 1] = this.y),
      (t[e + 2] = this.z),
      (t[e + 3] = this.w),
      t
    );
  }
  fromBufferAttribute(t, e) {
    return (
      (this.x = t.getX(e)),
      (this.y = t.getY(e)),
      (this.z = t.getZ(e)),
      (this.w = t.getW(e)),
      this
    );
  }
  random() {
    return (
      (this.x = Math.random()),
      (this.y = Math.random()),
      (this.z = Math.random()),
      (this.w = Math.random()),
      this
    );
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y, yield this.z, yield this.w;
  }
}
class De extends ne {
  constructor(t = 1, e = 1, n = {}) {
    super(),
      (this.isRenderTarget = !0),
      (this.width = t),
      (this.height = e),
      (this.depth = 1),
      (this.scissor = new Ue(0, 0, t, e)),
      (this.scissorTest = !1),
      (this.viewport = new Ue(0, 0, t, e));
    const i = {
      width: t,
      height: e,
      depth: 1,
    };
    n = Object.assign(
      {
        generateMipmaps: !1,
        internalFormat: null,
        minFilter: W,
        depthBuffer: !0,
        stencilBuffer: !1,
        resolveDepthBuffer: !0,
        resolveStencilBuffer: !0,
        depthTexture: null,
        samples: 0,
        count: 1,
      },
      n
    );
    const r = new Le(
      i,
      n.mapping,
      n.wrapS,
      n.wrapT,
      n.magFilter,
      n.minFilter,
      n.format,
      n.type,
      n.anisotropy,
      n.colorSpace
    );
    (r.flipY = !1),
      (r.generateMipmaps = n.generateMipmaps),
      (r.internalFormat = n.internalFormat),
      (this.textures = []);
    const a = n.count;
    for (let s = 0; a > s; s++)
      (this.textures[s] = r.clone()),
        (this.textures[s].isRenderTargetTexture = !0),
        (this.textures[s].renderTarget = this);
    (this.depthBuffer = n.depthBuffer),
      (this.stencilBuffer = n.stencilBuffer),
      (this.resolveDepthBuffer = n.resolveDepthBuffer),
      (this.resolveStencilBuffer = n.resolveStencilBuffer),
      (this._depthTexture = null),
      (this.depthTexture = n.depthTexture),
      (this.samples = n.samples);
  }
  get texture() {
    return this.textures[0];
  }
  set texture(t) {
    this.textures[0] = t;
  }
  set depthTexture(t) {
    null !== this._depthTexture && (this._depthTexture.renderTarget = null),
      null !== t && (t.renderTarget = this),
      (this._depthTexture = t);
  }
  get depthTexture() {
    return this._depthTexture;
  }
  setSize(t, e, n = 1) {
    if (this.width !== t || this.height !== e || this.depth !== n) {
      (this.width = t), (this.height = e), (this.depth = n);
      for (let i = 0, r = this.textures.length; r > i; i++)
        (this.textures[i].image.width = t),
          (this.textures[i].image.height = e),
          (this.textures[i].image.depth = n);
      this.dispose();
    }
    this.viewport.set(0, 0, t, e), this.scissor.set(0, 0, t, e);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(t) {
    (this.width = t.width),
      (this.height = t.height),
      (this.depth = t.depth),
      this.scissor.copy(t.scissor),
      (this.scissorTest = t.scissorTest),
      this.viewport.copy(t.viewport),
      (this.textures.length = 0);
    for (let n = 0, i = t.textures.length; i > n; n++)
      (this.textures[n] = t.textures[n].clone()),
        (this.textures[n].isRenderTargetTexture = !0),
        (this.textures[n].renderTarget = this);
    const e = Object.assign({}, t.texture.image);
    return (
      (this.texture.source = new Re(e)),
      (this.depthBuffer = t.depthBuffer),
      (this.stencilBuffer = t.stencilBuffer),
      (this.resolveDepthBuffer = t.resolveDepthBuffer),
      (this.resolveStencilBuffer = t.resolveStencilBuffer),
      null !== t.depthTexture && (this.depthTexture = t.depthTexture.clone()),
      (this.samples = t.samples),
      this
    );
  }
  dispose() {
    this.dispatchEvent({
      type: "dispose",
    });
  }
}
class Ie extends De {
  constructor(t = 1, e = 1, n = {}) {
    super(t, e, n), (this.isWebGLRenderTarget = !0);
  }
}
class Ne extends Le {
  constructor(t = null, e = 1, n = 1, i = 1) {
    super(null),
      (this.isDataArrayTexture = !0),
      (this.image = {
        data: t,
        width: e,
        height: n,
        depth: i,
      }),
      (this.magFilter = V),
      (this.minFilter = V),
      (this.wrapR = z),
      (this.generateMipmaps = !1),
      (this.flipY = !1),
      (this.unpackAlignment = 1),
      (this.layerUpdates = new Set());
  }
  addLayerUpdate(t) {
    this.layerUpdates.add(t);
  }
  clearLayerUpdates() {
    this.layerUpdates.clear();
  }
}
class Oe extends Le {
  constructor(t = null, e = 1, n = 1, i = 1) {
    super(null),
      (this.isData3DTexture = !0),
      (this.image = {
        data: t,
        width: e,
        height: n,
        depth: i,
      }),
      (this.magFilter = V),
      (this.minFilter = V),
      (this.wrapR = z),
      (this.generateMipmaps = !1),
      (this.flipY = !1),
      (this.unpackAlignment = 1);
  }
}
class Fe {
  constructor(t = 0, e = 0, n = 0, i = 1) {
    (this.isQuaternion = !0),
      (this._x = t),
      (this._y = e),
      (this._z = n),
      (this._w = i);
  }
  static slerpFlat(t, e, n, i, r, a, s) {
    let o = n[i + 0],
      l = n[i + 1],
      c = n[i + 2],
      h = n[i + 3];
    const u = r[a + 0],
      d = r[a + 1],
      p = r[a + 2],
      f = r[a + 3];
    if (0 === s)
      return (
        (t[e + 0] = o), (t[e + 1] = l), (t[e + 2] = c), void (t[e + 3] = h)
      );
    if (1 === s)
      return (
        (t[e + 0] = u), (t[e + 1] = d), (t[e + 2] = p), void (t[e + 3] = f)
      );
    if (h !== f || o !== u || l !== d || c !== p) {
      let t = 1 - s;
      const e = o * u + l * d + c * p + h * f,
        n = 0 > e ? -1 : 1,
        i = 1 - e * e;
      if (i > Number.EPSILON) {
        const r = Math.sqrt(i),
          a = Math.atan2(r, e * n);
        (t = Math.sin(t * a) / r), (s = Math.sin(s * a) / r);
      }
      const r = s * n;
      if (
        ((o = o * t + u * r),
        (l = l * t + d * r),
        (c = c * t + p * r),
        (h = h * t + f * r),
        t === 1 - s)
      ) {
        const t = 1 / Math.sqrt(o * o + l * l + c * c + h * h);
        (o *= t), (l *= t), (c *= t), (h *= t);
      }
    }
    (t[e] = o), (t[e + 1] = l), (t[e + 2] = c), (t[e + 3] = h);
  }
  static multiplyQuaternionsFlat(t, e, n, i, r, a) {
    const s = n[i],
      o = n[i + 1],
      l = n[i + 2],
      c = n[i + 3],
      h = r[a],
      u = r[a + 1],
      d = r[a + 2],
      p = r[a + 3];
    return (
      (t[e] = s * p + c * h + o * d - l * u),
      (t[e + 1] = o * p + c * u + l * h - s * d),
      (t[e + 2] = l * p + c * d + s * u - o * h),
      (t[e + 3] = c * p - s * h - o * u - l * d),
      t
    );
  }
  get x() {
    return this._x;
  }
  set x(t) {
    (this._x = t), this._onChangeCallback();
  }
  get y() {
    return this._y;
  }
  set y(t) {
    (this._y = t), this._onChangeCallback();
  }
  get z() {
    return this._z;
  }
  set z(t) {
    (this._z = t), this._onChangeCallback();
  }
  get w() {
    return this._w;
  }
  set w(t) {
    (this._w = t), this._onChangeCallback();
  }
  set(t, e, n, i) {
    return (
      (this._x = t),
      (this._y = e),
      (this._z = n),
      (this._w = i),
      this._onChangeCallback(),
      this
    );
  }
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._w);
  }
  copy(t) {
    return (
      (this._x = t.x),
      (this._y = t.y),
      (this._z = t.z),
      (this._w = t.w),
      this._onChangeCallback(),
      this
    );
  }
  setFromEuler(t, e = !0) {
    const n = t._x,
      i = t._y,
      r = t._z,
      a = t._order,
      s = Math.cos,
      o = Math.sin,
      l = s(n / 2),
      c = s(i / 2),
      h = s(r / 2),
      u = o(n / 2),
      d = o(i / 2),
      p = o(r / 2);
    switch (a) {
      case "XYZ":
        (this._x = u * c * h + l * d * p),
          (this._y = l * d * h - u * c * p),
          (this._z = l * c * p + u * d * h),
          (this._w = l * c * h - u * d * p);
        break;
      case "YXZ":
        (this._x = u * c * h + l * d * p),
          (this._y = l * d * h - u * c * p),
          (this._z = l * c * p - u * d * h),
          (this._w = l * c * h + u * d * p);
        break;
      case "ZXY":
        (this._x = u * c * h - l * d * p),
          (this._y = l * d * h + u * c * p),
          (this._z = l * c * p + u * d * h),
          (this._w = l * c * h - u * d * p);
        break;
      case "ZYX":
        (this._x = u * c * h - l * d * p),
          (this._y = l * d * h + u * c * p),
          (this._z = l * c * p - u * d * h),
          (this._w = l * c * h + u * d * p);
        break;
      case "YZX":
        (this._x = u * c * h + l * d * p),
          (this._y = l * d * h + u * c * p),
          (this._z = l * c * p - u * d * h),
          (this._w = l * c * h - u * d * p);
        break;
      case "XZY":
        (this._x = u * c * h - l * d * p),
          (this._y = l * d * h - u * c * p),
          (this._z = l * c * p + u * d * h),
          (this._w = l * c * h + u * d * p);
    }
    return !0 === e && this._onChangeCallback(), this;
  }
  setFromAxisAngle(t, e) {
    const n = e / 2,
      i = Math.sin(n);
    return (
      (this._x = t.x * i),
      (this._y = t.y * i),
      (this._z = t.z * i),
      (this._w = Math.cos(n)),
      this._onChangeCallback(),
      this
    );
  }
  setFromRotationMatrix(t) {
    const e = t.elements,
      n = e[0],
      i = e[4],
      r = e[8],
      a = e[1],
      s = e[5],
      o = e[9],
      l = e[2],
      c = e[6],
      h = e[10],
      u = n + s + h;
    if (u > 0) {
      const t = 0.5 / Math.sqrt(u + 1);
      (this._w = 0.25 / t),
        (this._x = (c - o) * t),
        (this._y = (r - l) * t),
        (this._z = (a - i) * t);
    } else if (n > s && n > h) {
      const t = 2 * Math.sqrt(1 + n - s - h);
      (this._w = (c - o) / t),
        (this._x = 0.25 * t),
        (this._y = (i + a) / t),
        (this._z = (r + l) / t);
    } else if (s > h) {
      const t = 2 * Math.sqrt(1 + s - n - h);
      (this._w = (r - l) / t),
        (this._x = (i + a) / t),
        (this._y = 0.25 * t),
        (this._z = (o + c) / t);
    } else {
      const t = 2 * Math.sqrt(1 + h - n - s);
      (this._w = (a - i) / t),
        (this._x = (r + l) / t),
        (this._y = (o + c) / t),
        (this._z = 0.25 * t);
    }
    return this._onChangeCallback(), this;
  }
  setFromUnitVectors(t, e) {
    let n = t.dot(e) + 1;
    return (
      Number.EPSILON > n
        ? ((n = 0),
          Math.abs(t.x) > Math.abs(t.z)
            ? ((this._x = -t.y), (this._y = t.x), (this._z = 0), (this._w = n))
            : ((this._x = 0), (this._y = -t.z), (this._z = t.y), (this._w = n)))
        : ((this._x = t.y * e.z - t.z * e.y),
          (this._y = t.z * e.x - t.x * e.z),
          (this._z = t.x * e.y - t.y * e.x),
          (this._w = n)),
      this.normalize()
    );
  }
  angleTo(t) {
    return 2 * Math.acos(Math.abs(oe(this.dot(t), -1, 1)));
  }
  rotateTowards(t, e) {
    const n = this.angleTo(t);
    if (0 === n) return this;
    const i = Math.min(1, e / n);
    return this.slerp(t, i), this;
  }
  identity() {
    return this.set(0, 0, 0, 1);
  }
  invert() {
    return this.conjugate();
  }
  conjugate() {
    return (
      (this._x *= -1),
      (this._y *= -1),
      (this._z *= -1),
      this._onChangeCallback(),
      this
    );
  }
  dot(t) {
    return this._x * t._x + this._y * t._y + this._z * t._z + this._w * t._w;
  }
  lengthSq() {
    return (
      this._x * this._x +
      this._y * this._y +
      this._z * this._z +
      this._w * this._w
    );
  }
  length() {
    return Math.sqrt(
      this._x * this._x +
        this._y * this._y +
        this._z * this._z +
        this._w * this._w
    );
  }
  normalize() {
    let t = this.length();
    return (
      0 === t
        ? ((this._x = 0), (this._y = 0), (this._z = 0), (this._w = 1))
        : ((t = 1 / t),
          (this._x = this._x * t),
          (this._y = this._y * t),
          (this._z = this._z * t),
          (this._w = this._w * t)),
      this._onChangeCallback(),
      this
    );
  }
  multiply(t) {
    return this.multiplyQuaternions(this, t);
  }
  premultiply(t) {
    return this.multiplyQuaternions(t, this);
  }
  multiplyQuaternions(t, e) {
    const n = t._x,
      i = t._y,
      r = t._z,
      a = t._w,
      s = e._x,
      o = e._y,
      l = e._z,
      c = e._w;
    return (
      (this._x = n * c + a * s + i * l - r * o),
      (this._y = i * c + a * o + r * s - n * l),
      (this._z = r * c + a * l + n * o - i * s),
      (this._w = a * c - n * s - i * o - r * l),
      this._onChangeCallback(),
      this
    );
  }
  slerp(t, e) {
    if (0 === e) return this;
    if (1 === e) return this.copy(t);
    const n = this._x,
      i = this._y,
      r = this._z,
      a = this._w;
    let s = a * t._w + n * t._x + i * t._y + r * t._z;
    if (
      (0 > s
        ? ((this._w = -t._w),
          (this._x = -t._x),
          (this._y = -t._y),
          (this._z = -t._z),
          (s = -s))
        : this.copy(t),
      s >= 1)
    )
      return (this._w = a), (this._x = n), (this._y = i), (this._z = r), this;
    const o = 1 - s * s;
    if (Number.EPSILON >= o) {
      const t = 1 - e;
      return (
        (this._w = t * a + e * this._w),
        (this._x = t * n + e * this._x),
        (this._y = t * i + e * this._y),
        (this._z = t * r + e * this._z),
        this.normalize(),
        this
      );
    }
    const l = Math.sqrt(o),
      c = Math.atan2(l, s),
      h = Math.sin((1 - e) * c) / l,
      u = Math.sin(e * c) / l;
    return (
      (this._w = a * h + this._w * u),
      (this._x = n * h + this._x * u),
      (this._y = i * h + this._y * u),
      (this._z = r * h + this._z * u),
      this._onChangeCallback(),
      this
    );
  }
  slerpQuaternions(t, e, n) {
    return this.copy(t).slerp(e, n);
  }
  random() {
    const t = 2 * Math.PI * Math.random(),
      e = 2 * Math.PI * Math.random(),
      n = Math.random(),
      i = Math.sqrt(1 - n),
      r = Math.sqrt(n);
    return this.set(
      i * Math.sin(t),
      i * Math.cos(t),
      r * Math.sin(e),
      r * Math.cos(e)
    );
  }
  equals(t) {
    return (
      t._x === this._x &&
      t._y === this._y &&
      t._z === this._z &&
      t._w === this._w
    );
  }
  fromArray(t, e = 0) {
    return (
      (this._x = t[e]),
      (this._y = t[e + 1]),
      (this._z = t[e + 2]),
      (this._w = t[e + 3]),
      this._onChangeCallback(),
      this
    );
  }
  toArray(t = [], e = 0) {
    return (
      (t[e] = this._x),
      (t[e + 1] = this._y),
      (t[e + 2] = this._z),
      (t[e + 3] = this._w),
      t
    );
  }
  fromBufferAttribute(t, e) {
    return (
      (this._x = t.getX(e)),
      (this._y = t.getY(e)),
      (this._z = t.getZ(e)),
      (this._w = t.getW(e)),
      this._onChangeCallback(),
      this
    );
  }
  toJSON() {
    return this.toArray();
  }
  _onChange(t) {
    return (this._onChangeCallback = t), this;
  }
  _onChangeCallback() {}
  *[Symbol.iterator]() {
    yield this._x, yield this._y, yield this._z, yield this._w;
  }
}
class Be {
  constructor(t = 0, e = 0, n = 0) {
    (Be.prototype.isVector3 = !0), (this.x = t), (this.y = e), (this.z = n);
  }
  set(t, e, n) {
    return (
      void 0 === n && (n = this.z),
      (this.x = t),
      (this.y = e),
      (this.z = n),
      this
    );
  }
  setScalar(t) {
    return (this.x = t), (this.y = t), (this.z = t), this;
  }
  setX(t) {
    return (this.x = t), this;
  }
  setY(t) {
    return (this.y = t), this;
  }
  setZ(t) {
    return (this.z = t), this;
  }
  setComponent(t, e) {
    switch (t) {
      case 0:
        this.x = e;
        break;
      case 1:
        this.y = e;
        break;
      case 2:
        this.z = e;
        break;
      default:
        throw Error("index is out of range: " + t);
    }
    return this;
  }
  getComponent(t) {
    switch (t) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      default:
        throw Error("index is out of range: " + t);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y, this.z);
  }
  copy(t) {
    return (this.x = t.x), (this.y = t.y), (this.z = t.z), this;
  }
  add(t) {
    return (this.x += t.x), (this.y += t.y), (this.z += t.z), this;
  }
  addScalar(t) {
    return (this.x += t), (this.y += t), (this.z += t), this;
  }
  addVectors(t, e) {
    return (
      (this.x = t.x + e.x), (this.y = t.y + e.y), (this.z = t.z + e.z), this
    );
  }
  addScaledVector(t, e) {
    return (this.x += t.x * e), (this.y += t.y * e), (this.z += t.z * e), this;
  }
  sub(t) {
    return (this.x -= t.x), (this.y -= t.y), (this.z -= t.z), this;
  }
  subScalar(t) {
    return (this.x -= t), (this.y -= t), (this.z -= t), this;
  }
  subVectors(t, e) {
    return (
      (this.x = t.x - e.x), (this.y = t.y - e.y), (this.z = t.z - e.z), this
    );
  }
  multiply(t) {
    return (this.x *= t.x), (this.y *= t.y), (this.z *= t.z), this;
  }
  multiplyScalar(t) {
    return (this.x *= t), (this.y *= t), (this.z *= t), this;
  }
  multiplyVectors(t, e) {
    return (
      (this.x = t.x * e.x), (this.y = t.y * e.y), (this.z = t.z * e.z), this
    );
  }
  applyEuler(t) {
    return this.applyQuaternion(He.setFromEuler(t));
  }
  applyAxisAngle(t, e) {
    return this.applyQuaternion(He.setFromAxisAngle(t, e));
  }
  applyMatrix3(t) {
    const e = this.x,
      n = this.y,
      i = this.z,
      r = t.elements;
    return (
      (this.x = r[0] * e + r[3] * n + r[6] * i),
      (this.y = r[1] * e + r[4] * n + r[7] * i),
      (this.z = r[2] * e + r[5] * n + r[8] * i),
      this
    );
  }
  applyNormalMatrix(t) {
    return this.applyMatrix3(t).normalize();
  }
  applyMatrix4(t) {
    const e = this.x,
      n = this.y,
      i = this.z,
      r = t.elements,
      a = 1 / (r[3] * e + r[7] * n + r[11] * i + r[15]);
    return (
      (this.x = (r[0] * e + r[4] * n + r[8] * i + r[12]) * a),
      (this.y = (r[1] * e + r[5] * n + r[9] * i + r[13]) * a),
      (this.z = (r[2] * e + r[6] * n + r[10] * i + r[14]) * a),
      this
    );
  }
  applyQuaternion(t) {
    const e = this.x,
      n = this.y,
      i = this.z,
      r = t.x,
      a = t.y,
      s = t.z,
      o = t.w,
      l = 2 * (a * i - s * n),
      c = 2 * (s * e - r * i),
      h = 2 * (r * n - a * e);
    return (
      (this.x = e + o * l + a * h - s * c),
      (this.y = n + o * c + s * l - r * h),
      (this.z = i + o * h + r * c - a * l),
      this
    );
  }
  project(t) {
    return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(
      t.projectionMatrix
    );
  }
  unproject(t) {
    return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(
      t.matrixWorld
    );
  }
  transformDirection(t) {
    const e = this.x,
      n = this.y,
      i = this.z,
      r = t.elements;
    return (
      (this.x = r[0] * e + r[4] * n + r[8] * i),
      (this.y = r[1] * e + r[5] * n + r[9] * i),
      (this.z = r[2] * e + r[6] * n + r[10] * i),
      this.normalize()
    );
  }
  divide(t) {
    return (this.x /= t.x), (this.y /= t.y), (this.z /= t.z), this;
  }
  divideScalar(t) {
    return this.multiplyScalar(1 / t);
  }
  min(t) {
    return (
      (this.x = Math.min(this.x, t.x)),
      (this.y = Math.min(this.y, t.y)),
      (this.z = Math.min(this.z, t.z)),
      this
    );
  }
  max(t) {
    return (
      (this.x = Math.max(this.x, t.x)),
      (this.y = Math.max(this.y, t.y)),
      (this.z = Math.max(this.z, t.z)),
      this
    );
  }
  clamp(t, e) {
    return (
      (this.x = oe(this.x, t.x, e.x)),
      (this.y = oe(this.y, t.y, e.y)),
      (this.z = oe(this.z, t.z, e.z)),
      this
    );
  }
  clampScalar(t, e) {
    return (
      (this.x = oe(this.x, t, e)),
      (this.y = oe(this.y, t, e)),
      (this.z = oe(this.z, t, e)),
      this
    );
  }
  clampLength(t, e) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(oe(n, t, e));
  }
  floor() {
    return (
      (this.x = Math.floor(this.x)),
      (this.y = Math.floor(this.y)),
      (this.z = Math.floor(this.z)),
      this
    );
  }
  ceil() {
    return (
      (this.x = Math.ceil(this.x)),
      (this.y = Math.ceil(this.y)),
      (this.z = Math.ceil(this.z)),
      this
    );
  }
  round() {
    return (
      (this.x = Math.round(this.x)),
      (this.y = Math.round(this.y)),
      (this.z = Math.round(this.z)),
      this
    );
  }
  roundToZero() {
    return (
      (this.x = Math.trunc(this.x)),
      (this.y = Math.trunc(this.y)),
      (this.z = Math.trunc(this.z)),
      this
    );
  }
  negate() {
    return (this.x = -this.x), (this.y = -this.y), (this.z = -this.z), this;
  }
  dot(t) {
    return this.x * t.x + this.y * t.y + this.z * t.z;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y + this.z * this.z;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  setLength(t) {
    return this.normalize().multiplyScalar(t);
  }
  lerp(t, e) {
    return (
      (this.x += (t.x - this.x) * e),
      (this.y += (t.y - this.y) * e),
      (this.z += (t.z - this.z) * e),
      this
    );
  }
  lerpVectors(t, e, n) {
    return (
      (this.x = t.x + (e.x - t.x) * n),
      (this.y = t.y + (e.y - t.y) * n),
      (this.z = t.z + (e.z - t.z) * n),
      this
    );
  }
  cross(t) {
    return this.crossVectors(this, t);
  }
  crossVectors(t, e) {
    const n = t.x,
      i = t.y,
      r = t.z,
      a = e.x,
      s = e.y,
      o = e.z;
    return (
      (this.x = i * o - r * s),
      (this.y = r * a - n * o),
      (this.z = n * s - i * a),
      this
    );
  }
  projectOnVector(t) {
    const e = t.lengthSq();
    if (0 === e) return this.set(0, 0, 0);
    const n = t.dot(this) / e;
    return this.copy(t).multiplyScalar(n);
  }
  projectOnPlane(t) {
    return ze.copy(this).projectOnVector(t), this.sub(ze);
  }
  reflect(t) {
    return this.sub(ze.copy(t).multiplyScalar(2 * this.dot(t)));
  }
  angleTo(t) {
    const e = Math.sqrt(this.lengthSq() * t.lengthSq());
    if (0 === e) return Math.PI / 2;
    const n = this.dot(t) / e;
    return Math.acos(oe(n, -1, 1));
  }
  distanceTo(t) {
    return Math.sqrt(this.distanceToSquared(t));
  }
  distanceToSquared(t) {
    const e = this.x - t.x,
      n = this.y - t.y,
      i = this.z - t.z;
    return e * e + n * n + i * i;
  }
  manhattanDistanceTo(t) {
    return (
      Math.abs(this.x - t.x) + Math.abs(this.y - t.y) + Math.abs(this.z - t.z)
    );
  }
  setFromSpherical(t) {
    return this.setFromSphericalCoords(t.radius, t.phi, t.theta);
  }
  setFromSphericalCoords(t, e, n) {
    const i = Math.sin(e) * t;
    return (
      (this.x = i * Math.sin(n)),
      (this.y = Math.cos(e) * t),
      (this.z = i * Math.cos(n)),
      this
    );
  }
  setFromCylindrical(t) {
    return this.setFromCylindricalCoords(t.radius, t.theta, t.y);
  }
  setFromCylindricalCoords(t, e, n) {
    return (
      (this.x = t * Math.sin(e)), (this.y = n), (this.z = t * Math.cos(e)), this
    );
  }
  setFromMatrixPosition(t) {
    const e = t.elements;
    return (this.x = e[12]), (this.y = e[13]), (this.z = e[14]), this;
  }
  setFromMatrixScale(t) {
    const e = this.setFromMatrixColumn(t, 0).length(),
      n = this.setFromMatrixColumn(t, 1).length(),
      i = this.setFromMatrixColumn(t, 2).length();
    return (this.x = e), (this.y = n), (this.z = i), this;
  }
  setFromMatrixColumn(t, e) {
    return this.fromArray(t.elements, 4 * e);
  }
  setFromMatrix3Column(t, e) {
    return this.fromArray(t.elements, 3 * e);
  }
  setFromEuler(t) {
    return (this.x = t._x), (this.y = t._y), (this.z = t._z), this;
  }
  setFromColor(t) {
    return (this.x = t.r), (this.y = t.g), (this.z = t.b), this;
  }
  equals(t) {
    return t.x === this.x && t.y === this.y && t.z === this.z;
  }
  fromArray(t, e = 0) {
    return (this.x = t[e]), (this.y = t[e + 1]), (this.z = t[e + 2]), this;
  }
  toArray(t = [], e = 0) {
    return (t[e] = this.x), (t[e + 1] = this.y), (t[e + 2] = this.z), t;
  }
  fromBufferAttribute(t, e) {
    return (
      (this.x = t.getX(e)), (this.y = t.getY(e)), (this.z = t.getZ(e)), this
    );
  }
  random() {
    return (
      (this.x = Math.random()),
      (this.y = Math.random()),
      (this.z = Math.random()),
      this
    );
  }
  randomDirection() {
    const t = Math.random() * Math.PI * 2,
      e = 2 * Math.random() - 1,
      n = Math.sqrt(1 - e * e);
    return (
      (this.x = n * Math.cos(t)), (this.y = e), (this.z = n * Math.sin(t)), this
    );
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y, yield this.z;
  }
}
const ze = new Be(),
  He = new Fe();
class Ve {
  constructor(
    t = new Be(1 / 0, 1 / 0, 1 / 0),
    e = new Be(-1 / 0, -1 / 0, -1 / 0)
  ) {
    (this.isBox3 = !0), (this.min = t), (this.max = e);
  }
  set(t, e) {
    return this.min.copy(t), this.max.copy(e), this;
  }
  setFromArray(t) {
    this.makeEmpty();
    for (let e = 0, n = t.length; n > e; e += 3)
      this.expandByPoint(ke.fromArray(t, e));
    return this;
  }
  setFromBufferAttribute(t) {
    this.makeEmpty();
    for (let e = 0, n = t.count; n > e; e++)
      this.expandByPoint(ke.fromBufferAttribute(t, e));
    return this;
  }
  setFromPoints(t) {
    this.makeEmpty();
    for (let e = 0, n = t.length; n > e; e++) this.expandByPoint(t[e]);
    return this;
  }
  setFromCenterAndSize(t, e) {
    const n = ke.copy(e).multiplyScalar(0.5);
    return this.min.copy(t).sub(n), this.max.copy(t).add(n), this;
  }
  setFromObject(t, e = !1) {
    return this.makeEmpty(), this.expandByObject(t, e);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(t) {
    return this.min.copy(t.min), this.max.copy(t.max), this;
  }
  makeEmpty() {
    return (
      (this.min.x = this.min.y = this.min.z = 1 / 0),
      (this.max.x = this.max.y = this.max.z = -1 / 0),
      this
    );
  }
  isEmpty() {
    return (
      this.max.x < this.min.x ||
      this.max.y < this.min.y ||
      this.max.z < this.min.z
    );
  }
  getCenter(t) {
    return this.isEmpty()
      ? t.set(0, 0, 0)
      : t.addVectors(this.min, this.max).multiplyScalar(0.5);
  }
  getSize(t) {
    return this.isEmpty() ? t.set(0, 0, 0) : t.subVectors(this.max, this.min);
  }
  expandByPoint(t) {
    return this.min.min(t), this.max.max(t), this;
  }
  expandByVector(t) {
    return this.min.sub(t), this.max.add(t), this;
  }
  expandByScalar(t) {
    return this.min.addScalar(-t), this.max.addScalar(t), this;
  }
  expandByObject(t, e = !1) {
    t.updateWorldMatrix(!1, !1);
    const n = t.geometry;
    if (void 0 !== n) {
      const i = n.getAttribute("position");
      if (!0 === e && void 0 !== i && !0 !== t.isInstancedMesh)
        for (let e = 0, n = i.count; n > e; e++)
          !0 === t.isMesh
            ? t.getVertexPosition(e, ke)
            : ke.fromBufferAttribute(i, e),
            ke.applyMatrix4(t.matrixWorld),
            this.expandByPoint(ke);
      else
        void 0 !== t.boundingBox
          ? (null === t.boundingBox && t.computeBoundingBox(),
            We.copy(t.boundingBox))
          : (null === n.boundingBox && n.computeBoundingBox(),
            We.copy(n.boundingBox)),
          We.applyMatrix4(t.matrixWorld),
          this.union(We);
    }
    const i = t.children;
    for (let r = 0, a = i.length; a > r; r++) this.expandByObject(i[r], e);
    return this;
  }
  containsPoint(t) {
    return !(
      t.x < this.min.x ||
      t.x > this.max.x ||
      t.y < this.min.y ||
      t.y > this.max.y ||
      t.z < this.min.z ||
      t.z > this.max.z
    );
  }
  containsBox(t) {
    return !(
      this.min.x > t.min.x ||
      t.max.x > this.max.x ||
      this.min.y > t.min.y ||
      t.max.y > this.max.y ||
      this.min.z > t.min.z ||
      t.max.z > this.max.z
    );
  }
  getParameter(t, e) {
    return e.set(
      (t.x - this.min.x) / (this.max.x - this.min.x),
      (t.y - this.min.y) / (this.max.y - this.min.y),
      (t.z - this.min.z) / (this.max.z - this.min.z)
    );
  }
  intersectsBox(t) {
    return !(
      t.max.x < this.min.x ||
      t.min.x > this.max.x ||
      t.max.y < this.min.y ||
      t.min.y > this.max.y ||
      t.max.z < this.min.z ||
      t.min.z > this.max.z
    );
  }
  intersectsSphere(t) {
    return (
      this.clampPoint(t.center, ke),
      ke.distanceToSquared(t.center) <= t.radius * t.radius
    );
  }
  intersectsPlane(t) {
    let e, n;
    return (
      t.normal.x > 0
        ? ((e = t.normal.x * this.min.x), (n = t.normal.x * this.max.x))
        : ((e = t.normal.x * this.max.x), (n = t.normal.x * this.min.x)),
      t.normal.y > 0
        ? ((e += t.normal.y * this.min.y), (n += t.normal.y * this.max.y))
        : ((e += t.normal.y * this.max.y), (n += t.normal.y * this.min.y)),
      t.normal.z > 0
        ? ((e += t.normal.z * this.min.z), (n += t.normal.z * this.max.z))
        : ((e += t.normal.z * this.max.z), (n += t.normal.z * this.min.z)),
      e <= -t.constant && n >= -t.constant
    );
  }
  intersectsTriangle(t) {
    if (this.isEmpty()) return !1;
    this.getCenter(Je),
      $e.subVectors(this.max, Je),
      Xe.subVectors(t.a, Je),
      je.subVectors(t.b, Je),
      qe.subVectors(t.c, Je),
      Ye.subVectors(je, Xe),
      Ke.subVectors(qe, je),
      Ze.subVectors(Xe, qe);
    let e = [
      0,
      -Ye.z,
      Ye.y,
      0,
      -Ke.z,
      Ke.y,
      0,
      -Ze.z,
      Ze.y,
      Ye.z,
      0,
      -Ye.x,
      Ke.z,
      0,
      -Ke.x,
      Ze.z,
      0,
      -Ze.x,
      -Ye.y,
      Ye.x,
      0,
      -Ke.y,
      Ke.x,
      0,
      -Ze.y,
      Ze.x,
      0,
    ];
    return (
      !!en(e, Xe, je, qe, $e) &&
      ((e = [1, 0, 0, 0, 1, 0, 0, 0, 1]),
      !!en(e, Xe, je, qe, $e) &&
        (Qe.crossVectors(Ye, Ke),
        (e = [Qe.x, Qe.y, Qe.z]),
        en(e, Xe, je, qe, $e)))
    );
  }
  clampPoint(t, e) {
    return e.copy(t).clamp(this.min, this.max);
  }
  distanceToPoint(t) {
    return this.clampPoint(t, ke).distanceTo(t);
  }
  getBoundingSphere(t) {
    return (
      this.isEmpty()
        ? t.makeEmpty()
        : (this.getCenter(t.center),
          (t.radius = 0.5 * this.getSize(ke).length())),
      t
    );
  }
  intersect(t) {
    return (
      this.min.max(t.min),
      this.max.min(t.max),
      this.isEmpty() && this.makeEmpty(),
      this
    );
  }
  union(t) {
    return this.min.min(t.min), this.max.max(t.max), this;
  }
  applyMatrix4(t) {
    return (
      this.isEmpty() ||
        (Ge[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(t),
        Ge[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(t),
        Ge[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(t),
        Ge[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(t),
        Ge[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(t),
        Ge[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(t),
        Ge[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(t),
        Ge[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(t),
        this.setFromPoints(Ge)),
      this
    );
  }
  translate(t) {
    return this.min.add(t), this.max.add(t), this;
  }
  equals(t) {
    return t.min.equals(this.min) && t.max.equals(this.max);
  }
}
const Ge = [
    new Be(),
    new Be(),
    new Be(),
    new Be(),
    new Be(),
    new Be(),
    new Be(),
    new Be(),
  ],
  ke = new Be(),
  We = new Ve(),
  Xe = new Be(),
  je = new Be(),
  qe = new Be(),
  Ye = new Be(),
  Ke = new Be(),
  Ze = new Be(),
  Je = new Be(),
  $e = new Be(),
  Qe = new Be(),
  tn = new Be();
function en(t, e, n, i, r) {
  for (let a = 0, s = t.length - 3; s >= a; a += 3) {
    tn.fromArray(t, a);
    const s =
        r.x * Math.abs(tn.x) + r.y * Math.abs(tn.y) + r.z * Math.abs(tn.z),
      o = e.dot(tn),
      l = n.dot(tn),
      c = i.dot(tn);
    if (Math.max(-Math.max(o, l, c), Math.min(o, l, c)) > s) return !1;
  }
  return !0;
}
const nn = new Ve(),
  rn = new Be(),
  an = new Be();
class sn {
  constructor(t = new Be(), e = -1) {
    (this.isSphere = !0), (this.center = t), (this.radius = e);
  }
  set(t, e) {
    return this.center.copy(t), (this.radius = e), this;
  }
  setFromPoints(t, e) {
    const n = this.center;
    void 0 !== e ? n.copy(e) : nn.setFromPoints(t).getCenter(n);
    let i = 0;
    for (let r = 0, a = t.length; a > r; r++)
      i = Math.max(i, n.distanceToSquared(t[r]));
    return (this.radius = Math.sqrt(i)), this;
  }
  copy(t) {
    return this.center.copy(t.center), (this.radius = t.radius), this;
  }
  isEmpty() {
    return 0 > this.radius;
  }
  makeEmpty() {
    return this.center.set(0, 0, 0), (this.radius = -1), this;
  }
  containsPoint(t) {
    return t.distanceToSquared(this.center) <= this.radius * this.radius;
  }
  distanceToPoint(t) {
    return t.distanceTo(this.center) - this.radius;
  }
  intersectsSphere(t) {
    const e = this.radius + t.radius;
    return t.center.distanceToSquared(this.center) <= e * e;
  }
  intersectsBox(t) {
    return t.intersectsSphere(this);
  }
  intersectsPlane(t) {
    return Math.abs(t.distanceToPoint(this.center)) <= this.radius;
  }
  clampPoint(t, e) {
    const n = this.center.distanceToSquared(t);
    return (
      e.copy(t),
      n > this.radius * this.radius &&
        (e.sub(this.center).normalize(),
        e.multiplyScalar(this.radius).add(this.center)),
      e
    );
  }
  getBoundingBox(t) {
    return this.isEmpty()
      ? (t.makeEmpty(), t)
      : (t.set(this.center, this.center), t.expandByScalar(this.radius), t);
  }
  applyMatrix4(t) {
    return (
      this.center.applyMatrix4(t),
      (this.radius = this.radius * t.getMaxScaleOnAxis()),
      this
    );
  }
  translate(t) {
    return this.center.add(t), this;
  }
  expandByPoint(t) {
    if (this.isEmpty()) return this.center.copy(t), (this.radius = 0), this;
    rn.subVectors(t, this.center);
    const e = rn.lengthSq();
    if (e > this.radius * this.radius) {
      const t = Math.sqrt(e),
        n = 0.5 * (t - this.radius);
      this.center.addScaledVector(rn, n / t), (this.radius += n);
    }
    return this;
  }
  union(t) {
    return t.isEmpty()
      ? this
      : this.isEmpty()
      ? (this.copy(t), this)
      : (!0 === this.center.equals(t.center)
          ? (this.radius = Math.max(this.radius, t.radius))
          : (an.subVectors(t.center, this.center).setLength(t.radius),
            this.expandByPoint(rn.copy(t.center).add(an)),
            this.expandByPoint(rn.copy(t.center).sub(an))),
        this);
  }
  equals(t) {
    return t.center.equals(this.center) && t.radius === this.radius;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const on = new Be(),
  ln = new Be(),
  cn = new Be(),
  hn = new Be(),
  un = new Be(),
  dn = new Be(),
  pn = new Be();
class fn {
  constructor(t = new Be(), e = new Be(0, 0, -1)) {
    (this.origin = t), (this.direction = e);
  }
  set(t, e) {
    return this.origin.copy(t), this.direction.copy(e), this;
  }
  copy(t) {
    return this.origin.copy(t.origin), this.direction.copy(t.direction), this;
  }
  at(t, e) {
    return e.copy(this.origin).addScaledVector(this.direction, t);
  }
  lookAt(t) {
    return this.direction.copy(t).sub(this.origin).normalize(), this;
  }
  recast(t) {
    return this.origin.copy(this.at(t, on)), this;
  }
  closestPointToPoint(t, e) {
    e.subVectors(t, this.origin);
    const n = e.dot(this.direction);
    return 0 > n
      ? e.copy(this.origin)
      : e.copy(this.origin).addScaledVector(this.direction, n);
  }
  distanceToPoint(t) {
    return Math.sqrt(this.distanceSqToPoint(t));
  }
  distanceSqToPoint(t) {
    const e = on.subVectors(t, this.origin).dot(this.direction);
    return 0 > e
      ? this.origin.distanceToSquared(t)
      : (on.copy(this.origin).addScaledVector(this.direction, e),
        on.distanceToSquared(t));
  }
  distanceSqToSegment(t, e, n, i) {
    ln.copy(t).add(e).multiplyScalar(0.5),
      cn.copy(e).sub(t).normalize(),
      hn.copy(this.origin).sub(ln);
    const r = 0.5 * t.distanceTo(e),
      a = -this.direction.dot(cn),
      s = hn.dot(this.direction),
      o = -hn.dot(cn),
      l = hn.lengthSq(),
      c = Math.abs(1 - a * a);
    let h, u, d, p;
    if (c > 0)
      if (((h = a * o - s), (u = a * s - o), (p = r * c), 0 > h))
        u > -p
          ? u > p
            ? ((h = Math.max(0, -(a * r + s))),
              (u = h > 0 ? r : Math.min(Math.max(-r, -o), r)),
              (d = -h * h + u * (u + 2 * o) + l))
            : ((h = 0),
              (u = Math.min(Math.max(-r, -o), r)),
              (d = u * (u + 2 * o) + l))
          : ((h = Math.max(0, -(-a * r + s))),
            (u = h > 0 ? -r : Math.min(Math.max(-r, -o), r)),
            (d = -h * h + u * (u + 2 * o) + l));
      else if (-p > u)
        (u = -r),
          (h = Math.max(0, -(a * u + s))),
          (d = -h * h + u * (u + 2 * o) + l);
      else if (u > p)
        (u = r),
          (h = Math.max(0, -(a * u + s))),
          (d = -h * h + u * (u + 2 * o) + l);
      else {
        const t = 1 / c;
        (h *= t),
          (u *= t),
          (d = h * (h + a * u + 2 * s) + u * (a * h + u + 2 * o) + l);
      }
    else
      (u = a > 0 ? -r : r),
        (h = Math.max(0, -(a * u + s))),
        (d = -h * h + u * (u + 2 * o) + l);
    return (
      n && n.copy(this.origin).addScaledVector(this.direction, h),
      i && i.copy(ln).addScaledVector(cn, u),
      d
    );
  }
  intersectSphere(t, e) {
    on.subVectors(t.center, this.origin);
    const n = on.dot(this.direction),
      i = on.dot(on) - n * n,
      r = t.radius * t.radius;
    if (i > r) return null;
    const a = Math.sqrt(r - i),
      s = n - a,
      o = n + a;
    return 0 > o ? null : 0 > s ? this.at(o, e) : this.at(s, e);
  }
  intersectsSphere(t) {
    return this.distanceSqToPoint(t.center) <= t.radius * t.radius;
  }
  distanceToPlane(t) {
    const e = t.normal.dot(this.direction);
    if (0 === e) return 0 === t.distanceToPoint(this.origin) ? 0 : null;
    const n = -(this.origin.dot(t.normal) + t.constant) / e;
    return 0 > n ? null : n;
  }
  intersectPlane(t, e) {
    const n = this.distanceToPlane(t);
    return null === n ? null : this.at(n, e);
  }
  intersectsPlane(t) {
    const e = t.distanceToPoint(this.origin);
    return 0 === e || 0 > t.normal.dot(this.direction) * e;
  }
  intersectBox(t, e) {
    let n, i, r, a, s, o;
    const l = 1 / this.direction.x,
      c = 1 / this.direction.y,
      h = 1 / this.direction.z,
      u = this.origin;
    return (
      0 > l
        ? ((n = (t.max.x - u.x) * l), (i = (t.min.x - u.x) * l))
        : ((n = (t.min.x - u.x) * l), (i = (t.max.x - u.x) * l)),
      0 > c
        ? ((r = (t.max.y - u.y) * c), (a = (t.min.y - u.y) * c))
        : ((r = (t.min.y - u.y) * c), (a = (t.max.y - u.y) * c)),
      n > a || r > i
        ? null
        : ((r > n || isNaN(n)) && (n = r),
          (i > a || isNaN(i)) && (i = a),
          0 > h
            ? ((s = (t.max.z - u.z) * h), (o = (t.min.z - u.z) * h))
            : ((s = (t.min.z - u.z) * h), (o = (t.max.z - u.z) * h)),
          n > o || s > i
            ? null
            : ((s > n || n != n) && (n = s),
              (i > o || i != i) && (i = o),
              0 > i ? null : this.at(0 > n ? i : n, e)))
    );
  }
  intersectsBox(t) {
    return null !== this.intersectBox(t, on);
  }
  intersectTriangle(t, e, n, i, r) {
    un.subVectors(e, t), dn.subVectors(n, t), pn.crossVectors(un, dn);
    let a,
      s = this.direction.dot(pn);
    if (s > 0) {
      if (i) return null;
      a = 1;
    } else {
      if (s >= 0) return null;
      (a = -1), (s = -s);
    }
    hn.subVectors(this.origin, t);
    const o = a * this.direction.dot(dn.crossVectors(hn, dn));
    if (0 > o) return null;
    const l = a * this.direction.dot(un.cross(hn));
    if (0 > l) return null;
    if (o + l > s) return null;
    const c = -a * hn.dot(pn);
    return 0 > c ? null : this.at(c / s, r);
  }
  applyMatrix4(t) {
    return (
      this.origin.applyMatrix4(t), this.direction.transformDirection(t), this
    );
  }
  equals(t) {
    return t.origin.equals(this.origin) && t.direction.equals(this.direction);
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
class mn {
  constructor(t, e, n, i, r, a, s, o, l, c, h, u, d, p, f, m) {
    (mn.prototype.isMatrix4 = !0),
      (this.elements = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]),
      void 0 !== t && this.set(t, e, n, i, r, a, s, o, l, c, h, u, d, p, f, m);
  }
  set(t, e, n, i, r, a, s, o, l, c, h, u, d, p, f, m) {
    const g = this.elements;
    return (
      (g[0] = t),
      (g[4] = e),
      (g[8] = n),
      (g[12] = i),
      (g[1] = r),
      (g[5] = a),
      (g[9] = s),
      (g[13] = o),
      (g[2] = l),
      (g[6] = c),
      (g[10] = h),
      (g[14] = u),
      (g[3] = d),
      (g[7] = p),
      (g[11] = f),
      (g[15] = m),
      this
    );
  }
  identity() {
    return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
  }
  clone() {
    return new mn().fromArray(this.elements);
  }
  copy(t) {
    const e = this.elements,
      n = t.elements;
    return (
      (e[0] = n[0]),
      (e[1] = n[1]),
      (e[2] = n[2]),
      (e[3] = n[3]),
      (e[4] = n[4]),
      (e[5] = n[5]),
      (e[6] = n[6]),
      (e[7] = n[7]),
      (e[8] = n[8]),
      (e[9] = n[9]),
      (e[10] = n[10]),
      (e[11] = n[11]),
      (e[12] = n[12]),
      (e[13] = n[13]),
      (e[14] = n[14]),
      (e[15] = n[15]),
      this
    );
  }
  copyPosition(t) {
    const e = this.elements,
      n = t.elements;
    return (e[12] = n[12]), (e[13] = n[13]), (e[14] = n[14]), this;
  }
  setFromMatrix3(t) {
    const e = t.elements;
    return (
      this.set(
        e[0],
        e[3],
        e[6],
        0,
        e[1],
        e[4],
        e[7],
        0,
        e[2],
        e[5],
        e[8],
        0,
        0,
        0,
        0,
        1
      ),
      this
    );
  }
  extractBasis(t, e, n) {
    return (
      t.setFromMatrixColumn(this, 0),
      e.setFromMatrixColumn(this, 1),
      n.setFromMatrixColumn(this, 2),
      this
    );
  }
  makeBasis(t, e, n) {
    return (
      this.set(
        t.x,
        e.x,
        n.x,
        0,
        t.y,
        e.y,
        n.y,
        0,
        t.z,
        e.z,
        n.z,
        0,
        0,
        0,
        0,
        1
      ),
      this
    );
  }
  extractRotation(t) {
    const e = this.elements,
      n = t.elements,
      i = 1 / gn.setFromMatrixColumn(t, 0).length(),
      r = 1 / gn.setFromMatrixColumn(t, 1).length(),
      a = 1 / gn.setFromMatrixColumn(t, 2).length();
    return (
      (e[0] = n[0] * i),
      (e[1] = n[1] * i),
      (e[2] = n[2] * i),
      (e[3] = 0),
      (e[4] = n[4] * r),
      (e[5] = n[5] * r),
      (e[6] = n[6] * r),
      (e[7] = 0),
      (e[8] = n[8] * a),
      (e[9] = n[9] * a),
      (e[10] = n[10] * a),
      (e[11] = 0),
      (e[12] = 0),
      (e[13] = 0),
      (e[14] = 0),
      (e[15] = 1),
      this
    );
  }
  makeRotationFromEuler(t) {
    const e = this.elements,
      n = t.x,
      i = t.y,
      r = t.z,
      a = Math.cos(n),
      s = Math.sin(n),
      o = Math.cos(i),
      l = Math.sin(i),
      c = Math.cos(r),
      h = Math.sin(r);
    if ("XYZ" === t.order) {
      const t = a * c,
        n = a * h,
        i = s * c,
        r = s * h;
      (e[0] = o * c),
        (e[4] = -o * h),
        (e[8] = l),
        (e[1] = n + i * l),
        (e[5] = t - r * l),
        (e[9] = -s * o),
        (e[2] = r - t * l),
        (e[6] = i + n * l),
        (e[10] = a * o);
    } else if ("YXZ" === t.order) {
      const t = o * c,
        n = o * h,
        i = l * c,
        r = l * h;
      (e[0] = t + r * s),
        (e[4] = i * s - n),
        (e[8] = a * l),
        (e[1] = a * h),
        (e[5] = a * c),
        (e[9] = -s),
        (e[2] = n * s - i),
        (e[6] = r + t * s),
        (e[10] = a * o);
    } else if ("ZXY" === t.order) {
      const t = o * c,
        n = o * h,
        i = l * c,
        r = l * h;
      (e[0] = t - r * s),
        (e[4] = -a * h),
        (e[8] = i + n * s),
        (e[1] = n + i * s),
        (e[5] = a * c),
        (e[9] = r - t * s),
        (e[2] = -a * l),
        (e[6] = s),
        (e[10] = a * o);
    } else if ("ZYX" === t.order) {
      const t = a * c,
        n = a * h,
        i = s * c,
        r = s * h;
      (e[0] = o * c),
        (e[4] = i * l - n),
        (e[8] = t * l + r),
        (e[1] = o * h),
        (e[5] = r * l + t),
        (e[9] = n * l - i),
        (e[2] = -l),
        (e[6] = s * o),
        (e[10] = a * o);
    } else if ("YZX" === t.order) {
      const t = a * o,
        n = a * l,
        i = s * o,
        r = s * l;
      (e[0] = o * c),
        (e[4] = r - t * h),
        (e[8] = i * h + n),
        (e[1] = h),
        (e[5] = a * c),
        (e[9] = -s * c),
        (e[2] = -l * c),
        (e[6] = n * h + i),
        (e[10] = t - r * h);
    } else if ("XZY" === t.order) {
      const t = a * o,
        n = a * l,
        i = s * o,
        r = s * l;
      (e[0] = o * c),
        (e[4] = -h),
        (e[8] = l * c),
        (e[1] = t * h + r),
        (e[5] = a * c),
        (e[9] = n * h - i),
        (e[2] = i * h - n),
        (e[6] = s * c),
        (e[10] = r * h + t);
    }
    return (
      (e[3] = 0),
      (e[7] = 0),
      (e[11] = 0),
      (e[12] = 0),
      (e[13] = 0),
      (e[14] = 0),
      (e[15] = 1),
      this
    );
  }
  makeRotationFromQuaternion(t) {
    return this.compose(vn, t, xn);
  }
  lookAt(t, e, n) {
    const i = this.elements;
    return (
      yn.subVectors(t, e),
      0 === yn.lengthSq() && (yn.z = 1),
      yn.normalize(),
      Mn.crossVectors(n, yn),
      0 === Mn.lengthSq() &&
        (1 === Math.abs(n.z) ? (yn.x += 1e-4) : (yn.z += 1e-4),
        yn.normalize(),
        Mn.crossVectors(n, yn)),
      Mn.normalize(),
      Sn.crossVectors(yn, Mn),
      (i[0] = Mn.x),
      (i[4] = Sn.x),
      (i[8] = yn.x),
      (i[1] = Mn.y),
      (i[5] = Sn.y),
      (i[9] = yn.y),
      (i[2] = Mn.z),
      (i[6] = Sn.z),
      (i[10] = yn.z),
      this
    );
  }
  multiply(t) {
    return this.multiplyMatrices(this, t);
  }
  premultiply(t) {
    return this.multiplyMatrices(t, this);
  }
  multiplyMatrices(t, e) {
    const n = t.elements,
      i = e.elements,
      r = this.elements,
      a = n[0],
      s = n[4],
      o = n[8],
      l = n[12],
      c = n[1],
      h = n[5],
      u = n[9],
      d = n[13],
      p = n[2],
      f = n[6],
      m = n[10],
      g = n[14],
      _ = n[3],
      v = n[7],
      x = n[11],
      M = n[15],
      S = i[0],
      y = i[4],
      E = i[8],
      T = i[12],
      b = i[1],
      A = i[5],
      w = i[9],
      R = i[13],
      C = i[2],
      P = i[6],
      L = i[10],
      U = i[14],
      D = i[3],
      I = i[7],
      N = i[11],
      O = i[15];
    return (
      (r[0] = a * S + s * b + o * C + l * D),
      (r[4] = a * y + s * A + o * P + l * I),
      (r[8] = a * E + s * w + o * L + l * N),
      (r[12] = a * T + s * R + o * U + l * O),
      (r[1] = c * S + h * b + u * C + d * D),
      (r[5] = c * y + h * A + u * P + d * I),
      (r[9] = c * E + h * w + u * L + d * N),
      (r[13] = c * T + h * R + u * U + d * O),
      (r[2] = p * S + f * b + m * C + g * D),
      (r[6] = p * y + f * A + m * P + g * I),
      (r[10] = p * E + f * w + m * L + g * N),
      (r[14] = p * T + f * R + m * U + g * O),
      (r[3] = _ * S + v * b + x * C + M * D),
      (r[7] = _ * y + v * A + x * P + M * I),
      (r[11] = _ * E + v * w + x * L + M * N),
      (r[15] = _ * T + v * R + x * U + M * O),
      this
    );
  }
  multiplyScalar(t) {
    const e = this.elements;
    return (
      (e[0] *= t),
      (e[4] *= t),
      (e[8] *= t),
      (e[12] *= t),
      (e[1] *= t),
      (e[5] *= t),
      (e[9] *= t),
      (e[13] *= t),
      (e[2] *= t),
      (e[6] *= t),
      (e[10] *= t),
      (e[14] *= t),
      (e[3] *= t),
      (e[7] *= t),
      (e[11] *= t),
      (e[15] *= t),
      this
    );
  }
  determinant() {
    const t = this.elements,
      e = t[0],
      n = t[4],
      i = t[8],
      r = t[12],
      a = t[1],
      s = t[5],
      o = t[9],
      l = t[13],
      c = t[2],
      h = t[6],
      u = t[10],
      d = t[14];
    return (
      t[3] *
        (+r * o * h -
          i * l * h -
          r * s * u +
          n * l * u +
          i * s * d -
          n * o * d) +
      t[7] *
        (+e * o * d -
          e * l * u +
          r * a * u -
          i * a * d +
          i * l * c -
          r * o * c) +
      t[11] *
        (+e * l * h -
          e * s * d -
          r * a * h +
          n * a * d +
          r * s * c -
          n * l * c) +
      t[15] *
        (-i * s * c - e * o * h + e * s * u + i * a * h - n * a * u + n * o * c)
    );
  }
  transpose() {
    const t = this.elements;
    let e;
    return (
      (e = t[1]),
      (t[1] = t[4]),
      (t[4] = e),
      (e = t[2]),
      (t[2] = t[8]),
      (t[8] = e),
      (e = t[6]),
      (t[6] = t[9]),
      (t[9] = e),
      (e = t[3]),
      (t[3] = t[12]),
      (t[12] = e),
      (e = t[7]),
      (t[7] = t[13]),
      (t[13] = e),
      (e = t[11]),
      (t[11] = t[14]),
      (t[14] = e),
      this
    );
  }
  setPosition(t, e, n) {
    const i = this.elements;
    return (
      t.isVector3
        ? ((i[12] = t.x), (i[13] = t.y), (i[14] = t.z))
        : ((i[12] = t), (i[13] = e), (i[14] = n)),
      this
    );
  }
  invert() {
    const t = this.elements,
      e = t[0],
      n = t[1],
      i = t[2],
      r = t[3],
      a = t[4],
      s = t[5],
      o = t[6],
      l = t[7],
      c = t[8],
      h = t[9],
      u = t[10],
      d = t[11],
      p = t[12],
      f = t[13],
      m = t[14],
      g = t[15],
      _ = h * m * l - f * u * l + f * o * d - s * m * d - h * o * g + s * u * g,
      v = p * u * l - c * m * l - p * o * d + a * m * d + c * o * g - a * u * g,
      x = c * f * l - p * h * l + p * s * d - a * f * d - c * s * g + a * h * g,
      M = p * h * o - c * f * o - p * s * u + a * f * u + c * s * m - a * h * m,
      S = e * _ + n * v + i * x + r * M;
    if (0 === S)
      return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    const y = 1 / S;
    return (
      (t[0] = _ * y),
      (t[1] =
        (f * u * r -
          h * m * r -
          f * i * d +
          n * m * d +
          h * i * g -
          n * u * g) *
        y),
      (t[2] =
        (s * m * r -
          f * o * r +
          f * i * l -
          n * m * l -
          s * i * g +
          n * o * g) *
        y),
      (t[3] =
        (h * o * r -
          s * u * r -
          h * i * l +
          n * u * l +
          s * i * d -
          n * o * d) *
        y),
      (t[4] = v * y),
      (t[5] =
        (c * m * r -
          p * u * r +
          p * i * d -
          e * m * d -
          c * i * g +
          e * u * g) *
        y),
      (t[6] =
        (p * o * r -
          a * m * r -
          p * i * l +
          e * m * l +
          a * i * g -
          e * o * g) *
        y),
      (t[7] =
        (a * u * r -
          c * o * r +
          c * i * l -
          e * u * l -
          a * i * d +
          e * o * d) *
        y),
      (t[8] = x * y),
      (t[9] =
        (p * h * r -
          c * f * r -
          p * n * d +
          e * f * d +
          c * n * g -
          e * h * g) *
        y),
      (t[10] =
        (a * f * r -
          p * s * r +
          p * n * l -
          e * f * l -
          a * n * g +
          e * s * g) *
        y),
      (t[11] =
        (c * s * r -
          a * h * r -
          c * n * l +
          e * h * l +
          a * n * d -
          e * s * d) *
        y),
      (t[12] = M * y),
      (t[13] =
        (c * f * i -
          p * h * i +
          p * n * u -
          e * f * u -
          c * n * m +
          e * h * m) *
        y),
      (t[14] =
        (p * s * i -
          a * f * i -
          p * n * o +
          e * f * o +
          a * n * m -
          e * s * m) *
        y),
      (t[15] =
        (a * h * i -
          c * s * i +
          c * n * o -
          e * h * o -
          a * n * u +
          e * s * u) *
        y),
      this
    );
  }
  scale(t) {
    const e = this.elements,
      n = t.x,
      i = t.y,
      r = t.z;
    return (
      (e[0] *= n),
      (e[4] *= i),
      (e[8] *= r),
      (e[1] *= n),
      (e[5] *= i),
      (e[9] *= r),
      (e[2] *= n),
      (e[6] *= i),
      (e[10] *= r),
      (e[3] *= n),
      (e[7] *= i),
      (e[11] *= r),
      this
    );
  }
  getMaxScaleOnAxis() {
    const t = this.elements,
      e = t[0] * t[0] + t[1] * t[1] + t[2] * t[2],
      n = t[4] * t[4] + t[5] * t[5] + t[6] * t[6],
      i = t[8] * t[8] + t[9] * t[9] + t[10] * t[10];
    return Math.sqrt(Math.max(e, n, i));
  }
  makeTranslation(t, e, n) {
    return (
      t.isVector3
        ? this.set(1, 0, 0, t.x, 0, 1, 0, t.y, 0, 0, 1, t.z, 0, 0, 0, 1)
        : this.set(1, 0, 0, t, 0, 1, 0, e, 0, 0, 1, n, 0, 0, 0, 1),
      this
    );
  }
  makeRotationX(t) {
    const e = Math.cos(t),
      n = Math.sin(t);
    return this.set(1, 0, 0, 0, 0, e, -n, 0, 0, n, e, 0, 0, 0, 0, 1), this;
  }
  makeRotationY(t) {
    const e = Math.cos(t),
      n = Math.sin(t);
    return this.set(e, 0, n, 0, 0, 1, 0, 0, -n, 0, e, 0, 0, 0, 0, 1), this;
  }
  makeRotationZ(t) {
    const e = Math.cos(t),
      n = Math.sin(t);
    return this.set(e, -n, 0, 0, n, e, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
  }
  makeRotationAxis(t, e) {
    const n = Math.cos(e),
      i = Math.sin(e),
      r = 1 - n,
      a = t.x,
      s = t.y,
      o = t.z,
      l = r * a,
      c = r * s;
    return (
      this.set(
        l * a + n,
        l * s - i * o,
        l * o + i * s,
        0,
        l * s + i * o,
        c * s + n,
        c * o - i * a,
        0,
        l * o - i * s,
        c * o + i * a,
        r * o * o + n,
        0,
        0,
        0,
        0,
        1
      ),
      this
    );
  }
  makeScale(t, e, n) {
    return this.set(t, 0, 0, 0, 0, e, 0, 0, 0, 0, n, 0, 0, 0, 0, 1), this;
  }
  makeShear(t, e, n, i, r, a) {
    return this.set(1, n, r, 0, t, 1, a, 0, e, i, 1, 0, 0, 0, 0, 1), this;
  }
  compose(t, e, n) {
    const i = this.elements,
      r = e._x,
      a = e._y,
      s = e._z,
      o = e._w,
      l = r + r,
      c = a + a,
      h = s + s,
      u = r * l,
      d = r * c,
      p = r * h,
      f = a * c,
      m = a * h,
      g = s * h,
      _ = o * l,
      v = o * c,
      x = o * h,
      M = n.x,
      S = n.y,
      y = n.z;
    return (
      (i[0] = (1 - (f + g)) * M),
      (i[1] = (d + x) * M),
      (i[2] = (p - v) * M),
      (i[3] = 0),
      (i[4] = (d - x) * S),
      (i[5] = (1 - (u + g)) * S),
      (i[6] = (m + _) * S),
      (i[7] = 0),
      (i[8] = (p + v) * y),
      (i[9] = (m - _) * y),
      (i[10] = (1 - (u + f)) * y),
      (i[11] = 0),
      (i[12] = t.x),
      (i[13] = t.y),
      (i[14] = t.z),
      (i[15] = 1),
      this
    );
  }
  decompose(t, e, n) {
    const i = this.elements;
    let r = gn.set(i[0], i[1], i[2]).length();
    const a = gn.set(i[4], i[5], i[6]).length(),
      s = gn.set(i[8], i[9], i[10]).length();
    0 > this.determinant() && (r = -r),
      (t.x = i[12]),
      (t.y = i[13]),
      (t.z = i[14]),
      _n.copy(this);
    const o = 1 / r,
      l = 1 / a,
      c = 1 / s;
    return (
      (_n.elements[0] *= o),
      (_n.elements[1] *= o),
      (_n.elements[2] *= o),
      (_n.elements[4] *= l),
      (_n.elements[5] *= l),
      (_n.elements[6] *= l),
      (_n.elements[8] *= c),
      (_n.elements[9] *= c),
      (_n.elements[10] *= c),
      e.setFromRotationMatrix(_n),
      (n.x = r),
      (n.y = a),
      (n.z = s),
      this
    );
  }
  makePerspective(t, e, n, i, r, a, s = 2e3) {
    const o = this.elements,
      l = (2 * r) / (e - t),
      c = (2 * r) / (n - i),
      h = (e + t) / (e - t),
      u = (n + i) / (n - i);
    let d, p;
    if (s === te) (d = -(a + r) / (a - r)), (p = (-2 * a * r) / (a - r));
    else {
      if (s !== ee)
        throw Error(
          "THREE.Matrix4.makePerspective(): Invalid coordinate system: " + s
        );
      (d = -a / (a - r)), (p = (-a * r) / (a - r));
    }
    return (
      (o[0] = l),
      (o[4] = 0),
      (o[8] = h),
      (o[12] = 0),
      (o[1] = 0),
      (o[5] = c),
      (o[9] = u),
      (o[13] = 0),
      (o[2] = 0),
      (o[6] = 0),
      (o[10] = d),
      (o[14] = p),
      (o[3] = 0),
      (o[7] = 0),
      (o[11] = -1),
      (o[15] = 0),
      this
    );
  }
  makeOrthographic(t, e, n, i, r, a, s = 2e3) {
    const o = this.elements,
      l = 1 / (e - t),
      c = 1 / (n - i),
      h = 1 / (a - r),
      u = (e + t) * l,
      d = (n + i) * c;
    let p, f;
    if (s === te) (p = (a + r) * h), (f = -2 * h);
    else {
      if (s !== ee)
        throw Error(
          "THREE.Matrix4.makeOrthographic(): Invalid coordinate system: " + s
        );
      (p = r * h), (f = -1 * h);
    }
    return (
      (o[0] = 2 * l),
      (o[4] = 0),
      (o[8] = 0),
      (o[12] = -u),
      (o[1] = 0),
      (o[5] = 2 * c),
      (o[9] = 0),
      (o[13] = -d),
      (o[2] = 0),
      (o[6] = 0),
      (o[10] = f),
      (o[14] = -p),
      (o[3] = 0),
      (o[7] = 0),
      (o[11] = 0),
      (o[15] = 1),
      this
    );
  }
  equals(t) {
    const e = this.elements,
      n = t.elements;
    for (let i = 0; 16 > i; i++) if (e[i] !== n[i]) return !1;
    return !0;
  }
  fromArray(t, e = 0) {
    for (let n = 0; 16 > n; n++) this.elements[n] = t[n + e];
    return this;
  }
  toArray(t = [], e = 0) {
    const n = this.elements;
    return (
      (t[e] = n[0]),
      (t[e + 1] = n[1]),
      (t[e + 2] = n[2]),
      (t[e + 3] = n[3]),
      (t[e + 4] = n[4]),
      (t[e + 5] = n[5]),
      (t[e + 6] = n[6]),
      (t[e + 7] = n[7]),
      (t[e + 8] = n[8]),
      (t[e + 9] = n[9]),
      (t[e + 10] = n[10]),
      (t[e + 11] = n[11]),
      (t[e + 12] = n[12]),
      (t[e + 13] = n[13]),
      (t[e + 14] = n[14]),
      (t[e + 15] = n[15]),
      t
    );
  }
}
const gn = new Be(),
  _n = new mn(),
  vn = new Be(0, 0, 0),
  xn = new Be(1, 1, 1),
  Mn = new Be(),
  Sn = new Be(),
  yn = new Be(),
  En = new mn(),
  Tn = new Fe();
class bn {
  constructor(t = 0, e = 0, n = 0, i = bn.DEFAULT_ORDER) {
    (this.isEuler = !0),
      (this._x = t),
      (this._y = e),
      (this._z = n),
      (this._order = i);
  }
  get x() {
    return this._x;
  }
  set x(t) {
    (this._x = t), this._onChangeCallback();
  }
  get y() {
    return this._y;
  }
  set y(t) {
    (this._y = t), this._onChangeCallback();
  }
  get z() {
    return this._z;
  }
  set z(t) {
    (this._z = t), this._onChangeCallback();
  }
  get order() {
    return this._order;
  }
  set order(t) {
    (this._order = t), this._onChangeCallback();
  }
  set(t, e, n, i = this._order) {
    return (
      (this._x = t),
      (this._y = e),
      (this._z = n),
      (this._order = i),
      this._onChangeCallback(),
      this
    );
  }
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._order);
  }
  copy(t) {
    return (
      (this._x = t._x),
      (this._y = t._y),
      (this._z = t._z),
      (this._order = t._order),
      this._onChangeCallback(),
      this
    );
  }
  setFromRotationMatrix(t, e = this._order, n = !0) {
    const i = t.elements,
      r = i[0],
      a = i[4],
      s = i[8],
      o = i[1],
      l = i[5],
      c = i[9],
      h = i[2],
      u = i[6],
      d = i[10];
    switch (e) {
      case "XYZ":
        (this._y = Math.asin(oe(s, -1, 1))),
          0.9999999 > Math.abs(s)
            ? ((this._x = Math.atan2(-c, d)), (this._z = Math.atan2(-a, r)))
            : ((this._x = Math.atan2(u, l)), (this._z = 0));
        break;
      case "YXZ":
        (this._x = Math.asin(-oe(c, -1, 1))),
          0.9999999 > Math.abs(c)
            ? ((this._y = Math.atan2(s, d)), (this._z = Math.atan2(o, l)))
            : ((this._y = Math.atan2(-h, r)), (this._z = 0));
        break;
      case "ZXY":
        (this._x = Math.asin(oe(u, -1, 1))),
          0.9999999 > Math.abs(u)
            ? ((this._y = Math.atan2(-h, d)), (this._z = Math.atan2(-a, l)))
            : ((this._y = 0), (this._z = Math.atan2(o, r)));
        break;
      case "ZYX":
        (this._y = Math.asin(-oe(h, -1, 1))),
          0.9999999 > Math.abs(h)
            ? ((this._x = Math.atan2(u, d)), (this._z = Math.atan2(o, r)))
            : ((this._x = 0), (this._z = Math.atan2(-a, l)));
        break;
      case "YZX":
        (this._z = Math.asin(oe(o, -1, 1))),
          0.9999999 > Math.abs(o)
            ? ((this._x = Math.atan2(-c, l)), (this._y = Math.atan2(-h, r)))
            : ((this._x = 0), (this._y = Math.atan2(s, d)));
        break;
      case "XZY":
        (this._z = Math.asin(-oe(a, -1, 1))),
          0.9999999 > Math.abs(a)
            ? ((this._x = Math.atan2(u, l)), (this._y = Math.atan2(s, r)))
            : ((this._x = Math.atan2(-c, d)), (this._y = 0));
    }
    return (this._order = e), !0 === n && this._onChangeCallback(), this;
  }
  setFromQuaternion(t, e, n) {
    return (
      En.makeRotationFromQuaternion(t), this.setFromRotationMatrix(En, e, n)
    );
  }
  setFromVector3(t, e = this._order) {
    return this.set(t.x, t.y, t.z, e);
  }
  reorder(t) {
    return Tn.setFromEuler(this), this.setFromQuaternion(Tn, t);
  }
  equals(t) {
    return (
      t._x === this._x &&
      t._y === this._y &&
      t._z === this._z &&
      t._order === this._order
    );
  }
  fromArray(t) {
    return (
      (this._x = t[0]),
      (this._y = t[1]),
      (this._z = t[2]),
      void 0 !== t[3] && (this._order = t[3]),
      this._onChangeCallback(),
      this
    );
  }
  toArray(t = [], e = 0) {
    return (
      (t[e] = this._x),
      (t[e + 1] = this._y),
      (t[e + 2] = this._z),
      (t[e + 3] = this._order),
      t
    );
  }
  _onChange(t) {
    return (this._onChangeCallback = t), this;
  }
  _onChangeCallback() {}
  *[Symbol.iterator]() {
    yield this._x, yield this._y, yield this._z, yield this._order;
  }
}
bn.DEFAULT_ORDER = "XYZ";
class An {
  constructor() {
    this.mask = 1;
  }
  set(t) {
    this.mask = (1 << t) >>> 0;
  }
  enable(t) {
    this.mask |= 1 << t;
  }
  enableAll() {
    this.mask = -1;
  }
  toggle(t) {
    this.mask ^= 1 << t;
  }
  disable(t) {
    this.mask &= ~(1 << t);
  }
  disableAll() {
    this.mask = 0;
  }
  test(t) {
    return !!(this.mask & t.mask);
  }
  isEnabled(t) {
    return !!(this.mask & (1 << t));
  }
}
let wn = 0;
const Rn = new Be(),
  Cn = new Fe(),
  Pn = new mn(),
  Ln = new Be(),
  Un = new Be(),
  Dn = new Be(),
  In = new Fe(),
  Nn = new Be(1, 0, 0),
  On = new Be(0, 1, 0),
  Fn = new Be(0, 0, 1),
  Bn = {
    type: "added",
  },
  zn = {
    type: "removed",
  },
  Hn = {
    type: "childadded",
    child: null,
  },
  Vn = {
    type: "childremoved",
    child: null,
  };
class Gn extends ne {
  constructor() {
    super(),
      (this.isObject3D = !0),
      Object.defineProperty(this, "id", {
        value: wn++,
      }),
      (this.uuid = se()),
      (this.name = ""),
      (this.type = "Object3D"),
      (this.parent = null),
      (this.children = []),
      (this.up = Gn.DEFAULT_UP.clone());
    const t = new Be(),
      e = new bn(),
      n = new Fe(),
      i = new Be(1, 1, 1);
    e._onChange(function () {
      n.setFromEuler(e, !1);
    }),
      n._onChange(function () {
        e.setFromQuaternion(n, void 0, !1);
      }),
      Object.defineProperties(this, {
        position: {
          configurable: !0,
          enumerable: !0,
          value: t,
        },
        rotation: {
          configurable: !0,
          enumerable: !0,
          value: e,
        },
        quaternion: {
          configurable: !0,
          enumerable: !0,
          value: n,
        },
        scale: {
          configurable: !0,
          enumerable: !0,
          value: i,
        },
        modelViewMatrix: {
          value: new mn(),
        },
        normalMatrix: {
          value: new de(),
        },
      }),
      (this.matrix = new mn()),
      (this.matrixWorld = new mn()),
      (this.matrixAutoUpdate = Gn.DEFAULT_MATRIX_AUTO_UPDATE),
      (this.matrixWorldAutoUpdate = Gn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE),
      (this.matrixWorldNeedsUpdate = !1),
      (this.layers = new An()),
      (this.visible = !0),
      (this.castShadow = !1),
      (this.receiveShadow = !1),
      (this.frustumCulled = !0),
      (this.renderOrder = 0),
      (this.animations = []),
      (this.userData = {});
  }
  onBeforeShadow() {}
  onAfterShadow() {}
  onBeforeRender() {}
  onAfterRender() {}
  applyMatrix4(t) {
    this.matrixAutoUpdate && this.updateMatrix(),
      this.matrix.premultiply(t),
      this.matrix.decompose(this.position, this.quaternion, this.scale);
  }
  applyQuaternion(t) {
    return this.quaternion.premultiply(t), this;
  }
  setRotationFromAxisAngle(t, e) {
    this.quaternion.setFromAxisAngle(t, e);
  }
  setRotationFromEuler(t) {
    this.quaternion.setFromEuler(t, !0);
  }
  setRotationFromMatrix(t) {
    this.quaternion.setFromRotationMatrix(t);
  }
  setRotationFromQuaternion(t) {
    this.quaternion.copy(t);
  }
  rotateOnAxis(t, e) {
    return Cn.setFromAxisAngle(t, e), this.quaternion.multiply(Cn), this;
  }
  rotateOnWorldAxis(t, e) {
    return Cn.setFromAxisAngle(t, e), this.quaternion.premultiply(Cn), this;
  }
  rotateX(t) {
    return this.rotateOnAxis(Nn, t);
  }
  rotateY(t) {
    return this.rotateOnAxis(On, t);
  }
  rotateZ(t) {
    return this.rotateOnAxis(Fn, t);
  }
  translateOnAxis(t, e) {
    return (
      Rn.copy(t).applyQuaternion(this.quaternion),
      this.position.add(Rn.multiplyScalar(e)),
      this
    );
  }
  translateX(t) {
    return this.translateOnAxis(Nn, t);
  }
  translateY(t) {
    return this.translateOnAxis(On, t);
  }
  translateZ(t) {
    return this.translateOnAxis(Fn, t);
  }
  localToWorld(t) {
    return this.updateWorldMatrix(!0, !1), t.applyMatrix4(this.matrixWorld);
  }
  worldToLocal(t) {
    return (
      this.updateWorldMatrix(!0, !1),
      t.applyMatrix4(Pn.copy(this.matrixWorld).invert())
    );
  }
  lookAt(t, e, n) {
    t.isVector3 ? Ln.copy(t) : Ln.set(t, e, n);
    const i = this.parent;
    this.updateWorldMatrix(!0, !1),
      Un.setFromMatrixPosition(this.matrixWorld),
      this.isCamera || this.isLight
        ? Pn.lookAt(Un, Ln, this.up)
        : Pn.lookAt(Ln, Un, this.up),
      this.quaternion.setFromRotationMatrix(Pn),
      i &&
        (Pn.extractRotation(i.matrixWorld),
        Cn.setFromRotationMatrix(Pn),
        this.quaternion.premultiply(Cn.invert()));
  }
  add(t) {
    if (arguments.length > 1) {
      for (let t = 0; arguments.length > t; t++) this.add(arguments[t]);
      return this;
    }
    return (
      t === this ||
        (t &&
          t.isObject3D &&
          (t.removeFromParent(),
          (t.parent = this),
          this.children.push(t),
          t.dispatchEvent(Bn),
          (Hn.child = t),
          this.dispatchEvent(Hn),
          (Hn.child = null))),
      this
    );
  }
  remove(t) {
    if (arguments.length > 1) {
      for (let t = 0; arguments.length > t; t++) this.remove(arguments[t]);
      return this;
    }
    const e = this.children.indexOf(t);
    return (
      -1 !== e &&
        ((t.parent = null),
        this.children.splice(e, 1),
        t.dispatchEvent(zn),
        (Vn.child = t),
        this.dispatchEvent(Vn),
        (Vn.child = null)),
      this
    );
  }
  removeFromParent() {
    const t = this.parent;
    return null !== t && t.remove(this), this;
  }
  clear() {
    return this.remove(...this.children);
  }
  attach(t) {
    return (
      this.updateWorldMatrix(!0, !1),
      Pn.copy(this.matrixWorld).invert(),
      null !== t.parent &&
        (t.parent.updateWorldMatrix(!0, !1), Pn.multiply(t.parent.matrixWorld)),
      t.applyMatrix4(Pn),
      t.removeFromParent(),
      (t.parent = this),
      this.children.push(t),
      t.updateWorldMatrix(!1, !0),
      t.dispatchEvent(Bn),
      (Hn.child = t),
      this.dispatchEvent(Hn),
      (Hn.child = null),
      this
    );
  }
  getObjectById(t) {
    return this.getObjectByProperty("id", t);
  }
  getObjectByName(t) {
    return this.getObjectByProperty("name", t);
  }
  getObjectByProperty(t, e) {
    if (this[t] === e) return this;
    for (let n = 0, i = this.children.length; i > n; n++) {
      const i = this.children[n].getObjectByProperty(t, e);
      if (void 0 !== i) return i;
    }
  }
  getObjectsByProperty(t, e, n = []) {
    this[t] === e && n.push(this);
    const i = this.children;
    for (let r = 0, a = i.length; a > r; r++)
      i[r].getObjectsByProperty(t, e, n);
    return n;
  }
  getWorldPosition(t) {
    return (
      this.updateWorldMatrix(!0, !1), t.setFromMatrixPosition(this.matrixWorld)
    );
  }
  getWorldQuaternion(t) {
    return (
      this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(Un, t, Dn), t
    );
  }
  getWorldScale(t) {
    return (
      this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(Un, In, t), t
    );
  }
  getWorldDirection(t) {
    this.updateWorldMatrix(!0, !1);
    const e = this.matrixWorld.elements;
    return t.set(e[8], e[9], e[10]).normalize();
  }
  raycast() {}
  traverse(t) {
    t(this);
    const e = this.children;
    for (let n = 0, i = e.length; i > n; n++) e[n].traverse(t);
  }
  traverseVisible(t) {
    if (!1 === this.visible) return;
    t(this);
    const e = this.children;
    for (let n = 0, i = e.length; i > n; n++) e[n].traverseVisible(t);
  }
  traverseAncestors(t) {
    const e = this.parent;
    null !== e && (t(e), e.traverseAncestors(t));
  }
  updateMatrix() {
    this.matrix.compose(this.position, this.quaternion, this.scale),
      (this.matrixWorldNeedsUpdate = !0);
  }
  updateMatrixWorld(t) {
    this.matrixAutoUpdate && this.updateMatrix(),
      (this.matrixWorldNeedsUpdate || t) &&
        (!0 === this.matrixWorldAutoUpdate &&
          (null === this.parent
            ? this.matrixWorld.copy(this.matrix)
            : this.matrixWorld.multiplyMatrices(
                this.parent.matrixWorld,
                this.matrix
              )),
        (this.matrixWorldNeedsUpdate = !1),
        (t = !0));
    const e = this.children;
    for (let n = 0, i = e.length; i > n; n++) e[n].updateMatrixWorld(t);
  }
  updateWorldMatrix(t, e) {
    const n = this.parent;
    if (
      (!0 === t && null !== n && n.updateWorldMatrix(!0, !1),
      this.matrixAutoUpdate && this.updateMatrix(),
      !0 === this.matrixWorldAutoUpdate &&
        (null === this.parent
          ? this.matrixWorld.copy(this.matrix)
          : this.matrixWorld.multiplyMatrices(
              this.parent.matrixWorld,
              this.matrix
            )),
      !0 === e)
    ) {
      const t = this.children;
      for (let e = 0, n = t.length; n > e; e++) t[e].updateWorldMatrix(!1, !0);
    }
  }
  toJSON(t) {
    const e = void 0 === t || "string" == typeof t,
      n = {};
    e &&
      ((t = {
        geometries: {},
        materials: {},
        textures: {},
        images: {},
        shapes: {},
        skeletons: {},
        animations: {},
        nodes: {},
      }),
      (n.metadata = {
        version: 4.6,
        type: "Object",
        generator: "Object3D.toJSON",
      }));
    const i = {};
    function r(e, n) {
      return void 0 === e[n.uuid] && (e[n.uuid] = n.toJSON(t)), n.uuid;
    }
    if (
      ((i.uuid = this.uuid),
      (i.type = this.type),
      "" !== this.name && (i.name = this.name),
      !0 === this.castShadow && (i.castShadow = !0),
      !0 === this.receiveShadow && (i.receiveShadow = !0),
      !1 === this.visible && (i.visible = !1),
      !1 === this.frustumCulled && (i.frustumCulled = !1),
      0 !== this.renderOrder && (i.renderOrder = this.renderOrder),
      Object.keys(this.userData).length > 0 && (i.userData = this.userData),
      (i.layers = this.layers.mask),
      (i.matrix = this.matrix.toArray()),
      (i.up = this.up.toArray()),
      !1 === this.matrixAutoUpdate && (i.matrixAutoUpdate = !1),
      this.isInstancedMesh &&
        ((i.type = "InstancedMesh"),
        (i.count = this.count),
        (i.instanceMatrix = this.instanceMatrix.toJSON()),
        null !== this.instanceColor &&
          (i.instanceColor = this.instanceColor.toJSON())),
      this.isBatchedMesh &&
        ((i.type = "BatchedMesh"),
        (i.perObjectFrustumCulled = this.perObjectFrustumCulled),
        (i.sortObjects = this.sortObjects),
        (i.drawRanges = this._drawRanges),
        (i.reservedRanges = this._reservedRanges),
        (i.visibility = this._visibility),
        (i.active = this._active),
        (i.bounds = this._bounds.map((t) => ({
          boxInitialized: t.boxInitialized,
          boxMin: t.box.min.toArray(),
          boxMax: t.box.max.toArray(),
          sphereInitialized: t.sphereInitialized,
          sphereRadius: t.sphere.radius,
          sphereCenter: t.sphere.center.toArray(),
        }))),
        (i.maxInstanceCount = this._maxInstanceCount),
        (i.maxVertexCount = this._maxVertexCount),
        (i.maxIndexCount = this._maxIndexCount),
        (i.geometryInitialized = this._geometryInitialized),
        (i.geometryCount = this._geometryCount),
        (i.matricesTexture = this._matricesTexture.toJSON(t)),
        null !== this._colorsTexture &&
          (i.colorsTexture = this._colorsTexture.toJSON(t)),
        null !== this.boundingSphere &&
          (i.boundingSphere = {
            center: i.boundingSphere.center.toArray(),
            radius: i.boundingSphere.radius,
          }),
        null !== this.boundingBox &&
          (i.boundingBox = {
            min: i.boundingBox.min.toArray(),
            max: i.boundingBox.max.toArray(),
          })),
      this.isScene)
    )
      this.background &&
        (this.background.isColor
          ? (i.background = this.background.toJSON())
          : this.background.isTexture &&
            (i.background = this.background.toJSON(t).uuid)),
        this.environment &&
          this.environment.isTexture &&
          !0 !== this.environment.isRenderTargetTexture &&
          (i.environment = this.environment.toJSON(t).uuid);
    else if (this.isMesh || this.isLine || this.isPoints) {
      i.geometry = r(t.geometries, this.geometry);
      const e = this.geometry.parameters;
      if (void 0 !== e && void 0 !== e.shapes) {
        const n = e.shapes;
        if (Array.isArray(n))
          for (let e = 0, i = n.length; i > e; e++) {
            const i = n[e];
            r(t.shapes, i);
          }
        else r(t.shapes, n);
      }
    }
    if (
      (this.isSkinnedMesh &&
        ((i.bindMode = this.bindMode),
        (i.bindMatrix = this.bindMatrix.toArray()),
        void 0 !== this.skeleton &&
          (r(t.skeletons, this.skeleton), (i.skeleton = this.skeleton.uuid))),
      void 0 !== this.material)
    )
      if (Array.isArray(this.material)) {
        const e = [];
        for (let n = 0, i = this.material.length; i > n; n++)
          e.push(r(t.materials, this.material[n]));
        i.material = e;
      } else i.material = r(t.materials, this.material);
    if (this.children.length > 0) {
      i.children = [];
      for (let e = 0; e < this.children.length; e++)
        i.children.push(this.children[e].toJSON(t).object);
    }
    if (this.animations.length > 0) {
      i.animations = [];
      for (let e = 0; e < this.animations.length; e++) {
        const n = this.animations[e];
        i.animations.push(r(t.animations, n));
      }
    }
    if (e) {
      const e = a(t.geometries),
        i = a(t.materials),
        r = a(t.textures),
        s = a(t.images),
        o = a(t.shapes),
        l = a(t.skeletons),
        c = a(t.animations),
        h = a(t.nodes);
      e.length > 0 && (n.geometries = e),
        i.length > 0 && (n.materials = i),
        r.length > 0 && (n.textures = r),
        s.length > 0 && (n.images = s),
        o.length > 0 && (n.shapes = o),
        l.length > 0 && (n.skeletons = l),
        c.length > 0 && (n.animations = c),
        h.length > 0 && (n.nodes = h);
    }
    return (n.object = i), n;
    function a(t) {
      const e = [];
      for (const n in t) {
        const i = t[n];
        delete i.metadata, e.push(i);
      }
      return e;
    }
  }
  clone(t) {
    return new this.constructor().copy(this, t);
  }
  copy(t, e = !0) {
    if (
      ((this.name = t.name),
      this.up.copy(t.up),
      this.position.copy(t.position),
      (this.rotation.order = t.rotation.order),
      this.quaternion.copy(t.quaternion),
      this.scale.copy(t.scale),
      this.matrix.copy(t.matrix),
      this.matrixWorld.copy(t.matrixWorld),
      (this.matrixAutoUpdate = t.matrixAutoUpdate),
      (this.matrixWorldAutoUpdate = t.matrixWorldAutoUpdate),
      (this.matrixWorldNeedsUpdate = t.matrixWorldNeedsUpdate),
      (this.layers.mask = t.layers.mask),
      (this.visible = t.visible),
      (this.castShadow = t.castShadow),
      (this.receiveShadow = t.receiveShadow),
      (this.frustumCulled = t.frustumCulled),
      (this.renderOrder = t.renderOrder),
      (this.animations = t.animations.slice()),
      (this.userData = JSON.parse(JSON.stringify(t.userData))),
      !0 === e)
    )
      for (let n = 0; n < t.children.length; n++) {
        const e = t.children[n];
        this.add(e.clone());
      }
    return this;
  }
}
(Gn.DEFAULT_UP = new Be(0, 1, 0)),
  (Gn.DEFAULT_MATRIX_AUTO_UPDATE = !0),
  (Gn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE = !0);
const kn = new Be(),
  Wn = new Be(),
  Xn = new Be(),
  jn = new Be(),
  qn = new Be(),
  Yn = new Be(),
  Kn = new Be(),
  Zn = new Be(),
  Jn = new Be(),
  $n = new Be(),
  Qn = new Ue(),
  ti = new Ue(),
  ei = new Ue();
class ni {
  constructor(t = new Be(), e = new Be(), n = new Be()) {
    (this.a = t), (this.b = e), (this.c = n);
  }
  static getNormal(t, e, n, i) {
    i.subVectors(n, e), kn.subVectors(t, e), i.cross(kn);
    const r = i.lengthSq();
    return r > 0 ? i.multiplyScalar(1 / Math.sqrt(r)) : i.set(0, 0, 0);
  }
  static getBarycoord(t, e, n, i, r) {
    kn.subVectors(i, e), Wn.subVectors(n, e), Xn.subVectors(t, e);
    const a = kn.dot(kn),
      s = kn.dot(Wn),
      o = kn.dot(Xn),
      l = Wn.dot(Wn),
      c = Wn.dot(Xn),
      h = a * l - s * s;
    if (0 === h) return r.set(0, 0, 0), null;
    const u = 1 / h,
      d = (l * o - s * c) * u,
      p = (a * c - s * o) * u;
    return r.set(1 - d - p, p, d);
  }
  static containsPoint(t, e, n, i) {
    return (
      null !== this.getBarycoord(t, e, n, i, jn) &&
      jn.x >= 0 &&
      jn.y >= 0 &&
      1 >= jn.x + jn.y
    );
  }
  static getInterpolation(t, e, n, i, r, a, s, o) {
    return null === this.getBarycoord(t, e, n, i, jn)
      ? ((o.x = 0),
        (o.y = 0),
        "z" in o && (o.z = 0),
        "w" in o && (o.w = 0),
        null)
      : (o.setScalar(0),
        o.addScaledVector(r, jn.x),
        o.addScaledVector(a, jn.y),
        o.addScaledVector(s, jn.z),
        o);
  }
  static getInterpolatedAttribute(t, e, n, i, r, a) {
    return (
      Qn.setScalar(0),
      ti.setScalar(0),
      ei.setScalar(0),
      Qn.fromBufferAttribute(t, e),
      ti.fromBufferAttribute(t, n),
      ei.fromBufferAttribute(t, i),
      a.setScalar(0),
      a.addScaledVector(Qn, r.x),
      a.addScaledVector(ti, r.y),
      a.addScaledVector(ei, r.z),
      a
    );
  }
  static isFrontFacing(t, e, n, i) {
    return kn.subVectors(n, e), Wn.subVectors(t, e), 0 > kn.cross(Wn).dot(i);
  }
  set(t, e, n) {
    return this.a.copy(t), this.b.copy(e), this.c.copy(n), this;
  }
  setFromPointsAndIndices(t, e, n, i) {
    return this.a.copy(t[e]), this.b.copy(t[n]), this.c.copy(t[i]), this;
  }
  setFromAttributeAndIndices(t, e, n, i) {
    return (
      this.a.fromBufferAttribute(t, e),
      this.b.fromBufferAttribute(t, n),
      this.c.fromBufferAttribute(t, i),
      this
    );
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(t) {
    return this.a.copy(t.a), this.b.copy(t.b), this.c.copy(t.c), this;
  }
  getArea() {
    return (
      kn.subVectors(this.c, this.b),
      Wn.subVectors(this.a, this.b),
      0.5 * kn.cross(Wn).length()
    );
  }
  getMidpoint(t) {
    return t
      .addVectors(this.a, this.b)
      .add(this.c)
      .multiplyScalar(1 / 3);
  }
  getNormal(t) {
    return ni.getNormal(this.a, this.b, this.c, t);
  }
  getPlane(t) {
    return t.setFromCoplanarPoints(this.a, this.b, this.c);
  }
  getBarycoord(t, e) {
    return ni.getBarycoord(t, this.a, this.b, this.c, e);
  }
  getInterpolation(t, e, n, i, r) {
    return ni.getInterpolation(t, this.a, this.b, this.c, e, n, i, r);
  }
  containsPoint(t) {
    return ni.containsPoint(t, this.a, this.b, this.c);
  }
  isFrontFacing(t) {
    return ni.isFrontFacing(this.a, this.b, this.c, t);
  }
  intersectsBox(t) {
    return t.intersectsTriangle(this);
  }
  closestPointToPoint(t, e) {
    const n = this.a,
      i = this.b,
      r = this.c;
    let a, s;
    qn.subVectors(i, n), Yn.subVectors(r, n), Zn.subVectors(t, n);
    const o = qn.dot(Zn),
      l = Yn.dot(Zn);
    if (0 >= o && 0 >= l) return e.copy(n);
    Jn.subVectors(t, i);
    const c = qn.dot(Jn),
      h = Yn.dot(Jn);
    if (c >= 0 && c >= h) return e.copy(i);
    const u = o * h - c * l;
    if (0 >= u && o >= 0 && 0 >= c)
      return (a = o / (o - c)), e.copy(n).addScaledVector(qn, a);
    $n.subVectors(t, r);
    const d = qn.dot($n),
      p = Yn.dot($n);
    if (p >= 0 && p >= d) return e.copy(r);
    const f = d * l - o * p;
    if (0 >= f && l >= 0 && 0 >= p)
      return (s = l / (l - p)), e.copy(n).addScaledVector(Yn, s);
    const m = c * p - d * h;
    if (0 >= m && h - c >= 0 && d - p >= 0)
      return (
        Kn.subVectors(r, i),
        (s = (h - c) / (h - c + (d - p))),
        e.copy(i).addScaledVector(Kn, s)
      );
    const g = 1 / (m + f + u);
    return (
      (a = f * g),
      (s = u * g),
      e.copy(n).addScaledVector(qn, a).addScaledVector(Yn, s)
    );
  }
  equals(t) {
    return t.a.equals(this.a) && t.b.equals(this.b) && t.c.equals(this.c);
  }
}
const ii = {
    aliceblue: 15792383,
    antiquewhite: 16444375,
    aqua: 65535,
    aquamarine: 8388564,
    azure: 15794175,
    beige: 16119260,
    bisque: 16770244,
    black: 0,
    blanchedalmond: 16772045,
    blue: 255,
    blueviolet: 9055202,
    brown: 10824234,
    burlywood: 14596231,
    cadetblue: 6266528,
    chartreuse: 8388352,
    chocolate: 13789470,
    coral: 16744272,
    cornflowerblue: 6591981,
    cornsilk: 16775388,
    crimson: 14423100,
    cyan: 65535,
    darkblue: 139,
    darkcyan: 35723,
    darkgoldenrod: 12092939,
    darkgray: 11119017,
    darkgreen: 25600,
    darkgrey: 11119017,
    darkkhaki: 12433259,
    darkmagenta: 9109643,
    darkolivegreen: 5597999,
    darkorange: 16747520,
    darkorchid: 10040012,
    darkred: 9109504,
    darksalmon: 15308410,
    darkseagreen: 9419919,
    darkslateblue: 4734347,
    darkslategray: 3100495,
    darkslategrey: 3100495,
    darkturquoise: 52945,
    darkviolet: 9699539,
    deeppink: 16716947,
    deepskyblue: 49151,
    dimgray: 6908265,
    dimgrey: 6908265,
    dodgerblue: 2003199,
    firebrick: 11674146,
    floralwhite: 16775920,
    forestgreen: 2263842,
    fuchsia: 16711935,
    gainsboro: 14474460,
    ghostwhite: 16316671,
    gold: 16766720,
    goldenrod: 14329120,
    gray: 8421504,
    green: 32768,
    greenyellow: 11403055,
    grey: 8421504,
    honeydew: 15794160,
    hotpink: 16738740,
    indianred: 13458524,
    indigo: 4915330,
    ivory: 16777200,
    khaki: 15787660,
    lavender: 15132410,
    lavenderblush: 16773365,
    lawngreen: 8190976,
    lemonchiffon: 16775885,
    lightblue: 11393254,
    lightcoral: 15761536,
    lightcyan: 14745599,
    lightgoldenrodyellow: 16448210,
    lightgray: 13882323,
    lightgreen: 9498256,
    lightgrey: 13882323,
    lightpink: 16758465,
    lightsalmon: 16752762,
    lightseagreen: 2142890,
    lightskyblue: 8900346,
    lightslategray: 7833753,
    lightslategrey: 7833753,
    lightsteelblue: 11584734,
    lightyellow: 16777184,
    lime: 65280,
    limegreen: 3329330,
    linen: 16445670,
    magenta: 16711935,
    maroon: 8388608,
    mediumaquamarine: 6737322,
    mediumblue: 205,
    mediumorchid: 12211667,
    mediumpurple: 9662683,
    mediumseagreen: 3978097,
    mediumslateblue: 8087790,
    mediumspringgreen: 64154,
    mediumturquoise: 4772300,
    mediumvioletred: 13047173,
    midnightblue: 1644912,
    mintcream: 16121850,
    mistyrose: 16770273,
    moccasin: 16770229,
    navajowhite: 16768685,
    navy: 128,
    oldlace: 16643558,
    olive: 8421376,
    olivedrab: 7048739,
    orange: 16753920,
    orangered: 16729344,
    orchid: 14315734,
    palegoldenrod: 15657130,
    palegreen: 10025880,
    paleturquoise: 11529966,
    palevioletred: 14381203,
    papayawhip: 16773077,
    peachpuff: 16767673,
    peru: 13468991,
    pink: 16761035,
    plum: 14524637,
    powderblue: 11591910,
    purple: 8388736,
    rebeccapurple: 6697881,
    red: 16711680,
    rosybrown: 12357519,
    royalblue: 4286945,
    saddlebrown: 9127187,
    salmon: 16416882,
    sandybrown: 16032864,
    seagreen: 3050327,
    seashell: 16774638,
    sienna: 10506797,
    silver: 12632256,
    skyblue: 8900331,
    slateblue: 6970061,
    slategray: 7372944,
    slategrey: 7372944,
    snow: 16775930,
    springgreen: 65407,
    steelblue: 4620980,
    tan: 13808780,
    teal: 32896,
    thistle: 14204888,
    tomato: 16737095,
    turquoise: 4251856,
    violet: 15631086,
    wheat: 16113331,
    white: 16777215,
    whitesmoke: 16119285,
    yellow: 16776960,
    yellowgreen: 10145074,
  },
  ri = {
    h: 0,
    s: 0,
    l: 0,
  },
  ai = {
    h: 0,
    s: 0,
    l: 0,
  };
function si(t, e, n) {
  return (
    0 > n && (n += 1),
    n > 1 && (n -= 1),
    1 / 6 > n
      ? t + 6 * (e - t) * n
      : 0.5 > n
      ? e
      : 2 / 3 > n
      ? t + 6 * (e - t) * (2 / 3 - n)
      : t
  );
}
class oi {
  constructor(t, e, n) {
    return (
      (this.isColor = !0),
      (this.r = 1),
      (this.g = 1),
      (this.b = 1),
      this.set(t, e, n)
    );
  }
  set(t, e, n) {
    if (void 0 === e && void 0 === n) {
      const e = t;
      e && e.isColor
        ? this.copy(e)
        : "number" == typeof e
        ? this.setHex(e)
        : "string" == typeof e && this.setStyle(e);
    } else this.setRGB(t, e, n);
    return this;
  }
  setScalar(t) {
    return (this.r = t), (this.g = t), (this.b = t), this;
  }
  setHex(t, e = Ht) {
    return (
      (t = Math.floor(t)),
      (this.r = ((t >> 16) & 255) / 255),
      (this.g = ((t >> 8) & 255) / 255),
      (this.b = (255 & t) / 255),
      ye.toWorkingColorSpace(this, e),
      this
    );
  }
  setRGB(t, e, n, i = ye.workingColorSpace) {
    return (
      (this.r = t),
      (this.g = e),
      (this.b = n),
      ye.toWorkingColorSpace(this, i),
      this
    );
  }
  setHSL(t, e, n, i = ye.workingColorSpace) {
    if (
      ((t = ((t % 1) + 1) % 1), (e = oe(e, 0, 1)), (n = oe(n, 0, 1)), 0 === e)
    )
      this.r = this.g = this.b = n;
    else {
      const i = n > 0.5 ? n + e - n * e : n * (1 + e),
        r = 2 * n - i;
      (this.r = si(r, i, t + 1 / 3)),
        (this.g = si(r, i, t)),
        (this.b = si(r, i, t - 1 / 3));
    }
    return ye.toWorkingColorSpace(this, i), this;
  }
  setStyle(t, e = Ht) {
    let n;
    if ((n = /^(\w+)\(([^\)]*)\)/.exec(t))) {
      let t;
      const i = n[1],
        r = n[2];
      switch (i) {
        case "rgb":
        case "rgba":
          if (
            (t =
              /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(
                r
              ))
          )
            return (
              t[4],
              this.setRGB(
                Math.min(255, parseInt(t[1], 10)) / 255,
                Math.min(255, parseInt(t[2], 10)) / 255,
                Math.min(255, parseInt(t[3], 10)) / 255,
                e
              )
            );
          if (
            (t =
              /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(
                r
              ))
          )
            return (
              t[4],
              this.setRGB(
                Math.min(100, parseInt(t[1], 10)) / 100,
                Math.min(100, parseInt(t[2], 10)) / 100,
                Math.min(100, parseInt(t[3], 10)) / 100,
                e
              )
            );
          break;
        case "hsl":
        case "hsla":
          if (
            (t =
              /^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(
                r
              ))
          )
            return (
              t[4],
              this.setHSL(
                parseFloat(t[1]) / 360,
                parseFloat(t[2]) / 100,
                parseFloat(t[3]) / 100,
                e
              )
            );
      }
    } else if ((n = /^\#([A-Fa-f\d]+)$/.exec(t))) {
      const t = n[1],
        i = t.length;
      if (3 === i)
        return this.setRGB(
          parseInt(t.charAt(0), 16) / 15,
          parseInt(t.charAt(1), 16) / 15,
          parseInt(t.charAt(2), 16) / 15,
          e
        );
      if (6 === i) return this.setHex(parseInt(t, 16), e);
    } else if (t && t.length > 0) return this.setColorName(t, e);
    return this;
  }
  setColorName(t, e = Ht) {
    const n = ii[t.toLowerCase()];
    return void 0 !== n && this.setHex(n, e), this;
  }
  clone() {
    return new this.constructor(this.r, this.g, this.b);
  }
  copy(t) {
    return (this.r = t.r), (this.g = t.g), (this.b = t.b), this;
  }
  copySRGBToLinear(t) {
    return (this.r = Ee(t.r)), (this.g = Ee(t.g)), (this.b = Ee(t.b)), this;
  }
  copyLinearToSRGB(t) {
    return (this.r = Te(t.r)), (this.g = Te(t.g)), (this.b = Te(t.b)), this;
  }
  convertSRGBToLinear() {
    return this.copySRGBToLinear(this), this;
  }
  convertLinearToSRGB() {
    return this.copyLinearToSRGB(this), this;
  }
  getHex(t = Ht) {
    return (
      ye.fromWorkingColorSpace(li.copy(this), t),
      65536 * Math.round(oe(255 * li.r, 0, 255)) +
        256 * Math.round(oe(255 * li.g, 0, 255)) +
        Math.round(oe(255 * li.b, 0, 255))
    );
  }
  getHexString(t = Ht) {
    return ("000000" + this.getHex(t).toString(16)).slice(-6);
  }
  getHSL(t, e = ye.workingColorSpace) {
    ye.fromWorkingColorSpace(li.copy(this), e);
    const n = li.r,
      i = li.g,
      r = li.b,
      a = Math.max(n, i, r),
      s = Math.min(n, i, r);
    let o, l;
    const c = (s + a) / 2;
    if (s === a) (o = 0), (l = 0);
    else {
      const t = a - s;
      switch (((l = c > 0.5 ? t / (2 - a - s) : t / (a + s)), a)) {
        case n:
          o = (i - r) / t + (r > i ? 6 : 0);
          break;
        case i:
          o = (r - n) / t + 2;
          break;
        case r:
          o = (n - i) / t + 4;
      }
      o /= 6;
    }
    return (t.h = o), (t.s = l), (t.l = c), t;
  }
  getRGB(t, e = ye.workingColorSpace) {
    return (
      ye.fromWorkingColorSpace(li.copy(this), e),
      (t.r = li.r),
      (t.g = li.g),
      (t.b = li.b),
      t
    );
  }
  getStyle(t = Ht) {
    ye.fromWorkingColorSpace(li.copy(this), t);
    const e = li.r,
      n = li.g,
      i = li.b;
    return t !== Ht
      ? `color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`
      : `rgb(${Math.round(255 * e)},${Math.round(255 * n)},${Math.round(
          255 * i
        )})`;
  }
  offsetHSL(t, e, n) {
    return this.getHSL(ri), this.setHSL(ri.h + t, ri.s + e, ri.l + n);
  }
  add(t) {
    return (this.r += t.r), (this.g += t.g), (this.b += t.b), this;
  }
  addColors(t, e) {
    return (
      (this.r = t.r + e.r), (this.g = t.g + e.g), (this.b = t.b + e.b), this
    );
  }
  addScalar(t) {
    return (this.r += t), (this.g += t), (this.b += t), this;
  }
  sub(t) {
    return (
      (this.r = Math.max(0, this.r - t.r)),
      (this.g = Math.max(0, this.g - t.g)),
      (this.b = Math.max(0, this.b - t.b)),
      this
    );
  }
  multiply(t) {
    return (this.r *= t.r), (this.g *= t.g), (this.b *= t.b), this;
  }
  multiplyScalar(t) {
    return (this.r *= t), (this.g *= t), (this.b *= t), this;
  }
  lerp(t, e) {
    return (
      (this.r += (t.r - this.r) * e),
      (this.g += (t.g - this.g) * e),
      (this.b += (t.b - this.b) * e),
      this
    );
  }
  lerpColors(t, e, n) {
    return (
      (this.r = t.r + (e.r - t.r) * n),
      (this.g = t.g + (e.g - t.g) * n),
      (this.b = t.b + (e.b - t.b) * n),
      this
    );
  }
  lerpHSL(t, e) {
    this.getHSL(ri), t.getHSL(ai);
    const n = le(ri.h, ai.h, e),
      i = le(ri.s, ai.s, e),
      r = le(ri.l, ai.l, e);
    return this.setHSL(n, i, r), this;
  }
  setFromVector3(t) {
    return (this.r = t.x), (this.g = t.y), (this.b = t.z), this;
  }
  applyMatrix3(t) {
    const e = this.r,
      n = this.g,
      i = this.b,
      r = t.elements;
    return (
      (this.r = r[0] * e + r[3] * n + r[6] * i),
      (this.g = r[1] * e + r[4] * n + r[7] * i),
      (this.b = r[2] * e + r[5] * n + r[8] * i),
      this
    );
  }
  equals(t) {
    return t.r === this.r && t.g === this.g && t.b === this.b;
  }
  fromArray(t, e = 0) {
    return (this.r = t[e]), (this.g = t[e + 1]), (this.b = t[e + 2]), this;
  }
  toArray(t = [], e = 0) {
    return (t[e] = this.r), (t[e + 1] = this.g), (t[e + 2] = this.b), t;
  }
  fromBufferAttribute(t, e) {
    return (
      (this.r = t.getX(e)), (this.g = t.getY(e)), (this.b = t.getZ(e)), this
    );
  }
  toJSON() {
    return this.getHex();
  }
  *[Symbol.iterator]() {
    yield this.r, yield this.g, yield this.b;
  }
}
const li = new oi();
oi.NAMES = ii;
let ci = 0;
class hi extends ne {
  constructor() {
    super(),
      (this.isMaterial = !0),
      Object.defineProperty(this, "id", {
        value: ci++,
      }),
      (this.uuid = se()),
      (this.name = ""),
      (this.type = "Material"),
      (this.blending = 1),
      (this.side = 0),
      (this.vertexColors = !1),
      (this.opacity = 1),
      (this.transparent = !1),
      (this.alphaHash = !1),
      (this.blendSrc = 204),
      (this.blendDst = 205),
      (this.blendEquation = o),
      (this.blendSrcAlpha = null),
      (this.blendDstAlpha = null),
      (this.blendEquationAlpha = null),
      (this.blendColor = new oi(0, 0, 0)),
      (this.blendAlpha = 0),
      (this.depthFunc = 3),
      (this.depthTest = !0),
      (this.depthWrite = !0),
      (this.stencilWriteMask = 255),
      (this.stencilFunc = 519),
      (this.stencilRef = 0),
      (this.stencilFuncMask = 255),
      (this.stencilFail = Wt),
      (this.stencilZFail = Wt),
      (this.stencilZPass = Wt),
      (this.stencilWrite = !1),
      (this.clippingPlanes = null),
      (this.clipIntersection = !1),
      (this.clipShadows = !1),
      (this.shadowSide = null),
      (this.colorWrite = !0),
      (this.precision = null),
      (this.polygonOffset = !1),
      (this.polygonOffsetFactor = 0),
      (this.polygonOffsetUnits = 0),
      (this.dithering = !1),
      (this.alphaToCoverage = !1),
      (this.premultipliedAlpha = !1),
      (this.forceSinglePass = !1),
      (this.visible = !0),
      (this.toneMapped = !0),
      (this.userData = {}),
      (this.version = 0),
      (this._alphaTest = 0);
  }
  get alphaTest() {
    return this._alphaTest;
  }
  set alphaTest(t) {
    this._alphaTest > 0 != t > 0 && this.version++, (this._alphaTest = t);
  }
  onBeforeRender() {}
  onBeforeCompile() {}
  customProgramCacheKey() {
    return this.onBeforeCompile.toString();
  }
  setValues(t) {
    if (void 0 !== t)
      for (const e in t) {
        const n = t[e];
        if (void 0 === n) continue;
        const i = this[e];
        void 0 !== i &&
          (i && i.isColor
            ? i.set(n)
            : i && i.isVector3 && n && n.isVector3
            ? i.copy(n)
            : (this[e] = n));
      }
  }
  toJSON(t) {
    const e = void 0 === t || "string" == typeof t;
    e &&
      (t = {
        textures: {},
        images: {},
      });
    const n = {
      metadata: {
        version: 4.6,
        type: "Material",
        generator: "Material.toJSON",
      },
    };
    function i(t) {
      const e = [];
      for (const n in t) {
        const i = t[n];
        delete i.metadata, e.push(i);
      }
      return e;
    }
    if (
      ((n.uuid = this.uuid),
      (n.type = this.type),
      "" !== this.name && (n.name = this.name),
      this.color && this.color.isColor && (n.color = this.color.getHex()),
      void 0 !== this.roughness && (n.roughness = this.roughness),
      void 0 !== this.metalness && (n.metalness = this.metalness),
      void 0 !== this.sheen && (n.sheen = this.sheen),
      this.sheenColor &&
        this.sheenColor.isColor &&
        (n.sheenColor = this.sheenColor.getHex()),
      void 0 !== this.sheenRoughness &&
        (n.sheenRoughness = this.sheenRoughness),
      this.emissive &&
        this.emissive.isColor &&
        (n.emissive = this.emissive.getHex()),
      void 0 !== this.emissiveIntensity &&
        1 !== this.emissiveIntensity &&
        (n.emissiveIntensity = this.emissiveIntensity),
      this.specular &&
        this.specular.isColor &&
        (n.specular = this.specular.getHex()),
      void 0 !== this.specularIntensity &&
        (n.specularIntensity = this.specularIntensity),
      this.specularColor &&
        this.specularColor.isColor &&
        (n.specularColor = this.specularColor.getHex()),
      void 0 !== this.shininess && (n.shininess = this.shininess),
      void 0 !== this.clearcoat && (n.clearcoat = this.clearcoat),
      void 0 !== this.clearcoatRoughness &&
        (n.clearcoatRoughness = this.clearcoatRoughness),
      this.clearcoatMap &&
        this.clearcoatMap.isTexture &&
        (n.clearcoatMap = this.clearcoatMap.toJSON(t).uuid),
      this.clearcoatRoughnessMap &&
        this.clearcoatRoughnessMap.isTexture &&
        (n.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(t).uuid),
      this.clearcoatNormalMap &&
        this.clearcoatNormalMap.isTexture &&
        ((n.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(t).uuid),
        (n.clearcoatNormalScale = this.clearcoatNormalScale.toArray())),
      void 0 !== this.dispersion && (n.dispersion = this.dispersion),
      void 0 !== this.iridescence && (n.iridescence = this.iridescence),
      void 0 !== this.iridescenceIOR &&
        (n.iridescenceIOR = this.iridescenceIOR),
      void 0 !== this.iridescenceThicknessRange &&
        (n.iridescenceThicknessRange = this.iridescenceThicknessRange),
      this.iridescenceMap &&
        this.iridescenceMap.isTexture &&
        (n.iridescenceMap = this.iridescenceMap.toJSON(t).uuid),
      this.iridescenceThicknessMap &&
        this.iridescenceThicknessMap.isTexture &&
        (n.iridescenceThicknessMap =
          this.iridescenceThicknessMap.toJSON(t).uuid),
      void 0 !== this.anisotropy && (n.anisotropy = this.anisotropy),
      void 0 !== this.anisotropyRotation &&
        (n.anisotropyRotation = this.anisotropyRotation),
      this.anisotropyMap &&
        this.anisotropyMap.isTexture &&
        (n.anisotropyMap = this.anisotropyMap.toJSON(t).uuid),
      this.map && this.map.isTexture && (n.map = this.map.toJSON(t).uuid),
      this.matcap &&
        this.matcap.isTexture &&
        (n.matcap = this.matcap.toJSON(t).uuid),
      this.alphaMap &&
        this.alphaMap.isTexture &&
        (n.alphaMap = this.alphaMap.toJSON(t).uuid),
      this.lightMap &&
        this.lightMap.isTexture &&
        ((n.lightMap = this.lightMap.toJSON(t).uuid),
        (n.lightMapIntensity = this.lightMapIntensity)),
      this.aoMap &&
        this.aoMap.isTexture &&
        ((n.aoMap = this.aoMap.toJSON(t).uuid),
        (n.aoMapIntensity = this.aoMapIntensity)),
      this.bumpMap &&
        this.bumpMap.isTexture &&
        ((n.bumpMap = this.bumpMap.toJSON(t).uuid),
        (n.bumpScale = this.bumpScale)),
      this.normalMap &&
        this.normalMap.isTexture &&
        ((n.normalMap = this.normalMap.toJSON(t).uuid),
        (n.normalMapType = this.normalMapType),
        (n.normalScale = this.normalScale.toArray())),
      this.displacementMap &&
        this.displacementMap.isTexture &&
        ((n.displacementMap = this.displacementMap.toJSON(t).uuid),
        (n.displacementScale = this.displacementScale),
        (n.displacementBias = this.displacementBias)),
      this.roughnessMap &&
        this.roughnessMap.isTexture &&
        (n.roughnessMap = this.roughnessMap.toJSON(t).uuid),
      this.metalnessMap &&
        this.metalnessMap.isTexture &&
        (n.metalnessMap = this.metalnessMap.toJSON(t).uuid),
      this.emissiveMap &&
        this.emissiveMap.isTexture &&
        (n.emissiveMap = this.emissiveMap.toJSON(t).uuid),
      this.specularMap &&
        this.specularMap.isTexture &&
        (n.specularMap = this.specularMap.toJSON(t).uuid),
      this.specularIntensityMap &&
        this.specularIntensityMap.isTexture &&
        (n.specularIntensityMap = this.specularIntensityMap.toJSON(t).uuid),
      this.specularColorMap &&
        this.specularColorMap.isTexture &&
        (n.specularColorMap = this.specularColorMap.toJSON(t).uuid),
      this.envMap &&
        this.envMap.isTexture &&
        ((n.envMap = this.envMap.toJSON(t).uuid),
        void 0 !== this.combine && (n.combine = this.combine)),
      void 0 !== this.envMapRotation &&
        (n.envMapRotation = this.envMapRotation.toArray()),
      void 0 !== this.envMapIntensity &&
        (n.envMapIntensity = this.envMapIntensity),
      void 0 !== this.reflectivity && (n.reflectivity = this.reflectivity),
      void 0 !== this.refractionRatio &&
        (n.refractionRatio = this.refractionRatio),
      this.gradientMap &&
        this.gradientMap.isTexture &&
        (n.gradientMap = this.gradientMap.toJSON(t).uuid),
      void 0 !== this.transmission && (n.transmission = this.transmission),
      this.transmissionMap &&
        this.transmissionMap.isTexture &&
        (n.transmissionMap = this.transmissionMap.toJSON(t).uuid),
      void 0 !== this.thickness && (n.thickness = this.thickness),
      this.thicknessMap &&
        this.thicknessMap.isTexture &&
        (n.thicknessMap = this.thicknessMap.toJSON(t).uuid),
      void 0 !== this.attenuationDistance &&
        this.attenuationDistance !== 1 / 0 &&
        (n.attenuationDistance = this.attenuationDistance),
      void 0 !== this.attenuationColor &&
        (n.attenuationColor = this.attenuationColor.getHex()),
      void 0 !== this.size && (n.size = this.size),
      null !== this.shadowSide && (n.shadowSide = this.shadowSide),
      void 0 !== this.sizeAttenuation &&
        (n.sizeAttenuation = this.sizeAttenuation),
      1 !== this.blending && (n.blending = this.blending),
      0 !== this.side && (n.side = this.side),
      !0 === this.vertexColors && (n.vertexColors = !0),
      1 > this.opacity && (n.opacity = this.opacity),
      !0 === this.transparent && (n.transparent = !0),
      204 !== this.blendSrc && (n.blendSrc = this.blendSrc),
      205 !== this.blendDst && (n.blendDst = this.blendDst),
      this.blendEquation !== o && (n.blendEquation = this.blendEquation),
      null !== this.blendSrcAlpha && (n.blendSrcAlpha = this.blendSrcAlpha),
      null !== this.blendDstAlpha && (n.blendDstAlpha = this.blendDstAlpha),
      null !== this.blendEquationAlpha &&
        (n.blendEquationAlpha = this.blendEquationAlpha),
      this.blendColor &&
        this.blendColor.isColor &&
        (n.blendColor = this.blendColor.getHex()),
      0 !== this.blendAlpha && (n.blendAlpha = this.blendAlpha),
      3 !== this.depthFunc && (n.depthFunc = this.depthFunc),
      !1 === this.depthTest && (n.depthTest = this.depthTest),
      !1 === this.depthWrite && (n.depthWrite = this.depthWrite),
      !1 === this.colorWrite && (n.colorWrite = this.colorWrite),
      255 !== this.stencilWriteMask &&
        (n.stencilWriteMask = this.stencilWriteMask),
      519 !== this.stencilFunc && (n.stencilFunc = this.stencilFunc),
      0 !== this.stencilRef && (n.stencilRef = this.stencilRef),
      255 !== this.stencilFuncMask &&
        (n.stencilFuncMask = this.stencilFuncMask),
      this.stencilFail !== Wt && (n.stencilFail = this.stencilFail),
      this.stencilZFail !== Wt && (n.stencilZFail = this.stencilZFail),
      this.stencilZPass !== Wt && (n.stencilZPass = this.stencilZPass),
      !0 === this.stencilWrite && (n.stencilWrite = this.stencilWrite),
      void 0 !== this.rotation &&
        0 !== this.rotation &&
        (n.rotation = this.rotation),
      !0 === this.polygonOffset && (n.polygonOffset = !0),
      0 !== this.polygonOffsetFactor &&
        (n.polygonOffsetFactor = this.polygonOffsetFactor),
      0 !== this.polygonOffsetUnits &&
        (n.polygonOffsetUnits = this.polygonOffsetUnits),
      void 0 !== this.linewidth &&
        1 !== this.linewidth &&
        (n.linewidth = this.linewidth),
      void 0 !== this.dashSize && (n.dashSize = this.dashSize),
      void 0 !== this.gapSize && (n.gapSize = this.gapSize),
      void 0 !== this.scale && (n.scale = this.scale),
      !0 === this.dithering && (n.dithering = !0),
      this.alphaTest > 0 && (n.alphaTest = this.alphaTest),
      !0 === this.alphaHash && (n.alphaHash = !0),
      !0 === this.alphaToCoverage && (n.alphaToCoverage = !0),
      !0 === this.premultipliedAlpha && (n.premultipliedAlpha = !0),
      !0 === this.forceSinglePass && (n.forceSinglePass = !0),
      !0 === this.wireframe && (n.wireframe = !0),
      this.wireframeLinewidth > 1 &&
        (n.wireframeLinewidth = this.wireframeLinewidth),
      "round" !== this.wireframeLinecap &&
        (n.wireframeLinecap = this.wireframeLinecap),
      "round" !== this.wireframeLinejoin &&
        (n.wireframeLinejoin = this.wireframeLinejoin),
      !0 === this.flatShading && (n.flatShading = !0),
      !1 === this.visible && (n.visible = !1),
      !1 === this.toneMapped && (n.toneMapped = !1),
      !1 === this.fog && (n.fog = !1),
      Object.keys(this.userData).length > 0 && (n.userData = this.userData),
      e)
    ) {
      const e = i(t.textures),
        r = i(t.images);
      e.length > 0 && (n.textures = e), r.length > 0 && (n.images = r);
    }
    return n;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(t) {
    (this.name = t.name),
      (this.blending = t.blending),
      (this.side = t.side),
      (this.vertexColors = t.vertexColors),
      (this.opacity = t.opacity),
      (this.transparent = t.transparent),
      (this.blendSrc = t.blendSrc),
      (this.blendDst = t.blendDst),
      (this.blendEquation = t.blendEquation),
      (this.blendSrcAlpha = t.blendSrcAlpha),
      (this.blendDstAlpha = t.blendDstAlpha),
      (this.blendEquationAlpha = t.blendEquationAlpha),
      this.blendColor.copy(t.blendColor),
      (this.blendAlpha = t.blendAlpha),
      (this.depthFunc = t.depthFunc),
      (this.depthTest = t.depthTest),
      (this.depthWrite = t.depthWrite),
      (this.stencilWriteMask = t.stencilWriteMask),
      (this.stencilFunc = t.stencilFunc),
      (this.stencilRef = t.stencilRef),
      (this.stencilFuncMask = t.stencilFuncMask),
      (this.stencilFail = t.stencilFail),
      (this.stencilZFail = t.stencilZFail),
      (this.stencilZPass = t.stencilZPass),
      (this.stencilWrite = t.stencilWrite);
    const e = t.clippingPlanes;
    let n = null;
    if (null !== e) {
      const t = e.length;
      n = Array(t);
      for (let i = 0; i !== t; ++i) n[i] = e[i].clone();
    }
    return (
      (this.clippingPlanes = n),
      (this.clipIntersection = t.clipIntersection),
      (this.clipShadows = t.clipShadows),
      (this.shadowSide = t.shadowSide),
      (this.colorWrite = t.colorWrite),
      (this.precision = t.precision),
      (this.polygonOffset = t.polygonOffset),
      (this.polygonOffsetFactor = t.polygonOffsetFactor),
      (this.polygonOffsetUnits = t.polygonOffsetUnits),
      (this.dithering = t.dithering),
      (this.alphaTest = t.alphaTest),
      (this.alphaHash = t.alphaHash),
      (this.alphaToCoverage = t.alphaToCoverage),
      (this.premultipliedAlpha = t.premultipliedAlpha),
      (this.forceSinglePass = t.forceSinglePass),
      (this.visible = t.visible),
      (this.toneMapped = t.toneMapped),
      (this.userData = JSON.parse(JSON.stringify(t.userData))),
      this
    );
  }
  dispose() {
    this.dispatchEvent({
      type: "dispose",
    });
  }
  set needsUpdate(t) {
    !0 === t && this.version++;
  }
  onBuild() {}
}
class ui extends hi {
  constructor(t) {
    super(),
      (this.isMeshBasicMaterial = !0),
      (this.type = "MeshBasicMaterial"),
      (this.color = new oi(16777215)),
      (this.map = null),
      (this.lightMap = null),
      (this.lightMapIntensity = 1),
      (this.aoMap = null),
      (this.aoMapIntensity = 1),
      (this.specularMap = null),
      (this.alphaMap = null),
      (this.envMap = null),
      (this.envMapRotation = new bn()),
      (this.combine = 0),
      (this.reflectivity = 1),
      (this.refractionRatio = 0.98),
      (this.wireframe = !1),
      (this.wireframeLinewidth = 1),
      (this.wireframeLinecap = "round"),
      (this.wireframeLinejoin = "round"),
      (this.fog = !0),
      this.setValues(t);
  }
  copy(t) {
    return (
      super.copy(t),
      this.color.copy(t.color),
      (this.map = t.map),
      (this.lightMap = t.lightMap),
      (this.lightMapIntensity = t.lightMapIntensity),
      (this.aoMap = t.aoMap),
      (this.aoMapIntensity = t.aoMapIntensity),
      (this.specularMap = t.specularMap),
      (this.alphaMap = t.alphaMap),
      (this.envMap = t.envMap),
      this.envMapRotation.copy(t.envMapRotation),
      (this.combine = t.combine),
      (this.reflectivity = t.reflectivity),
      (this.refractionRatio = t.refractionRatio),
      (this.wireframe = t.wireframe),
      (this.wireframeLinewidth = t.wireframeLinewidth),
      (this.wireframeLinecap = t.wireframeLinecap),
      (this.wireframeLinejoin = t.wireframeLinejoin),
      (this.fog = t.fog),
      this
    );
  }
}
const di = new Be(),
  pi = new ue();
class fi {
  constructor(t, e, n = !1) {
    if (Array.isArray(t))
      throw new TypeError(
        "THREE.BufferAttribute: array should be a Typed Array."
      );
    (this.isBufferAttribute = !0),
      (this.name = ""),
      (this.array = t),
      (this.itemSize = e),
      (this.count = void 0 !== t ? t.length / e : 0),
      (this.normalized = n),
      (this.usage = 35044),
      (this.updateRanges = []),
      (this.gpuType = J),
      (this.version = 0);
  }
  onUploadCallback() {}
  set needsUpdate(t) {
    !0 === t && this.version++;
  }
  setUsage(t) {
    return (this.usage = t), this;
  }
  addUpdateRange(t, e) {
    this.updateRanges.push({
      start: t,
      count: e,
    });
  }
  clearUpdateRanges() {
    this.updateRanges.length = 0;
  }
  copy(t) {
    return (
      (this.name = t.name),
      (this.array = new t.array.constructor(t.array)),
      (this.itemSize = t.itemSize),
      (this.count = t.count),
      (this.normalized = t.normalized),
      (this.usage = t.usage),
      (this.gpuType = t.gpuType),
      this
    );
  }
  copyAt(t, e, n) {
    (t *= this.itemSize), (n *= e.itemSize);
    for (let i = 0, r = this.itemSize; r > i; i++)
      this.array[t + i] = e.array[n + i];
    return this;
  }
  copyArray(t) {
    return this.array.set(t), this;
  }
  applyMatrix3(t) {
    if (2 === this.itemSize)
      for (let e = 0, n = this.count; n > e; e++)
        pi.fromBufferAttribute(this, e),
          pi.applyMatrix3(t),
          this.setXY(e, pi.x, pi.y);
    else if (3 === this.itemSize)
      for (let e = 0, n = this.count; n > e; e++)
        di.fromBufferAttribute(this, e),
          di.applyMatrix3(t),
          this.setXYZ(e, di.x, di.y, di.z);
    return this;
  }
  applyMatrix4(t) {
    for (let e = 0, n = this.count; n > e; e++)
      di.fromBufferAttribute(this, e),
        di.applyMatrix4(t),
        this.setXYZ(e, di.x, di.y, di.z);
    return this;
  }
  applyNormalMatrix(t) {
    for (let e = 0, n = this.count; n > e; e++)
      di.fromBufferAttribute(this, e),
        di.applyNormalMatrix(t),
        this.setXYZ(e, di.x, di.y, di.z);
    return this;
  }
  transformDirection(t) {
    for (let e = 0, n = this.count; n > e; e++)
      di.fromBufferAttribute(this, e),
        di.transformDirection(t),
        this.setXYZ(e, di.x, di.y, di.z);
    return this;
  }
  set(t, e = 0) {
    return this.array.set(t, e), this;
  }
  getComponent(t, e) {
    let n = this.array[t * this.itemSize + e];
    return this.normalized && (n = ce(n, this.array)), n;
  }
  setComponent(t, e, n) {
    return (
      this.normalized && (n = he(n, this.array)),
      (this.array[t * this.itemSize + e] = n),
      this
    );
  }
  getX(t) {
    let e = this.array[t * this.itemSize];
    return this.normalized && (e = ce(e, this.array)), e;
  }
  setX(t, e) {
    return (
      this.normalized && (e = he(e, this.array)),
      (this.array[t * this.itemSize] = e),
      this
    );
  }
  getY(t) {
    let e = this.array[t * this.itemSize + 1];
    return this.normalized && (e = ce(e, this.array)), e;
  }
  setY(t, e) {
    return (
      this.normalized && (e = he(e, this.array)),
      (this.array[t * this.itemSize + 1] = e),
      this
    );
  }
  getZ(t) {
    let e = this.array[t * this.itemSize + 2];
    return this.normalized && (e = ce(e, this.array)), e;
  }
  setZ(t, e) {
    return (
      this.normalized && (e = he(e, this.array)),
      (this.array[t * this.itemSize + 2] = e),
      this
    );
  }
  getW(t) {
    let e = this.array[t * this.itemSize + 3];
    return this.normalized && (e = ce(e, this.array)), e;
  }
  setW(t, e) {
    return (
      this.normalized && (e = he(e, this.array)),
      (this.array[t * this.itemSize + 3] = e),
      this
    );
  }
  setXY(t, e, n) {
    return (
      (t *= this.itemSize),
      this.normalized && ((e = he(e, this.array)), (n = he(n, this.array))),
      (this.array[t + 0] = e),
      (this.array[t + 1] = n),
      this
    );
  }
  setXYZ(t, e, n, i) {
    return (
      (t *= this.itemSize),
      this.normalized &&
        ((e = he(e, this.array)),
        (n = he(n, this.array)),
        (i = he(i, this.array))),
      (this.array[t + 0] = e),
      (this.array[t + 1] = n),
      (this.array[t + 2] = i),
      this
    );
  }
  setXYZW(t, e, n, i, r) {
    return (
      (t *= this.itemSize),
      this.normalized &&
        ((e = he(e, this.array)),
        (n = he(n, this.array)),
        (i = he(i, this.array)),
        (r = he(r, this.array))),
      (this.array[t + 0] = e),
      (this.array[t + 1] = n),
      (this.array[t + 2] = i),
      (this.array[t + 3] = r),
      this
    );
  }
  onUpload(t) {
    return (this.onUploadCallback = t), this;
  }
  clone() {
    return new this.constructor(this.array, this.itemSize).copy(this);
  }
  toJSON() {
    const t = {
      itemSize: this.itemSize,
      type: this.array.constructor.name,
      array: Array.from(this.array),
      normalized: this.normalized,
    };
    return (
      "" !== this.name && (t.name = this.name),
      35044 !== this.usage && (t.usage = this.usage),
      t
    );
  }
}
class mi extends fi {
  constructor(t, e, n) {
    super(new Uint16Array(t), e, n);
  }
}
class gi extends fi {
  constructor(t, e, n) {
    super(new Uint32Array(t), e, n);
  }
}
class _i extends fi {
  constructor(t, e, n) {
    super(new Float32Array(t), e, n);
  }
}
let vi = 0;
const xi = new mn(),
  Mi = new Gn(),
  Si = new Be(),
  yi = new Ve(),
  Ei = new Ve(),
  Ti = new Be();
class bi extends ne {
  constructor() {
    super(),
      (this.isBufferGeometry = !0),
      Object.defineProperty(this, "id", {
        value: vi++,
      }),
      (this.uuid = se()),
      (this.name = ""),
      (this.type = "BufferGeometry"),
      (this.index = null),
      (this.indirect = null),
      (this.attributes = {}),
      (this.morphAttributes = {}),
      (this.morphTargetsRelative = !1),
      (this.groups = []),
      (this.boundingBox = null),
      (this.boundingSphere = null),
      (this.drawRange = {
        start: 0,
        count: 1 / 0,
      }),
      (this.userData = {});
  }
  getIndex() {
    return this.index;
  }
  setIndex(t) {
    return (
      (this.index = Array.isArray(t) ? new (fe(t) ? gi : mi)(t, 1) : t), this
    );
  }
  setIndirect(t) {
    return (this.indirect = t), this;
  }
  getIndirect() {
    return this.indirect;
  }
  getAttribute(t) {
    return this.attributes[t];
  }
  setAttribute(t, e) {
    return (this.attributes[t] = e), this;
  }
  deleteAttribute(t) {
    return delete this.attributes[t], this;
  }
  hasAttribute(t) {
    return void 0 !== this.attributes[t];
  }
  addGroup(t, e, n = 0) {
    this.groups.push({
      start: t,
      count: e,
      materialIndex: n,
    });
  }
  clearGroups() {
    this.groups = [];
  }
  setDrawRange(t, e) {
    (this.drawRange.start = t), (this.drawRange.count = e);
  }
  applyMatrix4(t) {
    const e = this.attributes.position;
    void 0 !== e && (e.applyMatrix4(t), (e.needsUpdate = !0));
    const n = this.attributes.normal;
    if (void 0 !== n) {
      const e = new de().getNormalMatrix(t);
      n.applyNormalMatrix(e), (n.needsUpdate = !0);
    }
    const i = this.attributes.tangent;
    return (
      void 0 !== i && (i.transformDirection(t), (i.needsUpdate = !0)),
      null !== this.boundingBox && this.computeBoundingBox(),
      null !== this.boundingSphere && this.computeBoundingSphere(),
      this
    );
  }
  applyQuaternion(t) {
    return xi.makeRotationFromQuaternion(t), this.applyMatrix4(xi), this;
  }
  rotateX(t) {
    return xi.makeRotationX(t), this.applyMatrix4(xi), this;
  }
  rotateY(t) {
    return xi.makeRotationY(t), this.applyMatrix4(xi), this;
  }
  rotateZ(t) {
    return xi.makeRotationZ(t), this.applyMatrix4(xi), this;
  }
  translate(t, e, n) {
    return xi.makeTranslation(t, e, n), this.applyMatrix4(xi), this;
  }
  scale(t, e, n) {
    return xi.makeScale(t, e, n), this.applyMatrix4(xi), this;
  }
  lookAt(t) {
    return Mi.lookAt(t), Mi.updateMatrix(), this.applyMatrix4(Mi.matrix), this;
  }
  center() {
    return (
      this.computeBoundingBox(),
      this.boundingBox.getCenter(Si).negate(),
      this.translate(Si.x, Si.y, Si.z),
      this
    );
  }
  setFromPoints(t) {
    const e = this.getAttribute("position");
    if (void 0 === e) {
      const e = [];
      for (let n = 0, i = t.length; i > n; n++) {
        const i = t[n];
        e.push(i.x, i.y, i.z || 0);
      }
      this.setAttribute("position", new _i(e, 3));
    } else {
      const n = Math.min(t.length, e.count);
      for (let i = 0; n > i; i++) {
        const n = t[i];
        e.setXYZ(i, n.x, n.y, n.z || 0);
      }
      t.length, e.count, (e.needsUpdate = !0);
    }
    return this;
  }
  computeBoundingBox() {
    null === this.boundingBox && (this.boundingBox = new Ve());
    const t = this.attributes.position,
      e = this.morphAttributes.position;
    if (t && t.isGLBufferAttribute)
      this.boundingBox.set(
        new Be(-1 / 0, -1 / 0, -1 / 0),
        new Be(1 / 0, 1 / 0, 1 / 0)
      );
    else {
      if (void 0 !== t) {
        if ((this.boundingBox.setFromBufferAttribute(t), e))
          for (let t = 0, n = e.length; n > t; t++) {
            const n = e[t];
            yi.setFromBufferAttribute(n),
              this.morphTargetsRelative
                ? (Ti.addVectors(this.boundingBox.min, yi.min),
                  this.boundingBox.expandByPoint(Ti),
                  Ti.addVectors(this.boundingBox.max, yi.max),
                  this.boundingBox.expandByPoint(Ti))
                : (this.boundingBox.expandByPoint(yi.min),
                  this.boundingBox.expandByPoint(yi.max));
          }
      } else this.boundingBox.makeEmpty();
      isNaN(this.boundingBox.min.x) ||
        isNaN(this.boundingBox.min.y) ||
        this.boundingBox.min.z;
    }
  }
  computeBoundingSphere() {
    null === this.boundingSphere && (this.boundingSphere = new sn());
    const t = this.attributes.position,
      e = this.morphAttributes.position;
    if (t && t.isGLBufferAttribute) this.boundingSphere.set(new Be(), 1 / 0);
    else if (t) {
      const n = this.boundingSphere.center;
      if ((yi.setFromBufferAttribute(t), e))
        for (let t = 0, r = e.length; r > t; t++) {
          const n = e[t];
          Ei.setFromBufferAttribute(n),
            this.morphTargetsRelative
              ? (Ti.addVectors(yi.min, Ei.min),
                yi.expandByPoint(Ti),
                Ti.addVectors(yi.max, Ei.max),
                yi.expandByPoint(Ti))
              : (yi.expandByPoint(Ei.min), yi.expandByPoint(Ei.max));
        }
      yi.getCenter(n);
      let i = 0;
      for (let e = 0, r = t.count; r > e; e++)
        Ti.fromBufferAttribute(t, e),
          (i = Math.max(i, n.distanceToSquared(Ti)));
      if (e)
        for (let r = 0, a = e.length; a > r; r++) {
          const a = e[r],
            s = this.morphTargetsRelative;
          for (let e = 0, r = a.count; r > e; e++)
            Ti.fromBufferAttribute(a, e),
              s && (Si.fromBufferAttribute(t, e), Ti.add(Si)),
              (i = Math.max(i, n.distanceToSquared(Ti)));
        }
      (this.boundingSphere.radius = Math.sqrt(i)), this.boundingSphere.radius;
    }
  }
  computeTangents() {
    const t = this.index,
      e = this.attributes;
    if (
      null === t ||
      void 0 === e.position ||
      void 0 === e.normal ||
      void 0 === e.uv
    )
      return;
    const n = e.position,
      i = e.normal,
      r = e.uv;
    !1 === this.hasAttribute("tangent") &&
      this.setAttribute("tangent", new fi(new Float32Array(4 * n.count), 4));
    const a = this.getAttribute("tangent"),
      s = [],
      o = [];
    for (let E = 0; E < n.count; E++) (s[E] = new Be()), (o[E] = new Be());
    const l = new Be(),
      c = new Be(),
      h = new Be(),
      u = new ue(),
      d = new ue(),
      p = new ue(),
      f = new Be(),
      m = new Be();
    function g(t, e, i) {
      l.fromBufferAttribute(n, t),
        c.fromBufferAttribute(n, e),
        h.fromBufferAttribute(n, i),
        u.fromBufferAttribute(r, t),
        d.fromBufferAttribute(r, e),
        p.fromBufferAttribute(r, i),
        c.sub(l),
        h.sub(l),
        d.sub(u),
        p.sub(u);
      const a = 1 / (d.x * p.y - p.x * d.y);
      isFinite(a) &&
        (f
          .copy(c)
          .multiplyScalar(p.y)
          .addScaledVector(h, -d.y)
          .multiplyScalar(a),
        m
          .copy(h)
          .multiplyScalar(d.x)
          .addScaledVector(c, -p.x)
          .multiplyScalar(a),
        s[t].add(f),
        s[e].add(f),
        s[i].add(f),
        o[t].add(m),
        o[e].add(m),
        o[i].add(m));
    }
    let _ = this.groups;
    0 === _.length &&
      (_ = [
        {
          start: 0,
          count: t.count,
        },
      ]);
    for (let E = 0, T = _.length; T > E; ++E) {
      const e = _[E],
        n = e.start;
      for (let i = n, r = n + e.count; r > i; i += 3)
        g(t.getX(i + 0), t.getX(i + 1), t.getX(i + 2));
    }
    const v = new Be(),
      x = new Be(),
      M = new Be(),
      S = new Be();
    function y(t) {
      M.fromBufferAttribute(i, t), S.copy(M);
      const e = s[t];
      v.copy(e),
        v.sub(M.multiplyScalar(M.dot(e))).normalize(),
        x.crossVectors(S, e);
      const n = 0 > x.dot(o[t]) ? -1 : 1;
      a.setXYZW(t, v.x, v.y, v.z, n);
    }
    for (let E = 0, T = _.length; T > E; ++E) {
      const e = _[E],
        n = e.start;
      for (let i = n, r = n + e.count; r > i; i += 3)
        y(t.getX(i + 0)), y(t.getX(i + 1)), y(t.getX(i + 2));
    }
  }
  computeVertexNormals() {
    const t = this.index,
      e = this.getAttribute("position");
    if (void 0 !== e) {
      let n = this.getAttribute("normal");
      if (void 0 === n)
        (n = new fi(new Float32Array(3 * e.count), 3)),
          this.setAttribute("normal", n);
      else for (let t = 0, e = n.count; e > t; t++) n.setXYZ(t, 0, 0, 0);
      const i = new Be(),
        r = new Be(),
        a = new Be(),
        s = new Be(),
        o = new Be(),
        l = new Be(),
        c = new Be(),
        h = new Be();
      if (t)
        for (let u = 0, d = t.count; d > u; u += 3) {
          const d = t.getX(u + 0),
            p = t.getX(u + 1),
            f = t.getX(u + 2);
          i.fromBufferAttribute(e, d),
            r.fromBufferAttribute(e, p),
            a.fromBufferAttribute(e, f),
            c.subVectors(a, r),
            h.subVectors(i, r),
            c.cross(h),
            s.fromBufferAttribute(n, d),
            o.fromBufferAttribute(n, p),
            l.fromBufferAttribute(n, f),
            s.add(c),
            o.add(c),
            l.add(c),
            n.setXYZ(d, s.x, s.y, s.z),
            n.setXYZ(p, o.x, o.y, o.z),
            n.setXYZ(f, l.x, l.y, l.z);
        }
      else
        for (let t = 0, u = e.count; u > t; t += 3)
          i.fromBufferAttribute(e, t + 0),
            r.fromBufferAttribute(e, t + 1),
            a.fromBufferAttribute(e, t + 2),
            c.subVectors(a, r),
            h.subVectors(i, r),
            c.cross(h),
            n.setXYZ(t + 0, c.x, c.y, c.z),
            n.setXYZ(t + 1, c.x, c.y, c.z),
            n.setXYZ(t + 2, c.x, c.y, c.z);
      this.normalizeNormals(), (n.needsUpdate = !0);
    }
  }
  normalizeNormals() {
    const t = this.attributes.normal;
    for (let e = 0, n = t.count; n > e; e++)
      Ti.fromBufferAttribute(t, e),
        Ti.normalize(),
        t.setXYZ(e, Ti.x, Ti.y, Ti.z);
  }
  toNonIndexed() {
    function t(t, e) {
      const n = t.array,
        i = t.itemSize,
        r = t.normalized,
        a = new n.constructor(e.length * i);
      let s = 0,
        o = 0;
      for (let l = 0, c = e.length; c > l; l++) {
        s = t.isInterleavedBufferAttribute
          ? e[l] * t.data.stride + t.offset
          : e[l] * i;
        for (let t = 0; i > t; t++) a[o++] = n[s++];
      }
      return new fi(a, i, r);
    }
    if (null === this.index) return this;
    const e = new bi(),
      n = this.index.array,
      i = this.attributes;
    for (const s in i) {
      const r = t(i[s], n);
      e.setAttribute(s, r);
    }
    const r = this.morphAttributes;
    for (const s in r) {
      const i = [],
        a = r[s];
      for (let e = 0, r = a.length; r > e; e++) {
        const r = t(a[e], n);
        i.push(r);
      }
      e.morphAttributes[s] = i;
    }
    e.morphTargetsRelative = this.morphTargetsRelative;
    const a = this.groups;
    for (let s = 0, o = a.length; o > s; s++) {
      const t = a[s];
      e.addGroup(t.start, t.count, t.materialIndex);
    }
    return e;
  }
  toJSON() {
    const t = {
      metadata: {
        version: 4.6,
        type: "BufferGeometry",
        generator: "BufferGeometry.toJSON",
      },
    };
    if (
      ((t.uuid = this.uuid),
      (t.type = this.type),
      "" !== this.name && (t.name = this.name),
      Object.keys(this.userData).length > 0 && (t.userData = this.userData),
      void 0 !== this.parameters)
    ) {
      const e = this.parameters;
      for (const n in e) void 0 !== e[n] && (t[n] = e[n]);
      return t;
    }
    t.data = {
      attributes: {},
    };
    const e = this.index;
    null !== e &&
      (t.data.index = {
        type: e.array.constructor.name,
        array: [].slice.call(e.array),
      });
    const n = this.attributes;
    for (const o in n) {
      const e = n[o];
      t.data.attributes[o] = e.toJSON(t.data);
    }
    const i = {};
    let r = !1;
    for (const o in this.morphAttributes) {
      const e = this.morphAttributes[o],
        n = [];
      for (let i = 0, r = e.length; r > i; i++) {
        const r = e[i];
        n.push(r.toJSON(t.data));
      }
      n.length > 0 && ((i[o] = n), (r = !0));
    }
    r &&
      ((t.data.morphAttributes = i),
      (t.data.morphTargetsRelative = this.morphTargetsRelative));
    const a = this.groups;
    a.length > 0 && (t.data.groups = JSON.parse(JSON.stringify(a)));
    const s = this.boundingSphere;
    return (
      null !== s &&
        (t.data.boundingSphere = {
          center: s.center.toArray(),
          radius: s.radius,
        }),
      t
    );
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(t) {
    (this.index = null),
      (this.attributes = {}),
      (this.morphAttributes = {}),
      (this.groups = []),
      (this.boundingBox = null),
      (this.boundingSphere = null);
    const e = {};
    this.name = t.name;
    const n = t.index;
    null !== n && this.setIndex(n.clone(e));
    const i = t.attributes;
    for (const l in i) {
      const t = i[l];
      this.setAttribute(l, t.clone(e));
    }
    const r = t.morphAttributes;
    for (const l in r) {
      const t = [],
        n = r[l];
      for (let i = 0, r = n.length; r > i; i++) t.push(n[i].clone(e));
      this.morphAttributes[l] = t;
    }
    this.morphTargetsRelative = t.morphTargetsRelative;
    const a = t.groups;
    for (let l = 0, c = a.length; c > l; l++) {
      const t = a[l];
      this.addGroup(t.start, t.count, t.materialIndex);
    }
    const s = t.boundingBox;
    null !== s && (this.boundingBox = s.clone());
    const o = t.boundingSphere;
    return (
      null !== o && (this.boundingSphere = o.clone()),
      (this.drawRange.start = t.drawRange.start),
      (this.drawRange.count = t.drawRange.count),
      (this.userData = t.userData),
      this
    );
  }
  dispose() {
    this.dispatchEvent({
      type: "dispose",
    });
  }
}
const Ai = new mn(),
  wi = new fn(),
  Ri = new sn(),
  Ci = new Be(),
  Pi = new Be(),
  Li = new Be(),
  Ui = new Be(),
  Di = new Be(),
  Ii = new Be(),
  Ni = new Be(),
  Oi = new Be();
class Fi extends Gn {
  constructor(t = new bi(), e = new ui()) {
    super(),
      (this.isMesh = !0),
      (this.type = "Mesh"),
      (this.geometry = t),
      (this.material = e),
      this.updateMorphTargets();
  }
  copy(t, e) {
    return (
      super.copy(t, e),
      void 0 !== t.morphTargetInfluences &&
        (this.morphTargetInfluences = t.morphTargetInfluences.slice()),
      void 0 !== t.morphTargetDictionary &&
        (this.morphTargetDictionary = Object.assign(
          {},
          t.morphTargetDictionary
        )),
      (this.material = Array.isArray(t.material)
        ? t.material.slice()
        : t.material),
      (this.geometry = t.geometry),
      this
    );
  }
  updateMorphTargets() {
    const t = this.geometry.morphAttributes,
      e = Object.keys(t);
    if (e.length > 0) {
      const n = t[e[0]];
      if (void 0 !== n) {
        (this.morphTargetInfluences = []), (this.morphTargetDictionary = {});
        for (let t = 0, e = n.length; e > t; t++) {
          const e = n[t].name || t + "";
          this.morphTargetInfluences.push(0),
            (this.morphTargetDictionary[e] = t);
        }
      }
    }
  }
  getVertexPosition(t, e) {
    const n = this.geometry,
      i = n.attributes.position,
      r = n.morphAttributes.position,
      a = n.morphTargetsRelative;
    e.fromBufferAttribute(i, t);
    const s = this.morphTargetInfluences;
    if (r && s) {
      Ii.set(0, 0, 0);
      for (let n = 0, i = r.length; i > n; n++) {
        const i = s[n],
          o = r[n];
        0 !== i &&
          (Di.fromBufferAttribute(o, t),
          a ? Ii.addScaledVector(Di, i) : Ii.addScaledVector(Di.sub(e), i));
      }
      e.add(Ii);
    }
    return e;
  }
  raycast(t, e) {
    const n = this.geometry,
      i = this.material,
      r = this.matrixWorld;
    if (void 0 !== i) {
      if (
        (null === n.boundingSphere && n.computeBoundingSphere(),
        Ri.copy(n.boundingSphere),
        Ri.applyMatrix4(r),
        wi.copy(t.ray).recast(t.near),
        !1 === Ri.containsPoint(wi.origin))
      ) {
        if (null === wi.intersectSphere(Ri, Ci)) return;
        if (wi.origin.distanceToSquared(Ci) > (t.far - t.near) ** 2) return;
      }
      Ai.copy(r).invert(),
        wi.copy(t.ray).applyMatrix4(Ai),
        (null !== n.boundingBox && !1 === wi.intersectsBox(n.boundingBox)) ||
          this._computeIntersections(t, e, wi);
    }
  }
  _computeIntersections(t, e, n) {
    let i;
    const r = this.geometry,
      a = this.material,
      s = r.index,
      o = r.attributes.position,
      l = r.attributes.uv,
      c = r.attributes.uv1,
      h = r.attributes.normal,
      u = r.groups,
      d = r.drawRange;
    if (null !== s)
      if (Array.isArray(a))
        for (let p = 0, f = u.length; f > p; p++) {
          const r = u[p],
            o = a[r.materialIndex];
          for (
            let a = Math.max(r.start, d.start),
              u = Math.min(
                s.count,
                Math.min(r.start + r.count, d.start + d.count)
              );
            u > a;
            a += 3
          )
            (i = Bi(
              this,
              o,
              t,
              n,
              l,
              c,
              h,
              s.getX(a),
              s.getX(a + 1),
              s.getX(a + 2)
            )),
              i &&
                ((i.faceIndex = Math.floor(a / 3)),
                (i.face.materialIndex = r.materialIndex),
                e.push(i));
        }
      else
        for (
          let p = Math.max(0, d.start),
            f = Math.min(s.count, d.start + d.count);
          f > p;
          p += 3
        )
          (i = Bi(
            this,
            a,
            t,
            n,
            l,
            c,
            h,
            s.getX(p),
            s.getX(p + 1),
            s.getX(p + 2)
          )),
            i && ((i.faceIndex = Math.floor(p / 3)), e.push(i));
    else if (void 0 !== o)
      if (Array.isArray(a))
        for (let p = 0, f = u.length; f > p; p++) {
          const r = u[p],
            s = a[r.materialIndex];
          for (
            let a = Math.max(r.start, d.start),
              u = Math.min(
                o.count,
                Math.min(r.start + r.count, d.start + d.count)
              );
            u > a;
            a += 3
          )
            (i = Bi(this, s, t, n, l, c, h, a, a + 1, a + 2)),
              i &&
                ((i.faceIndex = Math.floor(a / 3)),
                (i.face.materialIndex = r.materialIndex),
                e.push(i));
        }
      else
        for (
          let p = Math.max(0, d.start),
            f = Math.min(o.count, d.start + d.count);
          f > p;
          p += 3
        )
          (i = Bi(this, a, t, n, l, c, h, p, p + 1, p + 2)),
            i && ((i.faceIndex = Math.floor(p / 3)), e.push(i));
  }
}
function Bi(t, e, n, i, r, a, s, o, l, c) {
  t.getVertexPosition(o, Pi),
    t.getVertexPosition(l, Li),
    t.getVertexPosition(c, Ui);
  const h = (function (t, e, n, i, r, a, s, o) {
    let l;
    if (
      ((l =
        1 === e.side
          ? i.intersectTriangle(s, a, r, !0, o)
          : i.intersectTriangle(r, a, s, 0 === e.side, o)),
      null === l)
    )
      return null;
    Oi.copy(o), Oi.applyMatrix4(t.matrixWorld);
    const c = n.ray.origin.distanceTo(Oi);
    return c < n.near || c > n.far
      ? null
      : {
          distance: c,
          point: Oi.clone(),
          object: t,
        };
  })(t, e, n, i, Pi, Li, Ui, Ni);
  if (h) {
    const t = new Be();
    ni.getBarycoord(Ni, Pi, Li, Ui, t),
      r && (h.uv = ni.getInterpolatedAttribute(r, o, l, c, t, new ue())),
      a && (h.uv1 = ni.getInterpolatedAttribute(a, o, l, c, t, new ue())),
      s &&
        ((h.normal = ni.getInterpolatedAttribute(s, o, l, c, t, new Be())),
        h.normal.dot(i.direction) > 0 && h.normal.multiplyScalar(-1));
    const e = {
      a: o,
      b: l,
      c: c,
      normal: new Be(),
      materialIndex: 0,
    };
    ni.getNormal(Pi, Li, Ui, e.normal), (h.face = e), (h.barycoord = t);
  }
  return h;
}
class zi extends bi {
  constructor(t = 1, e = 1, n = 1, i = 1, r = 1, a = 1) {
    super(),
      (this.type = "BoxGeometry"),
      (this.parameters = {
        width: t,
        height: e,
        depth: n,
        widthSegments: i,
        heightSegments: r,
        depthSegments: a,
      });
    const s = this;
    (i = Math.floor(i)), (r = Math.floor(r));
    const o = [],
      l = [],
      c = [],
      h = [];
    let u = 0,
      d = 0;
    function p(t, e, n, i, r, a, p, f, m, g, _) {
      const v = a / m,
        x = p / g,
        M = a / 2,
        S = p / 2,
        y = f / 2,
        E = m + 1,
        T = g + 1;
      let b = 0,
        A = 0;
      const w = new Be();
      for (let s = 0; T > s; s++) {
        const a = s * x - S;
        for (let o = 0; E > o; o++) {
          const u = o * v - M;
          (w[t] = u * i),
            (w[e] = a * r),
            (w[n] = y),
            l.push(w.x, w.y, w.z),
            (w[t] = 0),
            (w[e] = 0),
            (w[n] = f > 0 ? 1 : -1),
            c.push(w.x, w.y, w.z),
            h.push(o / m),
            h.push(1 - s / g),
            (b += 1);
        }
      }
      for (let s = 0; g > s; s++)
        for (let t = 0; m > t; t++) {
          const e = u + t + E * s,
            n = u + t + E * (s + 1),
            i = u + (t + 1) + E * (s + 1),
            r = u + (t + 1) + E * s;
          o.push(e, n, r), o.push(n, i, r), (A += 6);
        }
      s.addGroup(d, A, _), (d += A), (u += b);
    }
    p("z", "y", "x", -1, -1, n, e, t, (a = Math.floor(a)), r, 0),
      p("z", "y", "x", 1, -1, n, e, -t, a, r, 1),
      p("x", "z", "y", 1, 1, t, n, e, i, a, 2),
      p("x", "z", "y", 1, -1, t, n, -e, i, a, 3),
      p("x", "y", "z", 1, -1, t, e, n, i, r, 4),
      p("x", "y", "z", -1, -1, t, e, -n, i, r, 5),
      this.setIndex(o),
      this.setAttribute("position", new _i(l, 3)),
      this.setAttribute("normal", new _i(c, 3)),
      this.setAttribute("uv", new _i(h, 2));
  }
  copy(t) {
    return (
      super.copy(t), (this.parameters = Object.assign({}, t.parameters)), this
    );
  }
  static fromJSON(t) {
    return new zi(
      t.width,
      t.height,
      t.depth,
      t.widthSegments,
      t.heightSegments,
      t.depthSegments
    );
  }
}
function Hi(t) {
  const e = {};
  for (const n in t) {
    e[n] = {};
    for (const i in t[n]) {
      const r = t[n][i];
      r &&
      (r.isColor ||
        r.isMatrix3 ||
        r.isMatrix4 ||
        r.isVector2 ||
        r.isVector3 ||
        r.isVector4 ||
        r.isTexture ||
        r.isQuaternion)
        ? r.isRenderTargetTexture
          ? (e[n][i] = null)
          : (e[n][i] = r.clone())
        : (e[n][i] = Array.isArray(r) ? r.slice() : r);
    }
  }
  return e;
}
function Vi(t) {
  const e = {};
  for (let n = 0; n < t.length; n++) {
    const i = Hi(t[n]);
    for (const t in i) e[t] = i[t];
  }
  return e;
}
function Gi(t) {
  const e = t.getRenderTarget();
  return null === e
    ? t.outputColorSpace
    : !0 === e.isXRRenderTarget
    ? e.texture.colorSpace
    : ye.workingColorSpace;
}
const ki = {
  clone: Hi,
  merge: Vi,
};
class Wi extends hi {
  constructor(t) {
    super(),
      (this.isShaderMaterial = !0),
      (this.type = "ShaderMaterial"),
      (this.defines = {}),
      (this.uniforms = {}),
      (this.uniformsGroups = []),
      (this.vertexShader =
        "void main() {\n\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}"),
      (this.fragmentShader =
        "void main() {\n\tgl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );\n}"),
      (this.linewidth = 1),
      (this.wireframe = !1),
      (this.wireframeLinewidth = 1),
      (this.fog = !1),
      (this.lights = !1),
      (this.clipping = !1),
      (this.forceSinglePass = !0),
      (this.extensions = {
        clipCullDistance: !1,
        multiDraw: !1,
      }),
      (this.defaultAttributeValues = {
        color: [1, 1, 1],
        uv: [0, 0],
        uv1: [0, 0],
      }),
      (this.index0AttributeName = void 0),
      (this.uniformsNeedUpdate = !1),
      (this.glslVersion = null),
      void 0 !== t && this.setValues(t);
  }
  copy(t) {
    return (
      super.copy(t),
      (this.fragmentShader = t.fragmentShader),
      (this.vertexShader = t.vertexShader),
      (this.uniforms = Hi(t.uniforms)),
      (this.uniformsGroups = (function (t) {
        const e = [];
        for (let n = 0; n < t.length; n++) e.push(t[n].clone());
        return e;
      })(t.uniformsGroups)),
      (this.defines = Object.assign({}, t.defines)),
      (this.wireframe = t.wireframe),
      (this.wireframeLinewidth = t.wireframeLinewidth),
      (this.fog = t.fog),
      (this.lights = t.lights),
      (this.clipping = t.clipping),
      (this.extensions = Object.assign({}, t.extensions)),
      (this.glslVersion = t.glslVersion),
      this
    );
  }
  toJSON(t) {
    const e = super.toJSON(t);
    (e.glslVersion = this.glslVersion), (e.uniforms = {});
    for (const i in this.uniforms) {
      const n = this.uniforms[i].value;
      n && n.isTexture
        ? (e.uniforms[i] = {
            type: "t",
            value: n.toJSON(t).uuid,
          })
        : n && n.isColor
        ? (e.uniforms[i] = {
            type: "c",
            value: n.getHex(),
          })
        : n && n.isVector2
        ? (e.uniforms[i] = {
            type: "v2",
            value: n.toArray(),
          })
        : n && n.isVector3
        ? (e.uniforms[i] = {
            type: "v3",
            value: n.toArray(),
          })
        : n && n.isVector4
        ? (e.uniforms[i] = {
            type: "v4",
            value: n.toArray(),
          })
        : n && n.isMatrix3
        ? (e.uniforms[i] = {
            type: "m3",
            value: n.toArray(),
          })
        : n && n.isMatrix4
        ? (e.uniforms[i] = {
            type: "m4",
            value: n.toArray(),
          })
        : (e.uniforms[i] = {
            value: n,
          });
    }
    Object.keys(this.defines).length > 0 && (e.defines = this.defines),
      (e.vertexShader = this.vertexShader),
      (e.fragmentShader = this.fragmentShader),
      (e.lights = this.lights),
      (e.clipping = this.clipping);
    const n = {};
    for (const i in this.extensions) !0 === this.extensions[i] && (n[i] = !0);
    return Object.keys(n).length > 0 && (e.extensions = n), e;
  }
}
class Xi extends Gn {
  constructor() {
    super(),
      (this.isCamera = !0),
      (this.type = "Camera"),
      (this.matrixWorldInverse = new mn()),
      (this.projectionMatrix = new mn()),
      (this.projectionMatrixInverse = new mn()),
      (this.coordinateSystem = te);
  }
  copy(t, e) {
    return (
      super.copy(t, e),
      this.matrixWorldInverse.copy(t.matrixWorldInverse),
      this.projectionMatrix.copy(t.projectionMatrix),
      this.projectionMatrixInverse.copy(t.projectionMatrixInverse),
      (this.coordinateSystem = t.coordinateSystem),
      this
    );
  }
  getWorldDirection(t) {
    return super.getWorldDirection(t).negate();
  }
  updateMatrixWorld(t) {
    super.updateMatrixWorld(t),
      this.matrixWorldInverse.copy(this.matrixWorld).invert();
  }
  updateWorldMatrix(t, e) {
    super.updateWorldMatrix(t, e),
      this.matrixWorldInverse.copy(this.matrixWorld).invert();
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const ji = new Be(),
  qi = new ue(),
  Yi = new ue();
class Ki extends Xi {
  constructor(t = 50, e = 1, n = 0.1, i = 2e3) {
    super(),
      (this.isPerspectiveCamera = !0),
      (this.type = "PerspectiveCamera"),
      (this.fov = t),
      (this.zoom = 1),
      (this.near = n),
      (this.far = i),
      (this.focus = 10),
      (this.aspect = e),
      (this.view = null),
      (this.filmGauge = 35),
      (this.filmOffset = 0),
      this.updateProjectionMatrix();
  }
  copy(t, e) {
    return (
      super.copy(t, e),
      (this.fov = t.fov),
      (this.zoom = t.zoom),
      (this.near = t.near),
      (this.far = t.far),
      (this.focus = t.focus),
      (this.aspect = t.aspect),
      (this.view = null === t.view ? null : Object.assign({}, t.view)),
      (this.filmGauge = t.filmGauge),
      (this.filmOffset = t.filmOffset),
      this
    );
  }
  setFocalLength(t) {
    const e = (0.5 * this.getFilmHeight()) / t;
    (this.fov = 2 * ae * Math.atan(e)), this.updateProjectionMatrix();
  }
  getFocalLength() {
    const t = Math.tan(0.5 * re * this.fov);
    return (0.5 * this.getFilmHeight()) / t;
  }
  getEffectiveFOV() {
    return 2 * ae * Math.atan(Math.tan(0.5 * re * this.fov) / this.zoom);
  }
  getFilmWidth() {
    return this.filmGauge * Math.min(this.aspect, 1);
  }
  getFilmHeight() {
    return this.filmGauge / Math.max(this.aspect, 1);
  }
  getViewBounds(t, e, n) {
    ji.set(-1, -1, 0.5).applyMatrix4(this.projectionMatrixInverse),
      e.set(ji.x, ji.y).multiplyScalar(-t / ji.z),
      ji.set(1, 1, 0.5).applyMatrix4(this.projectionMatrixInverse),
      n.set(ji.x, ji.y).multiplyScalar(-t / ji.z);
  }
  getViewSize(t, e) {
    return this.getViewBounds(t, qi, Yi), e.subVectors(Yi, qi);
  }
  setViewOffset(t, e, n, i, r, a) {
    (this.aspect = t / e),
      null === this.view &&
        (this.view = {
          enabled: !0,
          fullWidth: 1,
          fullHeight: 1,
          offsetX: 0,
          offsetY: 0,
          width: 1,
          height: 1,
        }),
      (this.view.enabled = !0),
      (this.view.fullWidth = t),
      (this.view.fullHeight = e),
      (this.view.offsetX = n),
      (this.view.offsetY = i),
      (this.view.width = r),
      (this.view.height = a),
      this.updateProjectionMatrix();
  }
  clearViewOffset() {
    null !== this.view && (this.view.enabled = !1),
      this.updateProjectionMatrix();
  }
  updateProjectionMatrix() {
    const t = this.near;
    let e = (t * Math.tan(0.5 * re * this.fov)) / this.zoom,
      n = 2 * e,
      i = this.aspect * n,
      r = -0.5 * i;
    const a = this.view;
    if (null !== this.view && this.view.enabled) {
      const t = a.fullWidth,
        s = a.fullHeight;
      (r += (a.offsetX * i) / t),
        (e -= (a.offsetY * n) / s),
        (i *= a.width / t),
        (n *= a.height / s);
    }
    const s = this.filmOffset;
    0 !== s && (r += (t * s) / this.getFilmWidth()),
      this.projectionMatrix.makePerspective(
        r,
        r + i,
        e,
        e - n,
        t,
        this.far,
        this.coordinateSystem
      ),
      this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(t) {
    const e = super.toJSON(t);
    return (
      (e.object.fov = this.fov),
      (e.object.zoom = this.zoom),
      (e.object.near = this.near),
      (e.object.far = this.far),
      (e.object.focus = this.focus),
      (e.object.aspect = this.aspect),
      null !== this.view && (e.object.view = Object.assign({}, this.view)),
      (e.object.filmGauge = this.filmGauge),
      (e.object.filmOffset = this.filmOffset),
      e
    );
  }
}
const Zi = -90;
class Ji extends Gn {
  constructor(t, e, n) {
    super(),
      (this.type = "CubeCamera"),
      (this.renderTarget = n),
      (this.coordinateSystem = null),
      (this.activeMipmapLevel = 0);
    const i = new Ki(Zi, 1, t, e);
    (i.layers = this.layers), this.add(i);
    const r = new Ki(Zi, 1, t, e);
    (r.layers = this.layers), this.add(r);
    const a = new Ki(Zi, 1, t, e);
    (a.layers = this.layers), this.add(a);
    const s = new Ki(Zi, 1, t, e);
    (s.layers = this.layers), this.add(s);
    const o = new Ki(Zi, 1, t, e);
    (o.layers = this.layers), this.add(o);
    const l = new Ki(Zi, 1, t, e);
    (l.layers = this.layers), this.add(l);
  }
  updateCoordinateSystem() {
    const t = this.coordinateSystem,
      e = this.children.concat(),
      [n, i, r, a, s, o] = e;
    for (const l of e) this.remove(l);
    if (t === te)
      n.up.set(0, 1, 0),
        n.lookAt(1, 0, 0),
        i.up.set(0, 1, 0),
        i.lookAt(-1, 0, 0),
        r.up.set(0, 0, -1),
        r.lookAt(0, 1, 0),
        a.up.set(0, 0, 1),
        a.lookAt(0, -1, 0),
        s.up.set(0, 1, 0),
        s.lookAt(0, 0, 1),
        o.up.set(0, 1, 0),
        o.lookAt(0, 0, -1);
    else {
      if (t !== ee)
        throw Error(
          "THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: " +
            t
        );
      n.up.set(0, -1, 0),
        n.lookAt(-1, 0, 0),
        i.up.set(0, -1, 0),
        i.lookAt(1, 0, 0),
        r.up.set(0, 0, 1),
        r.lookAt(0, 1, 0),
        a.up.set(0, 0, -1),
        a.lookAt(0, -1, 0),
        s.up.set(0, -1, 0),
        s.lookAt(0, 0, 1),
        o.up.set(0, -1, 0),
        o.lookAt(0, 0, -1);
    }
    for (const l of e) this.add(l), l.updateMatrixWorld();
  }
  update(t, e) {
    null === this.parent && this.updateMatrixWorld();
    const { renderTarget: n, activeMipmapLevel: i } = this;
    this.coordinateSystem !== t.coordinateSystem &&
      ((this.coordinateSystem = t.coordinateSystem),
      this.updateCoordinateSystem());
    const [r, a, s, o, l, c] = this.children,
      h = t.getRenderTarget(),
      u = t.getActiveCubeFace(),
      d = t.getActiveMipmapLevel(),
      p = t.xr.enabled;
    t.xr.enabled = !1;
    const f = n.texture.generateMipmaps;
    (n.texture.generateMipmaps = !1),
      t.setRenderTarget(n, 0, i),
      t.render(e, r),
      t.setRenderTarget(n, 1, i),
      t.render(e, a),
      t.setRenderTarget(n, 2, i),
      t.render(e, s),
      t.setRenderTarget(n, 3, i),
      t.render(e, o),
      t.setRenderTarget(n, 4, i),
      t.render(e, l),
      (n.texture.generateMipmaps = f),
      t.setRenderTarget(n, 5, i),
      t.render(e, c),
      t.setRenderTarget(h, u, d),
      (t.xr.enabled = p),
      (n.texture.needsPMREMUpdate = !0);
  }
}
class $i extends Le {
  constructor(t, e, n, i, r, a, s, o, l, c) {
    super(
      (t = void 0 !== t ? t : []),
      (e = void 0 !== e ? e : N),
      n,
      i,
      r,
      a,
      s,
      o,
      l,
      c
    ),
      (this.isCubeTexture = !0),
      (this.flipY = !1);
  }
  get images() {
    return this.image;
  }
  set images(t) {
    this.image = t;
  }
}
class Qi extends Ie {
  constructor(t = 1, e = {}) {
    super(t, t, e), (this.isWebGLCubeRenderTarget = !0);
    const n = {
        width: t,
        height: t,
        depth: 1,
      },
      i = [n, n, n, n, n, n];
    (this.texture = new $i(
      i,
      e.mapping,
      e.wrapS,
      e.wrapT,
      e.magFilter,
      e.minFilter,
      e.format,
      e.type,
      e.anisotropy,
      e.colorSpace
    )),
      (this.texture.isRenderTargetTexture = !0),
      (this.texture.generateMipmaps =
        void 0 !== e.generateMipmaps && e.generateMipmaps),
      (this.texture.minFilter = void 0 !== e.minFilter ? e.minFilter : W);
  }
  fromEquirectangularTexture(t, e) {
    (this.texture.type = e.type),
      (this.texture.colorSpace = e.colorSpace),
      (this.texture.generateMipmaps = e.generateMipmaps),
      (this.texture.minFilter = e.minFilter),
      (this.texture.magFilter = e.magFilter);
    const n = new zi(5, 5, 5),
      i = new Wi({
        name: "CubemapFromEquirect",
        uniforms: Hi({
          tEquirect: {
            value: null,
          },
        }),
        vertexShader:
          "\n\n\t\t\t\tvarying vec3 vWorldDirection;\n\n\t\t\t\tvec3 transformDirection( in vec3 dir, in mat4 matrix ) {\n\n\t\t\t\t\treturn normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );\n\n\t\t\t\t}\n\n\t\t\t\tvoid main() {\n\n\t\t\t\t\tvWorldDirection = transformDirection( position, modelMatrix );\n\n\t\t\t\t\t#include <begin_vertex>\n\t\t\t\t\t#include <project_vertex>\n\n\t\t\t\t}\n\t\t\t",
        fragmentShader:
          "\n\n\t\t\t\tuniform sampler2D tEquirect;\n\n\t\t\t\tvarying vec3 vWorldDirection;\n\n\t\t\t\t#include <common>\n\n\t\t\t\tvoid main() {\n\n\t\t\t\t\tvec3 direction = normalize( vWorldDirection );\n\n\t\t\t\t\tvec2 sampleUV = equirectUv( direction );\n\n\t\t\t\t\tgl_FragColor = texture2D( tEquirect, sampleUV );\n\n\t\t\t\t}\n\t\t\t",
        side: 1,
        blending: 0,
      });
    i.uniforms.tEquirect.value = e;
    const r = new Fi(n, i),
      a = e.minFilter;
    return (
      e.minFilter === j && (e.minFilter = W),
      new Ji(1, 10, this).update(t, r),
      (e.minFilter = a),
      r.geometry.dispose(),
      r.material.dispose(),
      this
    );
  }
  clear(t, e, n, i) {
    const r = t.getRenderTarget();
    for (let a = 0; 6 > a; a++) t.setRenderTarget(this, a), t.clear(e, n, i);
    t.setRenderTarget(r);
  }
}
class tr {
  constructor(t, e = 25e-5) {
    (this.isFogExp2 = !0),
      (this.name = ""),
      (this.color = new oi(t)),
      (this.density = e);
  }
  clone() {
    return new tr(this.color, this.density);
  }
  toJSON() {
    return {
      type: "FogExp2",
      name: this.name,
      color: this.color.getHex(),
      density: this.density,
    };
  }
}
class er extends Gn {
  constructor() {
    super(),
      (this.isScene = !0),
      (this.type = "Scene"),
      (this.background = null),
      (this.environment = null),
      (this.fog = null),
      (this.backgroundBlurriness = 0),
      (this.backgroundIntensity = 1),
      (this.backgroundRotation = new bn()),
      (this.environmentIntensity = 1),
      (this.environmentRotation = new bn()),
      (this.overrideMaterial = null),
      "undefined" != typeof __THREE_DEVTOOLS__ &&
        __THREE_DEVTOOLS__.dispatchEvent(
          new CustomEvent("observe", {
            detail: this,
          })
        );
  }
  copy(t, e) {
    return (
      super.copy(t, e),
      null !== t.background && (this.background = t.background.clone()),
      null !== t.environment && (this.environment = t.environment.clone()),
      null !== t.fog && (this.fog = t.fog.clone()),
      (this.backgroundBlurriness = t.backgroundBlurriness),
      (this.backgroundIntensity = t.backgroundIntensity),
      this.backgroundRotation.copy(t.backgroundRotation),
      (this.environmentIntensity = t.environmentIntensity),
      this.environmentRotation.copy(t.environmentRotation),
      null !== t.overrideMaterial &&
        (this.overrideMaterial = t.overrideMaterial.clone()),
      (this.matrixAutoUpdate = t.matrixAutoUpdate),
      this
    );
  }
  toJSON(t) {
    const e = super.toJSON(t);
    return (
      null !== this.fog && (e.object.fog = this.fog.toJSON()),
      this.backgroundBlurriness > 0 &&
        (e.object.backgroundBlurriness = this.backgroundBlurriness),
      1 !== this.backgroundIntensity &&
        (e.object.backgroundIntensity = this.backgroundIntensity),
      (e.object.backgroundRotation = this.backgroundRotation.toArray()),
      1 !== this.environmentIntensity &&
        (e.object.environmentIntensity = this.environmentIntensity),
      (e.object.environmentRotation = this.environmentRotation.toArray()),
      e
    );
  }
}
const nr = new Be(),
  ir = new Be(),
  rr = new de();
class ar {
  constructor(t = new Be(1, 0, 0), e = 0) {
    (this.isPlane = !0), (this.normal = t), (this.constant = e);
  }
  set(t, e) {
    return this.normal.copy(t), (this.constant = e), this;
  }
  setComponents(t, e, n, i) {
    return this.normal.set(t, e, n), (this.constant = i), this;
  }
  setFromNormalAndCoplanarPoint(t, e) {
    return this.normal.copy(t), (this.constant = -e.dot(this.normal)), this;
  }
  setFromCoplanarPoints(t, e, n) {
    const i = nr.subVectors(n, e).cross(ir.subVectors(t, e)).normalize();
    return this.setFromNormalAndCoplanarPoint(i, t), this;
  }
  copy(t) {
    return this.normal.copy(t.normal), (this.constant = t.constant), this;
  }
  normalize() {
    const t = 1 / this.normal.length();
    return this.normal.multiplyScalar(t), (this.constant *= t), this;
  }
  negate() {
    return (this.constant *= -1), this.normal.negate(), this;
  }
  distanceToPoint(t) {
    return this.normal.dot(t) + this.constant;
  }
  distanceToSphere(t) {
    return this.distanceToPoint(t.center) - t.radius;
  }
  projectPoint(t, e) {
    return e.copy(t).addScaledVector(this.normal, -this.distanceToPoint(t));
  }
  intersectLine(t, e) {
    const n = t.delta(nr),
      i = this.normal.dot(n);
    if (0 === i)
      return 0 === this.distanceToPoint(t.start) ? e.copy(t.start) : null;
    const r = -(t.start.dot(this.normal) + this.constant) / i;
    return 0 > r || r > 1 ? null : e.copy(t.start).addScaledVector(n, r);
  }
  intersectsLine(t) {
    const e = this.distanceToPoint(t.start),
      n = this.distanceToPoint(t.end);
    return (0 > e && n > 0) || (0 > n && e > 0);
  }
  intersectsBox(t) {
    return t.intersectsPlane(this);
  }
  intersectsSphere(t) {
    return t.intersectsPlane(this);
  }
  coplanarPoint(t) {
    return t.copy(this.normal).multiplyScalar(-this.constant);
  }
  applyMatrix4(t, e) {
    const n = e || rr.getNormalMatrix(t),
      i = this.coplanarPoint(nr).applyMatrix4(t),
      r = this.normal.applyMatrix3(n).normalize();
    return (this.constant = -i.dot(r)), this;
  }
  translate(t) {
    return (this.constant -= t.dot(this.normal)), this;
  }
  equals(t) {
    return t.normal.equals(this.normal) && t.constant === this.constant;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const sr = new sn(),
  or = new Be();
class lr {
  constructor(
    t = new ar(),
    e = new ar(),
    n = new ar(),
    i = new ar(),
    r = new ar(),
    a = new ar()
  ) {
    this.planes = [t, e, n, i, r, a];
  }
  set(t, e, n, i, r, a) {
    const s = this.planes;
    return (
      s[0].copy(t),
      s[1].copy(e),
      s[2].copy(n),
      s[3].copy(i),
      s[4].copy(r),
      s[5].copy(a),
      this
    );
  }
  copy(t) {
    const e = this.planes;
    for (let n = 0; 6 > n; n++) e[n].copy(t.planes[n]);
    return this;
  }
  setFromProjectionMatrix(t, e = 2e3) {
    const n = this.planes,
      i = t.elements,
      r = i[0],
      a = i[1],
      s = i[2],
      o = i[3],
      l = i[4],
      c = i[5],
      h = i[6],
      u = i[7],
      d = i[8],
      p = i[9],
      f = i[10],
      m = i[11],
      g = i[12],
      _ = i[13],
      v = i[14],
      x = i[15];
    if (
      (n[0].setComponents(o - r, u - l, m - d, x - g).normalize(),
      n[1].setComponents(o + r, u + l, m + d, x + g).normalize(),
      n[2].setComponents(o + a, u + c, m + p, x + _).normalize(),
      n[3].setComponents(o - a, u - c, m - p, x - _).normalize(),
      n[4].setComponents(o - s, u - h, m - f, x - v).normalize(),
      e === te)
    )
      n[5].setComponents(o + s, u + h, m + f, x + v).normalize();
    else {
      if (e !== ee)
        throw Error(
          "THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: " +
            e
        );
      n[5].setComponents(s, h, f, v).normalize();
    }
    return this;
  }
  intersectsObject(t) {
    if (void 0 !== t.boundingSphere)
      null === t.boundingSphere && t.computeBoundingSphere(),
        sr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);
    else {
      const e = t.geometry;
      null === e.boundingSphere && e.computeBoundingSphere(),
        sr.copy(e.boundingSphere).applyMatrix4(t.matrixWorld);
    }
    return this.intersectsSphere(sr);
  }
  intersectsSprite(t) {
    return (
      sr.center.set(0, 0, 0),
      (sr.radius = 0.7071067811865476),
      sr.applyMatrix4(t.matrixWorld),
      this.intersectsSphere(sr)
    );
  }
  intersectsSphere(t) {
    const e = this.planes,
      n = t.center,
      i = -t.radius;
    for (let r = 0; 6 > r; r++) if (i > e[r].distanceToPoint(n)) return !1;
    return !0;
  }
  intersectsBox(t) {
    const e = this.planes;
    for (let n = 0; 6 > n; n++) {
      const i = e[n];
      if (
        ((or.x = i.normal.x > 0 ? t.max.x : t.min.x),
        (or.y = i.normal.y > 0 ? t.max.y : t.min.y),
        (or.z = i.normal.z > 0 ? t.max.z : t.min.z),
        0 > i.distanceToPoint(or))
      )
        return !1;
    }
    return !0;
  }
  containsPoint(t) {
    const e = this.planes;
    for (let n = 0; 6 > n; n++) if (0 > e[n].distanceToPoint(t)) return !1;
    return !0;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
class cr extends hi {
  constructor(t) {
    super(),
      (this.isPointsMaterial = !0),
      (this.type = "PointsMaterial"),
      (this.color = new oi(16777215)),
      (this.map = null),
      (this.alphaMap = null),
      (this.size = 1),
      (this.sizeAttenuation = !0),
      (this.fog = !0),
      this.setValues(t);
  }
  copy(t) {
    return (
      super.copy(t),
      this.color.copy(t.color),
      (this.map = t.map),
      (this.alphaMap = t.alphaMap),
      (this.size = t.size),
      (this.sizeAttenuation = t.sizeAttenuation),
      (this.fog = t.fog),
      this
    );
  }
}
const hr = new mn(),
  ur = new fn(),
  dr = new sn(),
  pr = new Be();
class fr extends Gn {
  constructor(t = new bi(), e = new cr()) {
    super(),
      (this.isPoints = !0),
      (this.type = "Points"),
      (this.geometry = t),
      (this.material = e),
      this.updateMorphTargets();
  }
  copy(t, e) {
    return (
      super.copy(t, e),
      (this.material = Array.isArray(t.material)
        ? t.material.slice()
        : t.material),
      (this.geometry = t.geometry),
      this
    );
  }
  raycast(t, e) {
    const n = this.geometry,
      i = this.matrixWorld,
      r = t.params.Points.threshold,
      a = n.drawRange;
    if (
      (null === n.boundingSphere && n.computeBoundingSphere(),
      dr.copy(n.boundingSphere),
      dr.applyMatrix4(i),
      (dr.radius += r),
      !1 === t.ray.intersectsSphere(dr))
    )
      return;
    hr.copy(i).invert(), ur.copy(t.ray).applyMatrix4(hr);
    const s = r / ((this.scale.x + this.scale.y + this.scale.z) / 3),
      o = s * s,
      l = n.index,
      c = n.attributes.position;
    if (null !== l)
      for (
        let h = Math.max(0, a.start), u = Math.min(l.count, a.start + a.count);
        u > h;
        h++
      ) {
        const n = l.getX(h);
        pr.fromBufferAttribute(c, n), mr(pr, n, o, i, t, e, this);
      }
    else
      for (
        let h = Math.max(0, a.start), u = Math.min(c.count, a.start + a.count);
        u > h;
        h++
      )
        pr.fromBufferAttribute(c, h), mr(pr, h, o, i, t, e, this);
  }
  updateMorphTargets() {
    const t = this.geometry.morphAttributes,
      e = Object.keys(t);
    if (e.length > 0) {
      const n = t[e[0]];
      if (void 0 !== n) {
        (this.morphTargetInfluences = []), (this.morphTargetDictionary = {});
        for (let t = 0, e = n.length; e > t; t++) {
          const e = n[t].name || t + "";
          this.morphTargetInfluences.push(0),
            (this.morphTargetDictionary[e] = t);
        }
      }
    }
  }
}
function mr(t, e, n, i, r, a, s) {
  const o = ur.distanceSqToPoint(t);
  if (n > o) {
    const n = new Be();
    ur.closestPointToPoint(t, n), n.applyMatrix4(i);
    const l = r.ray.origin.distanceTo(n);
    if (l < r.near || l > r.far) return;
    a.push({
      distance: l,
      distanceToRay: Math.sqrt(o),
      point: n,
      index: e,
      face: null,
      faceIndex: null,
      barycoord: null,
      object: s,
    });
  }
}
class gr extends Gn {
  constructor() {
    super(), (this.isGroup = !0), (this.type = "Group");
  }
}
class _r extends Le {
  constructor(t, e, n, i, r, a, s, o, l) {
    super(t, e, n, i, r, a, s, o, l),
      (this.isCanvasTexture = !0),
      (this.needsUpdate = !0);
  }
}
class vr extends Le {
  constructor(t, e, n, i, r, a, s, o, l, c = 1026) {
    if (c !== it && c !== rt)
      throw Error(
        "DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat"
      );
    void 0 === n && c === it && (n = Z),
      void 0 === n && c === rt && (n = et),
      super(null, i, r, a, s, o, c, n, l),
      (this.isDepthTexture = !0),
      (this.image = {
        width: t,
        height: e,
      }),
      (this.magFilter = void 0 !== s ? s : V),
      (this.minFilter = void 0 !== o ? o : V),
      (this.flipY = !1),
      (this.generateMipmaps = !1),
      (this.compareFunction = null);
  }
  copy(t) {
    return super.copy(t), (this.compareFunction = t.compareFunction), this;
  }
  toJSON(t) {
    const e = super.toJSON(t);
    return (
      null !== this.compareFunction &&
        (e.compareFunction = this.compareFunction),
      e
    );
  }
}
class xr extends bi {
  constructor(t = 1, e = 1, n = 1, i = 1) {
    super(),
      (this.type = "PlaneGeometry"),
      (this.parameters = {
        width: t,
        height: e,
        widthSegments: n,
        heightSegments: i,
      });
    const r = t / 2,
      a = e / 2,
      s = Math.floor(n),
      o = Math.floor(i),
      l = s + 1,
      c = o + 1,
      h = t / s,
      u = e / o,
      d = [],
      p = [],
      f = [],
      m = [];
    for (let g = 0; c > g; g++) {
      const t = g * u - a;
      for (let e = 0; l > e; e++) {
        const n = e * h - r;
        p.push(n, -t, 0), f.push(0, 0, 1), m.push(e / s), m.push(1 - g / o);
      }
    }
    for (let g = 0; o > g; g++)
      for (let t = 0; s > t; t++) {
        const e = t + l * g,
          n = t + l * (g + 1),
          i = t + 1 + l * (g + 1),
          r = t + 1 + l * g;
        d.push(e, n, r), d.push(n, i, r);
      }
    this.setIndex(d),
      this.setAttribute("position", new _i(p, 3)),
      this.setAttribute("normal", new _i(f, 3)),
      this.setAttribute("uv", new _i(m, 2));
  }
  copy(t) {
    return (
      super.copy(t), (this.parameters = Object.assign({}, t.parameters)), this
    );
  }
  static fromJSON(t) {
    return new xr(t.width, t.height, t.widthSegments, t.heightSegments);
  }
}
class Mr extends bi {
  constructor(
    t = 1,
    e = 32,
    n = 16,
    i = 0,
    r = 2 * Math.PI,
    a = 0,
    s = Math.PI
  ) {
    super(),
      (this.type = "SphereGeometry"),
      (this.parameters = {
        radius: t,
        widthSegments: e,
        heightSegments: n,
        phiStart: i,
        phiLength: r,
        thetaStart: a,
        thetaLength: s,
      }),
      (e = Math.max(3, Math.floor(e))),
      (n = Math.max(2, Math.floor(n)));
    const o = Math.min(a + s, Math.PI);
    let l = 0;
    const c = [],
      h = new Be(),
      u = new Be(),
      d = [],
      p = [],
      f = [],
      m = [];
    for (let g = 0; n >= g; g++) {
      const d = [],
        _ = g / n;
      let v = 0;
      0 === g && 0 === a
        ? (v = 0.5 / e)
        : g === n && o === Math.PI && (v = -0.5 / e);
      for (let n = 0; e >= n; n++) {
        const o = n / e;
        (h.x = -t * Math.cos(i + o * r) * Math.sin(a + _ * s)),
          (h.y = t * Math.cos(a + _ * s)),
          (h.z = t * Math.sin(i + o * r) * Math.sin(a + _ * s)),
          p.push(h.x, h.y, h.z),
          u.copy(h).normalize(),
          f.push(u.x, u.y, u.z),
          m.push(o + v, 1 - _),
          d.push(l++);
      }
      c.push(d);
    }
    for (let g = 0; n > g; g++)
      for (let t = 0; e > t; t++) {
        const e = c[g][t + 1],
          i = c[g][t],
          r = c[g + 1][t],
          s = c[g + 1][t + 1];
        (0 !== g || a > 0) && d.push(e, i, s),
          (g !== n - 1 || Math.PI > o) && d.push(i, r, s);
      }
    this.setIndex(d),
      this.setAttribute("position", new _i(p, 3)),
      this.setAttribute("normal", new _i(f, 3)),
      this.setAttribute("uv", new _i(m, 2));
  }
  copy(t) {
    return (
      super.copy(t), (this.parameters = Object.assign({}, t.parameters)), this
    );
  }
  static fromJSON(t) {
    return new Mr(
      t.radius,
      t.widthSegments,
      t.heightSegments,
      t.phiStart,
      t.phiLength,
      t.thetaStart,
      t.thetaLength
    );
  }
}
class Sr extends hi {
  constructor(t) {
    super(),
      (this.isMeshStandardMaterial = !0),
      (this.type = "MeshStandardMaterial"),
      (this.defines = {
        STANDARD: "",
      }),
      (this.color = new oi(16777215)),
      (this.roughness = 1),
      (this.metalness = 0),
      (this.map = null),
      (this.lightMap = null),
      (this.lightMapIntensity = 1),
      (this.aoMap = null),
      (this.aoMapIntensity = 1),
      (this.emissive = new oi(0)),
      (this.emissiveIntensity = 1),
      (this.emissiveMap = null),
      (this.bumpMap = null),
      (this.bumpScale = 1),
      (this.normalMap = null),
      (this.normalMapType = 0),
      (this.normalScale = new ue(1, 1)),
      (this.displacementMap = null),
      (this.displacementScale = 1),
      (this.displacementBias = 0),
      (this.roughnessMap = null),
      (this.metalnessMap = null),
      (this.alphaMap = null),
      (this.envMap = null),
      (this.envMapRotation = new bn()),
      (this.envMapIntensity = 1),
      (this.wireframe = !1),
      (this.wireframeLinewidth = 1),
      (this.wireframeLinecap = "round"),
      (this.wireframeLinejoin = "round"),
      (this.flatShading = !1),
      (this.fog = !0),
      this.setValues(t);
  }
  copy(t) {
    return (
      super.copy(t),
      (this.defines = {
        STANDARD: "",
      }),
      this.color.copy(t.color),
      (this.roughness = t.roughness),
      (this.metalness = t.metalness),
      (this.map = t.map),
      (this.lightMap = t.lightMap),
      (this.lightMapIntensity = t.lightMapIntensity),
      (this.aoMap = t.aoMap),
      (this.aoMapIntensity = t.aoMapIntensity),
      this.emissive.copy(t.emissive),
      (this.emissiveMap = t.emissiveMap),
      (this.emissiveIntensity = t.emissiveIntensity),
      (this.bumpMap = t.bumpMap),
      (this.bumpScale = t.bumpScale),
      (this.normalMap = t.normalMap),
      (this.normalMapType = t.normalMapType),
      this.normalScale.copy(t.normalScale),
      (this.displacementMap = t.displacementMap),
      (this.displacementScale = t.displacementScale),
      (this.displacementBias = t.displacementBias),
      (this.roughnessMap = t.roughnessMap),
      (this.metalnessMap = t.metalnessMap),
      (this.alphaMap = t.alphaMap),
      (this.envMap = t.envMap),
      this.envMapRotation.copy(t.envMapRotation),
      (this.envMapIntensity = t.envMapIntensity),
      (this.wireframe = t.wireframe),
      (this.wireframeLinewidth = t.wireframeLinewidth),
      (this.wireframeLinecap = t.wireframeLinecap),
      (this.wireframeLinejoin = t.wireframeLinejoin),
      (this.flatShading = t.flatShading),
      (this.fog = t.fog),
      this
    );
  }
}
class yr extends hi {
  constructor(t) {
    super(),
      (this.isMeshDepthMaterial = !0),
      (this.type = "MeshDepthMaterial"),
      (this.depthPacking = 3200),
      (this.map = null),
      (this.alphaMap = null),
      (this.displacementMap = null),
      (this.displacementScale = 1),
      (this.displacementBias = 0),
      (this.wireframe = !1),
      (this.wireframeLinewidth = 1),
      this.setValues(t);
  }
  copy(t) {
    return (
      super.copy(t),
      (this.depthPacking = t.depthPacking),
      (this.map = t.map),
      (this.alphaMap = t.alphaMap),
      (this.displacementMap = t.displacementMap),
      (this.displacementScale = t.displacementScale),
      (this.displacementBias = t.displacementBias),
      (this.wireframe = t.wireframe),
      (this.wireframeLinewidth = t.wireframeLinewidth),
      this
    );
  }
}
class Er extends hi {
  constructor(t) {
    super(),
      (this.isMeshDistanceMaterial = !0),
      (this.type = "MeshDistanceMaterial"),
      (this.map = null),
      (this.alphaMap = null),
      (this.displacementMap = null),
      (this.displacementScale = 1),
      (this.displacementBias = 0),
      this.setValues(t);
  }
  copy(t) {
    return (
      super.copy(t),
      (this.map = t.map),
      (this.alphaMap = t.alphaMap),
      (this.displacementMap = t.displacementMap),
      (this.displacementScale = t.displacementScale),
      (this.displacementBias = t.displacementBias),
      this
    );
  }
}
const Tr = {
  enabled: !1,
  files: {},
  add: function (t, e) {
    !1 !== this.enabled && (this.files[t] = e);
  },
  get: function (t) {
    if (!1 !== this.enabled) return this.files[t];
  },
  remove: function (t) {
    delete this.files[t];
  },
  clear: function () {
    this.files = {};
  },
};
class br {
  constructor(t, e, n) {
    const i = this;
    let r,
      a = !1,
      s = 0,
      o = 0;
    const l = [];
    (this.onStart = void 0),
      (this.onLoad = t),
      (this.onProgress = e),
      (this.onError = n),
      (this.itemStart = function (t) {
        o++, !1 === a && void 0 !== i.onStart && i.onStart(t, s, o), (a = !0);
      }),
      (this.itemEnd = function (t) {
        s++,
          void 0 !== i.onProgress && i.onProgress(t, s, o),
          s === o && ((a = !1), void 0 !== i.onLoad && i.onLoad());
      }),
      (this.itemError = function (t) {
        void 0 !== i.onError && i.onError(t);
      }),
      (this.resolveURL = function (t) {
        return r ? r(t) : t;
      }),
      (this.setURLModifier = function (t) {
        return (r = t), this;
      }),
      (this.addHandler = function (t, e) {
        return l.push(t, e), this;
      }),
      (this.removeHandler = function (t) {
        const e = l.indexOf(t);
        return -1 !== e && l.splice(e, 2), this;
      }),
      (this.getHandler = function (t) {
        for (let e = 0, n = l.length; n > e; e += 2) {
          const n = l[e],
            i = l[e + 1];
          if ((n.global && (n.lastIndex = 0), n.test(t))) return i;
        }
        return null;
      });
  }
}
const Ar = new br();
class wr {
  constructor(t) {
    (this.manager = void 0 !== t ? t : Ar),
      (this.crossOrigin = "anonymous"),
      (this.withCredentials = !1),
      (this.path = ""),
      (this.resourcePath = ""),
      (this.requestHeader = {});
  }
  load() {}
  loadAsync(t, e) {
    const n = this;
    return new Promise(function (i, r) {
      n.load(t, i, e, r);
    });
  }
  parse() {}
  setCrossOrigin(t) {
    return (this.crossOrigin = t), this;
  }
  setWithCredentials(t) {
    return (this.withCredentials = t), this;
  }
  setPath(t) {
    return (this.path = t), this;
  }
  setResourcePath(t) {
    return (this.resourcePath = t), this;
  }
  setRequestHeader(t) {
    return (this.requestHeader = t), this;
  }
}
wr.DEFAULT_MATERIAL_NAME = "__DEFAULT";
class Rr extends wr {
  constructor(t) {
    super(t);
  }
  load(t, e, n, i) {
    void 0 !== this.path && (t = this.path + t),
      (t = this.manager.resolveURL(t));
    const r = this,
      a = Tr.get(t);
    if (void 0 !== a)
      return (
        r.manager.itemStart(t),
        setTimeout(function () {
          e && e(a), r.manager.itemEnd(t);
        }, 0),
        a
      );
    const s = me("img");
    function o() {
      c(), Tr.add(t, this), e && e(this), r.manager.itemEnd(t);
    }
    function l(e) {
      c(), i && i(e), r.manager.itemError(t), r.manager.itemEnd(t);
    }
    function c() {
      s.removeEventListener("load", o, !1),
        s.removeEventListener("error", l, !1);
    }
    return (
      s.addEventListener("load", o, !1),
      s.addEventListener("error", l, !1),
      "data:" !== t.slice(0, 5) &&
        void 0 !== this.crossOrigin &&
        (s.crossOrigin = this.crossOrigin),
      r.manager.itemStart(t),
      (s.src = t),
      s
    );
  }
}
class Cr extends wr {
  constructor(t) {
    super(t);
  }
  load(t, e, n, i) {
    const r = new Le(),
      a = new Rr(this.manager);
    return (
      a.setCrossOrigin(this.crossOrigin),
      a.setPath(this.path),
      a.load(
        t,
        function (t) {
          (r.image = t), (r.needsUpdate = !0), void 0 !== e && e(r);
        },
        n,
        i
      ),
      r
    );
  }
}
class Pr extends Gn {
  constructor(t, e = 1) {
    super(),
      (this.isLight = !0),
      (this.type = "Light"),
      (this.color = new oi(t)),
      (this.intensity = e);
  }
  dispose() {}
  copy(t, e) {
    return (
      super.copy(t, e),
      this.color.copy(t.color),
      (this.intensity = t.intensity),
      this
    );
  }
  toJSON(t) {
    const e = super.toJSON(t);
    return (
      (e.object.color = this.color.getHex()),
      (e.object.intensity = this.intensity),
      void 0 !== this.groundColor &&
        (e.object.groundColor = this.groundColor.getHex()),
      void 0 !== this.distance && (e.object.distance = this.distance),
      void 0 !== this.angle && (e.object.angle = this.angle),
      void 0 !== this.decay && (e.object.decay = this.decay),
      void 0 !== this.penumbra && (e.object.penumbra = this.penumbra),
      void 0 !== this.shadow && (e.object.shadow = this.shadow.toJSON()),
      void 0 !== this.target && (e.object.target = this.target.uuid),
      e
    );
  }
}
const Lr = new mn(),
  Ur = new Be(),
  Dr = new Be();
class Ir {
  constructor(t) {
    (this.camera = t),
      (this.intensity = 1),
      (this.bias = 0),
      (this.normalBias = 0),
      (this.radius = 1),
      (this.blurSamples = 8),
      (this.mapSize = new ue(512, 512)),
      (this.map = null),
      (this.mapPass = null),
      (this.matrix = new mn()),
      (this.autoUpdate = !0),
      (this.needsUpdate = !1),
      (this._frustum = new lr()),
      (this._frameExtents = new ue(1, 1)),
      (this._viewportCount = 1),
      (this._viewports = [new Ue(0, 0, 1, 1)]);
  }
  getViewportCount() {
    return this._viewportCount;
  }
  getFrustum() {
    return this._frustum;
  }
  updateMatrices(t) {
    const e = this.camera,
      n = this.matrix;
    Ur.setFromMatrixPosition(t.matrixWorld),
      e.position.copy(Ur),
      Dr.setFromMatrixPosition(t.target.matrixWorld),
      e.lookAt(Dr),
      e.updateMatrixWorld(),
      Lr.multiplyMatrices(e.projectionMatrix, e.matrixWorldInverse),
      this._frustum.setFromProjectionMatrix(Lr),
      n.set(0.5, 0, 0, 0.5, 0, 0.5, 0, 0.5, 0, 0, 0.5, 0.5, 0, 0, 0, 1),
      n.multiply(Lr);
  }
  getViewport(t) {
    return this._viewports[t];
  }
  getFrameExtents() {
    return this._frameExtents;
  }
  dispose() {
    this.map && this.map.dispose(), this.mapPass && this.mapPass.dispose();
  }
  copy(t) {
    return (
      (this.camera = t.camera.clone()),
      (this.intensity = t.intensity),
      (this.bias = t.bias),
      (this.radius = t.radius),
      this.mapSize.copy(t.mapSize),
      this
    );
  }
  clone() {
    return new this.constructor().copy(this);
  }
  toJSON() {
    const t = {};
    return (
      1 !== this.intensity && (t.intensity = this.intensity),
      0 !== this.bias && (t.bias = this.bias),
      0 !== this.normalBias && (t.normalBias = this.normalBias),
      1 !== this.radius && (t.radius = this.radius),
      (512 === this.mapSize.x && 512 === this.mapSize.y) ||
        (t.mapSize = this.mapSize.toArray()),
      (t.camera = this.camera.toJSON(!1).object),
      delete t.camera.matrix,
      t
    );
  }
}
class Nr extends Xi {
  constructor(t = -1, e = 1, n = 1, i = -1, r = 0.1, a = 2e3) {
    super(),
      (this.isOrthographicCamera = !0),
      (this.type = "OrthographicCamera"),
      (this.zoom = 1),
      (this.view = null),
      (this.left = t),
      (this.right = e),
      (this.top = n),
      (this.bottom = i),
      (this.near = r),
      (this.far = a),
      this.updateProjectionMatrix();
  }
  copy(t, e) {
    return (
      super.copy(t, e),
      (this.left = t.left),
      (this.right = t.right),
      (this.top = t.top),
      (this.bottom = t.bottom),
      (this.near = t.near),
      (this.far = t.far),
      (this.zoom = t.zoom),
      (this.view = null === t.view ? null : Object.assign({}, t.view)),
      this
    );
  }
  setViewOffset(t, e, n, i, r, a) {
    null === this.view &&
      (this.view = {
        enabled: !0,
        fullWidth: 1,
        fullHeight: 1,
        offsetX: 0,
        offsetY: 0,
        width: 1,
        height: 1,
      }),
      (this.view.enabled = !0),
      (this.view.fullWidth = t),
      (this.view.fullHeight = e),
      (this.view.offsetX = n),
      (this.view.offsetY = i),
      (this.view.width = r),
      (this.view.height = a),
      this.updateProjectionMatrix();
  }
  clearViewOffset() {
    null !== this.view && (this.view.enabled = !1),
      this.updateProjectionMatrix();
  }
  updateProjectionMatrix() {
    const t = (this.right - this.left) / (2 * this.zoom),
      e = (this.top - this.bottom) / (2 * this.zoom),
      n = (this.right + this.left) / 2,
      i = (this.top + this.bottom) / 2;
    let r = n - t,
      a = n + t,
      s = i + e,
      o = i - e;
    if (null !== this.view && this.view.enabled) {
      const t = (this.right - this.left) / this.view.fullWidth / this.zoom,
        e = (this.top - this.bottom) / this.view.fullHeight / this.zoom;
      (r += t * this.view.offsetX),
        (a = r + t * this.view.width),
        (s -= e * this.view.offsetY),
        (o = s - e * this.view.height);
    }
    this.projectionMatrix.makeOrthographic(
      r,
      a,
      s,
      o,
      this.near,
      this.far,
      this.coordinateSystem
    ),
      this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(t) {
    const e = super.toJSON(t);
    return (
      (e.object.zoom = this.zoom),
      (e.object.left = this.left),
      (e.object.right = this.right),
      (e.object.top = this.top),
      (e.object.bottom = this.bottom),
      (e.object.near = this.near),
      (e.object.far = this.far),
      null !== this.view && (e.object.view = Object.assign({}, this.view)),
      e
    );
  }
}
class Or extends Ir {
  constructor() {
    super(new Nr(-5, 5, 5, -5, 0.5, 500)), (this.isDirectionalLightShadow = !0);
  }
}
class Fr extends Pr {
  constructor(t, e) {
    super(t, e),
      (this.isDirectionalLight = !0),
      (this.type = "DirectionalLight"),
      this.position.copy(Gn.DEFAULT_UP),
      this.updateMatrix(),
      (this.target = new Gn()),
      (this.shadow = new Or());
  }
  dispose() {
    this.shadow.dispose();
  }
  copy(t) {
    return (
      super.copy(t),
      (this.target = t.target.clone()),
      (this.shadow = t.shadow.clone()),
      this
    );
  }
}
class Br extends Pr {
  constructor(t, e) {
    super(t, e), (this.isAmbientLight = !0), (this.type = "AmbientLight");
  }
}
class zr extends Ki {
  constructor(t = []) {
    super(), (this.isArrayCamera = !0), (this.cameras = t);
  }
}
class Hr {
  constructor(t = !0) {
    (this.autoStart = t),
      (this.startTime = 0),
      (this.oldTime = 0),
      (this.elapsedTime = 0),
      (this.running = !1);
  }
  start() {
    (this.startTime = Vr()),
      (this.oldTime = this.startTime),
      (this.elapsedTime = 0),
      (this.running = !0);
  }
  stop() {
    this.getElapsedTime(), (this.running = !1), (this.autoStart = !1);
  }
  getElapsedTime() {
    return this.getDelta(), this.elapsedTime;
  }
  getDelta() {
    let t = 0;
    if (this.autoStart && !this.running) return this.start(), 0;
    if (this.running) {
      const e = Vr();
      (t = (e - this.oldTime) / 1e3),
        (this.oldTime = e),
        (this.elapsedTime += t);
    }
    return t;
  }
}
function Vr() {
  return performance.now();
}
function Gr(t, e, n, i) {
  const r = (function (t) {
    switch (t) {
      case q:
      case 1010:
        return {
          byteLength: 1,
          components: 1,
        };
      case Y:
      case 1011:
      case $:
        return {
          byteLength: 2,
          components: 1,
        };
      case Q:
      case tt:
        return {
          byteLength: 2,
          components: 4,
        };
      case Z:
      case K:
      case J:
        return {
          byteLength: 4,
          components: 1,
        };
      case 35902:
        return {
          byteLength: 4,
          components: 3,
        };
    }
    throw Error(`Unknown texture type ${t}.`);
  })(i);
  switch (n) {
    case 1021:
    case 1024:
      return t * e;
    case 1025:
      return t * e * 2;
    case 1028:
    case at:
      return ((t * e) / r.components) * r.byteLength;
    case 1030:
    case st:
      return ((t * e * 2) / r.components) * r.byteLength;
    case 1022:
      return ((t * e * 3) / r.components) * r.byteLength;
    case nt:
    case ot:
      return ((t * e * 4) / r.components) * r.byteLength;
    case lt:
    case ct:
      return Math.floor((t + 3) / 4) * Math.floor((e + 3) / 4) * 8;
    case ht:
    case ut:
      return Math.floor((t + 3) / 4) * Math.floor((e + 3) / 4) * 16;
    case pt:
    case mt:
      return (Math.max(t, 16) * Math.max(e, 8)) / 4;
    case dt:
    case ft:
      return (Math.max(t, 8) * Math.max(e, 8)) / 2;
    case gt:
    case _t:
      return Math.floor((t + 3) / 4) * Math.floor((e + 3) / 4) * 8;
    case vt:
    case xt:
      return Math.floor((t + 3) / 4) * Math.floor((e + 3) / 4) * 16;
    case Mt:
      return Math.floor((t + 4) / 5) * Math.floor((e + 3) / 4) * 16;
    case St:
      return Math.floor((t + 4) / 5) * Math.floor((e + 4) / 5) * 16;
    case yt:
      return Math.floor((t + 5) / 6) * Math.floor((e + 4) / 5) * 16;
    case Et:
      return Math.floor((t + 5) / 6) * Math.floor((e + 5) / 6) * 16;
    case Tt:
      return Math.floor((t + 7) / 8) * Math.floor((e + 4) / 5) * 16;
    case bt:
      return Math.floor((t + 7) / 8) * Math.floor((e + 5) / 6) * 16;
    case At:
      return Math.floor((t + 7) / 8) * Math.floor((e + 7) / 8) * 16;
    case wt:
      return Math.floor((t + 9) / 10) * Math.floor((e + 4) / 5) * 16;
    case Rt:
      return Math.floor((t + 9) / 10) * Math.floor((e + 5) / 6) * 16;
    case Ct:
      return Math.floor((t + 9) / 10) * Math.floor((e + 7) / 8) * 16;
    case Pt:
      return Math.floor((t + 9) / 10) * Math.floor((e + 9) / 10) * 16;
    case Lt:
      return Math.floor((t + 11) / 12) * Math.floor((e + 9) / 10) * 16;
    case Ut:
      return Math.floor((t + 11) / 12) * Math.floor((e + 11) / 12) * 16;
    case Dt:
    case It:
    case Nt:
      return Math.ceil(t / 4) * Math.ceil(e / 4) * 16;
    case 36283:
    case Ot:
      return Math.ceil(t / 4) * Math.ceil(e / 4) * 8;
    case Ft:
    case Bt:
      return Math.ceil(t / 4) * Math.ceil(e / 4) * 16;
  }
  throw Error(`Unable to determine texture byte length for ${n} format.`);
}
/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
function kr() {
  let t = null,
    e = !1,
    n = null,
    i = null;
  function r(e, a) {
    n(e, a), (i = t.requestAnimationFrame(r));
  }
  return {
    start: function () {
      !0 !== e && null !== n && ((i = t.requestAnimationFrame(r)), (e = !0));
    },
    stop: function () {
      t.cancelAnimationFrame(i), (e = !1);
    },
    setAnimationLoop: function (t) {
      n = t;
    },
    setContext: function (e) {
      t = e;
    },
  };
}
function Wr(t) {
  const e = new WeakMap();
  return {
    get: function (t) {
      return t.isInterleavedBufferAttribute && (t = t.data), e.get(t);
    },
    remove: function (n) {
      n.isInterleavedBufferAttribute && (n = n.data);
      const i = e.get(n);
      i && (t.deleteBuffer(i.buffer), e.delete(n));
    },
    update: function (n, i) {
      if (
        (n.isInterleavedBufferAttribute && (n = n.data), n.isGLBufferAttribute)
      ) {
        const t = e.get(n);
        return void (
          (t && t.version >= n.version) ||
          e.set(n, {
            buffer: n.buffer,
            type: n.type,
            bytesPerElement: n.elementSize,
            version: n.version,
          })
        );
      }
      const r = e.get(n);
      if (void 0 === r)
        e.set(
          n,
          (function (e, n) {
            const i = e.array,
              r = e.usage,
              a = i.byteLength,
              s = t.createBuffer();
            let o;
            if (
              (t.bindBuffer(n, s),
              t.bufferData(n, i, r),
              e.onUploadCallback(),
              i instanceof Float32Array)
            )
              o = t.FLOAT;
            else if (i instanceof Uint16Array)
              o = e.isFloat16BufferAttribute ? t.HALF_FLOAT : t.UNSIGNED_SHORT;
            else if (i instanceof Int16Array) o = t.SHORT;
            else if (i instanceof Uint32Array) o = t.UNSIGNED_INT;
            else if (i instanceof Int32Array) o = t.INT;
            else if (i instanceof Int8Array) o = t.BYTE;
            else if (i instanceof Uint8Array) o = t.UNSIGNED_BYTE;
            else {
              if (!(i instanceof Uint8ClampedArray))
                throw Error(
                  "THREE.WebGLAttributes: Unsupported buffer data format: " + i
                );
              o = t.UNSIGNED_BYTE;
            }
            return {
              buffer: s,
              type: o,
              bytesPerElement: i.BYTES_PER_ELEMENT,
              version: e.version,
              size: a,
            };
          })(n, i)
        );
      else if (r.version < n.version) {
        if (r.size !== n.array.byteLength)
          throw Error(
            "THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported."
          );
        !(function (e, n, i) {
          const r = n.array,
            a = n.updateRanges;
          if ((t.bindBuffer(i, e), 0 === a.length)) t.bufferSubData(i, 0, r);
          else {
            a.sort((t, e) => t.start - e.start);
            let e = 0;
            for (let t = 1; t < a.length; t++) {
              const n = a[e],
                i = a[t];
              i.start > n.start + n.count + 1
                ? (++e, (a[e] = i))
                : (n.count = Math.max(n.count, i.start + i.count - n.start));
            }
            a.length = e + 1;
            for (let n = 0, s = a.length; s > n; n++) {
              const e = a[n];
              t.bufferSubData(
                i,
                e.start * r.BYTES_PER_ELEMENT,
                r,
                e.start,
                e.count
              );
            }
            n.clearUpdateRanges();
          }
          n.onUploadCallback();
        })(r.buffer, n, i),
          (r.version = n.version);
      }
    },
  };
}
"undefined" != typeof __THREE_DEVTOOLS__ &&
  __THREE_DEVTOOLS__.dispatchEvent(
    new CustomEvent("register", {
      detail: {
        revision: t,
      },
    })
  ),
  "undefined" != typeof window && (window.__THREE__ || (window.__THREE__ = t));
const Xr = {
    alphahash_fragment:
      "#ifdef USE_ALPHAHASH\n\tif ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;\n#endif",
    alphahash_pars_fragment:
      "#ifdef USE_ALPHAHASH\n\tconst float ALPHA_HASH_SCALE = 0.05;\n\tfloat hash2D( vec2 value ) {\n\t\treturn fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );\n\t}\n\tfloat hash3D( vec3 value ) {\n\t\treturn hash2D( vec2( hash2D( value.xy ), value.z ) );\n\t}\n\tfloat getAlphaHashThreshold( vec3 position ) {\n\t\tfloat maxDeriv = max(\n\t\t\tlength( dFdx( position.xyz ) ),\n\t\t\tlength( dFdy( position.xyz ) )\n\t\t);\n\t\tfloat pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );\n\t\tvec2 pixScales = vec2(\n\t\t\texp2( floor( log2( pixScale ) ) ),\n\t\t\texp2( ceil( log2( pixScale ) ) )\n\t\t);\n\t\tvec2 alpha = vec2(\n\t\t\thash3D( floor( pixScales.x * position.xyz ) ),\n\t\t\thash3D( floor( pixScales.y * position.xyz ) )\n\t\t);\n\t\tfloat lerpFactor = fract( log2( pixScale ) );\n\t\tfloat x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;\n\t\tfloat a = min( lerpFactor, 1.0 - lerpFactor );\n\t\tvec3 cases = vec3(\n\t\t\tx * x / ( 2.0 * a * ( 1.0 - a ) ),\n\t\t\t( x - 0.5 * a ) / ( 1.0 - a ),\n\t\t\t1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )\n\t\t);\n\t\tfloat threshold = ( x < ( 1.0 - a ) )\n\t\t\t? ( ( x < a ) ? cases.x : cases.y )\n\t\t\t: cases.z;\n\t\treturn clamp( threshold , 1.0e-6, 1.0 );\n\t}\n#endif",
    alphamap_fragment:
      "#ifdef USE_ALPHAMAP\n\tdiffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;\n#endif",
    alphamap_pars_fragment:
      "#ifdef USE_ALPHAMAP\n\tuniform sampler2D alphaMap;\n#endif",
    alphatest_fragment:
      "#ifdef USE_ALPHATEST\n\t#ifdef ALPHA_TO_COVERAGE\n\tdiffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );\n\tif ( diffuseColor.a == 0.0 ) discard;\n\t#else\n\tif ( diffuseColor.a < alphaTest ) discard;\n\t#endif\n#endif",
    alphatest_pars_fragment:
      "#ifdef USE_ALPHATEST\n\tuniform float alphaTest;\n#endif",
    aomap_fragment:
      "#ifdef USE_AOMAP\n\tfloat ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;\n\treflectedLight.indirectDiffuse *= ambientOcclusion;\n\t#if defined( USE_CLEARCOAT ) \n\t\tclearcoatSpecularIndirect *= ambientOcclusion;\n\t#endif\n\t#if defined( USE_SHEEN ) \n\t\tsheenSpecularIndirect *= ambientOcclusion;\n\t#endif\n\t#if defined( USE_ENVMAP ) && defined( STANDARD )\n\t\tfloat dotNV = saturate( dot( geometryNormal, geometryViewDir ) );\n\t\treflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );\n\t#endif\n#endif",
    aomap_pars_fragment:
      "#ifdef USE_AOMAP\n\tuniform sampler2D aoMap;\n\tuniform float aoMapIntensity;\n#endif",
    batching_pars_vertex:
      "#ifdef USE_BATCHING\n\t#if ! defined( GL_ANGLE_multi_draw )\n\t#define gl_DrawID _gl_DrawID\n\tuniform int _gl_DrawID;\n\t#endif\n\tuniform highp sampler2D batchingTexture;\n\tuniform highp usampler2D batchingIdTexture;\n\tmat4 getBatchingMatrix( const in float i ) {\n\t\tint size = textureSize( batchingTexture, 0 ).x;\n\t\tint j = int( i ) * 4;\n\t\tint x = j % size;\n\t\tint y = j / size;\n\t\tvec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );\n\t\tvec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );\n\t\tvec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );\n\t\tvec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );\n\t\treturn mat4( v1, v2, v3, v4 );\n\t}\n\tfloat getIndirectIndex( const in int i ) {\n\t\tint size = textureSize( batchingIdTexture, 0 ).x;\n\t\tint x = i % size;\n\t\tint y = i / size;\n\t\treturn float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );\n\t}\n#endif\n#ifdef USE_BATCHING_COLOR\n\tuniform sampler2D batchingColorTexture;\n\tvec3 getBatchingColor( const in float i ) {\n\t\tint size = textureSize( batchingColorTexture, 0 ).x;\n\t\tint j = int( i );\n\t\tint x = j % size;\n\t\tint y = j / size;\n\t\treturn texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;\n\t}\n#endif",
    batching_vertex:
      "#ifdef USE_BATCHING\n\tmat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );\n#endif",
    begin_vertex:
      "vec3 transformed = vec3( position );\n#ifdef USE_ALPHAHASH\n\tvPosition = vec3( position );\n#endif",
    beginnormal_vertex:
      "vec3 objectNormal = vec3( normal );\n#ifdef USE_TANGENT\n\tvec3 objectTangent = vec3( tangent.xyz );\n#endif",
    bsdfs:
      "float G_BlinnPhong_Implicit( ) {\n\treturn 0.25;\n}\nfloat D_BlinnPhong( const in float shininess, const in float dotNH ) {\n\treturn RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );\n}\nvec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {\n\tvec3 halfDir = normalize( lightDir + viewDir );\n\tfloat dotNH = saturate( dot( normal, halfDir ) );\n\tfloat dotVH = saturate( dot( viewDir, halfDir ) );\n\tvec3 F = F_Schlick( specularColor, 1.0, dotVH );\n\tfloat G = G_BlinnPhong_Implicit( );\n\tfloat D = D_BlinnPhong( shininess, dotNH );\n\treturn F * ( G * D );\n} // validated",
    iridescence_fragment:
      "#ifdef USE_IRIDESCENCE\n\tconst mat3 XYZ_TO_REC709 = mat3(\n\t\t 3.2404542, -0.9692660,  0.0556434,\n\t\t-1.5371385,  1.8760108, -0.2040259,\n\t\t-0.4985314,  0.0415560,  1.0572252\n\t);\n\tvec3 Fresnel0ToIor( vec3 fresnel0 ) {\n\t\tvec3 sqrtF0 = sqrt( fresnel0 );\n\t\treturn ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );\n\t}\n\tvec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {\n\t\treturn pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );\n\t}\n\tfloat IorToFresnel0( float transmittedIor, float incidentIor ) {\n\t\treturn pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));\n\t}\n\tvec3 evalSensitivity( float OPD, vec3 shift ) {\n\t\tfloat phase = 2.0 * PI * OPD * 1.0e-9;\n\t\tvec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );\n\t\tvec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );\n\t\tvec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );\n\t\tvec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );\n\t\txyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );\n\t\txyz /= 1.0685e-7;\n\t\tvec3 rgb = XYZ_TO_REC709 * xyz;\n\t\treturn rgb;\n\t}\n\tvec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {\n\t\tvec3 I;\n\t\tfloat iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );\n\t\tfloat sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );\n\t\tfloat cosTheta2Sq = 1.0 - sinTheta2Sq;\n\t\tif ( cosTheta2Sq < 0.0 ) {\n\t\t\treturn vec3( 1.0 );\n\t\t}\n\t\tfloat cosTheta2 = sqrt( cosTheta2Sq );\n\t\tfloat R0 = IorToFresnel0( iridescenceIOR, outsideIOR );\n\t\tfloat R12 = F_Schlick( R0, 1.0, cosTheta1 );\n\t\tfloat T121 = 1.0 - R12;\n\t\tfloat phi12 = 0.0;\n\t\tif ( iridescenceIOR < outsideIOR ) phi12 = PI;\n\t\tfloat phi21 = PI - phi12;\n\t\tvec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );\t\tvec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );\n\t\tvec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );\n\t\tvec3 phi23 = vec3( 0.0 );\n\t\tif ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;\n\t\tif ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;\n\t\tif ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;\n\t\tfloat OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;\n\t\tvec3 phi = vec3( phi21 ) + phi23;\n\t\tvec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );\n\t\tvec3 r123 = sqrt( R123 );\n\t\tvec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );\n\t\tvec3 C0 = R12 + Rs;\n\t\tI = C0;\n\t\tvec3 Cm = Rs - T121;\n\t\tfor ( int m = 1; m <= 2; ++ m ) {\n\t\t\tCm *= r123;\n\t\t\tvec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );\n\t\t\tI += Cm * Sm;\n\t\t}\n\t\treturn max( I, vec3( 0.0 ) );\n\t}\n#endif",
    bumpmap_pars_fragment:
      "#ifdef USE_BUMPMAP\n\tuniform sampler2D bumpMap;\n\tuniform float bumpScale;\n\tvec2 dHdxy_fwd() {\n\t\tvec2 dSTdx = dFdx( vBumpMapUv );\n\t\tvec2 dSTdy = dFdy( vBumpMapUv );\n\t\tfloat Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;\n\t\tfloat dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;\n\t\tfloat dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;\n\t\treturn vec2( dBx, dBy );\n\t}\n\tvec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {\n\t\tvec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );\n\t\tvec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );\n\t\tvec3 vN = surf_norm;\n\t\tvec3 R1 = cross( vSigmaY, vN );\n\t\tvec3 R2 = cross( vN, vSigmaX );\n\t\tfloat fDet = dot( vSigmaX, R1 ) * faceDirection;\n\t\tvec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );\n\t\treturn normalize( abs( fDet ) * surf_norm - vGrad );\n\t}\n#endif",
    clipping_planes_fragment:
      "#if NUM_CLIPPING_PLANES > 0\n\tvec4 plane;\n\t#ifdef ALPHA_TO_COVERAGE\n\t\tfloat distanceToPlane, distanceGradient;\n\t\tfloat clipOpacity = 1.0;\n\t\t#pragma unroll_loop_start\n\t\tfor ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {\n\t\t\tplane = clippingPlanes[ i ];\n\t\t\tdistanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;\n\t\t\tdistanceGradient = fwidth( distanceToPlane ) / 2.0;\n\t\t\tclipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );\n\t\t\tif ( clipOpacity == 0.0 ) discard;\n\t\t}\n\t\t#pragma unroll_loop_end\n\t\t#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES\n\t\t\tfloat unionClipOpacity = 1.0;\n\t\t\t#pragma unroll_loop_start\n\t\t\tfor ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {\n\t\t\t\tplane = clippingPlanes[ i ];\n\t\t\t\tdistanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;\n\t\t\t\tdistanceGradient = fwidth( distanceToPlane ) / 2.0;\n\t\t\t\tunionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );\n\t\t\t}\n\t\t\t#pragma unroll_loop_end\n\t\t\tclipOpacity *= 1.0 - unionClipOpacity;\n\t\t#endif\n\t\tdiffuseColor.a *= clipOpacity;\n\t\tif ( diffuseColor.a == 0.0 ) discard;\n\t#else\n\t\t#pragma unroll_loop_start\n\t\tfor ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {\n\t\t\tplane = clippingPlanes[ i ];\n\t\t\tif ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;\n\t\t}\n\t\t#pragma unroll_loop_end\n\t\t#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES\n\t\t\tbool clipped = true;\n\t\t\t#pragma unroll_loop_start\n\t\t\tfor ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {\n\t\t\t\tplane = clippingPlanes[ i ];\n\t\t\t\tclipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;\n\t\t\t}\n\t\t\t#pragma unroll_loop_end\n\t\t\tif ( clipped ) discard;\n\t\t#endif\n\t#endif\n#endif",
    clipping_planes_pars_fragment:
      "#if NUM_CLIPPING_PLANES > 0\n\tvarying vec3 vClipPosition;\n\tuniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];\n#endif",
    clipping_planes_pars_vertex:
      "#if NUM_CLIPPING_PLANES > 0\n\tvarying vec3 vClipPosition;\n#endif",
    clipping_planes_vertex:
      "#if NUM_CLIPPING_PLANES > 0\n\tvClipPosition = - mvPosition.xyz;\n#endif",
    color_fragment:
      "#if defined( USE_COLOR_ALPHA )\n\tdiffuseColor *= vColor;\n#elif defined( USE_COLOR )\n\tdiffuseColor.rgb *= vColor;\n#endif",
    color_pars_fragment:
      "#if defined( USE_COLOR_ALPHA )\n\tvarying vec4 vColor;\n#elif defined( USE_COLOR )\n\tvarying vec3 vColor;\n#endif",
    color_pars_vertex:
      "#if defined( USE_COLOR_ALPHA )\n\tvarying vec4 vColor;\n#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )\n\tvarying vec3 vColor;\n#endif",
    color_vertex:
      "#if defined( USE_COLOR_ALPHA )\n\tvColor = vec4( 1.0 );\n#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )\n\tvColor = vec3( 1.0 );\n#endif\n#ifdef USE_COLOR\n\tvColor *= color;\n#endif\n#ifdef USE_INSTANCING_COLOR\n\tvColor.xyz *= instanceColor.xyz;\n#endif\n#ifdef USE_BATCHING_COLOR\n\tvec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );\n\tvColor.xyz *= batchingColor.xyz;\n#endif",
    common:
      "#define PI 3.141592653589793\n#define PI2 6.283185307179586\n#define PI_HALF 1.5707963267948966\n#define RECIPROCAL_PI 0.3183098861837907\n#define RECIPROCAL_PI2 0.15915494309189535\n#define EPSILON 1e-6\n#ifndef saturate\n#define saturate( a ) clamp( a, 0.0, 1.0 )\n#endif\n#define whiteComplement( a ) ( 1.0 - saturate( a ) )\nfloat pow2( const in float x ) { return x*x; }\nvec3 pow2( const in vec3 x ) { return x*x; }\nfloat pow3( const in float x ) { return x*x*x; }\nfloat pow4( const in float x ) { float x2 = x*x; return x2*x2; }\nfloat max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }\nfloat average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }\nhighp float rand( const in vec2 uv ) {\n\tconst highp float a = 12.9898, b = 78.233, c = 43758.5453;\n\thighp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );\n\treturn fract( sin( sn ) * c );\n}\n#ifdef HIGH_PRECISION\n\tfloat precisionSafeLength( vec3 v ) { return length( v ); }\n#else\n\tfloat precisionSafeLength( vec3 v ) {\n\t\tfloat maxComponent = max3( abs( v ) );\n\t\treturn length( v / maxComponent ) * maxComponent;\n\t}\n#endif\nstruct IncidentLight {\n\tvec3 color;\n\tvec3 direction;\n\tbool visible;\n};\nstruct ReflectedLight {\n\tvec3 directDiffuse;\n\tvec3 directSpecular;\n\tvec3 indirectDiffuse;\n\tvec3 indirectSpecular;\n};\n#ifdef USE_ALPHAHASH\n\tvarying vec3 vPosition;\n#endif\nvec3 transformDirection( in vec3 dir, in mat4 matrix ) {\n\treturn normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );\n}\nvec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {\n\treturn normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );\n}\nmat3 transposeMat3( const in mat3 m ) {\n\tmat3 tmp;\n\ttmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );\n\ttmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );\n\ttmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );\n\treturn tmp;\n}\nbool isPerspectiveMatrix( mat4 m ) {\n\treturn m[ 2 ][ 3 ] == - 1.0;\n}\nvec2 equirectUv( in vec3 dir ) {\n\tfloat u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;\n\tfloat v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;\n\treturn vec2( u, v );\n}\nvec3 BRDF_Lambert( const in vec3 diffuseColor ) {\n\treturn RECIPROCAL_PI * diffuseColor;\n}\nvec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {\n\tfloat fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );\n\treturn f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );\n}\nfloat F_Schlick( const in float f0, const in float f90, const in float dotVH ) {\n\tfloat fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );\n\treturn f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );\n} // validated",
    cube_uv_reflection_fragment:
      "#ifdef ENVMAP_TYPE_CUBE_UV\n\t#define cubeUV_minMipLevel 4.0\n\t#define cubeUV_minTileSize 16.0\n\tfloat getFace( vec3 direction ) {\n\t\tvec3 absDirection = abs( direction );\n\t\tfloat face = - 1.0;\n\t\tif ( absDirection.x > absDirection.z ) {\n\t\t\tif ( absDirection.x > absDirection.y )\n\t\t\t\tface = direction.x > 0.0 ? 0.0 : 3.0;\n\t\t\telse\n\t\t\t\tface = direction.y > 0.0 ? 1.0 : 4.0;\n\t\t} else {\n\t\t\tif ( absDirection.z > absDirection.y )\n\t\t\t\tface = direction.z > 0.0 ? 2.0 : 5.0;\n\t\t\telse\n\t\t\t\tface = direction.y > 0.0 ? 1.0 : 4.0;\n\t\t}\n\t\treturn face;\n\t}\n\tvec2 getUV( vec3 direction, float face ) {\n\t\tvec2 uv;\n\t\tif ( face == 0.0 ) {\n\t\t\tuv = vec2( direction.z, direction.y ) / abs( direction.x );\n\t\t} else if ( face == 1.0 ) {\n\t\t\tuv = vec2( - direction.x, - direction.z ) / abs( direction.y );\n\t\t} else if ( face == 2.0 ) {\n\t\t\tuv = vec2( - direction.x, direction.y ) / abs( direction.z );\n\t\t} else if ( face == 3.0 ) {\n\t\t\tuv = vec2( - direction.z, direction.y ) / abs( direction.x );\n\t\t} else if ( face == 4.0 ) {\n\t\t\tuv = vec2( - direction.x, direction.z ) / abs( direction.y );\n\t\t} else {\n\t\t\tuv = vec2( direction.x, direction.y ) / abs( direction.z );\n\t\t}\n\t\treturn 0.5 * ( uv + 1.0 );\n\t}\n\tvec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {\n\t\tfloat face = getFace( direction );\n\t\tfloat filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );\n\t\tmipInt = max( mipInt, cubeUV_minMipLevel );\n\t\tfloat faceSize = exp2( mipInt );\n\t\thighp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;\n\t\tif ( face > 2.0 ) {\n\t\t\tuv.y += faceSize;\n\t\t\tface -= 3.0;\n\t\t}\n\t\tuv.x += face * faceSize;\n\t\tuv.x += filterInt * 3.0 * cubeUV_minTileSize;\n\t\tuv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );\n\t\tuv.x *= CUBEUV_TEXEL_WIDTH;\n\t\tuv.y *= CUBEUV_TEXEL_HEIGHT;\n\t\t#ifdef texture2DGradEXT\n\t\t\treturn texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;\n\t\t#else\n\t\t\treturn texture2D( envMap, uv ).rgb;\n\t\t#endif\n\t}\n\t#define cubeUV_r0 1.0\n\t#define cubeUV_m0 - 2.0\n\t#define cubeUV_r1 0.8\n\t#define cubeUV_m1 - 1.0\n\t#define cubeUV_r4 0.4\n\t#define cubeUV_m4 2.0\n\t#define cubeUV_r5 0.305\n\t#define cubeUV_m5 3.0\n\t#define cubeUV_r6 0.21\n\t#define cubeUV_m6 4.0\n\tfloat roughnessToMip( float roughness ) {\n\t\tfloat mip = 0.0;\n\t\tif ( roughness >= cubeUV_r1 ) {\n\t\t\tmip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;\n\t\t} else if ( roughness >= cubeUV_r4 ) {\n\t\t\tmip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;\n\t\t} else if ( roughness >= cubeUV_r5 ) {\n\t\t\tmip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;\n\t\t} else if ( roughness >= cubeUV_r6 ) {\n\t\t\tmip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;\n\t\t} else {\n\t\t\tmip = - 2.0 * log2( 1.16 * roughness );\t\t}\n\t\treturn mip;\n\t}\n\tvec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {\n\t\tfloat mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );\n\t\tfloat mipF = fract( mip );\n\t\tfloat mipInt = floor( mip );\n\t\tvec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );\n\t\tif ( mipF == 0.0 ) {\n\t\t\treturn vec4( color0, 1.0 );\n\t\t} else {\n\t\t\tvec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );\n\t\t\treturn vec4( mix( color0, color1, mipF ), 1.0 );\n\t\t}\n\t}\n#endif",
    defaultnormal_vertex:
      "vec3 transformedNormal = objectNormal;\n#ifdef USE_TANGENT\n\tvec3 transformedTangent = objectTangent;\n#endif\n#ifdef USE_BATCHING\n\tmat3 bm = mat3( batchingMatrix );\n\ttransformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );\n\ttransformedNormal = bm * transformedNormal;\n\t#ifdef USE_TANGENT\n\t\ttransformedTangent = bm * transformedTangent;\n\t#endif\n#endif\n#ifdef USE_INSTANCING\n\tmat3 im = mat3( instanceMatrix );\n\ttransformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );\n\ttransformedNormal = im * transformedNormal;\n\t#ifdef USE_TANGENT\n\t\ttransformedTangent = im * transformedTangent;\n\t#endif\n#endif\ntransformedNormal = normalMatrix * transformedNormal;\n#ifdef FLIP_SIDED\n\ttransformedNormal = - transformedNormal;\n#endif\n#ifdef USE_TANGENT\n\ttransformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;\n\t#ifdef FLIP_SIDED\n\t\ttransformedTangent = - transformedTangent;\n\t#endif\n#endif",
    displacementmap_pars_vertex:
      "#ifdef USE_DISPLACEMENTMAP\n\tuniform sampler2D displacementMap;\n\tuniform float displacementScale;\n\tuniform float displacementBias;\n#endif",
    displacementmap_vertex:
      "#ifdef USE_DISPLACEMENTMAP\n\ttransformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );\n#endif",
    emissivemap_fragment:
      "#ifdef USE_EMISSIVEMAP\n\tvec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );\n\t#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE\n\t\temissiveColor = sRGBTransferEOTF( emissiveColor );\n\t#endif\n\ttotalEmissiveRadiance *= emissiveColor.rgb;\n#endif",
    emissivemap_pars_fragment:
      "#ifdef USE_EMISSIVEMAP\n\tuniform sampler2D emissiveMap;\n#endif",
    colorspace_fragment: "gl_FragColor = linearToOutputTexel( gl_FragColor );",
    colorspace_pars_fragment:
      "vec4 LinearTransferOETF( in vec4 value ) {\n\treturn value;\n}\nvec4 sRGBTransferEOTF( in vec4 value ) {\n\treturn vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );\n}\nvec4 sRGBTransferOETF( in vec4 value ) {\n\treturn vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );\n}",
    envmap_fragment:
      "#ifdef USE_ENVMAP\n\t#ifdef ENV_WORLDPOS\n\t\tvec3 cameraToFrag;\n\t\tif ( isOrthographic ) {\n\t\t\tcameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );\n\t\t} else {\n\t\t\tcameraToFrag = normalize( vWorldPosition - cameraPosition );\n\t\t}\n\t\tvec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvec3 reflectVec = reflect( cameraToFrag, worldNormal );\n\t\t#else\n\t\t\tvec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );\n\t\t#endif\n\t#else\n\t\tvec3 reflectVec = vReflect;\n\t#endif\n\t#ifdef ENVMAP_TYPE_CUBE\n\t\tvec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );\n\t#else\n\t\tvec4 envColor = vec4( 0.0 );\n\t#endif\n\t#ifdef ENVMAP_BLENDING_MULTIPLY\n\t\toutgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );\n\t#elif defined( ENVMAP_BLENDING_MIX )\n\t\toutgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );\n\t#elif defined( ENVMAP_BLENDING_ADD )\n\t\toutgoingLight += envColor.xyz * specularStrength * reflectivity;\n\t#endif\n#endif",
    envmap_common_pars_fragment:
      "#ifdef USE_ENVMAP\n\tuniform float envMapIntensity;\n\tuniform float flipEnvMap;\n\tuniform mat3 envMapRotation;\n\t#ifdef ENVMAP_TYPE_CUBE\n\t\tuniform samplerCube envMap;\n\t#else\n\t\tuniform sampler2D envMap;\n\t#endif\n\t\n#endif",
    envmap_pars_fragment:
      "#ifdef USE_ENVMAP\n\tuniform float reflectivity;\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )\n\t\t#define ENV_WORLDPOS\n\t#endif\n\t#ifdef ENV_WORLDPOS\n\t\tvarying vec3 vWorldPosition;\n\t\tuniform float refractionRatio;\n\t#else\n\t\tvarying vec3 vReflect;\n\t#endif\n#endif",
    envmap_pars_vertex:
      "#ifdef USE_ENVMAP\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )\n\t\t#define ENV_WORLDPOS\n\t#endif\n\t#ifdef ENV_WORLDPOS\n\t\t\n\t\tvarying vec3 vWorldPosition;\n\t#else\n\t\tvarying vec3 vReflect;\n\t\tuniform float refractionRatio;\n\t#endif\n#endif",
    envmap_physical_pars_fragment:
      "#ifdef USE_ENVMAP\n\tvec3 getIBLIrradiance( const in vec3 normal ) {\n\t\t#ifdef ENVMAP_TYPE_CUBE_UV\n\t\t\tvec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n\t\t\tvec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );\n\t\t\treturn PI * envMapColor.rgb * envMapIntensity;\n\t\t#else\n\t\t\treturn vec3( 0.0 );\n\t\t#endif\n\t}\n\tvec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {\n\t\t#ifdef ENVMAP_TYPE_CUBE_UV\n\t\t\tvec3 reflectVec = reflect( - viewDir, normal );\n\t\t\treflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );\n\t\t\treflectVec = inverseTransformDirection( reflectVec, viewMatrix );\n\t\t\tvec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );\n\t\t\treturn envMapColor.rgb * envMapIntensity;\n\t\t#else\n\t\t\treturn vec3( 0.0 );\n\t\t#endif\n\t}\n\t#ifdef USE_ANISOTROPY\n\t\tvec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {\n\t\t\t#ifdef ENVMAP_TYPE_CUBE_UV\n\t\t\t\tvec3 bentNormal = cross( bitangent, viewDir );\n\t\t\t\tbentNormal = normalize( cross( bentNormal, bitangent ) );\n\t\t\t\tbentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );\n\t\t\t\treturn getIBLRadiance( viewDir, bentNormal, roughness );\n\t\t\t#else\n\t\t\t\treturn vec3( 0.0 );\n\t\t\t#endif\n\t\t}\n\t#endif\n#endif",
    envmap_vertex:
      "#ifdef USE_ENVMAP\n\t#ifdef ENV_WORLDPOS\n\t\tvWorldPosition = worldPosition.xyz;\n\t#else\n\t\tvec3 cameraToVertex;\n\t\tif ( isOrthographic ) {\n\t\t\tcameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );\n\t\t} else {\n\t\t\tcameraToVertex = normalize( worldPosition.xyz - cameraPosition );\n\t\t}\n\t\tvec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvReflect = reflect( cameraToVertex, worldNormal );\n\t\t#else\n\t\t\tvReflect = refract( cameraToVertex, worldNormal, refractionRatio );\n\t\t#endif\n\t#endif\n#endif",
    fog_vertex: "#ifdef USE_FOG\n\tvFogDepth = - mvPosition.z;\n#endif",
    fog_pars_vertex: "#ifdef USE_FOG\n\tvarying float vFogDepth;\n#endif",
    fog_fragment:
      "#ifdef USE_FOG\n\t#ifdef FOG_EXP2\n\t\tfloat fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );\n\t#else\n\t\tfloat fogFactor = smoothstep( fogNear, fogFar, vFogDepth );\n\t#endif\n\tgl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );\n#endif",
    fog_pars_fragment:
      "#ifdef USE_FOG\n\tuniform vec3 fogColor;\n\tvarying float vFogDepth;\n\t#ifdef FOG_EXP2\n\t\tuniform float fogDensity;\n\t#else\n\t\tuniform float fogNear;\n\t\tuniform float fogFar;\n\t#endif\n#endif",
    gradientmap_pars_fragment:
      "#ifdef USE_GRADIENTMAP\n\tuniform sampler2D gradientMap;\n#endif\nvec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {\n\tfloat dotNL = dot( normal, lightDirection );\n\tvec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );\n\t#ifdef USE_GRADIENTMAP\n\t\treturn vec3( texture2D( gradientMap, coord ).r );\n\t#else\n\t\tvec2 fw = fwidth( coord ) * 0.5;\n\t\treturn mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );\n\t#endif\n}",
    lightmap_pars_fragment:
      "#ifdef USE_LIGHTMAP\n\tuniform sampler2D lightMap;\n\tuniform float lightMapIntensity;\n#endif",
    lights_lambert_fragment:
      "LambertMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;\nmaterial.specularStrength = specularStrength;",
    lights_lambert_pars_fragment:
      "varying vec3 vViewPosition;\nstruct LambertMaterial {\n\tvec3 diffuseColor;\n\tfloat specularStrength;\n};\nvoid RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {\n\tfloat dotNL = saturate( dot( geometryNormal, directLight.direction ) );\n\tvec3 irradiance = dotNL * directLight.color;\n\treflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\n#define RE_Direct\t\t\t\tRE_Direct_Lambert\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_Lambert",
    lights_pars_begin:
      "uniform bool receiveShadow;\nuniform vec3 ambientLightColor;\n#if defined( USE_LIGHT_PROBES )\n\tuniform vec3 lightProbe[ 9 ];\n#endif\nvec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {\n\tfloat x = normal.x, y = normal.y, z = normal.z;\n\tvec3 result = shCoefficients[ 0 ] * 0.886227;\n\tresult += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;\n\tresult += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;\n\tresult += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;\n\tresult += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;\n\tresult += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;\n\tresult += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );\n\tresult += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;\n\tresult += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );\n\treturn result;\n}\nvec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {\n\tvec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n\tvec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );\n\treturn irradiance;\n}\nvec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {\n\tvec3 irradiance = ambientLightColor;\n\treturn irradiance;\n}\nfloat getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {\n\tfloat distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );\n\tif ( cutoffDistance > 0.0 ) {\n\t\tdistanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );\n\t}\n\treturn distanceFalloff;\n}\nfloat getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {\n\treturn smoothstep( coneCosine, penumbraCosine, angleCosine );\n}\n#if NUM_DIR_LIGHTS > 0\n\tstruct DirectionalLight {\n\t\tvec3 direction;\n\t\tvec3 color;\n\t};\n\tuniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];\n\tvoid getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {\n\t\tlight.color = directionalLight.color;\n\t\tlight.direction = directionalLight.direction;\n\t\tlight.visible = true;\n\t}\n#endif\n#if NUM_POINT_LIGHTS > 0\n\tstruct PointLight {\n\t\tvec3 position;\n\t\tvec3 color;\n\t\tfloat distance;\n\t\tfloat decay;\n\t};\n\tuniform PointLight pointLights[ NUM_POINT_LIGHTS ];\n\tvoid getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {\n\t\tvec3 lVector = pointLight.position - geometryPosition;\n\t\tlight.direction = normalize( lVector );\n\t\tfloat lightDistance = length( lVector );\n\t\tlight.color = pointLight.color;\n\t\tlight.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );\n\t\tlight.visible = ( light.color != vec3( 0.0 ) );\n\t}\n#endif\n#if NUM_SPOT_LIGHTS > 0\n\tstruct SpotLight {\n\t\tvec3 position;\n\t\tvec3 direction;\n\t\tvec3 color;\n\t\tfloat distance;\n\t\tfloat decay;\n\t\tfloat coneCos;\n\t\tfloat penumbraCos;\n\t};\n\tuniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];\n\tvoid getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {\n\t\tvec3 lVector = spotLight.position - geometryPosition;\n\t\tlight.direction = normalize( lVector );\n\t\tfloat angleCos = dot( light.direction, spotLight.direction );\n\t\tfloat spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );\n\t\tif ( spotAttenuation > 0.0 ) {\n\t\t\tfloat lightDistance = length( lVector );\n\t\t\tlight.color = spotLight.color * spotAttenuation;\n\t\t\tlight.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );\n\t\t\tlight.visible = ( light.color != vec3( 0.0 ) );\n\t\t} else {\n\t\t\tlight.color = vec3( 0.0 );\n\t\t\tlight.visible = false;\n\t\t}\n\t}\n#endif\n#if NUM_RECT_AREA_LIGHTS > 0\n\tstruct RectAreaLight {\n\t\tvec3 color;\n\t\tvec3 position;\n\t\tvec3 halfWidth;\n\t\tvec3 halfHeight;\n\t};\n\tuniform sampler2D ltc_1;\tuniform sampler2D ltc_2;\n\tuniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];\n#endif\n#if NUM_HEMI_LIGHTS > 0\n\tstruct HemisphereLight {\n\t\tvec3 direction;\n\t\tvec3 skyColor;\n\t\tvec3 groundColor;\n\t};\n\tuniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];\n\tvec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {\n\t\tfloat dotNL = dot( normal, hemiLight.direction );\n\t\tfloat hemiDiffuseWeight = 0.5 * dotNL + 0.5;\n\t\tvec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );\n\t\treturn irradiance;\n\t}\n#endif",
    lights_toon_fragment:
      "ToonMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;",
    lights_toon_pars_fragment:
      "varying vec3 vViewPosition;\nstruct ToonMaterial {\n\tvec3 diffuseColor;\n};\nvoid RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {\n\tvec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;\n\treflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\n#define RE_Direct\t\t\t\tRE_Direct_Toon\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_Toon",
    lights_phong_fragment:
      "BlinnPhongMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;\nmaterial.specularColor = specular;\nmaterial.specularShininess = shininess;\nmaterial.specularStrength = specularStrength;",
    lights_phong_pars_fragment:
      "varying vec3 vViewPosition;\nstruct BlinnPhongMaterial {\n\tvec3 diffuseColor;\n\tvec3 specularColor;\n\tfloat specularShininess;\n\tfloat specularStrength;\n};\nvoid RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n\tfloat dotNL = saturate( dot( geometryNormal, directLight.direction ) );\n\tvec3 irradiance = dotNL * directLight.color;\n\treflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n\treflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;\n}\nvoid RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\n#define RE_Direct\t\t\t\tRE_Direct_BlinnPhong\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_BlinnPhong",
    lights_physical_fragment:
      "PhysicalMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );\nvec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );\nfloat geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );\nmaterial.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;\nmaterial.roughness = min( material.roughness, 1.0 );\n#ifdef IOR\n\tmaterial.ior = ior;\n\t#ifdef USE_SPECULAR\n\t\tfloat specularIntensityFactor = specularIntensity;\n\t\tvec3 specularColorFactor = specularColor;\n\t\t#ifdef USE_SPECULAR_COLORMAP\n\t\t\tspecularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;\n\t\t#endif\n\t\t#ifdef USE_SPECULAR_INTENSITYMAP\n\t\t\tspecularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;\n\t\t#endif\n\t\tmaterial.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );\n\t#else\n\t\tfloat specularIntensityFactor = 1.0;\n\t\tvec3 specularColorFactor = vec3( 1.0 );\n\t\tmaterial.specularF90 = 1.0;\n\t#endif\n\tmaterial.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );\n#else\n\tmaterial.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );\n\tmaterial.specularF90 = 1.0;\n#endif\n#ifdef USE_CLEARCOAT\n\tmaterial.clearcoat = clearcoat;\n\tmaterial.clearcoatRoughness = clearcoatRoughness;\n\tmaterial.clearcoatF0 = vec3( 0.04 );\n\tmaterial.clearcoatF90 = 1.0;\n\t#ifdef USE_CLEARCOATMAP\n\t\tmaterial.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;\n\t#endif\n\t#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n\t\tmaterial.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;\n\t#endif\n\tmaterial.clearcoat = saturate( material.clearcoat );\tmaterial.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );\n\tmaterial.clearcoatRoughness += geometryRoughness;\n\tmaterial.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );\n#endif\n#ifdef USE_DISPERSION\n\tmaterial.dispersion = dispersion;\n#endif\n#ifdef USE_IRIDESCENCE\n\tmaterial.iridescence = iridescence;\n\tmaterial.iridescenceIOR = iridescenceIOR;\n\t#ifdef USE_IRIDESCENCEMAP\n\t\tmaterial.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;\n\t#endif\n\t#ifdef USE_IRIDESCENCE_THICKNESSMAP\n\t\tmaterial.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;\n\t#else\n\t\tmaterial.iridescenceThickness = iridescenceThicknessMaximum;\n\t#endif\n#endif\n#ifdef USE_SHEEN\n\tmaterial.sheenColor = sheenColor;\n\t#ifdef USE_SHEEN_COLORMAP\n\t\tmaterial.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;\n\t#endif\n\tmaterial.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );\n\t#ifdef USE_SHEEN_ROUGHNESSMAP\n\t\tmaterial.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;\n\t#endif\n#endif\n#ifdef USE_ANISOTROPY\n\t#ifdef USE_ANISOTROPYMAP\n\t\tmat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );\n\t\tvec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;\n\t\tvec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;\n\t#else\n\t\tvec2 anisotropyV = anisotropyVector;\n\t#endif\n\tmaterial.anisotropy = length( anisotropyV );\n\tif( material.anisotropy == 0.0 ) {\n\t\tanisotropyV = vec2( 1.0, 0.0 );\n\t} else {\n\t\tanisotropyV /= material.anisotropy;\n\t\tmaterial.anisotropy = saturate( material.anisotropy );\n\t}\n\tmaterial.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );\n\tmaterial.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;\n\tmaterial.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;\n#endif",
    lights_physical_pars_fragment:
      "struct PhysicalMaterial {\n\tvec3 diffuseColor;\n\tfloat roughness;\n\tvec3 specularColor;\n\tfloat specularF90;\n\tfloat dispersion;\n\t#ifdef USE_CLEARCOAT\n\t\tfloat clearcoat;\n\t\tfloat clearcoatRoughness;\n\t\tvec3 clearcoatF0;\n\t\tfloat clearcoatF90;\n\t#endif\n\t#ifdef USE_IRIDESCENCE\n\t\tfloat iridescence;\n\t\tfloat iridescenceIOR;\n\t\tfloat iridescenceThickness;\n\t\tvec3 iridescenceFresnel;\n\t\tvec3 iridescenceF0;\n\t#endif\n\t#ifdef USE_SHEEN\n\t\tvec3 sheenColor;\n\t\tfloat sheenRoughness;\n\t#endif\n\t#ifdef IOR\n\t\tfloat ior;\n\t#endif\n\t#ifdef USE_TRANSMISSION\n\t\tfloat transmission;\n\t\tfloat transmissionAlpha;\n\t\tfloat thickness;\n\t\tfloat attenuationDistance;\n\t\tvec3 attenuationColor;\n\t#endif\n\t#ifdef USE_ANISOTROPY\n\t\tfloat anisotropy;\n\t\tfloat alphaT;\n\t\tvec3 anisotropyT;\n\t\tvec3 anisotropyB;\n\t#endif\n};\nvec3 clearcoatSpecularDirect = vec3( 0.0 );\nvec3 clearcoatSpecularIndirect = vec3( 0.0 );\nvec3 sheenSpecularDirect = vec3( 0.0 );\nvec3 sheenSpecularIndirect = vec3(0.0 );\nvec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {\n    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );\n    float x2 = x * x;\n    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );\n    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );\n}\nfloat V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {\n\tfloat a2 = pow2( alpha );\n\tfloat gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );\n\tfloat gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );\n\treturn 0.5 / max( gv + gl, EPSILON );\n}\nfloat D_GGX( const in float alpha, const in float dotNH ) {\n\tfloat a2 = pow2( alpha );\n\tfloat denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;\n\treturn RECIPROCAL_PI * a2 / pow2( denom );\n}\n#ifdef USE_ANISOTROPY\n\tfloat V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {\n\t\tfloat gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );\n\t\tfloat gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );\n\t\tfloat v = 0.5 / ( gv + gl );\n\t\treturn saturate(v);\n\t}\n\tfloat D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {\n\t\tfloat a2 = alphaT * alphaB;\n\t\thighp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );\n\t\thighp float v2 = dot( v, v );\n\t\tfloat w2 = a2 / v2;\n\t\treturn RECIPROCAL_PI * a2 * pow2 ( w2 );\n\t}\n#endif\n#ifdef USE_CLEARCOAT\n\tvec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {\n\t\tvec3 f0 = material.clearcoatF0;\n\t\tfloat f90 = material.clearcoatF90;\n\t\tfloat roughness = material.clearcoatRoughness;\n\t\tfloat alpha = pow2( roughness );\n\t\tvec3 halfDir = normalize( lightDir + viewDir );\n\t\tfloat dotNL = saturate( dot( normal, lightDir ) );\n\t\tfloat dotNV = saturate( dot( normal, viewDir ) );\n\t\tfloat dotNH = saturate( dot( normal, halfDir ) );\n\t\tfloat dotVH = saturate( dot( viewDir, halfDir ) );\n\t\tvec3 F = F_Schlick( f0, f90, dotVH );\n\t\tfloat V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );\n\t\tfloat D = D_GGX( alpha, dotNH );\n\t\treturn F * ( V * D );\n\t}\n#endif\nvec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {\n\tvec3 f0 = material.specularColor;\n\tfloat f90 = material.specularF90;\n\tfloat roughness = material.roughness;\n\tfloat alpha = pow2( roughness );\n\tvec3 halfDir = normalize( lightDir + viewDir );\n\tfloat dotNL = saturate( dot( normal, lightDir ) );\n\tfloat dotNV = saturate( dot( normal, viewDir ) );\n\tfloat dotNH = saturate( dot( normal, halfDir ) );\n\tfloat dotVH = saturate( dot( viewDir, halfDir ) );\n\tvec3 F = F_Schlick( f0, f90, dotVH );\n\t#ifdef USE_IRIDESCENCE\n\t\tF = mix( F, material.iridescenceFresnel, material.iridescence );\n\t#endif\n\t#ifdef USE_ANISOTROPY\n\t\tfloat dotTL = dot( material.anisotropyT, lightDir );\n\t\tfloat dotTV = dot( material.anisotropyT, viewDir );\n\t\tfloat dotTH = dot( material.anisotropyT, halfDir );\n\t\tfloat dotBL = dot( material.anisotropyB, lightDir );\n\t\tfloat dotBV = dot( material.anisotropyB, viewDir );\n\t\tfloat dotBH = dot( material.anisotropyB, halfDir );\n\t\tfloat V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );\n\t\tfloat D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );\n\t#else\n\t\tfloat V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );\n\t\tfloat D = D_GGX( alpha, dotNH );\n\t#endif\n\treturn F * ( V * D );\n}\nvec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {\n\tconst float LUT_SIZE = 64.0;\n\tconst float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;\n\tconst float LUT_BIAS = 0.5 / LUT_SIZE;\n\tfloat dotNV = saturate( dot( N, V ) );\n\tvec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );\n\tuv = uv * LUT_SCALE + LUT_BIAS;\n\treturn uv;\n}\nfloat LTC_ClippedSphereFormFactor( const in vec3 f ) {\n\tfloat l = length( f );\n\treturn max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );\n}\nvec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {\n\tfloat x = dot( v1, v2 );\n\tfloat y = abs( x );\n\tfloat a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;\n\tfloat b = 3.4175940 + ( 4.1616724 + y ) * y;\n\tfloat v = a / b;\n\tfloat theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;\n\treturn cross( v1, v2 ) * theta_sintheta;\n}\nvec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {\n\tvec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];\n\tvec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];\n\tvec3 lightNormal = cross( v1, v2 );\n\tif( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );\n\tvec3 T1, T2;\n\tT1 = normalize( V - N * dot( V, N ) );\n\tT2 = - cross( N, T1 );\n\tmat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );\n\tvec3 coords[ 4 ];\n\tcoords[ 0 ] = mat * ( rectCoords[ 0 ] - P );\n\tcoords[ 1 ] = mat * ( rectCoords[ 1 ] - P );\n\tcoords[ 2 ] = mat * ( rectCoords[ 2 ] - P );\n\tcoords[ 3 ] = mat * ( rectCoords[ 3 ] - P );\n\tcoords[ 0 ] = normalize( coords[ 0 ] );\n\tcoords[ 1 ] = normalize( coords[ 1 ] );\n\tcoords[ 2 ] = normalize( coords[ 2 ] );\n\tcoords[ 3 ] = normalize( coords[ 3 ] );\n\tvec3 vectorFormFactor = vec3( 0.0 );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );\n\tfloat result = LTC_ClippedSphereFormFactor( vectorFormFactor );\n\treturn vec3( result );\n}\n#if defined( USE_SHEEN )\nfloat D_Charlie( float roughness, float dotNH ) {\n\tfloat alpha = pow2( roughness );\n\tfloat invAlpha = 1.0 / alpha;\n\tfloat cos2h = dotNH * dotNH;\n\tfloat sin2h = max( 1.0 - cos2h, 0.0078125 );\n\treturn ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );\n}\nfloat V_Neubelt( float dotNV, float dotNL ) {\n\treturn saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );\n}\nvec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {\n\tvec3 halfDir = normalize( lightDir + viewDir );\n\tfloat dotNL = saturate( dot( normal, lightDir ) );\n\tfloat dotNV = saturate( dot( normal, viewDir ) );\n\tfloat dotNH = saturate( dot( normal, halfDir ) );\n\tfloat D = D_Charlie( sheenRoughness, dotNH );\n\tfloat V = V_Neubelt( dotNV, dotNL );\n\treturn sheenColor * ( D * V );\n}\n#endif\nfloat IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {\n\tfloat dotNV = saturate( dot( normal, viewDir ) );\n\tfloat r2 = roughness * roughness;\n\tfloat a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;\n\tfloat b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;\n\tfloat DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );\n\treturn saturate( DG * RECIPROCAL_PI );\n}\nvec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {\n\tfloat dotNV = saturate( dot( normal, viewDir ) );\n\tconst vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );\n\tconst vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );\n\tvec4 r = roughness * c0 + c1;\n\tfloat a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;\n\tvec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;\n\treturn fab;\n}\nvec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {\n\tvec2 fab = DFGApprox( normal, viewDir, roughness );\n\treturn specularColor * fab.x + specularF90 * fab.y;\n}\n#ifdef USE_IRIDESCENCE\nvoid computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {\n#else\nvoid computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {\n#endif\n\tvec2 fab = DFGApprox( normal, viewDir, roughness );\n\t#ifdef USE_IRIDESCENCE\n\t\tvec3 Fr = mix( specularColor, iridescenceF0, iridescence );\n\t#else\n\t\tvec3 Fr = specularColor;\n\t#endif\n\tvec3 FssEss = Fr * fab.x + specularF90 * fab.y;\n\tfloat Ess = fab.x + fab.y;\n\tfloat Ems = 1.0 - Ess;\n\tvec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;\tvec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );\n\tsingleScatter += FssEss;\n\tmultiScatter += Fms * Ems;\n}\n#if NUM_RECT_AREA_LIGHTS > 0\n\tvoid RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\t\tvec3 normal = geometryNormal;\n\t\tvec3 viewDir = geometryViewDir;\n\t\tvec3 position = geometryPosition;\n\t\tvec3 lightPos = rectAreaLight.position;\n\t\tvec3 halfWidth = rectAreaLight.halfWidth;\n\t\tvec3 halfHeight = rectAreaLight.halfHeight;\n\t\tvec3 lightColor = rectAreaLight.color;\n\t\tfloat roughness = material.roughness;\n\t\tvec3 rectCoords[ 4 ];\n\t\trectCoords[ 0 ] = lightPos + halfWidth - halfHeight;\t\trectCoords[ 1 ] = lightPos - halfWidth - halfHeight;\n\t\trectCoords[ 2 ] = lightPos - halfWidth + halfHeight;\n\t\trectCoords[ 3 ] = lightPos + halfWidth + halfHeight;\n\t\tvec2 uv = LTC_Uv( normal, viewDir, roughness );\n\t\tvec4 t1 = texture2D( ltc_1, uv );\n\t\tvec4 t2 = texture2D( ltc_2, uv );\n\t\tmat3 mInv = mat3(\n\t\t\tvec3( t1.x, 0, t1.y ),\n\t\t\tvec3(    0, 1,    0 ),\n\t\t\tvec3( t1.z, 0, t1.w )\n\t\t);\n\t\tvec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );\n\t\treflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );\n\t\treflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );\n\t}\n#endif\nvoid RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\tfloat dotNL = saturate( dot( geometryNormal, directLight.direction ) );\n\tvec3 irradiance = dotNL * directLight.color;\n\t#ifdef USE_CLEARCOAT\n\t\tfloat dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );\n\t\tvec3 ccIrradiance = dotNLcc * directLight.color;\n\t\tclearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );\n\t#endif\n\t#ifdef USE_SHEEN\n\t\tsheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );\n\t#endif\n\treflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );\n\treflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {\n\t#ifdef USE_CLEARCOAT\n\t\tclearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );\n\t#endif\n\t#ifdef USE_SHEEN\n\t\tsheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );\n\t#endif\n\tvec3 singleScattering = vec3( 0.0 );\n\tvec3 multiScattering = vec3( 0.0 );\n\tvec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;\n\t#ifdef USE_IRIDESCENCE\n\t\tcomputeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );\n\t#else\n\t\tcomputeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );\n\t#endif\n\tvec3 totalScattering = singleScattering + multiScattering;\n\tvec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );\n\treflectedLight.indirectSpecular += radiance * singleScattering;\n\treflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;\n\treflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;\n}\n#define RE_Direct\t\t\t\tRE_Direct_Physical\n#define RE_Direct_RectArea\t\tRE_Direct_RectArea_Physical\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_Physical\n#define RE_IndirectSpecular\t\tRE_IndirectSpecular_Physical\nfloat computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {\n\treturn saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );\n}",
    lights_fragment_begin:
      "\nvec3 geometryPosition = - vViewPosition;\nvec3 geometryNormal = normal;\nvec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );\nvec3 geometryClearcoatNormal = vec3( 0.0 );\n#ifdef USE_CLEARCOAT\n\tgeometryClearcoatNormal = clearcoatNormal;\n#endif\n#ifdef USE_IRIDESCENCE\n\tfloat dotNVi = saturate( dot( normal, geometryViewDir ) );\n\tif ( material.iridescenceThickness == 0.0 ) {\n\t\tmaterial.iridescence = 0.0;\n\t} else {\n\t\tmaterial.iridescence = saturate( material.iridescence );\n\t}\n\tif ( material.iridescence > 0.0 ) {\n\t\tmaterial.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );\n\t\tmaterial.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );\n\t}\n#endif\nIncidentLight directLight;\n#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )\n\tPointLight pointLight;\n\t#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0\n\tPointLightShadow pointLightShadow;\n\t#endif\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tpointLight = pointLights[ i ];\n\t\tgetPointLightInfo( pointLight, geometryPosition, directLight );\n\t\t#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )\n\t\tpointLightShadow = pointLightShadows[ i ];\n\t\tdirectLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )\n\tSpotLight spotLight;\n\tvec4 spotColor;\n\tvec3 spotLightCoord;\n\tbool inSpotLightMap;\n\t#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0\n\tSpotLightShadow spotLightShadow;\n\t#endif\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tspotLight = spotLights[ i ];\n\t\tgetSpotLightInfo( spotLight, geometryPosition, directLight );\n\t\t#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )\n\t\t#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX\n\t\t#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )\n\t\t#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS\n\t\t#else\n\t\t#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )\n\t\t#endif\n\t\t#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )\n\t\t\tspotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;\n\t\t\tinSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );\n\t\t\tspotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );\n\t\t\tdirectLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;\n\t\t#endif\n\t\t#undef SPOT_LIGHT_MAP_INDEX\n\t\t#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )\n\t\tspotLightShadow = spotLightShadows[ i ];\n\t\tdirectLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )\n\tDirectionalLight directionalLight;\n\t#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0\n\tDirectionalLightShadow directionalLightShadow;\n\t#endif\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tdirectionalLight = directionalLights[ i ];\n\t\tgetDirectionalLightInfo( directionalLight, directLight );\n\t\t#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )\n\t\tdirectionalLightShadow = directionalLightShadows[ i ];\n\t\tdirectLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )\n\tRectAreaLight rectAreaLight;\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {\n\t\trectAreaLight = rectAreaLights[ i ];\n\t\tRE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if defined( RE_IndirectDiffuse )\n\tvec3 iblIrradiance = vec3( 0.0 );\n\tvec3 irradiance = getAmbientLightIrradiance( ambientLightColor );\n\t#if defined( USE_LIGHT_PROBES )\n\t\tirradiance += getLightProbeIrradiance( lightProbe, geometryNormal );\n\t#endif\n\t#if ( NUM_HEMI_LIGHTS > 0 )\n\t\t#pragma unroll_loop_start\n\t\tfor ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\n\t\t\tirradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );\n\t\t}\n\t\t#pragma unroll_loop_end\n\t#endif\n#endif\n#if defined( RE_IndirectSpecular )\n\tvec3 radiance = vec3( 0.0 );\n\tvec3 clearcoatRadiance = vec3( 0.0 );\n#endif",
    lights_fragment_maps:
      "#if defined( RE_IndirectDiffuse )\n\t#ifdef USE_LIGHTMAP\n\t\tvec4 lightMapTexel = texture2D( lightMap, vLightMapUv );\n\t\tvec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;\n\t\tirradiance += lightMapIrradiance;\n\t#endif\n\t#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )\n\t\tiblIrradiance += getIBLIrradiance( geometryNormal );\n\t#endif\n#endif\n#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )\n\t#ifdef USE_ANISOTROPY\n\t\tradiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );\n\t#else\n\t\tradiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );\n\t#endif\n\t#ifdef USE_CLEARCOAT\n\t\tclearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );\n\t#endif\n#endif",
    lights_fragment_end:
      "#if defined( RE_IndirectDiffuse )\n\tRE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );\n#endif\n#if defined( RE_IndirectSpecular )\n\tRE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );\n#endif",
    logdepthbuf_fragment:
      "#if defined( USE_LOGDEPTHBUF )\n\tgl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;\n#endif",
    logdepthbuf_pars_fragment:
      "#if defined( USE_LOGDEPTHBUF )\n\tuniform float logDepthBufFC;\n\tvarying float vFragDepth;\n\tvarying float vIsPerspective;\n#endif",
    logdepthbuf_pars_vertex:
      "#ifdef USE_LOGDEPTHBUF\n\tvarying float vFragDepth;\n\tvarying float vIsPerspective;\n#endif",
    logdepthbuf_vertex:
      "#ifdef USE_LOGDEPTHBUF\n\tvFragDepth = 1.0 + gl_Position.w;\n\tvIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );\n#endif",
    map_fragment:
      "#ifdef USE_MAP\n\tvec4 sampledDiffuseColor = texture2D( map, vMapUv );\n\t#ifdef DECODE_VIDEO_TEXTURE\n\t\tsampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );\n\t#endif\n\tdiffuseColor *= sampledDiffuseColor;\n#endif",
    map_pars_fragment: "#ifdef USE_MAP\n\tuniform sampler2D map;\n#endif",
    map_particle_fragment:
      "#if defined( USE_MAP ) || defined( USE_ALPHAMAP )\n\t#if defined( USE_POINTS_UV )\n\t\tvec2 uv = vUv;\n\t#else\n\t\tvec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;\n\t#endif\n#endif\n#ifdef USE_MAP\n\tdiffuseColor *= texture2D( map, uv );\n#endif\n#ifdef USE_ALPHAMAP\n\tdiffuseColor.a *= texture2D( alphaMap, uv ).g;\n#endif",
    map_particle_pars_fragment:
      "#if defined( USE_POINTS_UV )\n\tvarying vec2 vUv;\n#else\n\t#if defined( USE_MAP ) || defined( USE_ALPHAMAP )\n\t\tuniform mat3 uvTransform;\n\t#endif\n#endif\n#ifdef USE_MAP\n\tuniform sampler2D map;\n#endif\n#ifdef USE_ALPHAMAP\n\tuniform sampler2D alphaMap;\n#endif",
    metalnessmap_fragment:
      "float metalnessFactor = metalness;\n#ifdef USE_METALNESSMAP\n\tvec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );\n\tmetalnessFactor *= texelMetalness.b;\n#endif",
    metalnessmap_pars_fragment:
      "#ifdef USE_METALNESSMAP\n\tuniform sampler2D metalnessMap;\n#endif",
    morphinstance_vertex:
      "#ifdef USE_INSTANCING_MORPH\n\tfloat morphTargetInfluences[ MORPHTARGETS_COUNT ];\n\tfloat morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;\n\tfor ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {\n\t\tmorphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;\n\t}\n#endif",
    morphcolor_vertex:
      "#if defined( USE_MORPHCOLORS )\n\tvColor *= morphTargetBaseInfluence;\n\tfor ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {\n\t\t#if defined( USE_COLOR_ALPHA )\n\t\t\tif ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];\n\t\t#elif defined( USE_COLOR )\n\t\t\tif ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];\n\t\t#endif\n\t}\n#endif",
    morphnormal_vertex:
      "#ifdef USE_MORPHNORMALS\n\tobjectNormal *= morphTargetBaseInfluence;\n\tfor ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {\n\t\tif ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];\n\t}\n#endif",
    morphtarget_pars_vertex:
      "#ifdef USE_MORPHTARGETS\n\t#ifndef USE_INSTANCING_MORPH\n\t\tuniform float morphTargetBaseInfluence;\n\t\tuniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];\n\t#endif\n\tuniform sampler2DArray morphTargetsTexture;\n\tuniform ivec2 morphTargetsTextureSize;\n\tvec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {\n\t\tint texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;\n\t\tint y = texelIndex / morphTargetsTextureSize.x;\n\t\tint x = texelIndex - y * morphTargetsTextureSize.x;\n\t\tivec3 morphUV = ivec3( x, y, morphTargetIndex );\n\t\treturn texelFetch( morphTargetsTexture, morphUV, 0 );\n\t}\n#endif",
    morphtarget_vertex:
      "#ifdef USE_MORPHTARGETS\n\ttransformed *= morphTargetBaseInfluence;\n\tfor ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {\n\t\tif ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];\n\t}\n#endif",
    normal_fragment_begin:
      "float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;\n#ifdef FLAT_SHADED\n\tvec3 fdx = dFdx( vViewPosition );\n\tvec3 fdy = dFdy( vViewPosition );\n\tvec3 normal = normalize( cross( fdx, fdy ) );\n#else\n\tvec3 normal = normalize( vNormal );\n\t#ifdef DOUBLE_SIDED\n\t\tnormal *= faceDirection;\n\t#endif\n#endif\n#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )\n\t#ifdef USE_TANGENT\n\t\tmat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );\n\t#else\n\t\tmat3 tbn = getTangentFrame( - vViewPosition, normal,\n\t\t#if defined( USE_NORMALMAP )\n\t\t\tvNormalMapUv\n\t\t#elif defined( USE_CLEARCOAT_NORMALMAP )\n\t\t\tvClearcoatNormalMapUv\n\t\t#else\n\t\t\tvUv\n\t\t#endif\n\t\t);\n\t#endif\n\t#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )\n\t\ttbn[0] *= faceDirection;\n\t\ttbn[1] *= faceDirection;\n\t#endif\n#endif\n#ifdef USE_CLEARCOAT_NORMALMAP\n\t#ifdef USE_TANGENT\n\t\tmat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );\n\t#else\n\t\tmat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );\n\t#endif\n\t#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )\n\t\ttbn2[0] *= faceDirection;\n\t\ttbn2[1] *= faceDirection;\n\t#endif\n#endif\nvec3 nonPerturbedNormal = normal;",
    normal_fragment_maps:
      "#ifdef USE_NORMALMAP_OBJECTSPACE\n\tnormal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;\n\t#ifdef FLIP_SIDED\n\t\tnormal = - normal;\n\t#endif\n\t#ifdef DOUBLE_SIDED\n\t\tnormal = normal * faceDirection;\n\t#endif\n\tnormal = normalize( normalMatrix * normal );\n#elif defined( USE_NORMALMAP_TANGENTSPACE )\n\tvec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;\n\tmapN.xy *= normalScale;\n\tnormal = normalize( tbn * mapN );\n#elif defined( USE_BUMPMAP )\n\tnormal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );\n#endif",
    normal_pars_fragment:
      "#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n\t#ifdef USE_TANGENT\n\t\tvarying vec3 vTangent;\n\t\tvarying vec3 vBitangent;\n\t#endif\n#endif",
    normal_pars_vertex:
      "#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n\t#ifdef USE_TANGENT\n\t\tvarying vec3 vTangent;\n\t\tvarying vec3 vBitangent;\n\t#endif\n#endif",
    normal_vertex:
      "#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n\t#ifdef USE_TANGENT\n\t\tvTangent = normalize( transformedTangent );\n\t\tvBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );\n\t#endif\n#endif",
    normalmap_pars_fragment:
      "#ifdef USE_NORMALMAP\n\tuniform sampler2D normalMap;\n\tuniform vec2 normalScale;\n#endif\n#ifdef USE_NORMALMAP_OBJECTSPACE\n\tuniform mat3 normalMatrix;\n#endif\n#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )\n\tmat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {\n\t\tvec3 q0 = dFdx( eye_pos.xyz );\n\t\tvec3 q1 = dFdy( eye_pos.xyz );\n\t\tvec2 st0 = dFdx( uv.st );\n\t\tvec2 st1 = dFdy( uv.st );\n\t\tvec3 N = surf_norm;\n\t\tvec3 q1perp = cross( q1, N );\n\t\tvec3 q0perp = cross( N, q0 );\n\t\tvec3 T = q1perp * st0.x + q0perp * st1.x;\n\t\tvec3 B = q1perp * st0.y + q0perp * st1.y;\n\t\tfloat det = max( dot( T, T ), dot( B, B ) );\n\t\tfloat scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );\n\t\treturn mat3( T * scale, B * scale, N );\n\t}\n#endif",
    clearcoat_normal_fragment_begin:
      "#ifdef USE_CLEARCOAT\n\tvec3 clearcoatNormal = nonPerturbedNormal;\n#endif",
    clearcoat_normal_fragment_maps:
      "#ifdef USE_CLEARCOAT_NORMALMAP\n\tvec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;\n\tclearcoatMapN.xy *= clearcoatNormalScale;\n\tclearcoatNormal = normalize( tbn2 * clearcoatMapN );\n#endif",
    clearcoat_pars_fragment:
      "#ifdef USE_CLEARCOATMAP\n\tuniform sampler2D clearcoatMap;\n#endif\n#ifdef USE_CLEARCOAT_NORMALMAP\n\tuniform sampler2D clearcoatNormalMap;\n\tuniform vec2 clearcoatNormalScale;\n#endif\n#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n\tuniform sampler2D clearcoatRoughnessMap;\n#endif",
    iridescence_pars_fragment:
      "#ifdef USE_IRIDESCENCEMAP\n\tuniform sampler2D iridescenceMap;\n#endif\n#ifdef USE_IRIDESCENCE_THICKNESSMAP\n\tuniform sampler2D iridescenceThicknessMap;\n#endif",
    opaque_fragment:
      "#ifdef OPAQUE\ndiffuseColor.a = 1.0;\n#endif\n#ifdef USE_TRANSMISSION\ndiffuseColor.a *= material.transmissionAlpha;\n#endif\ngl_FragColor = vec4( outgoingLight, diffuseColor.a );",
    packing:
      "vec3 packNormalToRGB( const in vec3 normal ) {\n\treturn normalize( normal ) * 0.5 + 0.5;\n}\nvec3 unpackRGBToNormal( const in vec3 rgb ) {\n\treturn 2.0 * rgb.xyz - 1.0;\n}\nconst float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;\nconst float Inv255 = 1. / 255.;\nconst vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );\nconst vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );\nconst vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );\nconst vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );\nvec4 packDepthToRGBA( const in float v ) {\n\tif( v <= 0.0 )\n\t\treturn vec4( 0., 0., 0., 0. );\n\tif( v >= 1.0 )\n\t\treturn vec4( 1., 1., 1., 1. );\n\tfloat vuf;\n\tfloat af = modf( v * PackFactors.a, vuf );\n\tfloat bf = modf( vuf * ShiftRight8, vuf );\n\tfloat gf = modf( vuf * ShiftRight8, vuf );\n\treturn vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );\n}\nvec3 packDepthToRGB( const in float v ) {\n\tif( v <= 0.0 )\n\t\treturn vec3( 0., 0., 0. );\n\tif( v >= 1.0 )\n\t\treturn vec3( 1., 1., 1. );\n\tfloat vuf;\n\tfloat bf = modf( v * PackFactors.b, vuf );\n\tfloat gf = modf( vuf * ShiftRight8, vuf );\n\treturn vec3( vuf * Inv255, gf * PackUpscale, bf );\n}\nvec2 packDepthToRG( const in float v ) {\n\tif( v <= 0.0 )\n\t\treturn vec2( 0., 0. );\n\tif( v >= 1.0 )\n\t\treturn vec2( 1., 1. );\n\tfloat vuf;\n\tfloat gf = modf( v * 256., vuf );\n\treturn vec2( vuf * Inv255, gf );\n}\nfloat unpackRGBAToDepth( const in vec4 v ) {\n\treturn dot( v, UnpackFactors4 );\n}\nfloat unpackRGBToDepth( const in vec3 v ) {\n\treturn dot( v, UnpackFactors3 );\n}\nfloat unpackRGToDepth( const in vec2 v ) {\n\treturn v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;\n}\nvec4 pack2HalfToRGBA( const in vec2 v ) {\n\tvec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );\n\treturn vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );\n}\nvec2 unpackRGBATo2Half( const in vec4 v ) {\n\treturn vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );\n}\nfloat viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {\n\treturn ( viewZ + near ) / ( near - far );\n}\nfloat orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {\n\treturn depth * ( near - far ) - near;\n}\nfloat viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {\n\treturn ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );\n}\nfloat perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {\n\treturn ( near * far ) / ( ( far - near ) * depth - far );\n}",
    premultiplied_alpha_fragment:
      "#ifdef PREMULTIPLIED_ALPHA\n\tgl_FragColor.rgb *= gl_FragColor.a;\n#endif",
    project_vertex:
      "vec4 mvPosition = vec4( transformed, 1.0 );\n#ifdef USE_BATCHING\n\tmvPosition = batchingMatrix * mvPosition;\n#endif\n#ifdef USE_INSTANCING\n\tmvPosition = instanceMatrix * mvPosition;\n#endif\nmvPosition = modelViewMatrix * mvPosition;\ngl_Position = projectionMatrix * mvPosition;",
    dithering_fragment:
      "#ifdef DITHERING\n\tgl_FragColor.rgb = dithering( gl_FragColor.rgb );\n#endif",
    dithering_pars_fragment:
      "#ifdef DITHERING\n\tvec3 dithering( vec3 color ) {\n\t\tfloat grid_position = rand( gl_FragCoord.xy );\n\t\tvec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );\n\t\tdither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );\n\t\treturn color + dither_shift_RGB;\n\t}\n#endif",
    roughnessmap_fragment:
      "float roughnessFactor = roughness;\n#ifdef USE_ROUGHNESSMAP\n\tvec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );\n\troughnessFactor *= texelRoughness.g;\n#endif",
    roughnessmap_pars_fragment:
      "#ifdef USE_ROUGHNESSMAP\n\tuniform sampler2D roughnessMap;\n#endif",
    shadowmap_pars_fragment:
      "#if NUM_SPOT_LIGHT_COORDS > 0\n\tvarying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];\n#endif\n#if NUM_SPOT_LIGHT_MAPS > 0\n\tuniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];\n#endif\n#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\t\tuniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];\n\t\tvarying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];\n\t\tstruct DirectionalLightShadow {\n\t\t\tfloat shadowIntensity;\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t};\n\t\tuniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];\n\t#endif\n\t#if NUM_SPOT_LIGHT_SHADOWS > 0\n\t\tuniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];\n\t\tstruct SpotLightShadow {\n\t\t\tfloat shadowIntensity;\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t};\n\t\tuniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];\n\t#endif\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\t\tuniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];\n\t\tvarying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];\n\t\tstruct PointLightShadow {\n\t\t\tfloat shadowIntensity;\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t\tfloat shadowCameraNear;\n\t\t\tfloat shadowCameraFar;\n\t\t};\n\t\tuniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];\n\t#endif\n\tfloat texture2DCompare( sampler2D depths, vec2 uv, float compare ) {\n\t\treturn step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );\n\t}\n\tvec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {\n\t\treturn unpackRGBATo2Half( texture2D( shadow, uv ) );\n\t}\n\tfloat VSMShadow (sampler2D shadow, vec2 uv, float compare ){\n\t\tfloat occlusion = 1.0;\n\t\tvec2 distribution = texture2DDistribution( shadow, uv );\n\t\tfloat hard_shadow = step( compare , distribution.x );\n\t\tif (hard_shadow != 1.0 ) {\n\t\t\tfloat distance = compare - distribution.x ;\n\t\t\tfloat variance = max( 0.00000, distribution.y * distribution.y );\n\t\t\tfloat softness_probability = variance / (variance + distance * distance );\t\t\tsoftness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );\t\t\tocclusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );\n\t\t}\n\t\treturn occlusion;\n\t}\n\tfloat getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {\n\t\tfloat shadow = 1.0;\n\t\tshadowCoord.xyz /= shadowCoord.w;\n\t\tshadowCoord.z += shadowBias;\n\t\tbool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;\n\t\tbool frustumTest = inFrustum && shadowCoord.z <= 1.0;\n\t\tif ( frustumTest ) {\n\t\t#if defined( SHADOWMAP_TYPE_PCF )\n\t\t\tvec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n\t\t\tfloat dx0 = - texelSize.x * shadowRadius;\n\t\t\tfloat dy0 = - texelSize.y * shadowRadius;\n\t\t\tfloat dx1 = + texelSize.x * shadowRadius;\n\t\t\tfloat dy1 = + texelSize.y * shadowRadius;\n\t\t\tfloat dx2 = dx0 / 2.0;\n\t\t\tfloat dy2 = dy0 / 2.0;\n\t\t\tfloat dx3 = dx1 / 2.0;\n\t\t\tfloat dy3 = dy1 / 2.0;\n\t\t\tshadow = (\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )\n\t\t\t) * ( 1.0 / 17.0 );\n\t\t#elif defined( SHADOWMAP_TYPE_PCF_SOFT )\n\t\t\tvec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n\t\t\tfloat dx = texelSize.x;\n\t\t\tfloat dy = texelSize.y;\n\t\t\tvec2 uv = shadowCoord.xy;\n\t\t\tvec2 f = fract( uv * shadowMapSize + 0.5 );\n\t\t\tuv -= f * texelSize;\n\t\t\tshadow = (\n\t\t\t\ttexture2DCompare( shadowMap, uv, shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +\n\t\t\t\tmix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),\n\t\t\t\t\t texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),\n\t\t\t\t\t f.x ) +\n\t\t\t\tmix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),\n\t\t\t\t\t texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),\n\t\t\t\t\t f.x ) +\n\t\t\t\tmix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),\n\t\t\t\t\t texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),\n\t\t\t\t\t f.y ) +\n\t\t\t\tmix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),\n\t\t\t\t\t texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),\n\t\t\t\t\t f.y ) +\n\t\t\t\tmix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),\n\t\t\t\t\t\t  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),\n\t\t\t\t\t\t  f.x ),\n\t\t\t\t\t mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),\n\t\t\t\t\t\t  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),\n\t\t\t\t\t\t  f.x ),\n\t\t\t\t\t f.y )\n\t\t\t) * ( 1.0 / 9.0 );\n\t\t#elif defined( SHADOWMAP_TYPE_VSM )\n\t\t\tshadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );\n\t\t#else\n\t\t\tshadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );\n\t\t#endif\n\t\t}\n\t\treturn mix( 1.0, shadow, shadowIntensity );\n\t}\n\tvec2 cubeToUV( vec3 v, float texelSizeY ) {\n\t\tvec3 absV = abs( v );\n\t\tfloat scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );\n\t\tabsV *= scaleToCube;\n\t\tv *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );\n\t\tvec2 planar = v.xy;\n\t\tfloat almostATexel = 1.5 * texelSizeY;\n\t\tfloat almostOne = 1.0 - almostATexel;\n\t\tif ( absV.z >= almostOne ) {\n\t\t\tif ( v.z > 0.0 )\n\t\t\t\tplanar.x = 4.0 - v.x;\n\t\t} else if ( absV.x >= almostOne ) {\n\t\t\tfloat signX = sign( v.x );\n\t\t\tplanar.x = v.z * signX + 2.0 * signX;\n\t\t} else if ( absV.y >= almostOne ) {\n\t\t\tfloat signY = sign( v.y );\n\t\t\tplanar.x = v.x + 2.0 * signY + 2.0;\n\t\t\tplanar.y = v.z * signY - 2.0;\n\t\t}\n\t\treturn vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );\n\t}\n\tfloat getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {\n\t\tfloat shadow = 1.0;\n\t\tvec3 lightToPosition = shadowCoord.xyz;\n\t\t\n\t\tfloat lightToPositionLength = length( lightToPosition );\n\t\tif ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {\n\t\t\tfloat dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );\t\t\tdp += shadowBias;\n\t\t\tvec3 bd3D = normalize( lightToPosition );\n\t\t\tvec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );\n\t\t\t#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )\n\t\t\t\tvec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;\n\t\t\t\tshadow = (\n\t\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +\n\t\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +\n\t\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +\n\t\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +\n\t\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +\n\t\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +\n\t\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +\n\t\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +\n\t\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )\n\t\t\t\t) * ( 1.0 / 9.0 );\n\t\t\t#else\n\t\t\t\tshadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );\n\t\t\t#endif\n\t\t}\n\t\treturn mix( 1.0, shadow, shadowIntensity );\n\t}\n#endif",
    shadowmap_pars_vertex:
      "#if NUM_SPOT_LIGHT_COORDS > 0\n\tuniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];\n\tvarying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];\n#endif\n#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\t\tuniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];\n\t\tvarying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];\n\t\tstruct DirectionalLightShadow {\n\t\t\tfloat shadowIntensity;\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t};\n\t\tuniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];\n\t#endif\n\t#if NUM_SPOT_LIGHT_SHADOWS > 0\n\t\tstruct SpotLightShadow {\n\t\t\tfloat shadowIntensity;\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t};\n\t\tuniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];\n\t#endif\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\t\tuniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];\n\t\tvarying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];\n\t\tstruct PointLightShadow {\n\t\t\tfloat shadowIntensity;\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t\tfloat shadowCameraNear;\n\t\t\tfloat shadowCameraFar;\n\t\t};\n\t\tuniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];\n\t#endif\n#endif",
    shadowmap_vertex:
      "#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )\n\tvec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );\n\tvec4 shadowWorldPosition;\n#endif\n#if defined( USE_SHADOWMAP )\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\t\t#pragma unroll_loop_start\n\t\tfor ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {\n\t\t\tshadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );\n\t\t\tvDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;\n\t\t}\n\t\t#pragma unroll_loop_end\n\t#endif\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\t\t#pragma unroll_loop_start\n\t\tfor ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {\n\t\t\tshadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );\n\t\t\tvPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;\n\t\t}\n\t\t#pragma unroll_loop_end\n\t#endif\n#endif\n#if NUM_SPOT_LIGHT_COORDS > 0\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {\n\t\tshadowWorldPosition = worldPosition;\n\t\t#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )\n\t\t\tshadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;\n\t\t#endif\n\t\tvSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;\n\t}\n\t#pragma unroll_loop_end\n#endif",
    shadowmask_pars_fragment:
      "float getShadowMask() {\n\tfloat shadow = 1.0;\n\t#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\tDirectionalLightShadow directionalLight;\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {\n\t\tdirectionalLight = directionalLightShadows[ i ];\n\t\tshadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n\t#if NUM_SPOT_LIGHT_SHADOWS > 0\n\tSpotLightShadow spotLight;\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {\n\t\tspotLight = spotLightShadows[ i ];\n\t\tshadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\tPointLightShadow pointLight;\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {\n\t\tpointLight = pointLightShadows[ i ];\n\t\tshadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n\t#endif\n\treturn shadow;\n}",
    skinbase_vertex:
      "#ifdef USE_SKINNING\n\tmat4 boneMatX = getBoneMatrix( skinIndex.x );\n\tmat4 boneMatY = getBoneMatrix( skinIndex.y );\n\tmat4 boneMatZ = getBoneMatrix( skinIndex.z );\n\tmat4 boneMatW = getBoneMatrix( skinIndex.w );\n#endif",
    skinning_pars_vertex:
      "#ifdef USE_SKINNING\n\tuniform mat4 bindMatrix;\n\tuniform mat4 bindMatrixInverse;\n\tuniform highp sampler2D boneTexture;\n\tmat4 getBoneMatrix( const in float i ) {\n\t\tint size = textureSize( boneTexture, 0 ).x;\n\t\tint j = int( i ) * 4;\n\t\tint x = j % size;\n\t\tint y = j / size;\n\t\tvec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );\n\t\tvec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );\n\t\tvec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );\n\t\tvec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );\n\t\treturn mat4( v1, v2, v3, v4 );\n\t}\n#endif",
    skinning_vertex:
      "#ifdef USE_SKINNING\n\tvec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );\n\tvec4 skinned = vec4( 0.0 );\n\tskinned += boneMatX * skinVertex * skinWeight.x;\n\tskinned += boneMatY * skinVertex * skinWeight.y;\n\tskinned += boneMatZ * skinVertex * skinWeight.z;\n\tskinned += boneMatW * skinVertex * skinWeight.w;\n\ttransformed = ( bindMatrixInverse * skinned ).xyz;\n#endif",
    skinnormal_vertex:
      "#ifdef USE_SKINNING\n\tmat4 skinMatrix = mat4( 0.0 );\n\tskinMatrix += skinWeight.x * boneMatX;\n\tskinMatrix += skinWeight.y * boneMatY;\n\tskinMatrix += skinWeight.z * boneMatZ;\n\tskinMatrix += skinWeight.w * boneMatW;\n\tskinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;\n\tobjectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;\n\t#ifdef USE_TANGENT\n\t\tobjectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;\n\t#endif\n#endif",
    specularmap_fragment:
      "float specularStrength;\n#ifdef USE_SPECULARMAP\n\tvec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );\n\tspecularStrength = texelSpecular.r;\n#else\n\tspecularStrength = 1.0;\n#endif",
    specularmap_pars_fragment:
      "#ifdef USE_SPECULARMAP\n\tuniform sampler2D specularMap;\n#endif",
    tonemapping_fragment:
      "#if defined( TONE_MAPPING )\n\tgl_FragColor.rgb = toneMapping( gl_FragColor.rgb );\n#endif",
    tonemapping_pars_fragment:
      "#ifndef saturate\n#define saturate( a ) clamp( a, 0.0, 1.0 )\n#endif\nuniform float toneMappingExposure;\nvec3 LinearToneMapping( vec3 color ) {\n\treturn saturate( toneMappingExposure * color );\n}\nvec3 ReinhardToneMapping( vec3 color ) {\n\tcolor *= toneMappingExposure;\n\treturn saturate( color / ( vec3( 1.0 ) + color ) );\n}\nvec3 CineonToneMapping( vec3 color ) {\n\tcolor *= toneMappingExposure;\n\tcolor = max( vec3( 0.0 ), color - 0.004 );\n\treturn pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );\n}\nvec3 RRTAndODTFit( vec3 v ) {\n\tvec3 a = v * ( v + 0.0245786 ) - 0.000090537;\n\tvec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;\n\treturn a / b;\n}\nvec3 ACESFilmicToneMapping( vec3 color ) {\n\tconst mat3 ACESInputMat = mat3(\n\t\tvec3( 0.59719, 0.07600, 0.02840 ),\t\tvec3( 0.35458, 0.90834, 0.13383 ),\n\t\tvec3( 0.04823, 0.01566, 0.83777 )\n\t);\n\tconst mat3 ACESOutputMat = mat3(\n\t\tvec3(  1.60475, -0.10208, -0.00327 ),\t\tvec3( -0.53108,  1.10813, -0.07276 ),\n\t\tvec3( -0.07367, -0.00605,  1.07602 )\n\t);\n\tcolor *= toneMappingExposure / 0.6;\n\tcolor = ACESInputMat * color;\n\tcolor = RRTAndODTFit( color );\n\tcolor = ACESOutputMat * color;\n\treturn saturate( color );\n}\nconst mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(\n\tvec3( 1.6605, - 0.1246, - 0.0182 ),\n\tvec3( - 0.5876, 1.1329, - 0.1006 ),\n\tvec3( - 0.0728, - 0.0083, 1.1187 )\n);\nconst mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(\n\tvec3( 0.6274, 0.0691, 0.0164 ),\n\tvec3( 0.3293, 0.9195, 0.0880 ),\n\tvec3( 0.0433, 0.0113, 0.8956 )\n);\nvec3 agxDefaultContrastApprox( vec3 x ) {\n\tvec3 x2 = x * x;\n\tvec3 x4 = x2 * x2;\n\treturn + 15.5 * x4 * x2\n\t\t- 40.14 * x4 * x\n\t\t+ 31.96 * x4\n\t\t- 6.868 * x2 * x\n\t\t+ 0.4298 * x2\n\t\t+ 0.1191 * x\n\t\t- 0.00232;\n}\nvec3 AgXToneMapping( vec3 color ) {\n\tconst mat3 AgXInsetMatrix = mat3(\n\t\tvec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),\n\t\tvec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),\n\t\tvec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )\n\t);\n\tconst mat3 AgXOutsetMatrix = mat3(\n\t\tvec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),\n\t\tvec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),\n\t\tvec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )\n\t);\n\tconst float AgxMinEv = - 12.47393;\tconst float AgxMaxEv = 4.026069;\n\tcolor *= toneMappingExposure;\n\tcolor = LINEAR_SRGB_TO_LINEAR_REC2020 * color;\n\tcolor = AgXInsetMatrix * color;\n\tcolor = max( color, 1e-10 );\tcolor = log2( color );\n\tcolor = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );\n\tcolor = clamp( color, 0.0, 1.0 );\n\tcolor = agxDefaultContrastApprox( color );\n\tcolor = AgXOutsetMatrix * color;\n\tcolor = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );\n\tcolor = LINEAR_REC2020_TO_LINEAR_SRGB * color;\n\tcolor = clamp( color, 0.0, 1.0 );\n\treturn color;\n}\nvec3 NeutralToneMapping( vec3 color ) {\n\tconst float StartCompression = 0.8 - 0.04;\n\tconst float Desaturation = 0.15;\n\tcolor *= toneMappingExposure;\n\tfloat x = min( color.r, min( color.g, color.b ) );\n\tfloat offset = x < 0.08 ? x - 6.25 * x * x : 0.04;\n\tcolor -= offset;\n\tfloat peak = max( color.r, max( color.g, color.b ) );\n\tif ( peak < StartCompression ) return color;\n\tfloat d = 1. - StartCompression;\n\tfloat newPeak = 1. - d * d / ( peak + d - StartCompression );\n\tcolor *= newPeak / peak;\n\tfloat g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );\n\treturn mix( color, vec3( newPeak ), g );\n}\nvec3 CustomToneMapping( vec3 color ) { return color; }",
    transmission_fragment:
      "#ifdef USE_TRANSMISSION\n\tmaterial.transmission = transmission;\n\tmaterial.transmissionAlpha = 1.0;\n\tmaterial.thickness = thickness;\n\tmaterial.attenuationDistance = attenuationDistance;\n\tmaterial.attenuationColor = attenuationColor;\n\t#ifdef USE_TRANSMISSIONMAP\n\t\tmaterial.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;\n\t#endif\n\t#ifdef USE_THICKNESSMAP\n\t\tmaterial.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;\n\t#endif\n\tvec3 pos = vWorldPosition;\n\tvec3 v = normalize( cameraPosition - pos );\n\tvec3 n = inverseTransformDirection( normal, viewMatrix );\n\tvec4 transmitted = getIBLVolumeRefraction(\n\t\tn, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,\n\t\tpos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,\n\t\tmaterial.attenuationColor, material.attenuationDistance );\n\tmaterial.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );\n\ttotalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );\n#endif",
    transmission_pars_fragment:
      "#ifdef USE_TRANSMISSION\n\tuniform float transmission;\n\tuniform float thickness;\n\tuniform float attenuationDistance;\n\tuniform vec3 attenuationColor;\n\t#ifdef USE_TRANSMISSIONMAP\n\t\tuniform sampler2D transmissionMap;\n\t#endif\n\t#ifdef USE_THICKNESSMAP\n\t\tuniform sampler2D thicknessMap;\n\t#endif\n\tuniform vec2 transmissionSamplerSize;\n\tuniform sampler2D transmissionSamplerMap;\n\tuniform mat4 modelMatrix;\n\tuniform mat4 projectionMatrix;\n\tvarying vec3 vWorldPosition;\n\tfloat w0( float a ) {\n\t\treturn ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );\n\t}\n\tfloat w1( float a ) {\n\t\treturn ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );\n\t}\n\tfloat w2( float a ){\n\t\treturn ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );\n\t}\n\tfloat w3( float a ) {\n\t\treturn ( 1.0 / 6.0 ) * ( a * a * a );\n\t}\n\tfloat g0( float a ) {\n\t\treturn w0( a ) + w1( a );\n\t}\n\tfloat g1( float a ) {\n\t\treturn w2( a ) + w3( a );\n\t}\n\tfloat h0( float a ) {\n\t\treturn - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );\n\t}\n\tfloat h1( float a ) {\n\t\treturn 1.0 + w3( a ) / ( w2( a ) + w3( a ) );\n\t}\n\tvec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {\n\t\tuv = uv * texelSize.zw + 0.5;\n\t\tvec2 iuv = floor( uv );\n\t\tvec2 fuv = fract( uv );\n\t\tfloat g0x = g0( fuv.x );\n\t\tfloat g1x = g1( fuv.x );\n\t\tfloat h0x = h0( fuv.x );\n\t\tfloat h1x = h1( fuv.x );\n\t\tfloat h0y = h0( fuv.y );\n\t\tfloat h1y = h1( fuv.y );\n\t\tvec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;\n\t\tvec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;\n\t\tvec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;\n\t\tvec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;\n\t\treturn g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +\n\t\t\tg1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );\n\t}\n\tvec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {\n\t\tvec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );\n\t\tvec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );\n\t\tvec2 fLodSizeInv = 1.0 / fLodSize;\n\t\tvec2 cLodSizeInv = 1.0 / cLodSize;\n\t\tvec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );\n\t\tvec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );\n\t\treturn mix( fSample, cSample, fract( lod ) );\n\t}\n\tvec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {\n\t\tvec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );\n\t\tvec3 modelScale;\n\t\tmodelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );\n\t\tmodelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );\n\t\tmodelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );\n\t\treturn normalize( refractionVector ) * thickness * modelScale;\n\t}\n\tfloat applyIorToRoughness( const in float roughness, const in float ior ) {\n\t\treturn roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );\n\t}\n\tvec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {\n\t\tfloat lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );\n\t\treturn textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );\n\t}\n\tvec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {\n\t\tif ( isinf( attenuationDistance ) ) {\n\t\t\treturn vec3( 1.0 );\n\t\t} else {\n\t\t\tvec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;\n\t\t\tvec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );\t\t\treturn transmittance;\n\t\t}\n\t}\n\tvec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,\n\t\tconst in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,\n\t\tconst in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,\n\t\tconst in vec3 attenuationColor, const in float attenuationDistance ) {\n\t\tvec4 transmittedLight;\n\t\tvec3 transmittance;\n\t\t#ifdef USE_DISPERSION\n\t\t\tfloat halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;\n\t\t\tvec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );\n\t\t\tfor ( int i = 0; i < 3; i ++ ) {\n\t\t\t\tvec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );\n\t\t\t\tvec3 refractedRayExit = position + transmissionRay;\n\t\t\t\tvec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );\n\t\t\t\tvec2 refractionCoords = ndcPos.xy / ndcPos.w;\n\t\t\t\trefractionCoords += 1.0;\n\t\t\t\trefractionCoords /= 2.0;\n\t\t\t\tvec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );\n\t\t\t\ttransmittedLight[ i ] = transmissionSample[ i ];\n\t\t\t\ttransmittedLight.a += transmissionSample.a;\n\t\t\t\ttransmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];\n\t\t\t}\n\t\t\ttransmittedLight.a /= 3.0;\n\t\t#else\n\t\t\tvec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );\n\t\t\tvec3 refractedRayExit = position + transmissionRay;\n\t\t\tvec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );\n\t\t\tvec2 refractionCoords = ndcPos.xy / ndcPos.w;\n\t\t\trefractionCoords += 1.0;\n\t\t\trefractionCoords /= 2.0;\n\t\t\ttransmittedLight = getTransmissionSample( refractionCoords, roughness, ior );\n\t\t\ttransmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );\n\t\t#endif\n\t\tvec3 attenuatedColor = transmittance * transmittedLight.rgb;\n\t\tvec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );\n\t\tfloat transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;\n\t\treturn vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );\n\t}\n#endif",
    uv_pars_fragment:
      "#if defined( USE_UV ) || defined( USE_ANISOTROPY )\n\tvarying vec2 vUv;\n#endif\n#ifdef USE_MAP\n\tvarying vec2 vMapUv;\n#endif\n#ifdef USE_ALPHAMAP\n\tvarying vec2 vAlphaMapUv;\n#endif\n#ifdef USE_LIGHTMAP\n\tvarying vec2 vLightMapUv;\n#endif\n#ifdef USE_AOMAP\n\tvarying vec2 vAoMapUv;\n#endif\n#ifdef USE_BUMPMAP\n\tvarying vec2 vBumpMapUv;\n#endif\n#ifdef USE_NORMALMAP\n\tvarying vec2 vNormalMapUv;\n#endif\n#ifdef USE_EMISSIVEMAP\n\tvarying vec2 vEmissiveMapUv;\n#endif\n#ifdef USE_METALNESSMAP\n\tvarying vec2 vMetalnessMapUv;\n#endif\n#ifdef USE_ROUGHNESSMAP\n\tvarying vec2 vRoughnessMapUv;\n#endif\n#ifdef USE_ANISOTROPYMAP\n\tvarying vec2 vAnisotropyMapUv;\n#endif\n#ifdef USE_CLEARCOATMAP\n\tvarying vec2 vClearcoatMapUv;\n#endif\n#ifdef USE_CLEARCOAT_NORMALMAP\n\tvarying vec2 vClearcoatNormalMapUv;\n#endif\n#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n\tvarying vec2 vClearcoatRoughnessMapUv;\n#endif\n#ifdef USE_IRIDESCENCEMAP\n\tvarying vec2 vIridescenceMapUv;\n#endif\n#ifdef USE_IRIDESCENCE_THICKNESSMAP\n\tvarying vec2 vIridescenceThicknessMapUv;\n#endif\n#ifdef USE_SHEEN_COLORMAP\n\tvarying vec2 vSheenColorMapUv;\n#endif\n#ifdef USE_SHEEN_ROUGHNESSMAP\n\tvarying vec2 vSheenRoughnessMapUv;\n#endif\n#ifdef USE_SPECULARMAP\n\tvarying vec2 vSpecularMapUv;\n#endif\n#ifdef USE_SPECULAR_COLORMAP\n\tvarying vec2 vSpecularColorMapUv;\n#endif\n#ifdef USE_SPECULAR_INTENSITYMAP\n\tvarying vec2 vSpecularIntensityMapUv;\n#endif\n#ifdef USE_TRANSMISSIONMAP\n\tuniform mat3 transmissionMapTransform;\n\tvarying vec2 vTransmissionMapUv;\n#endif\n#ifdef USE_THICKNESSMAP\n\tuniform mat3 thicknessMapTransform;\n\tvarying vec2 vThicknessMapUv;\n#endif",
    uv_pars_vertex:
      "#if defined( USE_UV ) || defined( USE_ANISOTROPY )\n\tvarying vec2 vUv;\n#endif\n#ifdef USE_MAP\n\tuniform mat3 mapTransform;\n\tvarying vec2 vMapUv;\n#endif\n#ifdef USE_ALPHAMAP\n\tuniform mat3 alphaMapTransform;\n\tvarying vec2 vAlphaMapUv;\n#endif\n#ifdef USE_LIGHTMAP\n\tuniform mat3 lightMapTransform;\n\tvarying vec2 vLightMapUv;\n#endif\n#ifdef USE_AOMAP\n\tuniform mat3 aoMapTransform;\n\tvarying vec2 vAoMapUv;\n#endif\n#ifdef USE_BUMPMAP\n\tuniform mat3 bumpMapTransform;\n\tvarying vec2 vBumpMapUv;\n#endif\n#ifdef USE_NORMALMAP\n\tuniform mat3 normalMapTransform;\n\tvarying vec2 vNormalMapUv;\n#endif\n#ifdef USE_DISPLACEMENTMAP\n\tuniform mat3 displacementMapTransform;\n\tvarying vec2 vDisplacementMapUv;\n#endif\n#ifdef USE_EMISSIVEMAP\n\tuniform mat3 emissiveMapTransform;\n\tvarying vec2 vEmissiveMapUv;\n#endif\n#ifdef USE_METALNESSMAP\n\tuniform mat3 metalnessMapTransform;\n\tvarying vec2 vMetalnessMapUv;\n#endif\n#ifdef USE_ROUGHNESSMAP\n\tuniform mat3 roughnessMapTransform;\n\tvarying vec2 vRoughnessMapUv;\n#endif\n#ifdef USE_ANISOTROPYMAP\n\tuniform mat3 anisotropyMapTransform;\n\tvarying vec2 vAnisotropyMapUv;\n#endif\n#ifdef USE_CLEARCOATMAP\n\tuniform mat3 clearcoatMapTransform;\n\tvarying vec2 vClearcoatMapUv;\n#endif\n#ifdef USE_CLEARCOAT_NORMALMAP\n\tuniform mat3 clearcoatNormalMapTransform;\n\tvarying vec2 vClearcoatNormalMapUv;\n#endif\n#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n\tuniform mat3 clearcoatRoughnessMapTransform;\n\tvarying vec2 vClearcoatRoughnessMapUv;\n#endif\n#ifdef USE_SHEEN_COLORMAP\n\tuniform mat3 sheenColorMapTransform;\n\tvarying vec2 vSheenColorMapUv;\n#endif\n#ifdef USE_SHEEN_ROUGHNESSMAP\n\tuniform mat3 sheenRoughnessMapTransform;\n\tvarying vec2 vSheenRoughnessMapUv;\n#endif\n#ifdef USE_IRIDESCENCEMAP\n\tuniform mat3 iridescenceMapTransform;\n\tvarying vec2 vIridescenceMapUv;\n#endif\n#ifdef USE_IRIDESCENCE_THICKNESSMAP\n\tuniform mat3 iridescenceThicknessMapTransform;\n\tvarying vec2 vIridescenceThicknessMapUv;\n#endif\n#ifdef USE_SPECULARMAP\n\tuniform mat3 specularMapTransform;\n\tvarying vec2 vSpecularMapUv;\n#endif\n#ifdef USE_SPECULAR_COLORMAP\n\tuniform mat3 specularColorMapTransform;\n\tvarying vec2 vSpecularColorMapUv;\n#endif\n#ifdef USE_SPECULAR_INTENSITYMAP\n\tuniform mat3 specularIntensityMapTransform;\n\tvarying vec2 vSpecularIntensityMapUv;\n#endif\n#ifdef USE_TRANSMISSIONMAP\n\tuniform mat3 transmissionMapTransform;\n\tvarying vec2 vTransmissionMapUv;\n#endif\n#ifdef USE_THICKNESSMAP\n\tuniform mat3 thicknessMapTransform;\n\tvarying vec2 vThicknessMapUv;\n#endif",
    uv_vertex:
      "#if defined( USE_UV ) || defined( USE_ANISOTROPY )\n\tvUv = vec3( uv, 1 ).xy;\n#endif\n#ifdef USE_MAP\n\tvMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_ALPHAMAP\n\tvAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_LIGHTMAP\n\tvLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_AOMAP\n\tvAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_BUMPMAP\n\tvBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_NORMALMAP\n\tvNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_DISPLACEMENTMAP\n\tvDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_EMISSIVEMAP\n\tvEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_METALNESSMAP\n\tvMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_ROUGHNESSMAP\n\tvRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_ANISOTROPYMAP\n\tvAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_CLEARCOATMAP\n\tvClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_CLEARCOAT_NORMALMAP\n\tvClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n\tvClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_IRIDESCENCEMAP\n\tvIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_IRIDESCENCE_THICKNESSMAP\n\tvIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_SHEEN_COLORMAP\n\tvSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_SHEEN_ROUGHNESSMAP\n\tvSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_SPECULARMAP\n\tvSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_SPECULAR_COLORMAP\n\tvSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_SPECULAR_INTENSITYMAP\n\tvSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_TRANSMISSIONMAP\n\tvTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_THICKNESSMAP\n\tvThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;\n#endif",
    worldpos_vertex:
      "#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0\n\tvec4 worldPosition = vec4( transformed, 1.0 );\n\t#ifdef USE_BATCHING\n\t\tworldPosition = batchingMatrix * worldPosition;\n\t#endif\n\t#ifdef USE_INSTANCING\n\t\tworldPosition = instanceMatrix * worldPosition;\n\t#endif\n\tworldPosition = modelMatrix * worldPosition;\n#endif",
    background_vert:
      "varying vec2 vUv;\nuniform mat3 uvTransform;\nvoid main() {\n\tvUv = ( uvTransform * vec3( uv, 1 ) ).xy;\n\tgl_Position = vec4( position.xy, 1.0, 1.0 );\n}",
    background_frag:
      "uniform sampler2D t2D;\nuniform float backgroundIntensity;\nvarying vec2 vUv;\nvoid main() {\n\tvec4 texColor = texture2D( t2D, vUv );\n\t#ifdef DECODE_VIDEO_TEXTURE\n\t\ttexColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );\n\t#endif\n\ttexColor.rgb *= backgroundIntensity;\n\tgl_FragColor = texColor;\n\t#include <tonemapping_fragment>\n\t#include <colorspace_fragment>\n}",
    backgroundCube_vert:
      "varying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n\tvWorldDirection = transformDirection( position, modelMatrix );\n\t#include <begin_vertex>\n\t#include <project_vertex>\n\tgl_Position.z = gl_Position.w;\n}",
    backgroundCube_frag:
      "#ifdef ENVMAP_TYPE_CUBE\n\tuniform samplerCube envMap;\n#elif defined( ENVMAP_TYPE_CUBE_UV )\n\tuniform sampler2D envMap;\n#endif\nuniform float flipEnvMap;\nuniform float backgroundBlurriness;\nuniform float backgroundIntensity;\nuniform mat3 backgroundRotation;\nvarying vec3 vWorldDirection;\n#include <cube_uv_reflection_fragment>\nvoid main() {\n\t#ifdef ENVMAP_TYPE_CUBE\n\t\tvec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );\n\t#elif defined( ENVMAP_TYPE_CUBE_UV )\n\t\tvec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );\n\t#else\n\t\tvec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );\n\t#endif\n\ttexColor.rgb *= backgroundIntensity;\n\tgl_FragColor = texColor;\n\t#include <tonemapping_fragment>\n\t#include <colorspace_fragment>\n}",
    cube_vert:
      "varying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n\tvWorldDirection = transformDirection( position, modelMatrix );\n\t#include <begin_vertex>\n\t#include <project_vertex>\n\tgl_Position.z = gl_Position.w;\n}",
    cube_frag:
      "uniform samplerCube tCube;\nuniform float tFlip;\nuniform float opacity;\nvarying vec3 vWorldDirection;\nvoid main() {\n\tvec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );\n\tgl_FragColor = texColor;\n\tgl_FragColor.a *= opacity;\n\t#include <tonemapping_fragment>\n\t#include <colorspace_fragment>\n}",
    depth_vert:
      "#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvarying vec2 vHighPrecisionZW;\nvoid main() {\n\t#include <uv_vertex>\n\t#include <batching_vertex>\n\t#include <skinbase_vertex>\n\t#include <morphinstance_vertex>\n\t#ifdef USE_DISPLACEMENTMAP\n\t\t#include <beginnormal_vertex>\n\t\t#include <morphnormal_vertex>\n\t\t#include <skinnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvHighPrecisionZW = gl_Position.zw;\n}",
    depth_frag:
      "#if DEPTH_PACKING == 3200\n\tuniform float opacity;\n#endif\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvarying vec2 vHighPrecisionZW;\nvoid main() {\n\tvec4 diffuseColor = vec4( 1.0 );\n\t#include <clipping_planes_fragment>\n\t#if DEPTH_PACKING == 3200\n\t\tdiffuseColor.a = opacity;\n\t#endif\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <alphahash_fragment>\n\t#include <logdepthbuf_fragment>\n\tfloat fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;\n\t#if DEPTH_PACKING == 3200\n\t\tgl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );\n\t#elif DEPTH_PACKING == 3201\n\t\tgl_FragColor = packDepthToRGBA( fragCoordZ );\n\t#elif DEPTH_PACKING == 3202\n\t\tgl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );\n\t#elif DEPTH_PACKING == 3203\n\t\tgl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );\n\t#endif\n}",
    distanceRGBA_vert:
      "#define DISTANCE\nvarying vec3 vWorldPosition;\n#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <batching_vertex>\n\t#include <skinbase_vertex>\n\t#include <morphinstance_vertex>\n\t#ifdef USE_DISPLACEMENTMAP\n\t\t#include <beginnormal_vertex>\n\t\t#include <morphnormal_vertex>\n\t\t#include <skinnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <worldpos_vertex>\n\t#include <clipping_planes_vertex>\n\tvWorldPosition = worldPosition.xyz;\n}",
    distanceRGBA_frag:
      "#define DISTANCE\nuniform vec3 referencePosition;\nuniform float nearDistance;\nuniform float farDistance;\nvarying vec3 vWorldPosition;\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main () {\n\tvec4 diffuseColor = vec4( 1.0 );\n\t#include <clipping_planes_fragment>\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <alphahash_fragment>\n\tfloat dist = length( vWorldPosition - referencePosition );\n\tdist = ( dist - nearDistance ) / ( farDistance - nearDistance );\n\tdist = saturate( dist );\n\tgl_FragColor = packDepthToRGBA( dist );\n}",
    equirect_vert:
      "varying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n\tvWorldDirection = transformDirection( position, modelMatrix );\n\t#include <begin_vertex>\n\t#include <project_vertex>\n}",
    equirect_frag:
      "uniform sampler2D tEquirect;\nvarying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n\tvec3 direction = normalize( vWorldDirection );\n\tvec2 sampleUV = equirectUv( direction );\n\tgl_FragColor = texture2D( tEquirect, sampleUV );\n\t#include <tonemapping_fragment>\n\t#include <colorspace_fragment>\n}",
    linedashed_vert:
      "uniform float scale;\nattribute float lineDistance;\nvarying float vLineDistance;\n#include <common>\n#include <uv_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\tvLineDistance = scale * lineDistance;\n\t#include <uv_vertex>\n\t#include <color_vertex>\n\t#include <morphinstance_vertex>\n\t#include <morphcolor_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <fog_vertex>\n}",
    linedashed_frag:
      "uniform vec3 diffuse;\nuniform float opacity;\nuniform float dashSize;\nuniform float totalSize;\nvarying float vLineDistance;\n#include <common>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <clipping_planes_fragment>\n\tif ( mod( vLineDistance, totalSize ) > dashSize ) {\n\t\tdiscard;\n\t}\n\tvec3 outgoingLight = vec3( 0.0 );\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\t#include <opaque_fragment>\n\t#include <tonemapping_fragment>\n\t#include <colorspace_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n}",
    meshbasic_vert:
      "#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <color_vertex>\n\t#include <morphinstance_vertex>\n\t#include <morphcolor_vertex>\n\t#include <batching_vertex>\n\t#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )\n\t\t#include <beginnormal_vertex>\n\t\t#include <morphnormal_vertex>\n\t\t#include <skinbase_vertex>\n\t\t#include <skinnormal_vertex>\n\t\t#include <defaultnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <worldpos_vertex>\n\t#include <envmap_vertex>\n\t#include <fog_vertex>\n}",
    meshbasic_frag:
      "uniform vec3 diffuse;\nuniform float opacity;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <clipping_planes_fragment>\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <alphahash_fragment>\n\t#include <specularmap_fragment>\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\t#ifdef USE_LIGHTMAP\n\t\tvec4 lightMapTexel = texture2D( lightMap, vLightMapUv );\n\t\treflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;\n\t#else\n\t\treflectedLight.indirectDiffuse += vec3( 1.0 );\n\t#endif\n\t#include <aomap_fragment>\n\treflectedLight.indirectDiffuse *= diffuseColor.rgb;\n\tvec3 outgoingLight = reflectedLight.indirectDiffuse;\n\t#include <envmap_fragment>\n\t#include <opaque_fragment>\n\t#include <tonemapping_fragment>\n\t#include <colorspace_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",
    meshlambert_vert:
      "#define LAMBERT\nvarying vec3 vViewPosition;\n#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <color_vertex>\n\t#include <morphinstance_vertex>\n\t#include <morphcolor_vertex>\n\t#include <batching_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <normal_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <envmap_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}",
    meshlambert_frag:
      "#define LAMBERT\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <normal_pars_fragment>\n#include <lights_lambert_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <clipping_planes_fragment>\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <alphahash_fragment>\n\t#include <specularmap_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\t#include <emissivemap_fragment>\n\t#include <lights_lambert_fragment>\n\t#include <lights_fragment_begin>\n\t#include <lights_fragment_maps>\n\t#include <lights_fragment_end>\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;\n\t#include <envmap_fragment>\n\t#include <opaque_fragment>\n\t#include <tonemapping_fragment>\n\t#include <colorspace_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",
    meshmatcap_vert:
      "#define MATCAP\nvarying vec3 vViewPosition;\n#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <color_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <color_vertex>\n\t#include <morphinstance_vertex>\n\t#include <morphcolor_vertex>\n\t#include <batching_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <normal_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <fog_vertex>\n\tvViewPosition = - mvPosition.xyz;\n}",
    meshmatcap_frag:
      "#define MATCAP\nuniform vec3 diffuse;\nuniform float opacity;\nuniform sampler2D matcap;\nvarying vec3 vViewPosition;\n#include <common>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <fog_pars_fragment>\n#include <normal_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <clipping_planes_fragment>\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <alphahash_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\tvec3 viewDir = normalize( vViewPosition );\n\tvec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );\n\tvec3 y = cross( viewDir, x );\n\tvec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;\n\t#ifdef USE_MATCAP\n\t\tvec4 matcapColor = texture2D( matcap, uv );\n\t#else\n\t\tvec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );\n\t#endif\n\tvec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;\n\t#include <opaque_fragment>\n\t#include <tonemapping_fragment>\n\t#include <colorspace_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",
    meshnormal_vert:
      "#define NORMAL\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )\n\tvarying vec3 vViewPosition;\n#endif\n#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <batching_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphinstance_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <normal_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )\n\tvViewPosition = - mvPosition.xyz;\n#endif\n}",
    meshnormal_frag:
      "#define NORMAL\nuniform float opacity;\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )\n\tvarying vec3 vViewPosition;\n#endif\n#include <packing>\n#include <uv_pars_fragment>\n#include <normal_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\tvec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );\n\t#include <clipping_planes_fragment>\n\t#include <logdepthbuf_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\tgl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );\n\t#ifdef OPAQUE\n\t\tgl_FragColor.a = 1.0;\n\t#endif\n}",
    meshphong_vert:
      "#define PHONG\nvarying vec3 vViewPosition;\n#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <color_vertex>\n\t#include <morphcolor_vertex>\n\t#include <batching_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphinstance_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <normal_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <envmap_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}",
    meshphong_frag:
      "#define PHONG\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform vec3 specular;\nuniform float shininess;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <normal_pars_fragment>\n#include <lights_phong_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <clipping_planes_fragment>\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <alphahash_fragment>\n\t#include <specularmap_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\t#include <emissivemap_fragment>\n\t#include <lights_phong_fragment>\n\t#include <lights_fragment_begin>\n\t#include <lights_fragment_maps>\n\t#include <lights_fragment_end>\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n\t#include <envmap_fragment>\n\t#include <opaque_fragment>\n\t#include <tonemapping_fragment>\n\t#include <colorspace_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",
    meshphysical_vert:
      "#define STANDARD\nvarying vec3 vViewPosition;\n#ifdef USE_TRANSMISSION\n\tvarying vec3 vWorldPosition;\n#endif\n#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <color_vertex>\n\t#include <morphinstance_vertex>\n\t#include <morphcolor_vertex>\n\t#include <batching_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <normal_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n#ifdef USE_TRANSMISSION\n\tvWorldPosition = worldPosition.xyz;\n#endif\n}",
    meshphysical_frag:
      "#define STANDARD\n#ifdef PHYSICAL\n\t#define IOR\n\t#define USE_SPECULAR\n#endif\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float roughness;\nuniform float metalness;\nuniform float opacity;\n#ifdef IOR\n\tuniform float ior;\n#endif\n#ifdef USE_SPECULAR\n\tuniform float specularIntensity;\n\tuniform vec3 specularColor;\n\t#ifdef USE_SPECULAR_COLORMAP\n\t\tuniform sampler2D specularColorMap;\n\t#endif\n\t#ifdef USE_SPECULAR_INTENSITYMAP\n\t\tuniform sampler2D specularIntensityMap;\n\t#endif\n#endif\n#ifdef USE_CLEARCOAT\n\tuniform float clearcoat;\n\tuniform float clearcoatRoughness;\n#endif\n#ifdef USE_DISPERSION\n\tuniform float dispersion;\n#endif\n#ifdef USE_IRIDESCENCE\n\tuniform float iridescence;\n\tuniform float iridescenceIOR;\n\tuniform float iridescenceThicknessMinimum;\n\tuniform float iridescenceThicknessMaximum;\n#endif\n#ifdef USE_SHEEN\n\tuniform vec3 sheenColor;\n\tuniform float sheenRoughness;\n\t#ifdef USE_SHEEN_COLORMAP\n\t\tuniform sampler2D sheenColorMap;\n\t#endif\n\t#ifdef USE_SHEEN_ROUGHNESSMAP\n\t\tuniform sampler2D sheenRoughnessMap;\n\t#endif\n#endif\n#ifdef USE_ANISOTROPY\n\tuniform vec2 anisotropyVector;\n\t#ifdef USE_ANISOTROPYMAP\n\t\tuniform sampler2D anisotropyMap;\n\t#endif\n#endif\nvarying vec3 vViewPosition;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <iridescence_fragment>\n#include <cube_uv_reflection_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_physical_pars_fragment>\n#include <fog_pars_fragment>\n#include <lights_pars_begin>\n#include <normal_pars_fragment>\n#include <lights_physical_pars_fragment>\n#include <transmission_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <clearcoat_pars_fragment>\n#include <iridescence_pars_fragment>\n#include <roughnessmap_pars_fragment>\n#include <metalnessmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <clipping_planes_fragment>\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <alphahash_fragment>\n\t#include <roughnessmap_fragment>\n\t#include <metalnessmap_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\t#include <clearcoat_normal_fragment_begin>\n\t#include <clearcoat_normal_fragment_maps>\n\t#include <emissivemap_fragment>\n\t#include <lights_physical_fragment>\n\t#include <lights_fragment_begin>\n\t#include <lights_fragment_maps>\n\t#include <lights_fragment_end>\n\t#include <aomap_fragment>\n\tvec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;\n\tvec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;\n\t#include <transmission_fragment>\n\tvec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;\n\t#ifdef USE_SHEEN\n\t\tfloat sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );\n\t\toutgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;\n\t#endif\n\t#ifdef USE_CLEARCOAT\n\t\tfloat dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );\n\t\tvec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );\n\t\toutgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;\n\t#endif\n\t#include <opaque_fragment>\n\t#include <tonemapping_fragment>\n\t#include <colorspace_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",
    meshtoon_vert:
      "#define TOON\nvarying vec3 vViewPosition;\n#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <color_vertex>\n\t#include <morphinstance_vertex>\n\t#include <morphcolor_vertex>\n\t#include <batching_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <normal_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}",
    meshtoon_frag:
      "#define TOON\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <gradientmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <normal_pars_fragment>\n#include <lights_toon_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <clipping_planes_fragment>\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <alphahash_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\t#include <emissivemap_fragment>\n\t#include <lights_toon_fragment>\n\t#include <lights_fragment_begin>\n\t#include <lights_fragment_maps>\n\t#include <lights_fragment_end>\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;\n\t#include <opaque_fragment>\n\t#include <tonemapping_fragment>\n\t#include <colorspace_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",
    points_vert:
      "uniform float size;\nuniform float scale;\n#include <common>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\n#ifdef USE_POINTS_UV\n\tvarying vec2 vUv;\n\tuniform mat3 uvTransform;\n#endif\nvoid main() {\n\t#ifdef USE_POINTS_UV\n\t\tvUv = ( uvTransform * vec3( uv, 1 ) ).xy;\n\t#endif\n\t#include <color_vertex>\n\t#include <morphinstance_vertex>\n\t#include <morphcolor_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <project_vertex>\n\tgl_PointSize = size;\n\t#ifdef USE_SIZEATTENUATION\n\t\tbool isPerspective = isPerspectiveMatrix( projectionMatrix );\n\t\tif ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );\n\t#endif\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <worldpos_vertex>\n\t#include <fog_vertex>\n}",
    points_frag:
      "uniform vec3 diffuse;\nuniform float opacity;\n#include <common>\n#include <color_pars_fragment>\n#include <map_particle_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <clipping_planes_fragment>\n\tvec3 outgoingLight = vec3( 0.0 );\n\t#include <logdepthbuf_fragment>\n\t#include <map_particle_fragment>\n\t#include <color_fragment>\n\t#include <alphatest_fragment>\n\t#include <alphahash_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\t#include <opaque_fragment>\n\t#include <tonemapping_fragment>\n\t#include <colorspace_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n}",
    shadow_vert:
      "#include <common>\n#include <batching_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <shadowmap_pars_vertex>\nvoid main() {\n\t#include <batching_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphinstance_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}",
    shadow_frag:
      "uniform vec3 color;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <logdepthbuf_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <shadowmask_pars_fragment>\nvoid main() {\n\t#include <logdepthbuf_fragment>\n\tgl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );\n\t#include <tonemapping_fragment>\n\t#include <colorspace_fragment>\n\t#include <fog_fragment>\n}",
    sprite_vert:
      "uniform float rotation;\nuniform vec2 center;\n#include <common>\n#include <uv_pars_vertex>\n#include <fog_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\tvec4 mvPosition = modelViewMatrix[ 3 ];\n\tvec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );\n\t#ifndef USE_SIZEATTENUATION\n\t\tbool isPerspective = isPerspectiveMatrix( projectionMatrix );\n\t\tif ( isPerspective ) scale *= - mvPosition.z;\n\t#endif\n\tvec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;\n\tvec2 rotatedPosition;\n\trotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;\n\trotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;\n\tmvPosition.xy += rotatedPosition;\n\tgl_Position = projectionMatrix * mvPosition;\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <fog_vertex>\n}",
    sprite_frag:
      "uniform vec3 diffuse;\nuniform float opacity;\n#include <common>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <clipping_planes_fragment>\n\tvec3 outgoingLight = vec3( 0.0 );\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <alphahash_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\t#include <opaque_fragment>\n\t#include <tonemapping_fragment>\n\t#include <colorspace_fragment>\n\t#include <fog_fragment>\n}",
  },
  jr = {
    common: {
      diffuse: {
        value: new oi(16777215),
      },
      opacity: {
        value: 1,
      },
      map: {
        value: null,
      },
      mapTransform: {
        value: new de(),
      },
      alphaMap: {
        value: null,
      },
      alphaMapTransform: {
        value: new de(),
      },
      alphaTest: {
        value: 0,
      },
    },
    specularmap: {
      specularMap: {
        value: null,
      },
      specularMapTransform: {
        value: new de(),
      },
    },
    envmap: {
      envMap: {
        value: null,
      },
      envMapRotation: {
        value: new de(),
      },
      flipEnvMap: {
        value: -1,
      },
      reflectivity: {
        value: 1,
      },
      ior: {
        value: 1.5,
      },
      refractionRatio: {
        value: 0.98,
      },
    },
    aomap: {
      aoMap: {
        value: null,
      },
      aoMapIntensity: {
        value: 1,
      },
      aoMapTransform: {
        value: new de(),
      },
    },
    lightmap: {
      lightMap: {
        value: null,
      },
      lightMapIntensity: {
        value: 1,
      },
      lightMapTransform: {
        value: new de(),
      },
    },
    bumpmap: {
      bumpMap: {
        value: null,
      },
      bumpMapTransform: {
        value: new de(),
      },
      bumpScale: {
        value: 1,
      },
    },
    normalmap: {
      normalMap: {
        value: null,
      },
      normalMapTransform: {
        value: new de(),
      },
      normalScale: {
        value: new ue(1, 1),
      },
    },
    displacementmap: {
      displacementMap: {
        value: null,
      },
      displacementMapTransform: {
        value: new de(),
      },
      displacementScale: {
        value: 1,
      },
      displacementBias: {
        value: 0,
      },
    },
    emissivemap: {
      emissiveMap: {
        value: null,
      },
      emissiveMapTransform: {
        value: new de(),
      },
    },
    metalnessmap: {
      metalnessMap: {
        value: null,
      },
      metalnessMapTransform: {
        value: new de(),
      },
    },
    roughnessmap: {
      roughnessMap: {
        value: null,
      },
      roughnessMapTransform: {
        value: new de(),
      },
    },
    gradientmap: {
      gradientMap: {
        value: null,
      },
    },
    fog: {
      fogDensity: {
        value: 25e-5,
      },
      fogNear: {
        value: 1,
      },
      fogFar: {
        value: 2e3,
      },
      fogColor: {
        value: new oi(16777215),
      },
    },
    lights: {
      ambientLightColor: {
        value: [],
      },
      lightProbe: {
        value: [],
      },
      directionalLights: {
        value: [],
        properties: {
          direction: {},
          color: {},
        },
      },
      directionalLightShadows: {
        value: [],
        properties: {
          shadowIntensity: 1,
          shadowBias: {},
          shadowNormalBias: {},
          shadowRadius: {},
          shadowMapSize: {},
        },
      },
      directionalShadowMap: {
        value: [],
      },
      directionalShadowMatrix: {
        value: [],
      },
      spotLights: {
        value: [],
        properties: {
          color: {},
          position: {},
          direction: {},
          distance: {},
          coneCos: {},
          penumbraCos: {},
          decay: {},
        },
      },
      spotLightShadows: {
        value: [],
        properties: {
          shadowIntensity: 1,
          shadowBias: {},
          shadowNormalBias: {},
          shadowRadius: {},
          shadowMapSize: {},
        },
      },
      spotLightMap: {
        value: [],
      },
      spotShadowMap: {
        value: [],
      },
      spotLightMatrix: {
        value: [],
      },
      pointLights: {
        value: [],
        properties: {
          color: {},
          position: {},
          decay: {},
          distance: {},
        },
      },
      pointLightShadows: {
        value: [],
        properties: {
          shadowIntensity: 1,
          shadowBias: {},
          shadowNormalBias: {},
          shadowRadius: {},
          shadowMapSize: {},
          shadowCameraNear: {},
          shadowCameraFar: {},
        },
      },
      pointShadowMap: {
        value: [],
      },
      pointShadowMatrix: {
        value: [],
      },
      hemisphereLights: {
        value: [],
        properties: {
          direction: {},
          skyColor: {},
          groundColor: {},
        },
      },
      rectAreaLights: {
        value: [],
        properties: {
          color: {},
          position: {},
          width: {},
          height: {},
        },
      },
      ltc_1: {
        value: null,
      },
      ltc_2: {
        value: null,
      },
    },
    points: {
      diffuse: {
        value: new oi(16777215),
      },
      opacity: {
        value: 1,
      },
      size: {
        value: 1,
      },
      scale: {
        value: 1,
      },
      map: {
        value: null,
      },
      alphaMap: {
        value: null,
      },
      alphaMapTransform: {
        value: new de(),
      },
      alphaTest: {
        value: 0,
      },
      uvTransform: {
        value: new de(),
      },
    },
    sprite: {
      diffuse: {
        value: new oi(16777215),
      },
      opacity: {
        value: 1,
      },
      center: {
        value: new ue(0.5, 0.5),
      },
      rotation: {
        value: 0,
      },
      map: {
        value: null,
      },
      mapTransform: {
        value: new de(),
      },
      alphaMap: {
        value: null,
      },
      alphaMapTransform: {
        value: new de(),
      },
      alphaTest: {
        value: 0,
      },
    },
  },
  qr = {
    basic: {
      uniforms: Vi([
        jr.common,
        jr.specularmap,
        jr.envmap,
        jr.aomap,
        jr.lightmap,
        jr.fog,
      ]),
      vertexShader: Xr.meshbasic_vert,
      fragmentShader: Xr.meshbasic_frag,
    },
    lambert: {
      uniforms: Vi([
        jr.common,
        jr.specularmap,
        jr.envmap,
        jr.aomap,
        jr.lightmap,
        jr.emissivemap,
        jr.bumpmap,
        jr.normalmap,
        jr.displacementmap,
        jr.fog,
        jr.lights,
        {
          emissive: {
            value: new oi(0),
          },
        },
      ]),
      vertexShader: Xr.meshlambert_vert,
      fragmentShader: Xr.meshlambert_frag,
    },
    phong: {
      uniforms: Vi([
        jr.common,
        jr.specularmap,
        jr.envmap,
        jr.aomap,
        jr.lightmap,
        jr.emissivemap,
        jr.bumpmap,
        jr.normalmap,
        jr.displacementmap,
        jr.fog,
        jr.lights,
        {
          emissive: {
            value: new oi(0),
          },
          specular: {
            value: new oi(1118481),
          },
          shininess: {
            value: 30,
          },
        },
      ]),
      vertexShader: Xr.meshphong_vert,
      fragmentShader: Xr.meshphong_frag,
    },
    standard: {
      uniforms: Vi([
        jr.common,
        jr.envmap,
        jr.aomap,
        jr.lightmap,
        jr.emissivemap,
        jr.bumpmap,
        jr.normalmap,
        jr.displacementmap,
        jr.roughnessmap,
        jr.metalnessmap,
        jr.fog,
        jr.lights,
        {
          emissive: {
            value: new oi(0),
          },
          roughness: {
            value: 1,
          },
          metalness: {
            value: 0,
          },
          envMapIntensity: {
            value: 1,
          },
        },
      ]),
      vertexShader: Xr.meshphysical_vert,
      fragmentShader: Xr.meshphysical_frag,
    },
    toon: {
      uniforms: Vi([
        jr.common,
        jr.aomap,
        jr.lightmap,
        jr.emissivemap,
        jr.bumpmap,
        jr.normalmap,
        jr.displacementmap,
        jr.gradientmap,
        jr.fog,
        jr.lights,
        {
          emissive: {
            value: new oi(0),
          },
        },
      ]),
      vertexShader: Xr.meshtoon_vert,
      fragmentShader: Xr.meshtoon_frag,
    },
    matcap: {
      uniforms: Vi([
        jr.common,
        jr.bumpmap,
        jr.normalmap,
        jr.displacementmap,
        jr.fog,
        {
          matcap: {
            value: null,
          },
        },
      ]),
      vertexShader: Xr.meshmatcap_vert,
      fragmentShader: Xr.meshmatcap_frag,
    },
    points: {
      uniforms: Vi([jr.points, jr.fog]),
      vertexShader: Xr.points_vert,
      fragmentShader: Xr.points_frag,
    },
    dashed: {
      uniforms: Vi([
        jr.common,
        jr.fog,
        {
          scale: {
            value: 1,
          },
          dashSize: {
            value: 1,
          },
          totalSize: {
            value: 2,
          },
        },
      ]),
      vertexShader: Xr.linedashed_vert,
      fragmentShader: Xr.linedashed_frag,
    },
    depth: {
      uniforms: Vi([jr.common, jr.displacementmap]),
      vertexShader: Xr.depth_vert,
      fragmentShader: Xr.depth_frag,
    },
    normal: {
      uniforms: Vi([
        jr.common,
        jr.bumpmap,
        jr.normalmap,
        jr.displacementmap,
        {
          opacity: {
            value: 1,
          },
        },
      ]),
      vertexShader: Xr.meshnormal_vert,
      fragmentShader: Xr.meshnormal_frag,
    },
    sprite: {
      uniforms: Vi([jr.sprite, jr.fog]),
      vertexShader: Xr.sprite_vert,
      fragmentShader: Xr.sprite_frag,
    },
    background: {
      uniforms: {
        uvTransform: {
          value: new de(),
        },
        t2D: {
          value: null,
        },
        backgroundIntensity: {
          value: 1,
        },
      },
      vertexShader: Xr.background_vert,
      fragmentShader: Xr.background_frag,
    },
    backgroundCube: {
      uniforms: {
        envMap: {
          value: null,
        },
        flipEnvMap: {
          value: -1,
        },
        backgroundBlurriness: {
          value: 0,
        },
        backgroundIntensity: {
          value: 1,
        },
        backgroundRotation: {
          value: new de(),
        },
      },
      vertexShader: Xr.backgroundCube_vert,
      fragmentShader: Xr.backgroundCube_frag,
    },
    cube: {
      uniforms: {
        tCube: {
          value: null,
        },
        tFlip: {
          value: -1,
        },
        opacity: {
          value: 1,
        },
      },
      vertexShader: Xr.cube_vert,
      fragmentShader: Xr.cube_frag,
    },
    equirect: {
      uniforms: {
        tEquirect: {
          value: null,
        },
      },
      vertexShader: Xr.equirect_vert,
      fragmentShader: Xr.equirect_frag,
    },
    distanceRGBA: {
      uniforms: Vi([
        jr.common,
        jr.displacementmap,
        {
          referencePosition: {
            value: new Be(),
          },
          nearDistance: {
            value: 1,
          },
          farDistance: {
            value: 1e3,
          },
        },
      ]),
      vertexShader: Xr.distanceRGBA_vert,
      fragmentShader: Xr.distanceRGBA_frag,
    },
    shadow: {
      uniforms: Vi([
        jr.lights,
        jr.fog,
        {
          color: {
            value: new oi(0),
          },
          opacity: {
            value: 1,
          },
        },
      ]),
      vertexShader: Xr.shadow_vert,
      fragmentShader: Xr.shadow_frag,
    },
  };
qr.physical = {
  uniforms: Vi([
    qr.standard.uniforms,
    {
      clearcoat: {
        value: 0,
      },
      clearcoatMap: {
        value: null,
      },
      clearcoatMapTransform: {
        value: new de(),
      },
      clearcoatNormalMap: {
        value: null,
      },
      clearcoatNormalMapTransform: {
        value: new de(),
      },
      clearcoatNormalScale: {
        value: new ue(1, 1),
      },
      clearcoatRoughness: {
        value: 0,
      },
      clearcoatRoughnessMap: {
        value: null,
      },
      clearcoatRoughnessMapTransform: {
        value: new de(),
      },
      dispersion: {
        value: 0,
      },
      iridescence: {
        value: 0,
      },
      iridescenceMap: {
        value: null,
      },
      iridescenceMapTransform: {
        value: new de(),
      },
      iridescenceIOR: {
        value: 1.3,
      },
      iridescenceThicknessMinimum: {
        value: 100,
      },
      iridescenceThicknessMaximum: {
        value: 400,
      },
      iridescenceThicknessMap: {
        value: null,
      },
      iridescenceThicknessMapTransform: {
        value: new de(),
      },
      sheen: {
        value: 0,
      },
      sheenColor: {
        value: new oi(0),
      },
      sheenColorMap: {
        value: null,
      },
      sheenColorMapTransform: {
        value: new de(),
      },
      sheenRoughness: {
        value: 1,
      },
      sheenRoughnessMap: {
        value: null,
      },
      sheenRoughnessMapTransform: {
        value: new de(),
      },
      transmission: {
        value: 0,
      },
      transmissionMap: {
        value: null,
      },
      transmissionMapTransform: {
        value: new de(),
      },
      transmissionSamplerSize: {
        value: new ue(),
      },
      transmissionSamplerMap: {
        value: null,
      },
      thickness: {
        value: 0,
      },
      thicknessMap: {
        value: null,
      },
      thicknessMapTransform: {
        value: new de(),
      },
      attenuationDistance: {
        value: 0,
      },
      attenuationColor: {
        value: new oi(0),
      },
      specularColor: {
        value: new oi(1, 1, 1),
      },
      specularColorMap: {
        value: null,
      },
      specularColorMapTransform: {
        value: new de(),
      },
      specularIntensity: {
        value: 1,
      },
      specularIntensityMap: {
        value: null,
      },
      specularIntensityMapTransform: {
        value: new de(),
      },
      anisotropyVector: {
        value: new ue(),
      },
      anisotropyMap: {
        value: null,
      },
      anisotropyMapTransform: {
        value: new de(),
      },
    },
  ]),
  vertexShader: Xr.meshphysical_vert,
  fragmentShader: Xr.meshphysical_frag,
};
const Yr = {
    r: 0,
    b: 0,
    g: 0,
  },
  Kr = new bn(),
  Zr = new mn();
function Jr(t, e, n, i, r, a, s) {
  const o = new oi(0);
  let l,
    c,
    h = !0 === a ? 0 : 1,
    u = null,
    d = 0,
    p = null;
  function f(t) {
    let i = !0 === t.isScene ? t.background : null;
    return (
      i && i.isTexture && (i = (t.backgroundBlurriness > 0 ? n : e).get(i)), i
    );
  }
  function m(e, n) {
    e.getRGB(Yr, Gi(t)), i.buffers.color.setClear(Yr.r, Yr.g, Yr.b, n, s);
  }
  return {
    getClearColor: function () {
      return o;
    },
    setClearColor: function (t, e = 1) {
      o.set(t), (h = e), m(o, h);
    },
    getClearAlpha: function () {
      return h;
    },
    setClearAlpha: function (t) {
      (h = t), m(o, h);
    },
    render: function (e) {
      let n = !1;
      const r = f(e);
      null === r ? m(o, h) : r && r.isColor && (m(r, 1), (n = !0));
      const a = t.xr.getEnvironmentBlendMode();
      "additive" === a
        ? i.buffers.color.setClear(0, 0, 0, 1, s)
        : "alpha-blend" === a && i.buffers.color.setClear(0, 0, 0, 0, s),
        (t.autoClear || n) &&
          (i.buffers.depth.setTest(!0),
          i.buffers.depth.setMask(!0),
          i.buffers.color.setMask(!0),
          t.clear(t.autoClearColor, t.autoClearDepth, t.autoClearStencil));
    },
    addToRenderList: function (e, n) {
      const i = f(n);
      i && (i.isCubeTexture || i.mapping === F)
        ? (void 0 === c &&
            ((c = new Fi(
              new zi(1, 1, 1),
              new Wi({
                name: "BackgroundCubeMaterial",
                uniforms: Hi(qr.backgroundCube.uniforms),
                vertexShader: qr.backgroundCube.vertexShader,
                fragmentShader: qr.backgroundCube.fragmentShader,
                side: 1,
                depthTest: !1,
                depthWrite: !1,
                fog: !1,
              })
            )),
            c.geometry.deleteAttribute("normal"),
            c.geometry.deleteAttribute("uv"),
            (c.onBeforeRender = function (t, e, n) {
              this.matrixWorld.copyPosition(n.matrixWorld);
            }),
            Object.defineProperty(c.material, "envMap", {
              get: function () {
                return this.uniforms.envMap.value;
              },
            }),
            r.update(c)),
          Kr.copy(n.backgroundRotation),
          (Kr.x *= -1),
          (Kr.y *= -1),
          (Kr.z *= -1),
          i.isCubeTexture &&
            !1 === i.isRenderTargetTexture &&
            ((Kr.y *= -1), (Kr.z *= -1)),
          (c.material.uniforms.envMap.value = i),
          (c.material.uniforms.flipEnvMap.value =
            i.isCubeTexture && !1 === i.isRenderTargetTexture ? -1 : 1),
          (c.material.uniforms.backgroundBlurriness.value =
            n.backgroundBlurriness),
          (c.material.uniforms.backgroundIntensity.value =
            n.backgroundIntensity),
          c.material.uniforms.backgroundRotation.value.setFromMatrix4(
            Zr.makeRotationFromEuler(Kr)
          ),
          (c.material.toneMapped = ye.getTransfer(i.colorSpace) !== kt),
          (u === i && d === i.version && p === t.toneMapping) ||
            ((c.material.needsUpdate = !0),
            (u = i),
            (d = i.version),
            (p = t.toneMapping)),
          c.layers.enableAll(),
          e.unshift(c, c.geometry, c.material, 0, 0, null))
        : i &&
          i.isTexture &&
          (void 0 === l &&
            ((l = new Fi(
              new xr(2, 2),
              new Wi({
                name: "BackgroundMaterial",
                uniforms: Hi(qr.background.uniforms),
                vertexShader: qr.background.vertexShader,
                fragmentShader: qr.background.fragmentShader,
                side: 0,
                depthTest: !1,
                depthWrite: !1,
                fog: !1,
              })
            )),
            l.geometry.deleteAttribute("normal"),
            Object.defineProperty(l.material, "map", {
              get: function () {
                return this.uniforms.t2D.value;
              },
            }),
            r.update(l)),
          (l.material.uniforms.t2D.value = i),
          (l.material.uniforms.backgroundIntensity.value =
            n.backgroundIntensity),
          (l.material.toneMapped = ye.getTransfer(i.colorSpace) !== kt),
          !0 === i.matrixAutoUpdate && i.updateMatrix(),
          l.material.uniforms.uvTransform.value.copy(i.matrix),
          (u === i && d === i.version && p === t.toneMapping) ||
            ((l.material.needsUpdate = !0),
            (u = i),
            (d = i.version),
            (p = t.toneMapping)),
          l.layers.enableAll(),
          e.unshift(l, l.geometry, l.material, 0, 0, null));
    },
    dispose: function () {
      void 0 !== c && (c.geometry.dispose(), c.material.dispose()),
        void 0 !== l && (l.geometry.dispose(), l.material.dispose());
    },
  };
}
function $r(t, e) {
  const n = t.getParameter(t.MAX_VERTEX_ATTRIBS),
    i = {},
    r = c(null);
  let a = r,
    s = !1;
  function o(e) {
    return t.bindVertexArray(e);
  }
  function l(e) {
    return t.deleteVertexArray(e);
  }
  function c(t) {
    const e = [],
      i = [],
      r = [];
    for (let a = 0; n > a; a++) (e[a] = 0), (i[a] = 0), (r[a] = 0);
    return {
      geometry: null,
      program: null,
      wireframe: !1,
      newAttributes: e,
      enabledAttributes: i,
      attributeDivisors: r,
      object: t,
      attributes: {},
      index: null,
    };
  }
  function h() {
    const t = a.newAttributes;
    for (let e = 0, n = t.length; n > e; e++) t[e] = 0;
  }
  function u(t) {
    d(t, 0);
  }
  function d(e, n) {
    const i = a.newAttributes,
      r = a.enabledAttributes,
      s = a.attributeDivisors;
    (i[e] = 1),
      0 === r[e] && (t.enableVertexAttribArray(e), (r[e] = 1)),
      s[e] !== n && (t.vertexAttribDivisor(e, n), (s[e] = n));
  }
  function p() {
    const e = a.newAttributes,
      n = a.enabledAttributes;
    for (let i = 0, r = n.length; r > i; i++)
      n[i] !== e[i] && (t.disableVertexAttribArray(i), (n[i] = 0));
  }
  function f(e, n, i, r, a, s, o) {
    !0 === o
      ? t.vertexAttribIPointer(e, n, i, a, s)
      : t.vertexAttribPointer(e, n, i, r, a, s);
  }
  function m() {
    g(), (s = !0), a !== r && ((a = r), o(a.object));
  }
  function g() {
    (r.geometry = null), (r.program = null), (r.wireframe = !1);
  }
  return {
    setup: function (n, r, l, m, g) {
      let _ = !1;
      const v = (function (e, n, r) {
        const a = !0 === r.wireframe;
        let s = i[e.id];
        void 0 === s && ((s = {}), (i[e.id] = s));
        let o = s[n.id];
        void 0 === o && ((o = {}), (s[n.id] = o));
        let l = o[a];
        return void 0 === l && ((l = c(t.createVertexArray())), (o[a] = l)), l;
      })(m, l, r);
      a !== v && ((a = v), o(a.object)),
        (_ = (function (t, e, n, i) {
          const r = a.attributes,
            s = e.attributes;
          let o = 0;
          const l = n.getAttributes();
          for (const a in l)
            if (l[a].location >= 0) {
              const e = r[a];
              let n = s[a];
              if (
                (void 0 === n &&
                  ("instanceMatrix" === a &&
                    t.instanceMatrix &&
                    (n = t.instanceMatrix),
                  "instanceColor" === a &&
                    t.instanceColor &&
                    (n = t.instanceColor)),
                void 0 === e)
              )
                return !0;
              if (e.attribute !== n) return !0;
              if (n && e.data !== n.data) return !0;
              o++;
            }
          return a.attributesNum !== o || a.index !== i;
        })(n, m, l, g)),
        _ &&
          (function (t, e, n, i) {
            const r = {},
              s = e.attributes;
            let o = 0;
            const l = n.getAttributes();
            for (const a in l)
              if (l[a].location >= 0) {
                let e = s[a];
                void 0 === e &&
                  ("instanceMatrix" === a &&
                    t.instanceMatrix &&
                    (e = t.instanceMatrix),
                  "instanceColor" === a &&
                    t.instanceColor &&
                    (e = t.instanceColor));
                const n = {};
                (n.attribute = e),
                  e && e.data && (n.data = e.data),
                  (r[a] = n),
                  o++;
              }
            (a.attributes = r), (a.attributesNum = o), (a.index = i);
          })(n, m, l, g),
        null !== g && e.update(g, t.ELEMENT_ARRAY_BUFFER),
        (_ || s) &&
          ((s = !1),
          (function (n, i, r, a) {
            h();
            const s = a.attributes,
              o = r.getAttributes(),
              l = i.defaultAttributeValues;
            for (const c in o) {
              const i = o[c];
              if (i.location >= 0) {
                let r = s[c];
                if (
                  (void 0 === r &&
                    ("instanceMatrix" === c &&
                      n.instanceMatrix &&
                      (r = n.instanceMatrix),
                    "instanceColor" === c &&
                      n.instanceColor &&
                      (r = n.instanceColor)),
                  void 0 !== r)
                ) {
                  const s = r.normalized,
                    o = r.itemSize,
                    l = e.get(r);
                  if (void 0 === l) continue;
                  const c = l.buffer,
                    h = l.type,
                    p = l.bytesPerElement,
                    m = h === t.INT || h === t.UNSIGNED_INT || r.gpuType === K;
                  if (r.isInterleavedBufferAttribute) {
                    const e = r.data,
                      l = e.stride,
                      g = r.offset;
                    if (e.isInstancedInterleavedBuffer) {
                      for (let t = 0; t < i.locationSize; t++)
                        d(i.location + t, e.meshPerAttribute);
                      !0 !== n.isInstancedMesh &&
                        void 0 === a._maxInstanceCount &&
                        (a._maxInstanceCount = e.meshPerAttribute * e.count);
                    } else
                      for (let t = 0; t < i.locationSize; t++)
                        u(i.location + t);
                    t.bindBuffer(t.ARRAY_BUFFER, c);
                    for (let t = 0; t < i.locationSize; t++)
                      f(
                        i.location + t,
                        o / i.locationSize,
                        h,
                        s,
                        l * p,
                        (g + (o / i.locationSize) * t) * p,
                        m
                      );
                  } else {
                    if (r.isInstancedBufferAttribute) {
                      for (let t = 0; t < i.locationSize; t++)
                        d(i.location + t, r.meshPerAttribute);
                      !0 !== n.isInstancedMesh &&
                        void 0 === a._maxInstanceCount &&
                        (a._maxInstanceCount = r.meshPerAttribute * r.count);
                    } else
                      for (let t = 0; t < i.locationSize; t++)
                        u(i.location + t);
                    t.bindBuffer(t.ARRAY_BUFFER, c);
                    for (let t = 0; t < i.locationSize; t++)
                      f(
                        i.location + t,
                        o / i.locationSize,
                        h,
                        s,
                        o * p,
                        (o / i.locationSize) * t * p,
                        m
                      );
                  }
                } else if (void 0 !== l) {
                  const e = l[c];
                  if (void 0 !== e)
                    switch (e.length) {
                      case 2:
                        t.vertexAttrib2fv(i.location, e);
                        break;
                      case 3:
                        t.vertexAttrib3fv(i.location, e);
                        break;
                      case 4:
                        t.vertexAttrib4fv(i.location, e);
                        break;
                      default:
                        t.vertexAttrib1fv(i.location, e);
                    }
                }
              }
            }
            p();
          })(n, r, l, m),
          null !== g && t.bindBuffer(t.ELEMENT_ARRAY_BUFFER, e.get(g).buffer));
    },
    reset: m,
    resetDefaultState: g,
    dispose: function () {
      m();
      for (const t in i) {
        const e = i[t];
        for (const t in e) {
          const n = e[t];
          for (const t in n) l(n[t].object), delete n[t];
          delete e[t];
        }
        delete i[t];
      }
    },
    releaseStatesOfGeometry: function (t) {
      if (void 0 === i[t.id]) return;
      const e = i[t.id];
      for (const n in e) {
        const t = e[n];
        for (const e in t) l(t[e].object), delete t[e];
        delete e[n];
      }
      delete i[t.id];
    },
    releaseStatesOfProgram: function (t) {
      for (const e in i) {
        const n = i[e];
        if (void 0 === n[t.id]) continue;
        const r = n[t.id];
        for (const t in r) l(r[t].object), delete r[t];
        delete n[t.id];
      }
    },
    initAttributes: h,
    enableAttribute: u,
    disableUnusedAttributes: p,
  };
}
function Qr(t, e, n) {
  let i;
  function r(e, r, a) {
    0 !== a && (t.drawArraysInstanced(i, e, r, a), n.update(r, i, a));
  }
  (this.setMode = function (t) {
    i = t;
  }),
    (this.render = function (e, r) {
      t.drawArrays(i, e, r), n.update(r, i, 1);
    }),
    (this.renderInstances = r),
    (this.renderMultiDraw = function (t, r, a) {
      if (0 === a) return;
      e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i, t, 0, r, 0, a);
      let s = 0;
      for (let e = 0; a > e; e++) s += r[e];
      n.update(s, i, 1);
    }),
    (this.renderMultiDrawInstances = function (t, a, s, o) {
      if (0 === s) return;
      const l = e.get("WEBGL_multi_draw");
      if (null === l) for (let e = 0; e < t.length; e++) r(t[e], a[e], o[e]);
      else {
        l.multiDrawArraysInstancedWEBGL(i, t, 0, a, 0, o, 0, s);
        let e = 0;
        for (let t = 0; s > t; t++) e += a[t] * o[t];
        n.update(e, i, 1);
      }
    });
}
function ta(t, e, n, i) {
  let r;
  function a(e) {
    if ("highp" === e) {
      if (
        t.getShaderPrecisionFormat(t.VERTEX_SHADER, t.HIGH_FLOAT).precision >
          0 &&
        t.getShaderPrecisionFormat(t.FRAGMENT_SHADER, t.HIGH_FLOAT).precision >
          0
      )
        return "highp";
      e = "mediump";
    }
    return "mediump" === e &&
      t.getShaderPrecisionFormat(t.VERTEX_SHADER, t.MEDIUM_FLOAT).precision >
        0 &&
      t.getShaderPrecisionFormat(t.FRAGMENT_SHADER, t.MEDIUM_FLOAT).precision >
        0
      ? "mediump"
      : "lowp";
  }
  let s = void 0 !== n.precision ? n.precision : "highp";
  const o = a(s);
  o !== s && (s = o);
  const l = !0 === n.logarithmicDepthBuffer,
    c = !0 === n.reverseDepthBuffer && e.has("EXT_clip_control"),
    h = t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),
    u = t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS);
  return {
    isWebGL2: !0,
    getMaxAnisotropy: function () {
      if (void 0 !== r) return r;
      if (!0 === e.has("EXT_texture_filter_anisotropic")) {
        const n = e.get("EXT_texture_filter_anisotropic");
        r = t.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
      } else r = 0;
      return r;
    },
    getMaxPrecision: a,
    textureFormatReadable: function (e) {
      return (
        e === nt ||
        i.convert(e) === t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT)
      );
    },
    textureTypeReadable: function (n) {
      const r =
        n === $ &&
        (e.has("EXT_color_buffer_half_float") ||
          e.has("EXT_color_buffer_float"));
      return !(
        n !== q &&
        i.convert(n) !== t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE) &&
        n !== J &&
        !r
      );
    },
    precision: s,
    logarithmicDepthBuffer: l,
    reverseDepthBuffer: c,
    maxTextures: h,
    maxVertexTextures: u,
    maxTextureSize: t.getParameter(t.MAX_TEXTURE_SIZE),
    maxCubemapSize: t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),
    maxAttributes: t.getParameter(t.MAX_VERTEX_ATTRIBS),
    maxVertexUniforms: t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),
    maxVaryings: t.getParameter(t.MAX_VARYING_VECTORS),
    maxFragmentUniforms: t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),
    vertexTextures: u > 0,
    maxSamples: t.getParameter(t.MAX_SAMPLES),
  };
}
function ea(t) {
  const e = this;
  let n = null,
    i = 0,
    r = !1,
    a = !1;
  const s = new ar(),
    o = new de(),
    l = {
      value: null,
      needsUpdate: !1,
    };
  function c(t, n, i, r) {
    const a = null !== t ? t.length : 0;
    let c = null;
    if (0 !== a) {
      if (((c = l.value), !0 !== r || null === c)) {
        const e = i + 4 * a,
          r = n.matrixWorldInverse;
        o.getNormalMatrix(r),
          (null === c || c.length < e) && (c = new Float32Array(e));
        for (let n = 0, l = i; n !== a; ++n, l += 4)
          s.copy(t[n]).applyMatrix4(r, o),
            s.normal.toArray(c, l),
            (c[l + 3] = s.constant);
      }
      (l.value = c), (l.needsUpdate = !0);
    }
    return (e.numPlanes = a), (e.numIntersection = 0), c;
  }
  (this.uniform = l),
    (this.numPlanes = 0),
    (this.numIntersection = 0),
    (this.init = function (t, e) {
      const n = 0 !== t.length || e || 0 !== i || r;
      return (r = e), (i = t.length), n;
    }),
    (this.beginShadows = function () {
      (a = !0), c(null);
    }),
    (this.endShadows = function () {
      a = !1;
    }),
    (this.setGlobalState = function (t, e) {
      n = c(t, e, 0);
    }),
    (this.setState = function (s, o, h) {
      const u = s.clippingPlanes,
        d = s.clipIntersection,
        p = s.clipShadows,
        f = t.get(s);
      if (!r || null === u || 0 === u.length || (a && !p))
        a
          ? c(null)
          : (l.value !== n && ((l.value = n), (l.needsUpdate = i > 0)),
            (e.numPlanes = i),
            (e.numIntersection = 0));
      else {
        const t = a ? 0 : i,
          e = 4 * t;
        let r = f.clippingState || null;
        (l.value = r), (r = c(u, o, e, h));
        for (let i = 0; i !== e; ++i) r[i] = n[i];
        (f.clippingState = r),
          (this.numIntersection = d ? this.numPlanes : 0),
          (this.numPlanes += t);
      }
    });
}
function na(t) {
  let e = new WeakMap();
  function n(t, e) {
    return 303 === e ? (t.mapping = N) : 304 === e && (t.mapping = O), t;
  }
  function i(t) {
    const n = t.target;
    n.removeEventListener("dispose", i);
    const r = e.get(n);
    void 0 !== r && (e.delete(n), r.dispose());
  }
  return {
    get: function (r) {
      if (r && r.isTexture) {
        const a = r.mapping;
        if (303 === a || 304 === a) {
          if (e.has(r)) return n(e.get(r).texture, r.mapping);
          {
            const a = r.image;
            if (a && a.height > 0) {
              const s = new Qi(a.height);
              return (
                s.fromEquirectangularTexture(t, r),
                e.set(r, s),
                r.addEventListener("dispose", i),
                n(s.texture, r.mapping)
              );
            }
            return null;
          }
        }
      }
      return r;
    },
    dispose: function () {
      e = new WeakMap();
    },
  };
}
const ia = [0.125, 0.215, 0.35, 0.446, 0.526, 0.582],
  ra = new Nr(),
  aa = new oi();
let sa = null,
  oa = 0,
  la = 0,
  ca = !1;
const ha = 1.618033988749895,
  ua = 1 / ha,
  da = [
    new Be(-ha, ua, 0),
    new Be(ha, ua, 0),
    new Be(-ua, 0, ha),
    new Be(ua, 0, ha),
    new Be(0, ha, -ua),
    new Be(0, ha, ua),
    new Be(-1, 1, -1),
    new Be(1, 1, -1),
    new Be(-1, 1, 1),
    new Be(1, 1, 1),
  ];
class pa {
  constructor(t) {
    (this._renderer = t),
      (this._pingPongRenderTarget = null),
      (this._lodMax = 0),
      (this._cubeSize = 0),
      (this._lodPlanes = []),
      (this._sizeLods = []),
      (this._sigmas = []),
      (this._blurMaterial = null),
      (this._cubemapMaterial = null),
      (this._equirectMaterial = null),
      this._compileMaterial(this._blurMaterial);
  }
  fromScene(t, e = 0, n = 0.1, i = 100) {
    (sa = this._renderer.getRenderTarget()),
      (oa = this._renderer.getActiveCubeFace()),
      (la = this._renderer.getActiveMipmapLevel()),
      (ca = this._renderer.xr.enabled),
      (this._renderer.xr.enabled = !1),
      this._setSize(256);
    const r = this._allocateTargets();
    return (
      (r.depthBuffer = !0),
      this._sceneToCubeUV(t, n, i, r),
      e > 0 && this._blur(r, 0, 0, e),
      this._applyPMREM(r),
      this._cleanup(r),
      r
    );
  }
  fromEquirectangular(t, e = null) {
    return this._fromTexture(t, e);
  }
  fromCubemap(t, e = null) {
    return this._fromTexture(t, e);
  }
  compileCubemapShader() {
    null === this._cubemapMaterial &&
      ((this._cubemapMaterial = _a()),
      this._compileMaterial(this._cubemapMaterial));
  }
  compileEquirectangularShader() {
    null === this._equirectMaterial &&
      ((this._equirectMaterial = ga()),
      this._compileMaterial(this._equirectMaterial));
  }
  dispose() {
    this._dispose(),
      null !== this._cubemapMaterial && this._cubemapMaterial.dispose(),
      null !== this._equirectMaterial && this._equirectMaterial.dispose();
  }
  _setSize(t) {
    (this._lodMax = Math.floor(Math.log2(t))),
      (this._cubeSize = Math.pow(2, this._lodMax));
  }
  _dispose() {
    null !== this._blurMaterial && this._blurMaterial.dispose(),
      null !== this._pingPongRenderTarget &&
        this._pingPongRenderTarget.dispose();
    for (let t = 0; t < this._lodPlanes.length; t++)
      this._lodPlanes[t].dispose();
  }
  _cleanup(t) {
    this._renderer.setRenderTarget(sa, oa, la),
      (this._renderer.xr.enabled = ca),
      (t.scissorTest = !1),
      ma(t, 0, 0, t.width, t.height);
  }
  _fromTexture(t, e) {
    t.mapping === N || t.mapping === O
      ? this._setSize(
          0 === t.image.length ? 16 : t.image[0].width || t.image[0].image.width
        )
      : this._setSize(t.image.width / 4),
      (sa = this._renderer.getRenderTarget()),
      (oa = this._renderer.getActiveCubeFace()),
      (la = this._renderer.getActiveMipmapLevel()),
      (ca = this._renderer.xr.enabled),
      (this._renderer.xr.enabled = !1);
    const n = e || this._allocateTargets();
    return (
      this._textureToCubeUV(t, n), this._applyPMREM(n), this._cleanup(n), n
    );
  }
  _allocateTargets() {
    const t = 3 * Math.max(this._cubeSize, 112),
      e = 4 * this._cubeSize,
      n = {
        magFilter: W,
        minFilter: W,
        generateMipmaps: !1,
        type: $,
        format: nt,
        colorSpace: Vt,
        depthBuffer: !1,
      },
      i = fa(t, e, n);
    if (
      null === this._pingPongRenderTarget ||
      this._pingPongRenderTarget.width !== t ||
      this._pingPongRenderTarget.height !== e
    ) {
      null !== this._pingPongRenderTarget && this._dispose(),
        (this._pingPongRenderTarget = fa(t, e, n));
      const { _lodMax: i } = this;
      ({
        sizeLods: this._sizeLods,
        lodPlanes: this._lodPlanes,
        sigmas: this._sigmas,
      } = (function (t) {
        const e = [],
          n = [],
          i = [];
        let r = t;
        const a = t - 4 + 1 + ia.length;
        for (let s = 0; a > s; s++) {
          const a = Math.pow(2, r);
          n.push(a);
          let o = 1 / a;
          s > t - 4 ? (o = ia[s - t + 4 - 1]) : 0 === s && (o = 0), i.push(o);
          const l = 1 / (a - 2),
            c = -l,
            h = 1 + l,
            u = [c, c, h, c, h, h, c, c, h, h, c, h],
            d = 6,
            p = 6,
            f = 3,
            m = 2,
            g = 1,
            _ = new Float32Array(f * p * d),
            v = new Float32Array(m * p * d),
            x = new Float32Array(g * p * d);
          for (let t = 0; d > t; t++) {
            const e = ((t % 3) * 2) / 3 - 1,
              n = t > 2 ? 0 : -1,
              i = [
                e,
                n,
                0,
                e + 2 / 3,
                n,
                0,
                e + 2 / 3,
                n + 1,
                0,
                e,
                n,
                0,
                e + 2 / 3,
                n + 1,
                0,
                e,
                n + 1,
                0,
              ];
            _.set(i, f * p * t), v.set(u, m * p * t);
            const r = [t, t, t, t, t, t];
            x.set(r, g * p * t);
          }
          const M = new bi();
          M.setAttribute("position", new fi(_, f)),
            M.setAttribute("uv", new fi(v, m)),
            M.setAttribute("faceIndex", new fi(x, g)),
            e.push(M),
            r > 4 && r--;
        }
        return {
          lodPlanes: e,
          sizeLods: n,
          sigmas: i,
        };
      })(i)),
        (this._blurMaterial = (function (t, e, n) {
          const i = new Float32Array(20),
            r = new Be(0, 1, 0);
          return new Wi({
            name: "SphericalGaussianBlur",
            defines: {
              n: 20,
              CUBEUV_TEXEL_WIDTH: 1 / e,
              CUBEUV_TEXEL_HEIGHT: 1 / n,
              CUBEUV_MAX_MIP: t + ".0",
            },
            uniforms: {
              envMap: {
                value: null,
              },
              samples: {
                value: 1,
              },
              weights: {
                value: i,
              },
              latitudinal: {
                value: !1,
              },
              dTheta: {
                value: 0,
              },
              mipInt: {
                value: 0,
              },
              poleAxis: {
                value: r,
              },
            },
            vertexShader:
              "\n\n\t\tprecision mediump float;\n\t\tprecision mediump int;\n\n\t\tattribute float faceIndex;\n\n\t\tvarying vec3 vOutputDirection;\n\n\t\t// RH coordinate system; PMREM face-indexing convention\n\t\tvec3 getDirection( vec2 uv, float face ) {\n\n\t\t\tuv = 2.0 * uv - 1.0;\n\n\t\t\tvec3 direction = vec3( uv, 1.0 );\n\n\t\t\tif ( face == 0.0 ) {\n\n\t\t\t\tdirection = direction.zyx; // ( 1, v, u ) pos x\n\n\t\t\t} else if ( face == 1.0 ) {\n\n\t\t\t\tdirection = direction.xzy;\n\t\t\t\tdirection.xz *= -1.0; // ( -u, 1, -v ) pos y\n\n\t\t\t} else if ( face == 2.0 ) {\n\n\t\t\t\tdirection.x *= -1.0; // ( -u, v, 1 ) pos z\n\n\t\t\t} else if ( face == 3.0 ) {\n\n\t\t\t\tdirection = direction.zyx;\n\t\t\t\tdirection.xz *= -1.0; // ( -1, v, -u ) neg x\n\n\t\t\t} else if ( face == 4.0 ) {\n\n\t\t\t\tdirection = direction.xzy;\n\t\t\t\tdirection.xy *= -1.0; // ( -u, -1, v ) neg y\n\n\t\t\t} else if ( face == 5.0 ) {\n\n\t\t\t\tdirection.z *= -1.0; // ( u, v, -1 ) neg z\n\n\t\t\t}\n\n\t\t\treturn direction;\n\n\t\t}\n\n\t\tvoid main() {\n\n\t\t\tvOutputDirection = getDirection( uv, faceIndex );\n\t\t\tgl_Position = vec4( position, 1.0 );\n\n\t\t}\n\t",
            fragmentShader:
              "\n\n\t\t\tprecision mediump float;\n\t\t\tprecision mediump int;\n\n\t\t\tvarying vec3 vOutputDirection;\n\n\t\t\tuniform sampler2D envMap;\n\t\t\tuniform int samples;\n\t\t\tuniform float weights[ n ];\n\t\t\tuniform bool latitudinal;\n\t\t\tuniform float dTheta;\n\t\t\tuniform float mipInt;\n\t\t\tuniform vec3 poleAxis;\n\n\t\t\t#define ENVMAP_TYPE_CUBE_UV\n\t\t\t#include <cube_uv_reflection_fragment>\n\n\t\t\tvec3 getSample( float theta, vec3 axis ) {\n\n\t\t\t\tfloat cosTheta = cos( theta );\n\t\t\t\t// Rodrigues' axis-angle rotation\n\t\t\t\tvec3 sampleDirection = vOutputDirection * cosTheta\n\t\t\t\t\t+ cross( axis, vOutputDirection ) * sin( theta )\n\t\t\t\t\t+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );\n\n\t\t\t\treturn bilinearCubeUV( envMap, sampleDirection, mipInt );\n\n\t\t\t}\n\n\t\t\tvoid main() {\n\n\t\t\t\tvec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );\n\n\t\t\t\tif ( all( equal( axis, vec3( 0.0 ) ) ) ) {\n\n\t\t\t\t\taxis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );\n\n\t\t\t\t}\n\n\t\t\t\taxis = normalize( axis );\n\n\t\t\t\tgl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );\n\t\t\t\tgl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );\n\n\t\t\t\tfor ( int i = 1; i < n; i++ ) {\n\n\t\t\t\t\tif ( i >= samples ) {\n\n\t\t\t\t\t\tbreak;\n\n\t\t\t\t\t}\n\n\t\t\t\t\tfloat theta = dTheta * float( i );\n\t\t\t\t\tgl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );\n\t\t\t\t\tgl_FragColor.rgb += weights[ i ] * getSample( theta, axis );\n\n\t\t\t\t}\n\n\t\t\t}\n\t\t",
            blending: 0,
            depthTest: !1,
            depthWrite: !1,
          });
        })(i, t, e));
    }
    return i;
  }
  _compileMaterial(t) {
    const e = new Fi(this._lodPlanes[0], t);
    this._renderer.compile(e, ra);
  }
  _sceneToCubeUV(t, e, n, i) {
    const r = new Ki(90, 1, e, n),
      a = [1, -1, 1, 1, 1, 1],
      s = [1, 1, 1, -1, -1, -1],
      o = this._renderer,
      l = o.autoClear,
      c = o.toneMapping;
    o.getClearColor(aa), (o.toneMapping = 0), (o.autoClear = !1);
    const h = new ui({
        name: "PMREM.Background",
        side: 1,
        depthWrite: !1,
        depthTest: !1,
      }),
      u = new Fi(new zi(), h);
    let d = !1;
    const p = t.background;
    p
      ? p.isColor && (h.color.copy(p), (t.background = null), (d = !0))
      : (h.color.copy(aa), (d = !0));
    for (let f = 0; 6 > f; f++) {
      const e = f % 3;
      0 === e
        ? (r.up.set(0, a[f], 0), r.lookAt(s[f], 0, 0))
        : 1 === e
        ? (r.up.set(0, 0, a[f]), r.lookAt(0, s[f], 0))
        : (r.up.set(0, a[f], 0), r.lookAt(0, 0, s[f]));
      const n = this._cubeSize;
      ma(i, e * n, f > 2 ? n : 0, n, n),
        o.setRenderTarget(i),
        d && o.render(u, r),
        o.render(t, r);
    }
    u.geometry.dispose(),
      u.material.dispose(),
      (o.toneMapping = c),
      (o.autoClear = l),
      (t.background = p);
  }
  _textureToCubeUV(t, e) {
    const n = this._renderer,
      i = t.mapping === N || t.mapping === O;
    i
      ? (null === this._cubemapMaterial && (this._cubemapMaterial = _a()),
        (this._cubemapMaterial.uniforms.flipEnvMap.value =
          !1 === t.isRenderTargetTexture ? -1 : 1))
      : null === this._equirectMaterial && (this._equirectMaterial = ga());
    const r = i ? this._cubemapMaterial : this._equirectMaterial,
      a = new Fi(this._lodPlanes[0], r);
    r.uniforms.envMap.value = t;
    const s = this._cubeSize;
    ma(e, 0, 0, 3 * s, 2 * s), n.setRenderTarget(e), n.render(a, ra);
  }
  _applyPMREM(t) {
    const e = this._renderer,
      n = e.autoClear;
    e.autoClear = !1;
    const i = this._lodPlanes.length;
    for (let r = 1; i > r; r++) {
      const e = Math.sqrt(
          this._sigmas[r] * this._sigmas[r] -
            this._sigmas[r - 1] * this._sigmas[r - 1]
        ),
        n = da[(i - r - 1) % da.length];
      this._blur(t, r - 1, r, e, n);
    }
    e.autoClear = n;
  }
  _blur(t, e, n, i, r) {
    const a = this._pingPongRenderTarget;
    this._halfBlur(t, a, e, n, i, "latitudinal", r),
      this._halfBlur(a, t, n, n, i, "longitudinal", r);
  }
  _halfBlur(t, e, n, i, r, a, s) {
    const o = this._renderer,
      l = this._blurMaterial,
      c = new Fi(this._lodPlanes[i], l),
      h = l.uniforms,
      u = this._sizeLods[n] - 1,
      d = isFinite(r) ? Math.PI / (2 * u) : (2 * Math.PI) / 39,
      p = r / d,
      f = isFinite(r) ? 1 + Math.floor(3 * p) : 20,
      m = [];
    let g = 0;
    for (let x = 0; 20 > x; ++x) {
      const t = x / p,
        e = Math.exp((-t * t) / 2);
      m.push(e), 0 === x ? (g += e) : f > x && (g += 2 * e);
    }
    for (let x = 0; x < m.length; x++) m[x] = m[x] / g;
    (h.envMap.value = t.texture),
      (h.samples.value = f),
      (h.weights.value = m),
      (h.latitudinal.value = "latitudinal" === a),
      s && (h.poleAxis.value = s);
    const { _lodMax: _ } = this;
    (h.dTheta.value = d), (h.mipInt.value = _ - n);
    const v = this._sizeLods[i];
    ma(
      e,
      3 * v * (i > _ - 4 ? i - _ + 4 : 0),
      4 * (this._cubeSize - v),
      3 * v,
      2 * v
    ),
      o.setRenderTarget(e),
      o.render(c, ra);
  }
}
function fa(t, e, n) {
  const i = new Ie(t, e, n);
  return (
    (i.texture.mapping = F),
    (i.texture.name = "PMREM.cubeUv"),
    (i.scissorTest = !0),
    i
  );
}
function ma(t, e, n, i, r) {
  t.viewport.set(e, n, i, r), t.scissor.set(e, n, i, r);
}
function ga() {
  return new Wi({
    name: "EquirectangularToCubeUV",
    uniforms: {
      envMap: {
        value: null,
      },
    },
    vertexShader:
      "\n\n\t\tprecision mediump float;\n\t\tprecision mediump int;\n\n\t\tattribute float faceIndex;\n\n\t\tvarying vec3 vOutputDirection;\n\n\t\t// RH coordinate system; PMREM face-indexing convention\n\t\tvec3 getDirection( vec2 uv, float face ) {\n\n\t\t\tuv = 2.0 * uv - 1.0;\n\n\t\t\tvec3 direction = vec3( uv, 1.0 );\n\n\t\t\tif ( face == 0.0 ) {\n\n\t\t\t\tdirection = direction.zyx; // ( 1, v, u ) pos x\n\n\t\t\t} else if ( face == 1.0 ) {\n\n\t\t\t\tdirection = direction.xzy;\n\t\t\t\tdirection.xz *= -1.0; // ( -u, 1, -v ) pos y\n\n\t\t\t} else if ( face == 2.0 ) {\n\n\t\t\t\tdirection.x *= -1.0; // ( -u, v, 1 ) pos z\n\n\t\t\t} else if ( face == 3.0 ) {\n\n\t\t\t\tdirection = direction.zyx;\n\t\t\t\tdirection.xz *= -1.0; // ( -1, v, -u ) neg x\n\n\t\t\t} else if ( face == 4.0 ) {\n\n\t\t\t\tdirection = direction.xzy;\n\t\t\t\tdirection.xy *= -1.0; // ( -u, -1, v ) neg y\n\n\t\t\t} else if ( face == 5.0 ) {\n\n\t\t\t\tdirection.z *= -1.0; // ( u, v, -1 ) neg z\n\n\t\t\t}\n\n\t\t\treturn direction;\n\n\t\t}\n\n\t\tvoid main() {\n\n\t\t\tvOutputDirection = getDirection( uv, faceIndex );\n\t\t\tgl_Position = vec4( position, 1.0 );\n\n\t\t}\n\t",
    fragmentShader:
      "\n\n\t\t\tprecision mediump float;\n\t\t\tprecision mediump int;\n\n\t\t\tvarying vec3 vOutputDirection;\n\n\t\t\tuniform sampler2D envMap;\n\n\t\t\t#include <common>\n\n\t\t\tvoid main() {\n\n\t\t\t\tvec3 outputDirection = normalize( vOutputDirection );\n\t\t\t\tvec2 uv = equirectUv( outputDirection );\n\n\t\t\t\tgl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );\n\n\t\t\t}\n\t\t",
    blending: 0,
    depthTest: !1,
    depthWrite: !1,
  });
}
function _a() {
  return new Wi({
    name: "CubemapToCubeUV",
    uniforms: {
      envMap: {
        value: null,
      },
      flipEnvMap: {
        value: -1,
      },
    },
    vertexShader:
      "\n\n\t\tprecision mediump float;\n\t\tprecision mediump int;\n\n\t\tattribute float faceIndex;\n\n\t\tvarying vec3 vOutputDirection;\n\n\t\t// RH coordinate system; PMREM face-indexing convention\n\t\tvec3 getDirection( vec2 uv, float face ) {\n\n\t\t\tuv = 2.0 * uv - 1.0;\n\n\t\t\tvec3 direction = vec3( uv, 1.0 );\n\n\t\t\tif ( face == 0.0 ) {\n\n\t\t\t\tdirection = direction.zyx; // ( 1, v, u ) pos x\n\n\t\t\t} else if ( face == 1.0 ) {\n\n\t\t\t\tdirection = direction.xzy;\n\t\t\t\tdirection.xz *= -1.0; // ( -u, 1, -v ) pos y\n\n\t\t\t} else if ( face == 2.0 ) {\n\n\t\t\t\tdirection.x *= -1.0; // ( -u, v, 1 ) pos z\n\n\t\t\t} else if ( face == 3.0 ) {\n\n\t\t\t\tdirection = direction.zyx;\n\t\t\t\tdirection.xz *= -1.0; // ( -1, v, -u ) neg x\n\n\t\t\t} else if ( face == 4.0 ) {\n\n\t\t\t\tdirection = direction.xzy;\n\t\t\t\tdirection.xy *= -1.0; // ( -u, -1, v ) neg y\n\n\t\t\t} else if ( face == 5.0 ) {\n\n\t\t\t\tdirection.z *= -1.0; // ( u, v, -1 ) neg z\n\n\t\t\t}\n\n\t\t\treturn direction;\n\n\t\t}\n\n\t\tvoid main() {\n\n\t\t\tvOutputDirection = getDirection( uv, faceIndex );\n\t\t\tgl_Position = vec4( position, 1.0 );\n\n\t\t}\n\t",
    fragmentShader:
      "\n\n\t\t\tprecision mediump float;\n\t\t\tprecision mediump int;\n\n\t\t\tuniform float flipEnvMap;\n\n\t\t\tvarying vec3 vOutputDirection;\n\n\t\t\tuniform samplerCube envMap;\n\n\t\t\tvoid main() {\n\n\t\t\t\tgl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );\n\n\t\t\t}\n\t\t",
    blending: 0,
    depthTest: !1,
    depthWrite: !1,
  });
}
function va(t) {
  let e = new WeakMap(),
    n = null;
  function i(t) {
    const n = t.target;
    n.removeEventListener("dispose", i);
    const r = e.get(n);
    void 0 !== r && (e.delete(n), r.dispose());
  }
  return {
    get: function (r) {
      if (r && r.isTexture) {
        const a = r.mapping,
          s = 303 === a || 304 === a,
          o = a === N || a === O;
        if (s || o) {
          let a = e.get(r);
          const l = void 0 !== a ? a.texture.pmremVersion : 0;
          if (r.isRenderTargetTexture && r.pmremVersion !== l)
            return (
              null === n && (n = new pa(t)),
              (a = s ? n.fromEquirectangular(r, a) : n.fromCubemap(r, a)),
              (a.texture.pmremVersion = r.pmremVersion),
              e.set(r, a),
              a.texture
            );
          if (void 0 !== a) return a.texture;
          {
            const l = r.image;
            return (s && l && l.height > 0) ||
              (o &&
                l &&
                (function (t) {
                  let e = 0;
                  for (let n = 0; 6 > n; n++) void 0 !== t[n] && e++;
                  return 6 === e;
                })(l))
              ? (null === n && (n = new pa(t)),
                (a = s ? n.fromEquirectangular(r) : n.fromCubemap(r)),
                (a.texture.pmremVersion = r.pmremVersion),
                e.set(r, a),
                r.addEventListener("dispose", i),
                a.texture)
              : null;
          }
        }
      }
      return r;
    },
    dispose: function () {
      (e = new WeakMap()), null !== n && (n.dispose(), (n = null));
    },
  };
}
function xa(t) {
  const e = {};
  function n(n) {
    if (void 0 !== e[n]) return e[n];
    let i;
    switch (n) {
      case "WEBGL_depth_texture":
        i =
          t.getExtension("WEBGL_depth_texture") ||
          t.getExtension("MOZ_WEBGL_depth_texture") ||
          t.getExtension("WEBKIT_WEBGL_depth_texture");
        break;
      case "EXT_texture_filter_anisotropic":
        i =
          t.getExtension("EXT_texture_filter_anisotropic") ||
          t.getExtension("MOZ_EXT_texture_filter_anisotropic") ||
          t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
        break;
      case "WEBGL_compressed_texture_s3tc":
        i =
          t.getExtension("WEBGL_compressed_texture_s3tc") ||
          t.getExtension("MOZ_WEBGL_compressed_texture_s3tc") ||
          t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");
        break;
      case "WEBGL_compressed_texture_pvrtc":
        i =
          t.getExtension("WEBGL_compressed_texture_pvrtc") ||
          t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");
        break;
      default:
        i = t.getExtension(n);
    }
    return (e[n] = i), i;
  }
  return {
    has: function (t) {
      return null !== n(t);
    },
    init: function () {
      n("EXT_color_buffer_float"),
        n("WEBGL_clip_cull_distance"),
        n("OES_texture_float_linear"),
        n("EXT_color_buffer_half_float"),
        n("WEBGL_multisampled_render_to_texture"),
        n("WEBGL_render_shared_exponent");
    },
    get: function (t) {
      const e = n(t);
      return (
        null === e &&
          ve("THREE.WebGLRenderer: " + t + " extension not supported."),
        e
      );
    },
  };
}
function Ma(t, e, n, i) {
  const r = {},
    a = new WeakMap();
  function s(t) {
    const o = t.target;
    null !== o.index && e.remove(o.index);
    for (const n in o.attributes) e.remove(o.attributes[n]);
    o.removeEventListener("dispose", s), delete r[o.id];
    const l = a.get(o);
    l && (e.remove(l), a.delete(o)),
      i.releaseStatesOfGeometry(o),
      !0 === o.isInstancedBufferGeometry && delete o._maxInstanceCount,
      n.memory.geometries--;
  }
  function o(t) {
    const n = [],
      i = t.index,
      r = t.attributes.position;
    let s = 0;
    if (null !== i) {
      const t = i.array;
      s = i.version;
      for (let e = 0, i = t.length; i > e; e += 3) {
        const i = t[e + 0],
          r = t[e + 1],
          a = t[e + 2];
        n.push(i, r, r, a, a, i);
      }
    } else {
      if (void 0 === r) return;
      {
        const t = r.array;
        s = r.version;
        for (let e = 0, i = t.length / 3 - 1; i > e; e += 3) {
          const t = e + 0,
            i = e + 1,
            r = e + 2;
          n.push(t, i, i, r, r, t);
        }
      }
    }
    const o = new (fe(n) ? gi : mi)(n, 1);
    o.version = s;
    const l = a.get(t);
    l && e.remove(l), a.set(t, o);
  }
  return {
    get: function (t, e) {
      return (
        !0 === r[e.id] ||
          (e.addEventListener("dispose", s),
          (r[e.id] = !0),
          n.memory.geometries++),
        e
      );
    },
    update: function (n) {
      const i = n.attributes;
      for (const r in i) e.update(i[r], t.ARRAY_BUFFER);
    },
    getWireframeAttribute: function (t) {
      const e = a.get(t);
      if (e) {
        const n = t.index;
        null !== n && e.version < n.version && o(t);
      } else o(t);
      return a.get(t);
    },
  };
}
function Sa(t, e, n) {
  let i, r, a;
  function s(e, s, o) {
    0 !== o && (t.drawElementsInstanced(i, s, r, e * a, o), n.update(s, i, o));
  }
  (this.setMode = function (t) {
    i = t;
  }),
    (this.setIndex = function (t) {
      (r = t.type), (a = t.bytesPerElement);
    }),
    (this.render = function (e, s) {
      t.drawElements(i, s, r, e * a), n.update(s, i, 1);
    }),
    (this.renderInstances = s),
    (this.renderMultiDraw = function (t, a, s) {
      if (0 === s) return;
      e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i, a, 0, r, t, 0, s);
      let o = 0;
      for (let e = 0; s > e; e++) o += a[e];
      n.update(o, i, 1);
    }),
    (this.renderMultiDrawInstances = function (t, o, l, c) {
      if (0 === l) return;
      const h = e.get("WEBGL_multi_draw");
      if (null === h)
        for (let e = 0; e < t.length; e++) s(t[e] / a, o[e], c[e]);
      else {
        h.multiDrawElementsInstancedWEBGL(i, o, 0, r, t, 0, c, 0, l);
        let e = 0;
        for (let t = 0; l > t; t++) e += o[t] * c[t];
        n.update(e, i, 1);
      }
    });
}
function ya(t) {
  const e = {
    frame: 0,
    calls: 0,
    triangles: 0,
    points: 0,
    lines: 0,
  };
  return {
    memory: {
      geometries: 0,
      textures: 0,
    },
    render: e,
    programs: null,
    autoReset: !0,
    reset: function () {
      (e.calls = 0), (e.triangles = 0), (e.points = 0), (e.lines = 0);
    },
    update: function (n, i, r) {
      switch ((e.calls++, i)) {
        case t.TRIANGLES:
          e.triangles += r * (n / 3);
          break;
        case t.LINES:
          e.lines += r * (n / 2);
          break;
        case t.LINE_STRIP:
          e.lines += r * (n - 1);
          break;
        case t.LINE_LOOP:
          e.lines += r * n;
          break;
        case t.POINTS:
          e.points += r * n;
      }
    },
  };
}
function Ea(t, e, n) {
  const i = new WeakMap(),
    r = new Ue();
  return {
    update: function (a, s, o) {
      const l = a.morphTargetInfluences,
        c =
          s.morphAttributes.position ||
          s.morphAttributes.normal ||
          s.morphAttributes.color,
        h = void 0 !== c ? c.length : 0;
      let u = i.get(s);
      if (void 0 === u || u.count !== h) {
        let t = function () {
          _.dispose(), i.delete(s), s.removeEventListener("dispose", t);
        };
        void 0 !== u && u.texture.dispose();
        const n = void 0 !== s.morphAttributes.position,
          a = void 0 !== s.morphAttributes.normal,
          o = void 0 !== s.morphAttributes.color,
          l = s.morphAttributes.position || [],
          c = s.morphAttributes.normal || [],
          d = s.morphAttributes.color || [];
        let p = 0;
        !0 === n && (p = 1), !0 === a && (p = 2), !0 === o && (p = 3);
        let f = s.attributes.position.count * p,
          m = 1;
        f > e.maxTextureSize &&
          ((m = Math.ceil(f / e.maxTextureSize)), (f = e.maxTextureSize));
        const g = new Float32Array(f * m * 4 * h),
          _ = new Ne(g, f, m, h);
        (_.type = J), (_.needsUpdate = !0);
        const v = 4 * p;
        for (let e = 0; h > e; e++) {
          const t = l[e],
            i = c[e],
            s = d[e],
            h = f * m * 4 * e;
          for (let e = 0; e < t.count; e++) {
            const l = e * v;
            !0 === n &&
              (r.fromBufferAttribute(t, e),
              (g[h + l + 0] = r.x),
              (g[h + l + 1] = r.y),
              (g[h + l + 2] = r.z),
              (g[h + l + 3] = 0)),
              !0 === a &&
                (r.fromBufferAttribute(i, e),
                (g[h + l + 4] = r.x),
                (g[h + l + 5] = r.y),
                (g[h + l + 6] = r.z),
                (g[h + l + 7] = 0)),
              !0 === o &&
                (r.fromBufferAttribute(s, e),
                (g[h + l + 8] = r.x),
                (g[h + l + 9] = r.y),
                (g[h + l + 10] = r.z),
                (g[h + l + 11] = 4 === s.itemSize ? r.w : 1));
          }
        }
        (u = {
          count: h,
          texture: _,
          size: new ue(f, m),
        }),
          i.set(s, u),
          s.addEventListener("dispose", t);
      }
      if (!0 === a.isInstancedMesh && null !== a.morphTexture)
        o.getUniforms().setValue(t, "morphTexture", a.morphTexture, n);
      else {
        let e = 0;
        for (let t = 0; t < l.length; t++) e += l[t];
        const n = s.morphTargetsRelative ? 1 : 1 - e;
        o.getUniforms().setValue(t, "morphTargetBaseInfluence", n),
          o.getUniforms().setValue(t, "morphTargetInfluences", l);
      }
      o.getUniforms().setValue(t, "morphTargetsTexture", u.texture, n),
        o.getUniforms().setValue(t, "morphTargetsTextureSize", u.size);
    },
  };
}
function Ta(t, e, n, i) {
  let r = new WeakMap();
  function a(t) {
    const e = t.target;
    e.removeEventListener("dispose", a),
      n.remove(e.instanceMatrix),
      null !== e.instanceColor && n.remove(e.instanceColor);
  }
  return {
    update: function (s) {
      const o = i.render.frame,
        l = s.geometry,
        c = e.get(s, l);
      if (
        (r.get(c) !== o && (e.update(c), r.set(c, o)),
        s.isInstancedMesh &&
          (!1 === s.hasEventListener("dispose", a) &&
            s.addEventListener("dispose", a),
          r.get(s) !== o &&
            (n.update(s.instanceMatrix, t.ARRAY_BUFFER),
            null !== s.instanceColor &&
              n.update(s.instanceColor, t.ARRAY_BUFFER),
            r.set(s, o))),
        s.isSkinnedMesh)
      ) {
        const t = s.skeleton;
        r.get(t) !== o && (t.update(), r.set(t, o));
      }
      return c;
    },
    dispose: function () {
      r = new WeakMap();
    },
  };
}
const ba = new Le(),
  Aa = new vr(1, 1),
  wa = new Ne(),
  Ra = new Oe(),
  Ca = new $i(),
  Pa = [],
  La = [],
  Ua = new Float32Array(16),
  Da = new Float32Array(9),
  Ia = new Float32Array(4);
function Na(t, e, n) {
  const i = t[0];
  if (0 >= i || i > 0) return t;
  const r = e * n;
  let a = Pa[r];
  if ((void 0 === a && ((a = new Float32Array(r)), (Pa[r] = a)), 0 !== e)) {
    i.toArray(a, 0);
    for (let i = 1, r = 0; i !== e; ++i) (r += n), t[i].toArray(a, r);
  }
  return a;
}
function Oa(t, e) {
  if (t.length !== e.length) return !1;
  for (let n = 0, i = t.length; i > n; n++) if (t[n] !== e[n]) return !1;
  return !0;
}
function Fa(t, e) {
  for (let n = 0, i = e.length; i > n; n++) t[n] = e[n];
}
function Ba(t, e) {
  let n = La[e];
  void 0 === n && ((n = new Int32Array(e)), (La[e] = n));
  for (let i = 0; i !== e; ++i) n[i] = t.allocateTextureUnit();
  return n;
}
function za(t, e) {
  const n = this.cache;
  n[0] !== e && (t.uniform1f(this.addr, e), (n[0] = e));
}
function Ha(t, e) {
  const n = this.cache;
  if (void 0 !== e.x)
    (n[0] === e.x && n[1] === e.y) ||
      (t.uniform2f(this.addr, e.x, e.y), (n[0] = e.x), (n[1] = e.y));
  else {
    if (Oa(n, e)) return;
    t.uniform2fv(this.addr, e), Fa(n, e);
  }
}
function Va(t, e) {
  const n = this.cache;
  if (void 0 !== e.x)
    (n[0] === e.x && n[1] === e.y && n[2] === e.z) ||
      (t.uniform3f(this.addr, e.x, e.y, e.z),
      (n[0] = e.x),
      (n[1] = e.y),
      (n[2] = e.z));
  else if (void 0 !== e.r)
    (n[0] === e.r && n[1] === e.g && n[2] === e.b) ||
      (t.uniform3f(this.addr, e.r, e.g, e.b),
      (n[0] = e.r),
      (n[1] = e.g),
      (n[2] = e.b));
  else {
    if (Oa(n, e)) return;
    t.uniform3fv(this.addr, e), Fa(n, e);
  }
}
function Ga(t, e) {
  const n = this.cache;
  if (void 0 !== e.x)
    (n[0] === e.x && n[1] === e.y && n[2] === e.z && n[3] === e.w) ||
      (t.uniform4f(this.addr, e.x, e.y, e.z, e.w),
      (n[0] = e.x),
      (n[1] = e.y),
      (n[2] = e.z),
      (n[3] = e.w));
  else {
    if (Oa(n, e)) return;
    t.uniform4fv(this.addr, e), Fa(n, e);
  }
}
function ka(t, e) {
  const n = this.cache,
    i = e.elements;
  if (void 0 === i) {
    if (Oa(n, e)) return;
    t.uniformMatrix2fv(this.addr, !1, e), Fa(n, e);
  } else {
    if (Oa(n, i)) return;
    Ia.set(i), t.uniformMatrix2fv(this.addr, !1, Ia), Fa(n, i);
  }
}
function Wa(t, e) {
  const n = this.cache,
    i = e.elements;
  if (void 0 === i) {
    if (Oa(n, e)) return;
    t.uniformMatrix3fv(this.addr, !1, e), Fa(n, e);
  } else {
    if (Oa(n, i)) return;
    Da.set(i), t.uniformMatrix3fv(this.addr, !1, Da), Fa(n, i);
  }
}
function Xa(t, e) {
  const n = this.cache,
    i = e.elements;
  if (void 0 === i) {
    if (Oa(n, e)) return;
    t.uniformMatrix4fv(this.addr, !1, e), Fa(n, e);
  } else {
    if (Oa(n, i)) return;
    Ua.set(i), t.uniformMatrix4fv(this.addr, !1, Ua), Fa(n, i);
  }
}
function ja(t, e) {
  const n = this.cache;
  n[0] !== e && (t.uniform1i(this.addr, e), (n[0] = e));
}
function qa(t, e) {
  const n = this.cache;
  if (void 0 !== e.x)
    (n[0] === e.x && n[1] === e.y) ||
      (t.uniform2i(this.addr, e.x, e.y), (n[0] = e.x), (n[1] = e.y));
  else {
    if (Oa(n, e)) return;
    t.uniform2iv(this.addr, e), Fa(n, e);
  }
}
function Ya(t, e) {
  const n = this.cache;
  if (void 0 !== e.x)
    (n[0] === e.x && n[1] === e.y && n[2] === e.z) ||
      (t.uniform3i(this.addr, e.x, e.y, e.z),
      (n[0] = e.x),
      (n[1] = e.y),
      (n[2] = e.z));
  else {
    if (Oa(n, e)) return;
    t.uniform3iv(this.addr, e), Fa(n, e);
  }
}
function Ka(t, e) {
  const n = this.cache;
  if (void 0 !== e.x)
    (n[0] === e.x && n[1] === e.y && n[2] === e.z && n[3] === e.w) ||
      (t.uniform4i(this.addr, e.x, e.y, e.z, e.w),
      (n[0] = e.x),
      (n[1] = e.y),
      (n[2] = e.z),
      (n[3] = e.w));
  else {
    if (Oa(n, e)) return;
    t.uniform4iv(this.addr, e), Fa(n, e);
  }
}
function Za(t, e) {
  const n = this.cache;
  n[0] !== e && (t.uniform1ui(this.addr, e), (n[0] = e));
}
function Ja(t, e) {
  const n = this.cache;
  if (void 0 !== e.x)
    (n[0] === e.x && n[1] === e.y) ||
      (t.uniform2ui(this.addr, e.x, e.y), (n[0] = e.x), (n[1] = e.y));
  else {
    if (Oa(n, e)) return;
    t.uniform2uiv(this.addr, e), Fa(n, e);
  }
}
function $a(t, e) {
  const n = this.cache;
  if (void 0 !== e.x)
    (n[0] === e.x && n[1] === e.y && n[2] === e.z) ||
      (t.uniform3ui(this.addr, e.x, e.y, e.z),
      (n[0] = e.x),
      (n[1] = e.y),
      (n[2] = e.z));
  else {
    if (Oa(n, e)) return;
    t.uniform3uiv(this.addr, e), Fa(n, e);
  }
}
function Qa(t, e) {
  const n = this.cache;
  if (void 0 !== e.x)
    (n[0] === e.x && n[1] === e.y && n[2] === e.z && n[3] === e.w) ||
      (t.uniform4ui(this.addr, e.x, e.y, e.z, e.w),
      (n[0] = e.x),
      (n[1] = e.y),
      (n[2] = e.z),
      (n[3] = e.w));
  else {
    if (Oa(n, e)) return;
    t.uniform4uiv(this.addr, e), Fa(n, e);
  }
}
function ts(t, e, n) {
  const i = this.cache,
    r = n.allocateTextureUnit();
  let a;
  i[0] !== r && (t.uniform1i(this.addr, r), (i[0] = r)),
    this.type === t.SAMPLER_2D_SHADOW
      ? ((Aa.compareFunction = 515), (a = Aa))
      : (a = ba),
    n.setTexture2D(e || a, r);
}
function es(t, e, n) {
  const i = this.cache,
    r = n.allocateTextureUnit();
  i[0] !== r && (t.uniform1i(this.addr, r), (i[0] = r)),
    n.setTexture3D(e || Ra, r);
}
function ns(t, e, n) {
  const i = this.cache,
    r = n.allocateTextureUnit();
  i[0] !== r && (t.uniform1i(this.addr, r), (i[0] = r)),
    n.setTextureCube(e || Ca, r);
}
function is(t, e, n) {
  const i = this.cache,
    r = n.allocateTextureUnit();
  i[0] !== r && (t.uniform1i(this.addr, r), (i[0] = r)),
    n.setTexture2DArray(e || wa, r);
}
function rs(t, e) {
  t.uniform1fv(this.addr, e);
}
function as(t, e) {
  const n = Na(e, this.size, 2);
  t.uniform2fv(this.addr, n);
}
function ss(t, e) {
  const n = Na(e, this.size, 3);
  t.uniform3fv(this.addr, n);
}
function os(t, e) {
  const n = Na(e, this.size, 4);
  t.uniform4fv(this.addr, n);
}
function ls(t, e) {
  const n = Na(e, this.size, 4);
  t.uniformMatrix2fv(this.addr, !1, n);
}
function cs(t, e) {
  const n = Na(e, this.size, 9);
  t.uniformMatrix3fv(this.addr, !1, n);
}
function hs(t, e) {
  const n = Na(e, this.size, 16);
  t.uniformMatrix4fv(this.addr, !1, n);
}
function us(t, e) {
  t.uniform1iv(this.addr, e);
}
function ds(t, e) {
  t.uniform2iv(this.addr, e);
}
function ps(t, e) {
  t.uniform3iv(this.addr, e);
}
function fs(t, e) {
  t.uniform4iv(this.addr, e);
}
function ms(t, e) {
  t.uniform1uiv(this.addr, e);
}
function gs(t, e) {
  t.uniform2uiv(this.addr, e);
}
function _s(t, e) {
  t.uniform3uiv(this.addr, e);
}
function vs(t, e) {
  t.uniform4uiv(this.addr, e);
}
function xs(t, e, n) {
  const i = this.cache,
    r = e.length,
    a = Ba(n, r);
  Oa(i, a) || (t.uniform1iv(this.addr, a), Fa(i, a));
  for (let s = 0; s !== r; ++s) n.setTexture2D(e[s] || ba, a[s]);
}
function Ms(t, e, n) {
  const i = this.cache,
    r = e.length,
    a = Ba(n, r);
  Oa(i, a) || (t.uniform1iv(this.addr, a), Fa(i, a));
  for (let s = 0; s !== r; ++s) n.setTexture3D(e[s] || Ra, a[s]);
}
function Ss(t, e, n) {
  const i = this.cache,
    r = e.length,
    a = Ba(n, r);
  Oa(i, a) || (t.uniform1iv(this.addr, a), Fa(i, a));
  for (let s = 0; s !== r; ++s) n.setTextureCube(e[s] || Ca, a[s]);
}
function ys(t, e, n) {
  const i = this.cache,
    r = e.length,
    a = Ba(n, r);
  Oa(i, a) || (t.uniform1iv(this.addr, a), Fa(i, a));
  for (let s = 0; s !== r; ++s) n.setTexture2DArray(e[s] || wa, a[s]);
}
class Es {
  constructor(t, e, n) {
    (this.id = t),
      (this.addr = n),
      (this.cache = []),
      (this.type = e.type),
      (this.setValue = (function (t) {
        switch (t) {
          case 5126:
            return za;
          case 35664:
            return Ha;
          case 35665:
            return Va;
          case 35666:
            return Ga;
          case 35674:
            return ka;
          case 35675:
            return Wa;
          case 35676:
            return Xa;
          case 5124:
          case 35670:
            return ja;
          case 35667:
          case 35671:
            return qa;
          case 35668:
          case 35672:
            return Ya;
          case 35669:
          case 35673:
            return Ka;
          case 5125:
            return Za;
          case 36294:
            return Ja;
          case 36295:
            return $a;
          case 36296:
            return Qa;
          case 35678:
          case 36198:
          case 36298:
          case 36306:
          case 35682:
            return ts;
          case 35679:
          case 36299:
          case 36307:
            return es;
          case 35680:
          case 36300:
          case 36308:
          case 36293:
            return ns;
          case 36289:
          case 36303:
          case 36311:
          case 36292:
            return is;
        }
      })(e.type));
  }
}
class Ts {
  constructor(t, e, n) {
    (this.id = t),
      (this.addr = n),
      (this.cache = []),
      (this.type = e.type),
      (this.size = e.size),
      (this.setValue = (function (t) {
        switch (t) {
          case 5126:
            return rs;
          case 35664:
            return as;
          case 35665:
            return ss;
          case 35666:
            return os;
          case 35674:
            return ls;
          case 35675:
            return cs;
          case 35676:
            return hs;
          case 5124:
          case 35670:
            return us;
          case 35667:
          case 35671:
            return ds;
          case 35668:
          case 35672:
            return ps;
          case 35669:
          case 35673:
            return fs;
          case 5125:
            return ms;
          case 36294:
            return gs;
          case 36295:
            return _s;
          case 36296:
            return vs;
          case 35678:
          case 36198:
          case 36298:
          case 36306:
          case 35682:
            return xs;
          case 35679:
          case 36299:
          case 36307:
            return Ms;
          case 35680:
          case 36300:
          case 36308:
          case 36293:
            return Ss;
          case 36289:
          case 36303:
          case 36311:
          case 36292:
            return ys;
        }
      })(e.type));
  }
}
class bs {
  constructor(t) {
    (this.id = t), (this.seq = []), (this.map = {});
  }
  setValue(t, e, n) {
    const i = this.seq;
    for (let r = 0, a = i.length; r !== a; ++r) {
      const a = i[r];
      a.setValue(t, e[a.id], n);
    }
  }
}
const As = /(\w+)(\])?(\[|\.)?/g;
function ws(t, e) {
  t.seq.push(e), (t.map[e.id] = e);
}
function Rs(t, e, n) {
  const i = t.name,
    r = i.length;
  for (As.lastIndex = 0; ; ) {
    const a = As.exec(i),
      s = As.lastIndex;
    let o = a[1];
    const l = "]" === a[2],
      c = a[3];
    if ((l && (o |= 0), void 0 === c || ("[" === c && s + 2 === r))) {
      ws(n, void 0 === c ? new Es(o, t, e) : new Ts(o, t, e));
      break;
    }
    {
      let t = n.map[o];
      void 0 === t && ((t = new bs(o)), ws(n, t)), (n = t);
    }
  }
}
class Cs {
  constructor(t, e) {
    (this.seq = []), (this.map = {});
    const n = t.getProgramParameter(e, t.ACTIVE_UNIFORMS);
    for (let i = 0; n > i; ++i) {
      const n = t.getActiveUniform(e, i);
      Rs(n, t.getUniformLocation(e, n.name), this);
    }
  }
  setValue(t, e, n, i) {
    const r = this.map[e];
    void 0 !== r && r.setValue(t, n, i);
  }
  setOptional(t, e, n) {
    const i = e[n];
    void 0 !== i && this.setValue(t, n, i);
  }
  static upload(t, e, n, i) {
    for (let r = 0, a = e.length; r !== a; ++r) {
      const a = e[r],
        s = n[a.id];
      !1 !== s.needsUpdate && a.setValue(t, s.value, i);
    }
  }
  static seqWithValue(t, e) {
    const n = [];
    for (let i = 0, r = t.length; i !== r; ++i) {
      const r = t[i];
      r.id in e && n.push(r);
    }
    return n;
  }
}
function Ps(t, e, n) {
  const i = t.createShader(e);
  return t.shaderSource(i, n), t.compileShader(i), i;
}
let Ls = 0;
const Us = new de();
function Ds(t, e, n) {
  const i = t.getShaderParameter(e, t.COMPILE_STATUS),
    r = t.getShaderInfoLog(e).trim();
  if (i && "" === r) return "";
  const a = /ERROR: 0:(\d+)/.exec(r);
  if (a) {
    const i = parseInt(a[1]);
    return (
      n.toUpperCase() +
      "\n\n" +
      r +
      "\n\n" +
      (function (t, e) {
        const n = t.split("\n"),
          i = [],
          r = Math.max(e - 6, 0),
          a = Math.min(e + 6, n.length);
        for (let s = r; a > s; s++) {
          const t = s + 1;
          i.push(`${t === e ? ">" : " "} ${t}: ${n[s]}`);
        }
        return i.join("\n");
      })(t.getShaderSource(e), i)
    );
  }
  return r;
}
function Is(t, e) {
  const n = (function (t) {
    ye._getMatrix(Us, ye.workingColorSpace, t);
    const e = `mat3( ${Us.elements.map((t) => t.toFixed(4))} )`;
    switch (ye.getTransfer(t)) {
      case Gt:
        return [e, "LinearTransferOETF"];
      case kt:
        return [e, "sRGBTransferOETF"];
      default:
        return [e, "LinearTransferOETF"];
    }
  })(e);
  return [
    `vec4 ${t}( vec4 value ) {`,
    `\treturn ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,
    "}",
  ].join("\n");
}
function Ns(t, e) {
  let n;
  switch (e) {
    case 1:
    default:
      n = "Linear";
      break;
    case 2:
      n = "Reinhard";
      break;
    case 3:
      n = "Cineon";
      break;
    case 4:
      n = "ACESFilmic";
      break;
    case 6:
      n = "AgX";
      break;
    case 7:
      n = "Neutral";
      break;
    case 5:
      n = "Custom";
  }
  return (
    "vec3 " + t + "( vec3 color ) { return " + n + "ToneMapping( color ); }"
  );
}
const Os = new Be();
function Fs(t) {
  return "" !== t;
}
function Bs(t, e) {
  const n =
    e.numSpotLightShadows + e.numSpotLightMaps - e.numSpotLightShadowsWithMaps;
  return t
    .replace(/NUM_DIR_LIGHTS/g, e.numDirLights)
    .replace(/NUM_SPOT_LIGHTS/g, e.numSpotLights)
    .replace(/NUM_SPOT_LIGHT_MAPS/g, e.numSpotLightMaps)
    .replace(/NUM_SPOT_LIGHT_COORDS/g, n)
    .replace(/NUM_RECT_AREA_LIGHTS/g, e.numRectAreaLights)
    .replace(/NUM_POINT_LIGHTS/g, e.numPointLights)
    .replace(/NUM_HEMI_LIGHTS/g, e.numHemiLights)
    .replace(/NUM_DIR_LIGHT_SHADOWS/g, e.numDirLightShadows)
    .replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g, e.numSpotLightShadowsWithMaps)
    .replace(/NUM_SPOT_LIGHT_SHADOWS/g, e.numSpotLightShadows)
    .replace(/NUM_POINT_LIGHT_SHADOWS/g, e.numPointLightShadows);
}
function zs(t, e) {
  return t
    .replace(/NUM_CLIPPING_PLANES/g, e.numClippingPlanes)
    .replace(
      /UNION_CLIPPING_PLANES/g,
      e.numClippingPlanes - e.numClipIntersection
    );
}
const Hs = /^[ \t]*#include +<([\w\d./]+)>/gm;
function Vs(t) {
  return t.replace(Hs, ks);
}
const Gs = new Map();
function ks(t, e) {
  let n = Xr[e];
  if (void 0 === n) {
    const t = Gs.get(e);
    if (void 0 === t) throw Error("Can not resolve #include <" + e + ">");
    n = Xr[t];
  }
  return Vs(n);
}
const Ws =
  /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;
function Xs(t) {
  return t.replace(Ws, js);
}
function js(t, e, n, i) {
  let r = "";
  for (let a = parseInt(e); parseInt(n) > a; a++)
    r += i
      .replace(/\[\s*i\s*\]/g, "[ " + a + " ]")
      .replace(/UNROLLED_LOOP_INDEX/g, a);
  return r;
}
function qs(t) {
  let e = `precision ${t.precision} float;\n\tprecision ${t.precision} int;\n\tprecision ${t.precision} sampler2D;\n\tprecision ${t.precision} samplerCube;\n\tprecision ${t.precision} sampler3D;\n\tprecision ${t.precision} sampler2DArray;\n\tprecision ${t.precision} sampler2DShadow;\n\tprecision ${t.precision} samplerCubeShadow;\n\tprecision ${t.precision} sampler2DArrayShadow;\n\tprecision ${t.precision} isampler2D;\n\tprecision ${t.precision} isampler3D;\n\tprecision ${t.precision} isamplerCube;\n\tprecision ${t.precision} isampler2DArray;\n\tprecision ${t.precision} usampler2D;\n\tprecision ${t.precision} usampler3D;\n\tprecision ${t.precision} usamplerCube;\n\tprecision ${t.precision} usampler2DArray;\n\t`;
  return (
    "highp" === t.precision
      ? (e += "\n#define HIGH_PRECISION")
      : "mediump" === t.precision
      ? (e += "\n#define MEDIUM_PRECISION")
      : "lowp" === t.precision && (e += "\n#define LOW_PRECISION"),
    e
  );
}
function Ys(t, e, n, i) {
  const r = t.getContext(),
    a = n.defines;
  let s = n.vertexShader,
    o = n.fragmentShader;
  const l = (function (t) {
      let e = "SHADOWMAP_TYPE_BASIC";
      return (
        1 === t.shadowMapType
          ? (e = "SHADOWMAP_TYPE_PCF")
          : 2 === t.shadowMapType
          ? (e = "SHADOWMAP_TYPE_PCF_SOFT")
          : 3 === t.shadowMapType && (e = "SHADOWMAP_TYPE_VSM"),
        e
      );
    })(n),
    c = (function (t) {
      let e = "ENVMAP_TYPE_CUBE";
      if (t.envMap)
        switch (t.envMapMode) {
          case N:
          case O:
            e = "ENVMAP_TYPE_CUBE";
            break;
          case F:
            e = "ENVMAP_TYPE_CUBE_UV";
        }
      return e;
    })(n),
    h = (function (t) {
      let e = "ENVMAP_MODE_REFLECTION";
      return (
        t.envMap && t.envMapMode === O && (e = "ENVMAP_MODE_REFRACTION"), e
      );
    })(n),
    u = (function (t) {
      let e = "ENVMAP_BLENDING_NONE";
      if (t.envMap)
        switch (t.combine) {
          case 0:
            e = "ENVMAP_BLENDING_MULTIPLY";
            break;
          case 1:
            e = "ENVMAP_BLENDING_MIX";
            break;
          case 2:
            e = "ENVMAP_BLENDING_ADD";
        }
      return e;
    })(n),
    d = (function (t) {
      const e = t.envMapCubeUVHeight;
      if (null === e) return null;
      const n = Math.log2(e) - 2,
        i = 1 / e;
      return {
        texelWidth: 1 / (3 * Math.max(Math.pow(2, n), 112)),
        texelHeight: i,
        maxMip: n,
      };
    })(n),
    p = (function (t) {
      return [
        t.extensionClipCullDistance
          ? "#extension GL_ANGLE_clip_cull_distance : require"
          : "",
        t.extensionMultiDraw ? "#extension GL_ANGLE_multi_draw : require" : "",
      ]
        .filter(Fs)
        .join("\n");
    })(n),
    f = (function (t) {
      const e = [];
      for (const n in t) {
        const i = t[n];
        !1 !== i && e.push("#define " + n + " " + i);
      }
      return e.join("\n");
    })(a),
    m = r.createProgram();
  let g,
    _,
    v = n.glslVersion ? "#version " + n.glslVersion + "\n" : "";
  n.isRawShaderMaterial
    ? ((g = [
        "#define SHADER_TYPE " + n.shaderType,
        "#define SHADER_NAME " + n.shaderName,
        f,
      ]
        .filter(Fs)
        .join("\n")),
      g.length > 0 && (g += "\n"),
      (_ = [
        "#define SHADER_TYPE " + n.shaderType,
        "#define SHADER_NAME " + n.shaderName,
        f,
      ]
        .filter(Fs)
        .join("\n")),
      _.length > 0 && (_ += "\n"))
    : ((g = [
        qs(n),
        "#define SHADER_TYPE " + n.shaderType,
        "#define SHADER_NAME " + n.shaderName,
        f,
        n.extensionClipCullDistance ? "#define USE_CLIP_DISTANCE" : "",
        n.batching ? "#define USE_BATCHING" : "",
        n.batchingColor ? "#define USE_BATCHING_COLOR" : "",
        n.instancing ? "#define USE_INSTANCING" : "",
        n.instancingColor ? "#define USE_INSTANCING_COLOR" : "",
        n.instancingMorph ? "#define USE_INSTANCING_MORPH" : "",
        n.useFog && n.fog ? "#define USE_FOG" : "",
        n.useFog && n.fogExp2 ? "#define FOG_EXP2" : "",
        n.map ? "#define USE_MAP" : "",
        n.envMap ? "#define USE_ENVMAP" : "",
        n.envMap ? "#define " + h : "",
        n.lightMap ? "#define USE_LIGHTMAP" : "",
        n.aoMap ? "#define USE_AOMAP" : "",
        n.bumpMap ? "#define USE_BUMPMAP" : "",
        n.normalMap ? "#define USE_NORMALMAP" : "",
        n.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "",
        n.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "",
        n.displacementMap ? "#define USE_DISPLACEMENTMAP" : "",
        n.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
        n.anisotropy ? "#define USE_ANISOTROPY" : "",
        n.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "",
        n.clearcoatMap ? "#define USE_CLEARCOATMAP" : "",
        n.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "",
        n.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
        n.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "",
        n.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "",
        n.specularMap ? "#define USE_SPECULARMAP" : "",
        n.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "",
        n.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "",
        n.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
        n.metalnessMap ? "#define USE_METALNESSMAP" : "",
        n.alphaMap ? "#define USE_ALPHAMAP" : "",
        n.alphaHash ? "#define USE_ALPHAHASH" : "",
        n.transmission ? "#define USE_TRANSMISSION" : "",
        n.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "",
        n.thicknessMap ? "#define USE_THICKNESSMAP" : "",
        n.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "",
        n.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "",
        n.mapUv ? "#define MAP_UV " + n.mapUv : "",
        n.alphaMapUv ? "#define ALPHAMAP_UV " + n.alphaMapUv : "",
        n.lightMapUv ? "#define LIGHTMAP_UV " + n.lightMapUv : "",
        n.aoMapUv ? "#define AOMAP_UV " + n.aoMapUv : "",
        n.emissiveMapUv ? "#define EMISSIVEMAP_UV " + n.emissiveMapUv : "",
        n.bumpMapUv ? "#define BUMPMAP_UV " + n.bumpMapUv : "",
        n.normalMapUv ? "#define NORMALMAP_UV " + n.normalMapUv : "",
        n.displacementMapUv
          ? "#define DISPLACEMENTMAP_UV " + n.displacementMapUv
          : "",
        n.metalnessMapUv ? "#define METALNESSMAP_UV " + n.metalnessMapUv : "",
        n.roughnessMapUv ? "#define ROUGHNESSMAP_UV " + n.roughnessMapUv : "",
        n.anisotropyMapUv
          ? "#define ANISOTROPYMAP_UV " + n.anisotropyMapUv
          : "",
        n.clearcoatMapUv ? "#define CLEARCOATMAP_UV " + n.clearcoatMapUv : "",
        n.clearcoatNormalMapUv
          ? "#define CLEARCOAT_NORMALMAP_UV " + n.clearcoatNormalMapUv
          : "",
        n.clearcoatRoughnessMapUv
          ? "#define CLEARCOAT_ROUGHNESSMAP_UV " + n.clearcoatRoughnessMapUv
          : "",
        n.iridescenceMapUv
          ? "#define IRIDESCENCEMAP_UV " + n.iridescenceMapUv
          : "",
        n.iridescenceThicknessMapUv
          ? "#define IRIDESCENCE_THICKNESSMAP_UV " + n.iridescenceThicknessMapUv
          : "",
        n.sheenColorMapUv
          ? "#define SHEEN_COLORMAP_UV " + n.sheenColorMapUv
          : "",
        n.sheenRoughnessMapUv
          ? "#define SHEEN_ROUGHNESSMAP_UV " + n.sheenRoughnessMapUv
          : "",
        n.specularMapUv ? "#define SPECULARMAP_UV " + n.specularMapUv : "",
        n.specularColorMapUv
          ? "#define SPECULAR_COLORMAP_UV " + n.specularColorMapUv
          : "",
        n.specularIntensityMapUv
          ? "#define SPECULAR_INTENSITYMAP_UV " + n.specularIntensityMapUv
          : "",
        n.transmissionMapUv
          ? "#define TRANSMISSIONMAP_UV " + n.transmissionMapUv
          : "",
        n.thicknessMapUv ? "#define THICKNESSMAP_UV " + n.thicknessMapUv : "",
        n.vertexTangents && !1 === n.flatShading ? "#define USE_TANGENT" : "",
        n.vertexColors ? "#define USE_COLOR" : "",
        n.vertexAlphas ? "#define USE_COLOR_ALPHA" : "",
        n.vertexUv1s ? "#define USE_UV1" : "",
        n.vertexUv2s ? "#define USE_UV2" : "",
        n.vertexUv3s ? "#define USE_UV3" : "",
        n.pointsUvs ? "#define USE_POINTS_UV" : "",
        n.flatShading ? "#define FLAT_SHADED" : "",
        n.skinning ? "#define USE_SKINNING" : "",
        n.morphTargets ? "#define USE_MORPHTARGETS" : "",
        n.morphNormals && !1 === n.flatShading
          ? "#define USE_MORPHNORMALS"
          : "",
        n.morphColors ? "#define USE_MORPHCOLORS" : "",
        n.morphTargetsCount > 0
          ? "#define MORPHTARGETS_TEXTURE_STRIDE " + n.morphTextureStride
          : "",
        n.morphTargetsCount > 0
          ? "#define MORPHTARGETS_COUNT " + n.morphTargetsCount
          : "",
        n.doubleSided ? "#define DOUBLE_SIDED" : "",
        n.flipSided ? "#define FLIP_SIDED" : "",
        n.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
        n.shadowMapEnabled ? "#define " + l : "",
        n.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "",
        n.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "",
        n.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "",
        n.reverseDepthBuffer ? "#define USE_REVERSEDEPTHBUF" : "",
        "uniform mat4 modelMatrix;",
        "uniform mat4 modelViewMatrix;",
        "uniform mat4 projectionMatrix;",
        "uniform mat4 viewMatrix;",
        "uniform mat3 normalMatrix;",
        "uniform vec3 cameraPosition;",
        "uniform bool isOrthographic;",
        "#ifdef USE_INSTANCING",
        "\tattribute mat4 instanceMatrix;",
        "#endif",
        "#ifdef USE_INSTANCING_COLOR",
        "\tattribute vec3 instanceColor;",
        "#endif",
        "#ifdef USE_INSTANCING_MORPH",
        "\tuniform sampler2D morphTexture;",
        "#endif",
        "attribute vec3 position;",
        "attribute vec3 normal;",
        "attribute vec2 uv;",
        "#ifdef USE_UV1",
        "\tattribute vec2 uv1;",
        "#endif",
        "#ifdef USE_UV2",
        "\tattribute vec2 uv2;",
        "#endif",
        "#ifdef USE_UV3",
        "\tattribute vec2 uv3;",
        "#endif",
        "#ifdef USE_TANGENT",
        "\tattribute vec4 tangent;",
        "#endif",
        "#if defined( USE_COLOR_ALPHA )",
        "\tattribute vec4 color;",
        "#elif defined( USE_COLOR )",
        "\tattribute vec3 color;",
        "#endif",
        "#ifdef USE_SKINNING",
        "\tattribute vec4 skinIndex;",
        "\tattribute vec4 skinWeight;",
        "#endif",
        "\n",
      ]
        .filter(Fs)
        .join("\n")),
      (_ = [
        qs(n),
        "#define SHADER_TYPE " + n.shaderType,
        "#define SHADER_NAME " + n.shaderName,
        f,
        n.useFog && n.fog ? "#define USE_FOG" : "",
        n.useFog && n.fogExp2 ? "#define FOG_EXP2" : "",
        n.alphaToCoverage ? "#define ALPHA_TO_COVERAGE" : "",
        n.map ? "#define USE_MAP" : "",
        n.matcap ? "#define USE_MATCAP" : "",
        n.envMap ? "#define USE_ENVMAP" : "",
        n.envMap ? "#define " + c : "",
        n.envMap ? "#define " + h : "",
        n.envMap ? "#define " + u : "",
        d ? "#define CUBEUV_TEXEL_WIDTH " + d.texelWidth : "",
        d ? "#define CUBEUV_TEXEL_HEIGHT " + d.texelHeight : "",
        d ? "#define CUBEUV_MAX_MIP " + d.maxMip + ".0" : "",
        n.lightMap ? "#define USE_LIGHTMAP" : "",
        n.aoMap ? "#define USE_AOMAP" : "",
        n.bumpMap ? "#define USE_BUMPMAP" : "",
        n.normalMap ? "#define USE_NORMALMAP" : "",
        n.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "",
        n.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "",
        n.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
        n.anisotropy ? "#define USE_ANISOTROPY" : "",
        n.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "",
        n.clearcoat ? "#define USE_CLEARCOAT" : "",
        n.clearcoatMap ? "#define USE_CLEARCOATMAP" : "",
        n.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "",
        n.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
        n.dispersion ? "#define USE_DISPERSION" : "",
        n.iridescence ? "#define USE_IRIDESCENCE" : "",
        n.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "",
        n.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "",
        n.specularMap ? "#define USE_SPECULARMAP" : "",
        n.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "",
        n.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "",
        n.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
        n.metalnessMap ? "#define USE_METALNESSMAP" : "",
        n.alphaMap ? "#define USE_ALPHAMAP" : "",
        n.alphaTest ? "#define USE_ALPHATEST" : "",
        n.alphaHash ? "#define USE_ALPHAHASH" : "",
        n.sheen ? "#define USE_SHEEN" : "",
        n.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "",
        n.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "",
        n.transmission ? "#define USE_TRANSMISSION" : "",
        n.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "",
        n.thicknessMap ? "#define USE_THICKNESSMAP" : "",
        n.vertexTangents && !1 === n.flatShading ? "#define USE_TANGENT" : "",
        n.vertexColors || n.instancingColor || n.batchingColor
          ? "#define USE_COLOR"
          : "",
        n.vertexAlphas ? "#define USE_COLOR_ALPHA" : "",
        n.vertexUv1s ? "#define USE_UV1" : "",
        n.vertexUv2s ? "#define USE_UV2" : "",
        n.vertexUv3s ? "#define USE_UV3" : "",
        n.pointsUvs ? "#define USE_POINTS_UV" : "",
        n.gradientMap ? "#define USE_GRADIENTMAP" : "",
        n.flatShading ? "#define FLAT_SHADED" : "",
        n.doubleSided ? "#define DOUBLE_SIDED" : "",
        n.flipSided ? "#define FLIP_SIDED" : "",
        n.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
        n.shadowMapEnabled ? "#define " + l : "",
        n.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "",
        n.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "",
        n.decodeVideoTexture ? "#define DECODE_VIDEO_TEXTURE" : "",
        n.decodeVideoTextureEmissive
          ? "#define DECODE_VIDEO_TEXTURE_EMISSIVE"
          : "",
        n.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "",
        n.reverseDepthBuffer ? "#define USE_REVERSEDEPTHBUF" : "",
        "uniform mat4 viewMatrix;",
        "uniform vec3 cameraPosition;",
        "uniform bool isOrthographic;",
        0 !== n.toneMapping ? "#define TONE_MAPPING" : "",
        0 !== n.toneMapping ? Xr.tonemapping_pars_fragment : "",
        0 !== n.toneMapping ? Ns("toneMapping", n.toneMapping) : "",
        n.dithering ? "#define DITHERING" : "",
        n.opaque ? "#define OPAQUE" : "",
        Xr.colorspace_pars_fragment,
        Is("linearToOutputTexel", n.outputColorSpace),
        (ye.getLuminanceCoefficients(Os),
        [
          "float luminance( const in vec3 rgb ) {",
          `\tconst vec3 weights = vec3( ${Os.x.toFixed(4)}, ${Os.y.toFixed(
            4
          )}, ${Os.z.toFixed(4)} );`,
          "\treturn dot( weights, rgb );\n}",
        ].join("\n")),
        n.useDepthPacking ? "#define DEPTH_PACKING " + n.depthPacking : "",
        "\n",
      ]
        .filter(Fs)
        .join("\n"))),
    (s = Vs(s)),
    (s = Bs(s, n)),
    (s = zs(s, n)),
    (o = Vs(o)),
    (o = Bs(o, n)),
    (o = zs(o, n)),
    (s = Xs(s)),
    (o = Xs(o)),
    !0 !== n.isRawShaderMaterial &&
      ((v = "#version 300 es\n"),
      (g =
        [
          p,
          "#define attribute in\n#define varying out\n#define texture2D texture",
        ].join("\n") +
        "\n" +
        g),
      (_ =
        [
          "#define varying in",
          n.glslVersion === Qt
            ? ""
            : "layout(location = 0) out highp vec4 pc_fragColor;",
          n.glslVersion === Qt ? "" : "#define gl_FragColor pc_fragColor",
          "#define gl_FragDepthEXT gl_FragDepth\n#define texture2D texture\n#define textureCube texture\n#define texture2DProj textureProj\n#define texture2DLodEXT textureLod\n#define texture2DProjLodEXT textureProjLod\n#define textureCubeLodEXT textureLod\n#define texture2DGradEXT textureGrad\n#define texture2DProjGradEXT textureProjGrad\n#define textureCubeGradEXT textureGrad",
        ].join("\n") +
        "\n" +
        _));
  const x = v + g + s,
    M = v + _ + o,
    S = Ps(r, r.VERTEX_SHADER, x),
    y = Ps(r, r.FRAGMENT_SHADER, M);
  function E(e) {
    if (t.debug.checkShaderErrors) {
      const n = r.getProgramInfoLog(m).trim(),
        i = r.getShaderInfoLog(S).trim(),
        a = r.getShaderInfoLog(y).trim();
      let s = !0,
        o = !0;
      !1 === r.getProgramParameter(m, r.LINK_STATUS)
        ? ((s = !1),
          "function" == typeof t.debug.onShaderError
            ? t.debug.onShaderError(r, m, S, y)
            : (Ds(r, S, "vertex"), Ds(r, y, "fragment")))
        : "" !== n || ("" !== i && "" !== a) || (o = !1),
        o &&
          (e.diagnostics = {
            runnable: s,
            programLog: n,
            vertexShader: {
              log: i,
              prefix: g,
            },
            fragmentShader: {
              log: a,
              prefix: _,
            },
          });
    }
    r.deleteShader(S),
      r.deleteShader(y),
      (T = new Cs(r, m)),
      (b = (function (t, e) {
        const n = {},
          i = t.getProgramParameter(e, t.ACTIVE_ATTRIBUTES);
        for (let r = 0; i > r; r++) {
          const i = t.getActiveAttrib(e, r),
            a = i.name;
          let s = 1;
          i.type === t.FLOAT_MAT2 && (s = 2),
            i.type === t.FLOAT_MAT3 && (s = 3),
            i.type === t.FLOAT_MAT4 && (s = 4),
            (n[a] = {
              type: i.type,
              location: t.getAttribLocation(e, a),
              locationSize: s,
            });
        }
        return n;
      })(r, m));
  }
  let T, b;
  r.attachShader(m, S),
    r.attachShader(m, y),
    void 0 !== n.index0AttributeName
      ? r.bindAttribLocation(m, 0, n.index0AttributeName)
      : !0 === n.morphTargets && r.bindAttribLocation(m, 0, "position"),
    r.linkProgram(m),
    (this.getUniforms = function () {
      return void 0 === T && E(this), T;
    }),
    (this.getAttributes = function () {
      return void 0 === b && E(this), b;
    });
  let A = !1 === n.rendererExtensionParallelShaderCompile;
  return (
    (this.isReady = function () {
      return !1 === A && (A = r.getProgramParameter(m, 37297)), A;
    }),
    (this.destroy = function () {
      i.releaseStatesOfProgram(this),
        r.deleteProgram(m),
        (this.program = void 0);
    }),
    (this.type = n.shaderType),
    (this.name = n.shaderName),
    (this.id = Ls++),
    (this.cacheKey = e),
    (this.usedTimes = 1),
    (this.program = m),
    (this.vertexShader = S),
    (this.fragmentShader = y),
    this
  );
}
let Ks = 0;
class Zs {
  constructor() {
    (this.shaderCache = new Map()), (this.materialCache = new Map());
  }
  update(t) {
    const e = t.vertexShader,
      n = t.fragmentShader,
      i = this._getShaderStage(e),
      r = this._getShaderStage(n),
      a = this._getShaderCacheForMaterial(t);
    return (
      !1 === a.has(i) && (a.add(i), i.usedTimes++),
      !1 === a.has(r) && (a.add(r), r.usedTimes++),
      this
    );
  }
  remove(t) {
    const e = this.materialCache.get(t);
    for (const n of e)
      n.usedTimes--, 0 === n.usedTimes && this.shaderCache.delete(n.code);
    return this.materialCache.delete(t), this;
  }
  getVertexShaderID(t) {
    return this._getShaderStage(t.vertexShader).id;
  }
  getFragmentShaderID(t) {
    return this._getShaderStage(t.fragmentShader).id;
  }
  dispose() {
    this.shaderCache.clear(), this.materialCache.clear();
  }
  _getShaderCacheForMaterial(t) {
    const e = this.materialCache;
    let n = e.get(t);
    return void 0 === n && ((n = new Set()), e.set(t, n)), n;
  }
  _getShaderStage(t) {
    const e = this.shaderCache;
    let n = e.get(t);
    return void 0 === n && ((n = new Js(t)), e.set(t, n)), n;
  }
}
class Js {
  constructor(t) {
    (this.id = Ks++), (this.code = t), (this.usedTimes = 0);
  }
}
function $s(t, e, n, i, r, a, s) {
  const o = new An(),
    l = new Zs(),
    c = new Set(),
    h = [],
    u = r.logarithmicDepthBuffer,
    d = r.vertexTextures;
  let p = r.precision;
  const f = {
    MeshDepthMaterial: "depth",
    MeshDistanceMaterial: "distanceRGBA",
    MeshNormalMaterial: "normal",
    MeshBasicMaterial: "basic",
    MeshLambertMaterial: "lambert",
    MeshPhongMaterial: "phong",
    MeshToonMaterial: "toon",
    MeshStandardMaterial: "physical",
    MeshPhysicalMaterial: "physical",
    MeshMatcapMaterial: "matcap",
    LineBasicMaterial: "basic",
    LineDashedMaterial: "dashed",
    PointsMaterial: "points",
    ShadowMaterial: "shadow",
    SpriteMaterial: "sprite",
  };
  function m(t) {
    return c.add(t), 0 === t ? "uv" : "uv" + t;
  }
  return {
    getParameters: function (a, o, h, g, _) {
      const v = g.fog,
        x = _.geometry,
        M = a.isMeshStandardMaterial ? g.environment : null,
        S = (a.isMeshStandardMaterial ? n : e).get(a.envMap || M),
        y = S && S.mapping === F ? S.image.height : null,
        E = f[a.type];
      null !== a.precision &&
        ((p = r.getMaxPrecision(a.precision)), a.precision);
      const T =
          x.morphAttributes.position ||
          x.morphAttributes.normal ||
          x.morphAttributes.color,
        b = void 0 !== T ? T.length : 0;
      let A,
        w,
        R,
        C,
        P = 0;
      if (
        (void 0 !== x.morphAttributes.position && (P = 1),
        void 0 !== x.morphAttributes.normal && (P = 2),
        void 0 !== x.morphAttributes.color && (P = 3),
        E)
      ) {
        const t = qr[E];
        (A = t.vertexShader), (w = t.fragmentShader);
      } else
        (A = a.vertexShader),
          (w = a.fragmentShader),
          l.update(a),
          (R = l.getVertexShaderID(a)),
          (C = l.getFragmentShaderID(a));
      const L = t.getRenderTarget(),
        U = t.state.buffers.depth.getReversed(),
        D = !0 === _.isInstancedMesh,
        I = !0 === _.isBatchedMesh,
        N = !!a.map,
        O = !!a.matcap,
        B = !!S,
        z = !!a.aoMap,
        H = !!a.lightMap,
        V = !!a.bumpMap,
        G = !!a.normalMap,
        k = !!a.displacementMap,
        W = !!a.emissiveMap,
        X = !!a.metalnessMap,
        j = !!a.roughnessMap,
        q = a.anisotropy > 0,
        Y = a.clearcoat > 0,
        K = a.dispersion > 0,
        Z = a.iridescence > 0,
        J = a.sheen > 0,
        $ = a.transmission > 0,
        Q = q && !!a.anisotropyMap,
        tt = Y && !!a.clearcoatMap,
        et = Y && !!a.clearcoatNormalMap,
        nt = Y && !!a.clearcoatRoughnessMap,
        it = Z && !!a.iridescenceMap,
        rt = Z && !!a.iridescenceThicknessMap,
        at = J && !!a.sheenColorMap,
        st = J && !!a.sheenRoughnessMap,
        ot = !!a.specularMap,
        lt = !!a.specularColorMap,
        ct = !!a.specularIntensityMap,
        ht = $ && !!a.transmissionMap,
        ut = $ && !!a.thicknessMap,
        dt = !!a.gradientMap,
        pt = !!a.alphaMap,
        ft = a.alphaTest > 0,
        mt = !!a.alphaHash,
        gt = !!a.extensions;
      let _t = 0;
      a.toneMapped &&
        ((null !== L && !0 !== L.isXRRenderTarget) || (_t = t.toneMapping));
      const vt = {
        shaderID: E,
        shaderType: a.type,
        shaderName: a.name,
        vertexShader: A,
        fragmentShader: w,
        defines: a.defines,
        customVertexShaderID: R,
        customFragmentShaderID: C,
        isRawShaderMaterial: !0 === a.isRawShaderMaterial,
        glslVersion: a.glslVersion,
        precision: p,
        batching: I,
        batchingColor: I && null !== _._colorsTexture,
        instancing: D,
        instancingColor: D && null !== _.instanceColor,
        instancingMorph: D && null !== _.morphTexture,
        supportsVertexTextures: d,
        outputColorSpace:
          null === L
            ? t.outputColorSpace
            : !0 === L.isXRRenderTarget
            ? L.texture.colorSpace
            : Vt,
        alphaToCoverage: !!a.alphaToCoverage,
        map: N,
        matcap: O,
        envMap: B,
        envMapMode: B && S.mapping,
        envMapCubeUVHeight: y,
        aoMap: z,
        lightMap: H,
        bumpMap: V,
        normalMap: G,
        displacementMap: d && k,
        emissiveMap: W,
        normalMapObjectSpace: G && 1 === a.normalMapType,
        normalMapTangentSpace: G && 0 === a.normalMapType,
        metalnessMap: X,
        roughnessMap: j,
        anisotropy: q,
        anisotropyMap: Q,
        clearcoat: Y,
        clearcoatMap: tt,
        clearcoatNormalMap: et,
        clearcoatRoughnessMap: nt,
        dispersion: K,
        iridescence: Z,
        iridescenceMap: it,
        iridescenceThicknessMap: rt,
        sheen: J,
        sheenColorMap: at,
        sheenRoughnessMap: st,
        specularMap: ot,
        specularColorMap: lt,
        specularIntensityMap: ct,
        transmission: $,
        transmissionMap: ht,
        thicknessMap: ut,
        gradientMap: dt,
        opaque:
          !1 === a.transparent && 1 === a.blending && !1 === a.alphaToCoverage,
        alphaMap: pt,
        alphaTest: ft,
        alphaHash: mt,
        combine: a.combine,
        mapUv: N && m(a.map.channel),
        aoMapUv: z && m(a.aoMap.channel),
        lightMapUv: H && m(a.lightMap.channel),
        bumpMapUv: V && m(a.bumpMap.channel),
        normalMapUv: G && m(a.normalMap.channel),
        displacementMapUv: k && m(a.displacementMap.channel),
        emissiveMapUv: W && m(a.emissiveMap.channel),
        metalnessMapUv: X && m(a.metalnessMap.channel),
        roughnessMapUv: j && m(a.roughnessMap.channel),
        anisotropyMapUv: Q && m(a.anisotropyMap.channel),
        clearcoatMapUv: tt && m(a.clearcoatMap.channel),
        clearcoatNormalMapUv: et && m(a.clearcoatNormalMap.channel),
        clearcoatRoughnessMapUv: nt && m(a.clearcoatRoughnessMap.channel),
        iridescenceMapUv: it && m(a.iridescenceMap.channel),
        iridescenceThicknessMapUv: rt && m(a.iridescenceThicknessMap.channel),
        sheenColorMapUv: at && m(a.sheenColorMap.channel),
        sheenRoughnessMapUv: st && m(a.sheenRoughnessMap.channel),
        specularMapUv: ot && m(a.specularMap.channel),
        specularColorMapUv: lt && m(a.specularColorMap.channel),
        specularIntensityMapUv: ct && m(a.specularIntensityMap.channel),
        transmissionMapUv: ht && m(a.transmissionMap.channel),
        thicknessMapUv: ut && m(a.thicknessMap.channel),
        alphaMapUv: pt && m(a.alphaMap.channel),
        vertexTangents: !!x.attributes.tangent && (G || q),
        vertexColors: a.vertexColors,
        vertexAlphas:
          !0 === a.vertexColors &&
          !!x.attributes.color &&
          4 === x.attributes.color.itemSize,
        pointsUvs: !0 === _.isPoints && !!x.attributes.uv && (N || pt),
        fog: !!v,
        useFog: !0 === a.fog,
        fogExp2: !!v && v.isFogExp2,
        flatShading: !0 === a.flatShading,
        sizeAttenuation: !0 === a.sizeAttenuation,
        logarithmicDepthBuffer: u,
        reverseDepthBuffer: U,
        skinning: !0 === _.isSkinnedMesh,
        morphTargets: void 0 !== x.morphAttributes.position,
        morphNormals: void 0 !== x.morphAttributes.normal,
        morphColors: void 0 !== x.morphAttributes.color,
        morphTargetsCount: b,
        morphTextureStride: P,
        numDirLights: o.directional.length,
        numPointLights: o.point.length,
        numSpotLights: o.spot.length,
        numSpotLightMaps: o.spotLightMap.length,
        numRectAreaLights: o.rectArea.length,
        numHemiLights: o.hemi.length,
        numDirLightShadows: o.directionalShadowMap.length,
        numPointLightShadows: o.pointShadowMap.length,
        numSpotLightShadows: o.spotShadowMap.length,
        numSpotLightShadowsWithMaps: o.numSpotLightShadowsWithMaps,
        numLightProbes: o.numLightProbes,
        numClippingPlanes: s.numPlanes,
        numClipIntersection: s.numIntersection,
        dithering: a.dithering,
        shadowMapEnabled: t.shadowMap.enabled && h.length > 0,
        shadowMapType: t.shadowMap.type,
        toneMapping: _t,
        decodeVideoTexture:
          N &&
          !0 === a.map.isVideoTexture &&
          ye.getTransfer(a.map.colorSpace) === kt,
        decodeVideoTextureEmissive:
          W &&
          !0 === a.emissiveMap.isVideoTexture &&
          ye.getTransfer(a.emissiveMap.colorSpace) === kt,
        premultipliedAlpha: a.premultipliedAlpha,
        doubleSided: 2 === a.side,
        flipSided: 1 === a.side,
        useDepthPacking: a.depthPacking >= 0,
        depthPacking: a.depthPacking || 0,
        index0AttributeName: a.index0AttributeName,
        extensionClipCullDistance:
          gt &&
          !0 === a.extensions.clipCullDistance &&
          i.has("WEBGL_clip_cull_distance"),
        extensionMultiDraw:
          ((gt && !0 === a.extensions.multiDraw) || I) &&
          i.has("WEBGL_multi_draw"),
        rendererExtensionParallelShaderCompile: i.has(
          "KHR_parallel_shader_compile"
        ),
        customProgramCacheKey: a.customProgramCacheKey(),
      };
      return (
        (vt.vertexUv1s = c.has(1)),
        (vt.vertexUv2s = c.has(2)),
        (vt.vertexUv3s = c.has(3)),
        c.clear(),
        vt
      );
    },
    getProgramCacheKey: function (e) {
      const n = [];
      if (
        (e.shaderID
          ? n.push(e.shaderID)
          : (n.push(e.customVertexShaderID), n.push(e.customFragmentShaderID)),
        void 0 !== e.defines)
      )
        for (const t in e.defines) n.push(t), n.push(e.defines[t]);
      return (
        !1 === e.isRawShaderMaterial &&
          ((function (t, e) {
            t.push(e.precision),
              t.push(e.outputColorSpace),
              t.push(e.envMapMode),
              t.push(e.envMapCubeUVHeight),
              t.push(e.mapUv),
              t.push(e.alphaMapUv),
              t.push(e.lightMapUv),
              t.push(e.aoMapUv),
              t.push(e.bumpMapUv),
              t.push(e.normalMapUv),
              t.push(e.displacementMapUv),
              t.push(e.emissiveMapUv),
              t.push(e.metalnessMapUv),
              t.push(e.roughnessMapUv),
              t.push(e.anisotropyMapUv),
              t.push(e.clearcoatMapUv),
              t.push(e.clearcoatNormalMapUv),
              t.push(e.clearcoatRoughnessMapUv),
              t.push(e.iridescenceMapUv),
              t.push(e.iridescenceThicknessMapUv),
              t.push(e.sheenColorMapUv),
              t.push(e.sheenRoughnessMapUv),
              t.push(e.specularMapUv),
              t.push(e.specularColorMapUv),
              t.push(e.specularIntensityMapUv),
              t.push(e.transmissionMapUv),
              t.push(e.thicknessMapUv),
              t.push(e.combine),
              t.push(e.fogExp2),
              t.push(e.sizeAttenuation),
              t.push(e.morphTargetsCount),
              t.push(e.morphAttributeCount),
              t.push(e.numDirLights),
              t.push(e.numPointLights),
              t.push(e.numSpotLights),
              t.push(e.numSpotLightMaps),
              t.push(e.numHemiLights),
              t.push(e.numRectAreaLights),
              t.push(e.numDirLightShadows),
              t.push(e.numPointLightShadows),
              t.push(e.numSpotLightShadows),
              t.push(e.numSpotLightShadowsWithMaps),
              t.push(e.numLightProbes),
              t.push(e.shadowMapType),
              t.push(e.toneMapping),
              t.push(e.numClippingPlanes),
              t.push(e.numClipIntersection),
              t.push(e.depthPacking);
          })(n, e),
          (function (t, e) {
            o.disableAll(),
              e.supportsVertexTextures && o.enable(0),
              e.instancing && o.enable(1),
              e.instancingColor && o.enable(2),
              e.instancingMorph && o.enable(3),
              e.matcap && o.enable(4),
              e.envMap && o.enable(5),
              e.normalMapObjectSpace && o.enable(6),
              e.normalMapTangentSpace && o.enable(7),
              e.clearcoat && o.enable(8),
              e.iridescence && o.enable(9),
              e.alphaTest && o.enable(10),
              e.vertexColors && o.enable(11),
              e.vertexAlphas && o.enable(12),
              e.vertexUv1s && o.enable(13),
              e.vertexUv2s && o.enable(14),
              e.vertexUv3s && o.enable(15),
              e.vertexTangents && o.enable(16),
              e.anisotropy && o.enable(17),
              e.alphaHash && o.enable(18),
              e.batching && o.enable(19),
              e.dispersion && o.enable(20),
              e.batchingColor && o.enable(21),
              t.push(o.mask),
              o.disableAll(),
              e.fog && o.enable(0),
              e.useFog && o.enable(1),
              e.flatShading && o.enable(2),
              e.logarithmicDepthBuffer && o.enable(3),
              e.reverseDepthBuffer && o.enable(4),
              e.skinning && o.enable(5),
              e.morphTargets && o.enable(6),
              e.morphNormals && o.enable(7),
              e.morphColors && o.enable(8),
              e.premultipliedAlpha && o.enable(9),
              e.shadowMapEnabled && o.enable(10),
              e.doubleSided && o.enable(11),
              e.flipSided && o.enable(12),
              e.useDepthPacking && o.enable(13),
              e.dithering && o.enable(14),
              e.transmission && o.enable(15),
              e.sheen && o.enable(16),
              e.opaque && o.enable(17),
              e.pointsUvs && o.enable(18),
              e.decodeVideoTexture && o.enable(19),
              e.decodeVideoTextureEmissive && o.enable(20),
              e.alphaToCoverage && o.enable(21),
              t.push(o.mask);
          })(n, e),
          n.push(t.outputColorSpace)),
        n.push(e.customProgramCacheKey),
        n.join()
      );
    },
    getUniforms: function (t) {
      const e = f[t.type];
      let n;
      if (e) {
        const t = qr[e];
        n = ki.clone(t.uniforms);
      } else n = t.uniforms;
      return n;
    },
    acquireProgram: function (e, n) {
      let i;
      for (let t = 0, r = h.length; r > t; t++) {
        const e = h[t];
        if (e.cacheKey === n) {
          (i = e), ++i.usedTimes;
          break;
        }
      }
      return void 0 === i && ((i = new Ys(t, n, e, a)), h.push(i)), i;
    },
    releaseProgram: function (t) {
      if (0 == --t.usedTimes) {
        const e = h.indexOf(t);
        (h[e] = h[h.length - 1]), h.pop(), t.destroy();
      }
    },
    releaseShaderCache: function (t) {
      l.remove(t);
    },
    programs: h,
    dispose: function () {
      l.dispose();
    },
  };
}
function Qs() {
  let t = new WeakMap();
  return {
    has: function (e) {
      return t.has(e);
    },
    get: function (e) {
      let n = t.get(e);
      return void 0 === n && ((n = {}), t.set(e, n)), n;
    },
    remove: function (e) {
      t.delete(e);
    },
    update: function (e, n, i) {
      t.get(e)[n] = i;
    },
    dispose: function () {
      t = new WeakMap();
    },
  };
}
function to(t, e) {
  return t.groupOrder !== e.groupOrder
    ? t.groupOrder - e.groupOrder
    : t.renderOrder !== e.renderOrder
    ? t.renderOrder - e.renderOrder
    : t.material.id !== e.material.id
    ? t.material.id - e.material.id
    : t.z !== e.z
    ? t.z - e.z
    : t.id - e.id;
}
function eo(t, e) {
  return t.groupOrder !== e.groupOrder
    ? t.groupOrder - e.groupOrder
    : t.renderOrder !== e.renderOrder
    ? t.renderOrder - e.renderOrder
    : t.z !== e.z
    ? e.z - t.z
    : t.id - e.id;
}
function no() {
  const t = [];
  let e = 0;
  const n = [],
    i = [],
    r = [];
  function a(n, i, r, a, s, o) {
    let l = t[e];
    return (
      void 0 === l
        ? ((l = {
            id: n.id,
            object: n,
            geometry: i,
            material: r,
            groupOrder: a,
            renderOrder: n.renderOrder,
            z: s,
            group: o,
          }),
          (t[e] = l))
        : ((l.id = n.id),
          (l.object = n),
          (l.geometry = i),
          (l.material = r),
          (l.groupOrder = a),
          (l.renderOrder = n.renderOrder),
          (l.z = s),
          (l.group = o)),
      e++,
      l
    );
  }
  return {
    opaque: n,
    transmissive: i,
    transparent: r,
    init: function () {
      (e = 0), (n.length = 0), (i.length = 0), (r.length = 0);
    },
    push: function (t, e, s, o, l, c) {
      const h = a(t, e, s, o, l, c);
      s.transmission > 0
        ? i.push(h)
        : !0 === s.transparent
        ? r.push(h)
        : n.push(h);
    },
    unshift: function (t, e, s, o, l, c) {
      const h = a(t, e, s, o, l, c);
      s.transmission > 0
        ? i.unshift(h)
        : !0 === s.transparent
        ? r.unshift(h)
        : n.unshift(h);
    },
    finish: function () {
      for (let n = e, i = t.length; i > n; n++) {
        const e = t[n];
        if (null === e.id) break;
        (e.id = null),
          (e.object = null),
          (e.geometry = null),
          (e.material = null),
          (e.group = null);
      }
    },
    sort: function (t, e) {
      n.length > 1 && n.sort(t || to),
        i.length > 1 && i.sort(e || eo),
        r.length > 1 && r.sort(e || eo);
    },
  };
}
function io() {
  let t = new WeakMap();
  return {
    get: function (e, n) {
      const i = t.get(e);
      let r;
      return (
        void 0 === i
          ? ((r = new no()), t.set(e, [r]))
          : n < i.length
          ? (r = i[n])
          : ((r = new no()), i.push(r)),
        r
      );
    },
    dispose: function () {
      t = new WeakMap();
    },
  };
}
function ro() {
  const t = {};
  return {
    get: function (e) {
      if (void 0 !== t[e.id]) return t[e.id];
      let n;
      switch (e.type) {
        case "DirectionalLight":
          n = {
            direction: new Be(),
            color: new oi(),
          };
          break;
        case "SpotLight":
          n = {
            position: new Be(),
            direction: new Be(),
            color: new oi(),
            distance: 0,
            coneCos: 0,
            penumbraCos: 0,
            decay: 0,
          };
          break;
        case "PointLight":
          n = {
            position: new Be(),
            color: new oi(),
            distance: 0,
            decay: 0,
          };
          break;
        case "HemisphereLight":
          n = {
            direction: new Be(),
            skyColor: new oi(),
            groundColor: new oi(),
          };
          break;
        case "RectAreaLight":
          n = {
            color: new oi(),
            position: new Be(),
            halfWidth: new Be(),
            halfHeight: new Be(),
          };
      }
      return (t[e.id] = n), n;
    },
  };
}
let ao = 0;
function so(t, e) {
  return (
    (e.castShadow ? 2 : 0) -
    (t.castShadow ? 2 : 0) +
    (e.map ? 1 : 0) -
    (t.map ? 1 : 0)
  );
}
function oo(t) {
  const e = new ro(),
    n = (function () {
      const t = {};
      return {
        get: function (e) {
          if (void 0 !== t[e.id]) return t[e.id];
          let n;
          switch (e.type) {
            case "DirectionalLight":
            case "SpotLight":
              n = {
                shadowIntensity: 1,
                shadowBias: 0,
                shadowNormalBias: 0,
                shadowRadius: 1,
                shadowMapSize: new ue(),
              };
              break;
            case "PointLight":
              n = {
                shadowIntensity: 1,
                shadowBias: 0,
                shadowNormalBias: 0,
                shadowRadius: 1,
                shadowMapSize: new ue(),
                shadowCameraNear: 1,
                shadowCameraFar: 1e3,
              };
          }
          return (t[e.id] = n), n;
        },
      };
    })(),
    i = {
      version: 0,
      hash: {
        directionalLength: -1,
        pointLength: -1,
        spotLength: -1,
        rectAreaLength: -1,
        hemiLength: -1,
        numDirectionalShadows: -1,
        numPointShadows: -1,
        numSpotShadows: -1,
        numSpotMaps: -1,
        numLightProbes: -1,
      },
      ambient: [0, 0, 0],
      probe: [],
      directional: [],
      directionalShadow: [],
      directionalShadowMap: [],
      directionalShadowMatrix: [],
      spot: [],
      spotLightMap: [],
      spotShadow: [],
      spotShadowMap: [],
      spotLightMatrix: [],
      rectArea: [],
      rectAreaLTC1: null,
      rectAreaLTC2: null,
      point: [],
      pointShadow: [],
      pointShadowMap: [],
      pointShadowMatrix: [],
      hemi: [],
      numSpotLightShadowsWithMaps: 0,
      numLightProbes: 0,
    };
  for (let o = 0; 9 > o; o++) i.probe.push(new Be());
  const r = new Be(),
    a = new mn(),
    s = new mn();
  return {
    setup: function (r) {
      let a = 0,
        s = 0,
        o = 0;
      for (let t = 0; 9 > t; t++) i.probe[t].set(0, 0, 0);
      let l = 0,
        c = 0,
        h = 0,
        u = 0,
        d = 0,
        p = 0,
        f = 0,
        m = 0,
        g = 0,
        _ = 0,
        v = 0;
      r.sort(so);
      for (let t = 0, M = r.length; M > t; t++) {
        const x = r[t],
          M = x.color,
          S = x.intensity,
          y = x.distance,
          E = x.shadow && x.shadow.map ? x.shadow.map.texture : null;
        if (x.isAmbientLight) (a += M.r * S), (s += M.g * S), (o += M.b * S);
        else if (x.isLightProbe) {
          for (let t = 0; 9 > t; t++)
            i.probe[t].addScaledVector(x.sh.coefficients[t], S);
          v++;
        } else if (x.isDirectionalLight) {
          const t = e.get(x);
          if (
            (t.color.copy(x.color).multiplyScalar(x.intensity), x.castShadow)
          ) {
            const t = x.shadow,
              e = n.get(x);
            (e.shadowIntensity = t.intensity),
              (e.shadowBias = t.bias),
              (e.shadowNormalBias = t.normalBias),
              (e.shadowRadius = t.radius),
              (e.shadowMapSize = t.mapSize),
              (i.directionalShadow[l] = e),
              (i.directionalShadowMap[l] = E),
              (i.directionalShadowMatrix[l] = x.shadow.matrix),
              p++;
          }
          (i.directional[l] = t), l++;
        } else if (x.isSpotLight) {
          const t = e.get(x);
          t.position.setFromMatrixPosition(x.matrixWorld),
            t.color.copy(M).multiplyScalar(S),
            (t.distance = y),
            (t.coneCos = Math.cos(x.angle)),
            (t.penumbraCos = Math.cos(x.angle * (1 - x.penumbra))),
            (t.decay = x.decay),
            (i.spot[h] = t);
          const r = x.shadow;
          if (
            (x.map &&
              ((i.spotLightMap[g] = x.map),
              g++,
              r.updateMatrices(x),
              x.castShadow && _++),
            (i.spotLightMatrix[h] = r.matrix),
            x.castShadow)
          ) {
            const t = n.get(x);
            (t.shadowIntensity = r.intensity),
              (t.shadowBias = r.bias),
              (t.shadowNormalBias = r.normalBias),
              (t.shadowRadius = r.radius),
              (t.shadowMapSize = r.mapSize),
              (i.spotShadow[h] = t),
              (i.spotShadowMap[h] = E),
              m++;
          }
          h++;
        } else if (x.isRectAreaLight) {
          const t = e.get(x);
          t.color.copy(M).multiplyScalar(S),
            t.halfWidth.set(0.5 * x.width, 0, 0),
            t.halfHeight.set(0, 0.5 * x.height, 0),
            (i.rectArea[u] = t),
            u++;
        } else if (x.isPointLight) {
          const t = e.get(x);
          if (
            (t.color.copy(x.color).multiplyScalar(x.intensity),
            (t.distance = x.distance),
            (t.decay = x.decay),
            x.castShadow)
          ) {
            const t = x.shadow,
              e = n.get(x);
            (e.shadowIntensity = t.intensity),
              (e.shadowBias = t.bias),
              (e.shadowNormalBias = t.normalBias),
              (e.shadowRadius = t.radius),
              (e.shadowMapSize = t.mapSize),
              (e.shadowCameraNear = t.camera.near),
              (e.shadowCameraFar = t.camera.far),
              (i.pointShadow[c] = e),
              (i.pointShadowMap[c] = E),
              (i.pointShadowMatrix[c] = x.shadow.matrix),
              f++;
          }
          (i.point[c] = t), c++;
        } else if (x.isHemisphereLight) {
          const t = e.get(x);
          t.skyColor.copy(x.color).multiplyScalar(S),
            t.groundColor.copy(x.groundColor).multiplyScalar(S),
            (i.hemi[d] = t),
            d++;
        }
      }
      u > 0 &&
        (!0 === t.has("OES_texture_float_linear")
          ? ((i.rectAreaLTC1 = jr.LTC_FLOAT_1),
            (i.rectAreaLTC2 = jr.LTC_FLOAT_2))
          : ((i.rectAreaLTC1 = jr.LTC_HALF_1),
            (i.rectAreaLTC2 = jr.LTC_HALF_2))),
        (i.ambient[0] = a),
        (i.ambient[1] = s),
        (i.ambient[2] = o);
      const x = i.hash;
      (x.directionalLength === l &&
        x.pointLength === c &&
        x.spotLength === h &&
        x.rectAreaLength === u &&
        x.hemiLength === d &&
        x.numDirectionalShadows === p &&
        x.numPointShadows === f &&
        x.numSpotShadows === m &&
        x.numSpotMaps === g &&
        x.numLightProbes === v) ||
        ((i.directional.length = l),
        (i.spot.length = h),
        (i.rectArea.length = u),
        (i.point.length = c),
        (i.hemi.length = d),
        (i.directionalShadow.length = p),
        (i.directionalShadowMap.length = p),
        (i.pointShadow.length = f),
        (i.pointShadowMap.length = f),
        (i.spotShadow.length = m),
        (i.spotShadowMap.length = m),
        (i.directionalShadowMatrix.length = p),
        (i.pointShadowMatrix.length = f),
        (i.spotLightMatrix.length = m + g - _),
        (i.spotLightMap.length = g),
        (i.numSpotLightShadowsWithMaps = _),
        (i.numLightProbes = v),
        (x.directionalLength = l),
        (x.pointLength = c),
        (x.spotLength = h),
        (x.rectAreaLength = u),
        (x.hemiLength = d),
        (x.numDirectionalShadows = p),
        (x.numPointShadows = f),
        (x.numSpotShadows = m),
        (x.numSpotMaps = g),
        (x.numLightProbes = v),
        (i.version = ao++));
    },
    setupView: function (t, e) {
      let n = 0,
        o = 0,
        l = 0,
        c = 0,
        h = 0;
      const u = e.matrixWorldInverse;
      for (let d = 0, p = t.length; p > d; d++) {
        const e = t[d];
        if (e.isDirectionalLight) {
          const t = i.directional[n];
          t.direction.setFromMatrixPosition(e.matrixWorld),
            r.setFromMatrixPosition(e.target.matrixWorld),
            t.direction.sub(r),
            t.direction.transformDirection(u),
            n++;
        } else if (e.isSpotLight) {
          const t = i.spot[l];
          t.position.setFromMatrixPosition(e.matrixWorld),
            t.position.applyMatrix4(u),
            t.direction.setFromMatrixPosition(e.matrixWorld),
            r.setFromMatrixPosition(e.target.matrixWorld),
            t.direction.sub(r),
            t.direction.transformDirection(u),
            l++;
        } else if (e.isRectAreaLight) {
          const t = i.rectArea[c];
          t.position.setFromMatrixPosition(e.matrixWorld),
            t.position.applyMatrix4(u),
            s.identity(),
            a.copy(e.matrixWorld),
            a.premultiply(u),
            s.extractRotation(a),
            t.halfWidth.set(0.5 * e.width, 0, 0),
            t.halfHeight.set(0, 0.5 * e.height, 0),
            t.halfWidth.applyMatrix4(s),
            t.halfHeight.applyMatrix4(s),
            c++;
        } else if (e.isPointLight) {
          const t = i.point[o];
          t.position.setFromMatrixPosition(e.matrixWorld),
            t.position.applyMatrix4(u),
            o++;
        } else if (e.isHemisphereLight) {
          const t = i.hemi[h];
          t.direction.setFromMatrixPosition(e.matrixWorld),
            t.direction.transformDirection(u),
            h++;
        }
      }
    },
    state: i,
  };
}
function lo(t) {
  const e = new oo(t),
    n = [],
    i = [],
    r = {
      lightsArray: n,
      shadowsArray: i,
      camera: null,
      lights: e,
      transmissionRenderTarget: {},
    };
  return {
    init: function (t) {
      (r.camera = t), (n.length = 0), (i.length = 0);
    },
    state: r,
    setupLights: function () {
      e.setup(n);
    },
    setupLightsView: function (t) {
      e.setupView(n, t);
    },
    pushLight: function (t) {
      n.push(t);
    },
    pushShadow: function (t) {
      i.push(t);
    },
  };
}
function co(t) {
  let e = new WeakMap();
  return {
    get: function (n, i = 0) {
      const r = e.get(n);
      let a;
      return (
        void 0 === r
          ? ((a = new lo(t)), e.set(n, [a]))
          : i < r.length
          ? (a = r[i])
          : ((a = new lo(t)), r.push(a)),
        a
      );
    },
    dispose: function () {
      e = new WeakMap();
    },
  };
}
function ho(t, e, a) {
  let s = new lr();
  const o = new ue(),
    l = new ue(),
    c = new Ue(),
    h = new yr({
      depthPacking: 3201,
    }),
    u = new Er(),
    d = {},
    p = a.maxTextureSize,
    f = {
      [n]: 1,
      [i]: 0,
      [r]: 2,
    },
    m = new Wi({
      defines: {
        VSM_SAMPLES: 8,
      },
      uniforms: {
        shadow_pass: {
          value: null,
        },
        resolution: {
          value: new ue(),
        },
        radius: {
          value: 4,
        },
      },
      vertexShader: "void main() {\n\tgl_Position = vec4( position, 1.0 );\n}",
      fragmentShader:
        "uniform sampler2D shadow_pass;\nuniform vec2 resolution;\nuniform float radius;\n#include <packing>\nvoid main() {\n\tconst float samples = float( VSM_SAMPLES );\n\tfloat mean = 0.0;\n\tfloat squared_mean = 0.0;\n\tfloat uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );\n\tfloat uvStart = samples <= 1.0 ? 0.0 : - 1.0;\n\tfor ( float i = 0.0; i < samples; i ++ ) {\n\t\tfloat uvOffset = uvStart + i * uvStride;\n\t\t#ifdef HORIZONTAL_PASS\n\t\t\tvec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );\n\t\t\tmean += distribution.x;\n\t\t\tsquared_mean += distribution.y * distribution.y + distribution.x * distribution.x;\n\t\t#else\n\t\t\tfloat depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );\n\t\t\tmean += depth;\n\t\t\tsquared_mean += depth * depth;\n\t\t#endif\n\t}\n\tmean = mean / samples;\n\tsquared_mean = squared_mean / samples;\n\tfloat std_dev = sqrt( squared_mean - mean * mean );\n\tgl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );\n}",
    }),
    g = m.clone();
  g.defines.HORIZONTAL_PASS = 1;
  const _ = new bi();
  _.setAttribute(
    "position",
    new fi(new Float32Array([-1, -1, 0.5, 3, -1, 0.5, -1, 3, 0.5]), 3)
  );
  const v = new Fi(_, m),
    x = this;
  (this.enabled = !1),
    (this.autoUpdate = !0),
    (this.needsUpdate = !1),
    (this.type = 1);
  let M = this.type;
  function S(n, i) {
    const r = e.update(v);
    m.defines.VSM_SAMPLES !== n.blurSamples &&
      ((m.defines.VSM_SAMPLES = n.blurSamples),
      (g.defines.VSM_SAMPLES = n.blurSamples),
      (m.needsUpdate = !0),
      (g.needsUpdate = !0)),
      null === n.mapPass && (n.mapPass = new Ie(o.x, o.y)),
      (m.uniforms.shadow_pass.value = n.map.texture),
      (m.uniforms.resolution.value = n.mapSize),
      (m.uniforms.radius.value = n.radius),
      t.setRenderTarget(n.mapPass),
      t.clear(),
      t.renderBufferDirect(i, null, r, m, v, null),
      (g.uniforms.shadow_pass.value = n.mapPass.texture),
      (g.uniforms.resolution.value = n.mapSize),
      (g.uniforms.radius.value = n.radius),
      t.setRenderTarget(n.map),
      t.clear(),
      t.renderBufferDirect(i, null, r, g, v, null);
  }
  function y(e, n, i, r) {
    let a = null;
    const s =
      !0 === i.isPointLight ? e.customDistanceMaterial : e.customDepthMaterial;
    if (void 0 !== s) a = s;
    else if (
      ((a = !0 === i.isPointLight ? u : h),
      (t.localClippingEnabled &&
        !0 === n.clipShadows &&
        Array.isArray(n.clippingPlanes) &&
        0 !== n.clippingPlanes.length) ||
        (n.displacementMap && 0 !== n.displacementScale) ||
        (n.alphaMap && n.alphaTest > 0) ||
        (n.map && n.alphaTest > 0))
    ) {
      const t = a.uuid,
        e = n.uuid;
      let i = d[t];
      void 0 === i && ((i = {}), (d[t] = i));
      let r = i[e];
      void 0 === r &&
        ((r = a.clone()), (i[e] = r), n.addEventListener("dispose", T)),
        (a = r);
    }
    return (
      (a.visible = n.visible),
      (a.wireframe = n.wireframe),
      (a.side =
        3 === r
          ? null !== n.shadowSide
            ? n.shadowSide
            : n.side
          : null !== n.shadowSide
          ? n.shadowSide
          : f[n.side]),
      (a.alphaMap = n.alphaMap),
      (a.alphaTest = n.alphaTest),
      (a.map = n.map),
      (a.clipShadows = n.clipShadows),
      (a.clippingPlanes = n.clippingPlanes),
      (a.clipIntersection = n.clipIntersection),
      (a.displacementMap = n.displacementMap),
      (a.displacementScale = n.displacementScale),
      (a.displacementBias = n.displacementBias),
      (a.wireframeLinewidth = n.wireframeLinewidth),
      (a.linewidth = n.linewidth),
      !0 === i.isPointLight &&
        !0 === a.isMeshDistanceMaterial &&
        (t.properties.get(a).light = i),
      a
    );
  }
  function E(n, i, r, a, o) {
    if (!1 === n.visible) return;
    if (
      n.layers.test(i.layers) &&
      (n.isMesh || n.isLine || n.isPoints) &&
      (n.castShadow || (n.receiveShadow && 3 === o)) &&
      (!n.frustumCulled || s.intersectsObject(n))
    ) {
      n.modelViewMatrix.multiplyMatrices(r.matrixWorldInverse, n.matrixWorld);
      const s = e.update(n),
        l = n.material;
      if (Array.isArray(l)) {
        const e = s.groups;
        for (let c = 0, h = e.length; h > c; c++) {
          const h = e[c],
            u = l[h.materialIndex];
          if (u && u.visible) {
            const e = y(n, u, a, o);
            n.onBeforeShadow(t, n, i, r, s, e, h),
              t.renderBufferDirect(r, null, s, e, n, h),
              n.onAfterShadow(t, n, i, r, s, e, h);
          }
        }
      } else if (l.visible) {
        const e = y(n, l, a, o);
        n.onBeforeShadow(t, n, i, r, s, e, null),
          t.renderBufferDirect(r, null, s, e, n, null),
          n.onAfterShadow(t, n, i, r, s, e, null);
      }
    }
    const l = n.children;
    for (let t = 0, e = l.length; e > t; t++) E(l[t], i, r, a, o);
  }
  function T(t) {
    t.target.removeEventListener("dispose", T);
    for (const e in d) {
      const n = d[e],
        i = t.target.uuid;
      i in n && (n[i].dispose(), delete n[i]);
    }
  }
  this.render = function (e, n, i) {
    if (!1 === x.enabled) return;
    if (!1 === x.autoUpdate && !1 === x.needsUpdate) return;
    if (0 === e.length) return;
    const r = t.getRenderTarget(),
      a = t.getActiveCubeFace(),
      h = t.getActiveMipmapLevel(),
      u = t.state;
    u.setBlending(0),
      u.buffers.color.setClear(1, 1, 1, 1),
      u.buffers.depth.setTest(!0),
      u.setScissorTest(!1);
    const d = 3 !== M && 3 === this.type,
      f = 3 === M && 3 !== this.type;
    for (let m = 0, g = e.length; g > m; m++) {
      const r = e[m],
        a = r.shadow;
      if (void 0 === a) continue;
      if (!1 === a.autoUpdate && !1 === a.needsUpdate) continue;
      o.copy(a.mapSize);
      const h = a.getFrameExtents();
      if (
        (o.multiply(h),
        l.copy(a.mapSize),
        (o.x > p || o.y > p) &&
          (o.x > p &&
            ((l.x = Math.floor(p / h.x)),
            (o.x = l.x * h.x),
            (a.mapSize.x = l.x)),
          o.y > p &&
            ((l.y = Math.floor(p / h.y)),
            (o.y = l.y * h.y),
            (a.mapSize.y = l.y))),
        null === a.map || !0 === d || !0 === f)
      ) {
        const t =
          3 !== this.type
            ? {
                minFilter: V,
                magFilter: V,
              }
            : {};
        null !== a.map && a.map.dispose(),
          (a.map = new Ie(o.x, o.y, t)),
          (a.map.texture.name = r.name + ".shadowMap"),
          a.camera.updateProjectionMatrix();
      }
      t.setRenderTarget(a.map), t.clear();
      const g = a.getViewportCount();
      for (let t = 0; g > t; t++) {
        const e = a.getViewport(t);
        c.set(l.x * e.x, l.y * e.y, l.x * e.z, l.y * e.w),
          u.viewport(c),
          a.updateMatrices(r, t),
          (s = a.getFrustum()),
          E(n, i, a.camera, r, this.type);
      }
      !0 !== a.isPointLightShadow && 3 === this.type && S(a, i),
        (a.needsUpdate = !1);
    }
    (M = this.type), (x.needsUpdate = !1), t.setRenderTarget(r, a, h);
  };
}
const uo = {
  [b]: 1,
  [w]: 6,
  [C]: 7,
  [R]: 5,
  [A]: 0,
  [L]: 2,
  [U]: 4,
  [P]: 3,
};
function po(t, e) {
  const n = new (function () {
      let e = !1;
      const n = new Ue();
      let i = null;
      const r = new Ue(0, 0, 0, 0);
      return {
        setMask: function (n) {
          i === n || e || (t.colorMask(n, n, n, n), (i = n));
        },
        setLocked: function (t) {
          e = t;
        },
        setClear: function (e, i, a, s, o) {
          !0 === o && ((e *= s), (i *= s), (a *= s)),
            n.set(e, i, a, s),
            !1 === r.equals(n) && (t.clearColor(e, i, a, s), r.copy(n));
        },
        reset: function () {
          (e = !1), (i = null), r.set(-1, 0, 0, 0);
        },
      };
    })(),
    i = new (function () {
      let n = !1,
        i = !1,
        r = null,
        a = null,
        s = null;
      return {
        setReversed: function (t) {
          if (i !== t) {
            const t = e.get("EXT_clip_control");
            i
              ? t.clipControlEXT(t.LOWER_LEFT_EXT, t.ZERO_TO_ONE_EXT)
              : t.clipControlEXT(t.LOWER_LEFT_EXT, t.NEGATIVE_ONE_TO_ONE_EXT);
            const n = s;
            (s = null), this.setClear(n);
          }
          i = t;
        },
        getReversed: function () {
          return i;
        },
        setTest: function (e) {
          e ? rt(t.DEPTH_TEST) : at(t.DEPTH_TEST);
        },
        setMask: function (e) {
          r === e || n || (t.depthMask(e), (r = e));
        },
        setFunc: function (e) {
          if ((i && (e = uo[e]), a !== e)) {
            switch (e) {
              case 0:
                t.depthFunc(t.NEVER);
                break;
              case 1:
                t.depthFunc(t.ALWAYS);
                break;
              case 2:
                t.depthFunc(t.LESS);
                break;
              case 3:
              default:
                t.depthFunc(t.LEQUAL);
                break;
              case 4:
                t.depthFunc(t.EQUAL);
                break;
              case 5:
                t.depthFunc(t.GEQUAL);
                break;
              case 6:
                t.depthFunc(t.GREATER);
                break;
              case 7:
                t.depthFunc(t.NOTEQUAL);
            }
            a = e;
          }
        },
        setLocked: function (t) {
          n = t;
        },
        setClear: function (e) {
          s !== e && (i && (e = 1 - e), t.clearDepth(e), (s = e));
        },
        reset: function () {
          (n = !1), (r = null), (a = null), (s = null), (i = !1);
        },
      };
    })(),
    r = new (function () {
      let e = !1,
        n = null,
        i = null,
        r = null,
        a = null,
        s = null,
        o = null,
        l = null,
        c = null;
      return {
        setTest: function (n) {
          e || (n ? rt(t.STENCIL_TEST) : at(t.STENCIL_TEST));
        },
        setMask: function (i) {
          n === i || e || (t.stencilMask(i), (n = i));
        },
        setFunc: function (e, n, s) {
          (i === e && r === n && a === s) ||
            (t.stencilFunc(e, n, s), (i = e), (r = n), (a = s));
        },
        setOp: function (e, n, i) {
          (s === e && o === n && l === i) ||
            (t.stencilOp(e, n, i), (s = e), (o = n), (l = i));
        },
        setLocked: function (t) {
          e = t;
        },
        setClear: function (e) {
          c !== e && (t.clearStencil(e), (c = e));
        },
        reset: function () {
          (e = !1),
            (n = null),
            (i = null),
            (r = null),
            (a = null),
            (s = null),
            (o = null),
            (l = null),
            (c = null);
        },
      };
    })(),
    a = new WeakMap(),
    s = new WeakMap();
  let b = {},
    A = {},
    w = new WeakMap(),
    R = [],
    C = null,
    P = !1,
    L = null,
    U = null,
    D = null,
    I = null,
    N = null,
    O = null,
    F = null,
    B = new oi(0, 0, 0),
    z = 0,
    H = !1,
    V = null,
    G = null,
    k = null,
    W = null,
    X = null;
  const j = t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);
  let q = !1,
    Y = 0;
  const K = t.getParameter(t.VERSION);
  -1 !== K.indexOf("WebGL")
    ? ((Y = parseFloat(/^WebGL (\d)/.exec(K)[1])), (q = Y >= 1))
    : -1 !== K.indexOf("OpenGL ES") &&
      ((Y = parseFloat(/^OpenGL ES (\d)/.exec(K)[1])), (q = Y >= 2));
  let Z = null,
    J = {};
  const $ = t.getParameter(t.SCISSOR_BOX),
    Q = t.getParameter(t.VIEWPORT),
    tt = new Ue().fromArray($),
    et = new Ue().fromArray(Q);
  function nt(e, n, i, r) {
    const a = new Uint8Array(4),
      s = t.createTexture();
    t.bindTexture(e, s),
      t.texParameteri(e, t.TEXTURE_MIN_FILTER, t.NEAREST),
      t.texParameteri(e, t.TEXTURE_MAG_FILTER, t.NEAREST);
    for (let o = 0; i > o; o++)
      e === t.TEXTURE_3D || e === t.TEXTURE_2D_ARRAY
        ? t.texImage3D(n, 0, t.RGBA, 1, 1, r, 0, t.RGBA, t.UNSIGNED_BYTE, a)
        : t.texImage2D(n + o, 0, t.RGBA, 1, 1, 0, t.RGBA, t.UNSIGNED_BYTE, a);
    return s;
  }
  const it = {};
  function rt(e) {
    !0 !== b[e] && (t.enable(e), (b[e] = !0));
  }
  function at(e) {
    !1 !== b[e] && (t.disable(e), (b[e] = !1));
  }
  (it[t.TEXTURE_2D] = nt(t.TEXTURE_2D, t.TEXTURE_2D, 1)),
    (it[t.TEXTURE_CUBE_MAP] = nt(
      t.TEXTURE_CUBE_MAP,
      t.TEXTURE_CUBE_MAP_POSITIVE_X,
      6
    )),
    (it[t.TEXTURE_2D_ARRAY] = nt(t.TEXTURE_2D_ARRAY, t.TEXTURE_2D_ARRAY, 1, 1)),
    (it[t.TEXTURE_3D] = nt(t.TEXTURE_3D, t.TEXTURE_3D, 1, 1)),
    n.setClear(0, 0, 0, 1),
    i.setClear(1),
    r.setClear(0),
    rt(t.DEPTH_TEST),
    i.setFunc(3),
    ct(!1),
    ht(1),
    rt(t.CULL_FACE),
    lt(0);
  const st = {
    [o]: t.FUNC_ADD,
    [l]: t.FUNC_SUBTRACT,
    [c]: t.FUNC_REVERSE_SUBTRACT,
  };
  (st[103] = t.MIN), (st[104] = t.MAX);
  const ot = {
    [h]: t.ZERO,
    [u]: t.ONE,
    [d]: t.SRC_COLOR,
    [f]: t.SRC_ALPHA,
    [M]: t.SRC_ALPHA_SATURATE,
    [v]: t.DST_COLOR,
    [g]: t.DST_ALPHA,
    [p]: t.ONE_MINUS_SRC_COLOR,
    [m]: t.ONE_MINUS_SRC_ALPHA,
    [x]: t.ONE_MINUS_DST_COLOR,
    [_]: t.ONE_MINUS_DST_ALPHA,
    [S]: t.CONSTANT_COLOR,
    [y]: t.ONE_MINUS_CONSTANT_COLOR,
    [E]: t.CONSTANT_ALPHA,
    [T]: t.ONE_MINUS_CONSTANT_ALPHA,
  };
  function lt(e, n, i, r, a, s, l, c, h, u) {
    if (0 !== e) {
      if ((!1 === P && (rt(t.BLEND), (P = !0)), 5 === e))
        (a = a || n),
          (s = s || i),
          (l = l || r),
          (n === U && a === N) ||
            (t.blendEquationSeparate(st[n], st[a]), (U = n), (N = a)),
          (i === D && r === I && s === O && l === F) ||
            (t.blendFuncSeparate(ot[i], ot[r], ot[s], ot[l]),
            (D = i),
            (I = r),
            (O = s),
            (F = l)),
          (!1 !== c.equals(B) && h === z) ||
            (t.blendColor(c.r, c.g, c.b, h), B.copy(c), (z = h)),
          (L = e),
          (H = !1);
      else if (e !== L || u !== H) {
        if (
          ((U === o && N === o) ||
            (t.blendEquation(t.FUNC_ADD), (U = o), (N = o)),
          u)
        )
          switch (e) {
            case 1:
              t.blendFuncSeparate(
                t.ONE,
                t.ONE_MINUS_SRC_ALPHA,
                t.ONE,
                t.ONE_MINUS_SRC_ALPHA
              );
              break;
            case 2:
              t.blendFunc(t.ONE, t.ONE);
              break;
            case 3:
              t.blendFuncSeparate(t.ZERO, t.ONE_MINUS_SRC_COLOR, t.ZERO, t.ONE);
              break;
            case 4:
              t.blendFuncSeparate(t.ZERO, t.SRC_COLOR, t.ZERO, t.SRC_ALPHA);
          }
        else
          switch (e) {
            case 1:
              t.blendFuncSeparate(
                t.SRC_ALPHA,
                t.ONE_MINUS_SRC_ALPHA,
                t.ONE,
                t.ONE_MINUS_SRC_ALPHA
              );
              break;
            case 2:
              t.blendFunc(t.SRC_ALPHA, t.ONE);
              break;
            case 3:
              t.blendFuncSeparate(t.ZERO, t.ONE_MINUS_SRC_COLOR, t.ZERO, t.ONE);
              break;
            case 4:
              t.blendFunc(t.ZERO, t.SRC_COLOR);
          }
        (D = null),
          (I = null),
          (O = null),
          (F = null),
          B.set(0, 0, 0),
          (z = 0),
          (L = e),
          (H = u);
      }
    } else !0 === P && (at(t.BLEND), (P = !1));
  }
  function ct(e) {
    V !== e && (e ? t.frontFace(t.CW) : t.frontFace(t.CCW), (V = e));
  }
  function ht(e) {
    0 !== e
      ? (rt(t.CULL_FACE),
        e !== G &&
          (1 === e
            ? t.cullFace(t.BACK)
            : 2 === e
            ? t.cullFace(t.FRONT)
            : t.cullFace(t.FRONT_AND_BACK)))
      : at(t.CULL_FACE),
      (G = e);
  }
  function ut(e, n, i) {
    e
      ? (rt(t.POLYGON_OFFSET_FILL),
        (W === n && X === i) || (t.polygonOffset(n, i), (W = n), (X = i)))
      : at(t.POLYGON_OFFSET_FILL);
  }
  return {
    buffers: {
      color: n,
      depth: i,
      stencil: r,
    },
    enable: rt,
    disable: at,
    bindFramebuffer: function (e, n) {
      return (
        A[e] !== n &&
        (t.bindFramebuffer(e, n),
        (A[e] = n),
        e === t.DRAW_FRAMEBUFFER && (A[t.FRAMEBUFFER] = n),
        e === t.FRAMEBUFFER && (A[t.DRAW_FRAMEBUFFER] = n),
        !0)
      );
    },
    drawBuffers: function (e, n) {
      let i = R,
        r = !1;
      if (e) {
        (i = w.get(n)), void 0 === i && ((i = []), w.set(n, i));
        const a = e.textures;
        if (i.length !== a.length || i[0] !== t.COLOR_ATTACHMENT0) {
          for (let e = 0, n = a.length; n > e; e++)
            i[e] = t.COLOR_ATTACHMENT0 + e;
          (i.length = a.length), (r = !0);
        }
      } else i[0] !== t.BACK && ((i[0] = t.BACK), (r = !0));
      r && t.drawBuffers(i);
    },
    useProgram: function (e) {
      return C !== e && (t.useProgram(e), (C = e), !0);
    },
    setBlending: lt,
    setMaterial: function (e, a) {
      2 === e.side ? at(t.CULL_FACE) : rt(t.CULL_FACE);
      let s = 1 === e.side;
      a && (s = !s),
        ct(s),
        1 === e.blending && !1 === e.transparent
          ? lt(0)
          : lt(
              e.blending,
              e.blendEquation,
              e.blendSrc,
              e.blendDst,
              e.blendEquationAlpha,
              e.blendSrcAlpha,
              e.blendDstAlpha,
              e.blendColor,
              e.blendAlpha,
              e.premultipliedAlpha
            ),
        i.setFunc(e.depthFunc),
        i.setTest(e.depthTest),
        i.setMask(e.depthWrite),
        n.setMask(e.colorWrite);
      const o = e.stencilWrite;
      r.setTest(o),
        o &&
          (r.setMask(e.stencilWriteMask),
          r.setFunc(e.stencilFunc, e.stencilRef, e.stencilFuncMask),
          r.setOp(e.stencilFail, e.stencilZFail, e.stencilZPass)),
        ut(e.polygonOffset, e.polygonOffsetFactor, e.polygonOffsetUnits),
        !0 === e.alphaToCoverage
          ? rt(t.SAMPLE_ALPHA_TO_COVERAGE)
          : at(t.SAMPLE_ALPHA_TO_COVERAGE);
    },
    setFlipSided: ct,
    setCullFace: ht,
    setLineWidth: function (e) {
      e !== k && (q && t.lineWidth(e), (k = e));
    },
    setPolygonOffset: ut,
    setScissorTest: function (e) {
      e ? rt(t.SCISSOR_TEST) : at(t.SCISSOR_TEST);
    },
    activeTexture: function (e) {
      void 0 === e && (e = t.TEXTURE0 + j - 1),
        Z !== e && (t.activeTexture(e), (Z = e));
    },
    bindTexture: function (e, n, i) {
      void 0 === i && (i = null === Z ? t.TEXTURE0 + j - 1 : Z);
      let r = J[i];
      void 0 === r &&
        ((r = {
          type: void 0,
          texture: void 0,
        }),
        (J[i] = r)),
        (r.type === e && r.texture === n) ||
          (Z !== i && (t.activeTexture(i), (Z = i)),
          t.bindTexture(e, n || it[e]),
          (r.type = e),
          (r.texture = n));
    },
    unbindTexture: function () {
      const e = J[Z];
      void 0 !== e &&
        void 0 !== e.type &&
        (t.bindTexture(e.type, null), (e.type = void 0), (e.texture = void 0));
    },
    compressedTexImage2D: function () {
      try {
        t.compressedTexImage2D.apply(t, arguments);
      } catch (e) {}
    },
    compressedTexImage3D: function () {
      try {
        t.compressedTexImage3D.apply(t, arguments);
      } catch (e) {}
    },
    texImage2D: function () {
      try {
        t.texImage2D.apply(t, arguments);
      } catch (e) {}
    },
    texImage3D: function () {
      try {
        t.texImage3D.apply(t, arguments);
      } catch (e) {}
    },
    updateUBOMapping: function (e, n) {
      let i = s.get(n);
      void 0 === i && ((i = new WeakMap()), s.set(n, i));
      let r = i.get(e);
      void 0 === r && ((r = t.getUniformBlockIndex(n, e.name)), i.set(e, r));
    },
    uniformBlockBinding: function (e, n) {
      const i = s.get(n).get(e);
      a.get(n) !== i &&
        (t.uniformBlockBinding(n, i, e.__bindingPointIndex), a.set(n, i));
    },
    texStorage2D: function () {
      try {
        t.texStorage2D.apply(t, arguments);
      } catch (e) {}
    },
    texStorage3D: function () {
      try {
        t.texStorage3D.apply(t, arguments);
      } catch (e) {}
    },
    texSubImage2D: function () {
      try {
        t.texSubImage2D.apply(t, arguments);
      } catch (e) {}
    },
    texSubImage3D: function () {
      try {
        t.texSubImage3D.apply(t, arguments);
      } catch (e) {}
    },
    compressedTexSubImage2D: function () {
      try {
        t.compressedTexSubImage2D.apply(t, arguments);
      } catch (e) {}
    },
    compressedTexSubImage3D: function () {
      try {
        t.compressedTexSubImage3D.apply(t, arguments);
      } catch (e) {}
    },
    scissor: function (e) {
      !1 === tt.equals(e) && (t.scissor(e.x, e.y, e.z, e.w), tt.copy(e));
    },
    viewport: function (e) {
      !1 === et.equals(e) && (t.viewport(e.x, e.y, e.z, e.w), et.copy(e));
    },
    reset: function () {
      t.disable(t.BLEND),
        t.disable(t.CULL_FACE),
        t.disable(t.DEPTH_TEST),
        t.disable(t.POLYGON_OFFSET_FILL),
        t.disable(t.SCISSOR_TEST),
        t.disable(t.STENCIL_TEST),
        t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),
        t.blendEquation(t.FUNC_ADD),
        t.blendFunc(t.ONE, t.ZERO),
        t.blendFuncSeparate(t.ONE, t.ZERO, t.ONE, t.ZERO),
        t.blendColor(0, 0, 0, 0),
        t.colorMask(!0, !0, !0, !0),
        t.clearColor(0, 0, 0, 0),
        t.depthMask(!0),
        t.depthFunc(t.LESS),
        i.setReversed(!1),
        t.clearDepth(1),
        t.stencilMask(4294967295),
        t.stencilFunc(t.ALWAYS, 0, 4294967295),
        t.stencilOp(t.KEEP, t.KEEP, t.KEEP),
        t.clearStencil(0),
        t.cullFace(t.BACK),
        t.frontFace(t.CCW),
        t.polygonOffset(0, 0),
        t.activeTexture(t.TEXTURE0),
        t.bindFramebuffer(t.FRAMEBUFFER, null),
        t.bindFramebuffer(t.DRAW_FRAMEBUFFER, null),
        t.bindFramebuffer(t.READ_FRAMEBUFFER, null),
        t.useProgram(null),
        t.lineWidth(1),
        t.scissor(0, 0, t.canvas.width, t.canvas.height),
        t.viewport(0, 0, t.canvas.width, t.canvas.height),
        (b = {}),
        (Z = null),
        (J = {}),
        (A = {}),
        (w = new WeakMap()),
        (R = []),
        (C = null),
        (P = !1),
        (L = null),
        (U = null),
        (D = null),
        (I = null),
        (N = null),
        (O = null),
        (F = null),
        (B = new oi(0, 0, 0)),
        (z = 0),
        (H = !1),
        (V = null),
        (G = null),
        (k = null),
        (W = null),
        (X = null),
        tt.set(0, 0, t.canvas.width, t.canvas.height),
        et.set(0, 0, t.canvas.width, t.canvas.height),
        n.reset(),
        i.reset(),
        r.reset();
    },
  };
}
function fo(t, e, n, i, r, a, s) {
  const o = e.has("WEBGL_multisampled_render_to_texture")
      ? e.get("WEBGL_multisampled_render_to_texture")
      : null,
    l =
      "undefined" != typeof navigator &&
      /OculusBrowser/g.test(navigator.userAgent),
    c = new ue(),
    h = new WeakMap();
  let u;
  const d = new WeakMap();
  let p = !1;
  try {
    p =
      "undefined" != typeof OffscreenCanvas &&
      null !== new OffscreenCanvas(1, 1).getContext("2d");
  } catch (tt) {}
  function f(t, e) {
    return p ? new OffscreenCanvas(t, e) : me("canvas");
  }
  function m(t, e, n) {
    let i = 1;
    const r = Q(t);
    if (
      ((r.width > n || r.height > n) && (i = n / Math.max(r.width, r.height)),
      1 > i)
    ) {
      if (
        ("undefined" != typeof HTMLImageElement &&
          t instanceof HTMLImageElement) ||
        ("undefined" != typeof HTMLCanvasElement &&
          t instanceof HTMLCanvasElement) ||
        ("undefined" != typeof ImageBitmap && t instanceof ImageBitmap) ||
        ("undefined" != typeof VideoFrame && t instanceof VideoFrame)
      ) {
        const n = Math.floor(i * r.width),
          a = Math.floor(i * r.height);
        void 0 === u && (u = f(n, a));
        const s = e ? f(n, a) : u;
        return (
          (s.width = n),
          (s.height = a),
          s.getContext("2d").drawImage(t, 0, 0, n, a),
          s
        );
      }
      return t;
    }
    return t;
  }
  function g(t) {
    return t.generateMipmaps;
  }
  function _(e) {
    t.generateMipmap(e);
  }
  function v(e) {
    return e.isWebGLCubeRenderTarget
      ? t.TEXTURE_CUBE_MAP
      : e.isWebGL3DRenderTarget
      ? t.TEXTURE_3D
      : e.isWebGLArrayRenderTarget || e.isCompressedArrayTexture
      ? t.TEXTURE_2D_ARRAY
      : t.TEXTURE_2D;
  }
  function x(n, i, r, a, s = !1) {
    if (null !== n && void 0 !== t[n]) return t[n];
    let o = i;
    if (
      (i === t.RED &&
        (r === t.FLOAT && (o = t.R32F),
        r === t.HALF_FLOAT && (o = t.R16F),
        r === t.UNSIGNED_BYTE && (o = t.R8)),
      i === t.RED_INTEGER &&
        (r === t.UNSIGNED_BYTE && (o = t.R8UI),
        r === t.UNSIGNED_SHORT && (o = t.R16UI),
        r === t.UNSIGNED_INT && (o = t.R32UI),
        r === t.BYTE && (o = t.R8I),
        r === t.SHORT && (o = t.R16I),
        r === t.INT && (o = t.R32I)),
      i === t.RG &&
        (r === t.FLOAT && (o = t.RG32F),
        r === t.HALF_FLOAT && (o = t.RG16F),
        r === t.UNSIGNED_BYTE && (o = t.RG8)),
      i === t.RG_INTEGER &&
        (r === t.UNSIGNED_BYTE && (o = t.RG8UI),
        r === t.UNSIGNED_SHORT && (o = t.RG16UI),
        r === t.UNSIGNED_INT && (o = t.RG32UI),
        r === t.BYTE && (o = t.RG8I),
        r === t.SHORT && (o = t.RG16I),
        r === t.INT && (o = t.RG32I)),
      i === t.RGB_INTEGER &&
        (r === t.UNSIGNED_BYTE && (o = t.RGB8UI),
        r === t.UNSIGNED_SHORT && (o = t.RGB16UI),
        r === t.UNSIGNED_INT && (o = t.RGB32UI),
        r === t.BYTE && (o = t.RGB8I),
        r === t.SHORT && (o = t.RGB16I),
        r === t.INT && (o = t.RGB32I)),
      i === t.RGBA_INTEGER &&
        (r === t.UNSIGNED_BYTE && (o = t.RGBA8UI),
        r === t.UNSIGNED_SHORT && (o = t.RGBA16UI),
        r === t.UNSIGNED_INT && (o = t.RGBA32UI),
        r === t.BYTE && (o = t.RGBA8I),
        r === t.SHORT && (o = t.RGBA16I),
        r === t.INT && (o = t.RGBA32I)),
      i === t.RGB && r === t.UNSIGNED_INT_5_9_9_9_REV && (o = t.RGB9_E5),
      i === t.RGBA)
    ) {
      const e = s ? Gt : ye.getTransfer(a);
      r === t.FLOAT && (o = t.RGBA32F),
        r === t.HALF_FLOAT && (o = t.RGBA16F),
        r === t.UNSIGNED_BYTE && (o = e === kt ? t.SRGB8_ALPHA8 : t.RGBA8),
        r === t.UNSIGNED_SHORT_4_4_4_4 && (o = t.RGBA4),
        r === t.UNSIGNED_SHORT_5_5_5_1 && (o = t.RGB5_A1);
    }
    return (
      (o !== t.R16F &&
        o !== t.R32F &&
        o !== t.RG16F &&
        o !== t.RG32F &&
        o !== t.RGBA16F &&
        o !== t.RGBA32F) ||
        e.get("EXT_color_buffer_float"),
      o
    );
  }
  function M(e, n) {
    let i;
    return (
      e
        ? null === n || n === Z || n === et
          ? (i = t.DEPTH24_STENCIL8)
          : n === J
          ? (i = t.DEPTH32F_STENCIL8)
          : n === Y && (i = t.DEPTH24_STENCIL8)
        : null === n || n === Z || n === et
        ? (i = t.DEPTH_COMPONENT24)
        : n === J
        ? (i = t.DEPTH_COMPONENT32F)
        : n === Y && (i = t.DEPTH_COMPONENT16),
      i
    );
  }
  function S(t, e) {
    return !0 === g(t) ||
      (t.isFramebufferTexture && t.minFilter !== V && t.minFilter !== W)
      ? Math.log2(Math.max(e.width, e.height)) + 1
      : void 0 !== t.mipmaps && t.mipmaps.length > 0
      ? t.mipmaps.length
      : t.isCompressedTexture && Array.isArray(t.image)
      ? e.mipmaps.length
      : 1;
  }
  function y(t) {
    const e = t.target;
    e.removeEventListener("dispose", y),
      (function (t) {
        const e = i.get(t);
        if (void 0 === e.__webglInit) return;
        const n = t.source,
          r = d.get(n);
        if (r) {
          const i = r[e.__cacheKey];
          i.usedTimes--,
            0 === i.usedTimes && T(t),
            0 === Object.keys(r).length && d.delete(n);
        }
        i.remove(t);
      })(e),
      e.isVideoTexture && h.delete(e);
  }
  function E(e) {
    const n = e.target;
    n.removeEventListener("dispose", E),
      (function (e) {
        const n = i.get(e);
        if (
          (e.depthTexture &&
            (e.depthTexture.dispose(), i.remove(e.depthTexture)),
          e.isWebGLCubeRenderTarget)
        )
          for (let i = 0; 6 > i; i++) {
            if (Array.isArray(n.__webglFramebuffer[i]))
              for (let e = 0; e < n.__webglFramebuffer[i].length; e++)
                t.deleteFramebuffer(n.__webglFramebuffer[i][e]);
            else t.deleteFramebuffer(n.__webglFramebuffer[i]);
            n.__webglDepthbuffer &&
              t.deleteRenderbuffer(n.__webglDepthbuffer[i]);
          }
        else {
          if (Array.isArray(n.__webglFramebuffer))
            for (let e = 0; e < n.__webglFramebuffer.length; e++)
              t.deleteFramebuffer(n.__webglFramebuffer[e]);
          else t.deleteFramebuffer(n.__webglFramebuffer);
          if (
            (n.__webglDepthbuffer && t.deleteRenderbuffer(n.__webglDepthbuffer),
            n.__webglMultisampledFramebuffer &&
              t.deleteFramebuffer(n.__webglMultisampledFramebuffer),
            n.__webglColorRenderbuffer)
          )
            for (let e = 0; e < n.__webglColorRenderbuffer.length; e++)
              n.__webglColorRenderbuffer[e] &&
                t.deleteRenderbuffer(n.__webglColorRenderbuffer[e]);
          n.__webglDepthRenderbuffer &&
            t.deleteRenderbuffer(n.__webglDepthRenderbuffer);
        }
        const r = e.textures;
        for (let a = 0, o = r.length; o > a; a++) {
          const e = i.get(r[a]);
          e.__webglTexture &&
            (t.deleteTexture(e.__webglTexture), s.memory.textures--),
            i.remove(r[a]);
        }
        i.remove(e);
      })(n);
  }
  function T(e) {
    const n = i.get(e);
    t.deleteTexture(n.__webglTexture);
    const r = e.source;
    delete d.get(r)[n.__cacheKey], s.memory.textures--;
  }
  let b = 0;
  function A(e, r) {
    const a = i.get(e);
    if (
      (e.isVideoTexture &&
        (function (t) {
          const e = s.render.frame;
          h.get(t) !== e && (h.set(t, e), t.update());
        })(e),
      !1 === e.isRenderTargetTexture &&
        e.version > 0 &&
        a.__version !== e.version)
    ) {
      const t = e.image;
      if (null === t);
      else if (!1 !== t.complete) return void U(a, e, r);
    }
    n.bindTexture(t.TEXTURE_2D, a.__webglTexture, t.TEXTURE0 + r);
  }
  const w = {
      [B]: t.REPEAT,
      [z]: t.CLAMP_TO_EDGE,
      [H]: t.MIRRORED_REPEAT,
    },
    R = {
      [V]: t.NEAREST,
      [G]: t.NEAREST_MIPMAP_NEAREST,
      [k]: t.NEAREST_MIPMAP_LINEAR,
      [W]: t.LINEAR,
      [X]: t.LINEAR_MIPMAP_NEAREST,
      [j]: t.LINEAR_MIPMAP_LINEAR,
    },
    C = {
      [Xt]: t.NEVER,
      [$t]: t.ALWAYS,
      [jt]: t.LESS,
      [Yt]: t.LEQUAL,
      [qt]: t.EQUAL,
      [Jt]: t.GEQUAL,
      [Kt]: t.GREATER,
      [Zt]: t.NOTEQUAL,
    };
  function P(n, a) {
    if (
      (a.type === J &&
        !1 === e.has("OES_texture_float_linear") &&
        (a.magFilter === W ||
          a.magFilter === X ||
          a.magFilter === k ||
          a.magFilter === j ||
          a.minFilter === W ||
          a.minFilter === X ||
          a.minFilter === k ||
          a.minFilter),
      t.texParameteri(n, t.TEXTURE_WRAP_S, w[a.wrapS]),
      t.texParameteri(n, t.TEXTURE_WRAP_T, w[a.wrapT]),
      (n !== t.TEXTURE_3D && n !== t.TEXTURE_2D_ARRAY) ||
        t.texParameteri(n, t.TEXTURE_WRAP_R, w[a.wrapR]),
      t.texParameteri(n, t.TEXTURE_MAG_FILTER, R[a.magFilter]),
      t.texParameteri(n, t.TEXTURE_MIN_FILTER, R[a.minFilter]),
      a.compareFunction &&
        (t.texParameteri(n, t.TEXTURE_COMPARE_MODE, t.COMPARE_REF_TO_TEXTURE),
        t.texParameteri(n, t.TEXTURE_COMPARE_FUNC, C[a.compareFunction])),
      !0 === e.has("EXT_texture_filter_anisotropic"))
    ) {
      if (a.magFilter === V) return;
      if (a.minFilter !== k && a.minFilter !== j) return;
      if (a.type === J && !1 === e.has("OES_texture_float_linear")) return;
      if (a.anisotropy > 1 || i.get(a).__currentAnisotropy) {
        const s = e.get("EXT_texture_filter_anisotropic");
        t.texParameterf(
          n,
          s.TEXTURE_MAX_ANISOTROPY_EXT,
          Math.min(a.anisotropy, r.getMaxAnisotropy())
        ),
          (i.get(a).__currentAnisotropy = a.anisotropy);
      }
    }
  }
  function L(e, n) {
    let i = !1;
    void 0 === e.__webglInit &&
      ((e.__webglInit = !0), n.addEventListener("dispose", y));
    const r = n.source;
    let a = d.get(r);
    void 0 === a && ((a = {}), d.set(r, a));
    const o = (function (t) {
      const e = [];
      return (
        e.push(t.wrapS),
        e.push(t.wrapT),
        e.push(t.wrapR || 0),
        e.push(t.magFilter),
        e.push(t.minFilter),
        e.push(t.anisotropy),
        e.push(t.internalFormat),
        e.push(t.format),
        e.push(t.type),
        e.push(t.generateMipmaps),
        e.push(t.premultiplyAlpha),
        e.push(t.flipY),
        e.push(t.unpackAlignment),
        e.push(t.colorSpace),
        e.join()
      );
    })(n);
    if (o !== e.__cacheKey) {
      void 0 === a[o] &&
        ((a[o] = {
          texture: t.createTexture(),
          usedTimes: 0,
        }),
        s.memory.textures++,
        (i = !0)),
        a[o].usedTimes++;
      const r = a[e.__cacheKey];
      void 0 !== r && (a[e.__cacheKey].usedTimes--, 0 === r.usedTimes && T(n)),
        (e.__cacheKey = o),
        (e.__webglTexture = a[o].texture);
    }
    return i;
  }
  function U(e, s, o) {
    let l = t.TEXTURE_2D;
    (s.isDataArrayTexture || s.isCompressedArrayTexture) &&
      (l = t.TEXTURE_2D_ARRAY),
      s.isData3DTexture && (l = t.TEXTURE_3D);
    const c = L(e, s),
      h = s.source;
    n.bindTexture(l, e.__webglTexture, t.TEXTURE0 + o);
    const u = i.get(h);
    if (h.version !== u.__version || !0 === c) {
      n.activeTexture(t.TEXTURE0 + o);
      const e = ye.getPrimaries(ye.workingColorSpace),
        i = s.colorSpace === zt ? null : ye.getPrimaries(s.colorSpace),
        d = s.colorSpace === zt || e === i ? t.NONE : t.BROWSER_DEFAULT_WEBGL;
      t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL, s.flipY),
        t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL, s.premultiplyAlpha),
        t.pixelStorei(t.UNPACK_ALIGNMENT, s.unpackAlignment),
        t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL, d);
      let p = m(s.image, !1, r.maxTextureSize);
      p = $(s, p);
      const f = a.convert(s.format, s.colorSpace),
        v = a.convert(s.type);
      let y,
        E = x(s.internalFormat, f, v, s.colorSpace, s.isVideoTexture);
      P(l, s);
      const T = s.mipmaps,
        b = !0 !== s.isVideoTexture,
        A = void 0 === u.__version || !0 === c,
        w = h.dataReady,
        R = S(s, p);
      if (s.isDepthTexture)
        (E = M(s.format === rt, s.type)),
          A &&
            (b
              ? n.texStorage2D(t.TEXTURE_2D, 1, E, p.width, p.height)
              : n.texImage2D(
                  t.TEXTURE_2D,
                  0,
                  E,
                  p.width,
                  p.height,
                  0,
                  f,
                  v,
                  null
                ));
      else if (s.isDataTexture)
        if (T.length > 0) {
          b && A && n.texStorage2D(t.TEXTURE_2D, R, E, T[0].width, T[0].height);
          for (let e = 0, i = T.length; i > e; e++)
            (y = T[e]),
              b
                ? w &&
                  n.texSubImage2D(
                    t.TEXTURE_2D,
                    e,
                    0,
                    0,
                    y.width,
                    y.height,
                    f,
                    v,
                    y.data
                  )
                : n.texImage2D(
                    t.TEXTURE_2D,
                    e,
                    E,
                    y.width,
                    y.height,
                    0,
                    f,
                    v,
                    y.data
                  );
          s.generateMipmaps = !1;
        } else
          b
            ? (A && n.texStorage2D(t.TEXTURE_2D, R, E, p.width, p.height),
              w &&
                n.texSubImage2D(
                  t.TEXTURE_2D,
                  0,
                  0,
                  0,
                  p.width,
                  p.height,
                  f,
                  v,
                  p.data
                ))
            : n.texImage2D(
                t.TEXTURE_2D,
                0,
                E,
                p.width,
                p.height,
                0,
                f,
                v,
                p.data
              );
      else if (s.isCompressedTexture)
        if (s.isCompressedArrayTexture) {
          b &&
            A &&
            n.texStorage3D(
              t.TEXTURE_2D_ARRAY,
              R,
              E,
              T[0].width,
              T[0].height,
              p.depth
            );
          for (let e = 0, i = T.length; i > e; e++)
            if (((y = T[e]), s.format !== nt)) {
              if (null !== f)
                if (b) {
                  if (w)
                    if (s.layerUpdates.size > 0) {
                      const i = Gr(y.width, y.height, s.format, s.type);
                      for (const r of s.layerUpdates) {
                        const a = y.data.subarray(
                          (r * i) / y.data.BYTES_PER_ELEMENT,
                          ((r + 1) * i) / y.data.BYTES_PER_ELEMENT
                        );
                        n.compressedTexSubImage3D(
                          t.TEXTURE_2D_ARRAY,
                          e,
                          0,
                          0,
                          r,
                          y.width,
                          y.height,
                          1,
                          f,
                          a
                        );
                      }
                      s.clearLayerUpdates();
                    } else
                      n.compressedTexSubImage3D(
                        t.TEXTURE_2D_ARRAY,
                        e,
                        0,
                        0,
                        0,
                        y.width,
                        y.height,
                        p.depth,
                        f,
                        y.data
                      );
                } else
                  n.compressedTexImage3D(
                    t.TEXTURE_2D_ARRAY,
                    e,
                    E,
                    y.width,
                    y.height,
                    p.depth,
                    0,
                    y.data,
                    0,
                    0
                  );
            } else
              b
                ? w &&
                  n.texSubImage3D(
                    t.TEXTURE_2D_ARRAY,
                    e,
                    0,
                    0,
                    0,
                    y.width,
                    y.height,
                    p.depth,
                    f,
                    v,
                    y.data
                  )
                : n.texImage3D(
                    t.TEXTURE_2D_ARRAY,
                    e,
                    E,
                    y.width,
                    y.height,
                    p.depth,
                    0,
                    f,
                    v,
                    y.data
                  );
        } else {
          b && A && n.texStorage2D(t.TEXTURE_2D, R, E, T[0].width, T[0].height);
          for (let e = 0, i = T.length; i > e; e++)
            (y = T[e]),
              s.format !== nt
                ? null !== f &&
                  (b
                    ? w &&
                      n.compressedTexSubImage2D(
                        t.TEXTURE_2D,
                        e,
                        0,
                        0,
                        y.width,
                        y.height,
                        f,
                        y.data
                      )
                    : n.compressedTexImage2D(
                        t.TEXTURE_2D,
                        e,
                        E,
                        y.width,
                        y.height,
                        0,
                        y.data
                      ))
                : b
                ? w &&
                  n.texSubImage2D(
                    t.TEXTURE_2D,
                    e,
                    0,
                    0,
                    y.width,
                    y.height,
                    f,
                    v,
                    y.data
                  )
                : n.texImage2D(
                    t.TEXTURE_2D,
                    e,
                    E,
                    y.width,
                    y.height,
                    0,
                    f,
                    v,
                    y.data
                  );
        }
      else if (s.isDataArrayTexture)
        if (b) {
          if (
            (A &&
              n.texStorage3D(
                t.TEXTURE_2D_ARRAY,
                R,
                E,
                p.width,
                p.height,
                p.depth
              ),
            w)
          )
            if (s.layerUpdates.size > 0) {
              const e = Gr(p.width, p.height, s.format, s.type);
              for (const i of s.layerUpdates) {
                const r = p.data.subarray(
                  (i * e) / p.data.BYTES_PER_ELEMENT,
                  ((i + 1) * e) / p.data.BYTES_PER_ELEMENT
                );
                n.texSubImage3D(
                  t.TEXTURE_2D_ARRAY,
                  0,
                  0,
                  0,
                  i,
                  p.width,
                  p.height,
                  1,
                  f,
                  v,
                  r
                );
              }
              s.clearLayerUpdates();
            } else
              n.texSubImage3D(
                t.TEXTURE_2D_ARRAY,
                0,
                0,
                0,
                0,
                p.width,
                p.height,
                p.depth,
                f,
                v,
                p.data
              );
        } else
          n.texImage3D(
            t.TEXTURE_2D_ARRAY,
            0,
            E,
            p.width,
            p.height,
            p.depth,
            0,
            f,
            v,
            p.data
          );
      else if (s.isData3DTexture)
        b
          ? (A &&
              n.texStorage3D(t.TEXTURE_3D, R, E, p.width, p.height, p.depth),
            w &&
              n.texSubImage3D(
                t.TEXTURE_3D,
                0,
                0,
                0,
                0,
                p.width,
                p.height,
                p.depth,
                f,
                v,
                p.data
              ))
          : n.texImage3D(
              t.TEXTURE_3D,
              0,
              E,
              p.width,
              p.height,
              p.depth,
              0,
              f,
              v,
              p.data
            );
      else if (s.isFramebufferTexture) {
        if (A)
          if (b) n.texStorage2D(t.TEXTURE_2D, R, E, p.width, p.height);
          else {
            let e = p.width,
              i = p.height;
            for (let r = 0; R > r; r++)
              n.texImage2D(t.TEXTURE_2D, r, E, e, i, 0, f, v, null),
                (e >>= 1),
                (i >>= 1);
          }
      } else if (T.length > 0) {
        if (b && A) {
          const e = Q(T[0]);
          n.texStorage2D(t.TEXTURE_2D, R, E, e.width, e.height);
        }
        for (let e = 0, i = T.length; i > e; e++)
          (y = T[e]),
            b
              ? w && n.texSubImage2D(t.TEXTURE_2D, e, 0, 0, f, v, y)
              : n.texImage2D(t.TEXTURE_2D, e, E, f, v, y);
        s.generateMipmaps = !1;
      } else if (b) {
        if (A) {
          const e = Q(p);
          n.texStorage2D(t.TEXTURE_2D, R, E, e.width, e.height);
        }
        w && n.texSubImage2D(t.TEXTURE_2D, 0, 0, 0, f, v, p);
      } else n.texImage2D(t.TEXTURE_2D, 0, E, f, v, p);
      g(s) && _(l), (u.__version = h.version), s.onUpdate && s.onUpdate(s);
    }
    e.__version = s.version;
  }
  function D(e, r, s, l, c, h) {
    const u = a.convert(s.format, s.colorSpace),
      d = a.convert(s.type),
      p = x(s.internalFormat, u, d, s.colorSpace),
      f = i.get(r),
      m = i.get(s);
    if (((m.__renderTarget = r), !f.__hasExternalTextures)) {
      const e = Math.max(1, r.width >> h),
        i = Math.max(1, r.height >> h);
      c === t.TEXTURE_3D || c === t.TEXTURE_2D_ARRAY
        ? n.texImage3D(c, h, p, e, i, r.depth, 0, u, d, null)
        : n.texImage2D(c, h, p, e, i, 0, u, d, null);
    }
    n.bindFramebuffer(t.FRAMEBUFFER, e),
      K(r)
        ? o.framebufferTexture2DMultisampleEXT(
            t.FRAMEBUFFER,
            l,
            c,
            m.__webglTexture,
            0,
            q(r)
          )
        : (c !== t.TEXTURE_2D &&
            (c < t.TEXTURE_CUBE_MAP_POSITIVE_X ||
              c > t.TEXTURE_CUBE_MAP_NEGATIVE_Z)) ||
          t.framebufferTexture2D(t.FRAMEBUFFER, l, c, m.__webglTexture, h),
      n.bindFramebuffer(t.FRAMEBUFFER, null);
  }
  function I(e, n, i) {
    if ((t.bindRenderbuffer(t.RENDERBUFFER, e), n.depthBuffer)) {
      const r = n.depthTexture,
        a = r && r.isDepthTexture ? r.type : null,
        s = M(n.stencilBuffer, a),
        l = n.stencilBuffer ? t.DEPTH_STENCIL_ATTACHMENT : t.DEPTH_ATTACHMENT,
        c = q(n);
      K(n)
        ? o.renderbufferStorageMultisampleEXT(
            t.RENDERBUFFER,
            c,
            s,
            n.width,
            n.height
          )
        : i
        ? t.renderbufferStorageMultisample(
            t.RENDERBUFFER,
            c,
            s,
            n.width,
            n.height
          )
        : t.renderbufferStorage(t.RENDERBUFFER, s, n.width, n.height),
        t.framebufferRenderbuffer(t.FRAMEBUFFER, l, t.RENDERBUFFER, e);
    } else {
      const e = n.textures;
      for (let r = 0; r < e.length; r++) {
        const s = e[r],
          l = a.convert(s.format, s.colorSpace),
          c = a.convert(s.type),
          h = x(s.internalFormat, l, c, s.colorSpace),
          u = q(n);
        i && !1 === K(n)
          ? t.renderbufferStorageMultisample(
              t.RENDERBUFFER,
              u,
              h,
              n.width,
              n.height
            )
          : K(n)
          ? o.renderbufferStorageMultisampleEXT(
              t.RENDERBUFFER,
              u,
              h,
              n.width,
              n.height
            )
          : t.renderbufferStorage(t.RENDERBUFFER, h, n.width, n.height);
      }
    }
    t.bindRenderbuffer(t.RENDERBUFFER, null);
  }
  function N(e) {
    const r = i.get(e),
      a = !0 === e.isWebGLCubeRenderTarget;
    if (r.__boundDepthTexture !== e.depthTexture) {
      const t = e.depthTexture;
      if ((r.__depthDisposeCallback && r.__depthDisposeCallback(), t)) {
        const e = () => {
          delete r.__boundDepthTexture,
            delete r.__depthDisposeCallback,
            t.removeEventListener("dispose", e);
        };
        t.addEventListener("dispose", e), (r.__depthDisposeCallback = e);
      }
      r.__boundDepthTexture = t;
    }
    if (e.depthTexture && !r.__autoAllocateDepthBuffer) {
      if (a)
        throw Error("target.depthTexture not supported in Cube render targets");
      !(function (e, r) {
        if (r && r.isWebGLCubeRenderTarget)
          throw Error(
            "Depth Texture with cube render targets is not supported"
          );
        if (
          (n.bindFramebuffer(t.FRAMEBUFFER, e),
          !r.depthTexture || !r.depthTexture.isDepthTexture)
        )
          throw Error(
            "renderTarget.depthTexture must be an instance of THREE.DepthTexture"
          );
        const a = i.get(r.depthTexture);
        (a.__renderTarget = r),
          (a.__webglTexture &&
            r.depthTexture.image.width === r.width &&
            r.depthTexture.image.height === r.height) ||
            ((r.depthTexture.image.width = r.width),
            (r.depthTexture.image.height = r.height),
            (r.depthTexture.needsUpdate = !0)),
          A(r.depthTexture, 0);
        const s = a.__webglTexture,
          l = q(r);
        if (r.depthTexture.format === it)
          K(r)
            ? o.framebufferTexture2DMultisampleEXT(
                t.FRAMEBUFFER,
                t.DEPTH_ATTACHMENT,
                t.TEXTURE_2D,
                s,
                0,
                l
              )
            : t.framebufferTexture2D(
                t.FRAMEBUFFER,
                t.DEPTH_ATTACHMENT,
                t.TEXTURE_2D,
                s,
                0
              );
        else {
          if (r.depthTexture.format !== rt)
            throw Error("Unknown depthTexture format");
          K(r)
            ? o.framebufferTexture2DMultisampleEXT(
                t.FRAMEBUFFER,
                t.DEPTH_STENCIL_ATTACHMENT,
                t.TEXTURE_2D,
                s,
                0,
                l
              )
            : t.framebufferTexture2D(
                t.FRAMEBUFFER,
                t.DEPTH_STENCIL_ATTACHMENT,
                t.TEXTURE_2D,
                s,
                0
              );
        }
      })(r.__webglFramebuffer, e);
    } else if (a) {
      r.__webglDepthbuffer = [];
      for (let i = 0; 6 > i; i++)
        if (
          (n.bindFramebuffer(t.FRAMEBUFFER, r.__webglFramebuffer[i]),
          void 0 === r.__webglDepthbuffer[i])
        )
          (r.__webglDepthbuffer[i] = t.createRenderbuffer()),
            I(r.__webglDepthbuffer[i], e, !1);
        else {
          const n = e.stencilBuffer
              ? t.DEPTH_STENCIL_ATTACHMENT
              : t.DEPTH_ATTACHMENT,
            a = r.__webglDepthbuffer[i];
          t.bindRenderbuffer(t.RENDERBUFFER, a),
            t.framebufferRenderbuffer(t.FRAMEBUFFER, n, t.RENDERBUFFER, a);
        }
    } else if (
      (n.bindFramebuffer(t.FRAMEBUFFER, r.__webglFramebuffer),
      void 0 === r.__webglDepthbuffer)
    )
      (r.__webglDepthbuffer = t.createRenderbuffer()),
        I(r.__webglDepthbuffer, e, !1);
    else {
      const n = e.stencilBuffer
          ? t.DEPTH_STENCIL_ATTACHMENT
          : t.DEPTH_ATTACHMENT,
        i = r.__webglDepthbuffer;
      t.bindRenderbuffer(t.RENDERBUFFER, i),
        t.framebufferRenderbuffer(t.FRAMEBUFFER, n, t.RENDERBUFFER, i);
    }
    n.bindFramebuffer(t.FRAMEBUFFER, null);
  }
  const O = [],
    F = [];
  function q(t) {
    return Math.min(r.maxSamples, t.samples);
  }
  function K(t) {
    const n = i.get(t);
    return (
      t.samples > 0 &&
      !0 === e.has("WEBGL_multisampled_render_to_texture") &&
      !1 !== n.__useRenderToTexture
    );
  }
  function $(t, e) {
    const n = t.colorSpace;
    return (
      t.format,
      t.type,
      !0 === t.isCompressedTexture ||
        !0 === t.isVideoTexture ||
        (n !== Vt && n !== zt && ye.getTransfer(n)),
      e
    );
  }
  function Q(t) {
    return (
      "undefined" != typeof HTMLImageElement && t instanceof HTMLImageElement
        ? ((c.width = t.naturalWidth || t.width),
          (c.height = t.naturalHeight || t.height))
        : "undefined" != typeof VideoFrame && t instanceof VideoFrame
        ? ((c.width = t.displayWidth), (c.height = t.displayHeight))
        : ((c.width = t.width), (c.height = t.height)),
      c
    );
  }
  (this.allocateTextureUnit = function () {
    const t = b;
    return r.maxTextures, (b += 1), t;
  }),
    (this.resetTextureUnits = function () {
      b = 0;
    }),
    (this.setTexture2D = A),
    (this.setTexture2DArray = function (e, r) {
      const a = i.get(e);
      e.version > 0 && a.__version !== e.version
        ? U(a, e, r)
        : n.bindTexture(t.TEXTURE_2D_ARRAY, a.__webglTexture, t.TEXTURE0 + r);
    }),
    (this.setTexture3D = function (e, r) {
      const a = i.get(e);
      e.version > 0 && a.__version !== e.version
        ? U(a, e, r)
        : n.bindTexture(t.TEXTURE_3D, a.__webglTexture, t.TEXTURE0 + r);
    }),
    (this.setTextureCube = function (e, s) {
      const o = i.get(e);
      e.version > 0 && o.__version !== e.version
        ? (function (e, s, o) {
            if (6 !== s.image.length) return;
            const l = L(e, s),
              c = s.source;
            n.bindTexture(t.TEXTURE_CUBE_MAP, e.__webglTexture, t.TEXTURE0 + o);
            const h = i.get(c);
            if (c.version !== h.__version || !0 === l) {
              n.activeTexture(t.TEXTURE0 + o);
              const e = ye.getPrimaries(ye.workingColorSpace),
                i = s.colorSpace === zt ? null : ye.getPrimaries(s.colorSpace),
                u =
                  s.colorSpace === zt || e === i
                    ? t.NONE
                    : t.BROWSER_DEFAULT_WEBGL;
              t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL, s.flipY),
                t.pixelStorei(
                  t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,
                  s.premultiplyAlpha
                ),
                t.pixelStorei(t.UNPACK_ALIGNMENT, s.unpackAlignment),
                t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL, u);
              const d = s.isCompressedTexture || s.image[0].isCompressedTexture,
                p = s.image[0] && s.image[0].isDataTexture,
                f = [];
              for (let t = 0; 6 > t; t++)
                (f[t] =
                  d || p
                    ? p
                      ? s.image[t].image
                      : s.image[t]
                    : m(s.image[t], !0, r.maxCubemapSize)),
                  (f[t] = $(s, f[t]));
              const v = f[0],
                M = a.convert(s.format, s.colorSpace),
                y = a.convert(s.type),
                E = x(s.internalFormat, M, y, s.colorSpace),
                T = !0 !== s.isVideoTexture,
                b = void 0 === h.__version || !0 === l,
                A = c.dataReady;
              let w,
                R = S(s, v);
              if ((P(t.TEXTURE_CUBE_MAP, s), d)) {
                T &&
                  b &&
                  n.texStorage2D(t.TEXTURE_CUBE_MAP, R, E, v.width, v.height);
                for (let e = 0; 6 > e; e++) {
                  w = f[e].mipmaps;
                  for (let i = 0; i < w.length; i++) {
                    const r = w[i];
                    s.format !== nt
                      ? null !== M &&
                        (T
                          ? A &&
                            n.compressedTexSubImage2D(
                              t.TEXTURE_CUBE_MAP_POSITIVE_X + e,
                              i,
                              0,
                              0,
                              r.width,
                              r.height,
                              M,
                              r.data
                            )
                          : n.compressedTexImage2D(
                              t.TEXTURE_CUBE_MAP_POSITIVE_X + e,
                              i,
                              E,
                              r.width,
                              r.height,
                              0,
                              r.data
                            ))
                      : T
                      ? A &&
                        n.texSubImage2D(
                          t.TEXTURE_CUBE_MAP_POSITIVE_X + e,
                          i,
                          0,
                          0,
                          r.width,
                          r.height,
                          M,
                          y,
                          r.data
                        )
                      : n.texImage2D(
                          t.TEXTURE_CUBE_MAP_POSITIVE_X + e,
                          i,
                          E,
                          r.width,
                          r.height,
                          0,
                          M,
                          y,
                          r.data
                        );
                  }
                }
              } else {
                if (((w = s.mipmaps), T && b)) {
                  w.length > 0 && R++;
                  const e = Q(f[0]);
                  n.texStorage2D(t.TEXTURE_CUBE_MAP, R, E, e.width, e.height);
                }
                for (let e = 0; 6 > e; e++)
                  if (p) {
                    T
                      ? A &&
                        n.texSubImage2D(
                          t.TEXTURE_CUBE_MAP_POSITIVE_X + e,
                          0,
                          0,
                          0,
                          f[e].width,
                          f[e].height,
                          M,
                          y,
                          f[e].data
                        )
                      : n.texImage2D(
                          t.TEXTURE_CUBE_MAP_POSITIVE_X + e,
                          0,
                          E,
                          f[e].width,
                          f[e].height,
                          0,
                          M,
                          y,
                          f[e].data
                        );
                    for (let i = 0; i < w.length; i++) {
                      const r = w[i].image[e].image;
                      T
                        ? A &&
                          n.texSubImage2D(
                            t.TEXTURE_CUBE_MAP_POSITIVE_X + e,
                            i + 1,
                            0,
                            0,
                            r.width,
                            r.height,
                            M,
                            y,
                            r.data
                          )
                        : n.texImage2D(
                            t.TEXTURE_CUBE_MAP_POSITIVE_X + e,
                            i + 1,
                            E,
                            r.width,
                            r.height,
                            0,
                            M,
                            y,
                            r.data
                          );
                    }
                  } else {
                    T
                      ? A &&
                        n.texSubImage2D(
                          t.TEXTURE_CUBE_MAP_POSITIVE_X + e,
                          0,
                          0,
                          0,
                          M,
                          y,
                          f[e]
                        )
                      : n.texImage2D(
                          t.TEXTURE_CUBE_MAP_POSITIVE_X + e,
                          0,
                          E,
                          M,
                          y,
                          f[e]
                        );
                    for (let i = 0; i < w.length; i++) {
                      const r = w[i];
                      T
                        ? A &&
                          n.texSubImage2D(
                            t.TEXTURE_CUBE_MAP_POSITIVE_X + e,
                            i + 1,
                            0,
                            0,
                            M,
                            y,
                            r.image[e]
                          )
                        : n.texImage2D(
                            t.TEXTURE_CUBE_MAP_POSITIVE_X + e,
                            i + 1,
                            E,
                            M,
                            y,
                            r.image[e]
                          );
                    }
                  }
              }
              g(s) && _(t.TEXTURE_CUBE_MAP),
                (h.__version = c.version),
                s.onUpdate && s.onUpdate(s);
            }
            e.__version = s.version;
          })(o, e, s)
        : n.bindTexture(t.TEXTURE_CUBE_MAP, o.__webglTexture, t.TEXTURE0 + s);
    }),
    (this.rebindTextures = function (e, n, r) {
      const a = i.get(e);
      void 0 !== n &&
        D(
          a.__webglFramebuffer,
          e,
          e.texture,
          t.COLOR_ATTACHMENT0,
          t.TEXTURE_2D,
          0
        ),
        void 0 !== r && N(e);
    }),
    (this.setupRenderTarget = function (e) {
      const r = e.texture,
        o = i.get(e),
        l = i.get(r);
      e.addEventListener("dispose", E);
      const c = e.textures,
        h = !0 === e.isWebGLCubeRenderTarget,
        u = c.length > 1;
      if (
        (u ||
          (void 0 === l.__webglTexture &&
            (l.__webglTexture = t.createTexture()),
          (l.__version = r.version),
          s.memory.textures++),
        h)
      ) {
        o.__webglFramebuffer = [];
        for (let e = 0; 6 > e; e++)
          if (r.mipmaps && r.mipmaps.length > 0) {
            o.__webglFramebuffer[e] = [];
            for (let n = 0; n < r.mipmaps.length; n++)
              o.__webglFramebuffer[e][n] = t.createFramebuffer();
          } else o.__webglFramebuffer[e] = t.createFramebuffer();
      } else {
        if (r.mipmaps && r.mipmaps.length > 0) {
          o.__webglFramebuffer = [];
          for (let e = 0; e < r.mipmaps.length; e++)
            o.__webglFramebuffer[e] = t.createFramebuffer();
        } else o.__webglFramebuffer = t.createFramebuffer();
        if (u)
          for (let e = 0, n = c.length; n > e; e++) {
            const n = i.get(c[e]);
            void 0 === n.__webglTexture &&
              ((n.__webglTexture = t.createTexture()), s.memory.textures++);
          }
        if (e.samples > 0 && !1 === K(e)) {
          (o.__webglMultisampledFramebuffer = t.createFramebuffer()),
            (o.__webglColorRenderbuffer = []),
            n.bindFramebuffer(t.FRAMEBUFFER, o.__webglMultisampledFramebuffer);
          for (let n = 0; n < c.length; n++) {
            const i = c[n];
            (o.__webglColorRenderbuffer[n] = t.createRenderbuffer()),
              t.bindRenderbuffer(t.RENDERBUFFER, o.__webglColorRenderbuffer[n]);
            const r = a.convert(i.format, i.colorSpace),
              s = a.convert(i.type),
              l = x(
                i.internalFormat,
                r,
                s,
                i.colorSpace,
                !0 === e.isXRRenderTarget
              ),
              h = q(e);
            t.renderbufferStorageMultisample(
              t.RENDERBUFFER,
              h,
              l,
              e.width,
              e.height
            ),
              t.framebufferRenderbuffer(
                t.FRAMEBUFFER,
                t.COLOR_ATTACHMENT0 + n,
                t.RENDERBUFFER,
                o.__webglColorRenderbuffer[n]
              );
          }
          t.bindRenderbuffer(t.RENDERBUFFER, null),
            e.depthBuffer &&
              ((o.__webglDepthRenderbuffer = t.createRenderbuffer()),
              I(o.__webglDepthRenderbuffer, e, !0)),
            n.bindFramebuffer(t.FRAMEBUFFER, null);
        }
      }
      if (h) {
        n.bindTexture(t.TEXTURE_CUBE_MAP, l.__webglTexture),
          P(t.TEXTURE_CUBE_MAP, r);
        for (let n = 0; 6 > n; n++)
          if (r.mipmaps && r.mipmaps.length > 0)
            for (let i = 0; i < r.mipmaps.length; i++)
              D(
                o.__webglFramebuffer[n][i],
                e,
                r,
                t.COLOR_ATTACHMENT0,
                t.TEXTURE_CUBE_MAP_POSITIVE_X + n,
                i
              );
          else
            D(
              o.__webglFramebuffer[n],
              e,
              r,
              t.COLOR_ATTACHMENT0,
              t.TEXTURE_CUBE_MAP_POSITIVE_X + n,
              0
            );
        g(r) && _(t.TEXTURE_CUBE_MAP), n.unbindTexture();
      } else if (u) {
        for (let r = 0, a = c.length; a > r; r++) {
          const a = c[r],
            s = i.get(a);
          n.bindTexture(t.TEXTURE_2D, s.__webglTexture),
            P(t.TEXTURE_2D, a),
            D(
              o.__webglFramebuffer,
              e,
              a,
              t.COLOR_ATTACHMENT0 + r,
              t.TEXTURE_2D,
              0
            ),
            g(a) && _(t.TEXTURE_2D);
        }
        n.unbindTexture();
      } else {
        let i = t.TEXTURE_2D;
        if (
          ((e.isWebGL3DRenderTarget || e.isWebGLArrayRenderTarget) &&
            (i = e.isWebGL3DRenderTarget ? t.TEXTURE_3D : t.TEXTURE_2D_ARRAY),
          n.bindTexture(i, l.__webglTexture),
          P(i, r),
          r.mipmaps && r.mipmaps.length > 0)
        )
          for (let n = 0; n < r.mipmaps.length; n++)
            D(o.__webglFramebuffer[n], e, r, t.COLOR_ATTACHMENT0, i, n);
        else D(o.__webglFramebuffer, e, r, t.COLOR_ATTACHMENT0, i, 0);
        g(r) && _(i), n.unbindTexture();
      }
      e.depthBuffer && N(e);
    }),
    (this.updateRenderTargetMipmap = function (t) {
      const e = t.textures;
      for (let r = 0, a = e.length; a > r; r++) {
        const a = e[r];
        if (g(a)) {
          const e = v(t),
            r = i.get(a).__webglTexture;
          n.bindTexture(e, r), _(e), n.unbindTexture();
        }
      }
    }),
    (this.updateMultisampleRenderTarget = function (e) {
      if (e.samples > 0)
        if (!1 === K(e)) {
          const r = e.textures,
            a = e.width,
            s = e.height;
          let o = t.COLOR_BUFFER_BIT;
          const c = e.stencilBuffer
              ? t.DEPTH_STENCIL_ATTACHMENT
              : t.DEPTH_ATTACHMENT,
            h = i.get(e),
            u = r.length > 1;
          if (u)
            for (let e = 0; e < r.length; e++)
              n.bindFramebuffer(
                t.FRAMEBUFFER,
                h.__webglMultisampledFramebuffer
              ),
                t.framebufferRenderbuffer(
                  t.FRAMEBUFFER,
                  t.COLOR_ATTACHMENT0 + e,
                  t.RENDERBUFFER,
                  null
                ),
                n.bindFramebuffer(t.FRAMEBUFFER, h.__webglFramebuffer),
                t.framebufferTexture2D(
                  t.DRAW_FRAMEBUFFER,
                  t.COLOR_ATTACHMENT0 + e,
                  t.TEXTURE_2D,
                  null,
                  0
                );
          n.bindFramebuffer(
            t.READ_FRAMEBUFFER,
            h.__webglMultisampledFramebuffer
          ),
            n.bindFramebuffer(t.DRAW_FRAMEBUFFER, h.__webglFramebuffer);
          for (let n = 0; n < r.length; n++) {
            if (
              (e.resolveDepthBuffer &&
                (e.depthBuffer && (o |= t.DEPTH_BUFFER_BIT),
                e.stencilBuffer &&
                  e.resolveStencilBuffer &&
                  (o |= t.STENCIL_BUFFER_BIT)),
              u)
            ) {
              t.framebufferRenderbuffer(
                t.READ_FRAMEBUFFER,
                t.COLOR_ATTACHMENT0,
                t.RENDERBUFFER,
                h.__webglColorRenderbuffer[n]
              );
              const e = i.get(r[n]).__webglTexture;
              t.framebufferTexture2D(
                t.DRAW_FRAMEBUFFER,
                t.COLOR_ATTACHMENT0,
                t.TEXTURE_2D,
                e,
                0
              );
            }
            t.blitFramebuffer(0, 0, a, s, 0, 0, a, s, o, t.NEAREST),
              !0 === l &&
                ((O.length = 0),
                (F.length = 0),
                O.push(t.COLOR_ATTACHMENT0 + n),
                e.depthBuffer &&
                  !1 === e.resolveDepthBuffer &&
                  (O.push(c),
                  F.push(c),
                  t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER, F)),
                t.invalidateFramebuffer(t.READ_FRAMEBUFFER, O));
          }
          if (
            (n.bindFramebuffer(t.READ_FRAMEBUFFER, null),
            n.bindFramebuffer(t.DRAW_FRAMEBUFFER, null),
            u)
          )
            for (let e = 0; e < r.length; e++) {
              n.bindFramebuffer(
                t.FRAMEBUFFER,
                h.__webglMultisampledFramebuffer
              ),
                t.framebufferRenderbuffer(
                  t.FRAMEBUFFER,
                  t.COLOR_ATTACHMENT0 + e,
                  t.RENDERBUFFER,
                  h.__webglColorRenderbuffer[e]
                );
              const a = i.get(r[e]).__webglTexture;
              n.bindFramebuffer(t.FRAMEBUFFER, h.__webglFramebuffer),
                t.framebufferTexture2D(
                  t.DRAW_FRAMEBUFFER,
                  t.COLOR_ATTACHMENT0 + e,
                  t.TEXTURE_2D,
                  a,
                  0
                );
            }
          n.bindFramebuffer(
            t.DRAW_FRAMEBUFFER,
            h.__webglMultisampledFramebuffer
          );
        } else if (e.depthBuffer && !1 === e.resolveDepthBuffer && l) {
          const n = e.stencilBuffer
            ? t.DEPTH_STENCIL_ATTACHMENT
            : t.DEPTH_ATTACHMENT;
          t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER, [n]);
        }
    }),
    (this.setupDepthRenderbuffer = N),
    (this.setupFrameBufferTexture = D),
    (this.useMultisampledRTT = K);
}
function mo(t, e) {
  return {
    convert: function (n, i = "") {
      let r;
      const a = ye.getTransfer(i);
      if (n === q) return t.UNSIGNED_BYTE;
      if (n === Q) return t.UNSIGNED_SHORT_4_4_4_4;
      if (n === tt) return t.UNSIGNED_SHORT_5_5_5_1;
      if (35902 === n) return t.UNSIGNED_INT_5_9_9_9_REV;
      if (1010 === n) return t.BYTE;
      if (1011 === n) return t.SHORT;
      if (n === Y) return t.UNSIGNED_SHORT;
      if (n === K) return t.INT;
      if (n === Z) return t.UNSIGNED_INT;
      if (n === J) return t.FLOAT;
      if (n === $) return t.HALF_FLOAT;
      if (1021 === n) return t.ALPHA;
      if (1022 === n) return t.RGB;
      if (n === nt) return t.RGBA;
      if (1024 === n) return t.LUMINANCE;
      if (1025 === n) return t.LUMINANCE_ALPHA;
      if (n === it) return t.DEPTH_COMPONENT;
      if (n === rt) return t.DEPTH_STENCIL;
      if (1028 === n) return t.RED;
      if (n === at) return t.RED_INTEGER;
      if (1030 === n) return t.RG;
      if (n === st) return t.RG_INTEGER;
      if (n === ot) return t.RGBA_INTEGER;
      if (n === lt || n === ct || n === ht || n === ut)
        if (a === kt) {
          if (((r = e.get("WEBGL_compressed_texture_s3tc_srgb")), null === r))
            return null;
          if (n === lt) return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;
          if (n === ct) return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;
          if (n === ht) return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;
          if (n === ut) return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT;
        } else {
          if (((r = e.get("WEBGL_compressed_texture_s3tc")), null === r))
            return null;
          if (n === lt) return r.COMPRESSED_RGB_S3TC_DXT1_EXT;
          if (n === ct) return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;
          if (n === ht) return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;
          if (n === ut) return r.COMPRESSED_RGBA_S3TC_DXT5_EXT;
        }
      if (n === dt || n === pt || n === ft || n === mt) {
        if (((r = e.get("WEBGL_compressed_texture_pvrtc")), null === r))
          return null;
        if (n === dt) return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
        if (n === pt) return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
        if (n === ft) return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
        if (n === mt) return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG;
      }
      if (n === gt || n === _t || n === vt) {
        if (((r = e.get("WEBGL_compressed_texture_etc")), null === r))
          return null;
        if (n === gt || n === _t)
          return a === kt ? r.COMPRESSED_SRGB8_ETC2 : r.COMPRESSED_RGB8_ETC2;
        if (n === vt)
          return a === kt
            ? r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC
            : r.COMPRESSED_RGBA8_ETC2_EAC;
      }
      if (
        n === xt ||
        n === Mt ||
        n === St ||
        n === yt ||
        n === Et ||
        n === Tt ||
        n === bt ||
        n === At ||
        n === wt ||
        n === Rt ||
        n === Ct ||
        n === Pt ||
        n === Lt ||
        n === Ut
      ) {
        if (((r = e.get("WEBGL_compressed_texture_astc")), null === r))
          return null;
        if (n === xt)
          return a === kt
            ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR
            : r.COMPRESSED_RGBA_ASTC_4x4_KHR;
        if (n === Mt)
          return a === kt
            ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR
            : r.COMPRESSED_RGBA_ASTC_5x4_KHR;
        if (n === St)
          return a === kt
            ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR
            : r.COMPRESSED_RGBA_ASTC_5x5_KHR;
        if (n === yt)
          return a === kt
            ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR
            : r.COMPRESSED_RGBA_ASTC_6x5_KHR;
        if (n === Et)
          return a === kt
            ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR
            : r.COMPRESSED_RGBA_ASTC_6x6_KHR;
        if (n === Tt)
          return a === kt
            ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR
            : r.COMPRESSED_RGBA_ASTC_8x5_KHR;
        if (n === bt)
          return a === kt
            ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR
            : r.COMPRESSED_RGBA_ASTC_8x6_KHR;
        if (n === At)
          return a === kt
            ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR
            : r.COMPRESSED_RGBA_ASTC_8x8_KHR;
        if (n === wt)
          return a === kt
            ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR
            : r.COMPRESSED_RGBA_ASTC_10x5_KHR;
        if (n === Rt)
          return a === kt
            ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR
            : r.COMPRESSED_RGBA_ASTC_10x6_KHR;
        if (n === Ct)
          return a === kt
            ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR
            : r.COMPRESSED_RGBA_ASTC_10x8_KHR;
        if (n === Pt)
          return a === kt
            ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR
            : r.COMPRESSED_RGBA_ASTC_10x10_KHR;
        if (n === Lt)
          return a === kt
            ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR
            : r.COMPRESSED_RGBA_ASTC_12x10_KHR;
        if (n === Ut)
          return a === kt
            ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR
            : r.COMPRESSED_RGBA_ASTC_12x12_KHR;
      }
      if (n === Dt || n === It || n === Nt) {
        if (((r = e.get("EXT_texture_compression_bptc")), null === r))
          return null;
        if (n === Dt)
          return a === kt
            ? r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT
            : r.COMPRESSED_RGBA_BPTC_UNORM_EXT;
        if (n === It) return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;
        if (n === Nt) return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT;
      }
      if (36283 === n || n === Ot || n === Ft || n === Bt) {
        if (((r = e.get("EXT_texture_compression_rgtc")), null === r))
          return null;
        if (n === Dt) return r.COMPRESSED_RED_RGTC1_EXT;
        if (n === Ot) return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;
        if (n === Ft) return r.COMPRESSED_RED_GREEN_RGTC2_EXT;
        if (n === Bt) return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT;
      }
      return n === et ? t.UNSIGNED_INT_24_8 : void 0 !== t[n] ? t[n] : null;
    },
  };
}
const go = {
  type: "move",
};
class _o {
  constructor() {
    (this._targetRay = null), (this._grip = null), (this._hand = null);
  }
  getHandSpace() {
    return (
      null === this._hand &&
        ((this._hand = new gr()),
        (this._hand.matrixAutoUpdate = !1),
        (this._hand.visible = !1),
        (this._hand.joints = {}),
        (this._hand.inputState = {
          pinching: !1,
        })),
      this._hand
    );
  }
  getTargetRaySpace() {
    return (
      null === this._targetRay &&
        ((this._targetRay = new gr()),
        (this._targetRay.matrixAutoUpdate = !1),
        (this._targetRay.visible = !1),
        (this._targetRay.hasLinearVelocity = !1),
        (this._targetRay.linearVelocity = new Be()),
        (this._targetRay.hasAngularVelocity = !1),
        (this._targetRay.angularVelocity = new Be())),
      this._targetRay
    );
  }
  getGripSpace() {
    return (
      null === this._grip &&
        ((this._grip = new gr()),
        (this._grip.matrixAutoUpdate = !1),
        (this._grip.visible = !1),
        (this._grip.hasLinearVelocity = !1),
        (this._grip.linearVelocity = new Be()),
        (this._grip.hasAngularVelocity = !1),
        (this._grip.angularVelocity = new Be())),
      this._grip
    );
  }
  dispatchEvent(t) {
    return (
      null !== this._targetRay && this._targetRay.dispatchEvent(t),
      null !== this._grip && this._grip.dispatchEvent(t),
      null !== this._hand && this._hand.dispatchEvent(t),
      this
    );
  }
  connect(t) {
    if (t && t.hand) {
      const e = this._hand;
      if (e) for (const n of t.hand.values()) this._getHandJoint(e, n);
    }
    return (
      this.dispatchEvent({
        type: "connected",
        data: t,
      }),
      this
    );
  }
  disconnect(t) {
    return (
      this.dispatchEvent({
        type: "disconnected",
        data: t,
      }),
      null !== this._targetRay && (this._targetRay.visible = !1),
      null !== this._grip && (this._grip.visible = !1),
      null !== this._hand && (this._hand.visible = !1),
      this
    );
  }
  update(t, e, n) {
    let i = null,
      r = null,
      a = null;
    const s = this._targetRay,
      o = this._grip,
      l = this._hand;
    if (t && "visible-blurred" !== e.session.visibilityState) {
      if (l && t.hand) {
        a = !0;
        for (const a of t.hand.values()) {
          const t = e.getJointPose(a, n),
            i = this._getHandJoint(l, a);
          null !== t &&
            (i.matrix.fromArray(t.transform.matrix),
            i.matrix.decompose(i.position, i.rotation, i.scale),
            (i.matrixWorldNeedsUpdate = !0),
            (i.jointRadius = t.radius)),
            (i.visible = null !== t);
        }
        const i = l.joints["index-finger-tip"],
          r = l.joints["thumb-tip"],
          s = i.position.distanceTo(r.position),
          o = 0.02,
          c = 0.005;
        l.inputState.pinching && s > o + c
          ? ((l.inputState.pinching = !1),
            this.dispatchEvent({
              type: "pinchend",
              handedness: t.handedness,
              target: this,
            }))
          : l.inputState.pinching ||
            s > o - c ||
            ((l.inputState.pinching = !0),
            this.dispatchEvent({
              type: "pinchstart",
              handedness: t.handedness,
              target: this,
            }));
      } else
        null !== o &&
          t.gripSpace &&
          ((r = e.getPose(t.gripSpace, n)),
          null !== r &&
            (o.matrix.fromArray(r.transform.matrix),
            o.matrix.decompose(o.position, o.rotation, o.scale),
            (o.matrixWorldNeedsUpdate = !0),
            r.linearVelocity
              ? ((o.hasLinearVelocity = !0),
                o.linearVelocity.copy(r.linearVelocity))
              : (o.hasLinearVelocity = !1),
            r.angularVelocity
              ? ((o.hasAngularVelocity = !0),
                o.angularVelocity.copy(r.angularVelocity))
              : (o.hasAngularVelocity = !1)));
      null !== s &&
        ((i = e.getPose(t.targetRaySpace, n)),
        null === i && null !== r && (i = r),
        null !== i &&
          (s.matrix.fromArray(i.transform.matrix),
          s.matrix.decompose(s.position, s.rotation, s.scale),
          (s.matrixWorldNeedsUpdate = !0),
          i.linearVelocity
            ? ((s.hasLinearVelocity = !0),
              s.linearVelocity.copy(i.linearVelocity))
            : (s.hasLinearVelocity = !1),
          i.angularVelocity
            ? ((s.hasAngularVelocity = !0),
              s.angularVelocity.copy(i.angularVelocity))
            : (s.hasAngularVelocity = !1),
          this.dispatchEvent(go)));
    }
    return (
      null !== s && (s.visible = null !== i),
      null !== o && (o.visible = null !== r),
      null !== l && (l.visible = null !== a),
      this
    );
  }
  _getHandJoint(t, e) {
    if (void 0 === t.joints[e.jointName]) {
      const n = new gr();
      (n.matrixAutoUpdate = !1),
        (n.visible = !1),
        (t.joints[e.jointName] = n),
        t.add(n);
    }
    return t.joints[e.jointName];
  }
}
class vo {
  constructor() {
    (this.texture = null),
      (this.mesh = null),
      (this.depthNear = 0),
      (this.depthFar = 0);
  }
  init(t, e, n) {
    if (null === this.texture) {
      const i = new Le();
      (t.properties.get(i).__webglTexture = e.texture),
        (e.depthNear === n.depthNear && e.depthFar === n.depthFar) ||
          ((this.depthNear = e.depthNear), (this.depthFar = e.depthFar)),
        (this.texture = i);
    }
  }
  getMesh(t) {
    if (null !== this.texture && null === this.mesh) {
      const e = t.cameras[0].viewport,
        n = new Wi({
          vertexShader:
            "\nvoid main() {\n\n\tgl_Position = vec4( position, 1.0 );\n\n}",
          fragmentShader:
            "\nuniform sampler2DArray depthColor;\nuniform float depthWidth;\nuniform float depthHeight;\n\nvoid main() {\n\n\tvec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );\n\n\tif ( coord.x >= 1.0 ) {\n\n\t\tgl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;\n\n\t} else {\n\n\t\tgl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;\n\n\t}\n\n}",
          uniforms: {
            depthColor: {
              value: this.texture,
            },
            depthWidth: {
              value: e.z,
            },
            depthHeight: {
              value: e.w,
            },
          },
        });
      this.mesh = new Fi(new xr(20, 20), n);
    }
    return this.mesh;
  }
  reset() {
    (this.texture = null), (this.mesh = null);
  }
  getDepthTexture() {
    return this.texture;
  }
}
class xo extends ne {
  constructor(t, e) {
    super();
    const n = this;
    let i = null,
      r = 1,
      a = null,
      s = "local-floor",
      o = 1,
      l = null,
      c = null,
      h = null,
      u = null,
      d = null,
      p = null;
    const f = new vo(),
      m = e.getContextAttributes();
    let g = null,
      _ = null;
    const v = [],
      x = [],
      M = new ue();
    let S = null;
    const y = new Ki();
    y.viewport = new Ue();
    const E = new Ki();
    E.viewport = new Ue();
    const T = [y, E],
      b = new zr();
    let A = null,
      w = null;
    function R(t) {
      const e = x.indexOf(t.inputSource);
      if (-1 === e) return;
      const n = v[e];
      void 0 !== n &&
        (n.update(t.inputSource, t.frame, l || a),
        n.dispatchEvent({
          type: t.type,
          data: t.inputSource,
        }));
    }
    function C() {
      i.removeEventListener("select", R),
        i.removeEventListener("selectstart", R),
        i.removeEventListener("selectend", R),
        i.removeEventListener("squeeze", R),
        i.removeEventListener("squeezestart", R),
        i.removeEventListener("squeezeend", R),
        i.removeEventListener("end", C),
        i.removeEventListener("inputsourceschange", P);
      for (let t = 0; t < v.length; t++) {
        const e = x[t];
        null !== e && ((x[t] = null), v[t].disconnect(e));
      }
      (A = null),
        (w = null),
        f.reset(),
        t.setRenderTarget(g),
        (d = null),
        (u = null),
        (h = null),
        (i = null),
        (_ = null),
        N.stop(),
        (n.isPresenting = !1),
        t.setPixelRatio(S),
        t.setSize(M.width, M.height, !1),
        n.dispatchEvent({
          type: "sessionend",
        });
    }
    function P(t) {
      for (let e = 0; e < t.removed.length; e++) {
        const n = t.removed[e],
          i = x.indexOf(n);
        0 > i || ((x[i] = null), v[i].disconnect(n));
      }
      for (let e = 0; e < t.added.length; e++) {
        const n = t.added[e];
        let i = x.indexOf(n);
        if (-1 === i) {
          for (let t = 0; t < v.length; t++) {
            if (t >= x.length) {
              x.push(n), (i = t);
              break;
            }
            if (null === x[t]) {
              (x[t] = n), (i = t);
              break;
            }
          }
          if (-1 === i) break;
        }
        const r = v[i];
        r && r.connect(n);
      }
    }
    (this.cameraAutoUpdate = !0),
      (this.enabled = !1),
      (this.isPresenting = !1),
      (this.getController = function (t) {
        let e = v[t];
        return (
          void 0 === e && ((e = new _o()), (v[t] = e)), e.getTargetRaySpace()
        );
      }),
      (this.getControllerGrip = function (t) {
        let e = v[t];
        return void 0 === e && ((e = new _o()), (v[t] = e)), e.getGripSpace();
      }),
      (this.getHand = function (t) {
        let e = v[t];
        return void 0 === e && ((e = new _o()), (v[t] = e)), e.getHandSpace();
      }),
      (this.setFramebufferScaleFactor = function (t) {
        (r = t), n.isPresenting;
      }),
      (this.setReferenceSpaceType = function (t) {
        (s = t), n.isPresenting;
      }),
      (this.getReferenceSpace = function () {
        return l || a;
      }),
      (this.setReferenceSpace = function (t) {
        l = t;
      }),
      (this.getBaseLayer = function () {
        return null !== u ? u : d;
      }),
      (this.getBinding = function () {
        return h;
      }),
      (this.getFrame = function () {
        return p;
      }),
      (this.getSession = function () {
        return i;
      }),
      (this.setSession = async function (c) {
        if (((i = c), null !== i)) {
          if (
            ((g = t.getRenderTarget()),
            i.addEventListener("select", R),
            i.addEventListener("selectstart", R),
            i.addEventListener("selectend", R),
            i.addEventListener("squeeze", R),
            i.addEventListener("squeezestart", R),
            i.addEventListener("squeezeend", R),
            i.addEventListener("end", C),
            i.addEventListener("inputsourceschange", P),
            !0 !== m.xrCompatible && (await e.makeXRCompatible()),
            (S = t.getPixelRatio()),
            t.getSize(M),
            void 0 !== i.enabledFeatures &&
              i.enabledFeatures.includes("layers"))
          ) {
            let n = null,
              a = null,
              s = null;
            m.depth &&
              ((s = m.stencil ? e.DEPTH24_STENCIL8 : e.DEPTH_COMPONENT24),
              (n = m.stencil ? rt : it),
              (a = m.stencil ? et : Z));
            const o = {
              colorFormat: e.RGBA8,
              depthFormat: s,
              scaleFactor: r,
            };
            (h = new XRWebGLBinding(i, e)),
              (u = h.createProjectionLayer(o)),
              i.updateRenderState({
                layers: [u],
              }),
              t.setPixelRatio(1),
              t.setSize(u.textureWidth, u.textureHeight, !1),
              (_ = new Ie(u.textureWidth, u.textureHeight, {
                format: nt,
                type: q,
                depthTexture: new vr(
                  u.textureWidth,
                  u.textureHeight,
                  a,
                  void 0,
                  void 0,
                  void 0,
                  void 0,
                  void 0,
                  void 0,
                  n
                ),
                stencilBuffer: m.stencil,
                colorSpace: t.outputColorSpace,
                samples: m.antialias ? 4 : 0,
                resolveDepthBuffer: !1 === u.ignoreDepthValues,
              }));
          } else {
            const n = {
              antialias: m.antialias,
              alpha: !0,
              depth: m.depth,
              stencil: m.stencil,
              framebufferScaleFactor: r,
            };
            (d = new XRWebGLLayer(i, e, n)),
              i.updateRenderState({
                baseLayer: d,
              }),
              t.setPixelRatio(1),
              t.setSize(d.framebufferWidth, d.framebufferHeight, !1),
              (_ = new Ie(d.framebufferWidth, d.framebufferHeight, {
                format: nt,
                type: q,
                colorSpace: t.outputColorSpace,
                stencilBuffer: m.stencil,
              }));
          }
          (_.isXRRenderTarget = !0),
            this.setFoveation(o),
            (l = null),
            (a = await i.requestReferenceSpace(s)),
            N.setContext(i),
            N.start(),
            (n.isPresenting = !0),
            n.dispatchEvent({
              type: "sessionstart",
            });
        }
      }),
      (this.getEnvironmentBlendMode = function () {
        if (null !== i) return i.environmentBlendMode;
      }),
      (this.getDepthTexture = function () {
        return f.getDepthTexture();
      });
    const L = new Be(),
      U = new Be();
    function D(t, e) {
      null === e
        ? t.matrixWorld.copy(t.matrix)
        : t.matrixWorld.multiplyMatrices(e.matrixWorld, t.matrix),
        t.matrixWorldInverse.copy(t.matrixWorld).invert();
    }
    (this.updateCamera = function (t) {
      if (null === i) return;
      let e = t.near,
        n = t.far;
      null !== f.texture &&
        (f.depthNear > 0 && (e = f.depthNear),
        f.depthFar > 0 && (n = f.depthFar)),
        (b.near = E.near = y.near = e),
        (b.far = E.far = y.far = n),
        (A === b.near && w === b.far) ||
          (i.updateRenderState({
            depthNear: b.near,
            depthFar: b.far,
          }),
          (A = b.near),
          (w = b.far)),
        (y.layers.mask = 2 | t.layers.mask),
        (E.layers.mask = 4 | t.layers.mask),
        (b.layers.mask = y.layers.mask | E.layers.mask);
      const r = t.parent,
        a = b.cameras;
      D(b, r);
      for (let i = 0; i < a.length; i++) D(a[i], r);
      2 === a.length
        ? (function (t, e, n) {
            L.setFromMatrixPosition(e.matrixWorld),
              U.setFromMatrixPosition(n.matrixWorld);
            const i = L.distanceTo(U),
              r = e.projectionMatrix.elements,
              a = n.projectionMatrix.elements,
              s = r[14] / (r[10] - 1),
              o = r[14] / (r[10] + 1),
              l = (r[9] + 1) / r[5],
              c = (r[9] - 1) / r[5],
              h = (r[8] - 1) / r[0],
              u = (a[8] + 1) / a[0],
              d = s * h,
              p = s * u,
              f = i / (-h + u),
              m = f * -h;
            if (
              (e.matrixWorld.decompose(t.position, t.quaternion, t.scale),
              t.translateX(m),
              t.translateZ(f),
              t.matrixWorld.compose(t.position, t.quaternion, t.scale),
              t.matrixWorldInverse.copy(t.matrixWorld).invert(),
              -1 === r[10])
            )
              t.projectionMatrix.copy(e.projectionMatrix),
                t.projectionMatrixInverse.copy(e.projectionMatrixInverse);
            else {
              const e = s + f,
                n = o + f,
                r = d - m,
                a = p + (i - m),
                h = ((l * o) / n) * e,
                u = ((c * o) / n) * e;
              t.projectionMatrix.makePerspective(r, a, h, u, e, n),
                t.projectionMatrixInverse.copy(t.projectionMatrix).invert();
            }
          })(b, y, E)
        : b.projectionMatrix.copy(y.projectionMatrix),
        (function (t, e, n) {
          null === n
            ? t.matrix.copy(e.matrixWorld)
            : (t.matrix.copy(n.matrixWorld),
              t.matrix.invert(),
              t.matrix.multiply(e.matrixWorld)),
            t.matrix.decompose(t.position, t.quaternion, t.scale),
            t.updateMatrixWorld(!0),
            t.projectionMatrix.copy(e.projectionMatrix),
            t.projectionMatrixInverse.copy(e.projectionMatrixInverse),
            t.isPerspectiveCamera &&
              ((t.fov = 2 * ae * Math.atan(1 / t.projectionMatrix.elements[5])),
              (t.zoom = 1));
        })(t, b, r);
    }),
      (this.getCamera = function () {
        return b;
      }),
      (this.getFoveation = function () {
        if (null !== u || null !== d) return o;
      }),
      (this.setFoveation = function (t) {
        (o = t),
          null !== u && (u.fixedFoveation = t),
          null !== d && void 0 !== d.fixedFoveation && (d.fixedFoveation = t);
      }),
      (this.hasDepthSensing = function () {
        return null !== f.texture;
      }),
      (this.getDepthSensingMesh = function () {
        return f.getMesh(b);
      });
    let I = null;
    const N = new kr();
    N.setAnimationLoop(function (e, r) {
      if (((c = r.getViewerPose(l || a)), (p = r), null !== c)) {
        const e = c.views;
        null !== d &&
          (t.setRenderTargetFramebuffer(_, d.framebuffer),
          t.setRenderTarget(_));
        let n = !1;
        e.length !== b.cameras.length && ((b.cameras.length = 0), (n = !0));
        for (let i = 0; i < e.length; i++) {
          const r = e[i];
          let a = null;
          if (null !== d) a = d.getViewport(r);
          else {
            const e = h.getViewSubImage(u, r);
            (a = e.viewport),
              0 === i &&
                (t.setRenderTargetTextures(
                  _,
                  e.colorTexture,
                  u.ignoreDepthValues ? void 0 : e.depthStencilTexture
                ),
                t.setRenderTarget(_));
          }
          let s = T[i];
          void 0 === s &&
            ((s = new Ki()),
            s.layers.enable(i),
            (s.viewport = new Ue()),
            (T[i] = s)),
            s.matrix.fromArray(r.transform.matrix),
            s.matrix.decompose(s.position, s.quaternion, s.scale),
            s.projectionMatrix.fromArray(r.projectionMatrix),
            s.projectionMatrixInverse.copy(s.projectionMatrix).invert(),
            s.viewport.set(a.x, a.y, a.width, a.height),
            0 === i &&
              (b.matrix.copy(s.matrix),
              b.matrix.decompose(b.position, b.quaternion, b.scale)),
            !0 === n && b.cameras.push(s);
        }
        const r = i.enabledFeatures;
        if (r && r.includes("depth-sensing")) {
          const n = h.getDepthInformation(e[0]);
          n && n.isValid && n.texture && f.init(t, n, i.renderState);
        }
      }
      for (let t = 0; t < v.length; t++) {
        const e = x[t],
          n = v[t];
        null !== e && void 0 !== n && n.update(e, r, l || a);
      }
      I && I(e, r),
        r.detectedPlanes &&
          n.dispatchEvent({
            type: "planesdetected",
            data: r,
          }),
        (p = null);
    }),
      (this.setAnimationLoop = function (t) {
        I = t;
      }),
      (this.dispose = function () {});
  }
}
const Mo = new bn(),
  So = new mn();
function yo(t, e) {
  function n(t, e) {
    !0 === t.matrixAutoUpdate && t.updateMatrix(), e.value.copy(t.matrix);
  }
  function i(t, i) {
    (t.opacity.value = i.opacity),
      i.color && t.diffuse.value.copy(i.color),
      i.emissive &&
        t.emissive.value.copy(i.emissive).multiplyScalar(i.emissiveIntensity),
      i.map && ((t.map.value = i.map), n(i.map, t.mapTransform)),
      i.alphaMap &&
        ((t.alphaMap.value = i.alphaMap), n(i.alphaMap, t.alphaMapTransform)),
      i.bumpMap &&
        ((t.bumpMap.value = i.bumpMap),
        n(i.bumpMap, t.bumpMapTransform),
        (t.bumpScale.value = i.bumpScale),
        1 === i.side && (t.bumpScale.value *= -1)),
      i.normalMap &&
        ((t.normalMap.value = i.normalMap),
        n(i.normalMap, t.normalMapTransform),
        t.normalScale.value.copy(i.normalScale),
        1 === i.side && t.normalScale.value.negate()),
      i.displacementMap &&
        ((t.displacementMap.value = i.displacementMap),
        n(i.displacementMap, t.displacementMapTransform),
        (t.displacementScale.value = i.displacementScale),
        (t.displacementBias.value = i.displacementBias)),
      i.emissiveMap &&
        ((t.emissiveMap.value = i.emissiveMap),
        n(i.emissiveMap, t.emissiveMapTransform)),
      i.specularMap &&
        ((t.specularMap.value = i.specularMap),
        n(i.specularMap, t.specularMapTransform)),
      i.alphaTest > 0 && (t.alphaTest.value = i.alphaTest);
    const r = e.get(i),
      a = r.envMap,
      s = r.envMapRotation;
    a &&
      ((t.envMap.value = a),
      Mo.copy(s),
      (Mo.x *= -1),
      (Mo.y *= -1),
      (Mo.z *= -1),
      a.isCubeTexture &&
        !1 === a.isRenderTargetTexture &&
        ((Mo.y *= -1), (Mo.z *= -1)),
      t.envMapRotation.value.setFromMatrix4(So.makeRotationFromEuler(Mo)),
      (t.flipEnvMap.value =
        a.isCubeTexture && !1 === a.isRenderTargetTexture ? -1 : 1),
      (t.reflectivity.value = i.reflectivity),
      (t.ior.value = i.ior),
      (t.refractionRatio.value = i.refractionRatio)),
      i.lightMap &&
        ((t.lightMap.value = i.lightMap),
        (t.lightMapIntensity.value = i.lightMapIntensity),
        n(i.lightMap, t.lightMapTransform)),
      i.aoMap &&
        ((t.aoMap.value = i.aoMap),
        (t.aoMapIntensity.value = i.aoMapIntensity),
        n(i.aoMap, t.aoMapTransform));
  }
  return {
    refreshFogUniforms: function (e, n) {
      n.color.getRGB(e.fogColor.value, Gi(t)),
        n.isFog
          ? ((e.fogNear.value = n.near), (e.fogFar.value = n.far))
          : n.isFogExp2 && (e.fogDensity.value = n.density);
    },
    refreshMaterialUniforms: function (t, r, a, s, o) {
      r.isMeshBasicMaterial || r.isMeshLambertMaterial
        ? i(t, r)
        : r.isMeshToonMaterial
        ? (i(t, r),
          (function (t, e) {
            e.gradientMap && (t.gradientMap.value = e.gradientMap);
          })(t, r))
        : r.isMeshPhongMaterial
        ? (i(t, r),
          (function (t, e) {
            t.specular.value.copy(e.specular),
              (t.shininess.value = Math.max(e.shininess, 1e-4));
          })(t, r))
        : r.isMeshStandardMaterial
        ? (i(t, r),
          (function (t, e) {
            (t.metalness.value = e.metalness),
              e.metalnessMap &&
                ((t.metalnessMap.value = e.metalnessMap),
                n(e.metalnessMap, t.metalnessMapTransform)),
              (t.roughness.value = e.roughness),
              e.roughnessMap &&
                ((t.roughnessMap.value = e.roughnessMap),
                n(e.roughnessMap, t.roughnessMapTransform)),
              e.envMap && (t.envMapIntensity.value = e.envMapIntensity);
          })(t, r),
          r.isMeshPhysicalMaterial &&
            (function (t, e, i) {
              (t.ior.value = e.ior),
                e.sheen > 0 &&
                  (t.sheenColor.value
                    .copy(e.sheenColor)
                    .multiplyScalar(e.sheen),
                  (t.sheenRoughness.value = e.sheenRoughness),
                  e.sheenColorMap &&
                    ((t.sheenColorMap.value = e.sheenColorMap),
                    n(e.sheenColorMap, t.sheenColorMapTransform)),
                  e.sheenRoughnessMap &&
                    ((t.sheenRoughnessMap.value = e.sheenRoughnessMap),
                    n(e.sheenRoughnessMap, t.sheenRoughnessMapTransform))),
                e.clearcoat > 0 &&
                  ((t.clearcoat.value = e.clearcoat),
                  (t.clearcoatRoughness.value = e.clearcoatRoughness),
                  e.clearcoatMap &&
                    ((t.clearcoatMap.value = e.clearcoatMap),
                    n(e.clearcoatMap, t.clearcoatMapTransform)),
                  e.clearcoatRoughnessMap &&
                    ((t.clearcoatRoughnessMap.value = e.clearcoatRoughnessMap),
                    n(
                      e.clearcoatRoughnessMap,
                      t.clearcoatRoughnessMapTransform
                    )),
                  e.clearcoatNormalMap &&
                    ((t.clearcoatNormalMap.value = e.clearcoatNormalMap),
                    n(e.clearcoatNormalMap, t.clearcoatNormalMapTransform),
                    t.clearcoatNormalScale.value.copy(e.clearcoatNormalScale),
                    1 === e.side && t.clearcoatNormalScale.value.negate())),
                e.dispersion > 0 && (t.dispersion.value = e.dispersion),
                e.iridescence > 0 &&
                  ((t.iridescence.value = e.iridescence),
                  (t.iridescenceIOR.value = e.iridescenceIOR),
                  (t.iridescenceThicknessMinimum.value =
                    e.iridescenceThicknessRange[0]),
                  (t.iridescenceThicknessMaximum.value =
                    e.iridescenceThicknessRange[1]),
                  e.iridescenceMap &&
                    ((t.iridescenceMap.value = e.iridescenceMap),
                    n(e.iridescenceMap, t.iridescenceMapTransform)),
                  e.iridescenceThicknessMap &&
                    ((t.iridescenceThicknessMap.value =
                      e.iridescenceThicknessMap),
                    n(
                      e.iridescenceThicknessMap,
                      t.iridescenceThicknessMapTransform
                    ))),
                e.transmission > 0 &&
                  ((t.transmission.value = e.transmission),
                  (t.transmissionSamplerMap.value = i.texture),
                  t.transmissionSamplerSize.value.set(i.width, i.height),
                  e.transmissionMap &&
                    ((t.transmissionMap.value = e.transmissionMap),
                    n(e.transmissionMap, t.transmissionMapTransform)),
                  (t.thickness.value = e.thickness),
                  e.thicknessMap &&
                    ((t.thicknessMap.value = e.thicknessMap),
                    n(e.thicknessMap, t.thicknessMapTransform)),
                  (t.attenuationDistance.value = e.attenuationDistance),
                  t.attenuationColor.value.copy(e.attenuationColor)),
                e.anisotropy > 0 &&
                  (t.anisotropyVector.value.set(
                    e.anisotropy * Math.cos(e.anisotropyRotation),
                    e.anisotropy * Math.sin(e.anisotropyRotation)
                  ),
                  e.anisotropyMap &&
                    ((t.anisotropyMap.value = e.anisotropyMap),
                    n(e.anisotropyMap, t.anisotropyMapTransform))),
                (t.specularIntensity.value = e.specularIntensity),
                t.specularColor.value.copy(e.specularColor),
                e.specularColorMap &&
                  ((t.specularColorMap.value = e.specularColorMap),
                  n(e.specularColorMap, t.specularColorMapTransform)),
                e.specularIntensityMap &&
                  ((t.specularIntensityMap.value = e.specularIntensityMap),
                  n(e.specularIntensityMap, t.specularIntensityMapTransform));
            })(t, r, o))
        : r.isMeshMatcapMaterial
        ? (i(t, r),
          (function (t, e) {
            e.matcap && (t.matcap.value = e.matcap);
          })(t, r))
        : r.isMeshDepthMaterial
        ? i(t, r)
        : r.isMeshDistanceMaterial
        ? (i(t, r),
          (function (t, n) {
            const i = e.get(n).light;
            t.referencePosition.value.setFromMatrixPosition(i.matrixWorld),
              (t.nearDistance.value = i.shadow.camera.near),
              (t.farDistance.value = i.shadow.camera.far);
          })(t, r))
        : r.isMeshNormalMaterial
        ? i(t, r)
        : r.isLineBasicMaterial
        ? ((function (t, e) {
            t.diffuse.value.copy(e.color),
              (t.opacity.value = e.opacity),
              e.map && ((t.map.value = e.map), n(e.map, t.mapTransform));
          })(t, r),
          r.isLineDashedMaterial &&
            (function (t, e) {
              (t.dashSize.value = e.dashSize),
                (t.totalSize.value = e.dashSize + e.gapSize),
                (t.scale.value = e.scale);
            })(t, r))
        : r.isPointsMaterial
        ? (function (t, e, i, r) {
            t.diffuse.value.copy(e.color),
              (t.opacity.value = e.opacity),
              (t.size.value = e.size * i),
              (t.scale.value = 0.5 * r),
              e.map && ((t.map.value = e.map), n(e.map, t.uvTransform)),
              e.alphaMap &&
                ((t.alphaMap.value = e.alphaMap),
                n(e.alphaMap, t.alphaMapTransform)),
              e.alphaTest > 0 && (t.alphaTest.value = e.alphaTest);
          })(t, r, a, s)
        : r.isSpriteMaterial
        ? (function (t, e) {
            t.diffuse.value.copy(e.color),
              (t.opacity.value = e.opacity),
              (t.rotation.value = e.rotation),
              e.map && ((t.map.value = e.map), n(e.map, t.mapTransform)),
              e.alphaMap &&
                ((t.alphaMap.value = e.alphaMap),
                n(e.alphaMap, t.alphaMapTransform)),
              e.alphaTest > 0 && (t.alphaTest.value = e.alphaTest);
          })(t, r)
        : r.isShadowMaterial
        ? (t.color.value.copy(r.color), (t.opacity.value = r.opacity))
        : r.isShaderMaterial && (r.uniformsNeedUpdate = !1);
    },
  };
}
function Eo(t, e, n, i) {
  let r = {},
    a = {},
    s = [];
  const o = t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);
  function l(t, e, n, i) {
    const r = t.value,
      a = e + "_" + n;
    if (void 0 === i[a])
      return (
        (i[a] = "number" == typeof r || "boolean" == typeof r ? r : r.clone()),
        !0
      );
    {
      const t = i[a];
      if ("number" == typeof r || "boolean" == typeof r) {
        if (t !== r) return (i[a] = r), !0;
      } else if (!1 === t.equals(r)) return t.copy(r), !0;
    }
    return !1;
  }
  function c(t) {
    const e = {
      boundary: 0,
      storage: 0,
    };
    return (
      "number" == typeof t || "boolean" == typeof t
        ? ((e.boundary = 4), (e.storage = 4))
        : t.isVector2
        ? ((e.boundary = 8), (e.storage = 8))
        : t.isVector3 || t.isColor
        ? ((e.boundary = 16), (e.storage = 12))
        : t.isVector4
        ? ((e.boundary = 16), (e.storage = 16))
        : t.isMatrix3
        ? ((e.boundary = 48), (e.storage = 48))
        : t.isMatrix4
        ? ((e.boundary = 64), (e.storage = 64))
        : t.isTexture,
      e
    );
  }
  function h(e) {
    const n = e.target;
    n.removeEventListener("dispose", h);
    const i = s.indexOf(n.__bindingPointIndex);
    s.splice(i, 1), t.deleteBuffer(r[n.id]), delete r[n.id], delete a[n.id];
  }
  return {
    bind: function (t, e) {
      const n = e.program;
      i.uniformBlockBinding(t, n);
    },
    update: function (n, u) {
      let d = r[n.id];
      void 0 === d &&
        ((function (t) {
          const e = t.uniforms;
          let n = 0;
          for (let r = 0, a = e.length; a > r; r++) {
            const t = Array.isArray(e[r]) ? e[r] : [e[r]];
            for (let e = 0, i = t.length; i > e; e++) {
              const i = t[e],
                r = Array.isArray(i.value) ? i.value : [i.value];
              for (let t = 0, e = r.length; e > t; t++) {
                const e = c(r[t]),
                  a = n % 16,
                  s = a % e.boundary,
                  o = a + s;
                (n += s),
                  0 !== o && 16 - o < e.storage && (n += 16 - o),
                  (i.__data = new Float32Array(
                    e.storage / Float32Array.BYTES_PER_ELEMENT
                  )),
                  (i.__offset = n),
                  (n += e.storage);
              }
            }
          }
          const i = n % 16;
          i > 0 && (n += 16 - i), (t.__size = n), (t.__cache = {});
        })(n),
        (d = (function (e) {
          const n = (function () {
            for (let t = 0; o > t; t++)
              if (-1 === s.indexOf(t)) return s.push(t), t;
            return 0;
          })();
          e.__bindingPointIndex = n;
          const i = t.createBuffer(),
            r = e.__size,
            a = e.usage;
          return (
            t.bindBuffer(t.UNIFORM_BUFFER, i),
            t.bufferData(t.UNIFORM_BUFFER, r, a),
            t.bindBuffer(t.UNIFORM_BUFFER, null),
            t.bindBufferBase(t.UNIFORM_BUFFER, n, i),
            i
          );
        })(n)),
        (r[n.id] = d),
        n.addEventListener("dispose", h));
      const p = u.program;
      i.updateUBOMapping(n, p);
      const f = e.render.frame;
      a[n.id] !== f &&
        ((function (e) {
          const n = r[e.id],
            i = e.uniforms,
            a = e.__cache;
          t.bindBuffer(t.UNIFORM_BUFFER, n);
          for (let r = 0, s = i.length; s > r; r++) {
            const e = Array.isArray(i[r]) ? i[r] : [i[r]];
            for (let n = 0, i = e.length; i > n; n++) {
              const i = e[n];
              if (!0 === l(i, r, n, a)) {
                const e = i.__offset,
                  n = Array.isArray(i.value) ? i.value : [i.value];
                let r = 0;
                for (let a = 0; a < n.length; a++) {
                  const s = n[a],
                    o = c(s);
                  "number" == typeof s || "boolean" == typeof s
                    ? ((i.__data[0] = s),
                      t.bufferSubData(t.UNIFORM_BUFFER, e + r, i.__data))
                    : s.isMatrix3
                    ? ((i.__data[0] = s.elements[0]),
                      (i.__data[1] = s.elements[1]),
                      (i.__data[2] = s.elements[2]),
                      (i.__data[3] = 0),
                      (i.__data[4] = s.elements[3]),
                      (i.__data[5] = s.elements[4]),
                      (i.__data[6] = s.elements[5]),
                      (i.__data[7] = 0),
                      (i.__data[8] = s.elements[6]),
                      (i.__data[9] = s.elements[7]),
                      (i.__data[10] = s.elements[8]),
                      (i.__data[11] = 0))
                    : (s.toArray(i.__data, r),
                      (r += o.storage / Float32Array.BYTES_PER_ELEMENT));
                }
                t.bufferSubData(t.UNIFORM_BUFFER, e, i.__data);
              }
            }
          }
          t.bindBuffer(t.UNIFORM_BUFFER, null);
        })(n),
        (a[n.id] = f));
    },
    dispose: function () {
      for (const e in r) t.deleteBuffer(r[e]);
      (s = []), (r = {}), (a = {});
    },
  };
}
class To {
  constructor(e = {}) {
    const {
      canvas: n = ge(),
      context: i = null,
      depth: r = !0,
      stencil: a = !1,
      alpha: s = !1,
      antialias: o = !1,
      premultipliedAlpha: l = !0,
      preserveDrawingBuffer: c = !1,
      powerPreference: h = "default",
      failIfMajorPerformanceCaveat: u = !1,
      reverseDepthBuffer: d = !1,
    } = e;
    let p;
    if (((this.isWebGLRenderer = !0), null !== i)) {
      if (
        "undefined" != typeof WebGLRenderingContext &&
        i instanceof WebGLRenderingContext
      )
        throw Error(
          "THREE.WebGLRenderer: WebGL 1 is not supported since r163."
        );
      p = i.getContextAttributes().alpha;
    } else p = s;
    const f = new Uint32Array(4),
      m = new Int32Array(4);
    let g = null,
      _ = null;
    const v = [],
      x = [];
    (this.domElement = n),
      (this.debug = {
        checkShaderErrors: !0,
        onShaderError: null,
      }),
      (this.autoClear = !0),
      (this.autoClearColor = !0),
      (this.autoClearDepth = !0),
      (this.autoClearStencil = !0),
      (this.sortObjects = !0),
      (this.clippingPlanes = []),
      (this.localClippingEnabled = !1),
      (this._outputColorSpace = Ht),
      (this.toneMapping = 0),
      (this.toneMappingExposure = 1);
    const M = this;
    let S = !1,
      y = 0,
      E = 0,
      T = null,
      b = -1,
      A = null;
    const w = new Ue(),
      R = new Ue();
    let C = null;
    const P = new oi(0);
    let L = 0,
      U = n.width,
      D = n.height,
      I = 1,
      N = null,
      O = null;
    const F = new Ue(0, 0, U, D),
      B = new Ue(0, 0, U, D);
    let z = !1;
    const H = new lr();
    let V = !1,
      G = !1;
    this.transmissionResolutionScale = 1;
    const k = new mn(),
      W = new mn(),
      X = new Be(),
      K = new Ue(),
      J = {
        background: null,
        fog: null,
        environment: null,
        overrideMaterial: null,
        isScene: !0,
      };
    let nt = !1;
    function it() {
      return null === T ? I : 1;
    }
    let rt,
      lt,
      ct,
      ht,
      ut,
      dt,
      pt,
      ft,
      mt,
      gt,
      _t,
      vt,
      xt,
      Mt,
      St,
      yt,
      Et,
      Tt,
      bt,
      At,
      wt,
      Rt,
      Ct,
      Pt,
      Lt = i;
    function Ut(t, e) {
      return n.getContext(t, e);
    }
    try {
      const e = {
        alpha: !0,
        depth: r,
        stencil: a,
        antialias: o,
        premultipliedAlpha: l,
        preserveDrawingBuffer: c,
        powerPreference: h,
        failIfMajorPerformanceCaveat: u,
      };
      if (
        ("setAttribute" in n && n.setAttribute("data-engine", "three.js r" + t),
        n.addEventListener("webglcontextlost", Nt, !1),
        n.addEventListener("webglcontextrestored", Ot, !1),
        n.addEventListener("webglcontextcreationerror", Ft, !1),
        null === Lt)
      ) {
        const t = "webgl2";
        if (((Lt = Ut(t, e)), null === Lt))
          throw Ut(t)
            ? Error(
                "Error creating WebGL context with your selected attributes."
              )
            : Error("Error creating WebGL context.");
      }
    } catch (ie) {
      throw ie;
    }
    function Dt() {
      (rt = new xa(Lt)),
        rt.init(),
        (Rt = new mo(Lt, rt)),
        (lt = new ta(Lt, rt, e, Rt)),
        (ct = new po(Lt, rt)),
        lt.reverseDepthBuffer && d && ct.buffers.depth.setReversed(!0),
        (ht = new ya(Lt)),
        (ut = new Qs()),
        (dt = new fo(Lt, rt, ct, ut, lt, Rt, ht)),
        (pt = new na(M)),
        (ft = new va(M)),
        (mt = new Wr(Lt)),
        (Ct = new $r(Lt, mt)),
        (gt = new Ma(Lt, mt, ht, Ct)),
        (_t = new Ta(Lt, gt, mt, ht)),
        (bt = new Ea(Lt, lt, dt)),
        (yt = new ea(ut)),
        (vt = new $s(M, pt, ft, rt, lt, Ct, yt)),
        (xt = new yo(M, ut)),
        (Mt = new io()),
        (St = new co(rt)),
        (Tt = new Jr(M, pt, ft, ct, _t, p, l)),
        (Et = new ho(M, _t, lt)),
        (Pt = new Eo(Lt, ht, lt, ct)),
        (At = new Qr(Lt, rt, ht)),
        (wt = new Sa(Lt, rt, ht)),
        (ht.programs = vt.programs),
        (M.capabilities = lt),
        (M.extensions = rt),
        (M.properties = ut),
        (M.renderLists = Mt),
        (M.shadowMap = Et),
        (M.state = ct),
        (M.info = ht);
    }
    Dt();
    const It = new xo(M, Lt);
    function Nt(t) {
      t.preventDefault(), (S = !0);
    }
    function Ot() {
      S = !1;
      const t = ht.autoReset,
        e = Et.enabled,
        n = Et.autoUpdate,
        i = Et.needsUpdate,
        r = Et.type;
      Dt(),
        (ht.autoReset = t),
        (Et.enabled = e),
        (Et.autoUpdate = n),
        (Et.needsUpdate = i),
        (Et.type = r);
    }
    function Ft(t) {}
    function Bt(t) {
      const e = t.target;
      e.removeEventListener("dispose", Bt),
        (function (t) {
          (function (t) {
            const e = ut.get(t).programs;
            void 0 !== e &&
              (e.forEach(function (t) {
                vt.releaseProgram(t);
              }),
              t.isShaderMaterial && vt.releaseShaderCache(t));
          })(t),
            ut.remove(t);
        })(e);
    }
    function zt(t, e, n) {
      !0 === t.transparent && 2 === t.side && !1 === t.forceSinglePass
        ? ((t.side = 1),
          (t.needsUpdate = !0),
          Jt(t, e, n),
          (t.side = 0),
          (t.needsUpdate = !0),
          Jt(t, e, n),
          (t.side = 2))
        : Jt(t, e, n);
    }
    (this.xr = It),
      (this.getContext = function () {
        return Lt;
      }),
      (this.getContextAttributes = function () {
        return Lt.getContextAttributes();
      }),
      (this.forceContextLoss = function () {
        const t = rt.get("WEBGL_lose_context");
        t && t.loseContext();
      }),
      (this.forceContextRestore = function () {
        const t = rt.get("WEBGL_lose_context");
        t && t.restoreContext();
      }),
      (this.getPixelRatio = function () {
        return I;
      }),
      (this.setPixelRatio = function (t) {
        void 0 !== t && ((I = t), this.setSize(U, D, !1));
      }),
      (this.getSize = function (t) {
        return t.set(U, D);
      }),
      (this.setSize = function (t, e, i = !0) {
        It.isPresenting ||
          ((U = t),
          (D = e),
          (n.width = Math.floor(t * I)),
          (n.height = Math.floor(e * I)),
          !0 === i && ((n.style.width = t + "px"), (n.style.height = e + "px")),
          this.setViewport(0, 0, t, e));
      }),
      (this.getDrawingBufferSize = function (t) {
        return t.set(U * I, D * I).floor();
      }),
      (this.setDrawingBufferSize = function (t, e, i) {
        (U = t),
          (D = e),
          (I = i),
          (n.width = Math.floor(t * i)),
          (n.height = Math.floor(e * i)),
          this.setViewport(0, 0, t, e);
      }),
      (this.getCurrentViewport = function (t) {
        return t.copy(w);
      }),
      (this.getViewport = function (t) {
        return t.copy(F);
      }),
      (this.setViewport = function (t, e, n, i) {
        t.isVector4 ? F.set(t.x, t.y, t.z, t.w) : F.set(t, e, n, i),
          ct.viewport(w.copy(F).multiplyScalar(I).round());
      }),
      (this.getScissor = function (t) {
        return t.copy(B);
      }),
      (this.setScissor = function (t, e, n, i) {
        t.isVector4 ? B.set(t.x, t.y, t.z, t.w) : B.set(t, e, n, i),
          ct.scissor(R.copy(B).multiplyScalar(I).round());
      }),
      (this.getScissorTest = function () {
        return z;
      }),
      (this.setScissorTest = function (t) {
        ct.setScissorTest((z = t));
      }),
      (this.setOpaqueSort = function (t) {
        N = t;
      }),
      (this.setTransparentSort = function (t) {
        O = t;
      }),
      (this.getClearColor = function (t) {
        return t.copy(Tt.getClearColor());
      }),
      (this.setClearColor = function () {
        Tt.setClearColor.apply(Tt, arguments);
      }),
      (this.getClearAlpha = function () {
        return Tt.getClearAlpha();
      }),
      (this.setClearAlpha = function () {
        Tt.setClearAlpha.apply(Tt, arguments);
      }),
      (this.clear = function (t = !0, e = !0, n = !0) {
        let i = 0;
        if (t) {
          let t = !1;
          if (null !== T) {
            const e = T.texture.format;
            t = e === ot || e === st || e === at;
          }
          if (t) {
            const t = T.texture.type,
              e =
                t === q ||
                t === Z ||
                t === Y ||
                t === et ||
                t === Q ||
                t === tt,
              n = Tt.getClearColor(),
              i = Tt.getClearAlpha(),
              r = n.r,
              a = n.g,
              s = n.b;
            e
              ? ((f[0] = r),
                (f[1] = a),
                (f[2] = s),
                (f[3] = i),
                Lt.clearBufferuiv(Lt.COLOR, 0, f))
              : ((m[0] = r),
                (m[1] = a),
                (m[2] = s),
                (m[3] = i),
                Lt.clearBufferiv(Lt.COLOR, 0, m));
          } else i |= Lt.COLOR_BUFFER_BIT;
        }
        e && (i |= Lt.DEPTH_BUFFER_BIT),
          n &&
            ((i |= Lt.STENCIL_BUFFER_BIT),
            this.state.buffers.stencil.setMask(4294967295)),
          Lt.clear(i);
      }),
      (this.clearColor = function () {
        this.clear(!0, !1, !1);
      }),
      (this.clearDepth = function () {
        this.clear(!1, !0, !1);
      }),
      (this.clearStencil = function () {
        this.clear(!1, !1, !0);
      }),
      (this.dispose = function () {
        n.removeEventListener("webglcontextlost", Nt, !1),
          n.removeEventListener("webglcontextrestored", Ot, !1),
          n.removeEventListener("webglcontextcreationerror", Ft, !1),
          Tt.dispose(),
          Mt.dispose(),
          St.dispose(),
          ut.dispose(),
          pt.dispose(),
          ft.dispose(),
          _t.dispose(),
          Ct.dispose(),
          Pt.dispose(),
          vt.dispose(),
          It.dispose(),
          It.removeEventListener("sessionstart", kt),
          It.removeEventListener("sessionend", Wt),
          Xt.stop();
      }),
      (this.renderBufferDirect = function (t, e, n, i, r, a) {
        null === e && (e = J);
        const s = r.isMesh && 0 > r.matrixWorld.determinant(),
          o = (function (t, e, n, i, r) {
            !0 !== e.isScene && (e = J), dt.resetTextureUnits();
            const a = e.fog,
              s = i.isMeshStandardMaterial ? e.environment : null,
              o =
                null === T
                  ? M.outputColorSpace
                  : !0 === T.isXRRenderTarget
                  ? T.texture.colorSpace
                  : Vt,
              l = (i.isMeshStandardMaterial ? ft : pt).get(i.envMap || s),
              c =
                !0 === i.vertexColors &&
                !!n.attributes.color &&
                4 === n.attributes.color.itemSize,
              h = !!n.attributes.tangent && (!!i.normalMap || i.anisotropy > 0),
              u = !!n.morphAttributes.position,
              d = !!n.morphAttributes.normal,
              p = !!n.morphAttributes.color;
            let f = 0;
            i.toneMapped &&
              ((null !== T && !0 !== T.isXRRenderTarget) ||
                (f = M.toneMapping));
            const m =
                n.morphAttributes.position ||
                n.morphAttributes.normal ||
                n.morphAttributes.color,
              g = void 0 !== m ? m.length : 0,
              v = ut.get(i),
              x = _.state.lights;
            if (!0 === V && (!0 === G || t !== A)) {
              const e = t === A && i.id === b;
              yt.setState(i, t, e);
            }
            let S = !1;
            i.version === v.__version
              ? (v.needsLights && v.lightsStateVersion !== x.state.version) ||
                v.outputColorSpace !== o ||
                (r.isBatchedMesh && !1 === v.batching)
                ? (S = !0)
                : r.isBatchedMesh || !0 !== v.batching
                ? (r.isBatchedMesh &&
                    !0 === v.batchingColor &&
                    null === r.colorTexture) ||
                  (r.isBatchedMesh &&
                    !1 === v.batchingColor &&
                    null !== r.colorTexture) ||
                  (r.isInstancedMesh && !1 === v.instancing)
                  ? (S = !0)
                  : r.isInstancedMesh || !0 !== v.instancing
                  ? r.isSkinnedMesh && !1 === v.skinning
                    ? (S = !0)
                    : r.isSkinnedMesh || !0 !== v.skinning
                    ? (r.isInstancedMesh &&
                        !0 === v.instancingColor &&
                        null === r.instanceColor) ||
                      (r.isInstancedMesh &&
                        !1 === v.instancingColor &&
                        null !== r.instanceColor) ||
                      (r.isInstancedMesh &&
                        !0 === v.instancingMorph &&
                        null === r.morphTexture) ||
                      (r.isInstancedMesh &&
                        !1 === v.instancingMorph &&
                        null !== r.morphTexture) ||
                      v.envMap !== l ||
                      (!0 === i.fog && v.fog !== a)
                      ? (S = !0)
                      : void 0 === v.numClippingPlanes ||
                        (v.numClippingPlanes === yt.numPlanes &&
                          v.numIntersection === yt.numIntersection)
                      ? (v.vertexAlphas !== c ||
                          v.vertexTangents !== h ||
                          v.morphTargets !== u ||
                          v.morphNormals !== d ||
                          v.morphColors !== p ||
                          v.toneMapping !== f ||
                          v.morphTargetsCount !== g) &&
                        (S = !0)
                      : (S = !0)
                    : (S = !0)
                  : (S = !0)
                : (S = !0)
              : ((S = !0), (v.__version = i.version));
            let y = v.currentProgram;
            !0 === S && (y = Jt(i, e, r));
            let E = !1,
              w = !1,
              R = !1;
            const C = y.getUniforms(),
              P = v.uniforms;
            if (
              (ct.useProgram(y.program) && ((E = !0), (w = !0), (R = !0)),
              i.id !== b && ((b = i.id), (w = !0)),
              E || A !== t)
            ) {
              ct.buffers.depth.getReversed()
                ? (k.copy(t.projectionMatrix),
                  (function (t) {
                    const e = t.elements;
                    (e[2] = 0.5 * e[2] + 0.5 * e[3]),
                      (e[6] = 0.5 * e[6] + 0.5 * e[7]),
                      (e[10] = 0.5 * e[10] + 0.5 * e[11]),
                      (e[14] = 0.5 * e[14] + 0.5 * e[15]);
                  })(k),
                  (function (t) {
                    const e = t.elements;
                    -1 === e[11]
                      ? ((e[10] = -e[10] - 1), (e[14] = -e[14]))
                      : ((e[10] = -e[10]), (e[14] = 1 - e[14]));
                  })(k),
                  C.setValue(Lt, "projectionMatrix", k))
                : C.setValue(Lt, "projectionMatrix", t.projectionMatrix),
                C.setValue(Lt, "viewMatrix", t.matrixWorldInverse);
              const e = C.map.cameraPosition;
              void 0 !== e &&
                e.setValue(Lt, X.setFromMatrixPosition(t.matrixWorld)),
                lt.logarithmicDepthBuffer &&
                  C.setValue(
                    Lt,
                    "logDepthBufFC",
                    2 / (Math.log(t.far + 1) / Math.LN2)
                  ),
                (i.isMeshPhongMaterial ||
                  i.isMeshToonMaterial ||
                  i.isMeshLambertMaterial ||
                  i.isMeshBasicMaterial ||
                  i.isMeshStandardMaterial ||
                  i.isShaderMaterial) &&
                  C.setValue(
                    Lt,
                    "isOrthographic",
                    !0 === t.isOrthographicCamera
                  ),
                A !== t && ((A = t), (w = !0), (R = !0));
            }
            if (r.isSkinnedMesh) {
              C.setOptional(Lt, r, "bindMatrix"),
                C.setOptional(Lt, r, "bindMatrixInverse");
              const t = r.skeleton;
              t &&
                (null === t.boneTexture && t.computeBoneTexture(),
                C.setValue(Lt, "boneTexture", t.boneTexture, dt));
            }
            r.isBatchedMesh &&
              (C.setOptional(Lt, r, "batchingTexture"),
              C.setValue(Lt, "batchingTexture", r._matricesTexture, dt),
              C.setOptional(Lt, r, "batchingIdTexture"),
              C.setValue(Lt, "batchingIdTexture", r._indirectTexture, dt),
              C.setOptional(Lt, r, "batchingColorTexture"),
              null !== r._colorsTexture &&
                C.setValue(Lt, "batchingColorTexture", r._colorsTexture, dt));
            const L = n.morphAttributes;
            var U, N;
            if (
              ((void 0 === L.position &&
                void 0 === L.normal &&
                void 0 === L.color) ||
                bt.update(r, n, y),
              (w || v.receiveShadow !== r.receiveShadow) &&
                ((v.receiveShadow = r.receiveShadow),
                C.setValue(Lt, "receiveShadow", r.receiveShadow)),
              i.isMeshGouraudMaterial &&
                null !== i.envMap &&
                ((P.envMap.value = l),
                (P.flipEnvMap.value =
                  l.isCubeTexture && !1 === l.isRenderTargetTexture ? -1 : 1)),
              i.isMeshStandardMaterial &&
                null === i.envMap &&
                null !== e.environment &&
                (P.envMapIntensity.value = e.environmentIntensity),
              w &&
                (C.setValue(Lt, "toneMappingExposure", M.toneMappingExposure),
                v.needsLights &&
                  ((N = R),
                  ((U = P).ambientLightColor.needsUpdate = N),
                  (U.lightProbe.needsUpdate = N),
                  (U.directionalLights.needsUpdate = N),
                  (U.directionalLightShadows.needsUpdate = N),
                  (U.pointLights.needsUpdate = N),
                  (U.pointLightShadows.needsUpdate = N),
                  (U.spotLights.needsUpdate = N),
                  (U.spotLightShadows.needsUpdate = N),
                  (U.rectAreaLights.needsUpdate = N),
                  (U.hemisphereLights.needsUpdate = N)),
                a && !0 === i.fog && xt.refreshFogUniforms(P, a),
                xt.refreshMaterialUniforms(
                  P,
                  i,
                  I,
                  D,
                  _.state.transmissionRenderTarget[t.id]
                ),
                Cs.upload(Lt, $t(v), P, dt)),
              i.isShaderMaterial &&
                !0 === i.uniformsNeedUpdate &&
                (Cs.upload(Lt, $t(v), P, dt), (i.uniformsNeedUpdate = !1)),
              i.isSpriteMaterial && C.setValue(Lt, "center", r.center),
              C.setValue(Lt, "modelViewMatrix", r.modelViewMatrix),
              C.setValue(Lt, "normalMatrix", r.normalMatrix),
              C.setValue(Lt, "modelMatrix", r.matrixWorld),
              i.isShaderMaterial || i.isRawShaderMaterial)
            ) {
              const t = i.uniformsGroups;
              for (let e = 0, n = t.length; n > e; e++) {
                const n = t[e];
                Pt.update(n, y), Pt.bind(n, y);
              }
            }
            return y;
          })(t, e, n, i, r);
        ct.setMaterial(i, s);
        let l = n.index,
          c = 1;
        if (!0 === i.wireframe) {
          if (((l = gt.getWireframeAttribute(n)), void 0 === l)) return;
          c = 2;
        }
        const h = n.drawRange,
          u = n.attributes.position;
        let d = h.start * c,
          p = (h.start + h.count) * c;
        null !== a &&
          ((d = Math.max(d, a.start * c)),
          (p = Math.min(p, (a.start + a.count) * c))),
          null !== l
            ? ((d = Math.max(d, 0)), (p = Math.min(p, l.count)))
            : null != u && ((d = Math.max(d, 0)), (p = Math.min(p, u.count)));
        const f = p - d;
        if (0 > f || f === 1 / 0) return;
        let m;
        Ct.setup(r, i, o, n, l);
        let g = At;
        if (
          (null !== l && ((m = mt.get(l)), (g = wt), g.setIndex(m)), r.isMesh)
        )
          !0 === i.wireframe
            ? (ct.setLineWidth(i.wireframeLinewidth * it()),
              g.setMode(Lt.LINES))
            : g.setMode(Lt.TRIANGLES);
        else if (r.isLine) {
          let t = i.linewidth;
          void 0 === t && (t = 1),
            ct.setLineWidth(t * it()),
            r.isLineSegments
              ? g.setMode(Lt.LINES)
              : r.isLineLoop
              ? g.setMode(Lt.LINE_LOOP)
              : g.setMode(Lt.LINE_STRIP);
        } else
          r.isPoints
            ? g.setMode(Lt.POINTS)
            : r.isSprite && g.setMode(Lt.TRIANGLES);
        if (r.isBatchedMesh)
          if (null !== r._multiDrawInstances)
            g.renderMultiDrawInstances(
              r._multiDrawStarts,
              r._multiDrawCounts,
              r._multiDrawCount,
              r._multiDrawInstances
            );
          else if (rt.get("WEBGL_multi_draw"))
            g.renderMultiDraw(
              r._multiDrawStarts,
              r._multiDrawCounts,
              r._multiDrawCount
            );
          else {
            const t = r._multiDrawStarts,
              e = r._multiDrawCounts,
              n = r._multiDrawCount,
              a = l ? mt.get(l).bytesPerElement : 1,
              s = ut.get(i).currentProgram.getUniforms();
            for (let i = 0; n > i; i++)
              s.setValue(Lt, "_gl_DrawID", i), g.render(t[i] / a, e[i]);
          }
        else if (r.isInstancedMesh) g.renderInstances(d, f, r.count);
        else if (n.isInstancedBufferGeometry) {
          const t =
              void 0 !== n._maxInstanceCount ? n._maxInstanceCount : 1 / 0,
            e = Math.min(n.instanceCount, t);
          g.renderInstances(d, f, e);
        } else g.render(d, f);
      }),
      (this.compile = function (t, e, n = null) {
        null === n && (n = t),
          (_ = St.get(n)),
          _.init(e),
          x.push(_),
          n.traverseVisible(function (t) {
            t.isLight &&
              t.layers.test(e.layers) &&
              (_.pushLight(t), t.castShadow && _.pushShadow(t));
          }),
          t !== n &&
            t.traverseVisible(function (t) {
              t.isLight &&
                t.layers.test(e.layers) &&
                (_.pushLight(t), t.castShadow && _.pushShadow(t));
            }),
          _.setupLights();
        const i = new Set();
        return (
          t.traverse(function (t) {
            if (!(t.isMesh || t.isPoints || t.isLine || t.isSprite)) return;
            const e = t.material;
            if (e)
              if (Array.isArray(e))
                for (let r = 0; r < e.length; r++) {
                  const a = e[r];
                  zt(a, n, t), i.add(a);
                }
              else zt(e, n, t), i.add(e);
          }),
          x.pop(),
          (_ = null),
          i
        );
      }),
      (this.compileAsync = function (t, e, n = null) {
        const i = this.compile(t, e, n);
        return new Promise((e) => {
          function n() {
            i.forEach(function (t) {
              ut.get(t).currentProgram.isReady() && i.delete(t);
            }),
              0 !== i.size ? setTimeout(n, 10) : e(t);
          }
          null !== rt.get("KHR_parallel_shader_compile")
            ? n()
            : setTimeout(n, 10);
        });
      });
    let Gt = null;
    function kt() {
      Xt.stop();
    }
    function Wt() {
      Xt.start();
    }
    const Xt = new kr();
    function jt(t, e, n, i) {
      if (!1 === t.visible) return;
      if (t.layers.test(e.layers))
        if (t.isGroup) n = t.renderOrder;
        else if (t.isLOD) !0 === t.autoUpdate && t.update(e);
        else if (t.isLight) _.pushLight(t), t.castShadow && _.pushShadow(t);
        else if (t.isSprite) {
          if (!t.frustumCulled || H.intersectsSprite(t)) {
            i && K.setFromMatrixPosition(t.matrixWorld).applyMatrix4(W);
            const e = _t.update(t),
              r = t.material;
            r.visible && g.push(t, e, r, n, K.z, null);
          }
        } else if (
          (t.isMesh || t.isLine || t.isPoints) &&
          (!t.frustumCulled || H.intersectsObject(t))
        ) {
          const e = _t.update(t),
            r = t.material;
          if (
            (i &&
              (void 0 !== t.boundingSphere
                ? (null === t.boundingSphere && t.computeBoundingSphere(),
                  K.copy(t.boundingSphere.center))
                : (null === e.boundingSphere && e.computeBoundingSphere(),
                  K.copy(e.boundingSphere.center)),
              K.applyMatrix4(t.matrixWorld).applyMatrix4(W)),
            Array.isArray(r))
          ) {
            const i = e.groups;
            for (let a = 0, s = i.length; s > a; a++) {
              const s = i[a],
                o = r[s.materialIndex];
              o && o.visible && g.push(t, e, o, n, K.z, s);
            }
          } else r.visible && g.push(t, e, r, n, K.z, null);
        }
      const r = t.children;
      for (let a = 0, s = r.length; s > a; a++) jt(r[a], e, n, i);
    }
    function qt(t, e, n, i) {
      const r = t.opaque,
        a = t.transmissive,
        s = t.transparent;
      _.setupLightsView(n),
        !0 === V && yt.setGlobalState(M.clippingPlanes, n),
        i && ct.viewport(w.copy(i)),
        r.length > 0 && Kt(r, e, n),
        a.length > 0 && Kt(a, e, n),
        s.length > 0 && Kt(s, e, n),
        ct.buffers.depth.setTest(!0),
        ct.buffers.depth.setMask(!0),
        ct.buffers.color.setMask(!0),
        ct.setPolygonOffset(!1);
    }
    function Yt(t, e, n, i) {
      if (null !== (!0 === n.isScene ? n.overrideMaterial : null)) return;
      void 0 === _.state.transmissionRenderTarget[i.id] &&
        (_.state.transmissionRenderTarget[i.id] = new Ie(1, 1, {
          generateMipmaps: !0,
          type:
            rt.has("EXT_color_buffer_half_float") ||
            rt.has("EXT_color_buffer_float")
              ? $
              : q,
          minFilter: j,
          samples: 4,
          stencilBuffer: a,
          resolveDepthBuffer: !1,
          resolveStencilBuffer: !1,
          colorSpace: ye.workingColorSpace,
        }));
      const r = _.state.transmissionRenderTarget[i.id],
        s = i.viewport || w;
      r.setSize(
        s.z * M.transmissionResolutionScale,
        s.w * M.transmissionResolutionScale
      );
      const o = M.getRenderTarget();
      M.setRenderTarget(r),
        M.getClearColor(P),
        (L = M.getClearAlpha()),
        1 > L && M.setClearColor(16777215, 0.5),
        M.clear(),
        nt && Tt.render(n);
      const l = M.toneMapping;
      M.toneMapping = 0;
      const c = i.viewport;
      if (
        (void 0 !== i.viewport && (i.viewport = void 0),
        _.setupLightsView(i),
        !0 === V && yt.setGlobalState(M.clippingPlanes, i),
        Kt(t, n, i),
        dt.updateMultisampleRenderTarget(r),
        dt.updateRenderTargetMipmap(r),
        !1 === rt.has("WEBGL_multisampled_render_to_texture"))
      ) {
        let t = !1;
        for (let r = 0, a = e.length; a > r; r++) {
          const a = e[r],
            s = a.object,
            o = a.geometry,
            l = a.material,
            c = a.group;
          if (2 === l.side && s.layers.test(i.layers)) {
            const e = l.side;
            (l.side = 1),
              (l.needsUpdate = !0),
              Zt(s, n, i, o, l, c),
              (l.side = e),
              (l.needsUpdate = !0),
              (t = !0);
          }
        }
        !0 === t &&
          (dt.updateMultisampleRenderTarget(r), dt.updateRenderTargetMipmap(r));
      }
      M.setRenderTarget(o),
        M.setClearColor(P, L),
        void 0 !== c && (i.viewport = c),
        (M.toneMapping = l);
    }
    function Kt(t, e, n) {
      const i = !0 === e.isScene ? e.overrideMaterial : null;
      for (let r = 0, a = t.length; a > r; r++) {
        const a = t[r],
          s = a.object,
          o = a.geometry,
          l = null === i ? a.material : i,
          c = a.group;
        s.layers.test(n.layers) && Zt(s, e, n, o, l, c);
      }
    }
    function Zt(t, e, n, i, r, a) {
      t.onBeforeRender(M, e, n, i, r, a),
        t.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse, t.matrixWorld),
        t.normalMatrix.getNormalMatrix(t.modelViewMatrix),
        r.onBeforeRender(M, e, n, i, t, a),
        !0 === r.transparent && 2 === r.side && !1 === r.forceSinglePass
          ? ((r.side = 1),
            (r.needsUpdate = !0),
            M.renderBufferDirect(n, e, i, r, t, a),
            (r.side = 0),
            (r.needsUpdate = !0),
            M.renderBufferDirect(n, e, i, r, t, a),
            (r.side = 2))
          : M.renderBufferDirect(n, e, i, r, t, a),
        t.onAfterRender(M, e, n, i, r, a);
    }
    function Jt(t, e, n) {
      !0 !== e.isScene && (e = J);
      const i = ut.get(t),
        r = _.state.lights,
        a = _.state.shadowsArray,
        s = r.state.version,
        o = vt.getParameters(t, r.state, a, e, n),
        l = vt.getProgramCacheKey(o);
      let c = i.programs;
      (i.environment = t.isMeshStandardMaterial ? e.environment : null),
        (i.fog = e.fog),
        (i.envMap = (t.isMeshStandardMaterial ? ft : pt).get(
          t.envMap || i.environment
        )),
        (i.envMapRotation =
          null !== i.environment && null === t.envMap
            ? e.environmentRotation
            : t.envMapRotation),
        void 0 === c &&
          (t.addEventListener("dispose", Bt),
          (c = new Map()),
          (i.programs = c));
      let h = c.get(l);
      if (void 0 !== h) {
        if (i.currentProgram === h && i.lightsStateVersion === s)
          return Qt(t, o), h;
      } else
        (o.uniforms = vt.getUniforms(t)),
          t.onBeforeCompile(o, M),
          (h = vt.acquireProgram(o, l)),
          c.set(l, h),
          (i.uniforms = o.uniforms);
      const u = i.uniforms;
      return (
        ((t.isShaderMaterial || t.isRawShaderMaterial) && !0 !== t.clipping) ||
          (u.clippingPlanes = yt.uniform),
        Qt(t, o),
        (i.needsLights = (function (t) {
          return (
            t.isMeshLambertMaterial ||
            t.isMeshToonMaterial ||
            t.isMeshPhongMaterial ||
            t.isMeshStandardMaterial ||
            t.isShadowMaterial ||
            (t.isShaderMaterial && !0 === t.lights)
          );
        })(t)),
        (i.lightsStateVersion = s),
        i.needsLights &&
          ((u.ambientLightColor.value = r.state.ambient),
          (u.lightProbe.value = r.state.probe),
          (u.directionalLights.value = r.state.directional),
          (u.directionalLightShadows.value = r.state.directionalShadow),
          (u.spotLights.value = r.state.spot),
          (u.spotLightShadows.value = r.state.spotShadow),
          (u.rectAreaLights.value = r.state.rectArea),
          (u.ltc_1.value = r.state.rectAreaLTC1),
          (u.ltc_2.value = r.state.rectAreaLTC2),
          (u.pointLights.value = r.state.point),
          (u.pointLightShadows.value = r.state.pointShadow),
          (u.hemisphereLights.value = r.state.hemi),
          (u.directionalShadowMap.value = r.state.directionalShadowMap),
          (u.directionalShadowMatrix.value = r.state.directionalShadowMatrix),
          (u.spotShadowMap.value = r.state.spotShadowMap),
          (u.spotLightMatrix.value = r.state.spotLightMatrix),
          (u.spotLightMap.value = r.state.spotLightMap),
          (u.pointShadowMap.value = r.state.pointShadowMap),
          (u.pointShadowMatrix.value = r.state.pointShadowMatrix)),
        (i.currentProgram = h),
        (i.uniformsList = null),
        h
      );
    }
    function $t(t) {
      if (null === t.uniformsList) {
        const e = t.currentProgram.getUniforms();
        t.uniformsList = Cs.seqWithValue(e.seq, t.uniforms);
      }
      return t.uniformsList;
    }
    function Qt(t, e) {
      const n = ut.get(t);
      (n.outputColorSpace = e.outputColorSpace),
        (n.batching = e.batching),
        (n.batchingColor = e.batchingColor),
        (n.instancing = e.instancing),
        (n.instancingColor = e.instancingColor),
        (n.instancingMorph = e.instancingMorph),
        (n.skinning = e.skinning),
        (n.morphTargets = e.morphTargets),
        (n.morphNormals = e.morphNormals),
        (n.morphColors = e.morphColors),
        (n.morphTargetsCount = e.morphTargetsCount),
        (n.numClippingPlanes = e.numClippingPlanes),
        (n.numIntersection = e.numClipIntersection),
        (n.vertexAlphas = e.vertexAlphas),
        (n.vertexTangents = e.vertexTangents),
        (n.toneMapping = e.toneMapping);
    }
    Xt.setAnimationLoop(function (t) {
      Gt && Gt(t);
    }),
      "undefined" != typeof self && Xt.setContext(self),
      (this.setAnimationLoop = function (t) {
        (Gt = t), It.setAnimationLoop(t), null === t ? Xt.stop() : Xt.start();
      }),
      It.addEventListener("sessionstart", kt),
      It.addEventListener("sessionend", Wt),
      (this.render = function (t, e) {
        if (void 0 !== e && !0 !== e.isCamera) return;
        if (!0 === S) return;
        if (
          (!0 === t.matrixWorldAutoUpdate && t.updateMatrixWorld(),
          null === e.parent &&
            !0 === e.matrixWorldAutoUpdate &&
            e.updateMatrixWorld(),
          !0 === It.enabled &&
            !0 === It.isPresenting &&
            (!0 === It.cameraAutoUpdate && It.updateCamera(e),
            (e = It.getCamera())),
          !0 === t.isScene && t.onBeforeRender(M, t, e, T),
          (_ = St.get(t, x.length)),
          _.init(e),
          x.push(_),
          W.multiplyMatrices(e.projectionMatrix, e.matrixWorldInverse),
          H.setFromProjectionMatrix(W),
          (G = this.localClippingEnabled),
          (V = yt.init(this.clippingPlanes, G)),
          (g = Mt.get(t, v.length)),
          g.init(),
          v.push(g),
          !0 === It.enabled && !0 === It.isPresenting)
        ) {
          const t = M.xr.getDepthSensingMesh();
          null !== t && jt(t, e, -1 / 0, M.sortObjects);
        }
        jt(t, e, 0, M.sortObjects),
          g.finish(),
          !0 === M.sortObjects && g.sort(N, O),
          (nt =
            !1 === It.enabled ||
            !1 === It.isPresenting ||
            !1 === It.hasDepthSensing()),
          nt && Tt.addToRenderList(g, t),
          this.info.render.frame++,
          !0 === V && yt.beginShadows();
        const n = _.state.shadowsArray;
        Et.render(n, t, e),
          !0 === V && yt.endShadows(),
          !0 === this.info.autoReset && this.info.reset();
        const i = g.opaque,
          r = g.transmissive;
        if ((_.setupLights(), e.isArrayCamera)) {
          const n = e.cameras;
          if (r.length > 0)
            for (let e = 0, a = n.length; a > e; e++) Yt(i, r, t, n[e]);
          nt && Tt.render(t);
          for (let e = 0, i = n.length; i > e; e++) {
            const i = n[e];
            qt(g, t, i, i.viewport);
          }
        } else r.length > 0 && Yt(i, r, t, e), nt && Tt.render(t), qt(g, t, e);
        null !== T &&
          0 === E &&
          (dt.updateMultisampleRenderTarget(T), dt.updateRenderTargetMipmap(T)),
          !0 === t.isScene && t.onAfterRender(M, t, e),
          Ct.resetDefaultState(),
          (b = -1),
          (A = null),
          x.pop(),
          x.length > 0
            ? ((_ = x[x.length - 1]),
              !0 === V && yt.setGlobalState(M.clippingPlanes, _.state.camera))
            : (_ = null),
          v.pop(),
          (g = v.length > 0 ? v[v.length - 1] : null);
      }),
      (this.getActiveCubeFace = function () {
        return y;
      }),
      (this.getActiveMipmapLevel = function () {
        return E;
      }),
      (this.getRenderTarget = function () {
        return T;
      }),
      (this.setRenderTargetTextures = function (t, e, n) {
        (ut.get(t.texture).__webglTexture = e),
          (ut.get(t.depthTexture).__webglTexture = n);
        const i = ut.get(t);
        (i.__hasExternalTextures = !0),
          (i.__autoAllocateDepthBuffer = void 0 === n),
          i.__autoAllocateDepthBuffer ||
            (!0 === rt.has("WEBGL_multisampled_render_to_texture") &&
              (i.__useRenderToTexture = !1));
      }),
      (this.setRenderTargetFramebuffer = function (t, e) {
        const n = ut.get(t);
        (n.__webglFramebuffer = e), (n.__useDefaultFramebuffer = void 0 === e);
      });
    const te = Lt.createFramebuffer();
    (this.setRenderTarget = function (t, e = 0, n = 0) {
      (T = t), (y = e), (E = n);
      let i = !0,
        r = null,
        a = !1,
        s = !1;
      if (t) {
        const o = ut.get(t);
        if (void 0 !== o.__useDefaultFramebuffer)
          ct.bindFramebuffer(Lt.FRAMEBUFFER, null), (i = !1);
        else if (void 0 === o.__webglFramebuffer) dt.setupRenderTarget(t);
        else if (o.__hasExternalTextures)
          dt.rebindTextures(
            t,
            ut.get(t.texture).__webglTexture,
            ut.get(t.depthTexture).__webglTexture
          );
        else if (t.depthBuffer) {
          const e = t.depthTexture;
          if (o.__boundDepthTexture !== e) {
            if (
              null !== e &&
              ut.has(e) &&
              (t.width !== e.image.width || t.height !== e.image.height)
            )
              throw Error(
                "WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size."
              );
            dt.setupDepthRenderbuffer(t);
          }
        }
        const l = t.texture;
        (l.isData3DTexture ||
          l.isDataArrayTexture ||
          l.isCompressedArrayTexture) &&
          (s = !0);
        const c = ut.get(t).__webglFramebuffer;
        t.isWebGLCubeRenderTarget
          ? ((r = Array.isArray(c[e]) ? c[e][n] : c[e]), (a = !0))
          : (r =
              t.samples > 0 && !1 === dt.useMultisampledRTT(t)
                ? ut.get(t).__webglMultisampledFramebuffer
                : Array.isArray(c)
                ? c[n]
                : c),
          w.copy(t.viewport),
          R.copy(t.scissor),
          (C = t.scissorTest);
      } else
        w.copy(F).multiplyScalar(I).floor(),
          R.copy(B).multiplyScalar(I).floor(),
          (C = z);
      if (
        (0 !== n && (r = te),
        ct.bindFramebuffer(Lt.FRAMEBUFFER, r) && i && ct.drawBuffers(t, r),
        ct.viewport(w),
        ct.scissor(R),
        ct.setScissorTest(C),
        a)
      ) {
        const i = ut.get(t.texture);
        Lt.framebufferTexture2D(
          Lt.FRAMEBUFFER,
          Lt.COLOR_ATTACHMENT0,
          Lt.TEXTURE_CUBE_MAP_POSITIVE_X + e,
          i.__webglTexture,
          n
        );
      } else if (s) {
        const i = ut.get(t.texture),
          r = e;
        Lt.framebufferTextureLayer(
          Lt.FRAMEBUFFER,
          Lt.COLOR_ATTACHMENT0,
          i.__webglTexture,
          n,
          r
        );
      } else if (null !== t && 0 !== n) {
        const e = ut.get(t.texture);
        Lt.framebufferTexture2D(
          Lt.FRAMEBUFFER,
          Lt.COLOR_ATTACHMENT0,
          Lt.TEXTURE_2D,
          e.__webglTexture,
          n
        );
      }
      b = -1;
    }),
      (this.readRenderTargetPixels = function (t, e, n, i, r, a, s) {
        if (!t || !t.isWebGLRenderTarget) return;
        let o = ut.get(t).__webglFramebuffer;
        if ((t.isWebGLCubeRenderTarget && void 0 !== s && (o = o[s]), o)) {
          ct.bindFramebuffer(Lt.FRAMEBUFFER, o);
          try {
            const s = t.texture,
              o = s.format,
              l = s.type;
            if (!lt.textureFormatReadable(o)) return;
            if (!lt.textureTypeReadable(l)) return;
            0 > e ||
              e > t.width - i ||
              0 > n ||
              n > t.height - r ||
              Lt.readPixels(e, n, i, r, Rt.convert(o), Rt.convert(l), a);
          } finally {
            const t = null !== T ? ut.get(T).__webglFramebuffer : null;
            ct.bindFramebuffer(Lt.FRAMEBUFFER, t);
          }
        }
      }),
      (this.readRenderTargetPixelsAsync = async function (t, e, n, i, r, a, s) {
        if (!t || !t.isWebGLRenderTarget)
          throw Error(
            "THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget."
          );
        let o = ut.get(t).__webglFramebuffer;
        if ((t.isWebGLCubeRenderTarget && void 0 !== s && (o = o[s]), o)) {
          const s = t.texture,
            l = s.format,
            c = s.type;
          if (!lt.textureFormatReadable(l))
            throw Error(
              "THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format."
            );
          if (!lt.textureTypeReadable(c))
            throw Error(
              "THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type."
            );
          if (0 > e || e > t.width - i || 0 > n || n > t.height - r)
            throw Error(
              "THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range."
            );
          {
            ct.bindFramebuffer(Lt.FRAMEBUFFER, o);
            const t = Lt.createBuffer();
            Lt.bindBuffer(Lt.PIXEL_PACK_BUFFER, t),
              Lt.bufferData(Lt.PIXEL_PACK_BUFFER, a.byteLength, Lt.STREAM_READ),
              Lt.readPixels(e, n, i, r, Rt.convert(l), Rt.convert(c), 0);
            const s = null !== T ? ut.get(T).__webglFramebuffer : null;
            ct.bindFramebuffer(Lt.FRAMEBUFFER, s);
            const h = Lt.fenceSync(Lt.SYNC_GPU_COMMANDS_COMPLETE, 0);
            return (
              Lt.flush(),
              await (function (t, e) {
                return new Promise(function (n, i) {
                  setTimeout(function r() {
                    switch (t.clientWaitSync(e, t.SYNC_FLUSH_COMMANDS_BIT, 0)) {
                      case t.WAIT_FAILED:
                        i();
                        break;
                      case t.TIMEOUT_EXPIRED:
                        setTimeout(r, 4);
                        break;
                      default:
                        n();
                    }
                  }, 4);
                });
              })(Lt, h),
              Lt.bindBuffer(Lt.PIXEL_PACK_BUFFER, t),
              Lt.getBufferSubData(Lt.PIXEL_PACK_BUFFER, 0, a),
              Lt.deleteBuffer(t),
              Lt.deleteSync(h),
              a
            );
          }
        }
      }),
      (this.copyFramebufferToTexture = function (t, e = null, n = 0) {
        !0 !== t.isTexture &&
          (ve(
            "WebGLRenderer: copyFramebufferToTexture function signature has changed."
          ),
          (e = arguments[0] || null),
          (t = arguments[1]));
        const i = Math.pow(2, -n),
          r = Math.floor(t.image.width * i),
          a = Math.floor(t.image.height * i),
          s = null !== e ? e.x : 0,
          o = null !== e ? e.y : 0;
        dt.setTexture2D(t, 0),
          Lt.copyTexSubImage2D(Lt.TEXTURE_2D, n, 0, 0, s, o, r, a),
          ct.unbindTexture();
      });
    const ee = Lt.createFramebuffer(),
      ne = Lt.createFramebuffer();
    (this.copyTextureToTexture = function (
      t,
      e,
      n = null,
      i = null,
      r = 0,
      a = null
    ) {
      let s, o, l, c, h, u, d, p, f;
      !0 !== t.isTexture &&
        (ve(
          "WebGLRenderer: copyTextureToTexture function signature has changed."
        ),
        (i = arguments[0] || null),
        (t = arguments[1]),
        (e = arguments[2]),
        (a = arguments[3] || 0),
        (n = null)),
        null === a &&
          (0 !== r
            ? (ve(
                "WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."
              ),
              (a = r),
              (r = 0))
            : (a = 0));
      const m = t.isCompressedTexture ? t.mipmaps[a] : t.image;
      if (null !== n)
        (s = n.max.x - n.min.x),
          (o = n.max.y - n.min.y),
          (l = n.isBox3 ? n.max.z - n.min.z : 1),
          (c = n.min.x),
          (h = n.min.y),
          (u = n.isBox3 ? n.min.z : 0);
      else {
        const e = Math.pow(2, -r);
        (s = Math.floor(m.width * e)),
          (o = Math.floor(m.height * e)),
          (l = t.isDataArrayTexture
            ? m.depth
            : t.isData3DTexture
            ? Math.floor(m.depth * e)
            : 1),
          (c = 0),
          (h = 0),
          (u = 0);
      }
      null !== i
        ? ((d = i.x), (p = i.y), (f = i.z))
        : ((d = 0), (p = 0), (f = 0));
      const g = Rt.convert(e.format),
        _ = Rt.convert(e.type);
      let v;
      e.isData3DTexture
        ? (dt.setTexture3D(e, 0), (v = Lt.TEXTURE_3D))
        : e.isDataArrayTexture || e.isCompressedArrayTexture
        ? (dt.setTexture2DArray(e, 0), (v = Lt.TEXTURE_2D_ARRAY))
        : (dt.setTexture2D(e, 0), (v = Lt.TEXTURE_2D)),
        Lt.pixelStorei(Lt.UNPACK_FLIP_Y_WEBGL, e.flipY),
        Lt.pixelStorei(Lt.UNPACK_PREMULTIPLY_ALPHA_WEBGL, e.premultiplyAlpha),
        Lt.pixelStorei(Lt.UNPACK_ALIGNMENT, e.unpackAlignment);
      const x = Lt.getParameter(Lt.UNPACK_ROW_LENGTH),
        M = Lt.getParameter(Lt.UNPACK_IMAGE_HEIGHT),
        S = Lt.getParameter(Lt.UNPACK_SKIP_PIXELS),
        y = Lt.getParameter(Lt.UNPACK_SKIP_ROWS),
        E = Lt.getParameter(Lt.UNPACK_SKIP_IMAGES);
      Lt.pixelStorei(Lt.UNPACK_ROW_LENGTH, m.width),
        Lt.pixelStorei(Lt.UNPACK_IMAGE_HEIGHT, m.height),
        Lt.pixelStorei(Lt.UNPACK_SKIP_PIXELS, c),
        Lt.pixelStorei(Lt.UNPACK_SKIP_ROWS, h),
        Lt.pixelStorei(Lt.UNPACK_SKIP_IMAGES, u);
      const T = t.isDataArrayTexture || t.isData3DTexture,
        b = e.isDataArrayTexture || e.isData3DTexture;
      if (t.isDepthTexture) {
        const n = ut.get(t),
          i = ut.get(e),
          m = ut.get(n.__renderTarget),
          g = ut.get(i.__renderTarget);
        ct.bindFramebuffer(Lt.READ_FRAMEBUFFER, m.__webglFramebuffer),
          ct.bindFramebuffer(Lt.DRAW_FRAMEBUFFER, g.__webglFramebuffer);
        for (let _ = 0; l > _; _++)
          T &&
            (Lt.framebufferTextureLayer(
              Lt.READ_FRAMEBUFFER,
              Lt.COLOR_ATTACHMENT0,
              ut.get(t).__webglTexture,
              r,
              u + _
            ),
            Lt.framebufferTextureLayer(
              Lt.DRAW_FRAMEBUFFER,
              Lt.COLOR_ATTACHMENT0,
              ut.get(e).__webglTexture,
              a,
              f + _
            )),
            Lt.blitFramebuffer(
              c,
              h,
              s,
              o,
              d,
              p,
              s,
              o,
              Lt.DEPTH_BUFFER_BIT,
              Lt.NEAREST
            );
        ct.bindFramebuffer(Lt.READ_FRAMEBUFFER, null),
          ct.bindFramebuffer(Lt.DRAW_FRAMEBUFFER, null);
      } else if (0 !== r || t.isRenderTargetTexture || ut.has(t)) {
        const n = ut.get(t),
          i = ut.get(e);
        ct.bindFramebuffer(Lt.READ_FRAMEBUFFER, ee),
          ct.bindFramebuffer(Lt.DRAW_FRAMEBUFFER, ne);
        for (let t = 0; l > t; t++)
          T
            ? Lt.framebufferTextureLayer(
                Lt.READ_FRAMEBUFFER,
                Lt.COLOR_ATTACHMENT0,
                n.__webglTexture,
                r,
                u + t
              )
            : Lt.framebufferTexture2D(
                Lt.READ_FRAMEBUFFER,
                Lt.COLOR_ATTACHMENT0,
                Lt.TEXTURE_2D,
                n.__webglTexture,
                r
              ),
            b
              ? Lt.framebufferTextureLayer(
                  Lt.DRAW_FRAMEBUFFER,
                  Lt.COLOR_ATTACHMENT0,
                  i.__webglTexture,
                  a,
                  f + t
                )
              : Lt.framebufferTexture2D(
                  Lt.DRAW_FRAMEBUFFER,
                  Lt.COLOR_ATTACHMENT0,
                  Lt.TEXTURE_2D,
                  i.__webglTexture,
                  a
                ),
            0 !== r
              ? Lt.blitFramebuffer(
                  c,
                  h,
                  s,
                  o,
                  d,
                  p,
                  s,
                  o,
                  Lt.COLOR_BUFFER_BIT,
                  Lt.NEAREST
                )
              : b
              ? Lt.copyTexSubImage3D(v, a, d, p, f + t, c, h, s, o)
              : Lt.copyTexSubImage2D(v, a, d, p, c, h, s, o);
        ct.bindFramebuffer(Lt.READ_FRAMEBUFFER, null),
          ct.bindFramebuffer(Lt.DRAW_FRAMEBUFFER, null);
      } else
        b
          ? t.isDataTexture || t.isData3DTexture
            ? Lt.texSubImage3D(v, a, d, p, f, s, o, l, g, _, m.data)
            : e.isCompressedArrayTexture
            ? Lt.compressedTexSubImage3D(v, a, d, p, f, s, o, l, g, m.data)
            : Lt.texSubImage3D(v, a, d, p, f, s, o, l, g, _, m)
          : t.isDataTexture
          ? Lt.texSubImage2D(Lt.TEXTURE_2D, a, d, p, s, o, g, _, m.data)
          : t.isCompressedTexture
          ? Lt.compressedTexSubImage2D(
              Lt.TEXTURE_2D,
              a,
              d,
              p,
              m.width,
              m.height,
              g,
              m.data
            )
          : Lt.texSubImage2D(Lt.TEXTURE_2D, a, d, p, s, o, g, _, m);
      Lt.pixelStorei(Lt.UNPACK_ROW_LENGTH, x),
        Lt.pixelStorei(Lt.UNPACK_IMAGE_HEIGHT, M),
        Lt.pixelStorei(Lt.UNPACK_SKIP_PIXELS, S),
        Lt.pixelStorei(Lt.UNPACK_SKIP_ROWS, y),
        Lt.pixelStorei(Lt.UNPACK_SKIP_IMAGES, E),
        0 === a && e.generateMipmaps && Lt.generateMipmap(v),
        ct.unbindTexture();
    }),
      (this.copyTextureToTexture3D = function (
        t,
        e,
        n = null,
        i = null,
        r = 0
      ) {
        return (
          !0 !== t.isTexture &&
            (ve(
              "WebGLRenderer: copyTextureToTexture3D function signature has changed."
            ),
            (n = arguments[0] || null),
            (i = arguments[1] || null),
            (t = arguments[2]),
            (e = arguments[3]),
            (r = arguments[4] || 0)),
          ve(
            'WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'
          ),
          this.copyTextureToTexture(t, e, n, i, r)
        );
      }),
      (this.initRenderTarget = function (t) {
        void 0 === ut.get(t).__webglFramebuffer && dt.setupRenderTarget(t);
      }),
      (this.initTexture = function (t) {
        t.isCubeTexture
          ? dt.setTextureCube(t, 0)
          : t.isData3DTexture
          ? dt.setTexture3D(t, 0)
          : t.isDataArrayTexture || t.isCompressedArrayTexture
          ? dt.setTexture2DArray(t, 0)
          : dt.setTexture2D(t, 0),
          ct.unbindTexture();
      }),
      (this.resetState = function () {
        (y = 0), (E = 0), (T = null), ct.reset(), Ct.reset();
      }),
      "undefined" != typeof __THREE_DEVTOOLS__ &&
        __THREE_DEVTOOLS__.dispatchEvent(
          new CustomEvent("observe", {
            detail: this,
          })
        );
  }
  get coordinateSystem() {
    return te;
  }
  get outputColorSpace() {
    return this._outputColorSpace;
  }
  set outputColorSpace(t) {
    this._outputColorSpace = t;
    const e = this.getContext();
    (e.drawingBufferColorspace = ye._getDrawingBufferColorSpace(t)),
      (e.unpackColorSpace = ye._getUnpackColorSpace());
  }
}
export {
  I as A,
  bi as B,
  Hr as C,
  r as D,
  tr as F,
  D as L,
  Fi as M,
  a as N,
  Ki as P,
  er as S,
  Cr as T,
  ue as V,
  To as W,
  xr as a,
  Wi as b,
  Vt as c,
  Ht as d,
  e,
  Br as f,
  Fr as g,
  oi as h,
  Mr as i,
  Sr as j,
  fi as k,
  _r as l,
  cr as m,
  s as n,
  fr as o,
  Tr as p,
  W as q,
  j as r,
  Be as s,
  lr as t,
  mn as u,
};
