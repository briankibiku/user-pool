# UserPool


KEY : â COMPLETE, â NOT DONE, ð§ PARTLY DONE

## Achieved Target Topics
â Display below user information

    â¢ Name
    â¢ Gender
    â¢ Location
    â¢ E-mail
    â¢ Current Age
    â¢ Registration Seniority (period since registration)
    â¢ Phone number
    â¢ Picture

â Should be possible to filter by gender and by nationality.

âShould be possible to export current list by CSV or XML.

## Required topics to take into account:

â  Focus on design (feel free to use component libraries, p.e. Angular Material)

â Code standards / clean code

ð§ Unit Testing

â Responsiveness

â Docker with the necessary configs to serve the SPA

## To Complete if added more time

- Testing (unit and E2E)
- Filtering by gender and nationality
- Infinity scrollingInfinite/Virtual Scrolling
- Possibility to add or remove columns
- Only request the fields that really need (based on the columns selected)


## Running the project

### Method 1: Cloning from github

1. Clone using this command ```git@github.com:briankibiku/user-pool.git```
2. Run ```npm install && ng serve``` open app on port localhost/4200

### Method 2: Using docker
1. Clone using this command ```git@github.com:briankibiku/user-pool.git```
2. Build the docker file locally
3. Open docker desktop and navigate to images 
![Screenshot from 2022-08-25 06-41-51](https://user-images.githubusercontent.com/10972674/186571007-49e6302e-83fe-4352-8fe3-b85d7249fda1.png)

4. Click on the RUN button on the ```user-pool``` image and confirm to Run
![Screenshot from 2022-08-25 06-42-35](https://user-images.githubusercontent.com/10972674/186571033-67d90e32-f466-4365-a193-29563899cbe4.png)
![Screenshot from 2022-08-25 06-43-06](https://user-images.githubusercontent.com/10972674/186571047-506ce167-c72d-482e-a952-5b9551d1604d.png)

5. Click on the play button to```start``` and run the container
![Screenshot from 2022-08-25 06-43-36](https://user-images.githubusercontent.com/10972674/186571120-37d7d785-5e22-4399-9b2b-5a0605d97c82.png)

6. Open the image on browser on address localhost:4200
![Screenshot from 2022-08-25 06-59-53](https://user-images.githubusercontent.com/10972674/186571729-cd0fd844-a4dd-4354-961f-207689cc9bb0.png)


