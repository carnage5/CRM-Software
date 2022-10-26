import React from 'react';
import Deletecust from './deletecust';
import Deletesale from './deletesale';
import CustForm from './insertcust';
import SaleForm from './insertsale';
class Customer_Data extends React.Component {
    handleclick=()=>{
        this.props.toggle()
    };
    render() { 
        return (
            <div>
                <CustForm/>
                <Deletecust/>
                <SaleForm/>
                <Deletesale/>
            </div>
        );
    }
}
 
export default Customer_Data;