Ext.define('Demo.view.grid.GistList', {
    xtype  : 'demo-gistlist',
    extend : 'Ext.grid.Panel',

    requires : [
        'GitHub.store.Gists',
        'Demo.view.grid.Controller'
    ],

    title    : 'Search: GitHub API',
    disabled : true,

    controller : 'gridcontroller',

    columns : [
        {
            text      : 'Gist ID',
            dataIndex : 'id',
            flex      : 1
        },
        {
            text      : 'Created On',
            dataIndex : 'created_at',
            flex      : 1
        },
        {
            text      : 'Comments',
            dataIndex : 'comments',
            flex      : 1
        }
    ],

    store : {
        xclass : 'GitHub.store.Gists'
    }
});