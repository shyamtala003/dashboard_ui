let recentActivtyList = [{
        name: 'Agerotunm Houstianianum',
        orderTitle: 'Order a new plant',
        personImage: './images/profile_pics/1.webp',
        recordArrivalTime: '3 min ago'

    },
    {
        name: 'ShyamKumar Tala',
        orderTitle: 'Order a new plant',
        personImage: './images/profile_pics/2.webp',
        recordArrivalTime: '23 hr ago'

    },
    {
        name: 'Jaasmin Sandlass',
        orderTitle: 'Order a new plant',
        personImage: './images/profile_pics/11.webp',
        recordArrivalTime: '43 min ago'

    },
    {
        name: 'Devanshi Mohan',
        orderTitle: 'Order a new plant',
        personImage: './images/profile_pics/22.webp',
        recordArrivalTime: '55 min ago'

    },
    {
        name: 'Thomas Grrece',
        orderTitle: 'Order a new plant',
        personImage: './images/profile_pics/3.webp',
        recordArrivalTime: '1 hr ago'

    },
    {
        name: 'Dilshad Erani',
        orderTitle: 'Order a new plant',
        personImage: './images/profile_pics/33.webp',
        recordArrivalTime: '2 hr min ago'

    },
]

//    <div class = "record" >
//        <div class = "record_info" >
//         <img src = "./images/profile_pics/1.webp" alt = "" class = "person_image" />
//         <div class = "person_data">
//                  <h2 class = "person_name" > Agerotunm Houstianianum </h2> 
//                  <p class = "person_record_title" > Order a new plant </p> 
//         </div> 
//        </div> 
//        <div class = "record_arrival_time" > 3 min ago </div> 
//     </div> 

let addRecord = (data) => {

    let recordCotainer = document.querySelector('.activity_list');

    let record = document.createElement('div');
    record.classList.add("record");

    let recordInfo = document.createElement('div');
    recordInfo.classList.add("record_info");

    let personImage = document.createElement('img');
    personImage.classList.add("person_image");
    personImage.setAttribute("src", data.personImage);

    let personData = document.createElement('div');
    personData.classList.add("person_data")

    let personName = document.createElement('h2');
    personName.classList.add("person_name");
    personName.textContent = data.name;

    let personRecordTitle = document.createElement('p');
    personRecordTitle.classList.add("person_record_title");
    personRecordTitle.textContent = data.orderTitle;

    let recordArrivalTime = document.createElement('div');
    recordArrivalTime.classList.add("record_arrival_time");
    recordArrivalTime.textContent = data.recordArrivalTime;

    // append child for build the perfect order div
    recordInfo.append(personImage);

    personData.append(personName);
    personData.append(personRecordTitle);

    recordInfo.append(personData);

    record.append(recordInfo);
    record.append(recordArrivalTime);


    recordCotainer.append(record);
}

recentActivtyList.map((data) => {
    addRecord(data)
})