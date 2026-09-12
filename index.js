const cars = [

    {
        pic: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=800&q=80",
        name: "Audi",
        price: "$78,000",
        description: "Luxury and powerful performance",
        rating: "./pic/star.png"
    },

    {
        pic: "https://images.unsplash.com/photo-1651433896419-04c1eb282a8e?q=80&w=765&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name: "Ferrari",
        price: "$250,000",
        description: "Fast and stylish sports car",
        rating: "./pic/star.png"
    },

    {
        pic: "https://images.unsplash.com/photo-1655705247019-220647a2ef68?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name: "BMW",
        price: "$85,000",
        description: "Premium comfort and performance",
        rating: "./pic/star.png"
    },

    {
        pic: "https://images.unsplash.com/photo-1661050629760-9c927d20ea79?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name: "Mercedes",
        price: "$95,000",
        description: "Elegant luxury and technology",
        rating: "./pic/star.png"
    },
    {
    pic: "https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&w=800&q=80",
    name: "Lamborghini",
    price: "$300,000",
    description: "Extreme performance and bold design",
    rating: "./pic/star.png"
},

{
    pic: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=800&q=80",
    name: "Chevrolet",
    price: "$65,000",
    description: "Powerful engine and sporty design",
    rating: "./pic/star.png"
}

];


const car_pics = document.querySelector(".CAR-pics");


cars.forEach(function(car) {

    car_pics.innerHTML += `

        <div class="car-card">

            <img 
                class="car-image"
                src="${car.pic}" 
                alt="${car.name}"
            >

            <div class="car-details">

                <div class="car-name-price">

                    <p>${car.name}</p>

                    <p>${car.price}</p>

                </div>


                <div class="car-description">

                    <p>${car.description}</p>

                    <span>
                        <img src="${car.rating}" alt="star">
                    </span>

                </div>

            </div>

        </div>

    `;

});