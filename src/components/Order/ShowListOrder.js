import React, { Component } from 'react';
import EachOrdered from './EachOrdered';

class ShowListOrder extends Component {

    deleteButton = (idItem) => {
        this.props.deleteBtn(idItem);
    } 

    mappingOrder = () => this.props.dataProductOrdered.map((value, key) => (
        <EachOrdered deleteButton={(idItem) => {this.deleteButton(idItem)}}
        tenmon={value.tenMon} dongia={value.donGia} soluong={value.soLuong} key={key} stt={key}></EachOrdered>
    ))

    render() {
        return (
            <div className="p-4">
                <div className="table-responsive-lg">
                    <div className="pb-2">
                        <h5>Hóa đơn</h5>
                    </div>
                    <table className="table border boder-success">
                        <thead className="table-success table-bordered">
                            <tr>
                                <th>STT</th>
                                <th>Tên</th>
                                <th>Đơn giá</th>
                                <th>Số lượng</th>
                                <th>Thành tiền</th>
                            </tr>
                        </thead>
                        <tbody className="table-bordered">
                            {this.mappingOrder()}
                        </tbody>
                        <tfoot>
                            <tr>
                                <th colSpan="4">Tổng</th>
                                <th className="table-bordered text-right">0<span className="ml-1">đ</span></th>
                            </tr>
                        </tfoot>
                    </table>
                </div>
                <div>
                    <button className="btn btn-outline-success">Xác nhận đặt hàng</button>
                </div>
            </div>
        );
    }
}

export default ShowListOrder;