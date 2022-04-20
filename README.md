# Michelin Star

A project that uses the following data: https://www.kaggle.com/datasets/ngshiheng/michelin-guide-restaurants-2021

Use the following to start the project:

```
node server.js
```

This will start a server at localhost:8000. Go to that web address in chrome to see the site.

You can import data from `michelin__clearned.csv` into a DB of your choice. I used MySQL.

Check the DB folder for statements to create tables. You'll also need to run the web scrapers to get descriptions and images for the restaurants.

### Future

1) Everything is very early right now, so development in general
2) Add an API so other applications can use the data
3) (Maybe) Pull country/city fields out of the address
