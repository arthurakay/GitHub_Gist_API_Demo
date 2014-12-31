var jsdom = require('jsdom');
var assert = require('assert');

jsdom.env(
    '<html><body></body></html>',
    [
        '../../../ext/ext-all-debug.js',
        '../src/API.js'
    ],
    {
        loaded : function (errors, window) {
            //Node.js expects "exports" in order to use global vars... hack it from the window
            var Ext = window.Ext;


            Ext.onReady(function () {
                //same problem as "Ext" above... only our namespace isn't ready until Ext JS has been initialized
                var GH = window.GitHub;

                /**
                 * GitHub.API.url() should return false if not provided both parameters
                 */
                assert.equal(
                    GH.API.url(),
                    false
                );
                assert.equal(
                    GH.API.url('listGistsByUser'),
                    false
                );
                assert.equal(
                    GH.API.url(undefined, ['foobar']),
                    false
                );
                assert.equal(
                    GH.API.url('', ['foobar']), //empty string should fail the falsy check
                    false
                );

                //... you get the idea here
                //FWIW Node.js isn't the best place to test Ext JS because it relies on a browser and all of that baggage

                //clean up loose memory
                window.close();

                console.log('Tests have all passed!');
            });
        }
    }
);