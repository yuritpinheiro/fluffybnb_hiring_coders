function render_place({ photo, property_type, name, price }) {
    let place_container = document.createElement("div");
    place_container.classList = "place-container";
    place_container.innerHTML = `<img src="${photo}"
                alt="APARTAMENTO IDEAL PAREJAS EN SON PARC" class="place-img"/>
                <div class="place-desc">
                    <span class="plan-type">${property_type}</span>
                    <span class="place-feat">${name}</span>
                    <span>
                        <span class="place-cost">R$ ${price},00</span>/noite
                    </span>
                </div>
            </div>`;
    document.getElementsByClassName("places-container")[0].appendChild(place_container);
}