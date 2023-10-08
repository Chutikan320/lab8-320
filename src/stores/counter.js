import { ref } from 'vue';
import { defineStore } from 'pinia'

export const menuStore = defineStore('menu', () => {

  const menu = ref([
    { name: 'เซ็ตเอี๊ยมกระโปรง', img: 'https://aws.cmzimg.com/upload/10103/product-images/8821-3/996c9b0c.jpg', price: 149 },
    { name: 'เดรสขาว', img: 'https://jelly-site.s3.amazonaws.com/uploads/ckeditor/pictures/16544/content_4fc32f31be7aca8e6c13562616afb930.jpg', price: 129 },
    { name: 'เซ็ตทำงาน', img: 'https://www.glamgirl.asia/wp-content/uploads/2017/10/%E0%B8%8A%E0%B8%B8%E0%B8%94%E0%B8%97%E0%B9%8D%E0%B8%B2%E0%B8%87%E0%B8%B2%E0%B8%99%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B8%AB%E0%B8%8D%E0%B8%B4%E0%B8%8756.jpg', price: 199 },
    { name: 'เดรสชมพู', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMzj_2QvFXpUZK7-xgpbPmg3z8WjYhEuOYLQrFDoZqYeKGOtXDBVTRXejrwa5mPtNJjlc&usqp=CAU', price: 169 },
    { name: 'เซ็ตเที่ยวคาเฟ่', img: 'https://cf.shopee.co.th/file/7aa1c056dfc0e517a2679ca355950988', price: 119 },


  ]);
  
  
  return { menu}
})
export const useCartStore = defineStore({
  id: 'cart',
  state: () => ({
    cartList: [], 
    orderList:[],
  }),
  actions: {
    addToCart(item) {
      this.cartList.push(item);
    },
    addOrderList() {
      // เพิ่มค่าลงไปใน orderList
      this.orderList.push(...this.cartList);
    
     this.cartList = [];
    },

  },
});
