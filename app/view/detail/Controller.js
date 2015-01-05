Ext.define('Demo.view.detail.Controller', {
    extend : 'Ext.app.ViewController',

    requires : [
        'Ext.window.MessageBox'
    ],

    alias : 'controller.detailcontroller',

    control : {
        'panel' : {
            //custom event, fired by Event bus
            'setgist' : 'onSetGist'
        }
    },

    onSetGist : function (record) {
        var panel = this.getView();

        panel.removeAll();

        GitHub.API.request({
            api        : 'getGistById',
            params     : [record.data.id],
            callbackFn : function (scope, success, request) {
                var gist = Ext.decode(request.responseText),
                    files = gist.files;

                for (var file in files) {
                    panel.add({
                        xtype : 'panel',
                        title : file,
                        html  : '<pre>' + files[file].content + '</pre>'
                    });
                }

                panel.setActiveItem(0);
            }
        });
    }
});
