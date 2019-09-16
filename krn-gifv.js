var _KRNGIFv = {
    start: function(cb) {
        var self = this;
        if(cb) {
          self.cb = cb;
        }
        self.video_elements = $("video[data-krn-gifv='1']")
        self.isAutoPlayAthing();

    },
    isAutoPlayAthing: function() {
        var self = this;
        var src = 'data:video/mp4;base64,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';
        var video_check = $('<video src="'+src+'" controls playsinline muted width="20" height="20" style="visibility:hidden; position:fixed;z-index:1000;top:0;left:0"></video>');

        // firefox on android issue -> serve poster image
        var isAndroid = navigator.userAgent.search('Android');
        var isFirefox = navigator.userAgent.search('Firefox');
        if (isAndroid > -1 && isFirefox > -1) {
            self.fallBackPosters();
            return;
        }

         video_check[0].onplay = function() {
                                self.playing = true;
                              };
        video_check[0].oncanplay = function() {
            if(!self.hasPromise && self.playing) {
                self.autoPlayWorks();
            }
            if(!self.hasPromise && !self.playing) {
                self.fallBackPosters();
            }
        };

        self.hasPromise = false;
        $('body').prepend(video_check);
        play_promise = video_check[0].play();

        //Modern Browser should support Promise based interface, otherwise just
        //serve posters
        if (play_promise  !== undefined) {
            self.hasPromise = true;
            play_promise.then(function() {
                         self.autoPlayWorks();
             })
             .catch(function(e) {
                self.fallBackPosters();
             });
        } else {
            self.hasPromise = false;
            //console.log("WAITING FOR FALLBACK METHOD");
        }
    },
    fallBackPosters: function() {
        var self = this;
        self.video_elements.each(function() {
            $(this).attr("poster", $(this).data("krn-poster"));
        })
    },
    autoPlayWorks: function() {
        var self = this;
        self.video_elements.each(function(idx) {
          if(self.cb) {
            if(self.cb("play", idx)) {
              $(this)[0].play();
            } else {
              $(this).attr("poster", $(this).data("krn-poster"));
            }
          } else {
            $(this)[0].play();
          }
        })
    }

}

 if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    module.exports = _KRNGIFv;
}  else {
    window.KRNGIFv = _KRNGIFv;
}
