(function() {
    var country = (terra_info_channel ? terra_info_channel.split('.') : ['br'])[0];
    var frameOrigin = window.location.protocol + '//www.terra.' + (['cl', 'es', 'us'].indexOf(country) === -1 ? 'com.'+country : (country === 'us' ? 'com' : country));
    var frameId = 'zazStalkerFrame';
    window.addEventListener('load', function() {
        var f = document.createElement('iframe');
        f.style.visibility = 'hidden';
        f.style.width = '1px';
        f.style.height = '1px';
        f.style.position = 'absolute';
        f.id = frameId;
        f.addEventListener('load', function() {
            // Send pageview signal
            var currentCleanURL = window.location.href.replace(window.location.search, '');
            var objNavigation = {
                id:'--PAR--',
                timestamp:parseInt(new Date().getTime()/1000),
                url:currentCleanURL,
                info:{
                    channel:terra_info_channel,
                    channeldetail:terra_info_channeldetail,
                    service:terra_info_service
                }
            };
            document.getElementById(frameId).contentWindow.postMessage(JSON.stringify(objNavigation), frameOrigin);
        });
        f.src = frameOrigin + '/globalSTATIC/fe/zaz-mod-stalker/assets/pageviewspar.html';
        if (window.location.href.indexOf('pageviewspar=1') !== -1) {
            document.getElementsByTagName('body')[0].appendChild(f);
        }
    });
})();
