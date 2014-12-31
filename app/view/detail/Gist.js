Ext.define('Demo.view.detail.Gist', {
    extend : 'Ext.tab.Panel',
    xtype  : 'demo-gistdetail',

    requires : [
        'Demo.view.detail.Controller'
    ],

    title       : 'Gist Details',
    collapsible : true,
    controller  : 'detailcontroller'
});