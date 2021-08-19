import { useState } from 'react';
import { useAnimationn } from './useAnimaton';


export const useSliderImage = () => {
    const [currentImage, setCurrentImage] = useState({
        currentUrl: 'https://demo.directorist.com/plugin/demo-one/wp-content/uploads/2021/04/apple-1873078_640.jpg',
        currentIndex: 0
    });
    const { animation, setAnimation } = useAnimationn();



    const changeImage = (url: string, index: number): void => {
        setAnimation(true);
        setCurrentImage({
            currentUrl: url,
            currentIndex: index
        });
    }
    const changeNextImage = () => {
        setAnimation(true);

        setCurrentImage({
            currentIndex: currentImage.currentIndex + 1,
            currentUrl: `https://picsum.photos/id/${currentImage.currentIndex}/900/1024`
        })
    }
    const changePrevImage = () => {
        setAnimation(true);

        setCurrentImage({
            currentIndex: currentImage.currentIndex - 1,
            currentUrl: `https://picsum.photos/id/${currentImage.currentIndex}/900/1024`
        });
    }

    return {
        changeImage,
        changeNextImage,
        changePrevImage,
        currentImage,
        //? animation state
        animation,
        setAnimation
    };
};
