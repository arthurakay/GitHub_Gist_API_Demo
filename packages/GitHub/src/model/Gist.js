Ext.define('GitHub.model.Gist', {
    extend : 'Ext.data.Model',

    fields : [
        'url',
        'forks_url',
        'commits_url',
        'id',
        'description',
        'public',
        'user',

        { name : 'comments', type : 'int' },

        'comments_url',
        'html_url',
        'git_pull_url',
        'git_push_url',
        'created_at',
        'updated_at'
    ]
});