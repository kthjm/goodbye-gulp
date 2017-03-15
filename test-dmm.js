const request = require("request");
const bluebird = require("bluebird");
const DMMClient = require("dmm.js").Client;

// const dmm = new DMMClient({
//
//     api_id : "zCYp2SctJRZSxPzPzDPB",
//
//     affiliate_id : "kthjm-990"
//
// });
//
// var product = bluebird.promisify(dmm.product);
//
// product({
//     site: "DMM.R18",
//     service: "mono",
//     floor: "dvd",
//     sort: "date",
//     hits: 20,
//     offset: 1
// })
// .then(data=>console.log(data))
// .catch(err=>console.log(err));
function* DMMGenerator(length){

    let form = 0;

    while(form < length){

        yield new DMMClient({

            api_id : "zCYp2SctJRZSxPzPzDPB",

            affiliate_id : "kthjm-990"

        });

        form++;

    }

}

const [dmm,pmm] = (arr=>{

    console.log(arr);

    arr[1] = bluebird.promisifyAll(arr[1]);

    return arr;

})([...DMMGenerator(2)]);

pmm.productAsync({
    site: "DMM.R18",
    service: "mono",
    floor: "dvd",
    sort: "date",
    hits: 20,
    offset: 1
})
.then(data=>console.log(data))
.catch(err=>console.log(err));



console.log(dmm);
// console.log(pmm);

// const url = "https://api.dmm.com/affiliate/v3/ItemList?api_id=zCYp2SctJRZSxPzPzDPB&affiliate_id=kthjm-990&site=DMM.R18&service=digital&floor=videoa&hits=10&sort=date&keyword=%e4%b8%8a%e5%8e%9f%e4%ba%9c%e8%a1%a3&output=json";
//
// request(url,(err,res,body)=>{
//
//     console.log(JSON.parse(body));
//
// })

// document.appendChild((script=>{
//
//     window.jsoncb = (e) => console.log(e);
//
//     script.src = "https://api.dmm.com/affiliate/v3/ItemList?api_id=zCYp2SctJRZSxPzPzDPB&affiliate_id=kthjm-990&site=DMM.R18&service=digital&floor=videoa&hits=10&sort=date&keyword=%e4%b8%8a%e5%8e%9f%e4%ba%9c%e8%a1%a3&output=json&callback=jsoncb";
//
//     return script;
//
// })(document.createElement("script")));
