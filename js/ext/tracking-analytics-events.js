"use strict";
var gadwpRedirectLink;
var gadwpRedirectCalled = false;
var gadwpDefaultPrevented = false;

function gadwpRedirect() {
    if (gadwpRedirectCalled) {
        return
    }
    gadwpRedirectCalled = true;
    if (gadwpDefaultPrevented == false) {
        document.location.href = gadwpRedirectLink
    } else {
        gadwpDefaultPrevented = false
    }
}

function gadwp_send_event(c, d, a, b) {
    if (gadwpUAEventsData.options.ga_with_gtag) {
        if (b) {
            if (gadwpUAEventsData.options.event_bouncerate) {
                gtag("event", d, {
                    event_category: c,
                    event_label: a,
                    non_interaction: 1,
                    event_callback: gadwpRedirect
                })
            } else {
                gtag("event", d, {
                    event_category: c,
                    event_label: a,
                    event_callback: gadwpRedirect
                })
            }
        } else {
            if (gadwpUAEventsData.options.event_bouncerate) {
                gtag("event", d, {
                    event_category: c,
                    event_label: a,
                    non_interaction: 1
                })
            } else {
                gtag("event", d, {
                    event_category: c,
                    event_label: a
                })
            }
        }
    } else {
        if (b) {
            if (gadwpUAEventsData.options.event_bouncerate) {
                ga("send", "event", c, d, a, {
                    nonInteraction: 1,
                    hitCallback: gadwpRedirect
                })
            } else {
                ga("send", "event", c, d, a, {
                    hitCallback: gadwpRedirect
                })
            }
        } else {
            if (gadwpUAEventsData.options.event_bouncerate) {
                ga("send", "event", c, d, a, {
                    nonInteraction: 1
                })
            } else {
                ga("send", "event", c, d, a)
            }
        }
    }
}
jQuery(window).on("load", function () {
    if (gadwpUAEventsData.options.event_tracking) {
        jQuery("a").filter(function () {
            if (typeof this.href === "string") {
                var a = new RegExp(".*\\.(" + gadwpUAEventsData.options.event_downloads + ")(\\?.*)?$");
                return this.href.match(a)
            }
        }).click(function (d) {
            var b = this.getAttribute("data-vars-ga-category") || "download";
            var c = this.getAttribute("data-vars-ga-action") || "click";
            var a = this.getAttribute("data-vars-ga-label") || this.href;
            gadwp_send_event(b, c, a, false)
        });
        jQuery('a[href^="mailto"]').click(function (d) {
            var b = this.getAttribute("data-vars-ga-category") || "email";
            var c = this.getAttribute("data-vars-ga-action") || "send";
            var a = this.getAttribute("data-vars-ga-label") || this.href;
            gadwp_send_event(b, c, a, false)
        });
        jQuery('a[href^="tel"]').click(function (d) {
            var b = this.getAttribute("data-vars-ga-category") || "telephone";
            var c = this.getAttribute("data-vars-ga-action") || "call";
            var a = this.getAttribute("data-vars-ga-label") || this.href;
            gadwp_send_event(b, c, a, false)
        });
        if (gadwpUAEventsData.options.root_domain) {
            jQuery('a[href^="http"]').filter(function () {
                if (typeof this.href === "string") {
                    var a = new RegExp(".*\\.(" + gadwpUAEventsData.options.event_downloads + ")(\\?.*)?$")
                }
                if (a && !this.href.match(a)) {
                    if (this.href.indexOf(gadwpUAEventsData.options.root_domain) == -1 && this.href.indexOf("://") > -1) {
                        return this.href
                    }
                }
            }).click(function (d) {
                gadwpRedirectCalled = false;
                gadwpRedirectLink = this.href;
                var b = this.getAttribute("data-vars-ga-category") || "outbound";
                var c = this.getAttribute("data-vars-ga-action") || "click";
                var a = this.getAttribute("data-vars-ga-label") || this.href;
                if (this.target != "_blank" && gadwpUAEventsData.options.event_precision) {
                    if (d.isDefaultPrevented()) {
                        gadwpDefaultPrevented = true;
                        gadwpRedirectCalled = false
                    }
                } else {
                    gadwpRedirectCalled = true;
                    gadwpDefaultPrevented = false
                }
                if (this.target != "_blank" && gadwpUAEventsData.options.event_precision) {
                    gadwp_send_event(b, c, a, true);
                    setTimeout(gadwpRedirect, gadwpUAEventsData.options.event_timeout);
                    return false
                } else {
                    gadwp_send_event(b, c, a, false)
                }
            })
        }
    }
    if (gadwpUAEventsData.options.event_affiliates && gadwpUAEventsData.options.aff_tracking) {
        jQuery("a").filter(function () {
            if (gadwpUAEventsData.options.event_affiliates != "") {
                if (typeof this.href === "string") {
                    var a = new RegExp("(" + gadwpUAEventsData.options.event_affiliates.replace(/\//g, "/") + ")");
                    return this.href.match(a)
                }
            }
        }).click(function (d) {
            gadwpRedirectCalled = false;
            gadwpRedirectLink = this.href;
            var b = this.getAttribute("data-vars-ga-category") || "affiliates";
            var c = this.getAttribute("data-vars-ga-action") || "click";
            var a = this.getAttribute("data-vars-ga-label") || this.href;
            if (this.target != "_blank" && gadwpUAEventsData.options.event_precision) {
                if (d.isDefaultPrevented()) {
                    gadwpDefaultPrevented = true;
                    gadwpRedirectCalled = false
                }
            } else {
                gadwpRedirectCalled = true;
                gadwpDefaultPrevented = false
            }
            if (this.target != "_blank" && gadwpUAEventsData.options.event_precision) {
                gadwp_send_event(b, c, a, true);
                setTimeout(gadwpRedirect, gadwpUAEventsData.options.event_timeout);
                return false
            } else {
                gadwp_send_event(b, c, a, false)
            }
        })
    }
    if (gadwpUAEventsData.options.root_domain && gadwpUAEventsData.options.hash_tracking) {
        jQuery("a").filter(function () {
            if (this.href.indexOf(gadwpUAEventsData.options.root_domain) != -1 || this.href.indexOf("://") == -1) {
                return this.hash
            }
        }).click(function (d) {
            var b = this.getAttribute("data-vars-ga-category") || "hashmark";
            var c = this.getAttribute("data-vars-ga-action") || "click";
            var a = this.getAttribute("data-vars-ga-label") || this.href;
            gadwp_send_event(b, c, a, false)
        })
    }
    if (gadwpUAEventsData.options.event_formsubmit) {
        jQuery('input[type="submit"], button[type="submit"]').click(function (f) {
            var d = this;
            var b = d.getAttribute("data-vars-ga-category") || "form";
            var c = d.getAttribute("data-vars-ga-action") || "submit";
            var a = d.getAttribute("data-vars-ga-label") || d.name || d.value;
            gadwp_send_event(b, c, a, false)
        })
    }
    if (gadwpUAEventsData.options.ga_pagescrolldepth_tracking) {
        jQuery.scrollDepth({
            percentage: true,
            userTiming: false,
            pixelDepth: false,
            gtmOverride: true,
            nonInteraction: true
        })
    }
});