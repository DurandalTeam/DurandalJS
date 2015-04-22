define(['plugins/router', 'durandal/app'], function (router, app) {
    return {
        router: router,
        search: function() {
            //It's really easy to show a message box.
            //You can add custom options too. Also, it returns a promise for the user's response.
            app.showMessage('Search not yet implemented...');
        },
        activate: function () {
            router.map([
                { route: '', title:'Time Line', moduleId: 'viewmodels/timeline', nav: true },
                { route: 'Home', moduleId: 'viewmodels/home', nav: true },
                { route: 'flickr', moduleId: 'viewmodels/flickr', nav: true },
                { route: 'friendsuggestion', moduleId: 'viewmodels/friendsuggestion', nav: true },
                { route: 'sidebar_left', moduleId: 'viewmodels/sidebar_left', nav: true },
                { route: 'group_suggestion', moduleId: 'viewmodels/group_suggestion', nav: true },
                { route: 'feed', moduleId: 'viewmodels/feed', nav: true }
            ]).buildNavigationModel();
            
            return router.activate();
        }
    };
});


