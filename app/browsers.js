'use strict'

angular.module('nginxTrustedBrowsers').factory('browsers', function() {

    function Chrome() {
        this.icon = 'chrome'
        this.platform = ['Chrome', 'Safari']
    }

    function Edge() {
        this.icon = 'edge'
        this.platform = ['Edge']
    }

    function Safari() {
        this.icon = 'safari'
        this.platform = ['Safari']
    }

    function Firefox() {
        this.icon = 'firefox'
        this.platform = ['Firefox']
    }

    function InternetExplorer() {
        this.icon = 'internet explorer'
        this.system = ['compatible', 'MSIE', 'rv:[\\d\\.]+', 'Trident\\/\\d.\\d', '\\.NET\\d\\.\\d[A-Z]']
        this.extensions = ['like Gecko']
    }

    function Opera() {
        this.icon = 'opera'
        this.platform = ['Opera']
    }

    return [
        new Chrome(),
        new Edge(),
        new Safari(),
        new Firefox(),
        new InternetExplorer(),
        new Opera()
    ]
});
