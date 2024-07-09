AOS.init();
// MOOCs Cards

const moocs = document.querySelector(".moocs");
const moocscards = [

  {
    title: "Harry Potter And The Chamber of secrets",
    cardImage: "assets/images/library/book_light.jpg",
    moocLink: "https://drive.google.com/file/d/1brJS7jsUoicatr5Hz5-wSJxlcL-tUPPe/view?usp=sharing",
  },
  {
      title: "Harry Potter And Cursed Child",
      cardImage: "assets/images/library/book_light.jpg",
      moocLink: "https://drive.google.com/file/d/1a8yn6DzEycs4qs5CeImL3ZtwIPxyPT6j/view?usp=sharing",
  },
  {
        title: "Harry Potter and Deathly Hallows",
        cardImage: "assets/images/library/book_light.jpg",
        moocLink: "https://drive.google.com/file/d/1XyUOt1x2CSqKfUP0BOjgY8atfkmqYbsg/view?usp=sharing",
  },
  {
        title: "Harry Potter and the Goblet of fire",
        cardImage: "assets/images/library/book_light.jpg",
        moocLink: "https://drive.google.com/file/d/19MzFOTeUNHk9F35W9Y3HP5hpI_WXf_Pi/view?usp=sharing",
  },
   {
      title: "Harry Potter And The Half blood",
      cardImage: "assets/images/library/book_light.jpg",
      moocLink: "https://drive.google.com/file/d/1vGculVs46hVPVk2lKeqp4-OYAB2GVPJq/view?usp=sharing",
    },
    {
        title: "Harry Potter And the older the phoenix",
        cardImage: "assets/images/library/book_light.jpg",
        moocLink: "https://drive.google.com/file/d/1VnvrrFXdERa6SkA0EaDeiUym2-CJz8Q-/view?usp=sharing",
    },
    {
          title: "Harry Potter and the prisoner of azkaban",
          cardImage: "assets/images/library/book_light.jpg",
          moocLink: "https://drive.google.com/file/d/1hpYDaaM_D6VSwWMqGUGMxtIT3ObIiiVY/view?usp=sharing",
    },
    {
          title: "Harry Potter and the sorcerer's stone",
          cardImage: "assets/images/library/book_light.jpg",
          moocLink: "https://drive.google.com/file/d/1W-_lzabWeCe9J4G6-JsRYEQo8KGYGx6t/view?usp=sharing",
    },
    {
              title: "Harry Potter The hogwarts library collection",
              cardImage: "assets/images/library/book_light.jpg",
              moocLink: "https://drive.google.com/file/d/1TOMPEvCH_sgHci_SLjJxIhgzCFXYzFhd/view?usp=sharing",
    },
    {
          title: "12 Rules for Life, An Antidote to Chaos",
          cardImage: "assets/images/library/book_light.jpg",
          moocLink: "https://drive.google.com/file/d/1m081xDCwIQNPWdOd9hkXQ4h3sThfxqhy/view?usp=sharing",
        },
        {
            title: "Billion Dollar Whale",
            cardImage: "assets/images/library/book_light.jpg",
            moocLink: "https://drive.google.com/file/d/1Mp9AYEYpkAgCdVd2LLLGNu58gIX8kyoE/view?usp=sharing",
        },
        {
              title: "Atomic Habits",
              cardImage: "assets/images/library/book_light.jpg",
              moocLink: "https://drive.google.com/file/d/18SIi3J8Kh5Z07sFT1y9a2Ao7fRksyCel/view?usp=sharing",
        },
        {
              title: "Becoming - Michelle Obama",
              cardImage: "assets/images/library/book_light.jpg",
              moocLink: "https://drive.google.com/file/d/1xUzW4LAQ6UJk3JzbYNWTqQ_6eEFTl4W_/view?usp=sharing",
        },
        {
              title: "Brain Rules",
              cardImage: "assets/images/library/book_light.jpg",
              moocLink: "https://drive.google.com/file/d/1W_Vnklpqy3rJpqbAQrYb4xv8W-v4Rwdx/view?usp=sharing",
        },
        {
              title: "Complete words of swami vivekanand",
              cardImage: "assets/images/library/book_light.jpg",
              moocLink: "https://drive.google.com/file/d/1JK0VksaUwZFVgpC3ZVJK7vkLlIXLNImn/view?usp=sharing",
        },
        {
                      title: "Think Straight - Change your thoughts, change your life",
                      cardImage: "assets/images/library/book_light.jpg",
                      moocLink: "https://drive.google.com/file/d/1u0wIp0i_78q4FE6hcMLKyhEER377DTsb/view?usp=sharing",
       },{
                      title: "Win your inner battles",
                      cardImage: "assets/images/library/book_light.jpg",
                      moocLink: "https://drive.google.com/file/d/1uWScYER4s7h2QZB1LbQ0KmbwjLgiPd6M/view?usp=sharing",
       },{
                      title: "Dont believe everything you think",
                      cardImage: "assets/images/library/book_light.jpg",
                      moocLink: "https://drive.google.com/file/d/1beqxGJV83QgGd7v01aotQO6Y5VyfeaF9/view?usp=sharing",
       },{
                      title: "Grandmas bag of stories",
                      cardImage: "assets/images/library/book_light.jpg",
                      moocLink: "https://drive.google.com/file/d/1PZ6ijyxQvRIiGJSdew88d7j8WArsl6rD/view?usp=sharing",
       },{
                      title: "How to talk anyone",
                      cardImage: "assets/images/library/book_light.jpg",
                      moocLink: "https://drive.google.com/file/d/1dsu88QpdZEsXoXJ-mG1S5-ZFj5JG_E9V/view?usp=sharing",
       },{
                      title: "How to win friends and influence people",
                      cardImage: "assets/images/library/book_light.jpg",
                      moocLink: "https://drive.google.com/file/d/11iVosIhp25bDiyNn7A4Kzqdp5wymXLRK/view?usp=sharing",
       },{
                      title: "Ignited Minds",
                      cardImage: "assets/images/library/book_light.jpg",
                      moocLink: "https://drive.google.com/file/d/1MAtu6Sq8Qub4SnmcTOacDhwYy9eYx1jY/view?usp=sharing",
       },{
                      title: "Ikigai - A japenese secret to a long and happy life",
                      cardImage: "assets/images/library/book_light.jpg",
                      moocLink: "https://drive.google.com/file/d/1G_Bampux89Z7bekzsBBEmsYolmd2bGlv/view?usp=sharing",
       },{
                      title: "Make your bed, little things that can change your life",
                      cardImage: "assets/images/library/book_light.jpg",
                      moocLink: "https://drive.google.com/file/d/1S19VyfAs2H9Bpwr_s3jXjgQE-ci0VgQd/view?usp=sharing",
       },{
                      title: "My idea of education - Swami vivekanand",
                      cardImage: "assets/images/library/book_light.jpg",
                      moocLink: "https://drive.google.com/file/d/1Dnb-yZDJD0G663V5RArwthFFvuRfowlP/view?usp=sharing",
       },{
                      title: "Rich dad and poor dad",
                      cardImage: "assets/images/library/book_light.jpg",
                      moocLink: "https://drive.google.com/file/d/1j_lt7PXJGXu3JH0kdl9J1_XLV9-vID87/view?usp=sharing",
       },{
                      title: "Sapiens - brief history of human kind",
                      cardImage: "assets/images/library/book_light.jpg",
                      moocLink: "https://drive.google.com/file/d/10h1DvNRgfyCwmNSDrZDmN4-BqEfRogVM/view?usp=sharing",
       },{
                      title: "She - understand feminine psychology",
                      cardImage: "assets/images/library/book_light.jpg",
                      moocLink: "https://drive.google.com/file/d/11jqCGceTZhunNa59SQI6CGKHECuqdnyS/view?usp=sharing",
       },{
                      title: "Shoe dog",
                      cardImage: "assets/images/library/book_light.jpg",
                      moocLink: "https://drive.google.com/file/d/1gSeiLpJCXuOXfmFcJ2V_gP6NOsRGoY8d/view?usp=sharing",
       },{
                      title: "Shrimad Bhagwad-Gita",
                      cardImage: "assets/images/library/book_light.jpg",
                      moocLink: "https://drive.google.com/file/d/1xw7JkBzKmJvsaQalpvl1MUjUeUv70BGe/view?usp=sharing",
       },{
                      title: "Surrounded by idiots",
                      cardImage: "assets/images/library/book_light.jpg",
                      moocLink: "https://drive.google.com/file/d/12s22B0KhAsdF__xKq1PEpwyB54or8lVo/view?usp=sharing",
       },{
                      title: "The 4-Hour body",
                      cardImage: "assets/images/library/book_light.jpg",
                      moocLink: "https://drive.google.com/file/d/1IXrUTIdErlN7WTICXC9csnaAr7HozzqH/view?usp=sharing",
       },{
                      title: "The fine art of small talk",
                      cardImage: "assets/images/library/book_light.jpg",
                      moocLink: "https://drive.google.com/file/d/1gfijnr0lcb9mzrkHgMf58NK-AhNgjRBx/view?usp=sharing",
       },{
                      title: "The magic of the lost temple - Sudha murthy",
                      cardImage: "assets/images/library/book_light.jpg",
                      moocLink: "https://drive.google.com/file/d/1CvhY0xeJT1hyHNL125z44r9z6cQIxSQP/view?usp=sharing",
       },{
                      title: "The monk who sold his ferrari",
                      cardImage: "assets/images/library/book_light.jpg",
                      moocLink: "https://drive.google.com/file/d/1XCHALlNLVaSewhE3UCF0Jd6lKuQwilT2/view?usp=sharing",
       },{
                      title: "The power of habit",
                      cardImage: "assets/images/library/book_light.jpg",
                      moocLink: "https://drive.google.com/file/d/1_78l65vSPSMyRzf51uuOhk-Ls4qzJZFE/view?usp=sharing",
       },{
                      title: "The secret - Rhonda Byrne",
                      cardImage: "assets/images/library/book_light.jpg",
                      moocLink: "https://drive.google.com/file/d/1psekVf5c4g9b92FSLcke07VpxK_4l79I/view?usp=sharing",
       },{
                      title: "The subtle art of not giving Fuck - Mark Manson",
                      cardImage: "assets/images/library/book_light.jpg",
                      moocLink: "https://drive.google.com/file/d/1IeoEdM93Y7tlM6PybWmMYjy_C0PJAZH3/view?usp=sharing",
       },{
                      title: "The Alchemist",
                      cardImage: "assets/images/library/book_light.jpg",
                      moocLink: "https://drive.google.com/file/d/1nX9X1oMPjOR3SoUczR3FPwuK0REDReGR/view?usp=sharing",
       },{
                      title: "The 48 laws of power - Robert Greene",
                      cardImage: "assets/images/library/book_light.jpg",
                      moocLink: "https://drive.google.com/file/d/18TgBbRIxBU74OCJ9GQ8dPbnjkxPVZdEV/view?usp=sharing",
       },{
                      title: "The diary of a young girl - Anne frank",
                      cardImage: "assets/images/library/book_light.jpg",
                      moocLink: "https://drive.google.com/file/d/1ia1aashX08GrJzkUNvTUpakIERPj849e/view?usp=sharing",
       },{
                      title: "The road to better habits - Darius foroux",
                      cardImage: "assets/images/library/book_light.jpg",
                      moocLink: "https://drive.google.com/file/d/11WuZV2W1GUusQ3jshR9OiaSQ7Z49fhH6/view?usp=sharing",
       },{
                      title: "The magic of thinking big",
                      cardImage: "assets/images/library/book_light.jpg",
                      moocLink: "https://drive.google.com/file/d/1fsLs7ZeFx141bMQnWBqApIQ4o2zGCGBk/view?usp=sharing",
       },{
                      title: "The Ramayan",
                      cardImage: "assets/images/library/book_light.jpg",
                      moocLink: "https://drive.google.com/file/d/1L_ZqDfTV343gsZ7QZHJT_bl3ZooqJKKH/view?usp=sharing",
       },{
                      title: "Think and Grow Rich, Napolean Hill",
                      cardImage: "assets/images/library/book_light.jpg",
                      moocLink: "https://drive.google.com/file/d/1JJ3GPFncR4vSbwV1mFaJriZn3lI1gQ4a/view?usp=sharing",
       },{
                      title: "Thinking, Fast and Slow",
                      cardImage: "assets/images/library/book_light.jpg",
                      moocLink: "https://drive.google.com/file/d/1vqnt2CruUjdSx8O-a6wKXQg0yDTo5xMp/view?usp=sharing",
       },{
                      title: "Three thousand stitches",
                      cardImage: "assets/images/library/book_light.jpg",
                      moocLink: "https://drive.google.com/file/d/1YzctAyBPrpMhPhnEX1gf78NEQiGLldi5/view?usp=sharing",
       },{
                      title: "Wings of fire - APJ Abdul Kalam",
                      cardImage: "assets/images/library/book_light.jpg",
                      moocLink: "https://drive.google.com/file/d/1lTS1LtCdYwD8ukVIAaS1lQg2ghGD-dgr/view?usp=sharing",
       },{
                      title: "Zero to One - Peter Thiel",
                      cardImage: "assets/images/library/book_light.jpg",
                      moocLink: "https://drive.google.com/file/d/1J8C1kE1NgvsFGA6suJdd_VJBC5hYcgMV/view?usp=sharing",
       },

];

const showCards3 = () => {
  let output = "";
  moocscards.forEach(
    ({ title, cardImage, moocLink }) =>
    (output += `
        <div class="col-6 col-md-3 col-sm-4 column" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="600" >
            <div class="card mb-3 mx-auto">
               <div class="content">
                  <div class="content-overlay"></div>
                    <img src=${cardImage} class="card-img-top content-image">
                  <div class="content-details fadeIn-bottom">
                    <a href="${moocLink}" target="_blank"><i class="fa fa-info-circle fa-2x" aria-hidden="true" style="color: white;"></i></a>
                  </div>
                </div>
                <div class="card-body">
                    <h6 class="mt-0 py-2 text-center font-weight-bold mooc-title" style="font-size:12px;">${title}</h6>
                </div>
            </div>
        </div>
      `)
  );
  moocs.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards3);



