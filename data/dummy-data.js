import Garbages from "../models/Garbages";
import { Category } from "../constants/GarbageInfo";

export const GARBAGES = [
    new Garbages('c1', 'Bottles', 'https://www.decor.com.au/wp-content/uploads/2022/07/264500-Thirst-Tritan-Bottle-1.5L-Blue-Angled-550x487.jpg', Category.recycle),
    new Garbages('c2', 'Papers', "https://www.collinsdictionary.com/images/full/paper_111691001.jpg", Category.recycle),
    new Garbages('c3', 'Meat', "https://cdn-icons-png.flaticon.com/512/1046/1046769.png", Category.general),
    new Garbages('c4', 'Vegetable', "https://www.freeiconspng.com/thumbs/vegetable-icon-png/vegetable-icon-png-23.png", Category.recycle),
];