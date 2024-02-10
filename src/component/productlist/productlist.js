import { Component } from "react";
// import image from "./images.jpeg"


class Productlist extends Component {
    state = {
        Productlist: [
            {
                id: 1,
                name: "pizza",
                text: "Tast it and enjoy it",
                image: "https://images.hindustantimes.com/rf/image_size_630x354/HT/p2/2018/09/15/Pictures/_22d8284c-b8b1-11e8-ab60-f008577e130d.jpg"

            },
            {
                id: 2,
                name: "chicken leg pice",
                text: "Tast it and enjoy it",
                image: "https://4.imimg.com/data4/QW/XA/ANDROID-71807896/product-500x500.jpeg"

            },
            {
                id: 3,
                name: "Twins Resorts",
                text: "Tast it and enjoy it",
                image: "https://content3.jdmagicbox.com/comp/alibaug/t8/9999p2141.2141.110421123150.j8t8/catalogue/lilak-family-restaurant-and-bar-twins-resorts-pvt-ltd--alibaug-ho-alibaug-restaurants-43iulfqbgg.jpg?clr="

            },
            {
                id: 4,
                name: "mutton curry",
                text: "Tast it and enjoy it",
                image: "https://c.ndtvimg.com/2021-02/6tkrhcsg_mutton-curry_625x300_10_February_21.jpg?im=FaceCrop,algorithm=dnn,width=1200,height=886"

            },
            {
                id: 5,
                name: "Non-veg stater",
                text: "Tast it and enjoy it",
                image: "https://hungrito.com/wp-content/uploads/2017/10/xxTM5Ab-Imgur-2.jpg"

            },
            {
                id: 6,
                name: "chicken dry pice",
                text: "Tast it and enjoy it",
                image: "https://img.restaurantguru.com/r916-Mr-Singhs-Restaurant-Best-Veg-and-Non-Veg-Restaurant-in-indore-Near-me-seafood.jpg"

            },
            {
                id: 7,
                name: "chicken Kabb",
                text: "Tast it and enjoy it",
                image: "https://static.wixstatic.com/media/d2efb1_f8d828c0b4fe483fa7b8abbd3f9ef91c~mv2_d_5184_3456_s_4_2.jpg/v1/fill/w_640,h_1044,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/d2efb1_f8d828c0b4fe483fa7b8abbd3f9ef91c~mv2_d_5184_3456_s_4_2.jpg"

            },
            {
                id: 8,
                name: "Mutton dum briyani",
                text: "Tast it and enjoy it",
                image: "https://images.picxy.com/cache/2021/6/23/ab4ebef13d53cbe16233ade4574f002e.jpg"

            },
            {
                id: 9,
                name: "chicken dum briyani",
                text: "Tast it and enjoy it",
                image: "https://static.toiimg.com/thumb/54308405.cms?imgsize=510571&width=800&height=800"

            },

            {
                id: 10,
                name: "mIXTURE bRIYANI",
                text: "Tast it and enjoy it",
                image: "https://upload.wikimedia.org/wikipedia/commons/5/5a/%22Hyderabadi_Dum_Biryani%22.jpg"

            },
            {
                id: 11,
                name: "rOYYALU eGGURU",
                text: "Tast it and enjoy it",
                image: "https://www.lekhafoods.com/media/1051246/royyalu-iguru.jpg"

            },
            {
                id: 12,
                name: "rOYYALU fRY",
                text: "Tast it and enjoy it",
                image: "https://www.topchop.in/storage/products/February2022/2pnMbciKCjMCoFgvsAGx.webp"

            },
            {
                id: 13,
                name: "pANNIER mASALA",
                text: "Tast it and enjoy it",
                image: "https://www.mistay.in/travel-blog/content/images/2020/07/panner-cover.jpg"

            },
            {
                id: 14,
                name: "rOSSTED dOSA",
                text: "Tast it and enjoy it",
                image: "https://b.zmtcdn.com/data/dish_photos/817/d0b6f2618d4498037c44cda3c5df8817.jpg"

            },
            {
                id: 15,
                name: "gEE dOSA",
                text: "Tast it and enjoy it",
                image: "https://qph.cf2.quoracdn.net/main-qimg-d69ed672bafa6075e05ac9eeadb2b917-pjlq"

            },
            {
                id: 16,
                name: "karrAM DOsa",
                text: "Tast it and enjoy it",
                image: "https://b.zmtcdn.com/data/pictures/chains/5/10125/dbbd8207776a6833212042f6dc216b41.jpeg"

            },
            {
                id: 17,
                name: "buTTER noNS",
                text: "Tast it and enjoy it",
                image: "https://imgmedia.lbb.in/media/2021/01/60129ed4435c5139b362c5fa_1611833044427.jpg"

            },
            {
                id: 18,
                name: "sOUth INdia THali",
                text: "Tast it and enjoy it",
                image: "https://im.hunt.in/cg/raj/Pushkar/City-Guide/vegetarian-restaurants-pushkar.jpg"

            }, {
                id: 19,
                name: "Veg Machuriya",
                text:"Tast it and enjoy it",
                image: "https://i1.wp.com/tastehive.com/wp-content/uploads/2020/02/Gobi-Manchurian-1.jpg?fit=600%2C400"

            },
            {
                id: 20,
                name: "rOSSTED dOSA",
                text: "Tast it and enjoy it",
                image: "https://b.zmtcdn.com/data/dish_photos/817/d0b6f2618d4498037c44cda3c5df8817.jpg"

            }

        ]

    }
    handler = (element) => {
        alert(element.name)
    }

    render() {
        return (
            
            <div className="d-flex justify-content-center flex-wrap"  >
                {
                    this.state.Productlist.map((element) => {
                        return (
                            
                            <div class="card m-2" style={{ width:250 }}>
                                <img  src={element.image} alt="Card image" height={200}  />
                                <div class="card-body">
                                    <h4 class="card-title">{element.name}</h4>
                                    <p class="card-text">{element.text}</p>
                                    {/* <a href="#" class="btn btn-primary">See Profile</a> */}
                                   <center><button onClick={() => { this.handler(element) }} style={{ backgroundColor: "skyblue", color: "white" ,border:"none"}}>CliCKhere</button></center> 
                                </div>
                            </div>
                        )

                    })
                }


            </div>
        )
    }
}
export default Productlist
