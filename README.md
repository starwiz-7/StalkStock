<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Thanks again! Now go create something AMAZING! :D
-->

<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->

[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/othneildrew/Best-README-Template">
    <img src="https://res.cloudinary.com/hackbot/image/upload/v1615524571/logo_wvpv5h.png" alt="Logo" width="160" height="90">
  </a>

  <h3 align="center">StalkStock</h3>

  <p align="center">
    A virtual trading application.
    <br />
    <br />
    <a href="https://stalk-stock.vercel.app">Demo</a>
    ·
    <a href="https://github.com/starwiz-7/StalkStock/issues">Report Bug</a>
    ·
    <a href="https://github.com/starwiz-7/StalkStock/issues">Request Feature</a>
  </p>
</p>

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-stalkstock">About</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <!-- <li><a href="#acknowledgements">Acknowledgements</a></li> -->
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About StalkStock

[![Product Name Screen Shot][product-screenshot]]([https://res.cloudinary.com/hackbot/image/upload/v1615446409/dashboard_j3xenl.png])

StalkStock is a web application built in ReactJS to help new traders enter the trading world by allowing them to trade stocks in realtime using the virtual currency provided on signup. Users can bookmark their favourite stocks and observe them.
StalkStock shows stock with realtime data with news related to them and various important terms related to them.

### Built With

-   [React](https://reactjs.org)
-   [SASS](https://sass-lang.com)
-   [Firebase](https://firebase.google.com)
-   [ChartJS](https://www.chartjs.org/docs/latest/)

<!-- GETTING STARTED -->

## Getting Started

To get a local copy of StalkStock up and running follow these simple steps.

### Prerequisites

npm is required to start with local development.

-   npm
    ```sh
    npm install npm@latest -g
    ```

### Installation

1. Fork the repo and then clone the repo
    ```sh
    git clone https://github.com/your_username_/StalkStock.git
    ```
2. Install NPM packages
    ```sh
    npm install
    ```
3. Get the API keys from:

    - [IEX API](https://iexcloud.io)
    - [FMP](https://financialmodelingprep.com/developer/docs/)
    - [Alpha Vantage](https://www.alphavantage.co)

4. Create a `.env` file in the root directory. Enter your API in `.env`
    ```sh
    REACT_APP_IEX_KEY_1 = 'API KEY'
    REACT_APP_IEX_KEY_2 = 'API KEY'
    REACT_APP_IEX_KEY_3 = 'API KEY'
    REACT_APP_FMP_KEY = 'FMP API KEY'
    ```
    The same IEX API key can be used in all 3 API slots. This is just to not exhaust the monthly quota of API calls. Enter the FMP key in the file too. Use the Alpha Vantage API key in the `dashboard.js` file in the `apiKeys` array.
5. Create a Firebase project for web and enable the use of Firestore and Realtime DB. Enter the Firebase credentials in the `.env` file using the same variables used in `auth.js`.

6. Download the [JSON](https://drive.google.com/drive/folders/1Isf4VAumMfD3fMKcZoUmssIZ_JzYxq0c?usp=sharing) file and import in Firebase Realtime DB. This is to limit the API calls to IEX Cloud.
 <!-- USAGE EXAMPLES -->

## Usage

StalkStock can be used by traders who want to enter the trading world, they can practice trading stocks here for free using virtual currency. It can also be used by traders who want to keep a watch on some stocks in the market.

<!-- ROADMAP -->

## Roadmap

See the [open issues](https://github.com/starwiz-7/StalkStock/issues) for a list of proposed features (and known issues).

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE` for more information.

<!-- CONTACT -->

## Contact

Your Name - [Aryan Yadav](https://twitter.com/7Aryany) - aryan2019@iiitkottayam.ac.in

Project Link: [https://github.com/starwiz-7/StalkStock](https://github.com/starwiz-7/StalkStock)

<!-- ACKNOWLEDGEMENTS -->

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[stars-shield]: https://img.shields.io/github/stars/starwiz-7/StalkStock.svg?style=for-the-badge
[stars-url]: https://github.com/starwiz-7/StalkStock/stargazers
[issues-shield]: https://img.shields.io/github/issues/starwiz-7/StalkStock.svg?style=for-the-badge
[issues-url]: https://github.com/starwiz-7/StalkStock/issues
[license-shield]: https://img.shields.io/github/license/starwiz-7/StalkStock.svg?style=for-the-badge
[license-url]: https://github.com/starwiz-7/StalkStock/blob/main/LICENSE
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/yadav-aryan
[product-screenshot]: https://res.cloudinary.com/hackbot/image/upload/v1615446409/dashboard_j3xenl.png
