const axios = require("axios");
const cheerio = require("cheerio");
const url = "https://school.use.go.kr/daehyun-h/M01";

async function crawl(){
    const res = await axios.get(url);
    const $ = cheerio.load(res.data);
    $(".usm-lunch-cont").each((i,e) => {
        let menu = $(e).find("dd ul li").text().trim();
        menu = menu.replace(/\(\d+(.\d+)*\)/g, '').split(' ').join('\n');
        console.log(menu);
    });
}

crawl();
