import Body from "~/components/Layout/components/Body";
import ChiTietDonHang from "~/components/Layout/components/ChiTietDonHang";
import Header from "~/components/Layout/components/Header";

function ChiTietDonHangPage() {
    return ( 
        <div>
            <Header />
            <Body title="Chi tiết đơn hàng" isCreate={false} isDelete={false}>
                <ChiTietDonHang />
            </Body>
        </div>
     );
}

export default ChiTietDonHangPage;