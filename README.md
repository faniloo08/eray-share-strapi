# first, clone the projet
using **git.clone**
# Then, run it localy 
**npm run start**
This will start the server at localhost:1337

Now you will enter the strapi admin interface 
Enter your login info and see what strapi collections are

In this project, these are the collections : 
## Courses : the main content, as the project is envolved in elarning. 
## Etudiants : one type of users, the student, supposed to only comment courses and interact with the contents
## Formateurs : the type of users that actually "create" the courses, the professors
## Commentaires : comments submitted by the students about any courses
## Facture : the bills payed by the professors when they submit their courses

## And so on, please check the collection-types to see them all

## Check the content-type builder to see what are the fields and relations in these collections

I have already seeded some datas in **./temp/data.db** for the test, you can check them by :
- Going to **./temp**
- Run **sqlite3 daba.db** in your terminal
- Check **.tables** to see the exhaustive lists of tables created
- Run the SQL query **SELECT * FROM (any table name in there)** to see the contains of the table

To access the APIs, I had set up a simple way to do so in the **TestAPI folder** so we can access the data easily.
I chose the **Courses** example but any content will follow the same logic and pattern. For instance, to access the title of the 1st courses, the appropriate format will be **Courses[0].titre**, its description at : **Courses[0].description** and the whole course information at **Courses[0]**
