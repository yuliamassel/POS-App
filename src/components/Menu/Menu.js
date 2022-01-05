import React, { Component } from 'react'
import style from './Menu.module.css'
import { API_URL } from '../utils/constants'
import axios from 'axios'
import Menus from '../Menus/Menus'
import swal from 'sweetalert'
import Select from '../Selected/Select'


class Menu extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             menus: [],
             keranjangs: []
        }
    }

    componentDidMount(){
        axios
        .get(API_URL + "Products")
        .then(res => {
        const menus = res.data;
        this.setState({ menus });
      })
      .catch(error => {
          console.log(error);
      })

      axios
      .get(API_URL + "keranjangs")
      .then((res) => {
        const keranjangs = res.data;
        console.log("keranjangs", keranjangs);
        this.setState({ keranjangs });
      })
      .catch((error) => {
        console.log("Error yaa ", error);
      });
    }

    componentDidUpdate(prevState){
        if(this.state.keranjangs !== prevState.keranjangs){
            axios
      .get(API_URL + "keranjangs")
      .then((res) => {
        const keranjangs = res.data;
        console.log("keranjangs", keranjangs);
        this.setState({ keranjangs });
      })
      .catch((error) => {
        console.log("Error yaa ", error);
      });
        }
    }

    addToCart = (value)=>{

        axios
        .get(API_URL + "keranjangs?product.id=" + value.id)
        .then((res) => {
            if(res.data.length === 0){
                const keranjang = {
                    amount: 1,
                    total_price: value.price,
                    products: value
                }
        
                axios
                .post(API_URL + "keranjangs", keranjang)
                .then(res => {
                    swal({
                        title: "Great Choice",
                        text: "successfully added to cart " +    keranjang.products.name,
                        icon: "success",
                        button: false,
                        tiimer: 1000
                      });
                })
                .catch(error => {
                    console.log(error);
                })
            }else {
                const keranjang = {
                    amount: res.data[0].amount + 1,
                    total_price:res.data[0].total_price + value.price,
                    products: value
                }

                axios
                .put(API_URL + "keranjangs/"+ res.data[0].id, keranjang)
                .then(res => {
                    swal({
                        title: "Great Choice",
                        text: "successfully added to cart " +    keranjang.products.name,
                        icon: "success",
                        button: false,
                        timer: 1000
                      });
                })
            }
        })
        .catch((error)=>{
            console.log("You got error",error);
        })
    }
    
    render() {
        const {menus, keranjangs} = this.state 
        // console.log(this.state.menus);
        // console.log(keranjangs);
        return (
            <>
            <div className={style.Menu}>
                {menus && menus.map((menu)=>(
                    <Menus
                       key={menu.id}
                       menu={menu}
                       addToCart={this.addToCart}
                    />
                    ))}
            </div>
            <Select keranjangs={keranjangs}/>
            </>
        )
    }
}

export default Menu
