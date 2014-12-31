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
        var panel = this.getView(),
            files = record.data.files,
            file, raw_url;

        panel.removeAll();

        for (file in files) {
            if (!files.hasOwnProperty(file)) { continue; }

            raw_url = files[file].raw_url;

            panel.add({
                xtype : 'panel',
                title : file,
                html  : '<iframe src="' + raw_url + '" style="height: 100%; width: 100%;" />'
            });
        }
    }
});
