AOS.init();

//  Work experience cards


const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "Senior Android Engineer",
    cardImage: "assets/images/experience-page/backbase.png",
    place: "Backbase",
    time: "(December, 2022 - Present)",
    desp: "<li>Working in the Banking domain for SNB Neo bank, open banking live and having 1M+ downloads, WSECU azure devops and SSB Retail bank retail project</li> <li> Good understanding of security mechanisms, like Android KeyStore, encryption, SSL pinning and hardening (ProGuard, DexGuard or similar).</li> <li>Earned SAFe 6.0 certification. Monitored and trained team to work on Agile and Scrum platform development follow best practice.</li>",
  },
  {
    title: "Senior Software Engineer",
    cardImage: "assets/images/experience-page/ibm.jpg",
    place: "IBM",
    time: "(December, 2020 - November, 2022)",
    desp: " <li>Worked on DBS having 1M+ downloads and Santander US Banking apps having 10L+ downloads.</li><li>Redeveloped an existing system to support customer account management, scheduling, and time tracking; enabled dynamic API calls with the help of Amazon API Gateway, AWS Lambda, and DynamoDB.</li>",
  },
  {
    title: "Senior Software Developer",
    cardImage: "assets/images/experience-page/accenture.png",
    place: "Accenture",
    time: "(April, 2020 - December, 2020)",
    desp: "<li>Lead a team to reduce the Reverse Engineering backlog by over 50% in the first quarter, by developing a tool to automate repetitive tasks, and reducing the triage time per case by 25%.</li><li>Gained hands-on expertise in Ghidra, JADX and similar reverse engineering tools. Conducted unit and load testing for high profile customer facing applications.</li>",
  },
  {
      title: "Lead Engineer",
      cardImage: "assets/images/experience-page/hcl.png",
      place: "HCL",
      time: "(Feb, 2018 - April, 2020)",
      desp: " <li>Worked on Soehnle Connect application having 1L+ downloads.</li><li>Developed IOT, Bluetooth based android applications for a client of health and tracking domain, which achieved 90% accuracy, and was delivered on time and within budget.</li><li>Mentored 2 interns to optimize BLE algorithm and to include the multiple devices, increasing overall speed by 75%.</li>",
  },
  {
          title: "Senior Android Developer",
          cardImage: "assets/images/experience-page/solutionavenues.jpeg",
          place: "Solution Avenues LLP",
          time: "(Feb, 2017 - Feb, 2018)",
          desp: " <li>Worked on Aavas Financiers having 500K+ downloads, NM Financiers, Helping hands apps having 1k+ downloads and Festal Events having 1k+ downloads.</li>",
  },
  {
      title: "Android Developer",
      cardImage: "assets/images/experience-page/dotsquares.png",
      place: "Dotsquares",
      time: "(April, 2016 - January, 2018)",
      desp: "<li>Worked on NationalSameDay having 1k+ downloads, JustEat with 10M+ downloads.</li>",
  },
  {
        title: "Mobile Developer",
        cardImage: "assets/images/experience-page/advaiya.jpeg",
        place: "Advaiya Solutions Pvt Ltd",
        time: "(Oct, 2014 - March, 2016)",
        desp: "<li>Worked on ScrumTotal and QuickProject applications.</li><li>Developed scrum management, EMS-ERP based android applications to analyze and process data for different client.</li>",
    },
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp, mockLink }) =>
      (output += `        
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
      <div class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </div>
    </div>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);


