### **Frontend Developer Assignment (Task)**

#### **Assignment Overview**

Create a responsive web page for a fictional wellness retreat webpage. The page should display a list of available retreats, allowing users to filter them by date and type.

#### **Requirements**

1. **Single Page Layout**:  
   * Create a single-page application using React.  
   * Include a header with the title "Wellness Retreats".  
   * Display a list of retreats with the following details: Image, Title, Description, Date, Location, and Price.

           **Mock UI to be implemented** :   
                   1\. Desktop : [Click Here](https://app.uizard.io/p/74798aa0)  
                   2\. Mobile: [Click Here](https://app.uizard.io/p/626e7674)  
          ( This is to ensure that you make a responsive design for any device type)  
        
***Note:** Whatever information or assets that are not available , please make sure that you  use dummy/placeholder assets.*

1. **Mock Data**:  
   * You can find the mock JSON [here](https://669f704cb132e2c136fdd9a0.mockapi.io/api/v1/retreats).  
   * To get individual retreat level data at retreat id:  
     [https://669f704cb132e2c136fdd9a0.mockapi.io/api/v1/retreats/{id](https://669f704cb132e2c136fdd9a0.mockapi.io/api/v1/retreats/{id)}, for ex: [https://669f704cb132e2c136fdd9a0.mockapi.io/api/v1/retreats/1](https://669f704cb132e2c136fdd9a0.mockapi.io/api/v1/retreats/1)

1. **Implement Filter, Search and Pagnation Functionality**:  
   * Implement a filter section at the top of the page that allows users to filter retreats by date and type (e.g., Yoga, Meditation, Detox).

   **Filter APIs:**

   To find wherever Wellness exists in the data:  
     [https://669f704cb132e2c136fdd9a0.mockapi.io/api/v1/retreats?filter=Wellness](https://669f704cb132e2c136fdd9a0.mockapi.io/api/v1/retreats?filter=Wellness) 

   

   To find for ex. if the field location is Pune(similarly you can apply on other fields) [https://669f704cb132e2c136fdd9a0.mockapi.io/api/v1/retreats?location=Pune](https://669f704cb132e2c136fdd9a0.mockapi.io/api/v1/retreats?location=Pune)

   

   **Pagination API example:**

   [https://669f704cb132e2c136fdd9a0.mockapi.io/api/v1/retreats?page=1\&limit=5](https://669f704cb132e2c136fdd9a0.mockapi.io/api/v1/retreats?page=1\&limit=5)

   

   Implement a search bar to quickly find retreats by title.

   **Search API example:** [https://669f704cb132e2c136fdd9a0.mockapi.io/api/v1/retreats?search=Wellness](https://669f704cb132e2c136fdd9a0.mockapi.io/api/v1/retreats?search=Wellness)

 


1. **Responsive Design**:  
   * Ensure the page is fully responsive and works well on both desktop and mobile devices.  
   * Use CSS or TailwindCSS for styling.

####   **Submission Guidelines**

* Submit the project as a GitHub repository link.  
* Include a README file with instructions on how to set up and run the application.  
* Ensure your code is well-documented and follows best practices.

#### **Evaluation Criteria**

* Code quality and organisation.  
* User interface design and responsiveness.  
* Functionality and completeness of features.  
* Creativity and bonus features implemented.


