import React from 'react';

const ClothingFilter = ({ clothing, setShowClothes, checkedTshirt, checkedPants, checkedShoe, setCheckedTshirt, setCheckedPants, setCheckedShoe }) => {
    const filterClothes = (description) => {
        const newClothing = clothing.filter((cloth) => cloth.description === description);
        setShowClothes(prevClothes => [...prevClothes, ...newClothing]);
    }

    const handleChange = (e) => {
        const { checked, value } = e.target;
        setShowClothes([]);

        if (checked) {
            filterClothes(value);
            if (checkedPants) filterClothes('Pantalones');
            if (checkedShoe) filterClothes('Zapatillas');
        } else {
            if (!checkedPants && !checkedShoe) {
                setShowClothes(clothing);
            } else {
                if (checkedPants) filterClothes('Pantalones');
                if (checkedShoe) filterClothes('Zapatillas');
            }
        }

        switch (value) {
            case 'Remeras':
                setCheckedTshirt(checked);
                break;
            case 'Pantalones':
                setCheckedPants(checked);
                break;
            case 'Zapatillas':
                setCheckedShoe(checked);
                break;
            default:
                return;
        }
    }

    // return ()
}

export default ClothingFilter;