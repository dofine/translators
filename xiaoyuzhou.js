{
	"translatorID": "9444e3cb-e7d6-4735-b5f5-7d103838f3d9",
	"label": "xiaoyuzhou",
	"creator": "dofine",
	"target": "https?://www.xiaoyuzhoufm.com/episode/.*",
	"minVersion": "5.0",
	"maxVersion": "",
	"priority": 100,
	"inRepository": false,
	"translatorType": 4,
	"browserSupport": "gcsibv",
	"lastUpdated": "2022-04-10 14:40:40"
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

    item.complete();
}

/** BEGIN TEST CASES **/
var testCases = [
	{
		"type": "web",
		"url": "https://www.xiaoyuzhoufm.com/episode/624dd13ed01d114df44b15e4",
		"items": [
			{
				"itemType": "podcast",
				"title": "Vol.29 对话项飙：俄乌战争与日常意义",
				"creators": [],
				"abstractNote": "从眼前的疫情到远方的战争，近年来多次的公共讨论，看起来众声喧哗、群情汹涌，如果仔细深究就会发现，大部分话语其实都缺乏实际证据，缺乏专业的切入点，整体舆论的趋势也走向两极，而非真正的多元。\n在这样的环境中，对话还如何发生？这是我们一直思考的问题。继《把自己作为方法》出版后，项飙教授和主编吴琦仍保持着日常交流，并为新的工作做准备。在一次邮件往来中，项老师提到他对俄乌战争的特别关注，并由此开始了一次新的访谈。\n谈话从项老师和邻居一次偶然交谈开始，延展到他对俄罗斯“学者”亚历山大·杜金——他的具体学说在俄罗斯官方和民间都颇具影响——的阅读和分析，以此作为他理解这场战争的参照物，持续追问战争因何而起？背后的意识形态如何运作？真正的危险在哪里？\n在相对专门的理论探讨之余，他的观察对于国内诸多话语纷争还有更具体的提示——今天的中国可以如何直面世界性的议题？看似遥远的国际冲突，和此时此地的日常生活、意义构造存在什么联系？如何引以为戒？警钟为谁而鸣？\n04:54 关于乌克兰战争的舆论“争锋”\n08:02 为什么关注杜金？\n22:01 项飙：战争本身有超出现实的意义诉求\n24:39 杜金是“普京的大脑”吗？\n31:02 冷战之后，俄罗斯的精神危机\n37:15 “杜金不是简单的民族主义，他认为国家不太重要，最重要的是文明”\n41:07 “新欧亚主义”作为“第四种理论”\n——杜金与其他意识形态的异同\n49:37 杜金的理论，为什么真的能搅动这个世界？\n1:03:40 把历史虚无化，把正义虚无化，仅剩权力之争\n1:09:39 “我们也不怀念苏联，我们怀念的是那一套原则”\n1:18:49 寻找杜金的漏洞：普通人在乎“文明”吗？\n1:29:25 今天的问题是意义构造的问题\n——如何构造自己的意义？\n-谈话中提到的书籍\n《地缘政治基础》（The Foundations of Geopolitics: The Geopolitical Future of Russia），[俄] 亚历山大·杜金著\n《自杀论：社会学的研究》，[法] 埃米尔·涂尔干著\n-谈话中提到的刊物\n《新左派评论》（New Left Review）\n《外交》（Foreign Affairs）\n｜本期封面｜\n摄影：吴琦\n｜来互动｜\n如果你对本期话题或本节目有任何想法或问题，请大胆在各收听平台评论区留言，或者微博吴琦@五七，与主播互动。下期节目中，我们将挑选一些问题，由主播吴琦做出回答。\n｜关于「螺丝在拧紧」｜\n监制：彭倩媛\n制作人：胡亚萍\n编辑：菜市场\n视觉设计：李政坷，杨濡溦\n节目运营：张博雅，曹岳\n原创音乐：徐逍潇\n实习生：汪书婷，乌兰图雅",
				"seriesTitle": "螺丝在拧紧",
				"url": "https://www.xiaoyuzhoufm.com/episode/624dd13ed01d114df44b15e4",
				"attachments": [],
				"tags": [],
				"notes": [],
				"seeAlso": []
			}
		]
	}
]
/** END TEST CASES **/
