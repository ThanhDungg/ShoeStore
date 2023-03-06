import Home from '~/pages/Home';
import Quanlidanhmuc from '~/pages/Quanlidanhmuc';
import CreateDanhMuc from '~/pages/Create/CreateDanhMuc';
import Quanlinhanhieu from '~/pages/Quanlinhanhieu';
import Quanlisanpham from '~/pages/Quanlisanpham';
import Quanlidonhang from '~/pages/Quanlidonhang';
import CreateNhanHieu from '~/pages/Create/CreateNhanHieu';
import CreateSanPham from '~/pages/Create/CreateSanPham';
import ChiTietDOnHang from '~/pages/ChiTietDonHang';
import Quanlibanner from '~/pages/Quanlibanner';
import Quanlinguoidung from '~/pages/Quanlinguoidung';
import Login from '~/pages/Login';

//public routes
const publicRoutes = [
    { path: '/', component: Home, Layout:Home },
    { path: '/login', component: Login, Layout:Login },
    { path: '/quanlidanhmuc', component: Quanlidanhmuc, Layout: Quanlidanhmuc },
    { path: '/quanlidanhmuc/create', component: CreateDanhMuc, Layout: CreateDanhMuc },
    { path: '/quanlinhanhieu', component: Quanlinhanhieu, Layout: Quanlinhanhieu },
    { path: '/quanlinhanhieu/create', component: CreateNhanHieu, Layout: CreateNhanHieu },
    { path: '/quanlisanpham', component: Quanlisanpham, Layout: Quanlisanpham },
    { path: '/quanlisanpham/create', component: CreateSanPham, Layout: CreateSanPham },
    { path: '/quanlidonhang', component: Quanlidonhang, Layout: Quanlidonhang },
    { path: '/quanlidonhang/chitietdonhang', component: ChiTietDOnHang, Layout: ChiTietDOnHang },
    { path: '/quanlibanner', component: Quanlibanner, Layout: Quanlibanner },
    { path: '/quanlinguoidung', component: Quanlinguoidung, Layout: Quanlinguoidung },

];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
