import Body from "~/components/Layout/components/Body";
import Header from "~/components/Layout/components/Header";




function HomePage() {
    return ( 
        <div>
            <Header />
            <Body title="BANANA STORE" isCreate={false} isDelete={false}>
                <img src='' />
            </Body>
        </div>
     );
}

export default HomePage;