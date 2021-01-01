<div align="center">
  <h1>Weather-App</h1>
</div>

The Weather App is a real-time project developed using JavaScript, CSS, Express and Handlebars. This project is an interesting project for simply weather forecasting. The user can check the condition of the present-day climate probability and predict whether the day is a cloudy or sunny day. The user can write down the name of any city across the world in the app.  

## Get Started

1. **Clone or download this repository**. `git clone https://github.com/Amulya-coder/Weather-App.git`

2. **Create a package.json file for your application**.
   `npm init`

3. **Now install Express in the weather-app directory and save it in the dependencies list. For example:**
    `npm install express`.
    
4. **After that install nodemon as globally** `npm install -g nodemon`

5.  **Handlebars Installation** 
    
    Install using npm
  ```
  npm install express-handlebars
  ```
  
  ## Usage
  
I like this view engine because it uses sensible defaults that leverage the "Express-way" of structuring an app's views. This makes it trivial to use in basic apps:

### Basic Usage

**Directory Structure:**

```
.
├── Templates
└── partials
    ├── footer.hbs
    ├── headerLinks.hbs
    ├── navbar.hbs
└── views
    ├── 404error.hbs
    ├── about.hbs
    ├── index.hbs
    ├── weather.hbs

3 directories, 7 files
```

5. **Run the App by using command:** `nodemon src/app.js -e js,hbs`
 
6. **Insert the API key** that you got from [OpenWeatherMap](http://openweathermap.org) in `public/js/main.js`

 
