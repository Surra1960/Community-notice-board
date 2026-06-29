let idCounter=0;

let Notices=[Notice1={
    id:idCounter++,
    title:"Community Meeting",
    category:"General",
    description:"Join us for a community meeting to discuss upcoming events and initiatives.",
    date:"2023-09-15"
},
 Notice2={
    id:idCounter++,
    title:"Blood Donation Drive",
    category:"Health",
    description:"We are organizing a blood donation drive. Your contribution can save lives.",
    date:"2023-09-20"
},
 Notice3={
    id:idCounter++,
    title:"University Registration Deadline",
    category:"Education",
    description:"Reminder: The registration deadline for the upcoming semester is approaching. Make sure to complete your registration on time.",
    date:"2023-09-25"
},
 Notice4={
    id:idCounter++,
    title:"Water Supply Maintenance",
    category:"Utilities",
    description:"Please be informed that there will be a scheduled maintenance of the water supply system in our community. Water supply may be temporarily disrupted during this period.",
    date:"2023-09-30"
},
Notice5={
    id:idCounter++,
    title:"Community Clean-Up Event",
    category:"Environment",
    description:"Join us for a community clean-up event to help keep our neighborhood beautiful.",
    date:"2023-10-05"
}]

const cardContainer=document.getElementById("card_container");
for(let i=0;i<Notices.length;i++){
    const card=document.createElement("div");
    card.className="card";
    const title=document.createElement("h2");
    title.textContent=Notices[i].title;
    const category=document.createElement("p");
    category.textContent="Category: "+Notices[i].category;
    const description=document.createElement("p");
    description.textContent=Notices[i].description;
    const date=document.createElement("p");
    date.textContent="Date: "+Notices[i].date;
   
    card.appendChild(title);
    card.appendChild(category);
    card.appendChild(description);
    card.appendChild(date);
    cardContainer.appendChild(card);
}