import {Monster} from '../models/Monster';
export const MOSTER: Array<Monster> = [
    { 
        id: 11, 
        name: 'Moster loại sản phẩm là một trong những sản phẩm hay và chất lượng', 
        img: "https://image.thanhnien.vn/1080/uploaded/baont/2021_01_28/monstergam2_wqwf.jpg",
        detail: "Trước tòa, tên hàng xóm khai rằng thực ra hắn không ghét con chó.",
        sells: [
            {
                id: 1,
                name: "java"
            },
            {
                id: 2,
                name: "C-sharp"
            }
        ]
    },
    { 
        id: 12, 
        name: ' Thú cưng là một trong những con vật được mọi thứ .', 
        img: "https://image.thanhnien.vn/1080/uploaded/baont/2021_01_28/monstergam2_wqwf.jpg",
        detail: "Trước tòa, tên hàng xóm khai rằng thực ra hắn không ghét con chó.",
        sells: [
            {
                id: 3,
                name: "uống bia"
            },
            {
                id: 4,
                name: "html"
            }
        ] 
    },
    { 
        id: 13, 
        name: 'Trần Việt Dũng', 
        img: "https://image.thanhnien.vn/1080/uploaded/baont/2021_01_28/monstergam2_wqwf.jpg",
        detail: "Trước tòa, tên hàng xóm khai rằng thực ra hắn không ghét con chó."
    }
];