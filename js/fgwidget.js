if ("undefined" == typeof FG_NS) var FG_NS = new function() {
    function e() {
        if ("undefined" != typeof window.jQuery) {
            var e = window.jQuery.fn.jquery.split(".");
            return e[0] > 1 || 1 == e[0] && e[1] > 7
        }
        return !1
    }

    function t(e, t) {
        var i = document.createElement(e);
        for (var n in t) i[n] = t[n];
        document.querySelector("head").appendChild(i)
    }

    function i() {
        t("link", {
            rel: "stylesheet",
            href: r + "widget/flaticon/flaticon.css"
        }), t("link", {
            onload: n,
            rel: "stylesheet",
            href: r + "widget/fgwidget.css"
        })
    }

    function n() {
        if ("undefined" != typeof fg_widgets)
            for (var e = 0; e < fg_widgets.length; e++) d(fg_widgets[e]), o.push(fg_widgets[e]);
        else fg_widgets = new Array;
        f(document).ready(function() {
            f(".feedgrabbr_widget").each(function() {
                FG_NS.drawWidget(f(this))
            })
        })
    }

    function d(e) {
        var t = e.replace("fgid_", ""),
            i = r + "embedcode/?id=" + t;
        f.ajax({
            dataType: "jsonp",
            cache: !0,
            url: i,
            jsonpCallback: "FG_NS.receiveHTML"
        })
    }
    var f, r = "undefined" != typeof fg_site_url ? fg_site_url : "https://www.feedgrabbr.com/",
        o = [];
    e() ? (f = window.jQuery, i()) : t("script", {
        src: "https://code.jquery.com/jquery-3.2.1.min.js",
        onload: function() {
            f = window.jQuery.noConflict(!0), i()
        }
    }), this.extStartWidgetSetup = function() {
        o = [], n()
    }, this.drawWidget = function(e) {
        var t = e.attr("id");
        "undefined" == typeof t && (t = "fgid_" + e.attr("fgid")), "undefined" != typeof t && -1 === o.indexOf(t) && (o.push(t), d(t))
    }, this.receiveHTML = function(e) {
        var t = f("#fgid_" + e.uniqid);
        0 === t.length && (t = f("div[fgid=" + e.uniqid + "]")), 0 !== t.length && (t.html(e.html).trigger("fg.loaded"), "undefined" != typeof fg_widget_js && fg_widget_js[e.uniqid].execute("initWidget", f))
    }

    var div = document.getElementsByClassName('uw-w-branding');

    div.innerHTML += 'Place holder';

};

