import { createSlice } from '@reduxjs/toolkit';

import img1 from '/src/assets/images/shopByCategories/ShopByCategories1.jpg';
import img2 from '/src/assets/images/shopByCategories/ShopByCategories2.jpg';
import img3 from '/src/assets/images/shopByCategories/ShopByCategories3.jpg';
import img4 from '/src/assets/images/shopByCategories/ShopByCategories4.jpg';
import img5 from '/src/assets/images/shopByCategories/ShopByCategories5.jpg';

const initialState = {
  title: 'SHOP BY CATEGORIES',
  images: {
    1: img1,
    2: img2,
    3: img3,
    4: img4,
    5: img5,
  },
};

const shopByCategoriesSlice = createSlice({
  name: 'shopByCategories',
  initialState,
  reducers: {},
});

export default shopByCategoriesSlice.reducer;
