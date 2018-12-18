import React, { Component } from 'react';
import ShowListOrder from './ShowListOrder';
import ShowListProduct from './ShowListProduct';
// import ListProduct from './ListProduct.json';
import ListOrder from './ListOrder.json';
import {ListProductData} from './firebaseConnect';

class OrderView extends Component {

   constructor(props) {
      super(props);
      this.state = {
         listOrdered: ListOrder,
         showListProduct: []
      }
   }

   componentWillMount = () => {
      ListProductData.on('value', (item) => {
         let arrayData = [];
         item.forEach(element => {
               const key = element.key;
               const tenMon = element.val().tenMon;
               const donGia = element.val().donGia;
               arrayData.push({
                  key: key,
                  tenMon: tenMon,
                  donGia: donGia
               })
         });
         this.setState({
            showListProduct:arrayData
         });
      });
   }



   delete = (idItem) => {
      let tempData = this.state.listOrdered.filter((value, index) => index !== idItem);
      this.setState({
         listOrdered: tempData
      });
   }

   getNewOrdered = (tenMon, donGia, soLuong) => {
      let item = {};
      item.tenMon = tenMon;
      item.donGia = donGia;
      item.soLuong = soLuong;
      let items = this.state.listOrdered;
      items.push(item);
      this.setState({
         listOrdered: items
      });
   }

   render() {
      
      return (
         <div className="container">
            <div className="row">
               <div className="col-lg-5">
                  <ShowListProduct addControl={(tenMon, donGia, soLuong) => this.getNewOrdered(tenMon, donGia, soLuong)} dataProductList={this.state.showListProduct}></ShowListProduct>
               </div>
               <div className="col-lg">
                  <ShowListOrder deleteBtn={(idItem) => this.delete(idItem)} dataProductOrdered={this.state.listOrdered}> </ShowListOrder>
               </div>
            </div>
         </div>
      );
   }
}

export default OrderView;