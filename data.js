const VINHOMES_DATA = {

    // ----------------------------------------------------------
    // BẢNG CĂN HỘ (CANHO)
    // ----------------------------------------------------------
    canho: [
        { ma:'CH001', loai:'Studio',      dt:42.50,  dc:'Tầng 6, Tòa S1.01 - Vinhomes Ocean Park, Gia Lâm',             gia:18500000,  tt:'Đang cho thuê' },
        { ma:'CH002', loai:'2 phòng ngủ', dt:75.00,  dc:'Tầng 38, Tòa S2.03 - Vinhomes Ocean Park, Gia Lâm',            gia:32500000,  tt:'Trống' },
        { ma:'CH003', loai:'3 phòng ngủ', dt:105.50, dc:'Tầng 40, Tòa S3.05 - Vinhomes Ocean Park, Gia Lâm',            gia:48000000,  tt:'Đang cho thuê' },
        { ma:'CH004', loai:'Studio',      dt:48.00,  dc:'Tầng 6, Tòa Grand The Park - Vinhomes Smart City, Nam Từ Liêm', gia:22500000,  tt:'Trống' },
        { ma:'CH005', loai:'2 phòng ngủ', dt:82.30,  dc:'Tầng 34, Tòa Sapphire 2 - Vinhomes Smart City, Nam Từ Liêm',   gia:35000000,  tt:'Đang cho thuê' },
        { ma:'CH006', loai:'3 phòng ngủ', dt:110.00, dc:'Tầng 72, Tòa The Tonkin - Vinhomes Smart City, Nam Từ Liêm',   gia:52000000,  tt:'Đang cho thuê' },
        { ma:'CH007', loai:'Studio',      dt:38.50,  dc:'Tầng 20, Tòa West Point - Nam Từ Liêm',                         gia:19800000,  tt:'Trống' },
        { ma:'CH008', loai:'2 phòng ngủ', dt:78.00,  dc:'Tầng 23, Tòa Lumi Hanoi - Vinhomes Smart City',                gia:34000000,  tt:'Đang cho thuê' },
        { ma:'CH009', loai:'3 phòng ngủ', dt:98.50,  dc:'Tầng 28, Tòa Melody Residence - Hoàng Mai',                    gia:42000000,  tt:'Trống' },
        { ma:'CH010', loai:'Studio',      dt:45.00,  dc:'Tầng 36, Tòa MIPEC Rubik 360 - Hà Đông',                       gia:21000000,  tt:'Đang cho thuê' },
        { ma:'CH011', loai:'2 phòng ngủ', dt:70.50,  dc:'Tầng 35, Tòa The Matrix Premium - Mễ Trì',                     gia:29500000,  tt:'Đang cho thuê' },
        { ma:'CH012', loai:'3 phòng ngủ', dt:120.00, dc:'Tầng 27, Tòa Hinode Royal Park - Hoài Đức',                    gia:55000000,  tt:'Trống' },
        { ma:'CH013', loai:'Studio',      dt:52.00,  dc:'Tầng 8, Tòa Ocean Park 2 - Gia Lâm',                            gia:23000000,  tt:'Trống' },
        { ma:'CH014', loai:'2 phòng ngủ', dt:85.00,  dc:'Tầng 10, Tòa Smart City Central - Nam Từ Liêm',                gia:36500000,  tt:'Đang cho thuê' },
        { ma:'CH015', loai:'3 phòng ngủ', dt:115.50, dc:'Tầng 68, Tòa Vinhomes West Point - Nam Từ Liêm',               gia:49000000,  tt:'Đang cho thuê' },
    ],

    // BẢNG KHÁCH HÀNG (KHACHHANG)
    khachhang: [
        { ma:'KH001', ten:'Nguyễn Thị Lan Anh',   gt:'Nữ',  sdt:'0987654321', dc:'12 Ngõ 45 Trần Cung, Bắc Từ Liêm, Hà Nội' },
        { ma:'KH002', ten:'Trần Minh Quân',        gt:'Nam', sdt:'0912345678', dc:'Phòng 1508, CT1 Mỹ Đình, Nam Từ Liêm' },
        { ma:'KH003', ten:'Lê Thị Thu Hà',         gt:'Nữ',  sdt:'0978123456', dc:'25 Nguyễn Khang, Cầu Giấy, Hà Nội' },
        { ma:'KH004', ten:'Phạm Hoàng Nam',        gt:'Nam', sdt:'0933456789', dc:'78 Hoàng Quốc Việt, Cầu Giấy' },
        { ma:'KH005', ten:'Vũ Thị Ngọc Mai',       gt:'Nữ',  sdt:'0909876543', dc:'112 Xuân Thủy, Cầu Giấy, Hà Nội' },
        { ma:'KH006', ten:'Đặng Văn Hùng',         gt:'Nam', sdt:'0965123789', dc:'Tòa CT2, Vinhomes Ocean Park, Gia Lâm' },
        { ma:'KH007', ten:'Hoàng Thị Phương Linh', gt:'Nữ',  sdt:'0945678901', dc:'45 Lê Văn Lương, Thanh Xuân' },
        { ma:'KH008', ten:'Nguyễn Anh Tuấn',       gt:'Nam', sdt:'0987123456', dc:'67 Phạm Hùng, Nam Từ Liêm' },
        { ma:'KH009', ten:'Trần Thị Kim Oanh',     gt:'Nữ',  sdt:'0918765432', dc:'89 Giải Phóng, Hoàng Mai' },
        { ma:'KH010', ten:'Lê Quang Huy',          gt:'Nam', sdt:'0932987654', dc:'34 Đại lộ Thăng Long, Nam Từ Liêm' },
    ],

    // BẢNG NHÂN VIÊN (NHANVIEN) — Đã cập nhật 6 người theo SQL
    nhanvien: [
        { ma: 'NV001', ten: 'Vũ Thị Ngọc Mai',   gt: 'Nữ',  sdt: '0901234567', cv: 'Nhân viên kinh doanh' },
        { ma: 'NV002', ten: 'Lê Văn Hải',        gt: 'Nam', sdt: '0918765432', cv: 'Quản lý cho thuê' },
        { ma: 'NV003', ten: 'Hoàng Thị Phương',  gt: 'Nữ',  sdt: '0987654320', cv: 'Nhân viên tư vấn' },
        { ma: 'NV004', ten: 'Phạm Minh Đức',     gt: 'Nam', sdt: '0934567890', cv: 'Nhân viên hỗ trợ' },
        { ma: 'NV005', ten: 'Nguyễn Thị Hương',  gt: 'Nữ',  sdt: '0978123450', cv: 'Chuyên viên hợp đồng' },
        { ma: 'NV006', ten: 'Trần Quang Vinh',   gt: 'Nam', sdt: '0909876540', cv: 'Quản lý khu vực' }
    ],


    //BẢNG HỢP ĐỒNG (HOPDONG)

    hopdong: [
        { ma:'HD001', makh:'KH001', manv:'NV001', ngayky:'2026-01-15', tt:'Đã ký' },
        { ma:'HD002', makh:'KH002', manv:'NV002', ngayky:'2025-09-20', tt:'Đã hết thời hạn' },
        { ma:'HD003', makh:'KH003', manv:'NV001', ngayky:'2026-03-10', tt:'Đã ký' },
        { ma:'HD004', makh:'KH004', manv:'NV003', ngayky:'2026-03-25', tt:'Đã huỷ' },
        { ma:'HD005', makh:'KH005', manv:'NV002', ngayky:'2026-04-05', tt:'Đã huỷ' },
        { ma:'HD006', makh:'KH002', manv:'NV004', ngayky:'2026-03-12', tt:'Đã ký' },
        { ma:'HD007', makh:'KH001', manv:'NV005', ngayky:'2026-10-06', tt:'Đã ký' },
        { ma:'HD008', makh:'KH008', manv:'NV005', ngayky:'2026-10-20', tt:'Đã ký' },
    ],

    //BẢNG CHI TIẾT HỢP ĐỒNG (CHITIETHOPDONG)

    chitiet: [
        { mahd:'HD001', mach:'CH001', ngaybd:'2026-05-01', ngaykt:'2026-10-30', gia:62000000,  tt:'Đã bàn giao' },
        { mahd:'HD001', mach:'CH005', ngaybd:'2026-05-05', ngaykt:'2027-05-05', gia:268000000, tt:'Chờ bàn giao' },
        { mahd:'HD002', mach:'CH002', ngaybd:'2025-10-06', ngaykt:'2026-04-05', gia:13000000,  tt:'Đã hết thời hạn hợp đồng' },
        { mahd:'HD002', mach:'CH006', ngaybd:'2026-02-10', ngaykt:'2026-05-09', gia:192000000, tt:'Đã bàn giao' },
        { mahd:'HD003', mach:'CH008', ngaybd:'2027-03-16', ngaykt:'2027-09-15', gia:125000000, tt:'Đã bàn giao' },
        { mahd:'HD003', mach:'CH010', ngaybd:'2026-09-04', ngaykt:'2027-03-03', gia:65000000,  tt:'Đã bàn giao' },
        { mahd:'HD003', mach:'CH005', ngaybd:'2026-06-10', ngaykt:'2027-11-09', gia:140500000, tt:'Đã huỷ' },
        { mahd:'HD004', mach:'CH001', ngaybd:'2026-12-12', ngaykt:'2027-12-11', gia:140000000, tt:'Đã bàn giao' },
        { mahd:'HD004', mach:'CH014', ngaybd:'2026-06-01', ngaykt:'2026-11-30', gia:148000000, tt:'Đã bàn giao' },
        { mahd:'HD005', mach:'CH015', ngaybd:'2026-08-18', ngaykt:'2026-11-18', gia:116000000, tt:'Chờ bàn giao' },
        { mahd:'HD006', mach:'CH003', ngaybd:'2027-03-16', ngaykt:'2027-09-15', gia:150000000, tt:'Đã bàn giao' },
        { mahd:'HD006', mach:'CH004', ngaybd:'2026-05-01', ngaykt:'2026-10-30', gia:130000000, tt:'Đã huỷ' },
        { mahd:'HD007', mach:'CH011', ngaybd:'2026-11-06', ngaykt:'2027-05-05', gia:120500000, tt:'Đã bàn giao' },
        { mahd:'HD008', mach:'CH015', ngaybd:'2026-11-22', ngaykt:'2027-11-21', gia:450000000, tt:'Đã bàn giao' },
    ]
};
