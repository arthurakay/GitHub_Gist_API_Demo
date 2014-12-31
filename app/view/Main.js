Ext.define('Demo.view.Main', {
    extend   : 'Ext.container.Container',
    requires : [
        'Demo.view.grid.GistList',
        'Demo.view.search.Form',
        'Demo.view.detail.Gist'
    ],

    xtype  : 'app-main',
    layout : 'border',

    items : [
        {
            xtype  : 'panel',
            region : 'center',

            layout : {
                type  : 'vbox',
                align : 'stretch'
            },

            items : [
                {
                    xtype : 'demo-searchform'
                },

                {
                    xtype : 'demo-gistlist',
                    flex  : 1
                }
            ]
        },

        {
            xtype  : 'demo-gistdetail',
            region : 'south',
            split  : true,
            height : 500
        }
    ]
});
