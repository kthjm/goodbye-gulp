import dmmtest from "./businesses/dmmtest";

export default {

    cause : "_dom",

    commands : [

        {

            condition : {

                type : "click",

                id : "real1"

            },

            query : ["kthjm"],

            // business : dmmtest

            business : kthjmGetMoney

        },

        {

            condition : {

                type : "mouseover",

                className : "real2",

                prevent : (e,clone) => {

                    if(clone.people.length > 10) return true;

                }

            },

            query : ["momo"],

            business : (e,query,set,end) => {

                query.momo.age = Math.floor(Math.random() * 10000);

                console.log(`momo's age is ${query.momo.age}!!`);

                end();

            },
        },

    ]

};

function kthjmGetMoney(e,query,set,end){

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
