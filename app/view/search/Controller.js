Ext.define('Demo.view.search.Controller', {
    extend : 'Ext.app.ViewController',

    requires : [
        'Ext.window.MessageBox'
    ],

    alias : 'controller.searchcontroller',

    onSearch : function (btn) {
        var form = btn.up('form'),
            values = form.getValues(),
            userName = values.userName;

        if (userName === '') {
            Ext.Msg.alert('Error', 'Please enter a username.');
            return;
        }

        Ext.GlobalEvents.fireEvent('search', userName);
    }
});
