import { createSlice } from '@reduxjs/toolkit';

import imgSm from '/src/assets/images/organicFashion/ORGANIC_375.jpg';
import imgMd from '/src/assets/images/organicFashion/ORGANIC_992.jpg';
import imgLg from '/src/assets/images/organicFashion/ORGANIC_1366.jpg';
import imgXl from '/src/assets/images/organicFashion/ORGANIC_1920.jpg';

const initialState = {
  title: 'ORGANIC FASHION',
  text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
  when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
  buttonText: 'SHOP NOW',
  images: {
    sm: imgSm,
    md: imgMd,
    lg: imgLg,
    xl: imgXl,
  },
};

const organicFashionSlice = createSlice({
  name: 'organicFashion',
  initialState,
  reducers: {},
});

export default organicFashionSlice.reducer;
