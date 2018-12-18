import React, { Component } from 'react';
import EachProduct from './EachProduct';

class ShowListProduct extends Component {

    mappingListProduct = () => this.props.dataProductList.map((value, key) => (
        <EachProduct add={(tenMon, donGia, soLuong) => this.props.addControl(tenMon, donGia, soLuong)}
            tenmon={value.tenMon} dongia={value.donGia} key={key}></EachProduct>
    ))

    render() {

        return (
            <div className="container p-4">
                <div className="pb-2">
                    <h5>Danh sách món</h5>
                </div>
                <div className="container border border-success" style={{ width: '400px', height: '500px', overflowY: 'scroll' }}>
                    {this.mappingListProduct()}
                </div>
            </div>
        );
    }
}

export default ShowListProduct;