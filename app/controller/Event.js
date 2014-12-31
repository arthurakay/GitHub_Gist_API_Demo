Ext.define('Demo.controller.Event', {
    extend : 'Ext.app.Controller',

    init : function() {
        this.listen({
            global : {
                'search' : 'searchForGists',

                'gist' : 'getGist'
            }
        });
    },

    searchForGists : function(userName) {
        var grid = Ext.ComponentQuery.query('demo-gistlist')[0];

        grid.fireEvent('setuser', userName);
    },

    getGist : function(record) {
        var detail = Ext.ComponentQuery.query('demo-gistdetail')[0];

        detail.fireEvent('setgist', record);
    }
});