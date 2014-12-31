Ext.define('Demo.view.search.Form', {
    xtype  : 'demo-searchform',
    extend : 'Ext.form.Panel',

    requires : [
        'Demo.view.search.Controller',
        'Ext.form.field.Text',
        'Ext.Button'
    ],

    controller : 'searchcontroller',

    padding : 10,

    items : [
        {
            xtype      : 'textfield',
            fieldLabel : 'Username',
            name       : 'userName',
            flex       : 1
        },
        {
            xtype     : 'button',
            text      : 'Search...',
            listeners : {
                click : 'onSearch'
            }
        }
    ]
});