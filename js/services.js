

const servicesArray = [
    {
        icon: "laptop",
        title: "Web Design",
        desciption: "Lorem Ipsum is simply dummy text of the Lorem Ipsum has been the industry's standard dummy text ever"
    },
    {
     icon: "bullhorn",
     title: "Branding",
     desciption: "Lorem Ipsum is simply dummy text of the Lorem Ipsum has been the industry's standard dummy text eve"
 },
 {
     icon: "umbrella",
     title: "Development",
     desciption: "Lorem Ipsum is simply dummy text of the Lorem Ipsum has been the industry's standard dummy text ever"
 }
 ,
 {
     icon: "diamond",
     title: "Creative Design",
     desciption: "Lorem Ipsum is simply dummy text of the Lorem Ipsum has been the industry's standard dummy text ever"
 },
 {
     icon: "television",
     title: "Fully Responsive",
     desciption: "Lorem Ipsum is simply dummy text of the Lorem Ipsum has been the industry's standard dummy text ever"
 },
 {
     icon: "camera",
     title: "Retina Ready",
     desciption: "Lorem Ipsum is simply dummy text of the Lorem Ipsum has been the industry's standard dummy text ever"
 }
 ]
 
 let HTML = "";
for( let i = 0; i < servicesArray.length; i++) {
   HTML =` <div>
    <i class=" fa fa-${servicesArray[i].icon}" ></i>
    <h3>${servicesArray[i].title}</h3>
    <p>${servicesArray[i].desciption} </p>
</div>   ` 
document.querySelector(".services").innerHTML += HTML;
}
document.querySelector(".services").insertAdjacentHTML("afterbegin", "<h2> Services. </h2>");















