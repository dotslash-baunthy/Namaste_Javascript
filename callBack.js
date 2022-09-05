console.log("I did not wait.");
setTimeout(() => {
    console.log("I waited for 3 seconds.")
}, 3000);

window.fetch("https://api.publicapis.org/entries"


)
    .then((response) => response.text())
    .then((data) => console.log(data));


window.onload = () => {
    document.querySelector("#button").addEventListener("click", () => {
        let heading = document.querySelector("#heading");
        if (heading.textContent === "Akshit's JS playground") {
            heading.innerText = "Goo kha le.";
        }
        else {
            heading.innerText = "Akshit's JS playground";
        }
    })

    window.onabort = () => {
        document.querySelector("#button").removeEventListener("click");
        console.log("Akshit");
    }
}