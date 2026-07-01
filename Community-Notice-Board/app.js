let idCounter=0;
const cardContainer=document.getElementById("card_container");
const allButton=document.getElementById("all");
const announcementButton=document.getElementById("announcement");
const eventButton=document.getElementById("event");
const urgentButton=document.getElementById("urgent");
const search_Notice=document.getElementById("searchInput");
let Notices=[{
    id:idCounter++,
    title:"Community Meeting",
    category:"Announcement",
    description:"Join us for a community meeting to discuss upcoming events and initiatives.",
    date:"2023-09-15"
},
 {
    id:idCounter++,
    title:"Blood Donation Drive",
    category:"Event",
    description:"We are organizing a blood donation drive. Your contribution can save lives.",
    date:"2023-09-20"
},
 {
    id:idCounter++,
    title:"University Registration Deadline",
    category:"Announcement",
    description:"Reminder: The registration deadline for the upcoming semester is approaching. Make sure to complete your registration on time.",
    date:"2023-09-25"
},
 {
    id:idCounter++,
    title:"Water Supply Maintenance",
    category:"Urgent",
    description:"Please be informed that there will be a scheduled maintenance of the water supply system in our community. Water supply may be temporarily disrupted during this period.",
    date:"2023-09-30"
},
{
    id:idCounter++,
    title:"Community Clean-Up Event",
    category:"Event",
    description:"Join us for a community clean-up event to help keep our neighborhood beautiful.",
    date:"2023-10-05"
}]
allButton.addEventListener("click",displayAll);
announcementButton.addEventListener("click",displayAnnouncements);
eventButton.addEventListener("click",displayEvents);
urgentButton.addEventListener("click",displayUrgent);
search_Notice.addEventListener("input",searchNotices);

function createCards(Notice){
    
   for (let i=0;i<Notice.length;i++){
    const card=document.createElement("div");
    card.className="card";
    const title=document.createElement("h2");
    title.textContent=Notice[i].title;
    const category=document.createElement("p");
    category.textContent="Category: "+Notice[i].category;
    const description=document.createElement("p");
    description.textContent=Notice[i].description;
    const date=document.createElement("p");
    date.textContent="Date: "+Notice[i].date;
    card.appendChild(title);
    card.appendChild(category);
    card.appendChild(description);
    card.appendChild(date);
    cardContainer.appendChild(card);
    setTimeout(() => {
    card.classList.add("show");
}, 10);
   }    
}
createCards(Notices);

function displayAll(){
    cardContainer.innerHTML="";
    createCards(Notices);
}
function displayAnnouncements(){
    cardContainer.innerHTML="";
    const Announcements=Notices.filter(notice=>notice.category==="Announcement");
    createCards(Announcements);
}

function displayEvents(){
    cardContainer.innerHTML="";
    const Events=Notices.filter(notice=>notice.category==="Event");
    createCards(Events);
}

function displayUrgent(){
    cardContainer.innerHTML="";
    const Urgent=Notices.filter(notice=>notice.category==="Urgent");
    createCards(Urgent);
}

function searchNotices(){
    cardContainer.innerHTML="";
    const searchTerm=search_Notice.value.toLowerCase();
    const SearchedNotices=Notices.filter(notice=>notice.title.toLowerCase().includes(searchTerm) || notice.description.toLowerCase().includes(searchTerm));
    createCards(SearchedNotices);
}
