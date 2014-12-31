Ext.define('Demo.view.grid.Controller', {
    extend: 'Ext.app.ViewController',

    requires : [
        'GitHub.API'
    ],

    alias: 'controller.gridcontroller',

    control : {
        'grid' : {
            //custom event, fired by Event bus
            'setuser' : 'onSetUser',

            //built-in component events
            'itemclick' : 'onItemClick'
        }
    },

    onSetUser: function (userName) {
        var grid = this.getView(),
            proxy = grid.getStore().getProxy();

        //make sure the grid can be interacted with
        grid.enable();

        proxy.setUrl(GitHub.API.url('listGistsByUser', [ userName ]));

        grid.getStore().load();
    },

    onItemClick : function(grid, record, item, index, e, eOpts) {
        Ext.GlobalEvents.fireEvent('gist', record);
    }
});
