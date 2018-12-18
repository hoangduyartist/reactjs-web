import React, { Component } from 'react';

class EachOrdered extends Component {

    tongTien = () => {
        return (this.props.dongia * this.props.soluong)
    }

    delItem = (idItem) => {
        this.props.deleteButton(idItem);
    }

    render() {
        return (
            <tr>
                {/* <td>{this.props.stt + 1}</td> */}
                <td className="text-left">{this.props.name}</td>
                {/* <td className="text-right">{this.props.dongia}<span className="ml-1">đ</span></td> */}
                <td className="text-right">{this.props.total}</td>
                {/* <td className="text-right">{this.tongTien()}<span className="ml-1">đ</span></td> */}
                {/* <td>
                    <button
                        type="submit" className="btn btn-outline-danger btn-block"
                        onClick={(idItem) => this.delItem(this.props.stt)}>Xóa</button>
                </td> */}
            </tr>
        );
    }
}

export default EachOrdered;