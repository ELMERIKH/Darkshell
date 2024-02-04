! function t(e, n, r) {
    function i(a, s) {
        if (!n[a]) {
            if (!e[a]) {
                var u = "function" == typeof require && require;
                if (!s && u) return u(a, !0);
                if (o) return o(a, !0);
                var c = new Error("Cannot find module '" + a + "'");
                throw c.code = "MODULE_NOT_FOUND", c
            }
            var l = n[a] = {
                exports: {}
            };
            e[a][0].call(l.exports, function(t) {
                var n = e[a][1][t];
                return i(n ? n : t)
            }, l, l.exports, t, e, n, r)
        }
        return n[a].exports
    }
    for (var o = "function" == typeof require && require, a = 0; a < r.length; a++) i(r[a]);
    return i
}({
    1: [function(t, e, n) {
        "use strict";
        var r = t("./views/AppView");
        window.requestAnimFrame = function() {
            return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function(t) {
                window.setTimeout(t, 1e3 / 60)
            }
        }(), $(function() {
            var t = $("#app");
            new r({
                el: t
            })
        })
    }, {
        "./views/AppView": 6
    }],
    2: [function(t, e, n) {
        "use strict";
        var r = [{
                display: !1,
                navigate: !1,
                regex: /^help$/i,
                label: "help",
                description: "Show commands",
                onselect: function() {
                    this.displayMenu(), this.run()
                }
            }, /*{
                display: !1,
                navigate: !0,
                regex: /^420$/i,
                label: "420",
                description: null,
                onselect: function() {
                    this.trigger("instructions:change", "420")
                }
            }, {
                display: !0,
                navigate: !1,
                regex: /^prepare$/i,
                label: "prepare",
                description: null,
                onselect: function() {
                    this.trigger("instructions:change", "prepare")
                }
            }, {
                display: !0,
                navigate: !0,
                regex: /^fsociety$/i,
                label: "fsociety",
                description: null,
                onselect: function() {
                    this.trigger("instructions:change", "fsociety")
                }
            }, {
                display: !0,
                navigate: !0,
                regex: /^inform$/i,
                label: "inform",
                description: null,
                onselect: function() {
                    this.trigger("instructions:change", "inform")
                }
            },*/ {
                display: !0,
                navigate: !0,
                regex: /^GetFreeBTC$/i,
                label: "GetFreeBTC",
                description: null,
                onselect: function() {
                    this.trigger("instructions:change", "GetFreeBTC")
                }
            }, {
                display: !0,
                navigate: !0,
                regex: /^start$/i,
                label: "Start",
                description: null,
                onselect: function() {
                    this.trigger("instructions:change", "start")
                }
            }, {
                display: !0,
                navigate: !0,
                regex: /^join$/i,
                label: "join",
                description: null,
                onselect: function() {
                    this.track.omni("Email Sign-Up", "Intro Text"), this.trigger("instructions:change", "join")
                }
            }],
            i = {
                displayMenu: !0,
                prefix: "root@TOP-Secret:~# ",
                type: "userPrompt",
                delay: 100,
                prefixWeight: 700,
                options: {
                    commands: r
                }
            },
            o = {
                initial: [{
                    type: "basicText",
                    playSound: "init",
                    content: " 🐲 GRUB loading.",
                    delay: 1e3
                }, {
                    type: "basicText",
                    content: "Welcome to GRUB!",
                    delay: 2e3
                }, {
                    clear: !0,
                    type: "basicText",
                    content: "",
                    delay: 2500
                }, {
                    clear: !0,
                    type: "basicText",
                    content: "Loading Linux 3.2.0-4-amd64 ...",
                    delay: 600
                }, {
                    type: "basicText",
                    content: "Loading initial ramdisk  ...",
                    delay: 1e3
                }, {
                    clear: !0,
                    type: "basicText",
                    content: "",
                    delay: 600
                }, {
                    clear: !0,
                    type: "basicText",
                    content: "Loading, please wait ...",
                    delay: 1200
                }, {
                    type: "basicText",
                    content: "[    2.194785] sd 0:0:0:0: [sda] Assuming drive cache: write through",
                    delay: 100
                }, {
                    type: "basicText",
                    content: "[    2.195284] sd 0:0:0:0: [sda] Assuming drive cache: write through",
                    delay: 100
                }, {
                    type: "basicText",
                    content: "[    2.196163] sd 0:0:0:0: [sda] Assuming drive cache: write through",
                    delay: 100
                }, {
                    type: "basicText",
                    content: "INIT: version 2.88 booting",
                    delay: 800
                }, {
                    type: "basicText",
                    content: '[<span class="bl">info</span>] Using makefile-style concurrent boot in runlevel S.',
                    delay: 0
                }, {
                    type: "basicText",
                    content: '[ <span class="gn">ok</span> ] Starting the hot plug events dispatcher: udevd.',
                    delay: 40
                }, {
                    type: "basicText",
                    content: "....] Synthesizing the initial hotplug events...[    2.700609] piix_smbus 0000:00:07.3: Host SMBus controller not enabled!",
                    delay: 200
                }, {
                    type: "basicText",
                    content: "done.",
                    delay: 40
                }, {
                    type: "basicText",
                    content: "[ <span class=\"gn\">ok</span> ] Waiting for /dev to be fully populated...[    3.061484] Error: Driver 'pc spkr' is already registered, aborting...",
                    delay: 40
                }, {
                    type: "basicText",
                    content: "done.",
                    delay: 200
                }, {
                    type: "basicText",
                    content: '[ <span class="gn">ok</span> ] Setting preliminary keymap...done.',
                    delay: 200
                }, {
                    type: "basicText",
                    content: '[ <span class="gn">ok</span> ] Activating swap...done.',
                    delay: 200
                }, {
                    type: "basicText",
                    content: "[....] Checking root file system...fsck from util-linux 2.20.1 /dev/sda1: clean, 38190/1256640 files, 341993/5016832 blocks",
                    delay: 40
                }, {
                    type: "basicText",
                    content: "done.",
                    delay: 40
                }, {
                    type: "basicText",
                    content: '[<span class="bl">info</span>] Loading kernel module loop.',
                    delay: 40
                }, {
                    type: "basicText",
                    content: '[ <span class="gn">ok</span> ] Cleaning up temporary files... /tmp.',
                    delay: 40
                }, {
                    type: "basicText",
                    content: '[ <span class="gn">ok</span> ] Activating lvm and md swap...done.',
                    delay: 40
                }, {
                    type: "basicText",
                    content: "[....] Checking file systems...fsck from util-linux 2.20.1",
                    delay: 800
                }, {
                    type: "basicText",
                    content: "done.",
                    delay: 200
                }, {
                    type: "basicText",
                    content: "[....] Mounting local filesystems...done.",
                    delay: 500
                }, {
                    type: "basicText",
                    content: '[ <span class="gn">ok</span> ] Activating swapfile swap...done.',
                    delay: 100
                }, {
                    type: "basicText",
                    content: '[ <span class="gn">ok</span> ] Cleaning up temporary files....',
                    delay: 20
                }, {
                    type: "basicText",
                    content: '[ <span class="gn">ok</span> ] Setting kernel variables ...done.',
                    delay: 100
                }, {
                    type: "basicText",
                    content: '[ <span class="gn">ok</span> ] Configuring network interfaces...done.',
                    delay: 500
                }, {
                    type: "basicText",
                    content: '[ <span class="gn">ok</span> ] Starting rpcbind daemon....',
                    delay: 200
                }, {
                    type: "basicText",
                    content: '[ <span class="gn">ok</span> ] Starting NFS common utilities: statd idmapd.',
                    delay: 200
                }, {
                    type: "basicText",
                    content: '[ <span class="gn">ok</span> ] Cleaning up temporary files....done.',
                    delay: 200
                }, {
                    type: "basicText",
                    content: '[<span class="bl">info</span>] Setting console screen modes.',
                    delay: 40
                }, {
                    type: "basicText",
                    content: '[<span class="bl">info</span>] Skipping font and keymap setup (handled by console-setup).',
                    delay: 10
                }, {
                    type: "basicText",
                    content: "[....] Setting up console font and keymap...done.",
                    delay: 400
                }, {
                    type: "basicText",
                    content: "INIT: Entering runlevel: 2",
                    delay: 1e3
                }, {
                    type: "basicText",
                    content: '[<span class="bl">info</span>] Using makefile-style concurrent boot in runlevel 2.',
                    delay: 90
                }, {
                    type: "basicText",
                    content: '[ <span class="gn">ok</span> ] Starting NFS common utlities: statd idmapd.',
                    delay: 20
                }, {
                    type: "basicText",
                    content: '[ <span class="gn">ok</span> ] Starting rpcbind daemon...[....] Already running..',
                    delay: 10
                }, {
                    type: "basicText",
                    content: '[ <span class="gn">ok</span> ] Starting enhanced syslogd: rsyslogd.',
                    delay: 300
                }, {
                    type: "basicText",
                    content: '[ <span class="gn">ok</span> ] Starting deferred execution scheduler: atd.',
                    delay: 300
                }, {
                    type: "basicText",
                    content: '[ <span class="gn">ok</span> ] Starting ACPI services....',
                    delay: 100
                }, {
                    type: "basicText",
                    content: '[ <span class="gn">ok</span> ] Starting periodic command scheduler: cron',
                    delay: 80
                }, {
                    type: "basicText",
                    content: '[ <span class="gn">ok</span> ] Starting system message bus: dbus',
                    delay: 1e3
                }, {
                    type: "basicText",
                    content: '[ <span class="gn">ok</span> ] Starting Avahi mDNS/DNS-SD Daemon: avahi-daemon.',
                    delay: 40
                }, {
                    type: "basicText",
                    content: '[ <span class="gn">ok</span> ] Starting Common Unix Printing System: cupsd',
                    delay: 90
                }, {
                    type: "basicText",
                    content: '[ <span class="gn">ok</span> ] Starting MTA: exim4.',
                    delay: 20
                }, {
                    clear: !0,
                    type: "basicText",
                    content: "Debian GNU/Linux 7 masterx ttyl",
                    delay: 1e3
                }, {
                    type: "basicText",
                    content: "&nbsp",
                    delay: 40
                }, {
                    type: "typedText",
                    content: "root",
                    prefix: "login: ",
                    playSound: "init",
                    delay: 1500
                }, {
                    type: "typedText",
                    content: "Everlasting",
                    prefix: "password: ",
                    delay: 500
                }, {
                    clear: !0,
                    type: "basicText",
                    content: "",
                    delay: 250
                }, {
                    clear: !0,
                    time: !0,
                    type: "basicText",
                    color: "#008c23",
                    prefixColor: "#008c23",
                    content: "[User_@" + USER_IP + "] has joined #chat.",
                    delay: 1e3
                }, {
                    type: "basicText",
                    content: "&nbsp;",
                    delay: 200
                }, {
                    time: !0,
                    type: "typedText",
                    content: "Welcome .",
                    prefix: "<Master.X>",
                    prefixColor: "#008c23",
                    prefixWeight: 700,
                    delay: 800
                }, {
                    type: "continueTypedText",
                    content: "If you've come, you've come for a reason.",
                    delay: 1e3
                }, {
                    type: "continueTypedText",
                    content: "You may not be able to explain it yet,",
                    delay: 1200
                }, {
                    type: "continueTypedText",
                    content: "but there's a part of you that's exhausted with this world...",
                    delay: 200
                }, {
                    type: "continueTypedText",
                    content: "a world that decides where you work,",
                    delay: 1e3
                }, {
                    type: "continueTypedText",
                    content: "who you see,",
                    delay: 500
                }, {
                    type: "continueTypedText",
                    content: "and how you empty and fill your depressing bank account.",
                    delay: 800
                }, {
                    type: "continueTypedText",
                    content: "Even the Internet connection you're using to read this is costing you, slowly chipping away at your existence.",
                    delay: 1e3
                }, {
                    type: "continueTypedText",
                    content: "There are things you want to say.",
                    delay: 600
                }, {
                    type: "continueTypedText",
                    content: "Soon you will be given a voice.",
                    delay: 600
                },  {
                    type: "menuOptions",
                    options: {
                        commands: r
                    },
                    delay: 500
                }, i],
                join: [{
                    clear: !0,
                    type: "basicText",
                    content: "",
                    delay: 200
                }, {
                    clear: !0,
                    time: !0,
                    type: "typedText",
                    prefix: "<Master.X>",
                    prefixColor: "#008c23",
                    content: "",
                    delay: 0
                }, {
                    time: !0,
                    type: "typedText",
                    prefix: "<Master.X>",
                    prefixColor: "#008c23",
                    content: "you don't know me, but I've been watching you.",
                    delay: 1200
                }, {
                    type: "continueTypedText",
                    content: "i know you feel like you have no voice.",
                    delay: 2e3
                }, {
                    type: "continueTypedText",
                    content: "i know you feel trapped.",
                    delay: 1e3
                }, {
                    type: "continueTypedText",
                    content: "i know you feel controlled.",
                    delay: 1200
                }, {
                    type: "continueTypedText",
                    content: "but I have been fighting for you.",
                    delay: 1200
                }, {
                    type: "continueTypedText",
                    content: "all of you.",
                    delay: 1200
                }, {
                    type: "continueTypedText",
                    content: "it's time to break free from our corporate masters.",
                    delay: 1200
                }, {
                    type: "continueTypedText",
                    content: "you've been a slave to their debt far too long.",
                    delay: 1200
                }, {
                    time: !0,
                    type: "typedText",
                    prefix: "<Master.X>",
                    prefixColor: "#008c23",
                    content: "if you're ready to join me, enter your email address.",
                    delay: 1e3
                }, {
                    type: "basicText",
                    content: "&nbsp;",
                    delay: 200
                }, {
                    time: !0,
                    prefixColor: "#008c23",
                    prefix: "<User_>",
                    type: "emailPrompt",
                    delay: 500
                }],
                emailError: [{
                    type: "basicText",
                    playSound: "incorrect",
                    color: "red",
                    content: "Error: Invalid email. Try again."
                }, {
                    time: !0,
                    prefixColor: "#008c23",
                    prefix: "<User__>",
                    type: "emailPrompt",
                    delay: 500
                }],
                emailSuccess: [{
                    type: "basicText",
                    content: "&nbsp;",
                    delay: 200
                }, {
                    time: !0,
                    type: "typedText",
                    prefix: "<Master.X>",
                    prefixColor: "#008c23",
                    content: "you will be contacted vaerysoon.",
                    delay: 1e3
                }, {
                    clear: !0,
                    type: "basicText",
                    content: "&nbsp;",
                    delay: 3e3
                }, {
                    type: "typedText",
                    content: 'Enter command. Type "help" to see a list of commands.',
                    prefix: "root@TOP-Secret:~# ",
                    delay: 500
                }, {
                    type: "basicText",
                    content: "&nbsp;",
                    delay: 200
                }, i],
                question: [{
                    type: "imageGallery",
                    galleryName: "FSociety Gallery",
                    track: {
                        prop3: "Gallery",
                        prop5: "Mr. Robot : Who Is Mr. Robot : FSociety Gallery",
                        pageName: "Mr. Robot : Who is Mr. Robot : FSociety Gallery : Photo 1"
                    },
                    images: [{
                        src: "images/question/jefferson.jpg"
                    }, {
                        src: "images/question/steals.jpg"
                    }, {
                        src: "images/question/madoff.jpg"
                    }, {
                        src: "images/question/owned.jpg"
                    }],
                    delay: 800
                }, {
                    type: "typedText",
                    content: 'Enter command. Type "help" to see a list of commands.',
                    prefix: "root@fsociety:~# ",
                    delay: 500
                }, i],
                fsociety: [{
                    videoName: "fsociety",
                    type: "fullscreenVideo",
                    cover: !0,
                    sources: [{
                        src: "video/fsociety.webm",
                        type: "video/webm"
                    }, {
                        src: "video/fsociety.mp4",
                        type: "video/mp4"
                    }],
                    track: {
                        prop3: "Video"
                    },
                    delay: 400
                }, {
                    type: "typedText",
                    content: 'Enter command. Type "help" to see a list of commands.',
                    prefix: "root@fsociety:~# ",
                    delay: 500
                }, i],
                prepare: [{
                    videoName: "prepare",
                    type: "fullscreenVideo",
                    cover: !0,
                    sources: [{
                        src: "video/prepare.webm",
                        type: "video/webm"
                    }, {
                        src: "video/prepare.mp4",
                        type: "video/mp4"
                    }],
                    track: {
                        prop3: "Video"
                    },
                    delay: 400
                }, {
                    type: "typedText",
                    content: 'Enter command. Type "help" to see a list of commands.',
                    prefix: "root@fsociety:~# ",
                    delay: 500
                }, i],
                wakeup: [{
                    videoName: "wakeup",
                    type: "fullscreenVideo",
                    cover: !0,
                    sources: [{
                        src: "video/wakeup.webm",
                        type: "video/webm"
                    }, {
                        src: "video/wakeup.mp4",
                        type: "video/mp4"
                    }],
                    track: {
                        prop3: "Video"
                    },
                    delay: 800
                }, {
                    type: "typedText",
                    content: 'Enter command. Type "help" to see a list of commands.',
                    prefix: "root@fsociety:~# ",
                    delay: 500
                }, i],
                420: [{
                    type: "imageGallery",
                    galleryName: "420 Hidden Image",
                    track: {
                        prop3: "Gallery",
                        prop5: "Mr. Robot : Who is Mr. Robot : 420 Hidden Image",
                        pageName: "Mr. Robot : Who is Mr. Robot : 420 Hidden Image"
                    },
                    images: [{
                        src: "images/420/420.jpg"
                    }],
                    delay: 400
                }, {
                    type: "typedText",
                    content: 'Enter command. Type "help" to see a list of commands.',
                    prefix: "root@fsociety:~# ",
                    delay: 500
                }, i],
                inform: [{
                    type: "imageGallery",
                    galleryName: "Inform Gallery",
                    track: {
                        prop3: "Gallery",
                        prop5: "Mr. Robot : Who Is Mr. Robot : Inform Gallery",
                        pageName: "Mr. Robot : Who is Mr. Robot : Inform Gallery : Photo 1"
                    },
                    images: [{
                        src: "images/headlines/deflategate.jpg"
                    }, {
                        src: "images/headlines/billionaire.jpg"
                    }, {
                        src: "images/headlines/creditcards2.jpg"
                    }, {
                        src: "images/headlines/metgala.jpg"
                    }]
                }, {
                    type: "typedText",
                    content: 'Enter command. Type "help" to see a list of commands.',
                    prefix: "root@TOP-Secret:~# ",
                    delay: 500
                }, i],
                menuPrompt: [{
                    type: "typedText",
                    content: 'Enter command. Type "help" to see a list of commands.',
                    prefix: "root@TOP-Secret:~# ",
                    delay: 500
                }, i],
                live: [{
                    type: "backboneView",
                    options: null,
                    delay: 400,
                    view: "Live"
                }]
            };
        e.exports = o
    }, {}],
    3: [function(t, e, n) {
        e.exports = function() {
            var e = t("hogan.js"),
                n = {};
            return n.app = new e.Template({
                code: function(t, e, n) {
                    var r = this;
                    return r.b(n = n || ""), r.b('<div class="terminal-wrapper">'), r.b("\n" + n), r.b('  <div class="terminal-content"></div>'), r.b("\n" + n), r.b('  <textarea autocapitalize="off" id="hidden-textarea"></textarea>'), r.b("\n" + n), r.b("</div>"), r.b("\n" + n), r.b('<footer><div class="footer-links"><span><a href="" target="_blank"></a></span><span><a href="" target="_blank"></a></span></div></footer>'), r.fl()
                },
                partials: {},
                subs: {}
            }), n.arrow = new e.Template({
                code: function(t, e, n) {
                    var r = this;
                    return r.b(n = n || ""), r.b('<button class="'), r.b(r.v(r.f("buttonClass", t, e, 0))), r.b('">'), r.b("\n" + n), r.b('	<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 15 20" width="100%" height="100%">'), r.b("\n" + n), r.b('	  <polygon points="'), r.b(r.v(r.f("polygonPoints", t, e, 0))), r.b('" />'), r.b("\n" + n), r.b("	</svg>"), r.b("\n" + n), r.b("</button>"), r.fl()
                },
                partials: {},
                subs: {}
            }), n.close = new e.Template({
                code: function(t, e, n) {
                    var r = this;
                    return r.b(n = n || ""), r.b('<button class="btn-close">'), r.b("\n" + n), r.b('	<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 15 20" width="100%" height="100%">'), r.b("\n" + n), r.b('	  <polygon points="0,4 4,0 19,15 15,19 "/>'), r.b("\n" + n), r.b('		<polygon points="15,0 19,4 4,19 0,15 "/>'), r.b("\n" + n), r.b("	</svg>"), r.b("\n" + n), r.b("</button>"), r.fl()
                },
                partials: {},
                subs: {}
            }), n.imagegallery = new e.Template({
                code: function(t, e, n) {
                    var r = this;
                    return r.b(n = n || ""), r.b('<button class="btn-close">'), r.b("\n" + n), r.b('	<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 15 20" width="100%" height="100%">'), r.b("\n" + n), r.b('		<polygon points="0,3 3,0 18,14 14,18 "/>'), r.b("\n" + n), r.b('		<polygon points="14,0 18,3 3,18 0,14 "/>'), r.b("\n" + n), r.b("	</svg>"), r.b("\n" + n), r.b("</button>"), r.b("\n" + n), r.b('<div class="image-gallery">'), r.b("\n" + n), r.s(r.f("images", t, e, 1), t, e, 0, 274, 412, "{{ }}") && (r.rs(t, e, function(t, e, r) {
                        r.b('	<div class="image-item">'), r.b("\n" + n), r.b('		<img src="'), r.b(r.v(r.f("src", t, e, 0))), r.b('" />'), r.b("\n" + n), r.s(r.f("caption", t, e, 1), t, e, 0, 339, 390, "{{ }}") && (r.rs(t, e, function(t, e, r) {
                            r.b('			<div class="image-caption">'), r.b(r.v(r.f("caption", t, e, 0))), r.b("</div>"), r.b("\n" + n)
                        }), t.pop()), r.b("	</div>"), r.b("\n" + n)
                    }), t.pop()), r.b("</div>"), r.fl()
                },
                partials: {},
                subs: {}
            }), n.inlineimage = new e.Template({
                code: function(t, e, n) {
                    var r = this;
                    return r.b(n = n || ""), r.b('<div class="inline-image"><img src="'), r.b(r.v(r.f("image", t, e, 0))), r.b('" /></div>'), r.fl()
                },
                partials: {},
                subs: {}
            }), n.menu = new e.Template({
                code: function(t, e, n) {
                    var r = this;
                    return r.b(n = n || ""), r.b('<div class="line">&nbsp;</div>'), r.b("\n" + n), r.b('<div class="line">'), r.b("\n" + n), r.b("<strong>Commands:</strong>"), r.b("\n" + n), r.b("</div>"), r.b("\n" + n), r.b('<div class="line">'), r.b("\n" + n), r.b('	<div class="menu">'), r.b("\n" + n), r.s(r.f("commands", t, e, 1), t, e, 0, 137, 206, "{{ }}") && (r.rs(t, e, function(t, e, r) {
                        r.s(r.f("display", t, e, 1), t, e, 0, 152, 192, "{{ }}") && (r.rs(t, e, function(t, e, r) {
                            r.b('			<div class="line">'), r.b(r.v(r.f("label", t, e, 0))), r.b("</div>"), r.b("\n" + n)
                        }), t.pop())
                    }), t.pop()), r.b("	</div>"), r.b("\n" + n), r.b("</div>"), r.b("\n" + n), r.b('<div class="line">&nbsp;</div>'), r.fl()
                },
                partials: {},
                subs: {}
            }), n.video = new e.Template({
                code: function(t, e, n) {
                    var r = this;
                    return r.b(n = n || ""), r.b('<button class="btn-play"></button>'), r.b("\n" + n), r.b('<video id="robot-video" width="1600" height="900" preload="auto" autoplay>'), r.b("\n" + n), r.s(r.f("sources", t, e, 1), t, e, 0, 123, 166, "{{ }}") && (r.rs(t, e, function(t, e, r) {
                        r.b('		<source src="'), r.b(r.v(r.f("src", t, e, 0))), r.b('" type="'), r.b(r.v(r.f("type", t, e, 0))), r.b('">'), r.b("\n" + n)
                    }), t.pop()), r.b("	Your browser does not support the video tag."), r.b("\n" + n), r.b("</video>"), r.fl()
                },
                partials: {},
                subs: {}
            }), n
        }()
    }, {
        "hogan.js": 13
    }],
    4: [function(t, e, n) {
        "use strict";
        var r = t("q"),
            i = t("lodash"),
            o = t("./templates"),
            a = t("backbone").Events,
            s = t("./instructions"),
            u = t("./track"),
            c = t("./views/ImageGallery"),
            l = t("./views/FullScreenVideo"),
            f = {},
            p = function(t, e) {
                function n(t) {
                    return parseInt(t * T, 10)
                }

                function p(t) {
                    var e = r.defer();
                    q.html(t), e.resolve()
                }

                function h(t) {
                    var e = r.defer();
                    t && "" !== t && P.html(t), e.resolve()
                }

                function d(t) {
                    var e = "";
                    t.time && (e += b() + " "), t.prefix && (e += t.prefix + " "), t.prefixColor && P.css({
                        color: t.prefixColor
                    }), t.prefixWeight && P.css({
                        fontWeight: t.prefixWeight
                    }), P.text(e)
                }

                function g() {
                    N.focus()
                }

                function v(t) {
                    I && (t.preventDefault(), g())
                }

                function y(t) {
                    function e() {
                        window.requestAnimFrame(function() {
                            n(o)
                        }), o++
                    }

                    function n(n) {
                        q.text(a + t.substr(0, n++)), t.length <= n - 1 ? i.resolve() : e()
                    }
                    var i = r.defer(),
                        o = 1,
                        a = q.text();
                    return e(), i.promise
                }

                function m() {
                    A.scrollTop(S.outerHeight() - A.outerHeight())
                }

                function b() {
                    var t = new Date,
                        e = (t.getHours() < 10 ? "0" : "") + t.getHours(),
                        n = (t.getMinutes() < 10 ? "0" : "") + t.getMinutes(),
                        r = e + ":" + n;
                    return r
                }

                function x() {
                    m()
                }
                var w = [];
                this.router = e, this.hasInitialized = !1, this.firstBoot = !0;
                var _ = REDIRECT ? "/menu" : "/",
                    k = function(t) {
                        if (this.clearTimeouts(), this.clear(), this.clearPopups(), log("ROUTE:", t), REDIRECT) {
                            if ("" === t || "live" === t) return void(window.location.href = BASE_URL + "/live/");
                            if ("menu" !== t) {
                                if ("undefined" == typeof s[t]) return void(window.location.href = BASE_URL + "/live/");
                                this.start(s[t])
                            } else this.firstBoot ? (this.firstBoot = !1, this.track.omni("Email Sign-Up", "Loading Sequence"), this.start(s.initial)) : this.start(s.menuPrompt)
                        } else if ("" !== t) {
                            if ("undefined" == typeof s[t]) return void(window.location.href = BASE_URL);
                            this.start(s[t])
                        } else {
                            if ("live" === t) return void(window.location.href = BASE_URL + "/live/");
                            this.firstBoot ? (this.firstBoot = !1, this.track.omni("Email Sign-Up", "Loading Sequence"), this.start(s.initial)) : this.start(s.menuPrompt)
                        }
                        ga("send", "pageview", {
                            page: "/" + t
                        })
                    }.bind(this),
                    T = .3;
                i.extend(this, a);
                var E, j = $(window),
                    C = $(document),
                    S = t,
                    A = $(".terminal-wrapper"),
                    N = $("#hidden-textarea"),
                    R = 0,
                    I = !1,
                    O = {},
                    L = [];
                this.track = new u;
                var D = $("<span />").addClass("prompt").html("&nbsp;"),
                    P = $("<span />").addClass("prefix"),
                    q = $("<span />").addClass("input"),
                    H = $("<div />").addClass("line");
                return this.runExit = function() {
                    this.clear()
                }, this.append = function(t) {
                    S.append(t)
                }, this.clearTimeouts = function() {
                    this.clearTimeout(this.itemTimeout), this.clearTimeout(this.typeTimeout)
                }, this.clearTimeout = function(t) {
                    "number" == typeof t && window.clearTimeout(t)
                }, this.changeInstructions = function(t) {
                    this.clearTimeouts(), this.clear(), this.clearPopups(), this.start(s[t])
                }, this.on("exit", this.runExit.bind(this)), this.on("instructions:change", this.changeInstructions), this.init = function() {
                    this.addListeners(), this.clear(), this.hasInitialized = !0
                }, this.start = function(t) {
                    R = 0, E = t, this.run()
                }, this.run = function() {
                    var t = E[R];
                    this.runItem(t)
                }, this.runItem = function(t) {
                    "undefined" != typeof t && "function" == typeof this[t.type] && (this.itemTimeout = window.setTimeout(function() {
                        this[t.type](t)
                    }.bind(this), n(t.delay)))
                }, this.menuOptions = function(t) {
                    O = t.options, this.displayMenu(), this.nextItem()
                }, this.typedText = function(t) {
                    t.clear && this.clear(), t.playSound && createjs.Sound.play(t.playSound);
                    var e = 0;
                    t.prefix && (h(d(t)), e = 1200), this.typeTimeout = window.setTimeout(function() {
                        y(t.content).then(this.handleTyping.bind(this))
                    }.bind(this), e)
                }, this.imageGallery = function(t) {
                    D.remove();
                    var e = new c({
                        images: t.images,
                        galleryName: t.galleryName,
                        track: t.track
                    });
                    w.push(e), e.$el.css({
                        opacity: 0
                    }), e.on("loaded", function() {
                        e.$el.css({
                            opacity: 1
                        })
                    }), e.on("closed", function() {
                        this.handleNewLine(), this.nextItem(), this.router.navigate(_, {
                            trigger: !0
                        })
                    }.bind(this)), $("#app").append(e.render().addListeners().$el)
                }, this.handleTyping = function() {
                    "continueTypedText" === E[R + 1].type ? this.nextItem() : (this.handleNewLine(), this.nextItem())
                }, this.clearPopups = function() {
                    for (var t = 0, e = w.length; e > t; t++) w[t].removeEl()
                }, this.backboneView = function(t) {
                    var e = new f[t.view](t.options);
                    w.push(e), e.on("closed", function() {
                        this.handleNewLine(), this.nextItem(), this.router.navigate(_, {
                            trigger: !0
                        })
                    }.bind(this)), $("#app").append(e.render().addListeners().$el)
                }, this.fullscreenVideo = function(t) {
                    D.remove();
                    var e = new l({
                        videoName: t.videoName,
                        sources: t.sources,
                        cover: t.cover,
                        track: t.track
                    });
                    w.push(e), e.on("ended", function() {
                        this.handleNewLine(), this.nextItem()
                    }.bind(this)), $("#app").append(e.render().addListeners().$el), e.play()
                }, this.continueTypedText = function(t) {
                    t.newline && this.handleNewLine(), y(" " + t.content).then(this.handleTyping.bind(this))
                }, this.basicText = function(t, e) {
                    t.clear && this.clear(), t.track && this.track.omni(void 0, void 0, t.track), h(d(t)), p(t.content), t.className && q.addClass(t.className), t.color && q.css({
                        color: t.color
                    }), t.playSound && createjs.Sound.play(t.playSound), this.handleNewLine(), q.removeClass(t.className), e || this.nextItem()
                }, this.inlineImage = function(t, e) {
                    t.clear && this.clear(), t.track && this.track.omni(void 0, void 0, t.track);
                    var n = new Image;
                    n.onload = function() {
                        m()
                    }, n.src = t.content, p(o.inlineimage.render({
                        image: t.content
                    })), t.className && q.addClass(t.className), t.color && q.css({
                        color: t.color
                    }), t.playSound && createjs.Sound.play(t.playSound), this.handleNewLine(), q.removeClass(t.className), m(), e || this.nextItem()
                }, this.userPrompt = function(t) {
                    h(d(t)), this.prompt(t.options)
                }, this.emailPrompt = function(t) {
                    h(d(t)), g(), I = !0
                }, this.nextItem = function() {
                    R++, this.run()
                }, this.clear = function() {
                    S.empty(), this.startLine()
                }, this.startLine = function() {
                    H.append(P).append(q).append(D), S.append(H)
                }, this.prompt = function(t) {
                    O = t, I = !0, g()
                }, this.submit = function() {
                    I = !1, this.handleNewLine(), N.blur(), "emailPrompt" === E[R].type ? this.interpretEmail(L[L.length - 1].input) : this.interpret(L[L.length - 1].input)
                }, this.handleNewLine = function() {
                    this.storeCommand(), q.empty().css({
                        color: "inherit"
                    }), P.empty().css({
                        color: "inherit"
                    }), N.val(""), this.startLine(), m()
                }, this.interpret = function(t) {
                    for (var e = 0, n = O.commands.length; n > e; e++)
                        if (t.match(O.commands[e].regex)) return createjs.Sound.play("init"), O.commands[e].navigate && this.router.navigate("/" + t, {
                            trigger: !0
                        }), O.commands[e].onselect.call(this);
                    return this.displayError()
                }, this.interpretEmail = function(t) {
                    this.trigger("email:submit", t)
                }, this.displayMenu = function() {
                    D.remove(), this.storeCommand(), this.basicText({
                        content: o.menu.render({
                            commands: O.commands
                        })
                    }, !0)
                }, this.displayError = function() {
                    this.handleNewLine(), createjs.Sound.play("incorrect"), q.text("Error: Command not recognized. Type help for a list of commands.").addClass("error"), this.handleNewLine(), this.run()
                }, this.storeCommand = function() {
                    D.remove();
                    var t = H.clone();
                    S.append(t), L.push({
                        input: q.text(),
                        el: t
                    })
                }, this.addListeners = function() {
                    C.on("keydown", this.keydownHandler.bind(this)), C.on("keyup", this.keyupHandler.bind(this)), C.on("click", v), C.on("touchstart", ".line:last", v), j.on("resize", x), N.on("input", this.handleTextInput)
                }, this.keydownHandler = function(t) {
                    var e = t.keyCode ? t.keyCode : t.which;
                    return 13 === e ? (t.preventDefault(), void this.submit()) : void 0
                }, this.keyupHandler = function(t) {
                    var e = t.keyCode ? t.keyCode : t.which;
                    (8 === e || 46 === e) && this.handleTextInput()
                }, this.handleTextInput = function() {
                    I && q.text(N.val())
                }, this.backspace = function() {
                    if (I) {
                        var t = q.text();
                        q.text(t.substring(0, t.length - 1))
                    }
                }, this.init(), this.router.on("route", k), this
            };
        e.exports = p
    }, {
        "./instructions": 2,
        "./templates": 3,
        "./track": 5,
        "./views/FullScreenVideo": 7,
        "./views/ImageGallery": 8,
        backbone: 9,
        lodash: 16,
        q: 17
    }],
    5: [function(t, e, n) {
        "use strict";
        var r = t("lodash"),
            i = function() {
                this.omni = function(t, e, n) {
                    this.nullify();
                    var i = "Mr. Robot",
                        o = "Who Is Mr. Robot",
                        a = function() {
                            var t, e = Array.prototype.slice.call(arguments);
                            return t = (i + " : " + o + " : " + e.join(" : ")).replace(/\ : $/, "")
                        };
                    s.pageName = a(t, e), s.prop2 = "Drama", s.prop3 = "Features", s.prop4 = i + " : " + o, s.prop5 = i + " : " + o + " : " + t, s.prop8 = "Cable", s.prop9 = "USA Network", s.prop10 = i, s.prop32 = "New Site", s.prop60 = "Not Sponsored", ("FSociety Gallery" === t || "420 Hidden Image" === t) && (s.prop3 = "Gallery"), "undefined" != typeof n && r.extend(s, n), e ? ("Video" === e.subSection && (s.prop3 = "Video"), -1 !== e.indexOf("Answer") ? (s.linkTrackVars = "events,event6,prop59,eVar59", s.linkTrackEvents = "event6,event89", s.events = "event6,event89", s.prop59 = s.eVar59 = t + " : " + e, s.t(s, "o", "Answer")) : -1 !== e.indexOf("Question") ? (s.linkTrackVars = "events,event6,prop58,eVar58", s.linkTrackEvents = "event6,event88", s.events = "event6,event88", s.prop58 = s.eVar58 = t + " : " + e, s.t(s, "o", "Poll")) : -1 !== e.indexOf("View Progress") ? (s.pageName = i + " : " + o + " : View Progress", s.track(s, "o", s.pageName)) : s.track(s, "o", s.pageName)) : s.track(s, "o", s.pageName), log(s, s.pageName, s.prop3, s.prop4, s.prop5)
                }, this.click = function(t) {
                    this.nullify(), s.linkTrackVars = "events,eVar65,prop65", s.linkTrackEvents = "event65", s.events = "event65", s.eVar65 = s.prop65 = t, s.tl(this, "o", "Page Item Click"), s.manageVars("clearVars", s.linkTrackVars, 1)
                }, this.nullify = function() {
                    s.pageName = "", s.prop2 = "", s.prop3 = "", s.prop4 = "", s.prop5 = "", s.prop8 = "", s.prop9 = "", s.prop10 = "", s.prop31 = "", s.prop32 = "", s.prop58 = "", s.prop59 = "", s.prop60 = "", s.eVar58 = "", s.eVar59 = "", s.eVar73 = "", s.eVar74 = "", s.events = "", s.linkTrackVars = "None", s.linkTrackEvents = "None"
                }
            };
        e.exports = i
    }, {
        lodash: 16
    }],
    6: [function(t, e, n) {
        "use strict";
        var r = t("lodash"),
            i = t("backbone"),
            o = t("../templates"),
            a = t("../terminal"),
            s = t("../instructions"),
            u = t("superagent");
        i.$ = $;
        var c = i.Router.extend({
                routes: {
                    "": "",
                    inform: "inform",
                    420: "420",
                    question: "question",
                    wakeup: "wakeup",
                    join: "join",
                    prepare: "prepare",
                    fsociety: "fsociety",
                    menu: "menu",
                    "*path": "default"
                }
            }),
            l = i.View.extend({
                template: o.app,
                initialize: function() {
                    r.bindAll(this), this.router = new c, this.render(), this.prepareSounds(), this.terminal = new a(this.$(".terminal-content"), this.router), this.addHandlers(), i.history.start({
                        pushState: !0
                    })
                },
                prepareSounds: function() {
                    createjs.Sound.initializeDefaultPlugins() || log("no sounds");
                    var t = "/audio/",
                        e = [{
                            src: "hum_loop.ogg",
                            id: "hum"
                        }, {
                            src: "beep2.ogg",
                            id: "incorrect"
                        }, {
                            src: "beep.ogg",
                            id: "init"
                        }, {
                            src: "type.ogg",
                            id: "type"
                        }];
                    createjs.Sound.alternateExtensions = ["mp3"], createjs.Sound.registerSounds(e, t), createjs.Sound.setVolume(.4), $(window).on("click touchstart keydown keypress", this.initAudio)
                },
                initAudio: function() {
                    var t = createjs.Sound.play("hum");
                    t.pause()
                },
                addHandlers: function() {
                    this.terminal.on("video:play", this.startVideo), this.terminal.on("email:submit", this.submitEmail), this.terminal.clear()
                },
                submitEmail: function(t) {
                    function e(t) {
                        var e = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                        return e.test(t)
                    }
                    e(t) ? this.postEmail(t) : this.handleEmailError()
                },
                handleEmailError: function() {
                    this.terminal.start(s.emailError)
                },
                postEmail: function(t) {
                    u.post("").type("form").send({
                        email: t
                    }).end(this.handleEmailResponse)
                },
                handleEmailResponse: function(t) {
                    //"error" === t.body.type ? this.handleEmailError() : this.handleEmailSuccess()
                    this.terminal.start(s.emailSuccess)
                },
                handleEmailSuccess: function() {
                    this.terminal.start(s.emailSuccess)
                },
                render: function() {
                    this.$el.html(this.template.render())
                }
            });
        e.exports = l
    }, {
        "../instructions": 2,
        "../templates": 3,
        "../terminal": 4,
        backbone: 9,
        lodash: 16,
        superagent: 18
    }],
    7: [function(t, e, n) {
        "use strict";
        var r = t("lodash"),
            i = t("backbone"),
            o = t("../templates"),
            a = t("../track"),
            s = new a;
        i.$ = $;
        var u = $(window),
            c = i.View.extend({
                className: "video-container",
                template: o.video,
                events: {
                    "click video": "play",
                    "click .btn-play": "play"
                },
                initialize: function(t) {
                    r.bindAll(this), r.extend(this, t), r.extend(this, i.Events), s.omni(this.videoName, void 0, this.track)
                },
                onVideoEnd: function() {
                    this.removeListeners(), this.trigger("ended"), this.removeEl(), s.omni("Help")
                },
                removeEl: function() {
                    this.removeListeners(), this.unbind(), this.remove()
                },
                removeListeners: function() {
                    this.$("video").off("ended", this.onVideoEnd), u.off("resize", this.handleResize)
                },
                play: function() {
                    return this.$("video")[0].play(), this
                },
                addListeners: function() {
                    return this.$("video").on("ended", this.onVideoEnd), this.$("video").on("play", this.removePlayButton), u.on("resize", this.handleResize), this
                },
                removePlayButton: function() {
                    this.$("button.btn-play").remove()
                },
                handleResize: function() {
                    var t = u.width(),
                        e = u.height(),
                        n = t,
                        r = e,
                        i = t / e,
                        o = this.aspectRatio || 16 / 9;
                    this.cover ? i > o ? (r = t * (1 / o), this.$el.css({
                        width: t,
                        height: r,
                        top: -((r - e) / 2),
                        left: 0
                    })) : (n = e * o, this.$el.css({
                        width: n,
                        height: e,
                        left: -((n - t) / 2),
                        top: 0
                    })) : i > o ? this.$el.css({
                        height: e,
                        width: e * o,
                        left: "50%",
                        top: "50%",
                        marginLeft: -(e * o / 2),
                        marginTop: -(e / 2)
                    }) : this.$el.css({
                        width: t,
                        height: t * (1 / o),
                        left: "50%",
                        top: "50%",
                        marginLeft: -(t / 2),
                        marginTop: -(t * (1 / o) / 2)
                    })
                },
                render: function() {
                    return this.$el.html(this.template.render({
                        sources: this.sources
                    })), this.handleResize(), this.$el.fadeIn(), this
                }
            });
        e.exports = c
    }, {
        "../templates": 3,
        "../track": 5,
        backbone: 9,
        lodash: 16
    }],
    8: [function(t, e, n) {
        "use strict";
        var r = t("lodash"),
            i = t("backbone"),
            o = t("../templates"),
            a = t("../track"),
            s = new a;
        $.fn.containify = function() {
            var t = this.parent(),
                e = this,
                n = t.width() / t.height(),
                r = e.get(0).naturalWidth / e.get(0).naturalHeight;
            n > r ? e.css({
                left: (t.width() - t.height() * r) / 2,
                top: 0,
                height: t.height(),
                width: t.height() * r
            }) : e.css({
                top: (t.height() - t.width() * (1 / r)) / 2,
                left: 0,
                height: t.width() * (1 / r),
                width: t.width()
            })
        }, i.$ = $;
        var u = i.View.extend({
            className: "image-container",
            template: o.imagegallery,
            events: {
                "click .btn-close": "closeGallery"
            },
            initialize: function(t) {
                r.bindAll(this), r.extend(this, t), r.extend(this, i.Events), this.imagesLoaded = 0, this.preloadImages()
            },
            closeGallery: function() {
                this.trigger("closed"), this.$(".image-gallery").slick("unslick"), this.removeEl(), s.omni("Help")
            },
            addListeners: function() {
                return this
            },
            resizeImages: function() {
                this.$images.each(function(t, e) {
                    $(e).containify()
                })
            },
            removeListeners: function() {},
            preloadImages: function() {
                for (var t = 0, e = this.images.length; e > t; t++) {
                    var n = new Image;
                    n.onload = this.onImageLoad, n.src = this.images[t].src
                }
            },
            slideChange: function(t, e, n) {
                s.omni(this.galleryName, "Photo " + (n + 1), {
                    prop3: "Gallery"
                })
            },
            initCarousel: function() {
                var t = this.$(".image-gallery");
                return t.slick({
                    dots: !0,
                    slidesToShow: 1,
                    prevArrow: o.arrow.render({
                        buttonClass: "slick-prev",
                        polygonPoints: "15,0 15,20, 0 10"
                    }),
                    nextArrow: o.arrow.render({
                        buttonClass: "slick-next",
                        polygonPoints: "0,0 0,20, 15 10"
                    })
                }), this.$images = this.$(".image-item img"), t.on("setPosition", this.resizeImages), t.on("afterChange", this.slideChange), this.resizeImages(), this.images.length > 1 ? s.omni(this.galleryName, "Photo 1", this.track) : s.omni(this.galleryName, void 0, this.track), this
            },
            onImageLoad: function() {
                this.imagesLoaded++, this.imagesLoaded === this.images.length && (this.initCarousel(), this.trigger("loaded"))
            },
            removeEl: function() {
                this.removeListeners(), this.unbind(), this.remove()
            },
            render: function() {
                return this.$el.html(this.template.render({
                    images: this.images
                })), this
            }
        });
        e.exports = u
    }, {
        "../templates": 3,
        "../track": 5,
        backbone: 9,
        lodash: 16
    }],
    9: [function(t, e, n) {
        (function(e) {
            ! function(r) {
                var i = "object" == typeof self && self.self == self && self || "object" == typeof e && e.global == e && e;
                if ("function" == typeof define && define.amd) define(["underscore", "jquery", "exports"], function(t, e, n) {
                    i.Backbone = r(i, n, t, e)
                });
                else if ("undefined" != typeof n) {
                    var o, a = t("underscore");
                    try {
                        o = t("jquery")
                    } catch (s) {}
                    r(i, n, a, o)
                } else i.Backbone = r(i, {}, i._, i.jQuery || i.Zepto || i.ender || i.$)
            }(function(t, e, n, r) {
                var i = t.Backbone,
                    o = Array.prototype.slice;
                e.VERSION = "1.2.3", e.$ = r, e.noConflict = function() {
                    return t.Backbone = i, this
                }, e.emulateHTTP = !1, e.emulateJSON = !1;
                var a = function(t, e, r) {
                        switch (t) {
                            case 1:
                                return function() {
                                    return n[e](this[r])
                                };
                            case 2:
                                return function(t) {
                                    return n[e](this[r], t)
                                };
                            case 3:
                                return function(t, i) {
                                    return n[e](this[r], u(t, this), i)
                                };
                            case 4:
                                return function(t, i, o) {
                                    return n[e](this[r], u(t, this), i, o)
                                };
                            default:
                                return function() {
                                    var t = o.call(arguments);
                                    return t.unshift(this[r]), n[e].apply(n, t)
                                }
                        }
                    },
                    s = function(t, e, r) {
                        n.each(e, function(e, i) {
                            n[i] && (t.prototype[i] = a(e, i, r))
                        })
                    },
                    u = function(t, e) {
                        return n.isFunction(t) ? t : n.isObject(t) && !e._isModel(t) ? c(t) : n.isString(t) ? function(e) {
                            return e.get(t)
                        } : t
                    },
                    c = function(t) {
                        var e = n.matches(t);
                        return function(t) {
                            return e(t.attributes)
                        }
                    },
                    l = e.Events = {},
                    f = /\s+/,
                    p = function(t, e, r, i, o) {
                        var a, s = 0;
                        if (r && "object" == typeof r) {
                            void 0 !== i && "context" in o && void 0 === o.context && (o.context = i);
                            for (a = n.keys(r); s < a.length; s++) e = p(t, e, a[s], r[a[s]], o)
                        } else if (r && f.test(r))
                            for (a = r.split(f); s < a.length; s++) e = t(e, a[s], i, o);
                        else e = t(e, r, i, o);
                        return e
                    };
                l.on = function(t, e, n) {
                    return h(this, t, e, n)
                };
                var h = function(t, e, n, r, i) {
                    if (t._events = p(d, t._events || {}, e, n, {
                            context: r,
                            ctx: t,
                            listening: i
                        }), i) {
                        var o = t._listeners || (t._listeners = {});
                        o[i.id] = i
                    }
                    return t
                };
                l.listenTo = function(t, e, r) {
                    if (!t) return this;
                    var i = t._listenId || (t._listenId = n.uniqueId("l")),
                        o = this._listeningTo || (this._listeningTo = {}),
                        a = o[i];
                    if (!a) {
                        var s = this._listenId || (this._listenId = n.uniqueId("l"));
                        a = o[i] = {
                            obj: t,
                            objId: i,
                            id: s,
                            listeningTo: o,
                            count: 0
                        }
                    }
                    return h(t, e, r, this, a), this
                };
                var d = function(t, e, n, r) {
                    if (n) {
                        var i = t[e] || (t[e] = []),
                            o = r.context,
                            a = r.ctx,
                            s = r.listening;
                        s && s.count++, i.push({
                            callback: n,
                            context: o,
                            ctx: o || a,
                            listening: s
                        })
                    }
                    return t
                };
                l.off = function(t, e, n) {
                    return this._events ? (this._events = p(g, this._events, t, e, {
                        context: n,
                        listeners: this._listeners
                    }), this) : this
                }, l.stopListening = function(t, e, r) {
                    var i = this._listeningTo;
                    if (!i) return this;
                    for (var o = t ? [t._listenId] : n.keys(i), a = 0; a < o.length; a++) {
                        var s = i[o[a]];
                        if (!s) break;
                        s.obj.off(e, r, this)
                    }
                    return n.isEmpty(i) && (this._listeningTo = void 0), this
                };
                var g = function(t, e, r, i) {
                    if (t) {
                        var o, a = 0,
                            s = i.context,
                            u = i.listeners;
                        if (e || r || s) {
                            for (var c = e ? [e] : n.keys(t); a < c.length; a++) {
                                e = c[a];
                                var l = t[e];
                                if (!l) break;
                                for (var f = [], p = 0; p < l.length; p++) {
                                    var h = l[p];
                                    r && r !== h.callback && r !== h.callback._callback || s && s !== h.context ? f.push(h) : (o = h.listening, o && 0 === --o.count && (delete u[o.id], delete o.listeningTo[o.objId]))
                                }
                                f.length ? t[e] = f : delete t[e]
                            }
                            return n.size(t) ? t : void 0
                        }
                        for (var d = n.keys(u); a < d.length; a++) o = u[d[a]], delete u[o.id], delete o.listeningTo[o.objId]
                    }
                };
                l.once = function(t, e, r) {
                    var i = p(v, {}, t, e, n.bind(this.off, this));
                    return this.on(i, void 0, r)
                }, l.listenToOnce = function(t, e, r) {
                    var i = p(v, {}, e, r, n.bind(this.stopListening, this, t));
                    return this.listenTo(t, i)
                };
                var v = function(t, e, r, i) {
                    if (r) {
                        var o = t[e] = n.once(function() {
                            i(e, o), r.apply(this, arguments)
                        });
                        o._callback = r
                    }
                    return t
                };
                l.trigger = function(t) {
                    if (!this._events) return this;
                    for (var e = Math.max(0, arguments.length - 1), n = Array(e), r = 0; e > r; r++) n[r] = arguments[r + 1];
                    return p(y, this._events, t, void 0, n), this
                };
                var y = function(t, e, n, r) {
                        if (t) {
                            var i = t[e],
                                o = t.all;
                            i && o && (o = o.slice()), i && m(i, r), o && m(o, [e].concat(r))
                        }
                        return t
                    },
                    m = function(t, e) {
                        var n, r = -1,
                            i = t.length,
                            o = e[0],
                            a = e[1],
                            s = e[2];
                        switch (e.length) {
                            case 0:
                                for (; ++r < i;)(n = t[r]).callback.call(n.ctx);
                                return;
                            case 1:
                                for (; ++r < i;)(n = t[r]).callback.call(n.ctx, o);
                                return;
                            case 2:
                                for (; ++r < i;)(n = t[r]).callback.call(n.ctx, o, a);
                                return;
                            case 3:
                                for (; ++r < i;)(n = t[r]).callback.call(n.ctx, o, a, s);
                                return;
                            default:
                                for (; ++r < i;)(n = t[r]).callback.apply(n.ctx, e);
                                return
                        }
                    };
                l.bind = l.on, l.unbind = l.off, n.extend(e, l);
                var b = e.Model = function(t, e) {
                    var r = t || {};
                    e || (e = {}), this.cid = n.uniqueId(this.cidPrefix), this.attributes = {}, e.collection && (this.collection = e.collection), e.parse && (r = this.parse(r, e) || {}), r = n.defaults({}, r, n.result(this, "defaults")), this.set(r, e), this.changed = {}, this.initialize.apply(this, arguments)
                };
                n.extend(b.prototype, l, {
                    changed: null,
                    validationError: null,
                    idAttribute: "id",
                    cidPrefix: "c",
                    initialize: function() {},
                    toJSON: function(t) {
                        return n.clone(this.attributes)
                    },
                    sync: function() {
                        return e.sync.apply(this, arguments)
                    },
                    get: function(t) {
                        return this.attributes[t]
                    },
                    escape: function(t) {
                        return n.escape(this.get(t))
                    },
                    has: function(t) {
                        return null != this.get(t)
                    },
                    matches: function(t) {
                        return !!n.iteratee(t, this)(this.attributes)
                    },
                    set: function(t, e, r) {
                        if (null == t) return this;
                        var i;
                        if ("object" == typeof t ? (i = t, r = e) : (i = {})[t] = e, r || (r = {}), !this._validate(i, r)) return !1;
                        var o = r.unset,
                            a = r.silent,
                            s = [],
                            u = this._changing;
                        this._changing = !0, u || (this._previousAttributes = n.clone(this.attributes), this.changed = {});
                        var c = this.attributes,
                            l = this.changed,
                            f = this._previousAttributes;
                        for (var p in i) e = i[p], n.isEqual(c[p], e) || s.push(p), n.isEqual(f[p], e) ? delete l[p] : l[p] = e, o ? delete c[p] : c[p] = e;
                        if (this.id = this.get(this.idAttribute), !a) {
                            s.length && (this._pending = r);
                            for (var h = 0; h < s.length; h++) this.trigger("change:" + s[h], this, c[s[h]], r)
                        }
                        if (u) return this;
                        if (!a)
                            for (; this._pending;) r = this._pending, this._pending = !1, this.trigger("change", this, r);
                        return this._pending = !1, this._changing = !1, this
                    },
                    unset: function(t, e) {
                        return this.set(t, void 0, n.extend({}, e, {
                            unset: !0
                        }))
                    },
                    clear: function(t) {
                        var e = {};
                        for (var r in this.attributes) e[r] = void 0;
                        return this.set(e, n.extend({}, t, {
                            unset: !0
                        }))
                    },
                    hasChanged: function(t) {
                        return null == t ? !n.isEmpty(this.changed) : n.has(this.changed, t)
                    },
                    changedAttributes: function(t) {
                        if (!t) return this.hasChanged() ? n.clone(this.changed) : !1;
                        var e = this._changing ? this._previousAttributes : this.attributes,
                            r = {};
                        for (var i in t) {
                            var o = t[i];
                            n.isEqual(e[i], o) || (r[i] = o)
                        }
                        return n.size(r) ? r : !1
                    },
                    previous: function(t) {
                        return null != t && this._previousAttributes ? this._previousAttributes[t] : null
                    },
                    previousAttributes: function() {
                        return n.clone(this._previousAttributes)
                    },
                    fetch: function(t) {
                        t = n.extend({
                            parse: !0
                        }, t);
                        var e = this,
                            r = t.success;
                        return t.success = function(n) {
                            var i = t.parse ? e.parse(n, t) : n;
                            return e.set(i, t) ? (r && r.call(t.context, e, n, t), void e.trigger("sync", e, n, t)) : !1
                        }, F(this, t), this.sync("read", this, t)
                    },
                    save: function(t, e, r) {
                        var i;
                        null == t || "object" == typeof t ? (i = t, r = e) : (i = {})[t] = e, r = n.extend({
                            validate: !0,
                            parse: !0
                        }, r);
                        var o = r.wait;
                        if (i && !o) {
                            if (!this.set(i, r)) return !1
                        } else if (!this._validate(i, r)) return !1;
                        var a = this,
                            s = r.success,
                            u = this.attributes;
                        r.success = function(t) {
                            a.attributes = u;
                            var e = r.parse ? a.parse(t, r) : t;
                            return o && (e = n.extend({}, i, e)), e && !a.set(e, r) ? !1 : (s && s.call(r.context, a, t, r), void a.trigger("sync", a, t, r))
                        }, F(this, r), i && o && (this.attributes = n.extend({}, u, i));
                        var c = this.isNew() ? "create" : r.patch ? "patch" : "update";
                        "patch" !== c || r.attrs || (r.attrs = i);
                        var l = this.sync(c, this, r);
                        return this.attributes = u, l
                    },
                    destroy: function(t) {
                        t = t ? n.clone(t) : {};
                        var e = this,
                            r = t.success,
                            i = t.wait,
                            o = function() {
                                e.stopListening(), e.trigger("destroy", e, e.collection, t)
                            };
                        t.success = function(n) {
                            i && o(), r && r.call(t.context, e, n, t), e.isNew() || e.trigger("sync", e, n, t)
                        };
                        var a = !1;
                        return this.isNew() ? n.defer(t.success) : (F(this, t), a = this.sync("delete", this, t)), i || o(), a
                    },
                    url: function() {
                        var t = n.result(this, "urlRoot") || n.result(this.collection, "url") || M();
                        if (this.isNew()) return t;
                        var e = this.get(this.idAttribute);
                        return t.replace(/[^\/]$/, "$&/") + encodeURIComponent(e)
                    },
                    parse: function(t, e) {
                        return t
                    },
                    clone: function() {
                        return new this.constructor(this.attributes)
                    },
                    isNew: function() {
                        return !this.has(this.idAttribute)
                    },
                    isValid: function(t) {
                        return this._validate({}, n.defaults({
                            validate: !0
                        }, t))
                    },
                    _validate: function(t, e) {
                        if (!e.validate || !this.validate) return !0;
                        t = n.extend({}, this.attributes, t);
                        var r = this.validationError = this.validate(t, e) || null;
                        return r ? (this.trigger("invalid", this, r, n.extend(e, {
                            validationError: r
                        })), !1) : !0
                    }
                });
                var x = {
                    keys: 1,
                    values: 1,
                    pairs: 1,
                    invert: 1,
                    pick: 0,
                    omit: 0,
                    chain: 1,
                    isEmpty: 1
                };
                s(b, x, "attributes");
                var w = e.Collection = function(t, e) {
                        e || (e = {}), e.model && (this.model = e.model), void 0 !== e.comparator && (this.comparator = e.comparator), this._reset(), this.initialize.apply(this, arguments), t && this.reset(t, n.extend({
                            silent: !0
                        }, e))
                    },
                    _ = {
                        add: !0,
                        remove: !0,
                        merge: !0
                    },
                    k = {
                        add: !0,
                        remove: !1
                    },
                    T = function(t, e, n) {
                        n = Math.min(Math.max(n, 0), t.length);
                        for (var r = Array(t.length - n), i = e.length, o = 0; o < r.length; o++) r[o] = t[o + n];
                        for (o = 0; i > o; o++) t[o + n] = e[o];
                        for (o = 0; o < r.length; o++) t[o + i + n] = r[o]
                    };
                n.extend(w.prototype, l, {
                    model: b,
                    initialize: function() {},
                    toJSON: function(t) {
                        return this.map(function(e) {
                            return e.toJSON(t)
                        })
                    },
                    sync: function() {
                        return e.sync.apply(this, arguments)
                    },
                    add: function(t, e) {
                        return this.set(t, n.extend({
                            merge: !1
                        }, e, k))
                    },
                    remove: function(t, e) {
                        e = n.extend({}, e);
                        var r = !n.isArray(t);
                        t = r ? [t] : n.clone(t);
                        var i = this._removeModels(t, e);
                        return !e.silent && i && this.trigger("update", this, e), r ? i[0] : i
                    },
                    set: function(t, e) {
                        if (null != t) {
                            e = n.defaults({}, e, _), e.parse && !this._isModel(t) && (t = this.parse(t, e));
                            var r = !n.isArray(t);
                            t = r ? [t] : t.slice();
                            var i = e.at;
                            null != i && (i = +i), 0 > i && (i += this.length + 1);
                            for (var o, a = [], s = [], u = [], c = {}, l = e.add, f = e.merge, p = e.remove, h = !1, d = this.comparator && null == i && e.sort !== !1, g = n.isString(this.comparator) ? this.comparator : null, v = 0; v < t.length; v++) {
                                o = t[v];
                                var y = this.get(o);
                                if (y) {
                                    if (f && o !== y) {
                                        var m = this._isModel(o) ? o.attributes : o;
                                        e.parse && (m = y.parse(m, e)), y.set(m, e), d && !h && (h = y.hasChanged(g))
                                    }
                                    c[y.cid] || (c[y.cid] = !0, a.push(y)), t[v] = y
                                } else l && (o = t[v] = this._prepareModel(o, e), o && (s.push(o), this._addReference(o, e), c[o.cid] = !0, a.push(o)))
                            }
                            if (p) {
                                for (v = 0; v < this.length; v++) o = this.models[v], c[o.cid] || u.push(o);
                                u.length && this._removeModels(u, e)
                            }
                            var b = !1,
                                x = !d && l && p;
                            if (a.length && x ? (b = this.length != a.length || n.some(this.models, function(t, e) {
                                    return t !== a[e]
                                }), this.models.length = 0, T(this.models, a, 0), this.length = this.models.length) : s.length && (d && (h = !0), T(this.models, s, null == i ? this.length : i), this.length = this.models.length), h && this.sort({
                                    silent: !0
                                }), !e.silent) {
                                for (v = 0; v < s.length; v++) null != i && (e.index = i + v), o = s[v], o.trigger("add", o, this, e);
                                (h || b) && this.trigger("sort", this, e), (s.length || u.length) && this.trigger("update", this, e)
                            }
                            return r ? t[0] : t
                        }
                    },
                    reset: function(t, e) {
                        e = e ? n.clone(e) : {};
                        for (var r = 0; r < this.models.length; r++) this._removeReference(this.models[r], e);
                        return e.previousModels = this.models, this._reset(), t = this.add(t, n.extend({
                            silent: !0
                        }, e)), e.silent || this.trigger("reset", this, e), t
                    },
                    push: function(t, e) {
                        return this.add(t, n.extend({
                            at: this.length
                        }, e))
                    },
                    pop: function(t) {
                        var e = this.at(this.length - 1);
                        return this.remove(e, t)
                    },
                    unshift: function(t, e) {
                        return this.add(t, n.extend({
                            at: 0
                        }, e))
                    },
                    shift: function(t) {
                        var e = this.at(0);
                        return this.remove(e, t)
                    },
                    slice: function() {
                        return o.apply(this.models, arguments)
                    },
                    get: function(t) {
                        if (null == t) return void 0;
                        var e = this.modelId(this._isModel(t) ? t.attributes : t);
                        return this._byId[t] || this._byId[e] || this._byId[t.cid]
                    },
                    at: function(t) {
                        return 0 > t && (t += this.length), this.models[t]
                    },
                    where: function(t, e) {
                        return this[e ? "find" : "filter"](t)
                    },
                    findWhere: function(t) {
                        return this.where(t, !0)
                    },
                    sort: function(t) {
                        var e = this.comparator;
                        if (!e) throw new Error("Cannot sort a set without a comparator");
                        t || (t = {});
                        var r = e.length;
                        return n.isFunction(e) && (e = n.bind(e, this)), 1 === r || n.isString(e) ? this.models = this.sortBy(e) : this.models.sort(e), t.silent || this.trigger("sort", this, t), this
                    },
                    pluck: function(t) {
                        return n.invoke(this.models, "get", t)
                    },
                    fetch: function(t) {
                        t = n.extend({
                            parse: !0
                        }, t);
                        var e = t.success,
                            r = this;
                        return t.success = function(n) {
                            var i = t.reset ? "reset" : "set";
                            r[i](n, t), e && e.call(t.context, r, n, t), r.trigger("sync", r, n, t)
                        }, F(this, t), this.sync("read", this, t)
                    },
                    create: function(t, e) {
                        e = e ? n.clone(e) : {};
                        var r = e.wait;
                        if (t = this._prepareModel(t, e), !t) return !1;
                        r || this.add(t, e);
                        var i = this,
                            o = e.success;
                        return e.success = function(t, e, n) {
                            r && i.add(t, n), o && o.call(n.context, t, e, n)
                        }, t.save(null, e), t
                    },
                    parse: function(t, e) {
                        return t
                    },
                    clone: function() {
                        return new this.constructor(this.models, {
                            model: this.model,
                            comparator: this.comparator
                        })
                    },
                    modelId: function(t) {
                        return t[this.model.prototype.idAttribute || "id"]
                    },
                    _reset: function() {
                        this.length = 0, this.models = [], this._byId = {}
                    },
                    _prepareModel: function(t, e) {
                        if (this._isModel(t)) return t.collection || (t.collection = this), t;
                        e = e ? n.clone(e) : {}, e.collection = this;
                        var r = new this.model(t, e);
                        return r.validationError ? (this.trigger("invalid", this, r.validationError, e), !1) : r
                    },
                    _removeModels: function(t, e) {
                        for (var n = [], r = 0; r < t.length; r++) {
                            var i = this.get(t[r]);
                            if (i) {
                                var o = this.indexOf(i);
                                this.models.splice(o, 1), this.length--, e.silent || (e.index = o, i.trigger("remove", i, this, e)), n.push(i), this._removeReference(i, e)
                            }
                        }
                        return n.length ? n : !1
                    },
                    _isModel: function(t) {
                        return t instanceof b
                    },
                    _addReference: function(t, e) {
                        this._byId[t.cid] = t;
                        var n = this.modelId(t.attributes);
                        null != n && (this._byId[n] = t), t.on("all", this._onModelEvent, this)
                    },
                    _removeReference: function(t, e) {
                        delete this._byId[t.cid];
                        var n = this.modelId(t.attributes);
                        null != n && delete this._byId[n], this === t.collection && delete t.collection, t.off("all", this._onModelEvent, this)
                    },
                    _onModelEvent: function(t, e, n, r) {
                        if ("add" !== t && "remove" !== t || n === this) {
                            if ("destroy" === t && this.remove(e, r), "change" === t) {
                                var i = this.modelId(e.previousAttributes()),
                                    o = this.modelId(e.attributes);
                                i !== o && (null != i && delete this._byId[i], null != o && (this._byId[o] = e))
                            }
                            this.trigger.apply(this, arguments)
                        }
                    }
                });
                var E = {
                    forEach: 3,
                    each: 3,
                    map: 3,
                    collect: 3,
                    reduce: 4,
                    foldl: 4,
                    inject: 4,
                    reduceRight: 4,
                    foldr: 4,
                    find: 3,
                    detect: 3,
                    filter: 3,
                    select: 3,
                    reject: 3,
                    every: 3,
                    all: 3,
                    some: 3,
                    any: 3,
                    include: 3,
                    includes: 3,
                    contains: 3,
                    invoke: 0,
                    max: 3,
                    min: 3,
                    toArray: 1,
                    size: 1,
                    first: 3,
                    head: 3,
                    take: 3,
                    initial: 3,
                    rest: 3,
                    tail: 3,
                    drop: 3,
                    last: 3,
                    without: 0,
                    difference: 0,
                    indexOf: 3,
                    shuffle: 1,
                    lastIndexOf: 3,
                    isEmpty: 1,
                    chain: 1,
                    sample: 3,
                    partition: 3,
                    groupBy: 3,
                    countBy: 3,
                    sortBy: 3,
                    indexBy: 3
                };
                s(w, E, "models");
                var j = e.View = function(t) {
                        this.cid = n.uniqueId("view"), n.extend(this, n.pick(t, S)), this._ensureElement(), this.initialize.apply(this, arguments)
                    },
                    C = /^(\S+)\s*(.*)$/,
                    S = ["model", "collection", "el", "id", "attributes", "className", "tagName", "events"];
                n.extend(j.prototype, l, {
                    tagName: "div",
                    $: function(t) {
                        return this.$el.find(t)
                    },
                    initialize: function() {},
                    render: function() {
                        return this
                    },
                    remove: function() {
                        return this._removeElement(), this.stopListening(), this
                    },
                    _removeElement: function() {
                        this.$el.remove()
                    },
                    setElement: function(t) {
                        return this.undelegateEvents(), this._setElement(t), this.delegateEvents(), this
                    },
                    _setElement: function(t) {
                        this.$el = t instanceof e.$ ? t : e.$(t), this.el = this.$el[0]
                    },
                    delegateEvents: function(t) {
                        if (t || (t = n.result(this, "events")), !t) return this;
                        this.undelegateEvents();
                        for (var e in t) {
                            var r = t[e];
                            if (n.isFunction(r) || (r = this[r]), r) {
                                var i = e.match(C);
                                this.delegate(i[1], i[2], n.bind(r, this))
                            }
                        }
                        return this
                    },
                    delegate: function(t, e, n) {
                        return this.$el.on(t + ".delegateEvents" + this.cid, e, n), this
                    },
                    undelegateEvents: function() {
                        return this.$el && this.$el.off(".delegateEvents" + this.cid), this
                    },
                    undelegate: function(t, e, n) {
                        return this.$el.off(t + ".delegateEvents" + this.cid, e, n), this
                    },
                    _createElement: function(t) {
                        return document.createElement(t)
                    },
                    _ensureElement: function() {
                        if (this.el) this.setElement(n.result(this, "el"));
                        else {
                            var t = n.extend({}, n.result(this, "attributes"));
                            this.id && (t.id = n.result(this, "id")), this.className && (t["class"] = n.result(this, "className")), this.setElement(this._createElement(n.result(this, "tagName"))), this._setAttributes(t)
                        }
                    },
                    _setAttributes: function(t) {
                        this.$el.attr(t)
                    }
                }), e.sync = function(t, r, i) {
                    var o = A[t];
                    n.defaults(i || (i = {}), {
                        emulateHTTP: e.emulateHTTP,
                        emulateJSON: e.emulateJSON
                    });
                    var a = {
                        type: o,
                        dataType: "json"
                    };
                    if (i.url || (a.url = n.result(r, "url") || M()), null != i.data || !r || "create" !== t && "update" !== t && "patch" !== t || (a.contentType = "application/json", a.data = JSON.stringify(i.attrs || r.toJSON(i))), i.emulateJSON && (a.contentType = "application/x-www-form-urlencoded", a.data = a.data ? {
                            model: a.data
                        } : {}), i.emulateHTTP && ("PUT" === o || "DELETE" === o || "PATCH" === o)) {
                        a.type = "POST", i.emulateJSON && (a.data._method = o);
                        var s = i.beforeSend;
                        i.beforeSend = function(t) {
                            return t.setRequestHeader("X-HTTP-Method-Override", o), s ? s.apply(this, arguments) : void 0
                        }
                    }
                    "GET" === a.type || i.emulateJSON || (a.processData = !1);
                    var u = i.error;
                    i.error = function(t, e, n) {
                        i.textStatus = e, i.errorThrown = n, u && u.call(i.context, t, e, n)
                    };
                    var c = i.xhr = e.ajax(n.extend(a, i));
                    return r.trigger("request", r, c, i), c
                };
                var A = {
                    create: "POST",
                    update: "PUT",
                    patch: "PATCH",
                    "delete": "DELETE",
                    read: "GET"
                };
                e.ajax = function() {
                    return e.$.ajax.apply(e.$, arguments)
                };
                var N = e.Router = function(t) {
                        t || (t = {}), t.routes && (this.routes = t.routes), this._bindRoutes(), this.initialize.apply(this, arguments)
                    },
                    R = /\((.*?)\)/g,
                    I = /(\(\?)?:\w+/g,
                    O = /\*\w+/g,
                    L = /[\-{}\[\]+?.,\\\^$|#\s]/g;
                n.extend(N.prototype, l, {
                    initialize: function() {},
                    route: function(t, r, i) {
                        n.isRegExp(t) || (t = this._routeToRegExp(t)), n.isFunction(r) && (i = r, r = ""), i || (i = this[r]);
                        var o = this;
                        return e.history.route(t, function(n) {
                            var a = o._extractParameters(t, n);
                            o.execute(i, a, r) !== !1 && (o.trigger.apply(o, ["route:" + r].concat(a)), o.trigger("route", r, a), e.history.trigger("route", o, r, a))
                        }), this
                    },
                    execute: function(t, e, n) {
                        t && t.apply(this, e)
                    },
                    navigate: function(t, n) {
                        return e.history.navigate(t, n), this
                    },
                    _bindRoutes: function() {
                        if (this.routes) {
                            this.routes = n.result(this, "routes");
                            for (var t, e = n.keys(this.routes); null != (t = e.pop());) this.route(t, this.routes[t])
                        }
                    },
                    _routeToRegExp: function(t) {
                        return t = t.replace(L, "\\$&").replace(R, "(?:$1)?").replace(I, function(t, e) {
                            return e ? t : "([^/?]+)"
                        }).replace(O, "([^?]*?)"), new RegExp("^" + t + "(?:\\?([\\s\\S]*))?$")
                    },
                    _extractParameters: function(t, e) {
                        var r = t.exec(e).slice(1);
                        return n.map(r, function(t, e) {
                            return e === r.length - 1 ? t || null : t ? decodeURIComponent(t) : null
                        })
                    }
                });
                var D = e.History = function() {
                        this.handlers = [], this.checkUrl = n.bind(this.checkUrl, this), "undefined" != typeof window && (this.location = window.location, this.history = window.history)
                    },
                    P = /^[#\/]|\s+$/g,
                    $ = /^\/+|\/+$/g,
                    q = /#.*$/;
                D.started = !1, n.extend(D.prototype, l, {
                    interval: 50,
                    atRoot: function() {
                        var t = this.location.pathname.replace(/[^\/]$/, "$&/");
                        return t === this.root && !this.getSearch()
                    },
                    matchRoot: function() {
                        var t = this.decodeFragment(this.location.pathname),
                            e = t.slice(0, this.root.length - 1) + "/";
                        return e === this.root
                    },
                    decodeFragment: function(t) {
                        return decodeURI(t.replace(/%25/g, "%2525"))
                    },
                    getSearch: function() {
                        var t = this.location.href.replace(/#.*/, "").match(/\?.+/);
                        return t ? t[0] : ""
                    },
                    getHash: function(t) {
                        var e = (t || this).location.href.match(/#(.*)$/);
                        return e ? e[1] : ""
                    },
                    getPath: function() {
                        var t = this.decodeFragment(this.location.pathname + this.getSearch()).slice(this.root.length - 1);
                        return "/" === t.charAt(0) ? t.slice(1) : t
                    },
                    getFragment: function(t) {
                        return null == t && (t = this._usePushState || !this._wantsHashChange ? this.getPath() : this.getHash()), t.replace(P, "")
                    },
                    start: function(t) {
                        if (D.started) throw new Error("Backbone.history has already been started");
                        if (D.started = !0, this.options = n.extend({
                                root: "/"
                            }, this.options, t), this.root = this.options.root, this._wantsHashChange = this.options.hashChange !== !1, this._hasHashChange = "onhashchange" in window && (void 0 === document.documentMode || document.documentMode > 7), this._useHashChange = this._wantsHashChange && this._hasHashChange, this._wantsPushState = !!this.options.pushState, this._hasPushState = !(!this.history || !this.history.pushState), this._usePushState = this._wantsPushState && this._hasPushState, this.fragment = this.getFragment(), this.root = ("/" + this.root + "/").replace($, "/"), this._wantsHashChange && this._wantsPushState) {
                            if (!this._hasPushState && !this.atRoot()) {
                                var e = this.root.slice(0, -1) || "/";
                                return this.location.replace(e + "#" + this.getPath()), !0
                            }
                            this._hasPushState && this.atRoot() && this.navigate(this.getHash(), {
                                replace: !0
                            })
                        }
                        if (!this._hasHashChange && this._wantsHashChange && !this._usePushState) {
                            this.iframe = document.createElement("iframe"), this.iframe.src = "javascript:0", this.iframe.style.display = "none", this.iframe.tabIndex = -1;
                            var r = document.body,
                                i = r.insertBefore(this.iframe, r.firstChild).contentWindow;
                            i.document.open(), i.document.close(), i.location.hash = "#" + this.fragment
                        }
                        var o = window.addEventListener || function(t, e) {
                            return attachEvent("on" + t, e)
                        };
                        return this._usePushState ? o("popstate", this.checkUrl, !1) : this._useHashChange && !this.iframe ? o("hashchange", this.checkUrl, !1) : this._wantsHashChange && (this._checkUrlInterval = setInterval(this.checkUrl, this.interval)), this.options.silent ? void 0 : this.loadUrl()
                    },
                    stop: function() {
                        var t = window.removeEventListener || function(t, e) {
                            return detachEvent("on" + t, e)
                        };
                        this._usePushState ? t("popstate", this.checkUrl, !1) : this._useHashChange && !this.iframe && t("hashchange", this.checkUrl, !1), this.iframe && (document.body.removeChild(this.iframe), this.iframe = null), this._checkUrlInterval && clearInterval(this._checkUrlInterval), D.started = !1
                    },
                    route: function(t, e) {
                        this.handlers.unshift({
                            route: t,
                            callback: e
                        })
                    },
                    checkUrl: function(t) {
                        var e = this.getFragment();
                        return e === this.fragment && this.iframe && (e = this.getHash(this.iframe.contentWindow)), e === this.fragment ? !1 : (this.iframe && this.navigate(e), void this.loadUrl())
                    },
                    loadUrl: function(t) {
                        return this.matchRoot() ? (t = this.fragment = this.getFragment(t), n.some(this.handlers, function(e) {
                            return e.route.test(t) ? (e.callback(t), !0) : void 0
                        })) : !1
                    },
                    navigate: function(t, e) {
                        if (!D.started) return !1;
                        e && e !== !0 || (e = {
                            trigger: !!e
                        }), t = this.getFragment(t || "");
                        var n = this.root;
                        ("" === t || "?" === t.charAt(0)) && (n = n.slice(0, -1) || "/");
                        var r = n + t;
                        if (t = this.decodeFragment(t.replace(q, "")), this.fragment !== t) {
                            if (this.fragment = t, this._usePushState) this.history[e.replace ? "replaceState" : "pushState"]({}, document.title, r);
                            else {
                                if (!this._wantsHashChange) return this.location.assign(r);
                                if (this._updateHash(this.location, t, e.replace), this.iframe && t !== this.getHash(this.iframe.contentWindow)) {
                                    var i = this.iframe.contentWindow;
                                    e.replace || (i.document.open(), i.document.close()), this._updateHash(i.location, t, e.replace)
                                }
                            }
                            return e.trigger ? this.loadUrl(t) : void 0
                        }
                    },
                    _updateHash: function(t, e, n) {
                        if (n) {
                            var r = t.href.replace(/(javascript:|#).*$/, "");
                            t.replace(r + "#" + e)
                        } else t.hash = "#" + e
                    }
                }), e.history = new D;
                var H = function(t, e) {
                    var r, i = this;
                    r = t && n.has(t, "constructor") ? t.constructor : function() {
                        return i.apply(this, arguments)
                    }, n.extend(r, i, e);
                    var o = function() {
                        this.constructor = r
                    };
                    return o.prototype = i.prototype, r.prototype = new o, t && n.extend(r.prototype, t), r.__super__ = i.prototype, r
                };
                b.extend = w.extend = N.extend = j.extend = D.extend = H;
                var M = function() {
                        throw new Error('A "url" property or function must be specified')
                    },
                    F = function(t, e) {
                        var n = e.error;
                        e.error = function(r) {
                            n && n.call(e.context, t, r, e), t.trigger("error", t, r, e)
                        }
                    };
                return e
            })
        }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {
        jquery: 15,
        underscore: 10
    }],
    10: [function(t, e, n) {
        (function() {
            function t(t) {
                function e(e, n, r, i, o, a) {
                    for (; o >= 0 && a > o; o += t) {
                        var s = i ? i[o] : o;
                        r = n(r, e[s], s, e)
                    }
                    return r
                }
                return function(n, r, i, o) {
                    r = w(r, o, 4);
                    var a = !S(n) && x.keys(n),
                        s = (a || n).length,
                        u = t > 0 ? 0 : s - 1;
                    return arguments.length < 3 && (i = n[a ? a[u] : u], u += t), e(n, r, i, a, u, s)
                }
            }

            function r(t) {
                return function(e, n, r) {
                    n = _(n, r);
                    for (var i = C(e), o = t > 0 ? 0 : i - 1; o >= 0 && i > o; o += t)
                        if (n(e[o], o, e)) return o;
                    return -1
                }
            }

            function i(t, e, n) {
                return function(r, i, o) {
                    var a = 0,
                        s = C(r);
                    if ("number" == typeof o) t > 0 ? a = o >= 0 ? o : Math.max(o + s, a) : s = o >= 0 ? Math.min(o + 1, s) : o + s + 1;
                    else if (n && o && s) return o = n(r, i), r[o] === i ? o : -1;
                    if (i !== i) return o = e(p.call(r, a, s), x.isNaN), o >= 0 ? o + a : -1;
                    for (o = t > 0 ? a : s - 1; o >= 0 && s > o; o += t)
                        if (r[o] === i) return o;
                    return -1
                }
            }

            function o(t, e) {
                var n = O.length,
                    r = t.constructor,
                    i = x.isFunction(r) && r.prototype || c,
                    o = "constructor";
                for (x.has(t, o) && !x.contains(e, o) && e.push(o); n--;) o = O[n], o in t && t[o] !== i[o] && !x.contains(e, o) && e.push(o)
            }
            var a = this,
                s = a._,
                u = Array.prototype,
                c = Object.prototype,
                l = Function.prototype,
                f = u.push,
                p = u.slice,
                h = c.toString,
                d = c.hasOwnProperty,
                g = Array.isArray,
                v = Object.keys,
                y = l.bind,
                m = Object.create,
                b = function() {},
                x = function(t) {
                    return t instanceof x ? t : this instanceof x ? void(this._wrapped = t) : new x(t)
                };
            "undefined" != typeof n ? ("undefined" != typeof e && e.exports && (n = e.exports = x), n._ = x) : a._ = x, x.VERSION = "1.8.3";
            var w = function(t, e, n) {
                    if (void 0 === e) return t;
                    switch (null == n ? 3 : n) {
                        case 1:
                            return function(n) {
                                return t.call(e, n)
                            };
                        case 2:
                            return function(n, r) {
                                return t.call(e, n, r)
                            };
                        case 3:
                            return function(n, r, i) {
                                return t.call(e, n, r, i)
                            };
                        case 4:
                            return function(n, r, i, o) {
                                return t.call(e, n, r, i, o)
                            }
                    }
                    return function() {
                        return t.apply(e, arguments)
                    }
                },
                _ = function(t, e, n) {
                    return null == t ? x.identity : x.isFunction(t) ? w(t, e, n) : x.isObject(t) ? x.matcher(t) : x.property(t)
                };
            x.iteratee = function(t, e) {
                return _(t, e, 1 / 0)
            };
            var k = function(t, e) {
                    return function(n) {
                        var r = arguments.length;
                        if (2 > r || null == n) return n;
                        for (var i = 1; r > i; i++)
                            for (var o = arguments[i], a = t(o), s = a.length, u = 0; s > u; u++) {
                                var c = a[u];
                                e && void 0 !== n[c] || (n[c] = o[c])
                            }
                        return n
                    }
                },
                T = function(t) {
                    if (!x.isObject(t)) return {};
                    if (m) return m(t);
                    b.prototype = t;
                    var e = new b;
                    return b.prototype = null, e
                },
                E = function(t) {
                    return function(e) {
                        return null == e ? void 0 : e[t]
                    }
                },
                j = Math.pow(2, 53) - 1,
                C = E("length"),
                S = function(t) {
                    var e = C(t);
                    return "number" == typeof e && e >= 0 && j >= e
                };
            x.each = x.forEach = function(t, e, n) {
                e = w(e, n);
                var r, i;
                if (S(t))
                    for (r = 0, i = t.length; i > r; r++) e(t[r], r, t);
                else {
                    var o = x.keys(t);
                    for (r = 0, i = o.length; i > r; r++) e(t[o[r]], o[r], t)
                }
                return t
            }, x.map = x.collect = function(t, e, n) {
                e = _(e, n);
                for (var r = !S(t) && x.keys(t), i = (r || t).length, o = Array(i), a = 0; i > a; a++) {
                    var s = r ? r[a] : a;
                    o[a] = e(t[s], s, t)
                }
                return o
            }, x.reduce = x.foldl = x.inject = t(1), x.reduceRight = x.foldr = t(-1), x.find = x.detect = function(t, e, n) {
                var r;
                return r = S(t) ? x.findIndex(t, e, n) : x.findKey(t, e, n), void 0 !== r && -1 !== r ? t[r] : void 0
            }, x.filter = x.select = function(t, e, n) {
                var r = [];
                return e = _(e, n), x.each(t, function(t, n, i) {
                    e(t, n, i) && r.push(t)
                }), r
            }, x.reject = function(t, e, n) {
                return x.filter(t, x.negate(_(e)), n)
            }, x.every = x.all = function(t, e, n) {
                e = _(e, n);
                for (var r = !S(t) && x.keys(t), i = (r || t).length, o = 0; i > o; o++) {
                    var a = r ? r[o] : o;
                    if (!e(t[a], a, t)) return !1
                }
                return !0
            }, x.some = x.any = function(t, e, n) {
                e = _(e, n);
                for (var r = !S(t) && x.keys(t), i = (r || t).length, o = 0; i > o; o++) {
                    var a = r ? r[o] : o;
                    if (e(t[a], a, t)) return !0
                }
                return !1
            }, x.contains = x.includes = x.include = function(t, e, n, r) {
                return S(t) || (t = x.values(t)), ("number" != typeof n || r) && (n = 0), x.indexOf(t, e, n) >= 0
            }, x.invoke = function(t, e) {
                var n = p.call(arguments, 2),
                    r = x.isFunction(e);
                return x.map(t, function(t) {
                    var i = r ? e : t[e];
                    return null == i ? i : i.apply(t, n)
                })
            }, x.pluck = function(t, e) {
                return x.map(t, x.property(e))
            }, x.where = function(t, e) {
                return x.filter(t, x.matcher(e))
            }, x.findWhere = function(t, e) {
                return x.find(t, x.matcher(e))
            }, x.max = function(t, e, n) {
                var r, i, o = -(1 / 0),
                    a = -(1 / 0);
                if (null == e && null != t) {
                    t = S(t) ? t : x.values(t);
                    for (var s = 0, u = t.length; u > s; s++) r = t[s], r > o && (o = r)
                } else e = _(e, n), x.each(t, function(t, n, r) {
                    i = e(t, n, r), (i > a || i === -(1 / 0) && o === -(1 / 0)) && (o = t, a = i)
                });
                return o
            }, x.min = function(t, e, n) {
                var r, i, o = 1 / 0,
                    a = 1 / 0;
                if (null == e && null != t) {
                    t = S(t) ? t : x.values(t);
                    for (var s = 0, u = t.length; u > s; s++) r = t[s], o > r && (o = r)
                } else e = _(e, n), x.each(t, function(t, n, r) {
                    i = e(t, n, r), (a > i || i === 1 / 0 && o === 1 / 0) && (o = t, a = i)
                });
                return o
            }, x.shuffle = function(t) {
                for (var e, n = S(t) ? t : x.values(t), r = n.length, i = Array(r), o = 0; r > o; o++) e = x.random(0, o), e !== o && (i[o] = i[e]), i[e] = n[o];
                return i
            }, x.sample = function(t, e, n) {
                return null == e || n ? (S(t) || (t = x.values(t)), t[x.random(t.length - 1)]) : x.shuffle(t).slice(0, Math.max(0, e))
            }, x.sortBy = function(t, e, n) {
                return e = _(e, n), x.pluck(x.map(t, function(t, n, r) {
                    return {
                        value: t,
                        index: n,
                        criteria: e(t, n, r)
                    }
                }).sort(function(t, e) {
                    var n = t.criteria,
                        r = e.criteria;
                    if (n !== r) {
                        if (n > r || void 0 === n) return 1;
                        if (r > n || void 0 === r) return -1
                    }
                    return t.index - e.index
                }), "value")
            };
            var A = function(t) {
                return function(e, n, r) {
                    var i = {};
                    return n = _(n, r), x.each(e, function(r, o) {
                        var a = n(r, o, e);
                        t(i, r, a)
                    }), i
                }
            };
            x.groupBy = A(function(t, e, n) {
                x.has(t, n) ? t[n].push(e) : t[n] = [e]
            }), x.indexBy = A(function(t, e, n) {
                t[n] = e
            }), x.countBy = A(function(t, e, n) {
                x.has(t, n) ? t[n]++ : t[n] = 1
            }), x.toArray = function(t) {
                return t ? x.isArray(t) ? p.call(t) : S(t) ? x.map(t, x.identity) : x.values(t) : []
            }, x.size = function(t) {
                return null == t ? 0 : S(t) ? t.length : x.keys(t).length
            }, x.partition = function(t, e, n) {
                e = _(e, n);
                var r = [],
                    i = [];
                return x.each(t, function(t, n, o) {
                    (e(t, n, o) ? r : i).push(t)
                }), [r, i]
            }, x.first = x.head = x.take = function(t, e, n) {
                return null == t ? void 0 : null == e || n ? t[0] : x.initial(t, t.length - e)
            }, x.initial = function(t, e, n) {
                return p.call(t, 0, Math.max(0, t.length - (null == e || n ? 1 : e)))
            }, x.last = function(t, e, n) {
                return null == t ? void 0 : null == e || n ? t[t.length - 1] : x.rest(t, Math.max(0, t.length - e))
            }, x.rest = x.tail = x.drop = function(t, e, n) {
                return p.call(t, null == e || n ? 1 : e)
            }, x.compact = function(t) {
                return x.filter(t, x.identity)
            };
            var N = function(t, e, n, r) {
                for (var i = [], o = 0, a = r || 0, s = C(t); s > a; a++) {
                    var u = t[a];
                    if (S(u) && (x.isArray(u) || x.isArguments(u))) {
                        e || (u = N(u, e, n));
                        var c = 0,
                            l = u.length;
                        for (i.length += l; l > c;) i[o++] = u[c++]
                    } else n || (i[o++] = u)
                }
                return i
            };
            x.flatten = function(t, e) {
                return N(t, e, !1)
            }, x.without = function(t) {
                return x.difference(t, p.call(arguments, 1))
            }, x.uniq = x.unique = function(t, e, n, r) {
                x.isBoolean(e) || (r = n, n = e, e = !1), null != n && (n = _(n, r));
                for (var i = [], o = [], a = 0, s = C(t); s > a; a++) {
                    var u = t[a],
                        c = n ? n(u, a, t) : u;
                    e ? (a && o === c || i.push(u), o = c) : n ? x.contains(o, c) || (o.push(c), i.push(u)) : x.contains(i, u) || i.push(u)
                }
                return i
            }, x.union = function() {
                return x.uniq(N(arguments, !0, !0))
            }, x.intersection = function(t) {
                for (var e = [], n = arguments.length, r = 0, i = C(t); i > r; r++) {
                    var o = t[r];
                    if (!x.contains(e, o)) {
                        for (var a = 1; n > a && x.contains(arguments[a], o); a++);
                        a === n && e.push(o)
                    }
                }
                return e
            }, x.difference = function(t) {
                var e = N(arguments, !0, !0, 1);
                return x.filter(t, function(t) {
                    return !x.contains(e, t)
                })
            }, x.zip = function() {
                return x.unzip(arguments)
            }, x.unzip = function(t) {
                for (var e = t && x.max(t, C).length || 0, n = Array(e), r = 0; e > r; r++) n[r] = x.pluck(t, r);
                return n
            }, x.object = function(t, e) {
                for (var n = {}, r = 0, i = C(t); i > r; r++) e ? n[t[r]] = e[r] : n[t[r][0]] = t[r][1];
                return n
            }, x.findIndex = r(1), x.findLastIndex = r(-1), x.sortedIndex = function(t, e, n, r) {
                n = _(n, r, 1);
                for (var i = n(e), o = 0, a = C(t); a > o;) {
                    var s = Math.floor((o + a) / 2);
                    n(t[s]) < i ? o = s + 1 : a = s
                }
                return o
            }, x.indexOf = i(1, x.findIndex, x.sortedIndex), x.lastIndexOf = i(-1, x.findLastIndex), x.range = function(t, e, n) {
                null == e && (e = t || 0, t = 0), n = n || 1;
                for (var r = Math.max(Math.ceil((e - t) / n), 0), i = Array(r), o = 0; r > o; o++, t += n) i[o] = t;
                return i
            };
            var R = function(t, e, n, r, i) {
                if (!(r instanceof e)) return t.apply(n, i);
                var o = T(t.prototype),
                    a = t.apply(o, i);
                return x.isObject(a) ? a : o
            };
            x.bind = function(t, e) {
                if (y && t.bind === y) return y.apply(t, p.call(arguments, 1));
                if (!x.isFunction(t)) throw new TypeError("Bind must be called on a function");
                var n = p.call(arguments, 2),
                    r = function() {
                        return R(t, r, e, this, n.concat(p.call(arguments)))
                    };
                return r
            }, x.partial = function(t) {
                var e = p.call(arguments, 1),
                    n = function() {
                        for (var r = 0, i = e.length, o = Array(i), a = 0; i > a; a++) o[a] = e[a] === x ? arguments[r++] : e[a];
                        for (; r < arguments.length;) o.push(arguments[r++]);
                        return R(t, n, this, this, o)
                    };
                return n
            }, x.bindAll = function(t) {
                var e, n, r = arguments.length;
                if (1 >= r) throw new Error("bindAll must be passed function names");
                for (e = 1; r > e; e++) n = arguments[e], t[n] = x.bind(t[n], t);
                return t
            }, x.memoize = function(t, e) {
                var n = function(r) {
                    var i = n.cache,
                        o = "" + (e ? e.apply(this, arguments) : r);
                    return x.has(i, o) || (i[o] = t.apply(this, arguments)), i[o]
                };
                return n.cache = {}, n
            }, x.delay = function(t, e) {
                var n = p.call(arguments, 2);
                return setTimeout(function() {
                    return t.apply(null, n)
                }, e)
            }, x.defer = x.partial(x.delay, x, 1), x.throttle = function(t, e, n) {
                var r, i, o, a = null,
                    s = 0;
                n || (n = {});
                var u = function() {
                    s = n.leading === !1 ? 0 : x.now(), a = null, o = t.apply(r, i), a || (r = i = null)
                };
                return function() {
                    var c = x.now();
                    s || n.leading !== !1 || (s = c);
                    var l = e - (c - s);
                    return r = this, i = arguments, 0 >= l || l > e ? (a && (clearTimeout(a), a = null), s = c, o = t.apply(r, i), a || (r = i = null)) : a || n.trailing === !1 || (a = setTimeout(u, l)), o
                }
            }, x.debounce = function(t, e, n) {
                var r, i, o, a, s, u = function() {
                    var c = x.now() - a;
                    e > c && c >= 0 ? r = setTimeout(u, e - c) : (r = null, n || (s = t.apply(o, i), r || (o = i = null)))
                };
                return function() {
                    o = this, i = arguments, a = x.now();
                    var c = n && !r;
                    return r || (r = setTimeout(u, e)), c && (s = t.apply(o, i), o = i = null), s
                }
            }, x.wrap = function(t, e) {
                return x.partial(e, t)
            }, x.negate = function(t) {
                return function() {
                    return !t.apply(this, arguments)
                }
            }, x.compose = function() {
                var t = arguments,
                    e = t.length - 1;
                return function() {
                    for (var n = e, r = t[e].apply(this, arguments); n--;) r = t[n].call(this, r);
                    return r
                }
            }, x.after = function(t, e) {
                return function() {
                    return --t < 1 ? e.apply(this, arguments) : void 0
                }
            }, x.before = function(t, e) {
                var n;
                return function() {
                    return --t > 0 && (n = e.apply(this, arguments)), 1 >= t && (e = null), n
                }
            }, x.once = x.partial(x.before, 2);
            var I = !{
                    toString: null
                }.propertyIsEnumerable("toString"),
                O = ["valueOf", "isPrototypeOf", "toString", "propertyIsEnumerable", "hasOwnProperty", "toLocaleString"];
            x.keys = function(t) {
                if (!x.isObject(t)) return [];
                if (v) return v(t);
                var e = [];
                for (var n in t) x.has(t, n) && e.push(n);
                return I && o(t, e), e
            }, x.allKeys = function(t) {
                if (!x.isObject(t)) return [];
                var e = [];
                for (var n in t) e.push(n);
                return I && o(t, e), e
            }, x.values = function(t) {
                for (var e = x.keys(t), n = e.length, r = Array(n), i = 0; n > i; i++) r[i] = t[e[i]];
                return r
            }, x.mapObject = function(t, e, n) {
                e = _(e, n);
                for (var r, i = x.keys(t), o = i.length, a = {}, s = 0; o > s; s++) r = i[s], a[r] = e(t[r], r, t);
                return a
            }, x.pairs = function(t) {
                for (var e = x.keys(t), n = e.length, r = Array(n), i = 0; n > i; i++) r[i] = [e[i], t[e[i]]];
                return r
            }, x.invert = function(t) {
                for (var e = {}, n = x.keys(t), r = 0, i = n.length; i > r; r++) e[t[n[r]]] = n[r];
                return e
            }, x.functions = x.methods = function(t) {
                var e = [];
                for (var n in t) x.isFunction(t[n]) && e.push(n);
                return e.sort()
            }, x.extend = k(x.allKeys), x.extendOwn = x.assign = k(x.keys), x.findKey = function(t, e, n) {
                e = _(e, n);
                for (var r, i = x.keys(t), o = 0, a = i.length; a > o; o++)
                    if (r = i[o], e(t[r], r, t)) return r
            }, x.pick = function(t, e, n) {
                var r, i, o = {},
                    a = t;
                if (null == a) return o;
                x.isFunction(e) ? (i = x.allKeys(a), r = w(e, n)) : (i = N(arguments, !1, !1, 1), r = function(t, e, n) {
                    return e in n
                }, a = Object(a));
                for (var s = 0, u = i.length; u > s; s++) {
                    var c = i[s],
                        l = a[c];
                    r(l, c, a) && (o[c] = l)
                }
                return o
            }, x.omit = function(t, e, n) {
                if (x.isFunction(e)) e = x.negate(e);
                else {
                    var r = x.map(N(arguments, !1, !1, 1), String);
                    e = function(t, e) {
                        return !x.contains(r, e)
                    }
                }
                return x.pick(t, e, n)
            }, x.defaults = k(x.allKeys, !0), x.create = function(t, e) {
                var n = T(t);
                return e && x.extendOwn(n, e), n
            }, x.clone = function(t) {
                return x.isObject(t) ? x.isArray(t) ? t.slice() : x.extend({}, t) : t
            }, x.tap = function(t, e) {
                return e(t), t
            }, x.isMatch = function(t, e) {
                var n = x.keys(e),
                    r = n.length;
                if (null == t) return !r;
                for (var i = Object(t), o = 0; r > o; o++) {
                    var a = n[o];
                    if (e[a] !== i[a] || !(a in i)) return !1
                }
                return !0
            };
            var L = function(t, e, n, r) {
                if (t === e) return 0 !== t || 1 / t === 1 / e;
                if (null == t || null == e) return t === e;
                t instanceof x && (t = t._wrapped), e instanceof x && (e = e._wrapped);
                var i = h.call(t);
                if (i !== h.call(e)) return !1;
                switch (i) {
                    case "[object RegExp]":
                    case "[object String]":
                        return "" + t == "" + e;
                    case "[object Number]":
                        return +t !== +t ? +e !== +e : 0 === +t ? 1 / +t === 1 / e : +t === +e;
                    case "[object Date]":
                    case "[object Boolean]":
                        return +t === +e
                }
                var o = "[object Array]" === i;
                if (!o) {
                    if ("object" != typeof t || "object" != typeof e) return !1;
                    var a = t.constructor,
                        s = e.constructor;
                    if (a !== s && !(x.isFunction(a) && a instanceof a && x.isFunction(s) && s instanceof s) && "constructor" in t && "constructor" in e) return !1
                }
                n = n || [], r = r || [];
                for (var u = n.length; u--;)
                    if (n[u] === t) return r[u] === e;
                if (n.push(t), r.push(e), o) {
                    if (u = t.length, u !== e.length) return !1;
                    for (; u--;)
                        if (!L(t[u], e[u], n, r)) return !1
                } else {
                    var c, l = x.keys(t);
                    if (u = l.length, x.keys(e).length !== u) return !1;
                    for (; u--;)
                        if (c = l[u], !x.has(e, c) || !L(t[c], e[c], n, r)) return !1
                }
                return n.pop(), r.pop(), !0
            };
            x.isEqual = function(t, e) {
                return L(t, e)
            }, x.isEmpty = function(t) {
                return null == t ? !0 : S(t) && (x.isArray(t) || x.isString(t) || x.isArguments(t)) ? 0 === t.length : 0 === x.keys(t).length
            }, x.isElement = function(t) {
                return !(!t || 1 !== t.nodeType)
            }, x.isArray = g || function(t) {
                return "[object Array]" === h.call(t)
            }, x.isObject = function(t) {
                var e = typeof t;
                return "function" === e || "object" === e && !!t
            }, x.each(["Arguments", "Function", "String", "Number", "Date", "RegExp", "Error"], function(t) {
                x["is" + t] = function(e) {
                    return h.call(e) === "[object " + t + "]"
                }
            }), x.isArguments(arguments) || (x.isArguments = function(t) {
                return x.has(t, "callee")
            }), "function" != typeof /./ && "object" != typeof Int8Array && (x.isFunction = function(t) {
                return "function" == typeof t || !1
            }), x.isFinite = function(t) {
                return isFinite(t) && !isNaN(parseFloat(t))
            }, x.isNaN = function(t) {
                return x.isNumber(t) && t !== +t
            }, x.isBoolean = function(t) {
                return t === !0 || t === !1 || "[object Boolean]" === h.call(t)
            }, x.isNull = function(t) {
                return null === t
            }, x.isUndefined = function(t) {
                return void 0 === t
            }, x.has = function(t, e) {
                return null != t && d.call(t, e)
            }, x.noConflict = function() {
                return a._ = s, this
            }, x.identity = function(t) {
                return t
            }, x.constant = function(t) {
                return function() {
                    return t
                }
            }, x.noop = function() {}, x.property = E, x.propertyOf = function(t) {
                return null == t ? function() {} : function(e) {
                    return t[e]
                }
            }, x.matcher = x.matches = function(t) {
                return t = x.extendOwn({}, t),
                    function(e) {
                        return x.isMatch(e, t)
                    }
            }, x.times = function(t, e, n) {
                var r = Array(Math.max(0, t));
                e = w(e, n, 1);
                for (var i = 0; t > i; i++) r[i] = e(i);
                return r
            }, x.random = function(t, e) {
                return null == e && (e = t, t = 0), t + Math.floor(Math.random() * (e - t + 1))
            }, x.now = Date.now || function() {
                return (new Date).getTime()
            };
            var D = {
                    "&": "&amp;",
                    "<": "&lt;",
                    ">": "&gt;",
                    '"': "&quot;",
                    "'": "&#x27;",
                    "`": "&#x60;"
                },
                P = x.invert(D),
                $ = function(t) {
                    var e = function(e) {
                            return t[e]
                        },
                        n = "(?:" + x.keys(t).join("|") + ")",
                        r = RegExp(n),
                        i = RegExp(n, "g");
                    return function(t) {
                        return t = null == t ? "" : "" + t, r.test(t) ? t.replace(i, e) : t
                    }
                };
            x.escape = $(D), x.unescape = $(P), x.result = function(t, e, n) {
                var r = null == t ? void 0 : t[e];
                return void 0 === r && (r = n), x.isFunction(r) ? r.call(t) : r
            };
            var q = 0;
            x.uniqueId = function(t) {
                var e = ++q + "";
                return t ? t + e : e
            }, x.templateSettings = {
                evaluate: /<%([\s\S]+?)%>/g,
                interpolate: /<%=([\s\S]+?)%>/g,
                escape: /<%-([\s\S]+?)%>/g
            };
            var H = /(.)^/,
                M = {
                    "'": "'",
                    "\\": "\\",
                    "\r": "r",
                    "\n": "n",
                    "\u2028": "u2028",
                    "\u2029": "u2029"
                },
                F = /\\|'|\r|\n|\u2028|\u2029/g,
                B = function(t) {
                    return "\\" + M[t]
                };
            x.template = function(t, e, n) {
                !e && n && (e = n), e = x.defaults({}, e, x.templateSettings);
                var r = RegExp([(e.escape || H).source, (e.interpolate || H).source, (e.evaluate || H).source].join("|") + "|$", "g"),
                    i = 0,
                    o = "__p+='";
                t.replace(r, function(e, n, r, a, s) {
                    return o += t.slice(i, s).replace(F, B), i = s + e.length, n ? o += "'+\n((__t=(" + n + "))==null?'':_.escape(__t))+\n'" : r ? o += "'+\n((__t=(" + r + "))==null?'':__t)+\n'" : a && (o += "';\n" + a + "\n__p+='"), e
                }), o += "';\n", e.variable || (o = "with(obj||{}){\n" + o + "}\n"), o = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + o + "return __p;\n";
                try {
                    var a = new Function(e.variable || "obj", "_", o)
                } catch (s) {
                    throw s.source = o, s
                }
                var u = function(t) {
                        return a.call(this, t, x)
                    },
                    c = e.variable || "obj";
                return u.source = "function(" + c + "){\n" + o + "}", u
            }, x.chain = function(t) {
                var e = x(t);
                return e._chain = !0, e
            };
            var U = function(t, e) {
                return t._chain ? x(e).chain() : e
            };
            x.mixin = function(t) {
                x.each(x.functions(t), function(e) {
                    var n = x[e] = t[e];
                    x.prototype[e] = function() {
                        var t = [this._wrapped];
                        return f.apply(t, arguments), U(this, n.apply(x, t))
                    }
                })
            }, x.mixin(x), x.each(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function(t) {
                var e = u[t];
                x.prototype[t] = function() {
                    var n = this._wrapped;
                    return e.apply(n, arguments), "shift" !== t && "splice" !== t || 0 !== n.length || delete n[0], U(this, n)
                }
            }), x.each(["concat", "join", "slice"], function(t) {
                var e = u[t];
                x.prototype[t] = function() {
                    return U(this, e.apply(this._wrapped, arguments))
                }
            }), x.prototype.value = function() {
                return this._wrapped
            }, x.prototype.valueOf = x.prototype.toJSON = x.prototype.value, x.prototype.toString = function() {
                return "" + this._wrapped
            }, "function" == typeof define && define.amd && define("underscore", [], function() {
                return x
            })
        }).call(this)
    }, {}],
    11: [function(t, e, n) {
        function r() {
            if (!s) {
                s = !0;
                for (var t, e = a.length; e;) {
                    t = a, a = [];
                    for (var n = -1; ++n < e;) t[n]();
                    e = a.length
                }
                s = !1
            }
        }

        function i() {}
        var o = e.exports = {},
            a = [],
            s = !1;
        o.nextTick = function(t) {
            a.push(t), s || setTimeout(r, 0)
        }, o.title = "browser", o.browser = !0, o.env = {}, o.argv = [], o.version = "", o.versions = {}, o.on = i, o.addListener = i, o.once = i, o.off = i, o.removeListener = i, o.removeAllListeners = i, o.emit = i, o.binding = function(t) {
            throw new Error("process.binding is not supported")
        }, o.cwd = function() {
            return "/"
        }, o.chdir = function(t) {
            throw new Error("process.chdir is not supported")
        }, o.umask = function() {
            return 0
        }
    }, {}],
    12: [function(t, e, n) {
        ! function(t) {
            function e(t) {
                "}" === t.n.substr(t.n.length - 1) && (t.n = t.n.substring(0, t.n.length - 1))
            }

            function n(t) {
                return t.trim ? t.trim() : t.replace(/^\s*|\s*$/g, "")
            }

            function r(t, e, n) {
                if (e.charAt(n) != t.charAt(0)) return !1;
                for (var r = 1, i = t.length; i > r; r++)
                    if (e.charAt(n + r) != t.charAt(r)) return !1;
                return !0
            }

            function i(e, n, r, s) {
                var u = [],
                    c = null,
                    l = null,
                    f = null;
                for (l = r[r.length - 1]; e.length > 0;) {
                    if (f = e.shift(), l && "<" == l.tag && !(f.tag in w)) throw new Error("Illegal content in < super tag.");
                    if (t.tags[f.tag] <= t.tags.$ || o(f, s)) r.push(f), f.nodes = i(e, f.tag, r, s);
                    else {
                        if ("/" == f.tag) {
                            if (0 === r.length) throw new Error("Closing tag without opener: /" + f.n);
                            if (c = r.pop(), f.n != c.n && !a(f.n, c.n, s)) throw new Error("Nesting error: " + c.n + " vs. " + f.n);
                            return c.end = f.i, u
                        }
                        "\n" == f.tag && (f.last = 0 == e.length || "\n" == e[0].tag)
                    }
                    u.push(f)
                }
                if (r.length > 0) throw new Error("missing closing tag: " + r.pop().n);
                return u
            }

            function o(t, e) {
                for (var n = 0, r = e.length; r > n; n++)
                    if (e[n].o == t.n) return t.tag = "#", !0
            }

            function a(t, e, n) {
                for (var r = 0, i = n.length; i > r; r++)
                    if (n[r].c == t && n[r].o == e) return !0
            }

            function s(t) {
                var e = [];
                for (var n in t) e.push('"' + c(n) + '": function(c,p,t,i) {' + t[n] + "}");
                return "{ " + e.join(",") + " }"
            }

            function u(t) {
                var e = [];
                for (var n in t.partials) e.push('"' + c(n) + '":{name:"' + c(t.partials[n].name) + '", ' + u(t.partials[n]) + "}");
                return "partials: {" + e.join(",") + "}, subs: " + s(t.subs)
            }

            function c(t) {
                return t.replace(m, "\\\\").replace(g, '\\"').replace(v, "\\n").replace(y, "\\r").replace(b, "\\u2028").replace(x, "\\u2029")
            }

            function l(t) {
                return ~t.indexOf(".") ? "d" : "f"
            }

            function f(t, e) {
                var n = "<" + (e.prefix || ""),
                    r = n + t.n + _++;
                return e.partials[r] = {
                    name: t.n,
                    partials: {}
                }, e.code += 't.b(t.rp("' + c(r) + '",c,p,"' + (t.indent || "") + '"));', r
            }

            function p(t, e) {
                e.code += "t.b(t.t(t." + l(t.n) + '("' + c(t.n) + '",c,p,0)));'
            }

            function h(t) {
                return "t.b(" + t + ");"
            }
            var d = /\S/,
                g = /\"/g,
                v = /\n/g,
                y = /\r/g,
                m = /\\/g,
                b = /\u2028/,
                x = /\u2029/;
            t.tags = {
                "#": 1,
                "^": 2,
                "<": 3,
                $: 4,
                "/": 5,
                "!": 6,
                ">": 7,
                "=": 8,
                _v: 9,
                "{": 10,
                "&": 11,
                _t: 12
            }, t.scan = function(i, o) {
                function a() {
                    m.length > 0 && (b.push({
                        tag: "_t",
                        text: new String(m)
                    }), m = "")
                }

                function s() {
                    for (var e = !0, n = _; n < b.length; n++)
                        if (e = t.tags[b[n].tag] < t.tags._v || "_t" == b[n].tag && null === b[n].text.match(d), !e) return !1;
                    return e
                }

                function u(t, e) {
                    if (a(), t && s())
                        for (var n, r = _; r < b.length; r++) b[r].text && ((n = b[r + 1]) && ">" == n.tag && (n.indent = b[r].text.toString()), b.splice(r, 1));
                    else e || b.push({
                        tag: "\n"
                    });
                    x = !1, _ = b.length
                }

                function c(t, e) {
                    var r = "=" + T,
                        i = t.indexOf(r, e),
                        o = n(t.substring(t.indexOf("=", e) + 1, i)).split(" ");
                    return k = o[0], T = o[o.length - 1], i + r.length - 1
                }
                var l = i.length,
                    f = 0,
                    p = 1,
                    h = 2,
                    g = f,
                    v = null,
                    y = null,
                    m = "",
                    b = [],
                    x = !1,
                    w = 0,
                    _ = 0,
                    k = "{{",
                    T = "}}";
                for (o && (o = o.split(" "), k = o[0], T = o[1]), w = 0; l > w; w++) g == f ? r(k, i, w) ? (--w, a(), g = p) : "\n" == i.charAt(w) ? u(x) : m += i.charAt(w) : g == p ? (w += k.length - 1, y = t.tags[i.charAt(w + 1)], v = y ? i.charAt(w + 1) : "_v", "=" == v ? (w = c(i, w), g = f) : (y && w++, g = h), x = w) : r(T, i, w) ? (b.push({
                    tag: v,
                    n: n(m),
                    otag: k,
                    ctag: T,
                    i: "/" == v ? x - k.length : w + T.length
                }), m = "", w += T.length - 1, g = f, "{" == v && ("}}" == T ? w++ : e(b[b.length - 1]))) : m += i.charAt(w);
                return u(x, !0), b
            };
            var w = {
                _t: !0,
                "\n": !0,
                $: !0,
                "/": !0
            };
            t.stringify = function(e, n, r) {
                return "{code: function (c,p,i) { " + t.wrapMain(e.code) + " }," + u(e) + "}"
            };
            var _ = 0;
            t.generate = function(e, n, r) {
                _ = 0;
                var i = {
                    code: "",
                    subs: {},
                    partials: {}
                };
                return t.walk(e, i), r.asString ? this.stringify(i, n, r) : this.makeTemplate(i, n, r)
            }, t.wrapMain = function(t) {
                return 'var t=this;t.b(i=i||"");' + t + "return t.fl();"
            }, t.template = t.Template, t.makeTemplate = function(t, e, n) {
                var r = this.makePartials(t);
                return r.code = new Function("c", "p", "i", this.wrapMain(t.code)), new this.template(r, e, this, n)
            }, t.makePartials = function(t) {
                var e, n = {
                    subs: {},
                    partials: t.partials,
                    name: t.name
                };
                for (e in n.partials) n.partials[e] = this.makePartials(n.partials[e]);
                for (e in t.subs) n.subs[e] = new Function("c", "p", "t", "i", t.subs[e]);
                return n
            }, t.codegen = {
                "#": function(e, n) {
                    n.code += "if(t.s(t." + l(e.n) + '("' + c(e.n) + '",c,p,1),c,p,0,' + e.i + "," + e.end + ',"' + e.otag + " " + e.ctag + '")){t.rs(c,p,function(c,p,t){', t.walk(e.nodes, n), n.code += "});c.pop();}"
                },
                "^": function(e, n) {
                    n.code += "if(!t.s(t." + l(e.n) + '("' + c(e.n) + '",c,p,1),c,p,1,0,0,"")){', t.walk(e.nodes, n), n.code += "};"
                },
                ">": f,
                "<": function(e, n) {
                    var r = {
                        partials: {},
                        code: "",
                        subs: {},
                        inPartial: !0
                    };
                    t.walk(e.nodes, r);
                    var i = n.partials[f(e, n)];
                    i.subs = r.subs, i.partials = r.partials
                },
                $: function(e, n) {
                    var r = {
                        subs: {},
                        code: "",
                        partials: n.partials,
                        prefix: e.n
                    };
                    t.walk(e.nodes, r), n.subs[e.n] = r.code, n.inPartial || (n.code += 't.sub("' + c(e.n) + '",c,p,i);')
                },
                "\n": function(t, e) {
                    e.code += h('"\\n"' + (t.last ? "" : " + i"))
                },
                _v: function(t, e) {
                    e.code += "t.b(t.v(t." + l(t.n) + '("' + c(t.n) + '",c,p,0)));'
                },
                _t: function(t, e) {
                    e.code += h('"' + c(t.text) + '"')
                },
                "{": p,
                "&": p
            }, t.walk = function(e, n) {
                for (var r, i = 0, o = e.length; o > i; i++) r = t.codegen[e[i].tag], r && r(e[i], n);
                return n
            }, t.parse = function(t, e, n) {
                return n = n || {}, i(t, "", [], n.sectionTags || [])
            }, t.cache = {}, t.cacheKey = function(t, e) {
                return [t, !!e.asString, !!e.disableLambda, e.delimiters, !!e.modelGet].join("||")
            }, t.compile = function(e, n) {
                n = n || {};
                var r = t.cacheKey(e, n),
                    i = this.cache[r];
                if (i) {
                    var o = i.partials;
                    for (var a in o) delete o[a].instance;
                    return i
                }
                return i = this.generate(this.parse(this.scan(e, n.delimiters), e, n), e, n), this.cache[r] = i
            }
        }("undefined" != typeof n ? n : Hogan)
    }, {}],
    13: [function(t, e, n) {
        var r = t("./compiler");
        r.Template = t("./template").Template, r.template = r.Template, e.exports = r
    }, {
        "./compiler": 12,
        "./template": 14
    }],
    14: [function(t, e, n) {
        var r = {};
        ! function(t) {
            function e(t, e, n) {
                var r;
                return e && "object" == typeof e && (void 0 !== e[t] ? r = e[t] : n && e.get && "function" == typeof e.get && (r = e.get(t))), r
            }

            function n(t, e, n, r, i, o) {
                function a() {}

                function s() {}
                a.prototype = t, s.prototype = t.subs;
                var u, c = new a;
                c.subs = new s, c.subsText = {}, c.buf = "", r = r || {}, c.stackSubs = r, c.subsText = o;
                for (u in e) r[u] || (r[u] = e[u]);
                for (u in r) c.subs[u] = r[u];
                i = i || {}, c.stackPartials = i;
                for (u in n) i[u] || (i[u] = n[u]);
                for (u in i) c.partials[u] = i[u];
                return c
            }

            function r(t) {
                return String(null === t || void 0 === t ? "" : t)
            }

            function i(t) {
                return t = r(t), l.test(t) ? t.replace(o, "&amp;").replace(a, "&lt;").replace(s, "&gt;").replace(u, "&#39;").replace(c, "&quot;") : t
            }
            t.Template = function(t, e, n, r) {
                t = t || {}, this.r = t.code || this.r, this.c = n, this.options = r || {}, this.text = e || "", this.partials = t.partials || {}, this.subs = t.subs || {}, this.buf = ""
            }, t.Template.prototype = {
                r: function(t, e, n) {
                    return ""
                },
                v: i,
                t: r,
                render: function(t, e, n) {
                    return this.ri([t], e || {}, n)
                },
                ri: function(t, e, n) {
                    return this.r(t, e, n)
                },
                ep: function(t, e) {
                    var r = this.partials[t],
                        i = e[r.name];
                    if (r.instance && r.base == i) return r.instance;
                    if ("string" == typeof i) {
                        if (!this.c) throw new Error("No compiler available.");
                        i = this.c.compile(i, this.options)
                    }
                    if (!i) return null;
                    if (this.partials[t].base = i, r.subs) {
                        e.stackText || (e.stackText = {});
                        for (key in r.subs) e.stackText[key] || (e.stackText[key] = void 0 !== this.activeSub && e.stackText[this.activeSub] ? e.stackText[this.activeSub] : this.text);
                        i = n(i, r.subs, r.partials, this.stackSubs, this.stackPartials, e.stackText)
                    }
                    return this.partials[t].instance = i, i
                },
                rp: function(t, e, n, r) {
                    var i = this.ep(t, n);
                    return i ? i.ri(e, n, r) : ""
                },
                rs: function(t, e, n) {
                    var r = t[t.length - 1];
                    if (!f(r)) return void n(t, e, this);
                    for (var i = 0; i < r.length; i++) t.push(r[i]), n(t, e, this), t.pop()
                },
                s: function(t, e, n, r, i, o, a) {
                    var s;
                    return f(t) && 0 === t.length ? !1 : ("function" == typeof t && (t = this.ms(t, e, n, r, i, o, a)), s = !!t, !r && s && e && e.push("object" == typeof t ? t : e[e.length - 1]), s)
                },
                d: function(t, n, r, i) {
                    var o, a = t.split("."),
                        s = this.f(a[0], n, r, i),
                        u = this.options.modelGet,
                        c = null;
                    if ("." === t && f(n[n.length - 2])) s = n[n.length - 1];
                    else
                        for (var l = 1; l < a.length; l++) o = e(a[l], s, u), void 0 !== o ? (c = s, s = o) : s = "";
                    return i && !s ? !1 : (i || "function" != typeof s || (n.push(c), s = this.mv(s, n, r), n.pop()), s)
                },
                f: function(t, n, r, i) {
                    for (var o = !1, a = null, s = !1, u = this.options.modelGet, c = n.length - 1; c >= 0; c--)
                        if (a = n[c], o = e(t, a, u), void 0 !== o) {
                            s = !0;
                            break
                        }
                    return s ? (i || "function" != typeof o || (o = this.mv(o, n, r)), o) : i ? !1 : ""
                },
                ls: function(t, e, n, i, o) {
                    var a = this.options.delimiters;
                    return this.options.delimiters = o, this.b(this.ct(r(t.call(e, i)), e, n)), this.options.delimiters = a, !1
                },
                ct: function(t, e, n) {
                    if (this.options.disableLambda) throw new Error("Lambda features disabled.");
                    return this.c.compile(t, this.options).render(e, n)
                },
                b: function(t) {
                    this.buf += t
                },
                fl: function() {
                    var t = this.buf;
                    return this.buf = "", t
                },
                ms: function(t, e, n, r, i, o, a) {
                    var s, u = e[e.length - 1],
                        c = t.call(u);
                    return "function" == typeof c ? r ? !0 : (s = this.activeSub && this.subsText && this.subsText[this.activeSub] ? this.subsText[this.activeSub] : this.text, this.ls(c, u, n, s.substring(i, o), a)) : c
                },
                mv: function(t, e, n) {
                    var i = e[e.length - 1],
                        o = t.call(i);
                    return "function" == typeof o ? this.ct(r(o.call(i)), i, n) : o
                },
                sub: function(t, e, n, r) {
                    var i = this.subs[t];
                    i && (this.activeSub = t, i(e, n, this, r), this.activeSub = !1)
                }
            };
            var o = /&/g,
                a = /</g,
                s = />/g,
                u = /\'/g,
                c = /\"/g,
                l = /[&<>\"\']/,
                f = Array.isArray || function(t) {
                    return "[object Array]" === Object.prototype.toString.call(t)
                }
        }("undefined" != typeof n ? n : r)
    }, {}],
    15: [function(t, e, n) {
        ! function(t, n) {
            "object" == typeof e && "object" == typeof e.exports ? e.exports = t.document ? n(t, !0) : function(t) {
                if (!t.document) throw new Error("jQuery requires a window with a document");
                return n(t)
            } : n(t)
        }("undefined" != typeof window ? window : this, function(t, e) {
            function n(t) {
                var e = "length" in t && t.length,
                    n = Z.type(t);
                return "function" === n || Z.isWindow(t) ? !1 : 1 === t.nodeType && e ? !0 : "array" === n || 0 === e || "number" == typeof e && e > 0 && e - 1 in t
            }

            function r(t, e, n) {
                if (Z.isFunction(e)) return Z.grep(t, function(t, r) {
                    return !!e.call(t, r, t) !== n
                });
                if (e.nodeType) return Z.grep(t, function(t) {
                    return t === e !== n
                });
                if ("string" == typeof e) {
                    if (st.test(e)) return Z.filter(e, t, n);
                    e = Z.filter(e, t)
                }
                return Z.grep(t, function(t) {
                    return V.call(e, t) >= 0 !== n
                })
            }

            function i(t, e) {
                for (;
                    (t = t[e]) && 1 !== t.nodeType;);
                return t
            }

            function o(t) {
                var e = dt[t] = {};
                return Z.each(t.match(ht) || [], function(t, n) {
                    e[n] = !0
                }), e
            }

            function a() {
                Q.removeEventListener("DOMContentLoaded", a, !1), t.removeEventListener("load", a, !1), Z.ready()
            }

            function s() {
                Object.defineProperty(this.cache = {}, 0, {
                    get: function() {
                        return {}
                    }
                }), this.expando = Z.expando + s.uid++
            }

            function u(t, e, n) {
                var r;
                if (void 0 === n && 1 === t.nodeType)
                    if (r = "data-" + e.replace(xt, "-$1").toLowerCase(), n = t.getAttribute(r), "string" == typeof n) {
                        try {
                            n = "true" === n ? !0 : "false" === n ? !1 : "null" === n ? null : +n + "" === n ? +n : bt.test(n) ? Z.parseJSON(n) : n
                        } catch (i) {}
                        mt.set(t, e, n)
                    } else n = void 0;
                return n
            }

            function c() {
                return !0
            }

            function l() {
                return !1
            }

            function f() {
                try {
                    return Q.activeElement
                } catch (t) {}
            }

            function p(t, e) {
                return Z.nodeName(t, "table") && Z.nodeName(11 !== e.nodeType ? e : e.firstChild, "tr") ? t.getElementsByTagName("tbody")[0] || t.appendChild(t.ownerDocument.createElement("tbody")) : t
            }

            function h(t) {
                return t.type = (null !== t.getAttribute("type")) + "/" + t.type, t
            }

            function d(t) {
                var e = Pt.exec(t.type);
                return e ? t.type = e[1] : t.removeAttribute("type"), t
            }

            function g(t, e) {
                for (var n = 0, r = t.length; r > n; n++) yt.set(t[n], "globalEval", !e || yt.get(e[n], "globalEval"))
            }

            function v(t, e) {
                var n, r, i, o, a, s, u, c;
                if (1 === e.nodeType) {
                    if (yt.hasData(t) && (o = yt.access(t), a = yt.set(e, o), c = o.events)) {
                        delete a.handle, a.events = {};
                        for (i in c)
                            for (n = 0, r = c[i].length; r > n; n++) Z.event.add(e, i, c[i][n])
                    }
                    mt.hasData(t) && (s = mt.access(t), u = Z.extend({}, s), mt.set(e, u))
                }
            }

            function y(t, e) {
                var n = t.getElementsByTagName ? t.getElementsByTagName(e || "*") : t.querySelectorAll ? t.querySelectorAll(e || "*") : [];
                return void 0 === e || e && Z.nodeName(t, e) ? Z.merge([t], n) : n
            }

            function m(t, e) {
                var n = e.nodeName.toLowerCase();
                "input" === n && Tt.test(t.type) ? e.checked = t.checked : ("input" === n || "textarea" === n) && (e.defaultValue = t.defaultValue)
            }

            function b(e, n) {
                var r, i = Z(n.createElement(e)).appendTo(n.body),
                    o = t.getDefaultComputedStyle && (r = t.getDefaultComputedStyle(i[0])) ? r.display : Z.css(i[0], "display");
                return i.detach(), o
            }

            function x(t) {
                var e = Q,
                    n = Mt[t];
                return n || (n = b(t, e), "none" !== n && n || (Ht = (Ht || Z("<iframe frameborder='0' width='0' height='0'/>")).appendTo(e.documentElement), e = Ht[0].contentDocument, e.write(), e.close(), n = b(t, e), Ht.detach()), Mt[t] = n), n
            }

            function w(t, e, n) {
                var r, i, o, a, s = t.style;
                return n = n || Ut(t), n && (a = n.getPropertyValue(e) || n[e]), n && ("" !== a || Z.contains(t.ownerDocument, t) || (a = Z.style(t, e)), Bt.test(a) && Ft.test(e) && (r = s.width, i = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = i, s.maxWidth = o)), void 0 !== a ? a + "" : a
            }

            function _(t, e) {
                return {
                    get: function() {
                        return t() ? void delete this.get : (this.get = e).apply(this, arguments)
                    }
                }
            }

            function k(t, e) {
                if (e in t) return e;
                for (var n = e[0].toUpperCase() + e.slice(1), r = e, i = Jt.length; i--;)
                    if (e = Jt[i] + n, e in t) return e;
                return r
            }

            function T(t, e, n) {
                var r = zt.exec(e);
                return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : e
            }

            function E(t, e, n, r, i) {
                for (var o = n === (r ? "border" : "content") ? 4 : "width" === e ? 1 : 0, a = 0; 4 > o; o += 2) "margin" === n && (a += Z.css(t, n + _t[o], !0, i)), r ? ("content" === n && (a -= Z.css(t, "padding" + _t[o], !0, i)), "margin" !== n && (a -= Z.css(t, "border" + _t[o] + "Width", !0, i))) : (a += Z.css(t, "padding" + _t[o], !0, i), "padding" !== n && (a += Z.css(t, "border" + _t[o] + "Width", !0, i)));
                return a
            }

            function j(t, e, n) {
                var r = !0,
                    i = "width" === e ? t.offsetWidth : t.offsetHeight,
                    o = Ut(t),
                    a = "border-box" === Z.css(t, "boxSizing", !1, o);
                if (0 >= i || null == i) {
                    if (i = w(t, e, o), (0 > i || null == i) && (i = t.style[e]), Bt.test(i)) return i;
                    r = a && (Y.boxSizingReliable() || i === t.style[e]), i = parseFloat(i) || 0
                }
                return i + E(t, e, n || (a ? "border" : "content"), r, o) + "px"
            }

            function C(t, e) {
                for (var n, r, i, o = [], a = 0, s = t.length; s > a; a++) r = t[a], r.style && (o[a] = yt.get(r, "olddisplay"), n = r.style.display, e ? (o[a] || "none" !== n || (r.style.display = ""), "" === r.style.display && kt(r) && (o[a] = yt.access(r, "olddisplay", x(r.nodeName)))) : (i = kt(r), "none" === n && i || yt.set(r, "olddisplay", i ? n : Z.css(r, "display"))));
                for (a = 0; s > a; a++) r = t[a], r.style && (e && "none" !== r.style.display && "" !== r.style.display || (r.style.display = e ? o[a] || "" : "none"));
                return t
            }

            function S(t, e, n, r, i) {
                return new S.prototype.init(t, e, n, r, i)
            }

            function A() {
                return setTimeout(function() {
                    Yt = void 0
                }), Yt = Z.now()
            }

            function N(t, e) {
                var n, r = 0,
                    i = {
                        height: t
                    };
                for (e = e ? 1 : 0; 4 > r; r += 2 - e) n = _t[r], i["margin" + n] = i["padding" + n] = t;
                return e && (i.opacity = i.width = t), i
            }

            function R(t, e, n) {
                for (var r, i = (ne[e] || []).concat(ne["*"]), o = 0, a = i.length; a > o; o++)
                    if (r = i[o].call(n, e, t)) return r
            }

            function I(t, e, n) {
                var r, i, o, a, s, u, c, l, f = this,
                    p = {},
                    h = t.style,
                    d = t.nodeType && kt(t),
                    g = yt.get(t, "fxshow");
                n.queue || (s = Z._queueHooks(t, "fx"), null == s.unqueued && (s.unqueued = 0, u = s.empty.fire, s.empty.fire = function() {
                    s.unqueued || u()
                }), s.unqueued++, f.always(function() {
                    f.always(function() {
                        s.unqueued--, Z.queue(t, "fx").length || s.empty.fire()
                    })
                })), 1 === t.nodeType && ("height" in e || "width" in e) && (n.overflow = [h.overflow, h.overflowX, h.overflowY], c = Z.css(t, "display"), l = "none" === c ? yt.get(t, "olddisplay") || x(t.nodeName) : c, "inline" === l && "none" === Z.css(t, "float") && (h.display = "inline-block")), n.overflow && (h.overflow = "hidden", f.always(function() {
                    h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2]
                }));
                for (r in e)
                    if (i = e[r], Kt.exec(i)) {
                        if (delete e[r], o = o || "toggle" === i, i === (d ? "hide" : "show")) {
                            if ("show" !== i || !g || void 0 === g[r]) continue;
                            d = !0
                        }
                        p[r] = g && g[r] || Z.style(t, r)
                    } else c = void 0;
                if (Z.isEmptyObject(p)) "inline" === ("none" === c ? x(t.nodeName) : c) && (h.display = c);
                else {
                    g ? "hidden" in g && (d = g.hidden) : g = yt.access(t, "fxshow", {}), o && (g.hidden = !d), d ? Z(t).show() : f.done(function() {
                        Z(t).hide()
                    }), f.done(function() {
                        var e;
                        yt.remove(t, "fxshow");
                        for (e in p) Z.style(t, e, p[e])
                    });
                    for (r in p) a = R(d ? g[r] : 0, r, f), r in g || (g[r] = a.start, d && (a.end = a.start, a.start = "width" === r || "height" === r ? 1 : 0))
                }
            }

            function O(t, e) {
                var n, r, i, o, a;
                for (n in t)
                    if (r = Z.camelCase(n), i = e[r], o = t[n], Z.isArray(o) && (i = o[1], o = t[n] = o[0]), n !== r && (t[r] = o, delete t[n]), a = Z.cssHooks[r], a && "expand" in a) {
                        o = a.expand(o), delete t[r];
                        for (n in o) n in t || (t[n] = o[n], e[n] = i)
                    } else e[r] = i
            }

            function L(t, e, n) {
                var r, i, o = 0,
                    a = ee.length,
                    s = Z.Deferred().always(function() {
                        delete u.elem
                    }),
                    u = function() {
                        if (i) return !1;
                        for (var e = Yt || A(), n = Math.max(0, c.startTime + c.duration - e), r = n / c.duration || 0, o = 1 - r, a = 0, u = c.tweens.length; u > a; a++) c.tweens[a].run(o);
                        return s.notifyWith(t, [c, o, n]), 1 > o && u ? n : (s.resolveWith(t, [c]), !1)
                    },
                    c = s.promise({
                        elem: t,
                        props: Z.extend({}, e),
                        opts: Z.extend(!0, {
                            specialEasing: {}
                        }, n),
                        originalProperties: e,
                        originalOptions: n,
                        startTime: Yt || A(),
                        duration: n.duration,
                        tweens: [],
                        createTween: function(e, n) {
                            var r = Z.Tween(t, c.opts, e, n, c.opts.specialEasing[e] || c.opts.easing);
                            return c.tweens.push(r), r
                        },
                        stop: function(e) {
                            var n = 0,
                                r = e ? c.tweens.length : 0;
                            if (i) return this;
                            for (i = !0; r > n; n++) c.tweens[n].run(1);
                            return e ? s.resolveWith(t, [c, e]) : s.rejectWith(t, [c, e]), this
                        }
                    }),
                    l = c.props;
                for (O(l, c.opts.specialEasing); a > o; o++)
                    if (r = ee[o].call(c, t, l, c.opts)) return r;
                return Z.map(l, R, c), Z.isFunction(c.opts.start) && c.opts.start.call(t, c), Z.fx.timer(Z.extend(u, {
                    elem: t,
                    anim: c,
                    queue: c.opts.queue
                })), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always)
            }

            function D(t) {
                return function(e, n) {
                    "string" != typeof e && (n = e, e = "*");
                    var r, i = 0,
                        o = e.toLowerCase().match(ht) || [];
                    if (Z.isFunction(n))
                        for (; r = o[i++];) "+" === r[0] ? (r = r.slice(1) || "*", (t[r] = t[r] || []).unshift(n)) : (t[r] = t[r] || []).push(n)
                }
            }

            function P(t, e, n, r) {
                function i(s) {
                    var u;
                    return o[s] = !0, Z.each(t[s] || [], function(t, s) {
                        var c = s(e, n, r);
                        return "string" != typeof c || a || o[c] ? a ? !(u = c) : void 0 : (e.dataTypes.unshift(c), i(c), !1)
                    }), u
                }
                var o = {},
                    a = t === be;
                return i(e.dataTypes[0]) || !o["*"] && i("*")
            }

            function $(t, e) {
                var n, r, i = Z.ajaxSettings.flatOptions || {};
                for (n in e) void 0 !== e[n] && ((i[n] ? t : r || (r = {}))[n] = e[n]);
                return r && Z.extend(!0, t, r), t
            }

            function q(t, e, n) {
                for (var r, i, o, a, s = t.contents, u = t.dataTypes;
                    "*" === u[0];) u.shift(), void 0 === r && (r = t.mimeType || e.getResponseHeader("Content-Type"));
                if (r)
                    for (i in s)
                        if (s[i] && s[i].test(r)) {
                            u.unshift(i);
                            break
                        }
                if (u[0] in n) o = u[0];
                else {
                    for (i in n) {
                        if (!u[0] || t.converters[i + " " + u[0]]) {
                            o = i;
                            break
                        }
                        a || (a = i)
                    }
                    o = o || a
                }
                return o ? (o !== u[0] && u.unshift(o), n[o]) : void 0
            }

            function H(t, e, n, r) {
                var i, o, a, s, u, c = {},
                    l = t.dataTypes.slice();
                if (l[1])
                    for (a in t.converters) c[a.toLowerCase()] = t.converters[a];
                for (o = l.shift(); o;)
                    if (t.responseFields[o] && (n[t.responseFields[o]] = e), !u && r && t.dataFilter && (e = t.dataFilter(e, t.dataType)), u = o, o = l.shift())
                        if ("*" === o) o = u;
                        else if ("*" !== u && u !== o) {
                    if (a = c[u + " " + o] || c["* " + o], !a)
                        for (i in c)
                            if (s = i.split(" "), s[1] === o && (a = c[u + " " + s[0]] || c["* " + s[0]])) {
                                a === !0 ? a = c[i] : c[i] !== !0 && (o = s[0], l.unshift(s[1]));
                                break
                            }
                    if (a !== !0)
                        if (a && t["throws"]) e = a(e);
                        else try {
                            e = a(e)
                        } catch (f) {
                            return {
                                state: "parsererror",
                                error: a ? f : "No conversion from " + u + " to " + o
                            }
                        }
                }
                return {
                    state: "success",
                    data: e
                }
            }

            function M(t, e, n, r) {
                var i;
                if (Z.isArray(e)) Z.each(e, function(e, i) {
                    n || Te.test(t) ? r(t, i) : M(t + "[" + ("object" == typeof i ? e : "") + "]", i, n, r)
                });
                else if (n || "object" !== Z.type(e)) r(t, e);
                else
                    for (i in e) M(t + "[" + i + "]", e[i], n, r)
            }

            function F(t) {
                return Z.isWindow(t) ? t : 9 === t.nodeType && t.defaultView
            }
            var B = [],
                U = B.slice,
                W = B.concat,
                z = B.push,
                V = B.indexOf,
                G = {},
                X = G.toString,
                J = G.hasOwnProperty,
                Y = {},
                Q = t.document,
                K = "2.1.4",
                Z = function(t, e) {
                    return new Z.fn.init(t, e)
                },
                tt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
                et = /^-ms-/,
                nt = /-([\da-z])/gi,
                rt = function(t, e) {
                    return e.toUpperCase()
                };
            Z.fn = Z.prototype = {
                jquery: K,
                constructor: Z,
                selector: "",
                length: 0,
                toArray: function() {
                    return U.call(this)
                },
                get: function(t) {
                    return null != t ? 0 > t ? this[t + this.length] : this[t] : U.call(this)
                },
                pushStack: function(t) {
                    var e = Z.merge(this.constructor(), t);
                    return e.prevObject = this, e.context = this.context, e
                },
                each: function(t, e) {
                    return Z.each(this, t, e)
                },
                map: function(t) {
                    return this.pushStack(Z.map(this, function(e, n) {
                        return t.call(e, n, e)
                    }))
                },
                slice: function() {
                    return this.pushStack(U.apply(this, arguments))
                },
                first: function() {
                    return this.eq(0)
                },
                last: function() {
                    return this.eq(-1)
                },
                eq: function(t) {
                    var e = this.length,
                        n = +t + (0 > t ? e : 0);
                    return this.pushStack(n >= 0 && e > n ? [this[n]] : [])
                },
                end: function() {
                    return this.prevObject || this.constructor(null)
                },
                push: z,
                sort: B.sort,
                splice: B.splice
            }, Z.extend = Z.fn.extend = function() {
                var t, e, n, r, i, o, a = arguments[0] || {},
                    s = 1,
                    u = arguments.length,
                    c = !1;
                for ("boolean" == typeof a && (c = a, a = arguments[s] || {}, s++), "object" == typeof a || Z.isFunction(a) || (a = {}), s === u && (a = this, s--); u > s; s++)
                    if (null != (t = arguments[s]))
                        for (e in t) n = a[e], r = t[e], a !== r && (c && r && (Z.isPlainObject(r) || (i = Z.isArray(r))) ? (i ? (i = !1, o = n && Z.isArray(n) ? n : []) : o = n && Z.isPlainObject(n) ? n : {}, a[e] = Z.extend(c, o, r)) : void 0 !== r && (a[e] = r));
                return a
            }, Z.extend({
                expando: "jQuery" + (K + Math.random()).replace(/\D/g, ""),
                isReady: !0,
                error: function(t) {
                    throw new Error(t)
                },
                noop: function() {},
                isFunction: function(t) {
                    return "function" === Z.type(t)
                },
                isArray: Array.isArray,
                isWindow: function(t) {
                    return null != t && t === t.window
                },
                isNumeric: function(t) {
                    return !Z.isArray(t) && t - parseFloat(t) + 1 >= 0
                },
                isPlainObject: function(t) {
                    return "object" !== Z.type(t) || t.nodeType || Z.isWindow(t) ? !1 : t.constructor && !J.call(t.constructor.prototype, "isPrototypeOf") ? !1 : !0
                },
                isEmptyObject: function(t) {
                    var e;
                    for (e in t) return !1;
                    return !0
                },
                type: function(t) {
                    return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? G[X.call(t)] || "object" : typeof t
                },
                globalEval: function(t) {
                    var e, n = eval;
                    t = Z.trim(t), t && (1 === t.indexOf("use strict") ? (e = Q.createElement("script"), e.text = t, Q.head.appendChild(e).parentNode.removeChild(e)) : n(t))
                },
                camelCase: function(t) {
                    return t.replace(et, "ms-").replace(nt, rt)
                },
                nodeName: function(t, e) {
                    return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
                },
                each: function(t, e, r) {
                    var i, o = 0,
                        a = t.length,
                        s = n(t);
                    if (r) {
                        if (s)
                            for (; a > o && (i = e.apply(t[o], r), i !== !1); o++);
                        else
                            for (o in t)
                                if (i = e.apply(t[o], r), i === !1) break
                    } else if (s)
                        for (; a > o && (i = e.call(t[o], o, t[o]), i !== !1); o++);
                    else
                        for (o in t)
                            if (i = e.call(t[o], o, t[o]), i === !1) break; return t
                },
                trim: function(t) {
                    return null == t ? "" : (t + "").replace(tt, "")
                },
                makeArray: function(t, e) {
                    var r = e || [];
                    return null != t && (n(Object(t)) ? Z.merge(r, "string" == typeof t ? [t] : t) : z.call(r, t)), r
                },
                inArray: function(t, e, n) {
                    return null == e ? -1 : V.call(e, t, n)
                },
                merge: function(t, e) {
                    for (var n = +e.length, r = 0, i = t.length; n > r; r++) t[i++] = e[r];
                    return t.length = i, t
                },
                grep: function(t, e, n) {
                    for (var r, i = [], o = 0, a = t.length, s = !n; a > o; o++) r = !e(t[o], o), r !== s && i.push(t[o]);
                    return i
                },
                map: function(t, e, r) {
                    var i, o = 0,
                        a = t.length,
                        s = n(t),
                        u = [];
                    if (s)
                        for (; a > o; o++) i = e(t[o], o, r), null != i && u.push(i);
                    else
                        for (o in t) i = e(t[o], o, r), null != i && u.push(i);
                    return W.apply([], u)
                },
                guid: 1,
                proxy: function(t, e) {
                    var n, r, i;
                    return "string" == typeof e && (n = t[e], e = t, t = n), Z.isFunction(t) ? (r = U.call(arguments, 2), i = function() {
                        return t.apply(e || this, r.concat(U.call(arguments)))
                    }, i.guid = t.guid = t.guid || Z.guid++, i) : void 0
                },
                now: Date.now,
                support: Y
            }), Z.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(t, e) {
                G["[object " + e + "]"] = e.toLowerCase()
            });
            var it = function(t) {
                function e(t, e, n, r) {
                    var i, o, a, s, u, c, f, h, d, g;
                    if ((e ? e.ownerDocument || e : M) !== I && R(e), e = e || I, n = n || [], s = e.nodeType, "string" != typeof t || !t || 1 !== s && 9 !== s && 11 !== s) return n;
                    if (!r && L) {
                        if (11 !== s && (i = mt.exec(t)))
                            if (a = i[1]) {
                                if (9 === s) {
                                    if (o = e.getElementById(a), !o || !o.parentNode) return n;
                                    if (o.id === a) return n.push(o), n
                                } else if (e.ownerDocument && (o = e.ownerDocument.getElementById(a)) && q(e, o) && o.id === a) return n.push(o), n
                            } else {
                                if (i[2]) return K.apply(n, e.getElementsByTagName(t)), n;
                                if ((a = i[3]) && w.getElementsByClassName) return K.apply(n, e.getElementsByClassName(a)), n
                            }
                        if (w.qsa && (!D || !D.test(t))) {
                            if (h = f = H, d = e, g = 1 !== s && t, 1 === s && "object" !== e.nodeName.toLowerCase()) {
                                for (c = E(t), (f = e.getAttribute("id")) ? h = f.replace(xt, "\\$&") : e.setAttribute("id", h), h = "[id='" + h + "'] ", u = c.length; u--;) c[u] = h + p(c[u]);
                                d = bt.test(t) && l(e.parentNode) || e, g = c.join(",")
                            }
                            if (g) try {
                                return K.apply(n, d.querySelectorAll(g)), n
                            } catch (v) {} finally {
                                f || e.removeAttribute("id")
                            }
                        }
                    }
                    return C(t.replace(ut, "$1"), e, n, r)
                }

                function n() {
                    function t(n, r) {
                        return e.push(n + " ") > _.cacheLength && delete t[e.shift()], t[n + " "] = r
                    }
                    var e = [];
                    return t
                }

                function r(t) {
                    return t[H] = !0, t
                }

                function i(t) {
                    var e = I.createElement("div");
                    try {
                        return !!t(e)
                    } catch (n) {
                        return !1
                    } finally {
                        e.parentNode && e.parentNode.removeChild(e), e = null
                    }
                }

                function o(t, e) {
                    for (var n = t.split("|"), r = t.length; r--;) _.attrHandle[n[r]] = e
                }

                function a(t, e) {
                    var n = e && t,
                        r = n && 1 === t.nodeType && 1 === e.nodeType && (~e.sourceIndex || G) - (~t.sourceIndex || G);
                    if (r) return r;
                    if (n)
                        for (; n = n.nextSibling;)
                            if (n === e) return -1;
                    return t ? 1 : -1
                }

                function s(t) {
                    return function(e) {
                        var n = e.nodeName.toLowerCase();
                        return "input" === n && e.type === t
                    }
                }

                function u(t) {
                    return function(e) {
                        var n = e.nodeName.toLowerCase();
                        return ("input" === n || "button" === n) && e.type === t
                    }
                }

                function c(t) {
                    return r(function(e) {
                        return e = +e, r(function(n, r) {
                            for (var i, o = t([], n.length, e), a = o.length; a--;) n[i = o[a]] && (n[i] = !(r[i] = n[i]))
                        })
                    })
                }

                function l(t) {
                    return t && "undefined" != typeof t.getElementsByTagName && t
                }

                function f() {}

                function p(t) {
                    for (var e = 0, n = t.length, r = ""; n > e; e++) r += t[e].value;
                    return r
                }

                function h(t, e, n) {
                    var r = e.dir,
                        i = n && "parentNode" === r,
                        o = B++;
                    return e.first ? function(e, n, o) {
                        for (; e = e[r];)
                            if (1 === e.nodeType || i) return t(e, n, o)
                    } : function(e, n, a) {
                        var s, u, c = [F, o];
                        if (a) {
                            for (; e = e[r];)
                                if ((1 === e.nodeType || i) && t(e, n, a)) return !0
                        } else
                            for (; e = e[r];)
                                if (1 === e.nodeType || i) {
                                    if (u = e[H] || (e[H] = {}), (s = u[r]) && s[0] === F && s[1] === o) return c[2] = s[2];
                                    if (u[r] = c, c[2] = t(e, n, a)) return !0
                                }
                    }
                }

                function d(t) {
                    return t.length > 1 ? function(e, n, r) {
                        for (var i = t.length; i--;)
                            if (!t[i](e, n, r)) return !1;
                        return !0
                    } : t[0]
                }

                function g(t, n, r) {
                    for (var i = 0, o = n.length; o > i; i++) e(t, n[i], r);
                    return r
                }

                function v(t, e, n, r, i) {
                    for (var o, a = [], s = 0, u = t.length, c = null != e; u > s; s++)(o = t[s]) && (!n || n(o, r, i)) && (a.push(o), c && e.push(s));
                    return a
                }

                function y(t, e, n, i, o, a) {
                    return i && !i[H] && (i = y(i)), o && !o[H] && (o = y(o, a)), r(function(r, a, s, u) {
                        var c, l, f, p = [],
                            h = [],
                            d = a.length,
                            y = r || g(e || "*", s.nodeType ? [s] : s, []),
                            m = !t || !r && e ? y : v(y, p, t, s, u),
                            b = n ? o || (r ? t : d || i) ? [] : a : m;
                        if (n && n(m, b, s, u), i)
                            for (c = v(b, h), i(c, [], s, u), l = c.length; l--;)(f = c[l]) && (b[h[l]] = !(m[h[l]] = f));
                        if (r) {
                            if (o || t) {
                                if (o) {
                                    for (c = [], l = b.length; l--;)(f = b[l]) && c.push(m[l] = f);
                                    o(null, b = [], c, u)
                                }
                                for (l = b.length; l--;)(f = b[l]) && (c = o ? tt(r, f) : p[l]) > -1 && (r[c] = !(a[c] = f))
                            }
                        } else b = v(b === a ? b.splice(d, b.length) : b), o ? o(null, a, b, u) : K.apply(a, b)
                    })
                }

                function m(t) {
                    for (var e, n, r, i = t.length, o = _.relative[t[0].type], a = o || _.relative[" "], s = o ? 1 : 0, u = h(function(t) {
                            return t === e
                        }, a, !0), c = h(function(t) {
                            return tt(e, t) > -1
                        }, a, !0), l = [function(t, n, r) {
                            var i = !o && (r || n !== S) || ((e = n).nodeType ? u(t, n, r) : c(t, n, r));
                            return e = null, i
                        }]; i > s; s++)
                        if (n = _.relative[t[s].type]) l = [h(d(l), n)];
                        else {
                            if (n = _.filter[t[s].type].apply(null, t[s].matches), n[H]) {
                                for (r = ++s; i > r && !_.relative[t[r].type]; r++);
                                return y(s > 1 && d(l), s > 1 && p(t.slice(0, s - 1).concat({
                                    value: " " === t[s - 2].type ? "*" : ""
                                })).replace(ut, "$1"), n, r > s && m(t.slice(s, r)), i > r && m(t = t.slice(r)), i > r && p(t))
                            }
                            l.push(n)
                        }
                    return d(l)
                }

                function b(t, n) {
                    var i = n.length > 0,
                        o = t.length > 0,
                        a = function(r, a, s, u, c) {
                            var l, f, p, h = 0,
                                d = "0",
                                g = r && [],
                                y = [],
                                m = S,
                                b = r || o && _.find.TAG("*", c),
                                x = F += null == m ? 1 : Math.random() || .1,
                                w = b.length;
                            for (c && (S = a !== I && a); d !== w && null != (l = b[d]); d++) {
                                if (o && l) {
                                    for (f = 0; p = t[f++];)
                                        if (p(l, a, s)) {
                                            u.push(l);
                                            break
                                        }
                                    c && (F = x)
                                }
                                i && ((l = !p && l) && h--, r && g.push(l))
                            }
                            if (h += d, i && d !== h) {
                                for (f = 0; p = n[f++];) p(g, y, a, s);
                                if (r) {
                                    if (h > 0)
                                        for (; d--;) g[d] || y[d] || (y[d] = Y.call(u));
                                    y = v(y)
                                }
                                K.apply(u, y), c && !r && y.length > 0 && h + n.length > 1 && e.uniqueSort(u)
                            }
                            return c && (F = x, S = m), g
                        };
                    return i ? r(a) : a
                }
                var x, w, _, k, T, E, j, C, S, A, N, R, I, O, L, D, P, $, q, H = "sizzle" + 1 * new Date,
                    M = t.document,
                    F = 0,
                    B = 0,
                    U = n(),
                    W = n(),
                    z = n(),
                    V = function(t, e) {
                        return t === e && (N = !0), 0
                    },
                    G = 1 << 31,
                    X = {}.hasOwnProperty,
                    J = [],
                    Y = J.pop,
                    Q = J.push,
                    K = J.push,
                    Z = J.slice,
                    tt = function(t, e) {
                        for (var n = 0, r = t.length; r > n; n++)
                            if (t[n] === e) return n;
                        return -1
                    },
                    et = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                    nt = "[\\x20\\t\\r\\n\\f]",
                    rt = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
                    it = rt.replace("w", "w#"),
                    ot = "\\[" + nt + "*(" + rt + ")(?:" + nt + "*([*^$|!~]?=)" + nt + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + it + "))|)" + nt + "*\\]",
                    at = ":(" + rt + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ot + ")*)|.*)\\)|)",
                    st = new RegExp(nt + "+", "g"),
                    ut = new RegExp("^" + nt + "+|((?:^|[^\\\\])(?:\\\\.)*)" + nt + "+$", "g"),
                    ct = new RegExp("^" + nt + "*," + nt + "*"),
                    lt = new RegExp("^" + nt + "*([>+~]|" + nt + ")" + nt + "*"),
                    ft = new RegExp("=" + nt + "*([^\\]'\"]*?)" + nt + "*\\]", "g"),
                    pt = new RegExp(at),
                    ht = new RegExp("^" + it + "$"),
                    dt = {
                        ID: new RegExp("^#(" + rt + ")"),
                        CLASS: new RegExp("^\\.(" + rt + ")"),
                        TAG: new RegExp("^(" + rt.replace("w", "w*") + ")"),
                        ATTR: new RegExp("^" + ot),
                        PSEUDO: new RegExp("^" + at),
                        CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + nt + "*(even|odd|(([+-]|)(\\d*)n|)" + nt + "*(?:([+-]|)" + nt + "*(\\d+)|))" + nt + "*\\)|)", "i"),
                        bool: new RegExp("^(?:" + et + ")$", "i"),
                        needsContext: new RegExp("^" + nt + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + nt + "*((?:-\\d)?\\d*)" + nt + "*\\)|)(?=[^-]|$)", "i")
                    },
                    gt = /^(?:input|select|textarea|button)$/i,
                    vt = /^h\d$/i,
                    yt = /^[^{]+\{\s*\[native \w/,
                    mt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                    bt = /[+~]/,
                    xt = /'|\\/g,
                    wt = new RegExp("\\\\([\\da-f]{1,6}" + nt + "?|(" + nt + ")|.)", "ig"),
                    _t = function(t, e, n) {
                        var r = "0x" + e - 65536;
                        return r !== r || n ? e : 0 > r ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
                    },
                    kt = function() {
                        R()
                    };
                try {
                    K.apply(J = Z.call(M.childNodes), M.childNodes), J[M.childNodes.length].nodeType
                } catch (Tt) {
                    K = {
                        apply: J.length ? function(t, e) {
                            Q.apply(t, Z.call(e))
                        } : function(t, e) {
                            for (var n = t.length, r = 0; t[n++] = e[r++];);
                            t.length = n - 1
                        }
                    }
                }
                w = e.support = {}, T = e.isXML = function(t) {
                    var e = t && (t.ownerDocument || t).documentElement;
                    return e ? "HTML" !== e.nodeName : !1
                }, R = e.setDocument = function(t) {
                    var e, n, r = t ? t.ownerDocument || t : M;
                    return r !== I && 9 === r.nodeType && r.documentElement ? (I = r, O = r.documentElement, n = r.defaultView, n && n !== n.top && (n.addEventListener ? n.addEventListener("unload", kt, !1) : n.attachEvent && n.attachEvent("onunload", kt)), L = !T(r), w.attributes = i(function(t) {
                        return t.className = "i", !t.getAttribute("className")
                    }), w.getElementsByTagName = i(function(t) {
                        return t.appendChild(r.createComment("")), !t.getElementsByTagName("*").length
                    }), w.getElementsByClassName = yt.test(r.getElementsByClassName), w.getById = i(function(t) {
                        return O.appendChild(t).id = H, !r.getElementsByName || !r.getElementsByName(H).length
                    }), w.getById ? (_.find.ID = function(t, e) {
                        if ("undefined" != typeof e.getElementById && L) {
                            var n = e.getElementById(t);
                            return n && n.parentNode ? [n] : []
                        }
                    }, _.filter.ID = function(t) {
                        var e = t.replace(wt, _t);
                        return function(t) {
                            return t.getAttribute("id") === e
                        }
                    }) : (delete _.find.ID, _.filter.ID = function(t) {
                        var e = t.replace(wt, _t);
                        return function(t) {
                            var n = "undefined" != typeof t.getAttributeNode && t.getAttributeNode("id");
                            return n && n.value === e
                        }
                    }), _.find.TAG = w.getElementsByTagName ? function(t, e) {
                        return "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t) : w.qsa ? e.querySelectorAll(t) : void 0
                    } : function(t, e) {
                        var n, r = [],
                            i = 0,
                            o = e.getElementsByTagName(t);
                        if ("*" === t) {
                            for (; n = o[i++];) 1 === n.nodeType && r.push(n);
                            return r
                        }
                        return o
                    }, _.find.CLASS = w.getElementsByClassName && function(t, e) {
                        return L ? e.getElementsByClassName(t) : void 0
                    }, P = [], D = [], (w.qsa = yt.test(r.querySelectorAll)) && (i(function(t) {
                        O.appendChild(t).innerHTML = "<a id='" + H + "'></a><select id='" + H + "-\f]' msallowcapture=''><option selected=''></option></select>", t.querySelectorAll("[msallowcapture^='']").length && D.push("[*^$]=" + nt + "*(?:''|\"\")"), t.querySelectorAll("[selected]").length || D.push("\\[" + nt + "*(?:value|" + et + ")"), t.querySelectorAll("[id~=" + H + "-]").length || D.push("~="), t.querySelectorAll(":checked").length || D.push(":checked"), t.querySelectorAll("a#" + H + "+*").length || D.push(".#.+[+~]")
                    }), i(function(t) {
                        var e = r.createElement("input");
                        e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("name", "D"), t.querySelectorAll("[name=d]").length && D.push("name" + nt + "*[*^$|!~]?="), t.querySelectorAll(":enabled").length || D.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), D.push(",.*:")
                    })), (w.matchesSelector = yt.test($ = O.matches || O.webkitMatchesSelector || O.mozMatchesSelector || O.oMatchesSelector || O.msMatchesSelector)) && i(function(t) {
                        w.disconnectedMatch = $.call(t, "div"), $.call(t, "[s!='']:x"), P.push("!=", at)
                    }), D = D.length && new RegExp(D.join("|")), P = P.length && new RegExp(P.join("|")), e = yt.test(O.compareDocumentPosition), q = e || yt.test(O.contains) ? function(t, e) {
                        var n = 9 === t.nodeType ? t.documentElement : t,
                            r = e && e.parentNode;
                        return t === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(r)))
                    } : function(t, e) {
                        if (e)
                            for (; e = e.parentNode;)
                                if (e === t) return !0;
                        return !1
                    }, V = e ? function(t, e) {
                        if (t === e) return N = !0, 0;
                        var n = !t.compareDocumentPosition - !e.compareDocumentPosition;
                        return n ? n : (n = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1, 1 & n || !w.sortDetached && e.compareDocumentPosition(t) === n ? t === r || t.ownerDocument === M && q(M, t) ? -1 : e === r || e.ownerDocument === M && q(M, e) ? 1 : A ? tt(A, t) - tt(A, e) : 0 : 4 & n ? -1 : 1)
                    } : function(t, e) {
                        if (t === e) return N = !0, 0;
                        var n, i = 0,
                            o = t.parentNode,
                            s = e.parentNode,
                            u = [t],
                            c = [e];
                        if (!o || !s) return t === r ? -1 : e === r ? 1 : o ? -1 : s ? 1 : A ? tt(A, t) - tt(A, e) : 0;
                        if (o === s) return a(t, e);
                        for (n = t; n = n.parentNode;) u.unshift(n);
                        for (n = e; n = n.parentNode;) c.unshift(n);
                        for (; u[i] === c[i];) i++;
                        return i ? a(u[i], c[i]) : u[i] === M ? -1 : c[i] === M ? 1 : 0
                    }, r) : I
                }, e.matches = function(t, n) {
                    return e(t, null, null, n)
                }, e.matchesSelector = function(t, n) {
                    if ((t.ownerDocument || t) !== I && R(t), n = n.replace(ft, "='$1']"), w.matchesSelector && L && (!P || !P.test(n)) && (!D || !D.test(n))) try {
                        var r = $.call(t, n);
                        if (r || w.disconnectedMatch || t.document && 11 !== t.document.nodeType) return r
                    } catch (i) {}
                    return e(n, I, null, [t]).length > 0
                }, e.contains = function(t, e) {
                    return (t.ownerDocument || t) !== I && R(t), q(t, e)
                }, e.attr = function(t, e) {
                    (t.ownerDocument || t) !== I && R(t);
                    var n = _.attrHandle[e.toLowerCase()],
                        r = n && X.call(_.attrHandle, e.toLowerCase()) ? n(t, e, !L) : void 0;
                    return void 0 !== r ? r : w.attributes || !L ? t.getAttribute(e) : (r = t.getAttributeNode(e)) && r.specified ? r.value : null
                }, e.error = function(t) {
                    throw new Error("Syntax error, unrecognized expression: " + t)
                }, e.uniqueSort = function(t) {
                    var e, n = [],
                        r = 0,
                        i = 0;
                    if (N = !w.detectDuplicates, A = !w.sortStable && t.slice(0), t.sort(V), N) {
                        for (; e = t[i++];) e === t[i] && (r = n.push(i));
                        for (; r--;) t.splice(n[r], 1)
                    }
                    return A = null, t
                }, k = e.getText = function(t) {
                    var e, n = "",
                        r = 0,
                        i = t.nodeType;
                    if (i) {
                        if (1 === i || 9 === i || 11 === i) {
                            if ("string" == typeof t.textContent) return t.textContent;
                            for (t = t.firstChild; t; t = t.nextSibling) n += k(t)
                        } else if (3 === i || 4 === i) return t.nodeValue
                    } else
                        for (; e = t[r++];) n += k(e);
                    return n
                }, _ = e.selectors = {
                    cacheLength: 50,
                    createPseudo: r,
                    match: dt,
                    attrHandle: {},
                    find: {},
                    relative: {
                        ">": {
                            dir: "parentNode",
                            first: !0
                        },
                        " ": {
                            dir: "parentNode"
                        },
                        "+": {
                            dir: "previousSibling",
                            first: !0
                        },
                        "~": {
                            dir: "previousSibling"
                        }
                    },
                    preFilter: {
                        ATTR: function(t) {
                            return t[1] = t[1].replace(wt, _t), t[3] = (t[3] || t[4] || t[5] || "").replace(wt, _t), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4)
                        },
                        CHILD: function(t) {
                            return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || e.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && e.error(t[0]), t
                        },
                        PSEUDO: function(t) {
                            var e, n = !t[6] && t[2];
                            return dt.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : n && pt.test(n) && (e = E(n, !0)) && (e = n.indexOf(")", n.length - e) - n.length) && (t[0] = t[0].slice(0, e), t[2] = n.slice(0, e)), t.slice(0, 3))
                        }
                    },
                    filter: {
                        TAG: function(t) {
                            var e = t.replace(wt, _t).toLowerCase();
                            return "*" === t ? function() {
                                return !0
                            } : function(t) {
                                return t.nodeName && t.nodeName.toLowerCase() === e
                            }
                        },
                        CLASS: function(t) {
                            var e = U[t + " "];
                            return e || (e = new RegExp("(^|" + nt + ")" + t + "(" + nt + "|$)")) && U(t, function(t) {
                                return e.test("string" == typeof t.className && t.className || "undefined" != typeof t.getAttribute && t.getAttribute("class") || "")
                            })
                        },
                        ATTR: function(t, n, r) {
                            return function(i) {
                                var o = e.attr(i, t);
                                return null == o ? "!=" === n : n ? (o += "", "=" === n ? o === r : "!=" === n ? o !== r : "^=" === n ? r && 0 === o.indexOf(r) : "*=" === n ? r && o.indexOf(r) > -1 : "$=" === n ? r && o.slice(-r.length) === r : "~=" === n ? (" " + o.replace(st, " ") + " ").indexOf(r) > -1 : "|=" === n ? o === r || o.slice(0, r.length + 1) === r + "-" : !1) : !0
                            }
                        },
                        CHILD: function(t, e, n, r, i) {
                            var o = "nth" !== t.slice(0, 3),
                                a = "last" !== t.slice(-4),
                                s = "of-type" === e;
                            return 1 === r && 0 === i ? function(t) {
                                return !!t.parentNode
                            } : function(e, n, u) {
                                var c, l, f, p, h, d, g = o !== a ? "nextSibling" : "previousSibling",
                                    v = e.parentNode,
                                    y = s && e.nodeName.toLowerCase(),
                                    m = !u && !s;
                                if (v) {
                                    if (o) {
                                        for (; g;) {
                                            for (f = e; f = f[g];)
                                                if (s ? f.nodeName.toLowerCase() === y : 1 === f.nodeType) return !1;
                                            d = g = "only" === t && !d && "nextSibling"
                                        }
                                        return !0
                                    }
                                    if (d = [a ? v.firstChild : v.lastChild], a && m) {
                                        for (l = v[H] || (v[H] = {}), c = l[t] || [], h = c[0] === F && c[1], p = c[0] === F && c[2], f = h && v.childNodes[h]; f = ++h && f && f[g] || (p = h = 0) || d.pop();)
                                            if (1 === f.nodeType && ++p && f === e) {
                                                l[t] = [F, h, p];
                                                break
                                            }
                                    } else if (m && (c = (e[H] || (e[H] = {}))[t]) && c[0] === F) p = c[1];
                                    else
                                        for (;
                                            (f = ++h && f && f[g] || (p = h = 0) || d.pop()) && ((s ? f.nodeName.toLowerCase() !== y : 1 !== f.nodeType) || !++p || (m && ((f[H] || (f[H] = {}))[t] = [F, p]), f !== e)););
                                    return p -= i, p === r || p % r === 0 && p / r >= 0
                                }
                            }
                        },
                        PSEUDO: function(t, n) {
                            var i, o = _.pseudos[t] || _.setFilters[t.toLowerCase()] || e.error("unsupported pseudo: " + t);
                            return o[H] ? o(n) : o.length > 1 ? (i = [t, t, "", n], _.setFilters.hasOwnProperty(t.toLowerCase()) ? r(function(t, e) {
                                for (var r, i = o(t, n), a = i.length; a--;) r = tt(t, i[a]), t[r] = !(e[r] = i[a])
                            }) : function(t) {
                                return o(t, 0, i)
                            }) : o
                        }
                    },
                    pseudos: {
                        not: r(function(t) {
                            var e = [],
                                n = [],
                                i = j(t.replace(ut, "$1"));
                            return i[H] ? r(function(t, e, n, r) {
                                for (var o, a = i(t, null, r, []), s = t.length; s--;)(o = a[s]) && (t[s] = !(e[s] = o))
                            }) : function(t, r, o) {
                                return e[0] = t, i(e, null, o, n), e[0] = null, !n.pop()
                            }
                        }),
                        has: r(function(t) {
                            return function(n) {
                                return e(t, n).length > 0
                            }
                        }),
                        contains: r(function(t) {
                            return t = t.replace(wt, _t),
                                function(e) {
                                    return (e.textContent || e.innerText || k(e)).indexOf(t) > -1
                                }
                        }),
                        lang: r(function(t) {
                            return ht.test(t || "") || e.error("unsupported lang: " + t), t = t.replace(wt, _t).toLowerCase(),
                                function(e) {
                                    var n;
                                    do
                                        if (n = L ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return n = n.toLowerCase(), n === t || 0 === n.indexOf(t + "-");
                                    while ((e = e.parentNode) && 1 === e.nodeType);
                                    return !1
                                }
                        }),
                        target: function(e) {
                            var n = t.location && t.location.hash;
                            return n && n.slice(1) === e.id
                        },
                        root: function(t) {
                            return t === O
                        },
                        focus: function(t) {
                            return t === I.activeElement && (!I.hasFocus || I.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
                        },
                        enabled: function(t) {
                            return t.disabled === !1
                        },
                        disabled: function(t) {
                            return t.disabled === !0
                        },
                        checked: function(t) {
                            var e = t.nodeName.toLowerCase();
                            return "input" === e && !!t.checked || "option" === e && !!t.selected
                        },
                        selected: function(t) {
                            return t.parentNode && t.parentNode.selectedIndex, t.selected === !0
                        },
                        empty: function(t) {
                            for (t = t.firstChild; t; t = t.nextSibling)
                                if (t.nodeType < 6) return !1;
                            return !0
                        },
                        parent: function(t) {
                            return !_.pseudos.empty(t)
                        },
                        header: function(t) {
                            return vt.test(t.nodeName)
                        },
                        input: function(t) {
                            return gt.test(t.nodeName)
                        },
                        button: function(t) {
                            var e = t.nodeName.toLowerCase();
                            return "input" === e && "button" === t.type || "button" === e
                        },
                        text: function(t) {
                            var e;
                            return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase())
                        },
                        first: c(function() {
                            return [0]
                        }),
                        last: c(function(t, e) {
                            return [e - 1]
                        }),
                        eq: c(function(t, e, n) {
                            return [0 > n ? n + e : n]
                        }),
                        even: c(function(t, e) {
                            for (var n = 0; e > n; n += 2) t.push(n);
                            return t
                        }),
                        odd: c(function(t, e) {
                            for (var n = 1; e > n; n += 2) t.push(n);
                            return t
                        }),
                        lt: c(function(t, e, n) {
                            for (var r = 0 > n ? n + e : n; --r >= 0;) t.push(r);
                            return t
                        }),
                        gt: c(function(t, e, n) {
                            for (var r = 0 > n ? n + e : n; ++r < e;) t.push(r);
                            return t
                        })
                    }
                }, _.pseudos.nth = _.pseudos.eq;
                for (x in {
                        radio: !0,
                        checkbox: !0,
                        file: !0,
                        password: !0,
                        image: !0
                    }) _.pseudos[x] = s(x);
                for (x in {
                        submit: !0,
                        reset: !0
                    }) _.pseudos[x] = u(x);
                return f.prototype = _.filters = _.pseudos, _.setFilters = new f, E = e.tokenize = function(t, n) {
                    var r, i, o, a, s, u, c, l = W[t + " "];
                    if (l) return n ? 0 : l.slice(0);
                    for (s = t, u = [], c = _.preFilter; s;) {
                        (!r || (i = ct.exec(s))) && (i && (s = s.slice(i[0].length) || s), u.push(o = [])), r = !1, (i = lt.exec(s)) && (r = i.shift(), o.push({
                            value: r,
                            type: i[0].replace(ut, " ")
                        }), s = s.slice(r.length));
                        for (a in _.filter) !(i = dt[a].exec(s)) || c[a] && !(i = c[a](i)) || (r = i.shift(), o.push({
                            value: r,
                            type: a,
                            matches: i
                        }), s = s.slice(r.length));
                        if (!r) break
                    }
                    return n ? s.length : s ? e.error(t) : W(t, u).slice(0)
                }, j = e.compile = function(t, e) {
                    var n, r = [],
                        i = [],
                        o = z[t + " "];
                    if (!o) {
                        for (e || (e = E(t)), n = e.length; n--;) o = m(e[n]), o[H] ? r.push(o) : i.push(o);
                        o = z(t, b(i, r)), o.selector = t
                    }
                    return o
                }, C = e.select = function(t, e, n, r) {
                    var i, o, a, s, u, c = "function" == typeof t && t,
                        f = !r && E(t = c.selector || t);
                    if (n = n || [], 1 === f.length) {
                        if (o = f[0] = f[0].slice(0), o.length > 2 && "ID" === (a = o[0]).type && w.getById && 9 === e.nodeType && L && _.relative[o[1].type]) {
                            if (e = (_.find.ID(a.matches[0].replace(wt, _t), e) || [])[0], !e) return n;
                            c && (e = e.parentNode), t = t.slice(o.shift().value.length)
                        }
                        for (i = dt.needsContext.test(t) ? 0 : o.length; i-- && (a = o[i], !_.relative[s = a.type]);)
                            if ((u = _.find[s]) && (r = u(a.matches[0].replace(wt, _t), bt.test(o[0].type) && l(e.parentNode) || e))) {
                                if (o.splice(i, 1), t = r.length && p(o), !t) return K.apply(n, r), n;
                                break
                            }
                    }
                    return (c || j(t, f))(r, e, !L, n, bt.test(t) && l(e.parentNode) || e), n
                }, w.sortStable = H.split("").sort(V).join("") === H, w.detectDuplicates = !!N, R(), w.sortDetached = i(function(t) {
                    return 1 & t.compareDocumentPosition(I.createElement("div"))
                }), i(function(t) {
                    return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href")
                }) || o("type|href|height|width", function(t, e, n) {
                    return n ? void 0 : t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
                }), w.attributes && i(function(t) {
                    return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value")
                }) || o("value", function(t, e, n) {
                    return n || "input" !== t.nodeName.toLowerCase() ? void 0 : t.defaultValue
                }), i(function(t) {
                    return null == t.getAttribute("disabled")
                }) || o(et, function(t, e, n) {
                    var r;
                    return n ? void 0 : t[e] === !0 ? e.toLowerCase() : (r = t.getAttributeNode(e)) && r.specified ? r.value : null
                }), e
            }(t);
            Z.find = it, Z.expr = it.selectors, Z.expr[":"] = Z.expr.pseudos, Z.unique = it.uniqueSort, Z.text = it.getText, Z.isXMLDoc = it.isXML, Z.contains = it.contains;
            var ot = Z.expr.match.needsContext,
                at = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
                st = /^.[^:#\[\.,]*$/;
            Z.filter = function(t, e, n) {
                var r = e[0];
                return n && (t = ":not(" + t + ")"), 1 === e.length && 1 === r.nodeType ? Z.find.matchesSelector(r, t) ? [r] : [] : Z.find.matches(t, Z.grep(e, function(t) {
                    return 1 === t.nodeType
                }))
            }, Z.fn.extend({
                find: function(t) {
                    var e, n = this.length,
                        r = [],
                        i = this;
                    if ("string" != typeof t) return this.pushStack(Z(t).filter(function() {
                        for (e = 0; n > e; e++)
                            if (Z.contains(i[e], this)) return !0
                    }));
                    for (e = 0; n > e; e++) Z.find(t, i[e], r);
                    return r = this.pushStack(n > 1 ? Z.unique(r) : r), r.selector = this.selector ? this.selector + " " + t : t, r
                },
                filter: function(t) {
                    return this.pushStack(r(this, t || [], !1))
                },
                not: function(t) {
                    return this.pushStack(r(this, t || [], !0))
                },
                is: function(t) {
                    return !!r(this, "string" == typeof t && ot.test(t) ? Z(t) : t || [], !1).length
                }
            });
            var ut, ct = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
                lt = Z.fn.init = function(t, e) {
                    var n, r;
                    if (!t) return this;
                    if ("string" == typeof t) {
                        if (n = "<" === t[0] && ">" === t[t.length - 1] && t.length >= 3 ? [null, t, null] : ct.exec(t), !n || !n[1] && e) return !e || e.jquery ? (e || ut).find(t) : this.constructor(e).find(t);
                        if (n[1]) {
                            if (e = e instanceof Z ? e[0] : e, Z.merge(this, Z.parseHTML(n[1], e && e.nodeType ? e.ownerDocument || e : Q, !0)), at.test(n[1]) && Z.isPlainObject(e))
                                for (n in e) Z.isFunction(this[n]) ? this[n](e[n]) : this.attr(n, e[n]);
                            return this
                        }
                        return r = Q.getElementById(n[2]), r && r.parentNode && (this.length = 1, this[0] = r), this.context = Q, this.selector = t, this
                    }
                    return t.nodeType ? (this.context = this[0] = t, this.length = 1, this) : Z.isFunction(t) ? "undefined" != typeof ut.ready ? ut.ready(t) : t(Z) : (void 0 !== t.selector && (this.selector = t.selector, this.context = t.context), Z.makeArray(t, this))
                };
            lt.prototype = Z.fn, ut = Z(Q);
            var ft = /^(?:parents|prev(?:Until|All))/,
                pt = {
                    children: !0,
                    contents: !0,
                    next: !0,
                    prev: !0
                };
            Z.extend({
                dir: function(t, e, n) {
                    for (var r = [], i = void 0 !== n;
                        (t = t[e]) && 9 !== t.nodeType;)
                        if (1 === t.nodeType) {
                            if (i && Z(t).is(n)) break;
                            r.push(t)
                        }
                    return r
                },
                sibling: function(t, e) {
                    for (var n = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && n.push(t);
                    return n
                }
            }), Z.fn.extend({
                has: function(t) {
                    var e = Z(t, this),
                        n = e.length;
                    return this.filter(function() {
                        for (var t = 0; n > t; t++)
                            if (Z.contains(this, e[t])) return !0
                    })
                },
                closest: function(t, e) {
                    for (var n, r = 0, i = this.length, o = [], a = ot.test(t) || "string" != typeof t ? Z(t, e || this.context) : 0; i > r; r++)
                        for (n = this[r]; n && n !== e; n = n.parentNode)
                            if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && Z.find.matchesSelector(n, t))) {
                                o.push(n);
                                break
                            }
                    return this.pushStack(o.length > 1 ? Z.unique(o) : o)
                },
                index: function(t) {
                    return t ? "string" == typeof t ? V.call(Z(t), this[0]) : V.call(this, t.jquery ? t[0] : t) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
                },
                add: function(t, e) {
                    return this.pushStack(Z.unique(Z.merge(this.get(), Z(t, e))))
                },
                addBack: function(t) {
                    return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
                }
            }), Z.each({
                parent: function(t) {
                    var e = t.parentNode;
                    return e && 11 !== e.nodeType ? e : null
                },
                parents: function(t) {
                    return Z.dir(t, "parentNode")
                },
                parentsUntil: function(t, e, n) {
                    return Z.dir(t, "parentNode", n)
                },
                next: function(t) {
                    return i(t, "nextSibling")
                },
                prev: function(t) {
                    return i(t, "previousSibling")
                },
                nextAll: function(t) {
                    return Z.dir(t, "nextSibling")
                },
                prevAll: function(t) {
                    return Z.dir(t, "previousSibling")
                },
                nextUntil: function(t, e, n) {
                    return Z.dir(t, "nextSibling", n)
                },
                prevUntil: function(t, e, n) {
                    return Z.dir(t, "previousSibling", n)
                },
                siblings: function(t) {
                    return Z.sibling((t.parentNode || {}).firstChild, t)
                },
                children: function(t) {
                    return Z.sibling(t.firstChild)
                },
                contents: function(t) {
                    return t.contentDocument || Z.merge([], t.childNodes)
                }
            }, function(t, e) {
                Z.fn[t] = function(n, r) {
                    var i = Z.map(this, e, n);
                    return "Until" !== t.slice(-5) && (r = n), r && "string" == typeof r && (i = Z.filter(r, i)), this.length > 1 && (pt[t] || Z.unique(i), ft.test(t) && i.reverse()), this.pushStack(i)
                }
            });
            var ht = /\S+/g,
                dt = {};
            Z.Callbacks = function(t) {
                t = "string" == typeof t ? dt[t] || o(t) : Z.extend({}, t);
                var e, n, r, i, a, s, u = [],
                    c = !t.once && [],
                    l = function(o) {
                        for (e = t.memory && o, n = !0, s = i || 0, i = 0, a = u.length, r = !0; u && a > s; s++)
                            if (u[s].apply(o[0], o[1]) === !1 && t.stopOnFalse) {
                                e = !1;
                                break
                            }
                        r = !1, u && (c ? c.length && l(c.shift()) : e ? u = [] : f.disable())
                    },
                    f = {
                        add: function() {
                            if (u) {
                                var n = u.length;
                                ! function o(e) {
                                    Z.each(e, function(e, n) {
                                        var r = Z.type(n);
                                        "function" === r ? t.unique && f.has(n) || u.push(n) : n && n.length && "string" !== r && o(n)
                                    })
                                }(arguments), r ? a = u.length : e && (i = n, l(e))
                            }
                            return this
                        },
                        remove: function() {
                            return u && Z.each(arguments, function(t, e) {
                                for (var n;
                                    (n = Z.inArray(e, u, n)) > -1;) u.splice(n, 1), r && (a >= n && a--, s >= n && s--)
                            }), this
                        },
                        has: function(t) {
                            return t ? Z.inArray(t, u) > -1 : !(!u || !u.length)
                        },
                        empty: function() {
                            return u = [], a = 0, this
                        },
                        disable: function() {
                            return u = c = e = void 0, this
                        },
                        disabled: function() {
                            return !u
                        },
                        lock: function() {
                            return c = void 0, e || f.disable(), this
                        },
                        locked: function() {
                            return !c
                        },
                        fireWith: function(t, e) {
                            return !u || n && !c || (e = e || [], e = [t, e.slice ? e.slice() : e], r ? c.push(e) : l(e)), this
                        },
                        fire: function() {
                            return f.fireWith(this, arguments), this
                        },
                        fired: function() {
                            return !!n
                        }
                    };
                return f
            }, Z.extend({
                Deferred: function(t) {
                    var e = [
                            ["resolve", "done", Z.Callbacks("once memory"), "resolved"],
                            ["reject", "fail", Z.Callbacks("once memory"), "rejected"],
                            ["notify", "progress", Z.Callbacks("memory")]
                        ],
                        n = "pending",
                        r = {
                            state: function() {
                                return n
                            },
                            always: function() {
                                return i.done(arguments).fail(arguments), this
                            },
                            then: function() {
                                var t = arguments;
                                return Z.Deferred(function(n) {
                                    Z.each(e, function(e, o) {
                                        var a = Z.isFunction(t[e]) && t[e];
                                        i[o[1]](function() {
                                            var t = a && a.apply(this, arguments);
                                            t && Z.isFunction(t.promise) ? t.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[o[0] + "With"](this === r ? n.promise() : this, a ? [t] : arguments)
                                        })
                                    }), t = null
                                }).promise()
                            },
                            promise: function(t) {
                                return null != t ? Z.extend(t, r) : r
                            }
                        },
                        i = {};
                    return r.pipe = r.then, Z.each(e, function(t, o) {
                        var a = o[2],
                            s = o[3];
                        r[o[1]] = a.add, s && a.add(function() {
                            n = s
                        }, e[1 ^ t][2].disable, e[2][2].lock), i[o[0]] = function() {
                            return i[o[0] + "With"](this === i ? r : this, arguments), this
                        }, i[o[0] + "With"] = a.fireWith
                    }), r.promise(i), t && t.call(i, i), i
                },
                when: function(t) {
                    var e, n, r, i = 0,
                        o = U.call(arguments),
                        a = o.length,
                        s = 1 !== a || t && Z.isFunction(t.promise) ? a : 0,
                        u = 1 === s ? t : Z.Deferred(),
                        c = function(t, n, r) {
                            return function(i) {
                                n[t] = this, r[t] = arguments.length > 1 ? U.call(arguments) : i, r === e ? u.notifyWith(n, r) : --s || u.resolveWith(n, r)
                            }
                        };
                    if (a > 1)
                        for (e = new Array(a), n = new Array(a), r = new Array(a); a > i; i++) o[i] && Z.isFunction(o[i].promise) ? o[i].promise().done(c(i, r, o)).fail(u.reject).progress(c(i, n, e)) : --s;
                    return s || u.resolveWith(r, o), u.promise()
                }
            });
            var gt;
            Z.fn.ready = function(t) {
                return Z.ready.promise().done(t), this
            }, Z.extend({
                isReady: !1,
                readyWait: 1,
                holdReady: function(t) {
                    t ? Z.readyWait++ : Z.ready(!0)
                },
                ready: function(t) {
                    (t === !0 ? --Z.readyWait : Z.isReady) || (Z.isReady = !0, t !== !0 && --Z.readyWait > 0 || (gt.resolveWith(Q, [Z]), Z.fn.triggerHandler && (Z(Q).triggerHandler("ready"), Z(Q).off("ready"))))
                }
            }), Z.ready.promise = function(e) {
                return gt || (gt = Z.Deferred(), "complete" === Q.readyState ? setTimeout(Z.ready) : (Q.addEventListener("DOMContentLoaded", a, !1), t.addEventListener("load", a, !1))), gt.promise(e)
            }, Z.ready.promise();
            var vt = Z.access = function(t, e, n, r, i, o, a) {
                var s = 0,
                    u = t.length,
                    c = null == n;
                if ("object" === Z.type(n)) {
                    i = !0;
                    for (s in n) Z.access(t, e, s, n[s], !0, o, a)
                } else if (void 0 !== r && (i = !0, Z.isFunction(r) || (a = !0), c && (a ? (e.call(t, r), e = null) : (c = e, e = function(t, e, n) {
                        return c.call(Z(t), n)
                    })), e))
                    for (; u > s; s++) e(t[s], n, a ? r : r.call(t[s], s, e(t[s], n)));
                return i ? t : c ? e.call(t) : u ? e(t[0], n) : o
            };
            Z.acceptData = function(t) {
                return 1 === t.nodeType || 9 === t.nodeType || !+t.nodeType
            }, s.uid = 1, s.accepts = Z.acceptData, s.prototype = {
                key: function(t) {
                    if (!s.accepts(t)) return 0;
                    var e = {},
                        n = t[this.expando];
                    if (!n) {
                        n = s.uid++;
                        try {
                            e[this.expando] = {
                                value: n
                            }, Object.defineProperties(t, e)
                        } catch (r) {
                            e[this.expando] = n, Z.extend(t, e)
                        }
                    }
                    return this.cache[n] || (this.cache[n] = {}), n
                },
                set: function(t, e, n) {
                    var r, i = this.key(t),
                        o = this.cache[i];
                    if ("string" == typeof e) o[e] = n;
                    else if (Z.isEmptyObject(o)) Z.extend(this.cache[i], e);
                    else
                        for (r in e) o[r] = e[r];
                    return o
                },
                get: function(t, e) {
                    var n = this.cache[this.key(t)];
                    return void 0 === e ? n : n[e]
                },
                access: function(t, e, n) {
                    var r;
                    return void 0 === e || e && "string" == typeof e && void 0 === n ? (r = this.get(t, e), void 0 !== r ? r : this.get(t, Z.camelCase(e))) : (this.set(t, e, n), void 0 !== n ? n : e)
                },
                remove: function(t, e) {
                    var n, r, i, o = this.key(t),
                        a = this.cache[o];
                    if (void 0 === e) this.cache[o] = {};
                    else {
                        Z.isArray(e) ? r = e.concat(e.map(Z.camelCase)) : (i = Z.camelCase(e), e in a ? r = [e, i] : (r = i, r = r in a ? [r] : r.match(ht) || [])), n = r.length;
                        for (; n--;) delete a[r[n]]
                    }
                },
                hasData: function(t) {
                    return !Z.isEmptyObject(this.cache[t[this.expando]] || {})
                },
                discard: function(t) {
                    t[this.expando] && delete this.cache[t[this.expando]]
                }
            };
            var yt = new s,
                mt = new s,
                bt = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
                xt = /([A-Z])/g;
            Z.extend({
                hasData: function(t) {
                    return mt.hasData(t) || yt.hasData(t)
                },
                data: function(t, e, n) {
                    return mt.access(t, e, n)
                },
                removeData: function(t, e) {
                    mt.remove(t, e)
                },
                _data: function(t, e, n) {
                    return yt.access(t, e, n)
                },
                _removeData: function(t, e) {
                    yt.remove(t, e)
                }
            }), Z.fn.extend({
                data: function(t, e) {
                    var n, r, i, o = this[0],
                        a = o && o.attributes;
                    if (void 0 === t) {
                        if (this.length && (i = mt.get(o), 1 === o.nodeType && !yt.get(o, "hasDataAttrs"))) {
                            for (n = a.length; n--;) a[n] && (r = a[n].name, 0 === r.indexOf("data-") && (r = Z.camelCase(r.slice(5)), u(o, r, i[r])));
                            yt.set(o, "hasDataAttrs", !0)
                        }
                        return i
                    }
                    return "object" == typeof t ? this.each(function() {
                        mt.set(this, t)
                    }) : vt(this, function(e) {
                        var n, r = Z.camelCase(t);
                        if (o && void 0 === e) {
                            if (n = mt.get(o, t), void 0 !== n) return n;
                            if (n = mt.get(o, r), void 0 !== n) return n;
                            if (n = u(o, r, void 0), void 0 !== n) return n
                        } else this.each(function() {
                            var n = mt.get(this, r);
                            mt.set(this, r, e), -1 !== t.indexOf("-") && void 0 !== n && mt.set(this, t, e)
                        })
                    }, null, e, arguments.length > 1, null, !0)
                },
                removeData: function(t) {
                    return this.each(function() {
                        mt.remove(this, t)
                    })
                }
            }), Z.extend({
                queue: function(t, e, n) {
                    var r;
                    return t ? (e = (e || "fx") + "queue", r = yt.get(t, e), n && (!r || Z.isArray(n) ? r = yt.access(t, e, Z.makeArray(n)) : r.push(n)), r || []) : void 0
                },
                dequeue: function(t, e) {
                    e = e || "fx";
                    var n = Z.queue(t, e),
                        r = n.length,
                        i = n.shift(),
                        o = Z._queueHooks(t, e),
                        a = function() {
                            Z.dequeue(t, e)
                        };
                    "inprogress" === i && (i = n.shift(), r--), i && ("fx" === e && n.unshift("inprogress"), delete o.stop, i.call(t, a, o)), !r && o && o.empty.fire()
                },
                _queueHooks: function(t, e) {
                    var n = e + "queueHooks";
                    return yt.get(t, n) || yt.access(t, n, {
                        empty: Z.Callbacks("once memory").add(function() {
                            yt.remove(t, [e + "queue", n])
                        })
                    })
                }
            }), Z.fn.extend({
                queue: function(t, e) {
                    var n = 2;
                    return "string" != typeof t && (e = t, t = "fx", n--), arguments.length < n ? Z.queue(this[0], t) : void 0 === e ? this : this.each(function() {
                        var n = Z.queue(this, t, e);
                        Z._queueHooks(this, t), "fx" === t && "inprogress" !== n[0] && Z.dequeue(this, t)
                    })
                },
                dequeue: function(t) {
                    return this.each(function() {
                        Z.dequeue(this, t)
                    })
                },
                clearQueue: function(t) {
                    return this.queue(t || "fx", [])
                },
                promise: function(t, e) {
                    var n, r = 1,
                        i = Z.Deferred(),
                        o = this,
                        a = this.length,
                        s = function() {
                            --r || i.resolveWith(o, [o])
                        };
                    for ("string" != typeof t && (e = t, t = void 0), t = t || "fx"; a--;) n = yt.get(o[a], t + "queueHooks"), n && n.empty && (r++, n.empty.add(s));
                    return s(), i.promise(e)
                }
            });
            var wt = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
                _t = ["Top", "Right", "Bottom", "Left"],
                kt = function(t, e) {
                    return t = e || t, "none" === Z.css(t, "display") || !Z.contains(t.ownerDocument, t)
                },
                Tt = /^(?:checkbox|radio)$/i;
            ! function() {
                var t = Q.createDocumentFragment(),
                    e = t.appendChild(Q.createElement("div")),
                    n = Q.createElement("input");
                n.setAttribute("type", "radio"), n.setAttribute("checked", "checked"), n.setAttribute("name", "t"), e.appendChild(n), Y.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, e.innerHTML = "<textarea>x</textarea>", Y.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue
            }();
            var Et = "undefined";
            Y.focusinBubbles = "onfocusin" in t;
            var jt = /^key/,
                Ct = /^(?:mouse|pointer|contextmenu)|click/,
                St = /^(?:focusinfocus|focusoutblur)$/,
                At = /^([^.]*)(?:\.(.+)|)$/;
            Z.event = {
                global: {},
                add: function(t, e, n, r, i) {
                    var o, a, s, u, c, l, f, p, h, d, g, v = yt.get(t);
                    if (v)
                        for (n.handler && (o = n, n = o.handler, i = o.selector), n.guid || (n.guid = Z.guid++), (u = v.events) || (u = v.events = {}), (a = v.handle) || (a = v.handle = function(e) {
                                return typeof Z !== Et && Z.event.triggered !== e.type ? Z.event.dispatch.apply(t, arguments) : void 0
                            }), e = (e || "").match(ht) || [""], c = e.length; c--;) s = At.exec(e[c]) || [], h = g = s[1], d = (s[2] || "").split(".").sort(), h && (f = Z.event.special[h] || {}, h = (i ? f.delegateType : f.bindType) || h, f = Z.event.special[h] || {}, l = Z.extend({
                            type: h,
                            origType: g,
                            data: r,
                            handler: n,
                            guid: n.guid,
                            selector: i,
                            needsContext: i && Z.expr.match.needsContext.test(i),
                            namespace: d.join(".")
                        }, o), (p = u[h]) || (p = u[h] = [], p.delegateCount = 0, f.setup && f.setup.call(t, r, d, a) !== !1 || t.addEventListener && t.addEventListener(h, a, !1)), f.add && (f.add.call(t, l), l.handler.guid || (l.handler.guid = n.guid)), i ? p.splice(p.delegateCount++, 0, l) : p.push(l), Z.event.global[h] = !0)
                },
                remove: function(t, e, n, r, i) {
                    var o, a, s, u, c, l, f, p, h, d, g, v = yt.hasData(t) && yt.get(t);
                    if (v && (u = v.events)) {
                        for (e = (e || "").match(ht) || [""], c = e.length; c--;)
                            if (s = At.exec(e[c]) || [], h = g = s[1], d = (s[2] || "").split(".").sort(), h) {
                                for (f = Z.event.special[h] || {}, h = (r ? f.delegateType : f.bindType) || h, p = u[h] || [], s = s[2] && new RegExp("(^|\\.)" + d.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = p.length; o--;) l = p[o], !i && g !== l.origType || n && n.guid !== l.guid || s && !s.test(l.namespace) || r && r !== l.selector && ("**" !== r || !l.selector) || (p.splice(o, 1), l.selector && p.delegateCount--, f.remove && f.remove.call(t, l));
                                a && !p.length && (f.teardown && f.teardown.call(t, d, v.handle) !== !1 || Z.removeEvent(t, h, v.handle), delete u[h])
                            } else
                                for (h in u) Z.event.remove(t, h + e[c], n, r, !0);
                        Z.isEmptyObject(u) && (delete v.handle, yt.remove(t, "events"))
                    }
                },
                trigger: function(e, n, r, i) {
                    var o, a, s, u, c, l, f, p = [r || Q],
                        h = J.call(e, "type") ? e.type : e,
                        d = J.call(e, "namespace") ? e.namespace.split(".") : [];
                    if (a = s = r = r || Q, 3 !== r.nodeType && 8 !== r.nodeType && !St.test(h + Z.event.triggered) && (h.indexOf(".") >= 0 && (d = h.split("."), h = d.shift(), d.sort()), c = h.indexOf(":") < 0 && "on" + h, e = e[Z.expando] ? e : new Z.Event(h, "object" == typeof e && e), e.isTrigger = i ? 2 : 3, e.namespace = d.join("."), e.namespace_re = e.namespace ? new RegExp("(^|\\.)" + d.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = r), n = null == n ? [e] : Z.makeArray(n, [e]), f = Z.event.special[h] || {}, i || !f.trigger || f.trigger.apply(r, n) !== !1)) {
                        if (!i && !f.noBubble && !Z.isWindow(r)) {
                            for (u = f.delegateType || h, St.test(u + h) || (a = a.parentNode); a; a = a.parentNode) p.push(a), s = a;
                            s === (r.ownerDocument || Q) && p.push(s.defaultView || s.parentWindow || t)
                        }
                        for (o = 0;
                            (a = p[o++]) && !e.isPropagationStopped();) e.type = o > 1 ? u : f.bindType || h, l = (yt.get(a, "events") || {})[e.type] && yt.get(a, "handle"), l && l.apply(a, n), l = c && a[c], l && l.apply && Z.acceptData(a) && (e.result = l.apply(a, n), e.result === !1 && e.preventDefault());
                        return e.type = h, i || e.isDefaultPrevented() || f._default && f._default.apply(p.pop(), n) !== !1 || !Z.acceptData(r) || c && Z.isFunction(r[h]) && !Z.isWindow(r) && (s = r[c], s && (r[c] = null), Z.event.triggered = h, r[h](), Z.event.triggered = void 0, s && (r[c] = s)), e.result
                    }
                },
                dispatch: function(t) {
                    t = Z.event.fix(t);
                    var e, n, r, i, o, a = [],
                        s = U.call(arguments),
                        u = (yt.get(this, "events") || {})[t.type] || [],
                        c = Z.event.special[t.type] || {};
                    if (s[0] = t, t.delegateTarget = this, !c.preDispatch || c.preDispatch.call(this, t) !== !1) {
                        for (a = Z.event.handlers.call(this, t, u), e = 0;
                            (i = a[e++]) && !t.isPropagationStopped();)
                            for (t.currentTarget = i.elem, n = 0;
                                (o = i.handlers[n++]) && !t.isImmediatePropagationStopped();)(!t.namespace_re || t.namespace_re.test(o.namespace)) && (t.handleObj = o, t.data = o.data, r = ((Z.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, s), void 0 !== r && (t.result = r) === !1 && (t.preventDefault(), t.stopPropagation()));
                        return c.postDispatch && c.postDispatch.call(this, t), t.result
                    }
                },
                handlers: function(t, e) {
                    var n, r, i, o, a = [],
                        s = e.delegateCount,
                        u = t.target;
                    if (s && u.nodeType && (!t.button || "click" !== t.type))
                        for (; u !== this; u = u.parentNode || this)
                            if (u.disabled !== !0 || "click" !== t.type) {
                                for (r = [], n = 0; s > n; n++) o = e[n], i = o.selector + " ", void 0 === r[i] && (r[i] = o.needsContext ? Z(i, this).index(u) >= 0 : Z.find(i, this, null, [u]).length), r[i] && r.push(o);
                                r.length && a.push({
                                    elem: u,
                                    handlers: r
                                })
                            }
                    return s < e.length && a.push({
                        elem: this,
                        handlers: e.slice(s)
                    }), a
                },
                props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
                fixHooks: {},
                keyHooks: {
                    props: "char charCode key keyCode".split(" "),
                    filter: function(t, e) {
                        return null == t.which && (t.which = null != e.charCode ? e.charCode : e.keyCode), t
                    }
                },
                mouseHooks: {
                    props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                    filter: function(t, e) {
                        var n, r, i, o = e.button;
                        return null == t.pageX && null != e.clientX && (n = t.target.ownerDocument || Q, r = n.documentElement, i = n.body, t.pageX = e.clientX + (r && r.scrollLeft || i && i.scrollLeft || 0) - (r && r.clientLeft || i && i.clientLeft || 0), t.pageY = e.clientY + (r && r.scrollTop || i && i.scrollTop || 0) - (r && r.clientTop || i && i.clientTop || 0)), t.which || void 0 === o || (t.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0), t
                    }
                },
                fix: function(t) {
                    if (t[Z.expando]) return t;
                    var e, n, r, i = t.type,
                        o = t,
                        a = this.fixHooks[i];
                    for (a || (this.fixHooks[i] = a = Ct.test(i) ? this.mouseHooks : jt.test(i) ? this.keyHooks : {}), r = a.props ? this.props.concat(a.props) : this.props, t = new Z.Event(o), e = r.length; e--;) n = r[e], t[n] = o[n];
                    return t.target || (t.target = Q), 3 === t.target.nodeType && (t.target = t.target.parentNode), a.filter ? a.filter(t, o) : t
                },
                special: {
                    load: {
                        noBubble: !0
                    },
                    focus: {
                        trigger: function() {
                            return this !== f() && this.focus ? (this.focus(), !1) : void 0
                        },
                        delegateType: "focusin"
                    },
                    blur: {
                        trigger: function() {
                            return this === f() && this.blur ? (this.blur(), !1) : void 0
                        },
                        delegateType: "focusout"
                    },
                    click: {
                        trigger: function() {
                            return "checkbox" === this.type && this.click && Z.nodeName(this, "input") ? (this.click(), !1) : void 0
                        },
                        _default: function(t) {
                            return Z.nodeName(t.target, "a")
                        }
                    },
                    beforeunload: {
                        postDispatch: function(t) {
                            void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result)
                        }
                    }
                },
                simulate: function(t, e, n, r) {
                    var i = Z.extend(new Z.Event, n, {
                        type: t,
                        isSimulated: !0,
                        originalEvent: {}
                    });
                    r ? Z.event.trigger(i, null, e) : Z.event.dispatch.call(e, i), i.isDefaultPrevented() && n.preventDefault()
                }
            }, Z.removeEvent = function(t, e, n) {
                t.removeEventListener && t.removeEventListener(e, n, !1)
            }, Z.Event = function(t, e) {
                return this instanceof Z.Event ? (t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && t.returnValue === !1 ? c : l) : this.type = t, e && Z.extend(this, e), this.timeStamp = t && t.timeStamp || Z.now(), void(this[Z.expando] = !0)) : new Z.Event(t, e)
            }, Z.Event.prototype = {
                isDefaultPrevented: l,
                isPropagationStopped: l,
                isImmediatePropagationStopped: l,
                preventDefault: function() {
                    var t = this.originalEvent;
                    this.isDefaultPrevented = c, t && t.preventDefault && t.preventDefault()
                },
                stopPropagation: function() {
                    var t = this.originalEvent;
                    this.isPropagationStopped = c, t && t.stopPropagation && t.stopPropagation()
                },
                stopImmediatePropagation: function() {
                    var t = this.originalEvent;
                    this.isImmediatePropagationStopped = c, t && t.stopImmediatePropagation && t.stopImmediatePropagation(), this.stopPropagation()
                }
            }, Z.each({
                mouseenter: "mouseover",
                mouseleave: "mouseout",
                pointerenter: "pointerover",
                pointerleave: "pointerout"
            }, function(t, e) {
                Z.event.special[t] = {
                    delegateType: e,
                    bindType: e,
                    handle: function(t) {
                        var n, r = this,
                            i = t.relatedTarget,
                            o = t.handleObj;
                        return (!i || i !== r && !Z.contains(r, i)) && (t.type = o.origType, n = o.handler.apply(this, arguments), t.type = e), n
                    }
                }
            }), Y.focusinBubbles || Z.each({
                focus: "focusin",
                blur: "focusout"
            }, function(t, e) {
                var n = function(t) {
                    Z.event.simulate(e, t.target, Z.event.fix(t), !0)
                };
                Z.event.special[e] = {
                    setup: function() {
                        var r = this.ownerDocument || this,
                            i = yt.access(r, e);
                        i || r.addEventListener(t, n, !0), yt.access(r, e, (i || 0) + 1)
                    },
                    teardown: function() {
                        var r = this.ownerDocument || this,
                            i = yt.access(r, e) - 1;
                        i ? yt.access(r, e, i) : (r.removeEventListener(t, n, !0), yt.remove(r, e))
                    }
                }
            }), Z.fn.extend({
                on: function(t, e, n, r, i) {
                    var o, a;
                    if ("object" == typeof t) {
                        "string" != typeof e && (n = n || e, e = void 0);
                        for (a in t) this.on(a, e, n, t[a], i);
                        return this
                    }
                    if (null == n && null == r ? (r = e, n = e = void 0) : null == r && ("string" == typeof e ? (r = n, n = void 0) : (r = n, n = e, e = void 0)), r === !1) r = l;
                    else if (!r) return this;
                    return 1 === i && (o = r, r = function(t) {
                        return Z().off(t), o.apply(this, arguments)
                    }, r.guid = o.guid || (o.guid = Z.guid++)), this.each(function() {
                        Z.event.add(this, t, r, n, e)
                    })
                },
                one: function(t, e, n, r) {
                    return this.on(t, e, n, r, 1)
                },
                off: function(t, e, n) {
                    var r, i;
                    if (t && t.preventDefault && t.handleObj) return r = t.handleObj, Z(t.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
                    if ("object" == typeof t) {
                        for (i in t) this.off(i, e, t[i]);
                        return this
                    }
                    return (e === !1 || "function" == typeof e) && (n = e, e = void 0), n === !1 && (n = l), this.each(function() {
                        Z.event.remove(this, t, n, e)
                    })
                },
                trigger: function(t, e) {
                    return this.each(function() {
                        Z.event.trigger(t, e, this)
                    })
                },
                triggerHandler: function(t, e) {
                    var n = this[0];
                    return n ? Z.event.trigger(t, e, n, !0) : void 0
                }
            });
            var Nt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
                Rt = /<([\w:]+)/,
                It = /<|&#?\w+;/,
                Ot = /<(?:script|style|link)/i,
                Lt = /checked\s*(?:[^=]|=\s*.checked.)/i,
                Dt = /^$|\/(?:java|ecma)script/i,
                Pt = /^true\/(.*)/,
                $t = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
                qt = {
                    option: [1, "<select multiple='multiple'>", "</select>"],
                    thead: [1, "<table>", "</table>"],
                    col: [2, "<table><colgroup>", "</colgroup></table>"],
                    tr: [2, "<table><tbody>", "</tbody></table>"],
                    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                    _default: [0, "", ""]
                };
            qt.optgroup = qt.option, qt.tbody = qt.tfoot = qt.colgroup = qt.caption = qt.thead, qt.th = qt.td, Z.extend({
                clone: function(t, e, n) {
                    var r, i, o, a, s = t.cloneNode(!0),
                        u = Z.contains(t.ownerDocument, t);
                    if (!(Y.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || Z.isXMLDoc(t)))
                        for (a = y(s), o = y(t), r = 0, i = o.length; i > r; r++) m(o[r], a[r]);
                    if (e)
                        if (n)
                            for (o = o || y(t), a = a || y(s), r = 0, i = o.length; i > r; r++) v(o[r], a[r]);
                        else v(t, s);
                    return a = y(s, "script"), a.length > 0 && g(a, !u && y(t, "script")), s
                },
                buildFragment: function(t, e, n, r) {
                    for (var i, o, a, s, u, c, l = e.createDocumentFragment(), f = [], p = 0, h = t.length; h > p; p++)
                        if (i = t[p], i || 0 === i)
                            if ("object" === Z.type(i)) Z.merge(f, i.nodeType ? [i] : i);
                            else if (It.test(i)) {
                        for (o = o || l.appendChild(e.createElement("div")), a = (Rt.exec(i) || ["", ""])[1].toLowerCase(), s = qt[a] || qt._default, o.innerHTML = s[1] + i.replace(Nt, "<$1></$2>") + s[2], c = s[0]; c--;) o = o.lastChild;
                        Z.merge(f, o.childNodes), o = l.firstChild, o.textContent = ""
                    } else f.push(e.createTextNode(i));
                    for (l.textContent = "", p = 0; i = f[p++];)
                        if ((!r || -1 === Z.inArray(i, r)) && (u = Z.contains(i.ownerDocument, i), o = y(l.appendChild(i), "script"), u && g(o), n))
                            for (c = 0; i = o[c++];) Dt.test(i.type || "") && n.push(i);
                    return l
                },
                cleanData: function(t) {
                    for (var e, n, r, i, o = Z.event.special, a = 0; void 0 !== (n = t[a]); a++) {
                        if (Z.acceptData(n) && (i = n[yt.expando], i && (e = yt.cache[i]))) {
                            if (e.events)
                                for (r in e.events) o[r] ? Z.event.remove(n, r) : Z.removeEvent(n, r, e.handle);
                            yt.cache[i] && delete yt.cache[i]
                        }
                        delete mt.cache[n[mt.expando]]
                    }
                }
            }), Z.fn.extend({
                text: function(t) {
                    return vt(this, function(t) {
                        return void 0 === t ? Z.text(this) : this.empty().each(function() {
                            (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && (this.textContent = t)
                        })
                    }, null, t, arguments.length)
                },
                append: function() {
                    return this.domManip(arguments, function(t) {
                        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                            var e = p(this, t);
                            e.appendChild(t)
                        }
                    })
                },
                prepend: function() {
                    return this.domManip(arguments, function(t) {
                        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                            var e = p(this, t);
                            e.insertBefore(t, e.firstChild)
                        }
                    })
                },
                before: function() {
                    return this.domManip(arguments, function(t) {
                        this.parentNode && this.parentNode.insertBefore(t, this)
                    })
                },
                after: function() {
                    return this.domManip(arguments, function(t) {
                        this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
                    })
                },
                remove: function(t, e) {
                    for (var n, r = t ? Z.filter(t, this) : this, i = 0; null != (n = r[i]); i++) e || 1 !== n.nodeType || Z.cleanData(y(n)), n.parentNode && (e && Z.contains(n.ownerDocument, n) && g(y(n, "script")), n.parentNode.removeChild(n));
                    return this
                },
                empty: function() {
                    for (var t, e = 0; null != (t = this[e]); e++) 1 === t.nodeType && (Z.cleanData(y(t, !1)), t.textContent = "");
                    return this
                },
                clone: function(t, e) {
                    return t = null == t ? !1 : t, e = null == e ? t : e, this.map(function() {
                        return Z.clone(this, t, e)
                    })
                },
                html: function(t) {
                    return vt(this, function(t) {
                        var e = this[0] || {},
                            n = 0,
                            r = this.length;
                        if (void 0 === t && 1 === e.nodeType) return e.innerHTML;
                        if ("string" == typeof t && !Ot.test(t) && !qt[(Rt.exec(t) || ["", ""])[1].toLowerCase()]) {
                            t = t.replace(Nt, "<$1></$2>");
                            try {
                                for (; r > n; n++) e = this[n] || {}, 1 === e.nodeType && (Z.cleanData(y(e, !1)), e.innerHTML = t);
                                e = 0
                            } catch (i) {}
                        }
                        e && this.empty().append(t)
                    }, null, t, arguments.length)
                },
                replaceWith: function() {
                    var t = arguments[0];
                    return this.domManip(arguments, function(e) {
                        t = this.parentNode, Z.cleanData(y(this)), t && t.replaceChild(e, this)
                    }), t && (t.length || t.nodeType) ? this : this.remove()
                },
                detach: function(t) {
                    return this.remove(t, !0)
                },
                domManip: function(t, e) {
                    t = W.apply([], t);
                    var n, r, i, o, a, s, u = 0,
                        c = this.length,
                        l = this,
                        f = c - 1,
                        p = t[0],
                        g = Z.isFunction(p);
                    if (g || c > 1 && "string" == typeof p && !Y.checkClone && Lt.test(p)) return this.each(function(n) {
                        var r = l.eq(n);
                        g && (t[0] = p.call(this, n, r.html())), r.domManip(t, e)
                    });
                    if (c && (n = Z.buildFragment(t, this[0].ownerDocument, !1, this), r = n.firstChild, 1 === n.childNodes.length && (n = r), r)) {
                        for (i = Z.map(y(n, "script"), h), o = i.length; c > u; u++) a = n, u !== f && (a = Z.clone(a, !0, !0), o && Z.merge(i, y(a, "script"))), e.call(this[u], a, u);
                        if (o)
                            for (s = i[i.length - 1].ownerDocument, Z.map(i, d), u = 0; o > u; u++) a = i[u], Dt.test(a.type || "") && !yt.access(a, "globalEval") && Z.contains(s, a) && (a.src ? Z._evalUrl && Z._evalUrl(a.src) : Z.globalEval(a.textContent.replace($t, "")))
                    }
                    return this
                }
            }), Z.each({
                appendTo: "append",
                prependTo: "prepend",
                insertBefore: "before",
                insertAfter: "after",
                replaceAll: "replaceWith"
            }, function(t, e) {
                Z.fn[t] = function(t) {
                    for (var n, r = [], i = Z(t), o = i.length - 1, a = 0; o >= a; a++) n = a === o ? this : this.clone(!0), Z(i[a])[e](n), z.apply(r, n.get());
                    return this.pushStack(r)
                }
            });
            var Ht, Mt = {},
                Ft = /^margin/,
                Bt = new RegExp("^(" + wt + ")(?!px)[a-z%]+$", "i"),
                Ut = function(e) {
                    return e.ownerDocument.defaultView.opener ? e.ownerDocument.defaultView.getComputedStyle(e, null) : t.getComputedStyle(e, null)
                };
            ! function() {
                function e() {
                    a.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", a.innerHTML = "", i.appendChild(o);
                    var e = t.getComputedStyle(a, null);
                    n = "1%" !== e.top, r = "4px" === e.width, i.removeChild(o)
                }
                var n, r, i = Q.documentElement,
                    o = Q.createElement("div"),
                    a = Q.createElement("div");
                a.style && (a.style.backgroundClip = "content-box", a.cloneNode(!0).style.backgroundClip = "", Y.clearCloneStyle = "content-box" === a.style.backgroundClip, o.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute", o.appendChild(a), t.getComputedStyle && Z.extend(Y, {
                    pixelPosition: function() {
                        return e(), n
                    },
                    boxSizingReliable: function() {
                        return null == r && e(), r
                    },
                    reliableMarginRight: function() {
                        var e, n = a.appendChild(Q.createElement("div"));
                        return n.style.cssText = a.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", n.style.marginRight = n.style.width = "0", a.style.width = "1px", i.appendChild(o), e = !parseFloat(t.getComputedStyle(n, null).marginRight), i.removeChild(o), a.removeChild(n), e
                    }
                }))
            }(), Z.swap = function(t, e, n, r) {
                var i, o, a = {};
                for (o in e) a[o] = t.style[o], t.style[o] = e[o];
                i = n.apply(t, r || []);
                for (o in e) t.style[o] = a[o];
                return i
            };
            var Wt = /^(none|table(?!-c[ea]).+)/,
                zt = new RegExp("^(" + wt + ")(.*)$", "i"),
                Vt = new RegExp("^([+-])=(" + wt + ")", "i"),
                Gt = {
                    position: "absolute",
                    visibility: "hidden",
                    display: "block"
                },
                Xt = {
                    letterSpacing: "0",
                    fontWeight: "400"
                },
                Jt = ["Webkit", "O", "Moz", "ms"];
            Z.extend({
                cssHooks: {
                    opacity: {
                        get: function(t, e) {
                            if (e) {
                                var n = w(t, "opacity");
                                return "" === n ? "1" : n
                            }
                        }
                    }
                },
                cssNumber: {
                    columnCount: !0,
                    fillOpacity: !0,
                    flexGrow: !0,
                    flexShrink: !0,
                    fontWeight: !0,
                    lineHeight: !0,
                    opacity: !0,
                    order: !0,
                    orphans: !0,
                    widows: !0,
                    zIndex: !0,
                    zoom: !0
                },
                cssProps: {
                    "float": "cssFloat"
                },
                style: function(t, e, n, r) {
                    if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                        var i, o, a, s = Z.camelCase(e),
                            u = t.style;
                        return e = Z.cssProps[s] || (Z.cssProps[s] = k(u, s)), a = Z.cssHooks[e] || Z.cssHooks[s], void 0 === n ? a && "get" in a && void 0 !== (i = a.get(t, !1, r)) ? i : u[e] : (o = typeof n, "string" === o && (i = Vt.exec(n)) && (n = (i[1] + 1) * i[2] + parseFloat(Z.css(t, e)), o = "number"), null != n && n === n && ("number" !== o || Z.cssNumber[s] || (n += "px"), Y.clearCloneStyle || "" !== n || 0 !== e.indexOf("background") || (u[e] = "inherit"), a && "set" in a && void 0 === (n = a.set(t, n, r)) || (u[e] = n)), void 0)
                    }
                },
                css: function(t, e, n, r) {
                    var i, o, a, s = Z.camelCase(e);
                    return e = Z.cssProps[s] || (Z.cssProps[s] = k(t.style, s)), a = Z.cssHooks[e] || Z.cssHooks[s], a && "get" in a && (i = a.get(t, !0, n)), void 0 === i && (i = w(t, e, r)), "normal" === i && e in Xt && (i = Xt[e]), "" === n || n ? (o = parseFloat(i), n === !0 || Z.isNumeric(o) ? o || 0 : i) : i
                }
            }), Z.each(["height", "width"], function(t, e) {
                Z.cssHooks[e] = {
                    get: function(t, n, r) {
                        return n ? Wt.test(Z.css(t, "display")) && 0 === t.offsetWidth ? Z.swap(t, Gt, function() {
                            return j(t, e, r)
                        }) : j(t, e, r) : void 0
                    },
                    set: function(t, n, r) {
                        var i = r && Ut(t);
                        return T(t, n, r ? E(t, e, r, "border-box" === Z.css(t, "boxSizing", !1, i), i) : 0)
                    }
                }
            }), Z.cssHooks.marginRight = _(Y.reliableMarginRight, function(t, e) {
                return e ? Z.swap(t, {
                    display: "inline-block"
                }, w, [t, "marginRight"]) : void 0
            }), Z.each({
                margin: "",
                padding: "",
                border: "Width"
            }, function(t, e) {
                Z.cssHooks[t + e] = {
                    expand: function(n) {
                        for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; 4 > r; r++) i[t + _t[r] + e] = o[r] || o[r - 2] || o[0];
                        return i
                    }
                }, Ft.test(t) || (Z.cssHooks[t + e].set = T)
            }), Z.fn.extend({
                css: function(t, e) {
                    return vt(this, function(t, e, n) {
                        var r, i, o = {},
                            a = 0;
                        if (Z.isArray(e)) {
                            for (r = Ut(t), i = e.length; i > a; a++) o[e[a]] = Z.css(t, e[a], !1, r);
                            return o
                        }
                        return void 0 !== n ? Z.style(t, e, n) : Z.css(t, e)
                    }, t, e, arguments.length > 1)
                },
                show: function() {
                    return C(this, !0)
                },
                hide: function() {
                    return C(this)
                },
                toggle: function(t) {
                    return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function() {
                        kt(this) ? Z(this).show() : Z(this).hide()
                    })
                }
            }), Z.Tween = S, S.prototype = {
                constructor: S,
                init: function(t, e, n, r, i, o) {
                    this.elem = t, this.prop = n, this.easing = i || "swing", this.options = e, this.start = this.now = this.cur(), this.end = r, this.unit = o || (Z.cssNumber[n] ? "" : "px")
                },
                cur: function() {
                    var t = S.propHooks[this.prop];
                    return t && t.get ? t.get(this) : S.propHooks._default.get(this)
                },
                run: function(t) {
                    var e, n = S.propHooks[this.prop];
                    return this.options.duration ? this.pos = e = Z.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : this.pos = e = t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : S.propHooks._default.set(this), this
                }
            }, S.prototype.init.prototype = S.prototype, S.propHooks = {
                _default: {
                    get: function(t) {
                        var e;
                        return null == t.elem[t.prop] || t.elem.style && null != t.elem.style[t.prop] ? (e = Z.css(t.elem, t.prop, ""), e && "auto" !== e ? e : 0) : t.elem[t.prop]
                    },
                    set: function(t) {
                        Z.fx.step[t.prop] ? Z.fx.step[t.prop](t) : t.elem.style && (null != t.elem.style[Z.cssProps[t.prop]] || Z.cssHooks[t.prop]) ? Z.style(t.elem, t.prop, t.now + t.unit) : t.elem[t.prop] = t.now
                    }
                }
            }, S.propHooks.scrollTop = S.propHooks.scrollLeft = {
                set: function(t) {
                    t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
                }
            }, Z.easing = {
                linear: function(t) {
                    return t
                },
                swing: function(t) {
                    return .5 - Math.cos(t * Math.PI) / 2
                }
            }, Z.fx = S.prototype.init, Z.fx.step = {};
            var Yt, Qt, Kt = /^(?:toggle|show|hide)$/,
                Zt = new RegExp("^(?:([+-])=|)(" + wt + ")([a-z%]*)$", "i"),
                te = /queueHooks$/,
                ee = [I],
                ne = {
                    "*": [function(t, e) {
                        var n = this.createTween(t, e),
                            r = n.cur(),
                            i = Zt.exec(e),
                            o = i && i[3] || (Z.cssNumber[t] ? "" : "px"),
                            a = (Z.cssNumber[t] || "px" !== o && +r) && Zt.exec(Z.css(n.elem, t)),
                            s = 1,
                            u = 20;
                        if (a && a[3] !== o) {
                            o = o || a[3], i = i || [], a = +r || 1;
                            do s = s || ".5", a /= s, Z.style(n.elem, t, a + o); while (s !== (s = n.cur() / r) && 1 !== s && --u)
                        }
                        return i && (a = n.start = +a || +r || 0, n.unit = o, n.end = i[1] ? a + (i[1] + 1) * i[2] : +i[2]), n
                    }]
                };
            Z.Animation = Z.extend(L, {
                    tweener: function(t, e) {
                        Z.isFunction(t) ? (e = t, t = ["*"]) : t = t.split(" ");
                        for (var n, r = 0, i = t.length; i > r; r++) n = t[r], ne[n] = ne[n] || [], ne[n].unshift(e)
                    },
                    prefilter: function(t, e) {
                        e ? ee.unshift(t) : ee.push(t)
                    }
                }), Z.speed = function(t, e, n) {
                    var r = t && "object" == typeof t ? Z.extend({}, t) : {
                        complete: n || !n && e || Z.isFunction(t) && t,
                        duration: t,
                        easing: n && e || e && !Z.isFunction(e) && e
                    };
                    return r.duration = Z.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in Z.fx.speeds ? Z.fx.speeds[r.duration] : Z.fx.speeds._default, (null == r.queue || r.queue === !0) && (r.queue = "fx"), r.old = r.complete, r.complete = function() {
                        Z.isFunction(r.old) && r.old.call(this), r.queue && Z.dequeue(this, r.queue)
                    }, r
                }, Z.fn.extend({
                    fadeTo: function(t, e, n, r) {
                        return this.filter(kt).css("opacity", 0).show().end().animate({
                            opacity: e
                        }, t, n, r)
                    },
                    animate: function(t, e, n, r) {
                        var i = Z.isEmptyObject(t),
                            o = Z.speed(e, n, r),
                            a = function() {
                                var e = L(this, Z.extend({}, t), o);
                                (i || yt.get(this, "finish")) && e.stop(!0)
                            };
                        return a.finish = a, i || o.queue === !1 ? this.each(a) : this.queue(o.queue, a)
                    },
                    stop: function(t, e, n) {
                        var r = function(t) {
                            var e = t.stop;
                            delete t.stop, e(n)
                        };
                        return "string" != typeof t && (n = e, e = t, t = void 0), e && t !== !1 && this.queue(t || "fx", []), this.each(function() {
                            var e = !0,
                                i = null != t && t + "queueHooks",
                                o = Z.timers,
                                a = yt.get(this);
                            if (i) a[i] && a[i].stop && r(a[i]);
                            else
                                for (i in a) a[i] && a[i].stop && te.test(i) && r(a[i]);
                            for (i = o.length; i--;) o[i].elem !== this || null != t && o[i].queue !== t || (o[i].anim.stop(n), e = !1, o.splice(i, 1));
                            (e || !n) && Z.dequeue(this, t)
                        })
                    },
                    finish: function(t) {
                        return t !== !1 && (t = t || "fx"), this.each(function() {
                            var e, n = yt.get(this),
                                r = n[t + "queue"],
                                i = n[t + "queueHooks"],
                                o = Z.timers,
                                a = r ? r.length : 0;
                            for (n.finish = !0, Z.queue(this, t, []), i && i.stop && i.stop.call(this, !0), e = o.length; e--;) o[e].elem === this && o[e].queue === t && (o[e].anim.stop(!0), o.splice(e, 1));
                            for (e = 0; a > e; e++) r[e] && r[e].finish && r[e].finish.call(this);
                            delete n.finish
                        })
                    }
                }), Z.each(["toggle", "show", "hide"], function(t, e) {
                    var n = Z.fn[e];
                    Z.fn[e] = function(t, r, i) {
                        return null == t || "boolean" == typeof t ? n.apply(this, arguments) : this.animate(N(e, !0), t, r, i)
                    }
                }), Z.each({
                    slideDown: N("show"),
                    slideUp: N("hide"),
                    slideToggle: N("toggle"),
                    fadeIn: {
                        opacity: "show"
                    },
                    fadeOut: {
                        opacity: "hide"
                    },
                    fadeToggle: {
                        opacity: "toggle"
                    }
                }, function(t, e) {
                    Z.fn[t] = function(t, n, r) {
                        return this.animate(e, t, n, r)
                    }
                }), Z.timers = [], Z.fx.tick = function() {
                    var t, e = 0,
                        n = Z.timers;
                    for (Yt = Z.now(); e < n.length; e++) t = n[e], t() || n[e] !== t || n.splice(e--, 1);
                    n.length || Z.fx.stop(), Yt = void 0
                }, Z.fx.timer = function(t) {
                    Z.timers.push(t), t() ? Z.fx.start() : Z.timers.pop()
                }, Z.fx.interval = 13, Z.fx.start = function() {
                    Qt || (Qt = setInterval(Z.fx.tick, Z.fx.interval))
                }, Z.fx.stop = function() {
                    clearInterval(Qt), Qt = null
                }, Z.fx.speeds = {
                    slow: 600,
                    fast: 200,
                    _default: 400
                }, Z.fn.delay = function(t, e) {
                    return t = Z.fx ? Z.fx.speeds[t] || t : t, e = e || "fx", this.queue(e, function(e, n) {
                        var r = setTimeout(e, t);
                        n.stop = function() {
                            clearTimeout(r)
                        }
                    })
                },
                function() {
                    var t = Q.createElement("input"),
                        e = Q.createElement("select"),
                        n = e.appendChild(Q.createElement("option"));
                    t.type = "checkbox", Y.checkOn = "" !== t.value, Y.optSelected = n.selected, e.disabled = !0, Y.optDisabled = !n.disabled, t = Q.createElement("input"), t.value = "t", t.type = "radio", Y.radioValue = "t" === t.value
                }();
            var re, ie, oe = Z.expr.attrHandle;
            Z.fn.extend({
                attr: function(t, e) {
                    return vt(this, Z.attr, t, e, arguments.length > 1)
                },
                removeAttr: function(t) {
                    return this.each(function() {
                        Z.removeAttr(this, t)
                    })
                }
            }), Z.extend({
                attr: function(t, e, n) {
                    var r, i, o = t.nodeType;
                    if (t && 3 !== o && 8 !== o && 2 !== o) return typeof t.getAttribute === Et ? Z.prop(t, e, n) : (1 === o && Z.isXMLDoc(t) || (e = e.toLowerCase(), r = Z.attrHooks[e] || (Z.expr.match.bool.test(e) ? ie : re)), void 0 === n ? r && "get" in r && null !== (i = r.get(t, e)) ? i : (i = Z.find.attr(t, e), null == i ? void 0 : i) : null !== n ? r && "set" in r && void 0 !== (i = r.set(t, n, e)) ? i : (t.setAttribute(e, n + ""), n) : void Z.removeAttr(t, e))
                },
                removeAttr: function(t, e) {
                    var n, r, i = 0,
                        o = e && e.match(ht);
                    if (o && 1 === t.nodeType)
                        for (; n = o[i++];) r = Z.propFix[n] || n, Z.expr.match.bool.test(n) && (t[r] = !1), t.removeAttribute(n)
                },
                attrHooks: {
                    type: {
                        set: function(t, e) {
                            if (!Y.radioValue && "radio" === e && Z.nodeName(t, "input")) {
                                var n = t.value;
                                return t.setAttribute("type", e), n && (t.value = n), e
                            }
                        }
                    }
                }
            }), ie = {
                set: function(t, e, n) {
                    return e === !1 ? Z.removeAttr(t, n) : t.setAttribute(n, n), n
                }
            }, Z.each(Z.expr.match.bool.source.match(/\w+/g), function(t, e) {
                var n = oe[e] || Z.find.attr;
                oe[e] = function(t, e, r) {
                    var i, o;
                    return r || (o = oe[e], oe[e] = i, i = null != n(t, e, r) ? e.toLowerCase() : null, oe[e] = o), i
                }
            });
            var ae = /^(?:input|select|textarea|button)$/i;
            Z.fn.extend({
                prop: function(t, e) {
                    return vt(this, Z.prop, t, e, arguments.length > 1)
                },
                removeProp: function(t) {
                    return this.each(function() {
                        delete this[Z.propFix[t] || t]
                    })
                }
            }), Z.extend({
                propFix: {
                    "for": "htmlFor",
                    "class": "className"
                },
                prop: function(t, e, n) {
                    var r, i, o, a = t.nodeType;
                    if (t && 3 !== a && 8 !== a && 2 !== a) return o = 1 !== a || !Z.isXMLDoc(t), o && (e = Z.propFix[e] || e, i = Z.propHooks[e]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(t, n, e)) ? r : t[e] = n : i && "get" in i && null !== (r = i.get(t, e)) ? r : t[e]
                },
                propHooks: {
                    tabIndex: {
                        get: function(t) {
                            return t.hasAttribute("tabindex") || ae.test(t.nodeName) || t.href ? t.tabIndex : -1
                        }
                    }
                }
            }), Y.optSelected || (Z.propHooks.selected = {
                get: function(t) {
                    var e = t.parentNode;
                    return e && e.parentNode && e.parentNode.selectedIndex, null
                }
            }), Z.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
                Z.propFix[this.toLowerCase()] = this
            });
            var se = /[\t\r\n\f]/g;
            Z.fn.extend({
                addClass: function(t) {
                    var e, n, r, i, o, a, s = "string" == typeof t && t,
                        u = 0,
                        c = this.length;
                    if (Z.isFunction(t)) return this.each(function(e) {
                        Z(this).addClass(t.call(this, e, this.className))
                    });
                    if (s)
                        for (e = (t || "").match(ht) || []; c > u; u++)
                            if (n = this[u], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(se, " ") : " ")) {
                                for (o = 0; i = e[o++];) r.indexOf(" " + i + " ") < 0 && (r += i + " ");
                                a = Z.trim(r), n.className !== a && (n.className = a)
                            }
                    return this
                },
                removeClass: function(t) {
                    var e, n, r, i, o, a, s = 0 === arguments.length || "string" == typeof t && t,
                        u = 0,
                        c = this.length;
                    if (Z.isFunction(t)) return this.each(function(e) {
                        Z(this).removeClass(t.call(this, e, this.className))
                    });
                    if (s)
                        for (e = (t || "").match(ht) || []; c > u; u++)
                            if (n = this[u], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(se, " ") : "")) {
                                for (o = 0; i = e[o++];)
                                    for (; r.indexOf(" " + i + " ") >= 0;) r = r.replace(" " + i + " ", " ");
                                a = t ? Z.trim(r) : "", n.className !== a && (n.className = a)
                            }
                    return this
                },
                toggleClass: function(t, e) {
                    var n = typeof t;
                    return "boolean" == typeof e && "string" === n ? e ? this.addClass(t) : this.removeClass(t) : Z.isFunction(t) ? this.each(function(n) {
                        Z(this).toggleClass(t.call(this, n, this.className, e), e)
                    }) : this.each(function() {
                        if ("string" === n)
                            for (var e, r = 0, i = Z(this), o = t.match(ht) || []; e = o[r++];) i.hasClass(e) ? i.removeClass(e) : i.addClass(e);
                        else(n === Et || "boolean" === n) && (this.className && yt.set(this, "__className__", this.className), this.className = this.className || t === !1 ? "" : yt.get(this, "__className__") || "")
                    })
                },
                hasClass: function(t) {
                    for (var e = " " + t + " ", n = 0, r = this.length; r > n; n++)
                        if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(se, " ").indexOf(e) >= 0) return !0;
                    return !1
                }
            });
            var ue = /\r/g;
            Z.fn.extend({
                val: function(t) {
                    var e, n, r, i = this[0]; {
                        if (arguments.length) return r = Z.isFunction(t), this.each(function(n) {
                            var i;
                            1 === this.nodeType && (i = r ? t.call(this, n, Z(this).val()) : t, null == i ? i = "" : "number" == typeof i ? i += "" : Z.isArray(i) && (i = Z.map(i, function(t) {
                                return null == t ? "" : t + ""
                            })), e = Z.valHooks[this.type] || Z.valHooks[this.nodeName.toLowerCase()], e && "set" in e && void 0 !== e.set(this, i, "value") || (this.value = i))
                        });
                        if (i) return e = Z.valHooks[i.type] || Z.valHooks[i.nodeName.toLowerCase()], e && "get" in e && void 0 !== (n = e.get(i, "value")) ? n : (n = i.value, "string" == typeof n ? n.replace(ue, "") : null == n ? "" : n)
                    }
                }
            }), Z.extend({
                valHooks: {
                    option: {
                        get: function(t) {
                            var e = Z.find.attr(t, "value");
                            return null != e ? e : Z.trim(Z.text(t))
                        }
                    },
                    select: {
                        get: function(t) {
                            for (var e, n, r = t.options, i = t.selectedIndex, o = "select-one" === t.type || 0 > i, a = o ? null : [], s = o ? i + 1 : r.length, u = 0 > i ? s : o ? i : 0; s > u; u++)
                                if (n = r[u], (n.selected || u === i) && (Y.optDisabled ? !n.disabled : null === n.getAttribute("disabled")) && (!n.parentNode.disabled || !Z.nodeName(n.parentNode, "optgroup"))) {
                                    if (e = Z(n).val(), o) return e;
                                    a.push(e)
                                }
                            return a
                        },
                        set: function(t, e) {
                            for (var n, r, i = t.options, o = Z.makeArray(e), a = i.length; a--;) r = i[a], (r.selected = Z.inArray(r.value, o) >= 0) && (n = !0);
                            return n || (t.selectedIndex = -1), o
                        }
                    }
                }
            }), Z.each(["radio", "checkbox"], function() {
                Z.valHooks[this] = {
                    set: function(t, e) {
                        return Z.isArray(e) ? t.checked = Z.inArray(Z(t).val(), e) >= 0 : void 0
                    }
                }, Y.checkOn || (Z.valHooks[this].get = function(t) {
                    return null === t.getAttribute("value") ? "on" : t.value
                })
            }), Z.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(t, e) {
                Z.fn[e] = function(t, n) {
                    return arguments.length > 0 ? this.on(e, null, t, n) : this.trigger(e)
                }
            }), Z.fn.extend({
                hover: function(t, e) {
                    return this.mouseenter(t).mouseleave(e || t)
                },
                bind: function(t, e, n) {
                    return this.on(t, null, e, n)
                },
                unbind: function(t, e) {
                    return this.off(t, null, e)
                },
                delegate: function(t, e, n, r) {
                    return this.on(e, t, n, r)
                },
                undelegate: function(t, e, n) {
                    return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", n)
                }
            });
            var ce = Z.now(),
                le = /\?/;
            Z.parseJSON = function(t) {
                return JSON.parse(t + "")
            }, Z.parseXML = function(t) {
                var e, n;
                if (!t || "string" != typeof t) return null;
                try {
                    n = new DOMParser, e = n.parseFromString(t, "text/xml")
                } catch (r) {
                    e = void 0
                }
                return (!e || e.getElementsByTagName("parsererror").length) && Z.error("Invalid XML: " + t), e
            };
            var fe = /#.*$/,
                pe = /([?&])_=[^&]*/,
                he = /^(.*?):[ \t]*([^\r\n]*)$/gm,
                de = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
                ge = /^(?:GET|HEAD)$/,
                ve = /^\/\//,
                ye = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
                me = {},
                be = {},
                xe = "*/".concat("*"),
                we = t.location.href,
                _e = ye.exec(we.toLowerCase()) || [];
            Z.extend({
                active: 0,
                lastModified: {},
                etag: {},
                ajaxSettings: {
                    url: we,
                    type: "GET",
                    isLocal: de.test(_e[1]),
                    global: !0,
                    processData: !0,
                    async: !0,
                    contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                    accepts: {
                        "*": xe,
                        text: "text/plain",
                        html: "text/html",
                        xml: "application/xml, text/xml",
                        json: "application/json, text/javascript"
                    },
                    contents: {
                        xml: /xml/,
                        html: /html/,
                        json: /json/
                    },
                    responseFields: {
                        xml: "responseXML",
                        text: "responseText",
                        json: "responseJSON"
                    },
                    converters: {
                        "* text": String,
                        "text html": !0,
                        "text json": Z.parseJSON,
                        "text xml": Z.parseXML
                    },
                    flatOptions: {
                        url: !0,
                        context: !0
                    }
                },
                ajaxSetup: function(t, e) {
                    return e ? $($(t, Z.ajaxSettings), e) : $(Z.ajaxSettings, t)
                },
                ajaxPrefilter: D(me),
                ajaxTransport: D(be),
                ajax: function(t, e) {
                    function n(t, e, n, a) {
                        var u, l, y, m, x, _ = e;
                        2 !== b && (b = 2, s && clearTimeout(s), r = void 0, o = a || "", w.readyState = t > 0 ? 4 : 0, u = t >= 200 && 300 > t || 304 === t, n && (m = q(f, w, n)), m = H(f, m, w, u), u ? (f.ifModified && (x = w.getResponseHeader("Last-Modified"), x && (Z.lastModified[i] = x), x = w.getResponseHeader("etag"), x && (Z.etag[i] = x)), 204 === t || "HEAD" === f.type ? _ = "nocontent" : 304 === t ? _ = "notmodified" : (_ = m.state, l = m.data, y = m.error, u = !y)) : (y = _, (t || !_) && (_ = "error", 0 > t && (t = 0))), w.status = t, w.statusText = (e || _) + "", u ? d.resolveWith(p, [l, _, w]) : d.rejectWith(p, [w, _, y]), w.statusCode(v), v = void 0, c && h.trigger(u ? "ajaxSuccess" : "ajaxError", [w, f, u ? l : y]), g.fireWith(p, [w, _]), c && (h.trigger("ajaxComplete", [w, f]), --Z.active || Z.event.trigger("ajaxStop")))
                    }
                    "object" == typeof t && (e = t, t = void 0), e = e || {};
                    var r, i, o, a, s, u, c, l, f = Z.ajaxSetup({}, e),
                        p = f.context || f,
                        h = f.context && (p.nodeType || p.jquery) ? Z(p) : Z.event,
                        d = Z.Deferred(),
                        g = Z.Callbacks("once memory"),
                        v = f.statusCode || {},
                        y = {},
                        m = {},
                        b = 0,
                        x = "canceled",
                        w = {
                            readyState: 0,
                            getResponseHeader: function(t) {
                                var e;
                                if (2 === b) {
                                    if (!a)
                                        for (a = {}; e = he.exec(o);) a[e[1].toLowerCase()] = e[2];
                                    e = a[t.toLowerCase()]
                                }
                                return null == e ? null : e
                            },
                            getAllResponseHeaders: function() {
                                return 2 === b ? o : null
                            },
                            setRequestHeader: function(t, e) {
                                var n = t.toLowerCase();
                                return b || (t = m[n] = m[n] || t, y[t] = e), this
                            },
                            overrideMimeType: function(t) {
                                return b || (f.mimeType = t), this
                            },
                            statusCode: function(t) {
                                var e;
                                if (t)
                                    if (2 > b)
                                        for (e in t) v[e] = [v[e], t[e]];
                                    else w.always(t[w.status]);
                                return this
                            },
                            abort: function(t) {
                                var e = t || x;
                                return r && r.abort(e), n(0, e), this
                            }
                        };
                    if (d.promise(w).complete = g.add, w.success = w.done, w.error = w.fail, f.url = ((t || f.url || we) + "").replace(fe, "").replace(ve, _e[1] + "//"), f.type = e.method || e.type || f.method || f.type, f.dataTypes = Z.trim(f.dataType || "*").toLowerCase().match(ht) || [""], null == f.crossDomain && (u = ye.exec(f.url.toLowerCase()), f.crossDomain = !(!u || u[1] === _e[1] && u[2] === _e[2] && (u[3] || ("http:" === u[1] ? "80" : "443")) === (_e[3] || ("http:" === _e[1] ? "80" : "443")))), f.data && f.processData && "string" != typeof f.data && (f.data = Z.param(f.data, f.traditional)), P(me, f, e, w), 2 === b) return w;
                    c = Z.event && f.global, c && 0 === Z.active++ && Z.event.trigger("ajaxStart"), f.type = f.type.toUpperCase(), f.hasContent = !ge.test(f.type), i = f.url, f.hasContent || (f.data && (i = f.url += (le.test(i) ? "&" : "?") + f.data, delete f.data), f.cache === !1 && (f.url = pe.test(i) ? i.replace(pe, "$1_=" + ce++) : i + (le.test(i) ? "&" : "?") + "_=" + ce++)), f.ifModified && (Z.lastModified[i] && w.setRequestHeader("If-Modified-Since", Z.lastModified[i]), Z.etag[i] && w.setRequestHeader("If-None-Match", Z.etag[i])), (f.data && f.hasContent && f.contentType !== !1 || e.contentType) && w.setRequestHeader("Content-Type", f.contentType), w.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + ("*" !== f.dataTypes[0] ? ", " + xe + "; q=0.01" : "") : f.accepts["*"]);
                    for (l in f.headers) w.setRequestHeader(l, f.headers[l]);
                    if (f.beforeSend && (f.beforeSend.call(p, w, f) === !1 || 2 === b)) return w.abort();
                    x = "abort";
                    for (l in {
                            success: 1,
                            error: 1,
                            complete: 1
                        }) w[l](f[l]);
                    if (r = P(be, f, e, w)) {
                        w.readyState = 1, c && h.trigger("ajaxSend", [w, f]), f.async && f.timeout > 0 && (s = setTimeout(function() {
                            w.abort("timeout")
                        }, f.timeout));
                        try {
                            b = 1, r.send(y, n)
                        } catch (_) {
                            if (!(2 > b)) throw _;
                            n(-1, _)
                        }
                    } else n(-1, "No Transport");
                    return w
                },
                getJSON: function(t, e, n) {
                    return Z.get(t, e, n, "json")
                },
                getScript: function(t, e) {
                    return Z.get(t, void 0, e, "script")
                }
            }), Z.each(["get", "post"], function(t, e) {
                Z[e] = function(t, n, r, i) {
                    return Z.isFunction(n) && (i = i || r, r = n, n = void 0), Z.ajax({
                        url: t,
                        type: e,
                        dataType: i,
                        data: n,
                        success: r
                    })
                }
            }), Z._evalUrl = function(t) {
                return Z.ajax({
                    url: t,
                    type: "GET",
                    dataType: "script",
                    async: !1,
                    global: !1,
                    "throws": !0
                })
            }, Z.fn.extend({
                wrapAll: function(t) {
                    var e;
                    return Z.isFunction(t) ? this.each(function(e) {
                        Z(this).wrapAll(t.call(this, e))
                    }) : (this[0] && (e = Z(t, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && e.insertBefore(this[0]), e.map(function() {
                        for (var t = this; t.firstElementChild;) t = t.firstElementChild;
                        return t
                    }).append(this)), this)
                },
                wrapInner: function(t) {
                    return Z.isFunction(t) ? this.each(function(e) {
                        Z(this).wrapInner(t.call(this, e))
                    }) : this.each(function() {
                        var e = Z(this),
                            n = e.contents();
                        n.length ? n.wrapAll(t) : e.append(t)
                    })
                },
                wrap: function(t) {
                    var e = Z.isFunction(t);
                    return this.each(function(n) {
                        Z(this).wrapAll(e ? t.call(this, n) : t)
                    })
                },
                unwrap: function() {
                    return this.parent().each(function() {
                        Z.nodeName(this, "body") || Z(this).replaceWith(this.childNodes)
                    }).end()
                }
            }), Z.expr.filters.hidden = function(t) {
                return t.offsetWidth <= 0 && t.offsetHeight <= 0
            }, Z.expr.filters.visible = function(t) {
                return !Z.expr.filters.hidden(t)
            };
            var ke = /%20/g,
                Te = /\[\]$/,
                Ee = /\r?\n/g,
                je = /^(?:submit|button|image|reset|file)$/i,
                Ce = /^(?:input|select|textarea|keygen)/i;
            Z.param = function(t, e) {
                var n, r = [],
                    i = function(t, e) {
                        e = Z.isFunction(e) ? e() : null == e ? "" : e, r[r.length] = encodeURIComponent(t) + "=" + encodeURIComponent(e)
                    };
                if (void 0 === e && (e = Z.ajaxSettings && Z.ajaxSettings.traditional), Z.isArray(t) || t.jquery && !Z.isPlainObject(t)) Z.each(t, function() {
                    i(this.name, this.value)
                });
                else
                    for (n in t) M(n, t[n], e, i);
                return r.join("&").replace(ke, "+")
            }, Z.fn.extend({
                serialize: function() {
                    return Z.param(this.serializeArray())
                },
                serializeArray: function() {
                    return this.map(function() {
                        var t = Z.prop(this, "elements");
                        return t ? Z.makeArray(t) : this
                    }).filter(function() {
                        var t = this.type;
                        return this.name && !Z(this).is(":disabled") && Ce.test(this.nodeName) && !je.test(t) && (this.checked || !Tt.test(t))
                    }).map(function(t, e) {
                        var n = Z(this).val();
                        return null == n ? null : Z.isArray(n) ? Z.map(n, function(t) {
                            return {
                                name: e.name,
                                value: t.replace(Ee, "\r\n")
                            }
                        }) : {
                            name: e.name,
                            value: n.replace(Ee, "\r\n")
                        }
                    }).get()
                }
            }), Z.ajaxSettings.xhr = function() {
                try {
                    return new XMLHttpRequest
                } catch (t) {}
            };
            var Se = 0,
                Ae = {},
                Ne = {
                    0: 200,
                    1223: 204
                },
                Re = Z.ajaxSettings.xhr();
            t.attachEvent && t.attachEvent("onunload", function() {
                for (var t in Ae) Ae[t]()
            }), Y.cors = !!Re && "withCredentials" in Re, Y.ajax = Re = !!Re, Z.ajaxTransport(function(t) {
                var e;
                return Y.cors || Re && !t.crossDomain ? {
                    send: function(n, r) {
                        var i, o = t.xhr(),
                            a = ++Se;
                        if (o.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
                            for (i in t.xhrFields) o[i] = t.xhrFields[i];
                        t.mimeType && o.overrideMimeType && o.overrideMimeType(t.mimeType), t.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest");
                        for (i in n) o.setRequestHeader(i, n[i]);
                        e = function(t) {
                            return function() {
                                e && (delete Ae[a], e = o.onload = o.onerror = null, "abort" === t ? o.abort() : "error" === t ? r(o.status, o.statusText) : r(Ne[o.status] || o.status, o.statusText, "string" == typeof o.responseText ? {
                                    text: o.responseText
                                } : void 0, o.getAllResponseHeaders()))
                            }
                        }, o.onload = e(), o.onerror = e("error"), e = Ae[a] = e("abort");
                        try {
                            o.send(t.hasContent && t.data || null)
                        } catch (s) {
                            if (e) throw s
                        }
                    },
                    abort: function() {
                        e && e()
                    }
                } : void 0
            }), Z.ajaxSetup({
                accepts: {
                    script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
                },
                contents: {
                    script: /(?:java|ecma)script/
                },
                converters: {
                    "text script": function(t) {
                        return Z.globalEval(t), t
                    }
                }
            }), Z.ajaxPrefilter("script", function(t) {
                void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET")
            }), Z.ajaxTransport("script", function(t) {
                if (t.crossDomain) {
                    var e, n;
                    return {
                        send: function(r, i) {
                            e = Z("<script>").prop({
                                async: !0,
                                charset: t.scriptCharset,
                                src: t.url
                            }).on("load error", n = function(t) {
                                e.remove(), n = null, t && i("error" === t.type ? 404 : 200, t.type)
                            }), Q.head.appendChild(e[0])
                        },
                        abort: function() {
                            n && n()
                        }
                    }
                }
            });
            var Ie = [],
                Oe = /(=)\?(?=&|$)|\?\?/;
            Z.ajaxSetup({
                jsonp: "callback",
                jsonpCallback: function() {
                    var t = Ie.pop() || Z.expando + "_" + ce++;
                    return this[t] = !0, t
                }
            }), Z.ajaxPrefilter("json jsonp", function(e, n, r) {
                var i, o, a, s = e.jsonp !== !1 && (Oe.test(e.url) ? "url" : "string" == typeof e.data && !(e.contentType || "").indexOf("application/x-www-form-urlencoded") && Oe.test(e.data) && "data");
                return s || "jsonp" === e.dataTypes[0] ? (i = e.jsonpCallback = Z.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, s ? e[s] = e[s].replace(Oe, "$1" + i) : e.jsonp !== !1 && (e.url += (le.test(e.url) ? "&" : "?") + e.jsonp + "=" + i), e.converters["script json"] = function() {
                    return a || Z.error(i + " was not called"), a[0]
                }, e.dataTypes[0] = "json", o = t[i], t[i] = function() {
                    a = arguments
                }, r.always(function() {
                    t[i] = o, e[i] && (e.jsonpCallback = n.jsonpCallback, Ie.push(i)), a && Z.isFunction(o) && o(a[0]), a = o = void 0
                }), "script") : void 0
            }), Z.parseHTML = function(t, e, n) {
                if (!t || "string" != typeof t) return null;
                "boolean" == typeof e && (n = e, e = !1), e = e || Q;
                var r = at.exec(t),
                    i = !n && [];
                return r ? [e.createElement(r[1])] : (r = Z.buildFragment([t], e, i), i && i.length && Z(i).remove(), Z.merge([], r.childNodes))
            };
            var Le = Z.fn.load;
            Z.fn.load = function(t, e, n) {
                if ("string" != typeof t && Le) return Le.apply(this, arguments);
                var r, i, o, a = this,
                    s = t.indexOf(" ");
                return s >= 0 && (r = Z.trim(t.slice(s)), t = t.slice(0, s)), Z.isFunction(e) ? (n = e, e = void 0) : e && "object" == typeof e && (i = "POST"), a.length > 0 && Z.ajax({
                    url: t,
                    type: i,
                    dataType: "html",
                    data: e
                }).done(function(t) {
                    o = arguments, a.html(r ? Z("<div>").append(Z.parseHTML(t)).find(r) : t)
                }).complete(n && function(t, e) {
                    a.each(n, o || [t.responseText, e, t])
                }), this
            }, Z.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(t, e) {
                Z.fn[e] = function(t) {
                    return this.on(e, t)
                }
            }), Z.expr.filters.animated = function(t) {
                return Z.grep(Z.timers, function(e) {
                    return t === e.elem
                }).length
            };
            var De = t.document.documentElement;
            Z.offset = {
                setOffset: function(t, e, n) {
                    var r, i, o, a, s, u, c, l = Z.css(t, "position"),
                        f = Z(t),
                        p = {};
                    "static" === l && (t.style.position = "relative"), s = f.offset(), o = Z.css(t, "top"), u = Z.css(t, "left"), c = ("absolute" === l || "fixed" === l) && (o + u).indexOf("auto") > -1, c ? (r = f.position(), a = r.top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(u) || 0), Z.isFunction(e) && (e = e.call(t, n, s)), null != e.top && (p.top = e.top - s.top + a), null != e.left && (p.left = e.left - s.left + i), "using" in e ? e.using.call(t, p) : f.css(p)
                }
            }, Z.fn.extend({
                offset: function(t) {
                    if (arguments.length) return void 0 === t ? this : this.each(function(e) {
                        Z.offset.setOffset(this, t, e)
                    });
                    var e, n, r = this[0],
                        i = {
                            top: 0,
                            left: 0
                        },
                        o = r && r.ownerDocument;
                    if (o) return e = o.documentElement, Z.contains(e, r) ? (typeof r.getBoundingClientRect !== Et && (i = r.getBoundingClientRect()), n = F(o), {
                        top: i.top + n.pageYOffset - e.clientTop,
                        left: i.left + n.pageXOffset - e.clientLeft
                    }) : i
                },
                position: function() {
                    if (this[0]) {
                        var t, e, n = this[0],
                            r = {
                                top: 0,
                                left: 0
                            };
                        return "fixed" === Z.css(n, "position") ? e = n.getBoundingClientRect() : (t = this.offsetParent(), e = this.offset(), Z.nodeName(t[0], "html") || (r = t.offset()), r.top += Z.css(t[0], "borderTopWidth", !0), r.left += Z.css(t[0], "borderLeftWidth", !0)), {
                            top: e.top - r.top - Z.css(n, "marginTop", !0),
                            left: e.left - r.left - Z.css(n, "marginLeft", !0)
                        }
                    }
                },
                offsetParent: function() {
                    return this.map(function() {
                        for (var t = this.offsetParent || De; t && !Z.nodeName(t, "html") && "static" === Z.css(t, "position");) t = t.offsetParent;
                        return t || De
                    })
                }
            }), Z.each({
                scrollLeft: "pageXOffset",
                scrollTop: "pageYOffset"
            }, function(e, n) {
                var r = "pageYOffset" === n;
                Z.fn[e] = function(i) {
                    return vt(this, function(e, i, o) {
                        var a = F(e);
                        return void 0 === o ? a ? a[n] : e[i] : void(a ? a.scrollTo(r ? t.pageXOffset : o, r ? o : t.pageYOffset) : e[i] = o)
                    }, e, i, arguments.length, null)
                }
            }), Z.each(["top", "left"], function(t, e) {
                Z.cssHooks[e] = _(Y.pixelPosition, function(t, n) {
                    return n ? (n = w(t, e), Bt.test(n) ? Z(t).position()[e] + "px" : n) : void 0
                })
            }), Z.each({
                Height: "height",
                Width: "width"
            }, function(t, e) {
                Z.each({
                    padding: "inner" + t,
                    content: e,
                    "": "outer" + t
                }, function(n, r) {
                    Z.fn[r] = function(r, i) {
                        var o = arguments.length && (n || "boolean" != typeof r),
                            a = n || (r === !0 || i === !0 ? "margin" : "border");
                        return vt(this, function(e, n, r) {
                            var i;
                            return Z.isWindow(e) ? e.document.documentElement["client" + t] : 9 === e.nodeType ? (i = e.documentElement, Math.max(e.body["scroll" + t], i["scroll" + t], e.body["offset" + t], i["offset" + t], i["client" + t])) : void 0 === r ? Z.css(e, n, a) : Z.style(e, n, r, a)
                        }, e, o ? r : void 0, o, null)
                    }
                })
            }), Z.fn.size = function() {
                return this.length
            }, Z.fn.andSelf = Z.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
                return Z
            });
            var Pe = t.jQuery,
                $e = t.$;
            return Z.noConflict = function(e) {
                return t.$ === Z && (t.$ = $e), e && t.jQuery === Z && (t.jQuery = Pe), Z
            }, typeof e === Et && (t.jQuery = t.$ = Z), Z
        })
    }, {}],
    16: [function(t, e, n) {
        (function(t) {
            (function() {
                function r(t, e) {
                    if (t !== e) {
                        var n = null === t,
                            r = t === E,
                            i = t === t,
                            o = null === e,
                            a = e === E,
                            s = e === e;
                        if (t > e && !o || !i || n && !a && s || r && s) return 1;
                        if (e > t && !n || !s || o && !r && i || a && i) return -1
                    }
                    return 0
                }

                function i(t, e, n) {
                    for (var r = t.length, i = n ? r : -1; n ? i-- : ++i < r;)
                        if (e(t[i], i, t)) return i;
                    return -1
                }

                function o(t, e, n) {
                    if (e !== e) return v(t, n);
                    for (var r = n - 1, i = t.length; ++r < i;)
                        if (t[r] === e) return r;
                    return -1
                }

                function a(t) {
                    return "function" == typeof t || !1
                }

                function s(t) {
                    return null == t ? "" : t + ""
                }

                function u(t, e) {
                    for (var n = -1, r = t.length; ++n < r && e.indexOf(t.charAt(n)) > -1;);
                    return n
                }

                function c(t, e) {
                    for (var n = t.length; n-- && e.indexOf(t.charAt(n)) > -1;);
                    return n
                }

                function l(t, e) {
                    return r(t.criteria, e.criteria) || t.index - e.index
                }

                function f(t, e, n) {
                    for (var i = -1, o = t.criteria, a = e.criteria, s = o.length, u = n.length; ++i < s;) {
                        var c = r(o[i], a[i]);
                        if (c) {
                            if (i >= u) return c;
                            var l = n[i];
                            return c * ("asc" === l || l === !0 ? 1 : -1)
                        }
                    }
                    return t.index - e.index
                }

                function p(t) {
                    return Wt[t]
                }

                function h(t) {
                    return zt[t]
                }

                function d(t, e, n) {
                    return e ? t = Xt[t] : n && (t = Jt[t]), "\\" + t
                }

                function g(t) {
                    return "\\" + Jt[t]
                }

                function v(t, e, n) {
                    for (var r = t.length, i = e + (n ? 0 : -1); n ? i-- : ++i < r;) {
                        var o = t[i];
                        if (o !== o) return i
                    }
                    return -1
                }

                function y(t) {
                    return !!t && "object" == typeof t
                }

                function m(t) {
                    return 160 >= t && t >= 9 && 13 >= t || 32 == t || 160 == t || 5760 == t || 6158 == t || t >= 8192 && (8202 >= t || 8232 == t || 8233 == t || 8239 == t || 8287 == t || 12288 == t || 65279 == t)
                }

                function b(t, e) {
                    for (var n = -1, r = t.length, i = -1, o = []; ++n < r;) t[n] === e && (t[n] = W, o[++i] = n);
                    return o
                }

                function x(t, e) {
                    for (var n, r = -1, i = t.length, o = -1, a = []; ++r < i;) {
                        var s = t[r],
                            u = e ? e(s, r, t) : s;
                        r && n === u || (n = u, a[++o] = s)
                    }
                    return a
                }

                function w(t) {
                    for (var e = -1, n = t.length; ++e < n && m(t.charCodeAt(e)););
                    return e
                }

                function _(t) {
                    for (var e = t.length; e-- && m(t.charCodeAt(e)););
                    return e
                }

                function k(t) {
                    return Vt[t]
                }

                function T(t) {
                    function e(t) {
                        if (y(t) && !As(t) && !(t instanceof Q)) {
                            if (t instanceof m) return t;
                            if (ea.call(t, "__chain__") && ea.call(t, "__wrapped__")) return hr(t)
                        }
                        return new m(t)
                    }

                    function n() {}

                    function m(t, e, n) {
                        this.__wrapped__ = t, this.__actions__ = n || [], this.__chain__ = !!e
                    }

                    function Q(t) {
                        this.__wrapped__ = t, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = Sa, this.__views__ = []
                    }

                    function et() {
                        var t = new Q(this.__wrapped__);
                        return t.__actions__ = te(this.__actions__), t.__dir__ = this.__dir__, t.__filtered__ = this.__filtered__, t.__iteratees__ = te(this.__iteratees__), t.__takeCount__ = this.__takeCount__, t.__views__ = te(this.__views__), t
                    }

                    function rt() {
                        if (this.__filtered__) {
                            var t = new Q(this);
                            t.__dir__ = -1, t.__filtered__ = !0
                        } else t = this.clone(), t.__dir__ *= -1;
                        return t
                    }

                    function Wt() {
                        var t = this.__wrapped__.value(),
                            e = this.__dir__,
                            n = As(t),
                            r = 0 > e,
                            i = n ? t.length : 0,
                            o = Vn(0, i, this.__views__),
                            a = o.start,
                            s = o.end,
                            u = s - a,
                            c = r ? s : a - 1,
                            l = this.__iteratees__,
                            f = l.length,
                            p = 0,
                            h = ka(u, this.__takeCount__);
                        if (!n || M > i || i == u && h == u) return nn(r && n ? t.reverse() : t, this.__actions__);
                        var d = [];
                        t: for (; u-- && h > p;) {
                            c += e;
                            for (var g = -1, v = t[c]; ++g < f;) {
                                var y = l[g],
                                    m = y.iteratee,
                                    b = y.type,
                                    x = m(v);
                                if (b == B) v = x;
                                else if (!x) {
                                    if (b == F) continue t;
                                    break t
                                }
                            }
                            d[p++] = v
                        }
                        return d
                    }

                    function zt() {
                        this.__data__ = {}
                    }

                    function Vt(t) {
                        return this.has(t) && delete this.__data__[t]
                    }

                    function Gt(t) {
                        return "__proto__" == t ? E : this.__data__[t]
                    }

                    function Xt(t) {
                        return "__proto__" != t && ea.call(this.__data__, t)
                    }

                    function Jt(t, e) {
                        return "__proto__" != t && (this.__data__[t] = e), this
                    }

                    function Yt(t) {
                        var e = t ? t.length : 0;
                        for (this.data = {
                                hash: ya(null),
                                set: new fa
                            }; e--;) this.push(t[e])
                    }

                    function Qt(t, e) {
                        var n = t.data,
                            r = "string" == typeof e || Li(e) ? n.set.has(e) : n.hash[e];
                        return r ? 0 : -1
                    }

                    function Kt(t) {
                        var e = this.data;
                        "string" == typeof t || Li(t) ? e.set.add(t) : e.hash[t] = !0
                    }

                    function Zt(t, e) {
                        for (var n = -1, r = t.length, i = -1, o = e.length, a = Fo(r + o); ++n < r;) a[n] = t[n];
                        for (; ++i < o;) a[n++] = e[i];
                        return a
                    }

                    function te(t, e) {
                        var n = -1,
                            r = t.length;
                        for (e || (e = Fo(r)); ++n < r;) e[n] = t[n];
                        return e
                    }

                    function ee(t, e) {
                        for (var n = -1, r = t.length; ++n < r && e(t[n], n, t) !== !1;);
                        return t
                    }

                    function ie(t, e) {
                        for (var n = t.length; n-- && e(t[n], n, t) !== !1;);
                        return t
                    }

                    function oe(t, e) {
                        for (var n = -1, r = t.length; ++n < r;)
                            if (!e(t[n], n, t)) return !1;
                        return !0
                    }

                    function ae(t, e, n, r) {
                        for (var i = -1, o = t.length, a = r, s = a; ++i < o;) {
                            var u = t[i],
                                c = +e(u);
                            n(c, a) && (a = c, s = u)
                        }
                        return s
                    }

                    function se(t, e) {
                        for (var n = -1, r = t.length, i = -1, o = []; ++n < r;) {
                            var a = t[n];
                            e(a, n, t) && (o[++i] = a)
                        }
                        return o
                    }

                    function ue(t, e) {
                        for (var n = -1, r = t.length, i = Fo(r); ++n < r;) i[n] = e(t[n], n, t);
                        return i
                    }

                    function ce(t, e) {
                        for (var n = -1, r = e.length, i = t.length; ++n < r;) t[i + n] = e[n];
                        return t
                    }

                    function le(t, e, n, r) {
                        var i = -1,
                            o = t.length;
                        for (r && o && (n = t[++i]); ++i < o;) n = e(n, t[i], i, t);
                        return n
                    }

                    function fe(t, e, n, r) {
                        var i = t.length;
                        for (r && i && (n = t[--i]); i--;) n = e(n, t[i], i, t);
                        return n
                    }

                    function pe(t, e) {
                        for (var n = -1, r = t.length; ++n < r;)
                            if (e(t[n], n, t)) return !0;
                        return !1
                    }

                    function he(t, e) {
                        for (var n = t.length, r = 0; n--;) r += +e(t[n]) || 0;
                        return r
                    }

                    function de(t, e) {
                        return t === E ? e : t
                    }

                    function ge(t, e, n, r) {
                        return t !== E && ea.call(r, n) ? t : e
                    }

                    function ve(t, e, n) {
                        for (var r = -1, i = Ms(e), o = i.length; ++r < o;) {
                            var a = i[r],
                                s = t[a],
                                u = n(s, e[a], a, t, e);
                            (u === u ? u === s : s !== s) && (s !== E || a in t) || (t[a] = u)
                        }
                        return t
                    }

                    function ye(t, e) {
                        return null == e ? t : be(e, Ms(e), t)
                    }

                    function me(t, e) {
                        for (var n = -1, r = null == t, i = !r && Qn(t), o = i ? t.length : 0, a = e.length, s = Fo(a); ++n < a;) {
                            var u = e[n];
                            i ? s[n] = Kn(u, o) ? t[u] : E : s[n] = r ? E : t[u]
                        }
                        return s
                    }

                    function be(t, e, n) {
                        n || (n = {});
                        for (var r = -1, i = e.length; ++r < i;) {
                            var o = e[r];
                            n[o] = t[o]
                        }
                        return n
                    }

                    function xe(t, e, n) {
                        var r = typeof t;
                        return "function" == r ? e === E ? t : an(t, e, n) : null == t ? So : "object" == r ? He(t) : e === E ? Lo(t) : Me(t, e)
                    }

                    function we(t, e, n, r, i, o, a) {
                        var s;
                        if (n && (s = i ? n(t, r, i) : n(t)), s !== E) return s;
                        if (!Li(t)) return t;
                        var u = As(t);
                        if (u) {
                            if (s = Gn(t), !e) return te(t, s)
                        } else {
                            var c = ra.call(t),
                                l = c == Y;
                            if (c != Z && c != z && (!l || i)) return Ut[c] ? Jn(t, c, e) : i ? t : {};
                            if (s = Xn(l ? {} : t), !e) return ye(s, t)
                        }
                        o || (o = []), a || (a = []);
                        for (var f = o.length; f--;)
                            if (o[f] == t) return a[f];
                        return o.push(t), a.push(s), (u ? ee : Re)(t, function(r, i) {
                            s[i] = we(r, e, n, i, t, o, a)
                        }), s
                    }

                    function _e(t, e, n) {
                        if ("function" != typeof t) throw new Yo(U);
                        return pa(function() {
                            t.apply(E, n)
                        }, e)
                    }

                    function ke(t, e) {
                        var n = t ? t.length : 0,
                            r = [];
                        if (!n) return r;
                        var i = -1,
                            a = Un(),
                            s = a == o,
                            u = s && e.length >= M ? gn(e) : null,
                            c = e.length;
                        u && (a = Qt, s = !1, e = u);
                        t: for (; ++i < n;) {
                            var l = t[i];
                            if (s && l === l) {
                                for (var f = c; f--;)
                                    if (e[f] === l) continue t;
                                r.push(l)
                            } else a(e, l, 0) < 0 && r.push(l)
                        }
                        return r
                    }

                    function Te(t, e) {
                        var n = !0;
                        return Pa(t, function(t, r, i) {
                            return n = !!e(t, r, i)
                        }), n
                    }

                    function Ee(t, e, n, r) {
                        var i = r,
                            o = i;
                        return Pa(t, function(t, a, s) {
                            var u = +e(t, a, s);
                            (n(u, i) || u === r && u === o) && (i = u, o = t)
                        }), o
                    }

                    function je(t, e, n, r) {
                        var i = t.length;
                        for (n = null == n ? 0 : +n || 0, 0 > n && (n = -n > i ? 0 : i + n), r = r === E || r > i ? i : +r || 0, 0 > r && (r += i), i = n > r ? 0 : r >>> 0, n >>>= 0; i > n;) t[n++] = e;
                        return t
                    }

                    function Ce(t, e) {
                        var n = [];
                        return Pa(t, function(t, r, i) {
                            e(t, r, i) && n.push(t)
                        }), n
                    }

                    function Se(t, e, n, r) {
                        var i;
                        return n(t, function(t, n, o) {
                            return e(t, n, o) ? (i = r ? n : t, !1) : void 0
                        }), i
                    }

                    function Ae(t, e, n, r) {
                        r || (r = []);
                        for (var i = -1, o = t.length; ++i < o;) {
                            var a = t[i];
                            y(a) && Qn(a) && (n || As(a) || Ei(a)) ? e ? Ae(a, e, n, r) : ce(r, a) : n || (r[r.length] = a)
                        }
                        return r
                    }

                    function Ne(t, e) {
                        return qa(t, e, to)
                    }

                    function Re(t, e) {
                        return qa(t, e, Ms)
                    }

                    function Ie(t, e) {
                        return Ha(t, e, Ms)
                    }

                    function Oe(t, e) {
                        for (var n = -1, r = e.length, i = -1, o = []; ++n < r;) {
                            var a = e[n];
                            Oi(t[a]) && (o[++i] = a)
                        }
                        return o
                    }

                    function Le(t, e, n) {
                        if (null != t) {
                            n !== E && n in fr(t) && (e = [n]);
                            for (var r = 0, i = e.length; null != t && i > r;) t = t[e[r++]];
                            return r && r == i ? t : E
                        }
                    }

                    function De(t, e, n, r, i, o) {
                        return t === e ? !0 : null == t || null == e || !Li(t) && !y(e) ? t !== t && e !== e : Pe(t, e, De, n, r, i, o)
                    }

                    function Pe(t, e, n, r, i, o, a) {
                        var s = As(t),
                            u = As(e),
                            c = V,
                            l = V;
                        s || (c = ra.call(t), c == z ? c = Z : c != Z && (s = Ui(t))), u || (l = ra.call(e), l == z ? l = Z : l != Z && (u = Ui(e)));
                        var f = c == Z,
                            p = l == Z,
                            h = c == l;
                        if (h && !s && !f) return Hn(t, e, c);
                        if (!i) {
                            var d = f && ea.call(t, "__wrapped__"),
                                g = p && ea.call(e, "__wrapped__");
                            if (d || g) return n(d ? t.value() : t, g ? e.value() : e, r, i, o, a)
                        }
                        if (!h) return !1;
                        o || (o = []), a || (a = []);
                        for (var v = o.length; v--;)
                            if (o[v] == t) return a[v] == e;
                        o.push(t), a.push(e);
                        var y = (s ? qn : Mn)(t, e, n, r, i, o, a);
                        return o.pop(), a.pop(), y
                    }

                    function $e(t, e, n) {
                        var r = e.length,
                            i = r,
                            o = !n;
                        if (null == t) return !i;
                        for (t = fr(t); r--;) {
                            var a = e[r];
                            if (o && a[2] ? a[1] !== t[a[0]] : !(a[0] in t)) return !1
                        }
                        for (; ++r < i;) {
                            a = e[r];
                            var s = a[0],
                                u = t[s],
                                c = a[1];
                            if (o && a[2]) {
                                if (u === E && !(s in t)) return !1
                            } else {
                                var l = n ? n(u, c, s) : E;
                                if (!(l === E ? De(c, u, n, !0) : l)) return !1
                            }
                        }
                        return !0
                    }

                    function qe(t, e) {
                        var n = -1,
                            r = Qn(t) ? Fo(t.length) : [];
                        return Pa(t, function(t, i, o) {
                            r[++n] = e(t, i, o)
                        }), r
                    }

                    function He(t) {
                        var e = Wn(t);
                        if (1 == e.length && e[0][2]) {
                            var n = e[0][0],
                                r = e[0][1];
                            return function(t) {
                                return null == t ? !1 : t[n] === r && (r !== E || n in fr(t))
                            }
                        }
                        return function(t) {
                            return $e(t, e)
                        }
                    }

                    function Me(t, e) {
                        var n = As(t),
                            r = tr(t) && rr(e),
                            i = t + "";
                        return t = pr(t),
                            function(o) {
                                if (null == o) return !1;
                                var a = i;
                                if (o = fr(o), (n || !r) && !(a in o)) {
                                    if (o = 1 == t.length ? o : Le(o, Xe(t, 0, -1)), null == o) return !1;
                                    a = jr(t), o = fr(o)
                                }
                                return o[a] === e ? e !== E || a in o : De(e, o[a], E, !0)
                            }
                    }

                    function Fe(t, e, n, r, i) {
                        if (!Li(t)) return t;
                        var o = Qn(e) && (As(e) || Ui(e)),
                            a = o ? E : Ms(e);
                        return ee(a || e, function(s, u) {
                            if (a && (u = s, s = e[u]), y(s)) r || (r = []), i || (i = []), Be(t, e, u, Fe, n, r, i);
                            else {
                                var c = t[u],
                                    l = n ? n(c, s, u, t, e) : E,
                                    f = l === E;
                                f && (l = s), l === E && (!o || u in t) || !f && (l === l ? l === c : c !== c) || (t[u] = l)
                            }
                        }), t
                    }

                    function Be(t, e, n, r, i, o, a) {
                        for (var s = o.length, u = e[n]; s--;)
                            if (o[s] == u) return void(t[n] = a[s]);
                        var c = t[n],
                            l = i ? i(c, u, n, t, e) : E,
                            f = l === E;
                        f && (l = u, Qn(u) && (As(u) || Ui(u)) ? l = As(c) ? c : Qn(c) ? te(c) : [] : Mi(u) || Ei(u) ? l = Ei(c) ? Xi(c) : Mi(c) ? c : {} : f = !1), o.push(u), a.push(l), f ? t[n] = r(l, u, i, o, a) : (l === l ? l !== c : c === c) && (t[n] = l)
                    }

                    function Ue(t) {
                        return function(e) {
                            return null == e ? E : e[t]
                        }
                    }

                    function We(t) {
                        var e = t + "";
                        return t = pr(t),
                            function(n) {
                                return Le(n, t, e)
                            }
                    }

                    function ze(t, e) {
                        for (var n = t ? e.length : 0; n--;) {
                            var r = e[n];
                            if (r != i && Kn(r)) {
                                var i = r;
                                ha.call(t, r, 1)
                            }
                        }
                        return t
                    }

                    function Ve(t, e) {
                        return t + ma(ja() * (e - t + 1))
                    }

                    function Ge(t, e, n, r, i) {
                        return i(t, function(t, i, o) {
                            n = r ? (r = !1, t) : e(n, t, i, o)
                        }), n
                    }

                    function Xe(t, e, n) {
                        var r = -1,
                            i = t.length;
                        e = null == e ? 0 : +e || 0, 0 > e && (e = -e > i ? 0 : i + e), n = n === E || n > i ? i : +n || 0, 0 > n && (n += i), i = e > n ? 0 : n - e >>> 0, e >>>= 0;
                        for (var o = Fo(i); ++r < i;) o[r] = t[r + e];
                        return o
                    }

                    function Je(t, e) {
                        var n;
                        return Pa(t, function(t, r, i) {
                            return n = e(t, r, i), !n
                        }), !!n
                    }

                    function Ye(t, e) {
                        var n = t.length;
                        for (t.sort(e); n--;) t[n] = t[n].value;
                        return t
                    }

                    function Qe(t, e, n) {
                        var r = Fn(),
                            i = -1;
                        e = ue(e, function(t) {
                            return r(t)
                        });
                        var o = qe(t, function(t) {
                            var n = ue(e, function(e) {
                                return e(t)
                            });
                            return {
                                criteria: n,
                                index: ++i,
                                value: t
                            }
                        });
                        return Ye(o, function(t, e) {
                            return f(t, e, n)
                        })
                    }

                    function Ke(t, e) {
                        var n = 0;
                        return Pa(t, function(t, r, i) {
                            n += +e(t, r, i) || 0
                        }), n
                    }

                    function Ze(t, e) {
                        var n = -1,
                            r = Un(),
                            i = t.length,
                            a = r == o,
                            s = a && i >= M,
                            u = s ? gn() : null,
                            c = [];
                        u ? (r = Qt, a = !1) : (s = !1, u = e ? [] : c);
                        t: for (; ++n < i;) {
                            var l = t[n],
                                f = e ? e(l, n, t) : l;
                            if (a && l === l) {
                                for (var p = u.length; p--;)
                                    if (u[p] === f) continue t;
                                e && u.push(f), c.push(l)
                            } else r(u, f, 0) < 0 && ((e || s) && u.push(f), c.push(l))
                        }
                        return c
                    }

                    function tn(t, e) {
                        for (var n = -1, r = e.length, i = Fo(r); ++n < r;) i[n] = t[e[n]];
                        return i
                    }

                    function en(t, e, n, r) {
                        for (var i = t.length, o = r ? i : -1;
                            (r ? o-- : ++o < i) && e(t[o], o, t););
                        return n ? Xe(t, r ? 0 : o, r ? o + 1 : i) : Xe(t, r ? o + 1 : 0, r ? i : o)
                    }

                    function nn(t, e) {
                        var n = t;
                        n instanceof Q && (n = n.value());
                        for (var r = -1, i = e.length; ++r < i;) {
                            var o = e[r];
                            n = o.func.apply(o.thisArg, ce([n], o.args))
                        }
                        return n
                    }

                    function rn(t, e, n) {
                        var r = 0,
                            i = t ? t.length : r;
                        if ("number" == typeof e && e === e && Ra >= i) {
                            for (; i > r;) {
                                var o = r + i >>> 1,
                                    a = t[o];
                                (n ? e >= a : e > a) && null !== a ? r = o + 1 : i = o
                            }
                            return i
                        }
                        return on(t, e, So, n)
                    }

                    function on(t, e, n, r) {
                        e = n(e);
                        for (var i = 0, o = t ? t.length : 0, a = e !== e, s = null === e, u = e === E; o > i;) {
                            var c = ma((i + o) / 2),
                                l = n(t[c]),
                                f = l !== E,
                                p = l === l;
                            if (a) var h = p || r;
                            else h = s ? p && f && (r || null != l) : u ? p && (r || f) : null == l ? !1 : r ? e >= l : e > l;
                            h ? i = c + 1 : o = c
                        }
                        return ka(o, Na)
                    }

                    function an(t, e, n) {
                        if ("function" != typeof t) return So;
                        if (e === E) return t;
                        switch (n) {
                            case 1:
                                return function(n) {
                                    return t.call(e, n)
                                };
                            case 3:
                                return function(n, r, i) {
                                    return t.call(e, n, r, i)
                                };
                            case 4:
                                return function(n, r, i, o) {
                                    return t.call(e, n, r, i, o)
                                };
                            case 5:
                                return function(n, r, i, o, a) {
                                    return t.call(e, n, r, i, o, a)
                                }
                        }
                        return function() {
                            return t.apply(e, arguments)
                        }
                    }

                    function sn(t) {
                        var e = new aa(t.byteLength),
                            n = new da(e);
                        return n.set(new da(t)), e
                    }

                    function un(t, e, n) {
                        for (var r = n.length, i = -1, o = _a(t.length - r, 0), a = -1, s = e.length, u = Fo(s + o); ++a < s;) u[a] = e[a];
                        for (; ++i < r;) u[n[i]] = t[i];
                        for (; o--;) u[a++] = t[i++];
                        return u
                    }

                    function cn(t, e, n) {
                        for (var r = -1, i = n.length, o = -1, a = _a(t.length - i, 0), s = -1, u = e.length, c = Fo(a + u); ++o < a;) c[o] = t[o];
                        for (var l = o; ++s < u;) c[l + s] = e[s];
                        for (; ++r < i;) c[l + n[r]] = t[o++];
                        return c
                    }

                    function ln(t, e) {
                        return function(n, r, i) {
                            var o = e ? e() : {};
                            if (r = Fn(r, i, 3), As(n))
                                for (var a = -1, s = n.length; ++a < s;) {
                                    var u = n[a];
                                    t(o, u, r(u, a, n), n)
                                } else Pa(n, function(e, n, i) {
                                    t(o, e, r(e, n, i), i)
                                });
                            return o
                        }
                    }

                    function fn(t) {
                        return yi(function(e, n) {
                            var r = -1,
                                i = null == e ? 0 : n.length,
                                o = i > 2 ? n[i - 2] : E,
                                a = i > 2 ? n[2] : E,
                                s = i > 1 ? n[i - 1] : E;
                            for ("function" == typeof o ? (o = an(o, s, 5), i -= 2) : (o = "function" == typeof s ? s : E, i -= o ? 1 : 0), a && Zn(n[0], n[1], a) && (o = 3 > i ? E : o, i = 1); ++r < i;) {
                                var u = n[r];
                                u && t(e, u, o)
                            }
                            return e
                        })
                    }

                    function pn(t, e) {
                        return function(n, r) {
                            var i = n ? Ba(n) : 0;
                            if (!nr(i)) return t(n, r);
                            for (var o = e ? i : -1, a = fr(n);
                                (e ? o-- : ++o < i) && r(a[o], o, a) !== !1;);
                            return n
                        }
                    }

                    function hn(t) {
                        return function(e, n, r) {
                            for (var i = fr(e), o = r(e), a = o.length, s = t ? a : -1; t ? s-- : ++s < a;) {
                                var u = o[s];
                                if (n(i[u], u, i) === !1) break
                            }
                            return e
                        }
                    }

                    function dn(t, e) {
                        function n() {
                            var i = this && this !== ne && this instanceof n ? r : t;
                            return i.apply(e, arguments)
                        }
                        var r = yn(t);
                        return n
                    }

                    function gn(t) {
                        return ya && fa ? new Yt(t) : null
                    }

                    function vn(t) {
                        return function(e) {
                            for (var n = -1, r = Eo(lo(e)), i = r.length, o = ""; ++n < i;) o = t(o, r[n], n);
                            return o
                        }
                    }

                    function yn(t) {
                        return function() {
                            var e = arguments;
                            switch (e.length) {
                                case 0:
                                    return new t;
                                case 1:
                                    return new t(e[0]);
                                case 2:
                                    return new t(e[0], e[1]);
                                case 3:
                                    return new t(e[0], e[1], e[2]);
                                case 4:
                                    return new t(e[0], e[1], e[2], e[3]);
                                case 5:
                                    return new t(e[0], e[1], e[2], e[3], e[4]);
                                case 6:
                                    return new t(e[0], e[1], e[2], e[3], e[4], e[5]);
                                case 7:
                                    return new t(e[0], e[1], e[2], e[3], e[4], e[5], e[6])
                            }
                            var n = Da(t.prototype),
                                r = t.apply(n, e);
                            return Li(r) ? r : n
                        }
                    }

                    function mn(t) {
                        function e(n, r, i) {
                            i && Zn(n, r, i) && (r = E);
                            var o = $n(n, t, E, E, E, E, E, r);
                            return o.placeholder = e.placeholder, o
                        }
                        return e
                    }

                    function bn(t, e) {
                        return yi(function(n) {
                            var r = n[0];
                            return null == r ? r : (n.push(e), t.apply(E, n))
                        })
                    }

                    function xn(t, e) {
                        return function(n, r, i) {
                            if (i && Zn(n, r, i) && (r = E), r = Fn(r, i, 3), 1 == r.length) {
                                n = As(n) ? n : lr(n);
                                var o = ae(n, r, t, e);
                                if (!n.length || o !== e) return o
                            }
                            return Ee(n, r, t, e)
                        }
                    }

                    function wn(t, e) {
                        return function(n, r, o) {
                            if (r = Fn(r, o, 3), As(n)) {
                                var a = i(n, r, e);
                                return a > -1 ? n[a] : E
                            }
                            return Se(n, r, t)
                        }
                    }

                    function _n(t) {
                        return function(e, n, r) {
                            return e && e.length ? (n = Fn(n, r, 3), i(e, n, t)) : -1
                        }
                    }

                    function kn(t) {
                        return function(e, n, r) {
                            return n = Fn(n, r, 3), Se(e, n, t, !0)
                        }
                    }

                    function Tn(t) {
                        return function() {
                            for (var e, n = arguments.length, r = t ? n : -1, i = 0, o = Fo(n); t ? r-- : ++r < n;) {
                                var a = o[i++] = arguments[r];
                                if ("function" != typeof a) throw new Yo(U);
                                !e && m.prototype.thru && "wrapper" == Bn(a) && (e = new m([], !0))
                            }
                            for (r = e ? -1 : n; ++r < n;) {
                                a = o[r];
                                var s = Bn(a),
                                    u = "wrapper" == s ? Fa(a) : E;
                                e = u && er(u[0]) && u[1] == (L | N | I | D) && !u[4].length && 1 == u[9] ? e[Bn(u[0])].apply(e, u[3]) : 1 == a.length && er(a) ? e[s]() : e.thru(a)
                            }
                            return function() {
                                var t = arguments,
                                    r = t[0];
                                if (e && 1 == t.length && As(r) && r.length >= M) return e.plant(r).value();
                                for (var i = 0, a = n ? o[i].apply(this, t) : r; ++i < n;) a = o[i].call(this, a);
                                return a
                            }
                        }
                    }

                    function En(t, e) {
                        return function(n, r, i) {
                            return "function" == typeof r && i === E && As(n) ? t(n, r) : e(n, an(r, i, 3))
                        }
                    }

                    function jn(t) {
                        return function(e, n, r) {
                            return ("function" != typeof n || r !== E) && (n = an(n, r, 3)), t(e, n, to)
                        }
                    }

                    function Cn(t) {
                        return function(e, n, r) {
                            return ("function" != typeof n || r !== E) && (n = an(n, r, 3)), t(e, n)
                        }
                    }

                    function Sn(t) {
                        return function(e, n, r) {
                            var i = {};
                            return n = Fn(n, r, 3), Re(e, function(e, r, o) {
                                var a = n(e, r, o);
                                r = t ? a : r, e = t ? e : a, i[r] = e
                            }), i
                        }
                    }

                    function An(t) {
                        return function(e, n, r) {
                            return e = s(e), (t ? e : "") + On(e, n, r) + (t ? "" : e)
                        }
                    }

                    function Nn(t) {
                        var e = yi(function(n, r) {
                            var i = b(r, e.placeholder);
                            return $n(n, t, E, r, i)
                        });
                        return e
                    }

                    function Rn(t, e) {
                        return function(n, r, i, o) {
                            var a = arguments.length < 3;
                            return "function" == typeof r && o === E && As(n) ? t(n, r, i, a) : Ge(n, Fn(r, o, 4), i, a, e)
                        }
                    }

                    function In(t, e, n, r, i, o, a, s, u, c) {
                        function l() {
                            for (var m = arguments.length, x = m, w = Fo(m); x--;) w[x] = arguments[x];
                            if (r && (w = un(w, r, i)), o && (w = cn(w, o, a)), d || v) {
                                var _ = l.placeholder,
                                    k = b(w, _);
                                if (m -= k.length, c > m) {
                                    var T = s ? te(s) : E,
                                        j = _a(c - m, 0),
                                        A = d ? k : E,
                                        N = d ? E : k,
                                        R = d ? w : E,
                                        L = d ? E : w;
                                    e |= d ? I : O, e &= ~(d ? O : I), g || (e &= ~(C | S));
                                    var D = [t, e, n, R, A, L, N, T, u, j],
                                        P = In.apply(E, D);
                                    return er(t) && Ua(P, D), P.placeholder = _, P
                                }
                            }
                            var $ = p ? n : this,
                                q = h ? $[t] : t;
                            return s && (w = ur(w, s)), f && u < w.length && (w.length = u), this && this !== ne && this instanceof l && (q = y || yn(t)), q.apply($, w)
                        }
                        var f = e & L,
                            p = e & C,
                            h = e & S,
                            d = e & N,
                            g = e & A,
                            v = e & R,
                            y = h ? E : yn(t);
                        return l
                    }

                    function On(t, e, n) {
                        var r = t.length;
                        if (e = +e, r >= e || !xa(e)) return "";
                        var i = e - r;
                        return n = null == n ? " " : n + "", yo(n, va(i / n.length)).slice(0, i)
                    }

                    function Ln(t, e, n, r) {
                        function i() {
                            for (var e = -1, s = arguments.length, u = -1, c = r.length, l = Fo(c + s); ++u < c;) l[u] = r[u];
                            for (; s--;) l[u++] = arguments[++e];
                            var f = this && this !== ne && this instanceof i ? a : t;
                            return f.apply(o ? n : this, l)
                        }
                        var o = e & C,
                            a = yn(t);
                        return i
                    }

                    function Dn(t) {
                        var e = zo[t];
                        return function(t, n) {
                            return n = n === E ? 0 : +n || 0, n ? (n = ca(10, n), e(t * n) / n) : e(t)
                        }
                    }

                    function Pn(t) {
                        return function(e, n, r, i) {
                            var o = Fn(r);
                            return null == r && o === xe ? rn(e, n, t) : on(e, n, o(r, i, 1), t)
                        }
                    }

                    function $n(t, e, n, r, i, o, a, s) {
                        var u = e & S;
                        if (!u && "function" != typeof t) throw new Yo(U);
                        var c = r ? r.length : 0;
                        if (c || (e &= ~(I | O), r = i = E), c -= i ? i.length : 0, e & O) {
                            var l = r,
                                f = i;
                            r = i = E
                        }
                        var p = u ? E : Fa(t),
                            h = [t, e, n, r, i, l, f, o, a, s];
                        if (p && (ir(h, p), e = h[1], s = h[9]), h[9] = null == s ? u ? 0 : t.length : _a(s - c, 0) || 0, e == C) var d = dn(h[0], h[2]);
                        else d = e != I && e != (C | I) || h[4].length ? In.apply(E, h) : Ln.apply(E, h);
                        var g = p ? Ma : Ua;
                        return g(d, h)
                    }

                    function qn(t, e, n, r, i, o, a) {
                        var s = -1,
                            u = t.length,
                            c = e.length;
                        if (u != c && !(i && c > u)) return !1;
                        for (; ++s < u;) {
                            var l = t[s],
                                f = e[s],
                                p = r ? r(i ? f : l, i ? l : f, s) : E;
                            if (p !== E) {
                                if (p) continue;
                                return !1
                            }
                            if (i) {
                                if (!pe(e, function(t) {
                                        return l === t || n(l, t, r, i, o, a)
                                    })) return !1
                            } else if (l !== f && !n(l, f, r, i, o, a)) return !1
                        }
                        return !0
                    }

                    function Hn(t, e, n) {
                        switch (n) {
                            case G:
                            case X:
                                return +t == +e;
                            case J:
                                return t.name == e.name && t.message == e.message;
                            case K:
                                return t != +t ? e != +e : t == +e;
                            case tt:
                            case nt:
                                return t == e + ""
                        }
                        return !1
                    }

                    function Mn(t, e, n, r, i, o, a) {
                        var s = Ms(t),
                            u = s.length,
                            c = Ms(e),
                            l = c.length;
                        if (u != l && !i) return !1;
                        for (var f = u; f--;) {
                            var p = s[f];
                            if (!(i ? p in e : ea.call(e, p))) return !1
                        }
                        for (var h = i; ++f < u;) {
                            p = s[f];
                            var d = t[p],
                                g = e[p],
                                v = r ? r(i ? g : d, i ? d : g, p) : E;
                            if (!(v === E ? n(d, g, r, i, o, a) : v)) return !1;
                            h || (h = "constructor" == p)
                        }
                        if (!h) {
                            var y = t.constructor,
                                m = e.constructor;
                            if (y != m && "constructor" in t && "constructor" in e && !("function" == typeof y && y instanceof y && "function" == typeof m && m instanceof m)) return !1
                        }
                        return !0
                    }

                    function Fn(t, n, r) {
                        var i = e.callback || jo;
                        return i = i === jo ? xe : i, r ? i(t, n, r) : i
                    }

                    function Bn(t) {
                        for (var e = t.name, n = La[e], r = n ? n.length : 0; r--;) {
                            var i = n[r],
                                o = i.func;
                            if (null == o || o == t) return i.name
                        }
                        return e
                    }

                    function Un(t, n, r) {
                        var i = e.indexOf || Tr;
                        return i = i === Tr ? o : i, t ? i(t, n, r) : i
                    }

                    function Wn(t) {
                        for (var e = eo(t), n = e.length; n--;) e[n][2] = rr(e[n][1]);
                        return e
                    }

                    function zn(t, e) {
                        var n = null == t ? E : t[e];
                        return $i(n) ? n : E
                    }

                    function Vn(t, e, n) {
                        for (var r = -1, i = n.length; ++r < i;) {
                            var o = n[r],
                                a = o.size;
                            switch (o.type) {
                                case "drop":
                                    t += a;
                                    break;
                                case "dropRight":
                                    e -= a;
                                    break;
                                case "take":
                                    e = ka(e, t + a);
                                    break;
                                case "takeRight":
                                    t = _a(t, e - a)
                            }
                        }
                        return {
                            start: t,
                            end: e
                        }
                    }

                    function Gn(t) {
                        var e = t.length,
                            n = new t.constructor(e);
                        return e && "string" == typeof t[0] && ea.call(t, "index") && (n.index = t.index, n.input = t.input), n
                    }

                    function Xn(t) {
                        var e = t.constructor;
                        return "function" == typeof e && e instanceof e || (e = Go), new e
                    }

                    function Jn(t, e, n) {
                        var r = t.constructor;
                        switch (e) {
                            case it:
                                return sn(t);
                            case G:
                            case X:
                                return new r(+t);
                            case ot:
                            case at:
                            case st:
                            case ut:
                            case ct:
                            case lt:
                            case ft:
                            case pt:
                            case ht:
                                var i = t.buffer;
                                return new r(n ? sn(i) : i, t.byteOffset, t.length);
                            case K:
                            case nt:
                                return new r(t);
                            case tt:
                                var o = new r(t.source, It.exec(t));
                                o.lastIndex = t.lastIndex
                        }
                        return o
                    }

                    function Yn(t, e, n) {
                        null == t || tr(e, t) || (e = pr(e), t = 1 == e.length ? t : Le(t, Xe(e, 0, -1)), e = jr(e));
                        var r = null == t ? t : t[e];
                        return null == r ? E : r.apply(t, n)
                    }

                    function Qn(t) {
                        return null != t && nr(Ba(t))
                    }

                    function Kn(t, e) {
                        return t = "number" == typeof t || Dt.test(t) ? +t : -1, e = null == e ? Ia : e, t > -1 && t % 1 == 0 && e > t
                    }

                    function Zn(t, e, n) {
                        if (!Li(n)) return !1;
                        var r = typeof e;
                        if ("number" == r ? Qn(n) && Kn(e, n.length) : "string" == r && e in n) {
                            var i = n[e];
                            return t === t ? t === i : i !== i
                        }
                        return !1
                    }

                    function tr(t, e) {
                        var n = typeof t;
                        if ("string" == n && Et.test(t) || "number" == n) return !0;
                        if (As(t)) return !1;
                        var r = !Tt.test(t);
                        return r || null != e && t in fr(e)
                    }

                    function er(t) {
                        var n = Bn(t);
                        if (!(n in Q.prototype)) return !1;
                        var r = e[n];
                        if (t === r) return !0;
                        var i = Fa(r);
                        return !!i && t === i[0]
                    }

                    function nr(t) {
                        return "number" == typeof t && t > -1 && t % 1 == 0 && Ia >= t
                    }

                    function rr(t) {
                        return t === t && !Li(t)
                    }

                    function ir(t, e) {
                        var n = t[1],
                            r = e[1],
                            i = n | r,
                            o = L > i,
                            a = r == L && n == N || r == L && n == D && t[7].length <= e[8] || r == (L | D) && n == N;
                        if (!o && !a) return t;
                        r & C && (t[2] = e[2], i |= n & C ? 0 : A);
                        var s = e[3];
                        if (s) {
                            var u = t[3];
                            t[3] = u ? un(u, s, e[4]) : te(s), t[4] = u ? b(t[3], W) : te(e[4])
                        }
                        return s = e[5], s && (u = t[5], t[5] = u ? cn(u, s, e[6]) : te(s), t[6] = u ? b(t[5], W) : te(e[6])), s = e[7], s && (t[7] = te(s)), r & L && (t[8] = null == t[8] ? e[8] : ka(t[8], e[8])), null == t[9] && (t[9] = e[9]), t[0] = e[0], t[1] = i, t
                    }

                    function or(t, e) {
                        return t === E ? e : Ns(t, e, or)
                    }

                    function ar(t, e) {
                        t = fr(t);
                        for (var n = -1, r = e.length, i = {}; ++n < r;) {
                            var o = e[n];
                            o in t && (i[o] = t[o])
                        }
                        return i
                    }

                    function sr(t, e) {
                        var n = {};
                        return Ne(t, function(t, r, i) {
                            e(t, r, i) && (n[r] = t)
                        }), n
                    }

                    function ur(t, e) {
                        for (var n = t.length, r = ka(e.length, n), i = te(t); r--;) {
                            var o = e[r];
                            t[r] = Kn(o, n) ? i[o] : E
                        }
                        return t
                    }

                    function cr(t) {
                        for (var e = to(t), n = e.length, r = n && t.length, i = !!r && nr(r) && (As(t) || Ei(t)), o = -1, a = []; ++o < n;) {
                            var s = e[o];
                            (i && Kn(s, r) || ea.call(t, s)) && a.push(s)
                        }
                        return a
                    }

                    function lr(t) {
                        return null == t ? [] : Qn(t) ? Li(t) ? t : Go(t) : oo(t)
                    }

                    function fr(t) {
                        return Li(t) ? t : Go(t)
                    }

                    function pr(t) {
                        if (As(t)) return t;
                        var e = [];
                        return s(t).replace(jt, function(t, n, r, i) {
                            e.push(r ? i.replace(Nt, "$1") : n || t)
                        }), e
                    }

                    function hr(t) {
                        return t instanceof Q ? t.clone() : new m(t.__wrapped__, t.__chain__, te(t.__actions__))
                    }

                    function dr(t, e, n) {
                        e = (n ? Zn(t, e, n) : null == e) ? 1 : _a(ma(e) || 1, 1);
                        for (var r = 0, i = t ? t.length : 0, o = -1, a = Fo(va(i / e)); i > r;) a[++o] = Xe(t, r, r += e);
                        return a
                    }

                    function gr(t) {
                        for (var e = -1, n = t ? t.length : 0, r = -1, i = []; ++e < n;) {
                            var o = t[e];
                            o && (i[++r] = o)
                        }
                        return i
                    }

                    function vr(t, e, n) {
                        var r = t ? t.length : 0;
                        return r ? ((n ? Zn(t, e, n) : null == e) && (e = 1), Xe(t, 0 > e ? 0 : e)) : []
                    }

                    function yr(t, e, n) {
                        var r = t ? t.length : 0;
                        return r ? ((n ? Zn(t, e, n) : null == e) && (e = 1), e = r - (+e || 0), Xe(t, 0, 0 > e ? 0 : e)) : []
                    }

                    function mr(t, e, n) {
                        return t && t.length ? en(t, Fn(e, n, 3), !0, !0) : []
                    }

                    function br(t, e, n) {
                        return t && t.length ? en(t, Fn(e, n, 3), !0) : []
                    }

                    function xr(t, e, n, r) {
                        var i = t ? t.length : 0;
                        return i ? (n && "number" != typeof n && Zn(t, e, n) && (n = 0, r = i), je(t, e, n, r)) : []
                    }

                    function wr(t) {
                        return t ? t[0] : E
                    }

                    function _r(t, e, n) {
                        var r = t ? t.length : 0;
                        return n && Zn(t, e, n) && (e = !1), r ? Ae(t, e) : []
                    }

                    function kr(t) {
                        var e = t ? t.length : 0;
                        return e ? Ae(t, !0) : []
                    }

                    function Tr(t, e, n) {
                        var r = t ? t.length : 0;
                        if (!r) return -1;
                        if ("number" == typeof n) n = 0 > n ? _a(r + n, 0) : n;
                        else if (n) {
                            var i = rn(t, e);
                            return r > i && (e === e ? e === t[i] : t[i] !== t[i]) ? i : -1
                        }
                        return o(t, e, n || 0)
                    }

                    function Er(t) {
                        return yr(t, 1)
                    }

                    function jr(t) {
                        var e = t ? t.length : 0;
                        return e ? t[e - 1] : E
                    }

                    function Cr(t, e, n) {
                        var r = t ? t.length : 0;
                        if (!r) return -1;
                        var i = r;
                        if ("number" == typeof n) i = (0 > n ? _a(r + n, 0) : ka(n || 0, r - 1)) + 1;
                        else if (n) {
                            i = rn(t, e, !0) - 1;
                            var o = t[i];
                            return (e === e ? e === o : o !== o) ? i : -1
                        }
                        if (e !== e) return v(t, i, !0);
                        for (; i--;)
                            if (t[i] === e) return i;
                        return -1
                    }

                    function Sr() {
                        var t = arguments,
                            e = t[0];
                        if (!e || !e.length) return e;
                        for (var n = 0, r = Un(), i = t.length; ++n < i;)
                            for (var o = 0, a = t[n];
                                (o = r(e, a, o)) > -1;) ha.call(e, o, 1);
                        return e
                    }

                    function Ar(t, e, n) {
                        var r = [];
                        if (!t || !t.length) return r;
                        var i = -1,
                            o = [],
                            a = t.length;
                        for (e = Fn(e, n, 3); ++i < a;) {
                            var s = t[i];
                            e(s, i, t) && (r.push(s), o.push(i))
                        }
                        return ze(t, o), r
                    }

                    function Nr(t) {
                        return vr(t, 1)
                    }

                    function Rr(t, e, n) {
                        var r = t ? t.length : 0;
                        return r ? (n && "number" != typeof n && Zn(t, e, n) && (e = 0, n = r), Xe(t, e, n)) : []
                    }

                    function Ir(t, e, n) {
                        var r = t ? t.length : 0;
                        return r ? ((n ? Zn(t, e, n) : null == e) && (e = 1), Xe(t, 0, 0 > e ? 0 : e)) : []
                    }

                    function Or(t, e, n) {
                        var r = t ? t.length : 0;
                        return r ? ((n ? Zn(t, e, n) : null == e) && (e = 1), e = r - (+e || 0), Xe(t, 0 > e ? 0 : e)) : []
                    }

                    function Lr(t, e, n) {
                        return t && t.length ? en(t, Fn(e, n, 3), !1, !0) : []
                    }

                    function Dr(t, e, n) {
                        return t && t.length ? en(t, Fn(e, n, 3)) : []
                    }

                    function Pr(t, e, n, r) {
                        var i = t ? t.length : 0;
                        if (!i) return [];
                        null != e && "boolean" != typeof e && (r = n, n = Zn(t, e, r) ? E : e, e = !1);
                        var a = Fn();
                        return (null != n || a !== xe) && (n = a(n, r, 3)), e && Un() == o ? x(t, n) : Ze(t, n)
                    }

                    function $r(t) {
                        if (!t || !t.length) return [];
                        var e = -1,
                            n = 0;
                        t = se(t, function(t) {
                            return Qn(t) ? (n = _a(t.length, n), !0) : void 0
                        });
                        for (var r = Fo(n); ++e < n;) r[e] = ue(t, Ue(e));
                        return r
                    }

                    function qr(t, e, n) {
                        var r = t ? t.length : 0;
                        if (!r) return [];
                        var i = $r(t);
                        return null == e ? i : (e = an(e, n, 4), ue(i, function(t) {
                            return le(t, e, E, !0)
                        }))
                    }

                    function Hr() {
                        for (var t = -1, e = arguments.length; ++t < e;) {
                            var n = arguments[t];
                            if (Qn(n)) var r = r ? ce(ke(r, n), ke(n, r)) : n
                        }
                        return r ? Ze(r) : []
                    }

                    function Mr(t, e) {
                        var n = -1,
                            r = t ? t.length : 0,
                            i = {};
                        for (!r || e || As(t[0]) || (e = []); ++n < r;) {
                            var o = t[n];
                            e ? i[o] = e[n] : o && (i[o[0]] = o[1])
                        }
                        return i
                    }

                    function Fr(t) {
                        var n = e(t);
                        return n.__chain__ = !0, n
                    }

                    function Br(t, e, n) {
                        return e.call(n, t), t
                    }

                    function Ur(t, e, n) {
                        return e.call(n, t)
                    }

                    function Wr() {
                        return Fr(this)
                    }

                    function zr() {
                        return new m(this.value(), this.__chain__)
                    }

                    function Vr(t) {
                        for (var e, r = this; r instanceof n;) {
                            var i = hr(r);
                            e ? o.__wrapped__ = i : e = i;
                            var o = i;
                            r = r.__wrapped__
                        }
                        return o.__wrapped__ = t, e
                    }

                    function Gr() {
                        var t = this.__wrapped__,
                            e = function(t) {
                                return n && n.__dir__ < 0 ? t : t.reverse()
                            };
                        if (t instanceof Q) {
                            var n = t;
                            return this.__actions__.length && (n = new Q(this)), n = n.reverse(), n.__actions__.push({
                                func: Ur,
                                args: [e],
                                thisArg: E
                            }), new m(n, this.__chain__)
                        }
                        return this.thru(e)
                    }

                    function Xr() {
                        return this.value() + ""
                    }

                    function Jr() {
                        return nn(this.__wrapped__, this.__actions__)
                    }

                    function Yr(t, e, n) {
                        var r = As(t) ? oe : Te;
                        return n && Zn(t, e, n) && (e = E), ("function" != typeof e || n !== E) && (e = Fn(e, n, 3)), r(t, e)
                    }

                    function Qr(t, e, n) {
                        var r = As(t) ? se : Ce;
                        return e = Fn(e, n, 3), r(t, e)
                    }

                    function Kr(t, e) {
                        return is(t, He(e))
                    }

                    function Zr(t, e, n, r) {
                        var i = t ? Ba(t) : 0;
                        return nr(i) || (t = oo(t), i = t.length), n = "number" != typeof n || r && Zn(e, n, r) ? 0 : 0 > n ? _a(i + n, 0) : n || 0, "string" == typeof t || !As(t) && Bi(t) ? i >= n && t.indexOf(e, n) > -1 : !!i && Un(t, e, n) > -1
                    }

                    function ti(t, e, n) {
                        var r = As(t) ? ue : qe;
                        return e = Fn(e, n, 3), r(t, e)
                    }

                    function ei(t, e) {
                        return ti(t, Lo(e))
                    }

                    function ni(t, e, n) {
                        var r = As(t) ? se : Ce;
                        return e = Fn(e, n, 3), r(t, function(t, n, r) {
                            return !e(t, n, r)
                        })
                    }

                    function ri(t, e, n) {
                        if (n ? Zn(t, e, n) : null == e) {
                            t = lr(t);
                            var r = t.length;
                            return r > 0 ? t[Ve(0, r - 1)] : E
                        }
                        var i = -1,
                            o = Gi(t),
                            r = o.length,
                            a = r - 1;
                        for (e = ka(0 > e ? 0 : +e || 0, r); ++i < e;) {
                            var s = Ve(i, a),
                                u = o[s];
                            o[s] = o[i], o[i] = u
                        }
                        return o.length = e, o
                    }

                    function ii(t) {
                        return ri(t, Sa)
                    }

                    function oi(t) {
                        var e = t ? Ba(t) : 0;
                        return nr(e) ? e : Ms(t).length
                    }

                    function ai(t, e, n) {
                        var r = As(t) ? pe : Je;
                        return n && Zn(t, e, n) && (e = E), ("function" != typeof e || n !== E) && (e = Fn(e, n, 3)), r(t, e)
                    }

                    function si(t, e, n) {
                        if (null == t) return [];
                        n && Zn(t, e, n) && (e = E);
                        var r = -1;
                        e = Fn(e, n, 3);
                        var i = qe(t, function(t, n, i) {
                            return {
                                criteria: e(t, n, i),
                                index: ++r,
                                value: t
                            }
                        });
                        return Ye(i, l)
                    }

                    function ui(t, e, n, r) {
                        return null == t ? [] : (r && Zn(e, n, r) && (n = E), As(e) || (e = null == e ? [] : [e]), As(n) || (n = null == n ? [] : [n]), Qe(t, e, n))
                    }

                    function ci(t, e) {
                        return Qr(t, He(e))
                    }

                    function li(t, e) {
                        if ("function" != typeof e) {
                            if ("function" != typeof t) throw new Yo(U);
                            var n = t;
                            t = e, e = n
                        }
                        return t = xa(t = +t) ? t : 0,
                            function() {
                                return --t < 1 ? e.apply(this, arguments) : void 0
                            }
                    }

                    function fi(t, e, n) {
                        return n && Zn(t, e, n) && (e = E), e = t && null == e ? t.length : _a(+e || 0, 0), $n(t, L, E, E, E, E, e)
                    }

                    function pi(t, e) {
                        var n;
                        if ("function" != typeof e) {
                            if ("function" != typeof t) throw new Yo(U);
                            var r = t;
                            t = e, e = r
                        }
                        return function() {
                            return --t > 0 && (n = e.apply(this, arguments)), 1 >= t && (e = E), n
                        }
                    }

                    function hi(t, e, n) {
                        function r() {
                            h && sa(h), c && sa(c), g = 0, c = h = d = E
                        }

                        function i(e, n) {
                            n && sa(n), c = h = d = E, e && (g = gs(), l = t.apply(p, u), h || c || (u = p = E))
                        }

                        function o() {
                            var t = e - (gs() - f);
                            0 >= t || t > e ? i(d, c) : h = pa(o, t)
                        }

                        function a() {
                            i(y, h)
                        }

                        function s() {
                            if (u = arguments, f = gs(), p = this, d = y && (h || !m), v === !1) var n = m && !h;
                            else {
                                c || m || (g = f);
                                var r = v - (f - g),
                                    i = 0 >= r || r > v;
                                i ? (c && (c = sa(c)), g = f, l = t.apply(p, u)) : c || (c = pa(a, r))
                            }
                            return i && h ? h = sa(h) : h || e === v || (h = pa(o, e)), n && (i = !0, l = t.apply(p, u)), !i || h || c || (u = p = E), l
                        }
                        var u, c, l, f, p, h, d, g = 0,
                            v = !1,
                            y = !0;
                        if ("function" != typeof t) throw new Yo(U);
                        if (e = 0 > e ? 0 : +e || 0, n === !0) {
                            var m = !0;
                            y = !1
                        } else Li(n) && (m = !!n.leading, v = "maxWait" in n && _a(+n.maxWait || 0, e), y = "trailing" in n ? !!n.trailing : y);
                        return s.cancel = r, s
                    }

                    function di(t, e) {
                        if ("function" != typeof t || e && "function" != typeof e) throw new Yo(U);
                        var n = function() {
                            var r = arguments,
                                i = e ? e.apply(this, r) : r[0],
                                o = n.cache;
                            if (o.has(i)) return o.get(i);
                            var a = t.apply(this, r);
                            return n.cache = o.set(i, a), a
                        };
                        return n.cache = new di.Cache, n
                    }

                    function gi(t) {
                        if ("function" != typeof t) throw new Yo(U);
                        return function() {
                            return !t.apply(this, arguments)
                        }
                    }

                    function vi(t) {
                        return pi(2, t)
                    }

                    function yi(t, e) {
                        if ("function" != typeof t) throw new Yo(U);
                        return e = _a(e === E ? t.length - 1 : +e || 0, 0),
                            function() {
                                for (var n = arguments, r = -1, i = _a(n.length - e, 0), o = Fo(i); ++r < i;) o[r] = n[e + r];
                                switch (e) {
                                    case 0:
                                        return t.call(this, o);
                                    case 1:
                                        return t.call(this, n[0], o);
                                    case 2:
                                        return t.call(this, n[0], n[1], o)
                                }
                                var a = Fo(e + 1);
                                for (r = -1; ++r < e;) a[r] = n[r];
                                return a[e] = o, t.apply(this, a)
                            }
                    }

                    function mi(t) {
                        if ("function" != typeof t) throw new Yo(U);
                        return function(e) {
                            return t.apply(this, e)
                        }
                    }

                    function bi(t, e, n) {
                        var r = !0,
                            i = !0;
                        if ("function" != typeof t) throw new Yo(U);
                        return n === !1 ? r = !1 : Li(n) && (r = "leading" in n ? !!n.leading : r, i = "trailing" in n ? !!n.trailing : i), hi(t, e, {
                            leading: r,
                            maxWait: +e,
                            trailing: i
                        })
                    }

                    function xi(t, e) {
                        return e = null == e ? So : e, $n(e, I, E, [t], [])
                    }

                    function wi(t, e, n, r) {
                        return e && "boolean" != typeof e && Zn(t, e, n) ? e = !1 : "function" == typeof e && (r = n, n = e, e = !1), "function" == typeof n ? we(t, e, an(n, r, 1)) : we(t, e)
                    }

                    function _i(t, e, n) {
                        return "function" == typeof e ? we(t, !0, an(e, n, 1)) : we(t, !0)
                    }

                    function ki(t, e) {
                        return t > e
                    }

                    function Ti(t, e) {
                        return t >= e
                    }

                    function Ei(t) {
                        return y(t) && Qn(t) && ea.call(t, "callee") && !la.call(t, "callee")
                    }

                    function ji(t) {
                        return t === !0 || t === !1 || y(t) && ra.call(t) == G;
                    }

                    function Ci(t) {
                        return y(t) && ra.call(t) == X
                    }

                    function Si(t) {
                        return !!t && 1 === t.nodeType && y(t) && !Mi(t)
                    }

                    function Ai(t) {
                        return null == t ? !0 : Qn(t) && (As(t) || Bi(t) || Ei(t) || y(t) && Oi(t.splice)) ? !t.length : !Ms(t).length
                    }

                    function Ni(t, e, n, r) {
                        n = "function" == typeof n ? an(n, r, 3) : E;
                        var i = n ? n(t, e) : E;
                        return i === E ? De(t, e, n) : !!i
                    }

                    function Ri(t) {
                        return y(t) && "string" == typeof t.message && ra.call(t) == J
                    }

                    function Ii(t) {
                        return "number" == typeof t && xa(t)
                    }

                    function Oi(t) {
                        return Li(t) && ra.call(t) == Y
                    }

                    function Li(t) {
                        var e = typeof t;
                        return !!t && ("object" == e || "function" == e)
                    }

                    function Di(t, e, n, r) {
                        return n = "function" == typeof n ? an(n, r, 3) : E, $e(t, Wn(e), n)
                    }

                    function Pi(t) {
                        return Hi(t) && t != +t
                    }

                    function $i(t) {
                        return null == t ? !1 : Oi(t) ? oa.test(ta.call(t)) : y(t) && Lt.test(t)
                    }

                    function qi(t) {
                        return null === t
                    }

                    function Hi(t) {
                        return "number" == typeof t || y(t) && ra.call(t) == K
                    }

                    function Mi(t) {
                        var e;
                        if (!y(t) || ra.call(t) != Z || Ei(t) || !ea.call(t, "constructor") && (e = t.constructor, "function" == typeof e && !(e instanceof e))) return !1;
                        var n;
                        return Ne(t, function(t, e) {
                            n = e
                        }), n === E || ea.call(t, n)
                    }

                    function Fi(t) {
                        return Li(t) && ra.call(t) == tt
                    }

                    function Bi(t) {
                        return "string" == typeof t || y(t) && ra.call(t) == nt
                    }

                    function Ui(t) {
                        return y(t) && nr(t.length) && !!Bt[ra.call(t)]
                    }

                    function Wi(t) {
                        return t === E
                    }

                    function zi(t, e) {
                        return e > t
                    }

                    function Vi(t, e) {
                        return e >= t
                    }

                    function Gi(t) {
                        var e = t ? Ba(t) : 0;
                        return nr(e) ? e ? te(t) : [] : oo(t)
                    }

                    function Xi(t) {
                        return be(t, to(t))
                    }

                    function Ji(t, e, n) {
                        var r = Da(t);
                        return n && Zn(t, e, n) && (e = E), e ? ye(r, e) : r
                    }

                    function Yi(t) {
                        return Oe(t, to(t))
                    }

                    function Qi(t, e, n) {
                        var r = null == t ? E : Le(t, pr(e), e + "");
                        return r === E ? n : r
                    }

                    function Ki(t, e) {
                        if (null == t) return !1;
                        var n = ea.call(t, e);
                        if (!n && !tr(e)) {
                            if (e = pr(e), t = 1 == e.length ? t : Le(t, Xe(e, 0, -1)), null == t) return !1;
                            e = jr(e), n = ea.call(t, e)
                        }
                        return n || nr(t.length) && Kn(e, t.length) && (As(t) || Ei(t))
                    }

                    function Zi(t, e, n) {
                        n && Zn(t, e, n) && (e = E);
                        for (var r = -1, i = Ms(t), o = i.length, a = {}; ++r < o;) {
                            var s = i[r],
                                u = t[s];
                            e ? ea.call(a, u) ? a[u].push(s) : a[u] = [s] : a[u] = s
                        }
                        return a
                    }

                    function to(t) {
                        if (null == t) return [];
                        Li(t) || (t = Go(t));
                        var e = t.length;
                        e = e && nr(e) && (As(t) || Ei(t)) && e || 0;
                        for (var n = t.constructor, r = -1, i = "function" == typeof n && n.prototype === t, o = Fo(e), a = e > 0; ++r < e;) o[r] = r + "";
                        for (var s in t) a && Kn(s, e) || "constructor" == s && (i || !ea.call(t, s)) || o.push(s);
                        return o
                    }

                    function eo(t) {
                        t = fr(t);
                        for (var e = -1, n = Ms(t), r = n.length, i = Fo(r); ++e < r;) {
                            var o = n[e];
                            i[e] = [o, t[o]]
                        }
                        return i
                    }

                    function no(t, e, n) {
                        var r = null == t ? E : t[e];
                        return r === E && (null == t || tr(e, t) || (e = pr(e), t = 1 == e.length ? t : Le(t, Xe(e, 0, -1)), r = null == t ? E : t[jr(e)]), r = r === E ? n : r), Oi(r) ? r.call(t) : r
                    }

                    function ro(t, e, n) {
                        if (null == t) return t;
                        var r = e + "";
                        e = null != t[r] || tr(e, t) ? [r] : pr(e);
                        for (var i = -1, o = e.length, a = o - 1, s = t; null != s && ++i < o;) {
                            var u = e[i];
                            Li(s) && (i == a ? s[u] = n : null == s[u] && (s[u] = Kn(e[i + 1]) ? [] : {})), s = s[u]
                        }
                        return t
                    }

                    function io(t, e, n, r) {
                        var i = As(t) || Ui(t);
                        if (e = Fn(e, r, 4), null == n)
                            if (i || Li(t)) {
                                var o = t.constructor;
                                n = i ? As(t) ? new o : [] : Da(Oi(o) ? o.prototype : E)
                            } else n = {};
                        return (i ? ee : Re)(t, function(t, r, i) {
                            return e(n, t, r, i)
                        }), n
                    }

                    function oo(t) {
                        return tn(t, Ms(t))
                    }

                    function ao(t) {
                        return tn(t, to(t))
                    }

                    function so(t, e, n) {
                        return e = +e || 0, n === E ? (n = e, e = 0) : n = +n || 0, t >= ka(e, n) && t < _a(e, n)
                    }

                    function uo(t, e, n) {
                        n && Zn(t, e, n) && (e = n = E);
                        var r = null == t,
                            i = null == e;
                        if (null == n && (i && "boolean" == typeof t ? (n = t, t = 1) : "boolean" == typeof e && (n = e, i = !0)), r && i && (e = 1, i = !1), t = +t || 0, i ? (e = t, t = 0) : e = +e || 0, n || t % 1 || e % 1) {
                            var o = ja();
                            return ka(t + o * (e - t + ua("1e-" + ((o + "").length - 1))), e)
                        }
                        return Ve(t, e)
                    }

                    function co(t) {
                        return t = s(t), t && t.charAt(0).toUpperCase() + t.slice(1)
                    }

                    function lo(t) {
                        return t = s(t), t && t.replace(Pt, p).replace(At, "")
                    }

                    function fo(t, e, n) {
                        t = s(t), e += "";
                        var r = t.length;
                        return n = n === E ? r : ka(0 > n ? 0 : +n || 0, r), n -= e.length, n >= 0 && t.indexOf(e, n) == n
                    }

                    function po(t) {
                        return t = s(t), t && xt.test(t) ? t.replace(mt, h) : t
                    }

                    function ho(t) {
                        return t = s(t), t && St.test(t) ? t.replace(Ct, d) : t || "(?:)"
                    }

                    function go(t, e, n) {
                        t = s(t), e = +e;
                        var r = t.length;
                        if (r >= e || !xa(e)) return t;
                        var i = (e - r) / 2,
                            o = ma(i),
                            a = va(i);
                        return n = On("", a, n), n.slice(0, o) + t + n
                    }

                    function vo(t, e, n) {
                        return (n ? Zn(t, e, n) : null == e) ? e = 0 : e && (e = +e), t = xo(t), Ea(t, e || (Ot.test(t) ? 16 : 10))
                    }

                    function yo(t, e) {
                        var n = "";
                        if (t = s(t), e = +e, 1 > e || !t || !xa(e)) return n;
                        do e % 2 && (n += t), e = ma(e / 2), t += t; while (e);
                        return n
                    }

                    function mo(t, e, n) {
                        return t = s(t), n = null == n ? 0 : ka(0 > n ? 0 : +n || 0, t.length), t.lastIndexOf(e, n) == n
                    }

                    function bo(t, n, r) {
                        var i = e.templateSettings;
                        r && Zn(t, n, r) && (n = r = E), t = s(t), n = ve(ye({}, r || n), i, ge);
                        var o, a, u = ve(ye({}, n.imports), i.imports, ge),
                            c = Ms(u),
                            l = tn(u, c),
                            f = 0,
                            p = n.interpolate || $t,
                            h = "__p += '",
                            d = Xo((n.escape || $t).source + "|" + p.source + "|" + (p === kt ? Rt : $t).source + "|" + (n.evaluate || $t).source + "|$", "g"),
                            v = "//# sourceURL=" + ("sourceURL" in n ? n.sourceURL : "lodash.templateSources[" + ++Ft + "]") + "\n";
                        t.replace(d, function(e, n, r, i, s, u) {
                            return r || (r = i), h += t.slice(f, u).replace(qt, g), n && (o = !0, h += "' +\n__e(" + n + ") +\n'"), s && (a = !0, h += "';\n" + s + ";\n__p += '"), r && (h += "' +\n((__t = (" + r + ")) == null ? '' : __t) +\n'"), f = u + e.length, e
                        }), h += "';\n";
                        var y = n.variable;
                        y || (h = "with (obj) {\n" + h + "\n}\n"), h = (a ? h.replace(dt, "") : h).replace(gt, "$1").replace(vt, "$1;"), h = "function(" + (y || "obj") + ") {\n" + (y ? "" : "obj || (obj = {});\n") + "var __t, __p = ''" + (o ? ", __e = _.escape" : "") + (a ? ", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n" : ";\n") + h + "return __p\n}";
                        var m = Qs(function() {
                            return Wo(c, v + "return " + h).apply(E, l)
                        });
                        if (m.source = h, Ri(m)) throw m;
                        return m
                    }

                    function xo(t, e, n) {
                        var r = t;
                        return (t = s(t)) ? (n ? Zn(r, e, n) : null == e) ? t.slice(w(t), _(t) + 1) : (e += "", t.slice(u(t, e), c(t, e) + 1)) : t
                    }

                    function wo(t, e, n) {
                        var r = t;
                        return t = s(t), t ? (n ? Zn(r, e, n) : null == e) ? t.slice(w(t)) : t.slice(u(t, e + "")) : t
                    }

                    function _o(t, e, n) {
                        var r = t;
                        return t = s(t), t ? (n ? Zn(r, e, n) : null == e) ? t.slice(0, _(t) + 1) : t.slice(0, c(t, e + "") + 1) : t
                    }

                    function ko(t, e, n) {
                        n && Zn(t, e, n) && (e = E);
                        var r = P,
                            i = $;
                        if (null != e)
                            if (Li(e)) {
                                var o = "separator" in e ? e.separator : o;
                                r = "length" in e ? +e.length || 0 : r, i = "omission" in e ? s(e.omission) : i
                            } else r = +e || 0;
                        if (t = s(t), r >= t.length) return t;
                        var a = r - i.length;
                        if (1 > a) return i;
                        var u = t.slice(0, a);
                        if (null == o) return u + i;
                        if (Fi(o)) {
                            if (t.slice(a).search(o)) {
                                var c, l, f = t.slice(0, a);
                                for (o.global || (o = Xo(o.source, (It.exec(o) || "") + "g")), o.lastIndex = 0; c = o.exec(f);) l = c.index;
                                u = u.slice(0, null == l ? a : l)
                            }
                        } else if (t.indexOf(o, a) != a) {
                            var p = u.lastIndexOf(o);
                            p > -1 && (u = u.slice(0, p))
                        }
                        return u + i
                    }

                    function To(t) {
                        return t = s(t), t && bt.test(t) ? t.replace(yt, k) : t
                    }

                    function Eo(t, e, n) {
                        return n && Zn(t, e, n) && (e = E), t = s(t), t.match(e || Ht) || []
                    }

                    function jo(t, e, n) {
                        return n && Zn(t, e, n) && (e = E), y(t) ? Ao(t) : xe(t, e)
                    }

                    function Co(t) {
                        return function() {
                            return t
                        }
                    }

                    function So(t) {
                        return t
                    }

                    function Ao(t) {
                        return He(we(t, !0))
                    }

                    function No(t, e) {
                        return Me(t, we(e, !0))
                    }

                    function Ro(t, e, n) {
                        if (null == n) {
                            var r = Li(e),
                                i = r ? Ms(e) : E,
                                o = i && i.length ? Oe(e, i) : E;
                            (o ? o.length : r) || (o = !1, n = e, e = t, t = this)
                        }
                        o || (o = Oe(e, Ms(e)));
                        var a = !0,
                            s = -1,
                            u = Oi(t),
                            c = o.length;
                        n === !1 ? a = !1 : Li(n) && "chain" in n && (a = n.chain);
                        for (; ++s < c;) {
                            var l = o[s],
                                f = e[l];
                            t[l] = f, u && (t.prototype[l] = function(e) {
                                return function() {
                                    var n = this.__chain__;
                                    if (a || n) {
                                        var r = t(this.__wrapped__),
                                            i = r.__actions__ = te(this.__actions__);
                                        return i.push({
                                            func: e,
                                            args: arguments,
                                            thisArg: t
                                        }), r.__chain__ = n, r
                                    }
                                    return e.apply(t, ce([this.value()], arguments))
                                }
                            }(f))
                        }
                        return t
                    }

                    function Io() {
                        return ne._ = ia, this
                    }

                    function Oo() {}

                    function Lo(t) {
                        return tr(t) ? Ue(t) : We(t)
                    }

                    function Do(t) {
                        return function(e) {
                            return Le(t, pr(e), e + "")
                        }
                    }

                    function Po(t, e, n) {
                        n && Zn(t, e, n) && (e = n = E), t = +t || 0, n = null == n ? 1 : +n || 0, null == e ? (e = t, t = 0) : e = +e || 0;
                        for (var r = -1, i = _a(va((e - t) / (n || 1)), 0), o = Fo(i); ++r < i;) o[r] = t, t += n;
                        return o
                    }

                    function $o(t, e, n) {
                        if (t = ma(t), 1 > t || !xa(t)) return [];
                        var r = -1,
                            i = Fo(ka(t, Aa));
                        for (e = an(e, n, 1); ++r < t;) Aa > r ? i[r] = e(r) : e(r);
                        return i
                    }

                    function qo(t) {
                        var e = ++na;
                        return s(t) + e
                    }

                    function Ho(t, e) {
                        return (+t || 0) + (+e || 0)
                    }

                    function Mo(t, e, n) {
                        return n && Zn(t, e, n) && (e = E), e = Fn(e, n, 3), 1 == e.length ? he(As(t) ? t : lr(t), e) : Ke(t, e)
                    }
                    t = t ? re.defaults(ne.Object(), t, re.pick(ne, Mt)) : ne;
                    var Fo = t.Array,
                        Bo = t.Date,
                        Uo = t.Error,
                        Wo = t.Function,
                        zo = t.Math,
                        Vo = t.Number,
                        Go = t.Object,
                        Xo = t.RegExp,
                        Jo = t.String,
                        Yo = t.TypeError,
                        Qo = Fo.prototype,
                        Ko = Go.prototype,
                        Zo = Jo.prototype,
                        ta = Wo.prototype.toString,
                        ea = Ko.hasOwnProperty,
                        na = 0,
                        ra = Ko.toString,
                        ia = ne._,
                        oa = Xo("^" + ta.call(ea).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
                        aa = t.ArrayBuffer,
                        sa = t.clearTimeout,
                        ua = t.parseFloat,
                        ca = zo.pow,
                        la = Ko.propertyIsEnumerable,
                        fa = zn(t, "Set"),
                        pa = t.setTimeout,
                        ha = Qo.splice,
                        da = t.Uint8Array,
                        ga = zn(t, "WeakMap"),
                        va = zo.ceil,
                        ya = zn(Go, "create"),
                        ma = zo.floor,
                        ba = zn(Fo, "isArray"),
                        xa = t.isFinite,
                        wa = zn(Go, "keys"),
                        _a = zo.max,
                        ka = zo.min,
                        Ta = zn(Bo, "now"),
                        Ea = t.parseInt,
                        ja = zo.random,
                        Ca = Vo.NEGATIVE_INFINITY,
                        Sa = Vo.POSITIVE_INFINITY,
                        Aa = 4294967295,
                        Na = Aa - 1,
                        Ra = Aa >>> 1,
                        Ia = 9007199254740991,
                        Oa = ga && new ga,
                        La = {};
                    e.support = {};
                    e.templateSettings = {
                        escape: wt,
                        evaluate: _t,
                        interpolate: kt,
                        variable: "",
                        imports: {
                            _: e
                        }
                    };
                    var Da = function() {
                            function t() {}
                            return function(e) {
                                if (Li(e)) {
                                    t.prototype = e;
                                    var n = new t;
                                    t.prototype = E
                                }
                                return n || {}
                            }
                        }(),
                        Pa = pn(Re),
                        $a = pn(Ie, !0),
                        qa = hn(),
                        Ha = hn(!0),
                        Ma = Oa ? function(t, e) {
                            return Oa.set(t, e), t
                        } : So,
                        Fa = Oa ? function(t) {
                            return Oa.get(t)
                        } : Oo,
                        Ba = Ue("length"),
                        Ua = function() {
                            var t = 0,
                                e = 0;
                            return function(n, r) {
                                var i = gs(),
                                    o = H - (i - e);
                                if (e = i, o > 0) {
                                    if (++t >= q) return n
                                } else t = 0;
                                return Ma(n, r)
                            }
                        }(),
                        Wa = yi(function(t, e) {
                            return y(t) && Qn(t) ? ke(t, Ae(e, !1, !0)) : []
                        }),
                        za = _n(),
                        Va = _n(!0),
                        Ga = yi(function(t) {
                            for (var e = t.length, n = e, r = Fo(f), i = Un(), a = i == o, s = []; n--;) {
                                var u = t[n] = Qn(u = t[n]) ? u : [];
                                r[n] = a && u.length >= 120 ? gn(n && u) : null
                            }
                            var c = t[0],
                                l = -1,
                                f = c ? c.length : 0,
                                p = r[0];
                            t: for (; ++l < f;)
                                if (u = c[l], (p ? Qt(p, u) : i(s, u, 0)) < 0) {
                                    for (var n = e; --n;) {
                                        var h = r[n];
                                        if ((h ? Qt(h, u) : i(t[n], u, 0)) < 0) continue t
                                    }
                                    p && p.push(u), s.push(u)
                                }
                            return s
                        }),
                        Xa = yi(function(t, e) {
                            e = Ae(e);
                            var n = me(t, e);
                            return ze(t, e.sort(r)), n
                        }),
                        Ja = Pn(),
                        Ya = Pn(!0),
                        Qa = yi(function(t) {
                            return Ze(Ae(t, !1, !0))
                        }),
                        Ka = yi(function(t, e) {
                            return Qn(t) ? ke(t, e) : []
                        }),
                        Za = yi($r),
                        ts = yi(function(t) {
                            var e = t.length,
                                n = e > 2 ? t[e - 2] : E,
                                r = e > 1 ? t[e - 1] : E;
                            return e > 2 && "function" == typeof n ? e -= 2 : (n = e > 1 && "function" == typeof r ? (--e, r) : E, r = E), t.length = e, qr(t, n, r)
                        }),
                        es = yi(function(t) {
                            return t = Ae(t), this.thru(function(e) {
                                return Zt(As(e) ? e : [fr(e)], t)
                            })
                        }),
                        ns = yi(function(t, e) {
                            return me(t, Ae(e))
                        }),
                        rs = ln(function(t, e, n) {
                            ea.call(t, n) ? ++t[n] : t[n] = 1
                        }),
                        is = wn(Pa),
                        os = wn($a, !0),
                        as = En(ee, Pa),
                        ss = En(ie, $a),
                        us = ln(function(t, e, n) {
                            ea.call(t, n) ? t[n].push(e) : t[n] = [e]
                        }),
                        cs = ln(function(t, e, n) {
                            t[n] = e
                        }),
                        ls = yi(function(t, e, n) {
                            var r = -1,
                                i = "function" == typeof e,
                                o = tr(e),
                                a = Qn(t) ? Fo(t.length) : [];
                            return Pa(t, function(t) {
                                var s = i ? e : o && null != t ? t[e] : E;
                                a[++r] = s ? s.apply(t, n) : Yn(t, e, n)
                            }), a
                        }),
                        fs = ln(function(t, e, n) {
                            t[n ? 0 : 1].push(e)
                        }, function() {
                            return [
                                [],
                                []
                            ]
                        }),
                        ps = Rn(le, Pa),
                        hs = Rn(fe, $a),
                        ds = yi(function(t, e) {
                            if (null == t) return [];
                            var n = e[2];
                            return n && Zn(e[0], e[1], n) && (e.length = 1), Qe(t, Ae(e), [])
                        }),
                        gs = Ta || function() {
                            return (new Bo).getTime()
                        },
                        vs = yi(function(t, e, n) {
                            var r = C;
                            if (n.length) {
                                var i = b(n, vs.placeholder);
                                r |= I
                            }
                            return $n(t, r, e, n, i)
                        }),
                        ys = yi(function(t, e) {
                            e = e.length ? Ae(e) : Yi(t);
                            for (var n = -1, r = e.length; ++n < r;) {
                                var i = e[n];
                                t[i] = $n(t[i], C, t)
                            }
                            return t
                        }),
                        ms = yi(function(t, e, n) {
                            var r = C | S;
                            if (n.length) {
                                var i = b(n, ms.placeholder);
                                r |= I
                            }
                            return $n(e, r, t, n, i)
                        }),
                        bs = mn(N),
                        xs = mn(R),
                        ws = yi(function(t, e) {
                            return _e(t, 1, e)
                        }),
                        _s = yi(function(t, e, n) {
                            return _e(t, e, n)
                        }),
                        ks = Tn(),
                        Ts = Tn(!0),
                        Es = yi(function(t, e) {
                            if (e = Ae(e), "function" != typeof t || !oe(e, a)) throw new Yo(U);
                            var n = e.length;
                            return yi(function(r) {
                                for (var i = ka(r.length, n); i--;) r[i] = e[i](r[i]);
                                return t.apply(this, r)
                            })
                        }),
                        js = Nn(I),
                        Cs = Nn(O),
                        Ss = yi(function(t, e) {
                            return $n(t, D, E, E, E, Ae(e))
                        }),
                        As = ba || function(t) {
                            return y(t) && nr(t.length) && ra.call(t) == V
                        },
                        Ns = fn(Fe),
                        Rs = fn(function(t, e, n) {
                            return n ? ve(t, e, n) : ye(t, e)
                        }),
                        Is = bn(Rs, de),
                        Os = bn(Ns, or),
                        Ls = kn(Re),
                        Ds = kn(Ie),
                        Ps = jn(qa),
                        $s = jn(Ha),
                        qs = Cn(Re),
                        Hs = Cn(Ie),
                        Ms = wa ? function(t) {
                            var e = null == t ? E : t.constructor;
                            return "function" == typeof e && e.prototype === t || "function" != typeof t && Qn(t) ? cr(t) : Li(t) ? wa(t) : []
                        } : cr,
                        Fs = Sn(!0),
                        Bs = Sn(),
                        Us = yi(function(t, e) {
                            if (null == t) return {};
                            if ("function" != typeof e[0]) {
                                var e = ue(Ae(e), Jo);
                                return ar(t, ke(to(t), e))
                            }
                            var n = an(e[0], e[1], 3);
                            return sr(t, function(t, e, r) {
                                return !n(t, e, r)
                            })
                        }),
                        Ws = yi(function(t, e) {
                            return null == t ? {} : "function" == typeof e[0] ? sr(t, an(e[0], e[1], 3)) : ar(t, Ae(e))
                        }),
                        zs = vn(function(t, e, n) {
                            return e = e.toLowerCase(), t + (n ? e.charAt(0).toUpperCase() + e.slice(1) : e)
                        }),
                        Vs = vn(function(t, e, n) {
                            return t + (n ? "-" : "") + e.toLowerCase()
                        }),
                        Gs = An(),
                        Xs = An(!0),
                        Js = vn(function(t, e, n) {
                            return t + (n ? "_" : "") + e.toLowerCase()
                        }),
                        Ys = vn(function(t, e, n) {
                            return t + (n ? " " : "") + (e.charAt(0).toUpperCase() + e.slice(1))
                        }),
                        Qs = yi(function(t, e) {
                            try {
                                return t.apply(E, e)
                            } catch (n) {
                                return Ri(n) ? n : new Uo(n)
                            }
                        }),
                        Ks = yi(function(t, e) {
                            return function(n) {
                                return Yn(n, t, e)
                            }
                        }),
                        Zs = yi(function(t, e) {
                            return function(n) {
                                return Yn(t, n, e)
                            }
                        }),
                        tu = Dn("ceil"),
                        eu = Dn("floor"),
                        nu = xn(ki, Ca),
                        ru = xn(zi, Sa),
                        iu = Dn("round");
                    return e.prototype = n.prototype, m.prototype = Da(n.prototype), m.prototype.constructor = m, Q.prototype = Da(n.prototype), Q.prototype.constructor = Q, zt.prototype["delete"] = Vt, zt.prototype.get = Gt, zt.prototype.has = Xt, zt.prototype.set = Jt, Yt.prototype.push = Kt, di.Cache = zt, e.after = li, e.ary = fi, e.assign = Rs, e.at = ns, e.before = pi, e.bind = vs, e.bindAll = ys, e.bindKey = ms, e.callback = jo, e.chain = Fr, e.chunk = dr, e.compact = gr, e.constant = Co, e.countBy = rs, e.create = Ji, e.curry = bs, e.curryRight = xs, e.debounce = hi, e.defaults = Is, e.defaultsDeep = Os, e.defer = ws, e.delay = _s, e.difference = Wa, e.drop = vr, e.dropRight = yr, e.dropRightWhile = mr, e.dropWhile = br, e.fill = xr, e.filter = Qr, e.flatten = _r, e.flattenDeep = kr, e.flow = ks, e.flowRight = Ts, e.forEach = as, e.forEachRight = ss, e.forIn = Ps, e.forInRight = $s, e.forOwn = qs, e.forOwnRight = Hs, e.functions = Yi, e.groupBy = us, e.indexBy = cs, e.initial = Er, e.intersection = Ga, e.invert = Zi, e.invoke = ls, e.keys = Ms, e.keysIn = to, e.map = ti, e.mapKeys = Fs, e.mapValues = Bs, e.matches = Ao, e.matchesProperty = No, e.memoize = di, e.merge = Ns, e.method = Ks, e.methodOf = Zs, e.mixin = Ro, e.modArgs = Es, e.negate = gi, e.omit = Us, e.once = vi, e.pairs = eo, e.partial = js, e.partialRight = Cs, e.partition = fs, e.pick = Ws, e.pluck = ei, e.property = Lo, e.propertyOf = Do, e.pull = Sr, e.pullAt = Xa, e.range = Po, e.rearg = Ss, e.reject = ni, e.remove = Ar, e.rest = Nr, e.restParam = yi, e.set = ro, e.shuffle = ii, e.slice = Rr, e.sortBy = si, e.sortByAll = ds, e.sortByOrder = ui, e.spread = mi, e.take = Ir, e.takeRight = Or, e.takeRightWhile = Lr, e.takeWhile = Dr, e.tap = Br, e.throttle = bi, e.thru = Ur, e.times = $o, e.toArray = Gi, e.toPlainObject = Xi, e.transform = io, e.union = Qa, e.uniq = Pr, e.unzip = $r, e.unzipWith = qr, e.values = oo, e.valuesIn = ao, e.where = ci, e.without = Ka, e.wrap = xi, e.xor = Hr, e.zip = Za, e.zipObject = Mr, e.zipWith = ts, e.backflow = Ts, e.collect = ti, e.compose = Ts, e.each = as, e.eachRight = ss, e.extend = Rs, e.iteratee = jo, e.methods = Yi, e.object = Mr, e.select = Qr, e.tail = Nr, e.unique = Pr, Ro(e, e), e.add = Ho, e.attempt = Qs, e.camelCase = zs, e.capitalize = co, e.ceil = tu, e.clone = wi, e.cloneDeep = _i, e.deburr = lo, e.endsWith = fo, e.escape = po, e.escapeRegExp = ho, e.every = Yr, e.find = is, e.findIndex = za, e.findKey = Ls, e.findLast = os, e.findLastIndex = Va, e.findLastKey = Ds, e.findWhere = Kr, e.first = wr, e.floor = eu, e.get = Qi, e.gt = ki, e.gte = Ti, e.has = Ki, e.identity = So, e.includes = Zr, e.indexOf = Tr, e.inRange = so, e.isArguments = Ei, e.isArray = As, e.isBoolean = ji, e.isDate = Ci, e.isElement = Si, e.isEmpty = Ai, e.isEqual = Ni, e.isError = Ri, e.isFinite = Ii, e.isFunction = Oi, e.isMatch = Di, e.isNaN = Pi, e.isNative = $i, e.isNull = qi, e.isNumber = Hi, e.isObject = Li, e.isPlainObject = Mi, e.isRegExp = Fi, e.isString = Bi, e.isTypedArray = Ui, e.isUndefined = Wi, e.kebabCase = Vs, e.last = jr, e.lastIndexOf = Cr, e.lt = zi, e.lte = Vi, e.max = nu, e.min = ru, e.noConflict = Io, e.noop = Oo, e.now = gs, e.pad = go, e.padLeft = Gs, e.padRight = Xs, e.parseInt = vo, e.random = uo, e.reduce = ps, e.reduceRight = hs, e.repeat = yo, e.result = no, e.round = iu, e.runInContext = T, e.size = oi, e.snakeCase = Js, e.some = ai, e.sortedIndex = Ja, e.sortedLastIndex = Ya, e.startCase = Ys, e.startsWith = mo, e.sum = Mo, e.template = bo, e.trim = xo, e.trimLeft = wo, e.trimRight = _o, e.trunc = ko, e.unescape = To, e.uniqueId = qo, e.words = Eo, e.all = Yr, e.any = ai, e.contains = Zr, e.eq = Ni, e.detect = is, e.foldl = ps, e.foldr = hs, e.head = wr, e.include = Zr, e.inject = ps, Ro(e, function() {
                        var t = {};
                        return Re(e, function(n, r) {
                            e.prototype[r] || (t[r] = n)
                        }), t
                    }(), !1), e.sample = ri, e.prototype.sample = function(t) {
                        return this.__chain__ || null != t ? this.thru(function(e) {
                            return ri(e, t)
                        }) : ri(this.value())
                    }, e.VERSION = j, ee(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(t) {
                        e[t].placeholder = e
                    }), ee(["drop", "take"], function(t, e) {
                        Q.prototype[t] = function(n) {
                            var r = this.__filtered__;
                            if (r && !e) return new Q(this);
                            n = null == n ? 1 : _a(ma(n) || 0, 0);
                            var i = this.clone();
                            return r ? i.__takeCount__ = ka(i.__takeCount__, n) : i.__views__.push({
                                size: n,
                                type: t + (i.__dir__ < 0 ? "Right" : "")
                            }), i
                        }, Q.prototype[t + "Right"] = function(e) {
                            return this.reverse()[t](e).reverse()
                        }
                    }), ee(["filter", "map", "takeWhile"], function(t, e) {
                        var n = e + 1,
                            r = n != B;
                        Q.prototype[t] = function(t, e) {
                            var i = this.clone();
                            return i.__iteratees__.push({
                                iteratee: Fn(t, e, 1),
                                type: n
                            }), i.__filtered__ = i.__filtered__ || r, i
                        }
                    }), ee(["first", "last"], function(t, e) {
                        var n = "take" + (e ? "Right" : "");
                        Q.prototype[t] = function() {
                            return this[n](1).value()[0]
                        }
                    }), ee(["initial", "rest"], function(t, e) {
                        var n = "drop" + (e ? "" : "Right");
                        Q.prototype[t] = function() {
                            return this.__filtered__ ? new Q(this) : this[n](1)
                        }
                    }), ee(["pluck", "where"], function(t, e) {
                        var n = e ? "filter" : "map",
                            r = e ? He : Lo;
                        Q.prototype[t] = function(t) {
                            return this[n](r(t))
                        }
                    }), Q.prototype.compact = function() {
                        return this.filter(So)
                    }, Q.prototype.reject = function(t, e) {
                        return t = Fn(t, e, 1), this.filter(function(e) {
                            return !t(e)
                        })
                    }, Q.prototype.slice = function(t, e) {
                        t = null == t ? 0 : +t || 0;
                        var n = this;
                        return n.__filtered__ && (t > 0 || 0 > e) ? new Q(n) : (0 > t ? n = n.takeRight(-t) : t && (n = n.drop(t)), e !== E && (e = +e || 0, n = 0 > e ? n.dropRight(-e) : n.take(e - t)), n)
                    }, Q.prototype.takeRightWhile = function(t, e) {
                        return this.reverse().takeWhile(t, e).reverse()
                    }, Q.prototype.toArray = function() {
                        return this.take(Sa)
                    }, Re(Q.prototype, function(t, n) {
                        var r = /^(?:filter|map|reject)|While$/.test(n),
                            i = /^(?:first|last)$/.test(n),
                            o = e[i ? "take" + ("last" == n ? "Right" : "") : n];
                        o && (e.prototype[n] = function() {
                            var e = i ? [1] : arguments,
                                n = this.__chain__,
                                a = this.__wrapped__,
                                s = !!this.__actions__.length,
                                u = a instanceof Q,
                                c = e[0],
                                l = u || As(a);
                            l && r && "function" == typeof c && 1 != c.length && (u = l = !1);
                            var f = function(t) {
                                    return i && n ? o(t, 1)[0] : o.apply(E, ce([t], e))
                                },
                                p = {
                                    func: Ur,
                                    args: [f],
                                    thisArg: E
                                },
                                h = u && !s;
                            if (i && !n) return h ? (a = a.clone(), a.__actions__.push(p), t.call(a)) : o.call(E, this.value())[0];
                            if (!i && l) {
                                a = h ? a : new Q(this);
                                var d = t.apply(a, e);
                                return d.__actions__.push(p), new m(d, n)
                            }
                            return this.thru(f)
                        })
                    }), ee(["join", "pop", "push", "replace", "shift", "sort", "splice", "split", "unshift"], function(t) {
                        var n = (/^(?:replace|split)$/.test(t) ? Zo : Qo)[t],
                            r = /^(?:push|sort|unshift)$/.test(t) ? "tap" : "thru",
                            i = /^(?:join|pop|replace|shift)$/.test(t);
                        e.prototype[t] = function() {
                            var t = arguments;
                            return i && !this.__chain__ ? n.apply(this.value(), t) : this[r](function(e) {
                                return n.apply(e, t)
                            })
                        }
                    }), Re(Q.prototype, function(t, n) {
                        var r = e[n];
                        if (r) {
                            var i = r.name,
                                o = La[i] || (La[i] = []);
                            o.push({
                                name: n,
                                func: r
                            })
                        }
                    }), La[In(E, S).name] = [{
                        name: "wrapper",
                        func: E
                    }], Q.prototype.clone = et, Q.prototype.reverse = rt, Q.prototype.value = Wt, e.prototype.chain = Wr, e.prototype.commit = zr, e.prototype.concat = es, e.prototype.plant = Vr, e.prototype.reverse = Gr, e.prototype.toString = Xr, e.prototype.run = e.prototype.toJSON = e.prototype.valueOf = e.prototype.value = Jr, e.prototype.collect = e.prototype.map, e.prototype.head = e.prototype.first, e.prototype.select = e.prototype.filter, e.prototype.tail = e.prototype.rest, e
                }
                var E, j = "3.10.1",
                    C = 1,
                    S = 2,
                    A = 4,
                    N = 8,
                    R = 16,
                    I = 32,
                    O = 64,
                    L = 128,
                    D = 256,
                    P = 30,
                    $ = "...",
                    q = 150,
                    H = 16,
                    M = 200,
                    F = 1,
                    B = 2,
                    U = "Expected a function",
                    W = "__lodash_placeholder__",
                    z = "[object Arguments]",
                    V = "[object Array]",
                    G = "[object Boolean]",
                    X = "[object Date]",
                    J = "[object Error]",
                    Y = "[object Function]",
                    Q = "[object Map]",
                    K = "[object Number]",
                    Z = "[object Object]",
                    tt = "[object RegExp]",
                    et = "[object Set]",
                    nt = "[object String]",
                    rt = "[object WeakMap]",
                    it = "[object ArrayBuffer]",
                    ot = "[object Float32Array]",
                    at = "[object Float64Array]",
                    st = "[object Int8Array]",
                    ut = "[object Int16Array]",
                    ct = "[object Int32Array]",
                    lt = "[object Uint8Array]",
                    ft = "[object Uint8ClampedArray]",
                    pt = "[object Uint16Array]",
                    ht = "[object Uint32Array]",
                    dt = /\b__p \+= '';/g,
                    gt = /\b(__p \+=) '' \+/g,
                    vt = /(__e\(.*?\)|\b__t\)) \+\n'';/g,
                    yt = /&(?:amp|lt|gt|quot|#39|#96);/g,
                    mt = /[&<>"'`]/g,
                    bt = RegExp(yt.source),
                    xt = RegExp(mt.source),
                    wt = /<%-([\s\S]+?)%>/g,
                    _t = /<%([\s\S]+?)%>/g,
                    kt = /<%=([\s\S]+?)%>/g,
                    Tt = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\n\\]|\\.)*?\1)\]/,
                    Et = /^\w*$/,
                    jt = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\n\\]|\\.)*?)\2)\]/g,
                    Ct = /^[:!,]|[\\^$.*+?()[\]{}|\/]|(^[0-9a-fA-Fnrtuvx])|([\n\r\u2028\u2029])/g,
                    St = RegExp(Ct.source),
                    At = /[\u0300-\u036f\ufe20-\ufe23]/g,
                    Nt = /\\(\\)?/g,
                    Rt = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,
                    It = /\w*$/,
                    Ot = /^0[xX]/,
                    Lt = /^\[object .+?Constructor\]$/,
                    Dt = /^\d+$/,
                    Pt = /[\xc0-\xd6\xd8-\xde\xdf-\xf6\xf8-\xff]/g,
                    $t = /($^)/,
                    qt = /['\n\r\u2028\u2029\\]/g,
                    Ht = function() {
                        var t = "[A-Z\\xc0-\\xd6\\xd8-\\xde]",
                            e = "[a-z\\xdf-\\xf6\\xf8-\\xff]+";
                        return RegExp(t + "+(?=" + t + e + ")|" + t + "?" + e + "|" + t + "+|[0-9]+", "g")
                    }(),
                    Mt = ["Array", "ArrayBuffer", "Date", "Error", "Float32Array", "Float64Array", "Function", "Int8Array", "Int16Array", "Int32Array", "Math", "Number", "Object", "RegExp", "Set", "String", "_", "clearTimeout", "isFinite", "parseFloat", "parseInt", "setTimeout", "TypeError", "Uint8Array", "Uint8ClampedArray", "Uint16Array", "Uint32Array", "WeakMap"],
                    Ft = -1,
                    Bt = {};
                Bt[ot] = Bt[at] = Bt[st] = Bt[ut] = Bt[ct] = Bt[lt] = Bt[ft] = Bt[pt] = Bt[ht] = !0, Bt[z] = Bt[V] = Bt[it] = Bt[G] = Bt[X] = Bt[J] = Bt[Y] = Bt[Q] = Bt[K] = Bt[Z] = Bt[tt] = Bt[et] = Bt[nt] = Bt[rt] = !1;
                var Ut = {};
                Ut[z] = Ut[V] = Ut[it] = Ut[G] = Ut[X] = Ut[ot] = Ut[at] = Ut[st] = Ut[ut] = Ut[ct] = Ut[K] = Ut[Z] = Ut[tt] = Ut[nt] = Ut[lt] = Ut[ft] = Ut[pt] = Ut[ht] = !0, Ut[J] = Ut[Y] = Ut[Q] = Ut[et] = Ut[rt] = !1;
                var Wt = {
                        "Ã€": "A",
                        "Ã": "A",
                        "Ã‚": "A",
                        "Ãƒ": "A",
                        "Ã„": "A",
                        "Ã…": "A",
                        "Ã ": "a",
                        "Ã¡": "a",
                        "Ã¢": "a",
                        "Ã£": "a",
                        "Ã¤": "a",
                        "Ã¥": "a",
                        "Ã‡": "C",
                        "Ã§": "c",
                        "Ã": "D",
                        "Ã°": "d",
                        "Ãˆ": "E",
                        "Ã‰": "E",
                        "ÃŠ": "E",
                        "Ã‹": "E",
                        "Ã¨": "e",
                        "Ã©": "e",
                        "Ãª": "e",
                        "Ã«": "e",
                        "ÃŒ": "I",
                        "Ã": "I",
                        "ÃŽ": "I",
                        "Ã": "I",
                        "Ã¬": "i",
                        "Ã­": "i",
                        "Ã®": "i",
                        "Ã¯": "i",
                        "Ã‘": "N",
                        "Ã±": "n",
                        "Ã’": "O",
                        "Ã“": "O",
                        "Ã”": "O",
                        "Ã•": "O",
                        "Ã–": "O",
                        "Ã˜": "O",
                        "Ã²": "o",
                        "Ã³": "o",
                        "Ã´": "o",
                        "Ãµ": "o",
                        "Ã¶": "o",
                        "Ã¸": "o",
                        "Ã™": "U",
                        "Ãš": "U",
                        "Ã›": "U",
                        "Ãœ": "U",
                        "Ã¹": "u",
                        "Ãº": "u",
                        "Ã»": "u",
                        "Ã¼": "u",
                        "Ã": "Y",
                        "Ã½": "y",
                        "Ã¿": "y",
                        "Ã†": "Ae",
                        "Ã¦": "ae",
                        "Ãž": "Th",
                        "Ã¾": "th",
                        "ÃŸ": "ss"
                    },
                    zt = {
                        "&": "&amp;",
                        "<": "&lt;",
                        ">": "&gt;",
                        '"': "&quot;",
                        "'": "&#39;",
                        "`": "&#96;"
                    },
                    Vt = {
                        "&amp;": "&",
                        "&lt;": "<",
                        "&gt;": ">",
                        "&quot;": '"',
                        "&#39;": "'",
                        "&#96;": "`"
                    },
                    Gt = {
                        "function": !0,
                        object: !0
                    },
                    Xt = {
                        0: "x30",
                        1: "x31",
                        2: "x32",
                        3: "x33",
                        4: "x34",
                        5: "x35",
                        6: "x36",
                        7: "x37",
                        8: "x38",
                        9: "x39",
                        A: "x41",
                        B: "x42",
                        C: "x43",
                        D: "x44",
                        E: "x45",
                        F: "x46",
                        a: "x61",
                        b: "x62",
                        c: "x63",
                        d: "x64",
                        e: "x65",
                        f: "x66",
                        n: "x6e",
                        r: "x72",
                        t: "x74",
                        u: "x75",
                        v: "x76",
                        x: "x78"
                    },
                    Jt = {
                        "\\": "\\",
                        "'": "'",
                        "\n": "n",
                        "\r": "r",
                        "\u2028": "u2028",
                        "\u2029": "u2029"
                    },
                    Yt = Gt[typeof n] && n && !n.nodeType && n,
                    Qt = Gt[typeof e] && e && !e.nodeType && e,
                    Kt = Yt && Qt && "object" == typeof t && t && t.Object && t,
                    Zt = Gt[typeof self] && self && self.Object && self,
                    te = Gt[typeof window] && window && window.Object && window,
                    ee = Qt && Qt.exports === Yt && Yt,
                    ne = Kt || te !== (this && this.window) && te || Zt || this,
                    re = T();
                "function" == typeof define && "object" == typeof define.amd && define.amd ? (ne._ = re, define(function() {
                    return re
                })) : Yt && Qt ? ee ? (Qt.exports = re)._ = re : Yt._ = re : ne._ = re
            }).call(this)
        }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {}],
    17: [function(t, e, n) {
        (function(t) {
            ! function(t) {
                "use strict";
                if ("function" == typeof bootstrap) bootstrap("promise", t);
                else if ("object" == typeof n && "object" == typeof e) e.exports = t();
                else if ("function" == typeof define && define.amd) define(t);
                else if ("undefined" != typeof ses) {
                    if (!ses.ok()) return;
                    ses.makeQ = t
                } else {
                    if ("undefined" == typeof window && "undefined" == typeof self) throw new Error("This environment was not anticipated by Q. Please file a bug.");
                    var r = "undefined" != typeof window ? window : self,
                        i = r.Q;
                    r.Q = t(), r.Q.noConflict = function() {
                        return r.Q = i, this
                    }
                }
            }(function() {
                "use strict";

                function e(t) {
                    return function() {
                        return J.apply(t, arguments)
                    }
                }

                function n(t) {
                    return t === Object(t)
                }

                function r(t) {
                    return "[object StopIteration]" === rt(t) || t instanceof z
                }

                function i(t, e) {
                    if (B && e.stack && "object" == typeof t && null !== t && t.stack && -1 === t.stack.indexOf(it)) {
                        for (var n = [], r = e; r; r = r.source) r.stack && n.unshift(r.stack);
                        n.unshift(t.stack);
                        var i = n.join("\n" + it + "\n");
                        t.stack = o(i)
                    }
                }

                function o(t) {
                    for (var e = t.split("\n"), n = [], r = 0; r < e.length; ++r) {
                        var i = e[r];
                        u(i) || a(i) || !i || n.push(i)
                    }
                    return n.join("\n")
                }

                function a(t) {
                    return -1 !== t.indexOf("(module.js:") || -1 !== t.indexOf("(node.js:")
                }

                function s(t) {
                    var e = /at .+ \((.+):(\d+):(?:\d+)\)$/.exec(t);
                    if (e) return [e[1], Number(e[2])];
                    var n = /at ([^ ]+):(\d+):(?:\d+)$/.exec(t);
                    if (n) return [n[1], Number(n[2])];
                    var r = /.*@(.+):(\d+)$/.exec(t);
                    return r ? [r[1], Number(r[2])] : void 0
                }

                function u(t) {
                    var e = s(t);
                    if (!e) return !1;
                    var n = e[0],
                        r = e[1];
                    return n === W && r >= V && ct >= r
                }

                function c() {
                    if (B) try {
                        throw new Error
                    } catch (t) {
                        var e = t.stack.split("\n"),
                            n = e[0].indexOf("@") > 0 ? e[1] : e[2],
                            r = s(n);
                        if (!r) return;
                        return W = r[0], r[1]
                    }
                }

                function l(t, e, n) {
                    return function() {
                        return "undefined" != typeof console && "function" == typeof console.warn && console.warn(e + " is deprecated, use " + n + " instead.", new Error("").stack), t.apply(t, arguments)
                    }
                }

                function f(t) {
                    return t instanceof g ? t : b(t) ? S(t) : C(t)
                }

                function p() {
                    function t(t) {
                        e = t, o.source = t, Q(n, function(e, n) {
                            f.nextTick(function() {
                                t.promiseDispatch.apply(t, n)
                            })
                        }, void 0), n = void 0, r = void 0
                    }
                    var e, n = [],
                        r = [],
                        i = tt(p.prototype),
                        o = tt(g.prototype);
                    if (o.promiseDispatch = function(t, i, o) {
                            var a = Y(arguments);
                            n ? (n.push(a), "when" === i && o[1] && r.push(o[1])) : f.nextTick(function() {
                                e.promiseDispatch.apply(e, a)
                            })
                        }, o.valueOf = function() {
                            if (n) return o;
                            var t = y(e);
                            return m(t) && (e = t), t
                        }, o.inspect = function() {
                            return e ? e.inspect() : {
                                state: "pending"
                            }
                        }, f.longStackSupport && B) try {
                        throw new Error
                    } catch (a) {
                        o.stack = a.stack.substring(a.stack.indexOf("\n") + 1)
                    }
                    return i.promise = o, i.resolve = function(n) {
                        e || t(f(n))
                    }, i.fulfill = function(n) {
                        e || t(C(n))
                    }, i.reject = function(n) {
                        e || t(j(n))
                    }, i.notify = function(t) {
                        e || Q(r, function(e, n) {
                            f.nextTick(function() {
                                n(t)
                            })
                        }, void 0)
                    }, i
                }

                function h(t) {
                    if ("function" != typeof t) throw new TypeError("resolver must be a function.");
                    var e = p();
                    try {
                        t(e.resolve, e.reject, e.notify)
                    } catch (n) {
                        e.reject(n)
                    }
                    return e.promise
                }

                function d(t) {
                    return h(function(e, n) {
                        for (var r = 0, i = t.length; i > r; r++) f(t[r]).then(e, n)
                    })
                }

                function g(t, e, n) {
                    void 0 === e && (e = function(t) {
                        return j(new Error("Promise does not support operation: " + t))
                    }), void 0 === n && (n = function() {
                        return {
                            state: "unknown"
                        }
                    });
                    var r = tt(g.prototype);
                    if (r.promiseDispatch = function(n, i, o) {
                            var a;
                            try {
                                a = t[i] ? t[i].apply(r, o) : e.call(r, i, o)
                            } catch (s) {
                                a = j(s)
                            }
                            n && n(a)
                        }, r.inspect = n, n) {
                        var i = n();
                        "rejected" === i.state && (r.exception = i.reason), r.valueOf = function() {
                            var t = n();
                            return "pending" === t.state || "rejected" === t.state ? r : t.value
                        }
                    }
                    return r
                }

                function v(t, e, n, r) {
                    return f(t).then(e, n, r)
                }

                function y(t) {
                    if (m(t)) {
                        var e = t.inspect();
                        if ("fulfilled" === e.state) return e.value
                    }
                    return t
                }

                function m(t) {
                    return t instanceof g
                }

                function b(t) {
                    return n(t) && "function" == typeof t.then
                }

                function x(t) {
                    return m(t) && "pending" === t.inspect().state
                }

                function w(t) {
                    return !m(t) || "fulfilled" === t.inspect().state
                }

                function _(t) {
                    return m(t) && "rejected" === t.inspect().state
                }

                function k() {
                    ot.length = 0, at.length = 0, ut || (ut = !0)
                }

                function T(e, n) {
                    ut && ("object" == typeof t && "function" == typeof t.emit && f.nextTick.runAfter(function() {
                        -1 !== K(at, e) && (t.emit("unhandledRejection", n, e), st.push(e))
                    }), at.push(e), n && "undefined" != typeof n.stack ? ot.push(n.stack) : ot.push("(no stack) " + n))
                }

                function E(e) {
                    if (ut) {
                        var n = K(at, e); - 1 !== n && ("object" == typeof t && "function" == typeof t.emit && f.nextTick.runAfter(function() {
                            var r = K(st, e); - 1 !== r && (t.emit("rejectionHandled", ot[n], e), st.splice(r, 1))
                        }), at.splice(n, 1), ot.splice(n, 1))
                    }
                }

                function j(t) {
                    var e = g({
                        when: function(e) {
                            return e && E(this), e ? e(t) : this
                        }
                    }, function() {
                        return this
                    }, function() {
                        return {
                            state: "rejected",
                            reason: t
                        }
                    });
                    return T(e, t), e
                }

                function C(t) {
                    return g({
                        when: function() {
                            return t
                        },
                        get: function(e) {
                            return t[e]
                        },
                        set: function(e, n) {
                            t[e] = n
                        },
                        "delete": function(e) {
                            delete t[e]
                        },
                        post: function(e, n) {
                            return null === e || void 0 === e ? t.apply(void 0, n) : t[e].apply(t, n)
                        },
                        apply: function(e, n) {
                            return t.apply(e, n)
                        },
                        keys: function() {
                            return nt(t)
                        }
                    }, void 0, function() {
                        return {
                            state: "fulfilled",
                            value: t
                        }
                    })
                }

                function S(t) {
                    var e = p();
                    return f.nextTick(function() {
                        try {
                            t.then(e.resolve, e.reject, e.notify)
                        } catch (n) {
                            e.reject(n)
                        }
                    }), e.promise
                }

                function A(t) {
                    return g({
                        isDef: function() {}
                    }, function(e, n) {
                        return D(t, e, n)
                    }, function() {
                        return f(t).inspect()
                    })
                }

                function N(t, e, n) {
                    return f(t).spread(e, n)
                }

                function R(t) {
                    return function() {
                        function e(t, e) {
                            var a;
                            if ("undefined" == typeof StopIteration) {
                                try {
                                    a = n[t](e)
                                } catch (s) {
                                    return j(s)
                                }
                                return a.done ? f(a.value) : v(a.value, i, o)
                            }
                            try {
                                a = n[t](e)
                            } catch (s) {
                                return r(s) ? f(s.value) : j(s)
                            }
                            return v(a, i, o)
                        }
                        var n = t.apply(this, arguments),
                            i = e.bind(e, "next"),
                            o = e.bind(e, "throw");
                        return i()
                    }
                }

                function I(t) {
                    f.done(f.async(t)())
                }

                function O(t) {
                    throw new z(t)
                }

                function L(t) {
                    return function() {
                        return N([this, P(arguments)], function(e, n) {
                            return t.apply(e, n)
                        })
                    }
                }

                function D(t, e, n) {
                    return f(t).dispatch(e, n)
                }

                function P(t) {
                    return v(t, function(t) {
                        var e = 0,
                            n = p();
                        return Q(t, function(r, i, o) {
                            var a;
                            m(i) && "fulfilled" === (a = i.inspect()).state ? t[o] = a.value : (++e, v(i, function(r) {
                                t[o] = r, 0 === --e && n.resolve(t)
                            }, n.reject, function(t) {
                                n.notify({
                                    index: o,
                                    value: t
                                })
                            }))
                        }, void 0), 0 === e && n.resolve(t), n.promise
                    })
                }

                function $(t) {
                    if (0 === t.length) return f.resolve();
                    var e = f.defer(),
                        n = 0;
                    return Q(t, function(r, i, o) {
                        function a(t) {
                            e.resolve(t)
                        }

                        function s() {
                            n--, 0 === n && e.reject(new Error("Can't get fulfillment value from any promise, all promises were rejected."))
                        }

                        function u(t) {
                            e.notify({
                                index: o,
                                value: t
                            })
                        }
                        var c = t[o];
                        n++, v(c, a, s, u)
                    }, void 0), e.promise
                }

                function q(t) {
                    return v(t, function(t) {
                        return t = Z(t, f), v(P(Z(t, function(t) {
                            return v(t, G, G)
                        })), function() {
                            return t
                        })
                    })
                }

                function H(t) {
                    return f(t).allSettled()
                }

                function M(t, e) {
                    return f(t).then(void 0, void 0, e)
                }

                function F(t, e) {
                    return f(t).nodeify(e)
                }
                var B = !1;
                try {
                    throw new Error
                } catch (U) {
                    B = !!U.stack
                }
                var W, z, V = c(),
                    G = function() {},
                    X = function() {
                        function e() {
                            for (var t, e; r.next;) r = r.next, t = r.task, r.task = void 0, e = r.domain, e && (r.domain = void 0, e.enter()), n(t, e);
                            for (; u.length;) t = u.pop(), n(t);
                            o = !1
                        }

                        function n(t, n) {
                            try {
                                t()
                            } catch (r) {
                                if (s) throw n && n.exit(), setTimeout(e, 0), n && n.enter(), r;
                                setTimeout(function() {
                                    throw r
                                }, 0)
                            }
                            n && n.exit()
                        }
                        var r = {
                                task: void 0,
                                next: null
                            },
                            i = r,
                            o = !1,
                            a = void 0,
                            s = !1,
                            u = [];
                        if (X = function(e) {
                                i = i.next = {
                                    task: e,
                                    domain: s && t.domain,
                                    next: null
                                }, o || (o = !0, a())
                            }, "object" == typeof t && "[object process]" === t.toString() && t.nextTick) s = !0, a = function() {
                            t.nextTick(e)
                        };
                        else if ("function" == typeof setImmediate) a = "undefined" != typeof window ? setImmediate.bind(window, e) : function() {
                            setImmediate(e)
                        };
                        else if ("undefined" != typeof MessageChannel) {
                            var c = new MessageChannel;
                            c.port1.onmessage = function() {
                                a = l, c.port1.onmessage = e, e()
                            };
                            var l = function() {
                                c.port2.postMessage(0)
                            };
                            a = function() {
                                setTimeout(e, 0), l()
                            }
                        } else a = function() {
                            setTimeout(e, 0)
                        };
                        return X.runAfter = function(t) {
                            u.push(t), o || (o = !0, a())
                        }, X
                    }(),
                    J = Function.call,
                    Y = e(Array.prototype.slice),
                    Q = e(Array.prototype.reduce || function(t, e) {
                        var n = 0,
                            r = this.length;
                        if (1 === arguments.length)
                            for (;;) {
                                if (n in this) {
                                    e = this[n++];
                                    break
                                }
                                if (++n >= r) throw new TypeError
                            }
                        for (; r > n; n++) n in this && (e = t(e, this[n], n));
                        return e
                    }),
                    K = e(Array.prototype.indexOf || function(t) {
                        for (var e = 0; e < this.length; e++)
                            if (this[e] === t) return e;
                        return -1
                    }),
                    Z = e(Array.prototype.map || function(t, e) {
                        var n = this,
                            r = [];
                        return Q(n, function(i, o, a) {
                            r.push(t.call(e, o, a, n))
                        }, void 0), r
                    }),
                    tt = Object.create || function(t) {
                        function e() {}
                        return e.prototype = t, new e
                    },
                    et = e(Object.prototype.hasOwnProperty),
                    nt = Object.keys || function(t) {
                        var e = [];
                        for (var n in t) et(t, n) && e.push(n);
                        return e
                    },
                    rt = e(Object.prototype.toString);
                z = "undefined" != typeof ReturnValue ? ReturnValue : function(t) {
                    this.value = t
                };
                var it = "From previous event:";
                f.resolve = f, f.nextTick = X, f.longStackSupport = !1, "object" == typeof t && t && t.env && t.env.Q_DEBUG && (f.longStackSupport = !0), f.defer = p, p.prototype.makeNodeResolver = function() {
                    var t = this;
                    return function(e, n) {
                        e ? t.reject(e) : arguments.length > 2 ? t.resolve(Y(arguments, 1)) : t.resolve(n)
                    }
                }, f.Promise = h, f.promise = h, h.race = d, h.all = P, h.reject = j, h.resolve = f, f.passByCopy = function(t) {
                    return t
                }, g.prototype.passByCopy = function() {
                    return this
                }, f.join = function(t, e) {
                    return f(t).join(e)
                }, g.prototype.join = function(t) {
                    return f([this, t]).spread(function(t, e) {
                        if (t === e) return t;
                        throw new Error("Can't join: not the same: " + t + " " + e)
                    })
                }, f.race = d, g.prototype.race = function() {
                    return this.then(f.race)
                }, f.makePromise = g, g.prototype.toString = function() {
                    return "[object Promise]"
                }, g.prototype.then = function(t, e, n) {
                    function r(e) {
                        try {
                            return "function" == typeof t ? t(e) : e
                        } catch (n) {
                            return j(n)
                        }
                    }

                    function o(t) {
                        if ("function" == typeof e) {
                            i(t, s);
                            try {
                                return e(t)
                            } catch (n) {
                                return j(n)
                            }
                        }
                        return j(t)
                    }

                    function a(t) {
                        return "function" == typeof n ? n(t) : t
                    }
                    var s = this,
                        u = p(),
                        c = !1;
                    return f.nextTick(function() {
                        s.promiseDispatch(function(t) {
                            c || (c = !0, u.resolve(r(t)))
                        }, "when", [function(t) {
                            c || (c = !0, u.resolve(o(t)))
                        }])
                    }), s.promiseDispatch(void 0, "when", [void 0, function(t) {
                        var e, n = !1;
                        try {
                            e = a(t)
                        } catch (r) {
                            if (n = !0, !f.onerror) throw r;
                            f.onerror(r)
                        }
                        n || u.notify(e)
                    }]), u.promise
                }, f.tap = function(t, e) {
                    return f(t).tap(e)
                }, g.prototype.tap = function(t) {
                    return t = f(t), this.then(function(e) {
                        return t.fcall(e).thenResolve(e)
                    })
                }, f.when = v, g.prototype.thenResolve = function(t) {
                    return this.then(function() {
                        return t
                    })
                }, f.thenResolve = function(t, e) {
                    return f(t).thenResolve(e)
                }, g.prototype.thenReject = function(t) {
                    return this.then(function() {
                        throw t
                    })
                }, f.thenReject = function(t, e) {
                    return f(t).thenReject(e)
                }, f.nearer = y, f.isPromise = m, f.isPromiseAlike = b, f.isPending = x, g.prototype.isPending = function() {
                    return "pending" === this.inspect().state
                }, f.isFulfilled = w, g.prototype.isFulfilled = function() {
                    return "fulfilled" === this.inspect().state
                }, f.isRejected = _, g.prototype.isRejected = function() {
                    return "rejected" === this.inspect().state
                };
                var ot = [],
                    at = [],
                    st = [],
                    ut = !0;
                f.resetUnhandledRejections = k, f.getUnhandledReasons = function() {
                    return ot.slice()
                }, f.stopUnhandledRejectionTracking = function() {
                    k(), ut = !1
                }, k(), f.reject = j, f.fulfill = C, f.master = A, f.spread = N, g.prototype.spread = function(t, e) {
                    return this.all().then(function(e) {
                        return t.apply(void 0, e)
                    }, e)
                }, f.async = R, f.spawn = I, f["return"] = O, f.promised = L, f.dispatch = D, g.prototype.dispatch = function(t, e) {
                    var n = this,
                        r = p();
                    return f.nextTick(function() {
                        n.promiseDispatch(r.resolve, t, e)
                    }), r.promise
                }, f.get = function(t, e) {
                    return f(t).dispatch("get", [e])
                }, g.prototype.get = function(t) {
                    return this.dispatch("get", [t])
                }, f.set = function(t, e, n) {
                    return f(t).dispatch("set", [e, n])
                }, g.prototype.set = function(t, e) {
                    return this.dispatch("set", [t, e])
                }, f.del = f["delete"] = function(t, e) {
                    return f(t).dispatch("delete", [e])
                }, g.prototype.del = g.prototype["delete"] = function(t) {
                    return this.dispatch("delete", [t])
                }, f.mapply = f.post = function(t, e, n) {
                    return f(t).dispatch("post", [e, n])
                }, g.prototype.mapply = g.prototype.post = function(t, e) {
                    return this.dispatch("post", [t, e])
                }, f.send = f.mcall = f.invoke = function(t, e) {
                    return f(t).dispatch("post", [e, Y(arguments, 2)])
                }, g.prototype.send = g.prototype.mcall = g.prototype.invoke = function(t) {
                    return this.dispatch("post", [t, Y(arguments, 1)])
                }, f.fapply = function(t, e) {
                    return f(t).dispatch("apply", [void 0, e])
                }, g.prototype.fapply = function(t) {
                    return this.dispatch("apply", [void 0, t])
                }, f["try"] = f.fcall = function(t) {
                    return f(t).dispatch("apply", [void 0, Y(arguments, 1)])
                }, g.prototype.fcall = function() {
                    return this.dispatch("apply", [void 0, Y(arguments)])
                }, f.fbind = function(t) {
                    var e = f(t),
                        n = Y(arguments, 1);
                    return function() {
                        return e.dispatch("apply", [this, n.concat(Y(arguments))])
                    }
                }, g.prototype.fbind = function() {
                    var t = this,
                        e = Y(arguments);
                    return function() {
                        return t.dispatch("apply", [this, e.concat(Y(arguments))])
                    }
                }, f.keys = function(t) {
                    return f(t).dispatch("keys", [])
                }, g.prototype.keys = function() {
                    return this.dispatch("keys", [])
                }, f.all = P, g.prototype.all = function() {
                    return P(this)
                }, f.any = $, g.prototype.any = function() {
                    return $(this)
                }, f.allResolved = l(q, "allResolved", "allSettled"), g.prototype.allResolved = function() {
                    return q(this)
                }, f.allSettled = H, g.prototype.allSettled = function() {
                    return this.then(function(t) {
                        return P(Z(t, function(t) {
                            function e() {
                                return t.inspect()
                            }
                            return t = f(t), t.then(e, e)
                        }))
                    })
                }, f.fail = f["catch"] = function(t, e) {
                    return f(t).then(void 0, e)
                }, g.prototype.fail = g.prototype["catch"] = function(t) {
                    return this.then(void 0, t)
                }, f.progress = M, g.prototype.progress = function(t) {
                    return this.then(void 0, void 0, t)
                }, f.fin = f["finally"] = function(t, e) {
                    return f(t)["finally"](e)
                }, g.prototype.fin = g.prototype["finally"] = function(t) {
                    return t = f(t), this.then(function(e) {
                        return t.fcall().then(function() {
                            return e
                        })
                    }, function(e) {
                        return t.fcall().then(function() {
                            throw e
                        })
                    })
                }, f.done = function(t, e, n, r) {
                    return f(t).done(e, n, r)
                }, g.prototype.done = function(e, n, r) {
                    var o = function(t) {
                            f.nextTick(function() {
                                if (i(t, a), !f.onerror) throw t;
                                f.onerror(t)
                            })
                        },
                        a = e || n || r ? this.then(e, n, r) : this;
                    "object" == typeof t && t && t.domain && (o = t.domain.bind(o)), a.then(void 0, o)
                }, f.timeout = function(t, e, n) {
                    return f(t).timeout(e, n)
                }, g.prototype.timeout = function(t, e) {
                    var n = p(),
                        r = setTimeout(function() {
                            e && "string" != typeof e || (e = new Error(e || "Timed out after " + t + " ms"), e.code = "ETIMEDOUT"), n.reject(e)
                        }, t);
                    return this.then(function(t) {
                        clearTimeout(r), n.resolve(t)
                    }, function(t) {
                        clearTimeout(r), n.reject(t)
                    }, n.notify), n.promise
                }, f.delay = function(t, e) {
                    return void 0 === e && (e = t, t = void 0), f(t).delay(e)
                }, g.prototype.delay = function(t) {
                    return this.then(function(e) {
                        var n = p();
                        return setTimeout(function() {
                            n.resolve(e)
                        }, t), n.promise
                    })
                }, f.nfapply = function(t, e) {
                    return f(t).nfapply(e)
                }, g.prototype.nfapply = function(t) {
                    var e = p(),
                        n = Y(t);
                    return n.push(e.makeNodeResolver()), this.fapply(n).fail(e.reject), e.promise
                }, f.nfcall = function(t) {
                    var e = Y(arguments, 1);
                    return f(t).nfapply(e)
                }, g.prototype.nfcall = function() {
                    var t = Y(arguments),
                        e = p();
                    return t.push(e.makeNodeResolver()), this.fapply(t).fail(e.reject), e.promise
                }, f.nfbind = f.denodeify = function(t) {
                    var e = Y(arguments, 1);
                    return function() {
                        var n = e.concat(Y(arguments)),
                            r = p();
                        return n.push(r.makeNodeResolver()), f(t).fapply(n).fail(r.reject), r.promise
                    }
                }, g.prototype.nfbind = g.prototype.denodeify = function() {
                    var t = Y(arguments);
                    return t.unshift(this), f.denodeify.apply(void 0, t)
                }, f.nbind = function(t, e) {
                    var n = Y(arguments, 2);
                    return function() {
                        function r() {
                            return t.apply(e, arguments)
                        }
                        var i = n.concat(Y(arguments)),
                            o = p();
                        return i.push(o.makeNodeResolver()), f(r).fapply(i).fail(o.reject), o.promise
                    }
                }, g.prototype.nbind = function() {
                    var t = Y(arguments, 0);
                    return t.unshift(this), f.nbind.apply(void 0, t)
                }, f.nmapply = f.npost = function(t, e, n) {
                    return f(t).npost(e, n)
                }, g.prototype.nmapply = g.prototype.npost = function(t, e) {
                    var n = Y(e || []),
                        r = p();
                    return n.push(r.makeNodeResolver()), this.dispatch("post", [t, n]).fail(r.reject), r.promise
                }, f.nsend = f.nmcall = f.ninvoke = function(t, e) {
                    var n = Y(arguments, 2),
                        r = p();
                    return n.push(r.makeNodeResolver()), f(t).dispatch("post", [e, n]).fail(r.reject), r.promise
                }, g.prototype.nsend = g.prototype.nmcall = g.prototype.ninvoke = function(t) {
                    var e = Y(arguments, 1),
                        n = p();
                    return e.push(n.makeNodeResolver()), this.dispatch("post", [t, e]).fail(n.reject), n.promise
                }, f.nodeify = F, g.prototype.nodeify = function(t) {
                    return t ? void this.then(function(e) {
                        f.nextTick(function() {
                            t(null, e)
                        })
                    }, function(e) {
                        f.nextTick(function() {
                            t(e)
                        })
                    }) : this
                }, f.noConflict = function() {
                    throw new Error("Q.noConflict only works when Q is used as a global")
                };
                var ct = c();
                return f
            })
        }).call(this, t("_process"))
    }, {
        _process: 11
    }],
    18: [function(t, e, n) {
        function r() {}

        function i(t) {
            var e = {}.toString.call(t);
            switch (e) {
                case "[object File]":
                case "[object Blob]":
                case "[object FormData]":
                    return !0;
                default:
                    return !1
            }
        }

        function o() {
            if (y.XMLHttpRequest && ("file:" != y.location.protocol || !y.ActiveXObject)) return new XMLHttpRequest;
            try {
                return new ActiveXObject("Microsoft.XMLHTTP")
            } catch (t) {}
            try {
                return new ActiveXObject("Msxml2.XMLHTTP.6.0")
            } catch (t) {}
            try {
                return new ActiveXObject("Msxml2.XMLHTTP.3.0")
            } catch (t) {}
            try {
                return new ActiveXObject("Msxml2.XMLHTTP")
            } catch (t) {}
            return !1
        }

        function a(t) {
            return t === Object(t)
        }

        function s(t) {
            if (!a(t)) return t;
            var e = [];
            for (var n in t) null != t[n] && e.push(encodeURIComponent(n) + "=" + encodeURIComponent(t[n]));
            return e.join("&")
        }

        function u(t) {
            for (var e, n, r = {}, i = t.split("&"), o = 0, a = i.length; a > o; ++o) n = i[o], e = n.split("="), r[decodeURIComponent(e[0])] = decodeURIComponent(e[1]);
            return r
        }

        function c(t) {
            var e, n, r, i, o = t.split(/\r?\n/),
                a = {};
            o.pop();
            for (var s = 0, u = o.length; u > s; ++s) n = o[s], e = n.indexOf(":"), r = n.slice(0, e).toLowerCase(), i = m(n.slice(e + 1)), a[r] = i;
            return a
        }

        function l(t) {
            return t.split(/ *; */).shift()
        }

        function f(t) {
            return v(t.split(/ *; */), function(t, e) {
                var n = e.split(/ *= */),
                    r = n.shift(),
                    i = n.shift();
                return r && i && (t[r] = i), t
            }, {})
        }

        function p(t, e) {
            e = e || {}, this.req = t, this.xhr = this.req.xhr, this.text = "HEAD" != this.req.method ? this.xhr.responseText : null, this.setStatusProperties(this.xhr.status), this.header = this.headers = c(this.xhr.getAllResponseHeaders()), this.header["content-type"] = this.xhr.getResponseHeader("content-type"), this.setHeaderProperties(this.header), this.body = "HEAD" != this.req.method ? this.parseBody(this.text) : null
        }

        function h(t, e) {
            var n = this;
            g.call(this), this._query = this._query || [], this.method = t, this.url = e, this.header = {}, this._header = {}, this.on("end", function() {
                var t = null,
                    e = null;
                try {
                    e = new p(n)
                } catch (r) {
                    t = new Error("Parser is unable to parse the response"), t.parse = !0, t.original = r
                }
                n.callback(t, e)
            })
        }

        function d(t, e) {
            return "function" == typeof e ? new h("GET", t).end(e) : 1 == arguments.length ? new h("GET", t) : new h(t, e)
        }
        var g = t("emitter"),
            v = t("reduce"),
            y = "undefined" == typeof window ? this : window,
            m = "".trim ? function(t) {
                return t.trim()
            } : function(t) {
                return t.replace(/(^\s*|\s*$)/g, "")
            };
        d.serializeObject = s, d.parseString = u, d.types = {
            html: "text/html",
            json: "application/json",
            xml: "application/xml",
            urlencoded: "application/x-www-form-urlencoded",
            form: "application/x-www-form-urlencoded",
            "form-data": "application/x-www-form-urlencoded"
        }, d.serialize = {
            "application/x-www-form-urlencoded": s,
            "application/json": JSON.stringify
        }, d.parse = {
            "application/x-www-form-urlencoded": u,
            "application/json": JSON.parse
        }, p.prototype.get = function(t) {
            return this.header[t.toLowerCase()]
        }, p.prototype.setHeaderProperties = function(t) {
            var e = this.header["content-type"] || "";
            this.type = l(e);
            var n = f(e);
            for (var r in n) this[r] = n[r]
        }, p.prototype.parseBody = function(t) {
            var e = d.parse[this.type];
            return e && t && t.length ? e(t) : null
        }, p.prototype.setStatusProperties = function(t) {
            var e = t / 100 | 0;
            this.status = t, this.statusType = e, this.info = 1 == e, this.ok = 2 == e, this.clientError = 4 == e, this.serverError = 5 == e, this.error = 4 == e || 5 == e ? this.toError() : !1, this.accepted = 202 == t, this.noContent = 204 == t || 1223 == t, this.badRequest = 400 == t, this.unauthorized = 401 == t, this.notAcceptable = 406 == t, this.notFound = 404 == t, this.forbidden = 403 == t
        }, p.prototype.toError = function() {
            var t = this.req,
                e = t.method,
                n = t.url,
                r = "cannot " + e + " " + n + " (" + this.status + ")",
                i = new Error(r);
            return i.status = this.status, i.method = e, i.url = n, i
        }, d.Response = p, g(h.prototype), h.prototype.use = function(t) {
            return t(this), this
        }, h.prototype.timeout = function(t) {
            return this._timeout = t, this
        }, h.prototype.clearTimeout = function() {
            return this._timeout = 0, clearTimeout(this._timer), this
        }, h.prototype.abort = function() {
            return this.aborted ? void 0 : (this.aborted = !0, this.xhr.abort(), this.clearTimeout(), this.emit("abort"), this)
        }, h.prototype.set = function(t, e) {
            if (a(t)) {
                for (var n in t) this.set(n, t[n]);
                return this
            }
            return this._header[t.toLowerCase()] = e, this.header[t] = e, this
        }, h.prototype.unset = function(t) {
            return delete this._header[t.toLowerCase()], delete this.header[t], this
        }, h.prototype.getHeader = function(t) {
            return this._header[t.toLowerCase()]
        }, h.prototype.type = function(t) {
            return this.set("Content-Type", d.types[t] || t), this
        }, h.prototype.accept = function(t) {
            return this.set("Accept", d.types[t] || t), this
        }, h.prototype.auth = function(t, e) {
            var n = btoa(t + ":" + e);
            return this.set("Authorization", "Basic " + n), this
        }, h.prototype.query = function(t) {
            return "string" != typeof t && (t = s(t)), t && this._query.push(t), this
        }, h.prototype.field = function(t, e) {
            return this._formData || (this._formData = new FormData), this._formData.append(t, e), this
        }, h.prototype.attach = function(t, e, n) {
            return this._formData || (this._formData = new FormData), this._formData.append(t, e, n), this
        }, h.prototype.send = function(t) {
            var e = a(t),
                n = this.getHeader("Content-Type");
            if (e && a(this._data))
                for (var r in t) this._data[r] = t[r];
            else "string" == typeof t ? (n || this.type("form"), n = this.getHeader("Content-Type"), "application/x-www-form-urlencoded" == n ? this._data = this._data ? this._data + "&" + t : t : this._data = (this._data || "") + t) : this._data = t;
            return e ? (n || this.type("json"), this) : this
        }, h.prototype.callback = function(t, e) {
            var n = this._callback;
            return this.clearTimeout(), 2 == n.length ? n(t, e) : t ? this.emit("error", t) : void n(e)
        }, h.prototype.crossDomainError = function() {
            var t = new Error("Origin is not allowed by Access-Control-Allow-Origin");
            t.crossDomain = !0, this.callback(t)
        }, h.prototype.timeoutError = function() {
            var t = this._timeout,
                e = new Error("timeout of " + t + "ms exceeded");
            e.timeout = t, this.callback(e)
        }, h.prototype.withCredentials = function() {
            return this._withCredentials = !0, this
        }, h.prototype.end = function(t) {
            var e = this,
                n = this.xhr = o(),
                a = this._query.join("&"),
                s = this._timeout,
                u = this._formData || this._data;
            if (this._callback = t || r, n.onreadystatechange = function() {
                    return 4 == n.readyState ? 0 == n.status ? e.aborted ? e.timeoutError() : e.crossDomainError() : void e.emit("end") : void 0
                }, n.upload && (n.upload.onprogress = function(t) {
                    t.percent = t.loaded / t.total * 100, e.emit("progress", t)
                }), s && !this._timer && (this._timer = setTimeout(function() {
                    e.abort()
                }, s)), a && (a = d.serializeObject(a), this.url += ~this.url.indexOf("?") ? "&" + a : "?" + a), n.open(this.method, this.url, !0), this._withCredentials && (n.withCredentials = !0), "GET" != this.method && "HEAD" != this.method && "string" != typeof u && !i(u)) {
                var c = d.serialize[this.getHeader("Content-Type")];
                c && (u = c(u))
            }
            for (var l in this.header) null != this.header[l] && n.setRequestHeader(l, this.header[l]);
            return this.emit("request", this), n.send(u), this
        }, d.Request = h, d.get = function(t, e, n) {
            var r = d("GET", t);
            return "function" == typeof e && (n = e, e = null), e && r.query(e), n && r.end(n), r
        }, d.head = function(t, e, n) {
            var r = d("HEAD", t);
            return "function" == typeof e && (n = e, e = null), e && r.send(e), n && r.end(n), r
        }, d.del = function(t, e) {
            var n = d("DELETE", t);
            return e && n.end(e), n
        }, d.patch = function(t, e, n) {
            var r = d("PATCH", t);
            return "function" == typeof e && (n = e, e = null), e && r.send(e), n && r.end(n), r
        }, d.post = function(t, e, n) {
            var r = d("POST", t);
            return "function" == typeof e && (n = e, e = null), e && r.send(e), n && r.end(n), r
        }, d.put = function(t, e, n) {
            var r = d("PUT", t);
            return "function" == typeof e && (n = e, e = null), e && r.send(e), n && r.end(n), r
        }, e.exports = d
    }, {
        emitter: 19,
        reduce: 20
    }],
    19: [function(t, e, n) {
        function r(t) {
            return t ? i(t) : void 0
        }

        function i(t) {
            for (var e in r.prototype) t[e] = r.prototype[e];
            return t
        }
        e.exports = r, r.prototype.on = r.prototype.addEventListener = function(t, e) {
            return this._callbacks = this._callbacks || {}, (this._callbacks[t] = this._callbacks[t] || []).push(e), this
        }, r.prototype.once = function(t, e) {
            function n() {
                r.off(t, n), e.apply(this, arguments)
            }
            var r = this;
            return this._callbacks = this._callbacks || {}, n.fn = e, this.on(t, n), this
        }, r.prototype.off = r.prototype.removeListener = r.prototype.removeAllListeners = r.prototype.removeEventListener = function(t, e) {
            if (this._callbacks = this._callbacks || {}, 0 == arguments.length) return this._callbacks = {}, this;
            var n = this._callbacks[t];
            if (!n) return this;
            if (1 == arguments.length) return delete this._callbacks[t], this;
            for (var r, i = 0; i < n.length; i++)
                if (r = n[i], r === e || r.fn === e) {
                    n.splice(i, 1);
                    break
                }
            return this
        }, r.prototype.emit = function(t) {
            this._callbacks = this._callbacks || {};
            var e = [].slice.call(arguments, 1),
                n = this._callbacks[t];
            if (n) {
                n = n.slice(0);
                for (var r = 0, i = n.length; i > r; ++r) n[r].apply(this, e)
            }
            return this
        }, r.prototype.listeners = function(t) {
            return this._callbacks = this._callbacks || {}, this._callbacks[t] || []
        }, r.prototype.hasListeners = function(t) {
            return !!this.listeners(t).length
        }
    }, {}],
    20: [function(t, e, n) {
        e.exports = function(t, e, n) {
            for (var r = 0, i = t.length, o = 3 == arguments.length ? n : t[r++]; i > r;) o = e.call(null, o, t[r], ++r, t);
            return o
        }
    }, {}]
}, {}, [1]);
