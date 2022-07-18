import React, { Component } from 'react';
import NewsItem from "./NewsItem";

export default class News extends Component {


  
  constructor(){
    super();
    this.state = {
        articles : [],
//         "articles": [
// {
// "source": {
// "id": null,
// "name": "Digital Journal"
// },
// "author": "Newsmantraa",
// "title": "At CAGR 4.9% IoT in Elevators Market sales to Grow US$ 2022.13 Million by 2028 - Digital Journal",
// "description": "According to our latest market study on “IoT in Elevators Market Forecast to 2028 –COVID-19 Impact and Global Analysis – by Component, Application,",
// "url": "https://www.digitaljournal.com/pr/at-cagr-4-9-iot-in-elevators-market-sales-to-grow-us-2022-13-million-by-2028",
// "urlToImage": null,
// "publishedAt": "2022-07-18T15:03:12Z",
// "content": "According to our latest market study on “IoT in Elevators Market Forecast to 2028 COVID-19 Impact and Global Analysis by Component, Application, and End-User,” the market is expected to grow from US$… [+7225 chars]"
// },
// {
// "source": {
// "id": null,
// "name": "PRNewswire"
// },
// "author": null,
// "title": "Medical Equipment Maintenance Market is expected to display an exponential growth by 2027|CAGR: ~10%| UnivDatos Market Insights",
// "description": "NOIDA, India, July 18, 2022 /PRNewswire/ -- According to a new report published by UnivDatos Markets Insights the Medical Equipment Maintenance Market is expected to grow at a CAGR of around 15% from 2021-2027. The analysis has been segmented into Device Type…",
// "url": "https://www.prnewswire.com/news-releases/medical-equipment-maintenance-market-is-expected-to-display-an-exponential-growth-by-2027cagr-10-univdatos-market-insights-301588049.html",
// "urlToImage": "https://mma.prnewswire.com/media/1225049/UnivDatos_Logo.jpg?p=facebook",
// "publishedAt": "2022-07-18T15:00:00Z",
// "content": "NOIDA, India, July 18, 2022 /PRNewswire/ -- According to a new report published by UnivDatos Markets Insights theMedical Equipment Maintenance Market is expected to grow at a CAGR of around 15% from … [+6690 chars]"
// },
// {
// "source": {
// "id": null,
// "name": "PRNewswire"
// },
// "author": null,
// "title": "Learning Management System (LMS) Market to Grow USD 40360 Million by 2028 at a CAGR of 17.1% | Valuates Reports",
// "description": "BANGALORE, India, July 18, 2022 /PRNewswire/ -- The Global LMS Market is Segmented by Type (On-premises, Cloud Based), by Application (Academic, Enterprise): Opportunity Analysis and Industry Forecast, 2022–2028. The global Learning Management System (LMS) ma…",
// "url": "https://www.prnewswire.com/news-releases/learning-management-system-lms-market-to-grow-usd-40360-million-by-2028-at-a-cagr-of-17-1--valuates-reports-301588142.html",
// "urlToImage": "https://mma.prnewswire.com/media/1082232/Valuates_Reports_Logo.jpg?p=facebook",
// "publishedAt": "2022-07-18T15:00:00Z",
// "content": "BANGALORE, India, July 18, 2022 /PRNewswire/ -- The Global LMS Market\r\n is Segmented by Type (On-premises, Cloud Based), by Application (Academic, Enterprise): Opportunity Analysis and Industry Forec… [+11284 chars]"
// },
// {
// "source": {
// "id": null,
// "name": "PRNewswire"
// },
// "author": null,
// "title": "Insights on Global Fluid Management System Market Size & Share to Reach USD 26 Billion by 2028, Exhibit a CAGR of 12.87% | Industry Trends, Value, Analysis & Forecast Report by ZMR",
// "description": "NEW YORK, July 18, 2022 /PRNewswire/ -- As per Zion Market Research study, The global fluid management system market size was valued at over $4 billion as of 2021 and is expected to generate a revenue of $26 billion as of 2028. The global market is anticipate…",
// "url": "https://www.prnewswire.com/news-releases/insights-on-global-fluid-management-system-market-size--share-to-reach-usd-26-billion-by-2028--exhibit-a-cagr-of-12-87--industry-trends-value-analysis--forecast-report-by-zmr-301588209.html",
// "urlToImage": "https://mma.prnewswire.com/media/1605489/Zion_Market_Research_Logo.jpg?p=facebook",
// "publishedAt": "2022-07-18T15:00:00Z",
// "content": "NEW YORK, July 18, 2022 /PRNewswire/ -- As per Zion Market Research study, The global fluid management system market size was valued at over $4 billion as of 2021 and is expected to generate a revenu… [+17170 chars]"
// },
// {
// "source": {
// "id": null,
// "name": "PRNewswire"
// },
// "author": null,
// "title": "Enriched Milk Powder Market to Top US$ 15.38 Billion Amid Growing Consumption of Nutrition Enriched Food Products",
// "description": "Over 1/4th of All Enriched Milk Powder Sales to Remain Concentrated in North America Fact.MR's latest report provides a detailed enriched milk powder market forecast for a period of 10 years (2022-2032). It examines the sales prospects of enriched milk powder…",
// "url": "https://www.prnewswire.com/news-releases/enriched-milk-powder-market-to-top-us-15-38-billion-amid-growing-consumption-of-nutrition-enriched-food-products-301587990.html",
// "urlToImage": "https://mma.prnewswire.com/media/713666/FactMR_Logo.jpg?p=facebook",
// "publishedAt": "2022-07-18T15:00:00Z",
// "content": "Over 1/4th of All Enriched Milk Powder Sales to Remain Concentrated in North America\r\nFact.MR's latest report provides a detailed enriched milk powder market forecast for a period of 10 years (2022-2… [+10983 chars]"
// },
// {
// "source": {
// "id": null,
// "name": "PRNewswire"
// },
// "author": null,
// "title": "Network as a Service Market Worth $46.6 Billion by 2027 - Exclusive Report by MarketsandMarkets™",
// "description": "CHICAGO, July 18, 2022 /PRNewswire/ -- According to a new market research report \"Network as a Service Market by Type (LAN and WLAN, WAN, Communication and Collaboration, and Network Security), Organization Size (Large Enterprises and SMEs), Application, End …",
// "url": "https://www.prnewswire.com/news-releases/network-as-a-service-market-worth-46-6-billion-by-2027--exclusive-report-by-marketsandmarkets-301588083.html",
// "urlToImage": "https://mma.prnewswire.com/media/660509/MarketsandMarkets_Logo.jpg?p=facebook",
// "publishedAt": "2022-07-18T15:00:00Z",
// "content": "CHICAGO, July 18, 2022 /PRNewswire/ -- According to a new market research report \"Network as a Service Market by Type (LAN and WLAN, WAN, Communication and Collaboration, and Network Security), Organ… [+6687 chars]"
// },
// {
// "source": {
// "id": null,
// "name": "Antaranews.com"
// },
// "author": "Indra Arief, Raka Adji",
// "title": "President Jokowi asks Hajj returnees to get booster shot",
// "description": "President Joko Widodo (Jokowi) has asked Hajj pilgrims who have just returned to Indonesia from Saudi Arabia to get the booster dose of the COVID-19 vaccine at Hajj dormitories before their families pick them up.\r\n“Mr. ...",
// "url": "https://en.antaranews.com/news/239953/president-jokowi-asks-hajj-returnees-to-get-booster-shot",
// "urlToImage": "https://cdn.antaranews.com/cache/800x533/2022/07/17/20220716_165339_1.jpg",
// "publishedAt": "2022-07-18T14:59:22Z",
// "content": "Mr. President has given directions for all Hajj pilgrims who have returned (to Indonesia) and have not received the booster dose to get the booster dose while waiting at the Hajj dormitories before b… [+2264 chars]"
// },
// {
// "source": {
// "id": "independent",
// "name": "Independent"
// },
// "author": "David Charlesworth",
// "title": "Ben Stokes’ best ODI moments from World Cup heroics to batting belligerence",
// "description": "The England Test captain has announced his retirement from one-day internationals",
// "url": "https://www.independent.co.uk/sport/cricket/ben-stokes-odi-england-australia-new-zealand-b2125745.html",
// "urlToImage": "https://static.independent.co.uk/2022/07/18/15/newFile-10.jpg?quality=75&width=1200&auto=webp",
// "publishedAt": "2022-07-18T14:57:24Z",
// "content": "England Test captain Ben Stokes has taken the shock decision to retire from one-day internationals and will bow out with a final match at his home ground of Chester-le-Street on Tuesday.\r\nStokes has … [+2754 chars]"
// },
// {
// "source": {
// "id": null,
// "name": "Business Today"
// },
// "author": "Associated Press",
// "title": "Ethnic minority woman likely to be voted Indian president",
// "description": "If elected, Draupadi Murmu will become the first president from one of the country's tribes and the second-ever female president of India. She is a member of the Santal ethnic minority.",
// "url": "https://www.businesstoday.in/latest/trends/story/ethnic-minority-woman-likely-to-be-voted-indian-president-341887-2022-07-18",
// "urlToImage": "https://akm-img-a-in.tosshub.com/businesstoday/images/story/202207/ap22199218522648_0-sixteen_nine.jpg",
// "publishedAt": "2022-07-18T14:56:59Z",
// "content": "Lawmakers began voting Monday to choose India's next president in an election expected to be won by a woman from India's ruling Bharatiya Janata Party who hails from a minority ethnic community.\r\nThe… [+1762 chars]"
// },
// {
// "source": {
// "id": null,
// "name": "Business Today"
// },
// "author": "PTI",
// "title": "Debunking fake news not a crime: Amnesty India on Zubair case",
// "description": "Amnesty India said Zubair's continuing detention is an alarming reminder that ''you are not allowed to speak the truth in India''.",
// "url": "https://www.businesstoday.in/latest/trends/story/debunking-fake-news-not-a-crime-amnesty-india-on-zubair-case-341886-2022-07-18",
// "urlToImage": "https://akm-img-a-in.tosshub.com/businesstoday/images/story/202207/ezgif-sixteen_nine_249.jpg",
// "publishedAt": "2022-07-18T14:56:06Z",
// "content": "Human rights group Amnesty India has demanded immediate and unconditional release of fact-checking website Alt News co-founder Mohammed Zubair, saying debunking fake news is not a crime.\r\nSeparate FI… [+696 chars]"
// },
// {
// "source": {
// "id": "the-times-of-india",
// "name": "The Times of India"
// },
// "author": "Neel Kamal",
// "title": "Central govt constitutes committee to look various aspects of MSP, crop diversification, farmers say legal status missing",
// "description": "India News: BHAThINDA: After written assurance over 7 months ago, the central government has constituted a long awaited committee to look into aspects related to .",
// "url": "https://timesofindia.indiatimes.com/india/central-govt-constitutes-committee-to-look-various-aspects-of-msp-crop-diversification-farmers-say-legal-status-missing/articleshow/92962066.cms",
// "urlToImage": "https://static.toiimg.com/thumb/msid-47529300,width-1070,height-580,imgsize-110164,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
// "publishedAt": "2022-07-18T14:54:22Z",
// "content": ""
// },
// {
// "source": {
// "id": null,
// "name": "DW (English)"
// },
// "author": "Deutsche Welle (www.dw.com)",
// "title": "Why are weather forecasts not always accurate?",
// "description": "People in Germany braced for a predicted heat wave that didn't come last week. We all know weather forecasting systems can be faulty. But why? There are generally two different types of scenarios that come to mind when it comes to faulty weather prediction.\n\n…",
// "url": "https://www.dw.com/en/why-are-weather-forecasts-not-always-accurate/a-62513028",
// "urlToImage": "https://static.dw.com/image/60363006_6.jpg",
// "publishedAt": "2022-07-18T14:52:00Z",
// "content": "There are generally two different types of scenarios that come to mind when it comes to faulty weather prediction.\r\nThe first is perhaps the more mundane: Phone apps that tell you that it won't rain,… [+5256 chars]"
// },
// {
// "source": {
// "id": null,
// "name": "Frequentflyerbonuses.com"
// },
// "author": "Frequent Flyer Bonuses",
// "title": "July 18 Bonus Offer Highlight: United MileagePlus – Up to 2,500 bonus miles for shopping online",
// "description": "The Highlight: United MileagePlus Earn up to 2,500 Bonus MileagePlus Miles when you shop online or in store via the MileagePlus Shopping portal. Valid until Aug 15, 22 Click here for more details Tier 1 bonus: 500 miles for qualifying purchases of at least $1…",
// "url": "https://blog.frequentflyerbonuses.com/2022/07/july-18-bonus-offer-highlight-united-mileageplus-up-to-2500-bonus-miles-for-shopping-online.html",
// "urlToImage": "https://blog.frequentflyerbonuses.com/wp-content/uploads/2022/07/mileageplusshopbonus.png",
// "publishedAt": "2022-07-18T14:49:27Z",
// "content": "The Highlight:\r\nUnited MileagePlusEarn up to 2,500 Bonus MileagePlus Miles when you shop online or in store via the MileagePlus Shopping portal. Valid until Aug 15, 22 Click here for more detailsTier… [+3605 chars]"
// },
// {
// "source": {
// "id": null,
// "name": "Business Standard"
// },
// "author": "BS Web Team",
// "title": "Centre asks for screening of foreign travellers after 2nd case of monkeypox",
// "description": "A 31-year old man who arrived in Kerala last week from Dubai has tested positive for monkeypox, making it the second case in India",
// "url": "https://www.business-standard.com/article/current-affairs/centre-asks-for-screening-of-foreign-travellers-after-2nd-case-of-monkeypox-122071801263_1.html",
// "urlToImage": "https://bsmedia.business-standard.com/_media/bs/img/article/default/1220718/full-122071801263.jpg",
// "publishedAt": "2022-07-18T14:43:00Z",
// "content": "Centre on Monday asked for screening of all foreign travellers after second confirmed case of monkeypox.\r\n\"The Union Ministry of Health &amp; Family Welfare reviewed the functioning of health screeni… [+4520 chars]"
// },
// {
// "source": {
// "id": "the-times-of-india",
// "name": "The Times of India"
// },
// "author": "PTI",
// "title": "Determined to turn our form around at CWG: Savita",
// "description": "Indian women's hockey team skipper Savita is determined to stage a turnaround in the upcoming Birmingham Commonwealth Games after its mediocre outing in the FIH World Cup. India finished joint ninth with China at the World Cup.",
// "url": "https://timesofindia.indiatimes.com/sports/commonwealth-games-2022/indiabirmingham/determined-to-turn-our-form-around-at-cwg-savita/articleshow/92961978.cms",
// "urlToImage": "https://static.toiimg.com/thumb/msid-92961978,width-1070,height-580,imgsize-50030,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
// "publishedAt": "2022-07-18T14:43:00Z",
// "content": ""
// },
// {
// "source": {
// "id": null,
// "name": "Activistpost.com"
// },
// "author": "Activist Post",
// "title": "Food Lines Get Depressingly Long In The U.S. Again As Crops Fail All Over The Globe",
// "description": "By Michael Snyder It is happening again.  Lines at food banks all across the country are getting extremely long, and this is happening even though...\nFood Lines Get Depressingly Long In The U.S. Again As Crops Fail All Over The Globe",
// "url": "https://www.activistpost.com/2022/07/food-lines-get-depressingly-long-in-the-u-s-again-as-crops-fail-all-over-the-globe.html",
// "urlToImage": "https://www.activistpost.com/wp-content/uploads/2015/08/food-bank.jpg",
// "publishedAt": "2022-07-18T14:42:49Z",
// "content": "By Michael Snyder\r\nIt is happening again.  Lines at food banks all across the country are getting extremely long, and this is happening even though we are still only in the very early stages of the n… [+8506 chars]"
// },
// {
// "source": {
// "id": null,
// "name": "India Today"
// },
// "author": null,
// "title": "Goa Congress survives another test of unity for now",
// "description": "Goa Congress shifted five of its MLAs to Chennai over poaching fears. The party has survived another test of unity, at least for now.",
// "url": "https://www.indiatoday.in/india/story/goa-congress-survives-test-of-unity-defections-bjp-digambar-kamat-michael-lobo-1977091-2022-07-18",
// "urlToImage": "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202207/Collage_Maker-18-Jul-2022-08.0-647x363.jpeg?KOJx.fkIpr5juzbZG9WnRjny3Qcb4T68",
// "publishedAt": "2022-07-18T14:41:53Z",
// "content": "The Goa Congress is satisfied that it has been able to avoid yet another embarrassment and defection or resignation in the party. Political circles have been abuzz over the last couple of days after … [+3148 chars]"
// },
// {
// "source": {
// "id": null,
// "name": "The Indian Express"
// },
// "author": "Express News Service",
// "title": "SC stays Karnataka HC order against ACB: ‘Irrelevant’ in bail plea hearing",
// "description": "The issue of the ACB’s conduct had come up when the High Court was hearing the bail plea of a personal assistant of the Bengaluru (Urban) DC, who was recently arrested by the bureau.",
// "url": "https://indianexpress.com/article/cities/delhi/sc-stays-karnataka-hc-order-acb-bail-plea-8037428/",
// "urlToImage": "https://images.indianexpress.com/2022/07/supreme-court-sc-bloomberg-1200.jpg",
// "publishedAt": "2022-07-18T14:40:23Z",
// "content": "The Supreme Court Monday stayed a Karnataka High Court order censuring the state polices Anti-Corruption Bureau (ACB) and calling for service records of officers, pointing to irrelevant observations.… [+1998 chars]"
// },
// {
// "source": {
// "id": null,
// "name": "Business Today"
// },
// "author": "Business Today Desk",
// "title": "Govt advises strict health screening of foreign travellers after second monkeypox case",
// "description": "MoHFW asked the state officials, APHOs and PHOs to ensure strict health screening of all arriving international travellers which can minimise the risk of importation of monkeypox cases into the nation.",
// "url": "https://www.businesstoday.in/latest/trends/story/govt-advises-strict-health-screening-of-foreign-travellers-after-second-monkeypox-case-341884-2022-07-18",
// "urlToImage": "https://akm-img-a-in.tosshub.com/businesstoday/images/story/202207/monkeypox_1-sixteen_nine.jpg",
// "publishedAt": "2022-07-18T14:39:54Z",
// "content": "After India reported its second case of highly contagious Monkeypox virus, the central government, on Monday, advised strict health screening of international travellers arriving in the country at ai… [+1617 chars]"
// },
// {
// "source": {
// "id": null,
// "name": "U.Today"
// },
// "author": "U.Today",
// "title": "India's Central Bank Plans to Ban Crypto",
// "description": "India's FM claims that strong international collaboration is needed in order to implement cryptocurrency ban",
// "url": "https://u.today/indias-central-bank-plans-to-ban-crypto",
// "urlToImage": "https://u.today/sites/default/files/styles/twitter/public/2022-07/21804.jpg",
// "publishedAt": "2022-07-18T14:39:00Z",
// "content": "The Reserve Bank of India (RBI) is seeking a blanket ban on cryptocurrencies, according to a report published by Money Control.\r\nHowever, Finance Minister Nirmala Sitharaman has noted that the RBI wo… [+1457 chars]"
// },
// {
// "source": {
// "id": null,
// "name": "Statetimes.in"
// },
// "author": "Editor State Times",
// "title": "Modi institutionalised ‘capacity building’ for civil servants: Dr Jitendra",
// "description": "STATE TIMES NEWS NEW DELHI: Union Minister of State (Independent Charge) Science & Technology; Minister of State (Independent Charge) Earth Sciences; MoS PMO, Personnel, Public Grievances, Pensions, Atomic Energy and Space, Dr Jitendra Singh today said that P…",
// "url": "https://web.statetimes.in/modi-institutionalised-capacity-building-for-civil-servants-dr-jitendra/",
// "urlToImage": "https://web.statetimes.in/wp-content/uploads/2022/07/CBC-1.jpg",
// "publishedAt": "2022-07-18T14:38:52Z",
// "content": "STATE TIMES NEWS\r\nNEW DELHI: Union Minister of State (Independent Charge) Science &amp; Technology; Minister of State (Independent Charge) Earth Sciences; MoS PMO, Personnel, Public Grievances, Pensi… [+5699 chars]"
// },
// {
// "source": {
// "id": null,
// "name": "Aajtak.in"
// },
// "author": "दिनेश बोहरा",
// "title": "'हमें कोई साथ रहने नहीं देगा', लिखकर ट्रेन के आगे कूद गए प्रेमी-प्रेमिका",
// "description": "राजस्थान के बाड़मेर में एक प्रेमी जोड़े ने ट्रेन के आगे कूदकर अपनी जान दे दी. सुसाइड नोट में प्रेमी युगल ने लिखा है कि हमें कोई साथ नहीं रहने देगा, इसलिए हम अपनी मर्जी से आत्महत्या कर रहे हैं.",
// "url": "https://www.aajtak.in/rajasthan/story/couple-commits-suicide-by-jumping-in-front-of-train-in-barmer-rajasthan-lcl-1501740-2022-07-18",
// "urlToImage": "https://akm-img-a-in.tosshub.com/aajtak/images/story/202207/whatsapp_image_2022-07-18_at_6.37.53_pm-sixteen_nine.jpeg",
// "publishedAt": "2022-07-18T14:37:35Z",
// "content": "Copyright © 2022 Living Media India Limited. For reprint rights: Syndications Today"
// },
// {
// "source": {
// "id": null,
// "name": "Aajtak.in"
// },
// "author": "aajtak.in",
// "title": "'ये सिर्फ टोकन है', कहकर BJP की महिला नेता पर किया धारदार हथियार से हमला",
// "description": "मुंबई के मीरा रोड इलाके में डॉक्टर से मिलने जा रही बीजेपी की महिला नेता पर बाइक सवार दो युवकों ने जानलेवा कर दिया. धारदार हथियार से हमला करके दोनों आरोपी मौके से फरार हो गए.",
// "url": "https://www.aajtak.in/crime/news/story/bjp-woman-leader-who-was-going-to-meet-doctor-attacked-by-two-goons-with-sharp-weapons-in-mira-road-mumbai-maharashtra-lcl-1501337-2022-07-18",
// "urlToImage": "https://akm-img-a-in.tosshub.com/aajtak/images/story/202207/kkkk-sixteen_nine.jpg",
// "publishedAt": "2022-07-18T14:37:17Z",
// "content": "Copyright © 2022 Living Media India Limited. For reprint rights: Syndications Today"
// },
// {
// "source": {
// "id": null,
// "name": "Aajtak.in"
// },
// "author": "जितेंद्र बहादुर सिंह",
// "title": "सीएम केजरीवाल की स‍िंगापुर यात्रा में केंद्र का क्यों अड़ंगा?",
// "description": "दिल्ली के मुख्यमंत्री अरविंद केजरीवाल की सिंगापुर यात्रा का विवाद संसद तक पहुंच गया है. आम आदमी पार्टी के राज्यसभा सांसद संजय सिंह ने नोटिस देते हुए इस पर सरकार से जवाब की मांग की है. मुख्यमंत्री केजरीवाल को अगस्त में सिंगापुर में होने वाले वर्ल्ड सिटीज समिट …",
// "url": "https://www.aajtak.in/india/delhi/video/delhi-cm-arvind-kejriwal-central-government-of-bjp-not-allowing-singapore-tour-claims-aap-rdsv-1501766-2022-07-18",
// "urlToImage": "https://akm-img-a-in.tosshub.com/aajtak/images/video/202207/aap_delhi_mp-sixteen_nine.png",
// "publishedAt": "2022-07-18T14:37:05Z",
// "content": "Copyright © 2022 Living Media India Limited. For reprint rights: Syndications Today"
// },
// {
// "source": {
// "id": null,
// "name": "Aajtak.in"
// },
// "author": "मिलन शर्मा",
// "title": "भारत ने छुआ 200 करोड़ वैक्सीनेशन का आंकड़ा, अब आगे क्या है प्लान, जान‍िए",
// "description": "Corona Vaccination in India: कोरोना वैक्सीनेशन के मामले में भारत ने रविवार को एक नया इतिहास बनाया है. कोरोना से बचाव के लिए 18 जनवरी 2021 को शुरू हुआ टीकाकरण अभियान 200 करोड़ को पार कर गया है. ऐसा करने वाला भारत दुनिया का दूसरा देश बन गया है जहां टीकाकरण की स…",
// "url": "https://www.aajtak.in/coronavirus/video/india-touched-200-crore-vaccination-figure-now-what-is-next-plan-to-beat-corona-national-news-rdsv-1501765-2022-07-18",
// "urlToImage": "https://akm-img-a-in.tosshub.com/aajtak/images/video/202207/indian_vaccination_figure-sixteen_nine.png",
// "publishedAt": "2022-07-18T14:37:01Z",
// "content": "Corona Vaccination in India: . 18 2021 200 . . 16 2021 - . 21 2021 100 . . ."
// },
// {
// "source": {
// "id": null,
// "name": "Hotnews.ro"
// },
// "author": null,
// "title": "Cât de credibili sunt oamenii din jurul lui Zelenski? Cine este Ivan Bakanov, șeful serviciului de spionaj care a fost suspendat",
// "description": "Suspendarea lui Ivan Bakanov din funcția de șef al serviciului de spionaj și a Irinei Venediktova din funcția de procuror general a relansat întrebările cu privire la cercul de influență al președintelui ucrainean Volodimir Zelenski, relatează The Guardian. A…",
// "url": "https://www.hotnews.ro/stiri-razboi_ucraina-25684726-cat-credibili-sunt-oamenii-din-jurul-lui-zelenski-cine-este-ivan-bakanov-seful-serviciului-spionaj-care-fost-suspendat.htm",
// "urlToImage": "https://media.hotnews.ro/media_server1/image-2022-07-18-25684725-0-ivan-bakanov-prieten-zelenski-suspendat-din-functia-sef-sbu.jpg",
// "publishedAt": "2022-07-18T14:36:45Z",
// "content": "Suspendarea lui Ivan Bakanov din funcia de ef al serviciului de spionaj i a Irinei Venediktova din funcia de procuror general a relansat întrebrile cu privire la cercul de influen al preedintelui ucr… [+6337 chars]"
// },
// {
// "source": {
// "id": "the-times-of-india",
// "name": "The Times of India"
// },
// "author": "Bikash Singh",
// "title": "Assam: Opposition parties accuse each other of cross-voting in presidential polls",
// "description": "The Congress and the AIUDF had entered into an electoral alliance before the 2021 assembly polls however after polls both the parties parted ways.",
// "url": "https://economictimes.indiatimes.com/news/politics-and-nation/assam-opposition-parties-accuse-each-other-of-cross-voting-in-presidential-polls/articleshow/92961876.cms",
// "urlToImage": "https://img.etimg.com/thumb/msid-92961865,width-1070,height-580,imgsize-88016,overlay-economictimes/photo.jpg",
// "publishedAt": "2022-07-18T14:36:27Z",
// "content": "Opposition parties in Assam accuse each other of cross voting in presidential polls. All India United Democratic Front alleged around 20 Congress MLAS cross voted in favour of NDA presidential nomine… [+1105 chars]"
// },
// {
// "source": {
// "id": "the-times-of-india",
// "name": "The Times of India"
// },
// "author": "PTI",
// "title": "CBI busts NEET racket; 8 people, including mastermind, arrested",
// "description": "India News: NEW DELHI: The CBI has arrested eight people, including the suspected mastermind and paper solvers, allegedly impersonating real candidates to help th.",
// "url": "https://timesofindia.indiatimes.com/india/cbi-busts-neet-racket-8-people-including-mastermind-arrested/articleshow/92961873.cms",
// "urlToImage": "https://static.toiimg.com/thumb/msid-92961860,width-1070,height-580,imgsize-105934,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
// "publishedAt": "2022-07-18T14:36:06Z",
// "content": ""
// },
// {
// "source": {
// "id": null,
// "name": "CBS Sports"
// },
// "author": "Chris Towers",
// "title": "Fantasy Baseball Week 16 Trade values for Rotisserie and H2H: Time to acquire some second-half breakouts",
// "description": "Towers has one player for each position you should be targeting via trade",
// "url": "https://www.cbssports.com/fantasy/baseball/news/fantasy-baseball-week-16-trade-values-for-rotisserie-and-h2h-time-to-acquire-some-second-half-breakouts/",
// "urlToImage": "https://sportshub.cbsistatic.com/i/r/2022/07/05/3928e2dc-f1b1-4bcb-a769-91027556a820/thumbnail/1200x675/a7f64a16f66543ec7237ff922be03143/usatsi-rutschman-orioles.jpg",
// "publishedAt": "2022-07-18T14:35:40Z",
// "content": "With the All-Star break here, it's a perfect time to pause and take stock of how the season has gone. I did just that on Monday's episode of the Fantasy Baseball Today podcast, as I went through the … [+41757 chars]"
// },
// {
// "source": {
// "id": null,
// "name": "India Today"
// },
// "author": null,
// "title": "My son associated with PFI but innocent, says father of accused in Patna terror module case",
// "description": "The father of one of the accused, Sanaullah, whose name has cropped up in the Patna terror module case, said that his son was associated with the PFI but was not involved in anti-national activities.",
// "url": "https://www.indiatoday.in/india/story/patna-terror-module-case-bihar-police-raids-darbhanga-active-pfi-member-1977084-2022-07-18",
// "urlToImage": "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202207/delhi_police_rep-647x363.jpeg?dKTVYELi_hxg8QMbwqDc7RcyHi9hB.y6",
// "publishedAt": "2022-07-18T14:35:07Z",
// "content": "Bihar police probing the terror module busted in Phulwarisharif locality in Patna raided the house of one of the accused- Sanaullah in Darbhanga. The father of the accused said that his son was assoc… [+3318 chars]"
// },
// {
// "source": {
// "id": null,
// "name": "NDTV News"
// },
// "author": null,
// "title": "Set To Be President, Droupadi Murmu No Stranger To Being 1st At Something",
// "description": "Droupadi Murmu, BJP-led NDA candidate, is poised to win the presidential polls, though results will be out on July 21. NDTV visited her village in Odisha, tracing her story from when she first left for Bhubaneshwar",
// "url": "https://www.ndtv.com/india-news/set-to-be-president-droupadi-murmu-no-stranger-to-being-first-at-something-from-tribal-village-in-odisha-to-delhis-raisina-hill-3170148",
// "urlToImage": "https://c.ndtvimg.com/2022-06/sgu1ksjo_droupadi-murmu-in-parliament-pti-pic_650x400_24_June_22.jpg",
// "publishedAt": "2022-07-18T14:34:21Z",
// "content": "Rairangur (Odisha): Droupadi Murmu is no stranger to being the first at something. She is set to be the first tribal President of India, but it started when she was barely out of her teens when she l… [+2103 chars]"
// },
// {
// "source": {
// "id": null,
// "name": "Seeking Alpha"
// },
// "author": "Trend Investing",
// "title": "2022 Bear Market Bargains Series - Fisker Inc.",
// "description": "Fisker plans to have contract manufacturing factories in Europe with Magna International and in the USA with Foxconn. Read more about FSR stock here.",
// "url": "https://seekingalpha.com/article/4523950-2022-bear-market-bargains-series-fisker-inc",
// "urlToImage": "https://static.seekingalpha.com/cdn/s3/uploads/getty_images/1327212278/image_1327212278.jpg?io=getty-c-w750",
// "publishedAt": "2022-07-18T14:33:24Z",
// "content": "studio-fi\r\nThis article first appeared in Trend Investing on June 16, 2022 when Fisker was trading at US$8.74; but has been updated for this article.\r\n Today's article looks at Fisker Inc.'s 2022 key… [+13183 chars]"
// },
// {
// "source": {
// "id": "espn-cric-info",
// "name": "ESPN Cric Info"
// },
// "author": "ESPNcricinfo staff",
// "title": "Rahul Dravid: India were 'exceptional' to restrict England 'on a good wicket'",
// "description": "Head coach impressed with the team for coming up with a short-ball strategy and sticking with it",
// "url": "https://www.espncricinfo.com/story/eng-vs-ind-2022-3rd-odi-rahul-dravid-india-were-exceptional-to-restrict-england-on-a-good-wicket-1325329",
// "urlToImage": "https://img1.hscicdn.com/image/upload/f_auto/lsci/db/PICTURES/CMS/335900/335928.6.jpg",
// "publishedAt": "2022-07-18T14:33:02Z",
// "content": "Hardik Pandya: I try to stay one step ahead and outsmart the batter"
// },
// {
// "source": {
// "id": null,
// "name": "Daily Mail"
// },
// "author": "Elmira Tanatarova",
// "title": "Binky Felstead flies to Corfu as she prepares to marry Max Darnton",
// "description": "The former Made In Chelsea star, 32, boarded a plane on Monday morning as she carried her bridal gown in a garment bag.",
// "url": "https://www.dailymail.co.uk/tvshowbiz/article-11024745/Binky-Felstead-flies-Corfu-prepares-marry-Max-Darnton.html",
// "urlToImage": "https://i.dailymail.co.uk/1s/2022/07/18/14/60402343-0-image-a-37_1658152761607.jpg",
// "publishedAt": "2022-07-18T14:33:02Z",
// "content": "Binky Felstead is en route to Corfu for her second wedding ceremony to husband Max Darnton after she previously delayed her overseas nuptials due to Covid.\r\nThe former Made In Chelsea star, 32, board… [+4328 chars]"
// },
// {
// "source": {
// "id": null,
// "name": "GSMArena.com"
// },
// "author": "Peter",
// "title": "Oppo Pad Air is launching in India later this week, Oppo Enco X2 to follow next week",
// "description": "Oppo is launching its first tablet in India as well as a new pair of high-end TWS buds. Well, “new” for the market – the tablet was announced in May, the headset back in February. Both will become available in India over the next few days.\n\nThe Oppo Pad Air w…",
// "url": "https://www.gsmarena.com/oppo_pad_air_is_launching_in_india_later_this_week_oppo_enco_x2_to_follow_next_week-news-55097.php",
// "urlToImage": "https://fdn.gsmarena.com/imgroot/news/22/07/oppo-pad-air-enco-x2-launch-in-india/-952x498w6/gsmarena_000.jpg",
// "publishedAt": "2022-07-18T14:33:01Z",
// "content": "Oppo is launching its first tablet in India as well as a new pair of high-end TWS buds. Well, new for the market the tablet was announced in May, the headset back in February. Both will become availa… [+1440 chars]"
// },
// {
// "source": {
// "id": null,
// "name": "Comicsbeat.com"
// },
// "author": "Deanna Destito",
// "title": "INTERVIEW: The creative team behind Vault’s END AFTER END discusses the afterlife",
// "description": "Vault’s End After End is slated to debut this summer and the creative team chatted with us about the new fantasy series",
// "url": "https://www.comicsbeat.com/interview-creative-team-vault-end-after-end/",
// "urlToImage": "https://i2.wp.com/www.comicsbeat.com/wp-content/uploads/2022/07/EAE_1_Cvr_B-cropped.jpg?fit=1200%2C650&ssl=1",
// "publishedAt": "2022-07-18T14:30:47Z",
// "content": "There are a few different interpretations of the afterlife. Some offer an elaborate, spiritual bliss while others are much bleaker and final. In Vaults End After End, writersTimDaniel and David Andry… [+11409 chars]"
// },
// {
// "source": {
// "id": null,
// "name": "Yahoo Entertainment"
// },
// "author": "PR Newswire",
// "title": "At 14.65% CAGR, Global Epigenetics Market Size & Share to Surpass US$ 3 Billion By 2028 | Epigenetics Market Industry Trends, Share, Growth, Value, Analysis & Forecast Report By Zion Market Research",
// "description": "As per Zion Market Research study, The global epigenetics market was valued at around $ 0.9 billion and is expected to grow at a CAGR of 14.65% by 2028 and...",
// "url": "https://finance.yahoo.com/news/14-65-cagr-global-epigenetics-143000659.html",
// "urlToImage": "https://s.yimg.com/uu/api/res/1.2/0CElIDTDgUmyV0hPttOSfg--~B/aD0xNTM7dz0zMDA7YXBwaWQ9eXRhY2h5b24-/https://media.zenfs.com/en/prnewswire.com/68ba90e1e6229a466a2096907e1107c8",
// "publishedAt": "2022-07-18T14:30:00Z",
// "content": "NEW YORK, July 18, 2022 /PRNewswire/ -- As per Zion Market Research study, The global epigenetics market was valued at around $ 0.9 billion and is expected to grow at a CAGR of 14.65% by 2028 and gen… [+16186 chars]"
// },
// {
// "source": {
// "id": null,
// "name": "Yahoo Entertainment"
// },
// "author": "Future Market Insights Global and Consulting Pvt. Ltd.",
// "title": "Decorative Paints Market Growing at a Phenomenal Pace Surpassing US$ 87.8 Bn by 2031 witnessing a growth of 4.3% CAGR | Future Market Insights, Inc.",
// "description": "Demand for decorative paints in North America is expected to grow at a 4.2% CAGR through 2031. Europe decorative paints market is estimated to expand at 3.8%...",
// "url": "https://finance.yahoo.com/news/decorative-paints-market-growing-phenomenal-143000262.html",
// "urlToImage": "https://s.yimg.com/ny/api/res/1.2/wuL5jlnr3fDG4b08nyjJEw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD03MzA-/https://s.yimg.com/uu/api/res/1.2/ndb4.qtw70Zd7CIRExz5hA--~B/aD05MTI7dz0xNTAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en/globenewswire.com/433e6507c3cf94b90d194380426a7629",
// "publishedAt": "2022-07-18T14:30:00Z",
// "content": "Future Market Insights Global and Consulting Pvt. Ltd.\r\nDemand for decorative paints in North America is expected to grow at a 4.2% CAGR through 2031. Europe decorative paints market is estimated to … [+8780 chars]"
// },
// {
// "source": {
// "id": null,
// "name": "PRNewswire"
// },
// "author": null,
// "title": "Veterinary Lasers Market Size Worth $160.8 Million By 2030: Grand View Research, Inc.",
// "description": "SAN FRANCISCO, July 18, 2022 /PRNewswire/ -- The global veterinary lasers market size is expected to reach USD 160.8 million by 2030, according to a new report by Grand View Research, Inc. The market is expected to expand at a CAGR of 7.7% from 2022 to 2030. …",
// "url": "https://www.prnewswire.com/news-releases/veterinary-lasers-market-size-worth-160-8-million-by-2030-grand-view-research-inc-301588066.html",
// "urlToImage": "https://mma.prnewswire.com/media/661327/Grand_View_Research_Logo.jpg?p=facebook",
// "publishedAt": "2022-07-18T14:30:00Z",
// "content": "SAN FRANCISCO, July 18, 2022 /PRNewswire/ -- The global veterinary lasers market size is expected to reach USD 160.8 million by 2030, according to a new report by Grand View Research, Inc. The market… [+8268 chars]"
// },
// {
// "source": {
// "id": "the-times-of-india",
// "name": "The Times of India"
// },
// "author": null,
// "title": "Actors who have turned into entrepreneurs",
// "description": "Several Bollywood celebrities have not just given their audience good cinema, but have also been taking up initiatives and introducing new ideas for the betterment of society and also to enhance their net worth. We bring to you 8 such celebrities who have mad…",
// "url": "https://timesofindia.indiatimes.com/entertainment/hindi/bollywood/news/deepika-padukone-to-shefali-shah-bollywood-actors-who-have-turned-into-successful-entrepreneurs/photostory/92961144.cms",
// "urlToImage": "https://static.toiimg.com/photo/92961318.cms",
// "publishedAt": "2022-07-18T14:30:00Z",
// "content": "One of the most celebrated and successful couples in Bollywood, Ali Fazal and Richa Chadha started their own production house Pushing Buttons last year. Their maiden project as producers is called 'G… [+446 chars]"
// },
// {
// "source": {
// "id": null,
// "name": "PRNewswire"
// },
// "author": null,
// "title": "At 14.65% CAGR, Global Epigenetics Market Size & Share to Surpass US$ 3 Billion By 2028 | Epigenetics Market Industry Trends, Share, Growth, Value, Analysis & Forecast Report By Zion Market Research",
// "description": "NEW YORK, July 18, 2022 /PRNewswire/ -- As per Zion Market Research study, The global epigenetics market was valued at around $ 0.9 billion and is expected to grow at a CAGR of 14.65% by 2028 and generate a revenue of over $3 billion during the forecast perio…",
// "url": "https://www.prnewswire.com/news-releases/at-14-65-cagr-global-epigenetics-market-size--share-to-surpass-us-3-billion-by-2028--epigenetics-market-industry-trends-share-growth-value-analysis--forecast-report-by-zion-market-research-301588213.html",
// "urlToImage": "https://mma.prnewswire.com/media/1605489/Zion_Market_Research_Logo.jpg?p=facebook",
// "publishedAt": "2022-07-18T14:30:00Z",
// "content": "NEW YORK, July 18, 2022 /PRNewswire/ -- As per Zion Market Research study, The global epigenetics market was valued at around $ 0.9 billion and is expected to grow at a CAGR of 14.65% by 2028 and gen… [+15768 chars]"
// },
// {
// "source": {
// "id": null,
// "name": "Yahoo Entertainment"
// },
// "author": "PR Newswire",
// "title": "Veterinary Lasers Market Size Worth $160.8 Million By 2030: Grand View Research, Inc.",
// "description": "The global veterinary lasers market size is expected to reach USD 160.8 million by 2030, according to a new report by Grand View Research, Inc. The market is...",
// "url": "https://finance.yahoo.com/news/veterinary-lasers-market-size-worth-143000861.html",
// "urlToImage": "https://s.yimg.com/uu/api/res/1.2/5lsttlaWxMPFg4rHeGFsTw--~B/aD0xMjE7dz00MDA7YXBwaWQ9eXRhY2h5b24-/https://media.zenfs.com/en/prnewswire.com/84a909d2dfa86689f31c95be1bfc0ba8",
// "publishedAt": "2022-07-18T14:30:00Z",
// "content": "SAN FRANCISCO, July 18, 2022 /PRNewswire/ -- The global veterinary lasers market size is expected to reach USD 160.8 million by 2030, according to a new report by Grand View Research, Inc. The market… [+8331 chars]"
// },
// {
// "source": {
// "id": null,
// "name": "NDTV News"
// },
// "author": "Asian News International",
// "title": "\"Future Of ODIs Uncertain\": Ex-India Star Comments Post Stokes' Retirement",
// "description": "Ben Stokes has played 104 ODI matches and is set to end his international career in the ODI format on his home ground in Durham.",
// "url": "https://sports.ndtv.com/cricket/future-of-odis-looks-uncertain-ex-india-stars-bold-prediction-after-ben-stokes-retirement-3170132",
// "urlToImage": "https://c.ndtvimg.com/2019-12/cb1ll6h8_ben-stokes-afp_650x400_24_December_19.jpg?im=FeatureCrop,algorithm=dnn,width=1200,height=675",
// "publishedAt": "2022-07-18T14:27:51Z",
// "content": "Former Indian spinner Pragyan Ojha feels the future of One Day International (ODI) cricket looks uncertain as compared to Tests, after England all-rounder Ben Stokes announced that he will retire fro… [+1438 chars]"
// },
// {
// "source": {
// "id": "the-times-of-india",
// "name": "The Times of India"
// },
// "author": "ET Online",
// "title": "Monkeypox in India: Govt mandates screening of foreign travellers after 2 confirmed cases",
// "description": "The Centre has asked state, airport & port health officers to ensure strict health screening of all international travellers to minimize the risk of importation of Monkeypox Disease.",
// "url": "https://economictimes.indiatimes.com/news/india/monkeypox-in-india-govt-mandates-screening-of-foreign-travellers-after-2-confirmed-cases/articleshow/92961704.cms",
// "urlToImage": "https://img.etimg.com/thumb/msid-92961708,width-1070,height-580,imgsize-54598,overlay-economictimes/photo.jpg",
// "publishedAt": "2022-07-18T14:27:11Z",
// "content": "The Centre on Monday asked for a strict health screening of all foreign travellers at airports amid an increasing risk of monkeypox in the country.\r\nAs per the ministry of health &amp; family welfare… [+629 chars]"
// },
// {
// "source": {
// "id": null,
// "name": "PRNewswire"
// },
// "author": null,
// "title": "Desktop Virtualization Market size worth $ 128.5 Billion, Globally, by 2030 at 24.74% CAGR: Verified Market Research®",
// "description": "Desktop virtualization solutions give employees a consistent and secure way to work from anywhere, decreasing the expensive hardware in the business, lowering hardware maintenance costs, and minimizing system complexity and compatibility issues. JERSEY CITY, …",
// "url": "https://www.prnewswire.com/news-releases/desktop-virtualization-market-size-worth--128-5-billion-globally-by-2030-at-24-74-cagr-verified-market-research-301588218.html",
// "urlToImage": "https://mma.prnewswire.com/media/1315349/Verified_Market_Research_Logo.jpg?p=facebook",
// "publishedAt": "2022-07-18T14:27:00Z",
// "content": "Desktop virtualization solutions give employees a consistent and secure way to work from anywhere, decreasing the expensive hardware in the business, lowering hardware maintenance costs, and minimizi… [+7034 chars]"
// },
// {
// "source": {
// "id": null,
// "name": "India Today"
// },
// "author": null,
// "title": "Rainfall, boulders, thin crowds at shrine: Devotees share heartwarming stories of Badrinath yatra",
// "description": "Meet devotees from five states of India who dared the rains, landslides, boulders rolling down the mountains to reach the Badrinath shrine.",
// "url": "https://www.indiatoday.in/india/story/rainfall-boulders-thin-crowds-at-shrine-devotees-share-heartwarming-stories-of-badrinath-yatra-1977088-2022-07-18",
// "urlToImage": "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202207/UK1__6__0-647x363.jpeg?dD.DHC7LkGcgj9QEi5gRAyP3_izYW5vE",
// "publishedAt": "2022-07-18T14:26:53Z",
// "content": "Landslides, rainfall and devotees braving all odds to complete the Char Dham yatra is a common sight in the Land of Gods this time of the year.\r\nEven after multiple warnings by the India Meteorologic… [+5061 chars]"
// },
// {
// "source": {
// "id": null,
// "name": "Mediafax.ro"
// },
// "author": "Alexandru Stan",
// "title": "Omenirea se confruntă cu o „sinucidere colectivă” din cauza crizei climatice, avertizează şeful ONU",
// "description": "António Guterres le spune guvernelor că „jumătate din populaţia umană la nivel global este în pericol”, în timp ce ţările se luptă cu căldura extremă",
// "url": "https://www.mediafax.ro/stiinta-sanatate/omenirea-se-confrunta-cu-o-sinucidere-colectiva-din-cauza-crizei-climatice-avertizeaza-seful-onu-21011790",
// "urlToImage": "https://storage0.dms.mpinteractiv.ro/media/1/1/7627/21011790/1/fara-titlu.jpg?width=640",
// "publishedAt": "2022-07-18T14:25:56Z",
// "content": "Incendiile i valurile de cldur care fac ravagii arat c omenirea se confrunt cu o sinucidere colectiv, a avertizat secretarul general al ONU, în timp ce guvernele din întreaga lume se strduiesc s prot… [+2524 chars]"
// },
// {
// "source": {
// "id": null,
// "name": "New York Times"
// },
// "author": "Ellie Pithers",
// "title": "In Paris, a Laid-Back Birthday at Rose Kitchen",
// "description": "On the terrace of her restaurant in the city’s Marché des Enfants Rouges, Rose Chalalai Singh served a crunchy mango salad, Thai curry and plenty of dessert.",
// "url": "https://www.nytimes.com/2022/07/18/t-magazine/rose-chalalai-singh-party.html",
// "urlToImage": "https://static01.nyt.com/images/2022/07/21/t-magazine/21tmag-singh-slide-R1Y8-copy/21tmag-singh-slide-R1Y8-copy-facebookJumbo.jpg",
// "publishedAt": "2022-07-18T14:24:31Z",
// "content": "Rose Chalalai Singhs motto? Never eat alone. The Bangkok-born chef inherited her conviviality from her businessman father, who, she says, has never had a meal solus in his entire life. The minute the… [+8503 chars]"
// },
// {
// "source": {
// "id": "reuters",
// "name": "Reuters"
// },
// "author": null,
// "title": "Tech, metal stocks lift Indian shares to highest in more than a month - Reuters India",
// "description": "Indian shares rose more than 1% to hit their highest in over a month as investors scooped up beaten-down technology and metal stocks, while the rupee plumbed new lows against the dollar earlier in the session.",
// "url": "https://www.reuters.com/world/india/tech-metal-stocks-lift-indian-shares-highest-more-than-month-2022-07-18/",
// "urlToImage": "https://www.reuters.com/resizer/1o3yBGdN4NLOe5wvYM1EltN1alM=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/EFGMTS3Y4JPKJN7YTA3AH3IKVE.jpg",
// "publishedAt": "2022-07-18T14:19:00Z",
// "content": "BENGALURU, July 18 (Reuters) - Indian shares rose more than 1% to hit their highest in over a month as investors scooped up beaten-down technology and metal stocks, while the rupee plumbed new lows a… [+2114 chars]"
// },
// {
// "source": {
// "id": null,
// "name": "Nerdist"
// },
// "author": "Melissa T. Miller",
// "title": "This Antique Vampire Slaying Kit Costs a Cool $15,000",
// "description": "An anonymous buyer won the auction for an antique vampire slaying kit containing a wooden stake, crucifixes, and other items.\nThe post This Antique Vampire Slaying Kit Costs a Cool $15,000  appeared first on Nerdist.",
// "url": "https://nerdist.com/article/antique-vampire-slaying-kit-sells-for-15000-dollars-at-auction/",
// "urlToImage": "https://legendary-digital-network-assets.s3.amazonaws.com/wp-content/uploads/2022/07/15124450/vampire.png",
// "publishedAt": "2022-07-18T14:18:21Z",
// "content": "If you’ve always wanted to be a member of Buffy the Vampire Slayer‘s Scooby Gang, you just missed the chance to pick up some supplies of your own. British auction house Hansons sold a real-life vampi… [+1724 chars]"
// },
// {
// "source": {
// "id": null,
// "name": "Business Standard"
// },
// "author": "Bhaskar Dutta",
// "title": "Rupee closes just 2 paise shy of 80 against US dollar as oil prices rise",
// "description": "Crude oil prices jumped on Monday as US President Joe Biden's talks with West Asian countries failed to culminate in an agreement to increase output",
// "url": "https://www.business-standard.com/article/markets/rupee-closes-just-2-paise-shy-of-80-against-us-dollar-as-oil-prices-rise-122071801181_1.html",
// "urlToImage": "https://bsmedia.business-standard.com/_media/bs/img/article/2022-02/06/full/1644169155-2037.jpg",
// "publishedAt": "2022-07-18T14:18:00Z",
// "content": "The rupee on Monday settled just shy of the 80 per US dollar mark, closing at 79.98 against 79.88 per dollar on Friday, as crude oil prices rose sharply, worsening the outlook on India’s current acco… [+3191 chars]"
// },
// {
// "source": {
// "id": null,
// "name": "NDTV News"
// },
// "author": null,
// "title": "Neha Dhupia Is Living Her Best Life In Maldives. See Pics",
// "description": "Neha Dhupia checked into Maldives a few days ago",
// "url": "https://www.ndtv.com/entertainment/neha-dhupia-is-living-her-best-life-in-maldives-see-pics-3170084",
// "urlToImage": "https://c.ndtvimg.com/2022-07/45gv2pl8_neha-dhupia_625x300_18_July_22.jpg",
// "publishedAt": "2022-07-18T14:17:50Z",
// "content": "Neha Dhupia shared this image. (courtesy: nehadhupia)\r\nNew Delhi: Neha Dhupia is holidaying at a celeb-approved location, pictures from which she shared on her Instagram profile on Monday. Any guesse… [+1268 chars]"
// },
// {
// "source": {
// "id": null,
// "name": "The Boston Globe"
// },
// "author": "Kate Selig",
// "title": "Study finds 2,800 deaths in 2019 in Massachusetts connected to air pollution",
// "description": "The researchers broke down their findings for each town and city in the state, finding that the harmful effects of air pollution spare no community.",
// "url": "https://www.bostonglobe.com/2022/07/18/science/study-finds-2800-deaths-2019-massachusetts-connected-air-pollution/",
// "urlToImage": "https://bostonglobe-prod.cdn.arcpublishing.com/resizer/IE9-8PJBOMdJ7Eq-KMfgH9cCvvs=/506x0/cloudfront-us-east-1.images.arcpublishing.com/bostonglobe/CELOSLEDAW7FGTS5MMTLXHAY7M.JPG",
// "publishedAt": "2022-07-18T14:15:43Z",
// "content": "The researchers also estimated that air pollution caused about 15,000 cases of pediatric asthma and about 300 underweight births in 2019, and the cumulative impact on childhood cognitive development … [+6856 chars]"
// },
// {
// "source": {
// "id": null,
// "name": "PRNewswire"
// },
// "author": null,
// "title": "Global Edge Data Centers Market Report 2022: A $9.3 Billion Market in 2022 - Adoption of Edge Computing in Smart Cities to Drive Demand",
// "description": "DUBLIN, July 18, 2022 /PRNewswire/ -- The \"Edge Data Centers - Global Market Trajectory & Analytics\" report has been added to ResearchAndMarkets.com's offering. Global Edge Data Centers Market to Reach US$18.1 Billion by the Year 2026 The global market for Ed…",
// "url": "https://www.prnewswire.com/news-releases/global-edge-data-centers-market-report-2022-a-9-3-billion-market-in-2022---adoption-of-edge-computing-in-smart-cities-to-drive-demand-301588101.html",
// "urlToImage": "https://mma.prnewswire.com/media/539438/Research_and_Markets_Logo.jpg?p=facebook",
// "publishedAt": "2022-07-18T14:15:00Z",
// "content": "DUBLIN, July 18, 2022 /PRNewswire/ -- The \"Edge Data Centers - Global Market Trajectory &amp; Analytics\" report has been added to ResearchAndMarkets.com's offering.\r\nGlobal Edge Data Centers Market t… [+8222 chars]"
// },
// {
// "source": {
// "id": null,
// "name": "Yahoo Entertainment"
// },
// "author": "Verified Market Research",
// "title": "Medical Refrigerators Market size worth $ 5.10 Billion, Globally, by 2030 at 5.3% CAGR: Verified Market Research®",
// "description": "The factors like increasing demand for blood and blood components, technological advancements in medical refrigerators, a growing emphasis on temperature...",
// "url": "https://finance.yahoo.com/news/medical-refrigerators-market-size-worth-141500200.html",
// "urlToImage": "https://s.yimg.com/ny/api/res/1.2/3I14zEfRaakodadAjQRRhQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD0zMzE-/https://s.yimg.com/uu/api/res/1.2/ZS.jog_HkC.DA9dNL1S2yw--~B/aD0zNTM7dz0xMjgwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en/globenewswire.com/cfdd45ca57a438873d3bb04a02f5787a",
// "publishedAt": "2022-07-18T14:15:00Z",
// "content": "The factors like increasing demand for blood and blood components, technological advancements in medical refrigerators, a growing emphasis on temperature uniformity and energy efficiency is expected … [+7688 chars]"
// },
// {
// "source": {
// "id": "the-times-of-india",
// "name": "The Times of India"
// },
// "author": "Saurabh Sinha",
// "title": "Air safety: DGCA identifies causes for spurt in snags",
// "description": "Incorrect diagnosis of defects and lack of manpower to certify aircraft as fit before being released for flights are among the key causes identified by the Directorate General of Civil Aviation (DGCA) for the spurt in snags being reported by Indian carriers i…",
// "url": "https://timesofindia.indiatimes.com/business/india-business/air-safety-dgca-identifies-causes-for-spurt-in-snags-sets-july-28-deadline-for-airlines-to-find-solutions/articleshow/92961501.cms",
// "urlToImage": "https://static.toiimg.com/thumb/msid-92961505,width-1070,height-580,imgsize-18870,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
// "publishedAt": "2022-07-18T14:14:41Z",
// "content": "Burning smell in cabin: AI Express Calicut-Dubai flight safely diverts to MuscatAir India Express Calicut-Dubai flight on Saturday diverted safely to Muscat after burning smell came from a vent in th… [+172 chars]"
// },
// {
// "source": {
// "id": "the-times-of-india",
// "name": "The Times of India"
// },
// "author": "Julie Mariappan",
// "title": "Cauvery Water Management Authority to discuss Karnataka’s Mekedatu dam plan on July 22",
// "description": "India News: CHENNAI: The Cauvery Water Management Authority has convened a meeting on July 22 after putting off the meeting twice.",
// "url": "https://timesofindia.indiatimes.com/city/chennai/cauvery-water-management-authority-to-discuss-karnatakas-mekedatu-dam-plan-on-july-22/articleshow/92961518.cms",
// "urlToImage": "https://static.toiimg.com/thumb/msid-92961507,width-1070,height-580,imgsize-95094,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
// "publishedAt": "2022-07-18T14:14:35Z",
// "content": ""
// },
// {
// "source": {
// "id": null,
// "name": "Yahoo Entertainment"
// },
// "author": "Facts & Factors",
// "title": "Statistical Report: Global Directed Energy Weapons Market Size & Share to Surpass USD 11311.29 Million by 2028, at a 18.10% CAGR - Predicts Facts & Factors",
// "description": "[221+ Pages Report] According to a market research study published by Facts and Factors, the demand analysis of Global Directed Energy Weapons Market size & ...",
// "url": "https://finance.yahoo.com/news/statistical-report-global-directed-energy-141400249.html",
// "urlToImage": "https://s.yimg.com/uu/api/res/1.2/SFEkX9KMWye8ynbaIE9kHg--~B/aD0yMzM7dz04NDI7YXBwaWQ9eXRhY2h5b24-/https://media.zenfs.com/en/globenewswire.com/2264bb3517be68630a3c0ab7e2129ace",
// "publishedAt": "2022-07-18T14:14:00Z",
// "content": "[221+ Pages Report] According to a market research study published by Facts and Factors, the demand analysis of Global Directed Energy Weapons Market size &amp; share revenue was valued at around USD… [+18283 chars]"
// },
// {
// "source": {
// "id": null,
// "name": "India Today"
// },
// "author": null,
// "title": "Aviation regulator cracks whip on airlines after repeated incidents of technical gliches",
// "description": "The Directorate General of Civil Aviation has mandated that all flights need to be released by certified staff having an AME Category B1/B2 license.",
// "url": "https://www.indiatoday.in/india/story/aviation-regulator-dgca-aircraft-malfunction-mandatory-check-certified-maintenance-engineer-1977074-2022-07-18",
// "urlToImage": "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202207/Collage_Maker-18-Jul-2022-07.3-647x363.jpeg?rFpfqmD9ctAtagEMtBn2PsBgjnrsiwru",
// "publishedAt": "2022-07-18T14:12:42Z",
// "content": "The Directorate General of Civil Aviation (DGCA) on Monday tightened regulations for airlines after repeated incidents of technical malfunctions in aircraft.\r\nThe aviation regulator has now mandated … [+948 chars]"
// },
// {
// "source": {
// "id": null,
// "name": "Livemint"
// },
// "author": "Livemint",
// "title": "DSP Investment Managers launches Nifty Midcap 150 Quality 50 Index Fund",
// "description": "As the name suggests, the scheme will replicate the Nifty Midcap 150 Quality 50 Index which comprises 50 companies from the parent Nifty Midcap 150 Index based on ‘Quality Scores’ using metrics like return on equity, financial leverage (except for financial s…",
// "url": "https://www.livemint.com/money/personal-finance/dsp-investment-managers-launches-nifty-midcap-150-quality-50-index-fund-11658152780964.html",
// "urlToImage": "https://images.livemint.com/img/2022/07/18/600x338/mf_1658153526782_1658153527018_1658153527018.jpg",
// "publishedAt": "2022-07-18T14:12:40Z",
// "content": "DSP Investment Managers has announced the launch of DSP Nifty Midcap 150 Quality 50 Index Fund. The new fund offer opens on July 18 and closes on July 29. As the name suggests, the scheme will replic… [+2191 chars]"
// },
// {
// "source": {
// "id": null,
// "name": "NDTV News"
// },
// "author": "Team Careers360",
// "title": "NEET Rank Predictor 2022 Launched; Check Estimated Rank In NEET UG",
// "description": "Candidates who are worried about their rank in the medical entrance exam can check the \"NEET Rank Predictor 2022\" launched by Careers360. The NEET rank predictor tool helps the candidate calculate the estimated rank in the NEET exam.",
// "url": "https://www.ndtv.com/education/neet-rank-predictor-2022-launched-heres-how-to-predict-estimated-rank-in-neet-ug-exam",
// "urlToImage": "https://cache.careers360.mobi/media/article_images/2022/7/18/neet-rank-predictor.jpg",
// "publishedAt": "2022-07-18T14:11:51Z",
// "content": "New Delhi:The National Eligibility cum Entrance Test (NEET) 2022 was held on July 17. The National Testing Agency (NTA) conducted the NEET UG 2022 exam in the offline mode as pen and paper-based at 5… [+2173 chars]"
// },
// {
// "source": {
// "id": null,
// "name": "Fair Observer"
// },
// "author": "John Feffer",
// "title": "China Will Decide Who Wins the Fight: Russia or the West",
// "description": "In its attempt to swallow Ukraine whole, Russia has so far managed to bite off only the eastern Donbas region and a portion of its southern coast. The rest of the country remains independent, with its capital Kyiv intact. No one knows how this meal will end. …",
// "url": "https://www.fairobserver.com/politics/china-will-decide-who-wins-the-fight-russia-or-the-west/",
// "urlToImage": "https://www.fairobserver.com/wp-content/uploads/2022/07/russia-china-usa.jpg",
// "publishedAt": "2022-07-18T14:10:23Z",
// "content": "In its attempt to swallow Ukraine whole, Russia has so far managed to bite off only the eastern Donbas region and a portion of its southern coast. The rest of the country remains independent, with it… [+15048 chars]"
// },
// {
// "source": {
// "id": null,
// "name": "Business Standard"
// },
// "author": "Bhaskar Dutta",
// "title": "YES Bank plans to invest up to Rs 350 crore for 20% stake in JC Flowers ARC",
// "description": "JC Flowers has been named as the base bidder for bad loans worth Rs 48,000 crore of YES Bank",
// "url": "https://www.business-standard.com/article/finance/yes-bank-plans-to-invest-up-to-rs-350-crore-for-20-stake-in-jc-flowers-arc-122071801173_1.html",
// "urlToImage": "https://bsmedia.business-standard.com/_media/bs/img/article/2021-07/23/full/1627038610-2917.jpg",
// "publishedAt": "2022-07-18T14:10:00Z",
// "content": "Private sector lender YES Bank plans to invest up to Rs 350 crore for a 20 per cent stake in asset reconstruction company (ARC) JC Flowers, the bank’s managing director (MD) and chief executive offic… [+2787 chars]"
// },
// {
// "source": {
// "id": null,
// "name": "Business Wire"
// },
// "author": null,
// "title": "Emerson Joins RE100, Targeting 100% Renewable Electricity by 2030",
// "description": "ST. LOUIS--(BUSINESS WIRE)--Emerson (NYSE: EMR), a global leader in technology and software solutions, has joined RE100, a global initiative bringing together businesses committed to 100% renewable electricity. This alignment with other sustainability pioneer…",
// "url": "https://www.businesswire.com/news/home/20220713005856/en/Emerson-Joins-RE100-Targeting-100-Renewable-Electricity-by-2030",
// "urlToImage": "https://mms.businesswire.com/media/20220713005856/en/1073272/23/Emerson_Logo.jpg",
// "publishedAt": "2022-07-18T14:09:55Z",
// "content": "ST. LOUIS--(BUSINESS WIRE)--Emerson (NYSE: EMR), a global leader in technology and software solutions, has joined RE100, a global initiative bringing together businesses committed to 100% renewable e… [+3514 chars]"
// },
// {
// "source": {
// "id": null,
// "name": "Business Wire"
// },
// "author": null,
// "title": "Atlan Pioneering Active Metadata with a Brand New Look and Features",
// "description": "SAN FRANCISCO--(BUSINESS WIRE)--Atlan, the active metadata platform for modern data teams, today announced that it has launched a new version of its product built around active metadata. With this, Atlan is pioneering a new idea of data discovery, cataloging,…",
// "url": "https://www.businesswire.com/news/home/20220718005321/en/Atlan-Pioneering-Active-Metadata-with-a-Brand-New-Look-and-Features",
// "urlToImage": "https://mms.businesswire.com/media/20220718005321/en/829587/23/atlan-logo-blue-bg-white.jpg",
// "publishedAt": "2022-07-18T14:09:55Z",
// "content": "SAN FRANCISCO--(BUSINESS WIRE)--Atlan, the active metadata platform for modern data teams, today announced that it has launched a new version of its product built around active metadata. With this, A… [+4717 chars]"
// },
// {
// "source": {
// "id": null,
// "name": "NDTV News"
// },
// "author": "NDTV Sports Desk",
// "title": "\"Do Not Miss\": Indian Dressing Room Celebrates Series Win vs ENG. Watch",
// "description": "BCCI shared a video on social media in which the players of the Indian team could be seen celebrating their ODI series win over England",
// "url": "https://sports.ndtv.com/england-vs-india-2022/india-vs-england-3rd-odi-do-not-miss-indian-dressing-room-celebrates-memorable-series-win-vs-england-watch-3170039",
// "urlToImage": "https://c.ndtvimg.com/2022-07/hq4pki7_rohit-sharma-afp_625x300_18_July_22.jpg?im=FeatureCrop,algorithm=dnn,width=1200,height=675",
// "publishedAt": "2022-07-18T14:08:28Z",
// "content": "Team India on Sunday defeated England by five wickets in the third and deciding ODI to clinch the series 2-1. Chasing a 260-run target against England in the match at Old Trafford in Manchester, Indi… [+1638 chars]"
// },
// {
// "source": {
// "id": null,
// "name": "The Indian Express"
// },
// "author": "Sports Desk",
// "title": "You’re the most competitive bloke I’ve ever played against: Virat Kohli on Stokes’ ODI retirement",
// "description": "The internet was abuzz soon as plaudits and congratulatory messages poured in from all corners of the world with India's Virat Kohli among the first to wish Stokes.",
// "url": "https://indianexpress.com/article/sports/cricket/ben-stokes-odi-retirement-reactions-virat-kohli-8037151/",
// "urlToImage": "https://images.indianexpress.com/2022/07/Kohli-Stokes-2.jpg",
// "publishedAt": "2022-07-18T14:05:59Z",
// "content": "England all-rounder Ben Stokes will quit one-day internationals following Tuesday’s match against South Africa, the country’s cricket board said in a statement.“I will play my last game for England i… [+2129 chars]"
// },
// {
// "source": {
// "id": null,
// "name": "LatestLY"
// },
// "author": "Team Latestly",
// "title": "Polling for #PresidentialElections2022 Held Peacefully Today Out of a Total of 4796 ... - Latest Tweet by - LatestLY",
// "description": "The latest Tweet by PIB India states, 'Polling for #PresidentialElections2022 held peacefully today Out of a total of 4796 electors in the list of Electoral College for the Presidential Election, over 99% cast their votes today 100% voting by MLAs reported fr…",
// "url": "https://www.latestly.com/socially/india/news/polling-for-presidentialelections2022-held-peacefully-todayout-of-a-total-of-4796-latest-tweet-by-pib-india-3964906.html",
// "urlToImage": "https://st1.latestly.com/wp-content/uploads/2021/06/TW-2-PIB-India-784x441.png",
// "publishedAt": "2022-07-18T14:05:13Z",
// "content": "Polling for #PresidentialElections2022 held peacefully today\r\nOut of a total of 4796 electors in the list of Electoral College for the Presidential Election, over 99% cast their votes today\r\n100% vot… [+627 chars]"
// },
// {
// "source": {
// "id": null,
// "name": "Business Standard"
// },
// "author": "Peerzada Abrar",
// "title": "New Uber safety feature shares live location updates with police",
// "description": "Riders or drivers will be able to share their live location along with their name and contact details at the swipe of a button on the Uber app with the police",
// "url": "https://www.business-standard.com/article/companies/new-uber-safety-feature-shares-live-location-updates-with-police-122071801163_1.html",
// "urlToImage": "https://bsmedia.business-standard.com/_media/bs/img/article/2021-08/30/full/1630268282-1317.jpg",
// "publishedAt": "2022-07-18T14:05:00Z",
// "content": "Uber has come up with a technology integration feature called “emergency assistance” that aims to provide public safety authorities with real-time actionable data in case of an emergency during a rid… [+4784 chars]"
// },
// {
// "source": {
// "id": "the-times-of-india",
// "name": "The Times of India"
// },
// "author": "ET Online",
// "title": "Fridge buying guide: Here are five tips to keep in mind while buying new refrigerator",
// "description": "It is difficult to choose the best one for you because there are numerous factors to consider, including size, door style, energy efficiency, brand, and price. If you are considering replacing your existing refrigerator but are unsure where to begin? Here are…",
// "url": "https://economictimes.indiatimes.com/news/how-to/fridge-buying-guide-here-are-five-tips-to-keep-in-mind-while-buying-new-refrigerator/articleshow/92958466.cms",
// "urlToImage": "https://img.etimg.com/thumb/msid-92958615,width-1070,height-580,imgsize-38460,overlay-economictimes/photo.jpg",
// "publishedAt": "2022-07-18T14:03:23Z",
// "content": "Refrigerator has become an essential appliance for every home. The demand for refrigerators in India has not only risen in terms of volume but the sizes and variety of fridges have also witnessed a h… [+2139 chars]"
// },
// {
// "source": {
// "id": null,
// "name": "TelecomTV"
// },
// "author": "Yanitsa Boyadzhieva",
// "title": "Vodafone NZ sells tower portfolio for $1bn cash-in",
// "description": "Vodafone New Zealand (Vodafone NZ) agrees to divest nearly 1,500 towers for NZD$1.7bn (US$1.05bn)An additional commitment around new tower sites in the next de…",
// "url": "https://www.telecomtv.com/content/access-evolution/vodafone-nz-sells-tower-portfolio-for-1bn-cash-in-44973/",
// "urlToImage": "https://assets.telecomtv.com/assets/telecomtv/towers-13407.jpeg?w=1200",
// "publishedAt": "2022-07-18T14:03:12Z",
// "content": "Vodafone New Zealand has struck a deal to sell 1,484 mobile towers for NZD$1.7bn (US$1.05bn), as it gets on the bandwagon to seek available cash for core operations, including 5G and fibre deployment… [+1833 chars]"
// },
// {
// "source": {
// "id": null,
// "name": "Overclockers.ru"
// },
// "author": "Блогер",
// "title": "Samsung Galaxy A23 5G получит Snapdragon 695 и зарядку 25 Вт",
// "description": "Он появился на сайте сертификации FCC",
// "url": "https://overclockers.ru/blog/Scorpion81/show/70906/samsung-galaxy-a23-5g-poluchit-snapdragon-695-i-zaryadku-25-vt",
// "urlToImage": "https://overclockers.ru/st/legacy/blog/213212/314076_O.jpeg",
// "publishedAt": "2022-07-18T14:02:16Z",
// "content": "Samsung Galaxy A23 5G (FCC), . , . , BIS India, Geekbench. Snapdragon 695 4 .\r\nFCC :\r\n<ul><li>SM-A236M/DS, SM-A236M/DSN, SM-A236M/N</li><li>SM-A236B/DS, SM-A236B/DSN, SM-A236B/N</li><li>SM-A236E/DS, … [+162 chars]"
// },
// {
// "source": {
// "id": null,
// "name": "Www.dsl.sk"
// },
// "author": null,
// "title": "Slovensko má pomôcť IT gigantovi Samsung 9 miliónmi eur",
// "description": "Slovensko by malo poskytnúť spoločnosti Samsung investičnú pomoc vo výške 9 miliónov eur s cieľom podporiť projekt rozširovania výroby v závode Samsungu v meste Galanta.        Navrhuje ...",
// "url": "http://www.dsl.sk/article.php?article=26329",
// "urlToImage": "http://www.dsl.sk/images/design/DSL-fb-square-v2.png",
// "publishedAt": "2022-07-18T14:01:00Z",
// "content": "Slovensko by malo poskytnú spolonosti Samsung investinú pomoc vo výke 9 miliónov eur s cieom podpori projekt rozirovania výroby v závode Samsungu v meste Galanta.\r\nNavrhuje to ministerstvo hospodárst… [+2107 chars]"
// },
// {
// "source": {
// "id": null,
// "name": "Finbold.com"
// },
// "author": "Justinas Baltrusaitis",
// "title": "India’s finance minister reveals RBI wants to ban crypto but seeks global cooperation",
// "description": "India’s Finance Minister Nirmala Sitharaman has said the country’s central bank is pushing for the ban on cryptocurrencies, but there... Continue reading \nThe post India’s finance minister reveals RBI wants to ban crypto but seeks global cooperation appeared …",
// "url": "https://finbold.com/indias-finance-minister-reveals-rbi-wants-to-ban-crypto-but-seeks-global-cooperation/",
// "urlToImage": "https://finbold.com/app/uploads/2022/07/Indias-finance-minister-reveals-RBI-wants-to-ban-crypto-but-seeks-global-cooperation.jpeg",
// "publishedAt": "2022-07-18T14:00:43Z",
// "content": "India’s Finance Minister Nirmala Sitharaman has said the country’s central bank is pushing for the ban on cryptocurrencies, but there is a need for global collaboration. \r\nSitharaman revealed that th… [+2276 chars]"
// },
// {
// "source": {
// "id": null,
// "name": "Telegraph India"
// },
// "author": "Our Bureau And PTI",
// "title": "Lanka: India top lender",
// "description": "India was the island nation's only source of assistance with the economic meltdown",
// "url": "https://www.telegraphindia.com/world/india-top-lender-to-crisis-hit-sri-lanka-this-year/cid/1875299",
// "urlToImage": "https://assets.telegraphindia.com/telegraph/2022/Jul/1657706028_lankaa.jpg",
// "publishedAt": "2022-07-18T14:00:36Z",
// "content": "India has emerged as the top lender to Sri Lanka, extending USD 376.9 million worth credit compared to USD 67.9 million by China in the first four months of this year to rescue the island nation from… [+2499 chars]"
// },
// {
// "source": {
// "id": null,
// "name": "India Today"
// },
// "author": null,
// "title": "CBI raids in Delhi, Jammu in corruption case against Indian Olympic body’s ex-chief Narinder Batra",
// "description": "According to sources, CBI conducted searches at over five locations in Delhi and Jammu in connection with a corruption case lodged against Narinder Batra.",
// "url": "https://www.indiatoday.in/india/story/cbi-delhi-jammu-corruption-case-indian-olympic-body-ex-chief-narinder-batra-1977073-2022-07-18",
// "urlToImage": "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202207/nari-647x363.jpeg?e9Gtwpyzuo_Dft85ldia._4RLI_LFB3T",
// "publishedAt": "2022-07-18T14:00:21Z",
// "content": "The Central Bureau of Investigation on Monday conducted searches at over five locations in Delhi and Jammu in connection with a corruption case lodged against the Indian Olympic Associations former P… [+863 chars]"
// },
// {
// "source": {
// "id": null,
// "name": "PRNewswire"
// },
// "author": null,
// "title": "NRL Selects Lummus' Novolen Technology",
// "description": "The latest of several recent awards from NRL in India, demonstrating superior performance of technologies and customer confidence HOUSTON, July 18, 2022 /PRNewswire/ -- Lummus Technology, a global provider of process technologies and value-driven energy solut…",
// "url": "https://www.prnewswire.com/news-releases/nrl-selects-lummus-novolen-technology-301587545.html",
// "urlToImage": "https://mma.prnewswire.com/media/1198766/Lummus_Technology_Logo.jpg?p=facebook",
// "publishedAt": "2022-07-18T14:00:00Z",
// "content": "The latest of several recent awards from NRL in India, demonstrating superior performance of technologies and customer confidence \r\nHOUSTON, July 18, 2022 /PRNewswire/ -- Lummus Technology, a global … [+2379 chars]"
// },
// {
// "source": {
// "id": null,
// "name": "Yahoo Entertainment"
// },
// "author": "PR Newswire",
// "title": "Zuper Spotlighted on the CRN® 2022 Emerging Vendors List - Yahoo Finance",
// "description": "Zuper, a leading solutions provider to scale and modernize fast-growing field service organizations, announced today that CRN®, a brand of The Channel...",
// "url": "https://finance.yahoo.com/news/zuper-spotlighted-crn-2022-emerging-140000245.html",
// "urlToImage": "https://s.yimg.com/cv/apiv2/social/images/yahoo_default_logo-1200x1200.png",
// "publishedAt": "2022-07-18T14:00:00Z",
// "content": "Company recognized for its commitment to driving positive change and growth in the IT channel\r\nSEATTLE, July 18, 2022 /PRNewswire-PRWeb/ -- Zuper, a leading solutions provider to scale and modernize … [+4306 chars]"
// },
// {
// "source": {
// "id": null,
// "name": "PRNewswire"
// },
// "author": null,
// "title": "USD 2.70 Bn growth in Electric Fan Market 2022-2026, Cost-effective supply chain of electric fans to boost market growth - Technavio",
// "description": "NEW YORK, July 18, 2022 /PRNewswire/ -- Technavio has been monitoring the Electric Fans Market, operating under the consumer discretionary market. The latest report estimates the market to register an incremental growth of USD 2.70 billion, at a CAGR of 3.09%…",
// "url": "https://www.prnewswire.com/news-releases/usd-2-70-bn-growth-in-electric-fan-market-2022-2026--cost-effective-supply-chain-of-electric-fans-to-boost-market-growth---technavio-301586933.html",
// "urlToImage": "https://mma.prnewswire.com/media/1859589/Technavio___Fan_Electric_Market.jpg?p=facebook",
// "publishedAt": "2022-07-18T14:00:00Z",
// "content": "Bajaj Electricals Ltd., Dyson Ltd., Emerson Electric Co., Fanimation Inc., Foshan Sanshui Richy Electric Appliances Co. Ltd., Granso Co. Ltd., Gree Electric Appliances Inc. of Zhuhai, Havells India L… [+18475 chars]"
// },
// {
// "source": {
// "id": null,
// "name": "Telegraaf.nl"
// },
// "author": "Hester Zitvast",
// "title": "’Kinderdagverblijf dicht door hitte? Doe normaal!’",
// "description": "Hester Zitvast schrijft over dat wat haar opvalt in het nieuws. Vandaag over – hoe kan het ook anders – het hitteplan. ’Ik hoop zo dat landen rond de evenaar een beetje met ons meekijken. Als zij deze warmte kunnen trotseren, moet iedereen het kunnen.’",
// "url": "https://www.telegraaf.nl/vrouw/2112796617/kinderdagverblijf-dicht-door-hitte-doe-normaal",
// "urlToImage": "https://www.telegraaf.nl/images/1200x630/filters:format(jpeg):quality(80)/cdn-kiosk-api.telegraaf.nl/784b9124-06a0-11ed-9257-0218eaf05005.jpg",
// "publishedAt": "2022-07-18T14:00:00Z",
// "content": "Tropische dagen\r\nIk moet er altijd om lachen, om de typische Nederlandse weer-paniek. Misschien is elders overal het hele land ook wel in rep en roer als het hard lijkt te gaan waaien of als er een p… [+3343 chars]"
// },
// {
// "source": {
// "id": null,
// "name": "PRNewswire"
// },
// "author": null,
// "title": "Foam Dressing Market Worth $2.5 Billion by 2030 at CAGR 4.7%: Grand View Research, Inc.",
// "description": "SAN FRANCISCO, July 18, 2022 /PRNewswire/ -- The global foam dressing market size is anticipated to reach USD 2.5 billion by 2030, according to a new report by Grand View Research, Inc. The market is expected to expand at a CAGR of 4.7% from 2022 to 2030. A f…",
// "url": "https://www.prnewswire.com/news-releases/foam-dressing-market-worth-2-5-billion-by-2030-at-cagr-4-7-grand-view-research-inc-301588160.html",
// "urlToImage": "https://mma.prnewswire.com/media/661327/Grand_View_Research_Logo.jpg?p=facebook",
// "publishedAt": "2022-07-18T14:00:00Z",
// "content": "SAN FRANCISCO, July 18, 2022 /PRNewswire/ -- The global foam dressing market size is anticipated to reach USD 2.5 billion by 2030, according to a new report by Grand View Research, Inc. The market is… [+7911 chars]"
// },
// {
// "source": {
// "id": null,
// "name": "Yahoo Entertainment"
// },
// "author": "PR Newswire",
// "title": "USD 2.70 Bn growth in Electric Fan Market 2022-2026, Cost-effective supply chain of electric fans to boost market growth - Technavio",
// "description": "Technavio has been monitoring the Electric Fans Market, operating under the consumer discretionary market. The latest report estimates the market to register...",
// "url": "https://finance.yahoo.com/news/usd-2-70-bn-growth-140000646.html",
// "urlToImage": "https://s.yimg.com/uu/api/res/1.2/WCqpejNsBijHtxusCQh4Hw--~B/aD0yMjU7dz00MDA7YXBwaWQ9eXRhY2h5b24-/https://media.zenfs.com/en/prnewswire.com/18bde77dd99c7898924ffc1f4144d820",
// "publishedAt": "2022-07-18T14:00:00Z",
// "content": "NEW YORK, July 18, 2022 /PRNewswire/ -- Technavio has been monitoring the Electric Fans Market, operating under the consumer discretionary market. The latest report estimates the market to register a… [+8751 chars]"
// },
// {
// "source": {
// "id": null,
// "name": "PRNewswire"
// },
// "author": null,
// "title": "Ar in Retail Market USD 6736.2 Million By 2028 With A CAGR of 20.0% - Valuates Reports",
// "description": "BANGALORE, India , July 18, 2022 /PRNewswire/ -- The global AR in Retail market is Segment by Type - (by System - Virtual Fitting Room, Visualizing Software, by Technology - Marker-based Augmented Reality, Markerless Augmented Reality), Segment by Application…",
// "url": "https://www.prnewswire.com/news-releases/ar-in-retail-market-usd-6736-2-million-by-2028-with-a-cagr-of-20-0---valuates-reports-301588007.html",
// "urlToImage": "https://mma.prnewswire.com/media/1082232/Valuates_Reports_Logo.jpg?p=facebook",
// "publishedAt": "2022-07-18T14:00:00Z",
// "content": "BANGALORE, India , July 18, 2022 /PRNewswire/ -- The global AR in Retail market\r\n is Segment by Type - (by System - Virtual Fitting Room, Visualizing Software, by Technology - Marker-based Augmented … [+10619 chars]"
// },
// {
// "source": {
// "id": null,
// "name": "Slashdot.org"
// },
// "author": "msmash",
// "title": "India's Central Bank Wants To Ban Cryptocurrencies, Government Says",
// "description": "India'a central bank wants to ban cryptocurrencies, the government told the parliament on Monday, raising more uncertainty about the future of the nascent virtual digital asset in the world's second largest internet market. From a report: Nirmala Sitharaman, …",
// "url": "https://slashdot.org/story/22/07/18/1344257/indias-central-bank-wants-to-ban-cryptocurrencies-government-says",
// "urlToImage": "https://a.fsdn.com/sd/topics/bitcoin_64.png",
// "publishedAt": "2022-07-18T14:00:00Z",
// "content": "The Fine Print: The following comments are owned by whoever posted them. We are not responsible for them in any way."
// },
// {
// "source": {
// "id": null,
// "name": "Yahoo Entertainment"
// },
// "author": "PR Newswire",
// "title": "Ar in Retail Market USD 6736.2 Million By 2028 With A CAGR of 20.0% - Valuates Reports",
// "description": "The global AR in Retail market is Segment by Type - (by System - Virtual Fitting Room, Visualizing Software, by Technology - Marker-based Augmented Reality, ...",
// "url": "https://finance.yahoo.com/news/ar-retail-market-usd-6736-140000715.html",
// "urlToImage": "https://s.yimg.com/uu/api/res/1.2/9J_SnayryGSvKSGAAw._dw--~B/aD04Mjt3PTQwMDthcHBpZD15dGFjaHlvbg--/https://media.zenfs.com/en/prnewswire.com/ef6f54d92729337f45c428989e3002da",
// "publishedAt": "2022-07-18T14:00:00Z",
// "content": "BANGALORE, India , July 18, 2022 /PRNewswire/ -- The global AR in Retail market\r\n is Segment by Type - (by System - Virtual Fitting Room, Visualizing Software, by Technology - Marker-based Augmented … [+10820 chars]"
// },
// {
// "source": {
// "id": null,
// "name": "Crunchyroll News"
// },
// "author": "Crunchyroll Official",
// "title": "Crunchyroll Reducing Monthly Prices in Nearly 100 Countries & Territories",
// "description": "Subscribers in almost 100 regions across the world will now enjoy a larger anime library at a smaller price!\r\nCrunchyroll is delighted to announce that, as of today, we’re reducing the cost of Crunchyroll Premium memberships in nearly 100 international territ…",
// "url": "https://www.crunchyroll.com/anime-news/2022/07/18-1/crunchyroll-reducing-monthly-prices-in-nearly-100-countries-territories",
// "urlToImage": "https://img1.ak.crunchyroll.com/i/spire4/f27b9b48547e80c9d30adef0ec76c4be1657899847_thumb.jpg",
// "publishedAt": "2022-07-18T14:00:00Z",
// "content": "Big news! Crunchyroll is delighted to announce that, as of today, we’re reducing the cost of Crunchyroll Premium memberships in nearly 100 international territories. Here are some highlights of what … [+2510 chars]"
// },
// {
// "source": {
// "id": null,
// "name": "Yahoo Entertainment"
// },
// "author": "PR Newswire",
// "title": "Foam Dressing Market Worth $2.5 Billion by 2030 at CAGR 4.7%: Grand View Research, Inc.",
// "description": "The global foam dressing market size is anticipated to reach USD 2.5 billion by 2030, according to a new report by Grand View Research, Inc. The market is...",
// "url": "https://finance.yahoo.com/news/foam-dressing-market-worth-2-140000977.html",
// "urlToImage": "https://s.yimg.com/uu/api/res/1.2/5lsttlaWxMPFg4rHeGFsTw--~B/aD0xMjE7dz00MDA7YXBwaWQ9eXRhY2h5b24-/https://media.zenfs.com/en/prnewswire.com/84a909d2dfa86689f31c95be1bfc0ba8",
// "publishedAt": "2022-07-18T14:00:00Z",
// "content": "SAN FRANCISCO, July 18, 2022 /PRNewswire/ -- The global foam dressing market size is anticipated to reach USD 2.5 billion by 2030, according to a new report by Grand View Research, Inc. The market is… [+7656 chars]"
// },
// {
// "source": {
// "id": null,
// "name": "Yahoo Entertainment"
// },
// "author": "Persistence Market Research",
// "title": "Seaweed Cultivation Market is expected to rise at a CAGR of 7.8% by the end of 2032 – Persistence Market Research",
// "description": "Market Study on Seaweed Cultivation: Powdered Seaweed Preferred Form for Most ApplicationsNew York, July 18, 2022 (GLOBE NEWSWIRE) -- The global seaweed...",
// "url": "https://finance.yahoo.com/news/seaweed-cultivation-market-expected-rise-140000403.html",
// "urlToImage": "https://s.yimg.com/ny/api/res/1.2/9y.17GHfexN65oHu2g7UUA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD03Mjk-/https://s.yimg.com/uu/api/res/1.2/CYEordid.MD2FdymjsHTug--~B/aD05NzI7dz0xNjAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en/globenewswire.com/71ac0210ef075f6f708c596f66bbddc1",
// "publishedAt": "2022-07-18T14:00:00Z",
// "content": "Persistence Market Research\r\nMarket Study on Seaweed Cultivation: Powdered Seaweed Preferred Form for Most Applications\r\nNew York, July 18, 2022 (GLOBE NEWSWIRE) -- The global seaweed cultivation mar… [+5085 chars]"
// },
// {
// "source": {
// "id": null,
// "name": "TrekMovie"
// },
// "author": "TrekMovie.com Staff",
// "title": "Character Arcs And More Legacy Cameos Teased For ‘Star Trek: Lower Decks’ Season 3",
// "description": "The new season arrives on August 25.",
// "url": "https://trekmovie.com/2022/07/18/character-arcs-and-more-legacy-cameos-teased-for-star-trek-lower-decks-season-3/",
// "urlToImage": "https://trekmovie.com/wp-content/uploads/2022/07/lds-s3-head.jpg",
// "publishedAt": "2022-07-18T13:59:54Z",
// "content": "Star Trek: Lower Deckswill return on August 25 and we are getting a few more tidbits about what to expect from the adult animated comedy in season three.\r\nMore legacy guest stars\r\nIn an interview wit… [+3577 chars]"
// },
// {
// "source": {
// "id": null,
// "name": "India Today"
// },
// "author": null,
// "title": "Fact Check: Old video of Jammu bridge collapse shared as recent monsoon mishap from Maharashtra",
// "description": "According to the AFWA Probe, this video is nearly two years old and is from Jammu, where a bridge built over a nullah in the Gadigarh area collapsed following heavy rainfall in the region.",
// "url": "https://www.indiatoday.in/fact-check/story/fact-check-jammu-bridge-collapse-monsoon-mishap-maharashtra-1977071-2022-07-18",
// "urlToImage": "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202207/Image_1__10_-647x363.jpeg?E7N6e6sEgvqd3SUvZhD14nekC.r4qZzy",
// "publishedAt": "2022-07-18T13:57:30Z",
// "content": "Several western Indian states have been hit hard by heavy monsoon rainfall. About a hundred people have died in rain-related incidents in Maharashtra. A video of a bridge, supposedly from this region… [+1830 chars]"
// },
// {
// "source": {
// "id": null,
// "name": "Livemint"
// },
// "author": "Bloomberg",
// "title": "Oil advances back toward $100 with markets in risk-on mode",
// "description": "Oil rose back near $100 a barrel, aided by a weaker dollar that put wider commodity markets on a firmer footing.",
// "url": "https://www.livemint.com/industry/energy/oil-advances-back-toward-100-with-markets-in-risk-on-mode-11658152226143.html",
// "urlToImage": "https://images.livemint.com/img/2022/07/18/600x338/Crude_oil_1658152295853_1658152296037_1658152296037.JPG",
// "publishedAt": "2022-07-18T13:55:25Z",
// "content": "Oil rose back near $100 a barrel, aided by a weaker dollar that put wider commodity markets on a firmer footing.  West Texas Intermediate added as much as 3.1%. European stock markets and US equity f… [+2242 chars]"
// },
// {
// "source": {
// "id": null,
// "name": "What's on Netflix"
// },
// "author": "Kasey Moore",
// "title": "‘Downton Abbey’ Leaving Multiple Netflix Regions in August 2022",
// "description": "A total of 24 Netflix regions will be losing 6 seasons of 'Downton Abbey'",
// "url": "https://www.whats-on-netflix.com/leaving-soon/downton-abbey-leaving-multiple-netflix-regions-in-august-2022/",
// "urlToImage": "https://www.whats-on-netflix.com/wp-content/uploads/2022/04/downton-abbey-leaving-netflix-june-2022.jpg",
// "publishedAt": "2022-07-18T13:54:49Z",
// "content": "Downton Abbey – Picture: PBS\r\nThe hit period drama series Downton Abbey left the Netflix US library in June 2022, and in August 2022 multiple regions from around the world will see Downton Abbey leav… [+2305 chars]"
// },
// {
// "source": {
// "id": null,
// "name": "Cointelegraph"
// },
// "author": "Brian Newar",
// "title": "El gobernador del banco central australiano está a favor de las criptomonedas del sector privado",
// "description": "Phillip Lowe cree que hay riesgos en el manejo de las criptomonedas que pueden mitigarse con regulaciones fuertes, pero la tecnología debe ser hecha por empresas privadas.\n \nEl gobernador del banco central de Australia, Phillip Lowe, afirmó que una solución p…",
// "url": "https://es.cointelegraph.com/news/australian-central-bank-governor-favors-private-sector-crypto-technology",
// "urlToImage": "https://images.cointelegraph.com/images/1200_aHR0cHM6Ly9zMy5jb2ludGVsZWdyYXBoLmNvbS91cGxvYWRzLzIwMjItMDcvNWJjZDg5OTQtNzczYi00Mjg2LWJhOWItZjZhNjY3ZjMwMGIxLmpwZw==.jpg",
// "publishedAt": "2022-07-18T13:53:00Z",
// "content": "El gobernador del banco central de Australia, Phillip Lowe, afirmó que una solución privada \"va a ser mejor\" para las criptomonedas siempre y cuando se mitiguen los riesgos mediante la regulación.\r\nL… [+3225 chars]"
// },
// {
// "source": {
// "id": "the-times-of-india",
// "name": "The Times of India"
// },
// "author": "Be Staff",
// "title": "ajay devgn: Exxaro ropes in Ajay Devgn as the brand ambassador, Marketing & Advertising News, ET BrandEquity",
// "description": "ajay devgn: Exxaro ropes in Ajay Devgn as the brand ambassador, Marketing & Advertising News, ET BrandEquityindiatimes.com",
// "url": "https://brandequity.economictimes.indiatimes.com/news/marketing/exxaro-ropes-in-ajay-devgn-as-the-brand-ambassador/92955826",
// "urlToImage": "https://etimg.etb2bimg.com/thumb/msid-92955826,imgsize-44144,width-1200,height-628,overlay-etbrandequity/exxaro-ropes-in-ajay-devgn-as-the-brand-ambassador.jpg",
// "publishedAt": "2022-07-18T13:51:28Z",
// "content": "Ajay Devgn\r\nExxaro, the manufacturer of vitrified tiles, has announced Bollywood actor Ajay Devgn as its brand ambassador. The brand plans at going aggressive on the digital front with its marketing … [+1019 chars]"
// },
// {
// "source": {
// "id": null,
// "name": "NDTV News"
// },
// "author": null,
// "title": "Monkeypox: Centre Asks For Strict Screening Of All International Passengers",
// "description": "The Centre on Monday asked ports and airports to ensure strict health screening of all international travellers to contain the spread of monkeypox on the day India reported its second case from Kerala.",
// "url": "https://www.ndtv.com/india-news/amid-monkeypox-concerns-centre-asks-for-strict-screening-of-all-international-passengers-at-ports-airports-3169965",
// "urlToImage": "https://c.ndtvimg.com/2022-05/iagsqfo_monkeypox-reuters_625x300_28_May_22.jpg",
// "publishedAt": "2022-07-18T13:50:44Z",
// "content": "The symptoms of monkeypox include a high fever, swollen lymph nodes and a blistery chickenpox-like rash.\r\nNew Delhi: The Centre on Monday asked ports and airports to ensure strict health screening of… [+1752 chars]"
// },
// {
// "source": {
// "id": null,
// "name": "LatestLY"
// },
// "author": "Team Latestly",
// "title": "Centre Reviews Points of Entry Health Actions at International Airports & Ports ... - Latest Tweet by PIB - LatestLY",
// "description": "The latest Tweet by PIB India states, 'Centre reviews Points of Entry Health actions at international airports &amp; ports in India State, Airport &amp; Port Health Officers advised ensuring strict health screening of all international travellers to minimize …",
// "url": "https://www.latestly.com/socially/india/news/centre-reviews-points-of-entry-health-actions-at-international-airports-ports-latest-tweet-by-pib-india-3964815.html",
// "urlToImage": "https://st1.latestly.com/wp-content/uploads/2021/06/TW-1-PIB-India-784x441.png",
// "publishedAt": "2022-07-18T13:48:42Z",
// "content": "Centre reviews Points of Entry (PoEs) Health actions at international airports &amp; ports in India\r\nState, Airport &amp; Port Health Officers advised ensuring strict health screening of all internat… [+632 chars]"
// },
// {
// "source": {
// "id": null,
// "name": "Business Standard"
// },
// "author": "Press Trust of India",
// "title": "Bourses, people dealing in securities market to pay 18% GST on Sebi's fee",
// "description": "The new tax rate will be effective from Monday, the Securities and Exchange Board of India (Sebi) said in a circular.",
// "url": "https://www.business-standard.com/article/economy-policy/bourses-people-dealing-in-securities-market-to-pay-18-gst-on-sebi-s-fee-122071800905_1.html",
// "urlToImage": "https://bsmedia.business-standard.com/_media/bs/img/article/2021-05/24/full/1621795191-4041.jpg",
// "publishedAt": "2022-07-18T13:48:00Z",
// "content": "Market infrastructure institutions, including stock exchanges, and persons dealing in the securities market will need to pay a GST of 18 per cent on the fees charged by the regulator Sebi.\r\nThe new t… [+2133 chars]"
// },
// {
// "source": {
// "id": null,
// "name": "Slashdot.org"
// },
// "author": "brainsmithpe",
// "title": "How Important Are Plant Based Protein Ingredients?",
// "description": "If you really want to include some healthy source of protein in your diet then plant protein ingredients are the best choice. Plants are naturally protein-rich and provide all the vitamins that are required for a healthy body. Plant proteins are now available…",
// "url": "https://slashdot.org/submission/16316544/how-important-are-plant-based-protein-ingredients",
// "urlToImage": null,
// "publishedAt": "2022-07-18T13:47:30Z",
// "content": "The Fine Print: The following comments are owned by whoever posted them. We are not responsible for them in any way."
// },
// {
// "source": {
// "id": null,
// "name": "Atomix"
// },
// "author": "Sebastian Quiroz",
// "title": "Éstos son los juegos que dejan Xbox Game Pass",
// "description": "Cada dos semanas, Xbox anuncia una nueva lista de juegos para Game Pass. Sin embargo, también revela una selección de títulos que, lamentablemente, abandonarán el servicio. En esta ocasión, le tendremos que decir adiós a entregas como Katamari Damacy Reroll.\n…",
// "url": "https://atomix.vg/estos-son-los-juegos-que-dejan-xbox-game-pass-3/",
// "urlToImage": "https://cdn.atomix.vg/wp-content/uploads/2022/07/katamari.jpg",
// "publishedAt": "2022-07-18T13:47:19Z",
// "content": "Cada dos semanas, Xbox anuncia una nueva lista de juegos para Game Pass. Sin embargo, también revela una selección de títulos que, lamentablemente, abandonarán el servicio. En esta ocasión, le tendre… [+1227 chars]"
// },
// {
// "source": {
// "id": null,
// "name": "NDTV News"
// },
// "author": null,
// "title": "Kartik Aaryan To Star In Kabir Khan-Sajid Nadiadwala's New Project",
// "description": "\"Super excited to embark on this exciting journey with one of my favorite filmmakers,\" wrote Kartik Aaryan",
// "url": "https://www.ndtv.com/entertainment/kartik-aaryan-announces-new-project-based-on-true-story-with-sajid-nadiadwala-kabir-khan-3168473",
// "urlToImage": "https://c.ndtvimg.com/2022-07/fueot758_kartik-aaryan_625x300_18_July_22.jpg",
// "publishedAt": "2022-07-18T13:45:23Z",
// "content": "Kartik Aaryan shared this image. (courtesy: kartikaaryan)\r\nNew Delhi: Bollywood actor Kartik Aaryan, on Monday, revealed that he has signed a project with Sajid Nadiadwala's production house which wi… [+1774 chars]"
// }
//                   ],
        load : false
    }
  }

  async componentDidMount(){
    let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=bad70ec34d8f4ef68a265ef38ddf495a";
  
    let fetching = await fetch(url);
    let dataUsers = await fetching.json();
    this.setState({articles : dataUsers.articles});
    console.log(dataUsers);
  }

  render() {
    return (
      <div className="container margin-auto my-4">
        <div className="my-4">
          <h2>NewsSpot Digest</h2>
          <hr />
        </div>

        <div className="row d-flex justify-content-center mx-auto my-auto">
            {this.state.articles.map((ele)=>{
                return (
                <div className="col" key={ele.url}>
                    <NewsItem author={ele.author} title={ele.title} desc={ele.description} urlImage={ele.urlToImage === null ? "https://cdn.pixabay.com/photo/2013/07/12/19/16/newspaper-154444_960_720.png" : ele.urlToImage} urlNews={ele.url}/>
                </div>
                ) ;
            })}

            {/* {this.state.articles.forEach((ele)=>{
                <div className="col-md-4 my-18rem" key={ele.urlToImage}>
                    <NewsItem title={ele.title.slice(0,50)} desc={ele.description.slice(0,50)} urlImage={ele.urlToImage} urlNews={ele.url}/>
                </div> ;
            })} */}
        </div>

        {/* <div className="row mt-3">
          <div className="col-md-4 my-1">
            <NewsItem />
          </div>
          <div className="col-md-4 my-1">
            <NewsItem />
          </div>
          <div className="col-md-4 my-1">
            <NewsItem />
          </div>
        </div> */}
      </div>
    );
  }
}
