import Body from "~/components/Layout/components/Body";
import Create from "~/components/Layout/components/Create";
import Header from "~/components/Layout/components/Header";

function TaoNhanHieu() {
    return ( 
        <div>
            <Header />
            <Body title="Tạo nhãn hiệu" isCreate={false} isDelete={false} toCreate='/quanlinhanhieu/create'>
                <Create />
            </Body>
        </div>
     );
}

export default TaoNhanHieu;