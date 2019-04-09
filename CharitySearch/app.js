////////to get around CORB you can use a proxy.  seems like request is sent to the proxy so the browser isn't blocking it, then goes to  the URL that I'm requesting:

const proxyurl = "https://cors-anywhere.herokuapp.com/";
const dataURL = `http://data.orghunter.com/v1/charitygeolocation`
const newURL = `${proxyurl}${dataURL}`


const findCharity = () => {


$.ajax({
    url: newURL,
    type: "GET",
    data: {
        user_key: `e3ec591c815df96de565ac01000f4ff4`,
        ein: `590774235`
        // country: `USA`


    }
}).then((data) => {
 console.log(data)
 
}, (error) => {
    console.log(error)
});

}


// http://data.orghunter.com/v1/charitygeolocation?user_key=e3ec591c815df96de565ac01000f4ff4&ein=590774235



$(() => {   ///////start doc on ready

findCharity()

    
})   /////////end doc on ready




// this API seems pointless - doesn't let you search by zip codes or anything, just lets you search by EIN (one at a time assuming user inputs EIN)