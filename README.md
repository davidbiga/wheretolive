# wheretolive
Hackmidwest 2018 - Best Machine Learning Application

This application connects to Elasticsearch Machine Learning API running on localhost to retrieve the top forecasted states that will have the lowest HPI rates.  HPI stands for Housing Pricing Index.  The higher the HPI rate, the more expensive homes  are.

We use a low mean function to look for anomilies in all 50 states data from 1992 - now to help with the prediction on cheapest states to purchase a Single Family Home.

See the data folder which contains HPI rates for states from 1992 - now.  It also contains the anomily ML JSON feed that can be used to implement into kibana.

When results are returned from `main.js`, they are populated to a USA map.

For questions, reach out to biga.david@gmail.com.

## resources
https://catalog.data.gov/dataset/fhfa-house-price-indexes-hpis
https://www.elastic.co/
