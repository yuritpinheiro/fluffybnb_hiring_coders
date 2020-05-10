function load_data() {
    fetch("https://api.sheety.co/30b6e400-9023-4a15-8e6c-16aa4e3b1e72").then((res) => {
        return res.json();
    }).then((places) => {
        for (const place of places) {
            render_place(place);
        }
    }).catch ((err) => {
        console.log('Something went wrong', err);
    })
}

document.on