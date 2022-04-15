# Michelin Star

A project that uses the following data: https://www.kaggle.com/datasets/ngshiheng/michelin-guide-restaurants-2021

Use the following to start the project:

```
python3 -m http.serve
```

This will start a server at localhost:8000. Go to that web address in chrome to see the site.

You can import data from `michelin__clearned.csv` into a DB of your choice. I used MySQL.

### Future

1) Everything is very early right now, so development in general
2) Add an actual server (maybe node)
3) Add an API so other applications can use the data
4) (Maybe) Scrape websites in the data for images and descriptions of websites
5) (Maybe) Pull country/city fields out of the address
6) (Maybe) convert currency to something standardized (USD)
    6.1) This is somewhat done, still need a few currencies
