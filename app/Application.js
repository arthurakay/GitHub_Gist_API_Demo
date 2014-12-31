Ext.define('Demo.Application', {
    extend: 'Ext.app.Application',

    requires : [
        'GitHub.API'
    ],
    
    name: 'Demo',

    controllers: [
        'Event'
    ],
    
    launch: function () {
        //
    }
});
