
import { faker } from "@faker-js/faker";
export default (count) => {
    let data = [];
    for (let i = 0; i < count; i++) {
        const fake = {
ProductID: faker.datatype.number(10001),
ProductName: faker.commerce.product(),
ProductImage: faker.image.imageUrl(),
price: faker.commerce.price(),

        };
        data = [...data, fake];
    }
    return data;
};
