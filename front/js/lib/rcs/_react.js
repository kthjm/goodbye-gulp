export default {

    cause : "_react",

    commands : [

        {

            condition : {

                type : "didmount",

                name : "sex"

            },

            query : ["kthjm","momo","child"],

            business : (e,query,set,end) => {

                console.log("didmount");

                // history.replaceState(null,null,"/fuck");

                window.dispatchEvent(new PopStateEvent("popstate"));

                // 基本的にはここがrouterに最も近いスコープになるかと思う。

                // spaをやるんならurlの状態を判断して引っ張ってくるべきデータを引っ張るなどをする

            }

        },

        {

            condition : {

                type : "didupdate",

                name : "family"

            },

            query : ["kthjm","momo","child"],

            business : (e,query,set,end) => {

                console.log("didupdate");

                // end();

            }

        },

    ]

};
