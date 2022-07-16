import React, { Component } from 'react';
import NewsItem from "./NewsItem";

export default class News extends Component {
  articles = [
    {
      source: { id: "reuters", name: "Reuters" },
      author: null,
      title:
        "Biden hopes for Israeli integration at Arab summit in Saudi - Reuters.com",
      description:
        "U.S. President Joe Biden will discuss regional missile and defence capabilities on Saturday when he meets Arab leaders in Saudi Arabia, where he will be seeking to integrate Israel as part of a new axis largely driven by shared concerns over Iran, said a seni…",
      url: "https://www.reuters.com/world/middle-east/biden-hopes-more-oil-israeli-integration-arab-summit-saudi-2022-07-16/",
      urlToImage:
        "https://www.reuters.com/resizer/teMse4Etr5hJyFlVcyyJnMTOEQQ=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/RAKFEDFZCZLMXC3BXZKOX5VZSA.jpg",
      publishedAt: "2022-07-16T09:21:00Z",
      content:
        "JEDDAH, Saudi Arabia, July 16 (Reuters) - U.S. President Joe Biden will discuss regional missile and defence capabilities on Saturday when he meets Arab leaders in Saudi Arabia, where he will be seek… [+6045 chars]",
    },
    {
      source: { id: "abc-news", name: "ABC News" },
      author: "ABC News",
      title:
        "6 people die after storm causes Montana highway pileup - ABC News",
      description:
        "Authorities say six people have died after a pileup Friday evening on Interstate 90 in Montana",
      url: "https://abcnews.go.com/US/wireStory/mass-casualty-vehicle-pileup-montana-highway-86916494",
      urlToImage:
        "https://s.abcnews.com/images/US/abc_news_default_2000x2000_update_16x9_992.jpg",
      publishedAt: "2022-07-16T06:53:12Z",
      content:
        "HARDIN, Mont. -- Six people have died after a dust storm fueled by wind gusts topping 60 mph caused a pileup Friday evening on Interstate 90 in Montana, authorities said. \r\nTwenty-one vehicles crashe… [+2942 chars]",
    },
    {
      source: { id: null, name: "Hollywood Reporter" },
      author: "Chris Gardner",
      title:
        "Hollywood Insiders Mourn Passing of Jak Knight at 28: “A Painful Loss to Comedy” - Hollywood Reporter",
      description:
        "Jak Knight’s death sent shockwaves through Hollywood on Friday as word spread of his untimely passing at age 28. Originally from Seattle and based in L.A., Knight was a regular on the stand-up stage and collected many admirers, friends and fans during a brief…",
      url: "https://www.hollywoodreporter.com/tv/tv-news/jak-knight-death-mourned-hollywood-1235181565/",
      urlToImage:
        "https://www.hollywoodreporter.com/wp-content/uploads/2022/07/GettyImages-872311070.jpg?w=1024",
      publishedAt: "2022-07-16T06:01:28Z",
      content:
        "Jak Knight’s death sent shockwaves through Hollywood on Friday as word spread of his untimely passing at age 28.\r\nOriginally from Seattle and based in L.A., Knight was a regular on the stand-up stage… [+5220 chars]",
    },
    {
      source: { id: null, name: "San Francisco Chronicle" },
      author: "Annie Vainshtein",
      title:
        "Bomb threat forces evacuations at SFO; suspect detained - San Francisco Chronicle",
      description:
        "Travelers were ordered to evacuate the international terminal at the San Francisco...",
      url: "https://www.sfchronicle.com/bayarea/article/Bomb-threat-forces-evacuations-at-SFO-suspect-17309103.php",
      urlToImage:
        "https://s.hdnux.com/photos/01/26/47/73/22707945/3/rawImage.jpg",
      publishedAt: "2022-07-16T05:19:57Z",
      content:
        "This is a carousel. Use Next and Previous buttons to navigate\r\n1of5People gather by a police line after a bomb threat forced an evacuation of the international terminal at San Francisco International… [+1715 chars]",
    },
    {
      source: { id: null, name: "Fox Business" },
      author: "Ken Martin",
      title:
        "Elon Musk seeks to block Twitter request for expedited trial - Fox Business",
      description:
        "Elon Musk filed a motion on Friday opposing Twitter's request to fast-track a trial over his plan to terminate his $44 billion deal for the social media firm.",
      url: "https://www.foxbusiness.com/markets/elon-musk-seeks-block-twitter-request-expedited-trial",
      urlToImage:
        "https://a57.foxnews.com/static.foxbusiness.com/foxbusiness.com/content/uploads/2022/04/0/0/MUSK-TWITTER-GETTY-ILLUSTRATION.jpg?ve=1&tl=1",
      publishedAt: "2022-07-16T04:37:59Z",
      content:
        "Elon Musk is against Twitter's request for a speedy trial over his plan to terminate his $44 billion deal for the social media firm.\r\nShares of Twitter were down about 1% in extended trading.\r\nIn a F… [+2573 chars]",
    },
    {
      source: { id: null, name: "HotNewHipHop" },
      author: "Hayley Hynes",
      title:
        "Kodak Black Reported Arrest Update: Cops Allegedly Found 30+ Oxycodone Pills & +$70K Cash - HotNewHipHop",
      description:
        'Fox Sports journalist Andy Slater claims to have heard the news from "multiple sources."',
      url: "https://www.hotnewhiphop.com/kodak-black-reported-arrest-update-cops-allegedly-found-30-oxycodone-pills-and-s70k-cash-news.155098.html",
      urlToImage:
        "https://www.hotnewhiphop.com/image/740x416/cover/1657944238_84ca8d779babdab20dc5157db94a256c.jpg/f0da5d63fd732e5ddbdaf591d647dee9/1657944238_fd64174f0bdbdc10b4b28471e4b515bc.jpg",
      publishedAt: "2022-07-16T04:29:00Z",
      content:
        "As we previously reported, rumours began swirling around online earlier today (July 15) that 25-year-old Kodak Black has been taken into police custody after being stopped by Florida Highway Patrol o… [+1395 chars]",
    },
    {
      source: { id: "politico", name: "Politico" },
      author: null,
      title:
        "Ivana Trump's death ruled an accident, medical examiner says - POLITICO",
      description:
        "Police had been looking into whether she fell down the stairs.",
      url: "https://www.politico.com/news/2022/07/15/ivana-trumps-death-ruled-an-accident-medical-examiner-says-00046201",
      urlToImage:
        "https://static.politico.com/ba/c1/bc87410e403c8aafd470fc00b169/20220714-ivanatrump-ap-773.jpg",
      publishedAt: "2022-07-16T03:23:42Z",
      content:
        "Her son Eric Trump said it was a very sad day, a very sad day, as he left the home Thursday.\r\nA Czech-born ski racer and businesswoman, Ivana Trump was born Ivana Zelnickova in 1949.\r\nShe was married… [+913 chars]",
    },
    {
      source: { id: "cnn", name: "CNN" },
      author:
        "Zachary Cohen, Annie Grayer, Ryan Nobles, Jamie Gangel and Whitney Wild, CNN",
      title:
        "First on CNN: DHS inspector general told Jan. 6 panel he went to Mayorkas about Secret Service cooperation - CNN",
      description:
        "The Department of Homeland Security inspector general on Friday briefed all nine members of the House select committee investigating the January 6, 2021, US Capitol attack about the Secret Service erasing text messages from the day of the riot and the day bef…",
      url: "https://www.cnn.com/2022/07/15/politics/homeland-security-inspector-general-deleted-text-message/index.html",
      urlToImage:
        "https://cdn.cnn.com/cnnnext/dam/assets/220712132602-02-jan-6-hearing-0612-super-tease.jpg",
      publishedAt: "2022-07-16T03:15:00Z",
      content:
        "(CNN)The Department of Homeland Security inspector general on Friday briefed all nine members of the House select committee investigating the January 6, 2021, US Capitol attack about the Secret Servi… [+6568 chars]",
    },
    {
      source: { id: null, name: "Daily Beast" },
      author: "David Axe",
      title:
        "'Shock' Monkeypox Screw-Up Means We Now Face Two Pandemics - The Daily Beast",
      description:
        "We’ve already let monkeypox spiral out of control. In order to prevent millions of infections, it is time to admit this is another pandemic.",
      url: "https://www.thedailybeast.com/shocking-monkeypox-screw-up-means-we-need-to-admit-we-now-face-two-pandemics",
      urlToImage:
        "https://img.thedailybeast.com/image/upload/c_crop,d_placeholder_euli9k,h_1688,w_3000,x_0,y_0/dpr_2.0/c_limit,w_740/fl_lossy,q_auto/v1657883946/071522-axe-monkeypox-hero_xfv5wa",
      publishedAt: "2022-07-16T03:06:43Z",
      content:
        "We blew our chance to quickly contain monkeypox. Now the dangerous virus is spreading fast all over the world.\r\nHealth experts agree: the outbreak could soon qualify as a pandemic, if it doesnt alrea… [+8039 chars]",
    },
    {
      source: { id: null, name: "The Guardian" },
      author: "Stephanie Kirchgaessner",
      title:
        "Daughter of doctor who gave 10-year-old an abortion faced kidnapping threat - The Guardian US",
      description:
        "Caitlin Bernard of Indiana is named on an extreme anti-abortion website linked to Amy Coney Barrett",
      url: "https://amp.theguardian.com/us-news/2022/jul/15/indiana-caitlin-bernard-doctor-abortion",
      urlToImage:
        "https://i.guim.co.uk/img/media/01dee810f41ff9b202298ceb9a358f33c37e4d3a/0_36_8640_5184/master/8640.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=e5cb430522bb2c0e8f8592556fb90d36",
      publishedAt: "2022-07-16T01:35:00Z",
      content:
        "The Indiana doctor who recently provided an abortion to a 10-year-old rape victim whose story has garnered national attention faced serious threats in the past and is named on an extreme anti-abortio… [+4381 chars]",
    },
    {
      source: { id: null, name: "Investor's Business Daily" },
      author: "Investor's Business Daily",
      title:
        "Dow Jones Futures: Market Rally Bends But Doesn't Break; Big Week For Tesla, EV Rival - Investor's Business Daily",
      description:
        "The indexes pared weekly losses. Tesla and EV rival BYD have big news due.",
      url: "https://www.investors.com/market-trend/stock-market-today/dow-jones-futures-market-rally-bends-but-doesnt-break-big-week-for-tesla-ev-rival/",
      urlToImage:
        "https://www.investors.com/wp-content/uploads/2018/05/Stock-bullBearFrankfurt-01-adobe.jpg",
      publishedAt: "2022-07-16T01:26:00Z",
      content:
        "Dow Jones futures will open Sunday evening, along with S&amp;P 500 futures and Nasdaq futures. The stock market rally fell last week, but the major indexes slashed losses by Friday's close, with the … [+11094 chars]",
    },
    {
      source: { id: null, name: "New York Post" },
      author: "Erin Keller",
      title:
        "'Stranger Things' star Noah Schnapp opens up about Will's long-simmering sexuality - New York Post ",
      description:
        "“I think it was really wholesome,” Schnapp said about his “Stranger Things” character’s arc.",
      url: "https://nypost.com/2022/07/15/stranger-things-star-noah-schnapp-opens-up-about-wills-sexuality/",
      urlToImage:
        "https://nypost.com/wp-content/uploads/sites/2/2022/07/StrangerThings_StrangerThings4_9_00_11_33_07-copy.jpg?quality=75&strip=all&w=1024",
      publishedAt: "2022-07-16T01:11:00Z",
      content:
        "WARNING: “Stranger Things” Season 4 spoilers are ahead. \r\nNoah Schnapp is busting down the closet door for his character Will Byers in the hit Netflix series “Stranger Things.” \r\nThe 17-year-old acto… [+2713 chars]",
    },
    {
      source: { id: null, name: "Express" },
      author: "Liam Martin",
      title:
        "Wordle 392 July 16 HINTS: Struggling with today's Wordle? Three clues to help with answer - Express",
      description:
        "THE first Wordle puzzle of the weekend is here, and we think some people are going to struggle to figure out the answer. Fortunately, Express Online is here to help, courtesy of three spoiler-free hints for Wordle 392 on July 16.",
      url: "https://www.express.co.uk/entertainment/gaming/1641396/Wordle-392-July-16-hints-Struggling-with-today-Three-clues-help-answer",
      urlToImage:
        "https://cdn.images.express.co.uk/img/dynamic/143/1200x712/1641396_1.jpg",
      publishedAt: "2022-07-16T01:00:00Z",
      content: null,
    },
    {
      source: { id: "cnn", name: "CNN" },
      author: "Heather Chen, CNN",
      title: "Sri Lanka crisis: How do you fix a broken country? - CNN",
      description:
        "Gotabaya Rajapaksa may be gone, but Sri Lanka is still struggling with a ruinous financial crisis, and experts said things are likely to get worse before they get better.",
      url: "https://www.cnn.com/2022/07/15/asia/sri-lanka-crisis-economy-fix-gotabaya-rajapaksa-saturday-intl-hnk/index.html",
      urlToImage:
        "https://cdn.cnn.com/cnnnext/dam/assets/220714232139-02-sri-lanka-crisis-how-do-you-fix-a-broken-country-restricted-super-tease.jpg",
      publishedAt: "2022-07-16T00:53:00Z",
      content:
        "By Heather Chen, CNN\r\nUpdated 8:53 PM ET, Fri July 15, 2022\r\n (CNN)For years it had been one of Sri Lanka's grandest and most heavily guarded buildings, serving as the official residence and state of… [+10719 chars]",
    },
    {
      source: { id: "associated-press", name: "Associated Press" },
      author: "Hanna Arhirova",
      title:
        "Russian cruise missiles rain down on southern Ukrainian city - The Associated Press - en Español",
      description:
        "VINNYTSIA, Ukraine (AP) — Cruise missiles fired by Russian strategic bombers struck a southeastern Ukrainian city late Friday, killing at least three people and wounding 15, as air raid sirens went off across the country, officials said.",
      url: "https://apnews.com/article/russia-ukraine-putin-government-and-politics-43436f81cb81e69b37141c4cad483884",
      urlToImage:
        "https://storage.googleapis.com/afs-prod/media/2a603c2dbe6c4917a8d3e037aa2372b8/3000.jpeg",
      publishedAt: "2022-07-16T00:22:30Z",
      content:
        "VINNYTSIA, Ukraine (AP) Cruise missiles fired by Russian strategic bombers struck a southeastern Ukrainian city late Friday, killing at least three people and wounding 15, as air raid sirens went off… [+7319 chars]",
    },
    {
      source: { id: null, name: "MLB Trade Rumors" },
      author: "Anthony Franco",
      title:
        "MLB To Pay $185MM To Settle Class Action Minor League Suit - MLB Trade Rumors",
      description:
        "Major League Baseball is set to pay $185MM to settle the class action lawsuit brought by minor league players nearly &hellip;",
      url: "https://www.mlbtraderumors.com/2022/07/mlb-to-pay-185mm-to-settle-class-action-minor-league-suit.html",
      urlToImage:
        "https://cdn.mlbtraderumors.com/files/2022/06/USATSI_18028062-1024x683.jpg",
      publishedAt: "2022-07-16T00:01:14Z",
      content:
        "Major League Baseball is set to pay $185MM to settle the class action lawsuit brought by minor league players nearly a decade ago, as Jeff Passan of ESPN was first to report. Evan Drellich of the Ath… [+3069 chars]",
    },
    {
      source: { id: null, name: "YouTube" },
      author: null,
      title:
        "Tiger Woods reflects on emotional day following Rd. 2 at The Open | Golf Central | Golf Channel - Golf Channel",
      description:
        "Tiger Woods speaks to the media about his memorable day at The 150th Open, while Cam Smith and Rory McIlroy discuss their strong second round performances at...",
      url: "https://www.youtube.com/watch?v=rjPpZPZsDsg",
      urlToImage: "https://i.ytimg.com/vi/rjPpZPZsDsg/maxresdefault.jpg",
      publishedAt: "2022-07-15T23:42:44Z",
      content: null,
    },
    {
      source: { id: "fox-news", name: "Fox News" },
      author: "Deirdre Reilly",
      title:
        "Sobering new study says that those under age 40 shouldn't drink alcohol at all - Fox News",
      description:
        "New study from Institute for Health Metrics and Evaluation in Seattle reveals that risk of sickness, accident and death far outweigh any benefits of alcohol consumption for those under 40.",
      url: "https://www.foxnews.com/lifestyle/sobering-study-under-age-40-shouldnt-drink-alcohol",
      urlToImage:
        "https://static.foxnews.com/foxnews.com/content/uploads/2021/11/Woman-Drinking-Wine.jpg",
      publishedAt: "2022-07-15T23:39:14Z",
      content:
        "A new study shares surprising recommendations for people under age 40. \r\nThe study is essentially encouraging young people to put down that gorgeous summer cocktail or delicious beer right this minut… [+5393 chars]",
    },
    {
      source: { id: null, name: "New York Times" },
      author: "Emily Anthes",
      title:
        "Demand for Monkeypox Vaccine Exceeds Supply, C.D.C. Says - The New York Times",
      description:
        "The United States has ordered nearly seven million doses in total, but most of them will not arrive for months.",
      url: "https://www.nytimes.com/2022/07/15/health/monkeypox-vaccine-supply.html",
      urlToImage:
        "https://static01.nyt.com/images/2022/07/15/science/15monkeypox1/15monkeypox1-facebookJumbo.jpg",
      publishedAt: "2022-07-15T23:16:24Z",
      content:
        "Jynneos, the only vaccine approved by the F.D.A. specifically for monkeypox, is given in two doses, 28 days apart. It is made by Bavarian Nordic, a small company in Denmark, and its global supply has… [+1371 chars]",
    },
    {
      source: { id: "the-washington-post", name: "The Washington Post" },
      author: "Joel Achenbach, Aaron Steckelberg",
      title:
        "Explore the Webb Space Telescope images with our annotated tour - Washington Post - The Washington Post",
      description:
        "Dying stars, colliding galaxies and a violent black hole are all visible in images captured by NASA’s Webb Space Telescope.",
      url: "https://www.washingtonpost.com/science/interactive/2022/nasa-webb-space-telescope-images-explained/",
      urlToImage:
        "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/NT23FFP3KZF2BA7IUQPKRBSRLY.jpg&w=1200",
      publishedAt: "2022-07-15T22:53:14Z",
      content:
        "NASA’s James Webb Space Telescope, the biggest and most powerful space telescope ever built, is now roughly a million miles from Earth, pivoting from one patch of the heavens to the other as it studi… [+8125 chars]",
    },
  ];
  
  constructor(){
    super();
    this.state = {
        articles : this.articles,
        // load : false
    }
  }
  render() {
    return (
      <div className="container margin-auto my-4">
        <div className="my-4">
          <h2>NewsSpot Digest</h2>
          <hr />
        </div>

        <div className="row">
            {this.state.articles.map((ele)=>{
                return (<div className="col-md-4 my-28rem" key={ele.urlToImage} style={{height : "500px"}}>
                    <NewsItem author={ele.author} title={ele.title.slice(0,50)} desc={ele.description.slice(0,28)} urlImage={ele.urlToImage} urlNews={ele.url}/>
                </div>) ;
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
