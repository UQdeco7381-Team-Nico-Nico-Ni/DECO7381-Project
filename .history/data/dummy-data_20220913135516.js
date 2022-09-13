import Garbages from "../models/Garbages";
import { Category, Difficulty } from "../constants/GarbageInfo";

export const GARBAGES = [
    new Garbages('c1', 'Bottles', 'https://www.decor.com.au/wp-content/uploads/2022/07/264500-Thirst-Tritan-Bottle-1.5L-Blue-Angled-550x487.jpg', Category.recycle, Difficulty.Easy),
    new Garbages('c2', 'Papers', "https://www.collinsdictionary.com/images/full/paper_111691001.jpg", Category.recycle, Difficulty.Easy),
    new Garbages('c3', 'Meat', "https://cdn-icons-png.flaticon.com/512/1046/1046769.png", Category.general, Difficulty.Normal),
    new Garbages('c4', 'Vegetable', "https://www.kindpng.com/picc/m/151-1515169_veg-icon-png-dark-green-vegetables-clipart-transparent.png", Category.recycle, Difficulty.Hard),
];