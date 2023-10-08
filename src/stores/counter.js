import { ref } from 'vue';
import { defineStore } from 'pinia'

export const menuStore = defineStore('menu', () => {

  const menu = ref([
    { name: 'เซ็ตเอี๊ยมกระโปรง', img: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fpantip.com%2Ftopic%2F31184411&psig=AOvVaw0EKo1rrYp1tRi0llp-Dsav&ust=1696868203793000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCIjz0uns5oEDFQAAAAAdAAAAABAH', price: 149 },
    { name: 'เดรสขาว', img: 'https://www.google.com/url?sa=i&url=http%3A%2F%2Fwww.dreamshopbysiwa.com%2Fproduct%2F112%2Fsiwa082-%25E0%25B8%258A%25E0%25B8%25B8%25E0%25B8%2594%25E0%25B9%2580%25E0%25B8%2594%25E0%25B8%25A3%25E0%25B8%25AA%25E0%25B8%25A5%25E0%25B8%25B9%25E0%25B8%2581%25E0%25B9%2584%25E0%25B8%25A1%25E0%25B9%2589&psig=AOvVaw1anSNqSRWhECY9k2QA57OU&ust=1696868313235000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCLjLuJ7t5oEDFQAAAAAdAAAAABAE', price: 129 },
    { name: 'เซ็ตทำงาน', img: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Ftubtimbeautyplus.com%2Fproduct%2F%25E0%25B8%258A%25E0%25B8%25B8%25E0%25B8%2594%25E0%25B9%2580%25E0%25B8%2594%25E0%25B8%25A3%25E0%25B8%25AA%25E0%25B8%25AA%25E0%25B8%25B5%25E0%25B8%258A%25E0%25B8%25A1%25E0%25B8%259E%25E0%25B8%25B9-%25E0%25B8%2587%25E0%25B8%25B2%25E0%25B8%2599%25E0%25B9%2580%25E0%25B8%2581%25E0%25B8%25B2%25E0%25B8%25AB%25E0%25B8%25A5%25E0%25B8%25B5%2F&psig=AOvVaw30MycDGSPSbssDAhwZ77nk&ust=1696868424349000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCJjF5NLt5oEDFQAAAAAdAAAAABAJ', price: 199 },
    { name: 'เดรสชมพู', img: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Ftubtimbeautyplus.com%2Fproduct%2Fhigh-quality-french-dress-%25E0%25B9%2580%25E0%25B8%2594%25E0%25B8%25A3%25E0%25B8%25AA%25E0%25B8%258A%25E0%25B8%25A1%25E0%25B8%259E%25E0%25B8%25B9%25E0%25B8%25AA%25E0%25B9%2584%25E0%25B8%2595%25E0%25B8%25A5%25E0%25B9%258C%25E0%25B8%259D%25E0%25B8%25A3%25E0%25B8%25B1%25E0%25B9%2588%25E0%25B8%2587%25E0%25B9%2580%2F&psig=AOvVaw1anSNqSRWhECY9k2QA57OU&ust=1696868313235000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCLjLuJ7t5oEDFQAAAAAdAAAAABAJ', price: 169 },
    { name: 'เซ็ตเที่ยวคาเฟ่', img: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.lazada.co.th%2Fproducts%2Flaz-nigori-2022-i4238364523.html&psig=AOvVaw30MycDGSPSbssDAhwZ77nk&ust=1696868424349000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCJjF5NLt5oEDFQAAAAAdAAAAABAE', price: 119 },


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
