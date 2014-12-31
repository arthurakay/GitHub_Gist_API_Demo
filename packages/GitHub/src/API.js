Ext.define('GitHub.API', {
    singleton : true,

    requires : [
        'Ext.String',
        'Ext.data.JsonP'
    ],

    _api : {
        'listGistsByUser' : 'users/{0}/gists',
        'getGistById'     : 'gists/{0}'
    },

    _baseUrl : 'https://api.github.com/',

    /**
     * @param api {String} The key of _api for the desired API call
     * @param params {Array} An array of parameters which get applied to the tokenized API template
     * @returns {String|*}
     */
    url : function (api, params) {
        if (!api || !params) {
            return false;
        }

        var str = Ext.String;

        //the first argument to Ext.String.format is the tokenized template
        params.splice(0, 0, this._baseUrl + this._api[api]);

        return str.format.apply(str, params);
    },

    /**
     * @param options {Object} Contains the following properties:
     *   - api {String} The desired API to call
     *   - params {Array} The necessary parameters to apply to the tokenized API template
     *   - extraParams {Object} An object of additional parameters to send with the HTTP request
     *   - callbackFn {Function} A function to call upon completion of the asynchronous HTTP request
     */
    request : function (options) {
        Ext.data.JsonP.request({
            url      : this.url(options.api, options.params),
            params   : options.extraParams,
            callback : options.callbackFn
        });
    }
});