{
	"translatorID": "9444e3cb-e7d6-4735-b5f5-7d103838f3d9",
	"label": "xiaoyuzhou",
	"creator": "dofine",
	"target": "https?://www.xiaoyuzhoufm.com/episode/.*",
	"minVersion": "5.0",
	"maxVersion": "",
	"priority": 100,
	"inRepository": true,
	"translatorType": 4,
	"browserSupport": "gcsibv",
	"lastUpdated": "2022-04-10 15:23:58"
}

function detectWeb(doc, url) {
	return 'podcast';
}
function doWeb(doc, url) {
	var itemType = "podcast";
	var item = new Zotero.Item(itemType);
	var jsonld = doc.head.querySelector('script[name="schema:podcast-show"]').textContent;
	
	var data = JSON.parse(jsonld);
	if (data && data.datePublished) {
		item.date = ZU.strToISO(data.datePublished);
	}
	item.seriesTitle = data.partOfSeries.name;
	item.title = doc.head.querySelector("meta[property='og:title']").content;

	item.url = data.url;
	item.abstractNote = data.description;
	const volRegexp = /(vol)\.?(\d+)/i;
	item.episodeNumber = item.title.match(volRegexp)[2];

	item.complete();
}

/** BEGIN TEST CASES **/
var testCases = [
	{
		"type": "web",
		"url": "https://www.xiaoyuzhoufm.com/episode/624ad853cad0b3a80a10c8b3",
		"items": [
			{
				"itemType": "podcast",
				"title": "翻电Special 消除恐惧：关于后遗症与物传人的论文复述 VOL.86",
				"creators": [],
				"abstractNote": "我发现很多关于COVID的恐惧是因为对其了解甚少，因此本期我就来面对两个最大的恐惧，后遗症与环境感染。\n后遗症论文：\nPost-acute COVID-19 syndrome\nHigh-dimensional characterization of post-acute sequelae of COVID-19\n物传人相关论文：\nExaggerated risk of transmission of COVID-19 by fomites\nDetection and infectivity potential of severe acute respiratory syndrome coronavirus 2 (SARS-CoV-2) environmental contamination in isolation units and quarantine facilities\nLongitudinal Monitoring of SARS-CoV-2 RNA on High-Touch Surfaces in a Community Setting\nAerosol Transmission of Rhinovirus Colds\n[ 欢迎在Patreon和爱发电支持翻转电台 ]\n如果你过去有在Patreon支持其他项目的经验，优先推荐使用Patreon，因为其有按月订阅的制度：\nhttps://www.patreon.com/flipradio\n如果你从来没有在Patreon支持其他项目的经验，可以在爱发电： https://afdian.net/@flipradio\n感谢大家对翻转电台的支持。大家要记得敢于去相信。",
				"episodeNumber": "86",
				"seriesTitle": "翻转电台FlipRadio",
				"url": "https://www.xiaoyuzhoufm.com/episode/624ad853cad0b3a80a10c8b3",
				"attachments": [],
				"tags": [],
				"notes": [],
				"seeAlso": []
			}
		]
	}
]
/** END TEST CASES **/
