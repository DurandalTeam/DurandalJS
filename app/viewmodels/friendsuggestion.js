/**
 * Created by dxhao on 4/22/2015.
 */
/**
 * Created by dxhao on 4/22/2015.
 */

define(['plugins/http', 'durandal/app', 'knockout'], function (http, app, ko) {
    return {
        name: ko.observable("Hào ??ng"),
        sayHello: function() {
            app.showMessage('Hello ' + this.name() + '! Nice to meet you.', 'Greetings');
        }
    };
});

