export default {

    cause : "_window",

    commands : [

        {

            condition : {

                type : "scroll",

                gentle : 40

            },

            query : ["people"],

            business : (e,query,set,end) => {

                console.log(query);

                query.people.push("ahahah");

                end();

            }

        },

        {

            condition : {

                type : "keydown",

                prevent : (e,clone) => {

                    if(e.keyCode == 75) return true;

                },

                gentle : 40

            },

            query : ["kthjm","momo"],

            business : (e,query,set,end) => {

                set("people",{});

                console.log(e);

                console.log(query);

            }

        }

    ]

};
