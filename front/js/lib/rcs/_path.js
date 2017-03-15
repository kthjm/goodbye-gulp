export default {

    cause : "_path",

    commands : [

        {

            condition : {

                type : "popstate",

                path : "/"

            },

            query : ["people"],

            business : (e,query,set,end) => {

                // console.log(set);

                console.log("path");

                console.log(location.pathname);

            }

        },

        {

            condition : {

                type : "popstate",

                path : "/fuck"

            },

            query : ["people"],

            business : (e,query,set,end) => {

                console.log("/fuck/:user");

                console.log(location.pathname);

            }

        },

        // {
        //
        //     condition : {
        //
        //         type : "popstate",
        //
        //         path : "/fuck/:user/:id"
        //
        //     },
        //
        //     query : ["people"],
        //
        //     business : (e,query,set,end) => {
        //
        //         console.log("/fuck/:user/:id");
        //
        //         console.log(location.pathname);
        //
        //     }
        //
        // },

        // {
        //
        //     condition : {
        //
        //         type : "popstate",
        //
        //         path : "/fuck"
        //
        //     },
        //
        //     query : ["people"],
        //
        //     business : (e,query,set,end) => {
        //
        //         console.log("/fuck path");
        //
        //         console.log(location.pathname);
        //
        //     }
        //
        // },
        //
        // {
        //
        //     condition : {
        //
        //         type : "popstate",
        //
        //         path : "/kthjm"
        //
        //     },
        //
        //     query : ["people","kthjm","momo"],
        //
        //     business : (e,query,set,end) => {
        //
        //         console.log("path");
        //
        //         console.log(location.pathname);
        //
        //     }
        //
        // }

    ]

};
