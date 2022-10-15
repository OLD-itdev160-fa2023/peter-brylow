(function() {

var data = [
    {
        name: 'GitLens',
        descriiption: 'GitLens lets you seamlessly navigate and explore Git repositories, gain valuable insights via rich visualizations and powerful comparison commands.',
        author: 'GitKraken',
        url: 'https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens',
        downloads: '17,844,188',
        stars: '4',
        price: 'free',
        selector: 'p1'
    },
    {
        name: 'Debugger for Chrome',
        descriiption: 'Debug your JavaScript code in the Chrome browser, or any other target that supports the Chrome Debugger protocol.',
        author: 'Microsoft',
        url: 'https://marketplace.visualstudio.com/items?itemName=msjsdiag.debugger-for-chrome',
        downloads: '9,716,037',
        stars: '4',
        price: 'free',
        selector: 'p2'
    }

];

function Package(data) {
    this.name = data.name;
    this.description = data.description;
    this.author = data.author;
    this.url = data.url;
    this.downloads = data.downloads;
    this.stars = data.stars;
    this.selector = data.selector;

    this.getFormattedDownloads = function (){
        return this.downloads.toLocaleString();
    };
    this.getFormattedStars = function () {
        return this.stars.toLocaleString();
    };
}

var getTodaysDate = function() {
    var today = new Date();
    return today.toDateString();
};

var getEl = function (id) {
    return document.getElementById(id);
}

var writePackageInfo = function(package) {
    var selector = package.selector,
    nameEl = getEl(selector + '-name'),
    descEl = getEl (selector + '-description'),
    authEl = getEl (selector + '-author'),
    downloadEl = getEl (selector + '-downloads'),
    starsEl = getEl (selector + '-stars');

    nameEl.textContent = package.name;
    descEl.textContent = package.description;
    authEl.textContent = package.author;
    downloadEl.textContent = package.getFormattedDownloads();
    starsEl.textContent = package.getFormattedStars();


}

dateEL = getEl('date');
dateEL.textContent = getTodaysDate();


var GitLens = new Package(data[0]);
writePackageInfo(GitLens);

var Debugger = new Package(date[1]);
writePackageInfo(Debugger);



}());