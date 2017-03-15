// const request = require("request");
// const bluebird = require("bluebird");
// const DMMClient = require("dmm.js").Client;
// const dmm = bluebird.promisifyAll(DMMClient({api_id : "zCYp2SctJRZSxPzPzDPB",affiliate_id : "kthjm-990"}));

// console.log(dmm);

const dmm_api_types = [

    {
        name : "item",

        basic : "https://api.dmm.com/affiliate/v3/ItemList",

        options : {


            // affiliate_id	○	affiliate-990	登録時に割り振られた990～999までのアフィリエイトID
            // site : "DMM.R18	一般（DMM.com）かアダルト（DMM.R18）か",
            // service : "digital	フロアAPIから取得できるサービスコードを指定",
            // floor : "videoa	フロアAPIから取得できるフロアコードを指定",
            // hits :	"20	初期値：20 最大：100",
            // offset : "1	初期値：1 最大：50000",
            // sort : "rank	初期値：rank",
            // rank : "",
            // 価格が高い順：price
            // 価格が安い順：-price
            // 新着：date
            // 評価：review
            // キーワード	keyword		上原亜衣	UTF-8で指定
            // 商品ID	cid		15dss00145	商品に振られているcontent_id
            // 絞りこみ項目	article		actress	女優：actress
            // 作者：author
            // ジャンル：genre
            // シリーズ：series
            // メーカー：maker
            // 絞り込みID	article_id		1011199	上記絞り込み項目のID(各検索APIから取得可能)
            // 発売日絞り込み	gte_date		2016-04-01T00:00:00	このパラメータで指定した日付以降に発売された商品を絞り込むことができます。
            // ISO8601形式でフォーマットした日付を指定してください。(ただし、タイムゾーンは指定できません)
            // 発売日絞り込み	lte_date		2016-04-30T23:59:59	このパラメータで指定した日付以前に発売された商品を絞り込むことができます。
            // フォーマットはgte_dateと同じです。
            // 在庫絞り込み	mono_stock		mono	初期値：絞り込みなし
            // 在庫あり：stock
            // 予約受付中：reserve
            // DMM通販のみ：mono
            // マーケットプレイスのみ：dmp
            // ※通販サービスのみ指定可能
            // 出力形式	output		json	json / xml
            // コールバック	callback		callback	出力形式jsonで指定した場合に、このパラ

        }
    },

    {
        name : "floor",

        basic : "https://api.dmm.com/affiliate/v3/FloorList",

        options : {



        }

    },

    {
        name : "actress",

        basic : "https://api.dmm.com/affiliate/v3/ActressSearch",

        options : {



        }

    },

    {
        name : "genre",

        basic : "https://api.dmm.com/affiliate/v3/GenreSearch",

        options : {



        }

    },

    {
        name : "maker",

        basic : "https://api.dmm.com/affiliate/v3/MakerSearch",

        options : {



        }

    },

    {
        name : "series",

        basic : "https://api.dmm.com/affiliate/v3/SeriesSearch",

        options : {



        }

    },

    {
        name : "author",

        basic : "https://api.dmm.com/affiliate/v3/AuthorSearch",

        options : {



        }

    }
];

let dmm_api_map = new Map(dmm_api_types.map(

    obj=>[

        obj.name,

        new DMMConstructor(obj.basic,obj.options)

    ]

));

function DMMConstructor(basic,options){

    this.basic = basic;

    Object.entries(options).forEach(ppty=>{this[ppty[0]] = ppty[1];});

}

DMMConstructor.prototype.api_id = "zCYp2SctJRZSxPzPzDPB";

DMMConstructor.prototype.affi_id = "kthjm-990";

DMMConstructor.prototype.url = function(){

    return (

        this.basic + "?" +
        Object.entries(this)
        .map(ppty=>`${ppty[0]}=${ppty[1]}`)
        .join("&")

    );

};

var dmm = {

    api_id : "zCYp2SctJRZSxPzPzDPB",

    affiliate_id : "kthjm-990",

    output : "json",

    initial : encodeURI("か"),

    floor_id : 79,
    // 79,81

    hits : 500


};

var dmmMap = new Map(Object.entries(dmm));

export default function(query,e,set,end){

    fetch((temp=>{

        return `${temp}${[...dmmMap.entries()].map((kv,i)=>{

            var [key,value] = kv;

            return `${(()=>{

                if(i === 0) return "?";

                else return "&";

            })()}${key}=${value}`;

        }).join("")}`

    })("https://api.dmm.com/affiliate/v3/AuthorSearch"))
    .then(res=>res.json())
    .then(json=>console.log(json))
    .catch(err=>console.log(err));

    // fetch((temp=>{
    //
    //     return `${temp}${[...dmmMap.entries()].map((kv,i)=>{
    //
    //         var [key,value] = kv;
    //
    //         return `${(()=>{
    //
    //             if(i === 0) return "?";
    //
    //             else return "&";
    //
    //         })()}${key}=${value}`;
    //
    //     }).join("")}`
    //
    // })("https://api.dmm.com/affiliate/v3/FloorList"))
    // .then(res=>res.json())
    // .then(json=>console.log(json))
    // .catch(err=>console.log(err));


}
