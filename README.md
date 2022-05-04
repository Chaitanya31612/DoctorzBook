# DoctorzBook

![DoctorzBook](https://socialify.git.ci/Chaitanya31612/DoctorzBook/image?description=1&font=Bitter&language=1&name=1&owner=1&stargazers=1&theme=Dark)

DoctorzBook is a real-time appointments booking application where user can book appointments with doctors from the convenience of their homes. This application provides user with a very intuitive user experience and try to make appointments process as easy as it can get.

The Pandemic has revealed a clear gap between the patient and the doctor. To fill that void, we present Doctorzbook, a service that allows you to schedule appointments with doctors at your convenience.

This is a project that is built as a part of Veersa Technologies Hackathon competition with aim of Transforming Healthcare through technology innovation. The submission is made by students of Deenbandhu Chottu Ram University of Science and Technology, Murthal(Sonipat), Haryana.
Doctors are lifesavers and that is why they shouldn't be too far from those who need healthcare. With more and more people having the need to seek medical attention, doctors need to make their services accessible and available to their patients. In this time and age where everything and anything can be found on the internet, we need to take advantage of the digital tools/ channels to enable quick scheduling of appointments.

# Video

https://user-images.githubusercontent.com/54992097/166520275-d426cb89-1044-4c16-8167-1e5d9df76cb1.mp4

# Photos

### Landing Page

![Screenshot (134)](https://user-images.githubusercontent.com/54992097/166520595-da7587c6-6368-4f02-9e02-940388d03758.png)
![Screenshot (136)](https://user-images.githubusercontent.com/54992097/166520606-692a8a98-1d73-44f2-a060-95476d3c67df.png)
![Screenshot (137)](https://user-images.githubusercontent.com/54992097/166520621-d7664ff1-cb05-4dd8-8417-c51862bbdefe.png)
![Screenshot (138)](https://user-images.githubusercontent.com/54992097/166520625-d6dbbc34-c290-4fda-8b7f-63b3dde32f92.png)
![Screenshot (153)](https://user-images.githubusercontent.com/54992097/166621497-22d92c86-7457-4f73-98fe-3bb0b6268258.png)

### Auth Page

![Screenshot (158)](https://user-images.githubusercontent.com/54992097/166626430-522643d5-9436-4d09-97d4-02a333407dad.png)
![image](https://user-images.githubusercontent.com/54992097/166626506-41a32494-0286-4253-93bf-fa3309d59ab2.png)
![Screenshot (157)](https://user-images.githubusercontent.com/54992097/166626431-ac4d835e-862c-4f55-89f0-c29ce6e7aec0.png)

### User Dashboard

![Screenshot (139)](https://user-images.githubusercontent.com/54992097/166520975-e37bef5a-876e-4ba4-8e9a-4d700187b6ec.png)
![Screenshot (150)](https://user-images.githubusercontent.com/54992097/166520972-9d4ac28d-f842-446b-b70d-fb4fdf52abb5.png)
![Screenshot (151)](https://user-images.githubusercontent.com/54992097/166523282-617e7a84-6ba8-4aeb-a20b-3b1f8b9d748c.png)
![Screenshot (149)](https://user-images.githubusercontent.com/54992097/166520980-bc71a3fc-de03-47cb-b963-ad1199fd94ef.png)

### Doctor Dashboard

![Screenshot (152)](https://user-images.githubusercontent.com/54992097/166621077-e2af2d48-fa9e-49c0-933f-c9532ff57fae.png)
![Screenshot (155)](https://user-images.githubusercontent.com/54992097/166621698-8c985a25-f766-48fd-85e0-ef52599c412c.png)

### Testing
Postman testing of API's. Here are some for example
![image](https://user-images.githubusercontent.com/54992097/166694978-1b40c7c1-8d86-4297-86eb-d3af86acb8d3.png)
![image](https://user-images.githubusercontent.com/54992097/166693912-c9d37788-3058-48c0-ba70-7ca2d444f1c7.png)
![image](https://user-images.githubusercontent.com/54992097/166693965-7076b3a0-2812-4433-959e-13b77efd0393.png)

Mocha Unit testing for Node.js Application
![image](https://user-images.githubusercontent.com/54992097/166693486-4500e6c5-9915-4542-b3e5-0283aae89002.png)



## Inspiration
We all know that during the pandemic that happened, we lost many lives just because of a lack of communication between doctors and patients. Patients were in need of hospital beds or facilities but couldn't find them primarily because of a lack of resources but also because there was no such system where users can find places where slots are free for them. This could have saved them from going from one hospital to other in search of beds.
So with our project DoctorzBook, it's one of our initiative to help society and save lives.


## What it Does
Our project DoctorzBook is an online real-time appointment booking application where users can book an appointment with doctors from the convenience of their homes. This project can act as life saver in times like pandemics where going from hospital to hospital is neither suitable nor safe for the patients and other people.

Our project's main motive is to make the appointment process as easy as it can get. It provides users with a simple interface where they can find the nearest doctors and book appointments within seconds.
Primary Services of our application include:-
### 1. Easy Bookings
Find the availability of all doctors and book an appointment.
### 2. Find Doctors Nearby
Ability to find doctors near your location with doctors list sorted basis the distance
### 3. Real-time bookings
There shall not be any conflicting consultation for the doctors/patients at the booked time slots.

Our application provides various other features:-
* **Amazing User Experience and Fast access** - As our application is built using the MERN stack, it is very fast in operation and is highly dynamic in operation. Also it is built after proper designing in tools like Figma and much focus is given to make the user experience top-notch.

* **Booking Form Validation**
  * Our Booking page is dynamic and real-time. It provides users with easy booking options.
  * However there are some gotchas like if the user tries to book a slot whose date or time has been passed he will not be able to book that slot.
  * If some user booked a slot, then that slot will be made disabled for every other user.
  * If two people are on the site and try to book a slot on the same date and time, only one who booked first will have the appointment while the other will be shown a modal that slot has been booked, kindly look for another slot.

* **Sorting of doctors according to user's location**
 The user is given an option to sort the doctors who are nearest to the user currently, this can be really beneficial for users as they see all at once no matter where they are.

* **Appointment Page**
  Our appointments page list all the appointments for current user and show status codes like **Upcoming**, **Attended**, **In Progress**.
  Doctors are also provided with a list of patients along with their contact details and time slots booked by them.
  
* **Easy Cancellation**
  Users are given the option to cancel their appointments and this will free that current time slot in the calendar for other patients. 


## How we built it
In order to build any application or software first, we need to understand what the project wants from us. So we first analysed the problem statement, then in our group discussion we all proposed some ideas out of which some were rejected while others were brainstormed upon. 

Before getting into coding we made wireframes for how our site should look and what our API structure and database schemas should look like. This visual representation enabled us to understand exactly what is happening and how we are going to achieve it.
Then gradually we moved forward and piece by piece developed the application.

The application is built using the MERN stack and has used best coding practices and code structure which are prevalent in the software industry.
While building the application, we tested it thoroughly like we checked whether each page is behaving properly and we tested each test case that we made, we also tested all APIs using Postman.

Currently, for this state of our application, we haven't used any third party services in our app and it's a product of pure logic and design. For the location-based sorting, we have used GeoJSON format in our mongoose schema which enabled us to sort the documents according to passed coordinates.

### Built With
* React.js
* Express.js
* MongoDB
* Node.js 
* Redux
* SCSS
* Figma/Adobe Xd/Draw.io


### Testing
Testing of this application is thoroughly done and this application is error free.
We have tested the site as follows:-
1. Postman for API Testing
2. Mocha and Chai library
3. Testing of UI elements according to test cases.
4. Alpha testing within the team.


## Challenges we ran into
Challenges are a part of project building and we also ran into several challenges along the way but through hard work and determination, we got through all and finished the project.

Various challenges like data not getting passed to a component, a component not rendering properly, css not working properly and breaking the page or API calls not returning data properly happened and these problems got resolved through research and teamwork.

Although working in a team brings a lot of ideas some good, some bad to the table but we managed to keep only the ideas which are relevant for this application and made sure that everyone agrees on it unless they have a good reason.


## Accomplishments that we're proud of
We are proud that we took part in this initiative and got to know how technology can save lives if used in the right place at right time.
Saving lives is the best accomplishment in the world and we are all proud that we have taken initiative regarding the issue.
We have implemented all the required features which are essential to this application in the provided time and we are extremely proud of it and hope it reaches forward.


## What we learned
We learnt a very essential thing which is how to prioritise work and complete a given task in short time through determination and teamwork. We learnt that there is always scope for more improvements and that it depends on us what vision we have in our minds.

This hackathon organised by Veersa proved very beneficial for all of us and we thank Veersa for providing this opportunity.

The main attributes of learning include time management, cooperation, prioritization of work, determination and hard work.
We also learned design patterns for software, efficient structure for our database schemas, GeoJSON format available in MongoDB for searching according to coordinates, and testing of API and user interfaces.


## What's next for DoctorzBook
There is always scope for more, so were are not getting settled here and we want to bring this application in mainstream and make it accessible to users all around the world because relation of doctors and users is same everywhere. I am also working on a Medical Diagnosis application with my friend wherein user has to pass his/her X-Ray and they get predictions which tells with percentage surety as how much a person is likely to have a disease.
So we will work on this project and introduce features:-
* payment gateway for complete transaction processing
* on door doctor facilities to patients wherever possible.
* prescriptions and customised reports for patients and doctors
* and will look for all available options along the way.


### Contributors👩‍💻👨‍💻 :

<a href="https://github.com/Chaitanya31612/DoctorzBook/graphs/contributors">
  <img src="https://contributors-img.web.app/image?repo=chaitanya31612/DoctorzBook" />
</a>
