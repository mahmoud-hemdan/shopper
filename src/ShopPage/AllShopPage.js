
import { CartProvider, useCart } from "react-use-cart";
import { Col, Container, Row } from "reactstrap";

import NavbarShop from "./NavbarShop";
import Topbar from "../Topbar";
import PageHeader from "./PageHeader";
import Footer from "../Footer";
import { Link } from "react-router-dom";
function Page() {
  const { addItem } = useCart();

  const products = [
    {
    "id": 1,
    "title": "Colorful Stylish Shirt",
    "description": "An apple mobile which is nothing like apple",
    "price": 123.00,
    "discountPercentage": 200.00,
    "rating": 4.69,
    "stock": 94,
    "brand": "Apple",
    "category": "smartphones",
    "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
    "images": [
    "img/product-1.jpg",
    "https://i.dummyjson.com/data/products/1/2.jpg",
    "https://i.dummyjson.com/data/products/1/3.jpg",
    "https://i.dummyjson.com/data/products/1/4.jpg",
    "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
    ]
    },
    {
    "id": 2,
    "title": "Colorful Stylish Shirt",
    "description": "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
    "price": 125.00,
    "discountPercentage": 150.00,
    "rating": 4.44,
    "stock": 34,
    "brand": "Apple",
    "category": "smartphones",
    "thumbnail": "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
    "images": [
    "img/product-2.jpg",
    "https://i.dummyjson.com/data/products/2/2.jpg",
    "https://i.dummyjson.com/data/products/2/3.jpg",
    "https://i.dummyjson.com/data/products/2/thumbnail.jpg"
    ]
    },
    {
      "id": 3,
      "title": "Colorful Stylish Shirt",
      "description": "An apple mobile which is nothing like apple",
      "price": 123.00,
      "discountPercentage": 200.00,
      "rating": 4.69,
      "stock": 94,
      "brand": "Apple",
      "category": "smartphones",
      "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
      "images": [
      "img/product-1.jpg",
      "https://i.dummyjson.com/data/products/1/2.jpg",
      "https://i.dummyjson.com/data/products/1/3.jpg",
      "https://i.dummyjson.com/data/products/1/4.jpg",
      "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
      ]
      },
    {
    "id": 4,
    "title": "Colorful Stylish Shirt",
    "description": "Samsung's new variant which goes beyond Galaxy to the Universe",
    "price": 127.00,
    "discountPercentage": 160.00,
    "rating": 4.09,
    "stock": 36,
    "brand": "Samsung",
    "category": "smartphones",
    "thumbnail": "https://i.dummyjson.com/data/products/3/thumbnail.jpg",
    "images": [
    "img/product-3.jpg"
    ]
    },
    {
      "id":5,
      "title": "Colorful Stylish Shirt",
      "description": "Style and speed. Stand out on HD video calls backed by Studio Mics. Capture ideas on the vibrant touchscreen.",
      "price": 190.00,
      "discountPercentage": 230.00,
      "rating": 4.43,
      "stock": 68,
      "brand": "Microsoft Surface",
      "category": "laptops",
      "thumbnail": "https://i.dummyjson.com/data/products/8/thumbnail.jpg",
      "images": [
      "img/product-8.jpg",
      "https://i.dummyjson.com/data/products/8/2.jpg",
      "https://i.dummyjson.com/data/products/8/3.jpg",
      "https://i.dummyjson.com/data/products/8/4.jpg",
      "https://i.dummyjson.com/data/products/8/thumbnail.jpg"
      ]
      },
    {
    "id": 6,
    "title": "Colorful Stylish Shirt",
    "description": "Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.",
    "price": 150.00,
    "discountPercentage": 200.00,
    "rating": 4.09,
    "stock": 32,
    "brand": "Huawei",
    "category": "smartphones",
    "thumbnail": "https://i.dummyjson.com/data/products/5/thumbnail.jpg",
    "images": [
    "img/product-5.jpg",
    "https://i.dummyjson.com/data/products/5/2.jpg",
    "https://i.dummyjson.com/data/products/5/3.jpg"
    ]
    },
    {
      "id": 7,
      "title": "Colorful Stylish Shirt",
      "description": "Style and speed. Stand out on HD video calls backed by Studio Mics. Capture ideas on the vibrant touchscreen.",
      "price": 190.00,
      "discountPercentage": 230.00,
      "rating": 4.43,
      "stock": 68,
      "brand": "Microsoft Surface",
      "category": "laptops",
      "thumbnail": "https://i.dummyjson.com/data/products/8/thumbnail.jpg",
      "images": [
      "img/product-8.jpg",
      "https://i.dummyjson.com/data/products/8/2.jpg",
      "https://i.dummyjson.com/data/products/8/3.jpg",
      "https://i.dummyjson.com/data/products/8/4.jpg",
      "https://i.dummyjson.com/data/products/8/thumbnail.jpg"
      ]
      },
    {
    
    "id": 8,
    "title": "Colorful Stylish Shirt",
    "description": "MacBook Pro 2021 with mini-LED display may launch between September, November",
    "price": 170.00,
    "discountPercentage": 210.00,
    "rating": 4.57,
    "stock": 83,
    "brand": "Apple",
    "category": "laptops",
    "thumbnail": "https://i.dummyjson.com/data/products/6/thumbnail.png",
    "images": [
    "img/product-6.jpg",
    "https://i.dummyjson.com/data/products/6/2.jpg",
    "https://i.dummyjson.com/data/products/6/3.png",
    "https://i.dummyjson.com/data/products/6/4.jpg"
    ]
    },
    {
      "id": 1,
      "title": "Colorful Stylish Shirt",
      "description": "An apple mobile which is nothing like apple",
      "price": 123.00,
      "discountPercentage": 200.00,
      "rating": 4.69,
      "stock": 94,
      "brand": "Apple",
      "category": "smartphones",
      "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
      "images": [
      "img/product-1.jpg",
      "https://i.dummyjson.com/data/products/1/2.jpg",
      "https://i.dummyjson.com/data/products/1/3.jpg",
      "https://i.dummyjson.com/data/products/1/4.jpg",
      "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
      ]
      },
      {
      "id": 2,
      "title": "Colorful Stylish Shirt",
      "description": "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
      "price": 125.00,
      "discountPercentage": 150.00,
      "rating": 4.44,
      "stock": 34,
      "brand": "Apple",
      "category": "smartphones",
      "thumbnail": "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
      "images": [
      "img/product-2.jpg",
      "https://i.dummyjson.com/data/products/2/2.jpg",
      "https://i.dummyjson.com/data/products/2/3.jpg",
      "https://i.dummyjson.com/data/products/2/thumbnail.jpg"
      ]
      },
      {
        "id": 3,
        "title": "Colorful Stylish Shirt",
        "description": "An apple mobile which is nothing like apple",
        "price": 123.00,
        "discountPercentage": 200.00,
        "rating": 4.69,
        "stock": 94,
        "brand": "Apple",
        "category": "smartphones",
        "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
        "images": [
        "img/product-1.jpg",
        "https://i.dummyjson.com/data/products/1/2.jpg",
        "https://i.dummyjson.com/data/products/1/3.jpg",
        "https://i.dummyjson.com/data/products/1/4.jpg",
        "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
        ]
        },
      {
      "id": 4,
      "title": "Colorful Stylish Shirt",
      "description": "Samsung's new variant which goes beyond Galaxy to the Universe",
      "price": 127.00,
      "discountPercentage": 160.00,
      "rating": 4.09,
      "stock": 36,
      "brand": "Samsung",
      "category": "smartphones",
      "thumbnail": "https://i.dummyjson.com/data/products/3/thumbnail.jpg",
      "images": [
      "img/product-3.jpg"
      ]
      },
    {
    "id": 9,
    "title": "Colorful Stylish Shirt",
    "description": "Samsung Galaxy Book S (2020) Laptop With Intel Lakefield Chip, 8GB of RAM Launched",
    "price": 160.00,
    "discountPercentage": 220.00,
    "rating": 4.25,
    "stock": 50,
    "brand": "Samsung",
    "category": "laptops",
    "thumbnail": "https://i.dummyjson.com/data/products/7/thumbnail.jpg",
    "images": [
    "img/product-7.jpg",
    "https://i.dummyjson.com/data/products/7/2.jpg",
    "https://i.dummyjson.com/data/products/7/3.jpg",
    "https://i.dummyjson.com/data/products/7/thumbnail.jpg"
    ]
    },
    {
    "id": 10,
    "title": "Colorful Stylish Shirt",
    "description": "Style and speed. Stand out on HD video calls backed by Studio Mics. Capture ideas on the vibrant touchscreen.",
    "price": 190.00,
    "discountPercentage": 230.00,
    "rating": 4.43,
    "stock": 68,
    "brand": "Microsoft Surface",
    "category": "laptops",
    "thumbnail": "https://i.dummyjson.com/data/products/8/thumbnail.jpg",
    "images": [
    "img/product-8.jpg",
    "https://i.dummyjson.com/data/products/8/2.jpg",
    "https://i.dummyjson.com/data/products/8/3.jpg",
    "https://i.dummyjson.com/data/products/8/4.jpg",
    "https://i.dummyjson.com/data/products/8/thumbnail.jpg"
    ]
    },
    {
      "id": 11,
      "title": "Colorful Stylish Shirt",
      "description": "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
      "price": 125.00,
      "discountPercentage": 150.00,
      "rating": 4.44,
      "stock": 34,
      "brand": "Apple",
      "category": "smartphones",
      "thumbnail": "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
      "images": [
      "img/product-2.jpg",
      "https://i.dummyjson.com/data/products/2/2.jpg",
      "https://i.dummyjson.com/data/products/2/3.jpg",
      "https://i.dummyjson.com/data/products/2/thumbnail.jpg"
      ]
      },
      {
        "id": 12,
        "title": "Colorful Stylish Shirt",
        "description": "Samsung's new variant which goes beyond Galaxy to the Universe",
        "price": 127.00,
        "discountPercentage": 160.00,
        "rating": 4.09,
        "stock": 36,
        "brand": "Samsung",
        "category": "smartphones",
        "thumbnail": "https://i.dummyjson.com/data/products/3/thumbnail.jpg",
        "images": [
        "img/product-3.jpg"
        ]
        },
        {
          "id":5,
          "title": "Colorful Stylish Shirt",
          "description": "Style and speed. Stand out on HD video calls backed by Studio Mics. Capture ideas on the vibrant touchscreen.",
          "price": 190.00,
          "discountPercentage": 230.00,
          "rating": 4.43,
          "stock": 68,
          "brand": "Microsoft Surface",
          "category": "laptops",
          "thumbnail": "https://i.dummyjson.com/data/products/8/thumbnail.jpg",
          "images": [
          "img/product-8.jpg",
          "https://i.dummyjson.com/data/products/8/2.jpg",
          "https://i.dummyjson.com/data/products/8/3.jpg",
          "https://i.dummyjson.com/data/products/8/4.jpg",
          "https://i.dummyjson.com/data/products/8/thumbnail.jpg"
          ]
          },
        {
        "id": 6,
        "title": "Colorful Stylish Shirt",
        "description": "Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.",
        "price": 150.00,
        "discountPercentage": 200.00,
        "rating": 4.09,
        "stock": 32,
        "brand": "Huawei",
        "category": "smartphones",
        "thumbnail": "https://i.dummyjson.com/data/products/5/thumbnail.jpg",
        "images": [
        "img/product-5.jpg",
        "https://i.dummyjson.com/data/products/5/2.jpg",
        "https://i.dummyjson.com/data/products/5/3.jpg"
        ]
        },
        {
          "id": 7,
          "title": "Colorful Stylish Shirt",
          "description": "Style and speed. Stand out on HD video calls backed by Studio Mics. Capture ideas on the vibrant touchscreen.",
          "price": 190.00,
          "discountPercentage": 230.00,
          "rating": 4.43,
          "stock": 68,
          "brand": "Microsoft Surface",
          "category": "laptops",
          "thumbnail": "https://i.dummyjson.com/data/products/8/thumbnail.jpg",
          "images": [
          "img/product-8.jpg",
          "https://i.dummyjson.com/data/products/8/2.jpg",
          "https://i.dummyjson.com/data/products/8/3.jpg",
          "https://i.dummyjson.com/data/products/8/4.jpg",
          "https://i.dummyjson.com/data/products/8/thumbnail.jpg"
          ]
          },
        {
        
        "id": 8,
        "title": "Colorful Stylish Shirt",
        "description": "MacBook Pro 2021 with mini-LED display may launch between September, November",
        "price": 170.00,
        "discountPercentage": 210.00,
        "rating": 4.57,
        "stock": 83,
        "brand": "Apple",
        "category": "laptops",
        "thumbnail": "https://i.dummyjson.com/data/products/6/thumbnail.png",
        "images": [
        "img/product-6.jpg",
        "https://i.dummyjson.com/data/products/6/2.jpg",
        "https://i.dummyjson.com/data/products/6/3.png",
        "https://i.dummyjson.com/data/products/6/4.jpg"
        ]
        },
        {
          "id": 9,
          "title": "Colorful Stylish Shirt",
          "description": "Samsung Galaxy Book S (2020) Laptop With Intel Lakefield Chip, 8GB of RAM Launched",
          "price": 160.00,
          "discountPercentage": 220.00,
          "rating": 4.25,
          "stock": 50,
          "brand": "Samsung",
          "category": "laptops",
          "thumbnail": "https://i.dummyjson.com/data/products/7/thumbnail.jpg",
          "images": [
          "img/product-7.jpg",
          "https://i.dummyjson.com/data/products/7/2.jpg",
          "https://i.dummyjson.com/data/products/7/3.jpg",
          "https://i.dummyjson.com/data/products/7/thumbnail.jpg"
          ]
          },
          {
          "id": 10,
          "title": "Colorful Stylish Shirt",
          "description": "Style and speed. Stand out on HD video calls backed by Studio Mics. Capture ideas on the vibrant touchscreen.",
          "price": 190.00,
          "discountPercentage": 230.00,
          "rating": 4.43,
          "stock": 68,
          "brand": "Microsoft Surface",
          "category": "laptops",
          "thumbnail": "https://i.dummyjson.com/data/products/8/thumbnail.jpg",
          "images": [
          "img/product-8.jpg",
          "https://i.dummyjson.com/data/products/8/2.jpg",
          "https://i.dummyjson.com/data/products/8/3.jpg",
          "https://i.dummyjson.com/data/products/8/4.jpg",
          "https://i.dummyjson.com/data/products/8/thumbnail.jpg"
          ]
          },
          {
            "id": 11,
            "title": "Colorful Stylish Shirt",
            "description": "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
            "price": 125.00,
            "discountPercentage": 150.00,
            "rating": 4.44,
            "stock": 34,
            "brand": "Apple",
            "category": "smartphones",
            "thumbnail": "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
            "images": [
            "img/product-2.jpg",
            "https://i.dummyjson.com/data/products/2/2.jpg",
            "https://i.dummyjson.com/data/products/2/3.jpg",
            "https://i.dummyjson.com/data/products/2/thumbnail.jpg"
            ]
            },
            {
              "id": 12,
              "title": "Colorful Stylish Shirt",
              "description": "Samsung's new variant which goes beyond Galaxy to the Universe",
              "price": 127.00,
              "discountPercentage": 160.00,
              "rating": 4.09,
              "stock": 36,
              "brand": "Samsung",
              "category": "smartphones",
              "thumbnail": "https://i.dummyjson.com/data/products/3/thumbnail.jpg",
              "images": [
              "img/product-3.jpg"
              ]
              },
              {
                "id":5,
                "title": "Colorful Stylish Shirt",
                "description": "Style and speed. Stand out on HD video calls backed by Studio Mics. Capture ideas on the vibrant touchscreen.",
                "price": 190.00,
                "discountPercentage": 230.00,
                "rating": 4.43,
                "stock": 68,
                "brand": "Microsoft Surface",
                "category": "laptops",
                "thumbnail": "https://i.dummyjson.com/data/products/8/thumbnail.jpg",
                "images": [
                "img/product-8.jpg",
                "https://i.dummyjson.com/data/products/8/2.jpg",
                "https://i.dummyjson.com/data/products/8/3.jpg",
                "https://i.dummyjson.com/data/products/8/4.jpg",
                "https://i.dummyjson.com/data/products/8/thumbnail.jpg"
                ]
                },
              {
              "id": 6,
              "title": "Colorful Stylish Shirt",
              "description": "Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.",
              "price": 150.00,
              "discountPercentage": 200.00,
              "rating": 4.09,
              "stock": 32,
              "brand": "Huawei",
              "category": "smartphones",
              "thumbnail": "https://i.dummyjson.com/data/products/5/thumbnail.jpg",
              "images": [
              "img/product-5.jpg",
              "https://i.dummyjson.com/data/products/5/2.jpg",
              "https://i.dummyjson.com/data/products/5/3.jpg"
              ]
              },
              {
                "id": 7,
                "title": "Colorful Stylish Shirt",
                "description": "Style and speed. Stand out on HD video calls backed by Studio Mics. Capture ideas on the vibrant touchscreen.",
                "price": 190.00,
                "discountPercentage": 230.00,
                "rating": 4.43,
                "stock": 68,
                "brand": "Microsoft Surface",
                "category": "laptops",
                "thumbnail": "https://i.dummyjson.com/data/products/8/thumbnail.jpg",
                "images": [
                "img/product-8.jpg",
                "https://i.dummyjson.com/data/products/8/2.jpg",
                "https://i.dummyjson.com/data/products/8/3.jpg",
                "https://i.dummyjson.com/data/products/8/4.jpg",
                "https://i.dummyjson.com/data/products/8/thumbnail.jpg"
                ]
                },
              {
              
              "id": 8,
              "title": "Colorful Stylish Shirt",
              "description": "MacBook Pro 2021 with mini-LED display may launch between September, November",
              "price": 170.00,
              "discountPercentage": 210.00,
              "rating": 4.57,
              "stock": 83,
              "brand": "Apple",
              "category": "laptops",
              "thumbnail": "https://i.dummyjson.com/data/products/6/thumbnail.png",
              "images": [
              "img/product-6.jpg",
              "https://i.dummyjson.com/data/products/6/2.jpg",
              "https://i.dummyjson.com/data/products/6/3.png",
              "https://i.dummyjson.com/data/products/6/4.jpg"
              ]
              },
              {
                "id": 1,
                "title": "Colorful Stylish Shirt",
                "description": "An apple mobile which is nothing like apple",
                "price": 123.00,
                "discountPercentage": 200.00,
                "rating": 4.69,
                "stock": 94,
                "brand": "Apple",
                "category": "smartphones",
                "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
                "images": [
                "img/product-1.jpg",
                "https://i.dummyjson.com/data/products/1/2.jpg",
                "https://i.dummyjson.com/data/products/1/3.jpg",
                "https://i.dummyjson.com/data/products/1/4.jpg",
                "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
                ]
                },
                {
                "id": 2,
                "title": "Colorful Stylish Shirt",
                "description": "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
                "price": 125.00,
                "discountPercentage": 150.00,
                "rating": 4.44,
                "stock": 34,
                "brand": "Apple",
                "category": "smartphones",
                "thumbnail": "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
                "images": [
                "img/product-2.jpg",
                "https://i.dummyjson.com/data/products/2/2.jpg",
                "https://i.dummyjson.com/data/products/2/3.jpg",
                "https://i.dummyjson.com/data/products/2/thumbnail.jpg"
                ]
                },
                {
                  "id": 3,
                  "title": "Colorful Stylish Shirt",
                  "description": "An apple mobile which is nothing like apple",
                  "price": 123.00,
                  "discountPercentage": 200.00,
                  "rating": 4.69,
                  "stock": 94,
                  "brand": "Apple",
                  "category": "smartphones",
                  "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
                  "images": [
                  "img/product-1.jpg",
                  "https://i.dummyjson.com/data/products/1/2.jpg",
                  "https://i.dummyjson.com/data/products/1/3.jpg",
                  "https://i.dummyjson.com/data/products/1/4.jpg",
                  "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
                  ]
                  },
                {
                "id": 4,
                "title": "Colorful Stylish Shirt",
                "description": "Samsung's new variant which goes beyond Galaxy to the Universe",
                "price": 127.00,
                "discountPercentage": 160.00,
                "rating": 4.09,
                "stock": 36,
                "brand": "Samsung",
                "category": "smartphones",
                "thumbnail": "https://i.dummyjson.com/data/products/3/thumbnail.jpg",
                "images": [
                "img/product-3.jpg"
                ]
                },
    ];

  return (
    <div>
    <Container fluid className="container-fluid pt-5">
      <Row className="row px-xl-5 pb-3">
      {products.map((item) => (
        <Col className="col-lg-3 col-md- col-sm-12 pb-1"
        key={item.id}
        >
                <div className="card product-item border-0 mb-4">
                    <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                        <img className="img-fluid w-100" src={item.images[0]} alt=""/>
                    </div>
           
                    <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                        <h6 className="text-truncate mb-3">{item.title }</h6>
                        <div className="d-flex justify-content-center">
                            <h6>${item.price}</h6><h6 className="text-muted ml-2"><del>${item.discountPercentage}</del></h6>
                        </div>
                    </div>
                    <div className="card-footer d-flex justify-content-between bg-light border">
                        <Link to="/Car" className="btn btn-sm text-dark p-0"><i className="fas fa-eye text-primary mr-1"></i>View Detail</Link>
                       
                    </div>
                </div>
            </Col>
       
      ))}

      </Row>
     
    </Container>

    </div>
  );
}



function AllShopPage() {
  return (
    <CartProvider>
      <Topbar/>
      <NavbarShop/>
      <PageHeader/>
      <Page />
      
      <Footer/>
    </CartProvider>
  );
}

export default AllShopPage

