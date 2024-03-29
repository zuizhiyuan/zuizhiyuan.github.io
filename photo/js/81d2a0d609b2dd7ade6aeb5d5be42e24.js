! function(e) {
	function t(a) {
		if(i[a]) return i[a].exports;
		var n = i[a] = {
			exports: {},
			id: a,
			loaded: !1
		};
		return e[a].call(n.exports, n, n.exports, t), n.loaded = !0, n.exports
	}
	var i = {};
	return t.m = e, t.c = i, t.p = "", t(0)
}([function(e, t, i) {
	e.exports = i(9)
}, function(e, t, i) {
	"use strict";

	function a(e) {
		return e && e.__esModule ? e : {
			default: e
		}
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.ROTATION_VIEW = t.EVENT_NAMES = t.KEY = t.LEFT = t.OPPOSITE = t.STATES_ARRAY = t.STATES = void 0;
	var n = i(3),
		s = a(n),
		r = {
			X: 20,
			Y: 30
		};
	(0, s.default)(r);
	var o = {
		uf: "uf",
		ur: "ur",
		ub: "ub",
		ul: "ul",
		fu: "fu",
		fl: "fl",
		fd: "fd",
		fr: "fr",
		ru: "ru",
		rf: "rf",
		rd: "rd",
		rb: "rb",
		df: "df",
		dl: "dl",
		db: "db",
		dr: "dr",
		bu: "bu",
		br: "br",
		bd: "bd",
		bl: "bl",
		lu: "lu",
		lb: "lb",
		ld: "ld",
		lf: "lf"
	};
	(0, s.default)(o);
	var c = [];
	Object.keys(o).forEach(function(e, t) {
		return c.push(e)
	}), (0, s.default)(c);
	var u = {
		LEFT: 37,
		UP: 38,
		RIGHT: 39,
		DOWN: 40,
		a: 65,
		d: 68,
		e: 69,
		q: 81,
		s: 83,
		w: 87,
		x: 88,
		y: 89,
		z: 90
	};
	(0, s.default)(u);
	var l = {
		init: "init",
		statechange: "statechange",
		beforerotate: "beforerotate",
		afterrotate: "afterrotate",
		issolved: "issolved"
	};
	(0, s.default)(l);
	var d = [];
	d.u = "d", d.d = "u", d.r = "l", d.l = "r", d.f = "b", d.b = "f";
	var p = [];
	p.uf = "l", p.ur = "f", p.ub = "r", p.ul = "b", p.fu = "r", p.fl = "u", p.fd = "l", p.fr = "d", p.ru = "b", p.rf = "u", p.rd = "f", p.rb = "d", p.df = "r", p.dl = "f", p.db = "l", p.dr = "b", p.bu = "l", p.br = "u", p.bd = "r", p.bl = "d", p.lu = "f", p.lb = "u", p.ld = "b", p.lf = "d", t.STATES = o, t.STATES_ARRAY = c, t.OPPOSITE = d, t.LEFT = p, t.KEY = u, t.EVENT_NAMES = l, t.ROTATION_VIEW = r
}, function(e, t) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	t.log = console.log.bind(console), t.error = console.error.bind(console), t.debug = console.debug.bind(console)
}, function(e, t) {
	e.exports = function e(t) {
		return Object.freeze(t), Object.getOwnPropertyNames(t).forEach(function(i) {
			!t.hasOwnProperty(i) || null === t[i] || "object" != typeof t[i] && "function" != typeof t[i] || Object.isFrozen(t[i]) || e(t[i])
		}), t
	}
}, function(e, t, i) {
	"use strict";

	function a(e) {
		window.requestAnimationFrame(e)
	}

	function n(e) {
		window.requestAnimationFrame(function(t) {
			window.requestAnimationFrame(e)
		})
	}

	function s(e) {
		return e[0]
	}

	function r(e) {
		return e[1]
	}

	function o(e) {
		return f.OPPOSITE[c(e)]
	}

	function c(e) {
		return f.LEFT[e]
	}

	function u(e) {
		return f.OPPOSITE[e[0]]
	}

	function l(e) {
		return f.OPPOSITE[e[1]]
	}

	function d(e) {
		return Object.assign({}, e)
	}

	function p() {
		var e = f.STATES_ARRAY;
		this.first = f.STATES_ARRAY[0], this.last = f.STATES_ARRAY[f.STATES_ARRAY.length - 1], this.stateCount = e.length, this.get = function(t) {
			var i = e.indexOf(t);
			if(i >= 0) return i === e.length - 1 ? {
				state: e[0],
				index: 0
			} : {
				state: e[i + 1],
				index: i + 1
			}
		}
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.nextState = void 0, t.rAF = a, t.nextFrame = n, t.getUp = s, t.getFront = r, t.getRight = o, t.getLeft = c, t.getDown = u, t.getBack = l, t.cloneObject = d;
	var f = i(1),
		b = (i(2), new p);
	t.nextState = b
}, function(e, t) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	t.qs = function(e, t) {
		return(t || document).querySelector(e)
	}, t.qsa = function(e, t) {
		return [].slice.call((t || document).querySelectorAll(e), 0)
	}, t.byId = function(e) {
		return document.getElementById(e)
	}
}, function(e, t, i) {
	"use strict";

	function a(e) {
		return e && e.__esModule ? e : {
			default: e
		}
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var n = i(1),
		s = i(3),
		r = a(s),
		o = [];
	Object.keys(n.STATES).forEach(function(e, t) {
		return o[e] = []
	}), o.lf.u = {
		angle: 90,
		dir: "Z"
	}, o.rf.u = {
		angle: -90,
		dir: "Z"
	}, o.fl.u = {
		angle: -90,
		dir: "Z"
	}, o.fu.u = {
		angle: 180,
		dir: "Z"
	}, o.fr.u = {
		angle: 90,
		dir: "Z"
	}, o.bl.u = {
		angle: 90,
		dir: "Z"
	}, o.dl.u = {
		angle: -90,
		dir: "Z"
	}, o.rb.u = {
		angle: 90,
		dir: "Z"
	}, o.lu.u = {
		angle: -90,
		dir: "Z"
	}, o.lf.f = {
		angle: 90,
		dir: "Z"
	}, o.rf.f = {
		angle: -90,
		dir: "Z"
	}, o.db.f = {
		angle: 180,
		dir: "Z"
	}, o.fl.f = {
		angle: -90,
		dir: "Z"
	}, o.dl.f = {
		angle: 180,
		dir: "Z"
	}, o.bl.f = {
		angle: 90,
		dir: "Z"
	}, o.rd.f = {
		angle: -90,
		dir: "Z"
	}, o.ld.f = {
		angle: 90,
		dir: "Z"
	}, o.bd.f = {
		angle: 180,
		dir: "Z"
	}, o.br.f = {
		angle: -90,
		dir: "Z"
	}, o.fu.f = {
		angle: 180,
		dir: "Z"
	}, o.lu.f = {
		angle: 90,
		dir: "Z"
	}, o.ru.f = {
		angle: -90,
		dir: "Z"
	}, o.fr.f = {
		angle: 90,
		dir: "Z"
	}, o.df.f = {
		angle: 180,
		dir: "Z"
	}, o.dr.f = {
		angle: 180,
		dir: "Z"
	}, o.rb.f = {
		angle: 90,
		dir: "Z"
	}, o.lb.f = {
		angle: -90,
		dir: "Z"
	}, o.fd.r = {
		angle: 90,
		dir: "Z"
	}, o.db.r = {
		angle: 180,
		dir: "Z"
	}, o.bu.r = {
		angle: -90,
		dir: "Z"
	}, o.ld.r = {
		angle: 90,
		dir: "Z"
	}, o.rd.r = {
		angle: 90,
		dir: "Z"
	}, o.dl.r = {
		angle: 180,
		dir: "Z"
	}, o.lu.r = {
		angle: -90,
		dir: "Z"
	}, o.lf.r = {
		angle: 90,
		dir: "Z"
	}, o.rf.r = {
		angle: -90,
		dir: "Z"
	}, o.bd.r = {
		angle: 90,
		dir: "Z"
	}, o.br.r = {
		angle: 180,
		dir: "Z"
	}, o.lb.r = {
		angle: 90,
		dir: "Z"
	}, o.fu.r = {
		angle: -90,
		dir: "Z"
	}, o.df.r = {
		angle: 180,
		dir: "Z"
	}, o.fr.r = {
		angle: 180,
		dir: "Z"
	}, o.ru.r = {
		angle: -90,
		dir: "Z"
	}, o.dr.r = {
		angle: 180,
		dir: "Z"
	}, o.rb.r = {
		angle: -90,
		dir: "Z"
	}, o.fd.l = {
		angle: -90,
		dir: "Z"
	}, o.db.l = {
		angle: 180,
		dir: "Z"
	}, o.bu.l = {
		angle: 90,
		dir: "Z"
	}, o.rf.l = {
		angle: -90,
		dir: "Z"
	}, o.fl.l = {
		angle: 180,
		dir: "Z"
	}, o.rd.l = {
		angle: -90,
		dir: "Z"
	}, o.bl.l = {
		angle: 180,
		dir: "Z"
	}, o.bd.l = {
		angle: -90,
		dir: "Z"
	}, o.fu.l = {
		angle: 90,
		dir: "Z"
	}, o.lf.l = {
		angle: 90,
		dir: "Z"
	}, o.df.l = {
		angle: 180,
		dir: "Z"
	}, o.rb.l = {
		angle: -90,
		dir: "Z"
	}, o.ru.l = {
		angle: 90,
		dir: "Z"
	}, o.ld.l = {
		angle: -90,
		dir: "Z"
	}, o.dr.l = {
		angle: 180,
		dir: "Z"
	}, o.lu.l = {
		angle: 90,
		dir: "Z"
	}, o.dl.l = {
		angle: 180,
		dir: "Z"
	}, o.lb.l = {
		angle: 90,
		dir: "Z"
	}, o.ul.u = {
		angle: -90,
		dir: "Z"
	}, o.ur.u = {
		angle: 90,
		dir: "Z"
	}, o.ub.u = {
		angle: 180,
		dir: "Z"
	}, o.bu.u = {
		angle: 180,
		dir: "Z"
	}, o.dr.u = {
		angle: 90,
		dir: "Z"
	}, o.ru.u = {
		angle: 180,
		dir: "Z"
	}, o.br.u = {
		angle: -90,
		dir: "Z"
	}, o.lb.u = {
		angle: -90,
		dir: "Z"
	}, o.lu.u = {
		angle: 180,
		dir: "Z"
	}, o.df.u = {
		angle: 180,
		dir: "Z"
	}, o.fd.b = {
		angle: 180,
		dir: "Z"
	}, o.dr.b = {
		angle: 180,
		dir: "Z"
	}, o.db.b = {
		angle: 180,
		dir: "Z"
	}, o.bu.b = {
		angle: 180,
		dir: "Z"
	}, o.bl.b = {
		angle: -90,
		dir: "Z"
	}, o.fl.b = {
		angle: 90,
		dir: "Z"
	}, o.lb.b = {
		angle: 90,
		dir: "Z"
	}, o.rd.b = {
		angle: -90,
		dir: "Z"
	}, o.ld.b = {
		angle: 90,
		dir: "Z"
	}, o.ru.b = {
		angle: -90,
		dir: "Z"
	}, o.br.b = {
		angle: 90,
		dir: "Z"
	}, o.fr.b = {
		angle: -90,
		dir: "Z"
	}, o.lf.b = {
		angle: -90,
		dir: "Z"
	}, o.df.b = {
		angle: 180,
		dir: "Z"
	}, o.rf.b = {
		angle: 90,
		dir: "Z"
	}, o.rb.b = {
		angle: -90,
		dir: "Z"
	}, o.dl.b = {
		angle: 180,
		dir: "Z"
	}, o.lu.b = {
		angle: 90,
		dir: "Z"
	}, o.lf.d = {
		angle: 90,
		dir: "Z"
	}, o.fd.d = {
		angle: 180,
		dir: "Z"
	}, o.dl.d = {
		angle: 90,
		dir: "Z"
	}, o.ul.d = {
		angle: 90,
		dir: "Z"
	}, o.bl.d = {
		angle: 90,
		dir: "Z"
	}, o.ur.d = {
		angle: -90,
		dir: "Z"
	}, o.ub.d = {
		angle: 180,
		dir: "Z"
	}, o.br.d = {
		angle: -90,
		dir: "Z"
	}, o.bd.d = {
		angle: 180,
		dir: "Z"
	}, o.rf.d = {
		angle: -90,
		dir: "Z"
	}, o.df.d = {
		angle: 180,
		dir: "Z"
	}, o.dr.d = {
		angle: -90,
		dir: "Z"
	}, o.ld.d = {
		angle: 180,
		dir: "Z"
	}, o.fl.d = {
		angle: -90,
		dir: "Z"
	}, o.fr.d = {
		angle: 90,
		dir: "Z"
	}, o.rd.d = {
		angle: 180,
		dir: "Z"
	}, o.rb.d = {
		angle: 90,
		dir: "Z"
	}, o.lb.d = {
		angle: -90,
		dir: "Z"
	}, (0, r.default)(o), t.default = o
}, function(e, t, i) {
	"use strict";

	function a(e) {
		return e && e.__esModule ? e : {
			default: e
		}
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var n = i(1),
		s = i(4),
		r = i(3),
		o = a(r),
		c = [];
	Object.keys(n.STATES).forEach(function(e, t) {
		return c[e] = []
	});
	var u = void 0,
		l = void 0,
		d = void 0,
		p = void 0,
		f = s.nextState.first;
	for(u = 0; u < s.nextState.stateCount; u++) l = f[0], d = f[1], c[f].x = "" + d + n.OPPOSITE[l], c[f]["-x"] = "" + n.OPPOSITE[d] + l, c[f].y = "" + l + (0, s.getLeft)(f), c[f]["-y"] = "" + l + (0, s.getRight)(f), c[f].z = "" + (0, s.getLeft)(f) + d, c[f]["-z"] = "" + (0, s.getRight)(f) + d, p = s.nextState.get(f), f = p.state;
	(0, o.default)(c), t.default = c
}, function(e, t) {}, function(e, t, i) {
	"use strict";
	i(8);
	var a = (i(2), i(5)),
		n = i(1),
		s = i(17),
		r = ((0, a.qs)(".body-wrapper"), (0, a.byId)("cubetwo-component-1")),
		o = (0, a.qs)(".cubetwo-rotation-view", r),
		c = (0, a.qs)(".cubetwo-js.cubetwo-btn-menu", r),
		u = (0, a.qs)(".cubetwo-menu-component"),
		l = (0, a.qs)(".cubetwo-btn-solve", u),
		d = (0, a.qs)(".cubetwo-btn-scramble", u),
		p = (0, a.qs)(".cubetwo-btn-spin", u);
	c.addEventListener("click", function(e) {
		u.classList.toggle("cubetwo-show-dialog"), e.currentTarget.classList.toggle("cubetwo-active")
	}), l.addEventListener("click", function(e) {
		return cubetwo.solve()
	}), d.addEventListener("click", function(e) {
		return cubetwo.scramble()
	}), p.addEventListener("click", function(e) {
		p.classList.toggle("cubetwo-active"), o.classList.toggle("spin")
	});
	var f = (0, a.qs)(".cubetwo-js.cubetwo-btn-help", r),
		b = (0, a.qs)(".cubetwo-help-component");
	f.addEventListener("click", function(e) {
		b.classList.toggle("cubetwo-show-dialog"), e.currentTarget.classList.toggle("cubetwo-active")
	}), (0, a.qs)(".cubetwo-btn-top-left", r).addEventListener("click", function(e) {
		return o.style.transform = "rotateX(" + n.ROTATION_VIEW.X + "deg) rotateY(-" + n.ROTATION_VIEW.Y + "deg) rotateZ(0deg)"
	}), (0, a.qs)(".cubetwo-btn-top-right", r).addEventListener("click", function(e) {
		return o.style.transform = "rotateX(" + n.ROTATION_VIEW.X + "deg) rotateY(" + n.ROTATION_VIEW.Y + "deg) rotateZ(0deg)"
	}), (0, a.qs)(".cubetwo-btn-bottom-left", r).addEventListener("click", function(e) {
		return o.style.transform = "rotateX(-" + n.ROTATION_VIEW.X + "deg) rotateY(-" + n.ROTATION_VIEW.Y + "deg) rotateZ(0deg)"
	}), (0, a.qs)(".cubetwo-btn-bottom-right", r).addEventListener("click", function(e) {
		return o.style.transform = "rotateX(-" + n.ROTATION_VIEW.X + "deg) rotateY(" + n.ROTATION_VIEW.Y + "deg) rotateZ(0deg)"
	}), (0, a.qs)(".cubetwo-btn-top-center", r).addEventListener("click", function(e) {
		return cubetwo.x()
	}), (0, a.qs)(".cubetwo-btn-bottom-center", r).addEventListener("click", function(e) {
		return cubetwo.x_()
	}), (0, a.qs)(".cubetwo-js.cubetwo-btn-rotate-left", r).addEventListener("click", function(e) {
		return cubetwo.y_()
	}), (0, a.qs)(".cubetwo-js.cubetwo-btn-rotate-left-2x", r).addEventListener("click", function(e) {
		return cubetwo.z_()
	}), (0, a.qs)(".cubetwo-js.cubetwo-btn-rotate-right", r).addEventListener("click", function(e) {
		return cubetwo.y()
	}), (0, a.qs)(".cubetwo-js.cubetwo-btn-rotate-right-2x", r).addEventListener("click", function(e) {
		return cubetwo.z()
	}), window.CubeTwo = s.CubeTwo
}, , function(e, t) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	t.CUBE_COUNT = 8, t.CUBE_SIZE_2X = "50vmin"
}, function(e, t, i) {
	"use strict";

	function a(e) {
		switch(e.stopPropagation(), e.keyCode) {
			case p.KEY.LEFT:
			case p.KEY.a:
				this.U();
				break;
			case p.KEY.UP:
				e.preventDefault();
			case p.KEY.w:
				this.L_();
				break;
			case p.KEY.RIGHT:
			case p.KEY.d:
				this.U_();
				break;
			case p.KEY.DOWN:
				e.preventDefault();
			case p.KEY.s:
				this.L();
				break;
			case p.KEY.q:
				this.F_();
				break;
			case p.KEY.e:
				this.F();
				break;
			case p.KEY.x:
				this.x();
				break;
			case p.KEY.y:
				this.y();
				break;
			case p.KEY.z:
				this.z()
		}
	}

	function n(e) {
		switch(e.stopPropagation(), e.keyCode) {
			case p.KEY.LEFT:
			case p.KEY.a:
				this.U();
				break;
			case p.KEY.UP:
				e.preventDefault();
			case p.KEY.w:
				this.R();
				break;
			case p.KEY.RIGHT:
			case p.KEY.d:
				this.U_();
				break;
			case p.KEY.DOWN:
				e.preventDefault();
			case p.KEY.s:
				this.R_();
				break;
			case p.KEY.q:
				this.F_();
				break;
			case p.KEY.e:
				this.F();
				break;
			case p.KEY.x:
				this.x();
				break;
			case p.KEY.y:
				this.y();
				break;
			case p.KEY.z:
				this.z()
		}
	}

	function s(e) {
		switch(e.stopPropagation(), e.keyCode) {
			case p.KEY.LEFT:
			case p.KEY.a:
				this.D_();
				break;
			case p.KEY.UP:
				e.preventDefault();
			case p.KEY.w:
				this.L_();
				break;
			case p.KEY.RIGHT:
			case p.KEY.d:
				this.D();
				break;
			case p.KEY.DOWN:
				e.preventDefault();
			case p.KEY.s:
				this.L();
				break;
			case p.KEY.q:
				this.F_();
				break;
			case p.KEY.e:
				this.F();
				break;
			case p.KEY.x:
				this.x();
				break;
			case p.KEY.y:
				this.y();
				break;
			case p.KEY.z:
				this.z()
		}
	}

	function r(e) {
		switch(e.stopPropagation(), e.keyCode) {
			case p.KEY.LEFT:
			case p.KEY.a:
				this.D_();
				break;
			case p.KEY.UP:
				e.preventDefault();
			case p.KEY.w:
				this.R();
				break;
			case p.KEY.RIGHT:
			case p.KEY.d:
				this.D();
				break;
			case p.KEY.DOWN:
				e.preventDefault();
			case p.KEY.s:
				this.R_();
				break;
			case p.KEY.q:
				this.F_();
				break;
			case p.KEY.e:
				this.F();
				break;
			case p.KEY.x:
				this.x();
				break;
			case p.KEY.y:
				this.y();
				break;
			case p.KEY.z:
				this.z()
		}
	}

	function o(e) {
		switch(e.stopPropagation(), e.keyCode) {
			case p.KEY.LEFT:
			case p.KEY.a:
				this.U();
				break;
			case p.KEY.UP:
				e.preventDefault();
			case p.KEY.w:
				this.L_();
				break;
			case p.KEY.RIGHT:
			case p.KEY.d:
				this.U_();
				break;
			case p.KEY.DOWN:
				e.preventDefault();
			case p.KEY.s:
				this.L();
				break;
			case p.KEY.q:
				this.B();
				break;
			case p.KEY.e:
				this.B_();
				break;
			case p.KEY.x:
				this.x();
				break;
			case p.KEY.y:
				this.y();
				break;
			case p.KEY.z:
				this.z()
		}
	}

	function c(e) {
		switch(e.stopPropagation(), e.keyCode) {
			case p.KEY.LEFT:
			case p.KEY.a:
				this.U();
				break;
			case p.KEY.UP:
				e.preventDefault();
			case p.KEY.w:
				this.R();
				break;
			case p.KEY.RIGHT:
			case p.KEY.d:
				this.U_();
				break;
			case p.KEY.DOWN:
				e.preventDefault();
			case p.KEY.s:
				this.R_();
				break;
			case p.KEY.q:
				this.B();
				break;
			case p.KEY.e:
				this.B_();
				break;
			case p.KEY.x:
				this.x();
				break;
			case p.KEY.y:
				this.y();
				break;
			case p.KEY.z:
				this.z()
		}
	}

	function u(e) {
		switch(e.stopPropagation(), e.keyCode) {
			case p.KEY.LEFT:
			case p.KEY.a:
				this.D_();
				break;
			case p.KEY.UP:
				e.preventDefault();
			case p.KEY.w:
				this.L_();
				break;
			case p.KEY.RIGHT:
			case p.KEY.d:
				this.D();
				break;
			case p.KEY.DOWN:
				e.preventDefault();
			case p.KEY.s:
				this.L();
				break;
			case p.KEY.q:
				this.B();
				break;
			case p.KEY.e:
				this.B_();
				break;
			case p.KEY.x:
				this.x();
				break;
			case p.KEY.y:
				this.y();
				break;
			case p.KEY.z:
				this.z()
		}
	}

	function l(e) {
		switch(e.stopPropagation(), e.keyCode) {
			case p.KEY.LEFT:
			case p.KEY.a:
				this.D_();
				break;
			case p.KEY.UP:
				e.preventDefault();
			case p.KEY.w:
				this.R();
				break;
			case p.KEY.RIGHT:
			case p.KEY.d:
				this.D();
				break;
			case p.KEY.DOWN:
				e.preventDefault();
			case p.KEY.s:
				this.R_();
				break;
			case p.KEY.q:
				this.B();
				break;
			case p.KEY.e:
				this.B_();
				break;
			case p.KEY.x:
				this.x();
				break;
			case p.KEY.y:
				this.y();
				break;
			case p.KEY.z:
				this.z()
		}
	}

	function d(e) {
		switch(e.keyCode) {
			case p.KEY.LEFT:
			case p.KEY.a:
				this.y_();
				break;
			case p.KEY.UP:
				e.preventDefault();
			case p.KEY.w:
			case p.KEY.x:
				this.x();
				break;
			case p.KEY.RIGHT:
			case p.KEY.d:
			case p.KEY.y:
				this.y();
				break;
			case p.KEY.DOWN:
				e.preventDefault();
			case p.KEY.s:
				this.x_();
				break;
			case p.KEY.q:
				this.z_();
				break;
			case p.KEY.e:
			case p.KEY.z:
				this.z()
		}
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.handleKeyEventCube1 = a, t.handleKeyEventCube2 = n, t.handleKeyEventCube3 = s, t.handleKeyEventCube4 = r, t.handleKeyEventCube5 = o, t.handleKeyEventCube6 = c, t.handleKeyEventCube7 = u, t.handleKeyEventCube8 = l, t.handleGlobalKeyEvent = d;
	var p = i(1)
}, function(e, t, i) {
	"use strict";

	function a(e) {
		return e && e.__esModule ? e : {
			default: e
		}
	}

	function n(e) {
		function t(e, t, i, a, n) {
			e.code = o.default[e.code][n], t.code = o.default[t.code][n], i.code = o.default[i.code][n], a.code = o.default[a.code][n]
		}

		function i() {
			var e = _[0],
				i = _[1],
				a = _[2],
				n = _[3];
			t(e, i, a, n, "z");
			var r = (0, s.cloneObject)(e);
			_[0] = a, _[2] = n, _[3] = i, _[1] = r
		}

		function a() {
			var e = _[0],
				i = _[1],
				a = _[2],
				n = _[3];
			t(e, i, a, n, "-z");
			var r = (0, s.cloneObject)(e);
			_[0] = i, _[1] = n, _[3] = a, _[2] = r
		}

		function n() {
			var e = _[4],
				i = _[5],
				a = _[6],
				n = _[7];
			t(e, i, a, n, "z");
			var r = (0, s.cloneObject)(e);
			_[4] = a, _[6] = n, _[7] = i, _[5] = r
		}

		function r() {
			var e = _[4],
				i = _[5],
				a = _[6],
				n = _[7];
			t(e, i, a, n, "-z");
			var r = (0, s.cloneObject)(e);
			_[4] = i, _[5] = n, _[7] = a, _[6] = r
		}

		function c() {
			var e = _[1],
				i = _[3],
				a = _[5],
				n = _[7];
			t(e, i, a, n, "x");
			var r = (0, s.cloneObject)(e);
			_[1] = i, _[3] = n, _[7] = a, _[5] = r
		}

		function u() {
			var e = _[1],
				i = _[3],
				a = _[5],
				n = _[7];
			t(e, i, a, n, "-x");
			var r = (0, s.cloneObject)(e);
			_[1] = a, _[5] = n, _[7] = i, _[3] = r
		}

		function l() {
			var e = _[0],
				i = _[2],
				a = _[4],
				n = _[6];
			t(e, i, a, n, "-x");
			var r = (0, s.cloneObject)(e);
			_[0] = a, _[4] = n, _[6] = i, _[2] = r
		}

		function d() {
			var e = _[0],
				i = _[2],
				a = _[4],
				n = _[6];
			t(e, i, a, n, "x");
			var r = (0, s.cloneObject)(e);
			_[0] = i, _[2] = n, _[6] = a, _[4] = r
		}

		function p() {
			var e = _[0],
				i = _[1],
				a = _[4],
				n = _[5];
			t(e, i, a, n, "-y");
			var r = (0, s.cloneObject)(e);
			_[0] = i, _[1] = n, _[5] = a, _[4] = r
		}

		function f() {
			var e = _[0],
				i = _[1],
				a = _[4],
				n = _[5];
			t(e, i, a, n, "y");
			var r = (0, s.cloneObject)(e);
			_[0] = a, _[4] = n, _[5] = i, _[1] = r
		}

		function b() {
			var e = _[2],
				i = _[3],
				a = _[6],
				n = _[7];
			t(e, i, a, n, "y");
			var r = (0, s.cloneObject)(e);
			_[2] = a, _[6] = n, _[7] = i, _[3] = r
		}

		function g() {
			var e = _[2],
				i = _[3],
				a = _[6],
				n = _[7];
			t(e, i, a, n, "-y");
			var r = (0, s.cloneObject)(e);
			_[2] = i, _[3] = n, _[7] = a, _[6] = r
		}
		var h = e.action,
			_ = e.stateCodes;
		switch(h) {
			case "F":
				i();
				break;
			case "F_":
				a();
				break;
			case "B":
				r();
				break;
			case "B_":
				n();
				break;
			case "z":
				i(), n();
				break;
			case "z2":
				i(), n(), i(), n();
				break;
			case "z_":
				a(), r();
				break;
			case "z2_":
				a(), r(), a(), r();
				break;
			case "R":
				c();
				break;
			case "R_":
				u();
				break;
			case "L":
				l();
				break;
			case "L_":
				d();
				break;
			case "x":
				c(), d();
				break;
			case "x2":
				c(), d(), c(), d();
				break;
			case "x_":
				u(), l();
				break;
			case "x2_":
				u(), l(), u(), l();
				break;
			case "U":
				p();
				break;
			case "U_":
				f();
				break;
			case "D":
				b();
				break;
			case "D_":
				g();
				break;
			case "y":
				f(), b();
				break;
			case "y2":
				f(), b(), f(), b();
				break;
			case "y_":
				p(), g();
				break;
			case "y2_":
				p(), g(), p(), g()
		}
		return _
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.reducer = n;
	var s = (i(2), i(4)),
		r = i(7),
		o = a(r),
		c = i(6);
	a(c)
}, function(e, t, i) {
	(function(e) {
		"use strict";

		function a(t) {
			var i = this,
				a = t && t.isTapEnabled,
				n = this._touchElements[1],
				s = (0, d.qs)('[data-type="up"]', n),
				r = (0, d.qs)('[data-type="front"]', n),
				o = (0, d.qs)('[data-type="left"]', n),
				c = new e.Swipe;
			c.set({
				direction: e.DIRECTION_ALL
			});
			var u = new e.Manager(r, {});
			u.add(c), u.add(new e.Tap({
				event: "singletab"
			})), u.on("singletab swipeup swipedown swiperight swipeleft", function(e) {
				var t = e.type;
				e.target;
				switch(t) {
					case "singletab":
						a && i.L_();
						break;
					case "swipeup":
						i.L_();
						break;
					case "swiperight":
						i.U_();
						break;
					case "swipedown":
						i.L();
						break;
					case "swipeleft":
						i.U()
				}
			}), c = new e.Swipe, c.set({
				direction: e.DIRECTION_ALL
			}), u = new e.Manager(s, {}), u.add(c), u.add(new e.Tap({
				event: "singletap"
			})), u.on("singletap swipeup swipedown swiperight swipeleft", function(e) {
				var t = e.type,
					n = e.target;
				switch("cubetwo" !== n.dataset.type && (n = n.parentElement, "cubetwo" !== n.dataset.type && (n = n.parentElement)), t) {
					case "singletap":
						a && i.F_();
						break;
					case "swipeup":
						i.L_();
						break;
					case "swiperight":
						i.F();
						break;
					case "swipedown":
						i.L();
						break;
					case "swipeleft":
						i.F_()
				}
			}), c = new e.Swipe, c.set({
				direction: e.DIRECTION_ALL
			}), u = new e.Manager(o, {}), u.add(c), u.add(new e.Tap({
				event: "singletap"
			})), u.on("singletap swipeup swipedown swiperight swipeleft", function(e) {
				var t = e.type,
					n = e.target;
				switch("cubetwo" !== n.dataset.type && (n = n.parentElement, "cubetwo" !== n.dataset.type && (n = n.parentElement)), t) {
					case "singletap":
						a && i.U_();
						break;
					case "swipeup":
						i.F();
						break;
					case "swiperight":
						i.U_();
						break;
					case "swipedown":
						i.F_();
						break;
					case "swipeleft":
						i.U()
				}
			})
		}

		function n(t) {
			var i = this,
				a = t && t.isTapEnabled,
				n = this._touchElements[2],
				s = (0, d.qs)('[data-type="up"]', n),
				r = (0, d.qs)('[data-type="front"]', n),
				o = (0, d.qs)('[data-type="right"]', n),
				c = new e.Swipe;
			c.set({
				direction: e.DIRECTION_ALL
			});
			var u = new e.Manager(r, {});
			u.add(c), u.add(new e.Tap({
				event: "singletap"
			})), u.on("singletap swipeup swipedown swiperight swipeleft", function(e) {
				var t = e.type;
				e.target;
				switch(t) {
					case "singletap":
						a && i.R();
						break;
					case "swipeup":
						i.R();
						break;
					case "swiperight":
						i.U_();
						break;
					case "swipedown":
						i.R_();
						break;
					case "swipeleft":
						i.U()
				}
			}), c = new e.Swipe, c.set({
				direction: e.DIRECTION_ALL
			}), u = new e.Manager(s, {}), u.add(c), u.add(new e.Tap({
				event: "singletap"
			})), u.on("singletap swipeup swipedown swiperight swipeleft", function(e) {
				var t = e.type,
					n = e.target;
				switch("cubetwo" !== n.dataset.type && (n = n.parentElement, "cubetwo" !== n.dataset.type && (n = n.parentElement)), t) {
					case "singletap":
						a && i.F();
						break;
					case "swipeup":
						i.R();
						break;
					case "swiperight":
						i.F();
						break;
					case "swipedown":
						i.R_();
						break;
					case "swipeleft":
						i.F_()
				}
			}), c = new e.Swipe, c.set({
				direction: e.DIRECTION_ALL
			}), u = new e.Manager(o, {}), u.add(c), u.add(new e.Tap({
				event: "singletap"
			})), u.on("singletap swipeup swipedown swiperight swipeleft", function(e) {
				var t = e.type,
					n = e.target;
				switch("cubetwo" !== n.dataset.type && (n = n.parentElement, "cubetwo" !== n.dataset.type && (n = n.parentElement)), t) {
					case "singletap":
						a && i.U();
						break;
					case "swipeup":
						i.F_();
						break;
					case "swiperight":
						i.U_();
						break;
					case "swipedown":
						i.F();
						break;
					case "swipeleft":
						i.U()
				}
			})
		}

		function s(t) {
			var i = this,
				a = t && t.isTapEnabled,
				n = this._touchElements[3],
				s = (0, d.qs)('[data-type="down"]', n),
				r = (0, d.qs)('[data-type="front"]', n),
				o = (0, d.qs)('[data-type="left"]', n),
				c = new e.Swipe;
			c.set({
				direction: e.DIRECTION_ALL
			});
			var u = new e.Manager(r, {});
			u.add(c), u.add(new e.Tap({
				event: "singletap"
			})), u.on("singletap swipeup swipedown swiperight swipeleft", function(e) {
				var t = e.type;
				e.target;
				switch(t) {
					case "singletap":
						a && i.L();
						break;
					case "swipeup":
						i.L_();
						break;
					case "swiperight":
						i.D();
						break;
					case "swipedown":
						i.L();
						break;
					case "swipeleft":
						i.D_()
				}
			}), c = new e.Swipe, c.set({
				direction: e.DIRECTION_ALL
			}), u = new e.Manager(s, {}), u.add(c), u.add(new e.Tap({
				event: "singletap"
			})), u.on("singletap swipeup swipedown swiperight swipeleft", function(e) {
				var t = e.type;
				e.target;
				switch(t) {
					case "singletap":
						a && i.F();
						break;
					case "swipeup":
						i.L_();
						break;
					case "swiperight":
						i.F_();
						break;
					case "swipedown":
						i.L();
						break;
					case "swipeleft":
						i.F()
				}
			}), c = new e.Swipe, c.set({
				direction: e.DIRECTION_ALL
			}), u = new e.Manager(o, {}), u.add(c), u.add(new e.Tap({
				event: "singletap"
			})), u.on("singletap swipeup swipedown swiperight swipeleft", function(e) {
				var t = e.type;
				e.target;
				switch(t) {
					case "singletap":
						a && i.D();
						break;
					case "swipeup":
						i.F();
						break;
					case "swiperight":
						i.D();
						break;
					case "swipedown":
						i.F_();
						break;
					case "swipeleft":
						i.D_()
				}
			})
		}

		function r(t) {
			var i = this,
				a = t && t.isTapEnabled,
				n = this._touchElements[4],
				s = (0, d.qs)('[data-type="down"]', n),
				r = (0, d.qs)('[data-type="front"]', n),
				o = (0, d.qs)('[data-type="right"]', n),
				c = new e.Swipe;
			c.set({
				direction: e.DIRECTION_ALL
			});
			var u = new e.Manager(r, {});
			u.add(c), u.add(new e.Tap({
				event: "singletap"
			})), u.on("singletap swipeup swipedown swiperight swipeleft", function(e) {
				var t = e.type;
				e.target;
				switch(t) {
					case "singletap":
						a && i.R_();
						break;
					case "swipeup":
						i.R();
						break;
					case "swiperight":
						i.D();
						break;
					case "swipedown":
						i.R_();
						break;
					case "swipeleft":
						i.D_()
				}
			}), c = new e.Swipe, c.set({
				direction: e.DIRECTION_ALL
			}), u = new e.Manager(s, {}), u.add(c), u.add(new e.Tap({
				event: "singletap"
			})), u.on("singletap swipeup swipedown swiperight swipeleft", function(e) {
				var t = e.type;
				e.target;
				switch(t) {
					case "singletap":
						a && i.F_();
						break;
					case "swipeup":
						i.R();
						break;
					case "swiperight":
						i.F_();
						break;
					case "swipedown":
						i.R_();
						break;
					case "swipeleft":
						i.F()
				}
			}), c = new e.Swipe, c.set({
				direction: e.DIRECTION_ALL
			}), u = new e.Manager(o, {}), u.add(c), u.add(new e.Tap({
				event: "singletap"
			})), u.on("singletap swipeup swipedown swiperight swipeleft", function(e) {
				var t = e.type;
				e.target;
				switch(t) {
					case "singletap":
						a && i.D_();
						break;
					case "swipeup":
						i.F_();
						break;
					case "swiperight":
						i.D();
						break;
					case "swipedown":
						i.F();
						break;
					case "swipeleft":
						i.D_()
				}
			})
		}

		function o(t) {
			var i = this,
				a = t && t.isTapEnabled,
				n = this._touchElements[5],
				s = (0, d.qs)('[data-type="up"]', n),
				r = (0, d.qs)('[data-type="back"]', n),
				o = (0, d.qs)('[data-type="left"]', n),
				c = new e.Swipe;
			c.set({
				direction: e.DIRECTION_ALL
			});
			var u = new e.Manager(r, {});
			u.add(c), u.add(new e.Tap({
				event: "singletap"
			})), u.on("singletap swipeup swipedown swiperight swipeleft", function(e) {
				var t = e.type;
				e.target;
				switch(t) {
					case "singletap":
						a && i.L_();
						break;
					case "swipeup":
						i.L_();
						break;
					case "swiperight":
						i.U_();
						break;
					case "swipedown":
						i.L();
						break;
					case "swipeleft":
						i.U()
				}
			}), c = new e.Swipe, c.set({
				direction: e.DIRECTION_ALL
			}), u = new e.Manager(s, {}), u.add(c), u.add(new e.Tap({
				event: "singletap"
			})), u.on("singletap swipeup swipedown swiperight swipeleft", function(e) {
				var t = e.type;
				e.target;
				switch(t) {
					case "singletap":
						a && i.B();
						break;
					case "swipeup":
						i.L_();
						break;
					case "swiperight":
						i.B_();
						break;
					case "swipedown":
						i.L();
						break;
					case "swipeleft":
						i.B()
				}
			}), c = new e.Swipe, c.set({
				direction: e.DIRECTION_ALL
			}), u = new e.Manager(o, {}), u.add(c), u.add(new e.Tap({
				event: "singletap"
			})), u.on("singletap swipeup swipedown swiperight swipeleft", function(e) {
				var t = e.type;
				e.target;
				switch(t) {
					case "singletap":
						a && i.U();
						break;
					case "swipeup":
						i.B_();
						break;
					case "swiperight":
						i.U_();
						break;
					case "swipedown":
						i.B();
						break;
					case "swipeleft":
						i.U()
				}
			})
		}

		function c(t) {
			var i = this,
				a = t && t.isTapEnabled,
				n = this._touchElements[6],
				s = (0, d.qs)('[data-type="up"]', n),
				r = (0, d.qs)('[data-type="back"]', n),
				o = (0, d.qs)('[data-type="right"]', n),
				c = new e.Swipe;
			c.set({
				direction: e.DIRECTION_ALL
			});
			var u = new e.Manager(r, {});
			u.add(c), u.add(new e.Tap({
				event: "singletap"
			})), u.on("singletap swipeup swipedown swiperight swipeleft", function(e) {
				var t = e.type;
				e.target;
				switch(t) {
					case "singletap":
						break;
					case "swipeup":
						i.R();
						break;
					case "swiperight":
						i.U_();
						break;
					case "swipedown":
						i.R_();
						break;
					case "swipeleft":
						i.U()
				}
			}), c = new e.Swipe, c.set({
				direction: e.DIRECTION_ALL
			}), u = new e.Manager(s, {}), u.add(c), u.add(new e.Tap({
				event: "singletap"
			})), u.on("singletap swipeup swipedown swiperight swipeleft", function(e) {
				var t = e.type;
				e.target;
				switch(t) {
					case "singletap":
						a && i.B_();
						break;
					case "swipeup":
						i.R();
						break;
					case "swiperight":
						i.B_();
						break;
					case "swipedown":
						i.R_();
						break;
					case "swipeleft":
						i.B()
				}
			}), c = new e.Swipe, c.set({
				direction: e.DIRECTION_ALL
			}), u = new e.Manager(o, {}), u.add(c), u.add(new e.Tap({
				event: "singletap"
			})), u.on("singletap swipeup swipedown swiperight swipeleft", function(e) {
				var t = e.type;
				e.target;
				switch(t) {
					case "singletap":
						a && i.U_();
						break;
					case "swipeup":
						i.B();
						break;
					case "swiperight":
						i.U_();
						break;
					case "swipedown":
						i.B_();
						break;
					case "swipeleft":
						i.U()
				}
			})
		}

		function u(t) {
			var i = this,
				a = (t && t.isTapEnabled, this._touchElements[7]),
				n = (0, d.qs)('[data-type="down"]', a),
				s = (0, d.qs)('[data-type="back"]', a),
				r = (0, d.qs)('[data-type="left"]', a),
				o = new e.Swipe;
			o.set({
				direction: e.DIRECTION_ALL
			});
			var c = new e.Manager(s, {});
			c.add(o), c.add(new e.Tap({
				event: "singletap"
			})), c.on("singletap swipeup swipedown swiperight swipeleft", function(e) {
				var t = e.type;
				e.target;
				switch(t) {
					case "singletap":
						break;
					case "swipeup":
						i.L_();
						break;
					case "swiperight":
						i.D();
						break;
					case "swipedown":
						i.L();
						break;
					case "swipeleft":
						i.D_()
				}
			}), o = new e.Swipe, o.set({
				direction: e.DIRECTION_ALL
			}), c = new e.Manager(n, {}), c.add(o), c.add(new e.Tap({
				event: "singletap"
			})), c.on("singletap swipeup swipedown swiperight swipeleft", function(e) {
				var t = e.type;
				e.target;
				switch(t) {
					case "singletap":
						i.B_();
						break;
					case "swipeup":
						i.L_();
						break;
					case "swiperight":
						i.B();
						break;
					case "swipedown":
						i.L();
						break;
					case "swipeleft":
						i.B_()
				}
			}), o = new e.Swipe, o.set({
				direction: e.DIRECTION_ALL
			}), c = new e.Manager(r, {}), c.add(o), c.add(new e.Tap({
				event: "singletap"
			})), c.on("singletap swipeup swipedown swiperight swipeleft", function(e) {
				var t = e.type;
				e.target;
				switch(t) {
					case "singletap":
						i.D_();
						break;
					case "swipeup":
						i.B_();
						break;
					case "swiperight":
						i.D();
						break;
					case "swipedown":
						i.B();
						break;
					case "swipeleft":
						i.D_()
				}
			})
		}

		function l(t) {
			var i = this,
				a = t && t.isTapEnabled,
				n = this._touchElements[8],
				s = (0, d.qs)('[data-type="down"]', n),
				r = (0, d.qs)('[data-type="back"]', n),
				o = (0, d.qs)('[data-type="right"]', n),
				c = new e.Swipe;
			c.set({
				direction: e.DIRECTION_ALL
			});
			var u = new e.Manager(r, {});
			u.add(c), u.add(new e.Tap({
				event: "singletap"
			})), u.on("singletap swipeup swipedown swiperight swipeleft", function(e) {
				var t = e.type;
				e.target;
				switch(t) {
					case "singletap":
						a && i.R_();
						break;
					case "swipeup":
						i.R();
						break;
					case "swiperight":
						i.D();
						break;
					case "swipedown":
						i.R_();
						break;
					case "swipeleft":
						i.D_()
				}
			}), c = new e.Swipe, c.set({
				direction: e.DIRECTION_ALL
			}), u = new e.Manager(s, {}), u.add(c), u.add(new e.Tap({
				event: "singletap"
			})), u.on("singletap swipeup swipedown swiperight swipeleft", function(e) {
				var t = e.type;
				e.target;
				switch(t) {
					case "singletap":
						a && i.B();
						break;
					case "swipeup":
						i.R();
						break;
					case "swiperight":
						i.B();
						break;
					case "swipedown":
						i.R_();
						break;
					case "swipeleft":
						i.B_()
				}
			}), c = new e.Swipe, c.set({
				direction: e.DIRECTION_ALL
			}), u = new e.Manager(o, {}), u.add(c), u.add(new e.Tap({
				event: "singletap"
			})), u.on("singletap swipeup swipedown swiperight swipeleft", function(e) {
				var t = e.type;
				e.target;
				switch(t) {
					case "singletap":
						a && i.D();
						break;
					case "swipeup":
						i.B();
						break;
					case "swiperight":
						i.D();
						break;
					case "swipedown":
						i.B_();
						break;
					case "swipeleft":
						i.D_()
				}
			})
		}
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.setupCube1 = a, t.setupCube2 = n, t.setupCube3 = s, t.setupCube4 = r, t.setupCube5 = o, t.setupCube6 = c, t.setupCube7 = u, t.setupCube8 = l;
		var d = i(5);
		i(2)
	}).call(t, i(20))
}, function(e, t, i) {
	"use strict";

	function a(e, t) {
		if(!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.CubeTwoUi = void 0;
	var n = function() {
		function e(e, t) {
			for(var i = 0; i < t.length; i++) {
				var a = t[i];
				a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
			}
		}
		return function(t, i, a) {
			return i && e(t.prototype, i), a && e(t, a), t
		}
	}();
	i(2), t.CubeTwoUi = function() {
		function e(t) {
			a(this, e), this.displayElements = t
		}
		return n(e, [{
			key: "uiF_Helper",
			value: function(e) {
				this.displayElements[1].style.transformOrigin = "100% 100%", this.displayElements[2].style.transformOrigin = "0% 100%", this.displayElements[3].style.transformOrigin = "100% 0%", this.displayElements[4].style.transformOrigin = "0% 0%", this.displayElements[1].style.transform = "rotateZ(" + e + "deg)", this.displayElements[2].style.transform = "rotateZ(" + e + "deg)", this.displayElements[3].style.transform = "rotateZ(" + e + "deg)", this.displayElements[4].style.transform = "rotateZ(" + e + "deg)"
			}
		}, {
			key: "uiF",
			value: function() {
				this.uiF_Helper("90")
			}
		}, {
			key: "uiF_",
			value: function() {
				this.uiF_Helper("-90")
			}
		}, {
			key: "uiF2",
			value: function() {
				this.uiF_Helper("180")
			}
		}, {
			key: "uiF2_",
			value: function() {
				this.uiF_Helper("-180")
			}
		}, {
			key: "uiB_Helper",
			value: function(e) {
				this.displayElements[5].style.transformOrigin = "100% 100%", this.displayElements[6].style.transformOrigin = "0% 100%", this.displayElements[7].style.transformOrigin = "100% 0%", this.displayElements[8].style.transformOrigin = "0% 0%", this.displayElements[5].style.transform = "rotateZ(" + e + "deg)", this.displayElements[6].style.transform = "rotateZ(" + e + "deg)", this.displayElements[7].style.transform = "rotateZ(" + e + "deg)", this.displayElements[8].style.transform = "rotateZ(" + e + "deg)"
			}
		}, {
			key: "uiB",
			value: function() {
				this.uiB_Helper("-90")
			}
		}, {
			key: "uiB_",
			value: function() {
				this.uiB_Helper("90")
			}
		}, {
			key: "uiB2",
			value: function() {
				this.uiB_Helper("-180")
			}
		}, {
			key: "uiB2_",
			value: function() {
				this.uiB_Helper("180")
			}
		}, {
			key: "uiU_Helper",
			value: function(e) {
				this.displayElements[1].style.transformOrigin = "100% 0%", this.displayElements[2].style.transformOrigin = "0% 0%", this.displayElements[5].style.transformOrigin = "100% 0%", this.displayElements[6].style.transformOrigin = "0% 0%", this.displayElements[1].style.transform = "rotateY(" + e + "deg)", this.displayElements[2].style.transform = "rotateY(" + e + "deg)", this.displayElements[5].style.transform = "rotateY(" + e + "deg)", this.displayElements[6].style.transform = "rotateY(" + e + "deg)"
			}
		}, {
			key: "uiU",
			value: function() {
				this.uiU_Helper("-90")
			}
		}, {
			key: "uiU_",
			value: function() {
				this.uiU_Helper("90")
			}
		}, {
			key: "uiU2",
			value: function() {
				this.uiU_Helper("-180")
			}
		}, {
			key: "uiU2_",
			value: function() {
				this.uiU_Helper("180")
			}
		}, {
			key: "uiD_Helper",
			value: function(e) {
				this.displayElements[3].style.transformOrigin = "100% 0%", this.displayElements[4].style.transformOrigin = "0% 0%", this.displayElements[7].style.transformOrigin = "100% 0%", this.displayElements[8].style.transformOrigin = "0% 0%", this.displayElements[3].style.transform = "rotateY(" + e + "deg)", this.displayElements[4].style.transform = "rotateY(" + e + "deg)", this.displayElements[7].style.transform = "rotateY(" + e + "deg)", this.displayElements[8].style.transform = "rotateY(" + e + "deg)"
			}
		}, {
			key: "uiD",
			value: function() {
				this.uiD_Helper("90")
			}
		}, {
			key: "uiD_",
			value: function() {
				this.uiD_Helper("-90")
			}
		}, {
			key: "uiD2",
			value: function() {
				this.uiD_Helper("180")
			}
		}, {
			key: "uiD2_",
			value: function() {
				this.uiD_Helper("-180")
			}
		}, {
			key: "uiR_Helper",
			value: function(e) {
				this.displayElements[2].style.transformOrigin = "0% 100%", this.displayElements[6].style.transformOrigin = "0% 100%", this.displayElements[8].style.transformOrigin = "0% 0%", this.displayElements[4].style.transformOrigin = "0% 0%", this.displayElements[2].style.transform = "rotateX(" + e + "deg)", this.displayElements[6].style.transform = "rotateX(" + e + "deg)", this.displayElements[8].style.transform = "rotateX(" + e + "deg)", this.displayElements[4].style.transform = "rotateX(" + e + "deg)"
			}
		}, {
			key: "uiR",
			value: function() {
				this.uiR_Helper("90")
			}
		}, {
			key: "uiR_",
			value: function() {
				this.uiR_Helper("-90")
			}
		}, {
			key: "uiR2",
			value: function() {
				this.uiR_Helper("180")
			}
		}, {
			key: "uiR2_",
			value: function() {
				this.uiR_Helper("-180")
			}
		}, {
			key: "uiL_Helper",
			value: function(e) {
				this.displayElements[1].style.transformOrigin = "0% 100%", this.displayElements[5].style.transformOrigin = "0% 100%", this.displayElements[7].style.transformOrigin = "0% 0%", this.displayElements[3].style.transformOrigin = "0% 0%", this.displayElements[1].style.transform = "rotateX(" + e + "deg)", this.displayElements[5].style.transform = "rotateX(" + e + "deg)", this.displayElements[7].style.transform = "rotateX(" + e + "deg)", this.displayElements[3].style.transform = "rotateX(" + e + "deg)"
			}
		}, {
			key: "uiL",
			value: function() {
				this.uiL_Helper("-90")
			}
		}, {
			key: "uiL_",
			value: function() {
				this.uiL_Helper("90")
			}
		}, {
			key: "uiL2",
			value: function() {
				this.uiL_Helper("-180")
			}
		}, {
			key: "uiL2_",
			value: function() {
				this.uiL_Helper("180")
			}
		}, {
			key: "uix",
			value: function() {
				this.uiR(), this.uiL_()
			}
		}, {
			key: "uix_",
			value: function() {
				this.uiR_(), this.uiL()
			}
		}, {
			key: "uix2",
			value: function() {
				this.uiR2(), this.uiL2_()
			}
		}, {
			key: "uix2_",
			value: function() {
				this.uiR2_(), this.uiL2()
			}
		}, {
			key: "uiy",
			value: function() {
				this.uiU_(), this.uiD()
			}
		}, {
			key: "uiy_",
			value: function() {
				this.uiU(), this.uiD_()
			}
		}, {
			key: "uiy2",
			value: function() {
				this.uiU2_(), this.uiD2()
			}
		}, {
			key: "uiy2_",
			value: function() {
				this.uiU2(), this.uiD2_()
			}
		}, {
			key: "uiz",
			value: function() {
				this.uiF(), this.uiB_()
			}
		}, {
			key: "uiz_",
			value: function() {
				this.uiF_(), this.uiB()
			}
		}, {
			key: "uiz2",
			value: function() {
				this.uiF2(), this.uiB2_()
			}
		}, {
			key: "uiz2_",
			value: function() {
				this.uiF2_(), this.uiB2()
			}
		}]), e
	}()
}, function(e, t, i) {
	"use strict";

	function a(e) {
		return e && e.__esModule ? e : {
			default: e
		}
	}

	function n(e, t) {
		if(!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.CubeTwo = void 0;
	var s = function() {
			function e(e, t) {
				for(var i = 0; i < t.length; i++) {
					var a = t[i];
					a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
				}
			}
			return function(t, i, a) {
				return i && e(t.prototype, i),
					a && e(t, a), t
			}
		}(),
		r = i(2),
		o = i(5),
		c = i(3),
		u = a(c),
		l = i(4),
		d = i(14),
		p = i(7),
		f = (a(p), i(6)),
		b = a(f),
		g = i(18),
		h = a(g),
		_ = i(11),
		w = i(15),
		v = i(13),
		y = i(1),
		k = i(12),
		E = function() {
			function e(t) {
				return n(this, e), t ? t.cubeComponent ? (this._cubeComponentEl = t.cubeComponent, this._appState = {}, this._ui = null, this._config = (0, l.cloneObject)(t), this._parseConfig(this._config, this._cubeComponentEl), this._updateEventBindings(), void this._initCallbacks()) : void(0, r.error)("CubeTwo element was not provided: " + t.cubeComponent) : void(0, r.error)("config is invalid for CubeTwo, did you forgot to provide one?")
			}
			return s(e, [{
				key: "_parseConfig",
				value: function(e, t) {
					function i(e, t) {
						e ? l[t] = {
							c1: n[t] + ' url("' + r[t] + '") 0% 0% / ' + _.CUBE_SIZE_2X + " " + _.CUBE_SIZE_2X + " no-repeat",
							c2: n[t] + ' url("' + r[t] + '") 100% 0% / ' + _.CUBE_SIZE_2X + " " + _.CUBE_SIZE_2X + " no-repeat",
							c3: n[t] + ' url("' + r[t] + '") 0% 100% / ' + _.CUBE_SIZE_2X + " " + _.CUBE_SIZE_2X + " no-repeat",
							c4: n[t] + ' url("' + r[t] + '") 100% 100% / ' + _.CUBE_SIZE_2X + " " + _.CUBE_SIZE_2X + " no-repeat"
						} : l[t] = {
							c1: n[t],
							c2: n[t],
							c3: n[t],
							c4: n[t]
						}
					}
					void 0 === e.isRotateAnimationEnabled && (e.isRotateAnimationEnabled = !0), void 0 === e.isTapEnabled && (e.isTapEnabled = !0), void 0 === e.isAnimationLockEnabled && (e.isAnimationLockEnabled = !0), void 0 === e.borderOnTheCube && (e.borderOnTheCube = !0), void 0 === e.backgroundBlendModeOnTheCube && (e.backgroundBlendModeOnTheCube = !0), e.transition && (0, o.qsa)('[data-type="cubetwo-display"]', t).forEach(function(t) {
						t.style.transition = e.transition
					}), e.backgroundImages = e.backgroundImages || {}, e.backgroundColors = e.backgroundColors || {};
					var a = e.backgroundColors,
						n = {};
					n.backface = a.backface || a._ || h.default.backface, n.f = a.f || h.default.f, n.b = a.b || h.default.b, n.u = a.u || h.default.u, n.d = a.d || h.default.d, n.r = a.r || h.default.r, n.l = a.l || h.default.l, e.backgroundColors = n;
					var s = n.backface,
						r = e.backgroundImages,
						c = {
							cubes: [null, null, null, null, null, null, null, null, null],
							backface: s
						},
						l = {};
					i(r.f, "f"), i(r.b, "b"), i(r.u, "u"), i(r.d, "d"), i(r.r, "r"), i(r.l, "l"), c.cubes[1] = {
						u: l.u.c3,
						d: s,
						f: l.f.c1,
						b: s,
						r: s,
						l: l.l.c2
					}, c.cubes[2] = {
						u: l.u.c4,
						d: s,
						f: l.f.c2,
						b: s,
						r: l.r.c1,
						l: s
					}, c.cubes[3] = {
						u: s,
						d: l.d.c1,
						f: l.f.c3,
						b: s,
						r: s,
						l: l.l.c4
					}, c.cubes[4] = {
						u: s,
						d: l.d.c2,
						f: l.f.c4,
						b: s,
						r: l.r.c3,
						l: s
					}, c.cubes[5] = {
						u: l.u.c1,
						d: s,
						f: s,
						b: l.b.c2,
						r: s,
						l: l.l.c1
					}, c.cubes[6] = {
						u: l.u.c2,
						d: s,
						f: s,
						b: l.b.c1,
						r: l.r.c2,
						l: s
					}, c.cubes[7] = {
						u: s,
						d: l.d.c3,
						f: s,
						b: l.b.c4,
						r: s,
						l: l.l.c3
					}, c.cubes[8] = {
						u: s,
						d: l.d.c4,
						f: s,
						b: l.b.c3,
						r: l.r.c4,
						l: s
					}, e.cubeSkins = c, (0, u.default)(e)
				}
			}, {
				key: "_updateEventBindings",
				value: function() {
					this._transitionEnd = this._transitionEnd.bind(this), this.handleGlobalKeyEvent = k.handleGlobalKeyEvent.bind(this)
				}
			}, {
				key: "_initCallbacks",
				value: function() {
					var e = this;
					this.callbacks = {}, Object.keys(y.EVENT_NAMES).forEach(function(t, i) {
						return e.callbacks[t] = []
					})
				}
			}, {
				key: "addCallbackForEvent",
				value: function(e, t) {
					var i = this.callbacks[e = e.toLowerCase()];
					i && "function" == typeof t && i.push(t)
				}
			}, {
				key: "_triggerEvent",
				value: function(e, t) {
					var i = this.callbacks[e] || [],
						a = void 0,
						n = void 0;
					for(a = 0, n = i.length; a < n; a++) i[a].call(this, e, t)
				}
			}, {
				key: "getState",
				value: function() {
					var e = this._appState.codes.map(function(e) {
						return(0, l.cloneObject)(e)
					});
					return {
						codes: e,
						isRotateEnabled: !!this._appState.isRotateEnabled
					}
				}
			}, {
				key: "getStateCode",
				value: function() {
					return JSON.stringify(this.getState().codes)
				}
			}, {
				key: "isSolved",
				value: function() {
					return this._isSolved(this.getState().codes)
				}
			}, {
				key: "_isSolved",
				value: function(e) {
					return !!e.reduce(function(e, t) {
						return e.code === t.code ? e : NaN
					})
				}
			}, {
				key: "_setState",
				value: function(e) {
					var t = JSON.stringify(this._appState.codes),
						i = JSON.stringify(e.codes);
					void 0 === e.isRotateEnabled && (e.isRotateEnabled = !0), this._appState = e, t !== i && (this._triggerEvent("statechange", {
						previousStateCode: t,
						currentStateCode: i,
						state: e
					}), this._isSolved(e.codes) && this._triggerEvent("issolved", {
						state: e
					}))
				}
			}, {
				key: "_beforeRotateTriggerHelper",
				value: function(e) {
					var t = e.action,
						i = e.config;
					i && i.skipTriggerEvent || this._triggerEvent("beforerotate", {
						action: t,
						state: this.getState()
					})
				}
			}, {
				key: "F",
				value: function(e) {
					var t = "F";
					this._beforeRotateTriggerHelper({
						action: t,
						config: e
					}), this._actionInvoke({
						action: t,
						config: e,
						ui: this._ui.uiF
					})
				}
			}, {
				key: "F_",
				value: function(e) {
					var t = "F_";
					this._beforeRotateTriggerHelper({
						action: t,
						config: e
					}), this._actionInvoke({
						action: t,
						config: e,
						ui: this._ui.uiF_
					})
				}
			}, {
				key: "F2",
				value: function(e) {
					var t = "F2";
					this._beforeRotateTriggerHelper({
						action: t,
						config: e
					}), this._actionInvoke({
						action: t,
						config: e,
						ui: this._ui.uiF2
					})
				}
			}, {
				key: "F2_",
				value: function(e) {
					var t = "F2_";
					this._beforeRotateTriggerHelper({
						action: t,
						config: e
					}), this._actionInvoke({
						action: t,
						config: e,
						ui: this._ui.uiF2_
					})
				}
			}, {
				key: "B",
				value: function(e) {
					var t = "B";
					this._beforeRotateTriggerHelper({
						action: t,
						config: e
					}), this._actionInvoke({
						action: t,
						config: e,
						ui: this._ui.uiB
					})
				}
			}, {
				key: "B_",
				value: function(e) {
					var t = "B_";
					this._beforeRotateTriggerHelper({
						action: t,
						config: e
					}), this._actionInvoke({
						action: t,
						config: e,
						ui: this._ui.uiB_
					})
				}
			}, {
				key: "B2",
				value: function(e) {
					var t = "B2";
					this._beforeRotateTriggerHelper({
						action: t,
						config: e
					}), this._actionInvoke({
						action: t,
						config: e,
						ui: this._ui.uiB2
					})
				}
			}, {
				key: "B2_",
				value: function(e) {
					var t = "B2_";
					this._beforeRotateTriggerHelper({
						action: t,
						config: e
					}), this._actionInvoke({
						action: t,
						config: e,
						ui: this._ui.uiB2_
					})
				}
			}, {
				key: "U",
				value: function(e) {
					var t = "U";
					this._beforeRotateTriggerHelper({
						action: t,
						config: e
					}), this._actionInvoke({
						action: t,
						config: e,
						ui: this._ui.uiU
					})
				}
			}, {
				key: "U_",
				value: function(e) {
					var t = "U_";
					this._beforeRotateTriggerHelper({
						action: t,
						config: e
					}), this._actionInvoke({
						action: t,
						config: e,
						ui: this._ui.uiU_
					})
				}
			}, {
				key: "U2",
				value: function(e) {
					var t = "U2";
					this._beforeRotateTriggerHelper({
						action: t,
						config: e
					}), this._actionInvoke({
						action: t,
						config: e,
						ui: this._ui.uiU2
					})
				}
			}, {
				key: "U2_",
				value: function(e) {
					var t = "U2_";
					this._beforeRotateTriggerHelper({
						action: t,
						config: e
					}), this._actionInvoke({
						action: t,
						config: e,
						ui: this._ui.uiU2_
					})
				}
			}, {
				key: "D",
				value: function(e) {
					var t = "D";
					this._beforeRotateTriggerHelper({
						action: t,
						config: e
					}), this._actionInvoke({
						action: t,
						config: e,
						ui: this._ui.uiD
					})
				}
			}, {
				key: "D_",
				value: function(e) {
					var t = "D_";
					this._beforeRotateTriggerHelper({
						action: t,
						config: e
					}), this._actionInvoke({
						action: t,
						config: e,
						ui: this._ui.uiD_
					})
				}
			}, {
				key: "D2",
				value: function(e) {
					var t = "D2";
					this._beforeRotateTriggerHelper({
						action: t,
						config: e
					}), this._actionInvoke({
						action: t,
						config: e,
						ui: this._ui.uiD2
					})
				}
			}, {
				key: "D2_",
				value: function(e) {
					var t = "D2_";
					this._beforeRotateTriggerHelper({
						action: t,
						config: e
					}), this._actionInvoke({
						action: t,
						config: e,
						ui: this._ui.uiD2_
					})
				}
			}, {
				key: "R",
				value: function(e) {
					var t = "R";
					this._beforeRotateTriggerHelper({
						action: t,
						config: e
					}), this._actionInvoke({
						action: t,
						config: e,
						ui: this._ui.uiR
					})
				}
			}, {
				key: "R_",
				value: function(e) {
					var t = "R_";
					this._beforeRotateTriggerHelper({
						action: t,
						config: e
					}), this._actionInvoke({
						action: t,
						config: e,
						ui: this._ui.uiR_
					})
				}
			}, {
				key: "R2",
				value: function(e) {
					var t = "R2";
					this._beforeRotateTriggerHelper({
						action: t,
						config: e
					}), this._actionInvoke({
						action: t,
						config: e,
						ui: this._ui.uiR2
					})
				}
			}, {
				key: "R2_",
				value: function(e) {
					var t = "R2_";
					this._beforeRotateTriggerHelper({
						action: t,
						config: e
					}), this._actionInvoke({
						action: t,
						config: e,
						ui: this._ui.uiR2_
					})
				}
			}, {
				key: "L",
				value: function(e) {
					var t = "L";
					this._beforeRotateTriggerHelper({
						action: t,
						config: e
					}), this._actionInvoke({
						action: t,
						config: e,
						ui: this._ui.uiL
					})
				}
			}, {
				key: "L_",
				value: function(e) {
					var t = "L_";
					this._beforeRotateTriggerHelper({
						action: t,
						config: e
					}), this._actionInvoke({
						action: t,
						config: e,
						ui: this._ui.uiL_
					})
				}
			}, {
				key: "L2",
				value: function(e) {
					var t = "L2";
					this._beforeRotateTriggerHelper({
						action: t,
						config: e
					}), this._actionInvoke({
						action: t,
						config: e,
						ui: this._ui.uiL2
					})
				}
			}, {
				key: "L2_",
				value: function(e) {
					var t = "L2_";
					this._beforeRotateTriggerHelper({
						action: t,
						config: e
					}), this._actionInvoke({
						action: t,
						config: e,
						ui: this._ui.uiL2_
					})
				}
			}, {
				key: "x",
				value: function(e) {
					var t = "x";
					this._beforeRotateTriggerHelper({
						action: t,
						config: e
					}), this._actionInvoke({
						action: t,
						config: e,
						ui: this._ui.uix
					})
				}
			}, {
				key: "x_",
				value: function(e) {
					var t = "x_";
					this._beforeRotateTriggerHelper({
						action: t,
						config: e
					}), this._actionInvoke({
						action: t,
						config: e,
						ui: this._ui.uix_
					})
				}
			}, {
				key: "x2",
				value: function(e) {
					var t = "x2";
					this._beforeRotateTriggerHelper({
						action: t,
						config: e
					}), this._actionInvoke({
						action: t,
						config: e,
						ui: this._ui.uix2
					})
				}
			}, {
				key: "x2_",
				value: function(e) {
					var t = "x2_";
					this._beforeRotateTriggerHelper({
						action: t,
						config: e
					}), this._actionInvoke({
						action: t,
						config: e,
						ui: this._ui.uix2_
					})
				}
			}, {
				key: "y",
				value: function(e) {
					var t = "y";
					this._beforeRotateTriggerHelper({
						action: t,
						config: e
					}), this._actionInvoke({
						action: t,
						config: e,
						ui: this._ui.uiy
					})
				}
			}, {
				key: "y_",
				value: function(e) {
					var t = "y_";
					this._beforeRotateTriggerHelper({
						action: t,
						config: e
					}), this._actionInvoke({
						action: t,
						config: e,
						ui: this._ui.uiy_
					})
				}
			}, {
				key: "y2",
				value: function(e) {
					var t = "y2";
					this._beforeRotateTriggerHelper({
						action: t,
						config: e
					}), this._actionInvoke({
						action: t,
						config: e,
						ui: this._ui.uiy2
					})
				}
			}, {
				key: "y2_",
				value: function(e) {
					var t = "y2_";
					this._beforeRotateTriggerHelper({
						action: t,
						config: e
					}), this._actionInvoke({
						action: t,
						config: e,
						ui: this._ui.uiy2_
					})
				}
			}, {
				key: "z",
				value: function(e) {
					var t = "z";
					this._beforeRotateTriggerHelper({
						action: t,
						config: e
					}), this._actionInvoke({
						action: t,
						config: e,
						ui: this._ui.uiz
					})
				}
			}, {
				key: "z2",
				value: function(e) {
					var t = "z2";
					this._beforeRotateTriggerHelper({
						action: t,
						config: e
					}), this._actionInvoke({
						action: t,
						config: e,
						ui: this._ui.uiz2
					})
				}
			}, {
				key: "z_",
				value: function(e) {
					var t = "z_";
					this._beforeRotateTriggerHelper({
						action: t,
						config: e
					}), this._actionInvoke({
						action: t,
						config: e,
						ui: this._ui.uiz_
					})
				}
			}, {
				key: "z2_",
				value: function(e) {
					var t = "z2_";
					this._beforeRotateTriggerHelper({
						action: t,
						config: e
					}), this._actionInvoke({
						action: t,
						config: e,
						ui: this._ui.uiz2_
					})
				}
			}, {
				key: "_actionInvoke",
				value: function(e) {
					var t = e.action,
						i = e.config,
						a = e.ui;
					i = i || {};
					var n = this.getState();
					if(i.noVisualUpdate) {
						var s = (0, v.reducer)({
							action: t,
							stateCodes: n.codes
						});
						return n.codes = s, void this._setState(n)
					}
					if(!n.isRotateEnabled) return void(0, r.debug)("rotate is locked " + new Date);
					var o = this._config,
						c = (0, v.reducer)({
							action: t,
							stateCodes: n.codes
						});
					n.codes = c, o.isRotateAnimationEnabled ? (n.isRotateEnabled = !1, this._setState(n), a.bind(this._ui)()) : (this._setState(n), this._updateUiFaces())
				}
			}, {
				key: "destroy",
				value: function() {}
			}, {
				key: "_transitionEnd",
				value: function(e) {
					var t = this,
						i = e.currentTarget,
						a = this._config;
					i && ! function() {
						var e = i.style.transition;
						i.style.transition = "0s", (0, l.nextFrame)(function(n) {
							i.style.transformOrigin = "", i.style.transform = "", t._updateUiFaces(), (0, l.rAF)(function(n) {
								if(i.style.transition = e, a.isAnimationLockEnabled) {
									var s = t.getState();
									s.isRotateEnabled = !0, t._setState(s)
								}
								t._triggerEvent("afterrotate", {
									index: i.dataset.index
								})
							})
						})
					}()
				}
			}, {
				key: "init",
				value: function() {
					var e = l.nextState.first;
					this._setState({
						codes: [{
							cube: 1,
							code: e
						}, {
							cube: 2,
							code: e
						}, {
							cube: 3,
							code: e
						}, {
							cube: 4,
							code: e
						}, {
							cube: 5,
							code: e
						}, {
							cube: 6,
							code: e
						}, {
							cube: 7,
							code: e
						}, {
							cube: 8,
							code: e
						}],
						isRotateEnabled: !0
					}), this._cubeElements = [""], this._touchElements = [""], this._displayElements = [{}];
					var t = this._config;
					t.borderOnTheCube && this._cubeComponentEl.classList.add("cubetwo-border-on-display-cubes"), t.backfaceVisibilityHiddenOnTheCube && this._cubeComponentEl.classList.add("cubetwo-backface-visibility-hidden-on-display-cubes"), t.backgroundBlendModeOnTheCube && (t.backgroundBlendModeOnTheCube === !0 || "multiply" === t.backgroundBlendModeOnTheCube ? this._cubeComponentEl.classList.add("cubetwo-background-blend-mode-on-display-cubes") : (0, o.qsa)('[data-type="cubetwo-display"] > div > div', this._cubeComponentEl).forEach(function(e) {
						e.style.backgroundBlendMode = t.backgroundBlendModeOnTheCube
					}));
					for(var i = 1; i <= _.CUBE_COUNT; i++) {
						var a = (0, o.qs)(".cubetwo-cube-" + i, this._cubeComponentEl),
							n = (0, o.qs)('[data-type="cubetwo-touch"]', a),
							s = (0, o.qs)('[data-type="cubetwo-display"]', a),
							r = (0, o.qs)('[data-type="front"] > div', s),
							c = (0, o.qs)('[data-type="back"] > div', s),
							p = (0, o.qs)('[data-type="up"] > div', s),
							f = (0, o.qs)('[data-type="down"] > div', s),
							b = (0, o.qs)('[data-type="right"] > div', s),
							g = (0, o.qs)('[data-type="left"] > div', s);
						this._cubeElements.push(a), this._displayElements.push({
							root: s,
							f: r,
							b: c,
							u: p,
							d: f,
							r: b,
							l: g
						}), this._touchElements.push(n)
					}(0, u.default)(this._cubeElements), (0, u.default)(this._touchElements), this._ui = new w.CubeTwoUi(this._displayElements.map(function(e) {
						return e.root
					}));
					for(var i = 1; i <= _.CUBE_COUNT; i++) {
						var h = this._displayElements[i].root;
						h && h.addEventListener("transitionend", this._transitionEnd)
					}
					d.setupCube1.bind(this)(t), d.setupCube2.bind(this)(t), d.setupCube3.bind(this)(t), d.setupCube4.bind(this)(t), d.setupCube5.bind(this)(t), d.setupCube6.bind(this)(t), d.setupCube7.bind(this)(t), d.setupCube8.bind(this)(t), this._updateUiFaces(), this._cubeElements[1].addEventListener("keydown", k.handleKeyEventCube1.bind(this), !1), this._cubeElements[2].addEventListener("keydown", k.handleKeyEventCube2.bind(this), !1), this._cubeElements[3].addEventListener("keydown", k.handleKeyEventCube3.bind(this), !1), this._cubeElements[4].addEventListener("keydown", k.handleKeyEventCube4.bind(this), !1), this._cubeElements[5].addEventListener("keydown", k.handleKeyEventCube5.bind(this), !1), this._cubeElements[6].addEventListener("keydown", k.handleKeyEventCube6.bind(this), !1), this._cubeElements[7].addEventListener("keydown", k.handleKeyEventCube7.bind(this), !1), this._cubeElements[8].addEventListener("keydown", k.handleKeyEventCube8.bind(this), !1), this._triggerEvent("init", {
						state: this.getState()
					})
				}
			}, {
				key: "_updateUiFaces",
				value: function() {
					for(var e = this._config, t = e.cubeSkins.cubes, i = (e.cubeSkins.backface, this.getState()), a = void 0, n = void 0, s = void 0, r = void 0, o = void 0, c = void 0, u = void 0, d = void 0, p = void 0, f = void 0, g = 1; g <= _.CUBE_COUNT; g++) s = i.codes[g - 1], c = (0, l.getUp)(s.code), u = (0, l.getDown)(s.code), r = (0, l.getFront)(s.code), o = (0, l.getBack)(s.code), d = (0, l.getRight)(s.code), p = (0, l.getLeft)(s.code), a = this._displayElements[g], n = t[s.cube], a.u.style.background = n[c], a.d.style.background = n[u], a.f.style.background = n[r], a.b.style.background = n[o], a.r.style.background = n[d], a.l.style.background = n[p], f = b.default[s.code].u, a.u.style.transform = f ? "rotate" + f.dir + "(" + f.angle + "deg)" : "", f = b.default[s.code].f, a.f.style.transform = f ? "rotate" + f.dir + "(" + f.angle + "deg)" : "", f = b.default[s.code].r, a.r.style.transform = f ? "rotate" + f.dir + "(" + f.angle + "deg)" : "", f = b.default[s.code].l, a.l.style.transform = f ? "rotate" + f.dir + "(" + f.angle + "deg)" : "", f = b.default[s.code].b, a.b.style.transform = f ? "rotate" + f.dir + "(" + f.angle + "deg)" : "", f = b.default[s.code].d, a.d.style.transform = f ? "rotate" + f.dir + "(" + f.angle + "deg)" : ""
				}
			}, {
				key: "solve",
				value: function() {
					var e = l.nextState.first;
					this._setState({
						codes: [{
							cube: 1,
							code: e
						}, {
							cube: 2,
							code: e
						}, {
							cube: 3,
							code: e
						}, {
							cube: 4,
							code: e
						}, {
							cube: 5,
							code: e
						}, {
							cube: 6,
							code: e
						}, {
							cube: 7,
							code: e
						}, {
							cube: 8,
							code: e
						}],
						isRotateEnabled: !0
					}), this._updateUiFaces()
				}
			}, {
				key: "scramble",
				value: function() {
					for(var e = [this.F, this.F_, this.B, this.B_, this.U, this.U_, this.D, this.D_, this.R, this.R_, this.L, this.L_, this.x, this.y, this.z, this.x_, this.y_, this.z_], t = e.length, i = void 0, a = void 0, n = 0; n < 10; n++) a = Math.random() * t | 0, (i = e[a].bind(this))({
						noVisualUpdate: !0
					});
					var s = this.getState();
					s.isRotateEnabled = !0, this._setState(s), this._updateUiFaces()
				}
			}]), e
		}();
	t.CubeTwo = E
}, function(e, t, i) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var a = i(16);
	Object.defineProperty(t, "CubeTwo", {
		enumerable: !0,
		get: function() {
			return a.CubeTwo
		}
	})
}, function(e, t, i) {
	"use strict";

	function a(e) {
		return e && e.__esModule ? e : {
			default: e
		}
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var n = i(3),
		s = a(n),
		r = [],
		o = .9;
	r._ = r.backface = "transparent", r.u = "rgba(255, 255, 255, " + o + ")", r.f = "rgba(0, 158, 96, " + o + ")", r.r = "rgba(196, 30, 58, " + o + ")", r.l = "rgba(255, 88, 0, " + o + ")", r.b = "rgba(0, 81, 186, " + o + ")", r.d = "rgba(255, 213, 0, " + o + ")", o = .3, r["u-dark"] = "rgba(255, 255, 255, " + o + ")", r["f-dark"] = "rgba(0, 158, 96, " + o + ")", r["r-dark"] = "rgba(196, 30, 58, " + o + ")", r["l-dark"] = "rgba(255, 88, 0, " + o + ")", r["b-dark"] = "rgba(0, 81, 186, " + o + ")", r["d-dark"] = "rgba(255, 213, 0, " + o + ")", (0, s.default)(r), t.default = r
}, , function(e, t) {
	e.exports = Hammer
}]);