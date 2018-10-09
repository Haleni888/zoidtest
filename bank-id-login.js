var MyLoginComponent = zoid.create({

    // The html tag used to render my component

    tag: 'bankid-login-component',

    // The url that will be loaded in the iframe or popup, when someone includes my component on their page


    url: {
        local: 'http://localhost:25648',
        dev: 'http://my-dev-site.com:8000/mycomponent',
        live: 'https://my-live-site.com/mycomponent'
    },

    // The size of the component on their page. Only px and % strings are supported

    dimensions: {
        width: '400px',
        height: '200px'
    },

    // The properties they can (or must) pass down to my component. This is optional.

    props: {

        isRetrievePersonDetails: {
            type: 'boolean',
            queryParam: 'person-details-only', // ?person-details-only=true
            required: false,            
            def: function() {
                return 'false';
            }            
        },

        onLogin: {
            type: 'function',
            required: false
        },

        onUserDetails: {
            type: 'function',
            required: false
        },

        onUserCancel: {
            type: 'function',
            required: false
        },

        onExpired: {
            type: 'function',
            required: false
        },

        onError: {
            type: 'function',
            required: false
        }        
    }
    });