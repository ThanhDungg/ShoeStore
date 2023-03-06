import Body from "~/components/Layout/components/Body";
import Create from "~/components/Layout/components/Create";
import Header from "~/components/Layout/components/Header";

function TaoDanhMuc() {
    return ( 
        <div>
            <Header />
            <Body title="Tạo danh mục" isCreate={false} isDelete={false} toCreate='/quanlidanhmuc/create'>
                <Create isPicture={false} />
            </Body>
        </div>
     );
}

export default TaoDanhMuc;