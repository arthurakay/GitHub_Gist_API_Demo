Ext.define('GitHub.store.Gists', {
    extend : 'Ext.data.Store',

    requires : [
        'GitHub.model.Gist',
        'Ext.data.proxy.JsonP',
        'Ext.data.reader.Json'
    ],

    model : 'GitHub.model.Gist',

    proxy : {
        type : 'jsonp',
        url  : '',

        reader : {
            type         : 'json',
            rootProperty : 'data'
        }
    }
});