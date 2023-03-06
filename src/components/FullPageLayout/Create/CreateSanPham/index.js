import Body from "~/components/Layout/components/Body";
import Create from "~/components/Layout/components/Create";
import Header from "~/components/Layout/components/Header";

function TaoSanPham() {
    return ( 
        <div>
            <Header />
            <Body title="Tạo sản phẩm" isCreate={false} isDelete={false}>
                <Create isPicture={true} />
            </Body>
        </div>
     );
}

export default TaoSanPham;