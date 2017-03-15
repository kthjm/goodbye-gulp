export default [

    {

        condition : {

            type : "click",

            id : "real1"

        },

        query : ["kthjm"],

        business : kthjmGetMoney

    },

    {

        condition : {

            type : "mouseover",

            className : "real2",

            prevent : (e,clone) => {

                if(clone.get("people").length > 10) return true;

            }

        },

        query : ["momo"],

        business : (query,e,set,end) => {

            query.momo.age = Math.floor(Math.random() * 10000);

            console.log(`momo's age is ${query.momo.age}!!`);

            end();

        },
    },

    {

        condition : {

            type : "scroll",

            window : true,

            gentle : 100

        },

        query : ["people"],

        business : (query,e,set,end) => {

            query.people.push("ahahah");

            end();

        }

    },

    {

        condition : {

            type : "keydown",

            window : true,

            prevent : (e,clone) => {

                if(e.keyCode == 75) return true;

            },

            gentle : 100

        },

        query : ["people","kthjm","momo"],

        business : (query,e,set,end) => {

            console.log(e);

            console.log(query);

        }

    },

    {

        condition : {

            type : "didmount",

            name : "sex"

        },

        query : ["kthjm","momo","child"],

        business : (query,e,set,end) => {

            console.log("didmount");

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

        business : (query,e,set,end) => {

            console.log("didupdate");

            // end();

        }

    },

];

function kthjmGetMoney(query,e,set,end){

    set(

        "kthjm",

        Object.assign(

            {},

            query.kthjm,

            {
                money : (newmoney=>{

                    newmoney.push({yen:1000});

                    return newmoney;

                })
                ([].concat(query.kthjm.money))

            }
        )

    );

    end();

}
